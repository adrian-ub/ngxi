import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTextWrapDisabledIcon],svg[tabler-text-wrap-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h10M4 18h10M4 12h17l-3-3m0 6l3-3"></svg:path>`,
})
export class TablerTextWrapDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTextureIcon],svg[tabler-texture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3L3 6m18 12l-3 3M11 3l-8 8m13-8L3 16M21 3L3 21M21 8L8 21m13-8l-8 8"></svg:path>`,
})
export class TablerTextureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTheaterIcon],svg[tabler-theater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h16m0-4V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10l4-6q4 2 8 0z"></svg:path>`,
})
export class TablerTheaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerThermometerIcon],svg[tabler-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 5a2.83 2.83 0 0 1 0 4l-8 8H7v-4l8-8a2.83 2.83 0 0 1 4 0m-3 2l-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 17l-3 3"></svg:path>`,
})
export class TablerThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerThumbDownIcon],svg[tabler-thumb-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1za4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2-2l-1-5a2 3 0 0 0-2-2h-7a3 3 0 0 0-3 3"></svg:path>`,
})
export class TablerThumbDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerThumbDownFilledIcon],svg[tabler-thumb-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z"></svg:path>`,
})
export class TablerThumbDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerThumbDownOffIcon],svg[tabler-thumb-down-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13V7M4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 1 0 4 0v-3m2-2h1a2 2 0 0 0 2-2l-1-5c-.295-1.26-1.11-2.076-2-2h-7c-.57 0-1.102.159-1.556.434M3 3l18 18"></svg:path>`,
})
export class TablerThumbDownOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerThumbUpIcon],svg[tabler-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1za4 4 0 0 0 4-4V6a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1-2 2h-7a3 3 0 0 1-3-3"></svg:path>`,
})
export class TablerThumbUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerThumbUpFilledIcon],svg[tabler-thumb-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z"></svg:path>`,
})
export class TablerThumbUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerThumbUpOffIcon],svg[tabler-thumb-up-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1za4 4 0 0 0 2.828-1.172M11 7V6a2 2 0 1 1 4 0v5h3a2 2 0 0 1 2 2l-.5 2.503m-.758 3.244C18.35 19.57 17.698 20.059 17 20h-7a3 3 0 0 1-3-3M3 3l18 18"></svg:path>`,
})
export class TablerThumbUpOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTicTacIcon],svg[tabler-tic-tac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1 6h18m-9-9v18m-8-5l4 4m-4 0l4-4m8-12l4 4m-4 0l4-4m-4 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path>`,
})
export class TablerTicTacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTicketIcon],svg[tabler-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2"></svg:path>`,
})
export class TablerTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTicketOffIcon],svg[tabler-ticket-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 10v2M9 5h10a2 2 0 0 1 2 2v3a2 2 0 1 0 0 4v3m-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 1 0 0-4V7a2 2 0 0 1 2-2M3 3l18 18"></svg:path>`,
})
export class TablerTicketOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTieIcon],svg[tabler-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 22l4-4l-2.5-11l.993-2.649A1 1 0 0 0 13.557 3h-3.114a1 1 0 0 0-.936 1.351L10.5 7L8 18z"></svg:path><svg:path d="M10.5 7h3l5 5.5"></svg:path></svg:g>`,
})
export class TablerTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTildeIcon],svg[tabler-tilde-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c0-1.657 1.592-3 3.556-3s3.11 1.5 4.444 3c1.333 1.5 2.48 3 4.444 3S20 13.657 20 12"></svg:path>`,
})
export class TablerTildeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTiltShiftIcon],svg[tabler-tilt-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3m-2 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path>`,
})
export class TablerTiltShiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTiltShiftFilledIcon],svg[tabler-tilt-shift-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.178 2.766a1 1 0 1 1 .764 1.848a8 8 0 0 0-2.595 1.733a1 1 0 1 1-1.414-1.414a10 10 0 0 1 3.245-2.167m-5.411 5.41a1 1 0 1 1 1.846.768A8 8 0 0 0 4 12.002a1 1 0 0 1-2-.004a10 10 0 0 1 .767-3.822m.541 6.34a1 1 0 0 1 1.306.542a8 8 0 0 0 1.733 2.595a1 1 0 1 1-1.414 1.414a10 10 0 0 1-2.167-3.245a1 1 0 0 1 .542-1.306m4.329 5.41a1 1 0 0 1 1.307-.54a8 8 0 0 0 3.058.614a1 1 0 0 1-.004 2a10 10 0 0 1-3.822-.767a1 1 0 0 1-.54-1.307m10.017-2.273a1 1 0 1 1 1.414 1.414a10 10 0 0 1-3.245 2.167a1 1 0 1 1-.764-1.848a8 8 0 0 0 2.595-1.733M21.002 11A1 1 0 0 1 22 12.002a10 10 0 0 1-.767 3.822a1 1 0 1 1-1.846-.768A8 8 0 0 0 20 11.998A1 1 0 0 1 21.002 11m-3.349-6.067a1 1 0 0 1 1.414 0a10 10 0 0 1 2.167 3.245a1 1 0 1 1-1.848.764a8 8 0 0 0-1.733-2.595a1 1 0 0 1 0-1.414M12.002 2a10 10 0 0 1 3.822.767a1 1 0 1 1-.768 1.846A8 8 0 0 0 11.998 4a1 1 0 0 1 .004-2M12 9a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 12 9"></svg:path>`,
})
export class TablerTiltShiftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTiltShiftOffIcon],svg[tabler-tilt-shift-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.56 3.69a9 9 0 0 0-.577.263M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3m-1.43 7.602a2 2 0 0 0 2.862 2.795M3 3l18 18"></svg:path>`,
})
export class TablerTiltShiftOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration0Icon],svg[tabler-time-duration-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12v.01M21 12v.01M12 21v.01M12 3v.01M7.5 4.2v.01m9-.01v.01m0 15.59v.01m-9-.01v.01M4.2 16.5v.01m15.6-.01v.01m0-9.01v.01M4.2 7.5v.01M10 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0-4 0"></svg:path>`,
})
export class TablerTimeDuration0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration10Icon],svg[tabler-time-duration-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9v6m3-4v2a2 2 0 1 0 4 0v-2a2 2 0 1 0-4 0m-9 1v.01M21 12v.01M12 21v.01M7.5 4.2v.01m9 15.59v.01m-9-.01v.01M4.2 16.5v.01m15.6-.01v.01M4.2 7.5v.01m15.61.017A9 9 0 0 0 12 3"></svg:path>`,
})
export class TablerTimeDuration10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration15Icon],svg[tabler-time-duration-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2V9h3M9 9v6m-6-3v.01M12 21v.01M7.5 4.2v.01m9 15.59v.01m-9-.01v.01M4.2 16.5v.01m15.6-.01v.01M4.2 7.5v.01M21 12a9 9 0 0 0-9-9"></svg:path>`,
})
export class TablerTimeDuration15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration30Icon],svg[tabler-time-duration-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M8 9h1.5a1.5 1.5 0 0 1 0 3H9h.5a1.5 1.5 0 0 1 0 3H8m-5-3v.01M7.5 4.2v.01m0 15.59v.01M4.2 16.5v.01m0-9.01v.01"></svg:path><svg:path d="M12 21a9 9 0 0 0 0-18"></svg:path></svg:g>`,
})
export class TablerTimeDuration30Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration45Icon],svg[tabler-time-duration-45-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 15h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2V9h3M7 9v2a1 1 0 0 0 1 1h1m1-3v6M7.5 4.2v.01M4.2 7.5v.01"></svg:path><svg:path d="M3 12a9 9 0 1 0 9-9"></svg:path></svg:g>`,
})
export class TablerTimeDuration45Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration5Icon],svg[tabler-time-duration-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15h2a1.5 1.5 0 0 0 0-3h-2V9h3.5M3 12v.01M21 12v.01M12 21v.01M7.5 4.2v.01m9 15.59v.01m-9-.01v.01M4.2 16.5v.01m15.6-.01v.01m0-9.01v.01M4.2 7.5v.01m12.3-3.304A9.04 9.04 0 0 0 12 3"></svg:path>`,
})
export class TablerTimeDuration5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration60Icon],svg[tabler-time-duration-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M11 9H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></svg:path></svg:g>`,
})
export class TablerTimeDuration60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDuration90Icon],svg[tabler-time-duration-90-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 14.25c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H11m3-1.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></svg:path></svg:g>`,
})
export class TablerTimeDuration90Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimeDurationOffIcon],svg[tabler-time-duration-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12v.01m4.5 7.79v.01M4.2 16.5v.01m0-9.01v.01M12 21a9 9 0 0 0 6.362-2.634m1.685-2.336A9 9 0 0 0 12 3M3 3l18 18"></svg:path>`,
})
export class TablerTimeDurationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimelineIcon],svg[tabler-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m4 16l6-7l5 5l5-6"></svg:path><svg:path d="M14 14a1 1 0 1 0 2 0a1 1 0 1 0-2 0M9 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-6 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m16-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class TablerTimelineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimelineEventIcon],svg[tabler-timeline-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 0H4m10 0h6m-8-5l-2-2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3z"></svg:path>`,
})
export class TablerTimelineEventIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimelineEventExclamationIcon],svg[tabler-timeline-event-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 0H4m10 0h6m-8-5l-2-2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3zm0-9v2m0 3v.01"></svg:path>`,
})
export class TablerTimelineEventExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimelineEventFilledIcon],svg[tabler-timeline-event-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17c1.306 0 2.418.835 2.83 2H20a1 1 0 0 1 0 2h-5.171a3.001 3.001 0 0 1-5.658 0H4a1 1 0 0 1 0-2h5.17A3 3 0 0 1 12 17m5-15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.586l-1.707 1.707a1 1 0 0 1-1.32.083l-.094-.083L9.585 14H7a2 2 0 0 1-1.995-1.85L5 12V4a2 2 0 0 1 2-2z"></svg:path>`,
})
export class TablerTimelineEventFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimelineEventMinusIcon],svg[tabler-timeline-event-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 0H4m10 0h6m-8-5l-2-2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3zm-2-7h4"></svg:path>`,
})
export class TablerTimelineEventMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimelineEventPlusIcon],svg[tabler-timeline-event-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 0H4m10 0h6m-8-5l-2-2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3zm-2-7h4m-2-2v4"></svg:path>`,
})
export class TablerTimelineEventPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimelineEventTextIcon],svg[tabler-timeline-event-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 0H4m10 0h6m-8-5l-2-2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3zM9 6h6M9 9h3"></svg:path>`,
})
export class TablerTimelineEventTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimelineEventXIcon],svg[tabler-timeline-event-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 0H4m10 0h6m-8-5l-2-2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3zm1.5-5.5l-3-3m0 3l3-3"></svg:path>`,
})
export class TablerTimelineEventXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTimezoneIcon],svg[tabler-timezone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.884 10.554a9 9 0 1 0-10.337 10.328M3.6 9h16.8M3.6 15h6.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0-1.502 14.954M12.5 3a17 17 0 0 1 2.52 7.603M14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path><svg:path d="M18 16.5V18l.5.5"></svg:path></svg:g>`,
})
export class TablerTimezoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTipJarIcon],svg[tabler-tip-jar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 10h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H10m2-7v1m0 6v1"></svg:path><svg:path d="M17 4v1.882c0 .685.387 1.312 1 1.618s1 .933 1 1.618V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9.118c0-.685.387-1.312 1-1.618s1-.933 1-1.618V4M6 4h12z"></svg:path></svg:g>`,
})
export class TablerTipJarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTipJarEuroIcon],svg[tabler-tip-jar-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 4v1.882c0 .685.387 1.312 1 1.618s1 .933 1 1.618V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9.118c0-.685.387-1.312 1-1.618s1-.933 1-1.618V4M6 4h12zm6 9H9"></svg:path><svg:path d="M14 10.172a3 3 0 1 0 0 5.656"></svg:path></svg:g>`,
})
export class TablerTipJarEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTipJarPoundIcon],svg[tabler-tip-jar-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 4v1.882c0 .685.387 1.312 1 1.618s1 .933 1 1.618V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9.118c0-.685.387-1.312 1-1.618s1-.933 1-1.618V4M6 4h12z"></svg:path><svg:path d="M14 10h-1a2 2 0 0 0-2 2v2c0 1.105-.395 2-1.5 2H14m-4-3h3"></svg:path></svg:g>`,
})
export class TablerTipJarPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTirIcon],svg[tabler-tir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M7 18h8m4 0h2v-6a5 7 0 0 0-5-7h-1l1.5 7H21m-9 6V5h3M3 17v-5h9"></svg:path></svg:g>`,
})
export class TablerTirIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToggleLeftIcon],svg[tabler-toggle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6"></svg:path></svg:g>`,
})
export class TablerToggleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToggleLeftFilledIcon],svg[tabler-toggle-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 8 9"></svg:path><svg:path d="M16 5a7 7 0 0 1 0 14H8A7 7 0 0 1 8 5zm0 2H8a5 5 0 1 0 0 10h8a5 5 0 0 0 0-10"></svg:path></svg:g>`,
})
export class TablerToggleLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToggleRightIcon],svg[tabler-toggle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6"></svg:path></svg:g>`,
})
export class TablerToggleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToggleRightFilledIcon],svg[tabler-toggle-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 9a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 16 9"></svg:path><svg:path d="M16 5a7 7 0 0 1 0 14H8A7 7 0 0 1 8 5zm0 2H8a5 5 0 1 0 0 10h8a5 5 0 0 0 0-10"></svg:path></svg:g>`,
})
export class TablerToggleRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToiletPaperIcon],svg[tabler-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a3 7 0 1 0 6 0a3 7 0 1 0-6 0m18 0c0-3.866-1.343-7-3-7M6 3h12m3 7v10l-3-1l-3 2l-3-3l-3 2V10m-3 0h.01"></svg:path>`,
})
export class TablerToiletPaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToiletPaperOffIcon],svg[tabler-toilet-paper-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.27 4.28C3.502 5.55 3 7.639 3 10c0 3.866 1.343 7 3 7s3-3.134 3-7q0-.509-.03-1M21 10c0-3.866-1.343-7-3-7M7 3h11m3 7v7m-1.513 2.496L18 19l-3 2l-3-3l-3 2V10m-3 0h.01M3 3l18 18"></svg:path>`,
})
export class TablerToiletPaperOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTomlIcon],svg[tabler-toml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.499 8h3m-1.5 0v8M8.5 8A1.5 1.5 0 0 1 10 9.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 8.5 8m4.5 8V8l2 5l2-5v8m3-8v8h2.5"></svg:path>`,
})
export class TablerTomlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToolIcon],svg[tabler-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1-3 3l-6-6a6 6 0 0 1-8-8z"></svg:path>`,
})
export class TablerToolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToolsIcon],svg[tabler-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17zM14.5 5.5l4 4"></svg:path><svg:path d="M12 8L7 3L3 7l5 5M7 8L5.5 9.5M16 12l5 5l-4 4l-5-5m4 1l-1.5 1.5"></svg:path></svg:g>`,
})
export class TablerToolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToolsKitchenIcon],svg[tabler-tools-kitchen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 3h8l-1 9H5zm3 15h2v3H7zM20 3v12h-5c-.023-3.681.184-7.406 5-12m0 12v6h-1v-3M8 12v6"></svg:path>`,
})
export class TablerToolsKitchenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToolsKitchen2Icon],svg[tabler-tools-kitchen-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 3v12h-5c-.023-3.681.184-7.406 5-12m0 12v6h-1v-3M8 4v17M5 4v3a3 3 0 1 0 6 0V4"></svg:path>`,
})
export class TablerToolsKitchen2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToolsKitchen2OffIcon],svg[tabler-tools-kitchen-2-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.386 10.409C14.916 8.129 16.152 5.717 19 3v12m-4 0h-1v-.941M19 19v2h-1v-3M8 8v13M5 5v2a3 3 0 0 0 4.546 2.572M11 7V4M3 3l18 18"></svg:path>`,
})
export class TablerToolsKitchen2OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToolsKitchen3Icon],svg[tabler-tools-kitchen-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v17M4 4v3a3 3 0 1 0 6 0V4m4 4a3 4 0 1 0 6 0a3 4 0 1 0-6 0m3 4v9"></svg:path>`,
})
export class TablerToolsKitchen3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToolsKitchenOffIcon],svg[tabler-tools-kitchen-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3h5l-.5 4.5m-.4 3.595L11 12H5l-.875-7.874M7 18h2v3H7zm8.225-6.784C15.645 8.698 16.814 6.039 20 3v12h-1m1 0v1m0 4v1h-1v-2M8 12v6M3 3l18 18"></svg:path>`,
})
export class TablerToolsKitchenOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToolsOffIcon],svg[tabler-tools-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m16 12l4-4a2.828 2.828 0 1 0-4-4l-4 4m-2 2l-7 7v4h4l7-7m.5-8.5l4 4"></svg:path><svg:path d="M12 8L7 3M5 5L3 7l5 5M7 8L5.5 9.5M16 12l5 5m-2 2l-2 2l-5-5m4 1l-1.5 1.5M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerToolsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTooltipIcon],svg[tabler-tooltip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-5l-1.707-1.707A1 1 0 0 0 9.586 11H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2.586a1 1 0 0 0-.707.293z"></svg:path>`,
})
export class TablerTooltipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyBusIcon],svg[tabler-topology-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0M2 16h20M4 12v4m8-4v4m8-4v4"></svg:path>`,
})
export class TablerTopologyBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyComplexIcon],svg[tabler-topology-complex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m12 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-6 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0M7.5 7.5l3 3M6 8v8m12 0V8M8 6h8m0 12H8"></svg:path>`,
})
export class TablerTopologyComplexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyFullIcon],svg[tabler-topology-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m12 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0M6 8v8m12 0V8M8 6h8m0 12H8M7.5 7.5l9 9m-9 0l9-9"></svg:path>`,
})
export class TablerTopologyFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyFullHierarchyIcon],svg[tabler-topology-full-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m12 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-6 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0M6 8v8m12 0V8M8 6h8m0 12H8M7.5 7.5l3 3m3 3l3 3m0-9l-3 3m-3 3l-3 3"></svg:path>`,
})
export class TablerTopologyFullHierarchyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyRingIcon],svg[tabler-topology-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 20a2 2 0 1 0-4 0a2 2 0 0 0 4 0m0-16a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8.5-6.5l5 5m-13 3l5 5m3 0l5-5m-8-8l-5 5"></svg:path>`,
})
export class TablerTopologyRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyRing2Icon],svg[tabler-topology-ring-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0M7 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0m14 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0M7 18h10m1-2l-5-8m-2 0l-5 8"></svg:path>`,
})
export class TablerTopologyRing2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyRing3Icon],svg[tabler-topology-ring-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0m12 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m0-12a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0M6 8v8m12 0V8M8 6h8m0 12H8"></svg:path>`,
})
export class TablerTopologyRing3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyStarIcon],svg[tabler-topology-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18a2 2 0 1 0-4 0a2 2 0 0 0 4 0M20 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m12 12a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-6-6a2 2 0 1 0-4 0a2 2 0 0 0 4 0M7.5 7.5l3 3m-3 6l3-3m3 0l3 3m0-9l-3 3"></svg:path>`,
})
export class TablerTopologyStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyStar2Icon],svg[tabler-topology-star-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 20a2 2 0 1 0-4 0a2 2 0 0 0 4 0m0-16a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0h4m4 0h4m-6-6v4m0 4v4"></svg:path>`,
})
export class TablerTopologyStar2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyStar3Icon],svg[tabler-topology-star-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19a2 2 0 1 0-4 0a2 2 0 0 0 4 0m8-14a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-4 7a2 2 0 1 0-4 0a2 2 0 0 0 4 0m12 7a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-4-7a2 2 0 1 0-4 0a2 2 0 0 0 4 0m8 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0M6 12h4m4 0h4m-3-5l-2 3M9 7l2 3m0 4l-2 3m4-3l2 3"></svg:path>`,
})
export class TablerTopologyStar3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyStarRingIcon],svg[tabler-topology-star-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 20a2 2 0 1 0-4 0a2 2 0 0 0 4 0m0-16a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0h4m4 0h4m-4.5-6.5l5 5m-13 3l5 5m3 0l5-5m-8-8l-5 5M12 6v4m0 4v4"></svg:path>`,
})
export class TablerTopologyStarRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyStarRing2Icon],svg[tabler-topology-star-ring-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 20a2 2 0 1 0-4 0a2 2 0 0 0 4 0m0-16a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0h4m4 0h4m-6-6v4m0 4v4m-6.5-7.5l5-5m3 0l5 5m0 3l-5 5m-3 0l-5-5"></svg:path>`,
})
export class TablerTopologyStarRing2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTopologyStarRing3Icon],svg[tabler-topology-star-ring-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19a2 2 0 1 0-4 0a2 2 0 0 0 4 0m8-14a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-4 7a2 2 0 1 0-4 0a2 2 0 0 0 4 0m12 7a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-4-7a2 2 0 1 0-4 0a2 2 0 0 0 4 0m8 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0M6 12h4m4 0h4m-3-5l-2 3M9 7l2 3m0 4l-2 3m4-3l2 3M10 5h4m-4 14h4m3-2l2-3m0-4l-2-3M7 7l-2 3m0 4l2 3"></svg:path>`,
})
export class TablerTopologyStarRing3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerToriiIcon],svg[tabler-torii-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4q8 2 16 0M4 8h16m-8-3v3m6-3.5V20M6 4.5V20"></svg:path>`,
})
export class TablerToriiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTornadoIcon],svg[tabler-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 4H3m10 12H7m4 4h4M6 8h14M4 12h12"></svg:path>`,
})
export class TablerTornadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTournamentIcon],svg[tabler-tournament-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4-8h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6"></svg:path><svg:path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2m3-6h4"></svg:path></svg:g>`,
})
export class TablerTournamentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTowerIcon],svg[tabler-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 3h1a1 1 0 0 1 1 1v2h3V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h3V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4.394a2 2 0 0 1-.336 1.11l-1.328 1.992a2 2 0 0 0-.336 1.11V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7.394a2 2 0 0 0-.336-1.11L4.336 9.504A2 2 0 0 1 4 8.394V4a1 1 0 0 1 1-1"></svg:path><svg:path d="M10 21v-5a2 2 0 1 1 4 0v5"></svg:path></svg:g>`,
})
export class TablerTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTowerOffIcon],svg[tabler-tower-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 6V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h3V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4.394a2 2 0 0 1-.336 1.11l-1.328 1.992a2 2 0 0 0-.336 1.11V14m0 4v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7.394a2 2 0 0 0-.336-1.11L4.336 9.504A2 2 0 0 1 4 8.394V4"></svg:path><svg:path d="M10 21v-5a2 2 0 1 1 4 0v5M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerTowerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrackIcon],svg[tabler-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15L15 4m5 5L9 20m-4-8l7 7M8.5 8.5l7 7M12 5l7 7"></svg:path>`,
})
export class TablerTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrackNextIcon],svg[tabler-track-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.69 4.198l6.56 6.25c1 .798 1 2.306 0 3.105l-6.564 6.252c-.67.48-1.686 0-1.686-.805v-4l-5.394 4.808C5.937 20.286 5 19.808 5 19V5c0-.812.936-1.285 1.602-.809L12 9V5c0-.816 1.02-1.28 1.69-.802z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg:path>`,
})
export class TablerTrackNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrackPrevIcon],svg[tabler-track-prev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10.31 19.802l-6.56-6.249c-1-.799-1-2.307 0-3.106l6.564-6.252c.67-.48 1.686 0 1.686.805v4l5.394-4.808C18.063 3.714 19 4.192 19 5v14c0 .812-.936 1.285-1.602.809L12 15v4c0 .816-1.02 1.281-1.69.802z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg:path>`,
})
export class TablerTrackPrevIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTractorIcon],svg[tabler-tractor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 15a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 0v.01M17 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-6.5 0H17"></svg:path><svg:path d="M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5"></svg:path><svg:path d="M18 5h-1a1 1 0 0 0-1 1v4"></svg:path></svg:g>`,
})
export class TablerTractorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrademarkIcon],svg[tabler-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 9h5M7 9v6m6 0V9l3 4l3-4v6"></svg:path>`,
})
export class TablerTrademarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrafficConeIcon],svg[tabler-traffic-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h16M9.4 10h5.2m-6.8 5h8.4M6 20l5-15h2l5 15"></svg:path>`,
})
export class TablerTrafficConeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrafficConeOffIcon],svg[tabler-traffic-cone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h16M9.4 10h.6m4 0h.6m-6.8 5H15m-9 5L9.5 9.5m1-3L11 5h2l2 6m2 6l1 3M3 3l18 18"></svg:path>`,
})
export class TablerTrafficConeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrafficLightsIcon],svg[tabler-traffic-lights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 7a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5z"></svg:path><svg:path d="M11 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class TablerTrafficLightsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrafficLightsOffIcon],svg[tabler-traffic-lights-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4c.912-1.219 2.36-2 4-2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1-10 0V7"></svg:path><svg:path d="M12 8a1 1 0 1 0-1-1m.291 4.295a1 1 0 0 0 1.418 1.41M11 17a1 1 0 1 0 2 0a1 1 0 1 0-2 0M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerTrafficLightsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrainIcon],svg[tabler-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 13c0-3.87-3.37-7-10-7H3m0 9h16a2 2 0 0 0 2-2"></svg:path><svg:path d="M3 6v5h17.5M3 11v4m5-4V6m5 5V6.5M3 19h18"></svg:path></svg:g>`,
})
export class TablerTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrainFilledIcon],svg[tabler-train-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5c6.634 0 10.853 3.11 10.996 7.754L22 13a3 3 0 0 1-3 3H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM7 7H4v3h3zm4 0H9v3h3V7.026A19 19 0 0 0 11 7m3.001.257L14 10h5.04c-.979-1.337-2.689-2.306-5.039-2.743M21 18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"></svg:path>`,
})
export class TablerTrainFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransactionBitcoinIcon],svg[tabler-transaction-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12h4.09c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2H15m1-4h4m-4-5v10v-9m3-1v1m0 8v1M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1"></svg:path>`,
})
export class TablerTransactionBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransactionDollarIcon],svg[tabler-transaction-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.8 13a2 2 0 0 0-1.8-1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-1.8-1m2.8-8v10M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1"></svg:path>`,
})
export class TablerTransactionDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransactionEuroIcon],svg[tabler-transaction-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.8c-.523-.502-1.172-.8-1.875-.8C17.398 12 16 13.791 16 16s1.398 4 3.125 4c.703 0 1.352-.298 1.874-.8M15 16h4M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1"></svg:path>`,
})
export class TablerTransactionEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransactionPoundIcon],svg[tabler-transaction-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 14a2 2 0 1 0-4 0v4a2 2 0 0 1-2 2h6m-6-3h4M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1"></svg:path>`,
})
export class TablerTransactionPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransactionRupeeIcon],svg[tabler-transaction-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12h-6h1a3 3 0 0 1 0 6h-1l3 3m-3-6h6M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1"></svg:path>`,
})
export class TablerTransactionRupeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransactionYenIcon],svg[tabler-transaction-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 16h6m-6-4l3 4.5m3-4.5l-3 4.5V21m-3-2h6M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1"></svg:path>`,
})
export class TablerTransactionYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransactionYuanIcon],svg[tabler-transaction-yuan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h6m-6-5l3 4.5m3-4.5l-3 4.5V21M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 5h8M7 5v8a3 3 0 0 0 3 3h1"></svg:path>`,
})
export class TablerTransactionYuanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransferIcon],svg[tabler-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 10H4l5.5-6M4 14h16l-5.5 6"></svg:path>`,
})
export class TablerTransferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransferInIcon],svg[tabler-transfer-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 18v3h16V7l-8-4l-8 4v3m0 4h9"></svg:path><svg:path d="m10 11l3 3l-3 3"></svg:path></svg:g>`,
})
export class TablerTransferInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransferOutIcon],svg[tabler-transfer-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 19v2h16V7l-8-4l-8 4v2m9 5H4"></svg:path><svg:path d="m7 11l-3 3l3 3"></svg:path></svg:g>`,
})
export class TablerTransferOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransferVerticalIcon],svg[tabler-transfer-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4v16l-6-5.5M14 20V4l6 5.5"></svg:path>`,
})
export class TablerTransferVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransformIcon],svg[tabler-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0m18 5V8a2 2 0 0 0-2-2h-6l3 3m0-6l-3 3M3 13v3a2 2 0 0 0 2 2h6l-3-3m0 6l3-3m4 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path>`,
})
export class TablerTransformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransformFilledIcon],svg[tabler-transform-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14a4 4 0 1 1-3.995 4.2L14 18l.005-.2A4 4 0 0 1 18 14M16.707 2.293a1 1 0 0 1 .083 1.32l-.083.094L15.414 5H19a3 3 0 0 1 2.995 2.824L22 8v3a1 1 0 0 1-1.993.117L20 11V8a1 1 0 0 0-.883-.993L19 7h-3.585l1.292 1.293a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a.98.98 0 0 1-.28-.872l.036-.146l.04-.104q.087-.191.245-.334l2.959-2.958a1 1 0 0 1 1.414 0M3 12a1 1 0 0 1 .993.883L4 13v3a1 1 0 0 0 .883.993L5 17h3.585l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083l.094.083l3 3a.98.98 0 0 1 .28.872l-.036.146l-.04.104a1 1 0 0 1-.245.334l-2.959 2.958a1 1 0 0 1-1.497-1.32l.083-.094L8.584 19H5a3 3 0 0 1-2.995-2.824L2 16v-3a1 1 0 0 1 1-1M6 2a4 4 0 1 1-3.995 4.2L2 6l.005-.2A4 4 0 0 1 6 2"></svg:path>`,
})
export class TablerTransformFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransformPointIcon],svg[tabler-transform-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM11 5h2m-8 6v2m14-2v2m-8 6h2"></svg:path>`,
})
export class TablerTransformPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransformPointBottomLeftIcon],svg[tabler-transform-point-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path><svg:path fill="currentColor" d="M3 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path><svg:path d="M17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM11 5h2m-8 6v2m14-2v2m-8 6h2"></svg:path></svg:g>`,
})
export class TablerTransformPointBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransformPointBottomRightIcon],svg[tabler-transform-point-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"></svg:path><svg:path fill="currentColor" d="M17 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"></svg:path><svg:path d="M11 5h2m-8 6v2m14-2v2m-8 6h2"></svg:path></svg:g>`,
})
export class TablerTransformPointBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransformPointTopLeftIcon],svg[tabler-transform-point-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path><svg:path d="M3 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM11 5h2m-8 6v2m14-2v2m-8 6h2"></svg:path></svg:g>`,
})
export class TablerTransformPointTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransformPointTopRightIcon],svg[tabler-transform-point-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path><svg:path fill="currentColor" d="M17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"></svg:path><svg:path d="M17 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM11 5h2m-8 6v2m14-2v2m-8 6h2"></svg:path></svg:g>`,
})
export class TablerTransformPointTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransitionBottomIcon],svg[tabler-transition-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3m9 3v8m-3-3l3 3l3-3"></svg:path>`,
})
export class TablerTransitionBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransitionBottomFilledIcon],svg[tabler-transition-bottom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17a1 1 0 0 1 1 1a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4a1 1 0 0 1 2 0a2 2 0 0 0 2 2h12a2 2 0 0 0 1.995-1.85L20 18a1 1 0 0 1 1-1m-9 1l-.082-.004l-.119-.016l-.111-.03l-.111-.044l-.098-.052l-.096-.067l-.09-.08l-3-3a1 1 0 0 1 1.414-1.414L11 14.586V10H6a4 4 0 1 1 0-8h12a4 4 0 1 1 0 8h-5v4.583l1.293-1.29a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3l-.112.097l-.11.071l-.062.031l-.081.034l-.076.024l-.149.03z"></svg:path>`,
})
export class TablerTransitionBottomFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransitionLeftIcon],svg[tabler-transition-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m15 3v12a3 3 0 0 1-6 0V6a3 3 0 0 1 6 0m-6 6H7m3-3l-3 3l3 3"></svg:path>`,
})
export class TablerTransitionLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransitionLeftFilledIcon],svg[tabler-transition-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a1 1 0 1 1 0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 1.85 1.995L6 20a1 1 0 0 1 0 2a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m12 0a4 4 0 0 1 4 4v12a4 4 0 1 1-8 0v-5H9.415l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-3-3l-.097-.112l-.071-.11l-.031-.062l-.034-.081l-.024-.076l-.025-.118l-.007-.058L6 11.982l.003-.064l.017-.119l.03-.111l.044-.111l.052-.098l.067-.096l.08-.09l3-3a1 1 0 0 1 1.414 1.414L9.415 11H14V6a4 4 0 0 1 4-4"></svg:path>`,
})
export class TablerTransitionLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransitionRightIcon],svg[tabler-transition-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3M3 18V6a3 3 0 1 1 6 0v12a3 3 0 0 1-6 0m6-6h8m-3 3l3-3l-3-3"></svg:path>`,
})
export class TablerTransitionRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransitionRightFilledIcon],svg[tabler-transition-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4a1 1 0 0 1-.117-1.993L18 20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2a1 1 0 0 1 0-2m-8 16a4 4 0 1 1-8 0V6a4 4 0 1 1 8 0v5h4.585l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0l3 3l.097.112l.071.11l.031.062l.034.081l.024.076l.03.148L18 12l-.004.085l-.016.116l-.03.111l-.044.111l-.052.098l-.074.104l-.073.082l-3 3a1 1 0 0 1-1.414-1.414L14.585 13H10z"></svg:path>`,
})
export class TablerTransitionRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransitionTopIcon],svg[tabler-transition-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3m3 15h12a3 3 0 0 0 0-6H6a3 3 0 0 0 0 6m6-6V7m-3 3l3-3l3 3"></svg:path>`,
})
export class TablerTransitionTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTransitionTopFilledIcon],svg[tabler-transition-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l.081.003l.12.017l.111.03l.111.044l.098.052l.104.074l.082.073l3 3a1 1 0 1 1-1.414 1.414L13 9.415V14h5a4 4 0 1 1 0 8H6a4 4 0 1 1 0-8h5V9.415l-1.293 1.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414l3-3l.112-.097l.11-.071l.062-.031l.081-.034l.076-.024l.118-.025l.058-.007zm6-4a4 4 0 0 1 4 4a1 1 0 0 1-1.993.117L20 6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2a1 1 0 1 1-2 0a4 4 0 0 1 4-4z"></svg:path>`,
})
export class TablerTransitionTopFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrashIcon],svg[tabler-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></svg:path>`,
})
export class TablerTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrashFilledIcon],svg[tabler-trash-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a1 1 0 0 1 .117 1.993L20 8h-.081L19 19a3 3 0 0 1-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 0 1-.117-1.993L4 6zm-6-4a2 2 0 0 1 2 2a1 1 0 0 1-1.993.117L14 4h-4l-.007.117A1 1 0 0 1 8 4a2 2 0 0 1 1.85-1.995L10 2z"></svg:path>`,
})
export class TablerTrashFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrashOffIcon],svg[tabler-trash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18M4 7h3m4 0h9m-10 4v6m4-3v3M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l.077-.923m.307-3.704L19 7M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></svg:path>`,
})
export class TablerTrashOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrashXIcon],svg[tabler-trash-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3m-5 5l4 4m0-4l-4 4"></svg:path>`,
})
export class TablerTrashXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrashXFilledIcon],svg[tabler-trash-x-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a1 1 0 0 1 .117 1.993L20 8h-.081L19 19a3 3 0 0 1-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 0 1-.117-1.993L4 6zm-9.489 5.14a1 1 0 0 0-1.218 1.567L10.585 14l-1.292 1.293l-.083.094a1 1 0 0 0 1.497 1.32L12 15.415l1.293 1.292l.094.083a1 1 0 0 0 1.32-1.497L13.415 14l1.292-1.293l.083-.094a1 1 0 0 0-1.497-1.32L12 12.585l-1.293-1.292l-.094-.083zM14 2a2 2 0 0 1 2 2a1 1 0 0 1-1.993.117L14 4h-4l-.007.117A1 1 0 0 1 8 4a2 2 0 0 1 1.85-1.995L10 2z"></svg:path>`,
})
export class TablerTrashXFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTreadmillIcon],svg[tabler-treadmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0M3 14l4 1l.5-.5M12 18v-3l-3-2.923L9.75 7"></svg:path><svg:path d="M6 10V8l4-1l2.5 2.5l2.5.5m6 12a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m15-1l1-11l2-1"></svg:path></svg:g>`,
})
export class TablerTreadmillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTreeIcon],svg[tabler-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 13l-2-2m2 1l2-2m-2 11V8m-2.176 8a3 3 0 0 1-2.743-3.69a3 3 0 0 1 .304-4.833A3 3 0 0 1 12 3.77a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833A3 3 0 0 1 14 16.005h-4z"></svg:path>`,
})
export class TablerTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTreesIcon],svg[tabler-trees-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 5l3 3l-2 1l4 4l-3 1l4 4h-9m2 3v-3m-7-5l-2-2m2 1l2-2M8 21V8m-2.176 8a3 3 0 0 1-2.743-3.69a3 3 0 0 1 .304-4.833A3 3 0 0 1 8 3.77a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833A3 3 0 0 1 10 16.005H6z"></svg:path>`,
})
export class TablerTreesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrekkingIcon],svg[tabler-trekking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M7 21l2-4m4 4v-4l-3-3l1-6l3 4l3 2"></svg:path><svg:path d="m10 14l-1.827-1.218a2 2 0 0 1-.831-2.15l.28-1.117A2 2 0 0 1 9.561 8H11l4 1l3-2m-1 5v9m-1-1h2"></svg:path></svg:g>`,
})
export class TablerTrekkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrendingDownIcon],svg[tabler-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 7l6 6l4-4l8 8"></svg:path><svg:path d="M21 10v7h-7"></svg:path></svg:g>`,
})
export class TablerTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrendingDown2Icon],svg[tabler-trending-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 6h5l7 10h6"></svg:path><svg:path d="m18 19l3-3l-3-3"></svg:path></svg:g>`,
})
export class TablerTrendingDown2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrendingDown3Icon],svg[tabler-trending-down-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 6h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734A5 5 0 0 0 17.603 16H21"></svg:path><svg:path d="m18 19l3-3l-3-3"></svg:path></svg:g>`,
})
export class TablerTrendingDown3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrendingUpIcon],svg[tabler-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 17l6-6l4 4l8-8"></svg:path><svg:path d="M14 7h7v7"></svg:path></svg:g>`,
})
export class TablerTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrendingUp2Icon],svg[tabler-trending-up-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18 5l3 3l-3 3"></svg:path><svg:path d="M3 18h5l7-10h6"></svg:path></svg:g>`,
})
export class TablerTrendingUp2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrendingUp3Icon],svg[tabler-trending-up-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18 5l3 3l-3 3"></svg:path><svg:path d="M3 18h2.397a5 5 0 0 0 4.096-2.133l4.014-5.734A5 5 0 0 1 17.603 8H21"></svg:path></svg:g>`,
})
export class TablerTrendingUp3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleIcon],svg[tabler-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.363 3.591L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0z"></svg:path>`,
})
export class TablerTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleFilledIcon],svg[tabler-triangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.67a2.91 2.91 0 0 0-2.492 1.403L1.398 16.61a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503-4.371L14.494 3.078A2.92 2.92 0 0 0 12 1.67"></svg:path>`,
})
export class TablerTriangleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleInvertedIcon],svg[tabler-triangle-inverted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.363 20.405L2.257 6.871A1.914 1.914 0 0 1 3.893 4h16.214a1.914 1.914 0 0 1 1.636 2.871l-8.106 13.534a1.914 1.914 0 0 1-3.274 0"></svg:path>`,
})
export class TablerTriangleInvertedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleInvertedFilledIcon],svg[tabler-triangle-inverted-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.118 3H3.893A2.914 2.914 0 0 0 1.39 7.371L9.506 20.92a2.917 2.917 0 0 0 4.987.005l8.11-13.539A2.914 2.914 0 0 0 20.117 3z"></svg:path>`,
})
export class TablerTriangleInvertedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleMinusIcon],svg[tabler-triangle-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.363 3.591L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0zM9 13h6"></svg:path>`,
})
export class TablerTriangleMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleMinus2Icon],svg[tabler-triangle-minus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.48 15.016L13.637 3.59a1.914 1.914 0 0 0-3.274 0L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871H12M16 19h6"></svg:path>`,
})
export class TablerTriangleMinus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleOffIcon],svg[tabler-triangle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.825 7.83l-5.568 9.295a1.914 1.914 0 0 0 1.636 2.871H20m1.998-1.99a1.9 1.9 0 0 0-.255-.88L13.637 3.59a1.914 1.914 0 0 0-3.274 0L9.335 5.308M3 3l18 18"></svg:path>`,
})
export class TablerTriangleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrianglePlusIcon],svg[tabler-triangle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.363 3.591L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0zM9 13h6m-3-3v6"></svg:path>`,
})
export class TablerTrianglePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrianglePlus2Icon],svg[tabler-triangle-plus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.69 12.027L13.636 3.59a1.914 1.914 0 0 0-3.274 0L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871H12M16 19h6m-3-3v6"></svg:path>`,
})
export class TablerTrianglePlus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleSquareCircleIcon],svg[tabler-triangle-square-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 3l-4 7h8zm2 14a3 3 0 1 0 6 0a3 3 0 1 0-6 0M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path>`,
})
export class TablerTriangleSquareCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleSquareCircleFilledIcon],svg[tabler-triangle-square-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.132 2.504l-4 7A1 1 0 0 0 8 11h8a1 1 0 0 0 .868-1.496l-4-7a1 1 0 0 0-1.736 0M17 13a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13m-8 0H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"></svg:path>`,
})
export class TablerTriangleSquareCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrianglesIcon],svg[tabler-triangles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.974 21h8.052a.975.975 0 0 0 .81-1.517l-4.025-6.048a.973.973 0 0 0-1.622 0l-4.025 6.048A.977.977 0 0 0 9.974 21"></svg:path><svg:path d="M4.98 16h14.04c.542 0 .98-.443.98-.989a1 1 0 0 0-.156-.534l-7.02-11.023a.974.974 0 0 0-1.648 0l-7.02 11.023a1 1 0 0 0 .294 1.366a.97.97 0 0 0 .53.157"></svg:path></svg:g>`,
})
export class TablerTrianglesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTridentIcon],svg[tabler-trident-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 6l2-2v3a7 7 0 0 0 14 0V4l2 2"></svg:path><svg:path d="M12 21V3l-2 2m4 0l-2-2"></svg:path></svg:g>`,
})
export class TablerTridentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrolleyIcon],svg[tabler-trolley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-3-3l3 2m3-1l8-12m-3 5l2 1M9.592 4.695l3.306 2.104a1.3 1.3 0 0 1 .396 1.8L10.2 13.41a1.3 1.3 0 0 1-1.792.394L5.102 11.7a1.3 1.3 0 0 1-.396-1.8L7.8 5.09a1.3 1.3 0 0 1 1.792-.394z"></svg:path>`,
})
export class TablerTrolleyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrolleyFilledIcon],svg[tabler-trolley-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.555 4.168a1 1 0 0 1 .277 1.387l-2.621 3.932l1.236.619a1 1 0 0 1-.894 1.788l-1.46-.73l-3.876 5.815A3 3 0 1 1 8 19l.005-.176q.008-.135.027-.267l-2.587-1.725a1 1 0 0 1 1.11-1.664l2.424 1.615a2.99 2.99 0 0 1 2.464-.75l7.725-11.588a1 1 0 0 1 1.387-.277M9.988 3.769l.14.082l3.307 2.104a2.3 2.3 0 0 1 .7 3.185l-3.094 4.81a2.3 2.3 0 0 1-3.17.698l-3.306-2.104a2.3 2.3 0 0 1-.7-3.185l3.094-4.81a2.3 2.3 0 0 1 3.029-.78"></svg:path>`,
})
export class TablerTrolleyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrophyIcon],svg[tabler-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8m-4-4v4M7 4h10m0 0v8a5 5 0 0 1-10 0V4M3 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path>`,
})
export class TablerTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrophyFilledIcon],svg[tabler-trophy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerTrophyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrophyOffIcon],svg[tabler-trophy-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8m-4-4v4M8 4h9m0 0v8q0 .465-.082.905m-1.384 2.632A5 5 0 0 1 7 12V7M3 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 3l18 18"></svg:path>`,
})
export class TablerTrophyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTrowelIcon],svg[tabler-trowel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.42 9.058l-5.362 5.363a1.978 1.978 0 0 1-3.275-.773L3.101 5.604a1.978 1.978 0 0 1 2.502-2.502l8.045 2.682a1.978 1.978 0 0 1 .773 3.274zM10 10l6.5 6.5m2.847.075l1.08 1.079a1.96 1.96 0 0 1-2.773 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772"></svg:path>`,
})
export class TablerTrowelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTruckIcon],svg[tabler-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M5 17H3V6a1 1 0 0 1 1-1h9v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5"></svg:path></svg:g>`,
})
export class TablerTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTruckDeliveryIcon],svg[tabler-truck-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5M3 9h4"></svg:path></svg:g>`,
})
export class TablerTruckDeliveryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTruckFilledIcon],svg[tabler-truck-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4a1 1 0 0 1 1 1h4a1 1 0 0 1 .783.378l.074.108l3 5l.055.103l.04.107l.029.109l.016.11L22 11v6a1 1 0 0 1-1 1h-1.171a3.001 3.001 0 0 1-5.658 0H9.829a3.001 3.001 0 0 1-5.658 0H3a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2zM7 16a1 1 0 1 0 0 2a1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m.434-9H14v3h5.234z"></svg:path>`,
})
export class TablerTruckFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTruckLoadingIcon],svg[tabler-truck-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15"></svg:path><svg:path d="M9 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zM7 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class TablerTruckLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTruckOffIcon],svg[tabler-truck-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.585-1.414a2 2 0 0 0 2.826 2.831"></svg:path><svg:path d="M5 17H3V6a1 1 0 0 1 1-1h1m3.96 0H13v4m0 4v4m-4 0h6m6 0v-6h-6m-2-5h5l3 5M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerTruckOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTruckReturnIcon],svg[tabler-truck-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M5 17H3V6a1 1 0 0 1 1-1h9v6H8l2 2m0-4l-2 2m1 6h6M13 6h5l3 5v6h-2"></svg:path></svg:g>`,
})
export class TablerTruckReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTxtIcon],svg[tabler-txt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8h4M5 8v8m12-8h4m-2 0v8m-9-8l4 8m-4 0l4-8"></svg:path>`,
})
export class TablerTxtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTypefaceIcon],svg[tabler-typeface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M17 17a2 2 0 0 1-2-2V7h-5a2 2 0 0 0-2 2"></svg:path><svg:path d="M7 17a2.775 2.775 0 0 0 2.632-1.897L10 14a13.4 13.4 0 0 1 3.236-5.236L15 7m-5 7h5"></svg:path></svg:g>`,
})
export class TablerTypefaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTypographyIcon],svg[tabler-typography-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h3m7 0h7M6.9 15h6.9m-3.6-8.7L16 20M5 20l6-16h2l7 16"></svg:path>`,
})
export class TablerTypographyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerTypographyOffIcon],svg[tabler-typography-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h3m7 0h6M6.9 15h6.9m-.8-2l3 7M5 20L9.09 9.094m1.091-2.911L11 4h2l3.904 8.924M3 3l18 18"></svg:path>`,
})
export class TablerTypographyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUTurnLeftIcon],svg[tabler-u-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 20V8.5a4.5 4.5 0 1 0-9 0V17"></svg:path><svg:path d="m11 14l-3 3l-3-3"></svg:path></svg:g>`,
})
export class TablerUTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUTurnRightIcon],svg[tabler-u-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 20V8.5a4.5 4.5 0 0 1 9 0V17"></svg:path><svg:path d="m13 14l3 3l3-3"></svg:path></svg:g>`,
})
export class TablerUTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUfoIcon],svg[tabler-ufo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.95 9.01c3.02.739 5.05 2.123 5.05 3.714C22 15.091 17.52 17 12 17S2 15.091 2 12.724C2 11.134 4.04 9.739 7.07 9"></svg:path><svg:path d="M7 9c0 1.105 2.239 2 5 2s5-.895 5-2v-.035C17 6.223 14.761 4 12 4S7 6.223 7 8.965zm8 8l2 3m-8.5-3L7 20m5-6h.01M7 13h.01M17 13h.01"></svg:path></svg:g>`,
})
export class TablerUfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUfoOffIcon],svg[tabler-ufo-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.95 9.01c3.02.739 5.05 2.123 5.05 3.714c0 1.08-.931 2.063-2.468 2.814m-3 1c-1.36.295-2.9.462-4.531.462c-5.52 0-10-1.909-10-4.276c0-1.59 2.04-2.985 5.07-3.724"></svg:path><svg:path d="M14.69 10.686C16.078 10.331 17 9.71 17 9v-.035C17 6.223 14.761 4 12 4c-1.125 0-2.164.37-3 .992M7.293 7.289A4.9 4.9 0 0 0 7 8.965V9c0 .961 1.696 1.764 3.956 1.956M15 17l2 3m-8.5-3L7 20m5-6h.01M7 13h.01M17 13h.01M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerUfoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUhdIcon],svg[tabler-uhd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16V8m0 4h4m0-4v8m3-8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM3 8v6a2 2 0 1 0 4 0V8"></svg:path>`,
})
export class TablerUhdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUmbrellaIcon],svg[tabler-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a8 8 0 0 1 16 0zm8 0v6a2 2 0 0 0 4 0"></svg:path>`,
})
export class TablerUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUmbrella2Icon],svg[tabler-umbrella-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.343 7.343a8 8 0 1 1 11.314 11.314zm5.485 5.997l-4.242 4.243a2 2 0 1 0 2.828 2.828"></svg:path>`,
})
export class TablerUmbrella2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUmbrellaClosedIcon],svg[tabler-umbrella-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 16l3-13l3 13zm3 0v3c0 2.667 4 2.667 4 0"></svg:path>`,
})
export class TablerUmbrellaClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUmbrellaClosed2Icon],svg[tabler-umbrella-closed-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.697 12.071L18.01 5l-7.07 11.314zm2.046 2.404l-2.121 2.121c-1.886 1.886.943 4.715 2.828 2.829"></svg:path>`,
})
export class TablerUmbrellaClosed2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUmbrellaFilledIcon],svg[tabler-umbrella-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 1 9 9a1 1 0 0 1-.883.993L20 13h-7v5a1 1 0 0 0 1.993.117L15 18a1 1 0 0 1 2 0a3 3 0 0 1-5.995.176L11 18v-5H4a1 1 0 0 1-.993-.883L3 12a9 9 0 0 1 9-9"></svg:path>`,
})
export class TablerUmbrellaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUmbrellaOffIcon],svg[tabler-umbrella-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12H4c0-2.209.895-4.208 2.342-5.656m2.382-1.645A8 8 0 0 1 20 12h-4m-4 0v6a2 2 0 1 0 4 0M3 3l18 18"></svg:path>`,
})
export class TablerUmbrellaOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUnderlineIcon],svg[tabler-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 5v5a5 5 0 0 0 10 0V5M5 19h14"></svg:path>`,
})
export class TablerUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUniverseIcon],svg[tabler-universe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.027 11.477a5 5 0 1 0 5.496-4.45a4.95 4.95 0 0 0-3.088.681"></svg:path><svg:path d="M5.636 5.636a9 9 0 1 0 3.555-2.188"></svg:path><svg:path d="M17 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-6 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-3 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class TablerUniverseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUnlinkIcon],svg[tabler-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 22v-2m-8-5l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.07 5.07 0 0 1-7.127 0a4.97 4.97 0 0 1 0-7.071L6 11m14 6h2M2 7h2m3-5v2"></svg:path>`,
})
export class TablerUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUploadIcon],svg[tabler-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5-5l5 5m-5-5v12"></svg:path>`,
})
export class TablerUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUrgentIcon],svg[tabler-urgent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16v-4a4 4 0 0 1 8 0v4M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M6 17a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"></svg:path>`,
})
export class TablerUrgentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUsbIcon],svg[tabler-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-2V5.5M7 10v3l5 3m0-1.5l5-2V10m-1 0h2V8h-2z"></svg:path><svg:path d="M6 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4-3.5h4L12 3z"></svg:path></svg:g>`,
})
export class TablerUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserIcon],svg[tabler-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></svg:path>`,
})
export class TablerUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserBitcoinIcon],svg[tabler-user-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5a1.5 1.5 0 0 1 0 3H16m3-3h.5a1.5 1.5 0 0 0 0-3H16M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3"></svg:path>`,
})
export class TablerUserBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserBoltIcon],svg[tabler-user-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4q.402 0 .781.076M19 16l-2 3h4l-2 3"></svg:path>`,
})
export class TablerUserBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserCancelIcon],svg[tabler-user-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3.5m2.5 4a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1 2l4-4"></svg:path>`,
})
export class TablerUserCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserCheckIcon],svg[tabler-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4m1 4l2 2l4-4"></svg:path>`,
})
export class TablerUserCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserCircleIcon],svg[tabler-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M9 10a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-2.832 8.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855"></svg:path></svg:g>`,
})
export class TablerUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserCodeIcon],svg[tabler-user-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3.5m6.5 6l2-2l-2-2m-3 0l-2 2l2 2"></svg:path>`,
})
export class TablerUserCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserCogIcon],svg[tabler-user-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h2.5m4.501 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-3.5V17m0 4v1.5m3.031-5.25l-1.299.75m-3.463 2l-1.3.75m0-3.5l1.3.75m3.463 2l1.3.75"></svg:path>`,
})
export class TablerUserCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserDollarIcon],svg[tabler-user-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3m8 0h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1"></svg:path>`,
})
export class TablerUserDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserDownIcon],svg[tabler-user-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4q.515.001.99.124M19 16v6m3-3l-3 3l-3-3"></svg:path>`,
})
export class TablerUserDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserEditIcon],svg[tabler-user-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3.5m4.92.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"></svg:path>`,
})
export class TablerUserEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserExclamationIcon],svg[tabler-user-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4q.524.002 1.008.128M19 16v3m0 3v.01"></svg:path>`,
})
export class TablerUserExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserFilledIcon],svg[tabler-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a5 5 0 1 1-5 5l.005-.217A5 5 0 0 1 12 2m2 12a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5z"></svg:path>`,
})
export class TablerUserFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserHeartIcon],svg[tabler-user-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h.5m7.5 7l3.35-3.284a2.143 2.143 0 0 0 .005-3.071a2.24 2.24 0 0 0-3.129-.006l-.224.22l-.223-.22a2.24 2.24 0 0 0-3.128-.006a2.143 2.143 0 0 0-.006 3.071z"></svg:path>`,
})
export class TablerUserHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserHexagonIcon],svg[tabler-user-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-5.799 5.744A4 4 0 0 1 10 16h4a4 4 0 0 1 3.798 2.741"></svg:path><svg:path d="M19.875 6.27c.7.398 1.13 1.143 1.125 1.948v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z"></svg:path></svg:g>`,
})
export class TablerUserHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserMinusIcon],svg[tabler-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4q.523.002 1.009.128M16 19h6"></svg:path>`,
})
export class TablerUserMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserOffIcon],svg[tabler-user-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.18 8.189a4.01 4.01 0 0 0 2.616 2.627m3.507-.545a4 4 0 1 0-5.59-5.552M6 21v-2a4 4 0 0 1 4-4h4c.412 0 .81.062 1.183.178m2.633 2.618c.12.38.184.785.184 1.204v2M3 3l18 18"></svg:path>`,
})
export class TablerUserOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserPauseIcon],svg[tabler-user-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3.5m3.5 2v5m4-5v5"></svg:path>`,
})
export class TablerUserPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserPentagonIcon],svg[tabler-user-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13.163 2.168l8.021 5.828c.694.504.984 1.397.719 2.212l-3.064 9.43a1.98 1.98 0 0 1-1.881 1.367H7.042a1.98 1.98 0 0 1-1.881-1.367l-3.064-9.43a1.98 1.98 0 0 1 .719-2.212l8.021-5.828a1.98 1.98 0 0 1 2.326 0"></svg:path><svg:path d="M12 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-6 7.703V20a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v.707"></svg:path></svg:g>`,
})
export class TablerUserPentagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserPinIcon],svg[tabler-user-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h2.5m8.621 5.121a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"></svg:path>`,
})
export class TablerUserPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserPlusIcon],svg[tabler-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0m8 12h6m-3-3v6M6 21v-2a4 4 0 0 1 4-4h4"></svg:path>`,
})
export class TablerUserPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserQuestionIcon],svg[tabler-user-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3.5m5.5 7v.01M19 19a2.003 2.003 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path>`,
})
export class TablerUserQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserScanIcon],svg[tabler-user-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2M8 16a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"></svg:path>`,
})
export class TablerUserScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserScreenIcon],svg[tabler-user-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.03 17.818A3 3 0 0 0 21 15V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8c0 1.317.85 2.436 2.03 2.84"></svg:path><svg:path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"></svg:path></svg:g>`,
})
export class TablerUserScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserSearchIcon],svg[tabler-user-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h1.5m3.5 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path>`,
})
export class TablerUserSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserShareIcon],svg[tabler-user-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3m3 7l5-5m0 4.5V17h-4.5"></svg:path>`,
})
export class TablerUserShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserShieldIcon],svg[tabler-user-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 21v-2a4 4 0 0 1 4-4h2m10 1c0 4-2.5 6-3.5 6S15 20 15 16c1 0 2.5-.5 3.5-1.5c1 1 2.5 1.5 3.5 1.5M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0"></svg:path>`,
})
export class TablerUserShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserSquareIcon],svg[tabler-user-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0-6 0M6 21v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1"></svg:path><svg:path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class TablerUserSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserSquareRoundedIcon],svg[tabler-user-square-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9"></svg:path><svg:path d="M6 20.05V20a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v.05"></svg:path></svg:g>`,
})
export class TablerUserSquareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserStarIcon],svg[tabler-user-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h.5m7.3 5.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411z"></svg:path>`,
})
export class TablerUserStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserUpIcon],svg[tabler-user-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4m5 7v-6m3 3l-3-3l-3 3"></svg:path>`,
})
export class TablerUserUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUserXIcon],svg[tabler-user-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3.5m8.5 7l-5-5m0 5l5-5"></svg:path>`,
})
export class TablerUserXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUsersIcon],svg[tabler-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"></svg:path>`,
})
export class TablerUsersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUsersGroupIcon],svg[tabler-users-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 8v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1M15 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2 5h2a2 2 0 0 1 2 2v1M5 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 8v-1a2 2 0 0 1 2-2h2"></svg:path>`,
})
export class TablerUsersGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUsersMinusIcon],svg[tabler-users-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M3 21v-2a4 4 0 0 1 4-4h4c.948 0 1.818.33 2.504.88M16 3.13a4 4 0 0 1 0 7.75M16 19h6"></svg:path>`,
})
export class TablerUsersMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUsersPlusIcon],svg[tabler-users-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M3 21v-2a4 4 0 0 1 4-4h4c.96 0 1.84.338 2.53.901M16 3.13a4 4 0 0 1 0 7.75M16 19h6m-3-3v6"></svg:path>`,
})
export class TablerUsersPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUvIndexIcon],svg[tabler-uv-index-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m16 0h1M5.6 5.6l.7.7m12.1-.7l-.7.7M8 12a4 4 0 1 1 8 0m-4-8V3m1 13l2 5h1l2-5M6 16v3a2 2 0 1 0 4 0v-3"></svg:path>`,
})
export class TablerUvIndexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerUxCircleIcon],svg[tabler-ux-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M7 10v2a2 2 0 1 0 4 0v-2m3 0l3 4m-3 0l3-4"></svg:path></svg:g>`,
})
export class TablerUxCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVaccineIcon],svg[tabler-vaccine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 3l4 4m-2-2l-4.5 4.5m-3-3l6 6m-1-1L10 18H6v-4l6.5-6.5m-5 5L9 14m1.5-4.5L12 11M3 21l3-3"></svg:path>`,
})
export class TablerVaccineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVaccineBottleIcon],svg[tabler-vaccine-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm1 2v.98c0 .877-.634 1.626-1.5 1.77S7 9.643 7 10.52V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8.48c0-.877-.634-1.626-1.5-1.77A1.795 1.795 0 0 1 14 6.98V6m-7 6h10M7 18h10m-6-3h2"></svg:path>`,
})
export class TablerVaccineBottleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVaccineBottleOffIcon],svg[tabler-vaccine-bottle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4M8.7 8.705a2 2 0 0 1-.2.045c-.866.144-1.5.893-1.5 1.77V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2m0-4v-2.48c0-.877-.634-1.626-1.5-1.77A1.795 1.795 0 0 1 14 6.98V6m-7 6h5m4 0h1M7 18h10m-6-3h2M3 3l18 18"></svg:path>`,
})
export class TablerVaccineBottleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVaccineOffIcon],svg[tabler-vaccine-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 3l4 4m-2-2l-4.5 4.5m-3-3l6 6m-1-1l-.5.5m-2 2l-4 4H6v-4l4-4m2-2l.5-.5m-5 5L9 14m-6 7l3-3M3 3l18 18"></svg:path>`,
})
export class TablerVaccineOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVacuumCleanerIcon],svg[tabler-vacuum-cleaner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 7h.01"></svg:path></svg:g>`,
})
export class TablerVacuumCleanerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVariableIcon],svg[tabler-variable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 4C2.5 9 2.5 14 5 20M19 4c2.5 5 2.5 10 0 16M9 9h1c1 0 1 1 2.016 3.527C13 15 13 16 14 16h1"></svg:path><svg:path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9"></svg:path></svg:g>`,
})
export class TablerVariableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVariableMinusIcon],svg[tabler-variable-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9"></svg:path><svg:path d="M5 4C2.5 9 2.5 14 5 20M19 4c1.775 3.55 2.29 7.102 1.544 11.01M9 9h1c1 0 1 1 2.016 3.527c.782 1.966.943 3 1.478 3.343"></svg:path><svg:path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9m0 10h6"></svg:path></svg:g>`,
})
export class TablerVariableMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVariableOffIcon],svg[tabler-variable-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.675 4.68C2.505 9.456 2.613 14.272 5 20M19 4c1.959 3.917 2.383 7.834 1.272 12.232m-.983 3.051q-.14.357-.289.717m-7.304-8.304q.141.385.32.831C13 15 13 16 14 16h1"></svg:path><svg:path d="M8 16c1.5 0 3-2 4-3.5m2.022-2.514C14.651 9.404 15.326 9 16 9M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerVariableOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVariablePlusIcon],svg[tabler-variable-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 4C2.5 9 2.5 14 5 20M19 4c1.38 2.76 2 5.52 1.855 8.448M9 9h1c1 0 1 1 2.016 3.527c.785 1.972.944 3.008 1.483 3.346"></svg:path><svg:path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9m0 10h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerVariablePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVectorIcon],svg[tabler-vector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM5 7v10M19 7v10M7 5h10M7 19h10"></svg:path>`,
})
export class TablerVectorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVectorBezierIcon],svg[tabler-vector-bezier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm-7-8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 1.5A6 6 0 0 0 5 14m9-5.5a6 6 0 0 1 5 5.5m-9-6H4m16 0h-6M2 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0m18 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path>`,
})
export class TablerVectorBezierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVectorBezier2Icon],svg[tabler-vector-bezier-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm14 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM7 5h7m-4 14h7m-9 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5"></svg:path></svg:g>`,
})
export class TablerVectorBezier2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVectorBezierArcIcon],svg[tabler-vector-bezier-arc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm-7-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm9-8a5 5 0 0 0-5-5m-9 9a5 5 0 0 0 5 5m-5-9a5 5 0 0 1 5-5"></svg:path>`,
})
export class TablerVectorBezierArcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVectorBezierCircleIcon],svg[tabler-vector-bezier-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm-7-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm9-8a5 5 0 0 0-5-5m5 9a5 5 0 0 1-5 5m-9-5a5 5 0 0 0 5 5m-5-9a5 5 0 0 1 5-5"></svg:path>`,
})
export class TablerVectorBezierCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVectorOffIcon],svg[tabler-vector-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.68 6.733A1 1 0 0 1 6 7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 .293-.708M17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3.72 16.693A1 1 0 0 1 20 21h-2a1 1 0 0 1-1-1v-2c0-.282.116-.536.304-.718M3 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM5 7v10M19 7v8M9 5h8M7 19h10M3 3l18 18"></svg:path>`,
})
export class TablerVectorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVectorSplineIcon],svg[tabler-vector-spline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM17 5C10.373 5 5 10.373 5 17"></svg:path>`,
})
export class TablerVectorSplineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVectorTriangleIcon],svg[tabler-vector-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm-10.5-.9l5-9.1m6 9.1l-5-9.1M7 19h10"></svg:path>`,
})
export class TablerVectorTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVectorTriangleOffIcon],svg[tabler-vector-triangle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1M3 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm17.705 2.709A1 1 0 0 1 20 21h-2a1 1 0 0 1-1-1v-2c0-.28.115-.532.3-.714M6.5 17.1l3.749-6.823m2.909-1.08L12.5 8M7 19h10M3 3l18 18"></svg:path>`,
})
export class TablerVectorTriangleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVenusIcon],svg[tabler-venus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9a5 5 0 1 0 10 0A5 5 0 1 0 7 9m5 5v7m-3-3h6"></svg:path>`,
})
export class TablerVenusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVersionsIcon],svg[tabler-versions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zM7 7v10M4 8v8"></svg:path>`,
})
export class TablerVersionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVersionsFilledIcon],svg[tabler-versions-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h-6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M7 6a1 1 0 0 1 .993.883L8 7v10a1 1 0 0 1-1.993.117L6 17V7a1 1 0 0 1 1-1M4 7a1 1 0 0 1 .993.883L5 8v8a1 1 0 0 1-1.993.117L3 16V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerVersionsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVersionsOffIcon],svg[tabler-versions-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.184 6.162A2 2 0 0 1 12 5h6a2 2 0 0 1 2 2v9m-1.185 2.827A2 2 0 0 1 18 19h-6a2 2 0 0 1-2-2v-7M7 7v10M4 8v8M3 3l18 18"></svg:path>`,
})
export class TablerVersionsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVideoIcon],svg[tabler-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14zM3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TablerVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVideoFilledIcon],svg[tabler-video-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20.117 7.625a1 1 0 0 0-.564.1L15 10v4l4.553 2.275A1 1 0 0 0 21 15.383V8.617a1 1 0 0 0-.883-.992"></svg:path><svg:path d="M5 5C3.355 5 2 6.355 2 8v8c0 1.645 1.355 3 3 3h8c1.645 0 3-1.355 3-3V8c0-1.645-1.355-3-3-3z"></svg:path></svg:g>`,
})
export class TablerVideoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVideoMinusIcon],svg[tabler-video-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14zM3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 4h4"></svg:path>`,
})
export class TablerVideoMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVideoOffIcon],svg[tabler-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 3l18 18m-6-10v-1l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-.675.946"></svg:path><svg:path d="M10 6h3a2 2 0 0 1 2 2v3m0 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1"></svg:path></svg:g>`,
})
export class TablerVideoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVideoPlusIcon],svg[tabler-video-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14zM3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 4h4m-2-2v4"></svg:path>`,
})
export class TablerVideoPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerView360Icon],svg[tabler-view-360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M8 12a4 9 0 1 0 8 0a4 9 0 1 0-8 0"></svg:path><svg:path d="M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4s-4.03-4-9-4s-9 1.79-9 4"></svg:path></svg:g>`,
})
export class TablerView360Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerView360ArrowIcon],svg[tabler-view-360-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 15.328c2.414-.718 4-1.94 4-3.328c0-2.21-4.03-4-9-4s-9 1.79-9 4s4.03 4 9 4"></svg:path><svg:path d="m9 13l3 3l-3 3"></svg:path></svg:g>`,
})
export class TablerView360ArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerView360NumberIcon],svg[tabler-view-360-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3M3 5h2.5A1.5 1.5 0 0 1 7 6.5v1A1.5 1.5 0 0 1 5.5 9H4h1.5A1.5 1.5 0 0 1 7 10.5v1A1.5 1.5 0 0 1 5.5 13H3m14-6v4a2 2 0 1 0 4 0V7a2 2 0 1 0-4 0M3 16c0 1.657 4.03 3 9 3s9-1.343 9-3"></svg:path>`,
})
export class TablerView360NumberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerView360OffIcon],svg[tabler-view-360-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.335 8.388A19 19 0 0 0 8 12c0 4.97 1.79 9 4 9c1.622 0 3.018-2.172 3.646-5.294M16 12c0-4.97-1.79-9-4-9c-1.035 0-1.979.885-2.689 2.337"></svg:path><svg:path d="M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684-2.328A9 9 0 0 0 7.95 3.96"></svg:path><svg:path d="M8.32 8.349C5.184 8.974 3 10.374 3 12c0 2.21 4.03 4 9 4c1.286 0 2.51-.12 3.616-.336m3.059-.98C20.12 13.973 21 13.031 21 12c0-2.21-4.03-4-9-4M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerView360OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerViewfinderIcon],svg[tabler-viewfinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9-9v4m0 14v-3m-9-6h4m14 0h-3m-6 0v.01"></svg:path>`,
})
export class TablerViewfinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerViewfinderOffIcon],svg[tabler-viewfinder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684-2.328A9 9 0 0 0 7.95 3.96M12 3v4m0 14v-3m-9-6h4m14 0h-3m-6 0v.01M3 3l18 18"></svg:path>`,
})
export class TablerViewfinderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerViewportNarrowIcon],svg[tabler-viewport-narrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h7L7 9m0 6l3-3m11 0h-7l3-3m0 6l-3-3M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1"></svg:path>`,
})
export class TablerViewportNarrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerViewportShortIcon],svg[tabler-viewport-short-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v7l3-3M9 7l3 3m0 11v-7l3 3m-6 0l3-3m6-5h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1M6 9H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1"></svg:path>`,
})
export class TablerViewportShortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerViewportTallIcon],svg[tabler-viewport-tall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10V3l3 3M9 6l3-3m0 11v7l3-3m-6 0l3 3m6-18h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1M6 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1"></svg:path>`,
})
export class TablerViewportTallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerViewportWideIcon],svg[tabler-viewport-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12H3l3-3m0 6l-3-3m11 0h7l-3-3m0 6l3-3M3 6V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1"></svg:path>`,
})
export class TablerViewportWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVinylIcon],svg[tabler-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 3.937A9 9 0 1 0 21 12"></svg:path><svg:path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m8-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="m20 4l-3.5 10l-2.5 2"></svg:path></svg:g>`,
})
export class TablerVinylIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVipIcon],svg[tabler-vip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 19h18M4 9l2 6h1l2-6m3 0v6m4 0V9h2a2 2 0 1 1 0 4h-2"></svg:path>`,
})
export class TablerVipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVipOffIcon],svg[tabler-vip-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h2m4 0h12M3 19h16M4 9l2 6h1l2-6m3 3v3m4-3V9h2a2 2 0 1 1 0 4h-1M3 3l18 18"></svg:path>`,
})
export class TablerVipOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVirusIcon],svg[tabler-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m5-5V3m-1 0h2m2.536 5.464l2.828-2.828m-.707-.707l1.414 1.414M17 12h4m0-1v2m-5.465 2.536l2.829 2.828m.707-.707l-1.414 1.414M12 17v4m1 0h-2m-2.535-5.464l-2.829 2.828m.707.707L4.93 17.657M7 12H3m0 1v-2m5.464-2.536L5.636 5.636m-.707.707L6.343 4.93"></svg:path>`,
})
export class TablerVirusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVirusOffIcon],svg[tabler-virus-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18M8.469 8.46a5 5 0 0 0 7.058 7.084m1.386-2.608a5 5 0 0 0-5.826-5.853M12 7V3m-1 0h2m2.536 5.464l2.828-2.828m-.707-.707l1.414 1.414M17 12h4m0-1v2m-2.636 5.363l-.707.707M12 17v4m1 0h-2m-2.535-5.464l-2.829 2.828m.707.707L4.93 17.657M7 12H3m0 1v-2m2.636-5.363l-.707.707"></svg:path>`,
})
export class TablerVirusOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVirusSearchIcon],svg[tabler-virus-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12a5 5 0 1 0-5 5m0-10V3m-1 0h2m2.536 5.464l2.828-2.828m-.707-.707l1.414 1.414M17 12h4m0-1v2m-9 4v4m1 0h-2m-2.535-5.464l-2.829 2.828m.707.707L4.93 17.657M7 12H3m0 1v-2m5.464-2.536L5.636 5.636m-.707.707L6.343 4.93M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m4.5 2L22 22"></svg:path>`,
})
export class TablerVirusSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVocabularyIcon],svg[tabler-vocabulary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a2 2 0 0 1 2 2a2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a2 2 0 0 0-2 2a2 2 0 0 0-2-2m2-14v16M7 7h1m-1 4h1m8-4h1m-1 4h1m-1 4h1"></svg:path>`,
})
export class TablerVocabularyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVocabularyOffIcon],svg[tabler-vocabulary-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3h3a2 2 0 0 1 2 2a2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v13m-2 2h-5a2 2 0 0 0-2 2a2 2 0 0 0-2-2H4a1 1 0 0 1-1-1V4c0-.279.114-.53.298-.712M12 5v3m0 4v9M7 11h1m8-4h1m-1 4h1M3 3l18 18"></svg:path>`,
})
export class TablerVocabularyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVolcanoIcon],svg[tabler-volcano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 8V7a2 2 0 1 0-4 0m10 1V7a2 2 0 1 1 4 0M4 20l3.472-7.812A2 2 0 0 1 9.3 11h5.4a2 2 0 0 1 1.828 1.188L20 20"></svg:path><svg:path d="M6.192 15.064A2 2 0 0 1 6.667 15c.527-.009 1.026.178 1.333.5c.307.32.806.507 1.333.5c.527.007 1.026-.18 1.334-.5c.307-.322.806-.509 1.333-.5c.527-.009 1.026.178 1.333.5c.308.32.807.507 1.334.5c.527.007 1.026-.18 1.333-.5c.307-.322.806-.509 1.333-.5q.243.005.472.064M12 8V4"></svg:path></svg:g>`,
})
export class TablerVolcanoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVolumeIcon],svg[tabler-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a5 5 0 0 1 0 8m2.7-11a9 9 0 0 1 0 14M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5z"></svg:path>`,
})
export class TablerVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVolume2Icon],svg[tabler-volume-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a5 5 0 0 1 0 8m-9-1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5z"></svg:path>`,
})
export class TablerVolume2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVolume3Icon],svg[tabler-volume-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l3.5-4.5A.8.8 0 0 1 11 5v14a.8.8 0 0 1-1.5.5zm10-5l4 4m0-4l-4 4"></svg:path>`,
})
export class TablerVolume3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVolumeOffIcon],svg[tabler-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602A5 5 0 0 1 15 16m2.7-11a9 9 0 0 1 2.362 11.086m-1.676 2.299A9 9 0 0 1 17.7 19M9.069 5.054L9.5 4.5A.8.8 0 0 1 11 5v2m0 4v8a.8.8 0 0 1-1.5.5L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l1.294-1.664M3 3l18 18"></svg:path>`,
})
export class TablerVolumeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerVsIcon],svg[tabler-vs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path><svg:path d="M14 14.25c0 .414.336.75.75.75H16a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75M7 9l2 6l2-6"></svg:path></svg:g>`,
})
export class TablerVsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWalkIcon],svg[tabler-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M7 21l3-4m6 4l-2-4l-3-3l1-6"></svg:path><svg:path d="m6 12l2-3l4-1l3 3l3 1"></svg:path></svg:g>`,
})
export class TablerWalkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWallIcon],svg[tabler-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 2h16m0 4H4m0 4h16M9 4v4m5 0v4m-6 0v4m8-4v4m-5 0v4"></svg:path>`,
})
export class TablerWallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWallOffIcon],svg[tabler-wall-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361.36-.86.583-1.411.583H6a2 2 0 0 1-2-2V6c0-.55.222-1.047.58-1.409M4 8h4m4 0h8m0 4h-4m-4 0H4m0 4h12M9 4v1m5 3v2m-6 2v4m3 0v4M3 3l18 18"></svg:path>`,
})
export class TablerWallOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWalletIcon],svg[tabler-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 8V5a1 1 0 0 0-1-1H6a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6"></svg:path><svg:path d="M20 12v4h-4a2 2 0 0 1 0-4z"></svg:path></svg:g>`,
})
export class TablerWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWalletOffIcon],svg[tabler-wallet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 8V5a1 1 0 0 0-1-1H8m-3.413.584A2 2 0 0 0 6 8h2m4 0h6a1 1 0 0 1 1 1v3"></svg:path><svg:path d="M19 19a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6"></svg:path><svg:path d="M16 12h4v4m-4 0a2 2 0 0 1-2-2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerWalletOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWallpaperIcon],svg[tabler-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6"></svg:path><svg:path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M8 18V6a2 2 0 1 0-4 0v12"></svg:path></svg:g>`,
})
export class TablerWallpaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWallpaperOffIcon],svg[tabler-wallpaper-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409A2 2 0 0 1 18 20H6"></svg:path><svg:path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M8 18V8M4.573 4.598A2 2 0 0 0 4 6v12M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerWallpaperOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWandIcon],svg[tabler-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 21L21 6l-3-3L3 18zm9-15l3 3M9 3a2 2 0 0 0 2 2a2 2 0 0 0-2 2a2 2 0 0 0-2-2a2 2 0 0 0 2-2m10 10a2 2 0 0 0 2 2a2 2 0 0 0-2 2a2 2 0 0 0-2-2a2 2 0 0 0 2-2"></svg:path>`,
})
export class TablerWandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWandOffIcon],svg[tabler-wand-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 10.5L3 18l3 3l7.5-7.5m2-2L21 6l-3-3l-5.5 5.5M15 6l3 3M8.433 4.395C8.783 4.035 9 3.543 9 3a2 2 0 0 0 2 2c-.554 0-1.055.225-1.417.589m8.835 8.821c.36-.36.582-.86.582-1.41a2 2 0 0 0 2 2c-.555 0-1.056.226-1.419.59M3 3l18 18"></svg:path>`,
})
export class TablerWandOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashIcon],svg[tabler-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5q.256-.002.503-.034"></svg:path><svg:path d="m3 6l1.721 10.329A2 2 0 0 0 6.694 18h10.612a2 2 0 0 0 1.973-1.671L21 6"></svg:path></svg:g>`,
})
export class TablerWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryIcon],svg[tabler-wash-dry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path>`,
})
export class TablerWashDryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDry1Icon],svg[tabler-wash-dry-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0m6 0h.01"></svg:path></svg:g>`,
})
export class TablerWashDry1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDry2Icon],svg[tabler-wash-dry-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0m4 0h.01M14 12h.01"></svg:path></svg:g>`,
})
export class TablerWashDry2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDry3Icon],svg[tabler-wash-dry-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0m6 0h.01M9 12h.01M15 12h.01"></svg:path></svg:g>`,
})
export class TablerWashDry3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryAIcon],svg[tabler-wash-dry-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M9 16v-4.8C9 9.543 10.343 8 12 8s3 1.543 3 3.2V16m0-3H9"></svg:path></svg:g>`,
})
export class TablerWashDryAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryDipIcon],svg[tabler-wash-dry-dip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm9 1v10m4-10v10M8 7v10"></svg:path>`,
})
export class TablerWashDryDipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryFIcon],svg[tabler-wash-dry-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M10 16V8h4m-1 4h-3"></svg:path></svg:g>`,
})
export class TablerWashDryFIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryFlatIcon],svg[tabler-wash-dry-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm4 6h10"></svg:path>`,
})
export class TablerWashDryFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryHangIcon],svg[tabler-wash-dry-hang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path d="M4 4.01q8 7.985 16-.01"></svg:path></svg:g>`,
})
export class TablerWashDryHangIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryOffIcon],svg[tabler-wash-dry-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.116 20.127A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3V6c0-.827.335-1.576.877-2.12M7 3h11a3 3 0 0 1 3 3v11M3 3l18 18"></svg:path>`,
})
export class TablerWashDryOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryPIcon],svg[tabler-wash-dry-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M10 16V8h2.5a2.5 2.5 0 1 1 0 5H10"></svg:path></svg:g>`,
})
export class TablerWashDryPIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryShadeIcon],svg[tabler-wash-dry-shade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm0 5l8-8M3 17L17 3"></svg:path>`,
})
export class TablerWashDryShadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDryWIcon],svg[tabler-wash-dry-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="m8 8l1.5 8h1l1.5-6l1.5 6h1L16 8"></svg:path></svg:g>`,
})
export class TablerWashDryWIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDrycleanIcon],svg[tabler-wash-dryclean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path>`,
})
export class TablerWashDrycleanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashDrycleanOffIcon],svg[tabler-wash-dryclean-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.048 16.033A9 9 0 0 0 7.954 3.958M5.633 5.64a9 9 0 0 0 12.733 12.723M3 3l18 18"></svg:path>`,
})
export class TablerWashDrycleanOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashEcoIcon],svg[tabler-wash-eco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 6l1.721 10.329A2 2 0 0 0 6.694 18H12m8.162-6.972L21 6"></svg:path><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5q.256-.002.503-.034M16 22s0-2 3-4"></svg:path><svg:path d="M19 21a3 3 0 0 1 0-6h3v3a3 3 0 0 1-3 3"></svg:path></svg:g>`,
})
export class TablerWashEcoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashGentleIcon],svg[tabler-wash-gentle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.486 5.965Q3.738 5.996 4 6c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.17 0 .339-.014.503-.034"></svg:path><svg:path d="m3 3l1.721 10.329A2 2 0 0 0 6.694 15h10.612a2 2 0 0 0 1.973-1.671L21 3M5 18h14M5 21h14"></svg:path></svg:g>`,
})
export class TablerWashGentleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashHandIcon],svg[tabler-wash-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.426-.296.777-.5 1.5-.5h1M16 8l.615.034c.552.067 1.046.23 1.385.466c.461.322 1.21.509 2 .5q.256-.002.503-.034M14 10.5l.586.578a1.516 1.516 0 0 0 2 0c.476-.433.55-1.112.176-1.622L15 7c-.37-.506-1.331-1-2-1H9.883a1 1 0 0 0-.992.876l-.499 3.986A3.86 3.86 0 0 0 11 15a2.28 2.28 0 0 0 3-2.162z"></svg:path><svg:path d="m3 6l1.721 10.329A2 2 0 0 0 6.694 18h10.612a2 2 0 0 0 1.973-1.671L21 6"></svg:path></svg:g>`,
})
export class TablerWashHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashMachineIcon],svg[tabler-wash-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path d="M8 14a4 4 0 1 0 8 0a4 4 0 1 0-8 0m0-8h.01M11 6h.01M14 6h2"></svg:path><svg:path d="M8 14q2-1 4 0t4 0"></svg:path></svg:g>`,
})
export class TablerWashMachineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashOffIcon],svg[tabler-wash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 6l1.721 10.329A2 2 0 0 0 6.694 18h10.612q.314-.001.6-.092m1.521-2.472L21 6"></svg:path><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5m4.92.919c.428-.083.805-.227 1.08-.418c.461-.322 1.21-.508 2-.5c.79-.008 1.539.178 2 .5c.461.32 1.21.508 2 .5c.17 0 .339-.015.503-.035M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerWashOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashPressIcon],svg[tabler-wash-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.486 7.965Q3.738 7.996 4 8c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.17 0 .339-.014.503-.034"></svg:path><svg:path d="m3 5l1.721 10.329A2 2 0 0 0 6.694 17h10.612a2 2 0 0 0 1.973-1.671L21 5M5 20h14"></svg:path></svg:g>`,
})
export class TablerWashPressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashTemperature1Icon],svg[tabler-wash-temperature-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 6l1.721 10.329A2 2 0 0 0 6.694 18h10.612a2 2 0 0 0 1.973-1.671L21 6"></svg:path><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5q.256-.002.503-.034M12 13h.01"></svg:path></svg:g>`,
})
export class TablerWashTemperature1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashTemperature2Icon],svg[tabler-wash-temperature-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5q.256-.002.503-.034"></svg:path><svg:path d="m3 6l1.721 10.329A2 2 0 0 0 6.694 18h10.612a2 2 0 0 0 1.973-1.671L21 6m-7 7h.01M10 13h.01"></svg:path></svg:g>`,
})
export class TablerWashTemperature2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashTemperature3Icon],svg[tabler-wash-temperature-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5q.256-.002.503-.034"></svg:path><svg:path d="m3 6l1.721 10.329A2 2 0 0 0 6.694 18h10.612a2 2 0 0 0 1.973-1.671L21 6m-9 7h.01M15 13h.01M9 13h.01"></svg:path></svg:g>`,
})
export class TablerWashTemperature3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashTemperature4Icon],svg[tabler-wash-temperature-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5q.256-.002.503-.034"></svg:path><svg:path d="m3 6l1.721 10.329A2 2 0 0 0 6.694 18h10.612a2 2 0 0 0 1.973-1.671L21 6m-11 9h.01M14 15h.01M14 12h.01M10 12h.01"></svg:path></svg:g>`,
})
export class TablerWashTemperature4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashTemperature5Icon],svg[tabler-wash-temperature-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 15h.01M3 6l1.721 10.329A2 2 0 0 0 6.694 18h10.612a2 2 0 0 0 1.973-1.671L21 6m-7 9h.01m.99-3h.01M12 12h.01M9 12h.01"></svg:path><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5q.256-.002.503-.034"></svg:path></svg:g>`,
})
export class TablerWashTemperature5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashTemperature6Icon],svg[tabler-wash-temperature-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 15h.01M3 6l1.721 10.329A2 2 0 0 0 6.694 18h10.612a2 2 0 0 0 1.973-1.671L21 6m-9 9h.01M15 15h.01M15 12h.01M12 12h.01M9 12h.01"></svg:path><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5q.256-.002.503-.034"></svg:path></svg:g>`,
})
export class TablerWashTemperature6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashTumbleDryIcon],svg[tabler-wash-tumble-dry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0"></svg:path></svg:g>`,
})
export class TablerWashTumbleDryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWashTumbleOffIcon],svg[tabler-wash-tumble-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.116 20.127A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3V6c0-.827.335-1.576.877-2.12M7 3h11a3 3 0 0 1 3 3v11"></svg:path><svg:path d="M17.744 13.74a6 6 0 0 0-7.486-7.482M7.759 7.755a6 6 0 1 0 8.48 8.49M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerWashTumbleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWaterpoloIcon],svg[tabler-waterpolo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path><svg:path d="m5 8l3 4l4.5 1l7.5-1M3 18.75A2.4 2.4 0 0 0 4 19a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1-.25M12 16l.5-3"></svg:path><svg:path fill="currentColor" d="M6.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class TablerWaterpoloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWaveSawToolIcon],svg[tabler-wave-saw-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h5l4 8V4l4 8h5"></svg:path>`,
})
export class TablerWaveSawToolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWaveSineIcon],svg[tabler-wave-sine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12h-2c-.894 0-1.662-.857-1.761-2c-.296-3.45-.749-6-2.749-6s-2.5 3.582-2.5 8s-.5 8-2.5 8s-2.452-2.547-2.749-6c-.1-1.147-.867-2-1.763-2h-2"></svg:path>`,
})
export class TablerWaveSineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWaveSquareIcon],svg[tabler-wave-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h5v8h4V4h4v8h5"></svg:path>`,
})
export class TablerWaveSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWavesElectricityIcon],svg[tabler-waves-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12c.576-.643 1.512-1.017 2.5-1c.988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1M3 16c.576-.643 1.512-1.017 2.5-1c.988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1M3 8c.576-.643 1.512-1.017 2.5-1c.988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1m7-1l-3 5h4l-3 5"></svg:path>`,
})
export class TablerWavesElectricityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWebhookIcon],svg[tabler-webhook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.876 13.61A4 4 0 1 0 11 17h6"></svg:path><svg:path d="M15.066 20.502A4 4 0 1 0 17 13c-.706 0-1.424.179-2 .5L12 8"></svg:path><svg:path d="M16 8a4 4 0 1 0-8 0c0 1.506.77 2.818 2 3.5L7 17"></svg:path></svg:g>`,
})
export class TablerWebhookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWebhookOffIcon],svg[tabler-webhook-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.876 13.61A4 4 0 1 0 11 17h6m-1.934 3.502a4 4 0 0 0 4.763-.675M21 17a4 4 0 0 0-4-4"></svg:path><svg:path d="M16 8a4 4 0 0 0-6.824-2.833M8 8c0 1.506.77 2.818 2 3.5L7 17M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerWebhookOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWeightIcon],svg[tabler-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path d="M6.835 9h10.33a1 1 0 0 1 .984.821l1.637 9A1 1 0 0 1 18.802 20H5.198a1 1 0 0 1-.984-1.179l1.637-9A1 1 0 0 1 6.835 9"></svg:path></svg:g>`,
})
export class TablerWeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWheatIcon],svg[tabler-wheat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.014 21.514v-3.75M5.93 9.504l-.43 1.604a4.986 4.986 0 0 0 3.524 6.105q1.495.402 2.99.801v-3.44a4.98 4.98 0 0 0-3.676-4.426z"></svg:path><svg:path d="M13.744 11.164a4.9 4.9 0 0 0 1.433-3.46a4.88 4.88 0 0 0-1.433-3.46l-1.73-1.73l-1.73 1.73a4.9 4.9 0 0 0-1.433 3.46a4.9 4.9 0 0 0 1.433 3.46"></svg:path><svg:path d="m18.099 9.504l.43 1.604a4.986 4.986 0 0 1-3.525 6.105l-2.99.801v-3.44a4.98 4.98 0 0 1 3.677-4.426z"></svg:path></svg:g>`,
})
export class TablerWheatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWheatOffIcon],svg[tabler-wheat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 3l18 18m-9 .5v-3.75M5.916 9.49l-.43 1.604a4.984 4.984 0 0 0 3.524 6.104L12 18v-3.44a4.98 4.98 0 0 0-3.677-4.426zm4.333-5.239l.021-.021L12 2.5"></svg:path><svg:path d="M10.27 11.15a4.9 4.9 0 0 1-1.246-2.118m5.964-.044A4.9 4.9 0 0 0 13.73 4.23L12 2.5m4.038 7.537l2.046-.547l.431 1.604c.142.53.193 1.063.162 1.583m-2.171 3.828c-.45.307-.959.544-1.516.694L12 18v-3.44a5 5 0 0 1 .582-1.978"></svg:path></svg:g>`,
})
export class TablerWheatOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWheelIcon],svg[tabler-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-6 0h6m6 0h6m-7.4-2.6L17 4.6m-6.6 10L7 19.4M7 4.6l3.4 4.8m3.2 5.2l3.4 4.8"></svg:path></svg:g>`,
})
export class TablerWheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWheelchairIcon],svg[tabler-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 16a5 5 0 1 0 10 0a5 5 0 1 0-10 0m14 3a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M19 17a3 3 0 0 0-3-3h-3.4M3 3h1a2 2 0 0 1 2 2v6m0-3h11m-2 0v6"></svg:path></svg:g>`,
})
export class TablerWheelchairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWheelchairOffIcon],svg[tabler-wheelchair-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16a5 5 0 1 0 10 0a5 5 0 1 0-10 0m14.582 1.59a2 2 0 0 0 2.833 2.824M14 14h-1.4M6 6v5m0-3h2m4 0h5m-2 0v3M3 3l18 18"></svg:path>`,
})
export class TablerWheelchairOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWhirlIcon],svg[tabler-whirl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 12a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path><svg:path d="M12 21c-3.314 0-6-2.462-6-5.5S8.686 10 12 10"></svg:path><svg:path d="M21 12c0 3.314-2.462 6-5.5 6S10 15.314 10 12"></svg:path><svg:path d="M12 14c3.314 0 6-2.462 6-5.5S15.314 3 12 3"></svg:path><svg:path d="M14 12c0-3.314-2.462-6-5.5-6S3 8.686 3 12"></svg:path></svg:g>`,
})
export class TablerWhirlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWifiIcon],svg[tabler-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a8 8 0 0 1 11.314 0"></svg:path><svg:path d="M3.515 9.515c4.686-4.687 12.284-4.687 17 0"></svg:path></svg:g>`,
})
export class TablerWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWifi0Icon],svg[tabler-wifi-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01"></svg:path>`,
})
export class TablerWifi0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWifi1Icon],svg[tabler-wifi-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0"></svg:path>`,
})
export class TablerWifi1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWifi2Icon],svg[tabler-wifi-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a8 8 0 0 1 11.314 0"></svg:path>`,
})
export class TablerWifi2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWifiOffIcon],svg[tabler-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a7.96 7.96 0 0 1 3.864-2.14m4.163.155a8 8 0 0 1 3.287 2M3.515 9.515A12 12 0 0 1 7.059 7.06m3.101-.92a12 12 0 0 1 10.325 3.374M3 3l18 18"></svg:path>`,
})
export class TablerWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindIcon],svg[tabler-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h8.5a2.5 2.5 0 1 0-2.34-3.24M3 12h15.5a2.5 2.5 0 1 1-2.34 3.24M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24"></svg:path>`,
})
export class TablerWindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindElectricityIcon],svg[tabler-wind-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 7l-3 5h4l-3 5M3 16h4a2 2 0 1 1 0 4m-4-8h8a2 2 0 1 0 0-4M3 8h3a2 2 0 1 0 0-4"></svg:path>`,
})
export class TablerWindElectricityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindOffIcon],svg[tabler-wind-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h3m4 0h1.5a2.5 2.5 0 1 0-2.34-3.24M3 12h9m4 0h2.5a2.5 2.5 0 0 1 1.801 4.282M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24M3 3l18 18"></svg:path>`,
})
export class TablerWindOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindmillIcon],svg[tabler-windmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3zm0 0c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5zm0 0c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zm0 0c0-2.76-2.01-5-4.5-5S3 9.24 3 12z"></svg:path>`,
})
export class TablerWindmillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindmillFilledIcon],svg[tabler-windmill-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.292 0 6 2.435 6 5.5c0 1.337-.515 2.554-1.369 3.5H21a1 1 0 0 1 1 1c0 3.292-2.435 6-5.5 6c-1.336 0-2.553-.515-3.5-1.368V21a1 1 0 0 1-1 1c-3.292 0-6-2.435-6-5.5c0-1.336.515-2.553 1.368-3.5H3a1 1 0 0 1-1-1c0-3.292 2.435-6 5.5-6c1.337 0 2.554.515 3.5 1.369V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerWindmillFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindmillOffIcon],svg[tabler-windmill-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.061 11.06C16.241 10.236 17 8.95 17 7.5C17 5.01 14.76 3 12 3v5m0 4c0 2.76 2.01 5 4.5 5q.25 0 .49-.03m2.624-1.36C20.47 14.7 21 13.42 21 12h-5m-4 0c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zM6.981 7.033C4.737 7.318 3 9.435 3 12h9M3 3l18 18"></svg:path>`,
})
export class TablerWindmillOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindowIcon],svg[tabler-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c-3.866 0-7 3.272-7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10c0-3.728-3.134-7-7-7M5 13h14M12 3v18"></svg:path>`,
})
export class TablerWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindowMaximizeIcon],svg[tabler-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1-5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></svg:path><svg:path d="M12 8h4v4m0-4l-5 5"></svg:path></svg:g>`,
})
export class TablerWindowMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindowMinimizeIcon],svg[tabler-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1-5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></svg:path><svg:path d="M15 13h-4V9m0 4l5-5"></svg:path></svg:g>`,
})
export class TablerWindowMinimizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindowOffIcon],svg[tabler-window-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.166 6.19A6.9 6.9 0 0 0 5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1m0-4v-5c0-3.728-3.134-7-7-7a6.86 6.86 0 0 0-3.804 1.158M5 13h8m4 0h2M12 3v5m0 4v9M3 3l18 18"></svg:path>`,
})
export class TablerWindowOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindsockIcon],svg[tabler-windsock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3v18m0-10l12-1V6L6 5m4 .5v5M14 6v4M4 21h4"></svg:path>`,
})
export class TablerWindsockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWindsockFilledIcon],svg[tabler-windsock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a1 1 0 0 1 1 1v1.079l11.083.924A1 1 0 0 1 19 6v4a1 1 0 0 1-.917.997L7 11.92V20h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1m1 4.086v3.827l3-.25V6.336zm7 .584v2.659l3-.25V6.92z"></svg:path>`,
})
export class TablerWindsockFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWiperIcon],svg[tabler-wiper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 18a1 1 0 1 0 2 0a1 1 0 1 0-2 0M3 9l5.5 5.5a5 5 0 0 1 7 0L21 9A12 12 0 0 0 3 9m9 9L9.8 5.2"></svg:path>`,
})
export class TablerWiperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWiperWashIcon],svg[tabler-wiper-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 20a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-8-9l5.5 5.5a5 5 0 0 1 7 0L21 11a12 12 0 0 0-18 0m9 9V6M4 6a4 4 0 0 1 .4-1.8M7 2.1a4 4 0 0 1 2 0"></svg:path><svg:path d="M12 6a4 4 0 0 0-.4-1.8"></svg:path><svg:path d="M12 6a4 4 0 0 1 .4-1.8M15 2.1a4 4 0 0 1 2 0M20 6a4 4 0 0 0-.4-1.8"></svg:path></svg:g>`,
})
export class TablerWiperWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWomanIcon],svg[tabler-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16v5m4-5v5m-6-5h8l-2-7h-4zm-3-5q2.5-2 5-2m9 2q-2.5-2-5-2m-4-5a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path>`,
})
export class TablerWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWomanFilledIcon],svg[tabler-woman-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8c1.91 0 3.79.752 5.625 2.219a1 1 0 1 1-1.25 1.562c-1.019-.815-2.016-1.345-2.997-1.6l1.584 5.544A1 1 0 0 1 16 17h-1v4a1 1 0 0 1-2 0v-4h-2v4a1 1 0 0 1-2 0v-4H8a1 1 0 0 1-.962-1.275l1.584-5.545c-.98.256-1.978.786-2.997 1.601a1 1 0 1 1-1.25-1.562c1.733-1.386 3.506-2.133 5.307-2.212L10.017 8zm-2-7a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 12 1"></svg:path>`,
})
export class TablerWomanFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWoodIcon],svg[tabler-wood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 5.5a6 2.5 0 1 0 12 0a6 2.5 0 1 0-12 0"></svg:path><svg:path d="M18 5.5v4.626a1.415 1.415 0 0 1 1.683 2.18l-.097.108L18 14v4c0 1.61-2.54 2.925-5.725 3H12c-3.314 0-6-1.343-6-3v-2l-1.586-1.586A1.414 1.414 0 0 1 6 12.127V5.5m4 7V14m4 2v1"></svg:path></svg:g>`,
})
export class TablerWoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldIcon],svg[tabler-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18"></svg:path></svg:g>`,
})
export class TablerWorldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldBoltIcon],svg[tabler-world-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.985 12.52a9 9 0 1 0-7.52 8.36M3.6 9h16.8M3.6 15h10.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18c2.313 3.706 3.07 7.856 2.27 12M19 16l-2 3h4l-2 3"></svg:path></svg:g>`,
})
export class TablerWorldBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldCancelIcon],svg[tabler-world-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-8.985 9M3.6 9h16.8M3.6 15h9.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.53 10.275M16 19a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1 2l4-4"></svg:path></svg:g>`,
})
export class TablerWorldCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldCheckIcon],svg[tabler-world-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.946 12.99a9 9 0 1 0-9.46 7.995M3.6 9h16.8M3.6 15h13.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.311 12.001M15 19l2 2l4-4"></svg:path></svg:g>`,
})
export class TablerWorldCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldCodeIcon],svg[tabler-world-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.942 13.02a9 9 0 1 0-9.47 7.964M3.6 9h16.8M3.6 15h9.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18c2 3.206 2.837 6.913 2.508 10.537M20 21l2-2l-2-2m-3 0l-2 2l2 2"></svg:path></svg:g>`,
})
export class TablerWorldCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldCogIcon],svg[tabler-world-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-8.979 9M3.6 9h16.8M3.6 15h8.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.522 10.376M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-3.5V17m0 4v1.5m3.031-5.25l-1.299.75m-3.463 2l-1.3.75m0-3.5l1.3.75m3.463 2l1.3.75"></svg:path></svg:g>`,
})
export class TablerWorldCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldDollarIcon],svg[tabler-world-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.876 10.51a9 9 0 1 0-7.839 10.43M3.6 9h16.8M3.6 15h9.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.578 9.02M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1"></svg:path></svg:g>`,
})
export class TablerWorldDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldDownIcon],svg[tabler-world-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.986 12.509a9 9 0 1 0-8.455 8.476M3.6 9h16.8M3.6 15h10.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18c2.313 3.706 3.07 7.857 2.27 12M19 16v6m3-3l-3 3l-3-3"></svg:path></svg:g>`,
})
export class TablerWorldDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldDownloadIcon],svg[tabler-world-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15H12"></svg:path><svg:path d="M11.578 3a17 17 0 0 0 0 18M12.5 3c1.719 2.755 2.5 5.876 2.5 9m3 2v7m-3-3l3 3l3-3"></svg:path></svg:g>`,
})
export class TablerWorldDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldExclamationIcon],svg[tabler-world-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.986 12.51a9 9 0 1 0-5.71 7.873M3.6 9h16.8M3.6 15h10.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18m6.5-5v3m0 3v.01"></svg:path></svg:g>`,
})
export class TablerWorldExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldHeartIcon],svg[tabler-world-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-9.679 8.974M3.6 9h16.8M3.6 15h6.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.556 8.136M18 22l3.35-3.284a2.143 2.143 0 0 0 .005-3.071a2.24 2.24 0 0 0-3.129-.006l-.224.22l-.223-.22a2.24 2.24 0 0 0-3.128-.006a2.143 2.143 0 0 0-.006 3.071z"></svg:path></svg:g>`,
})
export class TablerWorldHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldLatitudeIcon],svg[tabler-world-latitude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m1.6-5h14.8M3 12h18M4.6 17h14.8"></svg:path>`,
})
export class TablerWorldLatitudeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldLongitudeIcon],svg[tabler-world-longitude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M11.5 3a11.2 11.2 0 0 0 0 18m1-18a11.2 11.2 0 0 1 0 18M12 3v18"></svg:path></svg:g>`,
})
export class TablerWorldLongitudeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldMinusIcon],svg[tabler-world-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.483 15.006a9 9 0 1 0-7.958 5.978M3.6 9h16.8M3.6 15h16.8"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a16.94 16.94 0 0 1 2.307 12M16 19h6"></svg:path></svg:g>`,
})
export class TablerWorldMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldOffIcon],svg[tabler-world-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.657 5.615a9 9 0 1 0 12.717 12.739m1.672-2.322A9 9 0 0 0 7.98 3.948M3.6 9H9m4 0h7.4M3.6 15H15m4 0h1.4"></svg:path><svg:path d="M11.5 3a17 17 0 0 0-1.493 3.022M9.16 9.167c-.68 4.027.1 8.244 2.34 11.833m1-18a17 17 0 0 1 2.549 8.005m-.207 3.818A17 17 0 0 1 12.5 21M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerWorldOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldPauseIcon],svg[tabler-world-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.945 12.997a9 9 0 1 0-7.928 7.945M3.6 9h16.8M3.6 15h9.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.51 10.526M17 17v5m4-5v5"></svg:path></svg:g>`,
})
export class TablerWorldPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldPinIcon],svg[tabler-world-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.972 11.291a9 9 0 1 0-8.322 9.686M3.6 9h16.8M3.6 15h8.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.578 9.018m6.043 8.103a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"></svg:path></svg:g>`,
})
export class TablerWorldPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldPlusIcon],svg[tabler-world-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.985 12.518a9 9 0 1 0-8.45 8.466M3.6 9h16.8M3.6 15H15"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.283 12.157M16 19h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerWorldPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldQuestionIcon],svg[tabler-world-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.975 11.33a9 9 0 1 0-5.673 9.043M3.6 9h16.8M3.6 15h9.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.57 9.518m-1.056 5.403A17 17 0 0 1 12.5 21m6.5 1v.01M19 19a2.003 2.003 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></svg:path></svg:g>`,
})
export class TablerWorldQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldSearchIcon],svg[tabler-world-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15h7.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.574 8.62M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path></svg:g>`,
})
export class TablerWorldSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldShareIcon],svg[tabler-world-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.94 13.045A9 9 0 1 0 11.987 21M3.6 9h16.8M3.6 15H13"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.529 10.294M16 22l5-5m0 4.5V17h-4.5"></svg:path></svg:g>`,
})
export class TablerWorldShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldStarIcon],svg[tabler-world-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-9.968 8.948M3.6 9h16.8M3.6 15H10"></svg:path><svg:path d="M11.5 3a17 17 0 0 0-1.886 13.802M12.5 3a17 17 0 0 1 2.549 8.01m2.751 9.807l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411l-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352l1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193l2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707l.414 2.41a.39.39 0 0 1-.567.411z"></svg:path></svg:g>`,
})
export class TablerWorldStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldUpIcon],svg[tabler-world-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.985 12.52a9 9 0 1 0-8.451 8.463M3.6 9h16.8M3.6 15h10.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.391 11.512M19 22v-6m3 3l-3-3l-3 3"></svg:path></svg:g>`,
})
export class TablerWorldUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldUploadIcon],svg[tabler-world-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15H12"></svg:path><svg:path d="M11.578 3a17 17 0 0 0 0 18M12.5 3c1.719 2.755 2.5 5.876 2.5 9m3 9v-7m3 3l-3-3l-3 3"></svg:path></svg:g>`,
})
export class TablerWorldUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldWwwIcon],svg[tabler-world-www-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.5 7A9 9 0 0 0 12 3a8.99 8.99 0 0 0-7.484 4"></svg:path><svg:path d="M11.5 3a17 17 0 0 0-1.826 4M12.5 3a17 17 0 0 1 1.828 4M19.5 17a9 9 0 0 1-7.5 4a8.99 8.99 0 0 1-7.484-4"></svg:path><svg:path d="M11.5 21a17 17 0 0 1-1.826-4m2.826 4a17 17 0 0 0 1.828-4M2 10l1 4l1.5-4L6 14l1-4m10 0l1 4l1.5-4l1.5 4l1-4M9.5 10l1 4l1.5-4l1.5 4l1-4"></svg:path></svg:g>`,
})
export class TablerWorldWwwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWorldXIcon],svg[tabler-world-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.929 13.131A9 9 0 1 0 11.998 21M3.6 9h16.8M3.6 15h9.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.505 10.573M22 22l-5-5m0 5l5-5"></svg:path></svg:g>`,
})
export class TablerWorldXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWreckingBallIcon],svg[tabler-wrecking-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 2H4m0-4h9"></svg:path><svg:path d="M8 12V7h2a3 3 0 0 1 3 3v5"></svg:path><svg:path d="M5 15v-2a1 1 0 0 1 1-1h7m6-1V4l-6 7"></svg:path></svg:g>`,
})
export class TablerWreckingBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWritingIcon],svg[tabler-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 17V5c0-1.121-.879-2-2-2s-2 .879-2 2v12l2 2zM16 7h4m-2 12H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6"></svg:path>`,
})
export class TablerWritingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWritingOffIcon],svg[tabler-writing-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7h4m-4 9v1l2 2l.5-.5M20 16V5c0-1.121-.879-2-2-2s-2 .879-2 2v7m2 7H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6M3 3l18 18"></svg:path>`,
})
export class TablerWritingOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWritingSignIcon],svg[tabler-writing-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19q5-3 5-6c0-3-1-3-2-3s-2.032 1.085-2 3c.034 2.048 1.658 2.877 2.5 4C8 19 9 19.5 10 18q1-1.5 1.5-2.5q1.5 3.5 4 3.5H18m2-2V5c0-1.121-.879-2-2-2s-2 .879-2 2v12l2 2zM16 7h4"></svg:path>`,
})
export class TablerWritingSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerWritingSignOffIcon],svg[tabler-writing-sign-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19q5-3 5-6c0-3-1-3-2-3s-2.032 1.085-2 3c.034 2.048 1.658 2.877 2.5 4C8 19 9 19.5 10 18q1-1.5 1.5-2.5q1.5 3.5 4 3.5H18m-2-3v1l2 2l.5-.5M20 16V5c0-1.121-.879-2-2-2s-2 .879-2 2v7m0-5h4M3 3l18 18"></svg:path>`,
})
export class TablerWritingSignOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXIcon],svg[tabler-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></svg:path>`,
})
export class TablerXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXPowerYIcon],svg[tabler-x-power-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 3l3 5.063M5 12l6 6m-6 0l6-6m10-9l-4.8 9"></svg:path>`,
})
export class TablerXPowerYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXboxAIcon],svg[tabler-xbox-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9"></svg:path><svg:path d="m15 16l-3-8l-3 8m5-2h-4"></svg:path></svg:g>`,
})
export class TablerXboxAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXboxAFilledIcon],svg[tabler-xbox-a-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m.936 5.649c-.324-.865-1.548-.865-1.872 0l-3 8a1 1 0 0 0 .585 1.287l.111.035a1 1 0 0 0 1.176-.62L10.443 15h3.114l.507 1.351a1 1 0 1 0 1.872-.702zM12 10.848L12.807 13h-1.614z"></svg:path>`,
})
export class TablerXboxAFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXboxBIcon],svg[tabler-xbox-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9"></svg:path><svg:path d="M13 12a2 2 0 1 1 0 4h-3v-4m3 0h-3m3 0a2 2 0 1 0 0-4h-3v4"></svg:path></svg:g>`,
})
export class TablerXboxBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXboxBFilledIcon],svg[tabler-xbox-b-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m1 5h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3a3 3 0 0 0 2.235-5A3 3 0 0 0 13 7m0 6a1 1 0 0 1 1 1l-.007.117A1 1 0 0 1 13 15h-2v-2zm0-4a1 1 0 0 1 0 2h-2V9z"></svg:path>`,
})
export class TablerXboxBFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXboxXIcon],svg[tabler-xbox-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9M9 8l6 8m0-8l-6 8"></svg:path>`,
})
export class TablerXboxXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXboxXFilledIcon],svg[tabler-xbox-x-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3.6 5.2a1 1 0 0 0-1.4.2L12 10.333L9.8 7.4a1 1 0 1 0-1.6 1.2l2.55 3.4l-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2-2.933l2.2 2.933a1 1 0 0 0 1.6-1.2L13.25 12l2.55-3.4a1 1 0 0 0-.2-1.4"></svg:path>`,
})
export class TablerXboxXFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXboxYIcon],svg[tabler-xbox-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9M9 8l3 4"></svg:path><svg:path d="m15 8l-2.988 3.984L12 16"></svg:path></svg:g>`,
})
export class TablerXboxYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXboxYFilledIcon],svg[tabler-xbox-y-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3.6 5.2a1 1 0 0 0-1.4.2L12 10.333L9.8 7.4a1 1 0 1 0-1.6 1.2l2.81 3.748l-.01 3.649A1 1 0 0 0 11.997 17l.117-.006a1 1 0 0 0 .886-.991l.01-3.683L15.8 8.6a1 1 0 0 0-.2-1.4"></svg:path>`,
})
export class TablerXboxYFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXdIcon],svg[tabler-xd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 8l4 8m-4 0l4-8m4 0v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"></svg:path>`,
})
export class TablerXdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerXxxIcon],svg[tabler-xxx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 8l4 8m-4 0l4-8m3 0l4 8m-4 0l4-8M3 8l4 8m-4 0l4-8"></svg:path>`,
})
export class TablerXxxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerYinYangIcon],svg[tabler-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9"></svg:path><svg:circle cx="12" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="16.5" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class TablerYinYangIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerYinYangFilledIcon],svg[tabler-yin-yang-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M8 5.072A8 8 0 0 0 12 20l.2-.005a4 4 0 0 0 0-7.99L12 12a4 4 0 0 1-.2-7.995L12 4a8 8 0 0 0-4 1.072M12 6.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path d="M12 14.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class TablerYinYangFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerYogaIcon],svg[tabler-yoga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4 20h4l1.5-3m7.5 3l-1-5h-5l1-7"></svg:path><svg:path d="m4 10l4-1l4-1l4 1.5l4 1.5"></svg:path></svg:g>`,
})
export class TablerYogaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZeppelinIcon],svg[tabler-zeppelin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.5 4c4.694 0 8.5 2.686 8.5 6s-3.806 6-8.5 6q-3.194 0-7.364-2.777L4 15v-3.33A46 46 0 0 1 2 10a46 46 0 0 1 2-1.67V5l2.135 1.778Q10.305 4 13.5 4"></svg:path><svg:path d="M10 15.5V20h6v-4"></svg:path></svg:g>`,
})
export class TablerZeppelinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZeppelinFilledIcon],svg[tabler-zeppelin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3c5.187 0 9.5 3.044 9.5 7c0 3.017-2.508 5.503-6 6.514V20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4.046a21 21 0 0 1-2.66-1.411l-.13-.082l-1.57 1.308a1 1 0 0 1-1.634-.656L3 15v-2.851l-.31-.25a47 47 0 0 1-.682-.568l-.67-.582a1 1 0 0 1 0-1.498A47 47 0 0 1 2.689 8.1L3 7.85V5a1 1 0 0 1 1.55-.836l.09.068l1.57 1.307l.128-.08c2.504-1.553 4.784-2.378 6.853-2.453zm-2.499 13.657L11 19h4l.001-2.086Q14.266 17 13.5 17a9.6 9.6 0 0 1-2.13-.252z"></svg:path>`,
})
export class TablerZeppelinFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZeppelinOffIcon],svg[tabler-zeppelin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15.773 15.783c-.723.141-1.486.217-2.273.217q-3.194 0-7.364-2.777L4 15v-3.33A46 46 0 0 1 2 10a46 46 0 0 1 2-1.67V5l2.135 1.778q.196-.13.39-.256m2.564-1.42Q11.49 4 13.5 4c4.694 0 8.5 2.686 8.5 6c0 1.919-1.276 3.627-3.261 4.725"></svg:path><svg:path d="M10 15.5V20h6v-4M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerZeppelinOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZipIcon],svg[tabler-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 16V8h2a2 2 0 1 1 0 4h-2m-4-4v8M4 8h4l-4 8h4"></svg:path>`,
})
export class TablerZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacAquariusIcon],svg[tabler-zodiac-aquarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 10l3-3l3 3l3-3l3 3l3-3l3 3M3 17l3-3l3 3l3-3l3 3l3-3l3 3"></svg:path>`,
})
export class TablerZodiacAquariusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacAriesIcon],svg[tabler-zodiac-aries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5a5 5 0 1 0-4 8m8 0a5 5 0 1 0-4-8m0 16V5"></svg:path>`,
})
export class TablerZodiacAriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacCancerIcon],svg[tabler-zodiac-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path d="M3 12a10 6.5 0 0 1 14-6.5m4 6.5a10 6.5 0 0 1-14 6.5"></svg:path></svg:g>`,
})
export class TablerZodiacCancerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacCapricornIcon],svg[tabler-zodiac-capricorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4a3 3 0 0 1 3 3v9m0-9a3 3 0 0 1 6 0v11a3 3 0 0 1-3 3m3-4a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path>`,
})
export class TablerZodiacCapricornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacGeminiIcon],svg[tabler-zodiac-gemini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3a21 21 0 0 0 18 0M3 21a21 21 0 0 1 18 0M7 4.5v15m10-15v15"></svg:path>`,
})
export class TablerZodiacGeminiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacLeoIcon],svg[tabler-zodiac-leo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 17a4 4 0 1 0 8 0M3 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0m4-9a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path><svg:path d="M7 7c0 3 2 5 2 9m6-9c0 4-2 6-2 10"></svg:path></svg:g>`,
})
export class TablerZodiacLeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacLibraIcon],svg[tabler-zodiac-libra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 20h14M5 17h5v-.3a7 7 0 1 1 4 0v.3h5"></svg:path>`,
})
export class TablerZodiacLibraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacPiscesIcon],svg[tabler-zodiac-pisces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3a21 21 0 0 1 0 18M19 3a21 21 0 0 0 0 18M5 12h14"></svg:path>`,
})
export class TablerZodiacPiscesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacSagittariusIcon],svg[tabler-zodiac-sagittarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20L20 4m-7 0h7v7M6.5 12.5l5 5"></svg:path>`,
})
export class TablerZodiacSagittariusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacScorpioIcon],svg[tabler-zodiac-scorpio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a2 2 0 0 1 2 2v9m0-9a2 2 0 0 1 4 0v9m0-9a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3-3m0 6l3-3"></svg:path>`,
})
export class TablerZodiacScorpioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacTaurusIcon],svg[tabler-zodiac-taurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 3a6 6 0 0 0 12 0"></svg:path><svg:path d="M6 15a6 6 0 1 0 12 0a6 6 0 1 0-12 0"></svg:path></svg:g>`,
})
export class TablerZodiacTaurusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZodiacVirgoIcon],svg[tabler-zodiac-virgo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 4a2 2 0 0 1 2 2v9m0-9a2 2 0 0 1 4 0v9m0-9a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5"></svg:path><svg:path d="M12 21a7 5 0 0 0 7-5v-2a3 3 0 0 0-6 0"></svg:path></svg:g>`,
})
export class TablerZodiacVirgoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomIcon],svg[tabler-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></svg:path>`,
})
export class TablerZoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomCancelIcon],svg[tabler-zoom-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m5-2l4 4m0-4l-4 4m13 9l-6-6"></svg:path>`,
})
export class TablerZoomCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomCancelFilledIcon],svg[tabler-zoom-cancel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 0 1 2 10l.005-.285A8 8 0 0 1 14 3.072m-5.293 4.22a1 1 0 0 0-1.414 1.415L8.585 10l-1.292 1.293a1 1 0 0 0 1.414 1.414L10 11.415l1.293 1.292a1 1 0 0 0 1.414-1.414L11.415 10l1.292-1.293a1 1 0 1 0-1.414-1.414L10 8.585z"></svg:path>`,
})
export class TablerZoomCancelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomCheckIcon],svg[tabler-zoom-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></svg:path><svg:path d="m7 10l2 2l4-4"></svg:path></svg:g>`,
})
export class TablerZoomCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomCheckFilledIcon],svg[tabler-zoom-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1-2.008 2.225l-.114-.103l-4.943-4.944a8 8 0 0 1-12.49-6.332L2 10l.005-.285A8 8 0 0 1 14 3.072m-.293 4.22a1 1 0 0 0-1.414 0L9 10.586L7.707 9.293l-.094-.083a1 1 0 0 0-1.32 1.497l2 2l.094.083a1 1 0 0 0 1.32-.083l4-4l.083-.094a1 1 0 0 0-.083-1.32z"></svg:path>`,
})
export class TablerZoomCheckFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomCodeIcon],svg[tabler-zoom-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></svg:path><svg:path d="m8 8l-2 2l2 2m4-4l2 2l-2 2"></svg:path></svg:g>`,
})
export class TablerZoomCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomCodeFilledIcon],svg[tabler-zoom-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 0 1 2 10l.005-.285A8 8 0 0 1 14 3.072m-5.293 4.22a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.415l2 2a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32L7.415 10l1.292-1.293a1 1 0 0 0 0-1.414m4 0a1 1 0 0 0-1.414 0l-.083.095a1 1 0 0 0 .083 1.32L12.585 10l-1.292 1.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z"></svg:path>`,
})
export class TablerZoomCodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomExclamationIcon],svg[tabler-zoom-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6m-5-2v.01M10 7v3"></svg:path>`,
})
export class TablerZoomExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomExclamationFilledIcon],svg[tabler-zoom-exclamation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 0 1 2 10l.005-.285A8 8 0 0 1 14 3.072M10 12a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 11 13.01l-.007-.127A1 1 0 0 0 10 12m0-6a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerZoomExclamationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomFilledIcon],svg[tabler-zoom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1-2.008 2.225l-.114-.103l-4.943-4.944a8 8 0 0 1-12.49-6.332L2 10l.005-.285A8 8 0 0 1 14 3.072"></svg:path>`,
})
export class TablerZoomFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomInIcon],svg[tabler-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m4 0h6m-3-3v6m11 8l-6-6"></svg:path>`,
})
export class TablerZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomInAreaIcon],svg[tabler-zoom-in-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13v4m-2-2h4m-7 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0m12 7l-3-3M6 18H5a2 2 0 0 1-2-2v-1m0-4v-1m0-4V5a2 2 0 0 1 2-2h1m4 0h1m4 0h1a2 2 0 0 1 2 2v1"></svg:path>`,
})
export class TablerZoomInAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomInAreaFilledIcon],svg[tabler-zoom-in-area-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9a6 6 0 0 1 4.891 9.476l2.816 2.817a1 1 0 0 1-1.32 1.497l-.094-.083l-2.817-2.816a6 6 0 0 1-9.472-4.666L9 15l.004-.225A6 6 0 0 1 15 9m0 3a1 1 0 0 0-.993.883L14 13v1h-1l-.117.007a1 1 0 0 0 0 1.986L13 16h1v1l.007.117a1 1 0 0 0 1.986 0L16 17v-1h1l.117-.007a1 1 0 0 0 0-1.986L17 14h-1v-1l-.007-.117A1 1 0 0 0 15 12M3 14a1 1 0 0 1 .993.883L4 15v1a1 1 0 0 0 .883.993L5 17h1a1 1 0 0 1 .117 1.993L6 19H5a3 3 0 0 1-2.995-2.824L2 16v-1a1 1 0 0 1 1-1m0-5a1 1 0 0 1 .993.883L4 10v1a1 1 0 0 1-1.993.117L2 11v-1a1 1 0 0 1 1-1m3-7a1 1 0 0 1 .117 1.993L6 4H5a1 1 0 0 0-.993.883L4 5v1a1 1 0 0 1-1.993.117L2 6V5a3 3 0 0 1 2.824-2.995L5 2zm5 0a1 1 0 0 1 .117 1.993L11 4h-1a1 1 0 0 1-.117-1.993L10 2zm5 0a3 3 0 0 1 2.995 2.824L19 5v1a1 1 0 0 1-1.993.117L17 6V5a1 1 0 0 0-.883-.993L16 4h-1a1 1 0 0 1-.117-1.993L15 2z"></svg:path>`,
})
export class TablerZoomInAreaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomInFilledIcon],svg[tabler-zoom-in-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1-2.008 2.225l-.114-.103l-4.943-4.944a8 8 0 0 1-12.49-6.332L2 10l.005-.285A8 8 0 0 1 14 3.072M10 6a1 1 0 0 0-.993.883L9 7v2H7l-.117.007a1 1 0 0 0 0 1.986L7 11h2v2l.007.117a1 1 0 0 0 1.986 0L11 13v-2h2l.117-.007a1 1 0 0 0 0-1.986L13 9h-2V7l-.007-.117A1 1 0 0 0 10 6"></svg:path>`,
})
export class TablerZoomInFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomMoneyIcon],svg[tabler-zoom-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"></svg:path><svg:path d="M12 7H9.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H8m2 0v1m0-8v1"></svg:path></svg:g>`,
})
export class TablerZoomMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomMoneyFilledIcon],svg[tabler-zoom-money-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 0 1 2 10l.005-.285A8 8 0 0 1 14 3.072M12 6H9.5a2.5 2.5 0 0 0 0 5h1a.5.5 0 1 1 0 1H8a1 1 0 0 0 0 2h2.5a2.5 2.5 0 1 0 0-5h-1a.5.5 0 0 1 0-1H12a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerZoomMoneyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomOutIcon],svg[tabler-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m4 0h6m8 11l-6-6"></svg:path>`,
})
export class TablerZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomOutAreaIcon],svg[tabler-zoom-out-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 15h4m-7 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0m12 7l-3-3M6 18H5a2 2 0 0 1-2-2v-1m0-4v-1m0-4V5a2 2 0 0 1 2-2h1m4 0h1m4 0h1a2 2 0 0 1 2 2v1"></svg:path>`,
})
export class TablerZoomOutAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomOutAreaFilledIcon],svg[tabler-zoom-out-area-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9a6 6 0 0 1 4.891 9.476l2.816 2.817a1 1 0 0 1-1.414 1.414l-2.817-2.816A6 6 0 0 1 9 15l.004-.225A6 6 0 0 1 15 9m2 5h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2M3 14a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1m0-5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1m3-7a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v1a1 1 0 1 1-2 0V5a3 3 0 0 1 3-3zm5 0a1 1 0 0 1 0 2h-1a1 1 0 1 1 0-2zm5 0a3 3 0 0 1 3 3v1a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1h-1a1 1 0 0 1 0-2z"></svg:path>`,
})
export class TablerZoomOutAreaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomOutFilledIcon],svg[tabler-zoom-out-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1-2.008 2.225l-.114-.103l-4.943-4.944a8 8 0 0 1-12.49-6.332L2 10l.005-.285A8 8 0 0 1 14 3.072M13 9H7l-.117.007a1 1 0 0 0 0 1.986L7 11h6l.117-.007a1 1 0 0 0 0-1.986z"></svg:path>`,
})
export class TablerZoomOutFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomPanIcon],svg[tabler-zoom-pan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m8 5l-2.5-2.5M10 4l2-2l2 2m6 6l2 2l-2 2M4 10l-2 2l2 2m6 6l2 2l2-2"></svg:path>`,
})
export class TablerZoomPanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomPanFilledIcon],svg[tabler-zoom-pan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a4 4 0 0 1 3.447 6.031l2.26 2.262a1 1 0 0 1-1.414 1.414l-2.262-2.26A4 4 0 0 1 8 12l.005-.2A4 4 0 0 1 12 8m-.707-6.707a1 1 0 0 1 1.414 0l2 2a1 1 0 1 1-1.414 1.414L12 3.415l-1.293 1.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414zm8 8a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L20.585 12l-1.292-1.293a1 1 0 0 1-.083-1.32zm-16 0a1 1 0 1 1 1.414 1.414L3.415 12l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414zm6 10a1 1 0 0 1 1.414 0L12 20.585l1.294-1.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class TablerZoomPanFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomQuestionIcon],svg[tabler-zoom-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6m-5-2v.01"></svg:path><svg:path d="M10 10a1.5 1.5 0 1 0-1.14-2.474"></svg:path></svg:g>`,
})
export class TablerZoomQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomQuestionFilledIcon],svg[tabler-zoom-question-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 0 1 2 10l.005-.285A8 8 0 0 1 14 3.072M10 12a1 1 0 0 0-.993.883L9 13.01a1 1 0 0 0 1.993.117L11 13a1 1 0 0 0-1-1M8.1 6.877a1 1 0 0 0 1.433 1.389l.088-.09A.5.5 0 1 1 10 9a1 1 0 0 0-.002 2a2.5 2.5 0 1 0-1.9-4.123"></svg:path>`,
})
export class TablerZoomQuestionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomReplaceIcon],svg[tabler-zoom-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m21 21l-6-6M3.291 8a7 7 0 0 1 5.077-4.806a7.02 7.02 0 0 1 8.242 4.403"></svg:path><svg:path d="M17 4v4h-4m3.705 4a7 7 0 0 1-5.074 4.798a7.02 7.02 0 0 1-8.241-4.403"></svg:path><svg:path d="M3 16v-4h4"></svg:path></svg:g>`,
})
export class TablerZoomReplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomResetIcon],svg[tabler-zoom-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m21 21l-6-6M3.268 12.043A7.02 7.02 0 0 0 9.902 17a7.01 7.01 0 0 0 7.043-6.131a7 7 0 0 0-5.314-7.672A7.02 7.02 0 0 0 3.39 7.6"></svg:path><svg:path d="M3 4v4h4"></svg:path></svg:g>`,
})
export class TablerZoomResetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomScanIcon],svg[tabler-zoom-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2M8 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0m8 5l-2.5-2.5"></svg:path>`,
})
export class TablerZoomScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZoomScanFilledIcon],svg[tabler-zoom-scan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1m-9-8a4 4 0 0 1 3.446 6.031l2.261 2.262a1 1 0 0 1-1.414 1.414l-2.262-2.26l-.031.017A4 4 0 0 1 7 11l.005-.2A4 4 0 0 1 11 7M8 3a1 1 0 1 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0V6a3 3 0 0 1 3-3zm10 0a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 0 1 0-2z"></svg:path>`,
})
export class TablerZoomScanFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZzzIcon],svg[tabler-zzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h6l-6 8h6m4-16h6l-6 8h6"></svg:path>`,
})
export class TablerZzzIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[tablerZzzOffIcon],svg[tabler-zzz-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h6l-6 8h6m4-16h6l-5.146 6.862M16 12h4M3 3l18 18"></svg:path>`,
})
export class TablerZzzOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
