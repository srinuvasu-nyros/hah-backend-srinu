const NotificationTypes = {
  'leader_request': {
    id: 'leader_request',
    label: 'Leader Request',
    title: 'New Leader Request'
  },
  'event_request': {
    id: 'event_request',
    label: 'Event Request',
    title: 'New Event Request'
  },
}

const RequestStatusTypes = {
  'pending': {
    id: 'pending',
    label: 'Pending',
  },
  'approved': {
    id: 'approved',
    label: 'Approved',
  },
  'rejected': {
    id: 'rejected',
    label: 'Rejected',
  },
}

const EventLiveChurchesAllowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'video/x-msvideo', 'video/mp4', 'video/mpeg', 'video/ogg', 'video/mp2t', 'video/webm', 'video/webm', 'video/3gpp'];

const LibrariesAllowedMimeTypes = ['application/pdf', 'video/x-msvideo', 'video/mp4', 'video/mpeg', 'video/ogg', 'video/mp2t', 'video/webm', 'video/webm', 'video/3gpp', 'audio/aac', 'audio/midi', 'audio/x-midi', 'audio/mpeg', 'audio/ogg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/3gpp', 'audio/3gpp2'];

module.exports = Object.freeze({
  NotificationTypes,
  RequestStatusTypes,
  EventLiveChurchesAllowedMimeTypes
})