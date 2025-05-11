import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNetflixIcon],svg[streamline-netflix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.504.791H2.512l5.236 11.53l3.74.888L5.504.79Z"></svg:path><svg:path d="M2.512.791v12.418l2.618-.887V6.547m6.359 6.662V.79H8.871v6.982"></svg:path></svg:g>`,
})
export class StreamlineNetflixIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNetflixSolidIcon],svg[streamline-netflix-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.625 13.212V2.793l3.4 7.488v1.967a.5.5 0 0 1-.314.464l-2.4.964a.5.5 0 0 1-.686-.464m10.75-12.7v10.825l-3.4-7.055V.512a.5.5 0 0 1 .5-.5h2.4a.5.5 0 0 1 .5.5M2.125.265h3.25l6.5 13.489l-4.063-.964L2.125.266Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNetflixSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNetworkIcon],svg[streamline-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 10.5v3m-5 0h10m-5-3a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-5-5h10"></svg:path><svg:path d="M7 10.5c3-3.42 3-6.76 0-10c-2.94 3.12-3 6.44 0 10"></svg:path></svg:g>`,
})
export class StreamlineNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNetworkSolidIcon],svg[streamline-network-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.805 4.487A5.24 5.24 0 0 1 5.597.07c-.899 1.417-1.405 2.89-1.482 4.417zm0 1.25h2.342c.15 1.476.693 2.962 1.61 4.458a5.24 5.24 0 0 1-3.952-4.458m10.39 0a5.24 5.24 0 0 1-3.921 4.45c.926-1.471 1.472-2.956 1.61-4.45zM7.01 9.838c.944-1.407 1.473-2.773 1.618-4.101H5.405c.156 1.308.678 2.673 1.605 4.101M5.367 4.487H8.65C8.549 3.079 8.01 1.662 6.997.23c-1.01 1.41-1.544 2.825-1.63 4.256Zm6.827 0h-2.29C9.81 2.977 9.298 1.503 8.39.067a5.24 5.24 0 0 1 3.803 4.42ZM6.25 11.55v.896H2a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7.75v-.896a6.6 6.6 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNetworkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNewFileIcon],svg[streamline-new-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"></svg:path><svg:path d="M8.5.5v4h4"></svg:path></svg:g>`,
})
export class StreamlineNewFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNewFileSolidIcon],svg[streamline-new-file-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.875 0H2.5A1.5 1.5 0 0 0 1 1.5v11A1.5 1.5 0 0 0 2.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5.125H8.5a.625.625 0 0 1-.625-.625zm4.707 3.875L9.125.418v3.457z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNewFileSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNewFolderIcon],svg[streamline-new-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 12.25V1.75a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1"></svg:path>`,
})
export class StreamlineNewFolderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNewFolderSolidIcon],svg[streamline-new-folder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.127.805A1.5 1.5 0 0 0 5.183.5H1.5A1.5 1.5 0 0 0 0 2v10a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 14 12V4a1.5 1.5 0 0 0-1.5-1.5H6.89l-.215-.86a1.5 1.5 0 0 0-.548-.835"></svg:path>`,
})
export class StreamlineNewFolderSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNewStickyNoteIcon],svg[streamline-new-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9 13.5H1.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1V9z"></svg:path><svg:path d="M9 9.5v4L13.5 9h-4a.5.5 0 0 0-.5.5"></svg:path></svg:g>`,
})
export class StreamlineNewStickyNoteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNewStickyNoteSolidIcon],svg[streamline-new-sticky-note-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.375 14H1.5A1.5 1.5 0 0 1 0 12.5v-11A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v6.875H9A.625.625 0 0 0 8.375 9zm1.25-.625l3.75-3.75h-3.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNewStickyNoteSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNewsPaperIcon],svg[streamline-news-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 4.5V11a1.25 1.25 0 0 1-2.5 0V2.25a.5.5 0 0 0-.5-.5H1a.5.5 0 0 0-.5.5v9a1 1 0 0 0 1 1h10.75"></svg:path><svg:path d="M8 4.25H3.5v2.5H8zm-4.5 5.5H8"></svg:path></svg:g>`,
})
export class StreamlineNewsPaperIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNewsPaperSolidIcon],svg[streamline-news-paper-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.25a1 1 0 0 0-1 1v9a1.5 1.5 0 0 0 1.5 1.5h10.75A1.75 1.75 0 0 0 14 11V4.5a.5.5 0 0 0-.5-.5h-.981v6.459a.625.625 0 1 1-1.25 0V2.25a1 1 0 0 0-1-1zm1.787 2.787a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5h-4.5a.5.5 0 0 1-.5-.5zM2.662 9.75c0-.345.28-.625.625-.625h4.5a.625.625 0 1 1 0 1.25h-4.5a.625.625 0 0 1-.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNewsPaperSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNextIcon],svg[streamline-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7h10M7 10.5L10.5 7L7 3.5m6.5 0v7"></svg:path>`,
})
export class StreamlineNextIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNextSolidIcon],svg[streamline-next-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 2.5a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1M6 8.25H1.25a1.25 1.25 0 1 1 0-2.5H6V3.707a.5.5 0 0 1 .854-.353l3.292 3.292a.5.5 0 0 1 0 .708l-3.292 3.292A.5.5 0 0 1 6 10.293z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNextSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNintendoSwitchIcon],svg[streamline-nintendo-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.04.5H3.584a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3H6.04z"></svg:path><svg:path d="M2.289 4.479a1.023 1.023 0 1 0 2.046 0a1.023 1.023 0 1 0-2.046 0M7.96 13.5h2.455a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3H7.96z"></svg:path><svg:path d="M11.71 8.565a1.023 1.023 0 1 0-2.046 0a1.023 1.023 0 1 0 2.046 0"></svg:path></svg:g>`,
})
export class StreamlineNintendoSwitchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNintendoSwitchSolidIcon],svg[streamline-nintendo-switch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.415 14a3.5 3.5 0 0 0 3.5-3.5v-7a3.5 3.5 0 0 0-3.5-3.5H8.242a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5zm.272-3.912a1.523 1.523 0 1 0 0-3.047a1.523 1.523 0 0 0 0 3.047M3.528 0a3.5 3.5 0 0 0-3.5 3.5v7a3.5 3.5 0 0 0 3.5 3.5h2.173a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zm-.272 3.147a1.523 1.523 0 1 0 0 3.047a1.523 1.523 0 0 0 0-3.047" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNintendoSwitchSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNoPovertyIcon],svg[streamline-no-poverty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.8 2.501a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0-3.6 0m4.5 6.3v-.9a2.7 2.7 0 0 0-5.063-1.307M1.6 2.501a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0-3.6 0m-.9 6.3v-.9a2.7 2.7 0 0 1 5.063-1.307"></svg:path><svg:path d="M5.201 7.899a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0-3.6 0m4.5 5.4a2.7 2.7 0 0 0-5.4 0"></svg:path></svg:g>`,
})
export class StreamlineNoPovertyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNoPovertySolidIcon],svg[streamline-no-poverty-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.164 4.462a1.715 1.715 0 1 0 0-3.431a1.715 1.715 0 0 0 0 3.43Zm7.672 0a1.715 1.715 0 1 0 0-3.431a1.715 1.715 0 0 0 0 3.43Zm0 .357a3.06 3.06 0 0 0-1.898.656a2.96 2.96 0 0 1 .95 2.917h3.521a.5.5 0 0 0 .5-.5a3.073 3.073 0 0 0-3.073-3.073m-7.672 0a3.06 3.06 0 0 1 1.898.656a2.96 2.96 0 0 0-.95 2.917H.59a.5.5 0 0 1-.5-.5A3.073 3.073 0 0 1 3.164 4.82ZM7 9.435a1.715 1.715 0 1 0 0-3.43a1.715 1.715 0 0 0 0 3.43m-3.073 3.43a3.073 3.073 0 1 1 6.146 0a.5.5 0 0 1-.5.5H4.427a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNoPovertySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNotEqualSignIcon],svg[streamline-not-equal-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.75 4.5h12.5m-12.5 5h12.5m-9.75 4l7-13"></svg:path>`,
})
export class StreamlineNotEqualSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNotEqualSignSolidIcon],svg[streamline-not-equal-sign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.705.12a1 1 0 0 1 .406 1.354L10.021 3.5H13a1 1 0 1 1 0 2H8.943l-1.615 3H13a1 1 0 1 1 0 2H6.251L4.65 13.474a1 1 0 1 1-1.761-.948l1.09-2.026H1a1 1 0 1 1 0-2h4.057l1.615-3H1a1 1 0 0 1 0-2h6.749L9.35.526A1 1 0 0 1 10.705.12" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNotEqualSignSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationAlarm2Icon],svg[streamline-notification-alarm-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.75 5.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M9.933 8v1.534c0 .39.155.766.432 1.042c.276.277.744.432 1.135.432H.5c.391 0 .859-.155 1.135-.432a1.47 1.47 0 0 0 .432-1.042V5.933A3.933 3.933 0 0 1 6 2M5 13.5h2"></svg:path>`,
})
export class StreamlineNotificationAlarm2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationAlarm2SolidIcon],svg[streamline-notification-alarm-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.25 2.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M7.46.697a4.603 4.603 0 0 0-5.937 4.407v3.373a.695.695 0 0 1-.695.695a.75.75 0 0 0 0 1.5h10.599a.75.75 0 1 0 0-1.5a.695.695 0 0 1-.695-.695V6.25A3.75 3.75 0 0 1 7.46.697M4.378 12.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNotificationAlarm2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationApplication1Icon],svg[streamline-notification-application-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 2.5H2.5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V8M11 5.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class StreamlineNotificationApplication1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationApplication1SolidIcon],svg[streamline-notification-application-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-12 0h5.75a3.75 3.75 0 0 0 3.75 3.75V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNotificationApplication1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationApplication2Icon],svg[streamline-notification-application-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 2.5h-4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3m-2-8v3"></svg:path><svg:path d="M9.5 6.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineNotificationApplication2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationApplication2SolidIcon],svg[streamline-notification-application-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.648.024c.483 0 .875.392.875.875v2.5a.875.875 0 0 1-1.75 0v-2.5c0-.483.392-.875.875-.875m-1 5.875a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-1-2.5V2.5H2a2 2 0 0 0-2 2V12a2 2 0 0 0 2 2h7.5a2 2 0 0 0 2-2V7.784a2.068 2.068 0 0 1-2.456-3.19a2 2 0 0 1-.396-1.195" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNotificationApplication2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationMessageAlertIcon],svg[streamline-notification-message-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 2.5V4m0 2.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path><svg:path d="M9.5.5a4 4 0 0 0-4 4a4.2 4.2 0 0 0 .32 1.58L5 8l2.14-.27A4 4 0 1 0 9.5.5"></svg:path><svg:path d="M5 .5H1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2m-5 .5h1"></svg:path></svg:g>`,
})
export class StreamlineNotificationMessageAlertIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationMessageAlertSolidIcon],svg[streamline-notification-message-alert-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 1.5a.25.25 0 0 0-.25.25v10.489a.5.5 0 0 0 .123.148a.8.8 0 0 0 .179.113H8.25a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 8.25 14h-6.5a1.4 1.4 0 0 1-.602-.15c-.17-.08-.342-.19-.498-.322c-.289-.246-.65-.686-.65-1.278V1.75C0 .784.784 0 1.75 0H5a.75.75 0 0 1 0 1.5zM10 0a4 4 0 0 0-4 4a4.2 4.2 0 0 0 .32 1.58l-.683 1.6a.2.2 0 0 0 .21.276L7.64 7.23A4 4 0 1 0 10 0m0 1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 1 1-1 0V2a.5.5 0 0 1 .5-.5m.75 4a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0M4.5 9.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNotificationMessageAlertSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNurseAssistantEmergencyIcon],svg[streamline-nurse-assistant-emergency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.031 5.531a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m4.407 1.5a.5.5 0 0 0-.5.5v1.407H7.53a.5.5 0 0 0-.5.5v1.624a.5.5 0 0 0 .5.5h1.407v1.407a.5.5 0 0 0 .5.5h1.624a.5.5 0 0 0 .5-.5v-1.406h1.407a.5.5 0 0 0 .5-.5V9.438a.5.5 0 0 0-.5-.5h-1.406V7.53a.5.5 0 0 0-.5-.5H9.437Zm-3.91 5.5H.531v-.542a4.51 4.51 0 0 1 5.116-4.422"></svg:path>`,
})
export class StreamlineNurseAssistantEmergencyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNurseAssistantEmergencySolidIcon],svg[streamline-nurse-assistant-emergency-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m1.406 3.5a.5.5 0 0 0-.5.5v1.906H7a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.906V13.5a.5.5 0 0 0 .5.5h1.625a.5.5 0 0 0 .5-.5v-1.969H13.5a.5.5 0 0 0 .5-.5V9.406a.5.5 0 0 0-.5-.5h-1.969V7a.5.5 0 0 0-.5-.5zM5 7a5 5 0 0 1 2.478.656H7a1.75 1.75 0 0 0-1.75 1.75v1.625c0 .616.318 1.157.798 1.469H.5A.5.5 0 0 1 0 12a5 5 0 0 1 5-5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNurseAssistantEmergencySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNurseHatIcon],svg[streamline-nurse-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 8.5h3M7 7v3m6.5-4.5a21.7 21.7 0 0 0-13 0l2 7h9z"></svg:path><svg:path d="m11.39 5l-1.17-2.8a1 1 0 0 0-1-.7H4.74a1 1 0 0 0-1 .7L2.61 5"></svg:path></svg:g>`,
})
export class StreamlineNurseHatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineNurseHatSolidIcon],svg[streamline-nurse-hat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.21 1.367H4.75a1.5 1.5 0 0 0-1.48 1.03l-.733 1.815a27.9 27.9 0 0 1 8.911-.003l-.759-1.816a1.5 1.5 0 0 0-1.48-1.026Zm4.283 4.54a.493.493 0 0 1 .344.633l-1.766 5.405a1 1 0 0 1-.95.689H2.879a1 1 0 0 1-.95-.69L.163 6.54a.49.49 0 0 1 .344-.632a26.6 26.6 0 0 1 12.986 0ZM5.5 8.243a.625.625 0 0 0 0 1.25h.875v.875a.625.625 0 0 0 1.25 0v-.875H8.5a.625.625 0 1 0 0-1.25h-.875v-.875a.625.625 0 0 0-1.25 0v.875z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNurseHatSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOctopusIcon],svg[streamline-octopus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 9.5c0 2-2.5 2.354-3.854 1c-1.084-1.083-.83-2.267 0-3a4 4 0 1 0-5.292 0c.83.733 1.084 1.917 0 3C3 11.854.5 11.5.5 9.5"></svg:path><svg:path d="M6.25 10.5c-.167 1-1.25 3-3.25 3c-1 0-1.5-.5-1.5-.5m6.25-2.5c.167 1 1.25 3 3.25 3c1 0 1.5-.5 1.5-.5M5.25 5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineOctopusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOctopusSolidIcon],svg[streamline-octopus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a4.5 4.5 0 0 0-2.977 7.875c.337.297.528.66.55 1.024c.021.355-.113.788-.572 1.247c-.558.558-1.35.757-1.978.623a1.32 1.32 0 0 1-.734-.407C1.119 10.168 1 9.89 1 9.5a.5.5 0 0 0-1 0v.828c0 .844.299 1.618.796 2.223a.6.6 0 0 1 .28.156l.003.004a1.5 1.5 0 0 0 .274.176c.213.106.552.222 1.022.222c1.505 0 2.525-1.24 2.963-2.34a.625.625 0 0 1 1.161.462c-.34.857-1.048 1.956-2.149 2.597h5.3c-1.101-.641-1.808-1.74-2.15-2.597a.625.625 0 1 1 1.162-.462c.438 1.1 1.458 2.34 2.963 2.34c.47 0 .809-.116 1.021-.223a1.5 1.5 0 0 0 .275-.175l.003-.004a.6.6 0 0 1 .28-.156A3.5 3.5 0 0 0 14 10.328V9.5a.5.5 0 1 0-1 0c0 .39-.12.668-.289.862c-.173.199-.425.34-.735.407c-.628.134-1.419-.065-1.977-.623c-.46-.46-.593-.892-.572-1.247c.022-.365.213-.727.55-1.024A4.5 4.5 0 0 0 7 0m-.964 5.25a.786.786 0 1 1-1.572 0a.786.786 0 0 1 1.572 0m2.714.786a.786.786 0 1 0 0-1.572a.786.786 0 0 0 0 1.572" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOctopusSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOfficeBuilding1Icon],svg[streamline-office-building-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.461 4.75V1.594c0-.56-.454-1.015-1.015-1.015h-4.79c-.562 0-1.016.454-1.016 1.015v11.827m-1.121 0h4.968M1.64 3.187H4.1M1.64 5.75h3.847m4.993 4.282a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m-3.001 3.389a3.04 3.04 0 0 1 .39-1.46a3.03 3.03 0 0 1 2.611-1.537a3.03 3.03 0 0 1 2.612 1.538c.25.445.385.947.39 1.459"></svg:path>`,
})
export class StreamlineOfficeBuilding1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOfficeBuilding1SolidIcon],svg[streamline-office-building-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.14 1.519c0-.837.678-1.516 1.515-1.516h4.79c.838 0 1.516.679 1.516 1.516v3.488a3.228 3.228 0 0 0-.711 4.828a4.55 4.55 0 0 0-2.1 3.835q0 .17.034.33H1.64l-.048-.002H.766a.75.75 0 0 1 0-1.5h.374V5.622h4.347a.625.625 0 1 0 0-1.25H1.14v-1.35H4.1a.625.625 0 0 0 0-1.25H1.14V1.52Zm11.54 6.21a1.98 1.98 0 1 1-3.96 0a1.98 1.98 0 0 1 3.96 0m-1.98 2.64a3.3 3.3 0 0 0-3.3 3.3a.33.33 0 0 0 .33.331h5.94a.33.33 0 0 0 .33-.33a3.3 3.3 0 0 0-3.3-3.3Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOfficeBuilding1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOfficeWorkerIcon],svg[streamline-office-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.03 4.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M5.716 10.524L5.344 13.5H2.727l-.5-4H.529V8a3.5 3.5 0 0 1 6.942-.634M7.295 9.97c0-.487.395-.882.882-.882h4.412c.487 0 .882.395.882.883v2.647a.88.88 0 0 1-.882.882H8.177a.88.88 0 0 1-.882-.882zm1.881-.882v-.65a1 1 0 0 1 1-1h.412a1 1 0 0 1 1 1v.65"></svg:path></svg:g>`,
})
export class StreamlineOfficeWorkerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOfficeWorkerSolidIcon],svg[streamline-office-worker-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2.045 6v-.03c0-.99.547-1.852 1.355-2.302A3.5 3.5 0 0 0 0 8.5v1a.5.5 0 0 0 .5.5h1l.445 3.562a.5.5 0 0 0 .496.438H4.56a.5.5 0 0 0 .496-.438L5.5 10zm4.382-2.313a.25.25 0 0 0-.25.25v.651h1.413v-.65a.25.25 0 0 0-.25-.25zm-1.75.25v.651c-.763 0-1.382.62-1.382 1.383v2.647c0 .763.619 1.382 1.382 1.382h4.412c.763 0 1.382-.619 1.382-1.382V9.97c0-.763-.618-1.382-1.381-1.382v-.65a1.75 1.75 0 0 0-1.75-1.75h-.913a1.75 1.75 0 0 0-1.75 1.75Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOfficeWorkerSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOkHandIcon],svg[streamline-ok-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.956 13.309a3.8 3.8 0 0 0 1.31-.696c.538-.44.928-.999 1.158-1.61a1.27 1.27 0 0 0-1.31-1.712c.184-.042.36-.126.516-.253c.544-.443.586-1.452.143-1.996a3.8 3.8 0 0 0-3.17-1.398l1.32-3.027A1.415 1.415 0 0 0 8.172.745v0a1.35 1.35 0 0 0-1.648.479c-.991 1.482-2.814 4.488-2.927 6.7c-.157 3.05 0 5.385 0 5.385"></svg:path><svg:path d="M7.16 8.64a1.27 1.27 0 1 0 1.992 1.435a1.27 1.27 0 0 1 .904-.79a1.27 1.27 0 0 1-1.108-.463a1.27 1.27 0 0 0-1.787-.182Z" clip-rule="evenodd"></svg:path><svg:path d="M7.612 5.646c-.256.03-.864.143-1.25.353m-2.822 3c-.895-2.001-.855-5.288-.76-6.99A1.35 1.35 0 0 1 3.955.76a1.415 1.415 0 0 1 1.6 1.228v.799"></svg:path></svg:g>`,
})
export class StreamlineOkHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOkHandSolidIcon],svg[streamline-ok-hand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.938 2.04l-.116.359c-.35.57-.724 1.215-1.07 1.887c-.464.899-.923 1.928-1.186 2.937c-.524-1.967-.483-4.525-.404-5.958A1.35 1.35 0 0 1 3.337.014a1.415 1.415 0 0 1 1.6 1.228zm5.177 7.942c.183-.042.36-.126.515-.253c.544-.443.586-1.452.143-1.996A3.8 3.8 0 0 0 7.67 6.33a4 4 0 0 0-.427.068a2.8 2.8 0 0 0-.68.222a.625.625 0 1 1-.596-1.1c.265-.143.638-.264 1.015-.345c.381-.08.82-.131 1.228-.102l.977-2.03a1.415 1.415 0 0 0-.752-1.872a1.35 1.35 0 0 0-1.649.479c-.99 1.482-3.078 4.752-3.191 6.965a53 53 0 0 0-.025 4.918a.49.49 0 0 0 .492.466H8.81a.9.9 0 0 0 .286-.045a3.8 3.8 0 0 0 1.17-.651a3.8 3.8 0 0 0 1.16-1.61a1.27 1.27 0 0 0-1.31-1.712Zm-3.137 1.137a1.27 1.27 0 0 1 1.97-1.605c.279.342.7.501 1.108.462a1.27 1.27 0 0 0-.904.79a1.27 1.27 0 0 1-2.173.352Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOkHandSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerDragHorizontalIcon],svg[streamline-one-finger-drag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.478 11.832l-.46-2.757a2.573 2.573 0 0 0-2.961-2.114l-2.171.362l-.683-4.09a1.194 1.194 0 0 0-1.374-.98v0c-.65.108-1.09.723-.98 1.374l.894 5.36l-.363.133a1.715 1.715 0 0 0-.643 2.803l.184.19l.954.988M1.75.5L.5 1.75L1.75 3M.5 1.75h3M10.25.5l1.25 1.25L10.25 3m1.25-1.25h-3"></svg:path>`,
})
export class StreamlineOneFingerDragHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerDragHorizontalSolidIcon],svg[streamline-one-finger-drag-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5.5a.5.5 0 0 0-.854-.354l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5A.5.5 0 0 0 2.5 3.5v-1h1a.5.5 0 0 0 0-1h-1zm2.407 3.299l.947 5.86l-.52.188a1.715 1.715 0 0 0-.658 2.799l1 1.045a1 1 0 0 0 .722.309h6.482a1 1 0 0 0 .994-1.113l-.367-3.236a2.573 2.573 0 0 0-2.951-2.13l-2.432.394l-.73-4.519a1.26 1.26 0 0 0-2.487.403m5.402-3.76a.5.5 0 0 1 .545.107l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5A.5.5 0 0 1 10 3.5v-1H9a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 .309-.462Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOneFingerDragHorizontalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerDragVerticalIcon],svg[streamline-one-finger-drag-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5v-2.927A2.573 2.573 0 0 0 10.927 8H8.5V3.75c0-.69-.56-1.25-1.25-1.25v0C6.56 2.5 6 3.06 6 3.75V9l-.707.202a1.715 1.715 0 0 0-.944 2.62L5.5 13.5M.5 2L2 .5L3.5 2m-3 3.5L2 7l1.5-1.5M2 .5V7"></svg:path>`,
})
export class StreamlineOneFingerDragVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerDragVerticalSolidIcon],svg[streamline-one-finger-drag-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.354.146a.5.5 0 0 0-.708 0l-1.5 1.5A.5.5 0 0 0 .5 2.5h.75v2H.5a.5.5 0 0 0-.354.854l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5A.5.5 0 0 0 3.5 4.5h-.75v-2h.75a.5.5 0 0 0 .354-.854zm3.59 9.55V3.76a1.26 1.26 0 0 1 2.52 0v4.577h2.463A2.573 2.573 0 0 1 13.5 10.91V13a1 1 0 0 1-1 1H5.893a1 1 0 0 1-.824-.433l-.764-1.11A1.715 1.715 0 0 1 5.4 9.797z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOneFingerDragVerticalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerHoldIcon],svg[streamline-one-finger-hold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.224 3.204a2.638 2.638 0 1 0 5.276 0a2.638 2.638 0 1 0-5.276 0m3.201-.558l-.564.557m-.625 10.231v-2.586a2.573 2.573 0 0 0-2.573-2.573H5.648V4.29c0-.633-.513-1.147-1.147-1.147v0c-.633 0-1.147.514-1.147 1.147v5.224l-.264.05a1.715 1.715 0 0 0-1.096 2.658l.086.124l.748 1.088M1.167 5.258a3.446 3.446 0 0 1 4.96-3.834"></svg:path>`,
})
export class StreamlineOneFingerHoldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerHoldSolidIcon],svg[streamline-one-finger-hold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 4.196a2.696 2.696 0 0 1 3.95-2.387a.75.75 0 1 0 .7-1.327A4.196 4.196 0 0 0 .11 5.15a.75.75 0 1 0 1.46-.34a2.7 2.7 0 0 1-.07-.614M10.5 7a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m1.442-4.058a.625.625 0 1 0-.884-.884l-1 1a.625.625 0 1 0 .884.884zM3.133 4.259v5.437l-.543.102a1.715 1.715 0 0 0-1.096 2.659l.764 1.11A1 1 0 0 0 3.08 14h6.61a1 1 0 0 0 1-1v-2.09a2.573 2.573 0 0 0-2.573-2.574H5.652V4.26a1.26 1.26 0 1 0-2.519 0Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOneFingerHoldSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerTapIcon],svg[streamline-one-finger-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.101 13.5v-2.833a2.573 2.573 0 0 0-2.573-2.573H7.294V3.918c0-.664-.539-1.202-1.202-1.202v0c-.664 0-1.203.538-1.203 1.202v5.474l-.4.075a1.715 1.715 0 0 0-1.096 2.659l.161.234l.784 1.14"></svg:path><svg:path d="M2.597 4.932a3.611 3.611 0 1 1 7.034 0"></svg:path></svg:g>`,
})
export class StreamlineOneFingerTapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOneFingerTapSolidIcon],svg[streamline-one-finger-tap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.254 4.361a2.861 2.861 0 1 1 5.647.651a.75.75 0 0 0 1.461.34a4.361 4.361 0 1 0-8.495 0a.75.75 0 0 0 1.461-.34a3 3 0 0 1-.074-.651m1.63 5.335V4.26a1.26 1.26 0 0 1 2.518 0v4.077h2.464a2.573 2.573 0 0 1 2.573 2.573V13a1 1 0 0 1-1 1H4.83a1 1 0 0 1-.823-.433l-.764-1.11a1.715 1.715 0 0 1 1.097-2.66l.543-.102Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOneFingerTapSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOneVesusOneIcon],svg[streamline-one-vesus-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.852 12.095l.103.307a1.306 1.306 0 0 0 2.537-.557l-.202-1.817a2.4 2.4 0 0 0-2.386-2.136H7.991c-1.223 0-2.25.92-2.386 2.136l-.202 1.816a1.306 1.306 0 0 0 2.538.558l.102-.307c.12-.359.455-.6.833-.6h1.143c.378 0 .714.241.833.6M5.094 5.298a2.297 2.297 0 1 0 0-4.593a2.297 2.297 0 0 0 0 4.593m-2.757 7.461H.5V11.38a4.134 4.134 0 0 1 4.594-4.11"></svg:path>`,
})
export class StreamlineOneVesusOneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOneVesusOneSolidIcon],svg[streamline-one-vesus-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 6a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5.852 6.095l.103.307a1.306 1.306 0 0 0 2.537-.557l-.202-1.817a2.4 2.4 0 0 0-2.386-2.136H7.991c-1.223 0-2.25.92-2.386 2.136l-.202 1.816a1.306 1.306 0 0 0 2.538.558l.102-.307c.12-.359.455-.6.833-.6h1.143c.378 0 .714.241.833.6M4.362 9.89A3.65 3.65 0 0 1 6.16 7.135A5 5 0 0 0 0 12a.5.5 0 0 0 .5.5h3.696a2.6 2.6 0 0 1-.035-.793z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOneVesusOneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOnlineMedicalCallServiceIcon],svg[streamline-online-medical-call-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.744.637a.466.466 0 0 0-.466.466v1.31h-1.31a.466.466 0 0 0-.466.466v1.514c0 .258.209.466.466.466h1.31v1.31c0 .258.209.466.466.466h1.514a.466.466 0 0 0 .466-.466V4.86h1.31a.466.466 0 0 0 .466-.466V2.88a.466.466 0 0 0-.466-.466h-1.31v-1.31a.466.466 0 0 0-.466-.466zM7.456 12.934a2.694 2.694 0 0 0 3.362-.36l.38-.379a.91.91 0 0 0 0-1.277L9.6 9.331a.9.9 0 0 0-1.267 0v0a.91.91 0 0 1-1.278 0L4.512 6.787a.91.91 0 0 1 0-1.277v0a.9.9 0 0 0 0-1.267L2.975 2.646a.91.91 0 0 0-1.277 0l-.38.38A2.694 2.694 0 0 0 .91 6.387a24.2 24.2 0 0 0 6.546 6.546Z"></svg:path>`,
})
export class StreamlineOnlineMedicalCallServiceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOnlineMedicalCallServiceSolidIcon],svg[streamline-online-medical-call-service-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.879.593c0-.272.22-.493.492-.493h1.602c.272 0 .493.22.493.493V2.47h1.94c.272 0 .492.221.492.493v1.602c0 .272-.22.492-.492.492h-1.94v1.94a.493.493 0 0 1-.493.493H9.37A.493.493 0 0 1 8.88 7V5.06H7a.493.493 0 0 1-.493-.493V2.964c0-.272.22-.493.493-.493h1.879zm-.185 13.292a2.66 2.66 0 0 1-1.723-.409A23.9 23.9 0 0 1 .506 7.011a2.66 2.66 0 0 1 .404-3.32l.375-.375a.897.897 0 0 1 1.261 0l1.518 1.577a.887.887 0 0 1 0 1.251a.897.897 0 0 0 0 1.262l2.513 2.513a.897.897 0 0 0 1.261 0a.887.887 0 0 1 1.252 0l1.577 1.567a.897.897 0 0 1 0 1.261l-.375.374a2.66 2.66 0 0 1-1.598.764" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOnlineMedicalCallServiceSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOnlineMedicalServiceMonitorIcon],svg[streamline-online-medical-service-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 1.25H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5m-7 9l-1 2.5m3-2.5l1 2.5m-5 0h6"></svg:path><svg:path d="M6.302 2.986a.43.43 0 0 0-.43.43v1.207H4.666a.43.43 0 0 0-.43.43v1.395c0 .237.193.43.43.43h1.208v1.207c0 .237.192.43.43.43h1.395a.43.43 0 0 0 .43-.43V6.877h1.207a.43.43 0 0 0 .43-.43V5.053a.43.43 0 0 0-.43-.43H8.127V3.416a.43.43 0 0 0-.43-.43H6.303Z"></svg:path></svg:g>`,
})
export class StreamlineOnlineMedicalServiceMonitorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOnlineMedicalServiceMonitorSolidIcon],svg[streamline-online-medical-service-monitor-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.457.252C.652.252 0 .904 0 1.709v7.586c0 .805.652 1.457 1.457 1.457h4.027l-.536 1.496H4a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-.947l-.536-1.496h4.026c.805 0 1.457-.652 1.457-1.457V1.71c0-.805-.652-1.457-1.457-1.457zm4.53 2.66c0-.217.176-.392.393-.392h1.275c.217 0 .392.175.392.392v1.56h1.56c.217 0 .393.176.393.392V6.14a.39.39 0 0 1-.392.393h-1.56v1.56a.39.39 0 0 1-.393.392H6.38a.39.39 0 0 1-.392-.392v-1.56h-1.56a.39.39 0 0 1-.393-.393V4.864c0-.216.176-.392.392-.392h1.56z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOnlineMedicalServiceMonitorSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOnlineMedicalWebServiceIcon],svg[streamline-online-medical-web-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.494h13M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M6.303 5.735a.43.43 0 0 0-.43.43v1.207H4.666a.43.43 0 0 0-.43.43v1.395c0 .237.193.43.43.43h1.207v1.207c0 .237.193.43.43.43h1.395a.43.43 0 0 0 .43-.43V9.627h1.207a.43.43 0 0 0 .43-.43V7.802a.43.43 0 0 0-.43-.43H8.128V6.165a.43.43 0 0 0-.43-.43z"></svg:path></svg:g>`,
})
export class StreamlineOnlineMedicalWebServiceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOnlineMedicalWebServiceSolidIcon],svg[streamline-online-medical-web-service-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.547 12.25V3.314h10.907v8.934a.204.204 0 0 1-.204.205H1.751a.204.204 0 0 1-.204-.205Zm-1.5-10.5C.047.81.81.046 1.75.046h10.5c.94 0 1.704.763 1.704 1.704v10.5c0 .94-.764 1.704-1.705 1.704H1.751a1.705 1.705 0 0 1-1.704-1.705z" clip-rule="evenodd"></svg:path><svg:path d="M6.364 5.04a.39.39 0 0 0-.393.392v1.56h-1.56a.39.39 0 0 0-.392.392V8.66c0 .217.175.393.392.393h1.56v1.56c0 .217.176.392.392.392h1.275a.39.39 0 0 0 .393-.392v-1.56h1.56a.39.39 0 0 0 .392-.393V7.384a.39.39 0 0 0-.392-.392h-1.56v-1.56a.39.39 0 0 0-.392-.393z"></svg:path></svg:g>`,
})
export class StreamlineOnlineMedicalWebServiceSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOpenBookIcon],svg[streamline-open-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a9.26 9.26 0 0 0-5.61-2.95a1 1 0 0 1-.89-1V1.5A1 1 0 0 1 1.64.51A9.3 9.3 0 0 1 7 3.43zm0 0a9.26 9.26 0 0 1 5.61-2.95a1 1 0 0 0 .89-1V1.5a1 1 0 0 0-1.14-.99A9.3 9.3 0 0 0 7 3.43z"></svg:path>`,
})
export class StreamlineOpenBookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOpenBookSolidIcon],svg[streamline-open-book-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 1.653C5.386 1.099 3.536.42 1.496.179C.674.082 0 .76 0 1.588v8c0 .829.677 1.489 1.492 1.637c1.84.334 3.371 1.216 4.348 1.914q.248.175.535.266zm1.25 11.752q.287-.09.534-.265c.977-.698 2.508-1.581 4.349-1.915c.815-.148 1.492-.808 1.492-1.637v-8C14 .76 13.326.082 12.504.18c-2.04.242-3.89.92-4.879 1.474v11.752Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOpenBookSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOpenUmbrellaIcon],svg[streamline-open-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 7a5 5 0 1 1 10 0zm5-5V.5M10 12a1.5 1.5 0 0 1-3 0V7"></svg:path>`,
})
export class StreamlineOpenUmbrellaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOpenUmbrellaSolidIcon],svg[streamline-open-umbrella-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a.75.75 0 0 1 .75.75v.801A5.5 5.5 0 0 1 12.5 7a.5.5 0 0 1-.5.5H7.75v4.25a.75.75 0 0 0 1.5 0a.75.75 0 0 1 1.5 0a2.25 2.25 0 0 1-4.5 0V7.5H2a.5.5 0 0 1-.5-.5a5.5 5.5 0 0 1 4.75-5.449V.75A.75.75 0 0 1 7 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOpenUmbrellaSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOrientationLandscapeIcon],svg[streamline-orientation-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 12h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1"></svg:path><svg:path d="M9.502 6.212a1.245 1.245 0 1 0 0-2.49a1.245 1.245 0 0 0 0 2.49M9.083 12a7.1 7.1 0 0 0-7.136-5.786A7.6 7.6 0 0 0 .5 6.349"></svg:path><svg:path d="M13.5 8.94a7.72 7.72 0 0 0-5.506.225"></svg:path></svg:g>`,
})
export class StreamlineOrientationLandscapeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOrientationLandscapeSolidIcon],svg[streamline-orientation-landscape-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 11V3a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 14 3zm-3.031-6.033a1.467 1.467 0 1 1-2.934 0a1.467 1.467 0 0 1 2.934 0M1.958 6.714A6.6 6.6 0 0 1 8.452 11.5H1.5A.5.5 0 0 1 1 11V6.775q.47-.063.945-.061zM9.486 11.5H12.5a.5.5 0 0 0 .5-.5V9.309a7 7 0 0 0-1.944-.27h-.002a7.2 7.2 0 0 0-2.405.408c.376.636.66 1.327.837 2.053" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOrientationLandscapeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOrientationPortraitIcon],svg[streamline-orientation-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12 12.5v-11a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1"></svg:path><svg:path d="M8.547 5.488a1.228 1.228 0 1 0 0-2.457a1.228 1.228 0 0 0 0 2.457M2 7.807q.522-.089 1.053-.087c1.224-.025 2.419.338 3.37 1.025c1.542 1.111 2.124 3.038 2.124 4.755"></svg:path><svg:path d="M12 9.37a7.3 7.3 0 0 0-2.102-.306a7.4 7.4 0 0 0-2.632.479"></svg:path></svg:g>`,
})
export class StreamlineOrientationPortraitIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOrientationPortraitSolidIcon],svg[streamline-orientation-portrait-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 0a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 11 14H3a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 3 0zm-.681 4.531a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M3.063 8.22c1.121-.023 2.208.31 3.068.93c1.223.882 1.795 2.375 1.898 3.85H3a.5.5 0 0 1-.5-.5V8.245q.274-.026.552-.025h.01Zm6.834 1.344a7 7 0 0 0-1.826.242c.605.977.894 2.116.96 3.194H11a.5.5 0 0 0 .5-.5V9.753a6.8 6.8 0 0 0-1.602-.189z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOrientationPortraitSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOutgoingCallIcon],svg[streamline-outgoing-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.53 12.823a2.7 2.7 0 0 1-3.37-.36l-.38-.38a.91.91 0 0 1 0-1.28l1.6-1.59a.9.9 0 0 1 1.27 0v0a.91.91 0 0 0 1.28 0l2.55-2.55a.91.91 0 0 0 0-1.28v0a.9.9 0 0 1 0-1.27l1.54-1.6a.91.91 0 0 1 1.28 0l.38.38a2.7 2.7 0 0 1 .41 3.37a24.2 24.2 0 0 1-6.56 6.56M4 .5H.5V4M.5.5l5 5"></svg:path>`,
})
export class StreamlineOutgoingCallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineOutgoingCallSolidIcon],svg[streamline-outgoing-call-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 .754A.75.75 0 0 0 4.309.29H1.042a.75.75 0 0 0-.75.75v3.266a.75.75 0 0 0 1.28.53l1.103-1.103l2.502 2.503a.75.75 0 0 0 1.06-1.061l-2.5-2.501L4.838 1.57a.75.75 0 0 0 .163-.817Zm1.737 12.525a2.7 2.7 0 0 1-3.37-.36l-.38-.38a.91.91 0 0 1 0-1.28l1.6-1.59a.9.9 0 0 1 1.27 0a.91.91 0 0 0 1.28 0l2.55-2.55a.91.91 0 0 0 0-1.28a.9.9 0 0 1 0-1.27l1.54-1.6a.91.91 0 0 1 1.28 0l.38.38a2.7 2.7 0 0 1 .41 3.37a24.2 24.2 0 0 1-6.56 6.56" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOutgoingCallSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePacmanIcon],svg[streamline-pacman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.215 3.786L7 7l5.215 3.214a6.125 6.125 0 1 1 0-6.428"></svg:path><svg:path d="M5.5 4a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path></svg:g>`,
})
export class StreamlinePacmanIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePacmanSolidIcon],svg[streamline-pacman-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.375 7A6.625 6.625 0 0 1 12.64 3.523a.5.5 0 0 1-.163.689L7.953 7l4.524 2.788a.5.5 0 0 1 .163.689A6.625 6.625 0 0 1 .375 7M6 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePacmanSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePadlockSquare1Icon],svg[streamline-padlock-square-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11 5.5H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-.5 0V4a3.5 3.5 0 1 0-7 0v1.5"></svg:path><svg:path d="M7 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class StreamlinePadlockSquare1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePadlockSquare1SolidIcon],svg[streamline-padlock-square-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1h4V4a2 2 0 0 0-2-2M3 4v1a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 3 14h8a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 11 5V4a4 4 0 1 0-8 0m4 6.75a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePadlockSquare1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePageSettingIcon],svg[streamline-page-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 1h-5v5h5zm7.75 12.5h-5m0-5h5m-5 2.5h5m.25-5H8L10.75.5zM3 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class StreamlinePageSettingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePageSettingSolidIcon],svg[streamline-page-setting-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.565 5.626L10.21.334a.604.604 0 0 1 1.08 0l2.646 5.292a.604.604 0 0 1-.54.874H8.104a.604.604 0 0 1-.54-.874ZM.5.5A.5.5 0 0 0 0 1v5a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 6 6V1a.5.5 0 0 0-.5-.5zM6 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.5 1.5a.75.75 0 0 0 0 1.5H13a.75.75 0 0 0 0-1.5zM7.75 11a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75m.75-3a.75.75 0 0 0 0 1.5H13A.75.75 0 0 0 13 8z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePageSettingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintBucketIcon],svg[streamline-paint-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 6.9L6.1.5L.7 7.7A1 1 0 0 0 .79 9L4 12.21a1 1 0 0 0 1.29.09zm-1.196 6.167c-.387-.448-.262-1.118-.037-1.666c.162-.395.366-.76.608-1.176A.42.42 0 0 1 12.25 10a.4.4 0 0 1 .367.225c.247.417.454.783.617 1.18c.225.545.35 1.212-.035 1.66a1.25 1.25 0 0 1-1.895.002"></svg:path>`,
})
export class StreamlinePaintBucketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintBucketSolidIcon],svg[streamline-paint-bucket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.85 5.861c.22.22.194.585-.055.771l-6.9 5.17a1.02 1.02 0 0 1-1.318-.092L.295 8.425a1.02 1.02 0 0 1-.092-1.33L5.37.206A.51.51 0 0 1 6.14.15zm.101 4.437c-.464.697-.951 1.596-.951 2.217C11 13.63 11.75 14 12.5 14s1.5-.371 1.5-1.485c0-.621-.487-1.52-.951-2.217a.654.654 0 0 0-1.098 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePaintBucketSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintPaletteIcon],svg[streamline-paint-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0-3.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M9.52 12.28a1 1 0 0 0-.65-.88a2 2 0 0 1 .63-3.9h1.87a2 2 0 0 0 1.89-2.67a6.5 6.5 0 1 0-6.13 8.67a6.3 6.3 0 0 0 1.74-.24a.9.9 0 0 0 .65-.98"></svg:path></svg:g>`,
})
export class StreamlinePaintPaletteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintPaletteSolidIcon],svg[streamline-paint-palette-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.35.577a7 7 0 0 1 9.381 4.085c.27.758.15 1.626-.315 2.282A2.53 2.53 0 0 1 11.37 8H9.5a1.5 1.5 0 0 0-.455 2.931c.55.205.935.702.972 1.286a1.43 1.43 0 0 1-1.01 1.524A6.8 6.8 0 0 1 7.129 14a7 7 0 0 1-3.636-1.021A7.06 7.06 0 0 1 .15 6.517a7.06 7.06 0 0 1 4.2-5.94M4.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-6 6.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePaintPaletteSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintbrush1Icon],svg[streamline-paintbrush-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1 1 0 0 0 .77-.37a1 1 0 0 0 .21-.83zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 1 1 4 0v2a1 1 0 0 0 1 1zm-3 8V11"></svg:path>`,
})
export class StreamlinePaintbrush1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintbrush1SolidIcon],svg[streamline-paintbrush-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.707 5.292A1 1 0 0 0 12 4.999h-2a1 1 0 0 1-1-1v-2a2 2 0 1 0-4 0v2a1 1 0 0 1-1 1H2a1 1 0 0 0-1 1v2a.5.5 0 0 0 .5.5h11A.5.5 0 0 0 13 8V6a1 1 0 0 0-.293-.707ZM1.01 12.934L1.5 9.5h11l.49 3.434A.934.934 0 0 1 12.067 14H9.25v-2a.75.75 0 0 0-1.5 0v2H1.934a.934.934 0 0 1-.925-1.066Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePaintbrush1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintbrush2Icon],svg[streamline-paintbrush-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.133 12.056c-1.53 1.54-4.13 2.05-5.63.51c2-2.07 0-3.07 1.5-4.57a2.9 2.9 0 1 1 4.09 4.1z"></svg:path><svg:path d="m4.698 7.082l5.305-5.916c.754-.848 2.115-.89 2.92-.09c.8.805.758 2.166-.09 2.92L6.976 9.241"></svg:path></svg:g>`,
})
export class StreamlinePaintbrush2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintbrush2SolidIcon],svg[streamline-paintbrush-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.41.594A2.02 2.02 0 0 0 11.112.19a2 2 0 0 0-.66.495L5.134 6.638A4.15 4.15 0 0 1 7.35 8.987l5.97-5.41A2.04 2.04 0 0 0 14 2.115a2.06 2.06 0 0 0-.59-1.521M5.393 12.599l.018-.018c-1.414 1.405-3.722 1.937-5.243.807c-.217-.16-.212-.472-.044-.684c.734-.926.666-1.63.602-2.284c-.062-.638-.119-1.226.577-1.921a2.9 2.9 0 1 1 4.09 4.1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePaintbrush2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaperclip1Icon],svg[streamline-paperclip-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.858 6.787l-5.88 5.929a2.45 2.45 0 0 1-3.498 0l-1.759-1.789a2.5 2.5 0 0 1 0-3.508l6.265-6.285a1.976 1.976 0 0 1 2.807 0l.701.702a1.975 1.975 0 0 1 0 2.806l-5.553 5.574a.986.986 0 0 1-1.403 0l-.346-.356a.99.99 0 0 1 0-1.403L7.917 4.76"></svg:path>`,
})
export class StreamlinePaperclip1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaperclip1SolidIcon],svg[streamline-paperclip-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.383 1.5a1.17 1.17 0 0 0-.827.345l-.002.001l-6.069 6.088a1.673 1.673 0 0 0 .002 2.345l1.705 1.734a1.63 1.63 0 0 0 1.788.36c.2-.083.38-.206.531-.36l.003-.002l5.697-5.746a.75.75 0 0 1 1.065 1.057l-5.694 5.742l-.002.001a3.124 3.124 0 0 1-4.458 0l-1.704-1.733a3.173 3.173 0 0 1 0-4.452l.003-.003L7.491.788a2.665 2.665 0 0 1 3.783 0h.001l.676.676v.001a2.664 2.664 0 0 1 .001 3.782l-.001.001l-5.377 5.396l-.001.001a1.71 1.71 0 0 1-2.424 0l-.005-.006l-.331-.34a1.71 1.71 0 0 1 .005-2.42l3.61-3.58a.75.75 0 0 1 1.056 1.064l-3.61 3.581a.21.21 0 0 0 0 .295l.01.01l.332.34a.207.207 0 0 0 .293-.001v-.001l5.382-5.4l.003-.004a1.166 1.166 0 0 0 0-1.654l-.002-.002l-.68-.68l-.002-.002a1.17 1.17 0 0 0-.827-.345" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePaperclip1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineParachuteDropIcon],svg[streamline-parachute-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.235 7h-4.5a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-2.25 4.258h1m4.5-7.243a.5.5 0 0 0 .44-.27a.47.47 0 0 0 0-.51a6.86 6.86 0 0 0-5.94-2.72a6.86 6.86 0 0 0-5.91 2.72a.47.47 0 0 0 0 .51a.5.5 0 0 0 .41.27zm-5.5 2.993v-3m-2.5 3l-2.5-3m7.5 3l2.5-3"></svg:path>`,
})
export class StreamlineParachuteDropIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineParachuteDropSolidIcon],svg[streamline-parachute-drop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.478.66C4.601.145 5.811 0 6.985 0c1.171 0 2.393.135 3.523.653a7.36 7.36 0 0 1 2.837 2.296a.97.97 0 0 1 .013 1.032a1 1 0 0 1-.81.517l-2.212 2.895c.166.237.263.525.263.837v4.312c0 .805-.653 1.458-1.458 1.458H4.829a1.46 1.46 0 0 1-1.458-1.458V8.23c0-.312.097-.6.263-.837L1.42 4.496a1 1 0 0 1-.778-.516a.97.97 0 0 1 .034-1.06A7.36 7.36 0 0 1 3.478.66m5.445 6.111L10.66 4.5H7.735v2.271zm-2.688 0H5.047L3.31 4.5h2.924v2.271Zm.705 5.156c0-.345.28-.625.625-.625h1a.625.625 0 0 1 0 1.25h-1a.625.625 0 0 1-.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineParachuteDropSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineParagraphIcon],svg[streamline-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5h-9a4 4 0 0 0 0 8h2m3-8v13m-3-13v13"></svg:path>`,
})
export class StreamlineParagraphIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineParagraphSolidIcon],svg[streamline-paragraph-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.786 0a4.786 4.786 0 1 0 0 9.573h.943v3.677a.75.75 0 0 0 1.5 0V1.5h2.146v11.75a.75.75 0 0 0 1.5 0V1.5h2.375a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineParagraphSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineParkingSignIcon],svg[streamline-parking-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5.5h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3"></svg:path><svg:path d="M5.209 10.514V7.586m0 0v-4.1h3.185a1.5 1.5 0 0 1 1.5 1.5v1.1a1.5 1.5 0 0 1-1.5 1.5z"></svg:path></svg:g>`,
})
export class StreamlineParkingSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineParkingSignSolidIcon],svg[streamline-parking-sign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3.5A3.5 3.5 0 0 1 3.5 0h7A3.5 3.5 0 0 1 14 3.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 0 10.5zm5.21-.383a.625.625 0 0 0-.626.625v7.028a.625.625 0 0 0 1.25 0V8.466h2.56a2.125 2.125 0 0 0 2.125-2.125V5.242a2.125 2.125 0 0 0-2.125-2.125H5.209Zm3.184 4.1h-2.56v-2.85h2.56c.483 0 .875.392.875.875v1.1a.875.875 0 0 1-.875.874Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineParkingSignSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineParliamentIcon],svg[streamline-parliament-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.481 8.68h7.037v4.71H3.481zm1.588-2.702h3.81"></svg:path><svg:path d="M5.943 11.628c0-.584.473-1.057 1.057-1.057v0c.584 0 1.058.473 1.058 1.057v1.761H5.943zM5.067 8.68V5.968l1.91-2.938l1.91 2.938v2.71M.59 6.71v6.68h2.892V6.71L2.036 4.513L.59 6.711Zm9.929 0v6.68h2.89V6.71l-1.445-2.198l-1.445 2.199Z"></svg:path><svg:path d="M6.977 3.031V.55h1.25"></svg:path></svg:g>`,
})
export class StreamlineParliamentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineParliamentSolidIcon],svg[streamline-parliament-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .05a.75.75 0 0 0-.75.75v2.174l-1.11 2.11a.5.5 0 0 0-.058.234v2.736h3.79V5.318a.5.5 0 0 0-.058-.233L7.75 3.063V1.55h.621a.75.75 0 0 0 0-1.5h-1.37Zm2.667 9.254H4.286v4.585h1.812V12.5a.902.902 0 1 1 1.804 0v1.39h1.765zM11.4 13.89h-.485V6.645a.5.5 0 0 1 .041-.141l.999-2.199a.5.5 0 0 1 .91 0l.999 2.199a.5.5 0 0 1 .045.207v6.678a.5.5 0 0 1-.5.5H11.4Zm-8.364 0l-.001-.026V6.65a.5.5 0 0 0-.041-.145l-.999-2.199a.5.5 0 0 0-.91 0L.087 6.504a.5.5 0 0 0-.045.207v6.678a.5.5 0 0 0 .5.5h2.495Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineParliamentSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePartyPopperIcon],svg[streamline-party-popper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.85 13.2l-6.68-2.49a1.25 1.25 0 0 1-.48-2.05l4.19-4.19a1.26 1.26 0 0 1 2.06.53l2.48 6.68a1.22 1.22 0 0 1-1.57 1.52m-9.8-6.07a2.06 2.06 0 0 1 1.46-.21m.82-2.64A2.1 2.1 0 0 1 4 2.83M6.63.72A4.72 4.72 0 0 0 6.76 4M1 3.78a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class StreamlinePartyPopperIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePartyPopperSolidIcon],svg[streamline-party-popper-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.876.201a.75.75 0 0 1 .463.955a3.46 3.46 0 0 0 .107 2.54a.75.75 0 0 1-1.372.607A4.96 4.96 0 0 1 5.921.665A.75.75 0 0 1 6.876.2ZM4.523 2.883a.75.75 0 0 0-1.486-.206a2.85 2.85 0 0 0 .448 1.968a.75.75 0 1 0 1.25-.83a1.35 1.35 0 0 1-.212-.932m5.885 1.407a1.68 1.68 0 0 0-1.564.4l-.012.012l-3.911 3.911l-.005.005a1.667 1.667 0 0 0 .636 2.732l6.232 2.323l.007.003a1.639 1.639 0 0 0 2.102-2.064L11.58 5.385a1.68 1.68 0 0 0-1.173-1.095ZM3.279 7.91a1.3 1.3 0 0 0-.928.133a.75.75 0 1 1-.731-1.31a2.8 2.8 0 0 1 1.991-.286a.75.75 0 0 1-.332 1.463M1.065 3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePartyPopperSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePassportIcon],svg[streamline-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6M4 6h6M7 9V3"></svg:path></svg:g>`,
})
export class StreamlinePassportIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePassportSolidIcon],svg[streamline-passport-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 0A1.5 1.5 0 0 0 1 1.5v11A1.5 1.5 0 0 0 2.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 11.5 0zm5 9.364A3.4 3.4 0 0 0 10.364 6.5H7.5zm-1 0A3.4 3.4 0 0 1 3.636 6.5H6.5zm1-3.864h2.864A3.4 3.4 0 0 0 7.5 2.636zm-1-2.864V5.5H3.636A3.4 3.4 0 0 1 6.5 2.636" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePassportSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderDivideIcon],svg[streamline-pathfinder-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 9.5a1 1 0 0 0 1-1v-7c0-.545-.455-1-1-1h-7c-.545 0-1 .455-1 1v7c0 .545.455 1 1 1z"></svg:path><svg:path d="M12.5 13.5a1 1 0 0 0 1-1v-7c0-.545-.455-1-1-1h-7c-.545 0-1 .455-1 1v7c0 .545.455 1 1 1z"></svg:path></svg:g>`,
})
export class StreamlinePathfinderDivideIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderDivideSolidIcon],svg[streamline-pathfinder-divide-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 0h-7A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10h1.252V5.37a2.625 2.625 0 0 1 2.625-2.625H10V1.5A1.5 1.5 0 0 0 8.5 0M10 3.995V4h.014v4.632c0 .76-.616 1.375-1.376 1.375H4.002V5.37c0-.76.616-1.375 1.375-1.375zM11.264 4H12.5A1.5 1.5 0 0 1 14 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 12.5v-1.243h4.638a2.625 2.625 0 0 0 2.626-2.625z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePathfinderDivideSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderExcludeIcon],svg[streamline-pathfinder-exclude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 2.5v-1a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1m9-5h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-1m4-7H9a.5.5 0 0 1 .5.5v.5"></svg:path><svg:path d="M9.5 8.5V9a.5.5 0 0 1-.5.5h-.5m-3 0H5a.5.5 0 0 1-.5-.5v-.5m0-3V5a.5.5 0 0 1 .5-.5h.5"></svg:path></svg:g>`,
})
export class StreamlinePathfinderExcludeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderExcludeSolidIcon],svg[streamline-pathfinder-exclude-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0h7A1.5 1.5 0 0 1 10 1.5V4h2.5A1.5 1.5 0 0 1 14 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 12.5V10H1.5A1.5 1.5 0 0 1 0 8.5v-7A1.5 1.5 0 0 1 1.5 0M5 9h3.5a.5.5 0 0 0 .5-.5V5H5.5a.5.5 0 0 0-.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePathfinderExcludeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderIntersectIcon],svg[streamline-pathfinder-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 12.5a1 1 0 0 1-1 1m0-9a1 1 0 0 1 1 1m-9 7a1 1 0 0 0 1 1m8-5.5v2M8 13.5h2M.5 1.5a1 1 0 0 1 1-1m7 0a1 1 0 0 1 1 1m-9 7a1 1 0 0 0 1 1M.5 6V4M4 .5h2m-.5 4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"></svg:path>`,
})
export class StreamlinePathfinderIntersectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderIntersectSolidIcon],svg[streamline-pathfinder-intersect-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.277 2.277A.76.76 0 0 1 .75 2.5A.76.76 0 0 1 0 1.75A1.76 1.76 0 0 1 1.75 0a.75.75 0 0 1 0 1.5a.25.25 0 0 0-.25.25a.76.76 0 0 1-.223.527M12.25 5a.25.25 0 0 1 .25.25a.75.75 0 1 0 1.5 0a1.76 1.76 0 0 0-1.75-1.75a.75.75 0 1 0 0 1.5m1 6.5a.76.76 0 0 0-.75.75a.25.25 0 0 1-.25.25a.75.75 0 1 0 0 1.5A1.76 1.76 0 0 0 14 12.25a.76.76 0 0 0-.75-.75m-8.177.927a.25.25 0 0 0 .177.073a.75.75 0 1 1 0 1.5a1.76 1.76 0 0 1-1.75-1.75a.75.75 0 1 1 1.5 0c0 .066.026.13.073.177M8 12.5A.75.75 0 1 0 8 14h1.5a.75.75 0 1 0 0-1.5zm4.723-5.027a.76.76 0 0 1 .527-.223A.76.76 0 0 1 14 8v1.5a.75.75 0 1 1-1.5 0V8a.76.76 0 0 1 .223-.527M1.75 9a.25.25 0 0 1-.25-.25a.75.75 0 0 0-1.5 0a1.76 1.76 0 0 0 1.75 1.75a.75.75 0 1 0 0-1.5m7-7.5a.25.25 0 0 1 .25.25a.75.75 0 0 0 1.5 0A1.76 1.76 0 0 0 8.75 0a.75.75 0 0 0 0 1.5M6 1.5H4.5a.75.75 0 0 1 0-1.5H6a.75.75 0 0 1 0 1.5M.75 6.75A.76.76 0 0 0 1.5 6V4.5a.75.75 0 0 0-1.5 0V6a.76.76 0 0 0 .75.75m4.5-2.5a1 1 0 0 0-1 1v4a.5.5 0 0 0 .5.5h4a1 1 0 0 0 1-1v-4a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePathfinderIntersectSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderMergeIcon],svg[streamline-pathfinder-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 1.5v3h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1m-5 8v-3"></svg:path>`,
})
export class StreamlinePathfinderMergeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderMergeSolidIcon],svg[streamline-pathfinder-merge-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 0h-7A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10h1.254V6.5a.625.625 0 1 1 1.25 0v4.25L4 10.82v1.68A1.5 1.5 0 0 0 5.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 4H10V1.5A1.5 1.5 0 0 0 8.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePathfinderMergeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderMinusFront1Icon],svg[streamline-pathfinder-minus-front-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 4.5v-3c0-.545-.455-1-1-1h-7c-.545 0-1 .455-1 1v7c0 .545.455 1 1 1h3m9 3a1 1 0 0 1-1 1"></svg:path><svg:path d="M4.5 5.5a1 1 0 0 1 1-1m7 0a1 1 0 0 1 1 1m-9 7a1 1 0 0 0 1 1m8-5.5v2m-9 0V8M8 4.5h2m-2 9h2"></svg:path></svg:g>`,
})
export class StreamlinePathfinderMinusFront1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderMinusFront1SolidIcon],svg[streamline-pathfinder-minus-front-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0h7A1.5 1.5 0 0 1 10 1.5V4a1 1 0 0 1-1 1H5.5a.5.5 0 0 0-.5.5V9a1 1 0 0 1-1 1H1.5A1.5 1.5 0 0 1 0 8.5v-7A1.5 1.5 0 0 1 1.5 0m10.927 5.073A.25.25 0 0 0 12.25 5a.75.75 0 1 1 0-1.5A1.76 1.76 0 0 1 14 5.25a.75.75 0 1 1-1.5 0a.25.25 0 0 0-.073-.177m.296 6.65a.76.76 0 0 1 .527-.223a.76.76 0 0 1 .75.75A1.76 1.76 0 0 1 12.25 14a.75.75 0 1 1 0-1.5a.25.25 0 0 0 .25-.25a.76.76 0 0 1 .223-.527M5.25 12.5a.25.25 0 0 1-.25-.25a.75.75 0 1 0-1.5 0A1.76 1.76 0 0 0 5.25 14a.75.75 0 1 0 0-1.5m2.75 0h1.5a.75.75 0 1 1 0 1.5H8a.75.75 0 1 1 0-1.5m5.25-5.25a.76.76 0 0 0-.75.75v1.5a.75.75 0 1 0 1.5 0V8a.76.76 0 0 0-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePathfinderMinusFront1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderTrimIcon],svg[streamline-pathfinder-trim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 4.5v-3c0-.545-.455-1-1-1h-7c-.545 0-1 .455-1 1v7c0 .545.455 1 1 1h3"></svg:path><svg:path d="M12.5 13.5a1 1 0 0 0 1-1v-7c0-.545-.455-1-1-1h-7c-.545 0-1 .455-1 1v7c0 .545.455 1 1 1z"></svg:path></svg:g>`,
})
export class StreamlinePathfinderTrimIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderTrimSolidIcon],svg[streamline-pathfinder-trim-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 0h-7A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10h1.25V5.5A2.75 2.75 0 0 1 5.5 2.75H10V1.5A1.5 1.5 0 0 0 8.5 0m-3 4h7A1.5 1.5 0 0 1 14 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 12.5v-7A1.5 1.5 0 0 1 5.5 4" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePathfinderTrimSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderUnionIcon],svg[streamline-pathfinder-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 1.5v3h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1"></svg:path>`,
})
export class StreamlinePathfinderUnionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderUnionSolidIcon],svg[streamline-pathfinder-union-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0h7A1.5 1.5 0 0 1 10 1.5V4h2.5A1.5 1.5 0 0 1 14 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 12.5V10H1.5A1.5 1.5 0 0 1 0 8.5v-7A1.5 1.5 0 0 1 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePathfinderUnionSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePayment10Icon],svg[streamline-payment-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 11.5v2m2.5-3v2m-5-2v2M2.75 4.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m8.5.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m-3.186-.861a.83.83 0 0 0-.786-.556h-.645a.744.744 0 0 0-.16 1.47l.983.216a.834.834 0 0 1-.178 1.648h-.556a.83.83 0 0 1-.786-.556M7 2.833V2m0 5v-.833"></svg:path><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class StreamlinePayment10Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePayment10SolidIcon],svg[streamline-payment-10-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v6A1.5 1.5 0 0 0 1.5 9h11A1.5 1.5 0 0 0 14 7.5v-6A1.5 1.5 0 0 0 12.5 0zm6.125 1.454a.625.625 0 1 0-1.25 0v.4a1.532 1.532 0 0 0-.15 3.018l1.197.261a.39.39 0 0 1-.084.773h-.676a.39.39 0 0 1-.369-.26a.625.625 0 0 0-1.178.416c.194.55.673.965 1.26 1.069v.415a.625.625 0 1 0 1.25 0V7.13a1.641 1.641 0 0 0 .064-3.219L6.492 3.65a.281.281 0 0 1 .06-.556h.786a.39.39 0 0 1 .369.26a.625.625 0 1 0 1.178-.416a1.64 1.64 0 0 0-1.26-1.069zM2.75 3.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m8.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M4.5 9.875c.345 0 .625.28.625.625v2a.625.625 0 1 1-1.25 0v-2c0-.345.28-.625.625-.625m5.625.625a.625.625 0 1 0-1.25 0v2a.625.625 0 1 0 1.25 0zm-2.5.75a.625.625 0 1 0-1.25 0v2a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePayment10SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaymentCashOut3Icon],svg[streamline-payment-cash-out-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 11.5v2m2.5-3v2m-5-2v2m8-12h-11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 6.25a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m-4.225-1.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m8.45.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlinePaymentCashOut3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaymentCashOut3SolidIcon],svg[streamline-payment-cash-out-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.45C0 .625.696 0 1.5 0h11c.804 0 1.5.625 1.5 1.45v5.6c0 .825-.696 1.45-1.5 1.45h-11C.696 8.5 0 7.875 0 7.05zm9 2.8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-5.5.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m7.75-.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M5.125 10.5a.625.625 0 1 0-1.25 0v2a.625.625 0 1 0 1.25 0zM9.5 9.875c.345 0 .625.28.625.625v2a.625.625 0 1 1-1.25 0v-2c0-.345.28-.625.625-.625m-2.5.75c.345 0 .625.28.625.625v2a.625.625 0 1 1-1.25 0v-2c0-.345.28-.625.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePaymentCashOut3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaypalIcon],svg[streamline-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.605 1.595L3.587.515a.49.49 0 0 0-.6.37l-1.36 6.408L.619 12a.49.49 0 0 0 .37.58l1.2.26a.49.49 0 0 0 .58-.38l.999-4.679l3.438.74a3.52 3.52 0 0 0 4.259-3.429a3.59 3.59 0 0 0-2.86-3.498v0Zm-1.36 4.658l-2.998-.65l.55-2.599l2.998.65a1.32 1.32 0 0 1-.56 2.579z"></svg:path><svg:path d="m5.146 13.5l.62-2.899l2.999.63c2.239.49 4.598-1.86 4.628-4.288c0-.405-.067-.807-.2-1.19"></svg:path></svg:g>`,
})
export class StreamlinePaypalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePaypalSolidIcon],svg[streamline-paypal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.98.015L8 1.095a3.59 3.59 0 0 1 2.86 3.499A3.517 3.517 0 0 1 6.6 8.022l-3.44-.74l-1 4.679a.49.49 0 0 1-.58.38l-1.2-.26a.49.49 0 0 1-.37-.58l1.01-4.708L2.38.385a.49.49 0 0 1 .6-.37m.66 5.088l3 .65l-.01-.02a1.32 1.32 0 0 0 .56-2.579l-3-.65l-.55 2.6Zm.52 4.557l.18-.846l1.998.43a4.772 4.772 0 0 0 5.773-4.646v-.01q0-.14-.01-.278A3.59 3.59 0 0 1 14 7.46a3.52 3.52 0 0 1-4.26 3.43l-3.44-.74l-.826 3.46a.49.49 0 0 1-.58.38l-1.2-.26a.49.49 0 0 1-.37-.58z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePaypalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePeaceHandIcon],svg[streamline-peace-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.21 13.5c1.464-1.429 1.563-3.26 1.743-4.356c.31-1.89-1.743-2.666-4.014-3.106l.291-4.223a1.14 1.14 0 0 0-2.268-.21l-.474 3.984l-1.043-3.788A1.307 1.307 0 0 0 2.893.882A1.21 1.21 0 0 0 2 2.38l1.45 5.44"></svg:path><svg:path d="M3.885 13.5C1.91 12.712 1.6 10.71 1.69 9.313c.057-.879.855-1.491 1.736-1.491h3.191a1.043 1.043 0 0 1 .244 2.057l-1.807.434c.57-.094 1.87.48 1.917 1.734"></svg:path></svg:g>`,
})
export class StreamlinePeaceHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePeaceHandSolidIcon],svg[streamline-peace-hand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.558 9.273c.336-2.05-1.89-2.892-4.355-3.37l.316-4.581a1.236 1.236 0 0 0-2.462-.229l-.513 4.324l-1.132-4.11A1.42 1.42 0 0 0 2.728.308a1.31 1.31 0 0 0-.97 1.624l1.24 4.654H6.78a1.723 1.723 0 0 1 .402 3.399l-.112.026c.384.39.681.932.707 1.624a.625.625 0 1 1-1.249.048c-.016-.425-.238-.742-.543-.961c-.335-.24-.662-.287-.75-.272a.625.625 0 0 1-.246-1.225L6.89 8.77a.473.473 0 0 0-.11-.933H3.295c-.942.016-1.812.678-1.873 1.62c-.076 1.18.11 2.556 1.207 3.511c.348.303.671.588.89.781c.184.162.42.251.664.251h6.076c.261 0 .515-.1.688-.295c1.158-1.315 1.382-2.872 1.543-3.987q.034-.238.067-.445Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePeaceHandSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePeaceSymbolIcon],svg[streamline-peace-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-13v13"></svg:path><svg:path d="M1.93 11.07L7 6l5.07 5.07"></svg:path></svg:g>`,
})
export class StreamlinePeaceSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePeaceSymbolSolidIcon],svg[streamline-peace-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 7a4.98 4.98 0 0 1 3.981-4.88v2.75L2.298 8.7A5 5 0 0 1 2 7m1.39 3.451a4.97 4.97 0 0 0 2.591 1.43V7.756zm4.59-2.695v4.125a4.97 4.97 0 0 0 2.592-1.43zm3.683.945A4.983 4.983 0 0 0 7.98 2.119v2.752zM0 7a6.981 6.981 0 1 1 13.962 0A6.981 6.981 0 0 1 0 7" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePeaceSymbolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePen3Icon],svg[streamline-pen-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3a2.5 2.5 0 1 0-5 0v7.5l2.5 3l2.5-3zm-5 1.5h5m2-2a2 2 0 1 1 4 0v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm2 9v2"></svg:path><svg:path d="M7.5 4.5h5a1 1 0 0 1 1 1v4"></svg:path></svg:g>`,
})
export class StreamlinePen3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePen3SolidIcon],svg[streamline-pen-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2a2 2 0 1 1 4 0v.349h.75A1.75 1.75 0 0 1 14 4.099v4a.75.75 0 0 1-1.5 0v-4a.25.25 0 0 0-.25-.25h-.75v.026h-4zm0 9V5.125h4V11a1 1 0 0 1-1 1h-.25v1.25a.75.75 0 0 1-1.5 0V12H8.5a1 1 0 0 1-1-1M4.768.732A2.5 2.5 0 0 1 5.5 2.5v1.375h-5V2.5A2.5 2.5 0 0 1 4.768.732M.5 11.1V5.125h5V11.1a.5.5 0 0 1-.116.32l-2 2.4a.5.5 0 0 1-.768 0l-2-2.4A.5.5 0 0 1 .5 11.1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePen3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePenDrawIcon],svg[streamline-pen-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.64 7.86c.785-1.097 3.164-4.214 5.947-5.967c2.093-1.318 4.07.422 2.537 2.174c-1.499 1.714-3.51 4.073-4.368 5.244c-.89 1.214.633 2.682 2.157 1.285c1.019-.934 2.08-2.008 3.158-2.802c1.456-1.071 2.705-.125 2.07 1.082c-.46.873-.793 1.258-1.177 1.992c-.383.735.023 1.615.604 1.691c.72.094 1.176-.423 1.791-1.228"></svg:path>`,
})
export class StreamlinePenDrawIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePenDrawSolidIcon],svg[streamline-pen-draw-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.61 2.66c-.227-.198-.817-.365-1.602.129c-2.508 1.58-4.693 4.43-5.432 5.463a.75.75 0 1 1-1.22-.873c.75-1.047 3.078-4.112 5.853-5.86C7.41.763 8.75.795 9.594 1.527c.421.365.684.89.688 1.486c.004.591-.246 1.177-.702 1.698c-1.427 1.632-3.312 3.845-4.104 4.925c-.104.142-.111.25-.102.312c.01.07.047.136.11.183a.4.4 0 0 0 .299.067c.14-.017.36-.094.628-.339c.226-.208.461-.43.703-.657c.745-.701 1.55-1.46 2.356-2.053c.838-.616 1.818-.787 2.561-.333c.371.227.632.59.723 1.024c.09.43.004.878-.213 1.29c-.232.442-.434.76-.615 1.046l-.014.023a11 11 0 0 0-.485.819a.5.5 0 0 0-.024.415c.024.06.047.089.06.101c.092.007.172-.016.299-.114c.178-.139.377-.374.676-.766a.75.75 0 0 1 1.192.911c-.285.373-.594.764-.948 1.04c-.392.304-.867.489-1.444.413c-.633-.082-1.048-.57-1.231-1.037a2 2 0 0 1 .09-1.658c.19-.364.37-.647.541-.916l.021-.034c.177-.279.352-.556.555-.942c.085-.162.077-.255.071-.284a.07.07 0 0 0-.036-.051c-.043-.027-.347-.138-.89.262c-.726.533-1.433 1.2-2.16 1.884q-.382.362-.775.723c-.923.846-2.047.959-2.838.367c-.77-.576-.981-1.68-.32-2.582c.837-1.142 2.767-3.405 4.185-5.026l.513.448l-.513-.448c.271-.31.332-.555.331-.702a.47.47 0 0 0-.171-.362Zm2.863 8.883l-.003-.002q.003 0 .003.002" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePenDrawSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePenToolIcon],svg[streamline-pen-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.881 4.754L.607 12.82a.5.5 0 0 0 .572.572l8.067-1.274a1 1 0 0 0 .838-.877L10.5 7.5l-4-4l-3.742.416a1 1 0 0 0-.877.838M6.5 3.5l2-3m2 7l3-2M1 13l4-4M4 8l2 2"></svg:path>`,
})
export class StreamlinePenToolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePenToolSolidIcon],svg[streamline-pen-tool-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.308.922L6.75 3q.07.053.134.116l4 4q.063.063.116.134l2.078-1.558a1 1 0 0 0 .107-1.507L9.815.815a1 1 0 0 0-1.507.107M1.381 5.254L.166 12.95L3.116 10l-.308-.308a.625.625 0 0 1 .884-.884l1.5 1.5a.625.625 0 0 1-.884.884L4 10.884l-2.95 2.95l7.696-1.215a1 1 0 0 0 .838-.877L10 8L6 4l-3.742.416a1 1 0 0 0-.877.838" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePenToolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePencilIcon],svg[streamline-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12.24L.5 13.5L1.76 9L10 .8a1 1 0 0 1 1.43 0l1.77 1.78a1 1 0 0 1 0 1.42z"></svg:path>`,
})
export class StreamlinePencilIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePencilSolidIcon],svg[streamline-pencil-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.715-.001a1.5 1.5 0 0 0-1.07.449L1.407 8.645a.5.5 0 0 0-.128.22l-1.26 4.5a.5.5 0 0 0 .616.616l4.5-1.26a.5.5 0 0 0 .22-.128l8.197-8.238l.002-.001a1.5 1.5 0 0 0 0-2.128l-.002-.001L11.786.449a1.5 1.5 0 0 0-1.071-.45"></svg:path>`,
})
export class StreamlinePencilSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePentagonIcon],svg[streamline-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.232 6.67a1 1 0 0 0-.282-1.136L7.646 1.047a1 1 0 0 0-1.292 0L1.05 5.534A1 1 0 0 0 .768 6.67l2.48 6.202a1 1 0 0 0 .929.629h5.646a1 1 0 0 0 .928-.629z"></svg:path>`,
})
export class StreamlinePentagonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePentagonSolidIcon],svg[streamline-pentagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.969.665a1.5 1.5 0 0 0-1.938 0L.727 5.153a1.5 1.5 0 0 0-.424 1.702l2.481 6.202A1.5 1.5 0 0 0 4.177 14h5.646a1.5 1.5 0 0 0 1.393-.943l2.48-6.202a1.5 1.5 0 0 0-.423-1.702z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePentagonSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePetPawIcon],svg[streamline-pet-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 9.5c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5s-1 .672-1 1.5s.448 1.5 1 1.5m3-4.5c.552 0 1-.672 1-1.5S5.052 2 4.5 2s-1 .672-1 1.5s.448 1.5 1 1.5m5 0c.552 0 1-.672 1-1.5S10.052 2 9.5 2s-1 .672-1 1.5s.448 1.5 1 1.5m3 4.5c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5s-1 .672-1 1.5s.448 1.5 1 1.5M10 10c0 1.38-1.62 2-3 2s-3-.62-3-2s1-3.5 3-3.5s3 2.12 3 3.5"></svg:path>`,
})
export class StreamlinePetPawIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePetPawSolidIcon],svg[streamline-pet-paw-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1.5c-.495 0-.883.301-1.123.662C3.134 2.526 3 3.001 3 3.5s.134.974.377 1.338c.24.36.628.662 1.123.662s.883-.301 1.123-.662C5.866 4.474 6 3.999 6 3.5s-.134-.974-.377-1.338c-.24-.36-.628-.662-1.123-.662m5 0c-.495 0-.883.301-1.123.662C8.134 2.526 8 3.001 8 3.5s.134.974.377 1.338c.24.36.628.662 1.123.662s.883-.301 1.123-.662c.243-.364.377-.839.377-1.338s-.134-.974-.377-1.338c-.24-.36-.628-.662-1.123-.662M1.5 6c-.495 0-.883.301-1.123.662C.134 7.026 0 7.501 0 8s.134.974.377 1.338c.24.36.628.662 1.123.662s.883-.301 1.123-.662C2.866 8.974 3 8.499 3 8s-.134-.974-.377-1.338C2.383 6.302 1.995 6 1.5 6M7 6c-1.2 0-2.089.644-2.657 1.443C3.782 8.23 3.5 9.207 3.5 10c0 .924.555 1.566 1.236 1.952c.67.38 1.51.548 2.264.548s1.594-.167 2.264-.548c.68-.386 1.236-1.028 1.236-1.952c0-.793-.282-1.77-.843-2.557C9.09 6.643 8.201 6 7 6m5.5 0c-.495 0-.883.301-1.123.662C11.134 7.026 11 7.501 11 8s.134.974.377 1.338c.24.36.628.662 1.123.662s.883-.301 1.123-.662C13.866 8.974 14 8.499 14 8s-.134-.974-.377-1.338C13.383 6.302 12.995 6 12.5 6" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePetPawSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePetriDishLabEquipmentIcon],svg[streamline-petri-dish-lab-equipment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path d="M2.529 7.664c.286-.139.994-.312 1.535.105s.554 1.146.493 1.458c-.06.312-.047 1.04.494 1.457c.54.417 1.249.244 1.535.105M8.833 6.5A1.667 1.667 0 1 0 7.32 4.137a1.25 1.25 0 1 0 .385 1.922a1.66 1.66 0 0 0 1.13.441ZM8.25 9a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m-5-3a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m7 5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlinePetriDishLabEquipmentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePetriDishLabEquipmentSolidIcon],svg[streamline-petri-dish-lab-equipment-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m8.833-.5A1.667 1.667 0 1 0 7.32 4.137a1.25 1.25 0 1 0 .385 1.922a1.66 1.66 0 0 0 1.13.441Zm-5.07 2.196a.5.5 0 0 0-.187.04a.625.625 0 0 1-.545-1.126c.167-.08.416-.155.694-.164a1.5 1.5 0 0 1 .965.3c.321.248.472.58.536.857c.063.27.054.53.018.712a.5.5 0 0 0 .01.19c.018.08.049.124.081.149c.033.025.082.043.165.04a.5.5 0 0 0 .186-.039a.625.625 0 1 1 .545 1.125a1.8 1.8 0 0 1-.693.164a1.5 1.5 0 0 1-.966-.3a1.5 1.5 0 0 1-.536-.856a1.8 1.8 0 0 1-.018-.713a.5.5 0 0 0-.01-.19c-.018-.08-.049-.123-.081-.148c-.033-.025-.082-.044-.165-.041ZM8 7.49a.875.875 0 1 0 0 1.75a.875.875 0 0 0 0-1.75M2.664 5.084a.875.875 0 1 1 1.75 0a.875.875 0 0 1-1.75 0m7.586 3.871a.875.875 0 1 0 0 1.75a.875.875 0 0 0 0-1.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePetriDishLabEquipmentSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePetsAllowedIcon],svg[streamline-pets-allowed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.75 11.018v-7.59l1.254 1.004c.633.506 1.42.782 2.23.782H7L8.292 2.63a1.79 1.79 0 0 1 1.597-.987h.682v2.232l2.679.893v.893c0 .986-.8 1.785-1.786 1.785H9.68v3.572a1.34 1.34 0 1 1-2.679 0v-.447c0-.493-.4-.892-.893-.892H4.321c-.493 0-.892.4-.892.892v.447a1.34 1.34 0 1 1-2.679 0"></svg:path><svg:path d="M7.012 5.097c.175.717 1 2.195 2.895 2.375"></svg:path></svg:g>`,
})
export class StreamlinePetsAllowedIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePetsAllowedSolidIcon],svg[streamline-pets-allowed-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.171 3.108a2.17 2.17 0 0 1 1.94-1.2h.733a.25.25 0 0 1 .25.25v2.22l2.708.902a.25.25 0 0 1 .17.237v.96a2.17 2.17 0 0 1-2.168 2.168h-1.67v.002C9.11 8.43 8.35 7.853 7.8 7.173a5.7 5.7 0 0 1-.884-1.554zM5.637 5.747H4.035a3.6 3.6 0 0 1-2.242-.787L.446 3.882a.25.25 0 0 0-.406.196v8.155a1.69 1.69 0 1 0 3.378 0v-.48a.71.71 0 0 1 .71-.709h1.919a.71.71 0 0 1 .71.71v.48a1.69 1.69 0 1 0 3.378 0V9.917c-1.49-.239-2.57-1.05-3.307-1.958a6.9 6.9 0 0 1-1.19-2.213Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePetsAllowedSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePharmacyIcon],svg[streamline-pharmacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.532 8.384l-.221-1.97a1 1 0 0 1 .993-1.112h9.392a1 1 0 0 1 .993 1.112l-.221 1.97a4 4 0 0 1-1.966 3.012c.17.305.288.645.343 1.008a.748.748 0 0 1-.74.858h-6.21a.748.748 0 0 1-.74-.858c.055-.363.173-.703.342-1.008a4 4 0 0 1-1.965-3.012m5.937-3.103l2.373-3.72a1.2 1.2 0 0 1 1.644-.372v0c.569.355.736 1.107.37 1.67L10.281 5.28m-5.03 4.002H8.75M7 7.534v3.497"></svg:path>`,
})
export class StreamlinePharmacyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePharmacySolidIcon],svg[streamline-pharmacy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.103 1.071L8.135 4.156h3.083l1.084-1.668a1.308 1.308 0 1 0-2.2-1.417ZM1.067 8.848l-.29-2.58a1 1 0 0 1 .994-1.111h10.458a1 1 0 0 1 .994 1.112l-.29 2.58a4 4 0 0 1-2.055 3.062c.156.307.266.643.32 1a.816.816 0 0 1-.808.937H3.61a.816.816 0 0 1-.808-.937a3.3 3.3 0 0 1 .32-1a4 4 0 0 1-2.055-3.063m6.558-1.275a.625.625 0 1 0-1.25 0v1.304H5.071a.625.625 0 1 0 0 1.25h1.304v1.305a.625.625 0 1 0 1.25 0v-1.304h1.304a.625.625 0 0 0 0-1.25H7.625V7.571Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePharmacySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneIcon],svg[streamline-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.248 12.982a3.184 3.184 0 0 1-3.992-.44l-.449-.438a1.08 1.08 0 0 1 0-1.507L2.713 8.71a1.07 1.07 0 0 1 1.497 0a1.08 1.08 0 0 0 1.507 0L8.71 5.717a1.06 1.06 0 0 0 0-1.507a1.07 1.07 0 0 1 0-1.497L10.607.817a1.08 1.08 0 0 1 1.507 0l.439.45a3.184 3.184 0 0 1 .439 3.99a28.9 28.9 0 0 1-7.744 7.725"></svg:path>`,
})
export class StreamlinePhoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneContactPhonebookPhonebookPhoneNumberBooksBookIcon],svg[streamline-phone-contact-phonebook-phonebook-phone-number-books-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 13.5H2a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1ZM4 .5v13M7.5 4h2"></svg:path>`,
})
export class StreamlinePhoneContactPhonebookPhonebookPhoneNumberBooksBookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneMobilePhoneIcon],svg[streamline-phone-mobile-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M6.5 11h1"></svg:path>`,
})
export class StreamlinePhoneMobilePhoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneMobilePhoneAndroidPhoneMobileDeviceSmartphoneIphoneIcon],svg[streamline-phone-mobile-phone-android-phone-mobile-device-smartphone-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="13" x="2" y=".5" rx="1"></svg:rect><svg:path d="M6.25 11h1.5"></svg:path></svg:g>`,
})
export class StreamlinePhoneMobilePhoneAndroidPhoneMobileDeviceSmartphoneIphoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneMobilePhoneSolidIcon],svg[streamline-phone-mobile-phone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H3.802a.8.8 0 0 1-.179-.114a.5.5 0 0 1-.123-.147zM3.75 0A1.75 1.75 0 0 0 2 1.75v10.5c0 .592.361 1.032.65 1.278c.156.133.328.243.498.322c.154.073.37.15.602.15h6.5A1.75 1.75 0 0 0 12 12.25V1.75A1.75 1.75 0 0 0 10.25 0zM6.5 9.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePhoneMobilePhoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneModeAirplaneServerPlaneAirplaneDisableWirelessModeInternetNetworkIcon],svg[streamline-phone-mode-airplane-server-plane-airplane-disable-wireless-mode-internet-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.39 10.61H1.94a1.45 1.45 0 0 1 0-2.89h2.3l1.48-1.48l-4.06-2.5a1.45 1.45 0 0 1-.52-1.91a1.47 1.47 0 0 1 2-.77l5.3 2.45L11 .92A1.45 1.45 0 0 1 13.08 3l-2.59 2.56l2.45 5.35a1.46 1.46 0 0 1-.77 1.95a1.45 1.45 0 0 1-1.91-.52l-2.5-4.06l-1.48 1.48v2.3a1.45 1.45 0 0 1-2.89 0Z"></svg:path>`,
})
export class StreamlinePhoneModeAirplaneServerPlaneAirplaneDisableWirelessModeInternetNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneQrIcon],svg[streamline-phone-qr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 4.5V3h1m3 5.5h1v-1M6 8.5V7H4.5M8 3h1.5v2.5m-3-.5l1 .5"></svg:path><svg:path d="M10.5.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M6.5 11h1"></svg:path></svg:g>`,
})
export class StreamlinePhoneQrIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneQrSolidIcon],svg[streamline-phone-qr-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1.5a.25.25 0 0 0-.25.25v10.489a.5.5 0 0 0 .123.148a.8.8 0 0 0 .179.113H10.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25zm-1.75.25C2.25.784 3.034 0 4 0h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 10.5 14H4a1.4 1.4 0 0 1-.602-.15c-.17-.08-.342-.19-.498-.322c-.289-.246-.65-.686-.65-1.278zm2.325 1.606c0-.345.28-.625.625-.625h.82a.625.625 0 1 1 0 1.25h-.195v.605a.625.625 0 0 1-1.25 0zM9.3 6.422c.346 0 .625.28.625.625v.82c0 .345-.28.625-.625.625h-.82a.625.625 0 1 1 0-1.25h.195v-.195c0-.345.28-.625.625-.625m-4.1-.265a.625.625 0 0 0 0 1.25h.46v.46a.625.625 0 1 0 1.25 0V6.782a.625.625 0 0 0-.626-.625zm2.245-2.8c0-.346.28-.626.625-.626H9.3c.346 0 .625.28.625.625v1.76a.625.625 0 1 1-1.25 0V3.981H8.07a.625.625 0 0 1-.625-.625ZM7.206 4.68a.625.625 0 1 0-.559 1.118l.646.323a.625.625 0 1 0 .56-1.118zM6.75 9.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePhoneQrSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneRinging1Icon],svg[streamline-phone-ringing-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.51 13.07a2.7 2.7 0 0 1-3.37-.36l-.38-.38a.91.91 0 0 1 0-1.28l1.6-1.59a.9.9 0 0 1 1.27 0v0a.91.91 0 0 0 1.28 0l2.55-2.55a.91.91 0 0 0 0-1.28v0a.9.9 0 0 1 0-1.27L11 2.76a.91.91 0 0 1 1.28 0l.38.38a2.7 2.7 0 0 1 .41 3.37a24.2 24.2 0 0 1-6.56 6.56M7 .5A6.5 6.5 0 0 0 .5 7M7 3a4 4 0 0 0-4 4"></svg:path>`,
})
export class StreamlinePhoneRinging1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneRinging1SolidIcon],svg[streamline-phone-ringing-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.052.86a.75.75 0 0 0-.75-.75a7.25 7.25 0 0 0-7.25 7.25a.75.75 0 1 0 1.5 0a5.75 5.75 0 0 1 5.75-5.75a.75.75 0 0 0 .75-.75m-1.074 12.6a2.7 2.7 0 0 1-3.37-.36l-.38-.38a.91.91 0 0 1 0-1.28l1.6-1.59a.9.9 0 0 1 1.27 0a.91.91 0 0 0 1.28 0l2.55-2.55a.91.91 0 0 0 0-1.28a.9.9 0 0 1 0-1.27l1.54-1.6a.91.91 0 0 1 1.28 0l.38.38a2.7 2.7 0 0 1 .41 3.37a24.2 24.2 0 0 1-6.56 6.56m.638-10.457a.75.75 0 0 1 0 1.5a3.25 3.25 0 0 0-3.25 3.25a.75.75 0 0 1-1.5 0a4.75 4.75 0 0 1 4.75-4.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePhoneRinging1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneRinging2Icon],svg[streamline-phone-ringing-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.632 1.438h-5.99a.856.856 0 0 0-.856.855v9.414c0 .472.383.855.855.855h5.99a.856.856 0 0 0 .856-.855V2.293a.856.856 0 0 0-.855-.856Zm-3.424 8.985h.856m7.206-6.631c1.556 1.772 1.556 4.645 0 6.416m-1.666-5.25c.778 1.128.778 2.956 0 4.084"></svg:path>`,
})
export class StreamlinePhoneRinging2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneRinging2SolidIcon],svg[streamline-phone-ringing-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.536 2.582c0-.045.036-.082.081-.082H7.44c.046 0 .082.037.082.082v9.149a.08.08 0 0 1-.082.081H1.617a.08.08 0 0 1-.081-.081V2.58ZM1.617 1C.744 1 .036 1.708.036 2.582v9.149c0 .873.708 1.581 1.581 1.581H7.44c.874 0 1.582-.708 1.582-1.581V2.58A1.583 1.583 0 0 0 7.44 1zm2.495 8.733a.75.75 0 1 0 0 1.5h.832a.75.75 0 0 0 0-1.5zm7.638-.223c1.134-1.292 1.134-3.416 0-4.707a.625.625 0 0 1 .94-.825c1.547 1.764 1.547 4.593 0 6.356a.625.625 0 1 1-.94-.824M9.864 5.75c.249.362.392.868.392 1.405s-.143 1.044-.392 1.405a.625.625 0 0 0 1.028.71c.421-.61.614-1.378.614-2.115s-.193-1.504-.614-2.115a.625.625 0 0 0-1.028.71" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePhoneRinging2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneSignalFullPhoneMobileDeviceSignalWirelessSmartphoneIphoneBarBarsFullAndroidIcon],svg[streamline-phone-signal-full-phone-mobile-device-signal-wireless-smartphone-iphone-bar-bars-full-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75 7.5H.5v6h4.25m4.5-9h-4.5v9h4.5m0-13h4.25v13H9.25z"></svg:path>`,
})
export class StreamlinePhoneSignalFullPhoneMobileDeviceSignalWirelessSmartphoneIphoneBarBarsFullAndroidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneSignalLowPhoneMobileDeviceSignalWirelessSmartphoneIphoneBarLowBarsAndroidIcon],svg[streamline-phone-signal-low-phone-mobile-device-signal-wireless-smartphone-iphone-bar-low-bars-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.5h4.25v6H.5zm10.5 6h2.5m-8.75 0H8.5"></svg:path>`,
})
export class StreamlinePhoneSignalLowPhoneMobileDeviceSignalWirelessSmartphoneIphoneBarLowBarsAndroidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneSignalMediumSmartphonePhoneMobileDeviceIphoneSignalMediumWirelessBarBarsAndroidIcon],svg[streamline-phone-signal-medium-smartphone-phone-mobile-device-iphone-signal-medium-wireless-bar-bars-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75 7.5H.5v6h4.25m0-9h4.5v9h-4.5zm4.5 9h4.25"></svg:path>`,
})
export class StreamlinePhoneSignalMediumSmartphonePhoneMobileDeviceIphoneSignalMediumWirelessBarBarsAndroidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneSignalNonePhoneMobileDeviceSignalWirelessSmartphoneIphoneBarBarsNoZeroAndroidIcon],svg[streamline-phone-signal-none-phone-mobile-device-signal-wireless-smartphone-iphone-bar-bars-no-zero-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 13.5H3m8 0h2.5m-8 0h3"></svg:path>`,
})
export class StreamlinePhoneSignalNonePhoneMobileDeviceSignalWirelessSmartphoneIphoneBarBarsNoZeroAndroidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneSolidIcon],svg[streamline-phone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.17 13.24a3.32 3.32 0 0 1-4.161-.457l-.468-.458a1.123 1.123 0 0 1 0-1.57l1.986-1.966a1.113 1.113 0 0 1 1.56 0a1.123 1.123 0 0 0 1.571 0l3.12-3.12a1.103 1.103 0 0 0 0-1.571a1.113 1.113 0 0 1 0-1.56L10.756.56a1.123 1.123 0 0 1 1.57 0l.458.468a3.32 3.32 0 0 1 .458 4.16A30.1 30.1 0 0 1 5.17 13.24"></svg:path>`,
})
export class StreamlinePhoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneTelephoneAndroidPhoneMobileDeviceSmartphoneIphoneIcon],svg[streamline-phone-telephone-android-phone-mobile-device-smartphone-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.76 13a3.19 3.19 0 0 0 4-.44l.45-.44a1.08 1.08 0 0 0 0-1.51L11.3 8.72a1.07 1.07 0 0 0-1.5 0h0a1.08 1.08 0 0 1-1.51 0l-3-3a1.06 1.06 0 0 1 0-1.51h0a1.07 1.07 0 0 0 0-1.5L3.39.81a1.08 1.08 0 0 0-1.51 0l-.44.45a3.19 3.19 0 0 0-.44 4A28.94 28.94 0 0 0 8.76 13Z"></svg:path>`,
})
export class StreamlinePhoneTelephoneAndroidPhoneMobileDeviceSmartphoneIphoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePiSymbolCircleIcon],svg[streamline-pi-symbol-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.25A6.25 6.25 0 1 0 7 .75a6.25 6.25 0 0 0 0 12.5"></svg:path><svg:path d="M4 5.75c.088-.333.43-.872 1.053-1C5.832 4.59 10 4 10 4"></svg:path><svg:path d="M6 4.594C6 5.844 5.98 8.737 5 10m3.5-5.781v5.255c0 .175.12.526.6.526s.8-.351.9-.526"></svg:path></svg:g>`,
})
export class StreamlinePiSymbolCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePiSymbolCircleSolidIcon],svg[streamline-pi-symbol-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.25 7a6.75 6.75 0 1 1 13.5 0A6.75 6.75 0 0 1 .25 7m10.369-3.088a.625.625 0 0 0-.707-.53L10 4l-.088-.619h-.003l-.009.002l-.035.005l-.134.019a440 440 0 0 0-2.003.29c-1.13.165-2.39.356-2.801.44c-.924.191-1.403.967-1.531 1.454a.625.625 0 1 0 1.208.318a.8.8 0 0 1 .185-.316a.7.7 0 0 1 .39-.23q.074-.016.19-.037c-.01.556-.04 1.225-.121 1.89c-.127 1.028-.364 1.915-.742 2.4a.625.625 0 1 0 .988.767c.603-.777.866-1.968.994-3.015c.1-.815.127-1.625.135-2.243c.394-.06.827-.124 1.252-.187v4.536c0 .205.065.485.262.725c.218.266.552.426.963.426c.79 0 1.282-.56 1.443-.842a.625.625 0 0 0-1.086-.619s-.003.006-.01.014a.6.6 0 0 1-.12.117a.4.4 0 0 1-.202.079V4.756l.782-.112l.134-.019l.035-.004l.008-.002h.003L10 4l.087.619a.625.625 0 0 0 .532-.707" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePiSymbolCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePicturesFolderMemoriesIcon],svg[streamline-pictures-folder-memories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.901 13.25L5.3 8.004a.54.54 0 0 0-.688 0L.516 10.95M9.86 7.88a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path d="M.5 12.25V1.75a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class StreamlinePicturesFolderMemoriesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePicturesFolderMemoriesSolidIcon],svg[streamline-pictures-folder-memories-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.177.813A1.46 1.46 0 0 0 5.26.516H1.734A1.457 1.457 0 0 0 .276 1.974v10.053a1.46 1.46 0 0 0 1.458 1.458h10.532a1.46 1.46 0 0 0 1.458-1.458V3.89a1.46 1.46 0 0 0-1.458-1.458H6.912l-.202-.807a1.46 1.46 0 0 0-.533-.811ZM9.86 7.566a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-4.298-.351l5.466 5.02H1.734a.21.21 0 0 1-.208-.208V9.53L4.81 7.215a.595.595 0 0 1 .752 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePicturesFolderMemoriesSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePieChartIcon],svg[streamline-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M7 .5V7l4.6 4.6"></svg:path></svg:g>`,
})
export class StreamlinePieChartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePieChartSolidIcon],svg[streamline-pie-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375.028A7 7 0 1 0 11.64 12.24L6.57 7.454A.63.63 0 0 1 6.376 7V.028Zm6.124 11.304A7 7 0 0 0 7.625.027v6.704z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePieChartSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePiggyBankIcon],svg[streamline-piggy-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.896 2.681c.254.68.736 1.195 1.229 1.56m4.625.661H4.896m4.938 1.502a.25.25 0 1 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path><svg:path d="M10.604 1.277V3.35c1.563.65 1.844 1.761 1.844 3.213l.875.719v2.219c-.516 1.109-1.469 1.687-2.719 2.13v.984a.5.5 0 0 1-.5.5h-1.75a.5.5 0 0 1-.5-.5v-.984h-3.14v.906a.5.5 0 0 1-.5.5H2.448a.5.5 0 0 1-.5-.5v-1.77c0-.047-.092-.303-.211-.699C1.389 8.91.81 6.954 1.642 5.112c.697-1.543 2.383-2.721 6.025-2.517c.522-1.38 1.906-1.741 2.612-1.71c.201.01.325.19.325.392"></svg:path></svg:g>`,
})
export class StreamlinePiggyBankIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePiggyBankSolidIcon],svg[streamline-piggy-bank-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.349 2.08C8.059.705 9.53.352 10.302.387c.553.025.802.516.802.89V3.03c.7.352 1.169.822 1.457 1.407c.283.577.369 1.225.384 1.889l.695.57a.5.5 0 0 1 .183.387v2.219a.5.5 0 0 1-.047.21c-.548 1.179-1.519 1.816-2.672 2.267v.637a1 1 0 0 1-1 1h-1.75a1 1 0 0 1-1-1v-.484h-2.14v.406a1 1 0 0 1-1 1H2.447a1 1 0 0 1-1-1v-1.716l-.038-.121l-.02-.063l-.132-.425l-.005-.015C.91 9.055.273 6.932 1.186 4.907a4 4 0 0 1 .23-.442C.944 4.09.47 3.563.208 2.859a.625.625 0 0 1 1.17-.437c.165.44.476.798.829 1.075a4.7 4.7 0 0 1 1.127-.75c.997-.477 2.31-.724 4.015-.666Zm.026 2.822c0 .345-.28.625-.625.625H4.896a.625.625 0 1 1 0-1.25H6.75c.346 0 .625.28.625.625m2.459 2.017a.766.766 0 1 0 0-1.53a.766.766 0 0 0 0 1.53" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePiggyBankSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlanetIcon],svg[streamline-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.73 2.21C10.82.8 12.56.15 13.2.8c1 1-1.04 4.56-4.44 8s-7 5.44-8 4.44c-.657-.657-.02-2.455 1.491-4.592"></svg:path><svg:path d="M5.44 11.754A5 5 0 0 0 7 12a5 5 0 0 0 4.736-6.613M3 10a5 5 0 0 1 7-7"></svg:path></svg:g>`,
})
export class StreamlinePlanetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlanetSolidIcon],svg[streamline-planet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.368.011c.401.012.83.13 1.16.465c.507.509.518 1.227.402 1.817c-.121.62-.42 1.322-.83 2.05q-.327.585-.76 1.217a5.5 5.5 0 0 1-2.68 6.246a5.56 5.56 0 0 1-4.012.5a16 16 0 0 1-1.289.807c-.733.407-1.439.702-2.061.82c-.594.113-1.313.097-1.82-.41c-.334-.335-.455-.769-.468-1.177c-.012-.404.077-.837.22-1.27c.271-.81.782-1.753 1.462-2.74A5.5 5.5 0 0 1 8.4 1.652C9.385 1 10.325.494 11.13.227c.42-.14.842-.227 1.238-.216m-2.316 2.377q.138.09.27.19l.003.002l.451.344c-.76 1.285-1.975 2.829-3.49 4.363c-1.49 1.507-3.008 2.708-4.282 3.465l-.371-.46a6 6 0 0 1-.219-.311c-.358.596-.613 1.128-.76 1.57c-.112.337-.15.585-.144.749c.003.1.02.144.028.16c.023.012.142.063.48 0c.402-.077.949-.29 1.613-.659q.548-.304 1.157-.723c1.088-.773 2.252-1.765 3.386-2.913s2.123-2.317 2.896-3.407q.418-.605.722-1.148c.372-.663.588-1.207.667-1.606c.065-.333.016-.45.004-.47a.4.4 0 0 0-.14-.023c-.155-.005-.392.03-.72.14c-.436.144-.96.393-1.55.737Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlanetSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList4Icon],svg[streamline-play-list-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M5.23 9.23V4.91a.41.41 0 0 1 .62-.35l3.7 2.15a.41.41 0 0 1 0 .71l-3.7 2.16a.41.41 0 0 1-.62-.35"></svg:path></svg:g>`,
})
export class StreamlinePlayList4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList4SolidIcon],svg[streamline-play-list-4-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5zm4.954 3.146v4.848a.46.46 0 0 0 .696.392L9.8 7.463a.46.46 0 0 0 0-.797L5.65 4.254a.46.46 0 0 0-.696.392" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlayList4SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList5Icon],svg[streamline-play-list-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.35 8.5a1.35 1.35 0 1 0 0-2.7a1.35 1.35 0 0 0 0 2.7"></svg:path><svg:path d="M8.49 5a3 3 0 0 0-2.8-2v4.15"></svg:path><svg:path d="M10 .5H1.5a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M13.5 3.5v9a1 1 0 0 1-1 1h-9"></svg:path></svg:g>`,
})
export class StreamlinePlayList5Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList5SolidIcon],svg[streamline-play-list-5-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.475C0 .661.66 0 1.475 0h8.29c.815 0 1.476.66 1.476 1.475v8.29c0 .815-.66 1.476-1.476 1.476h-8.29A1.477 1.477 0 0 1 0 9.765zm2.406 6.13a1.756 1.756 0 0 1 2.011-1.737V2.63a.75.75 0 0 1 .75-.75c.95 0 1.875.34 2.567.968c.694.629 1.1 1.499 1.1 2.424a.75.75 0 1 1-1.5 0c0-.477-.207-.95-.607-1.313a2.2 2.2 0 0 0-.81-.462v4.108a1.756 1.756 0 0 1-3.511 0M13.97 3.5a.75.75 0 0 0-1.5 0v8.748a.22.22 0 0 1-.222.222H3.5a.75.75 0 0 0 0 1.5h8.748a1.72 1.72 0 0 0 1.722-1.722z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlayList5SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList8Icon],svg[streamline-play-list-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 .5H1.5a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M13.5 3.5v9a1 1 0 0 1-1 1h-9m.25-5.86V3.86a.36.36 0 0 1 .55-.31l3.27 1.89a.36.36 0 0 1 0 .62L4.3 8a.36.36 0 0 1-.55-.36"></svg:path></svg:g>`,
})
export class StreamlinePlayList8Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList8SolidIcon],svg[streamline-play-list-8-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.49.03C.675.03.015.69.015 1.505v8.29c0 .815.66 1.475 1.475 1.475h8.29c.815 0 1.476-.66 1.476-1.475v-8.29A1.476 1.476 0 0 0 9.78.03zm2.296 7.66V3.61a.387.387 0 0 1 .585-.33l3.494 2.03a.387.387 0 0 1 0 .67L4.371 8.02a.387.387 0 0 1-.585-.33m10.2-4.16a.75.75 0 0 0-1.5 0v8.748a.22.22 0 0 1-.223.222H3.515a.75.75 0 0 0 0 1.5h8.748a1.72 1.72 0 0 0 1.722-1.722V3.53Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlayList8SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList9Icon],svg[streamline-play-list-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.688 5.656a1 1 0 0 1 1-1h7.75a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7.75a1 1 0 0 1-1-1z"></svg:path><svg:path d="M10.5 2.875v-.281a1 1 0 0 0-1-1H1.75a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h.188M7.5 6.781l3 1.875l-3 1.875z"></svg:path></svg:g>`,
})
export class StreamlinePlayList9Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList9SolidIcon],svg[streamline-play-list-9-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.031 1.924a1 1 0 0 1 1-1h8.71a1 1 0 0 1 1 1v1.114H4.259a2.25 2.25 0 0 0-2.25 2.25v4.424h-.977a1 1 0 0 1-1-1V1.924Zm3.227 3.364a1 1 0 0 1 1-1h8.71a1 1 0 0 1 1 1v6.788a1 1 0 0 1-1 1h-8.71a1 1 0 0 1-1-1zm3.674 1.593a.5.5 0 0 1 .765-.424l2.882 1.801a.5.5 0 0 1 0 .848l-2.882 1.801a.5.5 0 0 1-.765-.424z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlayList9SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayListFolderIcon],svg[streamline-play-list-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 12h-4a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.28 1.24h6a1 1 0 0 1 1 1v2m-4.22 8a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path><svg:path d="M10.5 12.25V7.5a2.83 2.83 0 0 1 3 2.77"></svg:path></svg:g>`,
})
export class StreamlinePlayListFolderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayListFolderSolidIcon],svg[streamline-play-list-folder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.183.75a1.5 1.5 0 0 1 1.492 1.14l.215.86h5.61a1.5 1.5 0 0 1 1.5 1.5v2.975a5 5 0 0 0-.254-.248a4.83 4.83 0 0 0-3.238-1.228a2 2 0 0 0-2 2V9.6a2.926 2.926 0 0 0-1.699 3.65H1.5a1.5 1.5 0 0 1-1.5-1.5v-9.5A1.5 1.5 0 0 1 1.5.75zm4.795 6.468a.75.75 0 0 1 .53-.22a3.58 3.58 0 0 1 2.4.906a3.07 3.07 0 0 1 1.032 2.273a.75.75 0 1 1-1.5 0c0-.42-.184-.84-.54-1.161a2 2 0 0 0-.642-.385v3.691a1.675 1.675 0 1 1-1.5-1.666V7.75a.75.75 0 0 1 .22-.53Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlayListFolderSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayStationIcon],svg[streamline-play-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.225 13.254V.746L9.85 1.905c3.04.912 2.96 5.734 0 4.924l-1.676-.541"></svg:path><svg:path d="M8.062 13.254L12.31 11.9c2.692-.954.303-3.496-2.093-2.649l-2.155.788M4.426 8.463L1.696 9.7c-2.634 1.008-.452 3.46 2.057 2.649l.673-.274"></svg:path></svg:g>`,
})
export class StreamlinePlayStationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayStationSolidIcon],svg[streamline-play-station-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.459.09a.75.75 0 0 0-.978.713V5.71q0 .038.003.074l-.003.076v7.355a.75.75 0 0 0 1.5 0V5.86l-.003-.06V2.854a.625.625 0 0 1 1.25 0v4.268l1.376.432l.027.008c.934.255 1.775.088 2.374-.473c.567-.531.801-1.306.807-2.047c.012-1.472-.876-3.237-2.761-3.806L6.459.089ZM4.233 7.845l-2.539 1.15c-.751.292-1.326.75-1.552 1.388c-.235.668-.013 1.312.371 1.775c.743.893 2.23 1.35 3.72.878v-1.615l-.463.189c-.981.307-1.8-.047-2.103-.411c-.141-.17-.126-.272-.11-.316c.024-.068.15-.287.695-.495l.042-.018l1.94-.878V7.846Zm8.017 4.74l-4.022 1.281v-1.574l3.555-1.132c.548-.197.649-.406.663-.45c.01-.03.03-.142-.136-.334c-.349-.404-1.208-.746-2.112-.428l-1.97.72V9.072l1.46-.533l.007-.003c1.473-.52 2.987-.023 3.75.86c.39.452.65 1.097.428 1.78c-.218.668-.821 1.126-1.6 1.402z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlayStationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayStoreIcon],svg[streamline-play-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.859 11.981V1.741c0-.672.79-1.098 1.434-.771L12.37 6.09c.662.336.662 1.207 0 1.543l-10.077 5.12c-.644.327-1.434-.099-1.434-.772M9.23 9.23l-8.1-8.101m8.1 3.364l-8.1 8.1"></svg:path>`,
})
export class StreamlinePlayStoreIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayStoreSolidIcon],svg[streamline-play-store-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.352 1.305q0-.038.003-.073l5.63 5.629l-5.63 5.63l-.003-.073zM1.61 13.357q.15-.029.298-.102l6.943-3.527l-1.806-1.806zm6.496-6.496l2.152 2.152l2.586-1.314c.719-.365.719-1.31 0-1.675L10.257 4.71zm.745-2.866L1.908.468A1.1 1.1 0 0 0 1.61.366L7.045 5.8z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlayStoreSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePodiumIcon],svg[streamline-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 8.5H2l-1-5h12l-1 5H9m-2-5v-3m-2 6v7m4-7v7m-5 0h6m-7.5-10s0-3 2-3m7 3s0-3-2-3"></svg:path>`,
})
export class StreamlinePodiumIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePodiumSolidIcon],svg[streamline-podium-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a.75.75 0 0 1 .75.75V3h2.5L9.212 1.443L10.25 3h.42a4 4 0 0 0-.131-.513C10.32 1.835 10.002 1.5 9.5 1.5q-.154 0-.288-.057L8.75.75A.75.75 0 0 1 9.5 0c1.498 0 2.179 1.165 2.461 2.013c.119.354.188.702.228.987H13a.5.5 0 0 1 .49.598l-1 5A.5.5 0 0 1 12 9H9.5v3.5h.5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h.5V9H2a.5.5 0 0 1-.49-.402l-1-5A.5.5 0 0 1 1 3h.811c.04-.285.11-.633.227-.987C2.321 1.165 3.002 0 4.5 0a.75.75 0 1 1 0 1.5c-.502 0-.821.335-1.038.987c-.058.172-.1.348-.131.513H6.25V.75A.75.75 0 0 1 7 0m2.212 1.443A.75.75 0 0 1 8.75.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePodiumSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePolaroidFourIcon],svg[streamline-polaroid-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.25.5H1a.5.5 0 0 0-.5.5v4.25a.5.5 0 0 0 .5.5h4.25a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-.5-.5M13 .5H8.75a.5.5 0 0 0-.5.5v4.25a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-.5-.5M5.25 8.25H1a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h4.25a.5.5 0 0 0 .5-.5V8.75a.5.5 0 0 0-.5-.5m7.75 0H8.75a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 .5-.5V8.75a.5.5 0 0 0-.5-.5M.5 3.5h5.25m2.5 0h5.25m-5.25 7.75h5.25m-13 0h5.25"></svg:path>`,
})
export class StreamlinePolaroidFourIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePolaroidFourSolidIcon],svg[streamline-polaroid-four-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.36 5.458c0 .574-.464 1.039-1.038 1.039H1.178A1.04 1.04 0 0 1 .14 5.458v-4.42C.14.466.604 0 1.18 0h4.143c.574 0 1.039.465 1.039 1.039v4.42ZM1.613 1.486h3.276v2.518H1.612zM6.361 12.96c0 .573-.465 1.038-1.039 1.038H1.178A1.04 1.04 0 0 1 .14 12.96V8.54c0-.573.465-1.038 1.04-1.038h4.143c.574 0 1.039.465 1.039 1.038v4.42ZM1.612 8.987h3.276v2.518H1.612zm11.21 5.011c.574 0 1.039-.464 1.039-1.038V8.54c0-.573-.465-1.038-1.039-1.038H8.678c-.574 0-1.039.465-1.039 1.038v4.42c0 .573.465 1.038 1.039 1.038zm-.434-5.01H9.112v2.518h3.276v-2.52Zm1.473-3.53c0 .574-.465 1.039-1.039 1.039H8.678a1.04 1.04 0 0 1-1.039-1.039v-4.42A1.04 1.04 0 0 1 8.678 0h4.144c.574 0 1.039.465 1.039 1.039zM9.11 1.486h3.277v2.518H9.112V1.486Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePolaroidFourSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePoliticsCompaignIcon],svg[streamline-politics-compaign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.484 3.563h11.04M1.39 10.277h11.235M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m2.948-1.145v1.062m0 0L2.74 7.98m.708-1.063l.709 1.063m-.709-1.063l-1.062-.354m1.062.354l1.063-.354m2.449-.708v1.062m0 0L6.252 7.98m.708-1.063l.71 1.063m-.71-1.063l-1.062-.354m1.062.354l1.063-.354m2.449-.708v1.062m0 0L9.764 7.98m.708-1.063l.709 1.063m-.709-1.063L9.41 6.563m1.062.354l1.063-.354"></svg:path>`,
})
export class StreamlinePoliticsCompaignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePoliticsCompaignSolidIcon],svg[streamline-politics-compaign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.537 3.957l.04.059a5.43 5.43 0 0 1 .873 3.356a5.43 5.43 0 0 1-.913 2.671H2.463A5.44 5.44 0 0 1 1.538 7c0-1.127.34-2.173.925-3.043zM7 .037c-2.11 0-4 .938-5.276 2.42H1.71l-.204.264A6.93 6.93 0 0 0 .07 7.672a6.9 6.9 0 0 0 1.416 3.58l.225.291h.013A6.95 6.95 0 0 0 7 13.963c2.11 0 4-.938 5.276-2.42h.013l.225-.292l.115-.153A6.93 6.93 0 0 0 13.963 7a6.93 6.93 0 0 0-1.475-4.285l-.2-.258h-.012A6.95 6.95 0 0 0 7 .037M3.949 5.855a.5.5 0 1 0-1 0v.369l-.405-.135a.5.5 0 1 0-.316.948l.441.148l-.345.517a.5.5 0 1 0 .832.555l.293-.438l.292.438a.5.5 0 1 0 .832-.555l-.345-.517l.441-.148a.5.5 0 1 0-.316-.948l-.404.135zm3.012-.5a.5.5 0 0 1 .5.5v.369l.404-.135a.5.5 0 1 1 .316.948l-.441.148l.345.517a.5.5 0 0 1-.832.555L6.96 7.82l-.293.438a.5.5 0 1 1-.832-.555l.345-.517l-.441-.148a.5.5 0 1 1 .316-.948l.405.135v-.37a.5.5 0 0 1 .5-.5Zm4.011.5a.5.5 0 0 0-1 0v.369l-.404-.135a.5.5 0 1 0-.316.948l.441.148l-.345.517a.5.5 0 0 0 .832.555l.293-.438l.292.438a.5.5 0 0 0 .832-.555l-.345-.517l.441-.148a.5.5 0 0 0-.316-.948l-.405.135z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePoliticsCompaignSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePoliticsSpeechIcon],svg[streamline-politics-speech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 3.77A1.604 1.604 0 1 0 7 .564A1.604 1.604 0 0 0 7 3.77M1.959 6.979H12.04m-9.165 0l.459 6.416m7.791-6.416l-.459 6.416M7 8.59l.59 1.195l1.318.192l-.954.93l.225 1.313L7 11.6l-1.18.62l.226-1.313l-.954-.93l1.318-.192zM10 7a3 3 0 0 0-6 0"></svg:path>`,
})
export class StreamlinePoliticsSpeechIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePoliticsSpeechSolidIcon],svg[streamline-politics-speech-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 3.36A1.68 1.68 0 1 0 7 0a1.68 1.68 0 0 0 0 3.36M4.359 5.788a2.801 2.801 0 0 1 5.282 0H4.36ZM1.894 7.035a.75.75 0 0 0 .065 1.497h.891l.36 4.9a.5.5 0 0 0 .498.463h6.584a.5.5 0 0 0 .498-.464l.36-4.899h.891a.75.75 0 0 0 .065-1.497l-.065.003H1.96zM7 8.7a.5.5 0 0 1 .448.279l.262.53l.586.086a.5.5 0 0 1 .277.853l-.424.413l.1.583a.5.5 0 0 1-.725.527L7 11.695l-.524.275a.5.5 0 0 1-.725-.527l.1-.583l-.424-.413a.5.5 0 0 1 .277-.853l.586-.085l.262-.531A.5.5 0 0 1 7 8.699Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePoliticsSpeechSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePoliticsVote2Icon],svg[streamline-politics-vote-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.406 6.136H2.272a1 1 0 0 0-1 1v3.128h10.907V7.136a1 1 0 0 0-1-1H8.047M1.272 13.3v-3.036h10.907V13.3"></svg:path><svg:path d="M9.34 4.843L7.08 7.105a.5.5 0 0 1-.707 0L3.368 4.1a.5.5 0 0 1 0-.707L5.63 1.131a.5.5 0 0 1 .707 0L9.34 4.136a.5.5 0 0 1 0 .707M4.87 8.2h3.71"></svg:path></svg:g>`,
})
export class StreamlinePoliticsVote2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePoliticsVote2SolidIcon],svg[streamline-politics-vote-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.164 6.327l2.262-2.262a.5.5 0 0 0 0-.707L6.422.354a.5.5 0 0 0-.707 0L3.453 2.615a.5.5 0 0 0 0 .708l3.004 3.004a.5.5 0 0 0 .707 0m-4.892-.69h1.727l1.512 1.511h-1.22a.625.625 0 0 0 0 1.25h4.87a.625.625 0 0 0 0-1.25H8.11l1.511-1.512h1.557a1.5 1.5 0 0 1 1.5 1.5v2.617H.772V7.136a1.5 1.5 0 0 1 1.5-1.5Zm10.407 5.366H.772v2.47a.5.5 0 0 0 .5.5h10.907a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePoliticsVote2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePolkaDotCircleIcon],svg[streamline-polka-dot-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M3.8 5.8C3.8 4 5.2 2.5 7 2.5s3.2 1.5 3.2 3.2S8.8 9 7 9c-.8 0-1.6.5-1.9 1.4M5 11l1-5m1.8 5.25a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlinePolkaDotCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePolkaDotCircleSolidIcon],svg[streamline-polka-dot-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M4.284 5.75c0-1.56 1.207-2.82 2.716-2.82c1.521 0 2.716 1.273 2.716 2.715c0 1.467-1.219 2.82-2.716 2.82c-.32 0-.64.059-.942.173l.51-2.557a.625.625 0 1 0-1.225-.245L4.46 10.25l-.036.104a.6.6 0 0 0-.032.235l-.093.466a.625.625 0 1 0 1.226.245l.138-.691c.255-.583.8-.894 1.337-.894c2.26 0 3.966-1.988 3.966-4.07c0-2.107-1.73-3.966-3.966-3.966c-2.25 0-3.966 1.872-3.966 4.07a.625.625 0 1 0 1.25 0Zm4.409 5.428a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePolkaDotCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePolygonIcon],svg[streamline-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.793 13.207a1 1 0 0 1-.707.293H4.914a1 1 0 0 1-.707-.293L.793 9.793A1 1 0 0 1 .5 9.086V4.914a1 1 0 0 1 .293-.707L4.207.793A1 1 0 0 1 4.914.5h4.172a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707v4.172a1 1 0 0 1-.293.707z"></svg:path>`,
})
export class StreamlinePolygonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePolygonSolidIcon],svg[streamline-polygon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.914 0a1.5 1.5 0 0 0-1.06.44L.439 3.853A1.5 1.5 0 0 0 0 4.914v4.172c0 .398.158.78.44 1.06l3.414 3.415a1.5 1.5 0 0 0 1.06.439h4.172a1.5 1.5 0 0 0 1.06-.44l3.415-3.414A1.5 1.5 0 0 0 14 9.086V4.914a1.5 1.5 0 0 0-.44-1.06L10.147.439A1.5 1.5 0 0 0 9.086 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePolygonSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePoolLadderIcon],svg[streamline-pool-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5H13a2 2 0 0 1-2-2a2 2 0 0 1-4 0a2 2 0 0 1-4 0a2 2 0 0 1-2 2H.5m2-11a2 2 0 1 1 4 0v7m3-9a2 2 0 0 1 2 2v7m-5-5h5m-5 3h5"></svg:path>`,
})
export class StreamlinePoolLadderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePoolLadderSolidIcon],svg[streamline-pool-ladder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.605 1.524A1.166 1.166 0 0 0 3.44 2.69a.75.75 0 0 1-1.5 0a2.666 2.666 0 1 1 5.331 0v1.165h3.29V2.69a1.166 1.166 0 0 0-1.166-1.166a.75.75 0 0 1 0-1.5A2.666 2.666 0 0 1 12.06 2.69v6.002a.75.75 0 0 1-1.5 0V8.23H7.271v.591a.75.75 0 0 1-1.5 0V2.69a1.166 1.166 0 0 0-1.166-1.166m2.666 5.205h3.29V5.355H7.27V6.73Zm-5.274 4.102a.5.5 0 0 1 .463.303c.164.384.446.707.805.922c.69.414 1.78.414 2.47 0a2 2 0 0 0 .805-.922a.5.5 0 0 1 .92 0c.164.384.446.707.805.922c.69.414 1.78.414 2.47 0a2 2 0 0 0 .805-.922a.5.5 0 0 1 .922.005a1.85 1.85 0 0 0 1.18 1.063a.5.5 0 0 1 .358.479v.819a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-.82a.5.5 0 0 1 .357-.479a1.85 1.85 0 0 0 1.181-1.062a.5.5 0 0 1 .46-.308Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePoolLadderSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePopcornIcon],svg[streamline-popcorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m2.56 6l.83 6.62a1 1 0 0 0 1 .88h5.23a1 1 0 0 0 1-.88L11.44 6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.64 3.12a1.5 1.5 0 0 1 .36-.05l-.04-.01a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1-1.06-.43a1.5 1.5 0 0 1 1.44-2.51a1.8 1.8 0 0 1-.14-.69A2 2 0 0 1 6.267.787A2 2 0 0 1 7 1.56A2 2 0 0 1 8.76.5a2 2 0 0 1 2.02 1.93a1.8 1.8 0 0 1-.14.69"></svg:path><svg:path d="M7 6v7.5"></svg:path></svg:g>`,
})
export class StreamlinePopcornIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePopcornSolidIcon],svg[streamline-popcorn-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.402 2.773q-.201.004-.395.054c.1-.236.152-.488.154-.744a2.15 2.15 0 0 0-.676-1.485A2.2 2.2 0 0 0 8.949 0a2.2 2.2 0 0 0-1.124.31c-.34.201-.617.49-.803.834A2.17 2.17 0 0 0 6.219.31a2.21 2.21 0 0 0-2.646.296a2.14 2.14 0 0 0-.668 1.477c.001.256.053.508.153.744a1.65 1.65 0 0 0-1.577.42A1.6 1.6 0 0 0 1 4.393c0 .43.173.841.481 1.145c.308.303.726.463 1.161.463h8.716c.435 0 .853-.17 1.161-.474a1.607 1.607 0 0 0 0-2.29a1.66 1.66 0 0 0-1.161-.473l.043.01Zm-.044 4.477H7.75V14h1.874a1.5 1.5 0 0 0 1.487-1.302l.732-5.489q-.24.04-.485.041m-8.716 0a3 3 0 0 1-.485-.04l.732 5.488A1.5 1.5 0 0 0 4.376 14H6.25V7.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePopcornSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePorkMeatIcon],svg[streamline-pork-meat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M1.68 4.883c-.417.51-1.055 1.601-1.055 3.5C.625 11.696 3.686 13 7 13s6.375-1.304 6.375-4.617c0-1.899-.638-2.99-1.055-3.5c-.2-.246-.353-.546-.353-.864V1l-3.15 1.5S7.633 2.22 7 2.22s-1.817.28-1.817.28L2.033 1v3.02c0 .317-.152.617-.353.863"></svg:path><svg:path d="M9.938 8.969c0 1.344-1.316 2.156-2.938 2.156s-2.938-.75-2.938-2.156S5.378 6.813 7 6.813s2.938.812 2.938 2.156Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.188 5.75a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25m5.625.25a.125.125 0 1 0 0-.25m0 .25a.125.125 0 1 1 0-.25M6 9.219a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25m2 .25a.125.125 0 1 0 0-.25m0 .25a.125.125 0 1 1 0-.25"></svg:path></svg:g>`,
})
export class StreamlinePorkMeatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePorkMeatSolidIcon],svg[streamline-pork-meat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.248.549A.5.5 0 0 0 1.533 1v3.02c0 .159-.08.35-.24.547C.808 5.16.125 6.362.125 8.383c0 1.842.865 3.15 2.18 3.975C3.591 13.165 5.288 13.5 7 13.5c1.71 0 3.408-.335 4.696-1.143c1.314-.824 2.179-2.132 2.179-3.974c0-2.021-.683-3.223-1.168-3.816c-.16-.197-.24-.388-.24-.548V1a.5.5 0 0 0-.715-.451L8.76 1.974l-.03-.006a17 17 0 0 0-.491-.1c-.375-.07-.87-.148-1.238-.148s-.863.078-1.238.148c-.194.037-.366.073-.49.1l-.03.006L2.247.55Zm7.69 8.42c0 1.344-1.316 2.156-2.938 2.156s-2.938-.75-2.938-2.156S5.378 6.813 7 6.813s2.938.812 2.938 2.156M4.188 6.25a.625.625 0 1 1 0-1.25a.625.625 0 0 1 0 1.25m5.625 0a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25M8 9.719a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25m-2.625-.625a.625.625 0 1 1 1.25 0a.625.625 0 0 1-1.25 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePorkMeatSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePottedFlowerTulipIcon],svg[streamline-potted-flower-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4V.5l3.5 2l3.5-2V4a3.5 3.5 0 1 1-7 0M7 7.5v6m0-1v1h2.5a3 3 0 0 0 3-3V10a.5.5 0 0 0-.5-.5h-2a3 3 0 0 0-3 3M1.5 10v.5a3 3 0 0 0 3 3H7v-1a3 3 0 0 0-3-3H2a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class StreamlinePottedFlowerTulipIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePottedFlowerTulipSolidIcon],svg[streamline-potted-flower-tulip-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.249.068a.5.5 0 0 1 .5-.002L7 1.924L10.252.066A.5.5 0 0 1 11 .5V4c0 1.953-1.4 3.579-3.25 3.93v3.086A3 3 0 0 1 10 10h2a.5.5 0 0 1 .5.5v.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-.5A.5.5 0 0 1 2 10h2c.896 0 1.7.393 2.25 1.016V7.93A4 4 0 0 1 3 4V.5a.5.5 0 0 1 .249-.432" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePottedFlowerTulipSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePrayingHandIcon],svg[streamline-praying-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v1m3 0l.5-.5M4 1.5L3.5 1m10 12.5h-2.347a4 4 0 0 1-3.984-3.638l-.115-1.266a.94.94 0 0 1 .462-.9v0a.944.944 0 0 1 1.41.66L9.2 10"></svg:path><svg:path d="M13.5 9.997h-1.624a1 1 0 0 1-.992-.868l-.628-4.716a1.133 1.133 0 0 0-1.803-.756v0c-.285.214-.453.55-.453.906v2.934M.5 13.5h2.347a4 4 0 0 0 3.984-3.638l.115-1.266a.94.94 0 0 0-.462-.9v0a.944.944 0 0 0-1.41.66L4.8 10"></svg:path><svg:path d="M.5 9.996h1.624a1 1 0 0 0 .992-.868l.628-4.715a1.133 1.133 0 0 1 1.803-.757v0c.285.214.453.55.453.906v2.934"></svg:path></svg:g>`,
})
export class StreamlinePrayingHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePrayingHandSolidIcon],svg[streamline-praying-hand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM.5 14h2.32a4 4 0 0 0 3.986-3.667l.11-1.336a.92.92 0 0 0-.789-.988h-.002a1.077 1.077 0 0 0-1.176.917l-.161 1.105a.5.5 0 1 1-.99-.143l.16-1.106A2.08 2.08 0 0 1 6 7.003V5.245a1.344 1.344 0 0 0-2.673-.202L2.629 9.65a1 1 0 0 1-.989.85H.5a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5m13 0h-2.32a4 4 0 0 1-3.986-3.667l-.11-1.336a.92.92 0 0 1 .794-.989a1.077 1.077 0 0 1 1.173.918l.161 1.105a.5.5 0 1 0 .99-.143l-.16-1.106A2.08 2.08 0 0 0 8 7.002V5.246a1.344 1.344 0 0 1 2.673-.202l.698 4.607a1 1 0 0 0 .989.85h1.14a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5ZM11.53.72a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0m-8 0a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePrayingHandSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePrescriptionPillsDrugsHealthcareIcon],svg[streamline-prescription-pills-drugs-healthcare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5.5v12m0-12h5.75A2.75 2.75 0 0 1 10 3.25v0A2.75 2.75 0 0 1 7.25 6H1.5m3 0l8 7.5m-6.5 0L12.5 7"></svg:path>`,
})
export class StreamlinePrescriptionPillsDrugsHealthcareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePrescriptionPillsDrugsHealthcareSolidIcon],svg[streamline-prescription-pills-drugs-healthcare-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.923.25h5.308a3.288 3.288 0 0 1 0 6.577h-.642l2.374 2.226l2.584-2.583a.75.75 0 1 1 1.06 1.06l-2.549 2.55l2.532 2.373a.75.75 0 0 1-1.026 1.094L8.997 11.14l-2.39 2.39a.75.75 0 0 1-1.06-1.06l2.355-2.356l-3.506-3.287H2.673v5.25a.75.75 0 0 1-1.5 0V1a.75.75 0 0 1 .75-.75m5.308 5.077H2.673V1.75h4.558a1.788 1.788 0 1 1 0 3.577" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePrescriptionPillsDrugsHealthcareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePrinterIcon],svg[streamline-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 11h2a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1h2"></svg:path><svg:path d="M3.5 9.5V13a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V9.5zm7-5V1a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v3.5M11 7h-1"></svg:path></svg:g>`,
})
export class StreamlinePrinterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePrinterSolidIcon],svg[streamline-printer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25.5V3h7.5V.5a.5.5 0 0 0-.5-.5h-6.5a.5.5 0 0 0-.5.5m.638 9V13c0 .133.047.26.13.354a.42.42 0 0 0 .314.146h5.336a.42.42 0 0 0 .314-.146a.53.53 0 0 0 .13-.354V9.5zM.45 4.804a1.53 1.53 0 0 1 1.049-.41h11c.388 0 .766.144 1.05.41c.284.267.45.636.45 1.029v4.227c0 .393-.166.762-.45 1.03c-.284.265-.662.41-1.05.41h-1.138v-2c0-.69-.56-1.25-1.25-1.25H3.888c-.69 0-1.25.56-1.25 1.25v2H1.5c-.388 0-.766-.145-1.05-.41A1.4 1.4 0 0 1 0 10.06V5.833c0-.393.166-.762.45-1.029m8.864 1.444c0-.345.28-.625.625-.625h1.637a.625.625 0 1 1 0 1.25H9.94a.625.625 0 0 1-.625-.625Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePrinterSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProductionBeltIcon],svg[streamline-production-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.9 8.875h8.2a2.305 2.305 0 0 1 0 4.61H2.9a2.305 2.305 0 0 1 0-4.61m7.545-7.379h-7c-.351 0-.636.254-.636.568v6.243c0 .314.285.568.636.568h7c.351 0 .636-.254.636-.568V2.064c0-.314-.285-.568-.636-.568"></svg:path><svg:path d="M8.218 1.496v2.838a.27.27 0 0 1-.093.2a.34.34 0 0 1-.225.084H5.99a.34.34 0 0 1-.224-.083a.27.27 0 0 1-.093-.2v-2.84M3.735 11.43a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m3.265.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m3.265.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineProductionBeltIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProductionBeltSolidIcon],svg[streamline-production-belt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.294 1.125h2.364c.374 0 .676.27.676.602v5.984H2.646l-.097.001V1.727c0-.333.302-.602.676-.602H5.59v3.014c0 .08.036.156.1.213a.36.36 0 0 0 .238.088h2.028a.36.36 0 0 0 .239-.088a.3.3 0 0 0 .099-.213zM2.646 8.96h8.708a2.448 2.448 0 0 1 0 4.895H2.646a2.448 2.448 0 1 1 0-4.895m1.761 2.44a.875.875 0 1 1-1.75 0a.875.875 0 0 1 1.75 0m3.473 0a.875.875 0 1 1-1.75 0a.875.875 0 0 1 1.75 0m2.597.874a.875.875 0 1 0 0-1.75a.875.875 0 0 0 0 1.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineProductionBeltSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserAddAppCodeAppsAddProgrammingWindowPlusIcon],svg[streamline-programming-browser-add-app-code-apps-add-programming-window-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 3.5h13m-4 5h-5M7 6v5"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserAddAppCodeAppsAddProgrammingWindowPlusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserBuildBuildWebsiteDevelopmentWindowCodeProgrammingWebBackendBrowserDevIcon],svg[streamline-programming-browser-build-build-website-development-window-code-programming-web-backend-browser-dev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.5v5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h4v7Zm-13-4h13m-3.5 4v-7"></svg:path>`,
})
export class StreamlineProgrammingBrowserBuildBuildWebsiteDevelopmentWindowCodeProgrammingWebBackendBrowserDevIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserCheckCheckmarkPassWindowAppCodeProgrammingSuccessCheckAppsIcon],svg[streamline-programming-browser-check-checkmark-pass-window-app-code-programming-success-check-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 3.5h13M4 9l2 1.5l3.5-4"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserCheckCheckmarkPassWindowAppCodeProgrammingSuccessCheckAppsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserCode1CodeBrowserLineShellProgrammingCommandTerminalIcon],svg[streamline-programming-browser-code-1-code-browser-line-shell-programming-command-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 4h13M4 7l1.5 1.5L4 10m4.5-1.5h2"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserCode1CodeBrowserLineShellProgrammingCommandTerminalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserCode2CodeBrowserTagsAngleProgrammingBracketIcon],svg[streamline-programming-browser-code-2-code-browser-tags-angle-programming-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 4h13m-9 3L3 8.5L4.5 10M10 7l1.5 1.5L10 10m-3.5.5L8 6"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserCode2CodeBrowserTagsAngleProgrammingBracketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserDashboardAppCodeAppsProgrammingWindowDashboardPerformanceIcon],svg[streamline-programming-browser-dashboard-app-code-apps-programming-window-dashboard-performance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 3.5h13m-6.5 7L10.5 7m0 3.5h1M7 7V6M4.53 8.03l-.71-.71M3.5 10.5h-1"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserDashboardAppCodeAppsProgrammingWindowDashboardPerformanceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserDeleteAppCodeAppsFailDeleteWindowRemoveIcon],svg[streamline-programming-browser-delete-app-code-apps-fail-delete-window-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 3.5h13m-4.5 7l-4-4m4 0l-4 4"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserDeleteAppCodeAppsFailDeleteWindowRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserFavoriteHeartWindowAppCodeFavoriteLikeProgrammingHeartAppsIcon],svg[streamline-programming-browser-favorite-heart-window-app-code-favorite-like-programming-heart-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 3.5h13M7 7.5c1-2 3-1 3 .5c0 2-3 3-3 3s-3-1-3-3c0-1.5 2-2.5 3-.5Z"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserFavoriteHeartWindowAppCodeFavoriteLikeProgrammingHeartAppsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserFavoriteStarWindowStarAppCodeFavoriteLikeProgrammingAppsIcon],svg[streamline-programming-browser-favorite-star-window-star-app-code-favorite-like-programming-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 13.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1m-12-10h13"></svg:path><svg:path d="M6.45 7.37a.59.59 0 0 1 1.1 0L8.19 9H9.9a.6.6 0 0 1 .4 1l-1.51 1.36l.64 1.28a.58.58 0 0 1-.12.69a.61.61 0 0 1-.7.1L7 12.55l-1.61.88a.61.61 0 0 1-.7-.1a.58.58 0 0 1-.12-.69l.64-1.28L3.7 10a.6.6 0 0 1 .4-1h1.71Z"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserFavoriteStarWindowStarAppCodeFavoriteLikeProgrammingAppsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserHashWindowHashCodeProgrammingInternetLanguageBrowserWebTagIcon],svg[streamline-programming-browser-hash-window-hash-code-programming-internet-language-browser-web-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 13.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1m-12-10h13m-7 3l-2 7m5-7l-2 7m3-5H4m6 3H3.5"></svg:path>`,
})
export class StreamlineProgrammingBrowserHashWindowHashCodeProgrammingInternetLanguageBrowserWebTagIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserKeySecurePasswordWindowBrowserKeySecurityLoginIcon],svg[streamline-programming-browser-key-secure-password-window-browser-key-security-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6.44" cy="11.33" r="2.17"></svg:circle><svg:path d="m8 9.8l3.86-3.86a.36.36 0 0 1 .51 0l1.13 1.15m-3.05.28l1.02 1.02M2 12.5h-.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1V4m-13-.5h13"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserKeySecurePasswordWindowBrowserKeySecurityLoginIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserMultipleWindowAppCodeAppsTwoProgrammingWindowCascadeIcon],svg[streamline-programming-browser-multiple-window-app-code-apps-two-programming-window-cascade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 5V1.5a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H11m-8-7h10.5"></svg:path><svg:rect width="8" height="6" x=".5" y="7.5" rx="1"></svg:rect><svg:path d="M.5 10h8"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserMultipleWindowAppCodeAppsTwoProgrammingWindowCascadeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserRemoveAppCodeAppsSubtractProgrammingWindowMinusIcon],svg[streamline-programming-browser-remove-app-code-apps-subtract-programming-window-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M.5 3.5h13m-4 5h-5"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserRemoveAppCodeAppsSubtractProgrammingWindowMinusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserSearchSearchWindowGlassAppCodeProgrammingQueryFindMagnifyingAppsIcon],svg[streamline-programming-browser-search-search-window-glass-app-code-programming-query-find-magnifying-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 12.5h-4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v5m-13-3h13"></svg:path><svg:circle cx="9.5" cy="9.5" r="2.5"></svg:circle><svg:path d="m11.27 11.27l2.23 2.23"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBrowserSearchSearchWindowGlassAppCodeProgrammingQueryFindMagnifyingAppsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserSettingWindowGearAppCodeProgrammingCogSettingsAppsIcon],svg[streamline-programming-browser-setting-window-gear-app-code-programming-cog-settings-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 13.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1m-12-10h13M7 6.5V8m-3.03.25l1.3.75m-1.3 2.75l1.3-.75M7 13.5V12m3.03-.25L8.73 11m1.3-2.75L8.73 9"></svg:path><svg:circle cx="7" cy="10" r="2"></svg:circle></svg:g>`,
})
export class StreamlineProgrammingBrowserSettingWindowGearAppCodeProgrammingCogSettingsAppsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBrowserWarningWindowAppCodeProgrammingNotificationWarningAlertAppsIcon],svg[streamline-programming-browser-warning-window-app-code-programming-notification-warning-alert-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 13.5h-2a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-2m-10-10h13M7 6.5V10"></svg:path><svg:circle cx="7" cy="13" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineProgrammingBrowserWarningWindowAppCodeProgrammingNotificationWarningAlertAppsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingBugCodeBugSecurityProgrammingSecureComputerIcon],svg[streamline-programming-bug-code-bug-security-programming-secure-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="8" r="4.5"></svg:circle><svg:path d="M2.5 8h-2m0 3.5a3.46 3.46 0 0 0 2.63-1.2m0-4.6A3.46 3.46 0 0 0 .5 4.5m11 3.5h2m0 3.5a3.46 3.46 0 0 1-2.63-1.2m0-4.6a3.46 3.46 0 0 1 2.63-1.2m-5.26-.83A2.5 2.5 0 0 0 9.5 1.5m-5 0a2.5 2.5 0 0 0 1.26 2.17M2.61 7h8.78"></svg:path></svg:g>`,
})
export class StreamlineProgrammingBugCodeBugSecurityProgrammingSecureComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingCloudAddCloudNetworkInternetAddServerPlusIcon],svg[streamline-programming-cloud-add-cloud-network-internet-add-server-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 8.5a3 3 0 1 0-2.15-5.09A4 4 0 1 0 4.5 8.5M10 11H5m2.5-2.5v5"></svg:path>`,
})
export class StreamlineProgrammingCloudAddCloudNetworkInternetAddServerPlusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingCloudCloudInternetServerNetworkIcon],svg[streamline-programming-cloud-cloud-internet-server-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 11a3 3 0 1 0-2.15-5.09A4 4 0 1 0 4.5 11Z"></svg:path>`,
})
export class StreamlineProgrammingCloudCloudInternetServerNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingCloudDataTransferCloudDataTransferInternetServerNetworkIcon],svg[streamline-programming-cloud-data-transfer-cloud-data-transfer-internet-server-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12 8.1a3 3 0 1 0-3.65-4.69A4 4 0 1 0 1.38 7M3.5 9.5l2-2v6"></svg:path><svg:path d="m10.5 11.5l-2 2v-6"></svg:path></svg:g>`,
})
export class StreamlineProgrammingCloudDataTransferCloudDataTransferInternetServerNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingCloudDownloadCloudDownInternetNetworkDownloadServerArrowIcon],svg[streamline-programming-cloud-download-cloud-down-internet-network-download-server-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 8.5a3 3 0 1 0-2.15-5.09A4 4 0 1 0 4.5 8.5m3 5v-6m-2 4l2 2l2-2"></svg:path>`,
})
export class StreamlineProgrammingCloudDownloadCloudDownInternetNetworkDownloadServerArrowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingCloudOffCloudNetworkInternetDisableServerOffIcon],svg[streamline-programming-cloud-off-cloud-network-internet-disable-server-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.17 3.17a4.08 4.08 0 0 1 6.18 2.24a3 3 0 1 1 2.24 5.09l-1 .05M.75 5.1A4 4 0 0 0 .5 6.5a4 4 0 0 0 4 4H6m-5.5-9l11 11"></svg:path>`,
})
export class StreamlineProgrammingCloudOffCloudNetworkInternetDisableServerOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingCloudRemoveCloudNetworkInternetSubtractMinusServerRemoveIcon],svg[streamline-programming-cloud-remove-cloud-network-internet-subtract-minus-server-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 8.5a3 3 0 1 0-2.15-5.09A4 4 0 1 0 4.5 8.5Zm-.5 3H5"></svg:path>`,
})
export class StreamlineProgrammingCloudRemoveCloudNetworkInternetSubtractMinusServerRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingCloudUploadCloudServerInternetUploadUpArrowNetworkIcon],svg[streamline-programming-cloud-upload-cloud-server-internet-upload-up-arrow-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 7.5v6m-2-4l2-2l2 2"></svg:path><svg:path d="M12 8.1a3 3 0 1 0-3.65-4.69A4 4 0 0 0 .5 4.5A4 4 0 0 0 1.38 7"></svg:path></svg:g>`,
})
export class StreamlineProgrammingCloudUploadCloudServerInternetUploadUpArrowNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingCloudWifiCloudWifiInternetServerNetworkIcon],svg[streamline-programming-cloud-wifi-cloud-wifi-internet-server-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 13.5a3 3 0 1 0-2.15-5.09A4 4 0 1 0 4.5 13.5Zm-.02-12.3a9 9 0 0 0-7 0m5.7 2.16a6.78 6.78 0 0 0-4.36 0"></svg:path>`,
})
export class StreamlineProgrammingCloudWifiCloudWifiInternetServerNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingModuleCubeCodeModuleProgrammingPluginIcon],svg[streamline-programming-module-cube-code-module-programming-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.39 3a.47.47 0 0 0-.21-.16l-6-2.27a.45.45 0 0 0-.36 0l-6 2.31A.47.47 0 0 0 .61 3a.48.48 0 0 0-.11.3v7.32a.5.5 0 0 0 .32.46l6 2.31h.36l6-2.31a.5.5 0 0 0 .32-.46V3.34a.48.48 0 0 0-.11-.34Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.46V5.5m0 0v7.96M.61 3.04L7 5.5l6.39-2.46"></svg:path>`,
})
export class StreamlineProgrammingModuleCubeCodeModuleProgrammingPluginIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingModulePuzzle1CodePuzzleModuleProgrammingPluginPieceIcon],svg[streamline-programming-module-puzzle-1-code-puzzle-module-programming-plugin-piece-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.09 1.19a2 2 0 0 1 .6 1.33L6.52.7a.67.67 0 0 1 1 0L9 2.24a2.18 2.18 0 0 0-.57.4a2.06 2.06 0 0 0 2.91 2.91a2.18 2.18 0 0 0 .4-.57l1.56 1.54a.67.67 0 0 1 0 1l-1.82 1.79a2.05 2.05 0 1 1-2.17 2.17L7.48 13.3a.67.67 0 0 1-1 0L5 11.76a2.18 2.18 0 0 0 .57-.4a2.06 2.06 0 0 0-2.93-2.91a2.18 2.18 0 0 0-.4.57L.7 7.48a.67.67 0 0 1 0-1l1.82-1.79a2 2 0 0 1-1.33-.6a2.05 2.05 0 0 1 2.9-2.9Z"></svg:path>`,
})
export class StreamlineProgrammingModulePuzzle1CodePuzzleModuleProgrammingPluginPieceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingModuleThreeCodeThreeModuleProgrammingPluginIcon],svg[streamline-programming-module-three-code-three-module-programming-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5.25" height="5.25" x=".5" y="8.25" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x="8.25" y="8.25" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x="4.38" y=".5" rx=".5"></svg:rect></svg:g>`,
})
export class StreamlineProgrammingModuleThreeCodeThreeModuleProgrammingPluginIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingRssSquareWirelessRssFeedSquareTransmitBroadcastIcon],svg[streamline-programming-rss-square-wireless-rss-feed-square-transmit-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:circle cx="4" cy="10" r=".5"></svg:circle><svg:path d="M4.5 6.5a3 3 0 0 1 3 3m-3-6a6 6 0 0 1 6 6"></svg:path></svg:g>`,
})
export class StreamlineProgrammingRssSquareWirelessRssFeedSquareTransmitBroadcastIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingRssSymbolWirelessFeedRssTransmitBroadcastIcon],svg[streamline-programming-rss-symbol-wireless-feed-rss-transmit-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2.13" cy="11.88" r="1.5"></svg:circle><svg:path d="M13.38 12.12A11.5 11.5 0 0 0 1.88.62m.24 4.76a6.5 6.5 0 0 1 6.5 6.5"></svg:path></svg:g>`,
})
export class StreamlineProgrammingRssSymbolWirelessFeedRssTransmitBroadcastIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingScript1LanguageProgrammingCodeIcon],svg[streamline-programming-script-1-language-programming-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 10.5v-8a2 2 0 0 1 2-2h6.25M10 3.5v8a2 2 0 0 1-2 2m-2-2V11a.5.5 0 0 0-.5-.5H1a.5.5 0 0 0-.5.5v.5a2 2 0 0 0 2 2H8a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M11.75.5h0a1.75 1.75 0 0 1 1.75 1.75V3a.5.5 0 0 1-.5.5h-3h0V2.25A1.75 1.75 0 0 1 11.75.5ZM6 4h1.5M6 7h1.5"></svg:path></svg:g>`,
})
export class StreamlineProgrammingScript1LanguageProgrammingCodeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingScript2LanguageProgrammingCodeIcon],svg[streamline-programming-script-2-language-programming-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 3.5v8a2 2 0 0 1-2 2H.5a2 2 0 0 0 2-2v-9a2 2 0 0 1 2-2h7.25"></svg:path><svg:path d="M11.75.5h0a1.75 1.75 0 0 1 1.75 1.75V3a.5.5 0 0 1-.5.5h-3h0V2.25A1.75 1.75 0 0 1 11.75.5ZM6 4h1.5M5 7h2.5M5 10h2.5"></svg:path></svg:g>`,
})
export class StreamlineProgrammingScript2LanguageProgrammingCodeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingScriptFileCode1CodeFilesAngleProgrammingFileBracketIcon],svg[streamline-programming-script-file-code-1-code-files-angle-programming-file-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5 13.5l-2-2l2-2m3 4l2-2l-2-2"></svg:path><svg:path d="M2.5 7.5v-6a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1h-3"></svg:path><svg:path d="M8.5.5v5h5"></svg:path></svg:g>`,
})
export class StreamlineProgrammingScriptFileCode1CodeFilesAngleProgrammingFileBracketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingScriptFileCode2CodeProgrammingTerminalShellFileLineCommandFilesIcon],svg[streamline-programming-script-file-code-2-code-programming-terminal-shell-file-line-command-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.5 13.5l2-2l-2-2m2-2v-6a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1H10"></svg:path><svg:path d="M8.5.5v5h5m-9 8h3"></svg:path></svg:g>`,
})
export class StreamlineProgrammingScriptFileCode2CodeProgrammingTerminalShellFileLineCommandFilesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingScriptHtmlFiveLanguageFiveCodeProgrammingHtmlIcon],svg[streamline-programming-script-html-five-language-five-code-programming-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m12 10l-5 3.5L2 10L.5.5h13L12 10z"></svg:path><svg:path d="M9.5 3.5h-5L5 6h4v2.5L7 10L5 8.5"></svg:path></svg:g>`,
})
export class StreamlineProgrammingScriptHtmlFiveLanguageFiveCodeProgrammingHtmlIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingWebServerWorldInternetEarthWwwGlobeWorldwideWebNetworkIcon],svg[streamline-programming-web-server-world-internet-earth-www-globe-worldwide-web-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M.5 7h13m-4 0A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7Z"></svg:path></svg:g>`,
})
export class StreamlineProgrammingWebServerWorldInternetEarthWwwGlobeWorldwideWebNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProjectorBoardIcon],svg[streamline-projector-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-12 3h13m-6.5 7v3m-1.5-3l-3 3m6-3l3 3"></svg:path>`,
})
export class StreamlineProjectorBoardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineProjectorBoardSolidIcon],svg[streamline-projector-board-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v1.375H0zm0 2.625h14V9.5a1.5 1.5 0 0 1-1.5 1.5h-2.19l1.72 1.72a.75.75 0 1 1-1.06 1.06L8.19 11h-.44v2.25a.75.75 0 0 1-1.5 0V11h-.44l-2.78 2.78a.75.75 0 0 1-1.06-1.06L3.69 11H1.5A1.5 1.5 0 0 1 0 9.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineProjectorBoardSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePyramidShapeIcon],svg[streamline-pyramid-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.99 10.444l-5.593 2.528a1 1 0 0 1-.824 0L.979 10.441a.5.5 0 0 1-.21-.734l5.8-8.678a.5.5 0 0 1 .831 0l5.8 8.681a.5.5 0 0 1-.21.733ZM6.984.938v12.124"></svg:path>`,
})
export class StreamlinePyramidShapeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlinePyramidShapeSolidIcon],svg[streamline-pyramid-shape-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.36.525a1 1 0 0 0-.207.226L.353 9.43a1 1 0 0 0 .42 1.466l5.586 2.528V.524Zm1.25 12.9l5.585-2.526a1 1 0 0 0 .42-1.466L7.816.75A1 1 0 0 0 7.61.524z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePyramidShapeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineQrCodeIcon],svg[streamline-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 3H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M3 .5H1.5a1 1 0 0 0-1 1V3M11 .5h1.5a1 1 0 0 1 1 1V3M3 13.5H1.5a1 1 0 0 1-1-1V11M11 13.5h1.5a1 1 0 0 0 1-1V11M3 9.5V11h1.5M7 11V9.5H5.5m5.5-5H9.5V3M11 8V6.5H9.5m0 3V11H11"></svg:path>`,
})
export class StreamlineQrCodeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineQrCodeSolidIcon],svg[streamline-qr-code-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.776.076a1.7 1.7 0 0 0-1.7 1.7v1.425a.75.75 0 1 0 1.5 0V1.776a.2.2 0 0 1 .2-.2h1.425a.75.75 0 1 0 0-1.5zm2.22 2.67c-.69 0-1.25.56-1.25 1.25v2.073c0 .69.56 1.25 1.25 1.25h2.073c.69 0 1.25-.56 1.25-1.25V3.996c0-.69-.56-1.25-1.25-1.25zm.25 3.073V4.246h1.573v1.573zM10.049.826a.75.75 0 0 1 .75-.75h1.425a1.7 1.7 0 0 1 1.7 1.7v1.425a.75.75 0 0 1-1.5 0V1.776a.2.2 0 0 0-.2-.2h-1.425a.75.75 0 0 1-.75-.75M1.576 10.8a.75.75 0 0 0-1.5 0v1.425a1.7 1.7 0 0 0 1.7 1.7h1.425a.75.75 0 0 0 0-1.5H1.776a.2.2 0 0 1-.2-.2zm11.598-.75a.75.75 0 0 1 .75.75v1.425a1.7 1.7 0 0 1-1.7 1.7h-1.425a.75.75 0 0 1 0-1.5h1.425a.2.2 0 0 0 .2-.2V10.8a.75.75 0 0 1 .75-.75m-8.928-.86a.75.75 0 0 0-1.5 0v1.314c0 .414.336.75.75.75H4.81a.75.75 0 0 0 0-1.5h-.564zm1.46 0a.75.75 0 0 1 .75-.75H7a.75.75 0 0 1 .75.75v1.314a.75.75 0 0 1-1.5 0v-.593a.75.75 0 0 1-.544-.72ZM9.94 3.496a.75.75 0 1 0-1.5 0V4.81c0 .414.336.75.75.75h1.314a.75.75 0 1 0 0-1.5H9.94zM8.44 7a.75.75 0 0 1 .75-.75h1.314a.75.75 0 0 1 .75.75v.639a.75.75 0 0 1-1.492.111H9.19A.75.75 0 0 1 8.44 7m1.5 2.19a.75.75 0 0 0-1.5 0v1.314c0 .414.336.75.75.75h1.314a.75.75 0 1 0 0-1.5H9.94z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineQrCodeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineQualityEducationIcon],svg[streamline-quality-education-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 6.546c-.748-.553-1.869-1.52-5.083-1.52v6.924c3.214 0 4.335.967 5.083 1.52zm0 0c.748-.553 1.869-1.52 5.083-1.52v6.924c-3.214 0-4.335.967-5.083 1.52zM10.763.521H4.086a1 1 0 0 0-.528.15L1.801 1.765l1.757 1.092a1 1 0 0 0 .528.15h6.677a1.243 1.243 0 1 0 0-2.485ZM8.986.575v2.432"></svg:path>`,
})
export class StreamlineQualityEducationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineQualityEducationSolidIcon],svg[streamline-quality-education-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.096.577l5.91-.003v2.303l-5.91.003a1.25 1.25 0 0 1-.742-.243l-.958-.707a.25.25 0 0 1 0-.402L2.355.82a1.25 1.25 0 0 1 .74-.244Zm8.343 2.298l-1.183.001V.573h1.187c.634.01 1.119.573 1.119 1.15c0 .578-.485 1.142-1.119 1.152zm-5.931 2.31c.335.134.62.281.867.427V14a5.5 5.5 0 0 0-1.24-.7c-.735-.294-1.795-.537-3.412-.537a.5.5 0 0 1-.5-.5V5.075a.5.5 0 0 1 .5-.5c1.72 0 2.91.259 3.785.61M8.864 13.3c-.54.217-.919.466-1.24.699V5.612c.247-.146.533-.293.868-.427c.875-.351 2.065-.61 3.785-.61a.5.5 0 0 1 .5.5v7.188a.5.5 0 0 1-.5.5c-1.617 0-2.677.243-3.413.538Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineQualityEducationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineQuotation2Icon],svg[streamline-quotation-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 4L1 7m2-3l.5 3m7.75 0l-.5 3m2.75-3l-.5 3"></svg:path>`,
})
export class StreamlineQuotation2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineQuotation2SolidIcon],svg[streamline-quotation-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.49 3.877a.75.75 0 1 0-1.48.246l.5 3a.75.75 0 0 0 1.48-.246zm2.5 0a.75.75 0 1 0-1.48.246l.5 3a.75.75 0 0 0 1.48-.246zm7.133 2.383a.75.75 0 0 1 .617.863l-.5 3a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .863-.617m2.867.863a.75.75 0 1 0-1.48-.246l-.5 3a.75.75 0 1 0 1.48.246z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineQuotation2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRadioIcon],svg[streamline-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 4h-11a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M1.37 4L13.5.5"></svg:path><svg:path d="M4.5 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5-2.75H11m-1.5 2.5H11M.5 6.5h13"></svg:path></svg:g>`,
})
export class StreamlineRadioIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRadioSolidIcon],svg[streamline-radio-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.362 1.498A.75.75 0 1 0 12.935.06L1.316 3.511A1.5 1.5 0 0 0 0 5v.875h14V5a1.5 1.5 0 0 0-1.5-1.5H6.622zM14 7.125H0V12.5A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5zm-9.662 5.206a1.83 1.83 0 1 0 0-3.662a1.83 1.83 0 0 0 0 3.662M9.5 8.807a.625.625 0 0 0 0 1.25H11a.625.625 0 0 0 0-1.25zm-.625 3.125c0-.345.28-.625.625-.625H11a.625.625 0 1 1 0 1.25H9.5a.625.625 0 0 1-.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRadioSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRadioactive2Icon],svg[streamline-radioactive-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 10.99a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path><svg:path d="M9.35 1.31a3.32 3.32 0 1 1-4.7 0"></svg:path><svg:path d="M.5 8.5a3.32 3.32 0 1 1 2.35 4.07"></svg:path><svg:path d="M11.15 12.57A3.32 3.32 0 1 1 13.5 8.5"></svg:path></svg:g>`,
})
export class StreamlineRadioactive2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRadioactive2SolidIcon],svg[streamline-radioactive-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.271 2.062a.75.75 0 0 0-1.061-1.06a3.94 3.94 0 0 0-.826 4.357A3.94 3.94 0 0 0 .025 8.252a.75.75 0 0 0 1.45.389A2.44 2.44 0 0 1 2.91 7.014a4.12 4.12 0 0 0 2.393 4.211a2.44 2.44 0 0 1-2.1.41a.75.75 0 0 0-.387 1.45A3.94 3.94 0 0 0 7 11.622l.038.05a3.94 3.94 0 0 0 4.146 1.411a.75.75 0 1 0-.387-1.449a2.44 2.44 0 0 1-2.1-.41a4.12 4.12 0 0 0 2.393-4.211a2.44 2.44 0 0 1 1.436 1.627a.75.75 0 0 0 1.448-.39a3.94 3.94 0 0 0-3.358-2.892l.025-.061a3.94 3.94 0 0 0-.85-4.296a.75.75 0 0 0-1.062 1.06a2.44 2.44 0 0 1 .687 2.081A4.1 4.1 0 0 0 7 3.359c-.903 0-1.738.291-2.416.784a2.44 2.44 0 0 1 .687-2.081m3.264 3.625q.102-.082.194-.175A2.6 2.6 0 0 0 7 4.86c-.663 0-1.268.247-1.729.653q.092.093.194.175a4 4 0 0 1 .658.38a2.44 2.44 0 0 0 1.754 0a4 4 0 0 1 .658-.38Zm-2.29 3.2a2.44 2.44 0 0 0-.877-1.511a4 4 0 0 1-.659-.38a2 2 0 0 0-.263-.085a2.617 2.617 0 0 0 1.732 3.047q.042-.144.066-.295a4 4 0 0 1 0-.776ZM9.29 6.996a2 2 0 0 1 .264-.085a2.617 2.617 0 0 1-1.732 3.047a2 2 0 0 1-.067-.295a4 4 0 0 0 0-.776a2.44 2.44 0 0 1 .876-1.511a4 4 0 0 0 .659-.38" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRadioactive2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRainCloudIcon],svg[streamline-rain-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 11.5l.5-1m4 1l.5-1m-3.25 3l.5-1m-5 1l.5-1m8.5 1l.5-1m-.5-4.5a2.5 2.5 0 0 0 0-5a2.54 2.54 0 0 0-1.57.55A3.75 3.75 0 1 0 5 8z"></svg:path>`,
})
export class StreamlineRainCloudIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRainCloudSolidIcon],svg[streamline-rain-cloud-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.683.208a4.25 4.25 0 0 1 5.3 2.572a3 3 0 0 1 1.265-.28h.002a3 3 0 0 1 0 6H5A4.25 4.25 0 0 1 3.683.208M5.22 10.585a.75.75 0 1 0-1.342-.67l-.5 1a.75.75 0 1 0 1.342.67zM9.785 9.58a.75.75 0 0 1 .336 1.006l-.5 1a.75.75 0 1 1-1.342-.67l.5-1a.75.75 0 0 1 1.006-.336m-2.614 3.006a.75.75 0 1 0-1.342-.67l-.5 1a.75.75 0 1 0 1.342.67zM1.935 11.58a.75.75 0 0 1 .336 1.006l-.5 1a.75.75 0 1 1-1.342-.67l.5-1a.75.75 0 0 1 1.006-.336m10.136 1.006a.75.75 0 1 0-1.342-.67l-.5 1a.75.75 0 1 0 1.342.67z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRainCloudSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRainbowIcon],svg[streamline-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 10.25a6.5 6.5 0 1 1 13 0"></svg:path><svg:path d="M3 10.25a4 4 0 0 1 8 0"></svg:path><svg:path d="M5.5 10.25a1.5 1.5 0 0 1 3 0"></svg:path></svg:g>`,
})
export class StreamlineRainbowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRainbowSolidIcon],svg[streamline-rainbow-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 4.632a5.486 5.486 0 0 0-5.486 5.486a.75.75 0 0 1-1.5 0a6.986 6.986 0 0 1 13.972 0a.75.75 0 0 1-1.5 0A5.486 5.486 0 0 0 7 4.632M7 7.09a3.03 3.03 0 0 0-3.028 3.028a.75.75 0 0 1-1.5 0a4.528 4.528 0 1 1 9.056 0a.75.75 0 0 1-1.5 0A3.03 3.03 0 0 0 7 7.09m-.403 2.625a.57.57 0 0 1 .973.403a.75.75 0 0 0 1.5 0a2.07 2.07 0 1 0-4.14 0a.75.75 0 0 0 1.5 0a.57.57 0 0 1 .167-.403" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRainbowSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptIcon],svg[streamline-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.202 4.722a1.33 1.33 0 0 0-1.258-.889H4.912a1.19 1.19 0 0 0-.254 2.353l1.571.344a1.334 1.334 0 0 1-.285 2.637h-.888a1.33 1.33 0 0 1-1.258-.89M5.5 3.833V2.5m0 8V9.167"></svg:path><svg:path d="M12 .5H2.5a2 2 0 0 0-2 2v11L3 12l2.5 1.5L8 12l2.5 1.5V2a1.5 1.5 0 1 1 3 0v3.5h-3"></svg:path></svg:g>`,
})
export class StreamlineReceiptIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptAddIcon],svg[streamline-receipt-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6.5H3M5.5 4v5M12 .5H2.5a2 2 0 0 0-2 2v11L3 12l2.5 1.5L8 12l2.5 1.5V2a1.5 1.5 0 1 1 3 0v3.5h-3"></svg:path>`,
})
export class StreamlineReceiptAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptAddSolidIcon],svg[streamline-receipt-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11a.5.5 0 0 0 .757.429L3 12.583l2.243 1.346a.5.5 0 0 0 .514 0L8 12.583l2.243 1.346A.5.5 0 0 0 11 13.5V6h.005V2.5a.625.625 0 1 1 1.25 0V6H13.5a.5.5 0 0 0 .5-.5V2a2 2 0 0 0-2-2zm3 3.25a.75.75 0 0 1 .75.75v1.75H8a.75.75 0 0 1 0 1.5H6.25V9a.75.75 0 0 1-1.5 0V7.25H3a.75.75 0 0 1 0-1.5h1.75V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineReceiptAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptCheckIcon],svg[streamline-receipt-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.75 7l2 1.5l3.5-4"></svg:path><svg:path d="M12 .5H2.5a2 2 0 0 0-2 2v11L3 12l2.5 1.5L8 12l2.5 1.5V2a1.5 1.5 0 1 1 3 0v3.5h-3"></svg:path></svg:g>`,
})
export class StreamlineReceiptCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptCheckSolidIcon],svg[streamline-receipt-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11a.5.5 0 0 0 .757.429L3 12.583l2.243 1.346a.5.5 0 0 0 .514 0L8 12.583l2.243 1.346A.5.5 0 0 0 11 13.5V6h.005V2.5a.625.625 0 1 1 1.25 0V6H13.5a.5.5 0 0 0 .5-.5V2a2 2 0 0 0-2-2zm6.314 4.994a.75.75 0 1 0-1.128-.988L4.644 7.483L3.2 6.4a.75.75 0 1 0-.9 1.2l2 1.5a.75.75 0 0 0 1.014-.106z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineReceiptCheckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptSolidIcon],svg[streamline-receipt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.732.732A2.5 2.5 0 0 1 2.5 0H12a2 2 0 0 1 2 2v3.5a.5.5 0 0 1-.5.5h-1.245V2.5a.625.625 0 1 0-1.25 0V6H11v7.5a.5.5 0 0 1-.757.429L8 12.583L5.757 13.93a.5.5 0 0 1-.514 0L3 12.583L.757 13.93A.5.5 0 0 1 0 13.5v-11A2.5 2.5 0 0 1 .732.732M5.5 2a.75.75 0 0 1 .75.75v.528a2 2 0 0 1 1.553 1.305a.75.75 0 0 1-1.415.5a.5.5 0 0 0-.471-.333h-.968a.366.366 0 0 0-.078.723l1.473.322a2 2 0 0 1-.094 3.927v.528a.75.75 0 0 1-1.5 0v-.528a2 2 0 0 1-1.553-1.305a.75.75 0 0 1 1.415-.5a.5.5 0 0 0 .471.333h.834a.5.5 0 0 0 .107-.99L4.55 6.939a1.866 1.866 0 0 1 .2-3.677V2.75A.75.75 0 0 1 5.5 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineReceiptSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptSubtractIcon],svg[streamline-receipt-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6.5H3m9-6H2.5a2 2 0 0 0-2 2v11L3 12l2.5 1.5L8 12l2.5 1.5V2a1.5 1.5 0 1 1 3 0v3.5h-3"></svg:path>`,
})
export class StreamlineReceiptSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReceiptSubtractSolidIcon],svg[streamline-receipt-subtract-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11a.5.5 0 0 0 .757.429L3 12.583l2.243 1.346a.5.5 0 0 0 .514 0L8 12.583l2.243 1.346A.5.5 0 0 0 11 13.5V6h.005V2.5a.625.625 0 1 1 1.25 0V6H13.5a.5.5 0 0 0 .5-.5V2a2 2 0 0 0-2-2zM3 5.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineReceiptSubtractSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRecordingTapeBubbleCircleIcon],svg[streamline-recording-tape-bubble-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 0h5"></svg:path><svg:path d="M4.145 12.84a6.5 6.5 0 1 0-2.556-2.238m2.556 2.239L.5 13.5l1.089-2.897m2.556 2.238l.005-.001m-2.561-2.237l.001-.003"></svg:path></svg:g>`,
})
export class StreamlineRecordingTapeBubbleCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRecordingTapeBubbleCircleSolidIcon],svg[streamline-recording-tape-bubble-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.998.046A6.953 6.953 0 1 1 4.1 13.32l-3.466.626a.5.5 0 0 1-.557-.667l.994-2.646A6.954 6.954 0 0 1 6.998.046M8.781 7.05a1.037 1.037 0 1 1 2.074 0a1.037 1.037 0 0 1-2.074 0m1.037-2.287a2.287 2.287 0 0 0-2.039 3.324H6.317a2.287 2.287 0 1 0-2.039 1.25h5.548a2.287 2.287 0 0 0-.008-4.574m-5.54 1.25a1.037 1.037 0 1 0 0 2.074a1.037 1.037 0 0 0 0-2.074" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRecordingTapeBubbleCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRecordingTapeBubbleSquareIcon],svg[streamline-recording-tape-bubble-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.5 12.5l-4 1l1-3v-9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"></svg:path><svg:path d="M10 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M5 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 0h5"></svg:path></svg:g>`,
})
export class StreamlineRecordingTapeBubbleSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRecordingTapeBubbleSquareSolidIcon],svg[streamline-recording-tape-bubble-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.44.44A1.5 1.5 0 0 1 2.5 0h10A1.5 1.5 0 0 1 14 1.5v10a1.5 1.5 0 0 1-1.5 1.5H4.562l-3.94.985a.5.5 0 0 1-.596-.643L1 10.419V1.5c0-.398.158-.78.44-1.06m7.888 5.83a1.037 1.037 0 1 1 2.073 0a1.037 1.037 0 0 1-2.073 0m1.037-2.287a2.287 2.287 0 0 0-2.039 3.324H6.864a2.287 2.287 0 1 0-2.039 1.25h5.548a2.287 2.287 0 0 0-.008-4.574m-5.54 1.25a1.037 1.037 0 1 0 0 2.074a1.037 1.037 0 0 0 0-2.074" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRecordingTapeBubbleSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRecycle1Icon],svg[streamline-recycle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.008 10.082v1.999a.29.29 0 0 1-.29.28H3.62a1.45 1.45 0 0 1-.88-.51"></svg:path><svg:path d="M2.74 11.86s-1.09-.949 1.44-3.477h1.129l-1.69-2.789H.512l.85 1.09s-.57.1-.57.89a10 10 0 0 0 1.95 4.287v0Zm7.616-5.486l1.479-1a.26.26 0 0 1 .21 0a.26.26 0 0 1 .19.12l1.15 1.72a1 1 0 0 1 0 .89"></svg:path><svg:path d="M13.424 8.003s-.32 1.3-3.628 1v-.87l-1.939 2.539l1.84 2.828l.1-1.33s.369.45.999 0a18.7 18.7 0 0 0 2.628-4.167M4.36 4.285l-1.35-.62a.3.3 0 0 1-.14-.38l1.14-2.278a1 1 0 0 1 .74-.5"></svg:path><svg:path d="M4.749.507s1.23 0 2.788 2.999l-.81 1h3.359l1.19-3.14l-1.4.43a1.21 1.21 0 0 0-.73-.999a5.9 5.9 0 0 0-2.138-.29z"></svg:path></svg:g>`,
})
export class StreamlineRecycle1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRecycle1SolidIcon],svg[streamline-recycle-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.626 1.31c.98-1.646 3.337-1.72 4.42-.14l.593.866l.82-.405a.625.625 0 0 1 .859.789l-1.151 2.936a.625.625 0 0 1-.747.375l-3.085-.844a.625.625 0 0 1-.112-1.163l.686-.339l-.561-.88a.375.375 0 0 0-.597-.048L5.628 3.724a.625.625 0 0 1-1.004-.735zm-1.85 3.358a.625.625 0 0 1 .697.459l.812 3.093a.625.625 0 0 1-.951.679l-.637-.425l-.482.927a.375.375 0 0 0 .257.54l1.659.34a.625.625 0 0 1-.134 1.236l-1.956-.027C1.126 11.463-.117 9.46.711 7.732l.453-.948l-.76-.507A.625.625 0 0 1 .656 5.14l3.118-.471Zm3.386 6.552a.625.625 0 0 1 .05-.834l2.272-2.25a.625.625 0 0 1 1.064.485l-.05.763l1.044-.045a.375.375 0 0 0 .34-.494l-.537-1.605a.625.625 0 0 1 1.139-.503l.954 1.708c.934 1.672-.18 3.75-2.09 3.897l-1.047.081l-.059.912a.625.625 0 0 1-1.112.35z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRecycle1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRecycleBin2Icon],svg[streamline-recycle-bin-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 3.5h12m-10.5 0h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1zm2 0V3a2.5 2.5 0 1 1 5 0v.5m-4 3.001v4.002m3-4.002v4.002"></svg:path>`,
})
export class StreamlineRecycleBin2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRecycleBin2SolidIcon],svg[streamline-recycle-bin-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.763 2.013a1.75 1.75 0 0 1 2.914.737H5.323a1.75 1.75 0 0 1 .44-.737m-1.974.737a3.25 3.25 0 0 1 6.422 0H13a.75.75 0 0 1 0 1.5h-1v8.25a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 12.5V4.25H1a.75.75 0 1 1 0-1.5zM5 5.876c.345 0 .625.28.625.625v4.002a.625.625 0 0 1-1.25 0V6.501c0-.345.28-.625.625-.625m4.625.625a.625.625 0 0 0-1.25 0v4.002a.625.625 0 0 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRecycleBin2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReducedInequalitiesIcon],svg[streamline-reduced-inequalities-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.733 6.91l2.45-2.45v4.9zm12.477 0l-2.45-2.45v4.9zM5.112 5.516h3.72m-3.72 2.79h3.72m-1.86 4.844l-2.45-2.45h4.9zm0-12.479l-2.45 2.45h4.9z"></svg:path>`,
})
export class StreamlineReducedInequalitiesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReducedInequalitiesSolidIcon],svg[streamline-reduced-inequalities-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.423 2.95a.5.5 0 0 0 .462.308h4.173a.5.5 0 0 0 .354-.853L7.325.318a.5.5 0 0 0-.707 0L4.532 2.405a.5.5 0 0 0-.109.544ZM5.63 4.765a.75.75 0 1 0 0 1.5h2.684a.75.75 0 1 0 0-1.5zm0 2.79a.75.75 0 1 0 0 1.5h2.684a.75.75 0 1 0 0-1.5zm3.89 3.316a.5.5 0 0 0-.462-.309H4.885a.5.5 0 0 0-.353.854l2.086 2.086a.5.5 0 0 0 .707 0l2.087-2.086a.5.5 0 0 0 .108-.545m1.413-6.51a.5.5 0 0 0-.309.462v4.173a.5.5 0 0 0 .854.354l2.087-2.087a.5.5 0 0 0 0-.707L11.478 4.47a.5.5 0 0 0-.545-.108ZM3.011 9.46a.5.5 0 0 0 .308-.462V4.824a.5.5 0 0 0-.853-.354L.379 6.557a.5.5 0 0 0 0 .707l2.087 2.087a.5.5 0 0 0 .545.108Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineReducedInequalitiesSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRefrigeratorIcon],svg[streamline-refrigerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5.5h-7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1M2.5 6h9m-7-3v.5m-.5 9v1m6-1v1"></svg:path>`,
})
export class StreamlineRefrigeratorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRefrigeratorSolidIcon],svg[streamline-refrigerator-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0C2.682 0 2 .652 2 1.479v3.897l.029-.001H12V1.48A1.49 1.49 0 0 0 10.5 0zM2 11.265v-4.64h10v4.64c0 .74-.547 1.341-1.25 1.458v.52a.75.75 0 0 1-1.5 0v-.5h-4.5v.5a.75.75 0 0 1-1.5 0v-.52A1.485 1.485 0 0 1 2 11.265m3.041-8.656a.625.625 0 0 0-1.25 0v.5a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRefrigeratorSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReligionCross1ReligionCrossCultureBoldIcon],svg[streamline-religion-cross-1-religion-cross-culture-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 3.5H9v-3H5v3H2v4h3v6h4v-6h3v-4z"></svg:path>`,
})
export class StreamlineReligionCross1ReligionCrossCultureBoldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReligionHexagramStarJewJewishJudaismHexagramCultureReligionDavidIcon],svg[streamline-religion-hexagram-star-jew-jewish-judaism-hexagram-culture-religion-david-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.5h13L7 13.5L.5 3.5z"></svg:path><svg:path d="M.5 10.5h13L7 .5l-6.5 10z"></svg:path></svg:g>`,
})
export class StreamlineReligionHexagramStarJewJewishJudaismHexagramCultureReligionDavidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReligionIslamReligionIslamMoonCrescentMuslimCultureStarIcon],svg[streamline-religion-islam-religion-islam-moon-crescent-muslim-culture-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.21 7a5.5 5.5 0 0 1 5.47-5.5a6.5 6.5 0 1 0 0 11A5.5 5.5 0 0 1 5.21 7Z"></svg:path><svg:path d="m10.57 4.04l.91 1.81h1.81l-1.36 1.4l.43 2l-1.79-1l-1.71 1l.36-2l-1.36-1.4h1.81l.9-1.81z"></svg:path></svg:g>`,
})
export class StreamlineReligionIslamReligionIslamMoonCrescentMuslimCultureStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReligionShintoReligionGateCultureShintoJapanJapaneseShrineIcon],svg[streamline-religion-shinto-religion-gate-culture-shinto-japan-japanese-shrine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 4a.5.5 0 0 1-.5.5H1A.5.5 0 0 1 .5 4V.5a11.55 11.55 0 0 0 13 0ZM3 4.5v9m8-9v9M.5 8h13M7 4.5V8"></svg:path>`,
})
export class StreamlineReligionShintoReligionGateCultureShintoJapanJapaneseShrineIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReligionSymbolPeaceReligionPeaceWarCultureIcon],svg[streamline-religion-symbol-peace-religion-peace-war-culture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 .5v13m-5.07-2.43L7 6l5.07 5.07"></svg:path></svg:g>`,
})
export class StreamlineReligionSymbolPeaceReligionPeaceWarCultureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReligionSymbolYinYangReligionTaoYinYangTaoismCultureIcon],svg[streamline-religion-symbol-yin-yang-religion-tao-yin-yang-taoism-culture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 .5S2.93 4.09 7 7c3.5 2.5 0 6.5 0 6.5"></svg:path><svg:circle cx="9" cy="4.5" r="1"></svg:circle><svg:circle cx="5" cy="9.5" r="1"></svg:circle></svg:g>`,
})
export class StreamlineReligionSymbolYinYangReligionTaoYinYangTaoismCultureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReturn2Icon],svg[streamline-return-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 9.5h9a4 4 0 1 0 0-8h-3"></svg:path><svg:path d="m3.5 6.5l-3 3l3 3"></svg:path></svg:g>`,
})
export class StreamlineReturn2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineReturn2SolidIcon],svg[streamline-return-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.545.998a1 1 0 0 0 0 2h2.728a2.638 2.638 0 0 1 0 5.275H4.817V6.545a1 1 0 0 0-1.707-.707L.384 8.564a1 1 0 0 0-.22 1.09q.073.18.218.327l2.728 2.728a1 1 0 0 0 1.707-.707v-1.729h4.456a4.638 4.638 0 1 0 0-9.275z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineReturn2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRingingBellNotificationIcon],svg[streamline-ringing-bell-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 13.25h2m3-7.5a4 4 0 1 0-8 0v3.5a1.5 1.5 0 0 1-1.5 1.5h11a1.5 1.5 0 0 1-1.5-1.5zM.5 5.62A6 6 0 0 1 3 .75m10.5 4.87A6 6 0 0 0 11 .75"></svg:path>`,
})
export class StreamlineRingingBellNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRingingBellNotificationSolidIcon],svg[streamline-ringing-bell-notification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.763.313a.75.75 0 0 1-.172 1.046A5.02 5.02 0 0 0 1.5 5.433a.75.75 0 1 1-1.5 0A6.52 6.52 0 0 1 2.716.14a.75.75 0 0 1 1.047.172Zm.055 2.255A4.5 4.5 0 0 1 11.5 5.75v3.5a1 1 0 0 0 1 1a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1a1 1 0 0 0 1-1v-3.5a4.5 4.5 0 0 1 1.318-3.182M5.25 13.25A.75.75 0 0 1 6 12.5h2A.75.75 0 0 1 8 14H6a.75.75 0 0 1-.75-.75M11.284.14a.75.75 0 1 0-.875 1.22A5.02 5.02 0 0 1 12.5 5.432a.75.75 0 1 0 1.5 0A6.52 6.52 0 0 0 11.284.14" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRingingBellNotificationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRockAndRollHandIcon],svg[streamline-rock-and-roll-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.763 13.5c-1.883-.75-2.071-2.435-1.916-3.833c.107-.97.911-1.584 1.865-1.584c.895 0 2.708.004 2.708.004c.684.053 1.18.676 1.115 1.349c-.1 1.036-1.324 1.148-2.147 1.356c.631.29 1.87 1.095 1.776 1.98"></svg:path><svg:path d="m10.263 13.5l.453-.453a4 4 0 0 0 1.172-2.829V4.021c0-.748-.607-1.354-1.354-1.354v0c-.748 0-1.355.606-1.355 1.354V7c-1.615-.726-2.014-.798-3.791-.542V1.854C5.388 1.106 4.782.5 4.034.5v0c-.748 0-1.355.606-1.355 1.354v6.478"></svg:path></svg:g>`,
})
export class StreamlineRockAndRollHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRockAndRollHandSolidIcon],svg[streamline-rock-and-roll-hand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.695 9.755c-.185 1.482-.04 3.306 1.873 4.17a.9.9 0 0 0 .369.075h6.393a1 1 0 0 0 .707-.293l.09-.09a4.67 4.67 0 0 0 1.368-3.3V3.792a1.458 1.458 0 1 0-2.917 0v2.25c-1.74-.782-2.17-.86-4.083-.584v-4a1.458 1.458 0 0 0-2.917 0v5.754H6.15a1.748 1.748 0 0 1 .809 3.299c.256.335.43.772.45 1.303a.625.625 0 1 1-1.248.047c-.015-.375-.171-.604-.34-.74c-.195-.155-.385-.175-.435-.167a.625.625 0 0 1-.254-1.223l1.14-.288a.498.498 0 0 0-.122-.98H2.553a1.77 1.77 0 0 0-.858 1.292" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRockAndRollHandSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRockSlideIcon],svg[streamline-rock-slide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l2 2L3 6l5.5 5l.5 2.5H.5m9.5-7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m3 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-7-10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class StreamlineRockSlideIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRockSlideSolidIcon],svg[streamline-rock-slide-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.854.146A.5.5 0 0 0 0 .5v13a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 .49-.598l-.5-2.5a.5.5 0 0 0-.154-.272L3.47 5.751L2.995 2.43a.5.5 0 0 0-.141-.283l-2-2ZM8 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m4 6a1 1 0 1 1 2 0a1 1 0 0 1-2 0M5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRockSlideSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRoseIcon],svg[streamline-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4.108a8.6 8.6 0 0 1 5.495-1.599v3.497a5.495 5.495 0 0 1-10.99 0V2.51s6.554-.79 9.552 7.204"></svg:path><svg:path d="M9.908 2.769a2.998 2.998 0 0 0-5.816 0M7 11.502V13.5"></svg:path></svg:g>`,
})
export class StreamlineRoseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRoseSolidIcon],svg[streamline-rose-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.993 3.353a9.9 9.9 0 0 1 2.955-1.296a3.14 3.14 0 0 0-5.898.007a10.2 10.2 0 0 1 2.943 1.29Zm-5.185-.292a.3.3 0 0 0-.08.217v2.865A5.27 5.27 0 0 0 6.25 11.36v1.813a.75.75 0 0 0 1.5 0V11.36a5.27 5.27 0 0 0 2.874-1.39c-1.205-3-2.888-4.7-4.476-5.67A8.9 8.9 0 0 0 1.961 3a.19.19 0 0 0-.153.06Zm9.705 5.805a5.27 5.27 0 0 0 .758-2.723V3.337c0-.218-.16-.332-.291-.326a8.6 8.6 0 0 0-3.9 1.142c1.263 1.062 2.474 2.573 3.433 4.713" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRoseSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRotateAngle45Icon],svg[streamline-rotate-angle-45-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 4L.5 13.5h13"></svg:path><svg:path d="M7.5 13.5a7 7 0 0 0-2.05-4.95"></svg:path></svg:g>`,
})
export class StreamlineRotateAngle45Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRotateAngle45SolidIcon],svg[streamline-rotate-angle-45-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.78 4.28a.75.75 0 0 0-1.06-1.06L5.18 7.758l-.023.023L.22 12.72A.75.75 0 0 0 .75 14h12.5a.75.75 0 0 0 0-1.5H8.464a7.75 7.75 0 0 0-1.729-4.174zM5.668 9.393L2.561 12.5h4.394a6.25 6.25 0 0 0-1.287-3.107" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRotateAngle45SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRoundCapIcon],svg[streamline-round-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.988 7H13.5m0-4.794H5.294a4.794 4.794 0 0 0 0 9.588H13.5"></svg:path><svg:path d="M4.392 6.999a1.798 1.798 0 1 0 3.596 0a1.798 1.798 0 1 0-3.596 0"></svg:path></svg:g>`,
})
export class StreamlineRoundCapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRoundCapSolidIcon],svg[streamline-round-cap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a5 5 0 0 0 5 5h9V7.75H6.855a2 2 0 1 1 0-1.5H14V2H5a5 5 0 0 0-5 5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRoundCapSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRssSquareIcon],svg[streamline-rss-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M4 10.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.5-4a3 3 0 0 1 3 3m-3-6a6 6 0 0 1 6 6"></svg:path></svg:g>`,
})
export class StreamlineRssSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRssSquareSolidIcon],svg[streamline-rss-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0zm1.457 9.96a1.084 1.084 0 1 1 2.167 0a1.084 1.084 0 0 1-2.167 0m.459-3.502c0-.346.28-.625.625-.625a4.127 4.127 0 0 1 4.126 4.126a.625.625 0 1 1-1.25 0a2.877 2.877 0 0 0-2.876-2.876a.625.625 0 0 1-.625-.625m.625-3.626a.625.625 0 0 0 0 1.25A5.877 5.877 0 0 1 9.918 9.96a.625.625 0 1 0 1.25 0A7.127 7.127 0 0 0 4.04 2.832Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRssSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRssSymbolIcon],svg[streamline-rss-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.13 13.38a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11.25-1.26A11.5 11.5 0 0 0 1.88.62m.24 4.76a6.5 6.5 0 0 1 6.5 6.5"></svg:path>`,
})
export class StreamlineRssSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineRssSymbolSolidIcon],svg[streamline-rss-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.857 1.052a1 1 0 0 1 1-1a12.09 12.09 0 0 1 12.091 12.091a1 1 0 0 1-2 0A10.09 10.09 0 0 0 1.858 2.052a1 1 0 0 1-1-1Zm1.245 8.883a1.972 1.972 0 1 0 0 3.945a1.972 1.972 0 0 0 0-3.945m-.245-5.173a1 1 0 1 0 0 2a5.38 5.38 0 0 1 5.38 5.381a1 1 0 0 0 2 0a7.38 7.38 0 0 0-7.38-7.38Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRssSymbolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSadFaceIcon],svg[streamline-sad-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.75 5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4 10c.448-1.428 2.15-2.3 3.85-1.904A3.07 3.07 0 0 1 10 10"></svg:path></svg:g>`,
})
export class StreamlineSadFaceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSadFaceSolidIcon],svg[streamline-sad-face-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m4.19 3.7a.625.625 0 1 1-1.207-.324a4.163 4.163 0 0 1 8.038 0a.625.625 0 0 1-1.207.325a2.913 2.913 0 0 0-5.624 0Zm.392-4.724a1.024 1.024 0 0 1 .002-2.049h.003a1.024 1.024 0 0 1-.003 2.049zm4.831 0a1.024 1.024 0 0 1 .003-2.049h.002a1.024 1.024 0 0 1-.002 2.049z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSadFaceSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSafeVaultIcon],svg[streamline-safe-vault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M8.5 8a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m0-4.75V4.5m0 3.5v1.25m3-3h-1.25m-3.5 0H5.5m5.12-2.12l-.88.88M7.26 7.49l-.88.88m4.24 0l-.88-.88M7.26 5.01l-.88-.88M3 4.5V8m-1 4v1.5m9.5-1.5v1.5"></svg:path></svg:g>`,
})
export class StreamlineSafeVaultIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSafeVaultSolidIcon],svg[streamline-safe-vault-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5V11a1.5 1.5 0 0 0 1.5 1.5v.702a.75.75 0 0 0 1.5 0V12.5h8v.702a.75.75 0 0 0 1.5 0V12.5A1.5 1.5 0 0 0 14 11V1.5A1.5 1.5 0 0 0 12.5 0zm7.25 4.943c-.721 0-1.306.584-1.307 1.304v.006a1.307 1.307 0 1 0 1.307-1.31M8.124 3.77a2.5 2.5 0 0 0-.687.284l-.587-.587a.625.625 0 0 0-.884.884l.587.587a2.5 2.5 0 0 0-.284.687h-.832a.625.625 0 0 0 0 1.25h.832q.093.369.284.687l-.587.587a.625.625 0 0 0 .884.884l.587-.587q.318.19.687.284v.832a.625.625 0 1 0 1.25 0V8.73q.369-.093.687-.284l.587.587a.625.625 0 0 0 .884-.884l-.587-.587q.19-.318.284-.687h.832a.625.625 0 0 0 0-1.25h-.832a2.5 2.5 0 0 0-.284-.687l.587-.587a.625.625 0 1 0-.884-.884l-.587.587a2.5 2.5 0 0 0-.687-.284v-.832a.625.625 0 1 0-1.25 0zm-5.007.364a.625.625 0 0 0-1.25 0v4.232a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSafeVaultSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSailShipIcon],svg[streamline-sail-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 9.5H.5l1 2.7a2 2 0 0 0 1.88 1.3h7.22a2 2 0 0 0 1.88-1.3zm-7 0v-9m0 0l-5 6h5m2-4l3.5 4H8.5"></svg:path>`,
})
export class StreamlineSailShipIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSailShipSolidIcon],svg[streamline-sail-ship-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.75 7H1.327a.5.5 0 0 1-.384-.82l5-6A.5.5 0 0 1 6.41.007a.75.75 0 0 1 .84.745L7.249 9h6.25a.5.5 0 0 1 .468.676l-1.013 2.702A2.5 2.5 0 0 1 10.614 14H3.386a2.5 2.5 0 0 1-2.34-1.622L.031 9.676A.5.5 0 0 1 .5 9h5.25zm3.631-4.804a.5.5 0 0 0-.896.304v4a.5.5 0 0 0 .5.5h3.07a.5.5 0 0 0 .396-.804z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSailShipSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSatelliteDishIcon],svg[streamline-satellite-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 9A6.01 6.01 0 1 1 5 .5zM9.26 4.74L12 2"></svg:path><svg:path d="M3.96 7.57L.5 13.5H7L5.92 9.73"></svg:path></svg:g>`,
})
export class StreamlineSatelliteDishIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSatelliteDishSolidIcon],svg[streamline-satellite-dish-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.354.146a.5.5 0 0 0-.708 0a6.51 6.51 0 1 0 9.208 9.208a.5.5 0 0 0 0-.708L10.31 5.104l1.396-1.397a1 1 0 0 0-1.414-1.414L8.896 3.689zM2.764 9.01a7.76 7.76 0 0 0 4.184 3.151l.359 1.195a.5.5 0 0 1-.479.644H.39a.39.39 0 0 1-.332-.594z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSatelliteDishSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScannerIcon],svg[streamline-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5H1.429a.93.93 0 0 1-.929-.928V10.25m13 0v2.322a.93.93 0 0 1-.929.928H10.25m0-13h2.321a.93.93 0 0 1 .929.929V3.75m-13 0V1.429A.93.93 0 0 1 1.429.5H3.75M.5 7h13"></svg:path>`,
})
export class StreamlineScannerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScanner3Icon],svg[streamline-scanner-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.702 5.138a1.33 1.33 0 0 0-1.258-.889H6.412a1.19 1.19 0 0 0-.254 2.353l1.571.344a1.334 1.334 0 0 1-.285 2.637h-.888a1.33 1.33 0 0 1-1.258-.89M7 4.25V2.915m0 8.001V9.583M5.069.656H1.165a.49.49 0 0 0-.488.488v3.904m12.687 0V1.144a.49.49 0 0 0-.488-.488H8.972m0 12.688h3.904a.49.49 0 0 0 .488-.488V8.952m-12.687 0v3.904a.49.49 0 0 0 .488.488h3.904"></svg:path>`,
})
export class StreamlineScanner3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScanner3SolidIcon],svg[streamline-scanner-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2.418a.75.75 0 0 1 .75.75v.528a2 2 0 0 1 1.553 1.306a.75.75 0 0 1-1.414.5a.5.5 0 0 0-.472-.334H6.45a.366.366 0 0 0-.079.723l1.474.323a2 2 0 0 1-.095 3.927v.527a.75.75 0 0 1-1.5 0v-.527a2 2 0 0 1-1.552-1.306a.75.75 0 1 1 1.414-.5a.5.5 0 0 0 .472.333h.833a.5.5 0 0 0 .107-.989l-1.473-.322a1.866 1.866 0 0 1 .2-3.678v-.51a.75.75 0 0 1 .75-.75ZM1.338.094A1.224 1.224 0 0 0 .114 1.317v3.789a.75.75 0 0 0 1.5 0V1.594h3.512a.75.75 0 0 0 0-1.5zm7.577 0a.75.75 0 0 0 0 1.5h3.512v3.512a.75.75 0 0 0 1.5 0V1.317A1.224 1.224 0 0 0 12.704.094zm4.262 8.05a.75.75 0 0 1 .75.75v3.789a1.224 1.224 0 0 1-1.223 1.223H8.915a.75.75 0 1 1 0-1.5h3.512V8.894a.75.75 0 0 1 .75-.75m-11.563.75a.75.75 0 1 0-1.5 0v3.789a1.224 1.224 0 0 0 1.224 1.223h3.788a.75.75 0 1 0 0-1.5H1.614z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScanner3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScannerBarCodeIcon],svg[streamline-scanner-bar-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.11.656H1.208a.49.49 0 0 0-.488.488v3.904m12.686 0V1.144a.49.49 0 0 0-.488-.488H9.014m0 12.688h3.904a.49.49 0 0 0 .488-.488V8.952m-12.687 0v3.904a.49.49 0 0 0 .488.488H5.11m5.696-9.552v6.416M3.194 3.792v6.416m5.709-6.416v4.666m0 1.75v-.291M7 3.792v4.666m0 1.75v-.291M5.097 3.792v4.666m0 1.75v-.291"></svg:path>`,
})
export class StreamlineScannerBarCodeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScannerBarCodeSolidIcon],svg[streamline-scanner-bar-code-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.419.136a1.22 1.22 0 0 0-1.22 1.22V5.12a.75.75 0 0 0 1.5 0V1.636H5.18a.75.75 0 1 0 0-1.5zm7.525 0a.75.75 0 0 0 0 1.5h3.483v3.483a.75.75 0 0 0 1.5 0V1.356a1.22 1.22 0 0 0-1.22-1.22H8.943Zm4.233 7.995a.75.75 0 0 1 .75.75v3.763a1.22 1.22 0 0 1-1.22 1.22H8.943a.75.75 0 0 1 0-1.5h3.483V8.881a.75.75 0 0 1 .75-.75Zm-11.479.75a.75.75 0 1 0-1.5 0v3.763a1.22 1.22 0 0 0 1.22 1.22h3.763a.75.75 0 0 0 0-1.5H1.698zm8.972-5.598c.346 0 .625.28.625.625v6.184a.625.625 0 0 1-1.25 0V3.908c0-.345.28-.625.625-.625m-7.961.625a.625.625 0 0 1 1.25 0v6.184a.625.625 0 0 1-1.25 0zm5.72-.625c.346 0 .626.28.626.625v3.608a.625.625 0 1 1-1.25 0V3.908c0-.345.28-.625.625-.625Zm-.624 6.81a.625.625 0 0 0 1.25 0V9.81a.625.625 0 1 0-1.25 0v.281Zm-1.98-6.81c.344 0 .624.28.624.625v3.608a.625.625 0 1 1-1.25 0V3.908c0-.345.28-.625.625-.625Zm-.626 6.81a.625.625 0 0 0 1.25 0V9.81a.625.625 0 1 0-1.25 0v.281Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScannerBarCodeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScannerSolidIcon],svg[streamline-scanner-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.75.75A.75.75 0 0 1 10.5 0h1.75C13.216 0 14 .784 14 1.75V3.5a.75.75 0 0 1-1.5 0V1.75a.25.25 0 0 0-.25-.25H10.5a.75.75 0 0 1-.75-.75M0 7a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 7m1.5-5.25a.25.25 0 0 1 .25-.25H3.5a.75.75 0 0 0 0-1.5H1.75A1.75 1.75 0 0 0 0 1.75V3.5a.75.75 0 0 0 1.5 0zm11.75 8a.75.75 0 0 1 .75.75v1.75A1.75 1.75 0 0 1 12.25 14H10.5a.75.75 0 0 1 0-1.5h1.75a.25.25 0 0 0 .25-.25V10.5a.75.75 0 0 1 .75-.75M1.5 10.5a.75.75 0 0 0-1.5 0v1.75C0 13.216.784 14 1.75 14H3.5a.75.75 0 0 0 0-1.5H1.75a.25.25 0 0 1-.25-.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScannerSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSchoolBusSideIcon],svg[streamline-school-bus-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.625 11.492h.802a1 1 0 0 0 1-1V7.957a1 1 0 0 0-1-1h-.552V3.375a1 1 0 0 0-1-1h-9.19a1 1 0 0 0-1 1v7.26c0 .473.384.857.857.857H2m9.875-7.284H.685m11.19 2.749H.685m3.779-2.749v2.745m3.567-2.745v2.745"></svg:path><svg:path d="M1.994 11.478a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0m6.84 0a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0m-4.048 0h4.048"></svg:path></svg:g>`,
})
export class StreamlineSchoolBusSideIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSchoolBusSideSolidIcon],svg[streamline-school-bus-side-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.145 3.526c0-.967.784-1.75 1.75-1.75h8.82c.967 0 1.75.783 1.75 1.75v2.68h.252c.69 0 1.25.56 1.25 1.25v3.385c0 .64-.48 1.167-1.1 1.241a2.511 2.511 0 1 0-5.003.009H5.757a2.511 2.511 0 1 0-5.009-.353a1.6 1.6 0 0 1-.603-1.255zm1.75.724a.25.25 0 0 0-.25.25v1.75h2.013v-2zm3.263 0v2h2.233v-2zm5.808 2H8.89v-2h1.825a.25.25 0 0 1 .25.25zm-6.45 5.62a1.261 1.261 0 1 1-2.521 0a1.261 1.261 0 0 1 2.521 0m7.11 0a1.261 1.261 0 1 1-2.522 0a1.261 1.261 0 0 1 2.522 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSchoolBusSideSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScreen1Icon],svg[streamline-screen-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8A.5.5 0 0 0 13 2m-7 9l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path>`,
})
export class StreamlineScreen1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScreen1SolidIcon],svg[streamline-screen-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 9V2.5h10V9zM1.457.5C.652.5 0 1.152 0 1.957v7.586C0 10.348.652 11 1.457 11h4.026l-.535 1.495H4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-.948L8.517 11h4.026C13.348 11 14 10.348 14 9.543V1.957C14 1.152 13.348.5 12.543.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScreen1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScreen2Icon],svg[streamline-screen-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 1.5H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M3.53 13.5a3.51 3.51 0 0 1 6.94 0"></svg:path></svg:g>`,
})
export class StreamlineScreen2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScreen2SolidIcon],svg[streamline-screen-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 9V2.5H2V9zm.543-8.5C13.348.5 14 1.152 14 1.957v7.586c0 .805-.652 1.457-1.457 1.457h-2.486a4.1 4.1 0 0 1 1 2.121a.75.75 0 0 1-1.482.226a2.604 2.604 0 0 0-5.15 0a.75.75 0 1 1-1.483-.226c.121-.793.47-1.53 1.001-2.121H1.457A1.457 1.457 0 0 1 0 9.543V1.957C0 1.152.652.5 1.457.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScreen2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScreenBroadcastIcon],svg[streamline-screen-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8a4 4 0 0 1 4 4m-4-1.5A1.5 1.5 0 0 1 2 12m5 0h5.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v2.5"></svg:path>`,
})
export class StreamlineScreenBroadcastIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScreenBroadcastSolidIcon],svg[streamline-screen-broadcast-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.939 1.399a1.92 1.92 0 0 0-1.92 1.92v1.475a1 1 0 0 0 2 0V3.399h9.963V10.6h-4.27a1 1 0 1 0 0 2h4.35a1.92 1.92 0 0 0 1.92-1.92V3.319a1.92 1.92 0 0 0-1.92-1.92zm-1.92 6.08a.75.75 0 0 1 .75-.75a5.033 5.033 0 0 1 5.034 5.033a.75.75 0 1 1-1.5 0A3.533 3.533 0 0 0 .769 8.23a.75.75 0 0 1-.75-.75Zm0 2.677a.75.75 0 0 1 .75-.75a2.356 2.356 0 0 1 2.357 2.356a.75.75 0 0 1-1.5 0a.856.856 0 0 0-.857-.856a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScreenBroadcastSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScreenCurveIcon],svg[streamline-screen-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.93 11.34a42 42 0 0 0-11.86 0a.5.5 0 0 1-.57-.49V2.49A.49.49 0 0 1 1.07 2c3.934.55 7.926.55 11.86 0a.49.49 0 0 1 .57.48v8.36a.5.5 0 0 1-.57.5M7 10.92v2.5m-2.5 0h5"></svg:path>`,
})
export class StreamlineScreenCurveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScreenCurveSolidIcon],svg[streamline-screen-curve-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2.495C14 1.32 12.904.542 11.853.73C10.62.952 8.737 1.145 7 1.145S3.381.952 2.147.73C1.097.542 0 1.32 0 2.495v7.01c0 1.175 1.096 1.954 2.147 1.765c1.058-.19 2.592-.36 4.103-.404v1.433H4.639a.75.75 0 0 0 0 1.5H9.36a.75.75 0 0 0 0-1.5H7.75v-1.433c1.51.045 3.045.214 4.103.404c1.05.189 2.147-.59 2.147-1.765zm-7 .65c1.766 0 3.66-.184 5-.41v6.53a32 32 0 0 0-5-.41c-1.766 0-3.66.184-5 .41v-6.53c1.34.226 3.234.41 5 .41" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScreenCurveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScreensaverMonitorWallpaperIcon],svg[streamline-screensaver-monitor-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1 1.25h12c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5H1c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5"></svg:path><svg:path d="M4.64 5.75a1.39 1.39 0 1 0 0-2.781a1.39 1.39 0 0 0 0 2.781M6 10.25l-1 2.5m3-2.5l1 2.5m-5 0h6m-5.91-2.5l5.075-4.88a.48.48 0 0 1 .624 0L13.5 8.11"></svg:path></svg:g>`,
})
export class StreamlineScreensaverMonitorWallpaperIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScreensaverMonitorWallpaperSolidIcon],svg[streamline-screensaver-monitor-wallpaper-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.25v6.5h2.178l3.998-3.745a1 1 0 0 1 1.286-.032L12 6.798V2.25zm-2-.543C0 .902.652.25 1.457.25h11.086C13.348.25 14 .902 14 1.707v7.586c0 .805-.652 1.457-1.457 1.457H8.515l.537 1.5H10a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h.948l.537-1.5H1.457A1.457 1.457 0 0 1 0 9.293zM5.969 4.39a1.36 1.36 0 1 1-2.719 0a1.36 1.36 0 0 1 2.719 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScreensaverMonitorWallpaperSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScript2Icon],svg[streamline-script-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 3.5v8a2 2 0 0 1-2 2H.5a2 2 0 0 0 2-2v-9a2 2 0 0 1 2-2h7.25"></svg:path><svg:path d="M11.75.5a1.75 1.75 0 0 1 1.75 1.75V3a.5.5 0 0 1-.5.5h-3V2.25A1.75 1.75 0 0 1 11.75.5M6 4h1.5M5 7h2.5M5 10h2.5"></svg:path></svg:g>`,
})
export class StreamlineScript2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineScript2SolidIcon],svg[streamline-script-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 11.5V2.707c0-.533.14-1.079.371-1.424a.625.625 0 1 1 1.04.693a1 1 0 0 0-.102.263c-.035.137-.059.3-.059.468V4H13a1 1 0 0 0 1-1v-.75A2.25 2.25 0 0 0 11.75 0H4.5A2.5 2.5 0 0 0 2 2.5v9A1.5 1.5 0 0 1 .5 13a.5.5 0 0 0 0 1H8a2.5 2.5 0 0 0 2.5-2.5m-5.323-8c0-.345.28-.625.625-.625H7.74a.625.625 0 1 1 0 1.25H5.802a.625.625 0 0 1-.625-.625m-.666 2.375a.625.625 0 1 0 0 1.25H7.74a.625.625 0 1 0 0-1.25H4.51ZM3.885 9.5c0-.345.28-.625.626-.625H7.74a.625.625 0 1 1 0 1.25H4.51a.625.625 0 0 1-.624-.625Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineScript2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSearchDollarIcon],svg[streamline-search-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 12.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12m4.24-1.76l2.76 2.76"></svg:path><svg:path d="M3.5 5.849c0-.489.396-.885.885-.885h4.23c.489 0 .885.396.885.885v2.516a.884.884 0 0 1-.885.885h-4.23a.884.884 0 0 1-.885-.885zM5.214 4.76v-.51a1 1 0 0 1 1-1h.572a1 1 0 0 1 1 1v.51"></svg:path></svg:g>`,
})
export class StreamlineSearchDollarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSearchDollarSolidIcon],svg[streamline-search-dollar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 1.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10M0 6.5a6.5 6.5 0 1 1 11.749 3.835l1.958 1.958a1 1 0 1 1-1.414 1.414l-1.958-1.958A6.5 6.5 0 0 1 0 6.5m5.837-1.88c0-.175.141-.317.316-.317h.693c.175 0 .317.142.317.316v.498H5.837v-.498Zm2.38 0v.497h.46a.95.95 0 0 1 .95.948v2.24a.95.95 0 0 1-.95.949H4.323a.95.95 0 0 1-.95-.948V6.065a.95.95 0 0 1 .95-.948h.459v-.498A1.37 1.37 0 0 1 6.153 3.25h.693a1.37 1.37 0 0 1 1.372 1.37Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSearchDollarSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSearchVisualIcon],svg[streamline-search-visual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5v2a1 1 0 0 1-1 1h-2m0-13h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m0 13h-2a1 1 0 0 1-1-1v-2"></svg:path><svg:path d="M3.25 6.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8.5 8.5l2 2"></svg:path></svg:g>`,
})
export class StreamlineSearchVisualIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSearchVisualSolidIcon],svg[streamline-search-visual-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 1.5a.25.25 0 0 0-.25.25v1.5a.75.75 0 0 1-1.5 0v-1.5A1.75 1.75 0 0 1 1.75 0h1.5a.75.75 0 0 1 0 1.5zm11.5 8.5a.75.75 0 0 1 .75.75v1.5A1.75 1.75 0 0 1 12.25 14h-1.5a.75.75 0 0 1 0-1.5h1.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 .75-.75m-11.75.75a.75.75 0 0 0-1.5 0v1.5A1.75 1.75 0 0 0 1.75 14h1.5a.75.75 0 0 0 0-1.5h-1.5a.25.25 0 0 1-.25-.25zm8.5-10a.75.75 0 0 1 .75-.75h1.5A1.75 1.75 0 0 1 14 1.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.25.25 0 0 0-.25-.25h-1.5A.75.75 0 0 1 10 .75M6.25 4a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M2.5 6.25a3.75 3.75 0 1 1 6.879 2.068L11.03 9.97a.75.75 0 1 1-1.06 1.06L8.318 9.38A3.75 3.75 0 0 1 2.5 6.25" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSearchVisualSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSelectCircleArea1Icon],svg[streamline-select-circle-area-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5.67a6.7 6.7 0 0 0-3 0m-1.91.8a7 7 0 0 0-1.19.93a7 7 0 0 0-.93 1.19M.67 5.5a6.7 6.7 0 0 0 0 3m.8 1.91a7 7 0 0 0 .93 1.19q.544.53 1.19.93m1.91.8a6.7 6.7 0 0 0 3 0m1.91-.8q.646-.4 1.19-.93q.53-.545.93-1.19m.8-1.91a6.7 6.7 0 0 0 0-3m-.8-1.91a7 7 0 0 0-.93-1.19a7 7 0 0 0-1.19-.93"></svg:path>`,
})
export class StreamlineSelectCircleArea1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSelectCircleArea1SolidIcon],svg[streamline-select-circle-area-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.738.114a7 7 0 0 1 2.524 0a.75.75 0 0 1-.27 1.475a5.5 5.5 0 0 0-1.985 0A.75.75 0 1 1 5.738.114M4.066 1.429a.75.75 0 0 1-.19 1.044a5.5 5.5 0 0 0-1.403 1.403a.75.75 0 1 1-1.234-.853a7 7 0 0 1 1.784-1.784a.75.75 0 0 1 1.043.19m5.868 0a.75.75 0 0 1 1.043-.19a7 7 0 0 1 1.784 1.784a.75.75 0 0 1-1.234.853a5.5 5.5 0 0 0-1.403-1.403a.75.75 0 0 1-.19-1.044M.986 5.135a.75.75 0 0 1 .603.872a5.5 5.5 0 0 0 0 1.986a.75.75 0 1 1-1.475.269a7 7 0 0 1 0-2.524a.75.75 0 0 1 .872-.603m12.028 0a.75.75 0 0 1 .873.603a7 7 0 0 1 0 2.524a.75.75 0 0 1-1.476-.27a5.5 5.5 0 0 0 0-1.985a.75.75 0 0 1 .603-.872M1.43 9.934a.75.75 0 0 1 1.044.19a5.5 5.5 0 0 0 1.403 1.403a.75.75 0 1 1-.853 1.234a7 7 0 0 1-1.784-1.784a.75.75 0 0 1 .19-1.043m11.142 0a.75.75 0 0 1 .19 1.043a7 7 0 0 1-1.784 1.784a.75.75 0 0 1-.853-1.234a5.5 5.5 0 0 0 1.403-1.403a.75.75 0 0 1 1.044-.19m-7.436 3.08a.75.75 0 0 1 .872-.603a5.5 5.5 0 0 0 1.986 0a.75.75 0 1 1 .269 1.476a7 7 0 0 1-2.524 0a.75.75 0 0 1-.603-.873" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSelectCircleArea1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSendEmailIcon],svg[streamline-send-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.812 11l2.178 2.168a1.1 1.1 0 0 0 1.05.3a1.12 1.12 0 0 0 .809-.74l3.576-10.72A1.118 1.118 0 0 0 11.987.57L1.267 4.147a1.12 1.12 0 0 0-.74.859a1.1 1.1 0 0 0 .3 1l2.737 2.737l-.09 3.466zM13.106.79L3.564 8.742"></svg:path>`,
})
export class StreamlineSendEmailIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSendEmailSolidIcon],svg[streamline-send-email-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.821.098a1.62 1.62 0 0 1 2.077 2.076l-3.574 10.712a1.62 1.62 0 0 1-1.168 1.069a1.6 1.6 0 0 1-1.52-.434l-1.918-1.909l-2.014 1.042a.5.5 0 0 1-.73-.457l.083-3.184l7.045-5.117a.625.625 0 1 0-.735-1.012L2.203 8.088l-1.73-1.73a1.6 1.6 0 0 1-.437-1.447a1.62 1.62 0 0 1 1.069-1.238h.003L11.82.097Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSendEmailSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineServingDomeIcon],svg[streamline-serving-dome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 3a6.5 6.5 0 0 1 6.5 6.5v0a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1A6.5 6.5 0 0 1 7 3m0 0V1.5m-6.5 11h13"></svg:path>`,
})
export class StreamlineServingDomeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineServingDomeSolidIcon],svg[streamline-serving-dome-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .103a.75.75 0 0 1 .75.75v1.04A7 7 0 0 1 14 8.854a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5a7 7 0 0 1 6.25-6.96V.854A.75.75 0 0 1 7 .103M.78 11.75a.75.75 0 0 0 0 1.5h12.44a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineServingDomeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShareLinkIcon],svg[streamline-share-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.75 9.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m8.5 4.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m0-8.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5M4.76 6l4.48-2.25M4.76 8l4.48 2.25"></svg:path>`,
})
export class StreamlineShareLinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShareLinkSolidIcon],svg[streamline-share-link-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 5.5a2.75 2.75 0 1 0-2.747-2.62l-4 2a2.75 2.75 0 1 0 0 4.239l4 2a2.75 2.75 0 1 0 .816-1.828L5.475 7.37a2.8 2.8 0 0 0 0-.74L9.32 4.708c.497.49 1.179.792 1.931.792Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShareLinkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShelfIcon],svg[streamline-shelf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M1.5 4h11m-11 3.5h11M7 7.5v6M9.5 10v1m-5-1v1"></svg:path>`,
})
export class StreamlineShelfIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShelfSolidIcon],svg[streamline-shelf-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h9A1.5 1.5 0 0 1 13 1.5v1.502H1zm0 2.752v2.623h12V4.252zm5.375 3.873H1V12.5A1.5 1.5 0 0 0 2.5 14h3.875zM7.625 14V8.125H13V12.5a1.5 1.5 0 0 1-1.5 1.5zM9.5 9.881c.345 0 .625.28.625.625v1a.625.625 0 1 1-1.25 0v-1c0-.345.28-.625.625-.625m-4.375.625a.625.625 0 1 0-1.25 0v1a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShelfSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShellIcon],svg[streamline-shell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.497 11.5v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1m.278-7.649a2.5 2.5 0 0 0-3.572 3.147q-.187.241-.345.47c-.572.829-.202 1.898.678 2.387l2.96 1.645h5.047l2.924-1.642c.875-.49 1.242-1.557.672-2.383a10 10 0 0 0-.35-.477a2.5 2.5 0 0 0-3.572-3.147a2.5 2.5 0 0 0-4.442 0M8.497 7l.724-3.154m3.625 3.014L9.996 9M5.497 7l-.725-3.154M1.147 6.86L3.997 9"></svg:path>`,
})
export class StreamlineShellIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShellSolidIcon],svg[streamline-shell-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.16 3.588a2.503 2.503 0 0 0-3.08 3.05l3.043 2.284a.625.625 0 0 1-.75 1L.64 7.869c-.278.737.064 1.572.777 2.017L3.999 11.5v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1l2.582-1.614c.712-.445 1.054-1.279.778-2.015l-2.73 2.05a.625.625 0 1 1-.752-.999l3.04-2.282a2.502 2.502 0 0 0-3.075-3.053l-.008.04L9.11 6.78a.625.625 0 0 1-1.218-.28l.724-3.154a.6.6 0 0 1 .076-.187a2.5 2.5 0 0 0-1.693-.66c-.652 0-1.245.25-1.69.658q.053.085.077.189L6.11 6.5a.625.625 0 0 1-1.218.28l-.724-3.155z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShellSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShield1Icon],svg[streamline-shield-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.354 13.384a1 1 0 0 1-.714 0v0A9.49 9.49 0 0 1 .55 4.517V1.542A.99.99 0 0 1 1.542.55h10.91a.99.99 0 0 1 .991.992v2.975a9.49 9.49 0 0 1-6.09 8.867v0Z"></svg:path>`,
})
export class StreamlineShield1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShield1SolidIcon],svg[streamline-shield-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4.927a9.4 9.4 0 0 1-6.635 8.984a1.24 1.24 0 0 1-.73 0A9.4 9.4 0 0 1 0 4.927V1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShield1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShield2Icon],svg[streamline-shield-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.92 13.21l-.59.23a.94.94 0 0 1-.66 0l-.59-.23A8 8 0 0 1 1 5.78V3A6.36 6.36 0 0 0 7 .5c1.25 1.82 3.32 2.68 6 2.5v2.78a8 8 0 0 1-5.08 7.43"></svg:path>`,
})
export class StreamlineShield2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShield2SolidIcon],svg[streamline-shield-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.412.217A.5.5 0 0 0 6.6.202a5.86 5.86 0 0 1-5.53 2.303A.5.5 0 0 0 .5 3v2.781a8.5 8.5 0 0 0 5.397 7.894h.001l.59.23l.006.003a1.44 1.44 0 0 0 1.012 0l.006-.002l.59-.23l-.182-.466l.182.465A8.5 8.5 0 0 0 13.5 5.781V3a.5.5 0 0 0-.534-.499c-2.549.171-4.427-.644-5.554-2.284" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShield2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShieldCheckIcon],svg[streamline-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.354 13.384a1 1 0 0 1-.714 0v0A9.49 9.49 0 0 1 .55 4.517V1.542A.99.99 0 0 1 1.542.55h10.91a.99.99 0 0 1 .991.992v2.975a9.49 9.49 0 0 1-6.09 8.867v0Z"></svg:path><svg:path d="M10 4L6 8.5L4 7"></svg:path></svg:g>`,
})
export class StreamlineShieldCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShieldCheckSolidIcon],svg[streamline-shield-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .677.68 0 1.5 0h11c.82 0 1.5.678 1.5 1.5v2.853c0 4.136-2.51 8.006-6.411 9.528a1.6 1.6 0 0 1-.596.12a1.6 1.6 0 0 1-.582-.12C2.51 12.359 0 8.489 0 4.353zm10.56 3.008a.75.75 0 1 0-1.12-.996L5.898 7.496L4.45 6.41a.75.75 0 1 0-.9 1.2l2 1.5a.75.75 0 0 0 1.01-.102z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShieldCheckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShieldCrossIcon],svg[streamline-shield-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.36 13.433a1 1 0 0 1-.72 0A9.565 9.565 0 0 1 .504 4.498V1.499A1 1 0 0 1 1.503.5h10.994a1 1 0 0 1 1 1v2.998a9.565 9.565 0 0 1-6.137 8.935"></svg:path><svg:path d="M8 3.008H6v2H4.001v1.998h2v2h1.998v-2h2V5.007h-2z"></svg:path></svg:g>`,
})
export class StreamlineShieldCrossIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShieldCrossSolidIcon],svg[streamline-shield-cross-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4.927a9.4 9.4 0 0 1-6.635 8.984a1.24 1.24 0 0 1-.73 0A9.4 9.4 0 0 1 0 4.927V1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5zM5.6 2.908a.5.5 0 0 1 .5-.5h1.8a.5.5 0 0 1 .5.5v1.7h1.698a.5.5 0 0 1 .5.5v1.798a.5.5 0 0 1-.5.5H8.4v1.699a.5.5 0 0 1-.5.5H6.1a.5.5 0 0 1-.5-.5V7.406H3.901a.5.5 0 0 1-.5-.5V5.107a.5.5 0 0 1 .5-.5h1.7V2.908Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShieldCrossSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShiftIcon],svg[streamline-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.646.854L1.354 6.146A.5.5 0 0 0 1.707 7H3.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V7h1.793a.5.5 0 0 0 .353-.854L7.354.854a.5.5 0 0 0-.708 0"></svg:path>`,
})
export class StreamlineShiftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShiftSolidIcon],svg[streamline-shift-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.646.854L1.354 6.146A.5.5 0 0 0 1.707 7H3.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V7h1.793a.5.5 0 0 0 .353-.854L7.354.854a.5.5 0 0 0-.708 0"></svg:path>`,
})
export class StreamlineShiftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentAddIcon],svg[streamline-shipment-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v4m-6.5 0h13v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"></svg:path><svg:path d="M.5 4.5L2 1.61A2 2 0 0 1 3.74.5h6.52a2 2 0 0 1 1.79 1.11L13.5 4.5M9.5 9h-5M7 6.5v5"></svg:path></svg:g>`,
})
export class StreamlineShipmentAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentAddSolidIcon],svg[streamline-shipment-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H3.489a2.19 2.19 0 0 0-1.874 1.195L0 4.308v.016h6.375zM0 12.923V5.574h14v7.35A1.077 1.077 0 0 1 12.923 14H1.077A1.077 1.077 0 0 1 0 12.923m14-8.615v.016H7.625V0h2.886a2.19 2.19 0 0 1 1.928 1.195zM7 6.5a.75.75 0 0 1 .75.75V9H9.5a.75.75 0 0 1 0 1.5H7.75v1.75a.75.75 0 0 1-1.5 0V10.5H4.5a.75.75 0 0 1 0-1.5h1.75V7.25A.75.75 0 0 1 7 6.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShipmentAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentCheckIcon],svg[streamline-shipment-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v4m-6.5 0h13v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"></svg:path><svg:path d="M.5 4.5L2 1.61A2 2 0 0 1 3.74.5h6.52a2 2 0 0 1 1.79 1.11L13.5 4.5M9.498 7l-2.996 4l-2-1.498"></svg:path></svg:g>`,
})
export class StreamlineShipmentCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentCheckSolidIcon],svg[streamline-shipment-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H3.489a2.19 2.19 0 0 0-1.874 1.195L0 4.308v.016h6.375zM0 12.923V5.574h14v7.35A1.077 1.077 0 0 1 12.923 14H1.077A1.077 1.077 0 0 1 0 12.923m14-8.615v.016H7.625V0h2.886a2.19 2.19 0 0 1 1.928 1.195zM9.437 8.636a.625.625 0 1 0-1-.75L6.488 10.49l-1.05-.79a.625.625 0 1 0-.75 1l1.55 1.163a.625.625 0 0 0 .876-.126z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShipmentCheckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentDownloadIcon],svg[streamline-shipment-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v4m-6.5 0h13v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"></svg:path><svg:path d="M.5 4.5L2 1.61A2 2 0 0 1 3.74.5h6.52a2 2 0 0 1 1.79 1.11L13.5 4.5M7 6.705v4.612m1.75-1.721L7 11.346l-1.75-1.75"></svg:path></svg:g>`,
})
export class StreamlineShipmentDownloadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentDownloadSolidIcon],svg[streamline-shipment-download-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H3.489a2.19 2.19 0 0 0-1.874 1.195L0 4.308v.016h6.375zM0 12.923V5.574h14v7.35A1.077 1.077 0 0 1 12.923 14H1.077A1.077 1.077 0 0 1 0 12.923m14-8.615v.016H7.625V0h2.886a2.19 2.19 0 0 1 1.928 1.195zM6.375 7.705a.625.625 0 0 1 1.25 0v2.003h.848a.526.526 0 0 1 .372.898L7.372 12.08a.526.526 0 0 1-.744 0l-1.473-1.474a.526.526 0 0 1 .372-.898h.848z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShipmentDownloadSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentRemoveIcon],svg[streamline-shipment-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v4m-6.5 0h13v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"></svg:path><svg:path d="M.5 4.5L2 1.61A2 2 0 0 1 3.74.5h6.52a2 2 0 0 1 1.79 1.11L13.5 4.5M9.5 9h-5"></svg:path></svg:g>`,
})
export class StreamlineShipmentRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentRemoveSolidIcon],svg[streamline-shipment-remove-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H3.489a2.19 2.19 0 0 0-1.874 1.195L0 4.308v.016h6.375zM0 12.923V5.574h14v7.35A1.077 1.077 0 0 1 12.923 14H1.077A1.077 1.077 0 0 1 0 12.923m14-8.615v.016H7.625V0h2.886a2.19 2.19 0 0 1 1.928 1.195zM4.5 9a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShipmentRemoveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentUploadIcon],svg[streamline-shipment-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v4m-6.5 0h13v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"></svg:path><svg:path d="M.5 4.5L2 1.61A2 2 0 0 1 3.74.5h6.52a2 2 0 0 1 1.79 1.11L13.5 4.5M7 11.346V6.734m1.75 1.721L7 6.705l-1.75 1.75"></svg:path></svg:g>`,
})
export class StreamlineShipmentUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentUploadSolidIcon],svg[streamline-shipment-upload-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H3.489a2.19 2.19 0 0 0-1.874 1.195L0 4.308v.016h6.375zM0 12.923V5.574h14v7.35A1.077 1.077 0 0 1 12.923 14H1.077A1.077 1.077 0 0 1 0 12.923m14-8.615v.016H7.625V0h2.886a2.19 2.19 0 0 1 1.928 1.195zm-7.625 7.538a.625.625 0 1 0 1.25 0V9.843h.849a.526.526 0 0 0 .372-.898L7.372 7.47a.526.526 0 0 0-.744 0L5.154 8.945a.526.526 0 0 0 .372.898h.849z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShipmentUploadSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingBox1Icon],svg[streamline-shipping-box-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M9 .5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5M8.5 11H11"></svg:path></svg:g>`,
})
export class StreamlineShippingBox1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingBox1BoxPackageLabelDeliveryShipmentShippingIcon],svg[streamline-shipping-box-1-box-package-label-delivery-shipment-shipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M9 .5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5M8.5 11H11"></svg:path></svg:g>`,
})
export class StreamlineShippingBox1BoxPackageLabelDeliveryShipmentShippingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingBox1SolidIcon],svg[streamline-shipping-box-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 0h-3v4.508c0 .13.055.255.154.348A.54.54 0 0 0 6.026 5h1.948c.14 0 .273-.052.372-.144a.48.48 0 0 0 .154-.348zM4.25 0H1.5A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0H9.75v4.508c0 .49-.208.94-.55 1.26c-.338.317-.78.482-1.226.482H6.026c-.446 0-.888-.165-1.226-.482a1.73 1.73 0 0 1-.55-1.26zm4.51 11.1c0-.346.28-.626.624-.626h2.014a.625.625 0 0 1 0 1.25H9.384a.625.625 0 0 1-.625-.625Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShippingBox1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingBox2BoxPackageLabelDeliveryShipmentShipping3dIcon],svg[streamline-shipping-box-2-box-package-label-delivery-shipment-shipping-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v4M8.5 11H11M.5 4.5h13v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-8h0Z"></svg:path><svg:path d="M.5 4.5L2 1.61A2 2 0 0 1 3.74.5h6.52a2 2 0 0 1 1.79 1.11L13.5 4.5"></svg:path></svg:g>`,
})
export class StreamlineShippingBox2BoxPackageLabelDeliveryShipmentShipping3dIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingBoxFragileFragileShippingGlassDeliveryWineCrackShipmentSignStickerIcon],svg[streamline-shipping-box-fragile-fragile-shipping-glass-delivery-wine-crack-shipment-sign-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.67.5a1 1 0 0 0-1 .89C2.56 2.45 2.5 4.05 2.5 4.5c0 2.62 2 4 4.5 4s4.5-1.38 4.5-4c0-.45-.06-2-.17-3.11a1 1 0 0 0-1-.89ZM7 8.5v5m-2 0h4"></svg:path><svg:path d="m7 .5l-1.5 2l2 1.5l-1 1.5"></svg:path></svg:g>`,
})
export class StreamlineShippingBoxFragileFragileShippingGlassDeliveryWineCrackShipmentSignStickerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingTransferCartPackageBoxFulfillmentCartWarehouseShippingDeliveryIcon],svg[streamline-shipping-transfer-cart-package-box-fulfillment-cart-warehouse-shipping-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="6.5" height="6.5" x="5.5" y="3" rx="1"></svg:rect><svg:path d="M4 12h7.61a1 1 0 0 1 .7.29l1.19 1.21M.5.5h1a1 1 0 0 1 1 1V10M4 11.75A2.11 2.11 0 0 1 4 12a1.74 1.74 0 1 1 0-.25ZM8.5 7h1"></svg:path></svg:g>`,
})
export class StreamlineShippingTransferCartPackageBoxFulfillmentCartWarehouseShippingDeliveryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingTransferTruckTimeTruckShippingDeliveryTimeWaitingDelayIcon],svg[streamline-shipping-transfer-truck-time-truck-shipping-delivery-time-waiting-delay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6" cy="12.49" r="1"></svg:circle><svg:circle cx="10.5" cy="12.49" r="1"></svg:circle><svg:path d="M8.38 3.53A4 4 0 1 0 2 7.62m2.5-3.11L6 3.01m.5 6.49v-1H5a2 2 0 0 0-2 2v2"></svg:path><svg:path d="M13.5 12.49v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v2"></svg:path></svg:g>`,
})
export class StreamlineShippingTransferTruckTimeTruckShippingDeliveryTimeWaitingDelayIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingTransferTruckTruckShippingDeliveryIcon],svg[streamline-shipping-transfer-truck-truck-shipping-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 5.5h-3a2 2 0 0 0-2 2v4H2m10.5 0h1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5.68M6 11.5h2.5"></svg:path><svg:circle cx="4" cy="11.5" r="2"></svg:circle><svg:circle cx="10.5" cy="11.5" r="2"></svg:circle></svg:g>`,
})
export class StreamlineShippingTransferTruckTruckShippingDeliveryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingTruckIcon],svg[streamline-shipping-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 5.5h3a2 2 0 0 1 2 2v4H12m-10.5 0h-1v-7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7m-.5 0H5.5"></svg:path><svg:path d="M10.25 13.5a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5m-6.75 0a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5"></svg:path></svg:g>`,
})
export class StreamlineShippingTruckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingTruckSolidIcon],svg[streamline-shipping-truck-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.247 5.226H11.5a2.5 2.5 0 0 1 2.5 2.5v4a.5.5 0 0 1-.5.5h-1.444a1.81 1.81 0 0 1-3.62 0H5a1.81 1.81 0 0 1-3.62 0H.5a.5.5 0 0 1-.5-.5v-7a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.497 1.406v3.783a.625.625 0 0 0 1.25 0v-3.19Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShippingTruckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingWarehouseDeliveryWarehouseShippingFulfillmentIcon],svg[streamline-shipping-warehouse-delivery-warehouse-shipping-fulfillment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 4.5h13V13a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V4.5h0Zm0 0h0a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4h0"></svg:path><svg:path d="M11 13.5V8a.5.5 0 0 0-.5-.5h-7A.5.5 0 0 0 3 8v5.5m0-4h8m-8 2h8"></svg:path></svg:g>`,
})
export class StreamlineShippingWarehouseDeliveryWarehouseShippingFulfillmentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBagHandBag1ShoppingBagPurseGoodsItemProductsIcon],svg[streamline-shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.27 13.5H2.73a2 2 0 0 1-2-2.22l.67-5.89a1 1 0 0 1 1-.89h9.2a1 1 0 0 1 1 .89l.65 5.89a2 2 0 0 1-1.98 2.22Z"></svg:path><svg:path d="M3 4.5a4 4 0 0 1 8 0m-6.5 3h5"></svg:path></svg:g>`,
})
export class StreamlineShoppingBagHandBag1ShoppingBagPurseGoodsItemProductsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBagHandBag2Icon],svg[streamline-shopping-bag-hand-bag-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.88 12.39a1 1 0 0 1-1 1.11H2.12a1 1 0 0 1-1-1.11L2 4.5h10zM4.5 4.5V3a2.5 2.5 0 1 1 5 0v1.5"></svg:path>`,
})
export class StreamlineShoppingBagHandBag2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBagHandBag2ShoppingBagPurseGoodsItemProductsIcon],svg[streamline-shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.88 12.39a1 1 0 0 1-.25.78a1 1 0 0 1-.75.33H2.12a1 1 0 0 1-.75-.33a1 1 0 0 1-.25-.78L2 4.5h10ZM4.5 4.5V3a2.5 2.5 0 0 1 5 0v1.5"></svg:path>`,
})
export class StreamlineShoppingBagHandBag2ShoppingBagPurseGoodsItemProductsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBagHandBag2SolidIcon],svg[streamline-shopping-bag-hand-bag-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.146 2.013A1.75 1.75 0 0 1 9.134 3.25v.663h-3.5V3.25c0-.464.184-.91.512-1.237m-2.012 1.9V3.25a3.25 3.25 0 0 1 6.5 0v.663h1.75a.5.5 0 0 1 .497.444l.847 7.596l.008.07c.022.163.057.431.003.69a1.52 1.52 0 0 1-1.073 1.146c-.245.068-.523.06-.692.056l-.09-.002h-9l-.09.002c-.17.004-.448.012-.692-.056c-.542-.15-.959-.6-1.073-1.146c-.054-.259-.02-.527.002-.69l.009-.07l.847-7.596a.5.5 0 0 1 .497-.444z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingBagHandBag2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBagSuitcase1ProductBusinessBriefcaseIcon],svg[streamline-shopping-bag-suitcase-1-product-business-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="10" x=".5" y="3.5" rx="1"></svg:rect><svg:path d="M5 .5h4a1 1 0 0 1 1 1v2h0h-6h0v-2a1 1 0 0 1 1-1ZM3.5 7h7m-7 3h7"></svg:path></svg:g>`,
})
export class StreamlineShoppingBagSuitcase1ProductBusinessBriefcaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBasket1Icon],svg[streamline-shopping-basket-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.36 6H1.64a1 1 0 0 0-1 1.13l.73 5.5a1 1 0 0 0 1 .87h9.24a1 1 0 0 0 1-.87l.73-5.5A1 1 0 0 0 12.36 6M4.5 8.5V11M7 8.5V11m2.5-2.5V11"></svg:path><svg:path d="M9.48 1.54A2.79 2.79 0 0 1 11.78 4L12 6M2 6l.22-2a2.79 2.79 0 0 1 2.3-2.44"></svg:path><svg:path d="M9.5 1.75A1.25 1.25 0 0 1 8.25 3h-2.5a1.25 1.25 0 0 1 0-2.5h2.5A1.25 1.25 0 0 1 9.5 1.75"></svg:path></svg:g>`,
})
export class StreamlineShoppingBasket1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBasket1SolidIcon],svg[streamline-shopping-basket-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.142 1.167A1.74 1.74 0 0 1 5.768.047H8.25a1.74 1.74 0 0 1 1.619 1.1a3.39 3.39 0 0 1 2.4 2.89l.162 1.474c.84.064 1.479.836 1.368 1.682v.001l-.693 5.22l-.007.057c-.015.13-.04.347-.122.544a1.54 1.54 0 0 1-.984.88c-.208.06-.42.058-.55.057H2.605a2 2 0 0 1-.6-.057a1.54 1.54 0 0 1-.983-.88c-.094-.226-.122-.494-.138-.656l-.01-.087l-.661-4.979A1.8 1.8 0 0 1 .2 6.811A1.51 1.51 0 0 1 1.587 5.51l.162-1.474a3.39 3.39 0 0 1 2.393-2.868Zm.152 1.545A1.89 1.89 0 0 0 3.24 4.2l-.144 1.306h7.826L10.778 4.2v-.004a1.89 1.89 0 0 0-1.044-1.497a1.74 1.74 0 0 1-1.484.83H5.768a1.74 1.74 0 0 1-1.474-.816Zm.077 5.776a.625.625 0 0 0-1.25 0v2.482a.625.625 0 1 0 1.25 0zm2.638-.625c.345 0 .625.28.625.625v2.482a.625.625 0 1 1-1.25 0V8.488c0-.345.28-.625.625-.625m3.889.625a.625.625 0 1 0-1.25 0v2.482a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingBasket1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBasket2Icon],svg[streamline-shopping-basket-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.28 6H1.72a1 1 0 0 0-1 1.2l1.1 5.5a1 1 0 0 0 1 .8h8.36a1 1 0 0 0 1-.8l1.1-5.5a1 1 0 0 0-1-1.2M9 2.5L11 6M3 6l2-3.5"></svg:path>`,
})
export class StreamlineShoppingBasket2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBasket2SolidIcon],svg[streamline-shopping-basket-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.777 1.587a.75.75 0 0 1 1.024.28L11.877 5.5h.398a1.5 1.5 0 0 1 1.495 1.799l-1.1 5.499v.002a1.5 1.5 0 0 1-1.495 1.2h-8.35a1.5 1.5 0 0 1-1.495-1.2v-.002L.23 7.3v-.001a1.5 1.5 0 0 1 1.495-1.8h.398l2.076-3.633a.75.75 0 0 1 1.303.744L3.85 5.5h6.298L8.5 2.61a.75.75 0 0 1 .278-1.023Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingBasket2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBuildingRealHomeTowerBuildingHouseEstateIcon],svg[streamline-shopping-building-real-home-tower-building-house-estate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 13.5h-8V4l4-3.5l4 3.5v9.5zm0 0h5v-7h-5m-4 7v-2M3 8.5h3m-3-3h3"></svg:path>`,
})
export class StreamlineShoppingBuildingRealHomeTowerBuildingHouseEstateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart1Icon],svg[streamline-shopping-cart-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.508.5H2.95l.87 8.65a1 1 0 0 0 1 .85h6.3a1 1 0 0 0 1-.68l1.33-4a1 1 0 0 0-.14-.9a1 1 0 0 0-.86-.42H3.3m7.65 9.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-6.5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class StreamlineShoppingCart1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart1ShoppingCartCheckoutIcon],svg[streamline-shopping-cart-1-shopping-cart-checkout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5.5H11l-.87 8.65a1 1 0 0 1-1 .85h-6.3a1 1 0 0 1-1-.68l-1.33-4a1 1 0 0 1 .14-.9A1 1 0 0 1 1.5 4h9.15"></svg:path><svg:circle cx="3" cy="13" r=".5"></svg:circle><svg:circle cx="9.5" cy="13" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineShoppingCart1ShoppingCartCheckoutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart1SolidIcon],svg[streamline-shopping-cart-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.844.753a.75.75 0 0 0-.747-.675H.77a.75.75 0 0 0 0 1.5h1.649l.252 2.506l.002.052l.482 4.795a1.43 1.43 0 0 0 1.431 1.241h5.852a1.43 1.43 0 0 0 1.416-.973v-.002l1.24-3.724v-.001a1.43 1.43 0 0 0-.2-1.286a1.43 1.43 0 0 0-1.216-.6h-7.55zm7.58 12.07a1.178 1.178 0 1 0-2.355 0a1.178 1.178 0 0 0 2.356 0Zm-6.323-1.179a1.178 1.178 0 1 1 0 2.356a1.178 1.178 0 0 1 0-2.356" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingCart1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart2Icon],svg[streamline-shopping-cart-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.182 7.5h-8.18l-1-5h10a.5.5 0 0 1 .49.59l-.82 4a.49.49 0 0 1-.49.41m-9.18-5L2.582.9a.5.5 0 0 0-.49-.4H.502m3.5 7l.42 2.1a.5.5 0 0 0 .49.4h6.09m-.5 3.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class StreamlineShoppingCart2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart2ShoppingCartCheckoutIcon],svg[streamline-shopping-cart-2-shopping-cart-checkout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.82 7.5H10l1-5H1a.5.5 0 0 0-.49.59l.82 4a.49.49 0 0 0 .49.41Zm9.18-5l.42-1.6a.5.5 0 0 1 .49-.4h1.59m-3.5 7l-.42 2.1a.5.5 0 0 1-.49.4H3"></svg:path><svg:circle cx="3.5" cy="13" r=".5"></svg:circle><svg:circle cx="8.5" cy="13" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineShoppingCart2ShoppingCartCheckoutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart2SolidIcon],svg[streamline-shopping-cart-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.75 1.5h1.396l.379 1.44l.01.034l.968 4.845l.012.078l.42 2.1V10a1.25 1.25 0 0 0 1.225 1h6.09a.75.75 0 0 0 0-1.5H5.365l-.25-1.25h6.997c.035 0 .135.003.227-.012a1.01 1.01 0 0 0 .756-.589c.054-.124.081-.281.09-.333l.003-.014l.791-3.862l.002-.01a1 1 0 0 0-.98-1.18H3.894L3.56.975A1.25 1.25 0 0 0 2.34 0H.75a.75.75 0 1 0 0 1.5m10.88 11.3a1.149 1.149 0 1 0-2.298 0a1.149 1.149 0 0 0 2.297 0Zm-6.15-1.148a1.149 1.149 0 1 1 0 2.297a1.149 1.149 0 0 1 0-2.297" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingCart2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart3Icon],svg[streamline-shopping-cart-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.508.5H2.95l.87 8.65a1 1 0 0 0 1 .85h6.3a1 1 0 0 0 1-.68l1.33-4a1 1 0 0 0-.14-.9a1 1 0 0 0-.86-.42H3.3m7.65 9.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-6.5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M6.688 6v2m3-2v2"></svg:path>`,
})
export class StreamlineShoppingCart3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart3ShoppingCartCheckoutIcon],svg[streamline-shopping-cart-3-shopping-cart-checkout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.75 4.5l.25 1m3.25-1L7 5.5m-5.18 2H10l1-5H1a.5.5 0 0 0-.49.59l.82 4a.49.49 0 0 0 .49.41Zm9.18-5l.42-1.6a.5.5 0 0 1 .49-.4h1.59m-3.5 7l-.42 2.1a.5.5 0 0 1-.49.4H3"></svg:path><svg:circle cx="3.5" cy="13" r=".5"></svg:circle><svg:circle cx="8.5" cy="13" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineShoppingCart3ShoppingCartCheckoutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart3SolidIcon],svg[streamline-shopping-cart-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.844.753a.75.75 0 0 0-.746-.675H.77a.75.75 0 1 0 0 1.5h1.65l.25 2.506q0 .026.003.052l.482 4.795l.004.025a1.43 1.43 0 0 0 1.428 1.216h5.85a1.43 1.43 0 0 0 1.418-.973v-.002l1.238-3.724v-.001a1.43 1.43 0 0 0-.198-1.286a1.43 1.43 0 0 0-1.217-.6h-7.55zm7.581 12.07a1.178 1.178 0 1 0-2.356 0a1.178 1.178 0 0 0 2.356 0m-6.324-1.179a1.178 1.178 0 1 1 0 2.356a1.178 1.178 0 0 1 0-2.356m1.087-6.269c.345 0 .625.28.625.625v2a.625.625 0 1 1-1.25 0V6c0-.345.28-.625.625-.625M10.313 6a.625.625 0 1 0-1.25 0v2a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingCart3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCartAddIcon],svg[streamline-shopping-cart-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.946 13.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-6.5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m5.158-7h-3m1.5-1.5v3M.5.5H3L3.263 3m0 0l.643 6.105A1 1 0 0 0 4.9 10h6.32a1 1 0 0 0 .97-.757l1.25-5A1 1 0 0 0 12.47 3z"></svg:path>`,
})
export class StreamlineShoppingCartAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCartAddSolidIcon],svg[streamline-shopping-cart-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.505.078a.75.75 0 0 1 .746.675l.285 2.833h7.549a1.43 1.43 0 0 1 1.217.6a1.43 1.43 0 0 1 .199 1.286l-1.239 3.725V9.2a1.43 1.43 0 0 1-1.417.973H4.994a1.43 1.43 0 0 1-1.431-1.24L3.08 4.135l-.002-.052l-.252-2.506H1.177a.75.75 0 0 1 0-1.5zm7.15 11.566a1.178 1.178 0 1 1 0 2.356a1.178 1.178 0 0 1 0-2.356m-3.969 1.178a1.178 1.178 0 1 0-2.355 0a1.178 1.178 0 0 0 2.355 0m1.626-7.759a.625.625 0 0 0-.625.625v.687H7a.625.625 0 1 0 0 1.25h.687v.687a.625.625 0 0 0 1.25 0v-.687h.687a.625.625 0 1 0 0-1.25h-.687v-.687a.625.625 0 0 0-.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingCartAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCartBasket1ShoppingBasketIcon],svg[streamline-shopping-cart-basket-1-shopping-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.36 6H1.64a1 1 0 0 0-1 1.13l.73 5.5a1 1 0 0 0 1 .87h9.24a1 1 0 0 0 1-.87l.73-5.5A1 1 0 0 0 12.36 6ZM4.5 8.5V11M7 8.5V11m2.5-2.5V11"></svg:path><svg:path d="M9.48 1.54A2.79 2.79 0 0 1 11.78 4L12 6M2 6l.22-2a2.79 2.79 0 0 1 2.3-2.44"></svg:path><svg:path d="M9.5 1.75A1.25 1.25 0 0 1 8.25 3h-2.5a1.25 1.25 0 0 1 0-2.5h2.5A1.25 1.25 0 0 1 9.5 1.75Z"></svg:path></svg:g>`,
})
export class StreamlineShoppingCartBasket1ShoppingBasketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCartBasket3ShoppingBasketIcon],svg[streamline-shopping-cart-basket-3-shopping-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.36 6.62a1 1 0 0 0-.24-.78a1 1 0 0 0-.75-.34H1.63a1 1 0 0 0-.75.34a1 1 0 0 0-.24.78l.75 6a1 1 0 0 0 1 .88h9.24a1 1 0 0 0 1-.88ZM2.5 5.5V5a4.5 4.5 0 0 1 9 0v.5M5 8.5v2m4-2v2"></svg:path>`,
})
export class StreamlineShoppingCartBasket3ShoppingBasketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCartCheckIcon],svg[streamline-shopping-cart-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.946 13.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-6.5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M.5.5H3L3.263 3m0 0l.643 6.105A1 1 0 0 0 4.9 10h6.32a1 1 0 0 0 .97-.757l1.25-5A1 1 0 0 0 12.47 3z"></svg:path><svg:path d="m6.42 6.75l1.333 1l2.188-2.5"></svg:path></svg:g>`,
})
export class StreamlineShoppingCartCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCartCheckSolidIcon],svg[streamline-shopping-cart-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.505.078a.75.75 0 0 1 .746.675l.285 2.833h7.549a1.43 1.43 0 0 1 1.217.6a1.43 1.43 0 0 1 .199 1.286l-1.239 3.725V9.2a1.43 1.43 0 0 1-1.417.973H4.994a1.43 1.43 0 0 1-1.431-1.24L3.08 4.135l-.002-.052l-.252-2.506H1.177a.75.75 0 0 1 0-1.5zm7.15 11.566a1.178 1.178 0 1 1 0 2.356a1.178 1.178 0 0 1 0-2.356m-3.969 1.178a1.178 1.178 0 1 0-2.355 0a1.178 1.178 0 0 0 2.355 0m3.305-6.668a.625.625 0 0 0-1-.75L7.702 7.126l-.61-.457a.625.625 0 1 0-.75 1l1.111.832a.625.625 0 0 0 .875-.125l1.663-2.22Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingCartCheckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCartSubtractIcon],svg[streamline-shopping-cart-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.946 13.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-6.5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M.5.5H3L3.263 3m0 0l.643 6.105A1 1 0 0 0 4.9 10h6.32a1 1 0 0 0 .97-.757l1.25-5A1 1 0 0 0 12.47 3zm6.341 3.5h-3"></svg:path>`,
})
export class StreamlineShoppingCartSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCartSubtractSolidIcon],svg[streamline-shopping-cart-subtract-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.505.078a.75.75 0 0 1 .746.675l.285 2.833h7.549a1.43 1.43 0 0 1 1.217.6a1.43 1.43 0 0 1 .199 1.286l-1.239 3.725V9.2a1.43 1.43 0 0 1-1.417.973H4.994a1.43 1.43 0 0 1-1.431-1.24L3.08 4.135l-.002-.052l-.252-2.506H1.177a.75.75 0 0 1 0-1.5zm7.15 11.566a1.178 1.178 0 1 1 0 2.356a1.178 1.178 0 0 1 0-2.356m-3.969 1.178a1.178 1.178 0 1 0-2.355 0a1.178 1.178 0 0 0 2.355 0m2.938-6.447a.625.625 0 0 1 0 1.25H7a.625.625 0 0 1 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingCartSubtractSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCatergoriesBabyBotlleBottleMilkFamilyChildrenFormulaCareChildKidBabyIcon],svg[streamline-shopping-catergories-baby-botlle-bottle-milk-family-children-formula-care-child-kid-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.5v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-6m0 0v-2a1 1 0 0 0-1-1a1 1 0 0 1-1-1V2a1.5 1.5 0 0 0-3 0v.5a1 1 0 0 1-1 1a1 1 0 0 0-1 1v2m-1 0h9m-4 3h3"></svg:path>`,
})
export class StreamlineShoppingCatergoriesBabyBotlleBottleMilkFamilyChildrenFormulaCareChildKidBabyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCatergoriesBallSportsBallSportBasketballIcon],svg[streamline-shopping-catergories-ball-sports-ball-sport-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 .5v13m-4.9-2.23A5 5 0 0 0 4.5 7a5 5 0 0 0-2.4-4.27m9.8 0a5 5 0 0 0 0 8.54"></svg:path></svg:g>`,
})
export class StreamlineShoppingCatergoriesBallSportsBallSportBasketballIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCatergoriesChairDesignLoungeFurnitureChairInteriorDecorateArmchairDecorationIcon],svg[streamline-shopping-catergories-chair-design-lounge-furniture-chair-interior-decorate-armchair-decoration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 7.5h1a1 1 0 0 1 1 1v5h0h-3h0v-5a1 1 0 0 1 1-1Zm10 0h1a1 1 0 0 1 1 1v5h0h-3h0v-5a1 1 0 0 1 1-1Zm-8 6h7m-8-6v-2a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2m-8 2h7"></svg:path>`,
})
export class StreamlineShoppingCatergoriesChairDesignLoungeFurnitureChairInteriorDecorateArmchairDecorationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCatergoriesDressClothingDressSkirtWomenIcon],svg[streamline-shopping-catergories-dress-clothing-dress-skirt-women-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 3.5L11 5l2-2L10.5.5h-7L1 3l2 2l1.5-1.5V7c0 1.35-1.62 2.3-1.94 5.4a1 1 0 0 0 .25.77a1 1 0 0 0 .74.33h6.9a1 1 0 0 0 .74-.33a1 1 0 0 0 .25-.77C11.12 9.3 9.5 8.35 9.5 7Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.25a6.47 6.47 0 0 0 5 0"></svg:path>`,
})
export class StreamlineShoppingCatergoriesDressClothingDressSkirtWomenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCatergoriesPhoneAndroidPhoneMobileDeviceSmartphoneIphoneIcon],svg[streamline-shopping-catergories-phone-android-phone-mobile-device-smartphone-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="13" x="2" y=".5" rx="1"></svg:rect><svg:path d="M4.5 3h5v5h-5z"></svg:path><svg:circle cx="7" cy="10.75" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineShoppingCatergoriesPhoneAndroidPhoneMobileDeviceSmartphoneIphoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCatergoriesRingMoneyDiamondPaymentWealthFinanceRingAccessoriesIcon],svg[streamline-shopping-catergories-ring-money-diamond-payment-wealth-finance-ring-accessories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="9" r="4.5"></svg:circle><svg:path d="m8.5.5l1 1l-2.5 3l-2.5-3l1-1h3z"></svg:path></svg:g>`,
})
export class StreamlineShoppingCatergoriesRingMoneyDiamondPaymentWealthFinanceRingAccessoriesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCatergoriesShirtClothingTShirtMenTopIcon],svg[streamline-shopping-catergories-shirt-clothing-t-shirt-men-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 1.5l3 3l-2 2l-1-1v6a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-6l-1 1l-2-2l3-3Z"></svg:path>`,
})
export class StreamlineShoppingCatergoriesShirtClothingTShirtMenTopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCatergoriesSofaDecorationFurnitureInteriorDesignCouchSofaDecorateIcon],svg[streamline-shopping-catergories-sofa-decoration-furniture-interior-design-couch-sofa-decorate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="7" x="3" y="1.5" rx="1"></svg:rect><svg:path d="M3 4.5H1.5a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1H11M4 11l-.5 2.5M10 11l.5 2.5"></svg:path></svg:g>`,
})
export class StreamlineShoppingCatergoriesSofaDecorationFurnitureInteriorDesignCouchSofaDecorateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingGiftRewardBoxSocialPresentGiftMediaRatingBowIcon],svg[streamline-shopping-gift-reward-box-social-present-gift-media-rating-bow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="5" x=".5" y="3" rx="1"></svg:rect><svg:path d="M12.5 8v4.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V8M7 3v10.5m3-13L7 3L4 .5"></svg:path></svg:g>`,
})
export class StreamlineShoppingGiftRewardBoxSocialPresentGiftMediaRatingBowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingJewelryDiamond1DiamondMoneyPaymentFinanceWealthIcon],svg[streamline-shopping-jewelry-diamond-1-diamond-money-payment-finance-wealth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m13.5 5.5l-6.5 7l-6.5-7l3-4h7l3 4zm-13 0h13"></svg:path><svg:path d="m3.5 1.5l3.5 4l3.5-4M7 5.5v7"></svg:path></svg:g>`,
})
export class StreamlineShoppingJewelryDiamond1DiamondMoneyPaymentFinanceWealthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingJewelryDiamond2DiamondMoneyPaymentFinanceWealthIcon],svg[streamline-shopping-jewelry-diamond-2-diamond-money-payment-finance-wealth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.64 1.54H3.36a1.07 1.07 0 0 0-.85.46L.69 4.52a1.05 1.05 0 0 0 .06 1.29l5.46 6.29a1 1 0 0 0 1.58 0l5.46-6.29a1.05 1.05 0 0 0 .06-1.29L11.49 2a1.07 1.07 0 0 0-.85-.46Z"></svg:path><svg:path d="M6.48 1.53L4.04 5.31L7 12.46m.55-10.93l2.43 3.78L7 12.46M.52 5.31h12.96"></svg:path></svg:g>`,
})
export class StreamlineShoppingJewelryDiamond2DiamondMoneyPaymentFinanceWealthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingJewelryGoldGoldMoneyPaymentBarsFinanceWealthBullionIcon],svg[streamline-shopping-jewelry-gold-gold-money-payment-bars-finance-wealth-bullion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.66 9.3a1 1 0 0 0-1-.8H2.32a1 1 0 0 0-1 .8L.5 13.5h6Zm7 0a1 1 0 0 0-1-.8H9.32a1 1 0 0 0-1 .8l-.82 4.2h6Z"></svg:path><svg:path d="m10 8.5l-.84-4.2a1 1 0 0 0-1-.8H5.82a1 1 0 0 0-1 .8L4 8.5"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.68 8.5h4.64"></svg:path>`,
})
export class StreamlineShoppingJewelryGoldGoldMoneyPaymentBarsFinanceWealthBullionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingStore1StoreShopShopsStoresIcon],svg[streamline-shopping-store-1-store-shop-shops-stores-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 8.5V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.5M8 8.5v5M1.5 10H8M.5 4L2 .5h10L13.5 4H.5zm4.25 0v1a2 2 0 0 1-2 2h-.28a2 2 0 0 1-2-2V4m8.78 0v1a2 2 0 0 1-2 2h-.5a2 2 0 0 1-2-2V4m8.75 0v1a2 2 0 0 1-2 2h-.25a2 2 0 0 1-2-2V4"></svg:path>`,
})
export class StreamlineShoppingStore1StoreShopShopsStoresIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingStoreSignage1SignStoreShopShopsSignageStoresIcon],svg[streamline-shopping-store-signage-1-sign-store-shop-shops-signage-stores-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="8" x=".5" y="5.5" rx="2"></svg:rect><svg:path d="m4 5.5l3-5l3 5"></svg:path></svg:g>`,
})
export class StreamlineShoppingStoreSignage1SignStoreShopShopsSignageStoresIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingStoreSignage2SignStoreShopShopsSignageStoresPoleIcon],svg[streamline-shopping-store-signage-2-sign-store-shop-shops-signage-stores-pole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="7" x=".5" y=".5" rx="2"></svg:rect><svg:path d="M7 13.5v-6"></svg:path></svg:g>`,
})
export class StreamlineShoppingStoreSignage2SignStoreShopShopsSignageStoresPoleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingStoreSignage3StreetSandwichShopsShopStoresBoardSignStoreIcon],svg[streamline-shopping-store-signage-3-street-sandwich-shops-shop-stores-board-sign-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 2.5h-7l-3 11h7l3-11zm3 11l-3-11m-2.18 8h4.36"></svg:path>`,
})
export class StreamlineShoppingStoreSignage3StreetSandwichShopsShopStoresBoardSignStoreIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShovelRakeIcon],svg[streamline-shovel-rake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.849 7.5H3.15a2 2 0 0 1-1.923-2.55l.86-3.008a1.989 1.989 0 0 1 3.824 0l.86 3.009A2 2 0 0 1 4.849 7.5M4 5.5v8m-1.5 0h3m5.5 0V.5M9.5.5h3m1 13V11A2.5 2.5 0 0 0 11 8.5v0A2.5 2.5 0 0 0 8.5 11v2.5"></svg:path>`,
})
export class StreamlineShovelRakeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShovelRakeSolidIcon],svg[streamline-shovel-rake-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.866 1.563h-.671V7.73a3.12 3.12 0 0 1 2.367 3.027v2.368a.75.75 0 0 1-1.5 0v-2.368c0-.623-.351-1.163-.867-1.434v3.802a.75.75 0 0 1-1.5 0V9.323c-.516.27-.868.811-.868 1.434v2.368a.75.75 0 0 1-1.5 0v-2.368A3.12 3.12 0 0 1 9.695 7.73V1.562h-.67a.75.75 0 0 1 0-1.5h2.84a.75.75 0 0 1 0 1.5ZM1.523 2.04a2.383 2.383 0 0 1 4.584 0l.775 2.715A2.5 2.5 0 0 1 4.565 7.94v4.434h.67a.75.75 0 0 1 0 1.5h-2.84a.75.75 0 0 1 0-1.5h.67V7.941A2.5 2.5 0 0 1 .749 4.756l.775-2.715Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShovelRakeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShredderIcon],svg[streamline-shredder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 10.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1m1.5-2h8m-5.25 0v5"></svg:path><svg:path d="M3.5 8.5V11A1.5 1.5 0 0 1 2 12.5m6.25-4v5m2.25-5V11a1.5 1.5 0 0 0 1.5 1.5m-1.5-7v-3l-2-2h-5v5"></svg:path></svg:g>`,
})
export class StreamlineShredderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShredderSolidIcon],svg[streamline-shredder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.076 3.538v-.795a1 1 0 0 0-.293-.707L9.04.293A1 1 0 0 0 8.333 0h-4.91a.5.5 0 0 0-.499.5v3.038zM.47 5.133a1.6 1.6 0 0 1 1.03-.366h11a1.6 1.6 0 0 1 1.03.366c.287.242.47.592.47.978V9.91c0 .386-.183.736-.47.979a1.6 1.6 0 0 1-1.03.365h-.7a.7.7 0 0 0 .014-.14v-3.13a.68.68 0 0 0-.216-.493a.77.77 0 0 0-.524-.203H2.926a.77.77 0 0 0-.523.203a.68.68 0 0 0-.217.492v3.132a.7.7 0 0 0 .015.139H1.5a1.6 1.6 0 0 1-1.03-.365a1.28 1.28 0 0 1-.47-.98V6.111c0-.386.183-.736.47-.978M7.75 9a.75.75 0 0 0-1.5 0v4.197a.75.75 0 0 0 1.5 0zm-3.461-.75a.75.75 0 0 1 .75.75v2.662a2.02 2.02 0 0 1-2.018 2.018a.75.75 0 0 1 0-1.5a.52.52 0 0 0 .518-.518V9a.75.75 0 0 1 .75-.75m6.172.75a.75.75 0 0 0-1.5 0v2.662a2.02 2.02 0 0 0 2.018 2.018a.75.75 0 0 0 0-1.5a.52.52 0 0 1-.518-.518z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShredderSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShrimpIcon],svg[streamline-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 13.5a5 5 0 0 0 0-10H3v1a4 4 0 0 0 4 4h1.5a2 2 0 1 1 0 4"></svg:path><svg:path d="M8.5 3.5s1 .5 1 2.5s-1 2.5-1 2.5m-2.667 5H8.5v-.75A1.75 1.75 0 0 0 6.75 11h-.083C5.747 11 5 11.746 5 12.667c0 .46.373.833.833.833M3 3.5H2A1.5 1.5 0 0 1 .5 2v0A1.5 1.5 0 0 1 2 .5h4.5M6.25 6a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M10.5 10C12 9.5 13 8.5 13 6.5"></svg:path></svg:g>`,
})
export class StreamlineShrimpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShrimpSolidIcon],svg[streamline-shrimp-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.347 1.781a.754.754 0 1 0 0 1.508H3.35v-.002h5.24q.062.09.162.147a1 1 0 0 1 .123.162c.088.139.189.337.283.583A5.2 5.2 0 0 1 9.5 6a5.2 5.2 0 0 1-.342 1.82a3.4 3.4 0 0 1-.283.583a1 1 0 0 1-.123.163a.5.5 0 0 0-.21.233H7.35a4 4 0 0 1-4-4v-.01H2.347a2.254 2.254 0 1 1 0-4.508h4.511a.75.75 0 0 1 0 1.5h-4.51Zm7.745 2.04a5 5 0 0 0-.186-.426a5.02 5.02 0 0 1 3.54 2.872c-.425 2.075-1.887 3.21-2.793 3.633a2 2 0 0 0-.96-.921l.026-.039c.13-.205.26-.465.373-.76A6.2 6.2 0 0 0 10.5 6a6.2 6.2 0 0 0-.408-2.18Zm.774 7.076c.865-.35 2.196-1.247 3.004-2.83q.006.115.006.232c0 2.426-1.724 4.833-4.013 5.391v-.63q0-.252-.044-.493a2 2 0 0 0 1.047-1.67m-2.02 1.918q.018.12.017.246v.752H6.19a.835.835 0 0 1-.835-.836c0-.923.748-1.67 1.67-1.67h.084c.885 0 1.616.654 1.737 1.505zM7.36 5.542a.752.752 0 1 1-1.504 0a.752.752 0 0 1 1.504 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShrimpSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShrinkHorizontal1Icon],svg[streamline-shrink-horizontal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 4.5L8.5 7L11 9.5m-8-5L5.5 7L3 9.5M.5.5v13m13-13v13"></svg:path>`,
})
export class StreamlineShrinkHorizontal1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShrinkHorizontal1SolidIcon],svg[streamline-shrink-horizontal-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0zm12.5 0a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0zm-2.809 3.288a.5.5 0 0 1 .309.462v5a.5.5 0 0 1-.854.354l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .545-.108m-8.382 0a.5.5 0 0 1 .545.108l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5A.5.5 0 0 1 2.5 9.5v-5a.5.5 0 0 1 .309-.462" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShrinkHorizontal1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShuffleIcon],svg[streamline-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 2l2 2l-2 2m-3-2h5m-2 4l2 2l-2 2"></svg:path><svg:path d="M.5 4H4l4 6h5.5m-13 0H4"></svg:path></svg:g>`,
})
export class StreamlineShuffleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineShuffleSolidIcon],svg[streamline-shuffle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.854 1.646A.5.5 0 0 0 11 2v1H8.5a1 1 0 1 0 0 2H11v1a.5.5 0 0 0 .854.354l2-2a.5.5 0 0 0 0-.708zM0 4a1 1 0 0 1 1-1h3.25a1 1 0 0 1 .832.445L8.785 9H11V8a.5.5 0 0 1 .854-.354l2 2a.5.5 0 0 1 0 .708l-2 2A.5.5 0 0 1 11 12v-1H8.25a1 1 0 0 1-.832-.445L3.715 5H1a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShuffleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSigmaIcon],svg[streamline-sigma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.45 13.448H1.048a.5.5 0 0 1-.456-.307a.47.47 0 0 1 .109-.536l5.248-5.259a.496.496 0 0 0 0-.694L.701 1.393A.47.47 0 0 1 .59.858A.5.5 0 0 1 1.049.55H13.45"></svg:path>`,
})
export class StreamlineSigmaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSigmaSolidIcon],svg[streamline-sigma-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.418 2.268C-.366 1.48.184.126 1.305.126h11.9a.744.744 0 1 1 0 1.489H1.87l4.843 4.86c.29.29.29.76 0 1.05l-4.843 4.86h11.337a.744.744 0 1 1 0 1.49h-11.9c-1.122 0-1.672-1.355-.888-2.142L5.134 7z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSigmaSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignAtIcon],svg[streamline-sign-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.05 7a3 3 0 1 1-5.999 0a3 3 0 0 1 5.999 0"></svg:path><svg:path d="M10.05 7v1.3c0 3.49 5.47.2 2.6-4.54A6.59 6.59 0 0 0 7 .5A6.5 6.5 0 1 0 9.52 13"></svg:path></svg:g>`,
})
export class StreamlineSignAtIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignAtSolidIcon],svg[streamline-sign-at-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.004.03h-.006A6.97 6.97 0 1 0 9.7 13.434a.75.75 0 0 0-.577-1.385A5.47 5.47 0 1 1 7 1.53a5.56 5.56 0 0 1 4.76 2.75l.006.009c1.199 1.98.61 3.514-.095 4.199c-.39.379-.71.417-.807.394c-.025-.005-.05-.015-.085-.07c-.044-.072-.11-.24-.11-.567V6.993A3.62 3.62 0 1 0 9.528 9.64c.24.368.59.61.998.704c.798.184 1.615-.222 2.19-.78c1.224-1.188 1.88-3.493.336-6.047A7.06 7.06 0 0 0 7.004.03m.009 4.85a2.12 2.12 0 1 1 .07 4.24a2.12 2.12 0 0 1-.07-4.24" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignAtSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignCrossSquareIcon],svg[streamline-sign-cross-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.688 1.594a1 1 0 0 1 1-1H12.28a1 1 0 0 1 1 1v10.594a1 1 0 0 1-1 1H1.687a1 1 0 0 1-1-1V1.594Z"></svg:path><svg:path d="M6.188 3.563a.5.5 0 0 0-.5.5v1.406H4.28a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.407V9.5a.5.5 0 0 0 .5.5h1.625a.5.5 0 0 0 .5-.5V8.094h1.406a.5.5 0 0 0 .5-.5V5.969a.5.5 0 0 0-.5-.5H8.313V4.062a.5.5 0 0 0-.5-.5z"></svg:path></svg:g>`,
})
export class StreamlineSignCrossSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignCrossSquareSolidIcon],svg[streamline-sign-cross-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.188 1.594a1.5 1.5 0 0 1 1.5-1.5H12.28a1.5 1.5 0 0 1 1.5 1.5v10.594a1.5 1.5 0 0 1-1.5 1.5H1.687a1.5 1.5 0 0 1-1.5-1.5V1.594Zm5.5 2.468a.5.5 0 0 1 .5-.5h1.625a.5.5 0 0 1 .5.5V5.47h1.406a.5.5 0 0 1 .5.5v1.625a.5.5 0 0 1-.5.5H8.313V9.5a.5.5 0 0 1-.5.5H6.188a.5.5 0 0 1-.5-.5V8.094H4.28a.5.5 0 0 1-.5-.5V5.969a.5.5 0 0 1 .5-.5h1.407z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignCrossSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignHashtagIcon],svg[streamline-sign-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 4.25h13m-13 5.5h13M11.25.5l-2.5 13m-3-13l-2.5 13"></svg:path>`,
})
export class StreamlineSignHashtagIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignHashtagSolidIcon],svg[streamline-sign-hashtag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.178.09a.75.75 0 0 1 .594.879l-.513 2.67h1.913a.75.75 0 1 1 0 1.5h-2.201l-.716 3.722h2.917a.75.75 0 1 1 0 1.5H9.966l-.568 2.953a.75.75 0 1 1-1.473-.283l.514-2.67H4.743l-.568 2.953a.75.75 0 1 1-1.473-.283l.514-2.67H.827a.75.75 0 0 1 0-1.5h2.677l.716-3.723H.827a.75.75 0 1 1 0-1.5H4.51L5.076.686A.75.75 0 1 1 6.55.969l-.513 2.67h3.696L10.3.686a.75.75 0 0 1 .879-.595Zm-5.43 5.048l-.716 3.723h3.695l.716-3.723z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignHashtagSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignage3Icon],svg[streamline-signage-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 2.5h-7l-3 11h7zm3 11l-3-11m-2.18 8h4.36"></svg:path>`,
})
export class StreamlineSignage3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignage3SolidIcon],svg[streamline-signage-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.202 13.407l2.121-8.34l1.348 5.298h-.888a.75.75 0 0 0 0 1.5h1.27l.391 1.542a.75.75 0 1 0 1.454-.37L11.051 1.844l-.006-.022l-.006-.02a.746.746 0 0 0-.732-.527h-6.63a.75.75 0 0 0-.727.566L.102 13.037a.75.75 0 0 0 .727.935h6.646a.75.75 0 0 0 .727-.565" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignage3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignage4Icon],svg[streamline-signage-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.854 9.419v3.852m6.292-3.852v3.852M7 .729v1.458m.583.001H6.417M10.583.729v1.458m.584.001H10M3.5.729v1.458m-.583.001h1.166m7.001 4.437H8.75M1.375.729h11.25s.5 0 .5.5v7.69s0 .5-.5.5H1.375s-.5 0-.5-.5v-7.69s0-.5.5-.5"></svg:path>`,
})
export class StreamlineSignage4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignage4SolidIcon],svg[streamline-signage-4-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.615.406v.786h-.002a.625.625 0 1 0 0 1.25h1.253a.625.625 0 0 0 0-1.25h-.001V.406h2.51v.786h-.002a.625.625 0 1 0 0 1.25h1.254a.625.625 0 1 0 0-1.25h-.002V.406h2.51v.786h-.002a.625.625 0 0 0 0 1.25h1.254a.625.625 0 1 0 0-1.25h-.002V.407h1.695a.5.5 0 0 1 .5.5v8.335a.5.5 0 0 1-.5.5h-2.184v3.5a.75.75 0 0 1-1.5 0v-3.5H4.604v3.5a.75.75 0 0 1-1.5 0v-3.5H.92a.5.5 0 0 1-.5-.5V.906a.5.5 0 0 1 .5-.5zm6.265 5.71a.625.625 0 0 0 0 1.25h2.507a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignage4SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalFullIcon],svg[streamline-signal-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75 7.5H.5v6h4.25m4.5-9h-4.5v9h4.5M13.5.5H9.25v13h4.25z"></svg:path>`,
})
export class StreamlineSignalFullIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalFullSolidIcon],svg[streamline-signal-full-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 1h-2.662a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h2.663a.5.5 0 0 0 .5-.5v-12A.5.5 0 0 0 13 1M3.163 8H.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.662a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5ZM5.42 5h2.663a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H5.419a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignalFullSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalLoadingIcon],svg[streamline-signal-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 9.5L.5 7L3 4.5m8 5L13.5 7L11 4.5M7 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m2.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-5 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path>`,
})
export class StreamlineSignalLoadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalLoadingSolidIcon],svg[streamline-signal-loading-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.7 3.958a.75.75 0 0 1 .024 1.06L1.832 7l1.892 1.982a.75.75 0 0 1-1.085 1.036l-2.387-2.5a.75.75 0 0 1 0-1.036l2.387-2.5a.75.75 0 0 1 1.06-.024Zm6.6 0a.75.75 0 0 1 1.061.024l2.387 2.5a.75.75 0 0 1 0 1.036l-2.387 2.5a.75.75 0 0 1-1.085-1.036L12.17 7l-1.893-1.982a.75.75 0 0 1 .025-1.06ZM4.5 6.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M7.75 7a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m2.5 0a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignalLoadingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalLowIcon],svg[streamline-signal-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75 7.5H.5v6h4.25zm6.25 6h2.5m-6.75 0h2.5"></svg:path>`,
})
export class StreamlineSignalLowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalLowSolidIcon],svg[streamline-signal-low-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.162 8H.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.662a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5m6.954 5.25a.75.75 0 0 1 .75-.75h2.375a.75.75 0 0 1 0 1.5h-2.375a.75.75 0 0 1-.75-.75m-4.303-.75a.75.75 0 0 0 0 1.5h2.374a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignalLowSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalMediumIcon],svg[streamline-signal-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75 7.5H.5v6h4.25m4.5-9h-4.5v9h4.5zm1.75 9h2.5"></svg:path>`,
})
export class StreamlineSignalMediumIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalMediumSolidIcon],svg[streamline-signal-medium-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.331 5H5.67a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h2.66a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5ZM3.162 8H.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.662a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5m7.704 4.5a.75.75 0 0 0 0 1.5h2.375a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignalMediumSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalNoneIcon],svg[streamline-signal-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 13.5h2.5m-7.75 0h2.5m-7.75 0H3"></svg:path>`,
})
export class StreamlineSignalNoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalNoneSolidIcon],svg[streamline-signal-none-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 13.25a.75.75 0 0 1 .75-.75h2.375a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75m10.116 0a.75.75 0 0 1 .75-.75h2.375a.75.75 0 0 1 0 1.5h-2.375a.75.75 0 0 1-.75-.75m-4.303-.75a.75.75 0 0 0 0 1.5h2.374a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignalNoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSkull1Icon],svg[streamline-skull-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.884 6.511a5.885 5.885 0 1 0-9.316 4.776v1.108a.98.98 0 0 0 .98.98h4.904a.98.98 0 0 0 .98-.98v-1.108a5.88 5.88 0 0 0 2.452-4.776M6.02 11.415v1.96m1.96-1.96v1.96"></svg:path><svg:path d="M3.567 7.246a1.226 1.226 0 1 0 2.452 0a1.226 1.226 0 1 0-2.452 0m4.414 0a1.226 1.226 0 1 0 2.452 0a1.226 1.226 0 1 0-2.452 0"></svg:path></svg:g>`,
})
export class StreamlineSkull1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSkull1SolidIcon],svg[streamline-skull-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 10.235a6 6 0 1 0-8.5 0V13a1 1 0 1 0 2 0v-.916H6V13a1 1 0 1 0 2 0v-.916h1.25V13a1 1 0 1 0 2 0zm-6.5-1.651a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m5.75-1.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSkull1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSlackIcon],svg[streamline-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M5.5 2a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m6 4a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-4 6a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0m-6-4a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.793 1.219v4.937m-3.59 1.692v4.937M1.215 5.207h4.937m1.692 3.59h4.937"></svg:path></svg:g>`,
})
export class StreamlineSlackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSlackSolidIcon],svg[streamline-slack-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.855.25c.428 0 .775.347.775.775v5.1a.775.775 0 0 1-1.55 0v-5.1c0-.428.347-.775.775-.775M5.145 7.1c.429 0 .776.346.776.774v5.101a.775.775 0 1 1-1.55 0v-5.1c0-.429.347-.776.775-.776Zm-4.12-2.73a.775.775 0 0 0 0 1.55h5.1a.775.775 0 1 0 0-1.55zm6.074 4.485c0-.428.347-.775.775-.775h5.101a.775.775 0 1 1 0 1.55h-5.1a.775.775 0 0 1-.776-.775M5 2a1 1 0 1 1 2 0a1 1 0 0 1-2 0m6 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M1 8a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSlackSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSleepIcon],svg[streamline-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.588 4.403H5.24L2.422 8.38h2.983M7.825.94h2.483L7.67 4.664h2.793M8.402 7.712h3.612l-3.838 5.419h4.064"></svg:path>`,
})
export class StreamlineSleepIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSleepSolidIcon],svg[streamline-sleep-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.974.595a.75.75 0 0 0-.666-.405H7.825a.75.75 0 0 0 0 1.5h1.033l-1.8 2.54a.75.75 0 0 0 .612 1.184h2.793a.75.75 0 0 0 0-1.5H9.12l1.8-2.54a.75.75 0 0 0 .054-.779M5.906 4.058a.75.75 0 0 0-.667-.405H2.588a.75.75 0 1 0 0 1.5h1.201L1.81 7.947a.75.75 0 0 0 .613 1.183h2.983a.75.75 0 1 0 0-1.5H3.872l1.98-2.794a.75.75 0 0 0 .054-.778m6.108 2.904a.75.75 0 0 1 .612 1.184l-3 4.235h2.614a.75.75 0 0 1 0 1.5H8.176a.75.75 0 0 1-.612-1.184l3-4.235H8.402a.75.75 0 1 1 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSleepSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyAngryIcon],svg[streamline-smiley-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 11c.828 0 1.5-.784 1.5-1.75S7.828 7.5 7 7.5s-1.5.784-1.5 1.75S6.172 11 7 11"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4.25 6a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m5.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M5.345 3.484c.31.254.993.417 1.655.417s1.344-.163 1.654-.417"></svg:path></svg:g>`,
})
export class StreamlineSmileyAngryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyAngrySolidIcon],svg[streamline-smiley-angry-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0M8.26 2.4c-.051.04-.195.117-.45.18a3.45 3.45 0 0 1-1.617 0c-.255-.063-.4-.14-.45-.18a.625.625 0 0 0-.792.966c.26.213.611.345.94.427a4.7 4.7 0 0 0 2.22 0c.33-.082.681-.214.94-.427a.625.625 0 1 0-.791-.967Zm.756 6.877c0-1.143-.865-2.14-2.013-2.14c-1.15 0-2.014.997-2.014 2.14s.865 2.14 2.014 2.14s2.013-.997 2.013-2.14m.403-2.91a1.024 1.024 0 0 0-.002-2.05h-.002a1.025 1.025 0 0 0 .002 2.05zm-4.83 0a1.025 1.025 0 0 0-.003-2.05h-.003a1.025 1.025 0 0 0 .003 2.05h.002Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyAngrySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyCoolIcon],svg[streamline-smiley-cool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.232 10.617c.349.048.88-.157 1.3-.478c.224-.172.425-.383.57-.596"></svg:path><svg:path d="M13.366 5.678a6.5 6.5 0 1 1-12.731 0M12.768 4A6.5 6.5 0 0 0 7 .5A6.5 6.5 0 0 0 1.232 4"></svg:path><svg:path d="M.5 4.75V4H7v.75a3.25 3.25 0 1 1-6.5 0m6.5 0V4h6.5v.75a3.25 3.25 0 0 1-6.5 0"></svg:path></svg:g>`,
})
export class StreamlineSmileyCoolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyCoolSolidIcon],svg[streamline-smiley-cool-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 3.17H1.14A7 7 0 0 1 7 0a7 7 0 0 1 5.86 3.17zm0 3.161a5 5 0 0 1-.229.412C6.11 7.815 4.975 8.735 3.196 8.735c-1.388 0-2.398-.562-3.092-1.34L.006 7.28a7 7 0 0 0 13.989.001l-.098.113c-.694.779-1.704 1.341-3.092 1.341c-1.78 0-2.914-.92-3.576-1.992A5 5 0 0 1 7 6.331m2.487 3.463a.5.5 0 0 0-.706.054a1.9 1.9 0 0 1-.758.527q-.142.037-.286.047a.5.5 0 0 0 .07.998a2.5 2.5 0 0 0 .54-.098A2.9 2.9 0 0 0 9.54 10.5a.5.5 0 0 0-.053-.706M.159 4.512a.14.14 0 0 0-.039.14c.14.641.427 1.362.917 1.91c.473.53 1.15.923 2.159.923c1.265 0 2.032-.62 2.512-1.398a4.8 4.8 0 0 0 .609-1.667H.391a.32.32 0 0 0-.232.092m8.134 1.575a4.8 4.8 0 0 1-.61-1.667h5.926c.108 0 .19.044.233.092a.14.14 0 0 1 .039.14c-.14.641-.427 1.362-.917 1.91c-.473.53-1.151.923-2.16.923c-1.264 0-2.031-.62-2.511-1.398" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyCoolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyCrying1Icon],svg[streamline-smiley-crying-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4 9.5c.448-1.428 2.15-2.3 3.85-1.904A3.07 3.07 0 0 1 10 9.5M3.797 5.377c.092-.179.38-.497.713-.69s.753-.282.954-.272m3.072-.002c.201-.01.62.08.954.273c.333.192.621.51.713.69"></svg:path></svg:g>`,
})
export class StreamlineSmileyCrying1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyCrying1SolidIcon],svg[streamline-smiley-crying-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0M4.994 3.826a2.1 2.1 0 0 0-.617.081a2.8 2.8 0 0 0-.68.275c-.224.13-.422.295-.578.451c-.148.15-.292.326-.378.495a.625.625 0 1 0 1.112.57a1.4 1.4 0 0 1 .153-.185c.095-.095.207-.185.316-.248a1.6 1.6 0 0 1 .54-.184q.069-.007.071-.006a.625.625 0 1 0 .061-1.249M4.67 9.694a.625.625 0 1 1-1.21-.324a3.665 3.665 0 0 1 7.078 0a.625.625 0 0 1-1.208.325a2.415 2.415 0 0 0-4.662 0Zm4.468-4.613q-.067-.007-.07-.006a.625.625 0 0 1-.062-1.249c.19-.009.414.027.618.081c.213.056.455.146.68.275c.224.13.422.295.577.451c.15.15.292.326.38.495a.625.625 0 1 1-1.113.57a1.5 1.5 0 0 0-.153-.185a1.6 1.6 0 0 0-.317-.248a1.6 1.6 0 0 0-.54-.184" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyCrying1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyCuteIcon],svg[streamline-smiley-cute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M8.367 5.69c.157-.255.5-.418.834-.418s.678.163.835.417m-4.403.001c-.157-.255-.5-.418-.834-.418s-.678.163-.835.417m.216 2.945a1.41 1.41 0 1 0 2.819 0a1.41 1.41 0 0 0 2.82 0"></svg:path></svg:g>`,
})
export class StreamlineSmileyCuteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyCuteSolidIcon],svg[streamline-smiley-cute-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M-.001 7a7 7 0 1 1 14 0a7 7 0 0 1-14 0m4.805 1.634a.625.625 0 1 0-1.25 0A2.035 2.035 0 0 0 7 10.102a2.035 2.035 0 0 0 3.445-1.467a.625.625 0 1 0-1.25 0a.785.785 0 1 1-1.57 0a.625.625 0 1 0-1.25 0a.785.785 0 1 1-1.57 0ZM9.52 5.168c.265 0 .48.138.543.24a.625.625 0 1 0 1.065-.655c-.34-.553-1.013-.835-1.608-.835s-1.268.282-1.608.835a.625.625 0 0 0 1.065.655c.063-.102.278-.24.543-.24m-5.583.24c.063-.102.278-.24.543-.24s.48.138.543.24a.625.625 0 0 0 1.065-.655c-.34-.553-1.013-.835-1.608-.835s-1.267.282-1.608.835a.625.625 0 1 0 1.065.655" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyCuteSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyDroolIcon],svg[streamline-smiley-drool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 9.95v1.8a1.25 1.25 0 0 1-2.5 0V11c.481-.481 1.537-1.05 2.5-1.05"></svg:path><svg:path d="M3.5 7.5A3.5 3.5 0 0 0 7 11v.75a1.25 1.25 0 1 0 2.5 0v-1.8c.619-.632 1-1.496 1-2.45z"></svg:path><svg:path d="M12.124 11A6.5 6.5 0 1 0 5 13.187"></svg:path><svg:path d="M3.797 5.377c.092-.179.38-.497.713-.69s.753-.282.954-.272m3.072-.002c.201-.01.62.08.954.273c.333.192.621.51.713.69"></svg:path></svg:g>`,
})
export class StreamlineSmileyDroolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyDroolSolidIcon],svg[streamline-smiley-drool-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.637 10.862a5.2 5.2 0 0 1 1.846-.707a5 5 0 0 1 .297-.04v1.354a1.231 1.231 0 0 1-2.462 0v-.38a3 3 0 0 1 .319-.227m2.587-1.643a1 1 0 0 0-.543-.099c-1.234.123-2.361.681-2.992 1.19a1 1 0 0 0-.369.712a3.5 3.5 0 0 1-2.097-1.115c-.573-.638-.85-1.42-.85-2a.5.5 0 0 1 .5-.5h6.218a.5.5 0 0 1 .5.5c0 .38-.12.851-.367 1.312M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m8.89-2.266a2.2 2.2 0 0 1 .558-1.165c.223.059.475.152.708.287c.234.134.44.306.603.47c.155.156.304.339.393.513a.625.625 0 1 1-1.112.57l-.011-.017a1.5 1.5 0 0 0-.157-.185a1.7 1.7 0 0 0-.34-.269a1.7 1.7 0 0 0-.642-.204m-4.919.658a2.2 2.2 0 0 1-.73-1.066a3 3 0 0 1 .603-.47c.233-.135.485-.228.708-.287a2.2 2.2 0 0 1 .64-.084a.625.625 0 1 1-.06 1.248l-.022.001a1.5 1.5 0 0 0-.239.043c-.14.037-.284.093-.402.161a1.7 1.7 0 0 0-.498.454" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyDroolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyEmojiKissNervousIcon],svg[streamline-smiley-emoji-kiss-nervous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="m7.231 7.001l.447.097a.858.858 0 0 1 .36 1.503l-.37.3l.37.3a.858.858 0 0 1-.36 1.504l-.447.097M10.5 4l-2 1.5l2 1M3.5 4l2 1.5l-2 1"></svg:path></svg:g>`,
})
export class StreamlineSmileyEmojiKissNervousIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyEmojiKissNervousSolidIcon],svg[streamline-smiley-emoji-kiss-nervous-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m7.445-.297a.625.625 0 0 0-.265 1.221l.446.097c.19.042.25.285.098.408l-.369.3a.625.625 0 0 0 0 .97l.369.3a.233.233 0 0 1-.098.408l-.446.097a.625.625 0 0 0 .265 1.221l.447-.097c1.125-.244 1.526-1.593.812-2.414c.714-.82.313-2.17-.812-2.414zM11 3.625a.625.625 0 0 1-.125.875l-1.191.893l1.096.548a.625.625 0 0 1-.56 1.118l-2-1A.625.625 0 0 1 8.125 5l2-1.5a.625.625 0 0 1 .875.125M3.875 3.5a.625.625 0 1 0-.75 1l1.191.893l-1.096.548a.625.625 0 0 0 .56 1.118l2-1A.625.625 0 0 0 5.875 5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyEmojiKissNervousSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyEmojiTerrifiedIcon],svg[streamline-smiley-emoji-terrified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="m10.5 4l-2 1.5l2 1M3.5 4l2 1.5l-2 1m1 3.5S6 7.5 7 7.5S9.5 10 9.5 10"></svg:path></svg:g>`,
})
export class StreamlineSmileyEmojiTerrifiedIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyEmojiTerrifiedSolidIcon],svg[streamline-smiley-emoji-terrified-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m10.875-2.5a.625.625 0 0 0-.75-1l-2 1.5a.625.625 0 0 0 .095 1.059l2 1a.625.625 0 0 0 .56-1.118l-1.096-.548zM3 3.625a.625.625 0 0 1 .875-.125l2 1.5a.625.625 0 0 1-.095 1.059l-2 1a.625.625 0 1 1-.56-1.118l1.096-.548L3.125 4.5A.625.625 0 0 1 3 3.625m2.037 6.694a.625.625 0 0 1-1.074-.638L4.5 10l-.537-.32l.002-.003l.004-.006l.014-.024a9 9 0 0 1 .246-.386c.162-.246.392-.577.656-.91c.262-.33.573-.682.9-.958c.302-.253.73-.54 1.215-.54c.484 0 .913.287 1.215.54c.327.276.638.627.9.958a13 13 0 0 1 .902 1.296l.014.024l.004.006l.002.002v.001L9.5 10l.537-.32a.625.625 0 0 1-1.074.64v-.001l-.003-.004l-.011-.019a10 10 0 0 0-.22-.346c-.15-.227-.358-.526-.594-.823c-.238-.3-.49-.579-.725-.777a1.6 1.6 0 0 0-.297-.206A.4.4 0 0 0 7 8.103a.4.4 0 0 0-.113.041q-.12.06-.297.206a5.5 5.5 0 0 0-.725.777a12 12 0 0 0-.814 1.17l-.011.018l-.002.004Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyEmojiTerrifiedSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyGrumpyIcon],svg[streamline-smiley-grumpy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4 9.5c.448-1.428 2.15-2.3 3.85-1.904A3.07 3.07 0 0 1 10 9.5m-6-5h1.5V5m3-.5H10V5"></svg:path></svg:g>`,
})
export class StreamlineSmileyGrumpyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyGrumpySolidIcon],svg[streamline-smiley-grumpy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m9.331 2.582a.625.625 0 0 0 1.208-.325a3.665 3.665 0 0 0-7.077 0a.625.625 0 1 0 1.207.325a2.415 2.415 0 0 1 4.662 0m-6.39-5.174c0-.345.28-.625.625-.625h1.303c.346 0 .625.28.625.625v.595a.625.625 0 0 1-1.249.03h-.68a.625.625 0 0 1-.624-.625m6.19-.625a.625.625 0 0 0 0 1.25h.679a.625.625 0 0 0 1.25-.03v-.595a.625.625 0 0 0-.626-.625z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyGrumpySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyHappyIcon],svg[streamline-smiley-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4.75 5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M7 11a3.5 3.5 0 0 0 3.5-3.5h-7A3.5 3.5 0 0 0 7 11"></svg:path></svg:g>`,
})
export class StreamlineSmileyHappyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyHappySolidIcon],svg[streamline-smiley-happy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0M3.343 8.223a.25.25 0 0 1 .25-.25h6.782a.25.25 0 0 1 .25.25c0 .552-.27 1.337-.852 1.983c-.59.656-1.504 1.173-2.79 1.173c-1.284 0-2.198-.517-2.789-1.173c-.581-.646-.85-1.43-.85-1.983Zm1.239-2.247a1.024 1.024 0 0 1 .002-2.049h.003a1.024 1.024 0 0 1-.003 2.049zm4.831 0a1.024 1.024 0 0 1 .003-2.049h.002a1.024 1.024 0 0 1-.002 2.049z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyHappySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyInLoveIcon],svg[streamline-smiley-in-love-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 7a6.5 6.5 0 1 1-13 0m5-6.326a6.5 6.5 0 0 1 3 0M3.544 3.085c-.992-1.217-2.04-.352-2.053.58c0 1.388 1.66 2.528 2.053 2.528s2.054-1.14 2.054-2.528c-.014-.932-1.062-1.797-2.054-.58m6.911 0c.992-1.217 2.04-.352 2.053.58c0 1.388-1.66 2.528-2.053 2.528s-2.053-1.14-2.053-2.528c.013-.932 1.06-1.797 2.053-.58"></svg:path><svg:path d="M3.7 8c.5 1.8 2.5 2.9 4.3 2.4c1.1-.4 2-1.3 2.3-2.4"></svg:path></svg:g>`,
})
export class StreamlineSmileyInLoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyInLoveSolidIcon],svg[streamline-smiley-in-love-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0M9.509 8.837a.625.625 0 1 1 1.207.325a3.85 3.85 0 0 1-7.431 0a.625.625 0 0 1 1.207-.325a2.6 2.6 0 0 0 5.017 0m.544-4.945c.993-1.217 2.04-.352 2.054.58c0 1.389-1.66 2.528-2.053 2.528S8 5.86 8 4.473c.014-.933 1.061-1.798 2.053-.58Zm-8.16.58c.014-.932 1.061-1.797 2.053-.58c.993-1.217 2.04-.352 2.054.58C6 5.862 4.34 7 3.946 7c-.392 0-2.053-1.14-2.053-2.527Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyInLoveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyKissIcon],svg[streamline-smiley-kiss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="m7.231 7.001l.447.097a.858.858 0 0 1 .36 1.503l-.37.3l.37.3a.858.858 0 0 1-.36 1.504l-.447.097M4.75 5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineSmileyKissIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyKissSolidIcon],svg[streamline-smiley-kiss-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m3.56-2.324c0 .565.457 1.024 1.022 1.025h.002a1.025 1.025 0 0 0 .003-2.049h-.003c-.565 0-1.024.459-1.024 1.024m4.831 0c0 .565.457 1.024 1.022 1.025h.003a1.024 1.024 0 0 0 .002-2.049h-.002c-.566 0-1.025.459-1.025 1.024M7.364 6.39a.625.625 0 1 0-.266 1.222l.447.097c.19.041.249.285.098.408l-.37.3a.625.625 0 0 0 0 .97l.37.3a.233.233 0 0 1-.098.407l-.447.097a.625.625 0 0 0 .266 1.222l.446-.097c1.125-.245 1.526-1.594.813-2.414c.713-.821.312-2.17-.813-2.415z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyKissSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyLaughing3Icon],svg[streamline-smiley-laughing-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M9 10.464a3.5 3.5 0 0 0 1.281-4.78l-6.062 3.5A3.5 3.5 0 0 0 9 10.463Zm-.902-7.562L7.55 4.95l1.732-1m-6.38 1.952l2.049.549l-1.732 1"></svg:path></svg:g>`,
})
export class StreamlineSmileyLaughing3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyLaughing3SolidIcon],svg[streamline-smiley-laughing-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.526.982a6.949 6.949 0 1 0 6.948 12.036A6.949 6.949 0 0 0 3.526.982M2.23 5.66a.625.625 0 0 1 .792-.392l1.928.65a.625.625 0 0 1 .113 1.134l-1.441.832A.625.625 0 1 1 2.998 6.8l.243-.14l-.617-.209a.625.625 0 0 1-.393-.792Zm6.483-2.724a.625.625 0 1 0-1.226-.246l-.4 1.995a.625.625 0 0 0 .925.664l1.441-.832a.625.625 0 1 0-.625-1.082l-.244.14zm-4.506 6.96a.5.5 0 0 1 .183-.683l5.83-3.366a.5.5 0 0 1 .683.183c.309.534.472 1.407.281 2.306c-.196.923-.767 1.883-1.936 2.558s-2.286.69-3.184.398c-.874-.284-1.548-.862-1.857-1.396" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyLaughing3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyMaskIcon],svg[streamline-smiley-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M3.797 5.377c.092-.179.38-.497.713-.69s.753-.282.954-.272m3.072-.002c.201-.01.62.08.954.273c.333.192.621.51.713.69M.5 7c.667.5 3 1.5 6.5 1.5s5.833-1 6.5-1.5"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 0 0 3-.732V8.239c-.868.157-1.874.261-3 .261s-2.132-.104-3-.26v4.528a6.5 6.5 0 0 0 3 .732"></svg:path></svg:g>`,
})
export class StreamlineSmileyMaskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyMaskSolidIcon],svg[streamline-smiley-mask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.055 6.116a7.001 7.001 0 0 1 13.89 0c-.39.229-1.214.618-2.325.977c-1.312.424-2.954.782-4.62.782s-3.308-.358-4.62-.782C1.269 6.734.444 6.345.055 6.116m-.037 1.39a7 7 0 0 0 13.964 0c-.521.25-1.202.526-1.977.776c-.464.15-.97.293-1.505.418v2.543A5.48 5.48 0 0 1 7 12.5c-1.33 0-2.55-.472-3.5-1.257V8.7a19 19 0 0 1-1.505-.418a16 16 0 0 1-1.977-.776m9.12-2.962q-.068-.009-.071-.007a.625.625 0 0 1-.061-1.248c.189-.01.413.026.617.08c.213.057.455.146.68.276c.224.13.422.294.578.45c.148.15.292.326.378.495a.625.625 0 1 1-1.112.571a1.4 1.4 0 0 0-.153-.185a1.6 1.6 0 0 0-.316-.249a1.6 1.6 0 0 0-.54-.183M4.376 3.37c.204-.054.428-.09.618-.08a.625.625 0 1 1-.062 1.248q-.003-.002-.07.006a1.6 1.6 0 0 0-.54.184a1.6 1.6 0 0 0-.47.433a.625.625 0 0 1-1.112-.57c.087-.17.23-.345.378-.495a2.8 2.8 0 0 1 .579-.45c.224-.13.466-.22.679-.276" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyMaskSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyNauseasIcon],svg[streamline-smiley-nauseas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.75 5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4.899 9.194c.235-.325.987-.975 2.114-.975c1.128 0 1.88.65 2.115.975"></svg:path><svg:path d="M4.08 8.185c.773.336 1.01 1.242.702 2.084M9.92 8.185c-.773.336-1.01 1.242-.702 2.084"></svg:path></svg:g>`,
})
export class StreamlineSmileyNauseasIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyNauseasSolidIcon],svg[streamline-smiley-nauseas-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m4.083.612c.346.15.61.37.803.631a3.63 3.63 0 0 1 2.127-.683c.896 0 1.613.316 2.11.67c.192-.256.454-.47.794-.618a.625.625 0 1 1 .498 1.146c-.37.16-.6.65-.364 1.297a.625.625 0 1 1-1.174.429a2.7 2.7 0 0 1-.166-.964c-.226-.251-.824-.71-1.698-.71c-.91 0-1.522.499-1.724.741c0 .317-.058.637-.166.933a.625.625 0 0 1-1.174-.43c.236-.646.006-1.135-.364-1.296a.625.625 0 1 1 .498-1.146m.499-1.61a1.024 1.024 0 0 1 .002-2.05h.003a1.025 1.025 0 0 1-.003 2.05zm4.831 0a1.025 1.025 0 0 1 .003-2.05h.002a1.024 1.024 0 0 1-.002 2.05z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyNauseasSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileySmirkIcon],svg[streamline-smiley-smirk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.25 5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m-4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M7.732 10.117c.349.048.88-.157 1.3-.478s.755-.78.8-1.13"></svg:path></svg:g>`,
})
export class StreamlineSmileySmirkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileySmirkSolidIcon],svg[streamline-smiley-smirk-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m3.56-2.324c0 .565.457 1.024 1.022 1.025h.002a1.025 1.025 0 0 0 .003-2.049h-.003c-.565 0-1.024.459-1.024 1.024m4.831 0c0 .565.457 1.024 1.022 1.025h.003a1.024 1.024 0 0 0 .002-2.049h-.002c-.566 0-1.025.459-1.025 1.024m-.34 5.156a.8.8 0 0 0 .32-.067a2.06 2.06 0 0 0 .928-.71c.112-.156.144-.26.148-.291a.625.625 0 0 1 1.24.16c-.041.318-.2.618-.372.859a3.3 3.3 0 0 1-1.507 1.153c-.278.104-.609.178-.927.134a.625.625 0 1 1 .17-1.238" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileySmirkSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileySparksIcon],svg[streamline-smiley-sparks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m-2.25-10V6M3.5 4.75H6M9.25 3.5V6M8 4.75h2.5"></svg:path><svg:path d="M3.535 8a3.5 3.5 0 0 0 6.93 0z"></svg:path></svg:g>`,
})
export class StreamlineSmileySparksIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileySparksSolidIcon],svg[streamline-smiley-sparks-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0m3.89 8.268a.5.5 0 0 0-.5-.5H3.61a.5.5 0 0 0-.5.5c0 .62.296 1.463.915 2.15c.635.707 1.616 1.256 2.975 1.256c1.36 0 2.34-.55 2.975-1.255c.619-.688.916-1.53.916-2.151Zm-1.405-5.19a.625.625 0 0 0-.625.626v.491h-.49a.625.625 0 0 0 0 1.25h.49v.49a.625.625 0 0 0 1.25 0v-.49h.492a.625.625 0 1 0 0-1.25h-.492v-.491a.625.625 0 0 0-.625-.625Zm-4.97 0c.345 0 .625.28.625.625v.492h.49a.625.625 0 0 1 0 1.25h-.49v.49a.625.625 0 0 1-1.25 0v-.49h-.492a.625.625 0 1 1 0-1.25h.492v-.492c0-.345.28-.625.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileySparksSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileySurprisedIcon],svg[streamline-smiley-surprised-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 10.5c.828 0 1.5-.784 1.5-1.75S7.828 7 7 7s-1.5.784-1.5 1.75s.672 1.75 1.5 1.75"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4.75 5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineSmileySurprisedIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileySurprisedSolidIcon],svg[streamline-smiley-surprised-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.999 0a7 7 0 1 0 0 14a7 7 0 0 0 0-14M4.986 9.023c0-1.185.823-2.3 2.013-2.3s2.013 1.115 2.013 2.3s-.824 2.3-2.013 2.3s-2.013-1.115-2.013-2.3M4.58 5.976a1.024 1.024 0 0 1 .002-2.049h.003a1.024 1.024 0 0 1-.003 2.049zm4.831 0a1.024 1.024 0 0 1 .003-2.049h.002a1.024 1.024 0 0 1-.002 2.049z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileySurprisedSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyThrowUpIcon],svg[streamline-smiley-throw-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.232 10a6.5 6.5 0 1 1 11.536 0"></svg:path><svg:path d="M3.949 10.193C3.724 7.897 5.972 7.5 7 7.5s3.276.397 3.051 2.693a.4.4 0 0 1-.405.353h-.741c.005 1.386 2.095 1.1 2.095 1.91c0 0-.172 1.044-4 1.044s-4-1.043-4-1.043c0-.811 2.09-.525 2.095-1.912h-.74a.4.4 0 0 1-.406-.352M9.5 4l-1 1.5h2M4.5 4l1 1.5h-2"></svg:path></svg:g>`,
})
export class StreamlineSmileyThrowUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyThrowUpSolidIcon],svg[streamline-smiley-throw-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a7 7 0 0 1 4.62 12.26a3 3 0 0 0-.278-.253a5 5 0 0 0-.406-.289c.145-.21.242-.465.27-.756c.07-.737-.076-1.406-.425-1.972A3.23 3.23 0 0 0 9.5 7.833c-.894-.464-1.91-.56-2.5-.56c-.587 0-1.597.095-2.487.554c-.46.237-.938.598-1.28 1.141c-.352.558-.505 1.222-.443 1.954c.027.312.13.576.281.791a6 6 0 0 0-.413.294c-.069.055-.17.139-.277.252A7 7 0 0 1 7 0m3.473 3.362a.625.625 0 0 0-.867.173L8.498 5.197a.625.625 0 0 0 .52.972h2.216a.625.625 0 1 0 0-1.25h-1.048l.46-.69a.625.625 0 0 0-.174-.867Zm-6.079.173a.625.625 0 0 0-1.04.694l.46.69H2.766a.625.625 0 1 0 0 1.25h2.216a.625.625 0 0 0 .52-.972zM7 8.524c.99 0 3.15.343 2.962 2.32a.393.393 0 0 1-.401.344h-.714c.003.687.654 1.1 1.218 1.457c.432.273.813.514.813.822c0 0-.167.533-3.878.533c-3.71 0-3.878-.533-3.878-.533c0-.308.381-.549.813-.822c.564-.358 1.215-.77 1.218-1.457H4.49c-.23 0-.435-.155-.453-.371C3.87 8.863 6.014 8.524 7 8.524" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyThrowUpSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyVeryShockedIcon],svg[streamline-smiley-very-shocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 8.5v2m-6 3c.245-.388.661-1.473.367-2.714s-.122-1.81 0-1.94c.245-.387.955-.775 1.836.776s.857 3.232.735 3.878m9.062 0c-.245-.388-.661-1.473-.367-2.714s.122-1.81 0-1.94c-.245-.387-.955-.775-1.836.776s-.857 3.232-.735 3.878M2 4.5a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0m6 0a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0"></svg:path><svg:path d="M1.762 8.53C1.272 7.865 1 7.204 1 6C1 2.253 3.693.5 7 .5s6 1.753 6 5.5c0 1.205-.272 1.866-.762 2.53m-8.437 2.596C4.461 12.096 5.208 13 7 13s2.539-.905 3.199-1.874"></svg:path></svg:g>`,
})
export class StreamlineSmileyVeryShockedIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyVeryShockedSolidIcon],svg[streamline-smiley-very-shocked-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .048c-1.855 0-3.578.483-4.85 1.474C.862 2.524.074 4.02.074 5.945c0 .578.05 1.055.147 1.46c.324-.217.75-.36 1.262-.286c.843.122 1.545.785 2.141 1.778c.974 1.624 1.17 3.345 1.12 4.468c.568.344 1.292.534 2.255.534s1.687-.19 2.256-.534c-.052-1.124.145-2.845 1.119-4.468c.596-.993 1.298-1.656 2.14-1.778c.513-.074.94.069 1.263.285c.097-.404.147-.88.147-1.459c0-1.925-.788-3.421-2.075-4.423C10.578.53 8.854.048 7 .048M6 4.5C6 5.88 5.105 7 4 7S2 5.88 2 4.5S2.895 2 4 2s2 1.12 2 2.5M10 7C8.895 7 8 5.88 8 4.5S8.895 2 10 2s2 1.12 2 2.5S11.105 7 10 7m-3 .343a.75.75 0 0 1 .75.75v1.751a.75.75 0 0 1-1.5 0V8.093a.75.75 0 0 1 .75-.75M.502 10.771c.363 1.454-.152 2.726-.454 3.18h3.634c.152-.757.182-2.726-.908-4.543S.804 8.045.502 8.5c-.152.152-.364.818 0 2.272Zm12.996 0c-.363 1.454.152 2.726.454 3.18h-3.634c-.152-.757-.182-2.725.908-4.543c1.09-1.817 1.97-1.363 2.272-.909c.152.152.364.818 0 2.272" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyVeryShockedSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
