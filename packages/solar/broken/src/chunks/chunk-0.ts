import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solar4kBrokenIcon],svg[solar-4k-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M5.5 8v2a2 2 0 0 0 2 2h3m0-4v4m0 0v4m3-8v5.2m0 0V16m0-2.8l1.923-2m0 0L18.5 8m-3.077 3.2L18.5 16"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class Solar4kBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAccessibilityBrokenIcon],svg[solar-accessibility-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path stroke-linecap="round" d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarAccessibilityBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddCircleBrokenIcon],svg[solar-add-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 12h-3m0 0H9m3 0V9m0 3v3M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path>`,
})
export class SolarAddCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddFolderBrokenIcon],svg[solar-add-folder-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 14h2m0 0h2m-2 0v2m0-2v-2m10-.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path>`,
})
export class SolarAddFolderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddSquareBrokenIcon],svg[solar-add-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 12h-3m0 0H9m3 0V9m0 3v3m10-3c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarAddSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlaster2BrokenIcon],svg[solar-adhesive-plaster-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.765 20.416a5.41 5.41 0 1 0 7.65-7.651m-7.65 7.65l7.65-7.65m-7.65 7.65l-4.59-4.59m-4.59-4.59a5.41 5.41 0 0 1 7.65-7.65m-7.65 7.65l7.65-7.65m-7.65 7.65L5 12.65m15.416.115L19 11.35m-7.765-7.766l4.59 4.59"></svg:path><svg:circle cx="9.172" cy="12" r="1" fill="currentColor" transform="rotate(-45 9.172 12)"></svg:circle><svg:circle cx="12" cy="14.829" r="1" fill="currentColor" transform="rotate(-45 12 14.829)"></svg:circle><svg:circle cx="12" cy="9.171" r="1" fill="currentColor" transform="rotate(-45 12 9.171)"></svg:circle><svg:circle cx="14.829" cy="12" r="1" fill="currentColor" transform="rotate(-45 14.829 12)"></svg:circle></svg:g>`,
})
export class SolarAdhesivePlaster2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlasterBrokenIcon],svg[solar-adhesive-plaster-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 7.642L9.071 3.213a4.142 4.142 0 0 0-5.858 5.858L14.93 20.787a4.142 4.142 0 0 0 5.858-5.858l-4.358-4.358"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 17.858l-2.929 2.929A4.142 4.142 0 0 1 2.596 20m3.546-8l-2.929 2.929c-.322.322-.58.685-.774 1.071M12 6.142l2.929-2.929a4.142 4.142 0 1 1 5.858 5.858L17.857 12"></svg:path><svg:path fill="currentColor" d="M15.841 12.871a.788.788 0 1 1-1.114 1.114a.788.788 0 0 1 1.114-1.114m-3.712-3.712a.787.787 0 1 0-1.114 1.114a.787.787 0 0 0 1.114-1.114m4.641 6.497a.787.787 0 1 1-1.114 1.114a.787.787 0 0 1 1.114-1.114M9.345 8.23A.788.788 0 1 0 8.23 9.346A.788.788 0 0 0 9.345 8.23m3.712 3.713a.787.787 0 1 1-1.113 1.114a.787.787 0 0 1 1.113-1.114m.928 2.785a.788.788 0 1 1-1.114 1.113a.788.788 0 0 1 1.114-1.113m-3.712-3.713a.787.787 0 1 0-1.114 1.114a.787.787 0 0 0 1.114-1.114"></svg:path></svg:g>`,
})
export class SolarAdhesivePlasterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsBrokenIcon],svg[solar-airbuds-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 8.3a3 3 0 0 1-3 3a1 1 0 0 0-1 1V18m-4.5 0v.75a2.25 2.25 0 0 0 4.5 0V18m-4.5 0V8.313c0-.29 0-.436.006-.558a5 5 0 0 1 4.749-4.749C18.377 3 18.522 3 18.813 3c.174 0 .26 0 .334.004c.83.04 1.57.417 2.09.996M13.5 18H18m-7.5 0v.75a2.25 2.25 0 0 1-4.5 0V18m4.5 0H6m4.5 0v-4M6 18v-5.7a1 1 0 0 0-1-1a3 3 0 0 1-3-3V6.187c0-.174 0-.26.004-.334a3 3 0 0 1 2.849-2.85C4.926 3 5.013 3 5.188 3c.29 0 .435 0 .557.006a5 5 0 0 1 4.749 4.749c.006.122.006.267.006.558V10m9-4v2.5M4.5 6v2.5"></svg:path>`,
})
export class SolarAirbudsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseBrokenIcon],svg[solar-airbuds-case-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 13v-2c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106c-.531-.731-.767-1.635-.871-2.939"></svg:path><svg:path stroke-linecap="round" d="M15 7a2 2 0 1 1 0 4H9a2 2 0 1 1 0-4h2"></svg:path><svg:path d="M21 9h-3.5M7 9H3"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseChargeBrokenIcon],svg[solar-airbuds-case-charge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m12 18l2-2.5h-4l2-2.5"></svg:path><svg:path d="M7 9h10M3 13v-2c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106c-.531-.731-.767-1.635-.871-2.939"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseChargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseMinimalisticBrokenIcon],svg[solar-airbuds-case-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 13v-2c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106c-.531-.731-.767-1.635-.871-2.939M7 9h10"></svg:path>`,
})
export class SolarAirbudsCaseMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseOpenBrokenIcon],svg[solar-airbuds-case-open-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3.955 19.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-.167c0-.781 0-1.172-.207-1.442a1 1 0 0 0-.184-.184c-.27-.207-.66-.207-1.442-.207H4.833c-.782 0-1.172 0-1.442.207q-.105.08-.184.184C3 11.661 3 12.051 3 12.833V13c0 1.169 0 2.156.029 3"></svg:path><svg:path d="M3.5 5.941V4.625A2.625 2.625 0 0 1 6.125 2A4.375 4.375 0 0 1 10.5 6.375V11H6.794V9.236a.824.824 0 0 0-.823-.824A2.47 2.47 0 0 1 3.5 5.942Zm17 0V4.625A2.625 2.625 0 0 0 17.875 2A4.375 4.375 0 0 0 13.5 6.375V11h3.706V9.236c0-.455.369-.824.823-.824a2.47 2.47 0 0 0 2.471-2.47ZM8 11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseOpenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsChargeBrokenIcon],svg[solar-airbuds-charge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M18 11.5v-.2a1 1 0 0 1 1-1a3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5m6-8.5v2.5M4.5 7v2.5M22 18a4 4 0 1 0-4 4"></svg:path><svg:path stroke-linejoin="round" d="M18 16.5L17 18h2l-1 1.5"></svg:path><svg:path d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0H6m4.5 0v-5M6 19v-5.7a1 1 0 0 0-1-1a3 3 0 0 1-3-3V7.187c0-.174 0-.26.004-.334a3 3 0 0 1 2.849-2.85C4.926 4 5.013 4 5.188 4c.29 0 .435 0 .557.006a5 5 0 0 1 4.749 4.749c.006.122.006.267.006.557V10"></svg:path></svg:g>`,
})
export class SolarAirbudsChargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCheckBrokenIcon],svg[solar-airbuds-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M18 11.5v-.2a1 1 0 0 1 1-1a3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5m-3 5.5v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0H6m4.5 0v-5M6 19v-5.7a1 1 0 0 0-1-1a3 3 0 0 1-3-3V7.187c0-.174 0-.26.004-.334a3 3 0 0 1 2.849-2.85C4.926 4 5.013 4 5.188 4c.29 0 .435 0 .557.006a5 5 0 0 1 4.749 4.749c.006.122.006.267.006.557V10m9-5v2.5M4.5 7v2.5M22 18a4 4 0 1 0-4 4"></svg:path><svg:path stroke-linejoin="round" d="m16.5 18.2l.857.8l2.143-2"></svg:path></svg:g>`,
})
export class SolarAirbudsCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsLeftBrokenIcon],svg[solar-airbuds-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-width="1.5" d="M2 18.667v.833c0 .14 0 .209.003.268a2.35 2.35 0 0 0 2.23 2.229C4.29 22 4.36 22 4.5 22s.209 0 .268-.003a2.35 2.35 0 0 0 2.229-2.23C7 19.71 7 19.64 7 19.5v-.833m-5 0h5m-5 0L2.003 13M7 18.667V12a1 1 0 0 1 1-1a3 3 0 0 0 3-3V5.335A3.353 3.353 0 0 0 7.664 2H7.56A5.59 5.59 0 0 0 2 7.56V9"></svg:path><svg:path stroke-width="1.676" d="M8 5v3"></svg:path><svg:path stroke-width="1.5" d="M15.5 11a5.5 5.5 0 1 0 5.5 5.5"></svg:path><svg:path stroke-linejoin="round" stroke-width="1.5" d="M14 14v5h3"></svg:path><svg:path stroke-width="1.5" d="M14 5.1A5.01 5.01 0 0 1 17.9 9"></svg:path></svg:g>`,
})
export class SolarAirbudsLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsRemoveBrokenIcon],svg[solar-airbuds-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 11.5v-.2a1 1 0 0 1 1-1a3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5m-3 5.5v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0H6m4.5 0v-5M6 19v-5.7a1 1 0 0 0-1-1a3 3 0 0 1-3-3V7.187c0-.174 0-.26.004-.334a3 3 0 0 1 2.849-2.85C4.926 4 5.013 4 5.188 4c.29 0 .435 0 .557.006a5 5 0 0 1 4.749 4.749c.006.122.006.267.006.557V10m9-5v2.5M4.5 7v2.5M22 18a4 4 0 1 0-4 4m-1-3l2-2m0 2l-2-2"></svg:path>`,
})
export class SolarAirbudsRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsRightBrokenIcon],svg[solar-airbuds-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 18.667v.833c0 .14 0 .209-.003.268a2.35 2.35 0 0 1-2.23 2.229C18.71 22 18.64 22 18.5 22s-.209 0-.268-.003a2.35 2.35 0 0 1-2.229-2.23C16 19.71 16 19.64 16 19.5v-.833m5 0h-5m5 0L20.997 13M16 18.667V12a1 1 0 0 0-1-1a3 3 0 0 1-3-3V5.335A3.353 3.353 0 0 1 15.336 2h.105A5.59 5.59 0 0 1 21 7.56V9"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.676" d="M15 5v3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.5 22A5.5 5.5 0 1 0 2 16.5M9 5.1A5.01 5.01 0 0 0 5.1 9"></svg:path><svg:path fill="currentColor" d="M6 14v-.75a.75.75 0 0 0-.75.75zm-.75 5a.75.75 0 0 0 1.5 0zM6 16.5h-.75v.75H6zm2.357 2.886a.75.75 0 1 0 1.286-.772zM6 14.75h1.5v-1.5H6zm.75 1.75V14h-1.5v2.5zm1.5-1.25c0 .154-.202.5-.75.5v1.5c1.109 0 2.25-.773 2.25-2zm-.75-.5c.548 0 .75.346.75.5h1.5c0-1.227-1.141-2-2.25-2zM5.25 14v5h1.5v-5zm2.25 1.75H6v1.5h1.5zm-.643 1.136l1.5 2.5l1.286-.772l-1.5-2.5z"></svg:path></svg:g>`,
})
export class SolarAirbudsRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmAddBrokenIcon],svg[solar-alarm-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15 13h-3m0 0H9m3 0v-3m0 3v3"></svg:path><svg:path stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path><svg:path d="M7.5 5.204A9 9 0 1 1 4.204 8.5"></svg:path></svg:g>`,
})
export class SolarAlarmAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmBrokenIcon],svg[solar-alarm-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 9v4l2.5 2.5m-11-11l4-2.5m13 2.5l-4-2.5"></svg:path><svg:path d="M7.5 5.204A9 9 0 1 1 4.204 8.5"></svg:path></svg:g>`,
})
export class SolarAlarmBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmPauseBrokenIcon],svg[solar-alarm-pause-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path><svg:path d="M8 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 9 9.034 9 9.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 17 9.966 17 9.5 17s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 16.199 8 15.966 8 15.5zm5 0c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 9 14.034 9 14.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 16.199 13 15.966 13 15.5z"></svg:path><svg:path stroke-linecap="round" d="M7.5 5.204A9 9 0 1 1 4.204 8.5"></svg:path></svg:g>`,
})
export class SolarAlarmPauseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmPlayBrokenIcon],svg[solar-alarm-play-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.888 10.935C14.963 11.812 15.5 12.25 15.5 13s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66c-.237.167-.506.339-.784.508c-1.073.652-1.609.978-2.09.617c-.48-.36-.524-1.116-.612-2.628c-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628c.481-.361 1.018-.035 2.09.617c.278.169.547.341.784.508c.27.19.565.418.862.66Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path><svg:path stroke-linecap="round" d="M7.5 5.204A9 9 0 1 1 4.204 8.5"></svg:path></svg:g>`,
})
export class SolarAlarmPlayBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmRemoveBrokenIcon],svg[solar-alarm-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15 13H9"></svg:path><svg:path stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path><svg:path d="M7.5 5.204A9 9 0 1 1 4.204 8.5"></svg:path></svg:g>`,
})
export class SolarAlarmRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmSleepBrokenIcon],svg[solar-alarm-sleep-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5M9 10h6l-6 6h6"></svg:path><svg:path d="M7.5 5.204A9 9 0 1 1 4.204 8.5"></svg:path></svg:g>`,
})
export class SolarAlarmSleepBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmTurnOffBrokenIcon],svg[solar-alarm-turn-off-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.121 15.122L12 13m0 0l-2.121-2.12M12 13l2.121-2.121M12 13l-2.121 2.121"></svg:path><svg:path stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path><svg:path d="M7.5 5.204A9 9 0 1 1 4.204 8.5"></svg:path></svg:g>`,
})
export class SolarAlarmTurnOffBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlbumBrokenIcon],svg[solar-album-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21.194 16.793c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464l-.422-3c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024c.749.809.767 1.966.521 3.976"></svg:path><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path><svg:circle cx="16.5" cy="11.5" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="m20 20l-2.884-2.149c-.93-.692-2.316-.761-3.34-.166l-.266.155c-.712.414-1.68.345-2.294-.164l-3.839-3.177c-.766-.634-1.995-.668-2.81-.078l-1.324.96"></svg:path></svg:g>`,
})
export class SolarAlbumBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignBottomBrokenIcon],svg[solar-align-bottom-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 21h12M2 21h4M5 9v5.5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 17 6.565 17 7.5 17s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 3 8.435 3 7.5 3s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.161.28-.193.636-.2 1.25"></svg:path><svg:path d="M16.5 17c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C14 15.902 14 15.435 14 14.5v-6c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C15.098 6 15.565 6 16.5 6s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 7.098 19 7.565 19 8.5v6c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201Z"></svg:path></svg:g>`,
})
export class SolarAlignBottomBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignHorizontaSpacingBrokenIcon],svg[solar-align-horizonta-spacing-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 2v20m18-12v12m0-20v4M8 15v1c0 1.886 0 2.828.586 3.414S10.114 20 12 20s2.828 0 3.414-.586S16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414S13.886 4 12 4s-2.828 0-3.414.586S8 6.114 8 8v3"></svg:path>`,
})
export class SolarAlignHorizontaSpacingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignHorizontalCenterBrokenIcon],svg[solar-align-horizontal-center-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 2v3m0 17v-3m0-5v-4m1-5H7.5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 10 6.565 10 7.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C19 8.902 19 8.435 19 7.5s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.28-.161-.636-.193-1.25-.2"></svg:path><svg:path d="M7 16.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h5c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-5c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z"></svg:path></svg:g>`,
})
export class SolarAlignHorizontalCenterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignLeftBrokenIcon],svg[solar-align-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M15 5H9.5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C7 6.098 7 6.565 7 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C8.098 10 8.565 10 9.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C21 8.902 21 8.435 21 7.5s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.28-.161-.636-.193-1.25-.2"></svg:path><svg:path d="M7 16.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h6c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-6c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z"></svg:path><svg:path stroke-linecap="round" d="M3 14V2m0 20v-4"></svg:path></svg:g>`,
})
export class SolarAlignLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignRightBrokenIcon],svg[solar-align-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 14V2m0 20v-4M11 5H5.5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C3 6.098 3 6.565 3 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C4.098 10 4.565 10 5.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C17 8.902 17 8.435 17 7.5s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.28-.161-.636-.193-1.25-.2"></svg:path><svg:path d="M17 16.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C15.902 14 15.435 14 14.5 14h-6c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C6 15.098 6 15.565 6 16.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C7.098 19 7.565 19 8.5 19h6c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75Z"></svg:path></svg:g>`,
})
export class SolarAlignRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignTopBrokenIcon],svg[solar-align-top-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 3h12M2 3h4M5 13v5.5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 21 6.565 21 7.5 21s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 7 8.435 7 7.5 7s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.161.28-.193.636-.2 1.25"></svg:path><svg:path d="M16.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z"></svg:path></svg:g>`,
})
export class SolarAlignTopBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignVerticalCenterBrokenIcon],svg[solar-align-vertical-center-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12h3m17 0h-3m-5 0h-4m-5 1V7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 5 6.565 5 7.5 5s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C10 6.098 10 6.565 10 7.5v9c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C8.902 19 8.435 19 7.5 19s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.161-.28-.193-.636-.2-1.25"></svg:path><svg:path d="M16.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z"></svg:path></svg:g>`,
})
export class SolarAlignVerticalCenterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignVerticalSpacingBrokenIcon],svg[solar-align-vertical-spacing-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 3H2m20 18h-4M2 21h12M9 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12s0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12s0-2.828-.586-3.414S17.886 8 16 8h-3"></svg:path>`,
})
export class SolarAlignVerticalSpacingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowDownBrokenIcon],svg[solar-alt-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 9l-7 6l-1.75-1.5M5 9l2.333 2"></svg:path>`,
})
export class SolarAltArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowLeftBrokenIcon],svg[solar-alt-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 19l-6-7l1.5-1.75M15 5l-2 2.333"></svg:path>`,
})
export class SolarAltArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowRightBrokenIcon],svg[solar-alt-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l2 2.333M9 19l6-7l-1.5-1.75"></svg:path>`,
})
export class SolarAltArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowUpBrokenIcon],svg[solar-alt-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 15l-7-6l-1.75 1.5M5 15l2.333-2"></svg:path>`,
})
export class SolarAltArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveBrokenIcon],svg[solar-archive-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h3c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-3c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 12.699 9 12.466 9 12Z"></svg:path><svg:path stroke-linecap="round" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1m-8-14v6c0 3.771 0 5.657 1.172 6.828c.704.705 1.668.986 3.144 1.098M12 3H4c-.943 0-1.414 0-1.707.293S2 4.057 2 5s0 1.414.293 1.707S3.057 7 4 7h16c.943 0 1.414 0 1.707-.293S22 5.943 22 5s0-1.414-.293-1.707S20.943 3 20 3h-4"></svg:path></svg:g>`,
})
export class SolarArchiveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveCheckBrokenIcon],svg[solar-archive-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9.5 13.4l1.429 1.6l3.571-4"></svg:path><svg:path d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1m-8-14v6c0 3.771 0 5.657 1.172 6.828c.704.705 1.668.986 3.144 1.098M12 3H4c-.943 0-1.414 0-1.707.293S2 4.057 2 5s0 1.414.293 1.707S3.057 7 4 7h16c.943 0 1.414 0 1.707-.293S22 5.943 22 5s0-1.414-.293-1.707S20.943 3 20 3h-4"></svg:path></svg:g>`,
})
export class SolarArchiveCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveDownBrokenIcon],svg[solar-archive-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1m-8-14v6c0 3.771 0 5.657 1.172 6.828c.704.705 1.668.986 3.144 1.098M12 3H4c-.943 0-1.414 0-1.707.293S2 4.057 2 5s0 1.414.293 1.707S3.057 7 4 7h16c.943 0 1.414 0 1.707-.293S22 5.943 22 5s0-1.414-.293-1.707S20.943 3 20 3h-4"></svg:path><svg:path stroke-linejoin="round" d="M12 7v9m0 0l3-3.333M12 16l-3-3.333"></svg:path></svg:g>`,
})
export class SolarArchiveDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveDownMinimlisticBrokenIcon],svg[solar-archive-down-minimlistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.07 1.464-8.535C4.705 2.224 6.587 2.035 10 2.005M22 12c0-4.714 0-7.07-1.465-8.535c-1.24-1.241-3.122-1.43-6.535-1.46"></svg:path><svg:path d="M10 22c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14s0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22"></svg:path><svg:path stroke-linejoin="round" d="M12 11v6m0 0l2.5-2.5M12 17l-2.5-2.5"></svg:path></svg:g>`,
})
export class SolarArchiveDownMinimlisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveMinimalisticBrokenIcon],svg[solar-archive-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9.5 14.4l1.429 1.6l3.571-4"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536c1.241-1.24 3.123-1.43 6.536-1.46M22 12c0-4.714 0-7.071-1.465-8.536c-1.24-1.24-3.122-1.43-6.535-1.46"></svg:path><svg:path d="M10 22c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14s0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22"></svg:path></svg:g>`,
})
export class SolarArchiveMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveUpBrokenIcon],svg[solar-archive-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 21v-9m0 0l3 3.333M12 12l-3 3.333"></svg:path><svg:path d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1m-8-14v6c0 3.771 0 5.657 1.172 6.828c.704.705 1.668.986 3.144 1.098M12 3H4c-.943 0-1.414 0-1.707.293S2 4.057 2 5s0 1.414.293 1.707S3.057 7 4 7h16c.943 0 1.414 0 1.707-.293S22 5.943 22 5s0-1.414-.293-1.707S20.943 3 20 3h-4"></svg:path></svg:g>`,
})
export class SolarArchiveUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveUpMinimlisticBrokenIcon],svg[solar-archive-up-minimlistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536c1.241-1.24 3.123-1.43 6.536-1.46M22 12c0-4.714 0-7.071-1.465-8.536c-1.24-1.24-3.122-1.43-6.535-1.46"></svg:path><svg:path d="M10 22c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14s0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22"></svg:path><svg:path stroke-linejoin="round" d="M12 17v-6m0 0l2.5 2.5M12 11l-2.5 2.5"></svg:path></svg:g>`,
})
export class SolarArchiveUpMinimlisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArmchair2BrokenIcon],svg[solar-armchair-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17.262 13.6l1.001-2.466c.276-.68 1-1.134 1.81-1.134c1.314 0 2.242 1.15 1.827 2.264l-1.12 3c-.195.524-.292.785-.421 1.008c-.524.904-1.498 1.53-2.624 1.69c-.276.038-.585.038-1.202.038H6.766c-1.5-.021-2.827-.876-3.324-2.14l-.039-.103h0L2.1 12.264C1.685 11.15 2.613 10 3.927 10c.81 0 1.534.453 1.81 1.134l1.098 2.706h0c.1.246.15.37.222.47a1.2 1.2 0 0 0 .74.463c.13.027.277.027.57.027h6.98c.569 0 .853 0 1.091-.098q.196-.082.349-.219c.184-.166.281-.405.475-.883Z"></svg:path><svg:path fill="currentColor" d="m17.297 4.67l-.517.543zm-10.594 0l-.517-.544zM12 3.25a.75.75 0 0 0 0 1.5zM8.118 4.848a.75.75 0 0 0-.236-1.481zM6.75 12V8.571h-1.5V12zm10.5-3.429V12h1.5V8.571zM13.2 4.75c1.152 0 1.943.001 2.538.078c.577.073.854.206 1.042.385l1.034-1.087c-.515-.49-1.155-.693-1.885-.786c-.713-.091-1.618-.09-2.729-.09zm5.55 3.821c0-1.055.002-1.925-.095-2.612c-.1-.713-.32-1.337-.84-1.833L16.78 5.213c.182.173.314.423.39.955c.078.558.08 1.304.08 2.403zm-12 0c0-1.1.002-1.845.08-2.403c.076-.532.208-.782.39-.955L6.186 4.126c-.52.496-.74 1.12-.84 1.833c-.098.687-.096 1.557-.096 2.612zM12 4.75h1.2v-1.5H12zM7.882 3.367c-.653.104-1.227.312-1.696.76L7.22 5.212c.172-.164.418-.288.898-.365z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 20v-2M6 20v-1.333"></svg:path></svg:g>`,
})
export class SolarArmchair2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArmchairBrokenIcon],svg[solar-armchair-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M17.79 16.333v.75a.75.75 0 0 0 .75-.75zm-11.58 0h-.75c0 .415.336.75.75.75zm-3.46-.476a.75.75 0 0 0-1.5 0zM4.916 20.9l.177-.729zm-2.822-3.01l-.733.157zm16.99 3.01l.178.728zm2.822-3.01l-.733-.157zM12 17.083a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zM1.25 12a.75.75 0 0 0 1.5 0zm15.79-.754v5.087h1.5v-5.087zm-11.58 0v5.087h1.5v-5.087zm15.79 0v4.611h1.5v-4.611zM4.105 9.75c.704 0 1.356.623 1.356 1.496h1.5c0-1.608-1.234-2.996-2.856-2.996zm15.79-1.5c-1.622 0-2.855 1.388-2.855 2.996h1.5c0-.873.651-1.496 1.355-1.496zm0 1.5c.703 0 1.355.623 1.355 1.496h1.5c0-1.608-1.233-2.996-2.855-2.996zM6.82 20.25c-1.04 0-1.426-.005-1.728-.079l-.355 1.457c.521.127 1.131.122 2.083.122zm-5.57-4.393c0 1.024-.004 1.654.11 2.19l1.467-.314c-.073-.342-.077-.775-.077-1.876zm3.843 4.314c-1.104-.269-2-1.2-2.266-2.438l-1.466.314c.376 1.758 1.672 3.166 3.377 3.581zM4.105 8.25c-1.622 0-2.855 1.388-2.855 2.996h1.5c0-.873.652-1.496 1.355-1.496zm13.074 13.5c.952 0 1.562.005 2.083-.122l-.355-1.457c-.302.074-.689.079-1.728.079zm4.071-5.893c0 1.101-.004 1.534-.077 1.876l1.466.314c.115-.537.111-1.166.111-2.19zm-1.988 5.771c1.704-.415 3.001-1.823 3.377-3.581l-1.466-.314c-.265 1.238-1.162 2.17-2.266 2.438zM6.21 17.083H12v-1.5H6.21zm9.789 0h1.79v-1.5H16zm1.179 3.167H12v1.5h5.179zm-5.179 0H6.821v1.5H12zM1.25 11.246V12h1.5v-.754z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M6 10V8.154c0-2.3 0-3.451.482-4.308A3.65 3.65 0 0 1 7.8 2.495C8.635 2 9.757 2 12 2s3.365 0 4.2.495c.547.324 1.002.79 1.318 1.351C18 4.703 18 5.853 18 8.154V10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1M4 22v-1"></svg:path></svg:g>`,
})
export class SolarArmchairBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowDownBrokenIcon],svg[solar-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5"></svg:path>`,
})
export class SolarArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftBrokenIcon],svg[solar-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 12l6-6m-6 6l6 6m-6-6h10.5m5.5 0h-2.5"></svg:path>`,
})
export class SolarArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftDownBrokenIcon],svg[solar-arrow-left-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18h9m-9 0V9m0 9l6.5-6.5M18 6l-2.5 2.5"></svg:path>`,
})
export class SolarArrowLeftDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftUpBrokenIcon],svg[solar-arrow-left-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6h9M6 6v9m0-9l6.5 6.5M18 18l-2.5-2.5"></svg:path>`,
})
export class SolarArrowLeftUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightBrokenIcon],svg[solar-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"></svg:path>`,
})
export class SolarArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightDownBrokenIcon],svg[solar-arrow-right-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 18H9m9 0V9m0 9l-6.5-6.5M6 6l2.5 2.5"></svg:path>`,
})
export class SolarArrowRightDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightUpBrokenIcon],svg[solar-arrow-right-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 18l2.5-2.5M18 6H9m9 0v9m0-9l-6.5 6.5"></svg:path>`,
})
export class SolarArrowRightUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToDownLeftBrokenIcon],svg[solar-arrow-to-down-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 19.5l5-5m-5 5l-5-5m5 5V13m0-3.5c0-1.667-1-5-5-5"></svg:path>`,
})
export class SolarArrowToDownLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToDownRightBrokenIcon],svg[solar-arrow-to-down-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 19.5l-5-5m5 5l5-5m-5 5V13m0-3.5c0-1.667 1-5 5-5"></svg:path>`,
})
export class SolarArrowToDownRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToTopLeftBrokenIcon],svg[solar-arrow-to-top-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 4.5l5 5m-5-5l-5 5m5-5V11m0 3.5c0 1.667-1 5-5 5"></svg:path>`,
})
export class SolarArrowToTopLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToTopRightBrokenIcon],svg[solar-arrow-to-top-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 4.5l-5 5m5-5l5 5m-5-5V11m0 3.5c0 1.667 1 5 5 5"></svg:path>`,
})
export class SolarArrowToTopRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowUpBrokenIcon],svg[solar-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 4l-6 6m6-6l6 6m-6-6v10.5m0 5.5v-2.5"></svg:path>`,
})
export class SolarArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAsteroidBrokenIcon],svg[solar-asteroid-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 19a6 6 0 0 0-7.915-5.688M17 8a6 6 0 0 0 4.823 5.885m-3.505-9.637q-.286.356-.515.752"></svg:path><svg:path d="M16 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path><svg:path stroke-linecap="round" d="M13 8.5a2.5 2.5 0 1 0-2.5 2.5"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarAsteroidBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAtomBrokenIcon],svg[solar-atom-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058C5.048 1.067 9.338 1.982 13.513 5m2.958 2.529c4.939 4.939 6.94 10.944 4.471 13.413c-1.989 1.989-6.27 1.078-10.442-1.932M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413c-4.94 4.939-10.945 6.94-13.414 4.471c-1.991-1.99-1.076-6.28 1.942-10.455a24.5 24.5 0 0 1 2.529-2.958C12.468 2.59 18.473.589 20.942 3.058Z"></svg:path><svg:path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path></svg:g>`,
})
export class SolarAtomBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAugmentedRealityBrokenIcon],svg[solar-augmented-reality-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M14 8v-.75a.75.75 0 0 0-.75.75zm-.75 8a.75.75 0 0 0 1.5 0zM8.5 8l.716-.224a.75.75 0 0 0-1.432 0zm-1.625 5.2l-.716-.224zm-1.59 2.576a.75.75 0 0 0 1.43.448zm5 .448a.75.75 0 0 0 1.43-.448zM14 12h-.75v.75H14zm3.364 4.398a.75.75 0 1 0 1.272-.796zm-9.58-8.622l-1.625 5.2l1.432.448l1.625-5.2zm-1.625 5.2l-.875 2.8l1.432.448l.875-2.8zm1.625-4.752l1.625 5.2l1.432-.448l-1.625-5.2zm1.625 5.2l.875 2.8l1.432-.448l-.875-2.8zm-2.534.526h3.25v-1.5h-3.25zM14 8.75h2v-1.5h-2zm.75 3.25V8h-1.5v4zm2.5-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 10zM16 8.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 7.25zM13.25 8v8h1.5V8zM16 11.25h-.5v1.5h.5zm-.5 0H14v1.5h1.5zm-.636 1.148l2.5 4l1.272-.796l-2.5-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarAugmentedRealityBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBackpackBrokenIcon],svg[solar-backpack-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 10.73v5.645a4.52 4.52 0 0 1-3.538 4.411c-3.598.8-7.326.8-10.923 0A4.52 4.52 0 0 1 3 16.376V10.73a6 6 0 0 1 4.618-5.757l.176-.04l.167-.036a19 19 0 0 1 8.078 0l.167.037l.176.04A6 6 0 0 1 19.632 7M17.5 15.5V17"></svg:path><svg:path d="M15.959 4.5A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.959 2.5M3 14a22.2 22.2 0 0 0 5 1.546M21 14a22.15 22.15 0 0 1-9 1.91M10 13h4"></svg:path></svg:g>`,
})
export class SolarBackpackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBackspaceBrokenIcon],svg[solar-backspace-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 3.771 0 5.657-1.204 6.828S17.654 20 13.78 20h-2.637c-2.227 0-3.341 0-4.27-.501c-.93-.502-1.52-1.42-2.701-3.259l-.681-1.06C2.497 13.634 2 12.86 2 12s.497-1.634 1.49-3.18l.68-1.06c1.181-1.838 1.771-2.757 2.701-3.259S8.915 4 11.142 4h2.637c3.875 0 5.813 0 7.017 1.172c.671.653.968 1.528 1.1 2.828M15.5 9.5l-5 5m0-5l5 5"></svg:path>`,
})
export class SolarBackspaceBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBacteriaBrokenIcon],svg[solar-bacteria-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 15a3 3 0 1 1 6 0a3 3 0 0 1-6 0Z"></svg:path><svg:path stroke-linecap="round" d="m4.5 11.5l.414-1m9.551-3.329s1.243-.171 2.121.707c.879.879.707 2.122.707 2.122M9 9.293s-1.243.171-2.121-.707C6 7.707 6.17 6.464 6.17 6.464M19 13.136s-1.162.473-1.483 1.673s.448 2.19.448 2.19m-4.545.773L15 19m-.5-5v-2M12 5h-2m2.5 4.5l-1-1"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarBacteriaBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag2BrokenIcon],svg[solar-bag-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m15 11l1 6m-7-6l-1 6M9 6V5a3 3 0 1 1 6 0v1"></svg:path><svg:path d="M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922s-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555"></svg:path></svg:g>`,
})
export class SolarBag2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag3BrokenIcon],svg[solar-bag-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.232 10.526c-.585-3.121-.878-4.682-1.989-5.604C17.133 4 15.545 4 12.37 4h-.721c-3.176 0-4.763 0-5.874.922s-1.404 2.483-1.99 5.604c-.822 4.389-1.234 6.583-.034 8.029S7.182 20 11.648 20h.721c4.465 0 6.698 0 7.898-1.445c.696-.84.85-1.93.695-3.555"></svg:path><svg:path d="M9.17 8a3.001 3.001 0 0 0 5.66 0"></svg:path></svg:g>`,
})
export class SolarBag3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag4BrokenIcon],svg[solar-bag-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="15" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="9" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1m5.224 6.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922s-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555"></svg:path></svg:g>`,
})
export class SolarBag4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag5BrokenIcon],svg[solar-bag-5-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.206 14.97c-.537 2.687-.806 4.03-1.693 4.895q-.247.24-.53.434C16.96 21 15.59 21 12.85 21h-1.7c-2.74 0-4.109 0-5.131-.7a4 4 0 0 1-.53-.435C4.6 19 4.33 17.657 3.793 14.97c-.771-3.856-1.157-5.784-.269-7.15a4 4 0 0 1 .56-.683C5.25 6 7.215 6 11.148 6h1.703c3.932 0 5.898 0 7.064 1.138a4 4 0 0 1 .559.683c.511.786.6 1.76.436 3.179"></svg:path><svg:circle cx="15" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="10" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1"></svg:path></svg:g>`,
})
export class SolarBag5BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagBrokenIcon],svg[solar-bag-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.362 6h-.722c-3.175 0-4.763 0-5.874.922s-1.403 2.483-1.989 5.604c-.822 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555M9 6V5a3 3 0 1 1 6 0v1"></svg:path>`,
})
export class SolarBagBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagCheckBrokenIcon],svg[solar-bag-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10 14.3l1.333 1.2l2.667-3"></svg:path><svg:path d="M9 6V5a3 3 0 1 1 6 0v1m5.224 6.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922s-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555"></svg:path></svg:g>`,
})
export class SolarBagCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagCrossBrokenIcon],svg[solar-bag-cross-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m14 12l-4 4m0-4l4 4M9 6V5a3 3 0 1 1 6 0v1"></svg:path><svg:path d="M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922s-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555"></svg:path></svg:g>`,
})
export class SolarBagCrossBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagHeartBrokenIcon],svg[solar-bag-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12 12.191l-.519.542a.75.75 0 0 0 1.038 0zm-.957 3.675l-.444.604zm1.914 0l-.444-.605zm-.957.462v.75zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093c-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321zM9.75 13.197c0-.576.263-.827.492-.907c.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776c-.934.327-1.496 1.226-1.496 2.323zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971c-.348.403-.809.786-1.226 1.093zm2.35-3.273c0-1.097-.562-1.996-1.496-2.323c-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443c.228.08.491.33.491.907zM10.6 16.47c.368.27.782.608 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1m5.224 6.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922s-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555"></svg:path></svg:g>`,
})
export class SolarBagHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagMusic2BrokenIcon],svg[solar-bag-music-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1m-2 10v-6"></svg:path><svg:circle cx="11" cy="16" r="2"></svg:circle><svg:path stroke-linecap="round" d="M15 12a2 2 0 0 1-2-2"></svg:path><svg:path stroke-linecap="round" d="M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922s-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555"></svg:path></svg:g>`,
})
export class SolarBagMusic2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagMusicBrokenIcon],svg[solar-bag-music-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1"></svg:path><svg:path d="M12 17a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 0v-5"></svg:path><svg:path stroke-linecap="round" d="m14.058 9.97l-1.316.66h0a2.3 2.3 0 0 0-.35.194a1 1 0 0 0-.374.606c-.018.093-.018.195-.018.4c0 .485 0 .727.06.893a1 1 0 0 0 1.056.652c.174-.02.391-.129.826-.346l1.316-.658a2 2 0 0 0 .35-.195a1 1 0 0 0 .374-.606c.018-.093.018-.195.018-.4c0-.485 0-.727-.06-.893a1 1 0 0 0-1.056-.652c-.174.02-.391.129-.826.346Z"></svg:path><svg:path stroke-linecap="round" d="M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922s-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555"></svg:path></svg:g>`,
})
export class SolarBagMusicBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagSmileBrokenIcon],svg[solar-bag-smile-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 6V5a3 3 0 1 1 6 0v1m-5.83 9a3.001 3.001 0 0 0 5.66 0"></svg:path><svg:path d="M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922s-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029S7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555"></svg:path></svg:g>`,
})
export class SolarBagSmileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBalloonBrokenIcon],svg[solar-balloon-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 16.607c1.15.86 2.518 1.38 4 1.393c4.142.034 7.594-3.92 7.56-8.196C19.527 5.53 16.142 2.034 12 2S4.527 5.404 4.56 9.68A8.9 8.9 0 0 0 5.244 13"></svg:path><svg:path d="M15.5 9a3.035 3.035 0 0 0-3-3M12 20.35c.321 0 .482 0 .593-.022c.654-.128 1.051-.772.858-1.39c-.033-.105-.109-.242-.261-.515M12 20.35c-.321 0-.482 0-.593-.022c-.654-.128-1.051-.772-.858-1.39c.033-.105.109-.242.261-.515M12 20.35v2.15"></svg:path></svg:g>`,
})
export class SolarBalloonBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBallsBrokenIcon],svg[solar-balls-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16.02 8.077c-2.018.194-4.163.8-5.653 2.29s-2.096 3.635-2.29 5.653m7.943-7.943a19 19 0 0 1 3.228-.016a2.895 2.895 0 0 1 2.69 2.691c.072.932.098 2.059-.015 3.228M16.02 8.077l5.903 5.903m0 0c-.194 2.018-.8 4.163-2.29 5.654s-3.635 2.095-5.653 2.29m0 0a19 19 0 0 1-3.228.015a2.895 2.895 0 0 1-2.69-2.691a19 19 0 0 1 .015-3.228m5.903 5.903L8.077 16.02"></svg:path><svg:path d="M14.996 8.252a6.5 6.5 0 0 0-.868-3.001a6.49 6.49 0 0 0-4.85-3.204a6.499 6.499 0 1 0-1.12 12.943"></svg:path><svg:path d="M9.215 2s-.138 2.356 1.357 5.19c.457.869.956 1.569 1.428 2.123M3 5.928s1.933 1.047 3.428 3.881C7.923 12.644 7.785 15 7.785 15"></svg:path><svg:path stroke-linecap="round" d="m12.5 17.5l5-5m-2 0l2 2m-5 1l2 2M14 14l2 2"></svg:path></svg:g>`,
})
export class SolarBallsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBanknote2BrokenIcon],svg[solar-banknote-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 5c2.828 0 4.243 0 5.121.879C19 6.757 19 8.172 19 11s0 4.243-.879 5.121C17.243 17 15.828 17 13 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11s0-4.243.879-5.121C3.757 5 5.172 5 8 5h1m7 15h-5c-2.828 0-4.242 0-5.121-.879c-.49-.49-.707-1.146-.803-2.121m16.046 2.121c.878-.878.878-2.293.878-5.12c0-2.83 0-4.244-.878-5.122c-.49-.49-1.147-.707-2.122-.803"></svg:path><svg:path d="M13 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M16 13V9M5 13V9"></svg:path></svg:g>`,
})
export class SolarBanknote2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBanknoteBrokenIcon],svg[solar-banknote-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M15 5H9c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104c.347.232.74.384 1.222.484M9 19h6c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104c-.347-.232-.74-.384-1.222-.484"></svg:path><svg:path d="M12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"></svg:path><svg:path stroke-linecap="round" d="M18.5 15v-1m0-5v2.5M5.5 9v1m0 5v-2.5"></svg:path></svg:g>`,
})
export class SolarBanknoteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBarChairBrokenIcon],svg[solar-bar-chair-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.06 1.06 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917z"></svg:path><svg:path stroke-linecap="round" d="M9 8L6 22m9-14l.75 3.5M18 22l-1.5-7m0 2h-9"></svg:path></svg:g>`,
})
export class SolarBarChairBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBasketballBrokenIcon],svg[solar-basketball-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.95 20.573S16.01 13.982 14 10.5S7.05 3.427 7.05 3.427"></svg:path><svg:path d="M21.864 12.58c-5.411-1.187-12.805 3.768-14.287 8.238m8.837-17.609c-1.488 4.42-8.74 9.303-14.125 8.243"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarBasketballBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBathBrokenIcon],svg[solar-bath-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 20.5c.65 0 1.364-.017 2.098-.044c.258-.01.386-.015.607-.037c3.278-.332 6.072-3.234 6.28-6.521c.015-.222.015-.42.015-.815c0-.077 0-.116-.002-.148a1 1 0 0 0-.933-.933c-.033-.002-.07-.002-.148-.002M4.083 12c-.077 0-.115 0-.148.002a1 1 0 0 0-.933.933c-.002.032-.002.07-.002.148c0 .395 0 .593.014.815c.18 2.844 2.296 5.4 4.986 6.252M6 20l-1 2m13-2l1 2M2 12h12m8 0h-4"></svg:path><svg:path fill="currentColor" d="M2.25 13a.75.75 0 0 0 1.5 0zM7.6 3.5l.696-.28zm.379.947l.328.674zM6.362 6.192l.695.283zm4.215-1.814l-.295.69zM6.346 8.742l-.698.275a.75.75 0 0 0 .994.413zm5.96-2.567l.297.69a.75.75 0 0 0 .401-.964zM3.75 13V4.385h-1.5V13zM5.385 2.75c.669 0 1.27.407 1.518 1.028l1.393-.557a3.135 3.135 0 0 0-2.91-1.971zM3.75 4.385c0-.903.732-1.635 1.635-1.635v-1.5A3.135 3.135 0 0 0 2.25 4.385zm3.153-.607l.38.948l1.392-.557l-.379-.948zm.14 4.689a2.68 2.68 0 0 1 .014-1.992l-1.39-.565a4.18 4.18 0 0 0-.02 3.107zm4.967-2.98L6.049 8.053l.593 1.377l5.96-2.566zm-1.728-.42c.622.266 1.085.77 1.327 1.383l1.395-.55a3.97 3.97 0 0 0-2.132-2.212zM7.057 6.476a2.57 2.57 0 0 1 1.25-1.354l-.656-1.348A4.07 4.07 0 0 0 5.667 5.91zm1.25-1.354a2.36 2.36 0 0 1 1.975-.053l.59-1.38a3.86 3.86 0 0 0-3.221.085z"></svg:path></svg:g>`,
})
export class SolarBathBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeBrokenIcon],svg[solar-battery-charge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.5 9L9 12h3.5L10 15"></svg:path><svg:path stroke-linecap="round" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryChargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeMinimalisticBrokenIcon],svg[solar-battery-charge-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 14v-4"></svg:path><svg:path stroke-linejoin="round" d="M11.5 9L9 12h3.5L10 15"></svg:path><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryChargeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullBrokenIcon],svg[solar-battery-full-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M14 9s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path><svg:path stroke-linecap="round" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryFullBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullMinimalisticBrokenIcon],svg[solar-battery-full-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M22 14v-4"></svg:path><svg:path d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M14 9s.5.9.5 3s-.5 3-.5 3"></svg:path></svg:g>`,
})
export class SolarBatteryFullMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfBrokenIcon],svg[solar-battery-half-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path><svg:path stroke-linecap="round" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryHalfBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfMinimalisticBrokenIcon],svg[solar-battery-half-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M22 14v-4"></svg:path><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryHalfMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowBrokenIcon],svg[solar-battery-low-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z"></svg:path><svg:path stroke-linecap="round" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryLowBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowMinimalisticBrokenIcon],svg[solar-battery-low-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 9s.5.9.5 3s-.5 3-.5 3m15-1v-4"></svg:path><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryLowMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedBrokenIcon],svg[solar-bed-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 20v-1.5M5 20v-1.5"></svg:path><svg:path d="M2 15c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 12 4.068 12 5 12h14c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 13.602 22 14.068 22 15s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 18 19.932 18 19 18H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 16.398 2 15.932 2 15Zm19-3c0-3.771 0-5.657-1.172-6.828S16.771 4 13 4h-2C7.229 4 5.343 4 4.172 5.172S3 8.229 3 12"></svg:path><svg:path d="M18.5 12v-1.5c0-1.886 0-2.828-.586-3.414S16.386 6.5 14.5 6.5h-5c-1.886 0-2.828 0-3.414.586S5.5 8.614 5.5 10.5V12M12 7v5"></svg:path></svg:g>`,
})
export class SolarBedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable2BrokenIcon],svg[solar-bedside-table-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5"></svg:path><svg:path fill="currentColor" d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12v-2c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2M2 14h12m8 0h-4M2 8h20"></svg:path></svg:g>`,
})
export class SolarBedsideTable2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable3BrokenIcon],svg[solar-bedside-table-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12v-2c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2M9 15.5h6m-6-9h6M2 11h12m8 0h-4"></svg:path>`,
})
export class SolarBedsideTable3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable4BrokenIcon],svg[solar-bedside-table-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5m7-.5V8m3 4v3m-6-3v3m3-13h-2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12v-2c0-3.771 0-5.657-1.172-6.828c-.943-.944-2.348-1.127-4.828-1.163M2 8h3m17 0H9"></svg:path>`,
})
export class SolarBedsideTable4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTableBrokenIcon],svg[solar-bedside-table-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5"></svg:path><svg:path fill="currentColor" d="M13 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 14h12m8 0h-4M2 8h20m-8-6c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12v-2c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2"></svg:path></svg:g>`,
})
export class SolarBedsideTableBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBingBrokenIcon],svg[solar-bell-bing-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 6v4m-4.5 9c.655 1.748 2.422 3 4.5 3q.367 0 .72-.05M16.5 19a4.5 4.5 0 0 1-1.302 1.84M9.107 2.674A6.5 6.5 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.8 25.8 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002"></svg:path>`,
})
export class SolarBellBingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBrokenIcon],svg[solar-bell-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.107 2.674A6.5 6.5 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.8 25.8 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002M7.5 19c.655 1.748 2.422 3 4.5 3q.367 0 .72-.05M16.5 19a4.5 4.5 0 0 1-1.302 1.84"></svg:path>`,
})
export class SolarBellBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellOffBrokenIcon],svg[solar-bell-off-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 9h4l-4 4h4"></svg:path><svg:path d="M7.5 19c.655 1.748 2.422 3 4.5 3q.367 0 .72-.05M16.5 19a4.5 4.5 0 0 1-1.302 1.84M9.107 2.674A6.5 6.5 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.8 25.8 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002"></svg:path></svg:g>`,
})
export class SolarBellOffBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBenzeneRingBrokenIcon],svg[solar-benzene-ring-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7.02 6.638c-.985.586-1.479.88-1.75 1.362S5 9.069 5 10.241v3.518c0 1.172 0 1.758.27 2.241c.271.483.765.776 1.75 1.362l2.96 1.759c.986.586 1.479.879 2.02.879s1.034-.293 2.02-.88l2.96-1.758c.985-.586 1.479-.88 1.75-1.362c.25-.448.269-.986.27-2M9.98 4.88C10.965 4.292 11.458 4 12 4s1.034.293 2.02.88l2.96 1.758c.985.586 1.479.88 1.75 1.362c.25.448.269.986.27 2"></svg:path><svg:path stroke-linejoin="round" d="M5 8L2 6m17 2l3-2M5 16l-3 2"></svg:path><svg:path d="m12 16.884l4-2.384"></svg:path></svg:g>`,
})
export class SolarBenzeneRingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingBrokenIcon],svg[solar-bicycling-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="4" r="2"></svg:circle><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227c-.55-.227-.983-.657-1.85-1.518l-.576-.574c-.785-.78-1.178-1.17-1.642-1.127c-.465.042-.78.497-1.411 1.406M12 18l.057-.359c.235-1.47.352-2.204.024-2.804s-1.01-.898-2.374-1.493L8.23 12.7c-1.032-.45-1.549-.675-1.678-1.13c-.05-.18-.031-.36.05-.57"></svg:path></svg:g>`,
})
export class SolarBicyclingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingRoundBrokenIcon],svg[solar-bicycling-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="14" cy="4" r="2"></svg:circle><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M18.5 10h-3.918c-.377 0-.743-.128-1.038-.363L11.386 7.92a2.638 2.638 0 1 0-2.698 4.48M12 18l.76-1.774a1.89 1.89 0 0 0-.981-2.477"></svg:path></svg:g>`,
})
export class SolarBicyclingRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillBrokenIcon],svg[solar-bill-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 2h20M8.049 18.53C9.932 20.178 10.873 21 12 21s2.069-.823 3.951-2.47l2-1.748c1.008-.882 1.513-1.322 1.78-1.913c.269-.59.269-1.26.269-2.599V9.702M20 6V2H4v10.27c0 1.34 0 2.009.268 2.6c.175.385.451.707.903 1.13M8.5 13h7m-7-5h7"></svg:path>`,
})
export class SolarBillBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCheckBrokenIcon],svg[solar-bill-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 7v-.63c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37V15m18-4v9.374c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V19"></svg:path><svg:path stroke-linejoin="round" d="m9.5 10.4l1.429 1.6L14.5 8"></svg:path><svg:path d="M7.5 15.5H9m7.5 0H12"></svg:path></svg:g>`,
})
export class SolarBillCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCrossBrokenIcon],svg[solar-bill-cross-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14 8l-4 4m0-4l4 4m-6.5 3.5H9m7.5 0H12M21 7v-.63c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37V15m18-4v9.374c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V19"></svg:path>`,
})
export class SolarBillCrossBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillListBrokenIcon],svg[solar-bill-list-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 11H17M7 11h.5M7 7.5h.5m-.5 7h.5m9.5 0h-1m-5.5 0h3m3.5-7h-3m-3.5 0h1M21 7v-.63c0-1.193 0-1.79-.158-2.27a3.05 3.05 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.05 3.05 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37V15m18-4v9.374c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V19"></svg:path>`,
})
export class SolarBillListBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole2BrokenIcon],svg[solar-black-hole-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.142 10.363C13.688 6.817 21.914 15.61 16.524 21"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.858 13.637C10.312 17.183 2.086 8.39 7.476 3"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.363 13.858C6.817 10.312 15.61 2.086 21 7.476"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.637 10.142C17.183 13.688 8.39 21.914 3 16.524"></svg:path></svg:g>`,
})
export class SolarBlackHole2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole3BrokenIcon],svg[solar-black-hole-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12"></svg:path><svg:path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12"></svg:path><svg:path stroke-linecap="round" d="M10 12.312c0-2.78 3.707-3.89 7-3.024m5 6.024c0-1.97-.806-3.456-2-4.49M14 12c0 2.779-3.707 3.89-7 3.024M2 9c0 1.68.586 3.008 1.5 4.004"></svg:path></svg:g>`,
})
export class SolarBlackHole3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHoleBrokenIcon],svg[solar-black-hole-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M12 10c5 0 4.6 12-3 12"></svg:path><svg:path stroke-linecap="round" d="M12.312 14c-5 0-4.6-12 3-12"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.631 10.696c3.536-3.535 11.738 5.233 6.364 10.607"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.68 13.304C10.145 16.84 1.942 8.07 7.316 2.697"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.852 13.524C7.316 9.99 16.084 1.786 21.458 7.16"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.46 10.476c3.535 3.535-5.233 11.738-10.607 6.364"></svg:path><svg:path stroke-linecap="round" d="M10 12.312c0-5 12-4.6 12 3"></svg:path><svg:path stroke-linecap="round" d="M14 12c0 5-12 4.6-12-3"></svg:path></svg:g>`,
})
export class SolarBlackHoleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothBrokenIcon],svg[solar-bluetooth-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.263 4.655C17.421 5.477 18 5.888 18 6.46c0 .57-.579.981-1.737 1.803L11 12V5.225c0-1.887 0-2.83.605-3.14c.362-.185.784-.062 1.395.3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m16.263 19.345l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C11 21.605 11 20.662 11 18.775V12l5.263 3.738C17.421 16.56 18 16.97 18 17.54s-.579.982-1.737 1.804Z"></svg:path><svg:path fill="currentColor" d="M5.57 14.886a.75.75 0 1 0 .86 1.228zm.86 1.228l5-3.5l-.86-1.228l-5 3.5z"></svg:path><svg:path fill="currentColor" d="M5.57 9.114a.75.75 0 0 1 .86-1.228zm.86-1.228l5 3.5l-.86 1.228l-5-3.5z"></svg:path></svg:g>`,
})
export class SolarBluetoothBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothCircleBrokenIcon],svg[solar-bluetooth-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M14.2 9.593L11 12V7.623c0-.954 0-1.432.302-1.583c.301-.151.682.135 1.444.708L14.2 7.842c.533.401.8.602.8.876c0 .273-.267.474-.8.875Zm0 6.565l-1.454 1.094c-.762.573-1.143.86-1.444.708C11 17.809 11 17.331 11 16.377V12l3.2 2.407c.533.401.8.602.8.875c0 .274-.267.475-.8.876Z"></svg:path><svg:path fill="currentColor" d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5l-3-2.5l-.96 1.152l3 2.5z"></svg:path><svg:path fill="currentColor" d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5l-3 2.5l-.96-1.152l3-2.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarBluetoothCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothSquareBrokenIcon],svg[solar-bluetooth-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13.933 9.8L11 12V8c0-.872 0-1.309.276-1.447c.277-.138.626.124 1.324.647l1.333 1c.49.367.734.55.734.8s-.245.434-.734.8Zm0 6l-1.333 1c-.698.524-1.047.785-1.324.647C11 17.31 11 16.873 11 16v-4l2.933 2.2c.49.367.734.55.734.8s-.245.433-.734.8Z"></svg:path><svg:path fill="currentColor" d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5l-3-2.5l-.96 1.152l3 2.5z"></svg:path><svg:path fill="currentColor" d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5l-3 2.5l-.96-1.152l3-2.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarBluetoothSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothWaveBrokenIcon],svg[solar-bluetooth-wave-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.263 4.655C14.421 5.477 15 5.888 15 6.46c0 .57-.579.981-1.737 1.803L8 12V5.225c0-1.887 0-2.83.605-3.14c.362-.185.783-.062 1.395.3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m13.263 19.345l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C8 21.605 8 20.662 8 18.775V12l5.263 3.738C14.421 16.56 15 16.97 15 17.54s-.579.982-1.737 1.804Z"></svg:path><svg:path fill="currentColor" d="M2.57 14.886a.75.75 0 1 0 .86 1.228zm.86 1.228l5-3.5l-.86-1.228l-5 3.5z"></svg:path><svg:path fill="currentColor" d="M2.57 9.114a.75.75 0 0 1 .86-1.228zm.86-1.228l5 3.5l-.86 1.228l-5-3.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 5s2 2.1 2 7c0 .728-.044 1.394-.12 2M19 19s.304-.32.675-1M17 8s1 1.9 1 4s-1 4-1 4"></svg:path></svg:g>`,
})
export class SolarBluetoothWaveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyBrokenIcon],svg[solar-body-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.893 14v1.54c0 .701 0 1.052-.121 1.376c-.12.324-.353.598-.818 1.145l-2.382 2.803c-.474.558-.711.837-1.041.987c-.33.149-.71.149-1.469.149h-.124c-.76 0-1.139 0-1.469-.15c-.33-.149-.567-.428-1.041-.986l-2.382-2.803c-.465-.547-.697-.82-.818-1.145c-.12-.324-.12-.675-.12-1.376v-5.263c0-.685 0-1.027-.148-1.328c-.147-.301-.423-.524-.975-.97l-.208-.167C3.595 6.858 3.004 6.38 3 5.69s.52-1.124 1.568-1.99q.24-.2.468-.364c.573-.41 1.402-.863 1.986-1.166a1.58 1.58 0 0 1 1.394-.016l.264.124q.106.05.171.142c1.498 2.116 4.8 2.116 6.298 0a.44.44 0 0 1 .171-.142l.264-.124a1.58 1.58 0 0 1 1.394.016c.584.303 1.413.756 1.986 1.166q.23.166.468.363C20.48 4.566 21.004 5 21 5.69s-.596 1.168-1.777 2.122l-.208.167c-.552.446-.828.669-.975.97c-.126.257-.144.545-.147 1.051"></svg:path>`,
})
export class SolarBodyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeBrokenIcon],svg[solar-body-shape-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32c.66 1.193 1.517 2.38 2.146 3.863c.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32c-.66 1.193-1.517 2.38-2.146 3.863A10.6 10.6 0 0 0 2 22"></svg:path><svg:path d="M5.5 13H9m9 0h-5m-7-2h6m6 0h-2m-4 11c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5"></svg:path></svg:g>`,
})
export class SolarBodyShapeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeMinimalisticBrokenIcon],svg[solar-body-shape-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32c.66 1.193 1.517 2.38 2.146 3.863c.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32c-.66 1.193-1.517 2.38-2.146 3.863A10.6 10.6 0 0 0 2 22"></svg:path><svg:path d="M6 13h5m7 0h-3m-3 9c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5"></svg:path></svg:g>`,
})
export class SolarBodyShapeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltBrokenIcon],svg[solar-bolt-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15.268 18.229c-1.98 2.678-2.969 4.017-3.892 3.734s-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.703-.673l-.019-.034c-.354-.683.289-1.552 1.574-3.29L8.732 5.77c1.979-2.678 2.969-4.017 3.892-3.734s.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29"></svg:path>`,
})
export class SolarBoltBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltCircleBrokenIcon],svg[solar-bolt-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m9.213 10.174l2.015-1.605c1.302-1.037 1.953-1.556 2.363-1.3s.197 1.05-.228 2.636l-.04.15c-.154.572-.23.858-.096 1.086l.007.012c.14.226.438.306 1.033.465c1.072.287 1.608.43 1.702.804l.004.019c.083.376-.34.712-1.185 1.386l-2.015 1.604c-1.303 1.038-1.954 1.556-2.364 1.3s-.196-1.05.229-2.636l.04-.15c.153-.571.23-.857.095-1.086l-.007-.012c-.14-.225-.438-.305-1.033-.465c-1.072-.287-1.608-.43-1.702-.804l-.004-.019c-.083-.375.34-.712 1.186-1.385Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarBoltCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombBrokenIcon],svg[solar-bomb-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5.75 8.003a7.5 7.5 0 1 1-2.747 2.747M17 7l-2 2"></svg:path><svg:path d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path></svg:g>`,
})
export class SolarBombBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombEmojiBrokenIcon],svg[solar-bomb-emoji-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 16h2"></svg:path><svg:path fill="currentColor" d="M14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="12.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 7l-2 2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.75 8.003a7.5 7.5 0 1 1-2.747 2.747"></svg:path></svg:g>`,
})
export class SolarBombEmojiBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticBrokenIcon],svg[solar-bomb-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 7l-2 2m4.5-1.5l1 .5M16 3.5l.5 1M19 5l1-1M5.75 8.003a7.5 7.5 0 1 1-2.747 2.747"></svg:path>`,
})
export class SolarBombMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBrokenIcon],svg[solar-bone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.356 15.206l-1.425 1.425c-.393.394-.369 1.043-.22 1.58c.28 1.013-.105 2.308-.848 3.051A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848c.536.149 1.185.173 1.579-.22l5.7-5.7c.393-.394.369-1.043.22-1.58c-.28-1.013.105-2.308.848-3.051A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848c-.536-.149-1.185-.173-1.579.22l-1.425 1.425"></svg:path>`,
})
export class SolarBoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBrokenBrokenIcon],svg[solar-bone-broken-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M13.29 5.79c.148.536.172 1.185-.221 1.579l-1.28 1.28a.14.14 0 0 0 .044.226a6.27 6.27 0 0 1 3.292 3.292a.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22c1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562M9.863 21.262A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848c.536.149 1.185.173 1.579-.22l1.28-1.28a.14.14 0 0 1 .226.044a6.27 6.27 0 0 0 3.292 3.292a.14.14 0 0 1 .044.227l-1.28 1.28c-.393.393-.369 1.042-.22 1.578"></svg:path><svg:path d="m17.657 17.657l1.414 1.414M6.343 6.343L4.93 4.93M15 19v1M5 9H4m15 6h1M9 5V4"></svg:path></svg:g>`,
})
export class SolarBoneBrokenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneCrackBrokenIcon],svg[solar-bone-crack-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.29 5.79c.148.536.172 1.185-.221 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562m4.274-18.524A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848c-.536-.149-1.185-.173-1.579.22l-5.7 5.7c-.393.394-.369 1.043-.22 1.58"></svg:path><svg:path d="M10.232 10.232v2.122l2.122-.707v1.414L15 12.5"></svg:path></svg:g>`,
})
export class SolarBoneCrackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonesBrokenIcon],svg[solar-bones-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M9.48 2.045v2.016c0 .556-.475.998-.96 1.272c-.914.519-1.558 1.707-1.558 2.758a2.519 2.519 0 1 0 5.038 0a2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.758c-.484-.274-.96-.716-.96-1.272V2.045M9.519 22v-2.015c0-.557-.476-.999-.96-1.273C7.643 18.194 7 17.006 7 15.954a2.519 2.519 0 1 1 5.038 0a2.519 2.519 0 0 1 5.038 0c0 1.052-.644 2.24-1.559 2.758c-.484.274-.96.716-.96 1.273V22"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarBonesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonfireBrokenIcon],svg[solar-bonfire-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 15L4 22m0-7l5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2"></svg:path><svg:path d="M6 8.86C6 13.772 9.733 15 11.6 15c.956 0 2.34-.246 3.577-.96m1.92-1.803c.551-.86.903-1.967.903-3.377c0-3.126-2.001-5.36-3.81-6.64c-.818-.578-1.837.057-1.837 1.045v.223c0 .996-.428 2.814-1.617 3.57c-.607.386-1.263-.192-1.336-.896l-.061-.58c-.07-.672-.77-1.08-1.32-.67a5.2 5.2 0 0 0-1.335 1.454"></svg:path></svg:g>`,
})
export class SolarBonfireBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBook2BrokenIcon],svg[solar-book-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5m6.5 8.5H8m2 3c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"></svg:path></svg:g>`,
})
export class SolarBook2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkBrokenIcon],svg[solar-book-bookmark-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5m0 5.5v3.53c0 .276 0 .414-.095.47s-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062s-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08"></svg:path><svg:path stroke-linecap="round" d="M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"></svg:path></svg:g>`,
})
export class SolarBookBookmarkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkMinimalisticBrokenIcon],svg[solar-book-bookmark-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"></svg:path><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M7 16V9m0-6.5V5m6 11v3.53c0 .276 0 .414-.095.47s-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062s-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08"></svg:path></svg:g>`,
})
export class SolarBookBookmarkMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBrokenIcon],svg[solar-book-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M8 7h8m-8 3.5h5M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"></svg:path></svg:g>`,
})
export class SolarBookBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookMinimalisticBrokenIcon],svg[solar-book-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></svg:path><svg:path stroke-linecap="round" d="M7 16V2.5M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"></svg:path></svg:g>`,
})
export class SolarBookMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkBrokenIcon],svg[solar-bookmark-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 11.098v4.993c0 3.096 0 4.645.734 5.321c.35.323.792.526 1.263.58c.987.113 2.14-.907 4.445-2.946c1.02-.901 1.529-1.352 2.118-1.47c.29-.06.59-.06.88 0c.59.118 1.099.569 2.118 1.47c2.305 2.039 3.458 3.059 4.445 2.945c.47-.053.913-.256 1.263-.579c.734-.676.734-2.224.734-5.321v-4.994c0-4.288 0-6.432-1.318-7.765S16.242 2 12 2S5.636 2 4.318 3.332C3.511 4.148 3.198 5.27 3.077 7M15 6H9"></svg:path>`,
})
export class SolarBookmarkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkCircleBrokenIcon],svg[solar-bookmark-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 14.046v-2.497c0-2.145 0-3.217-.586-3.883S13.886 7 12 7s-2.828 0-3.414.666S8 9.404 8 11.55v2.497c0 1.548 0 2.322.326 2.66a.95.95 0 0 0 .562.29c.438.056.95-.453 1.975-1.473c.453-.45.68-.676.942-.735a.9.9 0 0 1 .39 0c.262.059.489.284.942.735c1.024 1.02 1.537 1.53 1.976 1.473a.95.95 0 0 0 .56-.29c.327-.338.327-1.112.327-2.66Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarBookmarkCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkOpenedBrokenIcon],svg[solar-bookmark-opened-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2m9.945 14c-.11 2.193-.436 3.562-1.41 4.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536c.974-.973 2.343-1.3 4.536-1.409"></svg:path><svg:path stroke-linecap="round" d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185c.396.778.505 1.73.534 3.27"></svg:path><svg:path d="M17 6v4.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 12.27 7 11.783 7 10.808V6"></svg:path></svg:g>`,
})
export class SolarBookmarkOpenedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareBrokenIcon],svg[solar-bookmark-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 2v9.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 13.27 7 12.783 7 11.808V2"></svg:path><svg:path stroke-linecap="round" d="M17 18H7m15-6c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarBookmarkSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareMinimalisticBrokenIcon],svg[solar-bookmark-square-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path d="M17 2v6.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967c-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602c-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 10.27 7 9.783 7 8.808V2"></svg:path></svg:g>`,
})
export class SolarBookmarkSquareMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoomboxBrokenIcon],svg[solar-boombox-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 9.5h12"></svg:path><svg:path stroke-linecap="round" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:path d="M16 6c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6"></svg:path><svg:path stroke-linecap="round" d="M8 19a3 3 0 1 0-3-3"></svg:path><svg:path d="M18.121 18.122a3 3 0 1 1-4.242-4.243a3 3 0 0 1 4.242 4.243Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 13v2m10.121-1.121l-1.414 1.414"></svg:path></svg:g>`,
})
export class SolarBoomboxBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBottleBrokenIcon],svg[solar-bottle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.45 8.279l.748-.06zm.015.187l.749-.047zM16.614 12.9l.495.563zm.137-.122l.505.554zm-6.68-3.82l.738.127zm.032-.185l.737.139zm2.884-3.786l.331.673zm-.162.081l.342.667zm-5.093 8.398l-.526-.535zm.66.402a.75.75 0 1 0-1.064-1.058zm1.647-4.729l.737.135zm4.002 8.128l.732.165zm.041-.18l-.73-.174v.005zm2.397-4.068l.502.557zM7.65 20.413l.387-.643zM5.462 18.81l-.621.42zm1.486-4.573l.525.535zm-1.77 2.08l-.7-.268zm3.138 4.496l-.387.642zm2.424 1.176l-.07.747zm3.053-3.628l-.731-.166zm-.84 2.638l.597.453zM18.34 2.9l.387-.643zm.41.308l.633-.404zm-.123.764l.656.363zm.202-.472l-.75-.034zm-2.383-.773l-.656-.363zm.313-.447l.413.626zm.8.15l-.387.642zm-.495-.232l.045-.749zM9.138 9.7a.75.75 0 1 0 1.443.41zm5.76 5.3l.653.367zm.735-10.861l2.152 1.296l.774-1.285l-2.152-1.296zm-6.93 16.03l-.665-.4l-.774 1.285l.665.4zm4.607-3.07l-.248 1.095l1.463.332l.248-1.095zm-5.837-2.328L8.258 14l-1.052-1.07l-.784.772zm5.845-9.112l3.032-1.49l-.661-1.346l-3.032 1.49zm4.106-.807l.28 3.485l1.494-.12l-.279-3.484zm-.748-.993l.426-.77l-1.312-.727l-.427.771zm.496-.79l.78.471l.774-1.285l-.78-.47zm.798.538l-.455.822l1.313.727l.455-.823zm-.267 4.73l.014.176l1.497-.095l-.016-.2zm-.594 5.125c.068-.06.109-.095.147-.13l-1.01-1.11l-.128.114zm.608-4.95c.09 1.419-.46 2.789-1.471 3.71l1.01 1.11c1.358-1.238 2.076-3.055 1.958-4.914zm-6.908.572l.03-.173l-1.473-.278c-.01.052-.02.106-.035.197zm1.848-4.77c-.08.039-.129.062-.175.086l.685 1.334l.151-.075zM10.84 8.911c.262-1.391 1.128-2.561 2.327-3.177L12.482 4.4c-1.626.835-2.772 2.404-3.116 4.233zM8.258 14l.134-.133l-1.064-1.058l-.122.121zM9.33 8.83l-.03.174l1.475.27c.01-.05.018-.1.033-.19zm5.442 8.601l.027-.12l.01-.04l.002-.011v-.004l-.73-.17l-.73-.17v.002l-.001.003l-.003.011l-.01.042l-.028.126zm1.345-5.095l-.141.125l1.004 1.114l.128-.113zm-8.08 7.433c-.631-.38-1.07-.645-1.395-.874c-.322-.226-.472-.377-.559-.506l-1.243.84c.236.35.558.625.939.893c.378.266.872.563 1.484.932zm-1.616-6.067c-.513.504-.927.91-1.234 1.258c-.31.35-.56.694-.71 1.088l1.401.534c.056-.148.17-.332.433-.629c.264-.3.633-.662 1.161-1.182zm-.338 4.688a1.99 1.99 0 0 1-.205-1.808l-1.402-.534a3.49 3.49 0 0 0 .364 3.18zm1.845 3.064c.612.37 1.105.667 1.516.876c.412.21.807.366 1.225.405l.14-1.493c-.14-.013-.335-.07-.685-.249s-.79-.443-1.422-.824zm5.133-3.26c-.167.737-.285 1.253-.401 1.644c-.117.389-.213.585-.306.707l1.195.906c.254-.335.413-.731.548-1.184c.134-.45.264-1.025.427-1.741zm-2.392 4.541a3.23 3.23 0 0 0 2.88-1.284l-1.196-.906a1.73 1.73 0 0 1-1.543.697zM17.952 3.54l.143.087q.055.035.075.05c.029.02-.012-.003-.052-.067l1.264-.808a1.3 1.3 0 0 0-.337-.344c-.096-.07-.214-.14-.32-.203zm1.33.793c.06-.108.126-.227.175-.335c.053-.116.111-.274.12-.466l-1.499-.068c.004-.076.027-.116.013-.084l-.041.08l-.08.147zm-1.165-.723a.25.25 0 0 1-.039-.146l1.499.068a1.25 1.25 0 0 0-.195-.73zm-1.016-.522l.088-.156c.024-.043.04-.068.05-.084c.022-.033 0 .011-.068.056l-.826-1.252c-.17.112-.28.253-.354.364c-.069.103-.138.23-.202.346zm.844-1.303c-.113-.068-.237-.144-.349-.199a1.3 1.3 0 0 0-.488-.139l-.09 1.498c-.08-.005-.122-.032-.087-.014q.024.01.085.047c.043.024.091.054.155.092zm-.774 1.119a.25.25 0 0 1-.153.04l.09-1.497a1.25 1.25 0 0 0-.763.205zm-6.59 7.207q.117-.412.194-.838L9.3 9.003a7 7 0 0 1-.163.697zm4.23 7.149c.16-.67.41-1.307.74-1.893l-1.309-.735a8.8 8.8 0 0 0-.89 2.28zm.74-1.893a7 7 0 0 1 1.429-1.792l-1.004-1.114a8.6 8.6 0 0 0-1.734 2.17z"></svg:path><svg:path stroke="currentColor" stroke-linecap="square" stroke-width="1.5" d="m17.698 9.267l-.802.268c-.87.29-1.829.119-2.545-.454a2.7 2.7 0 0 0-2.899-.307l-.726.363"></svg:path></svg:g>`,
})
export class SolarBottleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBowlingBrokenIcon],svg[solar-bowling-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="7" r="1.5" transform="rotate(-90 12 7)"></svg:circle><svg:circle cx="12" cy="12" r="1.5" transform="rotate(-90 12 12)"></svg:circle><svg:path d="M8 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarBowlingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxBrokenIcon],svg[solar-box-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"></svg:path>`,
})
export class SolarBoxBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxMinimalisticBrokenIcon],svg[solar-box-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5L12 12m0 0L3 7.5m9 4.5v9.5"></svg:path>`,
})
export class SolarBoxMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsDownBrokenIcon],svg[solar-branching-paths-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 6.5a.75.75 0 0 0-1.5 0zm5.25 10l.53.53a.75.75 0 0 0 0-1.06zm-2.03.97a.75.75 0 1 0 1.06 1.06zm1.06-3a.75.75 0 1 0-1.06 1.06zM11.25 6.5v6h1.5v-6zM16 17.25h2v-1.5h-2zm1.47-1.28l-1.5 1.5l1.06 1.06l1.5-1.5zm1.06 0l-1.5-1.5l-1.06 1.06l1.5 1.5zm-7.28-3.47A4.75 4.75 0 0 0 16 17.25v-1.5a3.25 3.25 0 0 1-3.25-3.25z"></svg:path><svg:path fill="currentColor" d="M12.75 6.5a.75.75 0 0 0-1.5 0zM6 16.5l-.53-.53a.75.75 0 0 0 0 1.06zm.97 2.03a.75.75 0 0 0 1.06-1.06zm1.06-3a.75.75 0 1 0-1.06-1.06zm3.22-9.03v6h1.5v-6zM8 15.75H6v1.5h2zm-2.53 1.28l1.5 1.5l1.06-1.06l-1.5-1.5zm1.06 0l1.5-1.5l-1.06-1.06l-1.5 1.5zm4.72-4.53A3.25 3.25 0 0 1 8 15.75v1.5a4.75 4.75 0 0 0 4.75-4.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarBranchingPathsDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsUpBrokenIcon],svg[solar-branching-paths-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0zM18 8l.53.53a.75.75 0 0 0 0-1.06zm-.97-2.03a.75.75 0 1 0-1.06 1.06zm-1.06 3a.75.75 0 1 0 1.06 1.06zM12.75 18v-6h-1.5v6zM16 8.75h2v-1.5h-2zm2.53-1.28l-1.5-1.5l-1.06 1.06l1.5 1.5zm-1.06 0l-1.5 1.5l1.06 1.06l1.5-1.5zM12.75 12A3.25 3.25 0 0 1 16 8.75v-1.5A4.75 4.75 0 0 0 11.25 12z"></svg:path><svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0zM6 8l-.53-.53a.75.75 0 0 0 0 1.06zm2.03-.97a.75.75 0 0 0-1.06-1.06zm-1.06 3a.75.75 0 1 0 1.06-1.06zM12.75 18v-6h-1.5v6zM8 7.25H6v1.5h2zM6.53 8.53l1.5-1.5l-1.06-1.06l-1.5 1.5zm-1.06 0l1.5 1.5l1.06-1.06l-1.5-1.5zM12.75 12A4.75 4.75 0 0 0 8 7.25v1.5A3.25 3.25 0 0 1 11.25 12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarBranchingPathsUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBroomBrokenIcon],svg[solar-broom-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.036 3.944a.75.75 0 0 0-1.06-1.06zm-8.838 1.061a.75.75 0 1 0 1.06 1.06zm6.187 6.187l-.53.53a.75.75 0 0 0 1.06 0zM3.58 12.98l.64-.39zm-.667-1.096l-.668.34l.012.026l.015.024zM4.408 7.01l.35.663zm2.761-1.15l.206.721zm5.366-.518l.53-.53l-.183-.184l-.258-.03zM10.94 20.34l.39-.64zm1.096.667l-.39.641l.024.015l.025.012zm4.872-1.495l-.663-.35zm1.151-2.761l.721.206zm.924-.585a.75.75 0 1 0-1.463-.332zm.992-13.282l-2.122 2.121l1.061 1.06l2.121-2.12zm-6.718 3.182a3.25 3.25 0 0 1 4.596 0l1.061-1.061a4.75 4.75 0 0 0-6.717 0zm4.596 0a3.25 3.25 0 0 1 0 4.596l1.061 1.06a4.75 4.75 0 0 0 0-6.717zM4.22 12.589l-.667-1.096l-1.281.78l.667 1.096zm.538-4.915c.827-.436 1.734-.84 2.617-1.093l-.412-1.442c-1.018.29-2.025.744-2.905 1.209zm2.617-1.093a14.6 14.6 0 0 1 4.98-.503l.091.009l.089-.745l.088-.745h-.004l-.008-.001l-.123-.012q-.124-.013-.348-.025a16.1 16.1 0 0 0-5.176.58zm-3.794 4.96c-.701-1.373-.238-3.12 1.177-3.867l-.7-1.326c-2.2 1.16-2.856 3.833-1.813 5.876zm6.97 9.44l1.097.667l.78-1.281l-1.097-.667zm7.021-1.119c.465-.88.918-1.887 1.21-2.905l-1.443-.412c-.253.883-.656 1.79-1.093 2.617zm-5.876 1.813c2.044 1.043 4.715.387 5.876-1.812l-1.326-.7c-.747 1.414-2.494 1.878-3.868 1.176zm.308-15.803l5.85 5.85l1.061-1.06l-5.85-5.85zM2.94 13.37a22.75 22.75 0 0 0 7.612 7.612l.78-1.281a21.25 21.25 0 0 1-7.11-7.11zm15.842 3.588q.115-.402.203-.791l-1.463-.332q-.079.351-.182.71z"></svg:path>`,
})
export class SolarBroomBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugBrokenIcon],svg[solar-bug-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 21.71A7 7 0 0 1 5 15v-3.062A3.94 3.94 0 0 1 8.938 8h6.124A3.94 3.94 0 0 1 19 11.938V15a6.98 6.98 0 0 1-2 4.899"></svg:path><svg:path fill="currentColor" d="M8.25 7.5a.75.75 0 0 0-1.5 0zm-.615-2.917a.75.75 0 1 0 1.246.834zM17.25 8.5v-1h-1.5v1zm-10.5-1v1h1.5v-1zm10.5 0c0-2.9-2.35-5.25-5.25-5.25v1.5a3.75 3.75 0 0 1 3.75 3.75zM12 2.25a5.25 5.25 0 0 0-4.365 2.333l1.246.834A3.75 3.75 0 0 1 12 3.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2m13.5 18l-2-.8m2-11.2l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15"></svg:path></svg:g>`,
})
export class SolarBugBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugMinimalisticBrokenIcon],svg[solar-bug-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22a7 7 0 0 1-7-7v-5a7 7 0 0 1 14 0v5a6.98 6.98 0 0 1-2.101 5M19 13h3M5 13H2m18.5-6l-1.798.72M3.5 7l1.798.72M14.5 3.5L17 2M9.5 3.5L7 2m13.5 17l-2-.8m-15 .8l2-.8m5-7.7h3m-3 5h3"></svg:path>`,
})
export class SolarBugMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings2BrokenIcon],svg[solar-buildings-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 22H2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"></svg:path><svg:path fill="currentColor" d="M20.25 11.5a.75.75 0 0 0 1.5 0zm-.139-3.163l-.416.624zm.552.552l-.624.417zM21.75 15.5a.75.75 0 0 0-1.5 0zM17.5 8.75c.718 0 1.2 0 1.567.038c.355.036.519.1.628.173l.833-1.248c-.396-.264-.835-.369-1.309-.417c-.461-.047-1.032-.046-1.719-.046zm4.25 2.75c0-.687 0-1.258-.046-1.719c-.048-.473-.153-.913-.418-1.309l-1.247.834c.073.108.137.272.173.627c.037.367.038.85.038 1.567zm-2.055-2.54q.206.14.344.346l1.247-.834c-.2-.3-.458-.558-.758-.759zm.555 6.54V22h1.5v-6.5zM3.889 8.337l.417.624zm-.552.552l.624.417zM3.75 20a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM6.5 7.25c-.687 0-1.258 0-1.719.046c-.473.048-.913.153-1.309.417l.834 1.248c.108-.073.272-.137.627-.173c.367-.037.85-.038 1.567-.038zM3.75 11.5c0-.718 0-1.2.038-1.567c.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.836-.417 1.309c-.047.461-.046 1.032-.046 1.719zm-.278-3.787a2.8 2.8 0 0 0-.759.76l1.248.833a1.3 1.3 0 0 1 .345-.345zM2.25 20v2h1.5v-2zm0-8.5V16h1.5v-4.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22v-3M10 5h4m-4 9h.5m3.5 0h-1.5M14 8h-.5M10 8h1.5M10 11h4"></svg:path></svg:g>`,
})
export class SolarBuildings2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings3BrokenIcon],svg[solar-buildings-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 22H2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22v-3m-2-7h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5"></svg:path><svg:circle cx="12" cy="7" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M20.25 11.5a.75.75 0 0 0 1.5 0zm-.139-3.163l-.416.624zm.552.552l-.624.417zM21.75 15.5a.75.75 0 0 0-1.5 0zM17.5 8.75c.718 0 1.2 0 1.567.038c.355.036.519.1.628.173l.833-1.248c-.396-.264-.835-.369-1.309-.417c-.461-.047-1.032-.046-1.719-.046zm4.25 2.75c0-.687 0-1.258-.046-1.719c-.048-.473-.153-.913-.418-1.309l-1.247.834c.073.108.137.272.173.627c.037.367.038.85.038 1.567zm-2.055-2.54q.206.14.344.346l1.247-.834c-.2-.3-.458-.558-.758-.759zm.555 6.54V22h1.5v-6.5zM3.889 8.337l.417.624zm-.552.552l.624.417zM3.75 20a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM6.5 7.25c-.687 0-1.258 0-1.719.046c-.473.048-.913.153-1.309.417l.834 1.248c.108-.073.272-.137.627-.173c.367-.037.85-.038 1.567-.038zM3.75 11.5c0-.718 0-1.2.038-1.567c.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.836-.417 1.309c-.047.461-.046 1.032-.046 1.719zm-.278-3.787a2.8 2.8 0 0 0-.759.76l1.248.833a1.3 1.3 0 0 1 .345-.345zM2.25 20v2h1.5v-2zm0-8.5V16h1.5v-4.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 15h.5m3.5 0h-1.5"></svg:path></svg:g>`,
})
export class SolarBuildings3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildingsBrokenIcon],svg[solar-buildings-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 22H2m19 0v-9m-9.996-8c.018-1.24.11-1.943.582-2.414C12.172 2 13.114 2 15 2h2c1.886 0 2.828 0 3.414.586S21 4.114 21 6v3"></svg:path><svg:path d="M15 22v-6M3 22v-9m0-4c0-1.886 0-2.828.586-3.414S5.114 5 7 5h4c1.886 0 2.828 0 3.414.586S15 7.114 15 9v3M9 22v-3M6 8h6m-6 3h1m5 0H9.5M6 14h6"></svg:path></svg:g>`,
})
export class SolarBuildingsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBusBrokenIcon],svg[solar-bus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 2.009c-2.48.036-3.885.22-4.828 1.163C4 4.343 4 6.229 4 10v2c0 3.771 0 5.657 1.172 6.828S8.229 20 12 20s5.657 0 6.828-1.172S20 15.771 20 12v-2c0-3.771 0-5.657-1.172-6.828c-.943-.943-2.348-1.127-4.828-1.163"></svg:path><svg:path stroke-linejoin="round" d="M20 13h-4M4 13h8m3.5 3H17M7 16h1.5M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1m8.5-.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13"></svg:path><svg:path d="M4.5 5h3.75M19.5 5H12"></svg:path></svg:g>`,
})
export class SolarBusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorBrokenIcon],svg[solar-calculator-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 12c0 4.714 0 7.071-1.318 8.535S16.242 22 12 22s-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464c.876.974 1.17 2.343 1.268 4.536"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M7 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8Z"></svg:path><svg:circle cx="8" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="17" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarCalculatorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorMinimalisticBrokenIcon],svg[solar-calculator-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536M18 8.5h-4m4 6h-4m4 3h-4m-4-9H8m0 0H6m2 0v-2m0 2v2m1.5 4L8 16m0 0l-1.5 1.5M8 16l-1.5-1.5M8 16l1.5 1.5"></svg:path>`,
})
export class SolarCalculatorMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarAddBrokenIcon],svg[solar-calendar-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 16h-2m0 0h-2m2 0v-2m0 2v2M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07"></svg:path>`,
})
export class SolarCalendarAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarBrokenIcon],svg[solar-calendar-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875"></svg:path><svg:path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarCalendarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarDateBrokenIcon],svg[solar-calendar-date-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 4V2.5M17 4V2.5"></svg:path><svg:path stroke-linejoin="round" d="m9 14.5l1.5-1.5v4"></svg:path><svg:path d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0Zm8.5-7H10.75M2 9h3.875"></svg:path><svg:path d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07"></svg:path></svg:g>`,
})
export class SolarCalendarDateBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMarkBrokenIcon],svg[solar-calendar-mark-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5"></svg:path><svg:circle cx="16.5" cy="16.5" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="M21.5 9H10.75M2 9h3.875M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07"></svg:path></svg:g>`,
})
export class SolarCalendarMarkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMinimalisticBrokenIcon],svg[solar-calendar-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07M7 4V2.5M17 4V2.5M21.5 9H10.75M2 9h3.875"></svg:path>`,
})
export class SolarCalendarMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarSearchBrokenIcon],svg[solar-calendar-search-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 18h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4M7 4V2.5M17 4V2.5"></svg:path><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M20.5 20.5L22 22m-.5-13H10.75M2 9h3.875"></svg:path></svg:g>`,
})
export class SolarCalendarSearchBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelBrokenIcon],svg[solar-call-cancel-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 4l-4 4m0-4l4 4"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarCallCancelBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelRoundedBrokenIcon],svg[solar-call-cancel-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 4l-4 4m0-4l4 4M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path>`,
})
export class SolarCallCancelRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatBrokenIcon],svg[solar-call-chat-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path fill="currentColor" d="m14.1 16.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM7.374 4.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM7.359 16.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L7.986 4.477l-1.225.866l1.26 1.783zM8.19 9.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019a.3.3 0 0 1-.037.047l-.005.005l-.003.003l-.001.001s-.001.002-.545-.515m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM7.986 4.477C6.972 3.043 4.944 2.8 3.718 4.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM9.021 10.02c.969-1.02 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.984-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarCallChatBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatRoundedBrokenIcon],svg[solar-call-chat-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke-linecap="round" d="M2.007 9.933c-.073 1.908.41 5.149 3.66 8.4A14 14 0 0 0 8 20.232M3.538 6.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 11 21.611"></svg:path></svg:g>`,
})
export class SolarCallChatRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedBrokenIcon],svg[solar-call-dropped-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.115 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zM9.19 8.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarCallDroppedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedRoundedBrokenIcon],svg[solar-call-dropped-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.115 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path d="M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 13 19.611"></svg:path></svg:g>`,
})
export class SolarCallDroppedRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineBrokenIcon],svg[solar-call-medicine-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 9V5m2 2h-4"></svg:path><svg:path fill="currentColor" d="m14.1 16.027l.545.517zm.456-.48l-.544-.516zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.064-9.55a.75.75 0 1 0-1.498.081zm5.439 1.88l.544.517zm.287-.302l.543.517zm.156-2.81l.613-.433zM7.374 4.91l-.613.433zm-3.656-.818a.75.75 0 0 0 1.087 1.033zm6.345 9.964l.544-.517zm-.399 6.756a.75.75 0 1 0 .798-1.27zm4.449.246a.75.75 0 0 0-.307 1.469zm.532-4.514l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zM7.359 16.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L7.986 4.477l-1.225.866l1.26 1.783zM8.19 9.805a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019a.3.3 0 0 1-.037.047l-.005.005l-.003.003l-.001.001s-.001.002-.545-.515m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .422-.25l.035-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.006-.005l.047-.042q.014-.008-.005.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM7.986 4.477C6.972 3.043 4.944 2.8 3.718 4.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM9.021 10.02c.969-1.02 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47zm-4.638 3.478c-.984-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82zm6.14 1.675a8.3 8.3 0 0 1-2.489-.159l-.307 1.469a9.8 9.8 0 0 0 2.944.182z"></svg:path></svg:g>`,
})
export class SolarCallMedicineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineRoundedBrokenIcon],svg[solar-call-medicine-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12Z"></svg:path><svg:path stroke-linecap="round" d="M15 7h4m-2 2V5M2.007 9.933c-.073 1.908.41 5.149 3.66 8.4A14 14 0 0 0 8 20.232M3.538 6.937c1.393-1.393 3.615-1.206 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53A9.8 9.8 0 0 1 11 21.611"></svg:path></svg:g>`,
})
export class SolarCallMedicineRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraAddBrokenIcon],svg[solar-camera-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 13H9m3-3v6m7-6h-1M2 13.364c0-3.065 0-4.597.749-5.697a4.4 4.4 0 0 1 1.226-1.204c.72-.473 1.622-.642 3.003-.702c.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636c.129.635.696 1.125 1.355 1.125c1.38.06 2.282.23 3.003.702c.485.318.902.727 1.226 1.204c.749 1.1.749 2.632.749 5.697s0 4.596-.749 5.697a4.4 4.4 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.4 4.4 0 0 1 2.75 19.06A3.4 3.4 0 0 1 2.277 18"></svg:path>`,
})
export class SolarCameraAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraBrokenIcon],svg[solar-camera-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="3"></svg:circle><svg:path stroke-linecap="round" d="M2 13.364c0-3.065 0-4.597.749-5.697a4.4 4.4 0 0 1 1.226-1.204c.72-.473 1.622-.642 3.003-.702c.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636c.129.635.696 1.125 1.355 1.125c1.38.06 2.282.23 3.003.702c.485.318.902.727 1.226 1.204c.749 1.1.749 2.632.749 5.697s0 4.596-.749 5.697a4.4 4.4 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.4 4.4 0 0 1 2.75 19.06A3.4 3.4 0 0 1 2.277 18M19 10h-1"></svg:path></svg:g>`,
})
export class SolarCameraBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraMinimalisticBrokenIcon],svg[solar-camera-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="3"></svg:circle><svg:path stroke-linecap="round" d="M3 13c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C5.787 6 7.19 6 10 6h4c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C21 8.787 21 10.19 21 13s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C18.213 20 16.81 20 14 20h-4c-2.809 0-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104c-.232-.347-.384-.74-.484-1.222M18 10h-.5m-3-6.5h-5"></svg:path></svg:g>`,
})
export class SolarCameraMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraRotateBrokenIcon],svg[solar-camera-rotate-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14.52 10.68l-.28-.28a3.168 3.168 0 1 0 .907 2.6m-.627-2.32L13 11m1.52-.32V9"></svg:path><svg:path d="M2 13.364c0-3.065 0-4.597.749-5.697a4.4 4.4 0 0 1 1.226-1.204c.72-.473 1.622-.642 3.003-.702c.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636c.129.635.696 1.125 1.355 1.125c1.38.06 2.282.23 3.003.702c.485.318.902.727 1.226 1.204c.749 1.1.749 2.632.749 5.697s0 4.596-.749 5.697a4.4 4.4 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.4 4.4 0 0 1 2.75 19.06A3.4 3.4 0 0 1 2.277 18"></svg:path></svg:g>`,
})
export class SolarCameraRotateBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraSquareBrokenIcon],svg[solar-camera-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCameraSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCard2BrokenIcon],svg[solar-card-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 16.5H6m2-3H6"></svg:path><svg:path d="M14 15c0-.943 0-1.414.293-1.707S15.057 13 16 13s1.414 0 1.707.293S18 14.057 18 15s0 1.414-.293 1.707S16.943 17 16 17s-1.414 0-1.707-.293S14 15.943 14 15Z"></svg:path><svg:path stroke-linecap="round" d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828M2 10h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCard2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardBrokenIcon],svg[solar-card-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828M10 16H6m8 0h-1.5M2 10h5m15 0H11"></svg:path>`,
})
export class SolarCardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardReciveBrokenIcon],svg[solar-card-recive-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M19 14v6m0 0l2-2m-2 2l-2-2"></svg:path><svg:path d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 16h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m0 12H6m7 0h-.5M2 10h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCardReciveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSearchBrokenIcon],svg[solar-card-search-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v1M10 4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3m-3-4H6"></svg:path><svg:circle cx="18" cy="17" r="3"></svg:circle><svg:path stroke-linecap="round" d="m20.5 19.5l1 1M2 10h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCardSearchBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSendBrokenIcon],svg[solar-card-send-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M19 20v-6m0 0l2 2m-2-2l-2 2"></svg:path><svg:path d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 16h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m0 12H6m7 0h-.5M2 10h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCardSendBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardTransferBrokenIcon],svg[solar-card-transfer-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5M14 4c3.771 0 5.657 0 6.828 1.172C21.892 6.235 21.99 7.886 22 11"></svg:path><svg:path stroke-linejoin="round" d="M15.5 14v6m0 0l2-2m-2 2l-2-2m6.5 2v-6m0 0l2 2m-2-2l-2 2"></svg:path><svg:path d="M10 16H6m-4-6h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCardTransferBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardholderBrokenIcon],svg[solar-cardholder-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path d="M17 11v-1c0-1.886 0-2.829-.586-3.415c-.471-.471-1.174-.563-2.414-.581M7 11v-1c0-1.886 0-2.829.586-3.415c.471-.471 1.174-.563 2.414-.581M5 11h14M8 16h1m7 0h-4"></svg:path></svg:g>`,
})
export class SolarCardholderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart2BrokenIcon],svg[solar-cart-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 18L12 9m7.5 9l-7-8.5m-8 .5L12 21l7.5-11"></svg:path><svg:path stroke-linecap="round" d="M3.864 16.455c.546 2.183.819 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.19-.635c.813-.636 1.086-1.727 1.631-3.91c.858-3.432 1.287-5.147.387-6.301C19.622 9 17.853 9 14.316 9H9.685c-3.538 0-5.306 0-6.207 1.154c-.529.677-.6 1.548-.394 2.846"></svg:path></svg:g>`,
})
export class SolarCart2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart3BrokenIcon],svg[solar-cart-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 13v4m8-4v4m-4-4v4"></svg:path><svg:path stroke-linecap="round" d="M3.864 16.455c.546 2.183.819 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.19-.635c.813-.636 1.086-1.727 1.631-3.91c.858-3.432 1.287-5.147.387-6.301C19.622 9 17.853 9 14.316 9H9.685c-3.538 0-5.306 0-6.207 1.154c-.529.677-.6 1.548-.394 2.846"></svg:path></svg:g>`,
})
export class SolarCart3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart4BrokenIcon],svg[solar-cart-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M3 11h4m14 0H11m-1 3h4m4-5l-3-6M6 9l3-6"></svg:path><svg:path d="M20.016 16.257c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114c.67.83.643 1.972.288 3.886"></svg:path></svg:g>`,
})
export class SolarCart4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart5BrokenIcon],svg[solar-cart-5-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.016 16.257c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114c.67.83.643 1.972.288 3.886"></svg:path><svg:path stroke-linejoin="round" d="M16 12h-4m-3 0H8m2 3h4m4-6l-3-6M6 9l3-6"></svg:path></svg:g>`,
})
export class SolarCart5BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartBrokenIcon],svg[solar-cart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3.864 16.455c.546 2.183.819 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.19-.635c.813-.636 1.086-1.727 1.631-3.91c.858-3.432 1.287-5.147.387-6.301C19.622 9 17.853 9 14.316 9H9.685c-3.538 0-5.306 0-6.207 1.154c-.529.677-.6 1.548-.394 2.846"></svg:path><svg:path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4"></svg:path><svg:path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"></svg:path></svg:g>`,
})
export class SolarCartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCheckBrokenIcon],svg[solar-cart-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m11 10.8l1.143 1.2L15 9"></svg:path><svg:path stroke-linecap="round" d="m2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></svg:path></svg:g>`,
})
export class SolarCartCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCrossBrokenIcon],svg[solar-cart-cross-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="m11.5 12.5l3-3m0 3l-3-3M2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></svg:path></svg:g>`,
})
export class SolarCartCrossBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge2BrokenIcon],svg[solar-cart-large-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h2m6 0h-2"></svg:path><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="M5 6h3m-2.5 7h10.522c.96 0 1.439 0 1.815-.248s.564-.688.942-1.57l.429-1c.81-1.89 1.214-2.833.77-3.508C19.533 6 18.505 6 16.45 6H12"></svg:path></svg:g>`,
})
export class SolarCartLarge2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge3BrokenIcon],svg[solar-cart-large-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="m16.5 6.5l-1.5 9m-6-9l1.5 8.5M2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12M4.958 6.12H9m4 0h4.089c1.685 0 3.202 0 3.646.577s.27 1.447-.077 3.186l-.5 2.425c-.315 1.528-.473 2.293-1.024 2.742c-.552.45-1.333.45-2.894.45H15"></svg:path></svg:g>`,
})
export class SolarCartLarge3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge4BrokenIcon],svg[solar-cart-large-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="m9.5 9l.528 3.118M15.528 9L15 12.118M2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></svg:path></svg:g>`,
})
export class SolarCartLarge4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeBrokenIcon],svg[solar-cart-large-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="M11 9H8M2 3l.265.088c1.32.44 1.98.66 2.357 1.184S5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h2m6 0h-2"></svg:path><svg:path stroke-linecap="round" d="M5 6h3m-2.5 7h10.522c.96 0 1.439 0 1.815-.248s.564-.688.942-1.57l.429-1c.81-1.89 1.214-2.833.77-3.508C19.533 6 18.505 6 16.45 6H12"></svg:path></svg:g>`,
})
export class SolarCartLargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeMinimalisticBrokenIcon],svg[solar-cart-large-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="m2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></svg:path></svg:g>`,
})
export class SolarCartLargeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartPlusBrokenIcon],svg[solar-cart-plus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="M13 13v-2m0 0V9m0 2h2m-2 0h-2M2 3l.261.092c1.302.457 1.953.686 2.325 1.231s.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45c.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186c-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"></svg:path></svg:g>`,
})
export class SolarCartPlusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseBrokenIcon],svg[solar-case-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12 21.25a.75.75 0 0 0 0 1.5zm-7.682-.422l.498-.56zm15.364 0l-.498-.56zM7.955 22.684a.75.75 0 1 0 .09-1.498zM2.25 12c0 1.874 0 3.83.169 5.466c.085.82.215 1.589.422 2.244c.203.646.503 1.256.979 1.679l.996-1.121c-.183-.163-.377-.478-.545-1.008c-.164-.52-.28-1.178-.36-1.948c-.16-1.543-.161-3.415-.161-5.312zM12 22.75c2.102 0 3.746.001 5.027-.152c1.293-.154 2.33-.477 3.153-1.209l-.996-1.121c-.495.44-1.178.703-2.335.84c-1.17.14-2.709.142-4.849.142zm-3.955-1.564c-1.714-.103-2.613-.371-3.229-.918l-.996 1.121c1.016.903 2.363 1.188 4.135 1.295zm12.205-8.799c0 1.832-.013 3.616-.178 5.08c-.082.731-.2 1.353-.36 1.845c-.164.5-.352.799-.528.956l.996 1.121c.46-.409.755-.993.957-1.61c.206-.628.338-1.362.426-2.144c.176-1.562.186-3.432.187-5.247z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.66 14.202l3.004-.901m-8.324.9L3.332 12.4c-.595-.179-.893-.268-1.082-.482a1 1 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502q.195-.24.434-.434C3.934 5 5.159 5 7.609 5h8.782c2.45 0 3.675 0 4.502.673q.24.195.434.434C22 6.934 22 8.159 22 10.609c0 .622 0 .932-.15 1.175a1 1 0 0 1-.1.134c-.15.17-.369.26-.75.38"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M6.5 5c.823-.02 1.66-.545 1.94-1.32l.035-.103L8.5 3.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 2 10.448 2 10.58 2h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103c.28.775 1.116 1.3 1.939 1.32"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z"></svg:path></svg:g>`,
})
export class SolarCaseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseMinimalisticBrokenIcon],svg[solar-case-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14c0-3.771 0-5.657-1.172-6.828c-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6h-4c-1.356 0-2.468 0-3.39.054c-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828"></svg:path><svg:path d="M6.61 6.054c.823-.02 1.55-.6 1.83-1.374l.035-.103L8.5 4.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 3 10.448 3 10.58 3h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103c.28.775 1.007 1.354 1.83 1.374"></svg:path><svg:path stroke-linecap="round" d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2m8-2v2"></svg:path></svg:g>`,
})
export class SolarCaseMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundBrokenIcon],svg[solar-case-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.17 4a3.001 3.001 0 0 1 5.66 0"></svg:path><svg:path fill="currentColor" d="M12 22.25a.75.75 0 0 0 0 1.5zm-7.682-.422l.498-.56zm15.364 0l-.498-.56zM7.955 23.684a.75.75 0 1 0 .09-1.498zM2.25 13c0 1.874 0 3.83.169 5.466c.085.82.215 1.589.422 2.244c.203.646.503 1.256.979 1.679l.996-1.121c-.183-.163-.377-.478-.545-1.008c-.164-.52-.28-1.178-.36-1.948c-.16-1.543-.161-3.415-.161-5.312zM12 23.75c2.102 0 3.746.001 5.027-.152c1.293-.154 2.33-.477 3.153-1.209l-.996-1.121c-.495.44-1.178.703-2.335.84c-1.17.14-2.709.142-4.849.142zm-3.955-1.564c-1.714-.103-2.613-.371-3.229-.918l-.996 1.121c1.016.903 2.363 1.188 4.135 1.295zm12.205-8.799c0 1.832-.013 3.616-.178 5.08c-.082.731-.2 1.353-.36 1.845c-.164.5-.352.799-.528.956l.996 1.121c.46-.409.755-.993.957-1.61c.206-.628.338-1.362.426-2.144c.176-1.562.186-3.432.187-5.247z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.66 15l3.004-.783M9.34 15l-6.008-1.567c-.595-.155-.893-.233-1.082-.419a1 1 0 0 1-.1-.116C2 12.688 2 12.417 2 11.876c0-2.13 0-3.195.673-3.914q.195-.207.434-.377C3.934 7 5.159 7 7.609 7h8.782c2.45 0 3.675 0 4.502.585q.24.17.434.377c.673.72.673 1.784.673 3.914c0 .54 0 .811-.15 1.022a1 1 0 0 1-.1.116c-.15.148-.369.227-.75.331"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 13.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.465V14a.5.5 0 0 0-.5-.5Z"></svg:path></svg:g>`,
})
export class SolarCaseRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundMinimalisticBrokenIcon],svg[solar-case-round-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21.662 8.72c-3.01 1.956-4.515 2.934-6.101 3.427a12 12 0 0 1-7.121 0c-1.587-.493-3.092-1.47-6.102-3.427M8 11v2m8-2v2M9.17 4a3.001 3.001 0 0 1 5.66 0"></svg:path><svg:path d="M22 14c0-3.771 0-5.657-1.172-6.828c-.75-.75-1.793-1.02-3.437-1.118C16.468 6 15.356 6 14 6h-4c-1.356 0-2.468 0-3.39.054c-1.645.097-2.688.367-3.438 1.118C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828"></svg:path></svg:g>`,
})
export class SolarCaseRoundMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCashOutBrokenIcon],svg[solar-cash-out-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M5.889 3.75a.75.75 0 0 0 0-1.5zM10 2.25a.75.75 0 0 0 0 1.5zm8.111 1.5c1.71 0 3.139 1.44 3.139 3.27h1.5c0-2.61-2.054-4.77-4.639-4.77zM5.89 2.25c-2.585 0-4.639 2.16-4.639 4.77h1.5c0-1.83 1.429-3.27 3.139-3.27zm15.36 4.77c0 1.667-1.19 3.016-2.693 3.238l.22 1.484c2.265-.335 3.973-2.338 3.973-4.722zM5.443 10.258C3.939 10.036 2.75 8.688 2.75 7.02h-1.5c0 2.384 1.708 4.387 3.974 4.722zM10 3.75h8.111v-1.5H10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v5m0 0l2-2.333M12 14l-2-2.333"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M5 10c0-1.886 0-2.828.586-3.414S7.114 6 9 6h6c1.886 0 2.828 0 3.414.586S19 8.114 19 10v6c0 1.886 0 2.828-.586 3.414S16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 17h8m6 0h-2"></svg:path></svg:g>`,
})
export class SolarCashOutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassette2BrokenIcon],svg[solar-cassette-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:path d="M13.5 13.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Zm-7.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Z"></svg:path><svg:path stroke-linecap="round" d="M8.5 11.5H16M8.5 16H16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.228 8.5c1.34 0 2.011 0 2.525-.356s.75-.984 1.22-2.24L17.5 4.5m-11 0l.527 1.404c.47 1.256.706 1.884 1.22 2.24c.212.147.451.233.753.284"></svg:path></svg:g>`,
})
export class SolarCassette2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassetteBrokenIcon],svg[solar-cassette-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:path d="M13.5 13.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Zm-7.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17.5 4.5l-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24s-1.184.356-2.525.356h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4.5"></svg:path><svg:path stroke-linecap="round" d="M12 4v4.5"></svg:path></svg:g>`,
})
export class SolarCassetteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCatBrokenIcon],svg[solar-cat-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m19.98 9.063l.75.002v-.002zm-15.96 0h-.75v.002zM19.1 10.66l-.573.485l.084.1l.114.065zm-.272-1.265a.75.75 0 0 0-.888 1.21zM4.02 15h-.75zm2.04-4.395a.75.75 0 1 0-.888-1.21zM12 5.656c-.772 0-1.21.041-1.556.084c-.34.042-.512.072-.838.072v1.5c.44 0 .725-.047 1.02-.083c.29-.036.666-.073 1.374-.073zm0 1.5c.708 0 1.085.037 1.373.073c.296.036.58.083 1.021.083v-1.5c-.326 0-.498-.03-.838-.072A12 12 0 0 0 12 5.656zm2.394.157c.213 0 .412-.061.555-.114c.156-.058.317-.134.472-.214c.305-.157.659-.367.983-.554c.34-.195.66-.373.947-.503c.308-.14.484-.178.554-.178v-1.5c-.408 0-.83.157-1.171.31a13 13 0 0 0-1.078.571c-.354.204-.658.385-.922.52q-.194.1-.306.141c-.087.032-.087.02-.034.02zm3.511-1.563c.345 0 .675.103.907.303c.212.182.418.51.418 1.135h1.5c0-1-.352-1.766-.939-2.272c-.566-.487-1.272-.666-1.886-.666zm1.325 1.438v1.875h1.5V7.188zM9.606 5.813c.053 0 .053.011-.034-.02a3 3 0 0 1-.306-.141c-.264-.136-.568-.317-.922-.52c-.34-.196-.716-.408-1.078-.571c-.34-.154-.763-.311-1.171-.311v1.5c.07 0 .246.039.554.178c.287.13.608.308.947.503c.324.187.678.397.983.554c.155.08.316.156.472.214c.143.053.342.114.555.114zM6.095 4.25c-.614 0-1.32.179-1.886.666c-.587.505-.939 1.272-.939 2.271h1.5c0-.625.206-.952.418-1.134c.232-.2.563-.303.907-.303zM3.27 7.188v1.875h1.5V7.187zM12 20.75c1.431 0 3.54-.285 5.32-1.104c1.784-.82 3.41-2.273 3.41-4.646h-1.5c0 1.533-1.007 2.58-2.536 3.284s-3.412.966-4.694.966zm7.672-10.574a5 5 0 0 0-.844-.78l-.888 1.208q.358.267.587.54zM19.23 9.06c0 .198-.041.61-.138.895c-.055.159-.086.155-.03.11a.42.42 0 0 1 .412-.055l-.749 1.3c.18.104.402.18.65.167c.255-.013.466-.114.626-.242c.287-.23.432-.566.51-.796c.168-.491.218-1.08.22-1.374zM12 19.25c-1.282 0-3.163-.262-4.694-.966C5.776 17.58 4.77 16.533 4.77 15h-1.5c0 2.373 1.626 3.826 3.41 4.646c1.78.82 3.889 1.104 5.32 1.104zM4.77 15c0-.788-.057-1.437.019-2.128c.07-.645.253-1.218.684-1.727l-1.145-.97c-.68.805-.938 1.693-1.03 2.534c-.087.797-.028 1.66-.028 2.291zm.703-3.855a3.4 3.4 0 0 1 .587-.54l-.888-1.21q-.493.364-.844.78zM3.27 9.065c.001.294.051.883.219 1.374c.078.23.223.566.51.796c.16.128.371.229.625.242c.249.012.47-.063.651-.167l-.749-1.3a.42.42 0 0 1 .411.055c.057.045.026.049-.029-.11a3.3 3.3 0 0 1-.138-.895z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12.826 16c0 .173-.361.313-.806.313s-.807-.14-.807-.313s.361-.312.807-.312c.445 0 .806.14.806.312Zm2.674-2.406c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Zm-6 0c0 .431-.217.781-.484.781s-.484-.35-.484-.781s.217-.781.484-.781s.484.35.484.78Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 15.469c-.483-.313-2.58-1.094-3.387-1.094m1.774 3.594c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094m-1.774 3.594c.484-.313 1.613-1.094 2.42-1.094"></svg:path></svg:g>`,
})
export class SolarCatBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChair2BrokenIcon],svg[solar-chair-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 15.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M15.79 2.496C15.04 2 14.026 2 12 2s-3.039 0-3.79.496a3 3 0 0 0-.638.566c-.582.687-.703 1.692-.944 3.704l-.09.757c-.251 2.088-.377 3.132.22 3.804c.597.673 1.648.673 3.75.673h2.983c2.103 0 3.154 0 3.75-.673c.598-.672.472-1.716.222-3.804l-.091-.757"></svg:path><svg:path d="M12 12v2"></svg:path><svg:path stroke-linecap="round" d="M12 22v-2m0 0v-2.5m0 2.5h.5c1 0 1.689 1.066 2 2M12 20h-.5c-1 0-1.689 1.066-2 2M6 15.5L5 13c-.5-1-1-1.5-3-1.5m16 4l1-2.5c.5-1 1-1.5 3-1.5"></svg:path></svg:g>`,
})
export class SolarChair2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChairBrokenIcon],svg[solar-chair-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17 21v-5M7 21v-5m5 0H7c-.985 0-1.477 0-1.775-.324s-.258-.774-.18-1.675c.055-.65.182-1.088.468-1.415C6.025 12 6.85 12 8.5 12h7c1.65 0 2.475 0 2.987.586c.286.326.413.764.469 1.415c.077.9.116 1.351-.181 1.675C18.477 16 17.985 16 17 16h-1"></svg:path><svg:path d="M7 8c0-1.87 0-2.804.402-3.5A3 3 0 0 1 8.5 3.402C9.196 3 10.13 3 12 3s2.804 0 3.5.402A3 3 0 0 1 16.598 4.5C17 5.196 17 6.13 17 8v4H7z"></svg:path></svg:g>`,
})
export class SolarChairBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChandelierBrokenIcon],svg[solar-chandelier-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 4h6m5.8 6a1.2 1.2 0 0 1 1.2 1.2V13a3 3 0 1 1-6 0v-1.8a1.2 1.2 0 0 1 1.2-1.2M12 4v3m0 9.5a3.5 3.5 0 1 0 7 0v-.056m-7 .056a3.5 3.5 0 1 1-7 0v-.056m7 .056V11"></svg:path><svg:path d="M8 10.857A.857.857 0 0 0 7.143 10H2.857a.857.857 0 0 0-.857.857V13a3 3 0 1 0 6 0z"></svg:path></svg:g>`,
})
export class SolarChandelierBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChart2BrokenIcon],svg[solar-chart-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 22h18"></svg:path><svg:path stroke-linecap="round" d="M3 17c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293S3 10.057 3 11v2"></svg:path><svg:path d="M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17z"></svg:path><svg:path stroke-linecap="round" d="M21 11v6c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17V4c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v3"></svg:path></svg:g>`,
})
export class SolarChart2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartBrokenIcon],svg[solar-chart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M21 22v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 22V9M9 22V5c0-1.414 0-2.121.44-2.56C9.878 2 10.585 2 12 2s2.121 0 2.56.44C15 2.878 15 3.585 15 5v0"></svg:path><svg:path stroke-linecap="round" d="M9 22V9.5A1.5 1.5 0 0 0 7.5 8h-3A1.5 1.5 0 0 0 3 9.5V16m0 6v-2.25"></svg:path></svg:g>`,
})
export class SolarChartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartSquareBrokenIcon],svg[solar-chart-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 18V9m5 9V6m5 12v-5m5-1c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarChartSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatDotsBrokenIcon],svg[solar-chat-dots-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11h.009m3.982 0H12m3.991 0H16"></svg:path></svg:g>`,
})
export class SolarChatDotsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatLineBrokenIcon],svg[solar-chat-line-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 9h8m-8 3.5h5.5"></svg:path><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path></svg:g>`,
})
export class SolarChatLineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundBrokenIcon],svg[solar-chat-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path>`,
})
export class SolarChatRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCallBrokenIcon],svg[solar-chat-round-call-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 16V8m-4 6v-4m8 4v-4m1-6.662A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path>`,
})
export class SolarChatRoundCallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCheckBrokenIcon],svg[solar-chat-round-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M9 12.08L11 14l4-4"></svg:path><svg:path d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path></svg:g>`,
})
export class SolarChatRoundCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundDotsBrokenIcon],svg[solar-chat-round-dots-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-width="1.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M8 12h.009m3.982 0H12m3.991 0H16"></svg:path></svg:g>`,
})
export class SolarChatRoundDotsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLikeBrokenIcon],svg[solar-chat-round-like-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.029 14.943l-.486.57zM12 9.5l-.536.524a.75.75 0 0 0 1.072 0zm1.971 5.442l-.486-.572zM12 15.993v-.75zm-1.485-1.622c-.582-.494-1.166-1.068-1.599-1.66c-.441-.605-.666-1.149-.666-1.602h-1.5c0 .916.435 1.774.955 2.486c.529.725 1.21 1.384 1.838 1.919zM8.25 11.11c0-1.107.495-1.69 1.003-1.881c.518-.193 1.342-.09 2.211.797l1.072-1.049c-1.156-1.18-2.581-1.612-3.808-1.153c-1.235.462-1.978 1.717-1.978 3.286zm6.207 4.405c.628-.534 1.309-1.194 1.838-1.918c.52-.713.955-1.571.955-2.487h-1.5c0 .453-.225.997-.666 1.602c-.433.593-1.017 1.166-1.598 1.66zm2.793-4.405c0-1.57-.743-2.824-1.978-3.286c-1.227-.459-2.652-.028-3.808 1.153l1.072 1.05c.869-.888 1.694-.991 2.21-.798c.51.19 1.004.774 1.004 1.881zm-7.707 4.405c.78.663 1.4 1.23 2.457 1.23v-1.5c-.414 0-.617-.134-1.485-.873zm3.943-1.143c-.869.739-1.072.873-1.486.873v1.5c1.057 0 1.678-.567 2.457-1.23z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path></svg:g>`,
})
export class SolarChatRoundLikeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLineBrokenIcon],svg[solar-chat-round-line-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10.5h8M8 14h5.5M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path>`,
})
export class SolarChatRoundLineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundMoneyBrokenIcon],svg[solar-chat-round-money-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 15.333c1.105 0 2-.746 2-1.666S13.105 12 12 12s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V16m0-8v.667m0 0c1.105 0 2 .746 2 1.666"></svg:path><svg:path d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path></svg:g>`,
})
export class SolarChatRoundMoneyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundUnreadBrokenIcon],svg[solar-chat-round-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 22 2)"></svg:circle><svg:path stroke-linecap="round" d="M14 2.2a10.05 10.05 0 0 0-7 1.138M21.8 10q.198.97.2 2c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarChatRoundUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundVideoBrokenIcon],svg[solar-chat-round-video-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16 12c0-.844-.927-1.414-2.78-2.553c-1.88-1.155-2.82-1.732-3.52-1.308S9 9.709 9 12s0 3.437.7 3.861c.701.424 1.64-.153 3.52-1.308C15.073 13.414 16 12.844 16 12Z"></svg:path><svg:path d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></svg:path></svg:g>`,
})
export class SolarChatRoundVideoBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquare2BrokenIcon],svg[solar-chat-square-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 18v-3m5 3v-6m5 6V9m5 3c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarChatSquare2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareArrowBrokenIcon],svg[solar-chat-square-arrow-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.978 21.456l.643.385zm.488-.814l-.643-.386zm-2.932 0l-.643.385zm.488.814l.643-.386zM12 4.222l-.527-.533a.75.75 0 0 0 0 1.067zm8.25 7.556a.75.75 0 0 0 1.5 0zm-18 0a.75.75 0 0 0 1.5 0zM4.034 16.3a.75.75 0 1 0-1.383.58zm4.177 3.026l-.013.75zm-2.433-.33l-.284.693zm14.88-2.406l.691.29zm-4.869 2.736l-.012-.75zm2.433-.33l.284.693zm.63-14.119l-.39.642zm1.485 1.467l.637-.395zM5.149 4.877l-.389-.642zM3.663 6.344l-.637-.395zm6 13.176l.373-.65zm5.114-16.986a.75.75 0 1 0-1.054-1.068zm-1.054 4.444a.75.75 0 1 0 1.054-1.067zm-4.42-2.005a.75.75 0 1 0-.005-1.5zm12.433 9.492a.75.75 0 0 0-1.499-.04zm-8.115 7.376l.488-.814l-1.286-.77l-.488.813zm-3.73-.814l.488.814l1.286-.77l-.488-.815zm2.444.043a.38.38 0 0 1-.335.18a.38.38 0 0 1-.335-.18l-1.286.771c.726 1.212 2.516 1.212 3.242 0zm-4.112-2.494c-1.13-.02-1.71-.09-2.161-.275l-.568 1.388c.738.302 1.574.367 2.704.387zM2.651 16.88a5.22 5.22 0 0 0 2.843 2.81l.568-1.39a3.72 3.72 0 0 1-2.028-2zm13.151 3.196c1.13-.02 1.966-.085 2.704-.387l-.568-1.388c-.45.184-1.031.256-2.161.275zm4.164-3.776a3.72 3.72 0 0 1-2.028 2l.568 1.39a5.22 5.22 0 0 0 2.843-2.81zM12 4.972c1.48 0 2.895 0 4.074.08c.588.04 1.1.099 1.518.182c.43.085.71.187.87.285l.778-1.284c-.38-.23-.859-.373-1.355-.472a14 14 0 0 0-1.71-.207c-1.24-.084-2.71-.084-4.175-.084zm9.75 6.806c0-1.44 0-2.574-.086-3.48c-.089-.916-.273-1.676-.69-2.349l-1.274.79c.245.397.393.898.47 1.704c.08.816.08 1.865.08 3.335zm-3.287-6.26c.505.306.928.725 1.237 1.222l1.274-.791a5.2 5.2 0 0 0-1.734-1.714zM3.75 11.779c0-1.47 0-2.519.08-3.335c.077-.806.225-1.307.47-1.703L3.026 5.95c-.418.673-.601 1.433-.69 2.35c-.087.905-.086 2.039-.086 3.479zm1.01-7.543A5.2 5.2 0 0 0 3.026 5.95l1.274.79a3.7 3.7 0 0 1 1.237-1.22zm6.417 16.021c-.181-.303-.344-.576-.503-.792a2.1 2.1 0 0 0-.638-.594l-.747 1.3c.03.018.081.054.178.185c.106.144.227.344.424.672zm-2.98-.18c.397.006.644.011.831.032c.174.019.232.046.26.062l.748-1.3a2.1 2.1 0 0 0-.845-.253c-.271-.03-.599-.035-.968-.041zm5.912.951a9 9 0 0 1 .424-.672c.097-.131.147-.167.178-.185l-.747-1.3a2.1 2.1 0 0 0-.638.594c-.159.216-.322.489-.503.792zm1.668-2.451c-.37.006-.697.011-.968.04c-.285.032-.57.096-.845.254l.747 1.3c.029-.016.087-.043.26-.062c.188-.02.435-.026.831-.032zm-3.25-13.82l2.25-2.222l-1.054-1.068l-2.25 2.223zm-1.054 0l2.25 2.222l1.054-1.067l-2.25-2.222zM9.298 3.473c-2.236.007-3.368.054-4.538.762l.777 1.284c.758-.459 1.46-.539 3.765-.546zm10.939 10.952c-.026.955-.102 1.471-.271 1.875l1.383.58c.284-.678.361-1.434.387-2.415z"></svg:path>`,
})
export class SolarChatSquareArrowBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareBrokenIcon],svg[solar-chat-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path>`,
})
export class SolarChatSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCallBrokenIcon],svg[solar-chat-square-call-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 15V7m-4 6V9m8 4V9"></svg:path><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path></svg:g>`,
})
export class SolarChatSquareCallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCheckBrokenIcon],svg[solar-chat-square-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 11.08L11 13l4-4"></svg:path></svg:g>`,
})
export class SolarChatSquareCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCodeBrokenIcon],svg[solar-chat-square-code-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m15.5 7.83l.172.172c1.333 1.333 2 2 2 2.828c0 .829-.667 1.495-2 2.829l-.172.171M13.294 6L12 10.83l-1.294 4.83M8.5 7.83l-.172.172c-1.333 1.333-2 2-2 2.828c0 .829.667 1.495 2 2.829l.172.171"></svg:path></svg:g>`,
})
export class SolarChatSquareCodeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareLikeBrokenIcon],svg[solar-chat-square-like-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.99 14.308l.445-.604zM12 8.106l-.536.525a.75.75 0 0 0 1.072 0zm1.01 6.202l-.445-.604zM12 14.81v-.75zm-.565-1.106c-.644-.474-1.468-1.147-2.123-1.896c-.68-.775-1.062-1.502-1.062-2.093h-1.5c0 1.16.699 2.242 1.433 3.081c.758.865 1.679 1.613 2.362 2.116zM8.25 9.715c0-1.107.495-1.69 1.003-1.88c.518-.194 1.342-.09 2.211.797l1.072-1.05C11.38 6.401 9.955 5.97 8.728 6.428C7.493 6.89 6.75 8.145 6.75 9.715zm5.205 5.198c.683-.504 1.604-1.25 2.362-2.116c.734-.839 1.433-1.92 1.433-3.081h-1.5c0 .591-.383 1.318-1.062 2.093c-.655.749-1.48 1.422-2.123 1.896zm3.795-5.197c0-1.57-.743-2.825-1.978-3.287c-1.227-.458-2.652-.027-3.808 1.153l1.072 1.05c.869-.888 1.694-.99 2.21-.798c.51.19 1.004.774 1.004 1.882zm-6.705 5.197c.392.289.83.648 1.455.648v-1.5c-.015 0-.032.003-.101-.035a5 5 0 0 1-.464-.32zm2.02-1.208c-.243.18-.366.268-.464.321c-.07.038-.086.035-.101.035v1.5c.625 0 1.063-.36 1.455-.648zm.522 7.683l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM1.25 10.5a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path>`,
})
export class SolarChatSquareLikeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatUnreadBrokenIcon],svg[solar-chat-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zM13.5 2.75a.75.75 0 0 0 0-1.5zm9.25 7.75a.75.75 0 0 0-1.5 0zm-21.5 0a.75.75 0 0 0 1.5 0zm1.824 5.126a.75.75 0 0 0-1.386.574zm4.716 3.365l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zM4.388 2.737l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zM7.803 18.242c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></svg:path><svg:circle cx="19" cy="5" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle></svg:g>`,
})
export class SolarChatUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckCircleBrokenIcon],svg[solar-check-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarCheckCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckReadBrokenIcon],svg[solar-check-read-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4.565 12.407a.75.75 0 1 0-1.13.986zM7.143 16.5l-.565.493a.75.75 0 0 0 1.13 0zm8.422-8.507a.75.75 0 1 0-1.13-.986zm-5.059 3.514a.75.75 0 0 0 1.13.986zm-.834 3.236a.75.75 0 1 0-1.13-.986zm-6.237-1.35l3.143 3.6l1.13-.986l-3.143-3.6zm4.273 3.6l1.964-2.25l-1.13-.986l-1.964 2.25zm3.928-4.5l1.965-2.25l-1.13-.986l-1.965 2.25zm1.965-2.25l1.964-2.25l-1.13-.986l-1.964 2.25z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20 7.563l-4.286 4.5M11 16l.429.563l2.143-2.25"></svg:path></svg:g>`,
})
export class SolarCheckReadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckSquareBrokenIcon],svg[solar-check-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCheckSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistBrokenIcon],svg[solar-checklist-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2 5.5L3.214 7L7.5 3M2 12.5L3.214 14L7.5 10M2 19.5L3.214 21L7.5 17"></svg:path><svg:path d="M22 12h-5m-5 0h1.5M12 19h5m3.5 0H22m0-14H12"></svg:path></svg:g>`,
})
export class SolarChecklistBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistMinimalisticBrokenIcon],svg[solar-checklist-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M6 15.8L7.143 17L10 14M6 8.8L7.143 10L10 7"></svg:path><svg:path d="M13 9h5m-5 7h5m4-4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarChecklistMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatBrokenIcon],svg[solar-chef-hat-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM14 21.25a.75.75 0 0 0 0 1.5zm-4 1.5a.75.75 0 0 0 0-1.5zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-8 15.5c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5zM15 21.25h-1v1.5h1zm-5 0H9v1.5h1z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 18h8m6 0h-2"></svg:path></svg:g>`,
})
export class SolarChefHatBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatHeartBrokenIcon],svg[solar-chef-hat-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m11.043 13.669l-.444.605zM12 9.995l-.519.542a.75.75 0 0 0 1.038 0zm.957 3.674l-.444-.605zm-.957.462v-.75zm-.514-1.067c-.417-.306-.878-.69-1.227-1.092c-.368-.426-.509-.757-.509-.972h-1.5c0 .77.441 1.451.875 1.953c.453.524 1.014.983 1.474 1.32zM9.75 11c0-.576.263-.826.492-.907c.25-.088.714-.06 1.24.444l1.037-1.084c-.825-.79-1.861-1.095-2.773-.775C8.812 9.005 8.25 9.903 8.25 11zm3.65 3.274c.46-.338 1.022-.797 1.475-1.321c.434-.502.875-1.183.875-1.953h-1.5c0 .215-.141.546-.51.972c-.348.403-.809.786-1.226 1.092zM15.75 11c0-1.097-.562-1.995-1.496-2.322c-.912-.32-1.948-.014-2.773.775l1.038 1.084c.525-.504.989-.532 1.24-.444c.228.08.491.331.491.907zm-5.15 3.274c.368.27.782.607 1.4.607v-1.5c-.024 0-.04 0-.094-.029a4 4 0 0 1-.42-.288zm1.914-1.21a4 4 0 0 1-.42.288c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.607zM19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM14 21.25a.75.75 0 0 0 0 1.5zm-4 1.5a.75.75 0 0 0 0-1.5zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-8 15.5c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5zM15 21.25h-1v1.5h1zm-5 0H9v1.5h1z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 18h8m6 0h-2"></svg:path></svg:g>`,
})
export class SolarChefHatHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatMinimalisticBrokenIcon],svg[solar-chef-hat-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 18h6"></svg:path><svg:path fill="currentColor" d="M19 18h.75zM5 14.584h.75a.75.75 0 0 0-.45-.687zm14 0l-.3-.687a.75.75 0 0 0-.45.687zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 0 0 1.5 0zM14 21.25a.75.75 0 0 0 0 1.5zm-4 1.5a.75.75 0 0 0 0-1.5zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25zm-8 15.5c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08zM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294zM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066zm-8-17q.32 0 .628.046l.219-1.484A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.973 3.563l1.42.482A3.75 3.75 0 0 1 12 2.75zM7.027 4.813A5.3 5.3 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205zM17 4.25q-.431 0-.847.062l.22 1.484A4 4 0 0 1 17 5.75zm-5-1.5a3.75 3.75 0 0 1 3.552 2.545l1.42-.482A5.25 5.25 0 0 0 12 1.25zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687zM5.75 18v-3.416h-1.5V18zm-.45-4.103A4.25 4.25 0 0 1 2.75 10h-1.5a5.75 5.75 0 0 0 3.45 5.271zm12.95.687V18h1.5v-3.416zm3-4.584a4.25 4.25 0 0 1-2.55 3.897l.6 1.374A5.75 5.75 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5zM15 21.25h-1v1.5h1zm-5 0H9v1.5h1z"></svg:path></svg:g>`,
})
export class SolarChefHatMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomDownBrokenIcon],svg[solar-circle-bottom-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10 14l-8 8m0 0h6m-6 0v-6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5M2 12C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338"></svg:path></svg:g>`,
})
export class SolarCircleBottomDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomUpBrokenIcon],svg[solar-circle-bottom-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m3 21l8-8m0 0H5m6 0v6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5M2 12C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338"></svg:path></svg:g>`,
})
export class SolarCircleBottomUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopDownBrokenIcon],svg[solar-circle-top-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m21 3l-9 9m0 0h5.344M12 12V6.656"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338"></svg:path></svg:g>`,
})
export class SolarCircleTopDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopUpBrokenIcon],svg[solar-circle-top-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m13 11l9-9m0 0h-5.344M22 2v5.344"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338"></svg:path></svg:g>`,
})
export class SolarCircleTopUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCityBrokenIcon],svg[solar-city-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M3.75 18a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM7 8.75c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725c-.606-.082-1.372-.08-2.294-.08zM11.75 12c0-.922.002-1.688-.08-2.294c-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79c.064.482.066 1.13.066 2.094zM7 7.25c-.922 0-1.688-.002-2.294.08c-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066zM3.75 12c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65c-.082.606-.08 1.372-.08 2.294zm0 10v-4h-1.5v4zm0-8v-2h-1.5v2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 22v-6c0-1.886 0-2.828.586-3.414S9.114 12 11 12h2c1.886 0 2.828 0 3.414.586c.472.471.564 1.174.582 2.414M17 22v-2.75m4-11.478c0-1.34 0-2.011-.356-2.525s-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12m8 10V12M4 8V6.5c0-.943 0-1.414.293-1.707S5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293S10 5.557 10 6.5V8M7 4V2m15 20H2m8-7h.5m3.5 0h-1.5M10 18h4"></svg:path></svg:g>`,
})
export class SolarCityBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardBrokenIcon],svg[solar-clapperboard-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.5 8h-19m8-5.5L7 8m10-5.5L13.5 8m8.5 4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarClapperboardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardEditBrokenIcon],svg[solar-clapperboard-edit-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 21.995c-3.413-.03-5.295-.219-6.536-1.46C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path fill="currentColor" d="M2.5 7.25a.75.75 0 0 0 0 1.5zm19.5 0H2.5v1.5H22z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 2.5L7 8m10-5.5L13.5 8"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m18.562 13.935l.417-.417a1.77 1.77 0 1 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669s1.669.834 1.669.834m-2.503-2.503l-3.835 3.835c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116l-.12.36m7.92-4.572l-3.835 3.835c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372l-.36.12m0 0l-.362.12a.477.477 0 0 1-.604-.603l.12-.361m.845.844l-.844-.844"></svg:path></svg:g>`,
})
export class SolarClapperboardEditBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenBrokenIcon],svg[solar-clapperboard-open-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 16c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16v-5h12c1.886 0 2.828 0 3.414.586c.336.336.48.789.54 1.47"></svg:path><svg:path d="M4.002 11c-.484-1.806-.726-2.709-.518-3.485A3 3 0 0 1 4.26 6.17c.569-.568 1.472-.81 3.277-1.294l7.003-1.877c.673-.18 1.01-.27 1.305-.29a3 3 0 0 1 2.887 1.667c.13.265.22.602.4 1.275c.06.225.091.337.098.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134z"></svg:path><svg:path stroke-linecap="round" d="m14.7 2.941l-.637 5.348M8.422 4.624l-.638 5.347"></svg:path></svg:g>`,
})
export class SolarClapperboardOpenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenPlayBrokenIcon],svg[solar-clapperboard-open-play-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.002 11c-.484-1.806-.726-2.709-.518-3.485A3 3 0 0 1 4.26 6.17c.569-.568 1.472-.81 3.277-1.294l7.003-1.877c.673-.18 1.01-.27 1.305-.29a3 3 0 0 1 2.887 1.667c.13.265.22.602.4 1.275c.06.225.091.337.098.435a1 1 0 0 1-.556.962c-.088.044-.2.074-.425.134z"></svg:path><svg:path stroke-linecap="round" d="m14.7 2.941l-.637 5.348M8.422 4.624l-.638 5.347M14 16.5c0-.422-.397-.707-1.192-1.277c-.805-.577-1.207-.866-1.508-.654s-.3.785-.3 1.931s0 1.719.3 1.93c.3.212.703-.076 1.508-.654c.795-.569 1.192-.854 1.192-1.276Z"></svg:path><svg:path stroke-linecap="round" d="M20 16c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16v-5h12c1.886 0 2.828 0 3.414.586c.336.336.48.789.54 1.47"></svg:path></svg:g>`,
})
export class SolarClapperboardOpenPlayBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardPlayBrokenIcon],svg[solar-clapperboard-play-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2.5 7.25a.75.75 0 0 0 0 1.5zm19.5 0H2.5v1.5H22z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 2.5L7 8m10-5.5L13.5 8m1.5 6.5c0-.633-.662-1.06-1.986-1.915c-1.342-.866-2.013-1.299-2.514-.98c-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896s1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarClapperboardPlayBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardTextBrokenIcon],svg[solar-clapperboard-text-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.5 8h-19m8-5.5L7 8m10-5.5L13.5 8m-7 6h8m-8 3.5H12M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarClapperboardTextBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardAddBrokenIcon],svg[solar-clipboard-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="M15 13h-3m0 0H9m3 0v-3m0 3v3m9 0c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></svg:path></svg:g>`,
})
export class SolarClipboardAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardBrokenIcon],svg[solar-clipboard-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9M9 17.5h6"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="M8 14h1m7 0h-4m5-3.5h-2m-3 0H7"></svg:path></svg:g>`,
})
export class SolarClipboardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardCheckBrokenIcon],svg[solar-clipboard-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 13.4l1.714 1.6L15 11"></svg:path><svg:path stroke-linecap="round" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path></svg:g>`,
})
export class SolarClipboardCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardHeartBrokenIcon],svg[solar-clipboard-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m12 11.691l-.519.542a.75.75 0 0 0 1.038 0zm0 4.137v-.75zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093c-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321zM9.75 12.697c0-.576.263-.827.492-.907c.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776c-.934.327-1.496 1.226-1.496 2.323zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971c-.348.403-.809.786-1.226 1.093zm2.35-3.273c0-1.097-.562-1.996-1.496-2.323c-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443c.228.08.491.33.491.907zM10.6 15.97c.368.27.782.607 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></svg:path></svg:g>`,
})
export class SolarClipboardHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardListBrokenIcon],svg[solar-clipboard-list-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10.5 14H17M7 14h.5M7 10.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></svg:path></svg:g>`,
})
export class SolarClipboardListBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardRemoveBrokenIcon],svg[solar-clipboard-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="m14.5 11l-5 5m0-5l5 5m6.5 0c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9"></svg:path></svg:g>`,
})
export class SolarClipboardRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardTextBrokenIcon],svg[solar-clipboard-text-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 18h5.5"></svg:path><svg:path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path stroke-linecap="round" d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877S3.014 6.825 3.002 9M7 14.5h1m7 0h-4"></svg:path></svg:g>`,
})
export class SolarClipboardTextBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockCircleBrokenIcon],svg[solar-clock-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 8v4l2.5 2.5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarClockCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockSquareBrokenIcon],svg[solar-clock-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 8v4l2.5 2.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarClockSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseCircleBrokenIcon],svg[solar-close-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.5 9.5l-5 5m0-5l5 5M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path>`,
})
export class SolarCloseCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseSquareBrokenIcon],svg[solar-close-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.5 9.5l-5 5m0-5l5 5M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path>`,
})
export class SolarCloseSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloset2BrokenIcon],svg[solar-closet-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-1.5M5 22v-1.5m7-.5v-2m0-16v12m3-5v4M9 9v4m13-3c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172c.944-.943 1.127-2.348 1.163-4.828"></svg:path>`,
})
export class SolarCloset2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClosetBrokenIcon],svg[solar-closet-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22v-.5M5 22v-.5m7-.5v-7m0-12v8m3-2v2m7 1v2c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-3c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172c.809.808 1.06 1.956 1.137 3.828M2 8h10M2 15h20m-7 3h2M7 18h2"></svg:path>`,
})
export class SolarClosetBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoltBrokenIcon],svg[solar-cloud-bolt-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12.353c0 2.707-1.927 4.97-4.5 5.52M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 8.061"></svg:path><svg:path d="m9.626 17.453l1.148-1.553c.743-1.005 1.114-1.507 1.46-1.4s.346.722.346 1.953v.116c0 .445 0 .667.142.806l.008.007c.145.137.376.137.838.137c.832 0 1.249 0 1.39.252l.006.013c.133.256-.108.582-.59 1.234l-1.148 1.553c-.743 1.005-1.114 1.507-1.46 1.4c-.346-.105-.346-.721-.346-1.953v-.116c0-.445 0-.667-.142-.806l-.008-.007c-.145-.137-.376-.137-.838-.137c-.832 0-1.248 0-1.39-.252l-.006-.013c-.133-.256.108-.582.59-1.234Z"></svg:path></svg:g>`,
})
export class SolarCloudBoltBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoltMinimalisticBrokenIcon],svg[solar-cloud-bolt-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12.353c0 2.707-1.927 4.97-4.5 5.52M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 8.061"></svg:path><svg:path stroke-linejoin="round" d="m10 22l4.286-3.692H10l4.286-3.693"></svg:path></svg:g>`,
})
export class SolarCloudBoltMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBrokenIcon],svg[solar-cloud-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14.353C22 17.472 19.442 20 16.286 20H11m3.381-10.973a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20H7m.116-8.391a5.6 5.6 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 10.061"></svg:path>`,
})
export class SolarCloudBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCheckBrokenIcon],svg[solar-cloud-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 13.353c0 2.707-1.927 4.97-4.5 5.52M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061"></svg:path><svg:path stroke-linejoin="round" d="m10 19.8l1.143 1.2L14 18"></svg:path></svg:g>`,
})
export class SolarCloudCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCrossBrokenIcon],svg[solar-cloud-cross-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 13.353c0 2.707-1.927 4.97-4.5 5.52M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061M13.5 17.5L12 19m0 0l-1.5 1.5M12 19l-1.5-1.5M12 19l1.5 1.5"></svg:path>`,
})
export class SolarCloudCrossBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudDownloadBrokenIcon],svg[solar-cloud-download-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 22v-6m0 6l2-2m-2 2l-2-2"></svg:path><svg:path d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5"></svg:path></svg:g>`,
})
export class SolarCloudDownloadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudFileBrokenIcon],svg[solar-cloud-file-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.333 14.571a2.24 2.24 0 0 1 1.321-.004m-3.863.81a2 2 0 0 0-.291-.024c-.828 0-1.5.592-1.5 1.324C6 17.407 6.672 18 7.5 18H11c1.105 0 2-.79 2-1.765c0-.772-.562-1.429-1.346-1.668m-3.863.81a1.6 1.6 0 0 1-.124-.612c0-.975.895-1.765 2-1.765c1.029 0 1.876.685 1.987 1.567m-3.863.81q.297.054.542.199"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarCloudFileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudMinusBrokenIcon],svg[solar-cloud-minus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 13.353c0 2.707-1.927 4.97-4.5 5.52M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061M14 19h-4"></svg:path>`,
})
export class SolarCloudMinusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudPlusBrokenIcon],svg[solar-cloud-plus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 13.353c0 2.707-1.927 4.97-4.5 5.52M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061M14 19h-2m0 0h-2m2 0v-2m0 2v2"></svg:path>`,
})
export class SolarCloudPlusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudRainBrokenIcon],svg[solar-cloud-rain-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 13.353c0 1.94-.99 3.653-2.5 4.67m-5.119-9.996a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.31.602 2.48 1.547 3.258m3.57-7.414a5.6 5.6 0 0 1-.355-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061M17 19l-2 2m1-5.5l-2 2M12 20l-2 2m1.5-6.5l-2 2m-2 1.5l-2 2"></svg:path>`,
})
export class SolarCloudRainBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallBrokenIcon],svg[solar-cloud-snowfall-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.001 15v7m-2.998-5.269l5.999 3.464m-.003-3.464L9 20.195m13-6.842c0 2.707-1.927 4.97-4.5 5.52M6.286 19C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061"></svg:path>`,
})
export class SolarCloudSnowfallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallMinimalisticBrokenIcon],svg[solar-cloud-snowfall-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="21" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 19.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5"></svg:path></svg:g>`,
})
export class SolarCloudSnowfallMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStorageBrokenIcon],svg[solar-cloud-storage-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12.353c0 2.707-1.927 4.97-4.5 5.52M6.286 18C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 8.061"></svg:path><svg:path d="M8.5 17c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v2c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 18h2"></svg:path></svg:g>`,
})
export class SolarCloudStorageBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStormBrokenIcon],svg[solar-cloud-storm-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 13.353c0 1.94-.99 3.653-2.5 4.67m-5.119-9.996a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.31.602 2.48 1.547 3.258m3.57-7.414a5.6 5.6 0 0 1-.355-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 9.061M17 19l-2 2m0-5.5l-2 2m0 2.5l-2 2"></svg:path><svg:path stroke-linejoin="round" d="m6 22.385l4.286-3.692H6L10.286 15"></svg:path></svg:g>`,
})
export class SolarCloudStormBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSun2BrokenIcon],svg[solar-cloud-sun-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 16.353C22 19.472 19.442 22 16.286 22H11m3.381-10.973a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765S3.919 22 6.286 22H7m.116-8.391a5.6 5.6 0 0 1-.354-1.962C6.762 8.528 9.32 6 12.476 6c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 12.061"></svg:path><svg:path d="M8 4.5a3.5 3.5 0 0 0-1.5 6.663M8 4.5c.744 0 1.433.232 2 .627M8 4.5c-.744 0-1.433.232-2 .627M8 4.5c.954 0 1.818.381 2.45 1M8 4.5c-.954 0-1.818.381-2.45 1M8 4.5c1.273 0 2.388.68 3 1.696"></svg:path><svg:path stroke-linecap="round" d="M7.5 2v.5m-5 5H2m9.389-3.889l-.216.216m-7.346 7.346l-.216.216m.216-7.562l-.216-.216"></svg:path></svg:g>`,
})
export class SolarCloudSun2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSunBrokenIcon],svg[solar-cloud-sun-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14.353C22 17.472 19.442 20 16.286 20H11m3.381-10.973a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20H7m.116-8.391a5.6 5.6 0 0 1-.354-1.962C6.762 6.528 9.32 4 12.476 4c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 10.061"></svg:path><svg:path d="M11 4a5 5 0 1 0-6 7.584"></svg:path></svg:g>`,
})
export class SolarCloudSunBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudUploadBrokenIcon],svg[solar-cloud-upload-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 16v6m0-6l2 2m-2-2l-2 2"></svg:path><svg:path d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5"></svg:path></svg:g>`,
})
export class SolarCloudUploadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropBrokenIcon],svg[solar-cloud-waterdrop-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96Z"></svg:path><svg:path stroke-linecap="round" d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5"></svg:path></svg:g>`,
})
export class SolarCloudWaterdropBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropsBrokenIcon],svg[solar-cloud-waterdrops-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5"></svg:path><svg:path d="M11 20.334c0 .92-.672 1.666-1.5 1.666S8 21.254 8 20.334c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm5 0c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm-2.5-5c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Z"></svg:path></svg:g>`,
})
export class SolarCloudWaterdropsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudsBrokenIcon],svg[solar-clouds-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12.353c0-2.472-1.607-4.573-3.845-5.338M6.285 18C3.92 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m8.383 4.899c.387-.13.804-.2 1.238-.2c.425 0 .834.067 1.215.192m-7.176 1.622a3 3 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353S10.247 22 11.786 22h6.5C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.174 1.622a3.4 3.4 0 0 1-.23-1.227c0-1.949 1.662-3.529 3.714-3.529c1.91 0 3.484 1.371 3.69 3.134m-7.174 1.622c.366.068.707.205 1.007.396"></svg:path>`,
})
export class SolarCloudsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudyMoonBrokenIcon],svg[solar-cloudy-moon-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zM15.5 14.25a.75.75 0 0 0 0 1.5zM8.25 8.5a.75.75 0 0 0 1.5 0zm3.893-5.567l-.388-.642zm-10.4 12.292a.75.75 0 1 0 1.43-.45zm14.882 4.788a.75.75 0 1 0 .75 1.298zM3.987 7.376a.75.75 0 0 0-1.298-.752zm2.637-4.687a.75.75 0 1 0 .752 1.298zm13.801 8.78A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zm-6.577 6.275A9.3 9.3 0 0 1 2.75 12h-1.5c0 1.122.172 2.206.492 3.225zM21.25 12a9.25 9.25 0 0 1-4.625 8.013l.75 1.298A10.75 10.75 0 0 0 22.75 12zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606zM2.75 12c0-1.686.45-3.265 1.237-4.624l-1.298-.752A10.7 10.7 0 0 0 1.25 12zm4.626-8.013A9.2 9.2 0 0 1 12 2.75v-1.5c-1.957 0-3.794.524-5.376 1.439z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.048 15.142c.387-.13.804-.2 1.238-.2c.425 0 .834.067 1.215.192m-7.175 1.622a3 3 0 0 0-.54-.05C3.247 16.706 2 17.89 2 19.353S3.247 22 4.786 22h6.5C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.174 1.622a3.4 3.4 0 0 1-.23-1.227C5.095 13.58 6.757 12 8.81 12c1.91 0 3.484 1.371 3.69 3.134m-7.174 1.622c.366.068.707.205 1.007.396"></svg:path></svg:g>`,
})
export class SolarCloudyMoonBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCode2BrokenIcon],svg[solar-code-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16 11l1.697 1.527c1.542 1.388 2.313 2.082 2.313 2.973c0 .89-.771 1.585-2.314 2.973L16 20M8 4.83L6.304 6.356C4.76 7.745 3.99 8.44 3.99 9.33s.771 1.585 2.314 2.973L8 13.83M13.987 5l-.994 3.707M11.843 13l-1.83 6.83"></svg:path>`,
})
export class SolarCode2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeBrokenIcon],svg[solar-code-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 7.83l1.697 1.526c1.542 1.389 2.313 2.083 2.313 2.974c0 .89-.771 1.585-2.314 2.973L17 16.83M13.987 5l-.994 3.707M11.843 13l-1.83 6.83M7 7.83L5.304 9.356C3.76 10.745 2.99 11.44 2.99 12.33s.771 1.585 2.314 2.973L7 16.83"></svg:path>`,
})
export class SolarCodeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeCircleBrokenIcon],svg[solar-code-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828s.667 1.495 2 2.828L8.5 15"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarCodeCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeFileBrokenIcon],svg[solar-code-file-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 14l-1 1l1 1m4.5 0l1 1l-1 1M10 14l-1.5 4"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarCodeFileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeScanBrokenIcon],svg[solar-code-scan-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5.5 15.5c0-.943 0-1.414.293-1.707S6.557 13.5 7.5 13.5h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293c-1.414 0-2.121 0-2.56-.44"></svg:path><svg:path d="M5.5 8.5c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44c.943 0 1.414 0 1.707.293s.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293S5.5 9.443 5.5 8.5Zm8 7c0-.943 0-1.414.293-1.707s.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44c-.943 0-1.414 0-1.707-.293s-.293-.764-.293-1.707z"></svg:path><svg:path stroke-linecap="round" d="M18.5 8.5c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293S13.5 9.443 13.5 8.5v-1c0-.943 0-1.414.293-1.707S14.557 5.5 15.5 5.5c1.414 0 2.121 0 2.56.44M22 14v1m-8 7c3.771 0 5.657 0 6.828-1.172c.654-.653.943-1.528 1.07-2.828M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172C2.518 3.825 2.229 4.7 2.102 6M2 10V9"></svg:path><svg:path stroke-linecap="round" d="M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"></svg:path></svg:g>`,
})
export class SolarCodeScanBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeSquareBrokenIcon],svg[solar-code-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828s-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828s.667 1.495 2 2.828L8.5 15"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCodeSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarColourTuneingBrokenIcon],svg[solar-colour-tuneing-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 12h7.5M22 12h-7.5m5.5 3.684C20 19 17.735 22 16 22c-1.257 0-2.328-.97-3.032-3M4.144 8.316C4.144 5 6.41 2 8.144 2c2.269 0 3.928 3.158 3.928 10q.002 1.64.123 3"></svg:path>`,
})
export class SolarColourTuneingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCommandBrokenIcon],svg[solar-command-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M8 13v3h8V8H8v1"></svg:path><svg:path d="M16 16.001h3a3 3 0 1 1-3 3zm-7.999 0h-3a3 3 0 1 0 3 3zM16 8h3a3 3 0 1 0-3-3zM8.001 8h-3a3 3 0 1 1 3-3z"></svg:path></svg:g>`,
})
export class SolarCommandBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassBigBrokenIcon],svg[solar-compass-big-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M5.025 9.21c.537-1.342.806-2.013 1.267-2.54q.177-.201.378-.378c.527-.461 1.198-.73 2.54-1.267c6.292-2.517 9.439-3.775 11.236-2.554c.426.29.793.657 1.083 1.083c.951 1.4.398 3.619-1.083 7.506a256 256 0 0 1-1.471 3.73c-.537 1.342-.806 2.013-1.267 2.54q-.177.201-.378.378c-.527.461-1.198.73-2.54 1.267c-6.293 2.515-9.44 3.775-11.236 2.554a4.1 4.1 0 0 1-1.083-1.083c-.946-1.393-.403-3.596 1.06-7.446"></svg:path><svg:path d="M12.5 14.959q-.245.04-.5.041a3 3 0 1 1 2.959-2.5"></svg:path></svg:g>`,
})
export class SolarCompassBigBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassBrokenIcon],svg[solar-compass-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarCompassBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassSquareBrokenIcon],svg[solar-compass-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.024 14.56c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.074.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.296.739-.465.932a2 2 0 0 1-.139.139c-.193.17-.44.268-.932.465Z"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCompassSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicioner2BrokenIcon],svg[solar-condicioner-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 5c-2.828 0-4.243 0-5.121.879C2 6.757 2 8.172 2 11c0 3.771 0 5.657 1.172 6.828S6.229 19 10 19h4c3.771 0 5.657 0 6.828-1.172S22 14.771 22 11c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5h-4"></svg:path><svg:path d="M18 18.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C16.607 15 15.904 15 14.5 15h-5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6 16.393 6 17.096 6 18.5m0-7h2m10 0h-6M6 9h6m6 0h-2"></svg:path></svg:g>`,
})
export class SolarCondicioner2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicionerBrokenIcon],svg[solar-condicioner-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.429 2c2.414 0 3.62 0 4.442.655q.263.21.475.475C22 3.95 22 5.157 22 7.57c0 3.22 0 4.829-.873 5.923q-.28.352-.633.633C19.4 15 17.79 15 14.571 15H9.43c-3.22 0-4.829 0-5.923-.873a4 4 0 0 1-.633-.633C2 12.4 2 10.79 2 7.571c0-2.414 0-3.62.655-4.441q.21-.264.475-.475C3.95 2 5.157 2 7.57 2H12M7 17.5l-.307.46A1.32 1.32 0 0 0 7 19.75c.561.42.696 1.206.307 1.79L7 22m5-4.5l-.306.46c-.39.584-.255 1.37.306 1.79s.696 1.206.307 1.79L12 22m5-4.5l-.306.46c-.39.584-.255 1.37.306 1.79s.696 1.206.307 1.79L17 22"></svg:path><svg:path d="M18 14.5c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C16.197 12 15.965 12 15.5 12H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.122.295-.146.653-.15 1.265M6 8.5h2m10 0h-6M6 6h6m6 0h-2"></svg:path></svg:g>`,
})
export class SolarCondicionerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiBrokenIcon],svg[solar-confetti-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m13.306 18.298l-5.069 1.689c-2.765.922-4.148 1.383-4.878.653s-.269-2.113.653-4.878l1.69-5.069c.766-2.298 1.149-3.447 2.055-3.66c.906-.215 1.763.642 3.475 2.355l3.38 3.379c1.712 1.713 2.569 2.569 2.355 3.475"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.235 18.346s-.758-2.281-.758-3.79c0-1.51.758-3.792.758-3.792m-4.17 8.72s-.64-2.753-.758-4.55c-.195-2.969.758-7.581.758-7.581m6.445 2.653l.143-.72c.146-.727.67-1.32 1.373-1.554a2.07 2.07 0 0 0 1.372-1.555l.144-.72m.028 7.796l.212.123c.657.38 1.483.296 2.051-.207a1.76 1.76 0 0 1 1.876-.297L22 13M9.795 2.779A1.4 1.4 0 0 0 10 4.5l.098.098c.393.393.538.97.377 1.503"></svg:path><svg:path fill="currentColor" d="M6.928 3.94a.536.536 0 1 1 .758.76a.536.536 0 0 1-.758-.76m5.229 3.217a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759m5 3a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759m1.901 5.156a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" d="M19.362 7.714c-.67.67-.19 2.614-.19 2.614s1.944.481 2.614-.19c.71-.71.308-1.64-.786-1.638c.003-1.094-.929-1.496-1.639-.786Z"></svg:path><svg:path stroke="currentColor" d="m15.188 3.417l-.027.098c-.03.106-.046.16-.038.212c.007.052.035.098.093.189l.052.082c.202.32.303.48.234.611s-.262.146-.648.176l-.1.008c-.11.009-.164.013-.212.038s-.083.068-.155.155l-.064.079c-.251.304-.376.456-.52.437c-.142-.02-.208-.198-.34-.555l-.034-.092c-.037-.102-.056-.152-.093-.19c-.037-.036-.087-.055-.189-.092l-.092-.034c-.357-.132-.535-.198-.555-.34c-.02-.144.133-.27.437-.52l.079-.065c.086-.07.13-.106.155-.154s.03-.103.038-.213l.008-.1c.03-.385.045-.578.176-.647c.13-.069.29.032.61.234l.083.052c.091.058.137.086.189.093s.106-.008.212-.038l.098-.027c.375-.107.563-.16.663-.06s.047.288-.06.663Z"></svg:path></svg:g>`,
})
export class SolarConfettiBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiMinimalisticBrokenIcon],svg[solar-confetti-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m13.306 18.298l-5.069 1.689c-2.765.922-4.148 1.383-4.878.653s-.269-2.113.653-4.878l1.69-5.069c.766-2.298 1.149-3.447 2.055-3.66c.906-.215 1.763.642 3.475 2.355l3.38 3.379c1.712 1.713 2.569 2.569 2.355 3.475"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12.235 18.346s-.758-2.281-.758-3.79c0-1.51.758-3.792.758-3.792m-4.17 8.72s-.64-2.753-.758-4.55c-.195-2.969.758-7.581.758-7.581m6.445 2.653l.143-.72c.146-.727.67-1.32 1.373-1.554a2.07 2.07 0 0 0 1.372-1.555l.144-.72m.028 6.796l.212.123a1.76 1.76 0 0 0 2.05-.207a1.76 1.76 0 0 1 1.877-.297L22 12M10.535 3a1.4 1.4 0 0 0 .205 1.721l.098.098c.393.393.538.97.377 1.503"></svg:path><svg:path fill="currentColor" d="M13.561 4.396c.201-.2.302-.301.418-.338a.5.5 0 0 1 .302 0c.116.037.217.137.418.338c.2.202.301.302.338.418a.5.5 0 0 1 0 .302c-.037.117-.137.217-.338.418s-.302.302-.418.339a.5.5 0 0 1-.302 0c-.116-.037-.217-.138-.418-.339c-.201-.2-.302-.301-.338-.418a.5.5 0 0 1 0-.302c.036-.116.137-.216.338-.418m5.907 3.072c.246-.245.368-.368.507-.421a.7.7 0 0 1 .503 0c.138.053.261.176.507.421c.245.246.368.368.421.507a.7.7 0 0 1 0 .503c-.053.138-.176.261-.421.507c-.246.245-.369.368-.507.421a.7.7 0 0 1-.503 0c-.139-.053-.261-.176-.507-.421c-.245-.246-.368-.369-.421-.507a.7.7 0 0 1 0-.503c.053-.139.176-.261.421-.507M6.927 3.94a.536.536 0 1 1 .759.76a.536.536 0 0 1-.759-.76m12.131 11.373a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759M17.5 9.741a.536.536 0 1 1 .759.76a.536.536 0 0 1-.759-.76"></svg:path></svg:g>`,
})
export class SolarConfettiMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedCircleBrokenIcon],svg[solar-confounded-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m-1 7l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarConfoundedCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedSquareBrokenIcon],svg[solar-confounded-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m-1 7l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarConfoundedSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyBrokenIcon],svg[solar-copy-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.998 10c-.012-2.175-.108-3.353-.877-4.121C19.243 5 17.828 5 15 5h-3c-2.828 0-4.243 0-5.121.879C6 6.757 6 8.172 6 11v5c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22h3c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16v-1"></svg:path><svg:path d="M3 10v6a3 3 0 0 0 3 3M18 5a3 3 0 0 0-3-3h-4C7.229 2 5.343 2 4.172 3.172C3.518 3.825 3.229 4.7 3.102 6"></svg:path></svg:g>`,
})
export class SolarCopyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyrightBrokenIcon],svg[solar-copyright-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 15.667a4.5 4.5 0 0 1-1.714.333C9.919 16 8 14.21 8 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarCopyrightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCorkscrewBrokenIcon],svg[solar-corkscrew-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m18.261 13.482l-.53.53zM10.518 5.74l.53-.53zm3.097-3.098l-.53.53l.001.002zm7.743 7.744l-.532.528l.002.002zM1.47 21.47a.75.75 0 1 0 1.06 1.06zm3.082-2.022l-.53-.53zm.215-1.243l-.678.321zm-.95-2.004l-.677.321zm.79-.696l-.403.633zm6.706 4.259l.402-.633zm.743-.775l-.615.428zm-5.593-8.024l-.615.428zm.763-.763l.429-.615zm5.548 3.867l-.43.615zm.779-.736l-.639.393zm-.646-1.05l.639-.393zm2.013-2.142a.75.75 0 1 0-1.06-1.06zm-6.96 7.493l-.402.633zm.684-2.229a.75.75 0 0 0 1.231-.857zm3.338 2.166a.75.75 0 1 0-1.23.858zm-3.423-3.6l.615-.428zm9.973-7.5a.75.75 0 0 0-1.064 1.057zm-4.06-1.921a.75.75 0 1 0 1.057-1.064zM9.986 6.27l7.744 7.743l1.06-1.061l-7.743-7.743zm7.744 7.743a2.94 2.94 0 0 0 4.158 0l-1.06-1.061a1.44 1.44 0 0 1-2.038 0zM9.987 2.11a2.94 2.94 0 0 0 0 4.158l1.061-1.06a1.44 1.44 0 0 1 0-2.037zm4.158 0a2.94 2.94 0 0 0-4.158 0l1.061 1.06a1.44 1.44 0 0 1 2.037 0zm6.683 8.804a1.44 1.44 0 0 1 0 2.037l1.06 1.06a2.94 2.94 0 0 0 0-4.157zM2.53 22.53l2.553-2.552l-1.061-1.06L1.47 21.47zm2.915-4.646l-.95-2.004l-1.355.642l.95 2.004zm1.352-7.066l5.548 3.866l.857-1.23l-5.547-3.867zm7.395 2.122l-.646-1.05l-1.278.786l.646 1.05zm-.597-1.475l1.325-1.324l-1.06-1.06l-1.325 1.324zm-.05.425a.345.345 0 0 1 .05-.425l-1.06-1.06a1.845 1.845 0 0 0-.267 2.271zm-1.2 2.794c1.154.805 2.584-.546 1.847-1.744l-1.278.786a.22.22 0 0 1-.022-.144a.2.2 0 0 1 .056-.11a.2.2 0 0 1 .112-.049a.22.22 0 0 1 .142.03zm-5.266-4.148a.22.22 0 0 1 .03.146a.2.2 0 0 1-.053.113a.2.2 0 0 1-.113.052a.22.22 0 0 1-.146-.03l.858-1.23c-1.189-.828-2.635.618-1.807 1.806zm3.832 9.861c1.197.76 2.57-.675 1.76-1.837l-1.23.857a.22.22 0 0 1-.03-.143a.2.2 0 0 1 .05-.112a.2.2 0 0 1 .11-.055a.22.22 0 0 1 .144.024zM4.496 15.88a.21.21 0 0 1-.05.239a.21.21 0 0 1-.243.02l.805-1.267c-1.098-.698-2.425.475-1.868 1.65zm.587 4.098c.551-.552.695-1.39.362-2.094l-1.356.642a.34.34 0 0 1-.067.391zm-.879-3.84l3.354 2.13L8.362 17l-3.354-2.13zm3.354 2.13l3.353 2.129l.804-1.266L8.362 17zm5.113.292l-.689-.989l-1.23.858l.689.988zm-2.796-4.012l-.7-1.005l-1.231.857l.7 1.005zm-.7-1.005l-2.096-3.007l-1.23.857L7.943 14.4zM21.89 9.857l-3.359-3.385l-1.064 1.056l3.358 3.385zm-6.362-6.37L14.144 2.11l-1.058 1.063l1.385 1.377z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M22 12a2.15 2.15 0 1 1-4.3 0a2.15 2.15 0 0 1 4.3 0Z"></svg:path></svg:g>`,
})
export class SolarCorkscrewBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCosmeticBrokenIcon],svg[solar-cosmetic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 16a5.5 5.5 0 1 1 3.858-1.58"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 20v-4m0 4h3m-3 0h-3"></svg:path><svg:path fill="currentColor" d="M2 11v-.75a.75.75 0 0 0-.75.75zm6 0h.75a.75.75 0 0 0-.75-.75zm.75 6a.75.75 0 0 0-1.5 0zm-1.5-4a.75.75 0 0 0 1.5 0zM2 11.75h6v-1.5H2zM2.75 17v-6h-1.5v6zM5 19.25A2.25 2.25 0 0 1 2.75 17h-1.5A3.75 3.75 0 0 0 5 20.75zM7.25 17A2.25 2.25 0 0 1 5 19.25v1.5A3.75 3.75 0 0 0 8.75 17zm0-6v2h1.5v-2z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M3 11h4V5.618a1 1 0 0 0-1.447-.894l-2 1A1 1 0 0 0 3 6.618z"></svg:path></svg:g>`,
})
export class SolarCosmeticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseDownBrokenIcon],svg[solar-course-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.62 10.665c-.997-.991-1.496-1.487-2.115-1.487s-1.117.496-2.115 1.488l-.24.238c-.997.992-1.497 1.489-2.116 1.489s-1.118-.497-2.115-1.49L2 7m20 11v-5.546M22 18h-5.582M22 18l-4.5-4.5"></svg:path>`,
})
export class SolarCourseDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseUpBrokenIcon],svg[solar-course-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 7v5.546M22 7h-5.582M22 7l-4.5 4.5m-2.88 2.835c-.997.991-1.496 1.487-2.115 1.487s-1.117-.496-2.115-1.488l-.24-.238c-.997-.992-1.497-1.489-2.116-1.489s-1.118.497-2.115 1.49L2 18"></svg:path>`,
})
export class SolarCourseUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuBoltBrokenIcon],svg[solar-cpu-bolt-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.429 10L11 12h2l-1.429 2"></svg:path><svg:path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"></svg:path><svg:path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2m2 10c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56"></svg:path></svg:g>`,
})
export class SolarCpuBoltBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuBrokenIcon],svg[solar-cpu-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17 14c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56"></svg:path><svg:path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"></svg:path><svg:path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"></svg:path></svg:g>`,
})
export class SolarCpuBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCreativeCommonsBrokenIcon],svg[solar-creative-commons-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11 15.667A4.5 4.5 0 0 1 9.286 16C6.919 16 5 14.21 5 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333m8 7.334a4.5 4.5 0 0 1-1.714.333C14.919 16 13 14.21 13 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCreativeCommonsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropBrokenIcon],svg[solar-crop-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8.5 11.5c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z"></svg:path><svg:path stroke-linecap="round" d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M5 11V2m3 3h3c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M2 5h3m14 14v3m0-9v3"></svg:path></svg:g>`,
})
export class SolarCropBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropMinimalisticBrokenIcon],svg[solar-crop-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M5 11V2m3 3h3c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M2 5h3m14 14v3m0-9v3"></svg:path>`,
})
export class SolarCropMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownBrokenIcon],svg[solar-crown-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20.433 14.173a.75.75 0 0 0-1.491-.16zm-16.12-.08l-.746.08zm-.184-1.705l.746-.08zm4.631-1.454l.655.365zm1.79-3.209l-.655-.365zm2.9 0l-.655.366zm1.79 3.209l.655-.365zm.764 1.025l-.303.687zm1.467-.714l-.53-.531zm-1.018.777l-.102-.743zm-9.923-.777l-.53.532zm1.017.777l.102-.743zm.45-.063l.301.687zm-2.285 8.194l.5-.559zm12.576 0l-.5-.559zm1.694-9.653l-.008.75zm-1.117-.52l.567-.49zm-5.957-3.197l-.341-.668zm-1.816 0l.341-.668zm1.996 13.467h-2.176v1.5h2.176zm-8.03-6.237l-.183-1.705l-1.491.16l.183 1.705zm4.357-2.714l1.79-3.208l-1.31-.73l-1.79 3.208zm3.38-3.208l1.79 3.208l1.31-.73l-1.79-3.209zm1.79 3.208c.162.29.31.56.455.765c.149.211.351.445.662.582l.604-1.373c.056.024.046.05-.039-.071a8 8 0 0 1-.372-.633zm2.356-.585c-.258.258-.412.41-.533.507c-.115.093-.117.066-.057.058l.205 1.486c.336-.047.595-.216.796-.378c.195-.158.412-.376.648-.61zm-1.24 1.932c.269.118.565.159.855.119l-.205-1.486a.1.1 0 0 1-.045-.006zm-9.7-.87c.235.235.452.453.647.61c.201.164.46.332.796.379l.205-1.486c.06.008.058.035-.057-.058a8 8 0 0 1-.533-.507zm2.104-1.207a8 8 0 0 1-.373.633c-.084.12-.094.095-.038.07l.604 1.374c.31-.137.514-.37.662-.582c.144-.206.293-.475.455-.765zm-.661 2.196c.29.04.586-.001.854-.12l-.604-1.372a.1.1 0 0 1-.045.006zm3.468 7.485c-1.438 0-2.445-.001-3.213-.1c-.748-.095-1.17-.273-1.487-.556l-1 1.118c.63.564 1.39.81 2.296.926c.886.113 2.006.112 3.404.112zm-7.345-6.077c.148 1.378.266 2.727.466 3.821c.101.552.229 1.072.405 1.523c.175.448.417.875.774 1.195l1-1.118c-.116-.104-.248-.294-.377-.623q-.19-.488-.326-1.247c-.188-1.022-.297-2.28-.45-3.711zm15.375-.16c-.154 1.431-.264 2.689-.45 3.71q-.138.76-.327 1.248c-.129.329-.261.52-.377.623l1 1.118c.357-.32.599-.747.774-1.195c.176-.451.304-.971.405-1.523c.2-1.094.318-2.443.466-3.82zm-5.854 7.737c1.398 0 2.518.001 3.404-.112c.907-.116 1.666-.362 2.296-.926l-1-1.118c-.317.283-.739.46-1.487.556c-.768.099-1.775.1-3.213.1zM10.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 5zM12 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 2.25zM20.75 9a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 22.25 9zm-1.5 0a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 17.75 9zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 20 6.75zM4 9.75A.75.75 0 0 1 3.25 9h-1.5A2.25 2.25 0 0 0 4 11.25zM3.25 9A.75.75 0 0 1 4 8.25v-1.5A2.25 2.25 0 0 0 1.75 9zM4 8.25a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 4 6.75zm16 1.5h-.009l-.017 1.5H20zm-.009 0a.75.75 0 0 1-.559-.26l-1.135.98c.406.47 1.006.772 1.677.78zm-.559-.26A.74.74 0 0 1 19.25 9h-1.5c0 .561.207 1.076.547 1.47zM18 11.777c.677-.675 1.026-1.015 1.258-1.159l-.787-1.276c-.42.26-.924.768-1.53 1.372zM4.75 9a.74.74 0 0 1-.182.49l1.135.98c.34-.394.547-.909.547-1.47zm2.309 1.714c-.606-.604-1.11-1.113-1.53-1.372l-.787 1.276c.232.144.58.484 1.258 1.159zM4.568 9.49a.75.75 0 0 1-.559.26l.017 1.5a2.25 2.25 0 0 0 1.677-.78zm-.559.26H4v1.5h.026zm.866 2.558a33 33 0 0 1-.109-1.116a3 3 0 0 1-.005-.592l-1.487-.2a4.6 4.6 0 0 0-.004.898c.023.328.065.72.114 1.17zM13.25 5c0 .485-.276.907-.683 1.115l.681 1.336A2.75 2.75 0 0 0 14.75 5zm-.683 1.115c-.17.086-.361.135-.567.135v1.5a2.74 2.74 0 0 0 1.249-.3zm1.538 1.245c-.206-.37-.391-.703-.561-.975l-1.272.795c.146.234.31.53.523.91zM12 6.25c-.206 0-.398-.05-.567-.135l-.681 1.336c.375.191.8.299 1.248.299zm-.567-.135A1.25 1.25 0 0 1 10.75 5h-1.5a2.75 2.75 0 0 0 1.502 2.45zm-.228 1.976c.212-.382.377-.677.523-.91l-1.272-.796c-.17.272-.355.605-.561.975z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 17.5h14"></svg:path></svg:g>`,
})
export class SolarCrownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownLineBrokenIcon],svg[solar-crown-line-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.838 11.126c.18-1.912.27-2.869-.057-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21c.914-.935 1.234-2.345 1.507-4.79M9 18h6"></svg:path>`,
})
export class SolarCrownLineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownMinimalisticBrokenIcon],svg[solar-crown-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.838 11.126c.18-1.912.27-2.869-.057-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21c.914-.935 1.234-2.345 1.507-4.79"></svg:path>`,
})
export class SolarCrownMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownStarBrokenIcon],svg[solar-crown-star-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.146 12.523c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path stroke-linecap="round" d="M21.838 11.126c.18-1.912.27-2.869-.057-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21c.914-.935 1.234-2.345 1.507-4.79"></svg:path></svg:g>`,
})
export class SolarCrownStarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupBrokenIcon],svg[solar-cup-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M17 2.456c.741.141 1.181.297 1.56.765c.477.586.452 1.219.401 2.485c-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"></svg:path><svg:path stroke-linecap="round" d="M12 17v2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6"></svg:path></svg:g>`,
})
export class SolarCupBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupFirstBrokenIcon],svg[solar-cup-first-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m11 8l1.5-1.5v4"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"></svg:path><svg:path stroke-linecap="round" d="M12 16v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6M17 2.456c.741.141 1.181.297 1.56.765c.477.586.452 1.219.401 2.485c-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068"></svg:path></svg:g>`,
})
export class SolarCupFirstBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupHotBrokenIcon],svg[solar-cup-hot-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.627 16.4c.177 2.654.265 3.982 1.13 4.79c.865.81 2.196.81 4.856.81h.774c2.66 0 3.99 0 4.856-.81c.865-.809.953-2.136 1.13-4.79l.343-5.134c.133-2 .2-2.999-.393-3.632C15.73 7 14.728 7 12.725 7h-5.45c-2.003 0-3.005 0-3.598.634c-.593.633-.526 1.633-.393 3.632l.058.867"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17 17h1a4 4 0 0 0 0-8h-1"></svg:path><svg:path fill="currentColor" d="M10 18.75a.75.75 0 0 0 0-1.5zm3.5-1.5a.75.75 0 0 0 0 1.5zm-3.5 0H4v1.5h6zm6 0h-2.5v1.5H16z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6.05 5.061l.411-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575m7.51 3.123l.41-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575m-4.49 3.123l.41-.575a.707.707 0 0 0-.165-.987a.707.707 0 0 1-.165-.986l.41-.575"></svg:path></svg:g>`,
})
export class SolarCupHotBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupMusicBrokenIcon],svg[solar-cup-music-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 10.5V5"></svg:path><svg:circle cx="11.5" cy="10.5" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="M15 7a2 2 0 0 1-2-2"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"></svg:path><svg:path stroke-linecap="round" d="M12 16v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6M17 2.456c.741.141 1.181.297 1.56.765c.477.586.452 1.219.401 2.485c-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068"></svg:path></svg:g>`,
})
export class SolarCupMusicBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupPaperBrokenIcon],svg[solar-cup-paper-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20.92 5.73a.75.75 0 0 0-1.423.475zm-17.129.238l.712.237zm.036-.107l-.711-.238zM7 18.58l-.742.108zm10.002 0l.742.108zm-.922 2.933l.49.568zM3.482 7.762l.68-.317zm.218.303l.516-.544zm16.819-.303l.68.317zm-.22.303l-.515-.544zm-2.398-4.982a.75.75 0 1 0 .786-1.278zm-9.98 18.43l-.49.568zM5.706 2.444l-.393-.639zm-.356.257l.482.575zM10 21.995l-.013.75H10zm4 0v.75h.013zM9.185 2.75h5.63v-1.5h-5.63zM4.503 6.205l.036-.107l-1.423-.475l-.036.108zM18.5 7.59h-13v1.5h13zm-13.742.859l1.5 10.24l1.483-.217L6.242 8.23zm12.985 10.24l1.5-10.24l-1.485-.217l-1.5 10.24zm-1.484-.217c-.122.835-.205 1.391-.32 1.804c-.109.392-.223.56-.35.67l.98 1.136c.437-.377.664-.86.815-1.405c.146-.525.242-1.192.359-1.988zM3.08 5.73c-.153.459-.29.867-.36 1.205c-.072.347-.103.747.082 1.143l1.36-.634c.015.034-.02.016.026-.206c.048-.23.15-.538.315-1.034zM5.5 7.589c-.523 0-.847 0-1.08-.029c-.225-.026-.232-.065-.204-.04L3.184 8.61c.317.3.707.398 1.058.44c.343.04.774.04 1.258.04zm-2.698.49c.093.2.223.38.382.53l1.032-1.088a.3.3 0 0 1-.055-.076zm16.695-1.874c.166.496.267.804.315 1.034c.046.222.01.24.027.206l1.36.634c.184-.396.153-.796.082-1.143c-.07-.338-.207-.746-.36-1.205zM18.5 9.09c.485 0 .915.002 1.258-.04c.351-.04.74-.139 1.058-.44l-1.032-1.088c.028-.026.021.013-.203.04c-.234.027-.558.028-1.08.028zm1.339-1.644a.3.3 0 0 1-.055.076l1.032 1.089c.16-.152.29-.332.382-.531zM14.815 2.75c.934 0 1.579 0 2.082.052c.488.049.775.14 1.005.281l.785-1.278c-.493-.303-1.027-.434-1.639-.496c-.596-.06-1.33-.059-2.233-.059zM6.257 18.688c.117.796.213 1.463.359 1.988c.151.545.378 1.028.814 1.405l.981-1.135c-.127-.11-.241-.279-.35-.671c-.115-.413-.197-.97-.32-1.804zM9.185 1.25c-.903 0-1.637 0-2.233.06c-.612.061-1.146.192-1.639.495L6.1 3.083c.23-.14.516-.232 1.004-.281c.503-.051 1.148-.052 2.082-.052zM4.54 6.098c.295-.886.5-1.498.708-1.959c.201-.447.378-.69.585-.863l-.964-1.15c-.443.372-.737.837-.989 1.398c-.246.546-.477 1.242-.763 2.1zm.774-4.293a4 4 0 0 0-.445.32l.964 1.15a2 2 0 0 1 .267-.192zm4.7 19.44c-1.063-.018-1.392-.118-1.602-.3l-.98 1.136c.673.582 1.549.647 2.556.664zm4 1.5c1.007-.017 1.883-.082 2.557-.664l-.981-1.135c-.21.181-.54.281-1.602.3zm-4.013 0h4v-1.5h-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.5 12H12m5.5 0H16m-9 5h10"></svg:path></svg:g>`,
})
export class SolarCupPaperBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupStarBrokenIcon],svg[solar-cup-star-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 16v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></svg:path><svg:path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5m4.646-6.477C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path stroke-linecap="round" d="M18 22H6M17 2.456c.741.141 1.181.297 1.56.765c.477.586.452 1.219.401 2.485c-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485c.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068"></svg:path></svg:g>`,
})
export class SolarCupStarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorBrokenIcon],svg[solar-cursor-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 4.942c-2.524-.915-3.871-1.288-4.609-.55c-.84.84-.24 2.47.962 5.728l2.007 5.45c.602 1.633.903 2.45 1.565 2.596s1.277-.47 2.508-1.702l1.203-1.202l3.938 3.938c.408.408.612.612.84.706c.303.125.643.125.947 0c.227-.094.431-.298.839-.706s.612-.612.706-.84a1.24 1.24 0 0 0 0-.947c-.094-.227-.298-.43-.706-.839l-3.938-3.938l1.202-1.203c1.232-1.23 1.847-1.846 1.702-2.508s-.963-.963-2.596-1.565L13 6.414"></svg:path>`,
})
export class SolarCursorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorSquareBrokenIcon],svg[solar-cursor-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14.859 16.5l-2.461-2.461l-.752.751c-.77.77-1.154 1.154-1.568 1.064c-.413-.091-.602-.602-.978-1.623l-1.255-3.406c-.75-2.037-1.125-3.055-.6-3.58s1.543-.15 3.58.6L14.231 9.1c1.021.376 1.532.565 1.623.978s-.294.798-1.064 1.568l-.751.752l2.46 2.461c.256.255.383.382.442.524a.77.77 0 0 1 0 .593c-.059.142-.186.27-.441.524c-.255.255-.382.382-.524.441a.77.77 0 0 1-.593 0c-.142-.059-.27-.186-.524-.441"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarCursorSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerBrokenIcon],svg[solar-danger-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.216 3c1.18-.667 1.954-1 2.784-1c1.114 0 2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7C3.996 6.22 4.719 5.682 6 4.9"></svg:path></svg:g>`,
})
export class SolarDangerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerCircleBrokenIcon],svg[solar-danger-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarDangerCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerSquareBrokenIcon],svg[solar-danger-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarDangerSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerTriangleBrokenIcon],svg[solar-danger-triangle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.31 9C8.594 5 9.967 3 12 3c2.31 0 3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572c-.951-1.364-.163-3.165 1.648-6.428M12 8v5"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarDangerTriangleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDatabaseBrokenIcon],svg[solar-database-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4 18V6m16 6v6"></svg:path><svg:path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4s-8 1.79-8 4s3.582 4 8 4Z"></svg:path><svg:path stroke-linecap="round" d="M20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4"></svg:path><svg:path d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4"></svg:path></svg:g>`,
})
export class SolarDatabaseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDeliveryBrokenIcon],svg[solar-delivery-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.506 15.265a.75.75 0 0 0 1.446-.4zm-1.43-7.99l.724-.2zM4.705 5.92l-.2.723zM3.2 4.725a.75.75 0 1 0-.402 1.445zm16.988 11a.75.75 0 1 0-.378-1.451zm-9.991 1.834c.31 1.12-.37 2.303-1.574 2.616L9 21.626c1.977-.513 3.185-2.502 2.643-4.467zm-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519l-1.446.4c.54 1.955 2.594 3.082 4.563 2.57zm-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616l-.377-1.45c-1.977.513-3.186 2.502-2.643 4.467zm1.574-2.616c1.212-.315 2.428.389 2.74 1.519l1.446-.4c-.54-1.955-2.594-3.082-4.563-2.57zm1.494-1.175L6.8 7.075l-1.446.4l2.152 7.79zM4.904 5.197l-1.703-.472l-.402 1.445l1.704.473zM6.8 7.075a2.71 2.71 0 0 0-1.896-1.878l-.4 1.446c.425.118.742.44.85.831zm4.31 11.01l9.079-2.36l-.378-1.451l-9.079 2.36z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.165 6.236c-.485-1.756-.728-2.634-1.44-3.033c-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398c-.412.691-.17 1.569.315 3.324l.515 1.863c.485 1.755.727 2.633 1.44 3.032c.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396c.226-.38.255-.816.154-1.423"></svg:path></svg:g>`,
})
export class SolarDeliveryBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDevicesBrokenIcon],svg[solar-devices-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10c0-3.771 0-5.657-1.172-6.828S17.772 2 14 2S8.343 2 7.172 3.172C6.229 4.115 6.045 5.52 6.009 8M22 14c0 3.771 0 5.657-1.172 6.828S17.772 22 14 22h-2"></svg:path><svg:path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"></svg:path><svg:path stroke-linecap="round" d="M17 19h-5"></svg:path></svg:g>`,
})
export class SolarDevicesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramDownBrokenIcon],svg[solar-diagram-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m19 15l-3.118-3.926c-.477-.602-.716-.903-.99-1.05a1.5 1.5 0 0 0-1.357-.029c-.28.135-.531.425-1.035 1.005s-.755.87-1.035 1.005a1.5 1.5 0 0 1-1.356-.03c-.274-.146-.513-.447-.99-1.048L6 7m16 15H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V9m0-7v3"></svg:path>`,
})
export class SolarDiagramDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramUpBrokenIcon],svg[solar-diagram-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V9m0-7v3"></svg:path><svg:path d="m19 7l-3.118 3.926c-.477.602-.716.903-.99 1.05a1.5 1.5 0 0 1-1.357.029c-.28-.135-.531-.425-1.035-1.005s-.755-.87-1.035-1.005a1.5 1.5 0 0 0-1.356.03c-.274.146-.513.447-.99 1.048L6 15"></svg:path></svg:g>`,
})
export class SolarDiagramUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialog2BrokenIcon],svg[solar-dialog-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.87 21.51l.645.382zm.259-.438l-.646-.382zm-2.258 0l.646-.382zm.26.438l-.646.382zM1.25 12.8a.75.75 0 0 0 1.5 0zm1.747 4.044a.75.75 0 0 0-1.385.574zm3.292 2.741l.024-.75zm-1.82-.29l-.287.693zm13.226-2.164l.693.287zm-3.984 2.454l-.024-.75zm1.82-.29l.287.693zM3.91 6.59l-.392-.639zM2.59 7.91l-.64-.392zm5.326 11.912l-.381.646zm6.932-12.908a.75.75 0 1 0 .304-1.47zm3.707 1.934a.75.75 0 1 0-1.469.304zm-7.04 13.044l.26-.438l-1.292-.764l-.26.438zm-3.29-.438l.26.438l1.291-.764l-.26-.438zm1.999-.326a.25.25 0 0 1-.224.122a.25.25 0 0 1-.224-.122l-1.29.764c.676 1.144 2.352 1.144 3.029 0zM8.8 6.75h2.4v-1.5H8.8zm8.45 6.05v.8h1.5v-.8zM6.313 18.835c-.792-.025-1.223-.094-1.557-.232l-.574 1.385c.597.248 1.255.32 2.083.347zm-4.701-1.417a4.75 4.75 0 0 0 2.57 2.57l.574-1.385a3.25 3.25 0 0 1-1.759-1.76zM17.25 13.6c0 .942 0 1.611-.036 2.138c-.036.52-.103.845-.211 1.106l1.385.574c.197-.474.281-.982.322-1.578c.04-.59.04-1.318.04-2.24zm-3.515 6.735c.828-.027 1.486-.1 2.083-.347l-.574-1.385c-.335.138-.765.207-1.557.232zm3.268-3.491a3.25 3.25 0 0 1-1.76 1.759l.575 1.385a4.75 4.75 0 0 0 2.57-2.57zM8.8 5.25c-1.295 0-2.319 0-3.137.077c-.83.079-1.526.244-2.145.623l.784 1.279c.343-.21.783-.34 1.503-.409c.73-.07 1.671-.07 2.995-.07zM2.75 12.8c0-1.324 0-2.264.07-2.995c.069-.72.199-1.16.409-1.503L1.95 7.518c-.38.619-.544 1.315-.623 2.145c-.078.818-.077 1.842-.077 3.137zm.768-6.85A4.75 4.75 0 0 0 1.95 7.518l1.279.784a3.25 3.25 0 0 1 1.073-1.073zm5.999 14.74c-.201-.34-.377-.638-.548-.874a2.2 2.2 0 0 0-.67-.64l-.764 1.292c.046.027.11.077.22.23c.12.165.256.393.47.756zm-3.252-.355c.446.014.73.024.947.05c.204.025.281.058.323.083l.763-1.291c-.29-.171-.594-.243-.905-.28c-.298-.037-.661-.048-1.08-.062zm5.51 1.119c.214-.363.35-.591.47-.756c.11-.153.174-.203.22-.23l-.763-1.291a2.2 2.2 0 0 0-.67.64c-.172.235-.348.534-.549.873zm1.912-2.619c-.419.014-.782.025-1.08.061c-.31.038-.616.11-.905.28l.763 1.292c.042-.025.119-.058.323-.083c.216-.026.501-.036.947-.05zM11.2 6.75c1.798 0 2.873.004 3.648.164l.304-1.47c-.963-.198-2.227-.194-3.952-.194zm7.55 6.05c0-1.725.004-2.989-.195-3.952l-1.469.304c.16.775.164 1.85.164 3.648z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.033 6c.052-.992.183-1.661.52-2.21A3.75 3.75 0 0 1 8.79 2.554C9.692 2 10.92 2 13.375 2h2.25c1.528 0 2.58 0 3.375.133m-1 12.602c.748-.025 1.253-.091 1.685-.27a3.75 3.75 0 0 0 2.03-2.03c.285-.689.285-1.563.285-3.31v-.75c0-1.528 0-2.58-.133-3.375"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.51 13h.008M10 13h.009m3.482 0h.009"></svg:path></svg:g>`,
})
export class SolarDialog2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialogBrokenIcon],svg[solar-dialog-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-width="1.5" d="M14 7.07A8 8 0 0 0 2.835 17.562c.142.285.189.61.107.918l-.477 1.781a1.04 1.04 0 0 0 1.274 1.274l1.78-.477a1.3 1.3 0 0 1 .919.107A8 8 0 0 0 16.93 10"></svg:path><svg:path stroke-width="1.5" d="m18 14.502l.198-.087c.362-.165.768-.227 1.153-.124l.476.127a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 0 0 22 8.5a6.47 6.47 0 0 0-1-3.466m-11.5.962A6.502 6.502 0 0 1 19 3.022"></svg:path><svg:path stroke-linejoin="round" stroke-width="2" d="M6.518 14h.01m3.481 0h.009m3.482 0h.009"></svg:path></svg:g>`,
})
export class SolarDialogBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaBrokenIcon],svg[solar-diploma-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="16" r="3"></svg:circle><svg:path d="m12 19.26l-2.263 2.17c-.324.31-.486.465-.623.52c-.313.122-.66.017-.824-.25c-.072-.117-.095-.328-.14-.75c-.025-.239-.038-.358-.077-.458a.83.83 0 0 0-.5-.48c-.104-.037-.229-.049-.477-.073c-.44-.044-.661-.065-.783-.134a.617.617 0 0 1-.26-.79c.056-.132.218-.287.542-.598L8.073 17l1.04-1.04M12 19.26l2.263 2.17c.324.31.486.465.623.52c.313.122.66.017.824-.25c.072-.117.095-.328.14-.75c.025-.239.038-.358.077-.458a.83.83 0 0 1 .5-.48c.105-.037.229-.049.477-.073c.44-.043.661-.065.783-.134a.617.617 0 0 0 .26-.79c-.056-.132-.218-.287-.542-.598L15.926 17L15 16.073"></svg:path><svg:path stroke-linecap="round" d="M17.32 17.996c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V9M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879c.49.49.707 1.146.803 2.121M9 6h6M7 9.5h2m8 0h-4.5"></svg:path></svg:g>`,
})
export class SolarDiplomaBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaVerifiedBrokenIcon],svg[solar-diploma-verified-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879c.49.49.707 1.146.803 2.121M16.5 17.998l.82-.002c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V9M9 6h6M7 9.5h2m8 0h-4.5"></svg:path><svg:path d="M10.89 13.945a1.71 1.71 0 0 1 2.22 0c.273.234.614.375.973.404a1.71 1.71 0 0 1 1.569 1.568c.028.36.17.7.403.974a1.71 1.71 0 0 1 0 2.218a1.7 1.7 0 0 0-.403.974a1.71 1.71 0 0 1-1.57 1.569a1.7 1.7 0 0 0-.973.403a1.71 1.71 0 0 1-2.218 0a1.7 1.7 0 0 0-.974-.404a1.71 1.71 0 0 1-1.568-1.568a1.7 1.7 0 0 0-.404-.974a1.71 1.71 0 0 1 0-2.218a1.7 1.7 0 0 0 .404-.974a1.71 1.71 0 0 1 1.568-1.568c.36-.029.7-.17.974-.404Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10.5 18.2l.857.8l2.143-2"></svg:path></svg:g>`,
})
export class SolarDiplomaVerifiedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisketteBrokenIcon],svg[solar-diskette-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 22v-1c0-1.886 0-2.828-.586-3.414S14.886 17 13 17h-2c-1.886 0-2.828 0-3.414.586S7 19.114 7 21v1"></svg:path><svg:path stroke-linecap="round" d="M7 8h6M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"></svg:path></svg:g>`,
})
export class SolarDisketteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDislikeBrokenIcon],svg[solar-dislike-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.975 11.815l-.739.128zm-.705-4.08l-.74.128zM6.938 3.523l-.747-.065zm-.812 9.393l.747.064zm7.869 5.863l.74-.122zm-.663-4.045l.74-.121zm-6.634-.412l-.49.569zm1.439 1.24l.49-.568zm2.381 3.654l-.726.189zm.476 1.834l.726-.188zm1.674.886l-.23-.714zm.145-.047l.229.714zm-2.951-4.352l.662-.353zm4.043 3.216l-.726-.189zm-2.23 1.115l-.326.675zM3.971 2.529l-.748-.064zM3 13.766l.747.064a.75.75 0 0 1-1.497-.064zm17.236-1.823l-.705-4.08l1.478-.256l.705 4.08zM13.245 2.75H8.596v-1.5h4.649zm-5.56.838l-.812 9.392l-1.495-.129l.813-9.393zm11.846 4.275c-.507-2.93-3.15-5.113-6.286-5.113v-1.5c3.826 0 7.126 2.669 7.764 6.357zM13.255 18.9l-.663-4.045l1.48-.242l.663 4.044zm-6.067-5.146l1.438 1.24l-.979 1.137l-1.438-1.24zm4.056 5.274l.476 1.834l-1.452.376l-.476-1.833zm1.194 2.194l.145-.047l.459 1.428l-.145.047zm-1.915-4.038c.312.584.555 1.203.721 1.844l-1.452.377A7 7 0 0 0 9.2 17.89zm2.06 3.991a.89.89 0 0 0 .596-.61l1.452.376a2.38 2.38 0 0 1-1.589 1.662zm-.863-.313a.51.51 0 0 0 .28.33l-.651 1.351a2.01 2.01 0 0 1-1.081-1.305zm.28.33a.6.6 0 0 0 .438.03l.459 1.428a2.1 2.1 0 0 1-1.548-.107zm2.154-8.176h5.18v1.5h-5.18zM4.719 2.594L3.747 13.83l-1.494-.129l.971-11.236zm-.969-.107v11.279h-1.5V2.487zm-.526-.022a.263.263 0 0 0 .263.285v-1.5c.726 0 1.294.622 1.232 1.344zm11.511 16.192c.125.76.09 1.538-.104 2.284l-1.452-.377c.14-.543.167-1.11.076-1.664zM8.596 2.75a.916.916 0 0 0-.911.838l-1.494-.13A2.416 2.416 0 0 1 8.596 1.25zm.03 12.244c.68.586 1.413 1.283 1.898 2.19l-1.324.707c-.346-.649-.897-1.196-1.553-1.76zm13.088-3.307a2.416 2.416 0 0 1-2.38 2.829v-1.5a.916.916 0 0 0 .902-1.073zM3.487 2.75a.263.263 0 0 0 .263-.263h-1.5c0-.682.553-1.237 1.237-1.237zm9.105 12.105a1.583 1.583 0 0 1 1.562-1.84v1.5c-.05 0-.09.046-.082.098zm-5.72-1.875a.92.92 0 0 0 .316.774l-.98 1.137a2.42 2.42 0 0 1-.83-2.04z"></svg:path>`,
})
export class SolarDislikeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisplayBrokenIcon],svg[solar-display-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 10V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3H8c-2.828 0-4.243 0-5.121.879c-.3.3-.498.662-.628 1.121M2 9v1c0 2.828 0 4.243.879 5.121C3.757 16 5.172 16 8 16h8c2.828 0 4.243 0 5.121-.879c.3-.3.498-.662.628-1.121M12 19v-2.5m0 2.5l6 2m-6-2l-6 2"></svg:path>`,
})
export class SolarDisplayBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDnaBrokenIcon],svg[solar-dna-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m11.848 12.152l.198.069c3.26 1.122 7.184.049 9.954-2.721m-10.152 2.652l-.558-.191C8.248 10.913 4.585 11.915 2 14.5m9.848-2.348l-.069-.198C10.657 8.694 11.73 4.77 14.5 2m-2.652 10.152l.191.558c1.048 3.041.046 6.705-2.539 9.29m.5-7l1.843 1.922m-5.078-5.079L8 13.08m3.844-6.315L14 9m2 2l.922.843M4 13l3.5 3.5m12.278-5.61l-3.5-3.5M9.305 18.191l1.587 1.587m3.695-14.191L13 4"></svg:path>`,
})
export class SolarDnaBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentAddBrokenIcon],svg[solar-document-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592q-.22.282-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558q-.282.22-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938"></svg:path><svg:path stroke-linecap="round" d="M8 13h2.5M8 9h6.5M8 17h1.5M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172M21 14c0 3.771 0 5.657-1.172 6.828m-15.656 0C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172m0 0c.944-.943 1.127-2.348 1.163-4.828"></svg:path></svg:g>`,
})
export class SolarDocumentAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentBrokenIcon],svg[solar-document-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M8 14h5m-5-4h1m7 0h-4"></svg:path>`,
})
export class SolarDocumentBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentMedicineBrokenIcon],svg[solar-document-medicine-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 6v2m0 0v2m0-2h-2m2 0h2m-6 6h1m7 0h-4m-3 4h6M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path>`,
})
export class SolarDocumentMedicineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentTextBrokenIcon],svg[solar-document-text-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 12h1m7 0h-4m4-4h-1m-3 0H8m0 8h5M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path>`,
})
export class SolarDocumentTextBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsBrokenIcon],svg[solar-documents-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 16c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16v-4m0-4c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v4"></svg:path><svg:path d="M5 4.076c-.975.096-1.631.313-2.121.803C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121c.49.49 1.146.707 2.121.803M19 4.076c.975.096 1.631.313 2.121.803C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121c-.49.49-1.146.707-2.121.803"></svg:path><svg:path stroke-linecap="round" d="M9 13h6M9 9h6m-6 8h3"></svg:path></svg:g>`,
})
export class SolarDocumentsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsMinimalisticBrokenIcon],svg[solar-documents-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 13h6M9 9h6m-6 8h3M2 19V5m20 14V5m-3 11c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16v-4m0-4c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v4"></svg:path>`,
})
export class SolarDocumentsMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarBrokenIcon],svg[solar-dollar-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarDollarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarMinimalisticBrokenIcon],svg[solar-dollar-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarDollarMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBittenBrokenIcon],svg[solar-donut-bitten-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.5 7L16 5m3 2l1-1m-8-1l-1-1m-.5 3l-1.366.366M7 5L6 4m.792 5.144l-.585-1.288"></svg:path><svg:path fill="currentColor" d="m12.5 22l.034.75a.75.75 0 0 0 .569-1.196zm.444-2.372l.446.603zm6.535-4.833l-.446-.603zm-4.86 4.06l.603-.446zm.7-2.85l.446.603zm2.93.165l.604-.446zm3.378-1.453l-.487.57a.75.75 0 0 0 1.208-.367zm-3.043 1.906l-.603.446a.75.75 0 0 0 1.133.084zm.101-.102l.53.53a.75.75 0 0 0 .21-.654zm-4.066 2.77l-.225.715a.75.75 0 0 0 .755-.185zm.185-.185l.53.53a.75.75 0 0 0 .073-.976zM3.021 17.913a.75.75 0 1 0 1.252-.826zm4.943 2.412a.75.75 0 1 0-.656 1.35zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm1.103 18.804c-.233-.315-.2-.963.287-1.323l-.892-1.206c-1.117.826-1.353 2.404-.601 3.421zm2.12-3.145c-.296-.4-.237-1.224.542-1.8l-.892-1.207c-1.225.907-1.793 2.633-.857 3.9zm.542-1.8c.78-.577 1.586-.392 1.881.007l1.206-.892c-.936-1.265-2.753-1.228-3.979-.322zm4.16-1.211c.496-.367 1-.293 1.215-.11l.973-1.142c-.867-.739-2.162-.633-3.08.046zM21.25 12a9.3 9.3 0 0 1-.345 2.514l1.443.406c.262-.93.402-1.909.402-2.92zm-8.784 9.25c-.134.007-.264 0-.466 0v1.5c.11 0 .36.007.534 0zm5.18-4.634l.335.453l1.206-.892l-.335-.453zm1.78-.219c-.047-.274.086-.694.499-.999l-.892-1.206c-.791.585-1.24 1.536-1.087 2.453zm-.312.756l.102-.101l-1.06-1.061l-.102.101zm-5.724 3.078c.357-.265.745-.306 1.004-.225l.45-1.43c-.767-.242-1.648-.068-2.346.449zm.626-.93l.185.25l1.206-.891l-.185-.25zm1.133.52l.186-.185l-1.061-1.06l-.185.185zM4.273 17.087A9.2 9.2 0 0 1 2.75 12h-1.5c0 2.183.652 4.216 1.771 5.913zM12 21.25a9.2 9.2 0 0 1-4.036-.925l-.656 1.35A10.7 10.7 0 0 0 12 22.75z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m6.613 2c-.5-.5-1.529-.861-2-1.276"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m16.65 8.977l.066 1.412m3.962-.304L19 11.563M5.665 12.641L6.5 11.5m-2.817-1.15l-.079-1.412"></svg:path></svg:g>`,
})
export class SolarDonutBittenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBrokenIcon],svg[solar-donut-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m4.613.724c.471.415 1.088.776 1.805.776c1.69 0 1.69-2 3.38-2c1.077 0 1.925.814 2.399 1.403"></svg:path><svg:path stroke-linecap="round" d="M14.5 7L16 5m3 2l1-1m-8-1l-1-1m-.5 3l-1.366.366m7.516 1.611l.066 1.412m3.962-.304L19 11.563M7 5L6 4m.792 5.144l-.585-1.288m-.542 4.786L6.5 11.5m-2.817-1.15l-.079-1.412M7 20.662A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"></svg:path></svg:g>`,
})
export class SolarDonutBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowDownBrokenIcon],svg[solar-double-alt-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 11l-7 6l-1.75-1.5M5 11l2.333 2M5 7l7 6l1.75-1.5M19 7l-2.333 2"></svg:path>`,
})
export class SolarDoubleAltArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowLeftBrokenIcon],svg[solar-double-alt-arrow-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13 19l-6-7l1.5-1.75M13 5l-2 2.333M17 5l-6 7l1.5 1.75M17 19l-2-2.333"></svg:path>`,
})
export class SolarDoubleAltArrowLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowRightBrokenIcon],svg[solar-double-alt-arrow-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 19l6-7l-1.5-1.75M11 5l2 2.333M7 5l6 7l-1.5 1.75M7 19l2-2.333"></svg:path>`,
})
export class SolarDoubleAltArrowRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowUpBrokenIcon],svg[solar-double-alt-arrow-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 13l-7-6l-1.75 1.5M5 13l2.333-2M5 17l7-6l1.75 1.5M19 17l-2.333-2"></svg:path>`,
})
export class SolarDoubleAltArrowUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadBrokenIcon],svg[solar-download-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 22h8c2.828 0 4.243 0 5.121-.878C22 20.242 22 18.829 22 16v-1c0-2.828 0-4.242-.879-5.121c-.768-.768-1.946-.865-4.121-.877m-10 0c-2.175.012-3.353.109-4.121.877C2 10.758 2 12.172 2 15v1c0 2.829 0 4.243.879 5.122c.3.3.662.497 1.121.627"></svg:path><svg:path stroke-linejoin="round" d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5"></svg:path></svg:g>`,
})
export class SolarDownloadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadMinimalisticBrokenIcon],svg[solar-download-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v13m0 0l4-4.375M12 16l-4-4.375M15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15m18 0c0 2.828 0 4.243-.879 5.121c-.3.3-.662.498-1.121.628"></svg:path>`,
})
export class SolarDownloadMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadSquareBrokenIcon],svg[solar-download-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 7v7m0 0l3-3m-3 3l-3-3"></svg:path><svg:path d="M16 17H8m14-5c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarDownloadSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadTwiceSquareBrokenIcon],svg[solar-download-twice-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M8.5 7v7m0 0l2.5-3m-2.5 3L6 11m9.5-4v7m0 0l2.5-3m-2.5 3L13 11"></svg:path><svg:path d="M18 17H6m16-5c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarDownloadTwiceSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper2BrokenIcon],svg[solar-dropper-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10h-3"></svg:path><svg:path d="M18 12.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M22 13h-2m-4 8v1m-6-12c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586S22 8.114 22 10v6.507c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V14"></svg:path><svg:path stroke-linecap="round" d="M2 22v-2M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6m0-2.564a3 3 0 0 1-2.07-.66l-.078-.066l-.034-.028A3 3 0 0 0 11.935 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8"></svg:path></svg:g>`,
})
export class SolarDropper2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper3BrokenIcon],svg[solar-dropper-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 16h-4"></svg:path><svg:path d="M18 11.417c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M16 21v1m-6-12c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586S22 8.114 22 10v6.507c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V14"></svg:path><svg:path stroke-linecap="round" d="M2 22v-2M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6m0-2.564a3 3 0 0 1-2.07-.66l-.078-.066l-.034-.028A3 3 0 0 0 11.935 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8"></svg:path></svg:g>`,
})
export class SolarDropper3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperBrokenIcon],svg[solar-dropper-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 10h-4m4 3h-3m-3 8v1M2 22v-2M18.5 2l-.523.523l-.073.072a3 3 0 0 1-1.904.84M16 2v1.436m0 0V6m0-2.564a3 3 0 0 1-2.07-.66l-.078-.066l-.034-.028A3 3 0 0 0 11.935 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8"></svg:path><svg:path d="M10 10c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586S22 8.114 22 10v6.507c0 .657-.277 1.284-.763 1.726a7.78 7.78 0 0 1-10.474 0A2.33 2.33 0 0 1 10 16.507V14"></svg:path></svg:g>`,
})
export class SolarDropperBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalistic2BrokenIcon],svg[solar-dropper-minimalistic-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 16h-4"></svg:path><svg:path d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M12 21v1m2-18a2 2 0 1 0-4 0"></svg:path><svg:path stroke-linecap="round" d="M5 8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586S19 6.114 19 8v7.883c0 .76-.32 1.487-.88 2.001a9.053 9.053 0 0 1-12.24 0a2.72 2.72 0 0 1-.88-2V12"></svg:path></svg:g>`,
})
export class SolarDropperMinimalistic2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalisticBrokenIcon],svg[solar-dropper-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5 8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586S19 6.114 19 8v7.883c0 .76-.32 1.487-.88 2.001a9.053 9.053 0 0 1-12.24 0a2.72 2.72 0 0 1-.88-2V12m14-4h-2m2 6h-2"></svg:path><svg:path d="M14 11.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M19 11h-2m-5 10v1m2-18a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class SolarDropperMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellBrokenIcon],svg[solar-dumbbell-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.235 16.848l-.287.693zM16 13.5h.75a.75.75 0 0 0-.75-.75zm.152 2.265l-.693.287zm5.696 0l.693.287zm-1.083 1.083l-.287-.693zm0-9.696l-.287.693zm.39 1.37a.75.75 0 1 0 1.386-.574zm-3.92-1.37l-.287-.693zM16 10.5v.75a.75.75 0 0 0 .75-.75zm.152-2.265l-.693-.287zM3.235 16.848l-.287.693zm-1.083-1.083l-.693.287zM8 13.5v-.75a.75.75 0 0 0-.75.75zm-.152 2.265l.693.287zm-1.083 1.083l.287.693zm0-9.696l.287-.693zM8 10.5h-.75c0 .414.336.75.75.75zm-.152-2.265l.693-.287zM3.235 7.152l-.287-.693zM2.152 8.235l-.693-.287zM22.75 12a.75.75 0 0 0-1.5 0zM19 16.25c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188c.31.021.69.021 1.145.021zm-3.75-2.75c0 .461 0 .954.02 1.38c.01.213.026.421.051.609c.024.176.063.382.138.563l1.386-.574l-.012-.045a2 2 0 0 1-.026-.147a6 6 0 0 1-.039-.477a30 30 0 0 1-.018-1.309zm2.272 2.655a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489zM21.25 14c0 .476 0 .796-.017 1.043c-.017.241-.046.358-.078.435l1.386.574c.12-.29.167-.59.188-.907c.021-.31.021-.69.021-1.145zM19 17.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489zM19 7.75c.476 0 .796 0 1.043.017c.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188c-.31-.021-.69-.021-1.145-.021zm1.478.095c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489zM19 6.25c-.456 0-.835 0-1.145.02a2.8 2.8 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017zm-2.25 4.25c0-.47 0-.926.018-1.309q.014-.286.04-.477q.012-.093.025-.147l.012-.045l-1.386-.574a2.3 2.3 0 0 0-.138.563a7 7 0 0 0-.051.61c-.02.425-.02.918-.02 1.379zm.198-4.04a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677zM2.75 14v-4h-1.5v4zM5 16.25c-.476 0-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078l-.574 1.386c.29.12.59.167.907.188c.31.021.69.021 1.145.021zM1.25 14c0 .456 0 .835.02 1.145c.022.318.07.617.19.907l1.385-.574c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 14zm2.272 2.155a1.25 1.25 0 0 1-.677-.677l-1.386.574a2.75 2.75 0 0 0 1.489 1.489zM7.25 13.5c0 .47 0 .926-.018 1.309q-.014.286-.04.477a2 2 0 0 1-.025.147l-.012.045l1.386.574c.075-.181.114-.387.138-.563c.025-.188.041-.396.051-.61c.02-.425.02-.918.02-1.379zM5 17.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078A17 17 0 0 1 5 16.25zm2.155-2.272a1.25 1.25 0 0 1-.677.677l.574 1.386a2.75 2.75 0 0 0 1.489-1.489zM5 7.75c.476 0 .796 0 1.043.017c.241.017.358.046.435.078l.574-1.386c-.29-.12-.59-.167-.907-.188c-.31-.021-.69-.021-1.145-.021zm3.75 2.75c0-.461 0-.954-.02-1.38a7 7 0 0 0-.051-.609a2.3 2.3 0 0 0-.138-.563l-1.386.574l.012.045q.012.053.026.147a6 6 0 0 1 .039.477c.018.383.018.838.018 1.309zM6.478 7.845c.307.127.55.37.677.677l1.386-.574a2.75 2.75 0 0 0-1.489-1.489zM5 6.25c-.456 0-.835 0-1.145.02a2.8 2.8 0 0 0-.907.19l.574 1.385c.077-.032.194-.061.435-.078A17 17 0 0 1 5 7.75zM2.75 10c0-.476 0-.796.017-1.043c.017-.241.046-.358.078-.435L1.46 7.948c-.12.29-.167.59-.188.907c-.021.31-.021.69-.021 1.145zm.198-3.54a2.75 2.75 0 0 0-1.489 1.488l1.386.574c.127-.307.37-.55.677-.677zM8 11.25h8v-1.5H8zm8 1.5H8v1.5h8zm5.25-.75v2h1.5v-2z"></svg:path>`,
})
export class SolarDumbbellBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeBrokenIcon],svg[solar-dumbbell-large-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.393 20.076c.692.692 1.038 1.038 1.468 1.038s.776-.346 1.468-1.038a.52.52 0 0 1 .734 0l.735.734c.686.686 1.029 1.029 1.432 1.137c.264.07.542.07.806 0c.403-.108.746-.451 1.432-1.137s1.03-1.03 1.137-1.433a1.55 1.55 0 0 0 0-.806c-.107-.403-.45-.746-1.137-1.432l-1.1-1.101l3.67-3.67m2.57-8.444c-.693-.692-1.039-1.038-1.469-1.038s-.776.346-1.468 1.038m5.443 2.937c0 .43-.346.776-1.038 1.468a.52.52 0 0 0 0 .734l.734.735c.686.686 1.029 1.029 1.137 1.432c.07.264.07.542 0 .806c-.108.403-.451.746-1.137 1.432s-1.03 1.03-1.433 1.137a1.55 1.55 0 0 1-.806 0c-.403-.107-.746-.45-1.432-1.137l-1.101-1.1M3.924 15.67c-.692.692-1.038 1.038-1.038 1.468m3.608.367L3.19 14.202c-.686-.686-1.029-1.029-1.137-1.432a1.56 1.56 0 0 1 0-.806c.108-.403.451-.746 1.137-1.432s1.03-1.03 1.433-1.137c.264-.071.542-.071.806 0c.403.107.746.45 1.432 1.137l1.101 1.1m9.544-5.138L14.202 3.19c-.686-.686-1.029-1.029-1.432-1.137a1.56 1.56 0 0 0-.806 0c-.403.108-.746.451-1.432 1.137s-1.03 1.03-1.137 1.433a1.55 1.55 0 0 0 0 .806c.107.403.45.746 1.137 1.432l1.1 1.101l-3.67 3.67m8.076.735l-2.203-2.202m-5.873 1.468l2.203 2.202"></svg:path>`,
})
export class SolarDumbbellLargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeMinimalisticBrokenIcon],svg[solar-dumbbell-large-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m8.319 12.198l3.88-3.88m3.104 3.104l-3.88 3.88"></svg:path><svg:path stroke-linecap="round" d="m7.143 19.331l1.238 1.237c.904.905 1.356 1.357 1.908 1.421q.185.023.371 0c.552-.064 1.004-.516 1.908-1.42c.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-4.95-4.948c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42c-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91l.62.618M16.857 4.669l-1.238-1.237c-.904-.905-1.356-1.357-1.908-1.421a1.6 1.6 0 0 0-.371 0c-.552.064-1.004.516-1.908 1.42c-.905.905-1.357 1.357-1.421 1.909a1.6 1.6 0 0 0 0 .37c.064.553.516 1.005 1.42 1.91l4.95 4.948c.904.905 1.356 1.357 1.908 1.421q.186.023.371 0c.552-.064 1.004-.516 1.908-1.42c.905-.905 1.357-1.357 1.421-1.909a1.6 1.6 0 0 0 0-.37c-.064-.553-.516-1.005-1.42-1.91l-.62-.618"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18.019 2.498l3.104 3.104M2.498 18.019l3.104 3.104"></svg:path></svg:g>`,
})
export class SolarDumbbellLargeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellSmallBrokenIcon],svg[solar-dumbbell-small-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06c-.052.192-.052.424-.052.889Zm-11 0v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9Z"></svg:path><svg:path fill="currentColor" d="M2 12h-.75zm20 0h-.75zm-11 .75a.75.75 0 0 0 0-1.5zm3-1.5a.75.75 0 0 0 0 1.5zm-10 2c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 14.75zm16 1.5A2.75 2.75 0 0 0 22.75 12h-1.5c0 .69-.56 1.25-1.25 1.25zm0-4c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 9.25zM4 9.25A2.75 2.75 0 0 0 1.25 12h1.5c0-.69.56-1.25 1.25-1.25zm0 1.5h1v-1.5H4zm1 2.5H4v1.5h1zm15 0h-1v1.5h1zm-1-2.5h1v-1.5h-1zm-10 2h2v-1.5H9zm5 0h1v-1.5h-1z"></svg:path></svg:g>`,
})
export class SolarDumbbellSmallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbells2BrokenIcon],svg[solar-dumbbells-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.09 7.311l.09-.744zm2.84.345l-.09.744zm1.583 3.404l.639.393zm-2.49.53l.09-.745a.75.75 0 0 0-.834.641zm1.622.094l-.184-.727zm.525-3.775l.355-.661zm.669.81l-.72.209zm-6.884-.835l-.639-.393zm.868-.624l-.183-.727zM3.63 10.225l-.72.208zm2.263 1.107l.743.103a.75.75 0 0 0-.653-.848zm-1.594-.296l.354-.661zM6.97 21.742l-.09.744zm-2.84-.345l.09-.744zm5.246-1.386l.743.104zm-.27 1.158l-.64-.394zm-.869.624l.183.727zM7.169 17.72l-.743-.103a.75.75 0 0 0 .653.848zm1.594.296l.355-.66zm.67.811l-.721.208zm-7.156.322l.743.104zm.271-1.157l-.639-.393zm2.49-.53l-.09.745a.75.75 0 0 0 .834-.642zm-1.622-.094l-.183-.727zm-1.194 2.965l-.72.208zm.669.81l-.355.661zm3.11-13.088l2.84.344l.18-1.489l-2.84-.344zm4.04 1.743c-.044.32-.073.52-.105.67a.7.7 0 0 1-.062.197l1.278.787c.134-.218.203-.446.25-.67c.047-.216.083-.479.125-.777zm-2.11 2.535c.327.04.682.083.99.107c.27.02.632.04.907-.03l-.367-1.454c.02-.005-.002.002-.097.003q-.127 0-.328-.015c-.269-.02-.588-.059-.924-.1zm1.943-1.668a.67.67 0 0 1-.413.29l.367 1.455a2.17 2.17 0 0 0 1.324-.958zM8.84 8.4c.34.042.561.069.728.1c.162.03.221.055.247.07l.71-1.322c-.22-.119-.45-.18-.682-.223c-.225-.042-.5-.075-.822-.114zm2.687 1.606c.041-.298.078-.561.093-.781c.015-.228.01-.467-.06-.714l-1.442.417c.003.01.014.053.005.199c-.01.152-.037.353-.082.672zM9.815 8.569c.161.087.263.22.303.359l1.441-.417a2.1 2.1 0 0 0-1.034-1.263zm-5.388.576c.044-.32.072-.52.105-.67a.7.7 0 0 1 .061-.197L3.316 7.49a2.1 2.1 0 0 0-.251.67c-.046.216-.083.48-.124.777zM6.18 6.567c-.321-.04-.597-.073-.826-.086a2.3 2.3 0 0 0-.715.052l.366 1.454a1 1 0 0 1 .263-.009c.17.01.39.036.731.078zm-1.588 1.71a.67.67 0 0 1 .413-.29L4.64 6.533a2.17 2.17 0 0 0-1.324.958zm-1.652.661c-.042.298-.079.561-.093.781c-.015.228-.01.467.06.714l1.442-.416a.6.6 0 0 1-.005-.2c.01-.152.037-.352.082-.672zm3.041 1.649a22 22 0 0 1-.92-.124a4 4 0 0 1-.32-.064c-.092-.023-.11-.035-.09-.024l-.71 1.321c.251.135.609.203.874.247c.305.05.66.094.986.133zm-3.073-.154c.157.547.537.996 1.034 1.263l.71-1.321a.6.6 0 0 1-.303-.358zM7.06 20.997l-2.84-.344l-.18 1.489l2.84.344zm1.573-1.089c-.044.32-.072.52-.105.67a.7.7 0 0 1-.061.197l1.277.787c.134-.218.203-.446.251-.67c.046-.216.083-.48.124-.777zM6.88 22.486c.322.04.597.073.827.086c.235.014.472.01.714-.052l-.366-1.454a1 1 0 0 1-.263.009c-.17-.01-.39-.037-.731-.078zm1.588-1.71a.67.67 0 0 1-.413.29l.366 1.454a2.17 2.17 0 0 0 1.324-.958zm-1.39-2.31c.336.04.655.08.92.124q.2.033.321.064c.092.023.11.035.09.024l.71-1.321c-.251-.135-.608-.203-.874-.247c-.305-.05-.66-.094-.986-.133zm3.042 1.649c.042-.298.079-.561.093-.782a2 2 0 0 0-.06-.713l-1.441.416c.002.01.014.054.004.2c-.01.152-.037.352-.082.672zm-1.71-1.437a.6.6 0 0 1 .303.358l1.44-.416a2.1 2.1 0 0 0-1.034-1.263zm-5.39.576c.045-.32.074-.52.106-.67a.7.7 0 0 1 .062-.197L1.909 17.6a2.1 2.1 0 0 0-.25.67c-.047.216-.083.479-.125.777zm2.11-2.536c-.326-.04-.68-.082-.989-.106c-.27-.02-.632-.04-.907.03l.367 1.454c-.02.005.003-.002.097-.003q.127 0 .328.015c.269.02.588.059.924.1zm-1.942 1.669a.67.67 0 0 1 .413-.29l-.367-1.455a2.17 2.17 0 0 0-1.324.958zm-1.653.66c-.041.298-.078.561-.093.781c-.015.228-.01.467.06.714l1.442-.417a.6.6 0 0 1-.005-.199c.01-.153.037-.353.082-.672zm2.687 1.606c-.34-.042-.56-.069-.728-.1a1 1 0 0 1-.247-.07l-.71 1.322c.22.119.45.18.682.223c.225.042.5.075.822.114zm-2.72-.111a2.1 2.1 0 0 0 1.035 1.263l.71-1.322a.6.6 0 0 1-.303-.358zm4.28-2.976l.854-6.131l-1.486-.207l-.853 6.132zm1.498-6.08l-.853 6.132l1.486.207l.853-6.132zm13.732 1.184l.58-.477zm-2.544-.218l-.72.207a.75.75 0 0 0 .902.52zm1.595-.294l.092-.744zm-.32 3.354a.75.75 0 0 0 .365 1.455zm1.376.323l.436.61zm.547-.886l.743.105zm-6.705 1.678l-.58.476zm.858 1.256a.75.75 0 1 0 .183-1.49zm-1.512-3.536l-.743-.105zm2.086-1.376l.182.727a.75.75 0 0 0 .54-.934zm-1.538.49l.437.61zm1.133-10.942l.182.727zm-2.766.692l-.182-.728zm4.964-.388l-.58.476zm-.949-.511l.092-.745zm-.483 4.167l-.182-.727a.75.75 0 0 0-.539.934zm1.539-.49l-.437-.61zm.548-.886l-.743-.105zM12.135 6.78l.58-.476zm2.544.218l.721-.207a.75.75 0 0 0-.903-.52zm-1.595.294l.092-.744zM11.481 4.5l.743.104zm.548-.886l.437.61zm10.137 9.961c-.084-.29-.157-.546-.233-.754a2.1 2.1 0 0 0-.341-.629l-1.16.953a.7.7 0 0 1 .093.192c.053.146.11.34.199.652zm-3.516-.397c.327-.082.638-.16.901-.213q.197-.04.323-.055c.093-.01.117-.006.098-.009l.183-1.488c-.282-.035-.638.028-.903.082c-.303.062-.648.149-.966.228zm2.942-.986a2.2 2.2 0 0 0-1.437-.78l-.183 1.49a.7.7 0 0 1 .46.243zm-1.484 4.774c.313-.079.582-.145.8-.215a2.2 2.2 0 0 0 .647-.307l-.873-1.22a1 1 0 0 1-.231.098a12 12 0 0 1-.707.188zm.616-2.977c.09.311.145.507.176.657c.03.144.025.188.024.198l1.485.209a2 2 0 0 0-.04-.715c-.046-.216-.12-.473-.203-.763zm.831 2.455c.46-.33.775-.827.854-1.391l-1.485-.21a.57.57 0 0 1-.242.382zm-7.747-.725c.083.29.156.547.233.755c.079.215.179.43.34.628l1.16-.953a.7.7 0 0 1-.092-.192a11 11 0 0 1-.2-.652zm.574 1.383c.359.437.878.711 1.437.78l.183-1.49a.7.7 0 0 1-.461-.243zm.868-1.797c-.09-.311-.145-.506-.177-.657a.6.6 0 0 1-.023-.197l-1.486-.21a2 2 0 0 0 .041.715c.046.217.12.473.203.763zm.961-3.063c-.317.08-.663.166-.958.254c-.256.076-.603.188-.835.354l.874 1.22c-.02.014-.006 0 .082-.034q.116-.046.307-.103c.257-.076.568-.154.894-.236zm-1.161 2.209a.57.57 0 0 1 .242-.381l-.874-1.22a2.07 2.07 0 0 0-.854 1.391zm.756-12.66l-2.766.691l.364 1.455l2.766-.692zM19.34 3.73c-.084-.29-.157-.547-.233-.755a2.1 2.1 0 0 0-.341-.628l-1.16.952a.7.7 0 0 1 .093.193c.053.145.11.34.199.652zm-3.17-.484c.332-.083.546-.136.713-.167a1 1 0 0 1 .263-.023l.183-1.489a2.3 2.3 0 0 0-.716.037c-.225.041-.494.109-.807.187zm2.596-.899a2.2 2.2 0 0 0-1.437-.78l-.183 1.49a.7.7 0 0 1 .46.242zm-1.83 4.86c.318-.08.663-.166.958-.254c.257-.076.604-.188.835-.354l-.873-1.22c.02-.014.005 0-.082.034q-.116.046-.308.103c-.257.076-.567.154-.894.236zm.962-3.063c.09.311.145.506.176.657c.03.143.025.188.024.197l1.485.21a2 2 0 0 0-.04-.716c-.046-.216-.12-.472-.203-.762zm.831 2.455c.46-.33.775-.827.854-1.391l-1.485-.21a.57.57 0 0 1-.242.381zm-7.747-.725c.083.29.156.546.233.754c.079.216.179.431.34.629l1.16-.953a.7.7 0 0 1-.092-.192a11 11 0 0 1-.2-.652zm3.515.397c-.326.081-.637.159-.9.213a4 4 0 0 1-.323.055c-.094.01-.118.006-.098.009l-.183 1.488c.281.035.637-.028.903-.083c.302-.061.648-.148.965-.227zm-2.941.986c.359.436.878.71 1.437.78l.183-1.49a.7.7 0 0 1-.461-.243zm.868-1.797c-.09-.311-.145-.507-.177-.657a.6.6 0 0 1-.023-.198l-1.486-.21a2 2 0 0 0 .041.716c.046.216.12.472.203.763zm.616-2.977c-.313.078-.582.145-.8.215c-.223.071-.444.16-.648.307l.874 1.22a1 1 0 0 1 .23-.098c.162-.052.376-.106.708-.189zm-.816 2.122a.57.57 0 0 1 .242-.38l-.874-1.22a2.07 2.07 0 0 0-.854 1.39zm1.734 2.6l1.714 5.973l1.442-.414L15.4 6.79zm5.231 5.04l-1.714-5.973l-1.442.414l1.714 5.973z"></svg:path>`,
})
export class SolarDumbbells2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellsBrokenIcon],svg[solar-dumbbells-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.94 10.513l-.383.639zm-.53-2.491l.743.103a.766.766 0 0 0-.652-.848zm-.094 1.622l-.725.173zm3.776.526l.66.365zm-.81.668l.217.723zm.834-6.884l.383-.639zm.624.869l.726-.173zm-2.964-1.194l-.219-.723zm-1.107 2.263l-.09.744c.41.057.783-.23.833-.64zm.296-1.595l-.66-.365zM2.832 9.106l-.383.639zm-.624-.868l-.726.172zm4.071-1.07l.09-.744a.734.734 0 0 0-.833.641zm-.296 1.595l.66.365zm-.81.669l.217.722zm.834-6.884l.384-.64zm.53 2.49l-.742-.103a.766.766 0 0 0 .652.848zm.095-1.622l.725-.173zM3.667 2.222l-.218-.723zm-.81.669l-.66-.366zm13.09 3.096l-.345 2.84l1.486.207l.344-2.84zm-1.759 4.052c-.32-.044-.52-.073-.67-.105a.7.7 0 0 1-.194-.06l-.767 1.278c.22.135.45.204.673.252c.216.046.48.083.777.124zm-2.52-2.12c-.04.326-.083.68-.107.989c-.02.27-.04.632.03.909l1.45-.345c.006.02-.002-.001-.002-.096q0-.127.014-.327c.021-.27.06-.588.1-.924zm1.656 1.955a.66.66 0 0 1-.282-.402l-1.45.345c.138.55.479 1.035.965 1.335zm2.278-1.047c-.041.34-.069.56-.1.728a1 1 0 0 1-.07.25l1.32.73a2.3 2.3 0 0 0 .222-.679c.041-.225.075-.501.114-.822zm-1.594 2.701c.298.042.56.079.78.093c.229.015.467.01.711-.06l-.436-1.445a.6.6 0 0 1-.202.005c-.153-.01-.353-.037-.673-.082zm1.424-1.724a.62.62 0 0 1-.369.312l.436 1.445a2.1 2.1 0 0 0 1.253-1.026zm-.563-5.376c.32.044.52.073.67.105c.142.03.183.054.194.06l.766-1.278a2.1 2.1 0 0 0-.672-.252c-.216-.047-.48-.083-.778-.124zm2.563 1.766c.039-.322.073-.598.086-.827a2.4 2.4 0 0 0-.052-.717l-1.451.345a1 1 0 0 1 .009.26c-.01.171-.036.391-.078.732zm-1.7-1.6a.66.66 0 0 1 .283.401l1.45-.345a2.2 2.2 0 0 0-.966-1.335zm-.683-1.655a11 11 0 0 0-.781-.093a2 2 0 0 0-.71.06l.436 1.445a.6.6 0 0 1 .202-.005c.153.01.353.037.673.082zm-1.637 3.056c.04-.335.08-.654.123-.92q.034-.199.064-.32c.024-.092.036-.111.026-.092l-1.32-.731c-.133.248-.201.605-.246.87c-.05.306-.093.66-.133.986zm.145-3.089a2.1 2.1 0 0 0-1.252 1.026l1.32.73a.62.62 0 0 1 .369-.31zM3.002 7.074l.344-2.84l-1.486-.207l-.344 2.84zm1.077 1.558a10 10 0 0 1-.67-.105a.7.7 0 0 1-.194-.06L2.45 9.745c.22.135.448.205.672.253c.216.046.48.082.778.123zM1.516 6.867c-.039.321-.073.597-.086.826a2.3 2.3 0 0 0 .052.717l1.45-.345a1 1 0 0 1-.008-.26c.01-.17.036-.391.078-.731zm1.7 1.6a.66.66 0 0 1-.283-.402l-1.45.345c.138.55.48 1.035.966 1.335zm2.32-1.402c-.04.336-.08.655-.123.92q-.034.199-.064.32c-.024.092-.036.111-.026.093l1.32.73c.133-.248.202-.604.246-.87c.05-.305.093-.66.133-.986zM3.9 10.121c.298.042.56.079.781.093c.228.015.466.011.71-.06L4.954 8.71a.6.6 0 0 1-.202.005a11 11 0 0 1-.673-.082zm1.424-1.723a.62.62 0 0 1-.369.311l.436 1.445a2.1 2.1 0 0 0 1.253-1.026zM4.76 3.02c.32.045.52.073.67.105c.142.03.183.054.194.06l.767-1.277a2.1 2.1 0 0 0-.673-.253c-.216-.046-.48-.082-.778-.124zm2.52 2.12c.04-.325.083-.68.107-.988c.02-.27.04-.633-.03-.91l-1.45.346c-.006-.021.001 0 .002.095q0 .127-.015.328c-.02.269-.059.588-.1.923zM5.624 3.188a.66.66 0 0 1 .282.402l1.45-.346a2.2 2.2 0 0 0-.965-1.334zM4.94 1.532c-.298-.041-.56-.078-.78-.093a2 2 0 0 0-.711.06l.436 1.446a.6.6 0 0 1 .202-.006c.153.01.353.038.673.082zM3.346 4.233c.041-.34.068-.56.1-.728a1 1 0 0 1 .07-.249l-1.32-.73a2.3 2.3 0 0 0-.222.678c-.042.225-.075.501-.114.823zM3.45 1.5a2.1 2.1 0 0 0-1.253 1.026l1.32.731a.62.62 0 0 1 .369-.311zm2.998 4.284l6.132.853l.18-1.489l-6.131-.853zm6.054 1.494L6.37 6.425l-.18 1.49l6.131.852zM11.33 21.012l.457.583zm.219-2.544l-.721.207c-.1-.402.14-.82.539-.935zm.293 1.595l.738.072zm-4.802.07a.783.783 0 0 1 .54-.935a.72.72 0 0 1 .902.52zm1.125.985l-.605.458zm.886.548l-.123.75zm-1.677-6.705l-.457-.583zm.226 1.02a.773.773 0 0 1-.83.682a.73.73 0 0 1-.646-.825zm2.053-1.674l.124-.75zm1.377 2.086l.182.728a.72.72 0 0 1-.903-.521zm-.49-1.538l.605-.458zm10.637 3.33l.457.584zm.512-.948l.737.072zm-4.168-.483l-.182-.728a.72.72 0 0 1 .903.52zm.49 1.538l-.605.457zm.886.548l-.123.75zm-1.677-6.705l-.457-.583zm-.218 2.544l.72-.207a.78.78 0 0 1-.538.934zm-.294-1.595l-.737-.072zm2.792-1.603l.123-.75zm.886.548l.605-.458zm-10.35 8.688c.31-.09.506-.146.65-.2a.7.7 0 0 0 .188-.088l.913 1.166c-.2.164-.417.265-.633.344c-.208.076-.464.15-.755.233zm2.234-2.456c.08.318.166.663.227.966c.054.264.118.622.083.907l-1.475-.143c-.003.022.002 0-.01-.094a4 4 0 0 0-.054-.321a22 22 0 0 0-.213-.901zm-1.396 2.168a.67.67 0 0 0 .23-.438l1.476.143a2.24 2.24 0 0 1-.793 1.46zm-2.392-.71c.083.331.137.546.189.707a1 1 0 0 0 .1.235l-1.211.915a2.3 2.3 0 0 1-.305-.644c-.07-.218-.136-.487-.215-.8zm1.917 2.453c-.29.083-.546.157-.762.203c-.224.047-.46.076-.71.04l.248-1.498c.013.002.06.006.203-.024c.15-.031.346-.087.657-.176zM8.77 20.66c.107.15.256.235.405.256l-.247 1.499a2.04 2.04 0 0 1-1.368-.84zm-.1-5.405c-.312.09-.507.146-.652.2a.7.7 0 0 0-.188.088l-.913-1.166c.2-.165.418-.265.633-.344c.209-.077.465-.15.755-.233zm-.84.288a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.349-1.095.793-1.46zm.475-1.743c.29-.084.547-.158.763-.203c.223-.047.459-.076.709-.04l-.247 1.498a.6.6 0 0 0-.204.023c-.15.032-.346.088-.657.177zm2.005 2.8c-.082-.327-.16-.638-.236-.894a4 4 0 0 0-.103-.308c-.034-.088-.049-.104-.036-.086l1.21-.915c.165.229.276.573.353.83c.088.296.174.641.254.96zm-.532-3.043a2.04 2.04 0 0 1 1.368.84l-1.21.915a.6.6 0 0 0-.405-.256zm10.984 2.638l-.692-2.767l1.441-.414l.692 2.767zm-.88 1.696c.312-.09.507-.146.652-.2a.7.7 0 0 0 .187-.088l.914 1.166a2.1 2.1 0 0 1-.634.344c-.208.076-.464.15-.754.233zm2.321-2.11c.079.313.146.582.188.807c.042.232.067.469.036.72l-1.475-.143a1 1 0 0 0-.024-.257a13 13 0 0 0-.166-.713zm-1.482 1.822a.67.67 0 0 0 .23-.438l1.476.143a2.24 2.24 0 0 1-.792 1.46zm-2.478-1.056c.082.326.16.637.236.894q.057.191.103.308c.034.087.049.104.036.086l-1.211.915c-.164-.229-.275-.573-.352-.831c-.088-.295-.174-.64-.254-.958zm2.004 2.799c-.29.083-.547.157-.763.203a2 2 0 0 1-.71.04l.248-1.498c.013.002.06.006.203-.024c.151-.031.346-.087.658-.176zm-1.63-1.511a.6.6 0 0 0 .405.256l-.247 1.499a2.03 2.03 0 0 1-1.368-.84zm-.1-5.405c-.312.09-.507.146-.652.2a.7.7 0 0 0-.187.088l-.914-1.166c.2-.165.418-.265.634-.344c.208-.077.464-.15.755-.233zm-2.235 2.456c-.08-.318-.166-.663-.227-.966c-.054-.264-.118-.622-.083-.908l1.475.144c.003-.023-.002 0 .01.093q.014.126.054.322c.054.264.131.574.213.901zm1.396-2.168a.67.67 0 0 0-.23.438l-1.476-.144c.07-.566.348-1.095.792-1.46zm.474-1.743c.29-.083.547-.157.763-.203a2 2 0 0 1 .71-.04l-.248 1.498a.6.6 0 0 0-.203.023c-.15.032-.346.088-.657.177zm1.918 2.453a13 13 0 0 0-.189-.707a1 1 0 0 0-.1-.235l1.211-.915c.144.202.233.42.305.644c.07.217.136.486.214.8zm-.446-2.697a2.04 2.04 0 0 1 1.368.84l-1.21.915a.6.6 0 0 0-.405-.256zm-2.439 4.676l-5.972 1.714l-.364-1.455l5.972-1.715zm-5.817 2.333l5.972-1.714l.364 1.455l-5.972 1.714z"></svg:path>`,
})
export class SolarDumbbellsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEarthBrokenIcon],svg[solar-earth-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.4 1.4 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"></svg:path><svg:path stroke-linecap="round" d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"></svg:path><svg:path stroke-linecap="round" d="M7 20.662A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"></svg:path></svg:g>`,
})
export class SolarEarthBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarElectricRefuelingBrokenIcon],svg[solar-electric-refueling-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16 22v-7M3 22v-4m0-4V8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h1c2.828 0 4.243 0 5.121.879C16 3.757 16 5.172 16 8v3"></svg:path><svg:path stroke-linejoin="round" d="M9.5 10L8 12.5h3L9.5 15"></svg:path><svg:path d="M17 22H2M19.5 4l1.233.986c.138.11.207.166.27.222a3 3 0 0 1 .992 2.066c.005.084.005.172.005.348V18.5a1.5 1.5 0 0 1-3 0v-.071c0-.79-.64-1.429-1.429-1.429H16"></svg:path><svg:path d="M22 8h-1.5A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423L22 14"></svg:path></svg:g>`,
})
export class SolarElectricRefuelingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnyCircleBrokenIcon],svg[solar-emoji-funny-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"></svg:path><svg:ellipse cx="14.509" cy="9.774" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"></svg:ellipse><svg:ellipse cx="8.714" cy="11.328" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4.928 4.927A9.95 9.95 0 0 1 9.412 2.34C14.746.91 20.23 4.077 21.659 9.411c1.43 5.335-1.736 10.818-7.07 12.248S3.77 19.922 2.34 14.588a9.95 9.95 0 0 1-.002-5.176"></svg:path></svg:g>`,
})
export class SolarEmojiFunnyCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnySquareBrokenIcon],svg[solar-emoji-funny-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.913 15.934c1.258.315 2.685.315 4.122-.07s2.673-1.099 3.605-2.001"></svg:path><svg:ellipse cx="14.509" cy="9.774" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 14.51 9.774)"></svg:ellipse><svg:ellipse cx="8.714" cy="11.328" fill="currentColor" rx="1" ry="1.5" transform="rotate(-15 8.714 11.328)"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.796 9.643c1.111 4.147 1.667 6.22.724 7.853s-3.016 2.19-7.163 3.3c-4.147 1.111-6.22 1.667-7.853.724s-2.19-3.016-3.3-7.163c-1.112-4.147-1.667-6.22-.724-7.853s3.016-2.19 7.163-3.3c4.147-1.112 6.22-1.667 7.853-.724c1.009.582 1.606 1.595 2.177 3.26"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m13 16l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path></svg:g>`,
})
export class SolarEmojiFunnySquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallBrokenIcon],svg[solar-end-call-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.008 12.895l-.75.02zm.016.63l.75-.018zm-1.37 1.857l-.2-.723zm-1.981.546l.2.723zm-2.623-1.96l-.75.018zM2 12l.75-.019zm9.85-4.995l.02-.75zm8.918 3.72a.75.75 0 1 0 1.016-1.104zm-4.775 2.38l.75-.019zm.01.397l.75-.019zm1.746 2l.13-.738zm2.004.353l.13-.739zm-7.79-4.354l.02-.75zm10.786 2.44a.75.75 0 1 0-1.5.037zM2.406 10.63l-.585-.47zm5.357-3.986a.75.75 0 1 0 .342 1.46zM4.724 9.536a.75.75 0 1 0-.835-1.247zm2.534 3.378l.016.63l1.5-.037l-.016-.63zm-.803 1.745l-1.982.546l.4 1.446l1.98-.546zm-3.655-.71l-.05-1.967l-1.499.038l.05 1.966zm9.03-6.193c5.22.138 7.9 2.013 8.938 2.97l1.016-1.104c-1.29-1.188-4.312-3.218-9.914-3.365zm3.413 5.369l.01.397l1.5-.038l-.01-.397zm2.376 3.117l2.004.352l.26-1.477l-2.004-.352zm-1.626-3.136l.75-.02v-.016l-.002-.02a1 1 0 0 0-.024-.166a1.6 1.6 0 0 0-.112-.33a2.2 2.2 0 0 0-.675-.807c-.686-.523-1.876-.94-3.947-.995l-.04 1.5c1.921.05 2.747.436 3.077.688c.16.121.21.216.225.246l.005.012l-.005-.046l-.001-.013v-.012c0-.001 0-.002.75-.021m-4.01-2.354c-2.065-.054-3.254.297-3.94.804c-.352.26-.557.55-.669.814a1.5 1.5 0 0 0-.114.46l-.002.076v.006c0 .001 0 .002.75-.017c.75-.018.75-.018.75-.016v.005l-.004.07q-.004.018.001.002a.5.5 0 0 1 .179-.193c.293-.217 1.082-.562 3.01-.511zm7.64 5.842c1.664.293 3.169-.953 3.126-2.653l-1.5.038c.019.721-.605 1.272-1.366 1.138zM2.751 11.982c-.01-.385.079-.681.24-.884l-1.17-.937c-.45.561-.585 1.244-.57 1.859zm12.502 1.54c.034 1.343 1.044 2.487 2.366 2.72l.26-1.477c-.636-.112-1.11-.668-1.126-1.28zm-10.78 1.683c-.796.22-1.652-.41-1.673-1.257l-1.5.038c.046 1.809 1.824 3.148 3.572 2.665zm2.801-1.66c.014.53-.319.976-.82 1.114l.4 1.446a2.61 2.61 0 0 0 1.92-2.598zm.83-5.44c1.05-.245 2.283-.387 3.726-.349l.04-1.5c-1.565-.04-2.927.112-4.107.388zm-5.112 2.993a7.7 7.7 0 0 1 1.732-1.562L3.89 8.289a9.2 9.2 0 0 0-2.068 1.872z"></svg:path>`,
})
export class SolarEndCallBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallRoundedBrokenIcon],svg[solar-end-call-rounded-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.917 10.503C19.56 9.04 16.807 7 12 7c-1.16 0-2.2.119-3.13.32M22 13.85c0 2.06-1.782 3.565-3.607 3.047l-1.34-.38C15.844 16.174 15 14.983 15 13.618c0 0 0-1.654-3-1.654s-3 1.653-3 1.654c0 1.365-.844 2.556-2.053 2.9l-1.34.38C3.782 17.414 2 15.91 2 13.85c0-1.237.277-2.477 1.083-3.347a10.2 10.2 0 0 1 2.55-1.985"></svg:path>`,
})
export class SolarEndCallRoundedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserBrokenIcon],svg[solar-eraser-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m5.505 11.41l.53.53zM3 14.952h-.75zm9.59 3.543l-.53-.53zM9.048 21v.75zM11.41 5.505l-.53-.53zm1.831 12.34a.75.75 0 0 0 1.06-1.061zM7.216 9.697a.75.75 0 1 0-1.06 1.061zm8.857 6.375a.75.75 0 1 0-1.06-1.06zm2.395-4.517a.75.75 0 1 0 1.064 1.056zm-12.433.384l5.905-5.905l-1.06-1.06l-5.905 5.904zm0 6.025c-.85-.85-1.433-1.436-1.812-1.933c-.367-.481-.473-.79-.473-1.08h-1.5c0 .749.312 1.375.78 1.99c.455.596 1.125 1.263 1.945 2.083zm-1.06-7.086c-.82.82-1.49 1.488-1.945 2.084c-.468.614-.78 1.24-.78 1.99h1.5c0-.29.106-.6.473-1.08c.38-.498.962-1.083 1.812-1.933zm7.085 7.086c-.85.85-1.435 1.433-1.933 1.813c-.48.366-.79.472-1.08.472v1.5c.75 0 1.376-.312 1.99-.78c.596-.455 1.264-1.125 2.084-1.945zm-7.085 1.06c.82.82 1.487 1.49 2.084 1.945c.614.468 1.24.78 1.989.78v-1.5c-.29 0-.599-.106-1.08-.473c-.497-.38-1.083-.962-1.933-1.812zm12.99-12.99c.85.85 1.433 1.436 1.813 1.933c.366.481.472.79.472 1.08h1.5c0-.749-.312-1.375-.78-1.99c-.455-.596-1.125-1.263-1.945-2.083zm1.06-1.06c-.82-.82-1.487-1.49-2.084-1.945c-.614-.468-1.24-.78-1.989-.78v1.5c.29 0 .599.106 1.08.473c.497.38 1.083.962 1.933 1.812zm-7.085 1.06c.85-.85 1.435-1.433 1.933-1.812c.48-.367.79-.473 1.08-.473v-1.5c-.75 0-1.376.312-1.99.78c-.596.455-1.264 1.125-2.084 1.945zm2.362 10.749L7.216 9.698l-1.06 1.061l7.085 7.085zm.71-1.772l-2.952 2.953l1.06 1.06l2.953-2.952zm4.52-2.4c.661-.666 1.206-1.236 1.582-1.772c.388-.553.636-1.125.636-1.792h-1.5c0 .26-.086.534-.364.931c-.291.415-.746.9-1.418 1.577z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 21h12"></svg:path></svg:g>`,
})
export class SolarEraserBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserCircleBrokenIcon],svg[solar-eraser-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m7.67 11.606l.53.53zM6 13.968h-.75zM10.032 18v.75zm1.574-10.33l-.53-.53zm1.045 8.403a.75.75 0 1 0 1.06-1.06zm-3.663-5.784a.75.75 0 1 0-1.061 1.06zm6.812 1.574L11.863 15.8l1.061 1.06l3.936-3.936zm-7.6.274L12.137 8.2l-1.061-1.06l-3.936 3.936zm0 3.663c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478c.316.414.777.873 1.319 1.414zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414c-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568c.24-.315.615-.692 1.186-1.263zm4.723 4.724c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571c.414-.316.872-.777 1.414-1.319zM7.14 16.86c.541.542 1 1.003 1.414 1.319c.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186zM15.8 8.2c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478c-.316-.414-.777-.873-1.319-1.414zm1.06 4.724c.542-.542 1.003-1 1.319-1.414c.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568c-.24.315-.615.692-1.186 1.263zm0-5.784c-.541-.542-1-1.003-1.414-1.319c-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264c.315.24.692.615 1.264 1.186zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571c-.414.316-.872.777-1.414 1.319zm1.574 6.812L8.988 10.29l-1.061 1.06l4.724 4.724z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarEraserCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserSquareBrokenIcon],svg[solar-eraser-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m7.67 11.606l.53.53zM6 13.968h-.75zM10.032 18v.75zm1.574-10.33l-.53-.53zm1.045 8.403a.75.75 0 1 0 1.06-1.06zm-3.663-5.784a.75.75 0 1 0-1.061 1.06zm6.812 1.574L11.863 15.8l1.061 1.06l3.936-3.936zm-7.6.274L12.137 8.2l-1.061-1.06l-3.936 3.936zm0 3.663c-.571-.572-.946-.949-1.186-1.264c-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478c.316.414.777.873 1.319 1.414zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414c-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568c.24-.315.615-.692 1.186-1.263zm4.723 4.724c-.571.571-.948.946-1.263 1.186c-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571c.414-.316.872-.777 1.414-1.319zM7.14 16.86c.541.542 1 1.003 1.414 1.319c.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264c-.315-.24-.692-.615-1.264-1.186zM15.8 8.2c.571.572.946.949 1.186 1.264c.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478c-.316-.414-.777-.873-1.319-1.414zm1.06 4.724c.542-.542 1.003-1 1.319-1.414c.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568c-.24.315-.615.692-1.186 1.263zm0-5.784c-.541-.542-1-1.003-1.414-1.319c-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264c.315.24.692.615 1.264 1.186zM12.137 8.2c.571-.571.948-.946 1.263-1.186c.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571c-.414.316-.872.777-1.414 1.319zm1.574 6.812L8.988 10.29l-1.061 1.06l4.724 4.724z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarEraserSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEuroBrokenIcon],svg[solar-euro-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15 6.803a6 6 0 1 0 0 10.395M5 10.5h5m-5 3h5"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarEuroBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExitBrokenIcon],svg[solar-exit-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 4.5H8c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v.5m6 9.5H8c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5V14M13.658 2.347c-2.162-.377-3.243-.565-3.95.062S9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067s1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505c.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689c-.476-.587-1.168-.875-2.29-1.126M12 11v2"></svg:path>`,
})
export class SolarExitBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExplicitBrokenIcon],svg[solar-explicit-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15 7h-5a1 1 0 0 0-1 1v4m6 5h-5a1 1 0 0 1-1-1v-4m0 0h6"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarExplicitBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExportBrokenIcon],svg[solar-export-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 20a8 8 0 0 1-8-8m16 0a7.99 7.99 0 0 1-3 6.245"></svg:path><svg:path stroke-linejoin="round" d="M12 14V4m0 0l3 3m-3-3L9 7"></svg:path></svg:g>`,
})
export class SolarExportBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessCircleBrokenIcon],svg[solar-expressionless-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16h6"></svg:path><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarExpressionlessCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessSquareBrokenIcon],svg[solar-expressionless-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16h6"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarExpressionlessSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeBrokenIcon],svg[solar-eye-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 4.46A9.8 9.8 0 0 1 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296A14.5 14.5 0 0 1 5 6.821"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path></svg:g>`,
})
export class SolarEyeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeClosedBrokenIcon],svg[solar-eye-closed-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.69 6.705a.75.75 0 0 0-1.38.59zm12.897 6.624l-.274-.698zm-6.546.409a.75.75 0 1 0-1.257-.818zm-2.67 1.353a.75.75 0 1 0 1.258.818zM22.69 7.295a.75.75 0 0 0-1.378-.59zM19 11.13l-.513-.547zm.97 2.03a.75.75 0 1 0 1.06-1.06zm-8.72 3.34a.75.75 0 0 0 1.5 0zm5.121-.591a.75.75 0 1 0 1.258-.818zm-10.84-4.25A.75.75 0 0 0 4.47 10.6zm-2.561.44a.75.75 0 0 0 1.06 1.06zM12 13.25c-3.224 0-5.539-1.605-7.075-3.26a13.6 13.6 0 0 1-1.702-2.28a12 12 0 0 1-.507-.946l-.022-.049l-.004-.01l-.001-.001L2 7l-.69.296h.001l.001.003l.003.006l.04.088q.039.088.117.243c.103.206.256.496.462.841c.41.69 1.035 1.61 1.891 2.533C5.54 12.855 8.224 14.75 12 14.75zm3.313-.62c-.97.383-2.071.62-3.313.62v1.5c1.438 0 2.725-.276 3.862-.723zm-7.529.29l-1.413 2.17l1.258.818l1.412-2.171zM22 7l-.69-.296h.001v.002l-.007.013l-.028.062a12 12 0 0 1-.64 1.162a13.3 13.3 0 0 1-2.15 2.639l1.027 1.094a14.8 14.8 0 0 0 3.122-4.26l.039-.085l.01-.024l.004-.007v-.003h.001v-.001zm-3.513 3.582c-.86.806-1.913 1.552-3.174 2.049l.549 1.396c1.473-.58 2.685-1.444 3.651-2.351zm-.017 1.077l1.5 1.5l1.06-1.06l-1.5-1.5zM11.25 14v2.5h1.5V14zm3.709-.262l1.412 2.171l1.258-.818l-1.413-2.171zm-10.49-3.14l-1.5 1.5L4.03 13.16l1.5-1.5z"></svg:path>`,
})
export class SolarEyeClosedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeScanBrokenIcon],svg[solar-eye-scan-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 15c0 3.771 0 4.657-1.172 5.828S17.771 22 14 22M10 2C6.229 2 4.343 2 3.172 3.172S2 5.229 2 9m10-2C9.073 7 7.08 8.562 5.892 9.94C5.297 10.63 5 10.975 5 12s.297 1.37.892 2.06C7.08 15.438 9.072 17 12 17s4.92-1.562 6.108-2.94c.595-.69.892-1.035.892-2.06s-.297-1.37-.892-2.06A9 9 0 0 0 16 8.125"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-linecap="round" d="M10 22H9m-7-7c0 3.771 0 4.657 1.172 5.828c.653.654 1.528.943 2.828 1.07M14 2h1m7 7c0-3.771 0-4.657-1.172-5.828c-.653-.654-1.528-.943-2.828-1.07"></svg:path></svg:g>`,
})
export class SolarEyeScanBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanCircleBrokenIcon],svg[solar-face-scan-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2.2 10A10.01 10.01 0 0 1 10 2.2M2.2 14a10.01 10.01 0 0 0 7.8 7.8M21.8 10A10.01 10.01 0 0 0 14 2.2M21.8 14a10.01 10.01 0 0 1-7.8 7.8"></svg:path></svg:g>`,
})
export class SolarFaceScanCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanSquareBrokenIcon],svg[solar-face-scan-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"></svg:path></svg:g>`,
})
export class SolarFaceScanSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskCircleBrokenIcon],svg[solar-facemask-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 20.5L17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarFacemaskCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskSquareBrokenIcon],svg[solar-facemask-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536c.974-.973 2.343-1.3 4.536-1.409"></svg:path><svg:ellipse cx="15" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.5 21.5L17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 6.5M7 15l-4.5-2M7 19l-3.5 1.5M17 15l4.5-2M17 19l3.5 1.5"></svg:path></svg:g>`,
})
export class SolarFacemaskSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFeedBrokenIcon],svg[solar-feed-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20.965 7c-.078-1.872-.328-3.02-1.137-3.828C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-3"></svg:path><svg:path d="M6 12c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16z"></svg:path><svg:path stroke-linecap="round" d="M7 6h5"></svg:path></svg:g>`,
})
export class SolarFeedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFerrisWheelBrokenIcon],svg[solar-ferris-wheel-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 11a2 2 0 1 1-2-2"></svg:path><svg:path d="M20.5 7.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-15-8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm0 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM12 2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"></svg:path><svg:path stroke-linecap="round" d="m18.5 22l-3.333-6M10.5 13l-5 9"></svg:path><svg:path d="M10.564 3.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 16.603a3 3 0 0 1-1.564-2.634V9.03A3 3 0 0 1 5.77 6.397z"></svg:path></svg:g>`,
})
export class SolarFerrisWheelBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaBrokenIcon],svg[solar-figma-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.667H8.667m3.333 0V2H8.667a3.333 3.333 0 0 0 0 6.667m3.333 0v6.666H8.667M12 8.667h3.333m-6.666 0a3.333 3.333 0 0 0 0 6.666m0 0A3.333 3.333 0 1 0 12 18.667m3.333-10a3.333 3.333 0 1 0 0 6.666a3.333 3.333 0 0 0 0-6.666m0 0a3.333 3.333 0 0 0 0-6.667"></svg:path>`,
})
export class SolarFigmaBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaFileBrokenIcon],svg[solar-figma-file-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4M5 11.5A1.5 1.5 0 0 1 6.5 10H8v3H6.5A1.5 1.5 0 0 1 5 11.5Zm0 3A1.5 1.5 0 0 1 6.5 13H8v3H6.5A1.5 1.5 0 0 1 5 14.5Zm0 3A1.5 1.5 0 0 1 6.5 16H8v1.5a1.5 1.5 0 0 1-3 0ZM8 10h1.5a1.5 1.5 0 0 1 0 3H8"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M11 14.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFigmaFileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileBrokenIcon],svg[solar-file-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path></svg:g>`,
})
export class SolarFileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCheckBrokenIcon],svg[solar-file-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16.5L7.333 18L10 15"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCorruptedBrokenIcon],svg[solar-file-corrupted-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path fill="currentColor" d="M14.004 21.25a.75.75 0 0 0 0 1.5zm-4.001 1.5a.75.75 0 0 0 0-1.5zM2.75 10a.75.75 0 0 0-1.5 0zm12.647-5.946l-.501.557zm3.96 3.563l.502-.558zm2.303 2.537l-.685.305zM3.172 20.828l.53-.53zm17.663 0l-.53-.53zM3.172 3.172l.53.53zm15.119 9.685l.416-.624zm3.43 0l-.416-.624zm-12.004 0l-.416-.624zm2.572 0l.416-.624zm-6.002 0l-.416.624zm-2.572 0l-.416-.624zm14.576 4l.416-.624zm3.43 0l.416.624zm-6.002 0l-.416-.624zm-3.43 0l.416-.624zm-2.572 0l-.416-.624zm6.002-4l-.416-.624zm-9.432 4l-.416.624zm-2.572 0l-.416-.624zm-.626.418l.416.624zm-.81 1.84l.729-.174zm19.693-2.117l.749.03zm.028-4.67l.75-.015zM2.214 18.072l.698.274zm-.208-5.83l.746-.084zm1.454.777l.344.666zM1.355 5.927a.75.75 0 0 0 1.493.146zM2.75 11.94V10h-1.5v1.94zm12.146-7.33l3.96 3.563l1.003-1.115l-3.96-3.563zm3.96 3.563c1.354 1.218 1.853 1.688 2.12 2.285l1.37-.61c-.427-.957-1.232-1.66-2.487-2.79zM10.032 2.75c1.583 0 2.18.012 2.712.216l.537-1.4c-.852-.328-1.78-.316-3.249-.316zm5.867.746c-1.086-.977-1.766-1.604-2.618-1.93l-.537 1.4c.533.204.982.592 2.152 1.645zM10.003 21.25c-1.908 0-3.263-.002-4.291-.14c-1.006-.135-1.586-.389-2.01-.812l-1.06 1.06c.748.75 1.697 1.081 2.87 1.239c1.151.155 2.626.153 4.49.153zm4 1.5c1.866 0 3.34.002 4.491-.153c1.173-.158 2.122-.49 2.87-1.238l-1.06-1.061c-.423.423-1.003.677-2.01.812c-1.027.138-2.383.14-4.29.14zm-3.97-21.5c-1.876 0-3.357-.002-4.513.153c-1.177.158-2.13.49-2.878 1.238l1.06 1.061c.423-.423 1.005-.677 2.017-.812c1.033-.138 2.396-.14 4.313-.14zm7.842 12.231c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-7.742 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-4.262 0c1.29.86 2.971.86 4.262 0L9.3 12.233a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm13.744 4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-4.262 0c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm6.002-4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-10.264 4c1.29.86 2.971.86 4.262 0L9.3 16.233a2.34 2.34 0 0 1-2.598 0zm6.002-4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.34 2.34 0 0 1-2.598 0zm-7.742 4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0zm-.626.418l.626-.418l-.832-1.248l-.626.417zm-1.956 1.39c.195.818.526 1.503 1.093 2.07l1.06-1.061c-.325-.325-.547-.74-.694-1.357zm19.673-2.322c-.077 1.864-.33 2.743-.918 3.331l1.06 1.06c1.03-1.028 1.279-2.447 1.357-4.33zm1.528-4.654c-.019-.992-.085-1.747-.404-2.464l-1.37.61c.187.421.256.912.274 1.882zm-.613 1.168c.386-.257.622-.695.613-1.168l-1.5.028a.13.13 0 0 1 .055-.108zm-19.464 3.17a7 7 0 0 0-.657.47a1.7 1.7 0 0 0-.5.677l1.396.55l.01-.019a.5.5 0 0 1 .071-.07c.098-.084.244-.182.512-.36zm.335 2.29a4 4 0 0 1-.103-.496c-.006-.066 0-.08.007-.098l-1.396-.549c-.217.554-.071 1.054.033 1.49zm19.129-1.46a.589.589 0 0 1-.915-.514l1.499.062a.911.911 0 0 0-1.416-.796zM1.25 11.94c0 .139-.001.277.01.385l1.492-.166l-.001-.039l-.001-.18zm2.049.293l-.15.1c-.036.023-.042.025-.034.02l.69 1.333c.096-.05.21-.128.326-.205zm-2.038.092a1.75 1.75 0 0 0 2.543 1.361l-.689-1.332a.25.25 0 0 1-.363-.195zm1.587-6.252c.121-1.234.383-1.9.854-2.371l-1.06-1.06c-.835.834-1.152 1.919-1.287 3.285z"></svg:path></svg:g>`,
})
export class SolarFileCorruptedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileDownloadBrokenIcon],svg[solar-file-download-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 13.5v5m0 0l2-1.875m-2 1.875l-2-1.875"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileDownloadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileFavouriteBrokenIcon],svg[solar-file-favourite-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4M8.146 13.023C8.526 12.34 8.716 12 9 12s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.266.303s-.192-.567-.116-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileFavouriteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLeftBrokenIcon],svg[solar-file-left-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 16H6m0 0l1.875-2M6 16l1.875 2"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileLeftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRemoveBrokenIcon],svg[solar-file-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6 18l3-3m0 3l-3-3"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRightBrokenIcon],svg[solar-file-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16h5m0 0l-1.875-2M11 16l-1.875 2"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSendBrokenIcon],svg[solar-file-send-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 18.5v-5m0 0l-2 1.875m2-1.875l2 1.875"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileSendBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSmileBrokenIcon],svg[solar-file-smile-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:ellipse cx="17" cy="14.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17.5a5.41 5.41 0 0 0 6 0"></svg:path><svg:ellipse cx="7" cy="14.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileSmileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileTextBrokenIcon],svg[solar-file-text-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 14.5h8M6 18h5.5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M13 2.5V5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h4"></svg:path><svg:path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0zm18.5 4a.75.75 0 0 0 1.5 0zm-5.857-9.946l-.502.557zm3.959 3.563l-.502.557zm2.302 2.537l-.685.305zM3.172 20.828l.53-.53zm17.656 0l-.53-.53zM1.355 5.927a.75.75 0 0 0 1.493.146zm21.29 12.146a.75.75 0 1 0-1.493-.146zM14 21.25h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.437V14h1.5v-.437zM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79zM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645zM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153zM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289zM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14zM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285z"></svg:path></svg:g>`,
})
export class SolarFileTextBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFilterBrokenIcon],svg[solar-filter-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20.058 9.723c.948-.534 1.423-.801 1.682-1.232c.26-.43.26-.949.26-1.987v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986s.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49"></svg:path>`,
})
export class SolarFilterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFiltersBrokenIcon],svg[solar-filters-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12 20.283A6 6 0 1 0 17.5 10"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 2.803A6 6 0 1 1 6.341 6"></svg:path><svg:path fill="currentColor" d="M8 22v-.75zm-6-6h-.75zm.153 3.375a.75.75 0 1 0 1.299-.75zm4.097 1.576a.75.75 0 0 0-.5 1.415zm7-4.951c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 14.75 16zm-10.5 0a5.25 5.25 0 0 1 3.937-5.085l-.374-1.452A6.75 6.75 0 0 0 1.25 16zm10.156-1.874c.222.58.344 1.212.344 1.874h1.5c0-.848-.157-1.66-.443-2.41zm-9.454 4.498A5.2 5.2 0 0 1 2.75 16h-1.5c0 1.228.329 2.382.903 3.375zM8 21.25a5.2 5.2 0 0 1-1.75-.299l-.5 1.415A6.7 6.7 0 0 0 8 22.75z"></svg:path></svg:g>`,
})
export class SolarFiltersBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireBrokenIcon],svg[solar-fire-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 13.111C3 20.222 8.289 22 10.933 22c1.354 0 3.315-.357 5.067-1.39M18.72 18c.782-1.246 1.28-2.848 1.28-4.889c0-4.527-2.835-7.76-5.398-9.613C13.444 2.66 12 3.58 12 5.01v.323c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971A7.5 7.5 0 0 0 3.97 9.5"></svg:path><svg:path d="M8 18.445C8 21.289 10.489 22 11.733 22c1.09 0 3.267-.711 3.267-3.555c0-1.102-.59-1.845-1.16-2.274c-.398-.299-.957-.03-1.094.449c-.178.624-.823 1.016-1.152.456c-.3-.512-.3-1.28-.3-1.743c0-.636-.64-1.048-1.155-.674C9.106 15.409 8 16.68 8 18.445Z"></svg:path></svg:g>`,
})
export class SolarFireBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireMinimalisticBrokenIcon],svg[solar-fire-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16 19.997A8.4 8.4 0 0 1 12 21c-4.418 0-8-3.356-8-7.496c0-1.131.15-2.192.405-3.176m14.771 6.493c.528-1 .824-2.126.824-3.317c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534A14.6 14.6 0 0 0 6 6.647"></svg:path>`,
})
export class SolarFireMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireSquareBrokenIcon],svg[solar-fire-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.558 15c.277-.643.442-1.414.442-2.333c0-2.611-1.54-4.505-3-5.635c-.748-.58-1.706.021-1.706.968c0 .643-.289 1.713-.873 2.501c-.64.861-1.465.001-1.523-1.07c-.026-.49-.534-.662-.942-.391C8.063 9.633 7 10.81 7 12.667C7 16.933 10.111 18 11.667 18a6 6 0 0 0 3.022-.86"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarFireSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlag2BrokenIcon],svg[solar-flag-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 22v-8m0 0l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.335l-1.56-2.601c-.342-.57-.513-.854-.553-1.163a1.5 1.5 0 0 1 0-.39c.04-.309.211-.594.553-1.163l1.278-2.13a.73.73 0 0 0-.803-1.085a7.3 7.3 0 0 1-4.482-.304l-.413-.165a8.7 8.7 0 0 0-4.924-.452L5 4m0 10v-3m0-7V2m0 2v3"></svg:path>`,
})
export class SolarFlag2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlagBrokenIcon],svg[solar-flag-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 22v-8m0 0l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4m0 10v-3m0-7V2m0 2v3"></svg:path>`,
})
export class SolarFlagBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlameBrokenIcon],svg[solar-flame-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.37 8c.992-1.525 1.974-3.09 2.586-4.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15c0 1.174-.2 2.166-.53 3M5.466 11C4.613 12.454 4 13.813 4 15c0 3.107 2.246 5.309 4.081 6.372c.421.243.83-.265.61-.698c-.486-.953-.958-2.185-.958-3.174c0-1.371 1.045-2.473 1.792-3.18c.191-.181.491-.179.657.026c.308.38.616.862.924 1.252a.412.412 0 0 0 .677-.037c.986-1.52 1.215-3.458 1.268-4.907c.016-.438.528-.653.821-.328C15.156 11.746 16.8 14.05 16.8 16c0 1.816-1.018 3.746-1.898 5.012c-.258.37.025.873.457.739a7 7 0 0 0 1.606-.74"></svg:path>`,
})
export class SolarFlameBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashDriveBrokenIcon],svg[solar-flash-drive-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m19.83 10.441l.535.526zm-2.069 1.033a.75.75 0 1 0 1.07 1.052zm2.07-7.27l-.535.527zM22 7.324h.75zm-8.307-3.118l.535.526zM16.762 2v.75zm-5.297 3.4a.75.75 0 0 0 1.07 1.051zm7.83 4.515l-1.534 1.559l1.07 1.052l1.534-1.559zm0-5.184c.739.75 1.238 1.26 1.563 1.692c.31.414.392.67.392.9h1.5c0-.683-.28-1.252-.693-1.8c-.398-.532-.984-1.124-1.692-1.844zm1.07 6.236c.708-.72 1.294-1.312 1.692-1.843c.413-.55.693-1.118.693-1.801h-1.5c0 .23-.081.486-.392.9c-.325.432-.824.942-1.562 1.692zm-6.137-6.236c.738-.75 1.24-1.258 1.664-1.587c.408-.316.654-.394.87-.394v-1.5c-.683 0-1.249.29-1.789.708c-.523.406-1.106 1.001-1.814 1.72zm6.137-1.052c-.708-.72-1.292-1.315-1.815-1.72c-.54-.42-1.105-.709-1.788-.709v1.5c.215 0 .461.078.869.394c.425.33.926.837 1.665 1.587zm-7.206 0l-1.694 1.72l1.07 1.052l1.693-1.72z"></svg:path><svg:path fill="currentColor" d="M9.857 22v.75zm4.84-4.552a.75.75 0 0 0 1.06 1.06zm3.785-4.073h.75zM6.022 8.772l.53.53zm-.767.767l-.53-.53zm7.213 12.116a.75.75 0 1 0-.936-1.172zM5.785 10.07l.767-.767l-1.06-1.061l-.768.767zm-1.06 9.205c1.07 1.07 1.924 1.927 2.684 2.507c.778.594 1.544.968 2.448.968v-1.5c-.444 0-.894-.169-1.538-.66c-.661-.505-1.434-1.276-2.534-2.375zm9.972-9.972c1.1 1.1 1.87 1.872 2.375 2.534c.492.644.66 1.094.66 1.538h1.5c0-.904-.374-1.67-.967-2.448c-.58-.76-1.437-1.615-2.507-2.685zm1.06 9.205c1.07-1.07 1.928-1.924 2.508-2.685c.593-.777.967-1.544.967-2.448h-1.5c0 .444-.168.894-.66 1.538c-.505.662-1.275 1.435-2.375 2.535zM6.553 9.303c1.1-1.1 1.873-1.87 2.534-2.375c.645-.492 1.095-.66 1.539-.66v-1.5c-.904 0-1.67.374-2.449.967c-.76.58-1.615 1.437-2.685 2.507zm9.206-1.061c-1.07-1.07-1.925-1.927-2.685-2.507c-.778-.593-1.544-.967-2.448-.967v1.5c.444 0 .894.168 1.538.66c.662.504 1.434 1.275 2.534 2.375zm-11.034.767c-1.07 1.07-1.926 1.925-2.507 2.685c-.593.778-.967 1.544-.967 2.448h1.5c0-.444.168-.894.66-1.538c.505-.662 1.275-1.434 2.375-2.534zm1.061 9.206c-1.1-1.1-1.87-1.873-2.375-2.534c-.492-.645-.66-1.095-.66-1.539h-1.5c0 .904.374 1.67.967 2.448c.58.76 1.437 1.615 2.507 2.685zm5.747 2.268c-.719.575-1.2.767-1.675.767v1.5c.968 0 1.777-.428 2.611-1.095zm-5.748-6.871a.75.75 0 0 0-1.06 1.06zm3.542 5.664a.75.75 0 0 0 1.06-1.06zm-4.603-4.603l4.603 4.603l1.06-1.06l-4.602-4.604z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m18.718 7.403l-.708.707m-1.414-2.828l-.707.707"></svg:path></svg:g>`,
})
export class SolarFlashDriveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightBrokenIcon],svg[solar-flashlight-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 2h1c.943 0 1.414 0 1.707.293S20 3.057 20 4v.172c0 .408 0 .613-.076.796s-.22.329-.51.618l-3.242 3.242c-.578.578-.867.868-1.02 1.235c-.152.368-.152.776-.152 1.594V19c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C13.398 22 12.932 22 12 22v0c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C9 20.398 9 19.932 9 19v-7.343c0-.818 0-1.226-.152-1.594c-.152-.367-.442-.657-1.02-1.235L4.586 5.586c-.29-.29-.434-.434-.51-.618C4 4.785 4 4.58 4 4.172V4c0-.943 0-1.414.293-1.707S5.057 2 6 2h7m2 8H9m3 3v2M4.5 5h15"></svg:path>`,
})
export class SolarFlashlightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOnBrokenIcon],svg[solar-flashlight-on-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 22v-4.343c0-.818 0-1.226.152-1.594c.153-.367.442-.656 1.02-1.235l3.242-3.242c.29-.29.434-.434.51-.617c.076-.184.076-.389.076-.797V10c0-.943 0-1.414-.293-1.707S18.943 8 18 8h-1M9 22v-4.343c0-.818 0-1.226-.152-1.594c-.152-.367-.442-.656-1.02-1.235l-3.242-3.242c-.29-.29-.434-.434-.51-.617C4 10.785 4 10.58 4 10.172V10c0-.943 0-1.414.293-1.707S5.057 8 6 8h7m2 8H9m-4.5-5h15M12 5V2M8 5L6 3m10 2l2-2m-6 16v2"></svg:path>`,
})
export class SolarFlashlightOnBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipHorizontalBrokenIcon],svg[solar-flip-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 8V5.886c0-1.702 0-2.553.542-2.832c.543-.28 1.235.216 2.62 1.205l1.582 1.13c.616.44.924.66 1.09.982C8 6.694 8 7.073 8 7.83v8.34c0 .757 0 1.136-.166 1.459s-.474.543-1.09.983l-1.582 1.13c-1.385.988-2.077 1.483-2.62 1.204C2 20.666 2 19.816 2 18.114V12m20 0V5.886c0-1.702 0-2.553-.542-2.832c-.543-.28-1.235.216-2.62 1.205l-1.582 1.13c-.616.44-.924.66-1.09.982C16 6.694 16 7.073 16 7.83v8.34c0 .757 0 1.136.166 1.459s.474.543 1.09.983l1.581 1.13c1.386.988 2.078 1.483 2.62 1.204s.543-1.13.543-2.832v-2.057M12 14v-4m0-4V2m0 20v-4"></svg:path>`,
})
export class SolarFlipHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalBrokenIcon],svg[solar-flip-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 22H5.886c-1.702 0-2.553 0-2.832-.542c-.28-.543.215-1.235 1.205-2.62l1.13-1.582c.439-.616.659-.924.982-1.09S7.073 16 7.83 16h8.341c.757 0 1.135 0 1.458.166c.324.166.544.474.983 1.09l1.13 1.581c.99 1.386 1.484 2.078 1.205 2.62c-.28.543-1.13.543-2.833.543H12m0-20H5.886c-1.702 0-2.553 0-2.832.542c-.28.543.215 1.235 1.205 2.62l1.13 1.582c.439.616.659.924.982 1.09S7.073 8 7.83 8h8.341c.757 0 1.135 0 1.458-.166c.324-.166.544-.474.983-1.09l1.13-1.582c.99-1.385 1.484-2.077 1.205-2.62C20.666 2 19.816 2 18.113 2h-2.056M14 12h-4m-4 0H2m20 0h-4"></svg:path>`,
})
export class SolarFlipVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampBrokenIcon],svg[solar-floor-lamp-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 18v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207l2.532-3.241M2.78 10.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898a2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498"></svg:path><svg:path stroke-linecap="round" d="M12 18v-1.063c0-1.282.59-2.49 1.597-3.272l3.881-2.774m3.743-.207l-2.532-3.241m2.532 3.241c.35.448.274 1.118-.26 1.305a3.05 3.05 0 0 1-3.483-1.098m3.743-.207a2.076 2.076 0 0 0 .34-2.898a2.033 2.033 0 0 0-2.872-.343m0 0c-.35-.448-1.013-.53-1.318-.05a3.12 3.12 0 0 0 .107 3.498M9 22h6m-3 0v-9m0-6v3"></svg:path><svg:path d="M12 7a3 3 0 0 0 2.836-2.018C15.016 4.46 14.552 4 14 4h-4c-.552 0-1.016.46-.836.982A3 3 0 0 0 12 7Zm0-5a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z"></svg:path></svg:g>`,
})
export class SolarFloorLampBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampMinimalisticBrokenIcon],svg[solar-floor-lamp-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6m-3 0v-9m0-5v2"></svg:path><svg:path d="M12 8c2.337 0 4.3-1.282 4.848-3.016C17.014 4.458 16.552 4 16 4H8c-.552 0-1.014.458-.847.984C7.7 6.718 9.663 8 12 8Zm0-6c1.657 0 3 .895 3 2H9c0-1.105 1.343-2 3-2Z"></svg:path><svg:path stroke-linecap="round" d="M12 19v-1.063a4.14 4.14 0 0 0-1.597-3.272l-3.881-2.774m-3.743-.207l2.532-3.241M2.78 11.684c-.35.448-.274 1.118.26 1.305a3.05 3.05 0 0 0 3.483-1.098m-3.743-.207a2.076 2.076 0 0 1-.34-2.898a2.033 2.033 0 0 1 2.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 0 1-.107 3.498"></svg:path></svg:g>`,
})
export class SolarFloorLampMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFogBrokenIcon],svg[solar-fog-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12.353c0 1.39-.508 2.663-1.351 3.647M14.38 7.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .82.236 1.586.645 2.235m4.471-6.391a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20 8.061"></svg:path><svg:path stroke-linejoin="round" d="M8 22h8M5 19h6m8 0h-4M2 16h20"></svg:path></svg:g>`,
})
export class SolarFogBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolder2BrokenIcon],svg[solar-folder-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 11H2m20 .798c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path>`,
})
export class SolarFolder2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderBrokenIcon],svg[solar-folder-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 10h-5m9 1.798c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path>`,
})
export class SolarFolderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCheckBrokenIcon],svg[solar-folder-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 11.798c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path><svg:path stroke-linejoin="round" d="m10 13.5l1.333 1.5L14 12"></svg:path></svg:g>`,
})
export class SolarFolderCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCloudBrokenIcon],svg[solar-folder-cloud-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12.952 11.885a2.45 2.45 0 0 1 1.51-.004m-4.415.972a2 2 0 0 0-.333-.03c-.946 0-1.714.712-1.714 1.589S8.768 16 9.714 16h4C14.977 16 16 15.052 16 13.882c0-.927-.643-1.714-1.538-2.001m-4.415.972a2 2 0 0 1-.142-.735c0-1.17 1.023-2.118 2.286-2.118c1.175 0 2.144.823 2.271 1.88m-4.415.973c.225.041.435.123.62.238"></svg:path><svg:path d="M22 11.798c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path></svg:g>`,
})
export class SolarFolderCloudBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderErrorBrokenIcon],svg[solar-folder-error-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10.5 15l3-3m0 3l-3-3m11.5-.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path>`,
})
export class SolarFolderErrorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteBookmarkBrokenIcon],svg[solar-folder-favourite-bookmark-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 6v4.853c0 .29 0 .435-.095.494s-.224-.007-.484-.136l-1.242-.622c-.088-.043-.132-.065-.179-.065s-.091.022-.179.065l-1.242.622c-.26.13-.39.194-.484.136c-.095-.06-.095-.204-.095-.494V6"></svg:path><svg:path stroke-linecap="round" d="M22 11.798c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path></svg:g>`,
})
export class SolarFolderFavouriteBookmarkBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteStarBrokenIcon],svg[solar-folder-favourite-star-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.146 11.023c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path stroke-linecap="round" d="M22 11.798c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path></svg:g>`,
})
export class SolarFolderFavouriteStarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderOpenBrokenIcon],svg[solar-folder-open-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 11.5V9m16 2.5V9.348c0-1.974 0-2.961-.616-3.603a2 2 0 0 0-.18-.168C18.52 5 17.469 5 15.363 5h-.3c-.922 0-1.384 0-1.814-.115a3.3 3.3 0 0 1-.678-.263c-.391-.204-.717-.51-1.37-1.122l-.44-.413a7 7 0 0 0-.443-.397a3.3 3.3 0 0 0-1.745-.677C8.424 2 8.27 2 7.96 2c-.706 0-1.06 0-1.353.052C5.312 2.281 4.3 3.23 4.055 4.444c-.03.153-.044.322-.05.556C4 5.188 4 5.417 4 5.712M10 17h4"></svg:path><svg:path d="M10 11H8.705c-2.667 0-4 0-4.826.763a3 3 0 0 0-.54.67c-.578.977-.34 2.335.138 5.05c.343 1.956.515 2.934 1.11 3.582q.232.254.515.445c.723.49 1.683.49 3.603.49h6.59c1.92 0 2.88 0 3.603-.49q.282-.191.515-.445c.595-.648.767-1.626 1.11-3.581c.477-2.716.716-4.074.138-5.051a3 3 0 0 0-.54-.67C19.296 11 17.962 11 15.295 11H14"></svg:path></svg:g>`,
})
export class SolarFolderOpenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderPathConnectBrokenIcon],svg[solar-folder-path-connect-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16.5 7.5h-3M22 20h-8M2 20h8m2-2v-3"></svg:path><svg:circle cx="12" cy="20" r="2"></svg:circle><svg:path stroke-linecap="round" d="M5 5.217c0-.573 0-.86.049-1.099c.213-1.052 1.1-1.874 2.232-2.073C7.538 2 7.847 2 8.465 2c.27 0 .406 0 .536.011c.56.049 1.093.254 1.526.587c.1.078.196.167.388.344l.385.358c.571.53.857.795 1.198.972q.284.146.594.228c.377.1.78.1 1.588.1h.261c1.843 0 2.765 0 3.363.5q.083.07.157.146c.439.453.52 1.104.536 2.254m-.003 3.6c-.025 1.612-.154 2.526-.814 3.139c-.82.761-2.14.761-4.78.761h-2.8c-2.64 0-3.96 0-4.78-.761C5 13.477 5 12.25 5 9.8V8.5"></svg:path></svg:g>`,
})
export class SolarFolderPathConnectBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderSecurityBrokenIcon],svg[solar-folder-security-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="13" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M11.25 17.5a.75.75 0 0 0 1.5 0zm0-2.5v2.5h1.5V15z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 11.798c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path></svg:g>`,
})
export class SolarFolderSecurityBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderWithFilesBrokenIcon],svg[solar-folder-with-files-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 10h-5"></svg:path><svg:path d="M10 3h6.5c.464 0 .697 0 .892.026a3 3 0 0 1 2.582 2.582c.026.195.026.428.026.892"></svg:path><svg:path stroke-linecap="round" d="M22 11.798c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path></svg:g>`,
})
export class SolarFolderWithFilesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFootballBrokenIcon],svg[solar-football-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m9.198 11.958l.716-.221zm.348-1.09l-.456-.595zm.373 3.427l-.717.221zm4.139 0l-.717-.221zm.373-3.427l-.455.596zm.348 1.09l.717.221zm-2.184-2.494l.455-.596zm-1.213 0l.456.595zm8.803 8.286a.75.75 0 0 0 0-1.5zm-5.406 1.985l-.711-.237zm-1.299 1.528a.75.75 0 0 0 1.423.474zM3.998 16.25a.75.75 0 0 0 0 1.5zm5.405 3.485l.712-.237zm-.124 2.002a.75.75 0 0 0 1.423-.474zm-1.058-4.36l-.44.609zM5.556 5.46a.75.75 0 1 0-1.449.388zM5.25 7.215l-.725.194zM3.592 11.59l-.414-.626zm-1.965.399a.75.75 0 1 0 .828 1.251zm18.307-6.14a.75.75 0 1 0-1.449-.388zm-1.143 1.367l-.724-.194zm1.658 4.374l-.413.625zm1.137 1.65a.75.75 0 1 0 .828-1.251zM16.09 3.836a.75.75 0 1 0-.864-1.226zm-1.752.319l.432.612zm-4.672-.051l-.446.603zm-1.05-1.707a.75.75 0 1 0-.891 1.206zm6.163 8.97l-.716.222zm-5.581 0l.716.222zm2.941-1.308l1.837 1.405l.911-1.191l-1.837-1.405zm1.924 1.678l-.722 2.337l1.434.442l.721-2.337zm-.96 2.513h-2.23v1.5h2.23zm-2.467-.176l-.722-2.337l-1.433.442l.721 2.337zM10 11.464l1.837-1.405l-.911-1.191l-1.837 1.405zm10.184 4.786H18.57v1.5h1.615zm-6.117 3.248l-.588 1.765l1.423.474l.588-1.765zm4.502-3.248c-.678 0-1.25-.001-1.714.052c-.485.055-.93.176-1.333.467l.878 1.217c.12-.087.284-.155.625-.194c.36-.04.832-.042 1.544-.042zm-3.08 3.722c.226-.676.376-1.124.53-1.453c.144-.312.261-.447.38-.533l-.877-1.217c-.404.292-.658.675-.864 1.118c-.197.425-.377.968-.591 1.611zM3.999 17.75h1.615v-1.5H3.998zm4.694 2.222l.587 1.765l1.423-.474l-.587-1.765zm-3.08-2.222c.713 0 1.184.001 1.545.042c.34.04.505.107.625.194l.878-1.217c-.404-.29-.849-.412-1.333-.467c-.465-.053-1.037-.052-1.714-.052zm4.503 1.748c-.215-.643-.394-1.186-.591-1.611c-.206-.442-.46-.826-.864-1.118l-.878 1.217c.12.086.236.22.381.533c.153.33.303.777.529 1.453zM4.107 5.848l.418 1.561l1.45-.388l-.419-1.562zm-.929 5.115l-1.55 1.025l.827 1.251l1.55-1.025zm1.347-3.554c.184.689.305 1.145.359 1.504c.05.34.027.518-.025.656l1.403.532c.176-.466.177-.926.105-1.409c-.069-.463-.218-1.015-.393-1.67zm-.52 4.805c.566-.374 1.043-.688 1.402-.989c.374-.313.678-.659.855-1.124l-1.403-.532c-.052.138-.152.286-.416.507c-.278.233-.67.494-1.265.887zm14.48-6.754l-.418 1.561l1.449.388l.418-1.562zm1.55 6.754l1.552 1.025l.827-1.251l-1.551-1.025zm-1.968-5.193c-.175.656-.324 1.208-.393 1.671c-.072.483-.07.944.105 1.409l1.403-.532c-.052-.138-.075-.315-.025-.656c.054-.36.175-.815.359-1.504zm2.796 3.942c-.594-.393-.987-.654-1.265-.887c-.264-.22-.363-.369-.416-.507l-1.402.532c.176.465.48.811.854 1.124c.359.301.836.616 1.402.99zM15.226 2.61l-1.32.932l.864 1.225l1.32-.93zm-5.115.89L8.615 2.398l-.89 1.206L9.22 4.707zm3.794.042c-.582.41-.968.681-1.286.855c-.302.165-.475.204-.622.203l-.017 1.5c.498.005.93-.153 1.359-.387c.41-.225.877-.555 1.43-.946zM9.22 4.707c.546.403 1.005.743 1.41.977c.423.243.853.41 1.35.416l.017-1.5c-.148-.002-.32-.045-.618-.216c-.315-.181-.695-.46-1.268-.883zm4.756 6.757a.25.25 0 0 1 .087.125l1.433-.443a1.75 1.75 0 0 0-.609-.873zm.087.125a.25.25 0 0 1 0 .148l1.433.442a1.75 1.75 0 0 0 0-1.033zm4.13-2.447l-3.7 1.533l.573 1.386l3.702-1.533zm-5.143-.274a1.75 1.75 0 0 0-1.062-.36v1.5a.24.24 0 0 1 .151.052zm-1.062-.36c-.373 0-.748.12-1.061.36l.91 1.191a.25.25 0 0 1 .152-.05zm.75.75V5.35h-1.5v3.908zm.603 4.816a.25.25 0 0 1-.084.123l.928 1.178a1.75 1.75 0 0 0 .59-.859zm-.084.123a.25.25 0 0 1-.153.053v1.5c.402 0 .78-.138 1.081-.375zm3.272 2.69l-2.24-2.592l-1.135.982l2.24 2.591zm-5.656-2.637a.25.25 0 0 1-.153-.053l-.928 1.178c.3.237.679.375 1.081.375zm-.153-.053a.25.25 0 0 1-.084-.123l-1.434.442c.108.349.317.645.59.86zM8.81 17.84l2.036-2.592l-1.18-.926l-2.035 2.591zm1.104-6.104a.25.25 0 0 1 0-.148l-1.433-.443a1.75 1.75 0 0 0 0 1.033zm0-.148a.25.25 0 0 1 .087-.125l-.911-1.191a1.75 1.75 0 0 0-.609.874zm-.425-.912L5.852 9.144l-.583 1.382l3.637 1.533z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 6a9.95 9.95 0 0 1 4.072-3.193c5.078-2.17 10.952.188 13.122 5.265c2.169 5.078-.189 10.952-5.266 13.122c-5.078 2.169-10.952-.189-13.121-5.266a9.95 9.95 0 0 1-.735-5.122"></svg:path></svg:g>`,
})
export class SolarFootballBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenBrokenIcon],svg[solar-forbidden-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m18.5 5.5l-13 13M6.606 3.757c.867-.867 1.3-1.3 1.852-1.529S9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228c.552.229.986.662 1.853 1.53l2.849 2.848c.867.867 1.3 1.3 1.529 1.852S22 9.623 22 10.848v2.303c0 1.226 0 1.84-.228 2.39c-.229.552-.662.986-1.53 1.853l-2.848 2.849c-.867.867-1.3 1.3-1.852 1.529c-.551.228-1.165.228-2.39.228h-2.303c-1.226 0-1.84 0-2.39-.228c-.552-.229-.986-.662-1.853-1.53l-2.849-2.848c-.867-.867-1.3-1.3-1.529-1.852S2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39c.229-.552.662-.986 1.53-1.853"></svg:path>`,
})
export class SolarForbiddenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenCircleBrokenIcon],svg[solar-forbidden-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m18.5 5.5l-13 13M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path>`,
})
export class SolarForbiddenCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForward2BrokenIcon],svg[solar-forward-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 12l-5 5m5-5l-5-5m5 5H13m-3.5 0c-1.667 0-5-1-5-5"></svg:path>`,
})
export class SolarForward2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForwardBrokenIcon],svg[solar-forward-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 12l-5-5m5 5l-5 5m5-5H13m-3.5 0c-1.667 0-5 1-5 5"></svg:path>`,
})
export class SolarForwardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFridgeBrokenIcon],svg[solar-fridge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4 10v3c0 3.771 0 5.657 1.172 6.828S8.229 21 12 21s5.657 0 6.828-1.172S20 16.771 20 13v-3c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2S6.343 2 5.172 3.172C4.518 3.825 4.229 4.7 4.102 6"></svg:path><svg:path stroke-linejoin="round" d="M17 21v1h-1v-1m-8 0v1H7v-1"></svg:path><svg:path stroke-linecap="round" d="M20 11.5h-5m-11 0h7M17 7v2m0 5v2"></svg:path></svg:g>`,
})
export class SolarFridgeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFuelBrokenIcon],svg[solar-fuel-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.233v5.65c0 2.884 0 4.326-.879 5.221C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.896C2 20.21 2 18.767 2 15.884v-2.797c0-2.096 0-3.145.553-3.94c.554-.795 1.524-1.14 3.465-1.833l8-2.855c3.636-1.297 5.454-1.946 6.718-1.031c.688.497 1.001 1.305 1.144 2.572"></svg:path><svg:path d="M9 14c0-1.414 0-2.121.44-2.56C9.878 11 10.585 11 12 11s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C9 16.122 9 15.415 9 14Z"></svg:path><svg:path stroke-linecap="round" d="m15 11l1-1m-7 1l-1-1m7 7l1 1m-7-1l-1 1M5 7.06c0-1.305 0-1.957.338-2.407q.132-.175.302-.308C6.08 4 6.72 4 8 4h.818c.507 0 .761 0 .97.057a1.65 1.65 0 0 1 1.156 1.18"></svg:path></svg:g>`,
})
export class SolarFuelBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenBrokenIcon],svg[solar-full-screen-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172A3 3 0 0 0 2.585 4M2 10c0-.735 0-1.4.009-2M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10m-8 12c3.771 0 5.657 0 6.828-1.172a3 3 0 0 0 .587-.828M22 14c0 .736 0 1.4-.009 2"></svg:path>`,
})
export class SolarFullScreenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenCircleBrokenIcon],svg[solar-full-screen-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6 9.997c.014-1.706.11-2.647.73-3.267S8.29 6.014 9.997 6M6 14c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73m8.001-8.001c-.015-1.706-.11-2.647-.73-3.267S15.707 6.014 14 6m3.998 8c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarFullScreenCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenSquareBrokenIcon],svg[solar-full-screen-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6 9.997c.014-1.706.11-2.647.73-3.267S8.29 6.014 9.997 6M6 14c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73m8.001-8.001c-.015-1.706-.11-2.647-.73-3.267S15.707 6.014 14 6m3.998 8c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarFullScreenSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryAddBrokenIcon],svg[solar-gallery-add-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5m-6-13h3.5m0 0H22m-3.5 0V9m0-3.5V2"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M12 2C7.286 2 4.929 2 3.464 3.464c-.424.425-.726.925-.94 1.536"></svg:path></svg:g>`,
})
export class SolarGalleryAddBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryBrokenIcon],svg[solar-gallery-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="16" cy="8" r="2"></svg:circle><svg:path stroke-linecap="round" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarGalleryBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCheckBrokenIcon],svg[solar-gallery-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m13 7l2 2l5-5"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M12 2C7.286 2 4.929 2 3.464 3.464c-.424.425-.726.925-.94 1.536"></svg:path></svg:g>`,
})
export class SolarGalleryCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCircleBrokenIcon],svg[solar-gallery-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="9" r="2"></svg:circle><svg:path stroke-linecap="round" d="m20 17.6l-2.224-2a3 3 0 0 0-3.732-.225l-.298.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104L2.28 12.253"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarGalleryCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryDownloadBrokenIcon],svg[solar-gallery-download-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path><svg:path stroke-linejoin="round" d="M17 11V2m0 9l3-3m-3 3l-3-3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M12 2C7.286 2 4.929 2 3.464 3.464c-.424.425-.726.925-.94 1.536"></svg:path></svg:g>`,
})
export class SolarGalleryDownloadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryEditBrokenIcon],svg[solar-gallery-edit-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path><svg:path d="m18.562 2.935l.417-.417a1.77 1.77 0 0 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669s1.669.834 1.669.834m-2.503-2.503L14.727 6.77c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116m7.8-4.212L17.23 9.273c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372m0 0l-.722.24a.477.477 0 0 1-.604-.603l.241-.722m1.085 1.085L13.265 9.65"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M12 2C7.286 2 4.929 2 3.464 3.464c-.424.425-.726.925-.94 1.536"></svg:path></svg:g>`,
})
export class SolarGalleryEditBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryFavouriteBrokenIcon],svg[solar-gallery-favourite-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M12 2C7.286 2 4.929 2 3.464 3.464c-.424.425-.726.925-.94 1.536"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path><svg:path fill="currentColor" d="m16.06 8.57l.492-.566zM18 3.968l-.532.529a.75.75 0 0 0 1.064 0zm1.94 4.602l-.492-.566zM18 9.606v-.75zm-1.448-1.602c-.486-.422-.952-.895-1.292-1.374c-.347-.49-.51-.914-.51-1.255h-1.5c0 .788.358 1.518.786 2.122c.435.614.999 1.175 1.533 1.639zM14.75 5.375c0-.933.42-1.404.834-1.557c.426-.156 1.13-.08 1.884.679l1.064-1.058c-1.045-1.05-2.342-1.442-3.466-1.028c-1.136.418-1.816 1.555-1.816 2.964zm5.682 3.761c.533-.464 1.097-1.025 1.532-1.639c.428-.604.786-1.334.786-2.122h-1.5c0 .341-.163.765-.51 1.255c-.34.48-.806.952-1.292 1.374zm2.318-3.76c0-1.41-.68-2.547-1.816-2.965c-1.124-.414-2.42-.023-3.466 1.028l1.064 1.058c.755-.76 1.458-.835 1.884-.679c.414.153.834.624.834 1.557zm-7.181 3.76c.756.658 1.36 1.22 2.431 1.22v-1.5c-.424 0-.615-.129-1.448-.852zm3.879-1.132c-.833.723-1.024.852-1.448.852v1.5c1.071 0 1.675-.562 2.432-1.22z"></svg:path></svg:g>`,
})
export class SolarGalleryFavouriteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryMinimalisticBrokenIcon],svg[solar-gallery-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="16" cy="8" r="2"></svg:circle><svg:path stroke-linecap="round" d="m5 13.307l.81-.753a2.3 2.3 0 0 1 3.24.108l2.647 2.81c.539.572 1.42.649 2.049.18a2.32 2.32 0 0 1 2.986.181L19 18"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarGalleryMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRemoveBrokenIcon],svg[solar-gallery-remove-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5M22 2l-6 6m0-6l6 6"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M12 2C7.286 2 4.929 2 3.464 3.464c-.424.425-.726.925-.94 1.536"></svg:path></svg:g>`,
})
export class SolarGalleryRemoveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRoundBrokenIcon],svg[solar-gallery-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="16" cy="8" r="2"></svg:circle><svg:path stroke-linecap="round" d="m2 10.154l.98-.141C9.96 9.01 15.925 15.03 14.858 22"></svg:path><svg:path stroke-linecap="round" d="m22 13.385l-.973-.135c-2.844-.394-5.417 1.022-6.742 3.25"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarGalleryRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGallerySendBrokenIcon],svg[solar-gallery-send-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path><svg:path stroke-linejoin="round" d="M17 2v9m0-9l3 3m-3-3l-3 3"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M12 2C7.286 2 4.929 2 3.464 3.464c-.424.425-.726.925-.94 1.536"></svg:path></svg:g>`,
})
export class SolarGallerySendBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryWideBrokenIcon],svg[solar-gallery-wide-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 13.438c0 3.77 0 5.656-1.172 6.828S17.771 21.438 14 21.438h-4c-3.771 0-5.657 0-6.828-1.172S2 17.209 2 13.438S2 7.78 3.172 6.609S6.229 5.438 10 5.438h4c3.771 0 5.657 0 6.828 1.171c.664.664.952 1.556 1.076 2.891"></svg:path><svg:path d="M3.988 6c.112-.931.347-1.574.837-2.063C5.765 3 7.279 3 10.307 3h3.211c3.028 0 4.541 0 5.482.937c.49.489.725 1.132.837 2.063"></svg:path><svg:circle cx="17.5" cy="9.938" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="m2 13.938l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.221l.299-.21a3 3 0 0 1 3.731.226l3.224 2.9"></svg:path></svg:g>`,
})
export class SolarGalleryWideBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGameboyBrokenIcon],svg[solar-gameboy-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 12c0 4.714 0 7.071-1.318 8.535S16.242 22 12 22s-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464c.876.974 1.17 2.343 1.268 4.536"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.112 9.949a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8s0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10h-3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 14v3M7 15.5h3"></svg:path><svg:path fill="currentColor" d="M16.333 13.833a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0m0 3.334a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0M14.667 15.5a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0m3.333 0a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0"></svg:path></svg:g>`,
})
export class SolarGameboyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadBrokenIcon],svg[solar-gamepad-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.22 8c-.689-2.184-1.792-3.365-3.13-3.84c-.38-.135-.788-.16-1.193-.16h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0l-.502-.355A4.24 4.24 0 0 0 7.715 4h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 19a2.74 2.74 0 0 0 1.53-.437c.915-.599 1.584-1.6 2.554-2.102a4.1 4.1 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.97.504 1.64 1.504 2.553 2.103c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581A35 35 0 0 0 21.918 12M7.5 9v3M6 10.5h3"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path></svg:g>`,
})
export class SolarGamepadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadChargeBrokenIcon],svg[solar-gamepad-charge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.22 8c-.689-2.184-1.792-3.365-3.13-3.84c-.38-.135-.788-.16-1.193-.16h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0l-.502-.355A4.24 4.24 0 0 0 7.715 4h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 19a2.74 2.74 0 0 0 1.53-.437c.915-.599 1.584-1.6 2.554-2.102a4.1 4.1 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.97.504 1.64 1.504 2.553 2.103c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581A35 35 0 0 0 21.918 12M12 22v-3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 16.5V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5M7.5 9v3M6 10.5h3"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path></svg:g>`,
})
export class SolarGamepadChargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadMinimalisticBrokenIcon],svg[solar-gamepad-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.5 11v3M7 12.5h3m-7.377 2.619l-.543 2.258c-.381 1.587.633 3.175 2.264 3.546c1.376.312 2.791-.342 3.413-1.576l.128-.255c.57-1.133 1.754-1.852 3.051-1.852h2.128c1.297 0 2.48.719 3.051 1.852l.128.255c.622 1.234 2.037 1.888 3.413 1.575c1.631-.37 2.645-1.958 2.264-3.545l-1.085-4.517c-.613-2.553-.92-3.83-1.79-4.666q-.331-.319-.725-.56C17.284 7 15.937 7 13.243 7h-2.486c-2.694 0-4.041 0-5.077.634q-.394.241-.725.56c-.627.603-.961 1.434-1.328 2.806M12 7V6a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V3"></svg:path><svg:path fill="currentColor" d="M16 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarGamepadMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadNoChargeBrokenIcon],svg[solar-gamepad-no-charge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.404 17.247c.184.584.954 1.753 2.57 1.753a3.2 3.2 0 0 0 1.392-.316c1.274-.609 1.604-2.17 1.628-3.581A35 35 0 0 0 21.918 12M7.596 17.247C7.412 17.83 6.642 19 5.026 19a3.2 3.2 0 0 1-1.392-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16C6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78l.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16c1.337.475 2.44 1.656 3.13 3.84M14 17l-4 4m0-4l4 4M7.5 9v3M6 10.5h3"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path></svg:g>`,
})
export class SolarGamepadNoChargeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadOldBrokenIcon],svg[solar-gamepad-old-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#solarGamepadOldBroken0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10v4m-2-2h4"></svg:path><svg:path fill="currentColor" d="M16 10.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 4V3a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V0m7 12c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12s0-4.2.545-5.27A5 5 0 0 1 4.73 4.545C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185c.188.37.311.778.392 1.27"></svg:path></svg:g><svg:defs><svg:clippath id="solarGamepadOldBroken0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarGamepadOldBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGarageBrokenIcon],svg[solar-garage-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 22H2m1 0V11.347a3 3 0 0 1 1.007-2.242M21 22v-6M7.253 6.22l2.754-2.448a3 3 0 0 1 3.986 0l6 5.333A3 3 0 0 1 21 11.347V12M9 18.5h6M6 22v-3m12 3v-6c0-1.886 0-2.828-.586-3.414S15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586c-.472.471-.564 1.174-.582 2.414M10 9h.5M14 9h-1.5M9 15.5h1.5m4.5 0h-2.5"></svg:path>`,
})
export class SolarGarageBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGasStationBrokenIcon],svg[solar-gas-station-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11 6H8c-.943 0-1.414 0-1.707.293S6 7.057 6 8s0 1.414.293 1.707S7.057 10 8 10h3c.943 0 1.414 0 1.707-.293S13 8.943 13 8s0-1.414-.293-1.707S11.943 6 11 6Z"></svg:path><svg:path stroke-linecap="round" d="M7 17h5m5 5H2M19.5 4l1.233.986c.138.11.207.166.27.222a3 3 0 0 1 .992 2.066c.005.084.005.172.005.348V18.5a1.5 1.5 0 0 1-3 0v-.071c0-.79-.64-1.429-1.429-1.429H16"></svg:path><svg:path stroke-linecap="round" d="M22 8h-1.5A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423L22 14m-6 8v-7M3 22v-4m0-4V8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h1c2.828 0 4.243 0 5.121.879C16 3.757 16 5.172 16 8v3"></svg:path></svg:g>`,
})
export class SolarGasStationBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostBrokenIcon],svg[solar-ghost-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12.3C22 6.613 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186a2.82 2.82 0 0 0 3.208 0l.353-.242a1.84 1.84 0 0 1 2.086 0l.353.242a2.82 2.82 0 0 0 3.208 0a2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591v-3.711"></svg:path></svg:g>`,
})
export class SolarGhostBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostSmileBrokenIcon],svg[solar-ghost-smile-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="9.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="9.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12.3C22 6.613 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186a2.82 2.82 0 0 0 3.208 0l.353-.242a1.84 1.84 0 0 1 2.086 0l.353.242a2.82 2.82 0 0 0 3.208 0a2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591v-3.711"></svg:path></svg:g>`,
})
export class SolarGhostSmileBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGiftBrokenIcon],svg[solar-gift-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12H2M12 2v20m1-10a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4"></svg:path><svg:path d="M12 10.035a3.25 3.25 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.25 3.25 0 0 1-3.15 2.46H12zm0 0a3.25 3.25 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.25 3.25 0 0 0 3.15 2.46H12z"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarGiftBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlassesBrokenIcon],svg[solar-glasses-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 16a4 4 0 1 1-4-4"></svg:path><svg:circle cx="6" cy="16" r="4"></svg:circle><svg:path stroke-linecap="round" d="m14 16.214l-.656-.234a4 4 0 0 0-2.688 0l-.656.234M2 16l.763-8.395c.115-1.264.173-1.896.543-2.363s.972-.668 2.176-1.07L6 4m16 12l-.763-8.395c-.115-1.264-.172-1.896-.542-2.363s-.973-.668-2.177-1.07L18 4"></svg:path></svg:g>`,
})
export class SolarGlassesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobalBrokenIcon],svg[solar-global-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path><svg:path d="M14.828 19.071c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12s-.104 2.614-.305 3.827M2 12h8m12 0h-8"></svg:path></svg:g>`,
})
export class SolarGlobalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobusBrokenIcon],svg[solar-globus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 9.687C22 6.633 20.672 3.888 18.562 2M4 16.562A10.3 10.3 0 0 0 11.687 20c4.156 0 7.738-2.458 9.37-6"></svg:path><svg:path d="M7 4.553c.585.552 1.79 2.063 1.931 3.684c.131 1.515 1.096 2.746 2.569 2.763c.566.006 1.139-.418 1.137-1.005c0-.182-.03-.367-.074-.538a1.14 1.14 0 0 1 .062-.79c.457-.978 1.357-1.241 2.07-1.772c.316-.236.604-.484.732-.684c.35-.553.702-1.658.526-2.211M19 11c-.22.62-.375 2.25-2.855 2.276c0 0-2.195 0-2.854 1.241c-.527.993-.22 2.07 0 2.483"></svg:path><svg:path stroke-linecap="round" d="M12 22v-2m0 2h-2m4 0h-2m-6.064-8.5A7 7 0 1 1 8.5 16.064"></svg:path></svg:g>`,
})
export class SolarGlobusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGolfBrokenIcon],svg[solar-golf-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.979 21.536C15.513 21.831 13.813 22 12 22c-5.523 0-10-1.567-10-3.5S6.477 15 12 15s10 1.567 10 3.5c0 .548-.36 1.066-1 1.527M12 18V2m0 1.5l5.422 2.711c1.561.78 2.342 1.171 2.342 1.789s-.78 1.008-2.342 1.789L12 12.5"></svg:path>`,
})
export class SolarGolfBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGpsBrokenIcon],svg[solar-gps-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12.5 14.959q-.245.04-.5.041a3 3 0 1 1 2.959-2.5M2 12h2m16 0h2M12 4V2m0 20v-2"></svg:path><svg:path d="M8 5.07A8 8 0 1 1 5.07 8"></svg:path></svg:g>`,
})
export class SolarGpsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphBrokenIcon],svg[solar-graph-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m7 14l1.797-2.156c.712-.855 1.068-1.282 1.536-1.282c.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282s.824-.427 1.536-1.282L17 10"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarGraphBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownBrokenIcon],svg[solar-graph-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7 10l2.293 2.293a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 1 1.414 0L17 14m0 0v-2.5m0 2.5h-2.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarGraphDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownNewBrokenIcon],svg[solar-graph-down-new-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 10l2.293 2.293a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 1 1.414 0L17 14m0 0v-2.5m0 2.5h-2.5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.44.441-.749.963-.964 1.606"></svg:path></svg:g>`,
})
export class SolarGraphDownNewBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewBrokenIcon],svg[solar-graph-new-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.44.441-.749.963-.964 1.606"></svg:path><svg:path stroke-linecap="round" d="m7 14l1.797-2.156c.712-.855 1.068-1.282 1.536-1.282c.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282s.824-.427 1.536-1.282L17 10"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarGraphNewBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewUpBrokenIcon],svg[solar-graph-new-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5"></svg:path><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.44.441-.749.963-.964 1.606"></svg:path></svg:g>`,
})
export class SolarGraphNewUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphUpBrokenIcon],svg[solar-graph-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarGraphUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHamburgerMenuBrokenIcon],svg[solar-hamburger-menu-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"></svg:path>`,
})
export class SolarHamburgerMenuBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandHeartBrokenIcon],svg[solar-hand-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.15 8.802l-.442.606zM12 3.106l-.508.552a.75.75 0 0 0 1.015 0zm1.85 5.696l.442.606zM12 9.676v.75zm-1.408-1.48c-.69-.503-1.427-1.115-1.983-1.76c-.574-.665-.859-1.254-.859-1.721h-1.5c0 1.017.578 1.954 1.223 2.701c.663.768 1.501 1.457 2.235 1.992zM7.75 4.715c0-1.059.52-1.663 1.146-1.873c.652-.22 1.624-.078 2.596.816l1.015-1.104C11.23 1.38 9.704.988 8.418 1.42C7.105 1.862 6.25 3.096 6.25 4.715zm6.542 4.693c.734-.534 1.572-1.224 2.235-1.992c.645-.747 1.223-1.684 1.223-2.701h-1.5c0 .467-.284 1.056-.859 1.721c-.556.645-1.292 1.257-1.982 1.76zm3.458-4.693c0-1.619-.855-2.853-2.167-3.295c-1.286-.432-2.813-.04-4.09 1.134l1.015 1.104c.972-.894 1.945-1.036 2.597-.816c.625.21 1.145.814 1.145 1.873zM9.708 9.408c.755.55 1.354 1.018 2.292 1.018v-1.5c-.365 0-.565-.115-1.408-.73zm3.7-1.212c-.843.615-1.043.73-1.408.73v1.5c.938 0 1.537-.467 2.292-1.018z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118m-.93-3.297q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075m-5.544-1.229l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"></svg:path></svg:g>`,
})
export class SolarHandHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandMoneyBrokenIcon],svg[solar-hand-money-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17.414 10.414C18 9.828 18 8.886 18 7s0-2.828-.586-3.414m0 6.828C16.828 11 15.886 11 14 11h-4c-1.886 0-2.828 0-3.414-.586m10.828 0Zm0-6.828C16.828 3 15.886 3 14 3h-4c-1.886 0-2.828 0-3.414.586m10.828 0Zm-10.828 0C6 4.172 6 5.114 6 7s0 2.828.586 3.414m0-6.828Zm0 6.828ZM13 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path><svg:path stroke-linecap="round" d="M18 6a3 3 0 0 1-3-3m3 5a3 3 0 0 0-3 3M6 6a3 3 0 0 0 3-3M6 8a3 3 0 0 1 3 3M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118m-.93-3.297q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075m-5.544-1.229l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"></svg:path></svg:g>`,
})
export class SolarHandMoneyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandPillsBrokenIcon],svg[solar-hand-pills-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8.796 6.64a2.718 2.718 0 1 1 3.845-3.844l2.563 2.563a2.719 2.719 0 0 1-3.845 3.845z"></svg:path><svg:path d="M14 4s-.225 1.168-1.529 2.471S10 8 10 8"></svg:path><svg:path stroke-linecap="round" d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118m-.93-3.297q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075m-5.544-1.229l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"></svg:path></svg:g>`,
})
export class SolarHandPillsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandShakeBrokenIcon],svg[solar-hand-shake-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.784 22c-1.685-.752-3.077-1.924-3.992-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211"></svg:path><svg:path fill="currentColor" d="m4.01 8.367l-.372-.652zm2.492.5l.648-.377zm-3.3 1.886l-.647.378zm4.495-7.38l.648-.378zm.842 1.443l-.648.378zm1.877 4.71a.75.75 0 0 0 1.296-.756zm-2.878 2.607a.75.75 0 1 0 1.296-.756zm-3.14-6.875l-.648.378zm7.44-2.327l.648-.378zm2.526 4.33l.648-.377zm1.683 2.888l.373.651a.75.75 0 0 0 .275-1.029zm.968-4.395a.75.75 0 1 0 1.296-.756zm3.174 3.953l.648-.378zM6.99 17.25l.648-.378zm9.967 2.003l-.373-.65zM13.784 15.3a.75.75 0 0 0 1.296-.756zm6.563-6.81a.75.75 0 0 0-1.296.755zM8.987 20.18a.75.75 0 0 0 .72-1.316zm4.902-.635a.75.75 0 0 0 .222 1.484zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357zM7.05 3.75l.842 1.444l1.296-.756l-.842-1.443zm.842 1.444l2.525 4.331l1.296-.755l-2.525-4.332zm.943 6.183L7.15 8.49l-1.296.755l1.684 2.888zM7.15 8.49L5.045 4.88l-1.295.756l2.104 3.61zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357zm6.357 1.088l2.526 4.332l1.296-.756l-2.526-4.331zm2.526 4.332l1.684 2.887l1.295-.756l-1.683-2.887zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774zm-.745-1.3c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357zm6.57 3.747c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358zM2.555 11.131l3.788 6.497l1.296-.756l-3.788-6.497zm16.986-1.046c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802zm3.971-5.3l.49.84l1.296-.756l-.49-.84zm-9.345 9.619a5.3 5.3 0 0 1-2.067-1.992l-1.296.756a6.8 6.8 0 0 0 2.644 2.552zm6.88-.262a7.8 7.8 0 0 1-2.697.943l.222 1.484a9.3 9.3 0 0 0 3.219-1.125z"></svg:path></svg:g>`,
})
export class SolarHandShakeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandStarsBrokenIcon],svg[solar-hand-stars-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473s.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71s-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472s-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803s-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404s-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584s-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553s.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18s.184-.214.328-.473zm8.569 4.319c.254-.455.38-.682.57-.682s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.796.356s-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776s.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237zm-16 0C3.685 7.227 3.81 7 4 7s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.797.356c.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776c.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237z"></svg:path><svg:path stroke-linecap="round" d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118m-.93-3.297q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075m-5.544-1.229l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"></svg:path></svg:g>`,
})
export class SolarHandStarsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHanger2BrokenIcon],svg[solar-hanger-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9.536 3.91c0-1.055.95-1.91 2.124-1.91c1.173 0 2.124.855 2.124 1.91c0 .495-.18.947-.492 1.287c-.597.65-1.49 1.305-1.49 2.148v.285m0 0a3.66 3.66 0 0 1 2.082.61l1.058.714m-3.14-1.324a3.64 3.64 0 0 0-2.051.649L2.655 13.27C1.383 14.165 2.087 16 3.703 16H6m12 0h2.297c1.633 0 2.326-1.868 1.02-2.75L19 11.69"></svg:path><svg:path d="M14 22h-4c-1.886 0-2.828 0-3.414-.586S6 19.886 6 18s0-2.828.586-3.414S8.114 14 10 14h4c1.886 0 2.828 0 3.414.586S18 16.114 18 18s0 2.828-.586 3.414"></svg:path></svg:g>`,
})
export class SolarHanger2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHangerBrokenIcon],svg[solar-hanger-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.536 6.91c0-1.055.95-1.91 2.124-1.91c1.173 0 2.124.855 2.124 1.91c0 .495-.18.947-.492 1.287c-.597.65-1.49 1.305-1.49 2.149v.284m0 0a3.66 3.66 0 0 1 2.082.61L16 12.668m-4.198-2.037a3.64 3.64 0 0 0-2.051.649l-7.096 4.99C1.383 17.165 2.087 19 3.703 19h16.595c1.633 0 2.325-1.869 1.019-2.75L19 14.69"></svg:path>`,
})
export class SolarHangerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagBrokenIcon],svg[solar-hashtag-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3L8.75 7.5l-.139.5l-.833 3M5 21l1.944-7M19 3l-5 18m8-12H4m16 7H2"></svg:path>`,
})
export class SolarHashtagBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagChatBrokenIcon],svg[solar-hashtag-chat-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m17.543 21.694l-.645-.382zm.271-.458l.646.382zm-1.628 0l-.646.382zm.27.458l.646-.382zm-4.266-2.737l.693-.287zm2.705 1.539l-.013.75zm-1.352-.186l-.287.693zm8.267-1.353l.693.287zm-2.705 1.539l-.013-.75zm1.352-.186l.287.693zm.35-7.942l-.393.64zm.825.826l.64-.392zm-8.438-.826l-.392-.64zm-.826.826l-.64-.392zm3.333 7.411l.377-.648zm7.031-2.567a.75.75 0 1 0-1.498-.076zm-1.56-3.914a.75.75 0 1 0 1.479-.248zm-2.983 7.952l.27-.458l-1.29-.764l-.271.458zm-2.649-.458l.271.458l1.291-.764l-.271-.458zm1.358-.306A.13.13 0 0 1 17 21.25c.027 0 .075.016.102.062l-1.29.764c.531.899 1.845.899 2.377 0zm-.648-8.562h1.5v-1.5h-1.5zm-3.5 4v-.5h-1.5v.5zm-1.5 0c0 .572 0 1.039.025 1.419c.027.387.083.738.222 1.075l1.386-.574c-.05-.123-.09-.293-.111-.603a22 22 0 0 1-.022-1.317zm3.658 2.996c-.628-.01-.892-.052-1.078-.13l-.574 1.387c.475.196.998.232 1.626.243zm-3.41-.502a3.25 3.25 0 0 0 1.758 1.759l.574-1.386a1.75 1.75 0 0 1-.947-.947zm7.62 2.002c.628-.011 1.15-.047 1.626-.243l-.574-1.386c-.186.077-.45.118-1.078.129zm1.999-2.576a1.75 1.75 0 0 1-.947.947l.574 1.386a3.25 3.25 0 0 0 1.759-1.76zm-3.367-5.92c.833 0 1.405 0 1.846.043c.429.04.655.115.818.215l.784-1.28c-.438-.268-.921-.377-1.46-.429c-.529-.05-1.184-.049-1.988-.049zm2.664.258c.236.144.434.342.578.578l1.28-.784a3.25 3.25 0 0 0-1.074-1.073zM16.25 11.25c-.804 0-1.46 0-1.987.05c-.54.05-1.023.16-1.461.429l.784 1.279c.163-.1.39-.174.819-.215c.44-.042 1.012-.043 1.845-.043zm-3.5 5c0-.833 0-1.405.043-1.845c.04-.43.115-.656.215-.82l-1.28-.783c-.268.438-.377.921-.429 1.46c-.05.529-.049 1.184-.049 1.988zm.052-4.521a3.25 3.25 0 0 0-1.073 1.073l1.279.784c.144-.236.342-.434.578-.578zm4.029 9.125c-.098-.165-.197-.335-.297-.472a1.5 1.5 0 0 0-.456-.425l-.754 1.296c-.037-.021-.04-.04-.002.013c.048.065.106.162.218.352zm-1.95.392c.227.004.346.006.43.016c.071.008.053.014.013-.009l.754-1.296a1.5 1.5 0 0 0-.601-.186c-.17-.019-.37-.022-.57-.025zm3.579.372c.112-.19.17-.287.218-.352c.039-.053.035-.034-.002-.013l-.754-1.296c-.206.12-.347.276-.456.425c-.1.137-.2.306-.297.472zm.632-1.872c-.198.003-.399.006-.569.025c-.184.02-.393.064-.601.186l.754 1.296c-.04.023-.058.017.012.009c.085-.01.204-.012.43-.016zm2.142-1.784c-.02.378-.06.57-.117.708l1.386.574c.154-.372.207-.765.23-1.206zm1.417-4.086a2.9 2.9 0 0 0-.38-1.074l-1.279.784c.076.123.137.283.18.538z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3L5 21M19 3l-1.806 6.5M22 9H4m-2 7h7"></svg:path></svg:g>`,
})
export class SolarHashtagChatBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagCircleBrokenIcon],svg[solar-hashtag-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11 7L8 17m8-10l-3 10m5-7H7m10 4H6"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarHashtagCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagSquareBrokenIcon],svg[solar-hashtag-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11 7L8 17m8-10l-3 10m5-7H7m10 4H6"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarHashtagSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundBrokenIcon],svg[solar-headphones-round-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 17v-5c0-1.84-.552-3.551-1.5-4.977M3 17v-5a9 9 0 0 1 13-8.064M22 15.5v2m-20-2v2"></svg:path><svg:path d="M8 13.845c0-.765 0-1.147-.175-1.413a1 1 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048c-1.232.121-1.848.182-2.29.514a2.1 2.1 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406q.16.277.392.492c.413.38 1.014.5 2.218.736c.847.167 1.271.251 1.584.075a1 1 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01zm8 0c0-.765 0-1.147.175-1.413c.088-.133.204-.244.34-.322c.271-.156.637-.12 1.368-.048c1.232.121 1.848.182 2.29.514c.223.169.41.383.55.63c.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406q-.16.277-.392.492c-.413.38-1.014.5-2.218.736c-.847.167-1.271.251-1.584.075a1 1 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01z"></svg:path></svg:g>`,
})
export class SolarHeadphonesRoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundSoundBrokenIcon],svg[solar-headphones-round-sound-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 17v-5c0-1.821-.487-3.53-1.338-5M2 18v-6C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338"></svg:path><svg:path d="M8 15.187c0-.578 0-.867-.069-1.097a1.53 1.53 0 0 0-1.095-1.059c-.225-.054-.5-.03-1.052.015c-.956.079-1.435.118-1.825.27c-.899.347-1.585 1.123-1.846 2.088C2 15.823 2 16.324 2 17.328v.186c0 1.03 0 1.544.123 1.979a3.1 3.1 0 0 0 1.588 1.944c.392.195.878.275 1.85.436c.645.106.968.16 1.229.106a1.52 1.52 0 0 0 1.119-1C8 20.718 8 20.376 8 19.693zm8 0c0-.578 0-.867.069-1.097a1.53 1.53 0 0 1 1.095-1.059c.225-.054.5-.03 1.051.015c.957.079 1.436.118 1.826.27c.899.347 1.585 1.123 1.846 2.088c.113.419.113.92.113 1.924v.186c0 1.03 0 1.544-.123 1.979a3.1 3.1 0 0 1-1.588 1.944c-.392.195-.878.275-1.85.436c-.645.106-.968.16-1.229.106a1.52 1.52 0 0 1-1.119-1C16 20.718 16 20.376 16 19.693z"></svg:path><svg:path stroke-linecap="round" d="M12 6.5v5M15 8v2M9 8v2"></svg:path></svg:g>`,
})
export class SolarHeadphonesRoundSoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareBrokenIcon],svg[solar-headphones-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 18v-6c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3q-1.1-.002-2 .007M3 18v-6c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 3.955c.283-.205.591-.367.939-.493M22 15.5v2m-20-2v2"></svg:path><svg:path d="M8 13.845c0-.765 0-1.147-.175-1.413a1 1 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048c-1.232.121-1.848.182-2.29.514a2.1 2.1 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406q.16.277.392.492c.413.38 1.014.5 2.218.736c.847.167 1.271.251 1.584.075a1 1 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01zm8 0c0-.765 0-1.147.175-1.413c.088-.133.204-.244.34-.322c.271-.156.637-.12 1.368-.048c1.232.121 1.848.182 2.29.514c.223.169.41.383.55.63c.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406q-.16.277-.392.492c-.413.38-1.014.5-2.218.736c-.847.167-1.271.251-1.584.075a1 1 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01z"></svg:path></svg:g>`,
})
export class SolarHeadphonesSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareSoundBrokenIcon],svg[solar-headphones-square-sound-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 15.187c0-.578 0-.867-.069-1.097a1.53 1.53 0 0 0-1.095-1.059c-.225-.054-.5-.03-1.052.015c-.956.079-1.435.118-1.825.27c-.899.347-1.585 1.123-1.846 2.088C2 15.823 2 16.324 2 17.328v.186c0 1.03 0 1.544.123 1.979a3.1 3.1 0 0 0 1.588 1.944c.392.195.878.275 1.85.436c.645.106.968.16 1.229.106a1.52 1.52 0 0 0 1.119-1C8 20.718 8 20.376 8 19.693zm8 0c0-.578 0-.867.069-1.097a1.53 1.53 0 0 1 1.095-1.059c.225-.054.5-.03 1.051.015c.957.079 1.436.118 1.826.27c.899.347 1.585 1.123 1.846 2.088c.113.419.113.92.113 1.924v.186c0 1.03 0 1.544-.123 1.979a3.1 3.1 0 0 1-1.588 1.944c-.392.195-.878.275-1.85.436c-.645.106-.968.16-1.229.106a1.52 1.52 0 0 1-1.119-1C16 20.718 16 20.376 16 19.693z"></svg:path><svg:path stroke-linecap="round" d="M22 17v-5c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2c-1.58 0-2.895 0-4 .055M2 17v-5c0-4.714 0-7.071 1.464-8.536A3.7 3.7 0 0 1 4 3.02m8 3.48v5M15 8v2M9 8v2"></svg:path></svg:g>`,
})
export class SolarHeadphonesSquareSoundBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHealthBrokenIcon],svg[solar-health-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.5 9h-2m0 0h-2m2 0V7m0 2v2"></svg:path><svg:path fill="currentColor" d="m8.962 19.379l.472-.583zM12 5.574l-.548.512a.75.75 0 0 0 1.096 0zm3.038 13.805l.473.582zM12 21v-.75zm-9.348-7.318a.75.75 0 1 0 1.283-.776zm3.885 2.489a.75.75 0 1 0-1.074 1.046zM2.75 9.318c0-2.905 1.268-4.7 2.836-5.315c1.565-.613 3.754-.175 5.866 2.083l1.096-1.024c-2.388-2.554-5.199-3.36-7.509-2.456C2.732 3.51 1.25 5.992 1.25 9.318zM15.51 19.96c1.493-1.211 3.281-2.834 4.703-4.647c1.407-1.794 2.537-3.879 2.537-5.997h-1.5c0 1.612-.88 3.364-2.218 5.071c-1.324 1.689-3.016 3.232-4.466 4.408zm7.24-10.644c0-3.325-1.482-5.807-3.79-6.71c-2.31-.905-5.12-.1-7.508 2.455l1.096 1.024c2.112-2.258 4.301-2.696 5.866-2.083c1.568.614 2.836 2.41 2.836 5.314zM8.49 19.961c1.27 1.032 2.152 1.789 3.51 1.789v-1.5c-.723 0-1.173-.324-2.566-1.454zm6.076-1.165c-1.393 1.13-1.843 1.454-2.566 1.454v1.5c1.358 0 2.24-.757 3.51-1.789zm-10.63-5.89C3.187 11.67 2.75 10.455 2.75 9.318h-1.5c0 1.512.576 3 1.402 4.364zm5.498 5.89a34 34 0 0 1-2.897-2.625l-1.074 1.046a35 35 0 0 0 3.026 2.744z"></svg:path></svg:g>`,
})
export class SolarHealthBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartAngleBrokenIcon],svg[solar-heart-angle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.5l-.54.52l.01.011zM8.962 18.91l-.465.59zm6.076 0l-.464-.588zm-8.037-2.49a.75.75 0 0 0-.954 1.16zm-4.659-3.009a.75.75 0 1 0 1.316-.72zm11.128-5.38a.75.75 0 1 0 1.06-1.062zM2.75 9.136c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16zm-5.148 0c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92zm-5.768-5.63a7.25 7.25 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.275zm7.812-6.66l2 1.998l1.06-1.06l-2-2z"></svg:path>`,
})
export class SolarHeartAngleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartBrokenIcon],svg[solar-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-8.037-2.49a.75.75 0 0 0-.954 1.16zm-4.659-3.009a.75.75 0 1 0 1.316-.72zm.408-4.274c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16zm-5.148 0c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92zm-5.768-5.63a7.25 7.25 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.275z"></svg:path>`,
})
export class SolarHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartBrokenBrokenIcon],svg[solar-heart-broken-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-8.037-2.49a.75.75 0 0 0-.954 1.16zm-4.659-3.009a.75.75 0 1 0 1.316-.72zm.408-4.274c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16zm-5.148 0c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92zm-5.768-5.63a7.25 7.25 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.275z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 5.5l-1.5 3L14 11l-3 3.5l2 2l-1 4"></svg:path></svg:g>`,
})
export class SolarHeartBrokenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartLockBrokenIcon],svg[solar-heart-lock-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m9.266 20.615l.455-.596zM12 8.931l-.532.528a.75.75 0 0 0 1.064 0zm2.734 11.684l.456.597zM7.54 18.364a.75.75 0 1 0-.935 1.173zm-4.292-2.485a.75.75 0 0 0 1.306-.738zm.503-3.78c0-1.824 1.065-3.364 2.535-4.015c1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1zm5.06 9.113c.461.351.96.73 1.466 1.016c.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328c-.402-.227-.82-.541-1.294-.903zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517c1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582c-1.177 1.283-2.66 2.293-4.029 3.338zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386c-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375c1.47.65 2.535 2.19 2.535 4.015zm-7.47 7.92c-.475.362-.893.676-1.295.903c-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522s1.005-.665 1.466-1.016zm-4.56 0c-.719-.549-1.443-1.067-2.181-1.655l-.935 1.173c.748.596 1.54 1.166 2.207 1.675zm-5.167-4.878A6.05 6.05 0 0 1 3.75 12.1h-1.5c0 1.45.384 2.695.997 3.78z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 7c0-3.314-1.988-5-5-5S7 3.686 7 7m5 5v2.5"></svg:path></svg:g>`,
})
export class SolarHeartLockBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulse2BrokenIcon],svg[solar-heart-pulse-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 12h-2.364c-.658 0-.987 0-1.278.13s-.512.374-.952.863l-1.03 1.144c-.36.401-.541.602-.77.597c-.23-.005-.401-.213-.744-.63l-3.529-4.276c-.32-.388-.48-.582-.697-.595s-.4.16-.764.507L7.37 11.172c-.43.409-.644.613-.912.72C6.19 12 5.893 12 5.3 12H3"></svg:path><svg:path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zM12 20.487v-.75zm-9.343-7.09a.75.75 0 0 0 1.273-.792zm3.873 2.376a.75.75 0 0 0-1.06 1.062zM2.75 9.137c0-2.803 1.257-4.542 2.83-5.14c1.575-.6 3.771-.167 5.88 2.024l1.08-1.04C10.15 2.496 7.345 1.72 5.046 2.595C2.743 3.471 1.25 5.888 1.25 9.137zM15.503 19.5c1.492-1.177 3.28-2.754 4.703-4.516c1.407-1.743 2.544-3.775 2.544-5.847h-1.5c0 1.551-.872 3.246-2.211 4.905c-1.323 1.639-3.015 3.137-4.465 4.28zM22.75 9.137c0-3.25-1.493-5.666-3.796-6.542c-2.299-.874-5.103-.1-7.494 2.386l1.08 1.04c2.109-2.19 4.305-2.623 5.88-2.024c1.573.598 2.83 2.337 2.83 5.14zM8.497 19.5c1.275 1.004 2.153 1.736 3.503 1.736v-1.5c-.73 0-1.184-.319-2.574-1.414zm6.077-1.178c-1.39 1.095-1.843 1.414-2.574 1.414v1.5c1.35 0 2.228-.732 3.503-1.736zM3.93 12.604c-.746-1.199-1.18-2.373-1.18-3.467h-1.5c0 1.48.58 2.932 1.407 4.26zm5.496 5.718a34 34 0 0 1-2.896-2.55l-1.06 1.062A35 35 0 0 0 8.497 19.5z"></svg:path></svg:g>`,
})
export class SolarHeartPulse2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulseBrokenIcon],svg[solar-heart-pulse-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 12h-.801c-.83 0-1.245 0-1.589.195c-.344.194-.557.55-.984 1.261l-.03.052c-.398.663-.597.994-.886.989s-.476-.344-.849-1.022l-1.687-3.067c-.347-.632-.52-.948-.798-.963c-.277-.015-.484.28-.897.87l-.283.405c-.44.627-.659.94-.984 1.11c-.326.17-.709.17-1.474.17H6"></svg:path><svg:path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zM12 20.487v-.75zm-9.343-7.09a.75.75 0 0 0 1.273-.792zm3.873 2.376a.75.75 0 0 0-1.06 1.062zM2.75 9.137c0-2.803 1.257-4.542 2.83-5.14c1.575-.6 3.771-.167 5.88 2.024l1.08-1.04C10.15 2.496 7.345 1.72 5.046 2.595C2.743 3.471 1.25 5.888 1.25 9.137zM15.503 19.5c1.492-1.177 3.28-2.754 4.703-4.516c1.407-1.743 2.544-3.775 2.544-5.847h-1.5c0 1.551-.872 3.246-2.211 4.905c-1.323 1.639-3.015 3.137-4.465 4.28zM22.75 9.137c0-3.25-1.493-5.666-3.796-6.542c-2.299-.874-5.103-.1-7.494 2.386l1.08 1.04c2.109-2.19 4.305-2.623 5.88-2.024c1.573.598 2.83 2.337 2.83 5.14zM8.497 19.5c1.275 1.004 2.153 1.736 3.503 1.736v-1.5c-.73 0-1.184-.319-2.574-1.414zm6.077-1.178c-1.39 1.095-1.843 1.414-2.574 1.414v1.5c1.35 0 2.228-.732 3.503-1.736zM3.93 12.604c-.746-1.199-1.18-2.373-1.18-3.467h-1.5c0 1.48.58 2.932 1.407 4.26zm5.496 5.718a34 34 0 0 1-2.896-2.55l-1.06 1.062A35 35 0 0 0 8.497 19.5z"></svg:path></svg:g>`,
})
export class SolarHeartPulseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartShineBrokenIcon],svg[solar-heart-shine-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v2m0 16v2M2 12h2m16 0h2M6 18l.343-.343M17.657 6.343L18 6m0 12l-.343-.343M6.343 6.343L6 6"></svg:path><svg:path fill="currentColor" d="m10.785 15.354l-.47.585zM7.25 11.38a.75.75 0 0 0 1.5 0zM12 9.9l-.545.516a.75.75 0 0 0 1.09 0zm1.215 5.453l.47.585zm-2.924-1.352a.75.75 0 0 0-.963 1.15zM8.75 11.38c0-.715.397-1.284.891-1.514c.444-.206 1.105-.199 1.814.55l1.09-1.03c-1.091-1.153-2.43-1.394-3.536-.88c-1.056.49-1.759 1.611-1.759 2.874zm1.566 4.56c.2.16.444.355.7.507c.253.15.59.303.984.303v-1.5c-.007 0-.069-.004-.219-.093a5 5 0 0 1-.527-.388zm3.368 0c.545-.437 1.323-.998 1.93-1.692c.632-.723 1.136-1.65 1.136-2.868h-1.5c0 .758-.3 1.348-.766 1.881c-.492.563-1.105 1-1.738 1.508zm3.066-4.56c0-1.263-.703-2.384-1.759-2.874c-1.106-.514-2.445-.273-3.536.88l1.09 1.03c.709-.749 1.37-.756 1.814-.55c.494.23.891.799.891 1.514zm-4.004 3.389c-.214.172-.378.3-.527.388s-.212.093-.219.093v1.5c.393 0 .731-.153.985-.303c.255-.152.499-.347.7-.508zm-1.492 0c-.335-.268-.638-.495-.963-.767l-.963 1.15c.335.28.707.562.988.787z"></svg:path></svg:g>`,
})
export class SolarHeartShineBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartUnlockBrokenIcon],svg[solar-heart-unlock-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 7c0-3.314 1.937-5 4.872-5c1.852 0 3.307.672 4.128 2m-4 8v2.5"></svg:path><svg:path fill="currentColor" d="m9.266 20.615l.455-.596zM12 8.931l-.532.528a.75.75 0 0 0 1.064 0zm2.734 11.684l.456.597zM7.54 18.364a.75.75 0 1 0-.935 1.173zm-4.292-2.485a.75.75 0 0 0 1.306-.738zm.503-3.78c0-1.824 1.065-3.364 2.535-4.015c1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1zm5.06 9.113c.461.351.96.73 1.466 1.016c.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328c-.402-.227-.82-.541-1.294-.903zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517c1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582c-1.177 1.283-2.66 2.293-4.029 3.338zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386c-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375c1.47.65 2.535 2.19 2.535 4.015zm-7.47 7.92c-.475.362-.893.676-1.295.903c-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522s1.005-.665 1.466-1.016zm-4.56 0c-.719-.549-1.443-1.067-2.181-1.655l-.935 1.173c.748.596 1.54 1.166 2.207 1.675zm-5.167-4.878A6.05 6.05 0 0 1 3.75 12.1h-1.5c0 1.45.384 2.695.997 3.78z"></svg:path></svg:g>`,
})
export class SolarHeartUnlockBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartsBrokenIcon],svg[solar-hearts-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.5l-.54.52a.75.75 0 0 0 1.08 0zM8.962 18.91l-.465.59zM7 16.42a.75.75 0 0 0-.954 1.16zm-4.659-3.009a.75.75 0 1 0 1.316-.72zm15.829 6.758l-.45-.6zm2.976-7.251l.543-.518zm-4.647.24l-.527.534a.75.75 0 0 0 1.054 0zm-1.67 7.011l.449-.6zm-2.977-7.251l.542.518zm7.594 7.243a.75.75 0 0 0-.893-1.205zm1.402-3.517a.75.75 0 1 0 1.32.712zm.249-3.777l-.53.53zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zM9.426 18.322c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92zm-5.768-5.63a7.25 7.25 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.275zm14.063 6.877a7 7 0 0 1-.758.52c-.225.125-.369.161-.463.161v1.5c.456 0 .861-.166 1.192-.35c.33-.182.65-.422.929-.63zm5.029-4.51a3.84 3.84 0 0 0-1.06-2.66l-1.085 1.037c.397.415.645.987.645 1.624zm-8.37 5.71c.278.21.599.449.928.632s.736.349 1.192.349v-1.5c-.094 0-.238-.036-.463-.16a7 7 0 0 1-.758-.521zm-2.63-5.71c0-.636.248-1.207.645-1.623L11.31 12.4a3.84 3.84 0 0 0-1.06 2.66zm.645-1.623a2.18 2.18 0 0 1 1.565-.686c.595-.003 1.304.242 2.013.942l1.054-1.067c-.953-.941-2.03-1.38-3.074-1.375a3.68 3.68 0 0 0-2.643 1.15zm6.226 7.333c.267-.2.527-.386.826-.608l-.893-1.205c-.27.199-.57.416-.833.613zm3.548-3.413a4.76 4.76 0 0 0 .581-2.297h-1.5c0 .605-.15 1.122-.4 1.585zm-6.89 2.213c-.238-.178-.496-.365-.74-.544l-.89 1.207c.26.191.498.363.73.537zm-.74-.544c-1.512-1.115-2.789-2.214-2.789-3.965h-1.5c0 2.594 1.953 4.106 3.4 5.172zm-.878-.009c-.691.49-1.218.734-1.661.734v1.5c.945 0 1.806-.498 2.528-1.01zM21.69 12.4l-.062-.063l-1.06 1.06l.037.038zm-.062-.063A3.67 3.67 0 0 0 19 11.25c-1.03.008-2.089.448-3.027 1.375l1.054 1.067c.699-.69 1.396-.937 1.985-.942a2.17 2.17 0 0 1 1.556.648zm.137.874a8.74 8.74 0 0 0 .985-4.074h-1.5c0 1.293-.31 2.403-.818 3.386z"></svg:path>`,
})
export class SolarHeartsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHelpBrokenIcon],svg[solar-help-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="m15 9l4-4M5 19l4-4m0-6L5 5m14 14l-4-4"></svg:path><svg:path stroke-linecap="round" d="M9.412 2.339a9.95 9.95 0 0 1 5.176.002c5.335 1.43 8.5 6.913 7.071 12.247c-1.43 5.335-6.912 8.5-12.247 7.071S.912 14.747 2.34 9.412a9.95 9.95 0 0 1 2.586-4.484"></svg:path></svg:g>`,
})
export class SolarHelpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighDefinitionBrokenIcon],svg[solar-high-definition-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6.25 8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm6.315-8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm3.907-.8V8.8h-1.5v6.4zm.213.05a.32.32 0 0 1-.202-.061c-.03-.026-.01-.025-.01.011h-1.5c0 .98.902 1.55 1.712 1.55zm0 1.5c2.937 0 5.565-2.002 5.565-4.75h-1.5c0 1.67-1.684 3.25-4.065 3.25zm0-8c2.381 0 4.065 1.58 4.065 3.25h1.5c0-2.748-2.628-4.75-5.565-4.75zm0-1.5c-.81 0-1.713.57-1.713 1.55h1.5c0 .036-.02.037.011.011a.32.32 0 0 1 .202-.061zM4.75 8v4h1.5V8zm0 4v4h1.5v-4zm4.815-4v4h1.5V8zm0 4v4h1.5v-4zm-4.065.75h4.815v-1.5H5.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarHighDefinitionBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighQualityBrokenIcon],svg[solar-high-quality-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6 8v7.619M10.815 8v7.619M6 12h4.815M19 16l-1.926-1.524m-.963 1.143c-.447 0-.671 0-.857-.03c-.764-.12-1.361-.592-1.513-1.197c-.037-.147-.037-.324-.037-.678v-3.81c0-.353 0-.53.037-.677c.152-.605.749-1.077 1.513-1.198C15.44 8 15.664 8 16.11 8c.448 0 .671 0 .857.03c.764.12 1.361.592 1.514 1.197c.037.147.037.324.037.678v3.81c0 .353 0 .53-.037.678c-.152.604-.75 1.076-1.514 1.197c-.186.029-.41.029-.857.029Z"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarHighQualityBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingBrokenIcon],svg[solar-hiking-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5L6 22"></svg:path><svg:path fill="currentColor" d="m10.375 11.246l.747.074zm-.162 1.622l.747.074zm3.79-1.533l-.48.577zm.081.068l.48-.576zm3.832 0l-.48-.576zm1.564-.327a.75.75 0 0 0-.96-1.152zm-5.252 8.988l.747-.067zm-.575 2.002a.75.75 0 1 0 1.495-.133zm1.661-9.791l-.257.704zm1.372 0l.257.704zm-4.592-2.033l-.18.728zm.148.056l-.242.71zm1.24.627l.428-.615zm-1.665 5.21l.398-.636zm1.664 1.236l-.584.47zm.398.65l-.683.307zm-3.674-3.462l-.716.224zm.269.548l-.615.43zm.011-4.423l.683.311zm.824-.581l-.065-.747zm-1.68 1.068l-.162 1.622l1.492.15l.163-1.623zm3.894.74l.081.069l.96-1.153l-.08-.068zm4.873.069l1.084-.904l-.96-1.152l-1.084.903zm-4.915 8.15l.172 1.936l1.495-.133l-.173-1.936zm.123-8.15c.555.462.973.824 1.453 1l.514-1.41c-.174-.063-.358-.202-1.006-.743zm3.832-1.153c-.649.54-.833.68-1.007.743l.514 1.41c.48-.176.898-.538 1.453-1zm-2.379 2.153a2.75 2.75 0 0 0 1.886 0l-.514-1.41a1.25 1.25 0 0 1-.858 0zm-3.143-2.01h.002q.002 0 0 0zl-.01-.003l-.026-.007a.6.6 0 0 1-.126-.053a.76.76 0 0 1-.305-.3a.75.75 0 0 1 .391-1.063a.7.7 0 0 0-.217.127a.753.753 0 0 0-.124 1.016a.76.76 0 0 0 .375.275l.128.046l.485-1.42l-.081-.028l.008.003a1 1 0 0 1 .082.043a.7.7 0 0 1 .148.118a.75.75 0 0 1-.229 1.204l-.043.018l.033-.013c.014-.007.058-.026.11-.06a.75.75 0 0 0 .34-.649a.75.75 0 0 0-.442-.664c-.04-.018-.074-.028-.082-.031l-.029-.008l-.018-.005l-.008-.002zm2.57-.21a8 8 0 0 0-.574-.45l-.857 1.23c.148.104.238.179.47.372zM12 11.007a5.3 5.3 0 0 1 1.053.533l.857-1.231a6.8 6.8 0 0 0-1.425-.722zm-.58 5.763c.942.59 1.257.798 1.477 1.07l1.168-.94c-.415-.516-.997-.869-1.85-1.402zm3.555 3.226c-.089-1.002-.14-1.68-.412-2.285l-1.367.616c.143.32.187.695.285 1.802zm-2.078-2.155q.18.224.299.486l1.367-.616a3.8 3.8 0 0 0-.498-.81zm-3.43-5.05c-.08.802-.156 1.42.022 1.991l1.432-.448c-.066-.208-.055-.458.039-1.393zm2.748 2.707c-.797-.497-1.001-.642-1.126-.821l-1.23.858c.342.49.878.809 1.56 1.235zm-2.726-.716q.127.405.37.754l1.23-.86a1.3 1.3 0 0 1-.168-.342zm1.633-3.463c.014-.146.022-.217.031-.27c.007-.039.012-.048.015-.055l-1.365-.623c-.13.286-.15.557-.174.8zm1.152-1.806q-.3-.077-.524-.122a1.8 1.8 0 0 0-.506-.036l.13 1.494c-.02.002-.005-.003.093.015c.1.02.232.052.447.105zm-1.106 1.481c-.007.016-.007.01.013-.013a.5.5 0 0 1 .175-.124c.028-.011.034-.01.018-.008l-.13-1.494a1.8 1.8 0 0 0-.846.33c-.22.155-.459.388-.595.686z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15V8m0 14v-3M8 10l-1.672.557A1.94 1.94 0 0 0 5 12.4a.97.97 0 0 0 .537.868L8 14.5"></svg:path></svg:g>`,
})
export class SolarHikingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
