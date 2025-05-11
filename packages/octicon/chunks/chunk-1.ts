import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconMultiSelect16Icon],svg[octicon-multi-select-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 7.5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5m0 5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5m-4-10h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5M2 14a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10.314-3.082L11.07 2.417A.25.25 0 0 1 11.256 2h4.488a.25.25 0 0 1 .186.417l-2.244 2.5a.25.25 0 0 1-.372 0Z"></svg:path>`,
})
export class OcticonMultiSelect16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMultiSelect24Icon],svg[octicon-multi-select-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 11.5h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5m0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5m-5-12h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1 0-1.5M5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2M19.309 7.918l-2.245-2.501A.25.25 0 0 1 17.25 5h4.49a.25.25 0 0 1 .185.417l-2.244 2.5a.25.25 0 0 1-.372 0Z"></svg:path>`,
})
export class OcticonMultiSelect24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMuteIcon],svg[octicon-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06l-1.97 1.97l-1.97-1.97l-1.06 1.06L11.44 8L9.47 9.97l1.06 1.06l1.97-1.97l1.97 1.97l1.06-1.06L13.56 8l1.97-1.97z" fill="currentColor"></svg:path>`,
})
export class OcticonMuteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMute16Icon],svg[octicon-mute-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2.75v10.5a.751.751 0 0 1-1.238.57L3.473 11H1.75A1.75 1.75 0 0 1 0 9.25v-2.5C0 5.784.784 5 1.75 5h1.722l3.29-2.82A.75.75 0 0 1 8 2.75m3.28 2.47L13 6.94l1.72-1.72a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042L14.06 8l1.72 1.72a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L13 9.06l-1.72 1.72a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L11.94 8l-1.72-1.72a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215m-7.042 1.1a.75.75 0 0 1-.488.18h-2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2c.179 0 .352.064.488.18L6.5 11.62V4.38Z"></svg:path>`,
})
export class OcticonMute16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconMute24Icon],svg[octicon-mute-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.75v16.5a.75.75 0 0 1-1.255.555L5.46 16H2.75A1.75 1.75 0 0 1 1 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805A.75.75 0 0 1 12 3.75M6.255 9.305a.75.75 0 0 1-.505.195h-3a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h3c.187 0 .367.069.505.195l4.245 3.86V5.445ZM16.28 8.22a.75.75 0 1 0-1.06 1.06L17.94 12l-2.72 2.72a.75.75 0 1 0 1.06 1.06L19 13.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L20.06 12l2.72-2.72a.75.75 0 0 0-1.06-1.06L19 10.94z"></svg:path>`,
})
export class OcticonMute24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNoEntry16Icon],svg[octicon-no-entry-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 7.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1.5 0a6.5 6.5 0 1 0-13 0a6.5 6.5 0 0 0 13 0"></svg:path>`,
})
export class OcticonNoEntry16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNoEntry24Icon],svg[octicon-no-entry-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12m15.75.75H5.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class OcticonNoEntry24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNoEntryFill12Icon],svg[octicon-no-entry-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0m3 5H3v2h6Z"></svg:path>`,
})
export class OcticonNoEntryFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNoNewlineIcon],svg[octicon-no-newline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M16 5v3c0 .55-.45 1-1 1h-3v2L9 8l3-3v2h2V5h2zM8 8c0 2.2-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4zM1.5 9.66L5.66 5.5C5.18 5.19 4.61 5 4 5C2.34 5 1 6.34 1 8c0 .61.19 1.17.5 1.66zM7 8c0-.61-.19-1.17-.5-1.66L2.34 10.5c.48.31 1.05.5 1.66.5c1.66 0 3-1.34 3-3z" fill="currentColor"></svg:path>`,
})
export class OcticonNoNewlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNorthStar16Icon],svg[octicon-north-star-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5.75a.75.75 0 0 0-1.5 0v5.19L4.391 3.33a.75.75 0 1 0-1.06 1.061L5.939 7H.75a.75.75 0 0 0 0 1.5h5.19l-2.61 2.609a.75.75 0 1 0 1.061 1.06L7 9.561v5.189a.75.75 0 0 0 1.5 0V9.56l2.609 2.61a.75.75 0 1 0 1.06-1.061L9.561 8.5h5.189a.75.75 0 0 0 0-1.5H9.56l2.61-2.609a.75.75 0 0 0-1.061-1.06L8.5 5.939z"></svg:path>`,
})
export class OcticonNorthStar16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNorthStar24Icon],svg[octicon-north-star-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 1.25a.75.75 0 0 0-1.5 0v8.69L6.447 5.385a.75.75 0 1 0-1.061 1.06L9.94 11H1.25a.75.75 0 0 0 0 1.5h8.69l-4.554 4.553a.75.75 0 0 0 1.06 1.061L11 13.561v8.689a.75.75 0 0 0 1.5 0v-8.69l4.553 4.554a.75.75 0 0 0 1.061-1.06L13.561 12.5h8.689a.75.75 0 0 0 0-1.5h-8.69l4.554-4.553a.75.75 0 1 0-1.06-1.061L12.5 9.939z"></svg:path>`,
})
export class OcticonNorthStar24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNoteIcon],svg[octicon-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z" fill="currentColor"></svg:path>`,
})
export class OcticonNoteIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNote16Icon],svg[octicon-note-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class OcticonNote16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNote24Icon],svg[octicon-note-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z"></svg:path><svg:path fill="currentColor" d="M5 8.75A.75.75 0 0 1 5.75 8h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 8.75m0 4a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class OcticonNote24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNumber16Icon],svg[octicon-number-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.75A.75.75 0 0 1 9.75 4h4a.75.75 0 0 1 .53 1.28l-1.89 1.892c.312.076.604.18.867.319c.742.391 1.244 1.063 1.244 2.005c0 .653-.231 1.208-.629 1.627c-.386.408-.894.653-1.408.777c-1.01.243-2.225.063-3.124-.527a.751.751 0 0 1 .822-1.254c.534.35 1.32.474 1.951.322c.306-.073.53-.201.67-.349c.129-.136.218-.32.218-.596c0-.308-.123-.509-.444-.678c-.373-.197-.98-.318-1.806-.318a.75.75 0 0 1-.53-1.28l1.72-1.72H9.75A.75.75 0 0 1 9 4.75m-3.587 5.763c-.35-.05-.77.113-.983.572a.75.75 0 1 1-1.36-.632c.508-1.094 1.589-1.565 2.558-1.425c1 .145 1.872.945 1.872 2.222c0 1.433-1.088 2.192-1.79 2.681c-.308.216-.571.397-.772.573H7a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75c0-.69.3-1.211.67-1.61c.348-.372.8-.676 1.15-.92c.8-.56 1.18-.904 1.18-1.474c0-.473-.267-.69-.587-.737M5.604.089A.75.75 0 0 1 6 .75v4.77h.711a.75.75 0 0 1 0 1.5H3.759a.75.75 0 0 1 0-1.5H4.5V2.15l-.334.223a.75.75 0 0 1-.832-1.248l1.5-1a.75.75 0 0 1 .77-.037Z"></svg:path>`,
})
export class OcticonNumber16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconNumber24Icon],svg[octicon-number-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.003 7.754a.75.75 0 0 1 .75-.75h5.232a.75.75 0 0 1 .53 1.28l-2.776 2.777c.55.097 1.057.253 1.492.483c.905.477 1.504 1.284 1.504 2.418c0 .966-.471 1.75-1.172 2.27c-.687.511-1.587.77-2.521.77c-1.367 0-2.274-.528-2.667-.756a.75.75 0 0 1 .755-1.297c.331.193.953.553 1.912.553c.673 0 1.243-.188 1.627-.473c.37-.275.566-.635.566-1.067c0-.5-.219-.836-.703-1.091c-.538-.284-1.375-.443-2.471-.443a.75.75 0 0 1-.53-1.28l2.643-2.644h-3.421a.75.75 0 0 1-.75-.75M7.88 15.215a1.4 1.4 0 0 0-1.446.83a.75.75 0 0 1-1.37-.61a2.9 2.9 0 0 1 2.986-1.71c.589.06 1.139.323 1.557.743c.434.446.685 1.058.685 1.778c0 1.641-1.254 2.437-2.12 2.986c-.538.341-1.18.694-1.495 1.273H9.75a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75c0-1.799 1.337-2.63 2.243-3.21c1.032-.659 1.55-1.031 1.55-1.8c0-.355-.116-.584-.26-.732a1.07 1.07 0 0 0-.652-.298Zm.234-13.121a.75.75 0 0 1 .386.656V9h1.252a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1 0-1.5H7V4.103l-.853.533a.749.749 0 1 1-.795-1.272l2-1.25a.75.75 0 0 1 .762-.02"></svg:path>`,
})
export class OcticonNumber24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconOctofaceIcon],svg[octicon-octoface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31c0 0-1.05-.33-3.44 1.3c-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3c-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69C0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35c0-.76.38-1.48 1.02-2.07c1.07-.98 2.9-.46 4.96-.46c2.07 0 3.88-.52 4.96.46c.65.59 1.02 1.3 1.02 2.07c0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z" fill="currentColor"></svg:path>`,
})
export class OcticonOctofaceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconOctoface16Icon],svg[octicon-octoface-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M1.326 1.973a1.2 1.2 0 0 1 1.49-.832c.387.112.977.307 1.575.602c.586.291 1.243.71 1.7 1.296c.022.027.042.056.061.084A13.22 13.22 0 0 1 8 3c.67 0 1.289.037 1.861.108l.051-.07c.457-.586 1.114-1.004 1.7-1.295a9.654 9.654 0 0 1 1.576-.602a1.2 1.2 0 0 1 1.49.832c.14.493.356 1.347.479 2.29c.079.604.123 1.28.07 1.936c.541.977.773 2.11.773 3.301C16 13 14.5 15 8 15s-8-2-8-5.5c0-1.034.238-2.128.795-3.117c-.08-.712-.034-1.46.052-2.12c.122-.943.34-1.797.479-2.29zM8 13.065c6 0 6.5-2 6-4.27C13.363 5.905 11.25 5 8 5s-5.363.904-6 3.796c-.5 2.27 0 4.27 6 4.27z" fill="currentColor"></svg:path><svg:path d="M4 8a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0V8zm2.078 2.492c-.083-.264.146-.492.422-.492h3c.276 0 .505.228.422.492C9.67 11.304 8.834 12 8 12c-.834 0-1.669-.696-1.922-1.508zM10 8a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0V8z" fill="currentColor"></svg:path>`,
})
export class OcticonOctoface16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconOctoface24Icon],svg[octicon-octoface-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7.75 11c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 1 0 2.5 0v-1.5C9 11.56 8.44 11 7.75 11zm1.27 4.5a.469.469 0 0 1 .48-.5h5a.47.47 0 0 1 .48.5c-.116 1.316-.759 2.5-2.98 2.5s-2.864-1.184-2.98-2.5zm7.23-4.5c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 1 0 2.5 0v-1.5c0-.69-.56-1.25-1.25-1.25z" fill="currentColor"></svg:path><svg:path fill-rule="evenodd" d="M21.255 3.82a1.725 1.725 0 0 0-2.141-1.195c-.557.16-1.406.44-2.264.866c-.78.386-1.647.93-2.293 1.677A18.442 18.442 0 0 0 12 5c-.93 0-1.784.059-2.569.17c-.645-.74-1.505-1.28-2.28-1.664a13.876 13.876 0 0 0-2.265-.866a1.725 1.725 0 0 0-2.141 1.196a23.645 23.645 0 0 0-.69 3.292c-.125.97-.191 2.07-.066 3.112C1.254 11.882 1 13.734 1 15.527C1 19.915 3.13 23 12 23c8.87 0 11-3.053 11-7.473c0-1.794-.255-3.647-.99-5.29c.127-1.046.06-2.15-.066-3.125a23.652 23.652 0 0 0-.689-3.292zM20.5 14c.5 3.5-1.5 6.5-8.5 6.5s-9-3-8.5-6.5c.583-4 3-6 8.5-6s7.928 2 8.5 6z" fill="currentColor"></svg:path>`,
})
export class OcticonOctoface24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconOrganizationIcon],svg[octicon-organization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1c0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3c.058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3c-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3c.058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3c-.229.59 0 1 0 1s3.005 1.366 3.005 4z" fill="currentColor"></svg:path>`,
})
export class OcticonOrganizationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconOrganization16Icon],svg[octicon-organization-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5q0 .127-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.8.8 0 0 1-.197-.026q-.148.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5M3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75m4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75M7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5M3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75M7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class OcticonOrganization16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconOrganization24Icon],svg[octicon-organization-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM5.5 9.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M6.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM9 12.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75m.75-4.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM9 5.75A.75.75 0 0 1 9.75 5h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 9 5.75M13.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm-.75-2.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M13.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M2 20V3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17q0 .26-.063.5H20a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.2-.4l-.5-.375a.75.75 0 0 1 .9-1.2l.5.375c.504.378.8.97.8 1.6v8a2 2 0 0 1-2 2h-3.562a1 1 0 0 1-.166-.018Q16.138 22 16 22h-3.75a.75.75 0 0 1-.75-.75V19h-3v2.25a.75.75 0 0 1-.75.75H4a2 2 0 0 1-2-2m2 .5h3v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25h3a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5"></svg:path>`,
})
export class OcticonOrganization24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPackageIcon],svg[octicon-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 0 0-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z" fill="currentColor"></svg:path>`,
})
export class OcticonPackageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPackage16Icon],svg[octicon-package-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.878.392l5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0M7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758l-4.63-2.685a.25.25 0 0 0-.25 0M2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271l4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></svg:path>`,
})
export class OcticonPackage16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPackage24Icon],svg[octicon-package-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.75 1.75 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.75 1.75 0 0 1 1.75 0m-1 1.298L4.251 6.34l7.75 4.474l7.75-4.474l-7.625-4.402a.25.25 0 0 0-.25 0m.875 19.123l7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"></svg:path>`,
})
export class OcticonPackage24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPackageDependencies16Icon],svg[octicon-package-dependencies-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.122.392a1.75 1.75 0 0 1 1.756 0l5.25 3.045c.54.313.872.89.872 1.514V7.25a.75.75 0 0 1-1.5 0V5.677L7.75 8.432v6.384a1 1 0 0 1-1.502.865L.872 12.563A1.75 1.75 0 0 1 0 11.049V4.951c0-.624.332-1.2.872-1.514ZM7.125 1.69a.25.25 0 0 0-.25 0l-4.63 2.685L7 7.133l4.755-2.758ZM1.5 11.049a.25.25 0 0 0 .125.216l4.625 2.683V8.432L1.5 5.677Zm11.672-.282L11.999 12h3.251a.75.75 0 0 1 0 1.5h-3.251l1.173 1.233a.75.75 0 1 1-1.087 1.034l-2.378-2.5a.75.75 0 0 1 0-1.034l2.378-2.5a.75.75 0 0 1 1.087 1.034"></svg:path>`,
})
export class OcticonPackageDependencies16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPackageDependencies24Icon],svg[octicon-package-dependencies-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.126.64a1.75 1.75 0 0 1 1.75 0l8.25 4.762q.155.09.286.206a.75.75 0 0 1 .554.96q.035.17.035.35v3.332a.75.75 0 0 1-1.5 0V7.64l-7.75 4.474V22.36a.75.75 0 0 1-1.125.65l-8.75-5.052a1.75 1.75 0 0 1-.875-1.515V6.917q0-.179.035-.35a.75.75 0 0 1 .554-.96q.133-.117.286-.205zm.875 10.173l7.75-4.474l-7.625-4.402a.25.25 0 0 0-.25 0L2.251 6.34Zm-8.5-3.175v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"></svg:path><svg:path fill="currentColor" d="m16.617 17.5l2.895-2.702a.75.75 0 0 0-1.024-1.096l-4.285 4a.75.75 0 0 0 0 1.096l4.285 4a.75.75 0 1 0 1.024-1.096L16.617 19h6.633a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class OcticonPackageDependencies24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPackageDependents16Icon],svg[octicon-package-dependents-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.122.392a1.75 1.75 0 0 1 1.756 0l5.25 3.045c.54.313.872.89.872 1.514V7.25a.75.75 0 0 1-1.5 0V5.677L7.75 8.432v6.384a1 1 0 0 1-1.502.865L.872 12.563A1.75 1.75 0 0 1 0 11.049V4.951c0-.624.332-1.2.872-1.514ZM7.125 1.69a.25.25 0 0 0-.25 0l-4.63 2.685L7 7.133l4.755-2.758ZM1.5 11.049a.25.25 0 0 0 .125.216l4.625 2.683V8.432L1.5 5.677Zm10.828 3.684l1.173-1.233H10.25a.75.75 0 0 1 0-1.5h3.251l-1.173-1.233a.75.75 0 1 1 1.087-1.034l2.378 2.5a.75.75 0 0 1 0 1.034l-2.378 2.5a.75.75 0 0 1-1.087-1.034"></svg:path>`,
})
export class OcticonPackageDependents16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPackageDependents24Icon],svg[octicon-package-dependents-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.126.64a1.75 1.75 0 0 1 1.75 0l8.25 4.762q.155.09.286.206a.75.75 0 0 1 .554.96q.035.17.035.35v3.332a.75.75 0 0 1-1.5 0V7.64l-7.75 4.474V22.36a.75.75 0 0 1-1.125.65l-8.75-5.052a1.75 1.75 0 0 1-.875-1.515V6.917q0-.179.035-.35a.75.75 0 0 1 .554-.96q.133-.117.286-.205zm.875 10.173l7.75-4.474l-7.625-4.402a.25.25 0 0 0-.25 0L2.251 6.34Zm-8.5-3.175v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"></svg:path><svg:path fill="currentColor" d="m21.347 17.5l-2.894-2.702a.75.75 0 1 1 1.023-1.096l4.286 4a.75.75 0 0 1 0 1.096l-4.286 4a.75.75 0 1 1-1.023-1.096L21.347 19h-6.633a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class OcticonPackageDependents24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPaintbrush16Icon],svg[octicon-paintbrush-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.134 1.535c.7-.509 1.416-.942 2.076-1.155c.649-.21 1.463-.267 2.069.34c.603.601.568 1.411.368 2.07c-.202.668-.624 1.39-1.125 2.096c-1.011 1.424-2.496 2.987-3.775 4.249c-1.098 1.084-2.132 1.839-3.04 2.3a3.74 3.74 0 0 1-1.055 3.217c-.431.431-1.065.691-1.657.861c-.614.177-1.294.287-1.914.357A21 21 0 0 1 .797 16H.743l.007-.75H.749L.742 16a.75.75 0 0 1-.743-.742l.743-.008l-.742.007v-.054a21 21 0 0 1 .13-2.284q.101-.972.358-1.914c.17-.591.43-1.226.86-1.657a3.75 3.75 0 0 1 3.227-1.054c.466-.893 1.225-1.907 2.314-2.982c1.271-1.255 2.833-2.75 4.245-3.777M1.62 13.089q-.077.696-.104 1.395q.7-.027 1.396-.104a10.5 10.5 0 0 0 1.668-.309c.526-.151.856-.325 1.011-.48a2.25 2.25 0 1 0-3.182-3.182c-.155.155-.329.485-.48 1.01a10.5 10.5 0 0 0-.309 1.67m10.396-10.34c-1.224.89-2.605 2.189-3.822 3.384l1.718 1.718c1.21-1.205 2.51-2.597 3.387-3.833c.47-.662.78-1.227.912-1.662c.134-.444.032-.551.009-.575h-.001V1.78c-.014-.014-.113-.113-.548.027c-.432.14-.995.462-1.655.942m-4.832 7.266a10 10 0 0 0 1.63-1.142L7.155 7.216a9.7 9.7 0 0 0-1.161 1.607c.482.302.889.71 1.19 1.192"></svg:path>`,
})
export class OcticonPaintbrush16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPaintbrush24Icon],svg[octicon-paintbrush-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.642 6.653c-1.31 1.812-3.251 3.86-4.945 5.575l-.091.092l-2.69-2.69l.098-.098c1.69-1.71 3.732-3.656 5.544-4.962c.911-.657 1.715-1.115 2.353-1.318c.652-.207.915-.091 1.039.033c.113.113.231.367.019 1.02c-.207.635-.668 1.436-1.327 2.348M10.9 10.736l2.605 2.605c-.88.754-1.684 1.294-2.378 1.655a4.83 4.83 0 0 0-1.892-1.89c.36-.69.903-1.482 1.665-2.37m-3.086 1.856a4.83 4.83 0 0 0-4.33 1.328c-.525.525-.88 1.302-1.13 2.079c-.256.795-.43 1.682-.541 2.507a19 19 0 0 0-.173 2.216c-.004.3.003.567.022.778c.009.104.022.212.044.31c.01.05.027.113.053.18c.02.051.074.178.19.295c.117.117.245.17.297.19c.066.026.13.043.178.054c.099.021.207.035.31.044c.211.019.479.025.779.021c.603-.008 1.39-.06 2.216-.172c.825-.112 1.711-.285 2.507-.54c.776-.25 1.553-.606 2.079-1.132a4.83 4.83 0 0 0 1.327-4.333c1.209-.6 2.622-1.618 4.121-3.135c1.694-1.714 3.709-3.835 5.093-5.75c.688-.952 1.258-1.904 1.538-2.764c.274-.842.334-1.826-.384-2.544c-.72-.719-1.703-.672-2.555-.401c-.865.275-1.822.843-2.776 1.53c-1.92 1.384-4.036 3.407-5.733 5.125c-1.5 1.518-2.53 2.896-3.132 4.114m1.44 2.388a3.33 3.33 0 0 1 0 4.71c-.271.27-.774.537-1.478.763c-.684.22-1.477.378-2.248.482c-.769.104-1.495.152-2.035.16a9 9 0 0 1-.351-.002a9 9 0 0 1-.002-.35c.007-.542.055-1.267.16-2.036c.104-.771.261-1.564.481-2.249c.227-.703.493-1.206.764-1.478a3.33 3.33 0 0 1 4.71 0Z"></svg:path>`,
})
export class OcticonPaintbrush24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPaintcanIcon],svg[octicon-paintcan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 0C2.69 0 0 2.69 0 6v1c0 .55.45 1 1 1v5c0 1.1 2.24 2 5 2s5-.9 5-2V8c.55 0 1-.45 1-1V6c0-3.31-2.69-6-6-6zm3 10v.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V10c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.5c0 .55-.45 1-1 1s-1-.45-1-1v-1c-.55 0-1-.45-1-1V7.2c.91.49 2.36.8 4 .8c1.64 0 3.09-.31 4-.8V9c0 .55-.45 1-1 1zM6 7c-1.68 0-3.12-.41-3.71-1C2.88 5.41 4.32 5 6 5c1.68 0 3.12.41 3.71 1c-.59.59-2.03 1-3.71 1zm0-3c-2.76 0-5 .89-5 2c0-2.76 2.24-5 5-5s5 2.24 5 5c0-1.1-2.24-2-5-2z" fill="currentColor"></svg:path>`,
})
export class OcticonPaintcanIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPaperAirplane16Icon],svg[octicon-paper-airplane-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.989 8L.064 2.68a1.342 1.342 0 0 1 1.85-1.462l13.402 5.744a1.13 1.13 0 0 1 0 2.076L1.913 14.782a1.343 1.343 0 0 1-1.85-1.463L.99 8Zm.603-5.288L2.38 7.25h4.87a.75.75 0 0 1 0 1.5H2.38l-.788 4.538L13.929 8Z"></svg:path>`,
})
export class OcticonPaperAirplane16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPaperAirplane24Icon],svg[octicon-paper-airplane-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.513 1.96a1.37 1.37 0 0 1 1.499-.21l19.335 9.215a1.147 1.147 0 0 1 0 2.07L3.012 22.25a1.374 1.374 0 0 1-1.947-1.46L2.49 12L1.065 3.21a1.38 1.38 0 0 1 .448-1.25m2.375 10.79l-1.304 8.042L21.031 12L2.584 3.208l1.304 8.042h7.362a.75.75 0 0 1 0 1.5Z"></svg:path>`,
})
export class OcticonPaperAirplane24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPaperclip16Icon],svg[octicon-paperclip-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.212 3.02a1.753 1.753 0 0 0-2.478.003l-5.83 5.83a3 3 0 0 0-.88 2.127c0 .795.315 1.551.88 2.116c.567.567 1.333.89 2.126.89c.79 0 1.548-.321 2.116-.89l5.48-5.48a.75.75 0 0 1 1.061 1.06l-5.48 5.48a4.5 4.5 0 0 1-3.177 1.33c-1.2 0-2.345-.487-3.187-1.33a4.48 4.48 0 0 1-1.32-3.177c0-1.195.475-2.341 1.32-3.186l5.83-5.83a3.25 3.25 0 0 1 5.553 2.297c0 .863-.343 1.691-.953 2.301L7.439 12.39c-.375.377-.884.59-1.416.593a2 2 0 0 1-1.412-.593a1.99 1.99 0 0 1 0-2.828l5.48-5.48a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042l-5.48 5.48a.49.49 0 0 0 0 .707a.5.5 0 0 0 .352.154a.5.5 0 0 0 .356-.154l5.833-5.827a1.755 1.755 0 0 0 0-2.481Z"></svg:path>`,
})
export class OcticonPaperclip16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPaperclip24Icon],svg[octicon-paperclip-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.187 3.588a2.75 2.75 0 0 0-3.889 0L5.575 13.31a4.5 4.5 0 0 0 6.364 6.364l8.662-8.662a.75.75 0 0 1 1.061 1.06L13 20.735a6 6 0 0 1-8.485-8.485l9.723-9.723a4.25 4.25 0 0 1 4.124-1.139a4.25 4.25 0 0 1 3.025 3.025a4.25 4.25 0 0 1-1.139 4.124l-9.193 9.193a2.64 2.64 0 0 1-1.858.779a2.63 2.63 0 0 1-1.854-.779c-.196-.196-.338-.47-.43-.726a2.8 2.8 0 0 1-.168-.946c0-.7.284-1.373.775-1.864l8.132-8.131a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734l-8.131 8.132a1.15 1.15 0 0 0-.336.803c.003.204.053.405.146.587l.02.032c.22.215.501.332.786.332c.29 0 .58-.121.798-.34l9.192-9.192a2.75 2.75 0 0 0 0-3.89Z"></svg:path>`,
})
export class OcticonPaperclip24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPasskeyFill16Icon],svg[octicon-passkey-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.743 4.757a3.757 3.757 0 1 1 5.851 3.119a6 6 0 0 1 2.15 1.383c.17.17.257.405.258.646q.003.897 0 1.795L11 12.778v.721a.5.5 0 0 1-.5.5H1.221a.75.75 0 0 1-.714-.784a6 6 0 0 1 3.899-5.339a3.75 3.75 0 0 1-1.663-3.119"></svg:path><svg:path fill="currentColor" d="M15.75 6.875c0 .874-.448 1.643-1.127 2.09a.27.27 0 0 0-.123.22v.59c0 .067-.026.13-.073.177l-.356.356a.125.125 0 0 0 0 .177l.356.356c.047.047.073.11.073.176v.231c0 .067-.026.13-.073.177l-.356.356a.125.125 0 0 0 0 .177l.356.356c.047.047.073.11.073.177v.287a.25.25 0 0 1-.065.168l-.8.88a.52.52 0 0 1-.77 0l-.8-.88a.25.25 0 0 1-.065-.168V9.185a.26.26 0 0 0-.123-.22a2.5 2.5 0 1 1 3.873-2.09M14 6.5a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class OcticonPasskeyFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPasskeyFill24Icon],svg[octicon-passkey-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.496 2a5.25 5.25 0 0 0-2.519 9.857A9.01 9.01 0 0 0 .5 20.228a.75.75 0 0 0 .728.772h5.257q5.008.002 10.015 0a.5.5 0 0 0 .5-.5v-4.669a.95.95 0 0 0-.171-.551a9.02 9.02 0 0 0-4.814-3.423A5.25 5.25 0 0 0 9.496 2"></svg:path><svg:path fill="currentColor" d="M23.625 10.313c0 1.31-.672 2.464-1.691 3.134a.4.4 0 0 0-.184.33v.886a.37.37 0 0 1-.11.265l-.534.534a.19.19 0 0 0 0 .265l.534.534c.071.07.11.166.11.265v.347a.37.37 0 0 1-.11.265l-.534.534a.19.19 0 0 0 0 .265l.534.534a.37.37 0 0 1 .11.265v.431a.38.38 0 0 1-.097.253l-1.2 1.319a.78.78 0 0 1-1.156 0l-1.2-1.319a.38.38 0 0 1-.097-.253v-5.39a.4.4 0 0 0-.184-.33a3.75 3.75 0 1 1 5.809-3.134M21 9.75a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0"></svg:path>`,
})
export class OcticonPasskeyFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPaste16Icon],svg[octicon-paste-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.626 3.533a.25.25 0 0 0-.126.217v9.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.126-.217a.75.75 0 0 1 .752-1.298c.541.313.874.89.874 1.515v9.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-9.5c0-.625.333-1.202.874-1.515a.75.75 0 0 1 .752 1.298M5.75 1h4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 4.75v-3A.75.75 0 0 1 5.75 1m.75 3h3V2.5h-3Z"></svg:path>`,
})
export class OcticonPaste16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPaste24Icon],svg[octicon-paste-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.962 2.513a.75.75 0 0 1-.475.949l-.816.272a.25.25 0 0 0-.171.237V21.25c0 .138.112.25.25.25h14.5a.25.25 0 0 0 .25-.25V3.97a.25.25 0 0 0-.17-.236l-.817-.272a.75.75 0 0 1 .474-1.424l.816.273A1.75 1.75 0 0 1 21 3.97v17.28A1.75 1.75 0 0 1 19.25 23H4.75A1.75 1.75 0 0 1 3 21.25V3.97a1.75 1.75 0 0 1 1.197-1.66l.816-.272a.75.75 0 0 1 .949.475"></svg:path><svg:path fill="currentColor" d="M7 1.75C7 .784 7.784 0 8.75 0h6.5C16.216 0 17 .784 17 1.75v1.5A1.75 1.75 0 0 1 15.25 5h-6.5A1.75 1.75 0 0 1 7 3.25Zm1.75-.25a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class OcticonPaste24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPencilIcon],svg[octicon-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z" fill="currentColor"></svg:path>`,
})
export class OcticonPencilIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPencil16Icon],svg[octicon-pencil-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.25.25 0 0 0-.064.108l-.558 1.953l1.953-.558a.25.25 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44l1.263-1.263a.25.25 0 0 0 0-.354Z"></svg:path>`,
})
export class OcticonPencil16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPencil24Icon],svg[octicon-pencil-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.263 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 0 1-.699.409l-5.523 1.68a.75.75 0 0 1-.747-.188a.75.75 0 0 1-.188-.747l1.673-5.5a1.75 1.75 0 0 1 .466-.756L14.476 4.963ZM4.708 16.361a.26.26 0 0 0-.067.108l-1.264 4.154l4.177-1.271a.25.25 0 0 0 .1-.059l10.273-9.806l-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 0 0 0-.354l-2.586-2.586a.25.25 0 0 0-.354 0L16.061 5.5Z"></svg:path>`,
})
export class OcticonPencil24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPeople16Icon],svg[octicon-people-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549a5.51 5.51 0 0 1 3.034 4.084a.75.75 0 1 1-1.482.235a4 4 0 0 0-7.9 0a.75.75 0 0 1-1.482-.236A5.5 5.5 0 0 1 3.102 8.05A3.5 3.5 0 0 1 2 5.5M11 4a3.001 3.001 0 0 1 2.22 5.018a5 5 0 0 1 2.56 3.012a.749.749 0 0 1-.885.954a.75.75 0 0 1-.549-.514a3.51 3.51 0 0 0-2.522-2.372a.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5A.75.75 0 0 1 11 4m-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5"></svg:path>`,
})
export class OcticonPeople16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPeople24Icon],svg[octicon-people-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547a9.005 9.005 0 0 1 5.9 8.18a.751.751 0 0 1-1.5.045a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.499-.044a9.005 9.005 0 0 1 5.9-8.181A5.5 5.5 0 0 1 3.5 8M9 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m8.29 4q-.221 0-.434.03a.75.75 0 1 1-.212-1.484a4.53 4.53 0 0 1 3.38 8.097a6.69 6.69 0 0 1 3.956 6.107a.75.75 0 0 1-1.5 0a5.19 5.19 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8"></svg:path>`,
})
export class OcticonPeople24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPersonIcon],svg[octicon-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4c.173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4c-.229.59 0 1 0 1s4 1.367 4 4v1.002z" fill="currentColor"></svg:path>`,
})
export class OcticonPersonIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPerson16Icon],svg[octicon-person-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.561 8.073a6 6 0 0 1 3.432 5.142a.75.75 0 1 1-1.498.07a4.5 4.5 0 0 0-8.99 0a.75.75 0 0 1-1.498-.07a6 6 0 0 1 3.431-5.142a3.999 3.999 0 1 1 5.123 0M10.5 5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class OcticonPerson16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPerson24Icon],svg[octicon-person-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047a9.005 9.005 0 0 1 5.9 8.181a.75.75 0 1 1-1.499.044a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.5-.045a9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5M8 8a4 4 0 1 0 8 0a4 4 0 0 0-8 0"></svg:path>`,
})
export class OcticonPerson24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPersonAdd16Icon],svg[octicon-person-add-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.9 8.548h-.001a5.53 5.53 0 0 1 3.1 4.659a.75.75 0 1 1-1.498.086A4.01 4.01 0 0 0 5.5 9.5a4.01 4.01 0 0 0-4.001 3.793a.75.75 0 1 1-1.498-.085a5.53 5.53 0 0 1 3.1-4.66a3.5 3.5 0 1 1 4.799 0M13.25 0a.75.75 0 0 1 .75.75V2h1.25a.75.75 0 0 1 0 1.5H14v1.25a.75.75 0 0 1-1.5 0V3.5h-1.25a.75.75 0 0 1 0-1.5h1.25V.75a.75.75 0 0 1 .75-.75M5.5 4a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 4"></svg:path>`,
})
export class OcticonPersonAdd16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPersonAdd24Icon],svg[octicon-person-add-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.5a5 5 0 1 1 7.916 4.062a7.97 7.97 0 0 1 5.018 7.166a.75.75 0 1 1-1.499.044a6.469 6.469 0 0 0-12.932 0a.75.75 0 0 1-1.499-.044a7.97 7.97 0 0 1 5.059-7.181A5 5 0 0 1 4 9.5M9 6a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m10.25-5a.75.75 0 0 1 .75.75V4h2.25a.75.75 0 0 1 0 1.5H20v2.25a.75.75 0 0 1-1.5 0V5.5h-2.25a.75.75 0 0 1 0-1.5h2.25V1.75a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class OcticonPersonAdd24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPersonFill16Icon],svg[octicon-person-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.243 4.757a3.757 3.757 0 1 1 5.851 3.119a6.01 6.01 0 0 1 3.9 5.339a.75.75 0 0 1-.715.784H2.721a.75.75 0 0 1-.714-.784a6.01 6.01 0 0 1 3.9-5.34a3.75 3.75 0 0 1-1.664-3.118"></svg:path>`,
})
export class OcticonPersonFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPersonFill24Icon],svg[octicon-person-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5a5.25 5.25 0 0 0-2.519 9.857a9.005 9.005 0 0 0-6.477 8.37a.75.75 0 0 0 .727.773H20.27a.75.75 0 0 0 .727-.772a9.005 9.005 0 0 0-6.477-8.37A5.25 5.25 0 0 0 12 2.5"></svg:path>`,
})
export class OcticonPersonFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPinIcon],svg[octicon-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 1.2V2l.5 1L6 6H2.2c-.44 0-.67.53-.34.86L5 10l-4 5l5-4l3.14 3.14a.5.5 0 0 0 .86-.34V10l3-4.5l1 .5h.8c.44 0 .67-.53.34-.86L10.86.86a.5.5 0 0 0-.86.34z" fill="currentColor"></svg:path>`,
})
export class OcticonPinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPin16Icon],svg[octicon-pin-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.294.984l3.722 3.722a1.75 1.75 0 0 1-.504 2.826l-1.327.613a3.09 3.09 0 0 0-1.707 2.084l-.584 2.454c-.317 1.332-1.972 1.8-2.94.832L5.75 11.311L1.78 15.28a.749.749 0 1 1-1.06-1.06l3.969-3.97l-2.204-2.204c-.968-.968-.5-2.623.832-2.94l2.454-.584a3.08 3.08 0 0 0 2.084-1.707l.613-1.327a1.75 1.75 0 0 1 2.826-.504M6.283 9.723l2.732 2.731a.25.25 0 0 0 .42-.119l.584-2.454a4.59 4.59 0 0 1 2.537-3.098l1.328-.613a.25.25 0 0 0 .072-.404l-3.722-3.722a.25.25 0 0 0-.404.072l-.613 1.328a4.58 4.58 0 0 1-3.098 2.537l-2.454.584a.25.25 0 0 0-.119.42l2.731 2.732Z"></svg:path>`,
})
export class OcticonPin16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPin24Icon],svg[octicon-pin-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.114 1.553l6.333 6.333a1.75 1.75 0 0 1-.603 2.869l-1.63.633a5.67 5.67 0 0 0-3.395 3.725l-1.131 3.959a1.75 1.75 0 0 1-2.92.757L9 16.061l-5.595 5.594a.749.749 0 1 1-1.06-1.06L7.939 15l-3.768-3.768a1.75 1.75 0 0 1 .757-2.92l3.959-1.131a5.67 5.67 0 0 0 3.725-3.395l.633-1.63a1.75 1.75 0 0 1 2.869-.603M5.232 10.171l8.597 8.597a.25.25 0 0 0 .417-.108l1.131-3.959A7.17 7.17 0 0 1 19.67 9.99l1.63-.634a.25.25 0 0 0 .086-.409l-6.333-6.333a.25.25 0 0 0-.409.086l-.634 1.63a7.17 7.17 0 0 1-4.711 4.293L5.34 9.754a.25.25 0 0 0-.108.417"></svg:path>`,
})
export class OcticonPin24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPinSlash16Icon],svg[octicon-pin-slash-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.655.595l13.75 13.75q.22.219.22.53t-.22.53q-.219.22-.53.22t-.53-.22L.595 1.655q-.22-.219-.22-.53t.22-.53q.219-.22.53-.22t.53.22M.72 14.22l4.5-4.5q.219-.22.53-.22t.53.22q.22.219.22.53t-.22.53l-4.5 4.5q-.219.22-.53.22t-.53-.22q-.22-.219-.22-.53t.22-.53"></svg:path><svg:path fill="currentColor" d="m5.424 6.146l-1.759.419q-.143.034-.183.175t.064.245l5.469 5.469q.104.104.245.064t.175-.183l.359-1.509q.072-.302.337-.465q.264-.163.567-.091t.465.337t.09.567l-.359 1.509q-.238.999-1.226 1.278q-.988.28-1.714-.446L2.485 8.046q-.726-.726-.446-1.714t1.278-1.226l1.759-.419q.303-.072.567.091q.265.163.337.465t-.091.567q-.163.264-.465.336M7.47 3.47q.155-.156.247-.355l.751-1.627Q8.851.659 9.75.498q.899-.16 1.544.486l3.722 3.722q.646.645.486 1.544t-.99 1.282l-1.627.751q-.199.092-.355.247q-.219.22-.53.22t-.53-.22q-.22-.219-.22-.53t.22-.53q.344-.345.787-.549l1.627-.751q.118-.055.141-.183t-.069-.221l-3.722-3.722q-.092-.092-.221-.069q-.128.023-.183.141l-.751 1.627q-.204.443-.549.787q-.219.22-.53.22t-.53-.22T7.25 4t.22-.53"></svg:path>`,
})
export class OcticonPinSlash16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPinSlash24Icon],svg[octicon-pin-slash-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.345 20.595L8.47 14.47q.219-.22.53-.22t.53.22q.22.219.22.53t-.22.53l-6.125 6.125q-.219.22-.53.22t-.53-.22q-.22-.219-.22-.53t.22-.53"></svg:path><svg:path fill="currentColor" d="m16.72 11.97l.358-.358a6.7 6.7 0 0 1 2.326-1.518l1.896-.738a.25.25 0 0 0 .086-.409l-6.333-6.333a.25.25 0 0 0-.409.086l-.521 1.34a8.66 8.66 0 0 1-2.243 3.265a.75.75 0 0 1-1.01-1.11a7.1 7.1 0 0 0 1.854-2.699l.521-1.34a1.75 1.75 0 0 1 2.869-.603l6.333 6.333a1.75 1.75 0 0 1-.603 2.869l-1.896.737a5.3 5.3 0 0 0-1.81 1.18l-.358.358a.749.749 0 1 1-1.06-1.06m-12.549-.738a1.75 1.75 0 0 1 .757-2.92l3.366-.962l.412 1.443l-3.366.961a.25.25 0 0 0-.108.417l8.597 8.597a.25.25 0 0 0 .417-.108l.961-3.366l1.443.412l-.962 3.366a1.75 1.75 0 0 1-2.92.757Z"></svg:path><svg:path fill="currentColor" d="m3.405 2.095l18.75 18.75q.22.219.22.53t-.22.53t-.53.22t-.53-.22L2.345 3.155q-.22-.219-.22-.53t.22-.53q.219-.22.53-.22t.53.22"></svg:path>`,
})
export class OcticonPinSlash24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPivotColumn16Icon],svg[octicon-pivot-column-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.217 0 16 .784 16 1.75v5.5a.75.75 0 0 1-1.5 0V6.5h-8v8h.75a.75.75 0 0 1 0 1.5h-5.5A1.75 1.75 0 0 1 0 14.25ZM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8Zm5-1.5h8V1.75a.25.25 0 0 0-.25-.25H6.5ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></svg:path><svg:path fill="currentColor" d="m11.017 9.89l-2.882 2.677a.25.25 0 0 0 0 .366l2.882 2.677a.25.25 0 0 0 .421-.183V13.5H12.5A3.5 3.5 0 0 0 16 10a.75.75 0 0 0-1.5 0a2 2 0 0 1-2 2h-1.062v-1.927a.25.25 0 0 0-.421-.183"></svg:path>`,
})
export class OcticonPivotColumn16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPivotColumn24Icon],svg[octicon-pivot-column-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.75C2 2.783 2.783 2 3.75 2h16.5c.966 0 1.75.783 1.75 1.75V10a.75.75 0 0 1-1.5 0V8.75H8.75V20.5H10a.75.75 0 0 1 0 1.5H3.75A1.75 1.75 0 0 1 2 20.25Zm6.75-.25v3.75H20.5v-3.5a.25.25 0 0 0-.25-.25Zm-1.5 17V8.75H3.5v11.5c0 .138.112.25.25.25ZM3.5 7.25h3.75V3.5h-3.5a.25.25 0 0 0-.25.25Z"></svg:path><svg:path fill="currentColor" d="M21.25 12.312a.75.75 0 0 1 .75.75v2.626a3.75 3.75 0 0 1-3.75 3.75h-3.502l2.032 2.032a.749.749 0 1 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.749.749 0 1 1 1.06 1.06l-1.907 1.908h3.377a2.25 2.25 0 0 0 2.25-2.25v-2.626a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class OcticonPivotColumn24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlayIcon],svg[octicon-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14 8A7 7 0 1 1 0 8a7 7 0 0 1 14 0zm-8.223 3.482l4.599-3.066a.5.5 0 0 0 0-.832L5.777 4.518A.5.5 0 0 0 5 4.934v6.132a.5.5 0 0 0 .777.416z" fill="currentColor"></svg:path>`,
})
export class OcticonPlayIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlay16Icon],svg[octicon-play-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m4.879-2.773l4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215"></svg:path>`,
})
export class OcticonPlay16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlay24Icon],svg[octicon-play-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842l-5.576 3.584a.5.5 0 0 1-.77-.42Z"></svg:path><svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5"></svg:path>`,
})
export class OcticonPlay24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlugIcon],svg[octicon-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14 6V5h-4V3H8v1H6c-1.03 0-1.77.81-2 2L3 7c-1.66 0-3 1.34-3 3v2h1v-2c0-1.11.89-2 2-2l1 1c.25 1.16.98 2 2 2h2v1h2v-2h4V9h-4V6h4z" fill="currentColor"></svg:path>`,
})
export class OcticonPlugIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlug16Icon],svg[octicon-plug-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8H2.5a1 1 0 0 0-1 1v5.25a.75.75 0 0 1-1.5 0V9a2.5 2.5 0 0 1 2.5-2.5H4V5.133a1.75 1.75 0 0 1 1.533-1.737l2.831-.353l.76-.913c.332-.4.825-.63 1.344-.63h.782c.966 0 1.75.784 1.75 1.75V4h2.25a.75.75 0 0 1 0 1.5H13v4h2.25a.75.75 0 0 1 0 1.5H13v.75a1.75 1.75 0 0 1-1.75 1.75h-.782c-.519 0-1.012-.23-1.344-.63l-.761-.912l-2.83-.354A1.75 1.75 0 0 1 4 9.867Zm6.276-4.91l-.95 1.14a.75.75 0 0 1-.483.265l-3.124.39a.25.25 0 0 0-.219.248v4.734c0 .126.094.233.219.249l3.124.39a.75.75 0 0 1 .483.264l.95 1.14a.25.25 0 0 0 .192.09h.782a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-.782a.25.25 0 0 0-.192.09"></svg:path>`,
})
export class OcticonPlug16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlug24Icon],svg[octicon-plug-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11.5H2.938c-.794 0-1.438.644-1.438 1.437v8.313a.75.75 0 0 1-1.5 0v-8.312A2.94 2.94 0 0 1 2.937 10H7V6.151c0-.897.678-1.648 1.57-1.74l6.055-.626l1.006-1.174A1.75 1.75 0 0 1 16.96 2h1.29c.966 0 1.75.784 1.75 1.75V6h3.25a.75.75 0 0 1 0 1.5H20V14h3.25a.75.75 0 0 1 0 1.5H20v2.25a1.75 1.75 0 0 1-1.75 1.75h-1.29a1.75 1.75 0 0 1-1.329-.611l-1.006-1.174l-6.055-.627A1.75 1.75 0 0 1 7 15.348Zm9.77-7.913l-1.201 1.4a.75.75 0 0 1-.492.258l-6.353.657a.25.25 0 0 0-.224.249v9.196a.25.25 0 0 0 .224.249l6.353.657c.191.02.368.112.493.258l1.2 1.401a.25.25 0 0 0 .19.087h1.29a.25.25 0 0 0 .25-.25v-14a.25.25 0 0 0-.25-.25h-1.29a.25.25 0 0 0-.19.087"></svg:path>`,
})
export class OcticonPlug24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlusIcon],svg[octicon-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z" fill="currentColor"></svg:path>`,
})
export class OcticonPlusIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlus16Icon],svg[octicon-plus-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2"></svg:path>`,
})
export class OcticonPlus16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlus24Icon],svg[octicon-plus-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class OcticonPlus24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlusCircle16Icon],svg[octicon-plus-circle-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m7.25-3.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class OcticonPlusCircle16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlusCircle24Icon],svg[octicon-plus-circle-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 7.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5z"></svg:path><svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12"></svg:path>`,
})
export class OcticonPlusCircle24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPlusSmallIcon],svg[octicon-plus-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 4H3v3H0v1h3v3h1V8h3V7H4V4z" fill="currentColor"></svg:path>`,
})
export class OcticonPlusSmallIcon {
  readonly viewBox = input("0 0 7 16")
  readonly width = input("0.44em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPrimitiveDotIcon],svg[octicon-primitive-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4s-4-1.8-4-4z" fill="currentColor"></svg:path>`,
})
export class OcticonPrimitiveDotIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPrimitiveSquareIcon],svg[octicon-primitive-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 12H0V4h8v8z" fill="currentColor"></svg:path>`,
})
export class OcticonPrimitiveSquareIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconProjectIcon],svg[octicon-project-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonProjectIcon {
  readonly viewBox = input("0 0 15 16")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconProject16Icon],svg[octicon-project-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0M1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25M11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75m-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3"></svg:path>`,
})
export class OcticonProject16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconProject24Icon],svg[octicon-project-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 6a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A.75.75 0 0 0 7.25 6M12 6a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 6m4 .75a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-1.5 0z"></svg:path><svg:path fill="currentColor" d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2M3.5 3.75v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H3.75a.25.25 0 0 0-.25.25"></svg:path>`,
})
export class OcticonProject24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconProjectRoadmap16Icon],svg[octicon-project-roadmap-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 7a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM5 4.75A.75.75 0 0 1 5.75 4h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 5 4.75M6.75 10a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class OcticonProjectRoadmap16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconProjectRoadmap24Icon],svg[octicon-project-roadmap-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 7a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM7 11.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M9.75 15a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25Zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class OcticonProjectRoadmap24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconProjectSymlink16Icon],svg[octicon-project-symlink-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16h-8.5a.75.75 0 0 1 0-1.5h8.5a.25.25 0 0 0 .25-.25V6.5h-13v1.75a.75.75 0 0 1-1.5 0ZM6.5 5h8V1.75a.25.25 0 0 0-.25-.25H6.5Zm-5 0H5V1.5H1.75a.25.25 0 0 0-.25.25Z"></svg:path><svg:path fill="currentColor" d="M1.5 13.737a2.25 2.25 0 0 1 2.262-2.25L4 11.49v1.938c0 .218.26.331.42.183l2.883-2.677a.25.25 0 0 0 0-.366L4.42 7.89a.25.25 0 0 0-.42.183V9.99l-.23-.001A3.75 3.75 0 0 0 0 13.738v1.012a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class OcticonProjectSymlink16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconProjectSymlink24Icon],svg[octicon-project-symlink-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H9.75a.75.75 0 0 1 0-1.5h10.5a.25.25 0 0 0 .25-.25V9h-17v3A.75.75 0 0 1 2 12ZM9 7.5h11.5V3.75a.25.25 0 0 0-.25-.25H9Zm-5.5 0h4v-4H3.75a.25.25 0 0 0-.25.25Z"></svg:path><svg:path fill="currentColor" d="m9.308 14.5l-2.104-2.236a.75.75 0 1 1 1.092-1.028l3.294 3.5a.75.75 0 0 1 0 1.028l-3.294 3.5a.75.75 0 1 1-1.092-1.028L9.308 16H6.09a2.59 2.59 0 0 0-2.59 2.59v2.66a.75.75 0 0 1-1.5 0v-2.66a4.09 4.09 0 0 1 4.09-4.09z"></svg:path>`,
})
export class OcticonProjectSymlink24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconProjectTemplate16Icon],svg[octicon-project-template-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 1.75v1.562a.75.75 0 1 1-1.5 0V1.75C0 .784.784 0 1.75 0h1.562a.75.75 0 1 1 0 1.5H1.75a.25.25 0 0 0-.25.25M6.438 0h3.124a.75.75 0 1 1 0 1.5H6.438a.75.75 0 1 1 0-1.5m6.25 0h1.562C15.217 0 16 .784 16 1.75v1.562a.75.75 0 1 1-1.5 0V1.75a.25.25 0 0 0-.25-.25h-1.562a.75.75 0 1 1 0-1.5M1.5 6.438v3.124a.75.75 0 1 1-1.5 0V6.438a.75.75 0 1 1 1.5 0m14.5 0v3.124a.75.75 0 1 1-1.5 0V6.438a.75.75 0 1 1 1.5 0m-14.5 6.25v1.562c0 .138.112.25.25.25h1.562a.75.75 0 1 1 0 1.5H1.75A1.75 1.75 0 0 1 0 14.25v-1.562a.75.75 0 1 1 1.5 0m14.5 0v1.562A1.75 1.75 0 0 1 14.25 16h-1.562a.75.75 0 1 1 0-1.5h1.562a.25.25 0 0 0 .25-.25v-1.562a.75.75 0 1 1 1.5 0M6.438 14.5h3.124a.75.75 0 1 1 0 1.5H6.438a.75.75 0 1 1 0-1.5M6.5 3v1A.75.75 0 0 1 5 4V3a.75.75 0 0 1 1.5 0M2.25 5.75A.75.75 0 0 1 3 5h1a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m4.5 0A.75.75 0 0 1 7.5 5h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-1 1a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m.75 4v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0m3.5-5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class OcticonProjectTemplate16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconProjectTemplate24Icon],svg[octicon-project-template-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.5a.25.25 0 0 0-.25.25v2.062a.75.75 0 1 1-1.5 0V3.75C2 2.783 2.783 2 3.75 2h2.062a.75.75 0 1 1 0 1.5Zm13.688-.75a.75.75 0 0 1 .75-.75h2.062c.966 0 1.75.783 1.75 1.75v2.062a.75.75 0 1 1-1.5 0V3.75a.25.25 0 0 0-.25-.25h-2.062a.75.75 0 0 1-.75-.75M2.75 17.438a.75.75 0 0 1 .75.75v2.062c0 .138.112.25.25.25h2.062a.75.75 0 1 1 0 1.5H3.75A1.75 1.75 0 0 1 2 20.25v-2.062a.75.75 0 0 1 .75-.75m18.5 0a.75.75 0 0 1 .75.75v2.062A1.75 1.75 0 0 1 20.25 22h-2.062a.75.75 0 1 1 0-1.5h2.062a.25.25 0 0 0 .25-.25v-2.062a.75.75 0 0 1 .75-.75m-18.5-8.25a.75.75 0 0 1 .75.75v4.124a.75.75 0 1 1-1.5 0V9.938a.75.75 0 0 1 .75-.75M9.188 2.75a.75.75 0 0 1 .75-.75h4.124a.75.75 0 1 1 0 1.5H9.938a.75.75 0 0 1-.75-.75m0 18.5a.75.75 0 0 1 .75-.75h4.124a.75.75 0 1 1 0 1.5H9.938a.75.75 0 0 1-.75-.75M21.25 9.188a.75.75 0 0 1 .75.75v4.124a.75.75 0 1 1-1.5 0V9.938a.75.75 0 0 1 .75-.75M3.75 8.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m5.5 0A.75.75 0 0 1 10 7.5h2A.75.75 0 0 1 12 9h-2a.75.75 0 0 1-.75-.75m-1-4.5A.75.75 0 0 1 9 4.5v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m0 5.5A.75.75 0 0 1 9 10v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m0 4.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M14 8.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class OcticonProjectTemplate24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPulseIcon],svg[octicon-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11.5 8L8.8 5.4L6.6 8.5L5.5 1.6L2.38 8H0v2h3.6l.9-1.8l.9 5.4L9 8.5l1.6 1.5H14V8h-2.5z" fill="currentColor"></svg:path>`,
})
export class OcticonPulseIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPulse16Icon],svg[octicon-pulse-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c.306 0 .582.187.696.471L10 10.731l1.304-3.26A.75.75 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.751.751 0 0 1-1.392 0L6 4.77L4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.75.75 0 0 1 6 2"></svg:path>`,
})
export class OcticonPulse16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconPulse24Icon],svg[octicon-pulse-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.002 2.5a.75.75 0 0 1 .691.464l6.302 15.305l2.56-6.301a.75.75 0 0 1 .695-.468h4a.75.75 0 0 1 0 1.5h-3.495l-3.06 7.532a.75.75 0 0 1-1.389.004L8.997 5.21l-3.054 7.329A.75.75 0 0 1 5.25 13H.75a.75.75 0 0 1 0-1.5h4l3.558-8.538a.75.75 0 0 1 .694-.462"></svg:path>`,
})
export class OcticonPulse24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconQuestionIcon],svg[octicon-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7z" fill="currentColor"></svg:path>`,
})
export class OcticonQuestionIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconQuestion16Icon],svg[octicon-question-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M6.92 6.085h.001a.749.749 0 1 1-1.342-.67c.169-.339.436-.701.849-.977C6.845 4.16 7.369 4 8 4a2.76 2.76 0 0 1 1.637.525c.503.377.863.965.863 1.725c0 .448-.115.83-.329 1.15c-.205.307-.47.513-.692.662c-.109.072-.22.138-.313.195l-.006.004a6 6 0 0 0-.26.16a1 1 0 0 0-.276.245a.75.75 0 0 1-1.248-.832c.184-.264.42-.489.692-.661q.154-.1.313-.195l.007-.004c.1-.061.182-.11.258-.161a1 1 0 0 0 .277-.245C8.96 6.514 9 6.427 9 6.25a.61.61 0 0 0-.262-.525A1.27 1.27 0 0 0 8 5.5c-.369 0-.595.09-.74.187a1 1 0 0 0-.34.398M9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class OcticonQuestion16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconQuestion24Icon],svg[octicon-question-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.97 8.265a1.45 1.45 0 0 0-.487.57a.75.75 0 0 1-1.341-.67c.2-.402.513-.826.997-1.148C10.627 6.69 11.244 6.5 12 6.5c.658 0 1.369.195 1.934.619a2.45 2.45 0 0 1 1.004 2.006c0 1.033-.513 1.72-1.027 2.215c-.19.183-.399.358-.579.508l-.147.123a4 4 0 0 0-.435.409v1.37a.75.75 0 1 1-1.5 0v-1.473c0-.237.067-.504.247-.736c.22-.28.486-.517.718-.714l.183-.153l.001-.001c.172-.143.324-.27.47-.412c.368-.355.569-.676.569-1.136a.95.95 0 0 0-.404-.806C12.766 8.118 12.384 8 12 8c-.494 0-.814.121-1.03.265M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12"></svg:path>`,
})
export class OcticonQuestion24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconQuoteIcon],svg[octicon-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonQuoteIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconQuote16Icon],svg[octicon-quote-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 2.5h10.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5m4 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5m0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5M2.5 7.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class OcticonQuote16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconQuote24Icon],svg[octicon-quote-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.25m5 6.063a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1-.75-.75m0 5.937a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1-.75-.75M3.75 11a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class OcticonQuote24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRadioTowerIcon],svg[octicon-radio-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4.79 6.11c.25-.25.25-.67 0-.92c-.32-.33-.48-.76-.48-1.19c0-.43.16-.86.48-1.19c.25-.26.25-.67 0-.92a.613.613 0 0 0-.45-.19c-.16 0-.33.06-.45.19c-.57.58-.85 1.35-.85 2.11c0 .76.29 1.53.85 2.11c.25.25.66.25.9 0zM2.33.52a.651.651 0 0 0-.92 0C.48 1.48.01 2.74.01 3.99c0 1.26.47 2.52 1.4 3.48c.25.26.66.26.91 0s.25-.68 0-.94c-.68-.7-1.02-1.62-1.02-2.54c0-.92.34-1.84 1.02-2.54a.66.66 0 0 0 .01-.93zm5.69 5.1A1.62 1.62 0 1 0 6.4 4c-.01.89.72 1.62 1.62 1.62zM14.59.53a.628.628 0 0 0-.91 0c-.25.26-.25.68 0 .94c.68.7 1.02 1.62 1.02 2.54c0 .92-.34 1.83-1.02 2.54c-.25.26-.25.68 0 .94a.651.651 0 0 0 .92 0c.93-.96 1.4-2.22 1.4-3.48A5.048 5.048 0 0 0 14.59.53zM8.02 6.92c-.41 0-.83-.1-1.2-.3l-3.15 8.37h1.49l.86-1h4l.84 1h1.49L9.21 6.62c-.38.2-.78.3-1.19.3zm-.01.48L9.02 11h-2l.99-3.6zm-1.99 5.59l1-1h2l1 1h-4zm5.19-11.1c-.25.25-.25.67 0 .92c.32.33.48.76.48 1.19c0 .43-.16.86-.48 1.19c-.25.26-.25.67 0 .92a.63.63 0 0 0 .9 0c.57-.58.85-1.35.85-2.11c0-.76-.28-1.53-.85-2.11a.634.634 0 0 0-.9 0z" fill="currentColor"></svg:path>`,
})
export class OcticonRadioTowerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRead16Icon],svg[octicon-read-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.115.65a1.75 1.75 0 0 1 1.77 0l6.25 3.663c.536.314.865.889.865 1.51v6.427A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25V5.823c0-.621.33-1.196.865-1.51Zm1.011 1.293a.25.25 0 0 0-.252 0l-5.72 3.353L6.468 7.76a2.75 2.75 0 0 1 3.066 0l4.312-2.464zM13.15 12.5L8.772 9.06a1.25 1.25 0 0 0-1.544 0L2.85 12.5Zm1.35-5.85l-3.687 2.106l3.687 2.897ZM5.187 8.756L1.5 6.65v5.003Z"></svg:path>`,
})
export class OcticonRead16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRead24Icon],svg[octicon-read-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.89 1.767a2.25 2.25 0 0 1 2.22 0l9.75 5.525A2.25 2.25 0 0 1 24 9.249v9.501A2.25 2.25 0 0 1 21.75 21H2.25A2.25 2.25 0 0 1 0 18.75v-9.5c0-.81.435-1.558 1.14-1.958Zm1.48 1.305a.75.75 0 0 0-.74 0l-9.316 5.28l7.41 4.233a3.75 3.75 0 0 1 4.553 0l7.41-4.234zM20.65 19.5l-7.26-5.704a2.25 2.25 0 0 0-2.78 0L3.35 19.5Zm1.85-9.886l-6.95 3.971l6.663 5.236q.135.107.21.26a.75.75 0 0 0 .077-.331ZM8.45 13.585L1.5 9.614v9.136q.002.18.076.33a.74.74 0 0 1 .21-.259Z"></svg:path>`,
})
export class OcticonRead24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRedo16Icon],svg[octicon-redo-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.78 6.28a.75.75 0 0 0 0-1.06l-3.5-3.5a.749.749 0 1 0-1.06 1.06L12.439 5H5.251l-.001.007L5.251 5a1 1 0 0 0-.171.019A4.501 4.501 0 0 0 5.5 14h1.704a.75.75 0 0 0 0-1.5H5.5a3 3 0 1 1 0-6h6.939L10.22 8.72a.749.749 0 1 0 1.06 1.06z"></svg:path>`,
})
export class OcticonRedo16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRedo24Icon],svg[octicon-redo-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.72 2.22a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 1 1-1.06-1.06l4.97-4.97H8.25c-.797 0-2.008.245-3 .959c-.952.686-1.75 1.835-1.75 3.791s.798 3.105 1.75 3.791c.992.714 2.203.959 3 .959h3a.75.75 0 0 1 0 1.5h-3c-1.037 0-2.575-.305-3.876-1.241C3.035 18.545 2 16.944 2 14.5s1.035-4.045 2.374-5.009C5.675 8.555 7.214 8.25 8.25 8.25h11.44l-4.97-4.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class OcticonRedo24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRelFilePath16Icon],svg[octicon-rel-file-path-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.94 3.045a.75.75 0 0 0-1.38-.59l-4.5 10.5a.75.75 0 1 0 1.38.59zM5 11.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class OcticonRelFilePath16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRelFilePath24Icon],svg[octicon-rel-file-path-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.564 4.42a.75.75 0 0 0-1.378-.59l-6.75 15.75a.75.75 0 0 0 1.378.59zM7 18.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class OcticonRelFilePath24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconReplyIcon],svg[octicon-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 3.5c3.92.44 8 3.125 8 10c-2.312-5.062-4.75-6-8-6V11L.5 5.5L6 0v3.5z" fill="currentColor"></svg:path>`,
})
export class OcticonReplyIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconReply16Icon],svg[octicon-reply-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.78 1.97a.75.75 0 0 1 0 1.06L3.81 6h6.44A4.75 4.75 0 0 1 15 10.75v2.5a.75.75 0 0 1-1.5 0v-2.5a3.25 3.25 0 0 0-3.25-3.25H3.81l2.97 2.97a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L1.47 7.28a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class OcticonReply16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconReply24Icon],svg[octicon-reply-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.53 5.03a.75.75 0 1 0-1.06-1.06l-6.25 6.25a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 1 0 1.06-1.06L5.56 11.5H17a3.25 3.25 0 0 1 3.25 3.248v4.502a.75.75 0 0 0 1.5 0v-4.502A4.75 4.75 0 0 0 17 10H5.56z"></svg:path>`,
})
export class OcticonReply24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoIcon],svg[octicon-repo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z" fill="currentColor"></svg:path>`,
})
export class OcticonRepoIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepo16Icon],svg[octicon-repo-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7a.75.75 0 1 1-1.072 1.05A2.5 2.5 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.5 2.5 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></svg:path>`,
})
export class OcticonRepo16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepo24Icon],svg[octicon-repo-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.25 3.25 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A3 3 0 0 1 6 15h13.5Z"></svg:path><svg:path fill="currentColor" d="M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2z"></svg:path>`,
})
export class OcticonRepo24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoClone16Icon],svg[octicon-repo-clone-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 0A2.5 2.5 0 0 0 1 2.5v9A2.5 2.5 0 0 0 3.5 14h2.75a.75.75 0 0 0 0-1.5H3.5a1 1 0 0 1 0-2h2.75a.75.75 0 0 0 0-1.5H3.5c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8v2.75a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.75-.75z"></svg:path><svg:path fill="currentColor" d="M8 8.058C8 7.023 8.75 6 9.887 6h5.363a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75h-5A2.25 2.25 0 0 1 8 13.75Zm6.5 3.442v-4H9.887c-.07 0-.156.031-.238.125a.66.66 0 0 0-.149.433v3.57q.354-.126.75-.128Zm-5 2.25c0 .414.336.75.75.75h4.25V13h-4.25a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class OcticonRepoClone16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoClone24Icon],svg[octicon-repo-clone-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.375.375a2.5 2.5 0 0 0-2.5 2.5v15.25a2.5 2.5 0 0 0 2.5 2.5h5.187a.75.75 0 1 0 0-1.5H4.375a1 1 0 0 1-1-1v-1.75a1 1 0 0 1 1-1h5.687a.75.75 0 1 0 0-1.5H4.375c-.356 0-.694.074-1 .208V2.875a1 1 0 0 1 1-1h13.25v5.25a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75z"></svg:path><svg:path fill="currentColor" d="M12.375 12.087c0-1.396 1.005-2.712 2.456-2.712h8.044a.75.75 0 0 1 .75.75v12.75a.75.75 0 0 1-.75.75h-7.5a3 3 0 0 1-3-3Zm9.75 5.538v-6.75h-7.294c-.433 0-.956.441-.956 1.212v5.939a3 3 0 0 1 1.5-.401Zm-8.25 3a1.5 1.5 0 0 0 1.5 1.5h6.75v-3h-6.75a1.5 1.5 0 0 0-1.5 1.5"></svg:path>`,
})
export class OcticonRepoClone24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoDelete24Icon],svg[octicon-repo-delete-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 0A2.75 2.75 0 0 0 2 2.75v16.5A2.75 2.75 0 0 0 4.75 22h8a.75.75 0 0 0 0-1.5h-8c-.69 0-1.25-.56-1.25-1.25V18A1.5 1.5 0 0 1 5 16.5h7.75a.75.75 0 0 0 0-1.5H5c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H18.5v12.25a.75.75 0 0 0 1.5 0v-13a.75.75 0 0 0-.75-.75z"></svg:path><svg:path fill="currentColor" d="M15.22 16.22a.75.75 0 0 1 1.06 0L19 18.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L20.06 20l2.72 2.72a.75.75 0 1 1-1.06 1.06L19 21.06l-2.72 2.72a.75.75 0 1 1-1.06-1.06L17.94 20l-2.72-2.72a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class OcticonRepoDelete24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoDeleted16Icon],svg[octicon-repo-deleted-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.5 2.5 0 0 1 3.5 9h4.75a.75.75 0 0 1 0 1.5H3.5a1 1 0 1 0 0 2h4.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5z"></svg:path><svg:path fill="currentColor" d="M11.28 10.22a.75.75 0 1 0-1.06 1.06L11.94 13l-1.72 1.72a.75.75 0 1 0 1.06 1.06L13 14.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L14.06 13l1.72-1.72a.75.75 0 1 0-1.06-1.06L13 11.94z"></svg:path>`,
})
export class OcticonRepoDeleted16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoForcePushIcon],svg[octicon-repo-force-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 9H8v7H6V9H4l2.25-3H4l3-4l3 4H7.75L10 9zm1-9H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9v9H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonRepoForcePushIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoForkedIcon],svg[octicon-repo-forked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8L3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2c0-.65.55-1.2 1.2-1.2c.65 0 1.2.55 1.2 1.2c0 .65-.55 1.2-1.2 1.2z" fill="currentColor"></svg:path>`,
})
export class OcticonRepoForkedIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoForked16Icon],svg[octicon-repo-forked-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0M5 3.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m6.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-3 8.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class OcticonRepoForked16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoForked24Icon],svg[octicon-repo-forked-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 19.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M15 4.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m-12.5 0a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M5.75 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 6.5M12 21a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 12 21m6.25-14.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 18.25 6.5"></svg:path><svg:path fill="currentColor" d="M6.5 7.75v1A2.25 2.25 0 0 0 8.75 11h6.5a2.25 2.25 0 0 0 2.25-2.25v-1H19v1a3.75 3.75 0 0 1-3.75 3.75h-6.5A3.75 3.75 0 0 1 5 8.75v-1Z"></svg:path><svg:path fill="currentColor" d="M11.25 16.25v-5h1.5v5z"></svg:path>`,
})
export class OcticonRepoForked24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoLocked16Icon],svg[octicon-repo-locked-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.5 2.5 0 0 1 3.5 9h2.75a.75.75 0 0 1 0 1.5H3.5a1 1 0 1 0 0 2h2.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5z"></svg:path><svg:path fill="currentColor" d="M9 10.168V9a3 3 0 1 1 6 0v1.168c.591.281 1 .884 1 1.582v2.5A1.75 1.75 0 0 1 14.25 16h-4.5A1.75 1.75 0 0 1 8 14.25v-2.5c0-.698.409-1.3 1-1.582M13.5 10V9a1.5 1.5 0 0 0-3 0v1Z"></svg:path>`,
})
export class OcticonRepoLocked16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoLocked24Icon],svg[octicon-repo-locked-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2.75A2.75 2.75 0 0 1 4.75 0h14.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V1.5H4.75c-.69 0-1.25.56-1.25 1.25v12.651A3 3 0 0 1 5 15h6.25a.75.75 0 0 1 0 1.5H5A1.5 1.5 0 0 0 3.5 18v1.25c0 .69.56 1.25 1.25 1.25h6a.75.75 0 0 1 0 1.5h-6A2.75 2.75 0 0 1 2 19.25z"></svg:path><svg:path fill="currentColor" d="M15 14.5a3.5 3.5 0 1 1 7 0V16h.25c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 22.25 24h-7.5A1.75 1.75 0 0 1 13 22.25v-4.5c0-.966.784-1.75 1.75-1.75H15Zm3.5-2a2 2 0 0 0-2 2V16h4v-1.5a2 2 0 0 0-2-2"></svg:path>`,
})
export class OcticonRepoLocked24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoPull16Icon],svg[octicon-repo-pull-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75V6a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.5 2.5 0 0 1 3.5 9h3a.75.75 0 0 1 0 1.5h-3a1 1 0 0 0 0 2h3a.75.75 0 0 1 0 1.5h-3A2.5 2.5 0 0 1 1 11.5z"></svg:path><svg:path fill="currentColor" d="M12.21 13.479a.75.75 0 1 0 1.061 1.061l2.504-2.505a.75.75 0 0 0 0-1.061L13.271 8.47a.75.75 0 0 0-1.061 1.06l1.224 1.225H8.75a.75.75 0 1 0 0 1.5h4.685z"></svg:path>`,
})
export class OcticonRepoPull16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoPull24Icon],svg[octicon-repo-pull-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.875 2.875a2.5 2.5 0 0 1 2.5-2.5h14a.75.75 0 0 1 .75.75v9.125a.75.75 0 0 1-1.5 0V1.875H4.375a1 1 0 0 0-1 1v11.208a2.5 2.5 0 0 1 1-.208h5.937a.75.75 0 1 1 0 1.5H4.375a1 1 0 0 0-1 1v1.75a1 1 0 0 0 1 1h6a.75.75 0 0 1 0 1.5h-6a2.5 2.5 0 0 1-2.5-2.5z"></svg:path><svg:path fill="currentColor" d="M18.643 20.484a.749.749 0 1 0 1.061 1.06l3.757-3.757a.75.75 0 0 0 0-1.06l-3.757-3.757a.75.75 0 0 0-1.061 1.06l2.476 2.477H13a.75.75 0 0 0 0 1.5h8.12z"></svg:path>`,
})
export class OcticonRepoPull24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoPushIcon],svg[octicon-repo-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonRepoPushIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoPush16Icon],svg[octicon-repo-push-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.5 2.5 0 0 1 3.5 9h3.25a.75.75 0 0 1 0 1.5H3.5a1 1 0 0 0 0 2h5.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5Zm13.23 7.79l-1.224-1.224v6.184a.75.75 0 0 1-1.5 0V9.066L10.28 10.29a.75.75 0 0 1-1.06-1.061l2.505-2.504a.75.75 0 0 1 1.06 0L15.29 9.23a.75.75 0 0 1-.018 1.042a.75.75 0 0 1-1.042.018"></svg:path>`,
})
export class OcticonRepoPush16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoPush24Icon],svg[octicon-repo-push-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 0A2.75 2.75 0 0 0 2 2.75v16.5A2.75 2.75 0 0 0 4.75 22h11a.75.75 0 0 0 0-1.5h-11c-.69 0-1.25-.56-1.25-1.25V18A1.5 1.5 0 0 1 5 16.5h7.25a.75.75 0 0 0 0-1.5H5c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H18.5v7a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.75-.75z"></svg:path><svg:path fill="currentColor" d="m20 13.903l2.202 2.359a.75.75 0 0 0 1.096-1.024l-3.5-3.75a.75.75 0 0 0-1.096 0l-3.5 3.75a.75.75 0 1 0 1.096 1.024l2.202-2.36v9.348a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class OcticonRepoPush24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoTemplate16Icon],svg[octicon-repo-template-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-.75a.75.75 0 0 1 0-1.5h.75v-.25a.75.75 0 0 1 .75-.75M5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2ZM2.75 8a.75.75 0 0 1 .75.75v.268Q3.624 9 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.75c0 .28.114.532.3.714a.75.75 0 1 1-1.05 1.072A2.5 2.5 0 0 1 2 11.5V8.75A.75.75 0 0 1 2.75 8M11 .75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V1.5h-.75A.75.75 0 0 1 11 .75m-5 0A.75.75 0 0 1 6.75 0h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 .75m0 9A.75.75 0 0 1 6.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 9.75M4.992.662a.75.75 0 0 1-.636.848c-.436.063-.783.41-.846.846a.751.751 0 0 1-1.485-.212A2.5 2.5 0 0 1 4.144.025a.75.75 0 0 1 .848.637M2.75 4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 2.75 4m10.5 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class OcticonRepoTemplate16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRepoTemplate24Icon],svg[octicon-repo-template-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 0A2.75 2.75 0 0 0 3 2.75v1a.75.75 0 0 0 1.5 0v-1c0-.69.56-1.25 1.25-1.25h1a.75.75 0 0 0 0-1.5zm4 0a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75zM4.5 6.5a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0zm16.5 0a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0zM4.5 13.25a.75.75 0 0 0-1.5 0v5.5a3.25 3.25 0 0 0 1.95 2.98a.75.75 0 1 0 .6-1.375A1.75 1.75 0 0 1 4.5 18.75V18A1.5 1.5 0 0 1 6 16.5h.75a.75.75 0 0 0 0-1.5H6c-.546 0-1.059.146-1.5.401zm16.5 0a.75.75 0 0 0-1.5 0V15h-2.25a.75.75 0 0 0 0 1.5h2.25v4h-5.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75zM9.75 15a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm-2.353 8.461A.25.25 0 0 1 7 23.26v-5.01a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0z"></svg:path>`,
})
export class OcticonRepoTemplate24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconReportIcon],svg[octicon-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7l-4 4v-4H1a1 1 0 0 1-1-1V2zm1 0h14v9H6.5L4 13.5V11H1V2zm6 6h2v2H7V8zm0-5h2v4H7V3z" fill="currentColor"></svg:path>`,
})
export class OcticonReportIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconReport16Icon],svg[octicon-report-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.75.75 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0M9 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class OcticonReport16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconReport24Icon],svg[octicon-report-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.586a.25.25 0 0 0-.177.073l-3.5 3.5A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.427-3.427A1.75 1.75 0 0 1 11.164 17h9.586a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25ZM12 6a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 12 6m0 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class OcticonReport24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRequestChangesIcon],svg[octicon-request-changes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7.5L4 15.5V12H1a1 1 0 0 1-1-1V1zm1 0v10h4v2l2-2h8V1H1zm7.5 3h2v1h-2v2h-1V5h-2V4h2V2h1v2zm2 5h-5V8h5v1z" fill="currentColor"></svg:path>`,
})
export class OcticonRequestChangesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRocketIcon],svg[octicon-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12.17 3.83c-.27-.27-.47-.55-.63-.88c-.16-.31-.27-.66-.34-1.02c-.58.33-1.16.7-1.73 1.13c-.58.44-1.14.94-1.69 1.48c-.7.7-1.33 1.81-1.78 2.45H3L0 10h3l2-2c-.34.77-1.02 2.98-1 3l1 1c.02.02 2.23-.64 3-1l-2 2v3l3-3v-3c.64-.45 1.75-1.09 2.45-1.78c.55-.55 1.05-1.13 1.47-1.7c.44-.58.81-1.16 1.14-1.72c-.36-.08-.7-.19-1.03-.34a3.39 3.39 0 0 1-.86-.63zM16 0s-.09.38-.3 1.06c-.2.7-.55 1.58-1.06 2.66c-.7-.08-1.27-.33-1.66-.72c-.39-.39-.63-.94-.7-1.64C13.36.84 14.23.48 14.92.28C15.62.08 16 0 16 0z" fill="currentColor"></svg:path>`,
})
export class OcticonRocketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRocket16Icon],svg[octicon-rocket-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.75 8.75 0 0 1-2.564 6.186l-.458.459q-.472.471-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.75.75 0 0 1-1.11-.418l-.954-3.102a1 1 0 0 1-.145-.125L3.754 9.816a1 1 0 0 1-.124-.145L.528 8.717a.75.75 0 0 1-.418-1.11l1.71-2.774A1.75 1.75 0 0 1 3.31 4h3.204q.433-.508.904-.979l.459-.458A8.75 8.75 0 0 1 14.064 0M8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317l2.143 2.143l2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.25 7.25 0 0 0-5.125 2.123M3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.23.23 0 0 1-.201-.064a.23.23 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12m6.94-3.935q-.132.09-.266.175l-2.35 1.521l.548 1.783l1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116L5.2 5.766q.087-.135.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class OcticonRocket16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRocket24Icon],svg[octicon-rocket-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.322.75h1.176a1.75 1.75 0 0 1 1.75 1.749v1.177a10.75 10.75 0 0 1-2.925 7.374l-1.228 1.304a24 24 0 0 1-1.596 1.542v5.038c0 .615-.323 1.184-.85 1.5l-4.514 2.709a.75.75 0 0 1-1.12-.488l-.963-4.572a1.3 1.3 0 0 1-.14-.129L8.04 15.96l-1.994-1.873a1.3 1.3 0 0 1-.129-.14l-4.571-.963a.75.75 0 0 1-.49-1.12l2.71-4.514c.316-.527.885-.85 1.5-.85h5.037a24 24 0 0 1 1.542-1.594l1.304-1.23A10.75 10.75 0 0 1 20.321.75Zm-6.344 4.018v-.001l-1.304 1.23a22.3 22.3 0 0 0-3.255 3.851l-2.193 3.29l1.859 1.744l.034.034l1.743 1.858l3.288-2.192a22.3 22.3 0 0 0 3.854-3.257l1.228-1.303a9.25 9.25 0 0 0 2.517-6.346V2.5a.25.25 0 0 0-.25-.25h-1.177a9.25 9.25 0 0 0-6.344 2.518M6.5 21c-1.209 1.209-3.901 1.445-4.743 1.49a.24.24 0 0 1-.18-.067a.24.24 0 0 1-.067-.18c.045-.842.281-3.534 1.49-4.743c.9-.9 2.6-.9 3.5 0s.9 2.6 0 3.5m-.592-8.588L8.17 9.017q.346-.519.717-1.017H5.066a.25.25 0 0 0-.214.121l-2.167 3.612ZM16 15.112q-.5.372-1.018.718l-3.393 2.262l.678 3.223l3.612-2.167a.25.25 0 0 0 .121-.214ZM17.5 8a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 17.5 8"></svg:path>`,
})
export class OcticonRocket24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRows16Icon],svg[octicon-rows-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10.75v2.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-2.5C0 9.784.784 9 1.75 9h12.5c.966 0 1.75.784 1.75 1.75m0-8v2.5A1.75 1.75 0 0 1 14.25 7H1.75A1.75 1.75 0 0 1 0 5.25v-2.5C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75m-1.75-.25H1.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25m0 8H1.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25"></svg:path>`,
})
export class OcticonRows16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRows24Icon],svg[octicon-rows-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3.75v5.5A1.75 1.75 0 0 1 20.25 11H3.75A1.75 1.75 0 0 1 2 9.25v-5.5C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75m0 11v5.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-5.5c0-.966.784-1.75 1.75-1.75h16.5c.966 0 1.75.784 1.75 1.75M20.25 3.5H3.75a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25m0 11H3.75a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25"></svg:path>`,
})
export class OcticonRows24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRssIcon],svg[octicon-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M2 13H0v-2c1.11 0 2 .89 2 2zM0 3v1a9 9 0 0 1 9 9h1C10 7.48 5.52 3 0 3zm0 4v1c2.75 0 5 2.25 5 5h1c0-3.31-2.69-6-6-6z" fill="currentColor"></svg:path>`,
})
export class OcticonRssIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRss16Icon],svg[octicon-rss-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.002 2.725a.75.75 0 0 1 .797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 0 1-1.497.098a10.5 10.5 0 0 0-9.776-9.776a.747.747 0 0 1-.7-.798ZM2.84 7.05h-.002a7 7 0 0 1 6.113 6.111a.75.75 0 0 1-1.49.178a5.5 5.5 0 0 0-4.8-4.8a.75.75 0 0 1 .179-1.489M2 13a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path>`,
})
export class OcticonRss16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRss24Icon],svg[octicon-rss-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3.25a.75.75 0 0 1 .75-.75C14.053 2.5 22 10.447 22 20.25a.75.75 0 0 1-1.5 0C20.5 11.275 13.225 4 4.25 4a.75.75 0 0 1-.75-.75m.75 6.25C10.187 9.5 15 14.313 15 20.25a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 4.25 11a.75.75 0 0 1 0-1.5M3.5 19a2 2 0 1 1 3.999-.001A2 2 0 0 1 3.5 19"></svg:path>`,
})
export class OcticonRss24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRubyIcon],svg[octicon-ruby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 6l-5 5V4h3l2 2zm3 0l-8 8l-8-8l4-4h8l4 4zm-8 6.5L14.5 6l-3-3h-7l-3 3L8 12.5z" fill="currentColor"></svg:path>`,
})
export class OcticonRubyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRuby16Icon],svg[octicon-ruby-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.637 2.291A.75.75 0 0 1 4.23 2h7.54c.232 0 .451.107.593.291l3.48 4.5a.75.75 0 0 1-.072.999l-7.25 7a.75.75 0 0 1-1.042 0l-7.25-7a.75.75 0 0 1-.072-.999ZM4.598 3.5L1.754 7.177L8 13.207l6.246-6.03L11.402 3.5Z"></svg:path>`,
})
export class OcticonRuby16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconRuby24Icon],svg[octicon-ruby-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.873 3.26A.75.75 0 0 1 6.44 3h11.31c.223 0 .434.099.576.27l5 6a.75.75 0 0 1-.028.992l-10.75 11.5a.75.75 0 0 1-1.096 0l-10.75-11.5a.75.75 0 0 1-.02-1.003zm.91 1.24L2.258 9.73L12 20.153l9.75-10.43L17.399 4.5Z"></svg:path>`,
})
export class OcticonRuby24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconScreenFullIcon],svg[octicon-screen-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 10h1v3c0 .547-.453 1-1 1h-3v-1h3v-3zM1 10H0v3c0 .547.453 1 1 1h3v-1H1v-3zm0-7h3V2H1c-.547 0-1 .453-1 1v3h1V3zm1 1h10v8H2V4zm2 6h6V6H4v4zm6-8v1h3v3h1V3c0-.547-.453-1-1-1h-3z" fill="currentColor"></svg:path>`,
})
export class OcticonScreenFullIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconScreenFull16Icon],svg[octicon-screen-full-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 10a.75.75 0 0 1 .75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 1 13.25v-2.5a.75.75 0 0 1 .75-.75m12.5 0a.75.75 0 0 1 .75.75v2.5A1.75 1.75 0 0 1 13.25 15h-2.5a.75.75 0 0 1 0-1.5h2.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 .75-.75M2.75 2.5a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0v-2.5C1 1.784 1.784 1 2.75 1h2.5a.75.75 0 0 1 0 1.5ZM10 1.75a.75.75 0 0 1 .75-.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class OcticonScreenFull16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconScreenFull24Icon],svg[octicon-screen-full-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 15a.75.75 0 0 1 .75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 0 1 0 1.5h-3.5A1.75 1.75 0 0 1 3 19.25v-3.5a.75.75 0 0 1 .75-.75m16.5 0a.75.75 0 0 1 .75.75v3.5A1.75 1.75 0 0 1 19.25 21h-3.5a.75.75 0 0 1 0-1.5h3.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 .75-.75M4.75 4.5a.25.25 0 0 0-.25.25v3.5a.75.75 0 0 1-1.5 0v-3.5C3 3.784 3.784 3 4.75 3h3.5a.75.75 0 0 1 0 1.5ZM15 3.75a.75.75 0 0 1 .75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class OcticonScreenFull24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconScreenNormalIcon],svg[octicon-screen-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M2 4H0V3h2V1h1v2c0 .547-.453 1-1 1zm0 8H0v1h2v2h1v-2c0-.547-.453-1-1-1zm9-2c0 .547-.453 1-1 1H4c-.547 0-1-.453-1-1V6c0-.547.453-1 1-1h6c.547 0 1 .453 1 1v4zM9 7H5v2h4V7zm2 6v2h1v-2h2v-1h-2c-.547 0-1 .453-1 1zm1-10V1h-1v2c0 .547.453 1 1 1h2V3h-2z" fill="currentColor"></svg:path>`,
})
export class OcticonScreenNormalIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconScreenNormal16Icon],svg[octicon-screen-normal-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 1a.75.75 0 0 1 .75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 10 4.25v-2.5a.75.75 0 0 1 .75-.75m-5.5 0a.75.75 0 0 1 .75.75v2.5A1.75 1.75 0 0 1 4.25 6h-2.5a.75.75 0 0 1 0-1.5h2.5a.25.25 0 0 0 .25-.25v-2.5A.75.75 0 0 1 5.25 1M1 10.75a.75.75 0 0 1 .75-.75h2.5c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1-.75-.75m9 1c0-.966.784-1.75 1.75-1.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0Z"></svg:path>`,
})
export class OcticonScreenNormal16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconScreenNormal24Icon],svg[octicon-screen-normal-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 3a.75.75 0 0 1 .75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 0 1 0 1.5h-3.5A1.75 1.75 0 0 1 15 7.25v-3.5a.75.75 0 0 1 .75-.75m-7.5 0a.75.75 0 0 1 .75.75v3.5A1.75 1.75 0 0 1 7.25 9h-3.5a.75.75 0 0 1 0-1.5h3.5a.25.25 0 0 0 .25-.25v-3.5A.75.75 0 0 1 8.25 3M3 15.75a.75.75 0 0 1 .75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1-.75-.75m12 1c0-.966.784-1.75 1.75-1.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v3.5a.75.75 0 0 1-1.5 0Z"></svg:path>`,
})
export class OcticonScreenNormal24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSearchIcon],svg[octicon-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3c.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7c0-2.59 2.11-4.7 4.7-4.7c2.59 0 4.7 2.11 4.7 4.7c0 2.59-2.11 4.7-4.7 4.7z" fill="currentColor"></svg:path>`,
})
export class OcticonSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSearch16Icon],svg[octicon-search-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 11.74a6 6 0 0 1-7.922-8.982a6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7"></svg:path>`,
})
export class OcticonSearch16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSearch24Icon],svg[octicon-search-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2M3.5 10.25a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 0 0-13.5 0"></svg:path>`,
})
export class OcticonSearch24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconServerIcon],svg[octicon-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11 6H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zM2 9H1V7h1v2zm2 0H3V7h1v2zm2 0H5V7h1v2zm2 0H7V7h1v2zm3-8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM2 4H1V2h1v2zm2 0H3V2h1v2zm2 0H5V2h1v2zm2 0H7V2h1v2zm3-1h-1V2h1v1zm0 8H1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm-9 3H1v-2h1v2zm2 0H3v-2h1v2zm2 0H5v-2h1v2zm2 0H7v-2h1v2z" fill="currentColor"></svg:path>`,
})
export class OcticonServerIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconServer16Icon],svg[octicon-server-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v4c0 .372-.116.717-.314 1c.198.283.314.628.314 1v4a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 12.75v-4c0-.358.109-.707.314-1a1.74 1.74 0 0 1-.314-1v-4C0 1.784.784 1 1.75 1M1.5 2.75v4c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25m.25 5.75a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25ZM7 4.75A.75.75 0 0 1 7.75 4h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 4.75M7.75 10h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5M3 4.75A.75.75 0 0 1 3.75 4h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 4.75M3.75 10h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class OcticonServer16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconServer24Icon],svg[octicon-server-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 6.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM6 7.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 7.25m4 9a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.25-.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M3.25 2h17.5c.966 0 1.75.784 1.75 1.75v7c0 .372-.116.716-.314 1c.198.284.314.628.314 1v7a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75v-7c0-.358.109-.707.314-1a1.74 1.74 0 0 1-.314-1v-7C1.5 2.784 2.284 2 3.25 2m0 10.5a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25Zm0-1.5h17.5a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25H3.25a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25"></svg:path>`,
})
export class OcticonServer24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSettingsIcon],svg[octicon-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4 7H3V2h1v5zm-1 7h1v-3H3v3zm5 0h1V8H8v6zm5 0h1v-2h-1v2zm1-12h-1v6h1V2zM9 2H8v2h1V2zM5 8H2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5-3H7c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zm5 4h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonSettingsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSettings24Icon],svg[octicon-settings-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11.31 2.525a9.648 9.648 0 0 1 1.38 0c.055.004.135.05.162.16l.351 1.45c.153.628.626 1.08 1.173 1.278c.205.074.405.157.6.249a1.832 1.832 0 0 0 1.733-.074l1.275-.776c.097-.06.186-.036.228 0c.348.302.674.628.976.976c.036.042.06.13 0 .228l-.776 1.274a1.832 1.832 0 0 0-.074 1.734c.092.195.175.395.248.6c.198.547.652 1.02 1.278 1.172l1.45.353c.111.026.157.106.161.161a9.653 9.653 0 0 1 0 1.38c-.004.055-.05.135-.16.162l-1.45.351a1.833 1.833 0 0 0-1.278 1.173a6.926 6.926 0 0 1-.25.6a1.832 1.832 0 0 0 .075 1.733l.776 1.275c.06.097.036.186 0 .228a9.555 9.555 0 0 1-.976.976c-.042.036-.13.06-.228 0l-1.275-.776a1.832 1.832 0 0 0-1.733-.074a6.926 6.926 0 0 1-.6.248a1.833 1.833 0 0 0-1.172 1.278l-.353 1.45c-.026.111-.106.157-.161.161a9.653 9.653 0 0 1-1.38 0c-.055-.004-.135-.05-.162-.16l-.351-1.45a1.833 1.833 0 0 0-1.173-1.278a6.928 6.928 0 0 1-.6-.25a1.832 1.832 0 0 0-1.734.075l-1.274.776c-.097.06-.186.036-.228 0a9.56 9.56 0 0 1-.976-.976c-.036-.042-.06-.13 0-.228l.776-1.275a1.832 1.832 0 0 0 .074-1.733a6.948 6.948 0 0 1-.249-.6a1.833 1.833 0 0 0-1.277-1.172l-1.45-.353c-.111-.026-.157-.106-.161-.161a9.648 9.648 0 0 1 0-1.38c.004-.055.05-.135.16-.162l1.45-.351a1.833 1.833 0 0 0 1.278-1.173a6.95 6.95 0 0 1 .249-.6a1.832 1.832 0 0 0-.074-1.734l-.776-1.274c-.06-.097-.036-.186 0-.228c.302-.348.628-.674.976-.976c.042-.036.13-.06.228 0l1.274.776a1.832 1.832 0 0 0 1.734.074a6.95 6.95 0 0 1 .6-.249a1.833 1.833 0 0 0 1.172-1.277l.353-1.45c.026-.111.106-.157.161-.161zM12 1c-.268 0-.534.01-.797.028c-.763.055-1.345.617-1.512 1.304l-.352 1.45c-.02.078-.09.172-.225.22a8.45 8.45 0 0 0-.728.303c-.13.06-.246.044-.315.002l-1.274-.776c-.604-.368-1.412-.354-1.99.147c-.403.348-.78.726-1.129 1.128c-.5.579-.515 1.387-.147 1.99l.776 1.275c.042.069.059.185-.002.315a8.45 8.45 0 0 0-.302.728c-.05.135-.143.206-.221.225l-1.45.352c-.687.167-1.249.749-1.304 1.512a11.149 11.149 0 0 0 0 1.594c.055.763.617 1.345 1.304 1.512l1.45.352c.078.02.172.09.22.225c.09.248.191.491.303.729c.06.129.044.245.002.314l-.776 1.274c-.368.604-.354 1.412.147 1.99c.348.403.726.78 1.128 1.129c.579.5 1.387.515 1.99.147l1.275-.776c.069-.042.185-.059.315.002c.237.112.48.213.728.302c.135.05.206.143.225.221l.352 1.45c.167.687.749 1.249 1.512 1.303a11.125 11.125 0 0 0 1.594 0c.763-.054 1.345-.616 1.512-1.303l.352-1.45c.02-.078.09-.172.225-.22c.248-.09.491-.191.729-.303c.129-.06.245-.044.314-.002l1.274.776c.604.368 1.412.354 1.99-.147c.403-.348.78-.726 1.129-1.128c.5-.579.515-1.387.147-1.99l-.776-1.275c-.042-.069-.059-.185.002-.315c.112-.237.213-.48.302-.728c.05-.135.143-.206.221-.225l1.45-.352c.687-.167 1.249-.749 1.303-1.512a11.125 11.125 0 0 0 0-1.594c-.054-.763-.616-1.345-1.303-1.512l-1.45-.352c-.078-.02-.172-.09-.22-.225a8.469 8.469 0 0 0-.303-.728c-.06-.13-.044-.246-.002-.315l.776-1.274c.368-.604.354-1.412-.147-1.99c-.348-.403-.726-.78-1.128-1.129c-.579-.5-1.387-.515-1.99-.147l-1.275.776c-.069.042-.185.059-.315-.002a8.465 8.465 0 0 0-.728-.302c-.135-.05-.206-.143-.225-.221l-.352-1.45c-.167-.687-.749-1.249-1.512-1.304A11.149 11.149 0 0 0 12 1zm2.5 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0zm1.5 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0z" fill="currentColor"></svg:path>`,
})
export class OcticonSettings24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShare16Icon],svg[octicon-share-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 6.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-1a.75.75 0 0 1 0-1.5h1c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-6.5C2 5.784 2.784 5 3.75 5h1a.75.75 0 0 1 0 1.5ZM7.823.177a.25.25 0 0 1 .354 0l2.896 2.896a.25.25 0 0 1-.177.427H8.75v5.75a.75.75 0 0 1-1.5 0V3.5H5.104a.25.25 0 0 1-.177-.427Z"></svg:path>`,
})
export class OcticonShare16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShare24Icon],svg[octicon-share-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 9.75v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V9.75a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 0 1 0-1.5h2.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25V9.75C4 8.784 4.784 8 5.75 8h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25m7.03-8.53l3.25 3.25a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215l-1.97-1.97v10.69a.75.75 0 0 1-1.5 0V3.56L9.28 5.53a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class OcticonShare24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShareAndroid16Icon],svg[octicon-share-android-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a3 3 0 0 1-5.175 2.066l-3.92 2.179a3 3 0 0 1 0 1.51l3.92 2.179a3 3 0 1 1-.73 1.31l-3.92-2.178a3 3 0 1 1 0-4.133l3.92-2.178A3 3 0 1 1 15 3m-1.5 10a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 13m-9-5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 4.5 8m9-5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 3"></svg:path>`,
})
export class OcticonShareAndroid16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShareAndroid24Icon],svg[octicon-share-android-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5.5a3.498 3.498 0 0 1-6.062 2.385l-5.112 3.021a3.5 3.5 0 0 1 0 2.188l5.112 3.021a3.5 3.5 0 1 1-.764 1.29l-5.112-3.02a3.499 3.499 0 1 1-3.843-5.642a3.5 3.5 0 0 1 3.843.872l5.112-3.021A3.5 3.5 0 1 1 20 5.5m-1.5 13a2 2 0 1 0-3.999-.001a2 2 0 0 0 3.999.001m0-13a2 2 0 1 0-3.999-.001A2 2 0 0 0 18.5 5.5M5.5 14a2 2 0 1 0 .001-3.999A2 2 0 0 0 5.5 14"></svg:path>`,
})
export class OcticonShareAndroid24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShieldIcon],svg[octicon-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 0L0 2v6.02C0 12.69 5.31 16 7 16c1.69 0 7-3.31 7-7.98V2L7 0zM5 11l1.14-2.8a.568.568 0 0 0-.25-.59C5.33 7.25 5 6.66 5 6c0-1.09.89-2 1.98-2C8.06 4 9 4.91 9 6c0 .66-.33 1.25-.89 1.61c-.19.13-.3.36-.25.59L9 11H5z" fill="currentColor"></svg:path>`,
})
export class OcticonShieldIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShield16Icon],svg[octicon-shield-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.467.133a1.75 1.75 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682c-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86c.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 0 0-.174-.237zM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0M9 10.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class OcticonShield16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShield24Icon],svg[octicon-shield-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25-8.25a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M11.46.637a1.75 1.75 0 0 1 1.08 0l8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.77 10.705-9.401 12.83a1.7 1.7 0 0 1-1.198 0C5.771 20.704 2 16.19 2 10V4.976c0-.76.49-1.43 1.21-1.664Zm.617 1.426a.25.25 0 0 0-.154 0L3.673 4.74a.25.25 0 0 0-.173.237V10c0 5.461 3.28 9.483 8.43 11.426a.2.2 0 0 0 .14 0C17.22 19.483 20.5 15.46 20.5 10V4.976a.25.25 0 0 0-.173-.237Z"></svg:path>`,
})
export class OcticonShield24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShieldCheck16Icon],svg[octicon-shield-check-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.533.133l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682c-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.75 1.75 0 0 1 1.066 0m-.61 1.429l-5.25 1.68a.25.25 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859c.784 1.194 2.121 2.342 4.366 3.298a.2.2 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297S13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0M11.28 6.28l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215l.97.97l2.97-2.97a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042"></svg:path>`,
})
export class OcticonShieldCheck16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShieldCheck24Icon],svg[octicon-shield-check-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0z"></svg:path><svg:path fill="currentColor" d="m12.54.637l8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.7 1.7 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.75 1.75 0 0 1 1.08 0m-.617 1.426l-8.25 2.676a.25.25 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.2.2 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.25.25 0 0 0-.154 0"></svg:path>`,
})
export class OcticonShieldCheck24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShieldLock16Icon],svg[octicon-shield-lock-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.533.133l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682c-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.75 1.75 0 0 1 1.066 0m-.61 1.429l-5.25 1.68a.25.25 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859c.784 1.194 2.121 2.342 4.366 3.298a.2.2 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297S13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0M9.5 6.5c0 .536-.286 1.032-.75 1.3v2.45a.75.75 0 0 1-1.5 0V7.8A1.5 1.5 0 1 1 9.5 6.5"></svg:path>`,
})
export class OcticonShieldLock16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShieldLock24Icon],svg[octicon-shield-lock-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.46 1.137a1.75 1.75 0 0 1 1.08 0l8.25 2.675A1.75 1.75 0 0 1 22 5.476V10.5c0 6.19-3.77 10.705-9.401 12.83a1.7 1.7 0 0 1-1.198 0C5.771 21.204 2 16.69 2 10.5V5.476c0-.76.49-1.43 1.21-1.664Zm.617 1.426a.25.25 0 0 0-.154 0L3.673 5.24a.25.25 0 0 0-.173.237V10.5c0 5.461 3.28 9.483 8.43 11.426a.2.2 0 0 0 .14 0c5.15-1.943 8.43-5.965 8.43-11.426V5.476a.25.25 0 0 0-.173-.237ZM13 12.232V15a1 1 0 0 1-2 0v-2.768a2 2 0 1 1 2 0"></svg:path>`,
})
export class OcticonShieldLock24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShieldSlash16Icon],svg[octicon-shield-slash-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.533.133a1.75 1.75 0 0 0-1.066 0l-2.091.67a.75.75 0 0 0 .457 1.428l2.09-.67a.25.25 0 0 1 .153 0l5.25 1.68a.25.25 0 0 1 .174.239V7q0 .35-.025.694a.75.75 0 1 0 1.495.112Q15 7.401 15 7V3.48a1.75 1.75 0 0 0-1.217-1.667zM1 2.857l-.69-.5a.75.75 0 1 1 .88-1.214l14.5 10.5a.75.75 0 1 1-.88 1.214l-1.282-.928c-.995 1.397-2.553 2.624-4.864 3.608c-.425.181-.905.18-1.329 0c-2.447-1.042-4.049-2.356-5.032-3.855S1 8.566 1 7Zm1.5 1.086V7c0 1.358.275 2.666 1.057 3.86c.784 1.194 2.121 2.34 4.366 3.297c.05.02.106.02.153 0c2.127-.905 3.439-1.982 4.237-3.108Z"></svg:path>`,
})
export class OcticonShieldSlash16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShieldSlash24Icon],svg[octicon-shield-slash-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.54 1.137a1.75 1.75 0 0 0-1.08 0L6.018 2.905a.75.75 0 1 0 .464 1.427l5.441-1.768a.24.24 0 0 1 .154 0l8.25 2.675a.25.25 0 0 1 .173.237V10.5c0 1.284-.24 2.83-.696 3.971a.75.75 0 1 0 1.392.557C21.74 13.67 22 11.927 22 10.5V5.476a1.75 1.75 0 0 0-1.21-1.664zM2.017 4.843l-.974-.748a.751.751 0 0 1 .914-1.19l20.5 15.75a.751.751 0 0 1-.914 1.19l-2.012-1.546l-.702.852l-.008.009l-.008.01c-1.603 1.821-3.731 3.223-6.214 4.16a1.7 1.7 0 0 1-1.198-.001C5.771 21.205 2 16.689 2 10.5V5q0-.082.017-.157M3.5 5.982V10.5c0 5.461 3.281 9.483 8.431 11.426a.2.2 0 0 0 .138 0c2.283-.861 4.192-2.131 5.61-3.738l.662-.803Z"></svg:path>`,
})
export class OcticonShieldSlash24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShieldX16Icon],svg[octicon-shield-x-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.533.133l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682c-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667l5.25-1.68a1.75 1.75 0 0 1 1.066 0m-.61 1.429l-5.25 1.68a.25.25 0 0 0-.174.237V7c0 1.36.275 2.666 1.057 3.859c.784 1.194 2.121 2.342 4.366 3.298a.2.2 0 0 0 .154 0c2.245-.957 3.582-2.103 4.366-3.297S13.5 8.358 13.5 7V3.48a.25.25 0 0 0-.174-.238l-5.25-1.68a.25.25 0 0 0-.153 0M6.78 5.22L8 6.44l1.22-1.22a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734L9.06 7.5l1.22 1.22a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L8 8.56L6.78 9.78a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042L6.94 7.5L5.72 6.28a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215"></svg:path>`,
})
export class OcticonShieldX16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconShieldX24Icon],svg[octicon-shield-x-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.28 7.72a.75.75 0 0 0-1.06 1.06l2.72 2.72l-2.72 2.72a.75.75 0 1 0 1.06 1.06L12 12.56l2.72 2.72a.75.75 0 1 0 1.06-1.06l-2.72-2.72l2.72-2.72a.75.75 0 0 0-1.06-1.06L12 10.44z"></svg:path><svg:path fill="currentColor" d="m12.54.637l8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.7 1.7 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.75 1.75 0 0 1 1.08 0m-.617 1.426l-8.25 2.676a.25.25 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.2.2 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.25.25 0 0 0-.154 0"></svg:path>`,
})
export class OcticonShieldX24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSidebarCollapse16Icon],svg[octicon-sidebar-collapse-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z"></svg:path><svg:path fill="currentColor" d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0M1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25M11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z"></svg:path>`,
})
export class OcticonSidebarCollapse16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSidebarCollapse24Icon],svg[octicon-sidebar-collapse-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.22 14.47L9.69 12L7.22 9.53a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042"></svg:path><svg:path fill="currentColor" d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2M3.5 3.75v16.5c0 .138.112.25.25.25H15v-17H3.75a.25.25 0 0 0-.25.25m13 16.75h3.75a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H16.5Z"></svg:path>`,
})
export class OcticonSidebarCollapse24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSidebarExpand16Icon],svg[octicon-sidebar-expand-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.177 7.823l2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354"></svg:path><svg:path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z"></svg:path>`,
})
export class OcticonSidebarExpand16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSidebarExpand24Icon],svg[octicon-sidebar-expand-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.28 9.53L8.81 12l2.47 2.47a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215l-3-3a.75.75 0 0 1 0-1.06l3-3a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734"></svg:path><svg:path fill="currentColor" d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2M3.5 3.75v16.5c0 .138.112.25.25.25H15v-17H3.75a.25.25 0 0 0-.25.25m13 16.75h3.75a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H16.5Z"></svg:path>`,
})
export class OcticonSidebarExpand24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSignInIcon],svg[octicon-sign-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 6.75V12h4V8h1v4c0 .55-.45 1-1 1H7v3l-5.45-2.72c-.33-.17-.55-.52-.55-.91V1c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v3h-1V1H3l4 2v2.25L10 3v2h4v2h-4v2L7 6.75z" fill="currentColor"></svg:path>`,
})
export class OcticonSignInIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSignIn16Icon],svg[octicon-sign-in-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm6.56 4.5h5.69a.75.75 0 0 1 0 1.5H8.56l1.97 1.97a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L6.22 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734Z"></svg:path>`,
})
export class OcticonSignIn16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSignIn24Icon],svg[octicon-sign-in-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.25c0-.966.784-1.75 1.75-1.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.25.25 0 0 0-.25.25v17.5c0 .138.112.25.25.25h5.5a.75.75 0 0 1 0 1.5h-5.5A1.75 1.75 0 0 1 3 20.75Zm9.994 9.5l3.3 3.484a.75.75 0 0 1-1.088 1.032l-4.5-4.75a.75.75 0 0 1 0-1.032l4.5-4.75a.75.75 0 0 1 1.088 1.032l-3.3 3.484h8.256a.75.75 0 0 1 0 1.5Z"></svg:path>`,
})
export class OcticonSignIn24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSignOutIcon],svg[octicon-sign-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3l-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z" fill="currentColor"></svg:path>`,
})
export class OcticonSignOutIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSignOut16Icon],svg[octicon-sign-out-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm10.44 4.5l-1.97-1.97a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734l1.97-1.97H6.75a.75.75 0 0 1 0-1.5Z"></svg:path>`,
})
export class OcticonSignOut16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSignOut24Icon],svg[octicon-sign-out-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.25c0-.966.784-1.75 1.75-1.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.25.25 0 0 0-.25.25v17.5c0 .138.112.25.25.25h5.5a.75.75 0 0 1 0 1.5h-5.5A1.75 1.75 0 0 1 3 20.75Zm16.006 9.5H10.75a.75.75 0 0 1 0-1.5h8.256l-3.3-3.484a.75.75 0 0 1 1.088-1.032l4.5 4.75a.75.75 0 0 1 0 1.032l-4.5 4.75a.75.75 0 0 1-1.088-1.032Z"></svg:path>`,
})
export class OcticonSignOut24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSingleSelect16Icon],svg[octicon-single-select-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.06 7.356l2.795 2.833c.08.081.21.081.29 0l2.794-2.833c.13-.131.038-.356-.145-.356H5.206c-.183 0-.275.225-.145.356Z"></svg:path><svg:path fill="currentColor" d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class OcticonSingleSelect16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSingleSelect24Icon],svg[octicon-single-select-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.854 10.854l3.792 3.792a.5.5 0 0 0 .708 0l3.793-3.792a.5.5 0 0 0-.354-.854H8.207a.5.5 0 0 0-.353.854"></svg:path><svg:path fill="currentColor" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25Zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class OcticonSingleSelect24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSkip16Icon],svg[octicon-skip-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m9.78-2.22l-5.5 5.5a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734l5.5-5.5a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042"></svg:path>`,
})
export class OcticonSkip16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSkip24Icon],svg[octicon-skip-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.28 7.78a.75.75 0 0 0-1.06-1.06l-9.5 9.5a.75.75 0 1 0 1.06 1.06z"></svg:path><svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12"></svg:path>`,
})
export class OcticonSkip24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSkipFill16Icon],svg[octicon-skip-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m11.333-2.167a.825.825 0 0 0-1.166-1.166l-5.5 5.5a.825.825 0 0 0 1.166 1.166Z"></svg:path>`,
})
export class OcticonSkipFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSkipFill24Icon],svg[octicon-skip-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m16.333-4.167a.825.825 0 0 0-1.166-1.166l-9.5 9.5a.825.825 0 0 0 1.166 1.166Z"></svg:path>`,
})
export class OcticonSkipFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSliders16Icon],svg[octicon-sliders-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2.75a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75m-8.5.75v1.25a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0V2H1.75a.75.75 0 0 0 0 1.5zm1.25 5.25a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5zM15 8a.75.75 0 0 1-.75.75H11.5V10a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 1.5 0v1.25h2.75A.75.75 0 0 1 15 8m-9 5.25v-2a.75.75 0 0 0-1.5 0v1.25H1.75a.75.75 0 0 0 0 1.5H4.5v1.25a.75.75 0 0 0 1.5 0zm9 0a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class OcticonSliders16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSliders24Icon],svg[octicon-sliders-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m-8-12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 6.25m13 6a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75M8.75 16a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" d="M3 18.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m0-6a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M16.75 10a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75M14 6.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M11.25 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class OcticonSliders24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSmileyIcon],svg[octicon-smiley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53c-.92 0-1.81-.17-2.64-.53c-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64c.34-.81.83-1.55 1.45-2.17c.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53c.81.34 1.55.83 2.17 1.45c.62.62 1.11 1.36 1.45 2.17c.36.83.53 1.72.53 2.64c0 .92-.17 1.81-.53 2.64c-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z" fill="currentColor"></svg:path>`,
})
export class OcticonSmileyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSmiley16Icon],svg[octicon-smiley-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m3.82 1.636a.75.75 0 0 1 1.038.175l.007.009q.155.177.35.31c.264.178.683.37 1.285.37s1.02-.192 1.285-.371q.195-.132.35-.31l.007-.008a.75.75 0 0 1 1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002l-.002.003l-.005.007l-.014.019a2 2 0 0 1-.184.213q-.241.25-.53.445c-.63.418-1.37.638-2.127.629c-.946 0-1.652-.308-2.126-.63a3.3 3.3 0 0 1-.715-.657l-.014-.02l-.005-.006l-.002-.003v-.002h-.001l.613-.432l-.614.43a.75.75 0 0 1 .183-1.044ZM12 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0M5 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m5.25 2.25l.592.416z"></svg:path>`,
})
export class OcticonSmiley16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSmiley24Icon],svg[octicon-smiley-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.456 14.494a.75.75 0 0 1 1.068.17a3 3 0 0 0 .572.492A3.4 3.4 0 0 0 12 15.72c.855 0 1.487-.283 1.904-.562a3 3 0 0 0 .572-.492l.021-.026a.75.75 0 0 1 1.197.905l-.027.034l-.052.063c-.044.05-.105.119-.184.198a4.6 4.6 0 0 1-.695.566A4.9 4.9 0 0 1 12 17.22a4.9 4.9 0 0 1-2.736-.814a4.6 4.6 0 0 1-.695-.566a3 3 0 0 1-.236-.261c-.259-.332-.223-.824.123-1.084Z"></svg:path><svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12"></svg:path><svg:path fill="currentColor" d="M9 10.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M16.25 12a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path>`,
})
export class OcticonSmiley24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSortAsc16Icon],svg[octicon-sort-asc-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.927 2.573l3 3A.25.25 0 0 1 15.75 6H13.5v6.75a.75.75 0 0 1-1.5 0V6H9.75a.25.25 0 0 1-.177-.427l3-3a.25.25 0 0 1 .354 0M0 12.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75m0-4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8.25m0-4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 4.25"></svg:path>`,
})
export class OcticonSortAsc16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSortAsc24Icon],svg[octicon-sort-asc-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 17.25a.75.75 0 0 1-1.5 0V7.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L18.5 7.56zm-15.75.25a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5z"></svg:path>`,
})
export class OcticonSortAsc24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSortDesc16Icon],svg[octicon-sort-desc-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 4.25m0 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8.25m0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75M13.5 10h2.25a.25.25 0 0 1 .177.427l-3 3a.25.25 0 0 1-.354 0l-3-3A.25.25 0 0 1 9.75 10H12V3.75a.75.75 0 0 1 1.5 0z"></svg:path>`,
})
export class OcticonSortDesc16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSortDesc24Icon],svg[octicon-sort-desc-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 16.44V6.75a.75.75 0 0 0-1.5 0v9.69l-2.22-2.22a.75.75 0 1 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06zM2 7.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 2 7.25m0 5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class OcticonSortDesc24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSparkleFill16Icon],svg[octicon-sparkle-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.5 7.5 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.5 7.5 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.5 7.5 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.5 7.5 0 0 0 4.464-4.464Z"></svg:path>`,
})
export class OcticonSparkleFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSparkleFill24Icon],svg[octicon-sparkle-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.296 1.924c.24-.656 1.168-.656 1.408 0l.717 1.958a11.25 11.25 0 0 0 6.697 6.697l1.958.717c.657.24.657 1.168 0 1.408l-1.958.717a11.25 11.25 0 0 0-6.697 6.697l-.717 1.958c-.24.657-1.168.657-1.408 0l-.717-1.958a11.25 11.25 0 0 0-6.697-6.697l-1.958-.717c-.656-.24-.656-1.168 0-1.408l1.958-.717a11.25 11.25 0 0 0 6.697-6.697z"></svg:path>`,
})
export class OcticonSparkleFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSparklesFill16Icon],svg[octicon-sparkles-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.6 2.279a.426.426 0 0 1 .8 0l.407 1.112a6.39 6.39 0 0 0 3.802 3.802l1.112.407a.426.426 0 0 1 0 .8l-1.112.407a6.39 6.39 0 0 0-3.802 3.802l-.407 1.112a.426.426 0 0 1-.8 0l-.407-1.112a6.39 6.39 0 0 0-3.802-3.802L4.279 8.4a.426.426 0 0 1 0-.8l1.112-.407a6.39 6.39 0 0 0 3.802-3.802zm-4.267 8.837a.178.178 0 0 1 .334 0l.169.464a2.66 2.66 0 0 0 1.584 1.584l.464.169a.178.178 0 0 1 0 .334l-.464.169a2.66 2.66 0 0 0-1.584 1.584l-.169.464a.178.178 0 0 1-.334 0l-.169-.464a2.66 2.66 0 0 0-1.584-1.584l-.464-.169a.178.178 0 0 1 0-.334l.464-.169a2.66 2.66 0 0 0 1.584-1.584zM2.8.14a.213.213 0 0 1 .4 0l.203.556a3.2 3.2 0 0 0 1.901 1.901l.556.203a.213.213 0 0 1 0 .4l-.556.203a3.2 3.2 0 0 0-1.901 1.901L3.2 5.86a.213.213 0 0 1-.4 0l-.203-.556A3.2 3.2 0 0 0 .696 3.403L.14 3.2a.213.213 0 0 1 0-.4l.556-.203A3.2 3.2 0 0 0 2.597.696z"></svg:path>`,
})
export class OcticonSparklesFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSparklesFill24Icon],svg[octicon-sparkles-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.4 3.419a.639.639 0 0 1 1.2 0l.61 1.668a9.59 9.59 0 0 0 5.703 5.703l1.668.61a.639.639 0 0 1 0 1.2l-1.668.61a9.59 9.59 0 0 0-5.703 5.703l-.61 1.668a.639.639 0 0 1-1.2 0l-.61-1.668a9.59 9.59 0 0 0-5.703-5.703l-1.668-.61a.639.639 0 0 1 0-1.2l1.668-.61a9.59 9.59 0 0 0 5.703-5.703zM8 16.675a.266.266 0 0 1 .5 0l.254.694a4 4 0 0 0 2.376 2.377l.695.254a.266.266 0 0 1 0 .5l-.695.254a4 4 0 0 0-2.376 2.377l-.254.694a.266.266 0 0 1-.5 0l-.254-.694a4 4 0 0 0-2.376-2.377l-.695-.254a.266.266 0 0 1 0-.5l.695-.254a4 4 0 0 0 2.376-2.377zM4.2.21a.32.32 0 0 1 .6 0l.305.833a4.8 4.8 0 0 0 2.852 2.852l.833.305a.32.32 0 0 1 0 .6l-.833.305a4.8 4.8 0 0 0-2.852 2.852L4.8 8.79a.32.32 0 0 1-.6 0l-.305-.833a4.8 4.8 0 0 0-2.852-2.852L.21 4.8a.32.32 0 0 1 0-.6l.833-.305a4.8 4.8 0 0 0 2.852-2.852z"></svg:path>`,
})
export class OcticonSparklesFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSponsorTiers16Icon],svg[octicon-sponsor-tiers-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.586 1C12.268 1 13.5 2.37 13.5 4.25c0 1.745-.996 3.359-2.622 4.831q-.25.226-.509.438l1.116 5.584a.75.75 0 0 1-.991.852l-2.409-.876a.25.25 0 0 0-.17 0l-2.409.876a.75.75 0 0 1-.991-.852L5.63 9.519a14 14 0 0 1-.51-.438C3.497 7.609 2.5 5.995 2.5 4.25C2.5 2.37 3.732 1 5.414 1c.963 0 1.843.403 2.474 1.073L8 2.198l.112-.125a3.4 3.4 0 0 1 2.283-1.068zm-3.621 9.495l-.718 3.594l1.155-.42a1.75 1.75 0 0 1 1.028-.051l.168.051l1.154.42l-.718-3.592q-.3.195-.505.314l-.169.097a.75.75 0 0 1-.72 0a10 10 0 0 1-.515-.308zM10.586 2.5c-.863 0-1.611.58-1.866 1.459c-.209.721-1.231.721-1.44 0C7.025 3.08 6.277 2.5 5.414 2.5C4.598 2.5 4 3.165 4 4.25c0 1.23.786 2.504 2.128 3.719c.49.443 1.018.846 1.546 1.198l.325.21l.076-.047l.251-.163a13 13 0 0 0 1.546-1.198C11.214 6.754 12 5.479 12 4.25c0-1.085-.598-1.75-1.414-1.75"></svg:path>`,
})
export class OcticonSponsorTiers16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSponsorTiers24Icon],svg[octicon-sponsor-tiers-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.004 1.25C18.311 1.25 20 3.128 20 5.75c0 2.292-1.23 4.464-3.295 6.485c-.481.47-.98.909-1.482 1.31l.265 1.32l1.375 7.5a.75.75 0 0 1-.982.844l-3.512-1.207a.75.75 0 0 0-.488 0L8.37 23.209a.75.75 0 0 1-.982-.844l1.378-7.512l.261-1.309c-.5-.4-1-.838-1.481-1.31C5.479 10.215 4.25 8.043 4.25 5.75c0-2.622 1.689-4.5 3.996-4.5c1.55 0 2.947.752 3.832 1.967l.047.067l.047-.067a4.73 4.73 0 0 1 3.612-1.962zM13.89 14.531c-.418.285-.828.542-1.218.77l-.18.103a.75.75 0 0 1-.734 0l-.071-.04l-.46-.272q-.424-.26-.868-.562l-.121.605l-1.145 6.239l2.3-.79a2.25 2.25 0 0 1 1.284-.054l.18.053l2.299.79l-1.141-6.226zM16.004 2.75c-1.464 0-2.731.983-3.159 2.459c-.209.721-1.231.721-1.44 0c-.428-1.476-1.695-2.459-3.16-2.459c-1.44 0-2.495 1.173-2.495 3c0 1.811 1.039 3.647 2.844 5.412a19.6 19.6 0 0 0 3.734 2.84l-.019-.011l-.184-.111l.147-.088a20 20 0 0 0 3.015-2.278l.37-.352C17.46 9.397 18.5 7.561 18.5 5.75c0-1.827-1.055-3-2.496-3"></svg:path>`,
})
export class OcticonSponsorTiers24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSquare16Icon],svg[octicon-square-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5.75C4 4.784 4.784 4 5.75 4h4.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 10.25 12h-4.5A1.75 1.75 0 0 1 4 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class OcticonSquare16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSquare24Icon],svg[octicon-square-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.75C6 6.784 6.784 6 7.75 6h8.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 16.25 18h-8.5A1.75 1.75 0 0 1 6 16.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class OcticonSquare24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSquareCircle16Icon],svg[octicon-square-circle-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path fill="currentColor" d="M5 5.75A.75.75 0 0 1 5.75 5h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75Z"></svg:path>`,
})
export class OcticonSquareCircle16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSquareCircle24Icon],svg[octicon-square-circle-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11m0-1.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5"></svg:path><svg:path fill="currentColor" d="M7 8.75C7 7.784 7.784 7 8.75 7h6.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 15.25 17h-6.5A1.75 1.75 0 0 1 7 15.25z"></svg:path>`,
})
export class OcticonSquareCircle24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSquareFill16Icon],svg[octicon-square-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 4h4.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 10.25 12h-4.5A1.75 1.75 0 0 1 4 10.25v-4.5C4 4.784 4.784 4 5.75 4"></svg:path>`,
})
export class OcticonSquareFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSquareFill24Icon],svg[octicon-square-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 6h8.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 16.25 18h-8.5A1.75 1.75 0 0 1 6 16.25v-8.5C6 6.784 6.784 6 7.75 6"></svg:path>`,
})
export class OcticonSquareFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSquirrelIcon],svg[octicon-squirrel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 1C9.79 1 8 2.31 8 3.92c0 1.94.5 3.03 0 6.08c0-4.5-2.77-6.34-4-6.34c.05-.5-.48-.66-.48-.66s-.22.11-.3.34c-.27-.31-.56-.27-.56-.27l-.13.58S.7 4.29.68 6.87c.2.33 1.53.6 2.47.43c.89.05.67.79.47.99C2.78 9.13 2 8 1 8S0 9 1 9s1 1 3 1c-3.09 1.2 0 4 0 4H3c-1 0-1 1-1 1h6c3 0 5-1 5-3.47c0-.85-.43-1.79-1-2.53c-1.11-1.46.23-2.68 1-2c.77.68 3 1 3-2c0-2.21-1.79-4-4-4zM2.5 6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5z" fill="currentColor"></svg:path>`,
})
export class OcticonSquirrelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSquirrel16Icon],svg[octicon-squirrel-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.499.75a.75.75 0 0 1 1.5 0v.996C5.9 2.903 6.793 3.65 7.662 4.376l.24.202c-.036-.694.055-1.422.426-2.163C9.1.873 10.794-.045 12.622.26C14.408.558 16 1.94 16 4.25c0 1.278-.954 2.575-2.44 2.734l.146.508l.065.22c.203.701.412 1.455.476 2.226c.142 1.707-.4 3.03-1.487 3.898C11.714 14.671 10.27 15 8.75 15h-6a.75.75 0 0 1 0-1.5h1.376a4.5 4.5 0 0 1-.563-1.191a3.84 3.84 0 0 1-.05-2.063a4.65 4.65 0 0 1-2.025-.293a.75.75 0 0 1 .525-1.406c1.357.507 2.376-.006 2.698-.318l.009-.01a.747.747 0 0 1 1.06 0a.75.75 0 0 1-.012 1.074c-.912.92-.992 1.835-.768 2.586c.221.74.745 1.337 1.196 1.621H8.75c1.343 0 2.398-.296 3.074-.836c.635-.507 1.036-1.31.928-2.602c-.05-.603-.216-1.224-.422-1.93l-.064-.221c-.12-.407-.246-.84-.353-1.29a2.4 2.4 0 0 1-.507-.441a3.1 3.1 0 0 1-.633-1.248a.75.75 0 0 1 1.455-.364c.046.185.144.436.31.627c.146.168.353.305.712.305c.738 0 1.25-.615 1.25-1.25c0-1.47-.95-2.315-2.123-2.51c-1.172-.196-2.227.387-2.706 1.345c-.46.92-.27 1.774.019 3.062l.042.19l.01.05c.348.443.666.949.94 1.553a.75.75 0 1 1-1.365.62c-.553-1.217-1.32-1.94-2.3-2.768L6.7 5.527c-.814-.68-1.75-1.462-2.692-2.619a3.7 3.7 0 0 0-1.023.88c-.406.495-.663 1.036-.722 1.508c.116.122.306.21.591.239c.388.038.797-.06 1.032-.19a.75.75 0 0 1 .728 1.31c-.515.287-1.23.439-1.906.373c-.682-.067-1.473-.38-1.879-1.193L.75 5.677V5.5c0-.984.48-1.94 1.077-2.664c.46-.559 1.05-1.055 1.673-1.353z"></svg:path>`,
})
export class OcticonSquirrel16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSquirrel24Icon],svg[octicon-squirrel-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.377 3.49c-1.862-.31-3.718.62-4.456 2.095c-.428.857-.691 1.624-.728 2.361c-.035.71.138 1.444.67 2.252c.644.854 1.199 1.913 1.608 3.346a.75.75 0 1 1-1.442.412c-.353-1.236-.82-2.135-1.372-2.865l-.008-.01c-.53-.698-1.14-1.242-1.807-1.778a51 51 0 0 0-.667-.524C9.024 7.884 7.71 6.863 6.471 5.16c-.59.287-1.248.798-1.806 1.454c-.665.78-1.097 1.66-1.158 2.446c.246.36.685.61 1.246.715c.643.12 1.278.015 1.633-.182a.75.75 0 1 1 .728 1.311c-.723.402-1.728.516-2.637.346c-.916-.172-1.898-.667-2.398-1.666L2 9.427V9.25c0-1.323.678-2.615 1.523-3.607c.7-.824 1.59-1.528 2.477-1.917V2.75a.75.75 0 1 1 1.5 0v1.27c1.154 1.67 2.363 2.612 3.568 3.551q.311.242.621.489q.002-.095.006-.188c.052-1.034.414-2.017.884-2.958c1.06-2.118 3.594-3.313 6.044-2.904c1.225.204 2.329.795 3.125 1.748C22.546 4.713 23 5.988 23 7.5c0 1.496-.913 3.255-2.688 3.652c.838 1.699 1.438 3.768 1.181 5.697c-.269 2.017-1.04 3.615-2.582 4.675C17.409 22.558 15.288 23 12.5 23H4.75a.75.75 0 0 1 0-1.5h2.322c-.58-.701-.998-1.578-1.223-2.471c-.327-1.3-.297-2.786.265-4.131c-.92.091-1.985-.02-3.126-.445a.75.75 0 1 1 .524-1.406c1.964.733 3.428.266 4.045-.19q.102-.09.208-.18a.745.745 0 0 1 .861-.076a.75.75 0 0 1 .32.368a.75.75 0 0 1-.173.819q-.115.114-.252.221c-1.322 1.234-1.62 3.055-1.218 4.654c.438 1.737 1.574 2.833 2.69 2.837H12.5c2.674 0 4.429-.433 5.56-1.212c1.094-.752 1.715-1.904 1.946-3.637c.236-1.768-.445-3.845-1.407-5.529l-.012-.02a3.56 3.56 0 0 1-1.553-.94c-.556-.565-.89-1.243-1.012-1.73a.75.75 0 0 1 1.456-.364c.057.231.26.67.626 1.043c.35.357.822.623 1.443.623c1.172 0 1.953-1.058 1.953-2.234c0-1.205-.357-2.127-.903-2.78c-.547-.654-1.318-1.08-2.22-1.23"></svg:path>`,
})
export class OcticonSquirrel24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStack16Icon],svg[octicon-stack-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.122.392a1.75 1.75 0 0 1 1.756 0l5.003 2.902c.83.481.83 1.68 0 2.162L8.878 8.358a1.75 1.75 0 0 1-1.756 0L2.119 5.456a1.25 1.25 0 0 1 0-2.162ZM8.125 1.69a.25.25 0 0 0-.25 0l-4.63 2.685l4.63 2.685a.25.25 0 0 0 .25 0l4.63-2.685ZM1.601 7.789a.75.75 0 0 1 1.025-.273l5.249 3.044a.25.25 0 0 0 .25 0l5.249-3.044a.75.75 0 0 1 .752 1.298l-5.248 3.044a1.75 1.75 0 0 1-1.756 0L1.874 8.814A.75.75 0 0 1 1.6 7.789Zm0 3.5a.75.75 0 0 1 1.025-.273l5.249 3.044a.25.25 0 0 0 .25 0l5.249-3.044a.75.75 0 0 1 .752 1.298l-5.248 3.044a1.75 1.75 0 0 1-1.756 0l-5.248-3.044a.75.75 0 0 1-.273-1.025"></svg:path>`,
})
export class OcticonStack16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStack24Icon],svg[octicon-stack-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.063 1.456a1.75 1.75 0 0 1 1.874 0l8.383 5.316a1.75 1.75 0 0 1 0 2.956l-8.383 5.316a1.75 1.75 0 0 1-1.874 0L2.68 9.728a1.75 1.75 0 0 1 0-2.956Zm1.071 1.267a.25.25 0 0 0-.268 0L3.483 8.039a.25.25 0 0 0 0 .422l8.383 5.316a.25.25 0 0 0 .268 0l8.383-5.316a.25.25 0 0 0 0-.422Z"></svg:path><svg:path fill="currentColor" d="M1.867 12.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.75 1.75 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035"></svg:path><svg:path fill="currentColor" d="M1.867 16.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.75 1.75 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035"></svg:path>`,
})
export class OcticonStack24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStarIcon],svg[octicon-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1L4.9 5.36L0 6l3.6 3.26L2.67 14L7 11.67L11.33 14l-.93-4.74L14 6z" fill="currentColor"></svg:path>`,
})
export class OcticonStarIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStar16Icon],svg[octicon-star-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25m0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45l2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084l2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456l-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183l-3.096-.45a.75.75 0 0 1-.564-.41z"></svg:path>`,
})
export class OcticonStar16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStar24Icon],svg[octicon-star-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 .25a.75.75 0 0 1 .673.418l3.058 6.197l6.839.994a.75.75 0 0 1 .415 1.279l-4.948 4.823l1.168 6.811a.751.751 0 0 1-1.088.791L12 18.347l-6.117 3.216a.75.75 0 0 1-1.088-.79l1.168-6.812l-4.948-4.823a.75.75 0 0 1 .416-1.28l6.838-.993L11.328.668A.75.75 0 0 1 12 .25m0 2.445L9.44 7.882a.75.75 0 0 1-.565.41l-5.725.832l4.143 4.038a.75.75 0 0 1 .215.664l-.978 5.702l5.121-2.692a.75.75 0 0 1 .698 0l5.12 2.692l-.977-5.702a.75.75 0 0 1 .215-.664l4.143-4.038l-5.725-.831a.75.75 0 0 1-.565-.41z"></svg:path>`,
})
export class OcticonStar24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStarFill16Icon],svg[octicon-star-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25"></svg:path>`,
})
export class OcticonStarFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStarFill24Icon],svg[octicon-star-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.672.668l3.059 6.197l6.838.993a.75.75 0 0 1 .416 1.28l-4.948 4.823l1.168 6.812a.75.75 0 0 1-1.088.79L12 18.347l-6.116 3.216a.75.75 0 0 1-1.088-.791l1.168-6.811l-4.948-4.823a.749.749 0 0 1 .416-1.279l6.838-.994L11.327.668a.75.75 0 0 1 1.345 0"></svg:path>`,
})
export class OcticonStarFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStopIcon],svg[octicon-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 1H4L0 5v6l4 4h6l4-4V5l-4-4zm3 9.5L9.5 14h-5L1 10.5v-5L4.5 2h5L13 5.5v5zM6 4h2v5H6V4zm0 6h2v2H6v-2z" fill="currentColor"></svg:path>`,
})
export class OcticonStopIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStop16Icon],svg[octicon-stop-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.47.22A.75.75 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 0 1-.22.53l-4.25 4.25A.75.75 0 0 1 11 16H5a.75.75 0 0 1-.53-.22L.22 11.53A.75.75 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4m0 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class OcticonStop16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStop24Icon],svg[octicon-stop-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 12 7m0 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" d="M7.328 1.47a.75.75 0 0 1 .53-.22h8.284c.199 0 .389.079.53.22l5.858 5.858c.141.14.22.33.22.53v8.284a.75.75 0 0 1-.22.53l-5.858 5.858a.75.75 0 0 1-.53.22H7.858a.75.75 0 0 1-.53-.22L1.47 16.672a.75.75 0 0 1-.22-.53V7.858c0-.199.079-.389.22-.53Zm.84 1.28L2.75 8.169v7.662l5.419 5.419h7.662l5.419-5.418V8.168L15.832 2.75Z"></svg:path>`,
})
export class OcticonStop24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStopwatch16Icon],svg[octicon-stopwatch-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75.75A.75.75 0 0 1 6.5 0h3a.75.75 0 0 1 0 1.5h-.75v1l-.001.041a6.7 6.7 0 0 1 3.464 1.435l.007-.006l.75-.75a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734l-.75.75l-.006.007a6.75 6.75 0 1 1-10.548 0L2.72 5.03l-.75-.75a.75.75 0 0 1 .018-1.042a.75.75 0 0 1 1.042-.018l.75.75l.007.006A6.7 6.7 0 0 1 7.25 2.541V1.5H6.5a.75.75 0 0 1-.75-.75M8 14.5a5.25 5.25 0 1 0-.001-10.501A5.25 5.25 0 0 0 8 14.5m.389-6.7l1.33-1.33a.75.75 0 1 1 1.061 1.06L9.45 8.861A1.503 1.503 0 0 1 8 10.75a1.499 1.499 0 1 1 .389-2.95"></svg:path>`,
})
export class OcticonStopwatch16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStopwatch24Icon],svg[octicon-stopwatch-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 0h3.5a.75.75 0 0 1 0 1.5h-1v1.278a9.95 9.95 0 0 1 5.636 2.276L19.72 3.72a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042l-1.315 1.316A9.96 9.96 0 0 1 22 12.75c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.96 9.96 0 0 1 2.535-6.654L3.22 4.78a.75.75 0 0 1 .018-1.042a.75.75 0 0 1 1.042-.018l1.335 1.334a9.96 9.96 0 0 1 5.635-2.276V1.5h-1a.75.75 0 0 1 0-1.5M12 21.25a8.5 8.5 0 1 0-.001-17.001A8.5 8.5 0 0 0 12 21.25m4.03-12.53a.75.75 0 0 1 0 1.06l-2.381 2.382a1.75 1.75 0 1 1-1.06-1.06l2.38-2.382a.75.75 0 0 1 1.061 0"></svg:path>`,
})
export class OcticonStopwatch24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStrikethrough16Icon],svg[octicon-strikethrough-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.055 8.5c.524.536.815 1.257.811 2.007a3.13 3.13 0 0 1-1.12 2.408C9.948 13.597 8.748 14 7.096 14c-1.706 0-3.104-.607-3.902-1.377a.751.751 0 0 1 1.042-1.079c.48.463 1.487.956 2.86.956c1.422 0 2.232-.346 2.676-.726c.435-.372.594-.839.594-1.267c0-.472-.208-.857-.647-1.197c-.448-.346-1.116-.623-1.951-.81H1.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5ZM7.581 3.25c-2.036 0-2.778 1.082-2.778 1.786q0 .082.006.157a.75.75 0 0 1-1.496.114a4 4 0 0 1-.01-.271c0-1.832 1.75-3.286 4.278-3.286c1.418 0 2.721.58 3.514 1.093a.75.75 0 1 1-.814 1.26c-.64-.414-1.662-.853-2.7-.853"></svg:path>`,
})
export class OcticonStrikethrough16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconStrikethrough24Icon],svg[octicon-strikethrough-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.533 12.5l.054.043c.93.75 1.538 1.77 1.538 3.066a4.13 4.13 0 0 1-1.479 3.177c-1.058.904-2.679 1.464-4.974 1.464c-2.35 0-4.252-.837-5.318-1.865a.75.75 0 1 1 1.042-1.08c.747.722 2.258 1.445 4.276 1.445c2.065 0 3.296-.504 3.999-1.105a2.63 2.63 0 0 0 .954-2.036c0-.764-.337-1.38-.979-1.898c-.649-.523-1.598-.931-2.76-1.211H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5ZM12.36 5C9.37 5 8.105 6.613 8.105 7.848c0 .411.072.744.193 1.02a.75.75 0 0 1-1.373.603a4 4 0 0 1-.32-1.623c0-2.363 2.271-4.348 5.755-4.348c1.931 0 3.722.794 4.814 1.5a.75.75 0 1 1-.814 1.26c-.94-.607-2.448-1.26-4-1.26"></svg:path>`,
})
export class OcticonStrikethrough24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSun16Icon],svg[octicon-sun-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-1.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0M8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0M3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8m13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8m-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13m3.536-1.464a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061M2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.75.75 0 0 1-.018 1.042a.75.75 0 0 1-1.042.018l-1.06-1.06a.75.75 0 0 1 0-1.06Z"></svg:path>`,
})
export class OcticonSun16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSun24Icon],svg[octicon-sun-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19a7 7 0 1 1 0-14a7 7 0 0 1 0 14m0-1.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 1 0 0 11m-5.657.157a.75.75 0 0 1 0 1.06l-1.768 1.768a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734l1.767-1.768a.75.75 0 0 1 1.061 0M3.515 3.515a.75.75 0 0 1 1.06 0l1.768 1.768a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L3.515 4.575a.75.75 0 0 1 0-1.06M12 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 12 0M4 12a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 4 12m8 8a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 12 20m12-8a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 24 12m-6.343 5.657a.75.75 0 0 1 1.06 0l1.768 1.768a.75.75 0 0 1-.018 1.042a.75.75 0 0 1-1.042.018l-1.768-1.767a.75.75 0 0 1 0-1.061m2.828-14.142a.75.75 0 0 1 0 1.06l-1.768 1.768a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l1.767-1.768a.75.75 0 0 1 1.061 0"></svg:path>`,
})
export class OcticonSun24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSyncIcon],svg[octicon-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10.24 7.4a4.15 4.15 0 0 1-1.2 3.6a4.346 4.346 0 0 1-5.41.54L4.8 10.4L.5 9.8l.6 4.2l1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 0 0 1.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 0 1 5.41-.54L7.2 5.6l4.3.6l-.6-4.2l-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 0 1 2.96 5z" fill="currentColor"></svg:path>`,
})
export class OcticonSyncIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSync16Icon],svg[octicon-sync-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.705 8.005a.75.75 0 0 1 .834.656a5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.5 5.5 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5"></svg:path>`,
})
export class OcticonSync16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconSync24Icon],svg[octicon-sync-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.38 8A9.5 9.5 0 0 1 12 2.5a9.5 9.5 0 0 1 9.215 7.182a.75.75 0 1 0 1.456-.364C21.473 4.539 17.15 1 12 1a11 11 0 0 0-9.5 5.452V4.75a.75.75 0 0 0-1.5 0V8.5a1 1 0 0 0 1 1h3.75a.75.75 0 0 0 0-1.5zm-.595 6.318a.75.75 0 0 0-1.455.364C2.527 19.461 6.85 23 12 23c4.052 0 7.592-2.191 9.5-5.451v1.701a.75.75 0 0 0 1.5 0V15.5a1 1 0 0 0-1-1h-3.75a.75.75 0 0 0 0 1.5h2.37A9.5 9.5 0 0 1 12 21.5c-4.446 0-8.181-3.055-9.215-7.182"></svg:path>`,
})
export class OcticonSync24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTab16Icon],svg[octicon-tab-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.78 8.53l-3.75 3.75a.749.749 0 1 1-1.06-1.06l2.469-2.47H1.75a.75.75 0 0 1 0-1.5h6.689L5.97 4.78a.749.749 0 1 1 1.06-1.06l3.75 3.75a.75.75 0 0 1 0 1.06M13 12.25v-8.5a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-1.5 0"></svg:path>`,
})
export class OcticonTab16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTab24Icon],svg[octicon-tab-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4.25a.75.75 0 0 0-1.5 0v15a.75.75 0 0 0 1.5 0zm-9.72 14.28a.75.75 0 1 1-1.06-1.06l4.97-4.97H1.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06z"></svg:path>`,
})
export class OcticonTab24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTabExternal16Icon],svg[octicon-tab-external-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 4a.25.25 0 0 0-.25.25v9a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h.75V4.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v8.25h.75a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75v-9a.25.25 0 0 0-.25-.25z"></svg:path><svg:path fill="currentColor" d="m7.97 7.97l-2.75 2.75a.75.75 0 1 0 1.06 1.06l2.75-2.75l1.543 1.543a.25.25 0 0 0 .427-.177V6.25a.25.25 0 0 0-.25-.25H6.604a.25.25 0 0 0-.177.427z"></svg:path>`,
})
export class OcticonTabExternal16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTabExternal24Icon],svg[octicon-tab-external-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.75C3 4.784 3.784 4 4.75 4h14.5c.966 0 1.75.784 1.75 1.75V18.5h2a.75.75 0 0 1 0 1.5h-2.65a.85.85 0 0 1-.85-.85V5.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v13.4c0 .47-.38.85-.85.85H1a.75.75 0 0 1 0-1.5h2z"></svg:path><svg:path fill="currentColor" d="M16.404 13.7a.75.75 0 0 1-1.29.547a690 690 0 0 0-1.92-1.976l-4.141 4.14a.75.75 0 0 1-1.061-1.06l4.14-4.14l-1.94-1.94A.75.75 0 0 1 10.703 8h4.95a.75.75 0 0 1 .75.75v4.95Z"></svg:path>`,
})
export class OcticonTabExternal24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTable16Icon],svg[octicon-table-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></svg:path>`,
})
export class OcticonTable16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTable24Icon],svg[octicon-table-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25ZM9 9v11.5h11.25a.25.25 0 0 0 .25-.25V9Zm11.5-1.5V3.75a.25.25 0 0 0-.25-.25H9v4ZM3.5 9v11.25c0 .138.112.25.25.25H7.5V9Zm4-1.5v-4H3.75a.25.25 0 0 0-.25.25V7.5Z"></svg:path>`,
})
export class OcticonTable24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTagIcon],svg[octicon-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13l-4.73 4.73l-6.13-6.15zM3.01 3h2v2H3V3h.01z" fill="currentColor"></svg:path>`,
})
export class OcticonTagIcon {
  readonly viewBox = input("0 0 15 16")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTag16Icon],svg[octicon-tag-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775m1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class OcticonTag16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTag24Icon],svg[octicon-tag-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 6.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" d="M2.5 1h8.44a1.5 1.5 0 0 1 1.06.44l10.25 10.25a1.5 1.5 0 0 1 0 2.12l-8.44 8.44a1.5 1.5 0 0 1-2.12 0L1.44 12A1.5 1.5 0 0 1 1 10.94V2.5A1.5 1.5 0 0 1 2.5 1m0 1.5v8.44l10.25 10.25l8.44-8.44L10.94 2.5Z"></svg:path>`,
})
export class OcticonTag24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTasklistIcon],svg[octicon-tasklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.41 9H7.59C7 9 7 8.59 7 8c0-.59 0-1 .59-1h7.81c.59 0 .59.41.59 1c0 .59 0 1-.59 1h.01zM9.59 4C9 4 9 3.59 9 3c0-.59 0-1 .59-1h5.81c.59 0 .59.41.59 1c0 .59 0 1-.59 1H9.59zM0 3.91l1.41-1.3L3 4.2L7.09 0L8.5 1.41L3 6.91l-3-3zM7.59 12h7.81c.59 0 .59.41.59 1c0 .59 0 1-.59 1H7.59C7 14 7 13.59 7 13c0-.59 0-1 .59-1z" fill="currentColor"></svg:path>`,
})
export class OcticonTasklistIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTasklist16Icon],svg[octicon-tasklist-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m4.655 8.595a.75.75 0 0 1 0 1.06L4.03 14.28a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215l.97.97l2.095-2.095a.75.75 0 0 1 1.06 0M9.75 2.5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5m0 5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5m0 5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5m-7.25-9v3h3v-3Z"></svg:path>`,
})
export class OcticonTasklist16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTasklist24Icon],svg[octicon-tasklist-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm1.5 4.5h4v-4h-4Zm8.25-5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm-2.97-2.53a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.97-2.97a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class OcticonTasklist24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTelescopeIcon],svg[octicon-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M8 9l3 6h-1l-2-4v5H7v-6l-2 5H4l2-5l2-1zM7 0H6v1h1V0zM5 3H4v1h1V3zM2 1H1v1h1V1zM.63 9a.52.52 0 0 0-.16.67l.55.92c.13.23.41.31.64.2l1.39-.66l-1.16-2l-1.27.86l.01.01zm7.89-5.39l-5.8 3.95L3.95 9.7l6.33-3.03l-1.77-3.06h.01zm4.22 1.28l-1.47-2.52a.51.51 0 0 0-.72-.17l-1.2.83l1.84 3.2l1.33-.64c.27-.13.36-.44.22-.7z" fill="currentColor"></svg:path>`,
})
export class OcticonTelescopeIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTelescope16Icon],svg[octicon-telescope-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.184 1.143l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.75 1.75 0 0 1 2.502.57m-4.709 9.32l2.644 3.863a.75.75 0 1 1-1.238.848L9 12.424v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.75.75 0 0 1 .293-.253l1.809-.87a.75.75 0 0 1 .944.252m-.04-6.543l-4.97 3.39l.942 1.63l5.42-2.61Zm3.091-2.108h.001l-1.85 1.26l1.505 2.605l2.016-.97a.25.25 0 0 0 .13-.151a.25.25 0 0 0-.022-.199l-1.422-2.464a.25.25 0 0 0-.161-.119a.25.25 0 0 0-.197.038M1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769l-.83-1.436z"></svg:path>`,
})
export class OcticonTelescope16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTelescope24Icon],svg[octicon-telescope-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.408 15.13a2 2 0 0 1 .59-2.642L17.038 1.33a2 2 0 0 1 2.85.602l2.828 4.644a2 2 0 0 1-.851 2.847l-17.762 8.43a2 2 0 0 1-2.59-.807Zm5.263-4.066l1.987 3.44l8.712-4.135l-2.857-4.76Zm12.06-1.34l.001-.001l3.49-1.656a.5.5 0 0 0 .212-.712l-2.826-4.644a.503.503 0 0 0-.713-.151l-3.148 2.19Zm-13.295 2.2L1.854 13.72a.5.5 0 0 0-.147.66l1.105 1.915a.5.5 0 0 0 .648.201l2.838-1.347ZM17.155 22.87a.75.75 0 0 0 .226-1.036l-4-6.239a.75.75 0 0 0-.941-.278l-2.75 1.25a.75.75 0 0 0-.318.274l-3.25 4.989a.75.75 0 0 0 1.256.819l3.131-4.806l.51-.232v5.64a.75.75 0 1 0 1.5 0v-6.22l3.6 5.613a.75.75 0 0 0 1.036.226"></svg:path>`,
})
export class OcticonTelescope24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTelescopeFill16Icon],svg[octicon-telescope-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.905.42a1.5 1.5 0 0 1 2.144.49l1.692 2.93a1.5 1.5 0 0 1-.649 2.102L2.895 11.815a1.5 1.5 0 0 1-1.95-.602l-.68-1.176a1.5 1.5 0 0 1 .455-1.99L11.905.422Zm-3.374 9.79a.75.75 0 0 1 .944.253l2.644 3.864a.751.751 0 0 1-1.238.847L9 12.424v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.048-2.992a.75.75 0 0 1 .293-.252zm2.476-3.965v-.001l1.356-.653l-1.52-2.631l-1.243.848ZM3.279 8.119l.835 1.445l1.355-.653l-.947-1.64Z"></svg:path>`,
})
export class OcticonTelescopeFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTelescopeFill24Icon],svg[octicon-telescope-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.155 22.87a.75.75 0 0 0 .226-1.036l-4-6.239a.75.75 0 0 0-.941-.277l-2.75 1.25a.75.75 0 0 0-.318.273l-3.25 4.989a.75.75 0 0 0 1.256.819l3.131-4.806l.51-.232v5.64a.75.75 0 1 0 1.5 0v-6.22l3.6 5.613a.75.75 0 0 0 1.036.226M.408 15.13a2 2 0 0 1 .59-2.642L17.038 1.33a2 2 0 0 1 2.85.602l2.828 4.644a2 2 0 0 1-.851 2.847l-17.762 8.43a2 2 0 0 1-2.59-.807Zm13.105-9.521l2.857 4.76l1.361-.646l-2.984-4.973Zm-7.842 5.455l-1.235.86l1.862 3.225l1.36-.645Z"></svg:path>`,
})
export class OcticonTelescopeFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTerminalIcon],svg[octicon-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 10h4v1H7v-1zm-3 1l3-3l-3-3l-.75.75L5.5 8l-2.25 2.25L4 11zm10-8v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v10h12V3z" fill="currentColor"></svg:path>`,
})
export class OcticonTerminalIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTerminal16Icon],svg[octicon-terminal-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25ZM7.25 8a.75.75 0 0 1-.22.53l-2.25 2.25a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L5.44 8L3.72 6.28a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215l2.25 2.25c.141.14.22.331.22.53m1.5 1.5h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class OcticonTerminal16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTerminal24Icon],svg[octicon-terminal-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12L5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53m2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class OcticonTerminal24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTextSizeIcon],svg[octicon-text-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonTextSizeIcon {
  readonly viewBox = input("0 0 18 16")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThreeBarsIcon],svg[octicon-three-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z" fill="currentColor"></svg:path>`,
})
export class OcticonThreeBarsIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThreeBars16Icon],svg[octicon-three-bars-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75m0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75M1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class OcticonThreeBars16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThreeBars24Icon],svg[octicon-three-bars-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 5.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class OcticonThreeBars24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThumbsdownIcon],svg[octicon-thumbsdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.98 7.83l-.97-5.95C14.84.5 13.13 0 12 0H5.69c-.2 0-.38.05-.53.14L3.72 1H2C.94 1 0 1.94 0 3v4c0 1.06.94 2.02 2 2h2c.91 0 1.39.45 2.39 1.55c.91 1 .88 1.8.63 3.27c-.08.5.06 1 .42 1.42c.39.47.98.76 1.56.76c1.83 0 3-3.71 3-5.01l-.02-.98h2.04c1.16 0 1.95-.8 1.98-1.97c0-.11-.02-.21-.02-.21zm-1.97 1.19h-1.99c-.7 0-1.03.28-1.03.97l.03 1.03c0 1.27-1.17 4-2 4c-.5 0-1.08-.5-1-1c.25-1.58.34-2.78-.89-4.14C6.11 8.75 5.36 8 4 8V2l1.67-1H12c.73 0 1.95.31 2 1l.02.02l1 6c-.03.64-.38 1-1 1h-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonThumbsdownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThumbsdown16Icon],svg[octicon-thumbsdown-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.653 15.369a.75.75 0 0 1-.776.371l-.238-.04a3.25 3.25 0 0 1-2.591-4.099L4.506 10h-.665A3.25 3.25 0 0 1 .723 5.833l1.135-3.859A2.75 2.75 0 0 1 4.482 0H9.43c.78.003 1.538.25 2.168.702A1.75 1.75 0 0 1 12.989 0h1.272A1.75 1.75 0 0 1 16 1.75v6.5A1.75 1.75 0 0 1 14.25 10h-3.417a.25.25 0 0 0-.217.127ZM11.25 2.351l-.396-.33a2.25 2.25 0 0 0-1.44-.521H4.496a1.25 1.25 0 0 0-1.199.897L2.162 6.256A1.75 1.75 0 0 0 3.841 8.5H5.5a.75.75 0 0 1 .721.956l-.731 2.558a1.75 1.75 0 0 0 1.127 2.14L9.31 9.389a1.75 1.75 0 0 1 1.523-.889h.417Zm1.5 6.149h1.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25H13a.25.25 0 0 0-.25.25Z"></svg:path>`,
})
export class OcticonThumbsdown16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThumbsdown24Icon],svg[octicon-thumbsdown-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.651 21.622a.75.75 0 0 1-.808.361l-.127-.027a3.875 3.875 0 0 1-2.879-4.97L7.473 15H6.336c-2.645 0-4.513-2.591-3.676-5.1l1.559-4.678A3.25 3.25 0 0 1 7.302 3h5.289c1.031 0 2.029.354 2.828.999A1.75 1.75 0 0 1 17 3h2.25c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 19.25 15h-4.67a.25.25 0 0 0-.217.126zM15.25 5.84l-.684-.598a3 3 0 0 0-1.975-.742H7.302a1.75 1.75 0 0 0-1.66 1.197l-1.559 4.677A2.375 2.375 0 0 0 6.336 13.5H8.5a.75.75 0 0 1 .714.979l-.948 2.964a2.375 2.375 0 0 0 1.373 2.927l3.422-5.988a1.75 1.75 0 0 1 1.519-.882h.67zm1.5 7.66h2.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H17a.25.25 0 0 0-.25.25z"></svg:path>`,
})
export class OcticonThumbsdown24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThumbsupIcon],svg[octicon-thumbsup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.98 8.17l-.97 5.95C14.84 15.5 13.13 16 12 16H5.69c-.2 0-.38-.05-.53-.14L3.72 15H2c-1.06 0-2-.94-2-2V9c0-1.06.94-2.02 2-2h2c.91 0 1.39-.45 2.39-1.55c.91-1 .88-1.8.63-3.27c-.08-.5.06-1 .42-1.42C7.83.29 8.42 0 9 0c1.83 0 3 3.71 3 5.01l-.02.98h2.04c1.16 0 1.95.8 1.98 1.97c0 .11-.02.21-.02.21zm-1.97-1.19h-1.99c-.7 0-1.03-.28-1.03-.97l.03-1.03c0-1.27-1.17-4-2-4c-.5 0-1.08.5-1 1c.25 1.58.34 2.78-.89 4.14C6.11 7.25 5.36 8 4 8v6l1.67 1H12c.73 0 1.95-.31 2-1l.02-.02l1-6c-.03-.64-.38-1-1-1h-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonThumbsupIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThumbsup16Icon],svg[octicon-thumbsup-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.347.631A.75.75 0 0 1 9.123.26l.238.04a3.25 3.25 0 0 1 2.591 4.098L11.494 6h.665a3.25 3.25 0 0 1 3.118 4.167l-1.135 3.859A2.75 2.75 0 0 1 11.503 16H6.586a3.75 3.75 0 0 1-2.184-.702A1.75 1.75 0 0 1 3 16H1.75A1.75 1.75 0 0 1 0 14.25v-6.5C0 6.784.784 6 1.75 6h3.417a.25.25 0 0 0 .217-.127ZM4.75 13.649l.396.33c.404.337.914.521 1.44.521h4.917a1.25 1.25 0 0 0 1.2-.897l1.135-3.859A1.75 1.75 0 0 0 12.159 7.5H10.5a.75.75 0 0 1-.721-.956l.731-2.558a1.75 1.75 0 0 0-1.127-2.14L6.69 6.611a1.75 1.75 0 0 1-1.523.889H4.75ZM3.25 7.5h-1.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H3a.25.25 0 0 0 .25-.25Z"></svg:path>`,
})
export class OcticonThumbsup16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconThumbsup24Icon],svg[octicon-thumbsup-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.349 2.378a.75.75 0 0 1 .808-.361l.127.027a3.875 3.875 0 0 1 2.879 4.97L16.527 9h1.137c2.645 0 4.513 2.591 3.676 5.1l-1.559 4.678A3.25 3.25 0 0 1 16.698 21h-5.289a4.5 4.5 0 0 1-2.828-.999A1.75 1.75 0 0 1 7 21H4.75A1.75 1.75 0 0 1 3 19.25v-8.5C3 9.784 3.784 9 4.75 9h4.67a.25.25 0 0 0 .217-.126zM8.75 18.16l.683.598a3 3 0 0 0 1.976.742h5.289a1.75 1.75 0 0 0 1.66-1.197l1.559-4.677a2.375 2.375 0 0 0-2.253-3.126H15.5a.75.75 0 0 1-.714-.979l.948-2.964a2.375 2.375 0 0 0-1.373-2.927l-3.422 5.988a1.75 1.75 0 0 1-1.519.882h-.67zm-1.5-7.66h-2.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25H7a.25.25 0 0 0 .25-.25z"></svg:path>`,
})
export class OcticonThumbsup24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconToolsIcon],svg[octicon-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M4.48 7.27c.26.26 1.28 1.33 1.28 1.33l.56-.58l-.88-.91l1.69-1.8s-.76-.74-.43-.45c.32-1.19.03-2.51-.87-3.44C4.93.5 3.66.2 2.52.51l1.93 2l-.51 1.96l-1.89.52l-1.93-2C-.19 4.17.1 5.48 1 6.4c.94.98 2.29 1.26 3.48.87zm6.44 1.94l-2.33 2.3l3.84 3.98c.31.33.73.49 1.14.49c.41 0 .82-.16 1.14-.49c.63-.65.63-1.7 0-2.35l-3.79-3.93zM16 2.53L13.55 0L6.33 7.46l.88.91l-4.31 4.46l-.99.53l-1.39 2.27l.35.37l2.2-1.44l.51-1.02L7.9 9.08l.88.91L16 2.53z" fill="currentColor"></svg:path>`,
})
export class OcticonToolsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTools16Icon],svg[octicon-tools-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.433 2.304A4.49 4.49 0 0 0 3.5 6c0 1.598.832 3.002 2.09 3.802c.518.328.929.923.902 1.64v.008l-.164 3.337a.75.75 0 1 1-1.498-.073l.163-3.33c.002-.085-.05-.216-.207-.316A6 6 0 0 1 2 6a6 6 0 0 1 2.567-4.92a1.48 1.48 0 0 1 1.673-.04c.462.296.76.827.76 1.423v2.82c0 .082.041.16.11.206l.75.51a.25.25 0 0 0 .28 0l.75-.51A.25.25 0 0 0 9 5.282V2.463c0-.596.298-1.127.76-1.423a1.48 1.48 0 0 1 1.673.04A6 6 0 0 1 14 6a6 6 0 0 1-2.786 5.068c-.157.1-.209.23-.207.315l.163 3.33a.752.752 0 0 1-1.094.714a.75.75 0 0 1-.404-.64l-.164-3.345c-.027-.717.384-1.312.902-1.64A4.5 4.5 0 0 0 12.5 6a4.49 4.49 0 0 0-1.933-3.696c-.024.017-.067.067-.067.16v2.818a1.75 1.75 0 0 1-.767 1.448l-.75.51a1.75 1.75 0 0 1-1.966 0l-.75-.51A1.75 1.75 0 0 1 5.5 5.282V2.463c0-.092-.043-.142-.067-.159"></svg:path>`,
})
export class OcticonTools16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTools24Icon],svg[octicon-tools-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.875 2.292a.1.1 0 0 0-.032.018A7.24 7.24 0 0 0 4.75 8.25a7.25 7.25 0 0 0 3.654 6.297c.57.327.982.955.941 1.682v.002l-.317 6.058a.75.75 0 1 1-1.498-.078l.317-6.062v-.004c.006-.09-.047-.215-.188-.296A8.75 8.75 0 0 1 3.25 8.25a8.74 8.74 0 0 1 3.732-7.169a1.55 1.55 0 0 1 1.709-.064c.484.292.809.835.809 1.46v4.714a.25.25 0 0 0 .119.213l2.25 1.385c.08.05.182.05.262 0l2.25-1.385a.25.25 0 0 0 .119-.213V2.478c0-.626.325-1.169.81-1.461a1.55 1.55 0 0 1 1.708.064a8.74 8.74 0 0 1 3.732 7.17a8.75 8.75 0 0 1-4.41 7.598c-.14.081-.193.206-.188.296v.004l.318 6.062a.75.75 0 1 1-1.498.078l-.317-6.058v-.002c-.041-.727.37-1.355.94-1.682A7.25 7.25 0 0 0 19.25 8.25a7.24 7.24 0 0 0-3.093-5.94a.1.1 0 0 0-.032-.018l-.01-.001c-.003 0-.014 0-.031.01c-.036.022-.084.079-.084.177V7.19c0 .608-.315 1.172-.833 1.49l-2.25 1.385a1.75 1.75 0 0 1-1.834 0l-2.25-1.384A1.75 1.75 0 0 1 8 7.192V2.477c0-.098-.048-.155-.084-.176a.1.1 0 0 0-.031-.011z"></svg:path>`,
})
export class OcticonTools24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTrackedByClosedCompleted16Icon],svg[octicon-tracked-by-closed-completed-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 8a6.5 6.5 0 1 1 13 0A.75.75 0 0 0 16 8a8 8 0 1 0-8 8a.75.75 0 0 0 0-1.5A6.5 6.5 0 0 1 1.5 8"></svg:path><svg:path fill="currentColor" d="m8.677 12.427l2.896 2.896a.25.25 0 0 0 .427-.177V13h3.25a.75.75 0 0 0 0-1.5H12V9.354a.25.25 0 0 0-.427-.177l-2.896 2.896a.25.25 0 0 0 0 .354M11.28 6.78a.749.749 0 1 0-1.06-1.06L7.25 8.689L5.78 7.22a.749.749 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class OcticonTrackedByClosedCompleted16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTrackedByClosedCompleted24Icon],svg[octicon-tracked-by-closed-completed-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5a.75.75 0 0 1 0 1.5C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a.75.75 0 0 1-1.5 0A9.5 9.5 0 0 0 12 2.5"></svg:path><svg:path fill="currentColor" d="m13.759 17.48l3.728 3.314a.308.308 0 0 0 .513-.23V18h4.25a.75.75 0 0 0 0-1.5H18v-2.564a.308.308 0 0 0-.513-.23l-3.728 3.314a.307.307 0 0 0 0 .46m3.521-8.2a.749.749 0 1 0-1.06-1.06l-5.97 5.969l-2.47-2.469a.749.749 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class OcticonTrackedByClosedCompleted24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTrackedByClosedNotPlanned16Icon],svg[octicon-tracked-by-closed-not-planned-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 8a6.5 6.5 0 1 1 13 0A.75.75 0 0 0 16 8a8 8 0 1 0-8 8a.75.75 0 0 0 0-1.5A6.5 6.5 0 0 1 1.5 8"></svg:path><svg:path fill="currentColor" d="m8.677 12.427l2.896 2.896a.25.25 0 0 0 .427-.177V13h3.25a.75.75 0 0 0 0-1.5H12V9.354a.25.25 0 0 0-.427-.177l-2.896 2.896a.25.25 0 0 0 0 .354M11.28 5.78a.749.749 0 1 0-1.06-1.06l-5.5 5.5a.749.749 0 1 0 1.06 1.06z"></svg:path>`,
})
export class OcticonTrackedByClosedNotPlanned16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTrackedByClosedNotPlanned24Icon],svg[octicon-tracked-by-closed-not-planned-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5a.75.75 0 0 1 0 1.5C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11a.75.75 0 0 1-1.5 0A9.5 9.5 0 0 0 12 2.5"></svg:path><svg:path fill="currentColor" d="m13.759 17.48l3.728 3.314a.308.308 0 0 0 .513-.23V18h4.25a.75.75 0 0 0 0-1.5H18v-2.564a.308.308 0 0 0-.513-.23l-3.728 3.314a.307.307 0 0 0 0 .46m3.521-9.7a.749.749 0 1 0-1.06-1.06l-9.5 9.5a.749.749 0 1 0 1.06 1.06z"></svg:path>`,
})
export class OcticonTrackedByClosedNotPlanned24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTrash16Icon],svg[octicon-trash-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75M4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.75 1.75 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15M6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25"></svg:path>`,
})
export class OcticonTrash16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTrash24Icon],svg[octicon-trash-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75m-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25M4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226z"></svg:path><svg:path fill="currentColor" d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"></svg:path>`,
})
export class OcticonTrash24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTrashcanIcon],svg[octicon-trashcan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z" fill="currentColor"></svg:path>`,
})
export class OcticonTrashcanIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleDownIcon],svg[octicon-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 5l6 6l6-6H0z" fill="currentColor"></svg:path>`,
})
export class OcticonTriangleDownIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleDown16Icon],svg[octicon-triangle-down-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427"></svg:path>`,
})
export class OcticonTriangleDown16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleDown24Icon],svg[octicon-triangle-down-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.646 15.146L5.854 9.354a.5.5 0 0 1 .353-.854h11.586a.5.5 0 0 1 .353.854l-5.793 5.792a.5.5 0 0 1-.707 0"></svg:path>`,
})
export class OcticonTriangleDown24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleLeftIcon],svg[octicon-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 2L0 8l6 6V2z" fill="currentColor"></svg:path>`,
})
export class OcticonTriangleLeftIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleLeft16Icon],svg[octicon-triangle-left-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.573 4.427L6.177 7.823a.25.25 0 0 0 0 .354l3.396 3.396a.25.25 0 0 0 .427-.177V4.604a.25.25 0 0 0-.427-.177"></svg:path>`,
})
export class OcticonTriangleLeft16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleLeft24Icon],svg[octicon-triangle-left-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.854 11.646l5.792-5.792a.5.5 0 0 1 .854.353v11.586a.5.5 0 0 1-.854.353l-5.792-5.792a.5.5 0 0 1 0-.708"></svg:path>`,
})
export class OcticonTriangleLeft24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleRightIcon],svg[octicon-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M0 14l6-6l-6-6v12z" fill="currentColor"></svg:path>`,
})
export class OcticonTriangleRightIcon {
  readonly viewBox = input("0 0 6 16")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleRight16Icon],svg[octicon-triangle-right-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.427 4.427l3.396 3.396a.25.25 0 0 1 0 .354l-3.396 3.396A.25.25 0 0 1 6 11.396V4.604a.25.25 0 0 1 .427-.177"></svg:path>`,
})
export class OcticonTriangleRight16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleRight24Icon],svg[octicon-triangle-right-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.146 12.354l-5.792 5.792a.5.5 0 0 1-.854-.353V6.207a.5.5 0 0 1 .854-.353l5.792 5.792a.5.5 0 0 1 0 .708"></svg:path>`,
})
export class OcticonTriangleRight24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleUpIcon],svg[octicon-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 11L6 5l-6 6h12z" fill="currentColor"></svg:path>`,
})
export class OcticonTriangleUpIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleUp16Icon],svg[octicon-triangle-up-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.427 9.573l3.396-3.396a.25.25 0 0 1 .354 0l3.396 3.396a.25.25 0 0 1-.177.427H4.604a.25.25 0 0 1-.177-.427"></svg:path>`,
})
export class OcticonTriangleUp16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTriangleUp24Icon],svg[octicon-triangle-up-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.354 8.854l5.792 5.792a.5.5 0 0 1-.353.854H6.207a.5.5 0 0 1-.353-.854l5.792-5.792a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class OcticonTriangleUp24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTrophy16Icon],svg[octicon-trophy-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.217 6.962A3.75 3.75 0 0 1 0 3.25v-.5C0 1.784.784 1 1.75 1h1.356c.228-.585.796-1 1.462-1h6.864c.647 0 1.227.397 1.462 1h1.356c.966 0 1.75.784 1.75 1.75v.5a3.75 3.75 0 0 1-3.217 3.712a5.01 5.01 0 0 1-2.771 3.117l.144 1.446c.005.05.03.12.114.204c.086.087.217.17.373.227c.283.103.618.274.89.568c.285.31.467.723.467 1.226v.75h1.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H4v-.75c0-.503.182-.916.468-1.226c.27-.294.606-.465.889-.568q.21-.074.373-.227c.084-.085.109-.153.114-.204l.144-1.446a5 5 0 0 1-2.77-3.117ZM4.5 1.568V5.5a3.5 3.5 0 1 0 7 0V1.568a.07.07 0 0 0-.068-.068H4.568a.07.07 0 0 0-.068.068m2.957 8.902l-.12 1.204c-.093.925-.858 1.47-1.467 1.691a.8.8 0 0 0-.3.176c-.037.04-.07.093-.07.21v.75h5v-.75c0-.117-.033-.17-.07-.21a.8.8 0 0 0-.3-.176c-.609-.221-1.374-.766-1.466-1.69l-.12-1.204a5 5 0 0 1-1.087 0ZM13 2.5v2.872a2.25 2.25 0 0 0 1.5-2.122v-.5a.25.25 0 0 0-.25-.25zm-10 0H1.75a.25.25 0 0 0-.25.25v.5c0 .98.626 1.813 1.5 2.122Z"></svg:path>`,
})
export class OcticonTrophy16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTrophy24Icon],svg[octicon-trophy-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.09 10.121A5.25 5.25 0 0 1 1 5V3.75C1 2.784 1.784 2 2.75 2h2.364c.236-.586.81-1 1.48-1h10.812c.67 0 1.244.414 1.48 1h2.489c.966 0 1.75.784 1.75 1.75V5a5.25 5.25 0 0 1-4.219 5.149a7.01 7.01 0 0 1-4.644 5.478l.231 3.003l.034.031c.079.065.303.203.836.282c.838.124 1.637.81 1.637 1.807v.75h2.25a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5H7v-.75c0-.996.8-1.683 1.637-1.807c.533-.08.757-.217.836-.282l.034-.031l.231-3.003A7.01 7.01 0 0 1 5.09 10.12ZM6.5 2.594V9a5.5 5.5 0 1 0 11 0V2.594a.094.094 0 0 0-.094-.094H6.594a.094.094 0 0 0-.094.094m4.717 13.363l-.215 2.793l-.001.021l-.003.043a1 1 0 0 1-.022.147c-.05.237-.194.567-.553.86c-.348.286-.853.5-1.566.605a.48.48 0 0 0-.274.136a.26.26 0 0 0-.083.188v.75h7v-.75a.26.26 0 0 0-.083-.188a.48.48 0 0 0-.274-.136c-.713-.105-1.218-.32-1.567-.604c-.358-.294-.502-.624-.552-.86a1 1 0 0 1-.025-.19l-.001-.022l-.215-2.793a7 7 0 0 1-1.566 0M19 8.578A3.75 3.75 0 0 0 21.625 5V3.75a.25.25 0 0 0-.25-.25H19ZM5 3.5H2.75a.25.25 0 0 0-.25.25V5A3.75 3.75 0 0 0 5 8.537Z"></svg:path>`,
})
export class OcticonTrophy24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTypography16Icon],svg[octicon-typography-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.71 10H2.332l-.874 2.498a.75.75 0 0 1-1.415-.496l3.39-9.688a1.217 1.217 0 0 1 2.302.018l3.227 9.681a.75.75 0 0 1-1.423.474Zm3.13-4.358C10.53 4.374 11.87 4 13 4c1.5 0 3 .939 3 2.601v5.649a.75.75 0 0 1-1.448.275C13.995 12.82 13.3 13 12.5 13c-.77 0-1.514-.231-2.078-.709c-.577-.488-.922-1.199-.922-2.041c0-.694.265-1.411.887-1.944C11 7.78 11.88 7.5 13 7.5h1.5v-.899c0-.54-.5-1.101-1.5-1.101c-.869 0-1.528.282-1.84.858a.75.75 0 1 1-1.32-.716M6.21 8.5L4.574 3.594L2.857 8.5Zm8.29.5H13c-.881 0-1.375.22-1.637.444c-.253.217-.363.5-.363.806c0 .408.155.697.39.896c.249.21.63.354 1.11.354c.732 0 1.26-.209 1.588-.449c.35-.257.412-.495.412-.551Z"></svg:path>`,
})
export class OcticonTypography16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconTypography24Icon],svg[octicon-typography-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.414 15H3.586l-1.631 4.505a.75.75 0 1 1-1.41-.51l5.08-14.03a1.463 1.463 0 0 1 2.75 0l5.08 14.03a.75.75 0 1 1-1.411.51Zm4.532-5.098c.913-1.683 2.703-2.205 4.284-2.205c1.047 0 2.084.312 2.878.885c.801.577 1.392 1.455 1.392 2.548v8.12a.75.75 0 0 1-1.5 0v-.06l-.044.025c-.893.52-2.096.785-3.451.785c-1.051 0-2.048-.315-2.795-.948c-.76-.643-1.217-1.578-1.217-2.702c0-.919.349-1.861 1.168-2.563c.81-.694 2-1.087 3.569-1.087H22v-1.57c0-.503-.263-.967-.769-1.332c-.513-.37-1.235-.6-2.001-.6c-1.319 0-2.429.43-2.966 1.42a.75.75 0 0 1-1.318-.716M9.87 13.5L7 5.572L4.13 13.5Zm12.13.7h-2.77c-1.331 0-2.134.333-2.593.726a1.82 1.82 0 0 0-.644 1.424c0 .689.267 1.203.686 1.557c.43.365 1.065.593 1.826.593c1.183 0 2.102-.235 2.697-.581c.582-.34.798-.74.798-1.134Z"></svg:path>`,
})
export class OcticonTypography24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUndo16Icon],svg[octicon-undo-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.22 6.28a.75.75 0 0 1 0-1.06l3.5-3.5a.749.749 0 1 1 1.06 1.06L3.561 5h7.188l.001.007L10.749 5q.088 0 .171.019A4.501 4.501 0 0 1 10.5 14H8.796a.75.75 0 0 1 0-1.5H10.5a3 3 0 1 0 0-6H3.561L5.78 8.72a.749.749 0 1 1-1.06 1.06z"></svg:path>`,
})
export class OcticonUndo16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUndo24Icon],svg[octicon-undo-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.53 2.22a.75.75 0 0 0-1.06 0L2.22 8.47a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 0 0 1.06-1.06L4.56 9.75H16c.797 0 2.008.245 3 .959c.952.686 1.75 1.835 1.75 3.791s-.798 3.105-1.75 3.791c-.992.714-2.203.959-3 .959h-3a.75.75 0 0 0 0 1.5h3c1.037 0 2.575-.305 3.876-1.241c1.339-.964 2.374-2.565 2.374-5.009s-1.035-4.045-2.374-5.009C18.575 8.555 17.036 8.25 16 8.25H4.56l4.97-4.97a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class OcticonUndo24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnfoldIcon],svg[octicon-unfold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0L4 3h2v3zm2 3H6v3H4l3 3l3-3H8V9z" fill="currentColor"></svg:path>`,
})
export class OcticonUnfoldIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnfold16Icon],svg[octicon-unfold-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.177.677l2.896 2.896a.25.25 0 0 1-.177.427H8.75v1.25a.75.75 0 0 1-1.5 0V4H5.104a.25.25 0 0 1-.177-.427L7.823.677a.25.25 0 0 1 .354 0M7.25 10.75a.75.75 0 0 1 1.5 0V12h2.146a.25.25 0 0 1 .177.427l-2.896 2.896a.25.25 0 0 1-.354 0l-2.896-2.896A.25.25 0 0 1 5.104 12H7.25zm-5-2a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5zM6 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 6 8m2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5zM12 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 12 8m2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5z"></svg:path>`,
})
export class OcticonUnfold16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnfold24Icon],svg[octicon-unfold-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23a.75.75 0 0 1-.53-.22l-3.25-3.25a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215L12 21.19l2.72-2.72a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734l-3.25 3.25A.75.75 0 0 1 12 23"></svg:path><svg:path fill="currentColor" d="M11.47 1.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1-.018 1.042a.75.75 0 0 1-1.042.018L12 2.81L9.28 5.53a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042ZM12 22.25a.75.75 0 0 1-.75-.75v-5.75a.75.75 0 0 1 1.5 0v5.75a.75.75 0 0 1-.75.75M2.75 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M12 1.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6A.75.75 0 0 1 12 1.5"></svg:path>`,
})
export class OcticonUnfold24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnlink16Icon],svg[octicon-unlink-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.914 5.914a2 2 0 0 0-2.828-2.828l-.837.837a.75.75 0 1 1-1.06-1.061l.836-.837a3.5 3.5 0 1 1 4.95 4.95l-.195.194a.75.75 0 0 1-1.06-1.06zm-1.87 3.482a1 1 0 0 1-.07.079c-.63.63-1.468 1.108-2.343 1.263c-.89.159-1.86-.017-2.606-.763a.75.75 0 1 1 1.06-1.06c.329.327.767.438 1.284.347c.493-.088 1.018-.36 1.445-.752l-1.247-.897l-.01-.008l-.295-.212c-.94-.597-1.984-.499-2.676.193l-2.5 2.5a2 2 0 1 0 2.828 2.828l.837-.836a.75.75 0 0 1 1.06 1.06l-.836.837a3.5 3.5 0 0 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 1.354-.848L2.312 3.109a.75.75 0 0 1 .876-1.218l5.93 4.27q.172.112.335.24l6.235 4.49a.75.75 0 0 1-.876 1.218z"></svg:path>`,
})
export class OcticonUnlink16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnlink24Icon],svg[octicon-unlink-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.347 3.653a3.936 3.936 0 0 0-5.567 0l-1.75 1.75a.75.75 0 0 1-1.06-1.06l1.75-1.75a5.436 5.436 0 0 1 7.688 7.687l-1.564 1.564a.75.75 0 0 1-1.06-1.06l1.563-1.564a3.936 3.936 0 0 0 0-5.567M9.786 12.369a.75.75 0 0 1 1.053.125q.143.183.314.353c1.348 1.348 3.386 1.587 4.89.658l-3.922-2.858l-.057-.037c-1.419-1.013-3.454-.787-4.784.543L3.653 14.78a3.936 3.936 0 0 0 5.567 5.567l3-3a.75.75 0 1 1 1.06 1.06l-3 3a5.436 5.436 0 1 1-7.688-7.687l3.628-3.628a5.5 5.5 0 0 1 3.014-1.547l-7.05-5.136a.75.75 0 0 1 .883-1.213l20.25 14.75a.75.75 0 0 1-.884 1.213l-5.109-3.722c-2.155 1.709-5.278 1.425-7.232-.53a6 6 0 0 1-.431-.485a.75.75 0 0 1 .125-1.053"></svg:path>`,
})
export class OcticonUnlink24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnlock16Icon],svg[octicon-unlock-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4v2h7A1.5 1.5 0 0 1 14 7.5v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5v-6A1.5 1.5 0 0 1 3.499 6H4V4a4 4 0 0 1 7.371-2.154a.75.75 0 0 1-1.264.808A2.5 2.5 0 0 0 5.5 4m-2 3.5v6h9v-6z"></svg:path>`,
})
export class OcticonUnlock16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnlock24Icon],svg[octicon-unlock-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 7.25V9h11a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9H6V7.25C6 3.845 8.503 1 12 1c2.792 0 4.971 1.825 5.718 4.31a.75.75 0 1 1-1.436.432C15.71 3.84 14.079 2.5 12 2.5c-2.578 0-4.5 2.08-4.5 4.75m-3 4.25v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1"></svg:path>`,
})
export class OcticonUnlock24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnmuteIcon],svg[octicon-unmute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M12 8.02c0 1.09-.45 2.09-1.17 2.83l-.67-.67c.55-.56.89-1.31.89-2.16c0-.85-.34-1.61-.89-2.16l.67-.67A3.99 3.99 0 0 1 12 8.02zM7.72 2.28L4 6H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2l3.72 3.72c.47.47 1.28.14 1.28-.53V2.81c0-.67-.81-1-1.28-.53zm5.94.08l-.67.67a6.996 6.996 0 0 1 2.06 4.98c0 1.94-.78 3.7-2.06 4.98l.67.67A7.973 7.973 0 0 0 16 8c0-2.22-.89-4.22-2.34-5.66v.02zm-1.41 1.41l-.69.67a5.05 5.05 0 0 1 1.48 3.58c0 1.39-.56 2.66-1.48 3.56l.69.67A5.971 5.971 0 0 0 14 8.02c0-1.65-.67-3.16-1.75-4.25z" fill="currentColor"></svg:path>`,
})
export class OcticonUnmuteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnmute16Icon],svg[octicon-unmute-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.563 2.069A.75.75 0 0 1 8 2.75v10.5a.751.751 0 0 1-1.238.57L3.472 11H1.75A1.75 1.75 0 0 1 0 9.25v-2.5C0 5.784.784 5 1.75 5h1.723l3.289-2.82a.75.75 0 0 1 .801-.111M6.5 4.38L4.238 6.319a.75.75 0 0 1-.488.181h-2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2c.179 0 .352.064.488.18L6.5 11.62Zm6.096-2.038a.75.75 0 0 1 1.06 0a8 8 0 0 1 0 11.314a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042a6.5 6.5 0 0 0 0-9.193a.75.75 0 0 1 0-1.06Zm-1.06 2.121l-.001.001a5 5 0 0 1 0 7.07a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734a3.5 3.5 0 0 0 0-4.95a.75.75 0 1 1 1.061-1.061"></svg:path>`,
})
export class OcticonUnmute16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnmute24Icon],svg[octicon-unmute-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.553 3.064A.75.75 0 0 1 12 3.75v16.5a.75.75 0 0 1-1.255.555L5.46 16H2.75A1.75 1.75 0 0 1 1 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 0 1 .808-.13ZM10.5 5.445l-4.245 3.86a.75.75 0 0 1-.505.195h-3a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h3c.187 0 .367.069.505.195l4.245 3.86Zm8.218-1.223a.75.75 0 0 1 1.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 0 1-1.06-1.06a9.5 9.5 0 0 0 0-13.436a.75.75 0 0 1 0-1.06"></svg:path><svg:path fill="currentColor" d="M16.243 7.757a.75.75 0 1 0-1.061 1.061a4.5 4.5 0 0 1 0 6.364a.75.75 0 0 0 1.06 1.06a6 6 0 0 0 0-8.485Z"></svg:path>`,
})
export class OcticonUnmute24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnread16Icon],svg[octicon-unread-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 3.5H1.75a.25.25 0 0 0-.25.25v.32L8 7.88l3.02-1.77a.75.75 0 0 1 .758 1.295L8.379 9.397a.75.75 0 0 1-.758 0L1.5 5.809v6.441c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-4.5a.75.75 0 0 1 1.5 0v4.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2h8.75a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill="currentColor" d="M14 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class OcticonUnread16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnread24Icon],svg[octicon-unread-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 4.5a.25.25 0 0 0-.25.25v.852l10.36 7a.25.25 0 0 0 .28 0l5.69-3.845A.75.75 0 0 1 18.67 10l-5.69 3.845c-.592.4-1.368.4-1.96 0L1.5 7.412V19.25c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25v-8.5a.75.75 0 0 1 1.5 0v8.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.784.784 3 1.75 3h15.5a.75.75 0 0 1 0 1.5z"></svg:path><svg:path fill="currentColor" d="M24 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path>`,
})
export class OcticonUnread24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnverifiedIcon],svg[octicon-unverified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM9 11.5c0 .28-.22.5-.5.5h-1c-.27 0-.5-.22-.5-.5v-1c0-.28.23-.5.5-.5h1c.28 0 .5.22.5.5v1zm1.56-4.89c-.06.17-.17.33-.3.47c-.13.16-.14.19-.33.38c-.16.17-.31.3-.52.45c-.11.09-.2.19-.28.27c-.08.08-.14.17-.19.27c-.05.1-.08.19-.11.3c-.03.11-.03.13-.03.25H7.13c0-.22 0-.31.03-.48c.03-.19.08-.36.14-.52c.06-.14.14-.28.25-.42c.11-.13.23-.25.41-.38c.27-.19.36-.3.48-.52c.12-.22.2-.38.2-.59c0-.27-.06-.45-.2-.58c-.13-.13-.31-.19-.58-.19c-.09 0-.19.02-.3.05c-.11.03-.17.09-.25.16c-.08.07-.14.11-.2.2a.41.41 0 0 0-.09.28h-2c0-.38.13-.56.27-.83c.16-.27.36-.5.61-.67c.25-.17.55-.3.88-.38c.33-.08.7-.13 1.09-.13c.44 0 .83.05 1.17.13c.34.09.63.22.88.39c.23.17.41.38.55.63c.13.25.19.55.19.88c0 .22 0 .42-.08.59l-.02-.01z" fill="currentColor"></svg:path>`,
})
export class OcticonUnverifiedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnverified16Icon],svg[octicon-unverified-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.415.52a2.68 2.68 0 0 1 3.17 0l.928.68c.153.113.33.186.518.215l1.138.175a2.68 2.68 0 0 1 2.241 2.24l.175 1.138c.029.187.102.365.215.518l.68.928a2.68 2.68 0 0 1 0 3.17l-.68.928a1.2 1.2 0 0 0-.215.518l-.175 1.138a2.68 2.68 0 0 1-2.241 2.241l-1.138.175a1.2 1.2 0 0 0-.518.215l-.928.68a2.68 2.68 0 0 1-3.17 0l-.928-.68a1.2 1.2 0 0 0-.518-.215L3.83 14.41a2.68 2.68 0 0 1-2.24-2.24l-.175-1.138a1.2 1.2 0 0 0-.215-.518l-.68-.928a2.68 2.68 0 0 1 0-3.17l.68-.928a1.2 1.2 0 0 0 .215-.518l.175-1.14a2.68 2.68 0 0 1 2.24-2.24l1.138-.175c.187-.029.365-.102.518-.215l.928-.68Zm2.282 1.209a1.18 1.18 0 0 0-1.394 0l-.928.68a2.7 2.7 0 0 1-1.18.489l-1.136.174a1.18 1.18 0 0 0-.987.987l-.174 1.137a2.7 2.7 0 0 1-.489 1.18l-.68.927c-.305.415-.305.98 0 1.394l.68.928c.256.348.423.752.489 1.18l.174 1.136c.078.51.478.909.987.987l1.137.174c.427.066.831.233 1.18.489l.927.68c.415.305.98.305 1.394 0l.928-.68a2.7 2.7 0 0 1 1.18-.489l1.136-.174c.51-.078.909-.478.987-.987l.174-1.137c.066-.427.233-.831.489-1.18l.68-.927c.305-.415.305-.98 0-1.394l-.68-.928a2.7 2.7 0 0 1-.489-1.18l-.174-1.136a1.18 1.18 0 0 0-.987-.987l-1.137-.174a2.7 2.7 0 0 1-1.18-.489ZM6.92 6.085h.001a.75.75 0 0 1-1.342-.67c.169-.339.436-.701.849-.977C6.846 4.16 7.369 4 8 4a2.76 2.76 0 0 1 1.638.525c.502.377.862.965.862 1.725c0 .448-.115.83-.329 1.15c-.205.307-.47.513-.692.662c-.109.072-.22.138-.313.195l-.006.004a6 6 0 0 0-.26.16a1 1 0 0 0-.276.245a.75.75 0 0 1-1.248-.832c.184-.264.42-.489.692-.661c.109-.073.22-.139.313-.195l.007-.004c.1-.061.182-.11.258-.161a1 1 0 0 0 .277-.245C8.96 6.514 9 6.427 9 6.25a.61.61 0 0 0-.262-.525A1.27 1.27 0 0 0 8 5.5c-.369 0-.595.09-.74.187a1 1 0 0 0-.34.398M9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class OcticonUnverified16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUnverified24Icon],svg[octicon-unverified-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-2.517-7.665c.112-.223.268-.424.488-.57C11.186 8.12 11.506 8 12 8c.384 0 .766.118 1.034.319a.95.95 0 0 1 .403.806c0 .48-.218.81-.62 1.186a9 9 0 0 1-.409.354l-.294.249c-.246.213-.524.474-.738.795l-.126.19V13.5a.75.75 0 0 0 1.5 0v-1.12c.09-.1.203-.208.347-.333c.063-.055.14-.119.222-.187c.166-.14.358-.3.52-.452c.536-.5 1.098-1.2 1.098-2.283a2.45 2.45 0 0 0-1.003-2.006C13.37 6.695 12.658 6.5 12 6.5c-.756 0-1.373.191-1.861.517a2.94 2.94 0 0 0-.997 1.148a.75.75 0 0 0 1.341.67"></svg:path><svg:path fill="currentColor" d="M9.864 1.2a3.61 3.61 0 0 1 4.272 0l1.375 1.01c.274.2.593.333.929.384l1.686.259a3.61 3.61 0 0 1 3.021 3.02l.259 1.687c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.1 2.1 0 0 0-.384.929l-.259 1.686a3.61 3.61 0 0 1-3.02 3.021l-1.687.259a2.1 2.1 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.1 2.1 0 0 0-.929-.384l-1.686-.259a3.61 3.61 0 0 1-3.021-3.02l-.259-1.687a2.1 2.1 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.686a3.61 3.61 0 0 1 3.02-3.021l1.687-.259c.336-.051.655-.183.929-.384Zm3.384 1.209a2.11 2.11 0 0 0-2.496 0l-1.376 1.01a3.6 3.6 0 0 1-1.589.658l-1.686.258a2.11 2.11 0 0 0-1.766 1.766l-.258 1.686a3.6 3.6 0 0 1-.658 1.59l-1.01 1.375a2.11 2.11 0 0 0 0 2.496l1.01 1.376a3.6 3.6 0 0 1 .658 1.589l.258 1.686a2.11 2.11 0 0 0 1.766 1.765l1.686.26a3.6 3.6 0 0 1 1.59.657l1.375 1.01a2.11 2.11 0 0 0 2.496 0l1.376-1.01a3.6 3.6 0 0 1 1.589-.658l1.686-.258a2.11 2.11 0 0 0 1.765-1.766l.26-1.686a3.6 3.6 0 0 1 .657-1.59l1.01-1.375a2.11 2.11 0 0 0 0-2.496l-1.01-1.376a3.6 3.6 0 0 1-.658-1.589l-.258-1.686a2.11 2.11 0 0 0-1.766-1.766l-1.686-.258a3.6 3.6 0 0 1-1.59-.658Z"></svg:path>`,
})
export class OcticonUnverified24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUpload16Icon],svg[octicon-upload-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></svg:path><svg:path fill="currentColor" d="M11.78 4.72a.749.749 0 1 1-1.06 1.06L8.75 3.811V9.5a.75.75 0 0 1-1.5 0V3.811L5.28 5.78a.749.749 0 1 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0z"></svg:path>`,
})
export class OcticonUpload16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconUpload24Icon],svg[octicon-upload-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20.25V18a.75.75 0 0 1 1.5 0v2.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V18a.75.75 0 0 1 1.5 0v2.25A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25"></svg:path><svg:path fill="currentColor" d="M5.22 9.53a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.749.749 0 1 1-1.06 1.06l-4.97-4.969V16.75a.75.75 0 0 1-1.5 0V4.561L6.28 9.53a.75.75 0 0 1-1.06 0"></svg:path>`,
})
export class OcticonUpload24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconVerifiedIcon],svg[octicon-verified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM6.5 12.01L3 8.51l1.5-1.5l2 2l5-5L13 5.56l-6.5 6.45z" fill="currentColor"></svg:path>`,
})
export class OcticonVerifiedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconVerified16Icon],svg[octicon-verified-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.585.52l.929.68c.153.112.331.186.518.215l1.138.175a2.68 2.68 0 0 1 2.24 2.24l.174 1.139c.029.187.103.365.215.518l.68.928a2.68 2.68 0 0 1 0 3.17l-.68.928a1.2 1.2 0 0 0-.215.518l-.175 1.138a2.68 2.68 0 0 1-2.241 2.241l-1.138.175a1.2 1.2 0 0 0-.518.215l-.928.68a2.68 2.68 0 0 1-3.17 0l-.928-.68a1.2 1.2 0 0 0-.518-.215L3.83 14.41a2.68 2.68 0 0 1-2.24-2.24l-.175-1.138a1.2 1.2 0 0 0-.215-.518l-.68-.928a2.68 2.68 0 0 1 0-3.17l.68-.928c.112-.153.186-.331.215-.518l.175-1.14a2.68 2.68 0 0 1 2.24-2.24l1.139-.175c.187-.029.365-.103.518-.215l.928-.68a2.68 2.68 0 0 1 3.17 0M7.303 1.728l-.927.68a2.7 2.7 0 0 1-1.18.489l-1.137.174a1.18 1.18 0 0 0-.987.987l-.174 1.136a2.7 2.7 0 0 1-.489 1.18l-.68.928a1.18 1.18 0 0 0 0 1.394l.68.927c.256.348.424.753.489 1.18l.174 1.137c.078.509.478.909.987.987l1.136.174a2.7 2.7 0 0 1 1.18.489l.928.68c.414.305.979.305 1.394 0l.927-.68a2.7 2.7 0 0 1 1.18-.489l1.137-.174a1.18 1.18 0 0 0 .987-.987l.174-1.136a2.7 2.7 0 0 1 .489-1.18l.68-.928a1.18 1.18 0 0 0 0-1.394l-.68-.927a2.7 2.7 0 0 1-.489-1.18l-.174-1.137a1.18 1.18 0 0 0-.987-.987l-1.136-.174a2.7 2.7 0 0 1-1.18-.489l-.928-.68a1.18 1.18 0 0 0-1.394 0M11.28 6.78l-3.75 3.75a.75.75 0 0 1-1.06 0L4.72 8.78a.75.75 0 0 1 .018-1.042a.75.75 0 0 1 1.042-.018L7 8.94l3.22-3.22a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042"></svg:path>`,
})
export class OcticonVerified16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconVerified24Icon],svg[octicon-verified-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0z"></svg:path><svg:path fill="currentColor" d="m14.136 1.2l1.375 1.01c.274.201.593.333.929.384l1.687.259a3.61 3.61 0 0 1 3.02 3.021l.259 1.686c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.1 2.1 0 0 0-.384.929l-.259 1.687a3.61 3.61 0 0 1-3.021 3.02l-1.686.259a2.1 2.1 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.1 2.1 0 0 0-.929-.384l-1.687-.259a3.61 3.61 0 0 1-3.02-3.021l-.259-1.686a2.1 2.1 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.687a3.61 3.61 0 0 1 3.021-3.02l1.686-.259c.336-.051.655-.183.929-.384L9.864 1.2a3.61 3.61 0 0 1 4.272 0m-3.384 1.209l-1.375 1.01a3.6 3.6 0 0 1-1.59.658l-1.686.258a2.11 2.11 0 0 0-1.766 1.766l-.258 1.686a3.6 3.6 0 0 1-.658 1.589l-1.01 1.376a2.11 2.11 0 0 0 0 2.496l1.01 1.375c.344.469.57 1.015.658 1.59l.258 1.686c.14.911.855 1.626 1.766 1.766l1.686.258a3.6 3.6 0 0 1 1.589.658l1.376 1.01a2.11 2.11 0 0 0 2.496 0l1.375-1.01a3.6 3.6 0 0 1 1.59-.657l1.686-.26a2.11 2.11 0 0 0 1.766-1.765l.258-1.686a3.6 3.6 0 0 1 .658-1.589l1.01-1.376a2.11 2.11 0 0 0 0-2.496l-1.01-1.375a3.6 3.6 0 0 1-.657-1.59l-.26-1.686a2.11 2.11 0 0 0-1.765-1.766l-1.686-.258a3.6 3.6 0 0 1-1.589-.658l-1.376-1.01a2.11 2.11 0 0 0-2.496 0"></svg:path>`,
})
export class OcticonVerified24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconVersionsIcon],svg[octicon-versions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z" fill="currentColor"></svg:path>`,
})
export class OcticonVersionsIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconVersions16Icon],svg[octicon-versions-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 14A1.75 1.75 0 0 1 6 12.25v-8.5C6 2.784 6.784 2 7.75 2h6.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14Zm-.25-1.75c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-6.5a.25.25 0 0 0-.25.25ZM4.9 3.508a.75.75 0 0 1-.274 1.025a.25.25 0 0 0-.126.217v6.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.75 1.75 0 0 1 3 11.25v-6.5c0-.649.353-1.214.874-1.516a.75.75 0 0 1 1.025.274ZM1.625 5.533a.25.25 0 0 0-.126.217v4.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.75 1.75 0 0 1 0 10.25v-4.5a1.75 1.75 0 0 1 .873-1.516a.75.75 0 1 1 .752 1.299"></svg:path>`,
})
export class OcticonVersions16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconVersions24Icon],svg[octicon-versions-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Zm-.5-2a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H10a.5.5 0 0 0-.5.5ZM6.17 4.165a.75.75 0 0 1-.335 1.006c-.228.114-.295.177-.315.201a.04.04 0 0 0-.008.016a.4.4 0 0 0-.012.112v13c0 .07.008.102.012.112a.03.03 0 0 0 .008.016c.02.024.087.087.315.201a.749.749 0 1 1-.67 1.342c-.272-.136-.58-.315-.81-.598C4.1 19.259 4 18.893 4 18.5v-13c0-.393.1-.759.355-1.073c.23-.283.538-.462.81-.598a.75.75 0 0 1 1.006.336ZM2.15 5.624a.75.75 0 0 1-.274 1.025q-.225.132-.32.245C1.5 6.96 1.5 6.99 1.5 7v10c0 .01 0 .04.056.106q.095.113.32.245a.75.75 0 0 1-.752 1.298C.73 18.421 0 17.907 0 17V7c0-.907.73-1.42 1.124-1.65a.75.75 0 0 1 1.025.274Z"></svg:path>`,
})
export class OcticonVersions24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconVideo16Icon],svg[octicon-video-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25Z"></svg:path><svg:path fill="currentColor" d="M6 10.559V5.442a.25.25 0 0 1 .379-.215l4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559"></svg:path>`,
})
export class OcticonVideo16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconVideo24Icon],svg[octicon-video-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z"></svg:path><svg:path fill="currentColor" d="M9 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842L9.77 16.005a.5.5 0 0 1-.77-.42Z"></svg:path>`,
})
export class OcticonVideo24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconWatchIcon],svg[octicon-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 8h2v1H5V5h1v3zm6 0c0 2.22-1.2 4.16-3 5.19V15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-1.81C1.2 12.16 0 10.22 0 8s1.2-4.16 3-5.19V1c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1.81c1.8 1.03 3 2.97 3 5.19zm-1 0c0-2.77-2.23-5-5-5S1 5.23 1 8s2.23 5 5 5s5-2.23 5-5z" fill="currentColor"></svg:path>`,
})
export class OcticonWatchIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconWebhook16Icon],svg[octicon-webhook-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4.25a2.25 2.25 0 0 1 4.5 0a.75.75 0 0 0 1.5 0a3.75 3.75 0 1 0-6.14 2.889l-2.272 4.258a.75.75 0 0 0 1.324.706L7 7.25a.75.75 0 0 0-.309-1.015A2.25 2.25 0 0 1 5.5 4.25"></svg:path><svg:path fill="currentColor" d="M7.364 3.607a.75.75 0 0 1 1.03.257l2.608 4.349a3.75 3.75 0 1 1-.628 6.785a.75.75 0 0 1 .752-1.299a2.25 2.25 0 1 0-.033-3.88a.75.75 0 0 1-1.03-.256L7.107 4.636a.75.75 0 0 1 .257-1.03Z"></svg:path><svg:path fill="currentColor" d="M2.9 8.776A.75.75 0 0 1 2.625 9.8A2.25 2.25 0 1 0 6 11.75a.75.75 0 0 1 .75-.751h5.5a.75.75 0 0 1 0 1.5H7.425a3.751 3.751 0 1 1-5.55-3.998a.75.75 0 0 1 1.024.274Z"></svg:path>`,
})
export class OcticonWebhook16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconWorkflow16Icon],svg[octicon-workflow-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 0 1 5.25 7H4v4a1 1 0 0 0 1 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 14.25 16h-3.5A1.75 1.75 0 0 1 9 14.25v-.75H5A2.5 2.5 0 0 1 2.5 11V7h-.75A1.75 1.75 0 0 1 0 5.25Zm1.75-.25a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Zm9 9a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class OcticonWorkflow16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconWorkflow24Icon],svg[octicon-workflow-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 0 1 2-2H21a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-2.5H8.437A2.94 2.94 0 0 1 5.5 15.562V11.5H3a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM14.5 14a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5Z"></svg:path>`,
})
export class OcticonWorkflow24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconXIcon],svg[octicon-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7.48 8l3.75 3.75l-1.48 1.48L6 9.48l-3.75 3.75l-1.48-1.48L4.52 8L.77 4.25l1.48-1.48L6 6.52l3.75-3.75l1.48 1.48L7.48 8z" fill="currentColor"></svg:path>`,
})
export class OcticonXIcon {
  readonly viewBox = input("0 0 12 16")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconX12Icon],svg[octicon-x-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.22 2.22a.75.75 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class OcticonX12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconX16Icon],svg[octicon-x-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L8 9.06l-3.22 3.22a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042L6.94 8L3.72 4.78a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class OcticonX16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconX24Icon],svg[octicon-x-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L12 13.06l-5.22 5.22a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042L10.94 12L5.72 6.78a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class OcticonX24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconXCircle16Icon],svg[octicon-x-circle-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.344 2.343a8 8 0 0 1 11.314 11.314A8.002 8.002 0 0 1 .234 10.089a8 8 0 0 1 2.11-7.746m1.06 10.253a6.5 6.5 0 1 0 9.108-9.275a6.5 6.5 0 0 0-9.108 9.275M6.03 4.97L8 6.94l1.97-1.97a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734L9.06 8l1.97 1.97a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L8 9.06l-1.97 1.97a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L6.94 8L4.97 6.03a.75.75 0 0 1 .018-1.042a.75.75 0 0 1 1.042-.018"></svg:path>`,
})
export class OcticonXCircle16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconXCircle24Icon],svg[octicon-x-circle-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.036 7.976a.75.75 0 0 0-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 1 0 1.06 1.06L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.75.75 0 1 0-1.06-1.06L12 10.939z"></svg:path><svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12"></svg:path>`,
})
export class OcticonXCircle24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconXCircleFill12Icon],svg[octicon-x-circle-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.757 10.243a6.001 6.001 0 1 1 8.488-8.486a6.001 6.001 0 0 1-8.488 8.486M6 4.763l-2-2L2.763 4l2 2l-2 2L4 9.237l2-2l2 2L9.237 8l-2-2l2-2L8 2.763Z"></svg:path>`,
})
export class OcticonXCircleFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconXCircleFill16Icon],svg[octicon-x-circle-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.343 13.657A8 8 0 1 1 13.658 2.343A8 8 0 0 1 2.343 13.657M6.03 4.97a.75.75 0 0 0-1.042.018a.75.75 0 0 0-.018 1.042L6.94 8L4.97 9.97a.749.749 0 0 0 .326 1.275a.75.75 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326a.75.75 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275a.75.75 0 0 0-.734.215L8 6.94Z"></svg:path>`,
})
export class OcticonXCircleFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconXCircleFill24Icon],svg[octicon-x-circle-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8.036-4.024a.75.75 0 0 0-1.042.018a.75.75 0 0 0-.018 1.042L10.939 12l-2.963 2.963a.749.749 0 0 0 .326 1.275a.75.75 0 0 0 .734-.215L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.749.749 0 0 0-.326-1.275a.75.75 0 0 0-.734.215L12 10.939Z"></svg:path>`,
})
export class OcticonXCircleFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconZapIcon],svg[octicon-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10 7H6l3-7l-9 9h4l-3 7l9-9z" fill="currentColor"></svg:path>`,
})
export class OcticonZapIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconZap16Icon],svg[octicon-zap-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.504.43a1.516 1.516 0 0 1 2.437 1.713L10.415 5.5h2.123c1.57 0 2.346 1.909 1.22 3.004l-7.34 7.142a1.25 1.25 0 0 1-.871.354h-.302a1.25 1.25 0 0 1-1.157-1.723L5.633 10.5H3.462c-1.57 0-2.346-1.909-1.22-3.004zm1.047 1.074L3.286 8.571A.25.25 0 0 0 3.462 9H6.75a.75.75 0 0 1 .694 1.034l-1.713 4.188l6.982-6.793A.25.25 0 0 0 12.538 7H9.25a.75.75 0 0 1-.683-1.06l2.008-4.418l.003-.006l-.004-.009l-.006-.006l-.008-.001q-.005 0-.009.004"></svg:path>`,
})
export class OcticonZap16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconZap24Icon],svg[octicon-zap-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.716 1.329a1.341 1.341 0 0 1 2.109 1.55L15.147 9h4.161c1.623 0 2.372 2.016 1.143 3.075L8.102 22.721a1.148 1.148 0 0 1-1.81-1.317L8.996 15H4.674c-1.619 0-2.37-2.008-1.148-3.07l12.19-10.6Zm.452 1.595L4.51 13.061a.25.25 0 0 0 .164.439h5.45a.75.75 0 0 1 .692 1.041l-2.559 6.066l11.215-9.668a.25.25 0 0 0-.164-.439H14a.75.75 0 0 1-.687-1.05Z"></svg:path>`,
})
export class OcticonZap24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconZoomIn16Icon],svg[octicon-zoom-in-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 7.5a.75.75 0 0 1 .75-.75h2.25V4.5a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H8.25v2.25a.75.75 0 0 1-1.5 0V8.25H4.5a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M7.5 0a7.5 7.5 0 0 1 5.807 12.247l2.473 2.473a.749.749 0 1 1-1.06 1.06l-2.473-2.473A7.5 7.5 0 1 1 7.5 0m-6 7.5a6 6 0 1 0 12 0a6 6 0 0 0-12 0"></svg:path>`,
})
export class OcticonZoomIn16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconZoomIn24Icon],svg[octicon-zoom-in-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 5.75a.75.75 0 0 1 .75.75v3.25h3.25a.75.75 0 0 1 0 1.5h-3.25v3.25a.75.75 0 0 1-1.5 0v-3.25H6.5a.75.75 0 0 1 0-1.5h3.25V6.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" d="M0 10.5C0 4.701 4.701 0 10.5 0S21 4.701 21 10.5c0 2.63-.967 5.033-2.564 6.875l4.344 4.345a.749.749 0 1 1-1.06 1.06l-4.345-4.344A10.46 10.46 0 0 1 10.5 21C4.701 21 0 16.299 0 10.5m10.5-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9"></svg:path>`,
})
export class OcticonZoomIn24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconZoomOut16Icon],svg[octicon-zoom-out-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5"></svg:path><svg:path fill="currentColor" d="M0 7.5a7.5 7.5 0 1 1 13.307 4.747l2.473 2.473a.749.749 0 1 1-1.06 1.06l-2.473-2.473A7.5 7.5 0 0 1 0 7.5m7.5-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12"></svg:path>`,
})
export class OcticonZoomOut16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconZoomOut24Icon],svg[octicon-zoom-out-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 11.25a.75.75 0 0 0 0-1.5h-8a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill="currentColor" d="M0 10.5C0 4.701 4.701 0 10.5 0S21 4.701 21 10.5c0 2.63-.967 5.033-2.564 6.875l4.344 4.345a.749.749 0 1 1-1.06 1.06l-4.345-4.344A10.46 10.46 0 0 1 10.5 21C4.701 21 0 16.299 0 10.5m10.5-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9"></svg:path>`,
})
export class OcticonZoomOut24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[octiconAlert24Icon],svg[octicon-alert-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25-8.25a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M9.836 3.244c.963-1.665 3.365-1.665 4.328 0l8.967 15.504c.963 1.667-.24 3.752-2.165 3.752H3.034c-1.926 0-3.128-2.085-2.165-3.752Zm3.03.751a1.002 1.002 0 0 0-1.732 0L2.168 19.499A1.002 1.002 0 0 0 3.034 21h17.932a1.002 1.002 0 0 0 .866-1.5L12.866 3.994Z"></svg:path>`,
})
export class OcticonAlert24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
