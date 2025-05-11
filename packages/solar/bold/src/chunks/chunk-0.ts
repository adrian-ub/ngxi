import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solar4kBoldIcon],svg[solar-4k-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m4.25-4a.75.75 0 0 0-1.5 0v2a2.75 2.75 0 0 0 2.75 2.75h2.25V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25H7.5c-.69 0-1.25-.56-1.25-1.25zm12.77-.54a.75.75 0 0 1 .02 1.06l-2.666 2.773l2.757 4.302a.75.75 0 1 1-1.262.81l-2.564-4l-1.055 1.097V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 1.5 0v3.338l3.71-3.858a.75.75 0 0 1 1.06-.02" clip-rule="evenodd"></svg:path>`,
})
export class Solar4kBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAccessibilityBoldIcon],svg[solar-accessibility-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-13a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-5.707.31a.75.75 0 0 0-.586 1.38l.002.001l.002.001l.01.004l.032.014a15 15 0 0 0 .572.225c.38.145.914.338 1.527.53c.988.312 2.236.64 3.398.748v1.24c0 .43-.124.853-.357 1.216l-2.524 3.925a.75.75 0 0 0 1.262.812l2.37-3.686l2.368 3.686a.75.75 0 0 0 1.262-.812l-2.524-3.925a2.25 2.25 0 0 1-.357-1.217v-1.239c1.162-.108 2.41-.436 3.399-.748a28 28 0 0 0 2.098-.755l.033-.014l.01-.004l.002-.001a.75.75 0 0 0-.585-1.381l-.007.003l-.027.011l-.11.045q-.148.061-.42.164c-.36.137-.865.32-1.444.502c-1.178.37-2.588.715-3.699.715s-2.52-.345-3.698-.715a27 27 0 0 1-1.974-.711L6.3 9.313z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAccessibilityBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddCircleBoldIcon],svg[solar-add-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m.75-13a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAddCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddFolderBoldIcon],svg[solar-add-folder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.07 5.008C2 5.376 2 5.818 2 6.7v7.05c0 3.771 0 5.657 1.172 6.828S6.229 21.75 10 21.75h4c3.771 0 5.657 0 6.828-1.172S22 17.521 22 13.75v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225c-.855-.769-2.172-.769-4.804-.769h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352c-.488-.271-.896-.68-1.712-1.495l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903c-.186-.017-.38-.017-.766-.017c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.007M12 11a.75.75 0 0 1 .75.75V13H14a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0V14.5H10a.75.75 0 0 1 0-1.5h1.25v-1.25A.75.75 0 0 1 12 11" clip-rule="evenodd"></svg:path>`,
})
export class SolarAddFolderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddSquareBoldIcon],svg[solar-add-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m0-13.75a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAddSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlaster2BoldIcon],svg[solar-adhesive-plaster-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.91 13.332l-7.578 7.577a5.41 5.41 0 0 0 7.577-7.577"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m12.235 19.885l7.65-7.65l-8.12-8.12l-7.65 7.65zm-2.356-8.592a1 1 0 1 1-1.414 1.414a1 1 0 0 1 1.414-1.414m2.828 4.243a1 1 0 1 0-1.414-1.415a1 1 0 0 0 1.414 1.415m0-7.071a1 1 0 1 1-1.414 1.414a1 1 0 0 1 1.414-1.414m2.828 4.242a1 1 0 1 0-1.414-1.414a1 1 0 0 0 1.414 1.414" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m3.09 10.668l7.578-7.577a5.41 5.41 0 0 0-7.577 7.577"></svg:path>`,
})
export class SolarAdhesivePlaster2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlasterBoldIcon],svg[solar-adhesive-plaster-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.213 3.213a4.14 4.14 0 0 0 0 5.858L14.93 20.787a4.142 4.142 0 0 0 5.858-5.858L9.07 3.213a4.14 4.14 0 0 0-5.858 0m6.132 5.018A.788.788 0 1 0 8.23 9.345A.788.788 0 0 0 9.345 8.23m2.784.928a.787.787 0 1 0-1.114 1.114a.787.787 0 0 0 1.114-1.114m3.712 3.712a.788.788 0 1 1-1.114 1.114a.788.788 0 0 1 1.114-1.114m.929 3.899a.787.787 0 1 0-1.114-1.114a.787.787 0 0 0 1.114 1.114m-3.713-3.713a.787.787 0 1 0-1.113-1.114a.787.787 0 0 0 1.113 1.114m.928 1.67a.788.788 0 1 1-1.114 1.114a.788.788 0 0 1 1.114-1.113M9.16 11.016a.787.787 0 1 1 1.114 1.114a.787.787 0 0 1-1.114-1.114" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m5.081 13.06l-1.868 1.87a4.142 4.142 0 0 0 5.858 5.858l1.868-1.868zm13.838-2.12l1.868-1.869a4.142 4.142 0 0 0-5.858-5.858L13.06 5.081z"></svg:path>`,
})
export class SolarAdhesivePlasterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsBoldIcon],svg[solar-airbuds-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 6.188V8.3c0 1.657-1.422 3-3.177 3c-.584 0-1.058.448-1.058 1v4.95H13V8.313c0-.29 0-.436.006-.558c.134-2.569 2.309-4.623 5.028-4.749c.13-.006.284-.006.591-.006c.184 0 .276 0 .354.004c1.632.075 2.937 1.308 3.017 2.849c.004.073.004.16.004.335M20.25 6a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.382 21C14.067 21 13 19.993 13 18.75h4.765c0 1.243-1.067 2.25-2.383 2.25"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 6.188V8.3c0 1.657 1.422 3 3.176 3c.585 0 1.06.448 1.06 1v4.95H11V8.313c0-.29 0-.436-.006-.558c-.134-2.569-2.309-4.623-5.028-4.749C5.836 3 5.682 3 5.375 3c-.184 0-.277 0-.354.004c-1.632.075-2.937 1.308-3.017 2.849C2 5.926 2 6.013 2 6.188M3.75 6a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.618 21C9.933 21 11 19.993 11 18.75H6.235c0 1.243 1.067 2.25 2.383 2.25"></svg:path>`,
})
export class SolarAirbudsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseBoldIcon],svg[solar-airbuds-case-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.002 9.75Q3 10.337 3 11v2c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2q0-.663-.002-1.25h-3.352a2.75 2.75 0 0 1-2.646 2H9a2.75 2.75 0 0 1-2.646-2zm.019-1.5h3.333A2.75 2.75 0 0 1 9 6.25h6a2.75 2.75 0 0 1 2.646 2h3.333c-.055-2.01-.248-3.245-.934-4.189a5 5 0 0 0-1.106-1.106C17.625 2 15.749 2 12 2s-5.625 0-6.939.955A5 5 0 0 0 3.955 4.06c-.686.944-.88 2.178-.934 4.189"></svg:path><svg:path fill="currentColor" d="M7.75 9c0-.69.56-1.25 1.25-1.25h6a1.25 1.25 0 1 1 0 2.5H9c-.69 0-1.25-.56-1.25-1.25"></svg:path>`,
})
export class SolarAirbudsCaseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseChargeBoldIcon],svg[solar-airbuds-case-charge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.955 4.061C3 5.375 3 7.251 3 11v2c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 2 15.749 2 12 2s-5.625 0-6.939.955A5 5 0 0 0 3.955 4.06M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm5.586 5.219a.75.75 0 0 0-1.172-.937l-2 2.5A.75.75 0 0 0 10 16.25h2.44l-1.026 1.282a.75.75 0 1 0 1.172.936l2-2.5A.75.75 0 0 0 14 14.75h-2.44z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsCaseChargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseMinimalisticBoldIcon],svg[solar-airbuds-case-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.955 4.061C3 5.375 3 7.251 3 11v2c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 2 15.749 2 12 2s-5.625 0-6.939.955A5 5 0 0 0 3.955 4.06M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsCaseMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseOpenBoldIcon],svg[solar-airbuds-case-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4.625v1.316a2.47 2.47 0 0 0 2.47 2.471c.455 0 .824.369.824.824V10H10.5V6.375A4.375 4.375 0 0 0 6.125 2A2.625 2.625 0 0 0 3.5 4.625m17 0v1.316a2.47 2.47 0 0 1-2.47 2.471a.824.824 0 0 0-.824.824V10H13.5V6.375A4.375 4.375 0 0 1 17.875 2A2.625 2.625 0 0 1 20.5 4.625M3.207 11.391C3 11.661 3 12.051 3 12.833V13c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-.167c0-.781 0-1.172-.207-1.442a1 1 0 0 0-.184-.184c-.27-.207-.66-.207-1.442-.207H16.75A2.75 2.75 0 0 1 14 13.75h-4A2.75 2.75 0 0 1 7.25 11H4.833c-.782 0-1.172 0-1.442.207q-.105.08-.184.184"></svg:path><svg:path fill="currentColor" d="M8.75 11c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25z"></svg:path>`,
})
export class SolarAirbudsCaseOpenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsChargeBoldIcon],svg[solar-airbuds-charge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 22a4 4 0 1 0 0-8a4 4 0 0 0 0 8m.416-6.124a.75.75 0 0 1 .208 1.04l-.223.334H19a.75.75 0 0 1 .624 1.166l-1 1.5a.75.75 0 1 1-1.248-.832l.223-.334H17a.75.75 0 0 1-.624-1.166l1-1.5a.75.75 0 0 1 1.04-.208M2 7.188V9.3c0 1.657 1.422 3 3.176 3c.585 0 1.06.448 1.06 1v4.95H11V9.313c0-.29 0-.436-.006-.558c-.134-2.569-2.309-4.623-5.028-4.749C5.836 4 5.682 4 5.375 4c-.184 0-.277 0-.354.004c-1.632.075-2.937 1.308-3.017 2.849C2 6.926 2 7.013 2 7.188M3.75 7a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.618 22C9.933 22 11 20.993 11 19.75H6.235c0 1.243 1.067 2.25 2.383 2.25"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 7.3V5.188c0-.175 0-.262-.004-.335c-.08-1.541-1.385-2.774-3.017-2.85C18.901 2 18.81 2 18.625 2c-.307 0-.46 0-.59.006c-2.72.126-4.895 2.18-5.029 4.749c-.006.122-.006.267-.006.558v8.393a5.5 5.5 0 0 1 4.765-3.201V11.3c0-.552.474-1 1.058-1c1.755 0 3.177-1.343 3.177-3m-2.5-3.05a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsChargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCheckBoldIcon],svg[solar-airbuds-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 7.188V9.3c0 1.657 1.422 3 3.176 3c.585 0 1.06.448 1.06 1v4.95H11V9.313c0-.29 0-.436-.006-.558c-.134-2.569-2.309-4.623-5.028-4.749C5.836 4 5.682 4 5.375 4c-.184 0-.277 0-.354.004c-1.632.075-2.937 1.308-3.017 2.849C2 6.926 2 7.013 2 7.188M3.75 7a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.618 22C9.933 22 11 20.993 11 19.75H6.235c0 1.243 1.067 2.25 2.383 2.25"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 22a4 4 0 1 0 0-8a4 4 0 0 0 0 8m2.012-4.452a.75.75 0 1 0-1.024-1.096l-1.63 1.522l-.346-.322a.75.75 0 0 0-1.024 1.096l.857.8a.75.75 0 0 0 1.024 0zM22 7.3V5.188c0-.175 0-.262-.004-.335c-.08-1.541-1.385-2.774-3.017-2.85C18.901 2 18.81 2 18.625 2c-.307 0-.46 0-.59.006c-2.72.126-4.895 2.18-5.029 4.749c-.006.122-.006.267-.006.558v8.393a5.5 5.5 0 0 1 4.765-3.201V11.3c0-.552.474-1 1.058-1c1.755 0 3.177-1.343 3.177-3m-2.5-3.05a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsLeftBoldIcon],svg[solar-airbuds-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.265 4.95a.75.75 0 0 0 .586.885a4.26 4.26 0 0 1 3.314 3.314a.75.75 0 1 0 1.47-.298a5.76 5.76 0 0 0-4.486-4.486a.75.75 0 0 0-.884.586" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.382 22C3.067 22 2 20.88 2 19.5h4.765c0 1.38-1.067 2.5-2.383 2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11 7.889V5.542c0-.194 0-.29-.004-.372c-.08-1.713-1.385-3.082-3.017-3.166C7.902 2 7.81 2 7.625 2c-.307 0-.46 0-.59.007c-2.72.14-4.895 2.422-5.029 5.276C2 7.419 2 7.58 2 7.903v9.93h4.765v-5.5c0-.613.474-1.11 1.059-1.11C9.578 11.222 11 9.73 11 7.888M9.324 5.125c0-.46-.336-.833-.75-.833c-.415 0-.75.373-.75.833v2.778c0 .46.335.833.75.833c.414 0 .75-.373.75-.833zM16.5 22a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11m-1.25-9a.75.75 0 0 1 .75.75V18h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsRemoveBoldIcon],svg[solar-airbuds-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 22a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-1.53-5.53a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 0 1 1.06 1.06l-.47.47l.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47l-.47.47a.75.75 0 0 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06M2 7.188V9.3c0 1.657 1.422 3 3.176 3c.585 0 1.06.448 1.06 1v4.95H11V9.313c0-.29 0-.436-.006-.558c-.134-2.569-2.309-4.623-5.028-4.749C5.836 4 5.682 4 5.375 4c-.184 0-.277 0-.354.004c-1.632.075-2.937 1.308-3.017 2.849C2 6.926 2 7.013 2 7.188M3.75 7a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.618 22C9.933 22 11 20.993 11 19.75H6.235c0 1.243 1.067 2.25 2.383 2.25"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 7.3V5.188c0-.175 0-.262-.004-.335c-.08-1.541-1.385-2.774-3.017-2.85C18.901 2 18.81 2 18.625 2c-.307 0-.46 0-.59.006c-2.72.126-4.895 2.18-5.029 4.749c-.006.122-.006.267-.006.558v8.393a5.5 5.5 0 0 1 4.765-3.201V11.3c0-.552.474-1 1.058-1c1.755 0 3.177-1.343 3.177-3m-2.5-3.05a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsRightBoldIcon],svg[solar-airbuds-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.735 4.95a.75.75 0 0 1-.586.885a4.26 4.26 0 0 0-3.314 3.314a.75.75 0 0 1-1.47-.298a5.76 5.76 0 0 1 4.486-4.486a.75.75 0 0 1 .884.586M7.5 22a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-2.25-8a.75.75 0 0 1 .75-.75h1.5c1.109 0 2.25.773 2.25 2c0 .786-.468 1.386-1.096 1.715l.99 1.65a.75.75 0 0 1-1.287.77L7.075 17.25H6.75V19a.75.75 0 0 1-1.5 0zm1.5 1.75v-1h.75c.548 0 .75.346.75.5s-.202.5-.75.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.618 22C20.933 22 22 20.88 22 19.5h-4.765c0 1.38 1.067 2.5 2.383 2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 7.889V5.542c0-.194 0-.29.004-.372c.08-1.713 1.385-3.082 3.017-3.166c.078-.004.17-.004.354-.004c.307 0 .46 0 .59.007c2.72.14 4.895 2.422 5.029 5.276c.006.136.006.297.006.62v9.93h-4.765v-5.5c0-.613-.474-1.11-1.058-1.11C14.422 11.222 13 9.73 13 7.888m1.677-2.764c0-.46.335-.833.75-.833c.414 0 .75.373.75.833v2.778c0 .46-.336.833-.75.833c-.415 0-.75-.373-.75-.833z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmAddBoldIcon],svg[solar-alarm-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-12.75a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmBoldIcon],svg[solar-alarm-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c4.836 0 8.757-3.884 8.757-8.675c0-4.79-3.92-8.674-8.757-8.674s-8.757 3.883-8.757 8.674S7.163 22 12 22m0-13.253c.403 0 .73.324.73.723v3.556l2.218 2.198a.72.72 0 0 1 0 1.022a.735.735 0 0 1-1.032 0l-2.432-2.41a.72.72 0 0 1-.214-.51V9.47c0-.4.327-.723.73-.723M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmPauseBoldIcon],svg[solar-alarm-pause-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033M21 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-5 2.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.541c-.184.076-.417.076-.883.076s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 16.199 13 15.966 13 15.5v-5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 9 14.034 9 14.5 9s.699 0 .883.076a1 1 0 0 1 .541.541c.076.184.076.417.076.883zm-5 0v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 9 9.966 9 9.5 9s-.699 0-.883.076a1 1 0 0 0-.54.541C8 9.801 8 10.034 8 10.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.541c.184.076.417.076.883.076s.699 0 .883-.076a1 1 0 0 0 .541-.541c.076-.184.076-.417.076-.883" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmPauseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmPlayBoldIcon],svg[solar-alarm-play-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18m1.026-11.725a15 15 0 0 0-.784-.508c-1.072-.652-1.609-.978-2.09-.617c-.48.36-.524 1.117-.612 2.628c-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.132 2.268.613 2.629c.48.36 1.017.034 2.089-.618c.278-.169.547-.341.784-.508c.27-.19.565-.418.862-.66C14.963 14.188 15.5 13.75 15.5 13s-.537-1.188-1.612-2.065c-.297-.242-.591-.47-.862-.66m-4.89-8.672a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmPlayBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmRemoveBoldIcon],svg[solar-alarm-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18m3-9.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmSleepBoldIcon],svg[solar-alarm-sleep-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18M9 10.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .53 1.28l-4.72 4.72H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.53-1.28l4.72-4.72z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmSleepBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmTurnOffBoldIcon],svg[solar-alarm-turn-off-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18m2.652-11.652a.75.75 0 0 1 0 1.061L13.06 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.061l-1.592 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59l-1.59-1.592a.75.75 0 1 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.795-1.272l4-2.5a.75.75 0 0 1 1.033.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.795 1.272l-4-2.5a.75.75 0 0 1-.239-1.033" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmTurnOffBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlbumBoldIcon],svg[solar-album-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.29 11.969a1.33 1.33 0 0 1-1.322 1.337a1.33 1.33 0 0 1-1.323-1.337a1.33 1.33 0 0 1 1.323-1.338c.73 0 1.323.599 1.323 1.338"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.132 7.408c-.849-.12-1.942-.12-3.305-.12H9.173c-1.363 0-2.456 0-3.305.12c-.877.125-1.608.393-2.152 1.02c-.543.628-.71 1.397-.716 2.293c-.006.866.139 1.962.319 3.329l.365 2.771c.141 1.069.255 1.933.432 2.61c.185.704.457 1.289.968 1.741s1.12.648 1.834.74C7.605 22 8.468 22 9.533 22h4.934c1.065 0 1.928 0 2.615-.088c.715-.092 1.323-.288 1.834-.74s.783-1.037.968-1.741c.177-.677.291-1.542.432-2.61l.365-2.771c.18-1.367.325-2.463.319-3.33c-.007-.895-.172-1.664-.716-2.291c-.544-.628-1.275-.896-2.152-1.021M6.052 8.732c-.726.104-1.094.292-1.34.578c-.248.285-.384.678-.39 1.42c-.005.762.126 1.765.315 3.195l.05.38l.371-.273c.96-.702 2.376-.668 3.288.095l3.384 2.833c.32.268.871.318 1.269.084l.235-.138c1.125-.662 2.634-.592 3.672.19l1.832 1.38c.09-.496.171-1.105.273-1.876l.352-2.675c.189-1.43.32-2.433.314-3.195c-.005-.742-.141-1.135-.388-1.42c-.247-.286-.615-.474-1.342-.578c-.745-.106-1.745-.107-3.172-.107h-5.55c-1.427 0-2.427.001-3.172.107" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.859 2h6.282c.21 0 .37 0 .51.015a2.62 2.62 0 0 1 2.159 1.672H6.19a2.62 2.62 0 0 1 2.159-1.672c.14-.015.3-.015.51-.015M6.88 4.5c-1.252 0-2.278.84-2.62 1.954l-.021.07c.358-.12.73-.2 1.108-.253c.973-.139 2.202-.139 3.629-.139h6.203c1.427 0 2.656 0 3.628.139c.378.053.75.132 1.11.253l-.021-.07C19.553 5.34 18.527 4.5 17.276 4.5z"></svg:path>`,
})
export class SolarAlbumBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignBottomBoldIcon],svg[solar-align-bottom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 17c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C5 15.902 5 15.435 5 14.5v-9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 3 6.565 3 7.5 3s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C10 4.098 10 4.565 10 5.5v9c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C8.902 17 8.435 17 7.5 17m9 0c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C14 15.902 14 15.435 14 14.5v-6c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C15.098 6 15.565 6 16.5 6s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 7.098 19 7.565 19 8.5v6c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201"></svg:path>`,
})
export class SolarAlignBottomBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignHorizontaSpacingBoldIcon],svg[solar-align-horizonta-spacing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 3 1.25m18 0a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 4c-1.886 0-2.828 0-3.414.586S8 6.114 8 8v8c0 1.886 0 2.828.586 3.414S10.114 20 12 20s2.828 0 3.414-.586S16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414S13.886 4 12 4"></svg:path>`,
})
export class SolarAlignHorizontaSpacingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignHorizontalCenterBoldIcon],svg[solar-align-horizontal-center-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 5 17.435 5 16.5 5h-3.75V2a.75.75 0 0 0-1.5 0v3H7.5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 10 6.565 10 7.5 10h3.75v4H9.5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C7 15.098 7 15.565 7 16.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C8.098 19 8.565 19 9.5 19h1.75v3a.75.75 0 0 0 1.5 0v-3h1.75c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C15.902 14 15.435 14 14.5 14h-1.75v-4h3.75c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C19 8.902 19 8.435 19 7.5"></svg:path>`,
})
export class SolarAlignHorizontalCenterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignLeftBoldIcon],svg[solar-align-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.375 1.625a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0v-20a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.375 7.875c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549c.348-.201.815-.201 1.75-.201h9c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-9c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75m0 9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549c.348-.201.815-.201 1.75-.201h6c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-6c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75"></svg:path>`,
})
export class SolarAlignLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignRightBoldIcon],svg[solar-align-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.625 1.625a.75.75 0 0 0-.75.75v20a.75.75 0 0 0 1.5 0v-20a.75.75 0 0 0-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.625 7.875c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201h-9c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75m0 9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201h-6c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201h6c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75"></svg:path>`,
})
export class SolarAlignRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignTopBoldIcon],svg[solar-align-top-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 3.75c0 .414.336.75.75.75h20A.75.75 0 0 0 22 3H2a.75.75 0 0 0-.75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 7.75c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.848 5 9.315 5 10.25v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201A1.5 1.5 0 0 0 9.799 21c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201m9 0c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.848 14 9.315 14 10.25v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201"></svg:path>`,
})
export class SolarAlignTopBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignVerticalCenterBoldIcon],svg[solar-align-vertical-center-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5v3.75H2a.75.75 0 0 0 0 1.5h3v3.75c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 19 6.565 19 7.5 19s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-3.75h4v1.75c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-1.75h3a.75.75 0 0 0 0-1.5h-3V9.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v1.75h-4V7.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 5 8.435 5 7.5 5"></svg:path>`,
})
export class SolarAlignVerticalCenterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignVerticalSpacingBoldIcon],svg[solar-align-vertical-spacing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0-18A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 12c0 1.886 0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12s0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12"></svg:path>`,
})
export class SolarAlignVerticalSpacingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowDownBoldIcon],svg[solar-alt-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"></svg:path>`,
})
export class SolarAltArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowLeftBoldIcon],svg[solar-alt-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.165 11.63l6.63-6.43C15.21 4.799 16 5.042 16 5.57v12.86c0 .528-.79.771-1.205.37l-6.63-6.43a.5.5 0 0 1 0-.74"></svg:path>`,
})
export class SolarAltArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowRightBoldIcon],svg[solar-alt-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.835 11.63L9.205 5.2C8.79 4.799 8 5.042 8 5.57v12.86c0 .528.79.771 1.205.37l6.63-6.43a.5.5 0 0 0 0-.74"></svg:path>`,
})
export class SolarAltArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowUpBoldIcon],svg[solar-alt-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.37 8.165l6.43 6.63c.401.414.158 1.205-.37 1.205H5.57c-.528 0-.771-.79-.37-1.205l6.43-6.63a.5.5 0 0 1 .74 0"></svg:path>`,
})
export class SolarAltArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveBoldIcon],svg[solar-archive-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m20.069 8.5l.431-.002V13c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V8.498l.431.002zM9 12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.541c.184-.076.417-.076.883-.076h3c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-3c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 12.699 9 12.466 9 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveCheckBoldIcon],svg[solar-archive-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m20.069 8.5l.431-.002V13c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V8.498l.431.002zm-5.07 3.69a.75.75 0 0 1 .06 1.06l-3.571 4a.75.75 0 0 1-1.119 0l-1.428-1.6a.75.75 0 1 1 1.118-1l.87.974l3.012-3.373a.75.75 0 0 1 1.058-.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveDownBoldIcon],svg[solar-archive-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5m18.069 3.5l.431-.002V13c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V8.498l.431.002h7.319v6.545l-1.693-1.88a.75.75 0 1 0-1.114 1.003l3 3.334a.75.75 0 0 0 1.114 0l3-3.334a.75.75 0 0 0-1.114-1.003l-1.693 1.88V8.5z"></svg:path>`,
})
export class SolarArchiveDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveDownMinimlisticBoldIcon],svg[solar-archive-down-minimlistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.535 3.464C19.07 2 16.713 2 11.999 2S4.93 2 3.464 3.464c-.758.758-1.123 1.754-1.3 3.192a6.5 6.5 0 0 1 1.884-1.448c.782-.398 1.619-.56 2.545-.635C7.488 4.5 8.59 4.5 9.936 4.5h4.126c1.347 0 2.448 0 3.343.073c.927.076 1.764.237 2.545.635a6.5 6.5 0 0 1 1.884 1.448c-.176-1.438-.542-2.434-1.3-3.192"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14m10.53 3.53a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V11a.75.75 0 0 1 1.5 0v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveDownMinimlisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveMinimalisticBoldIcon],svg[solar-archive-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.545 8.73C2 9.8 2 11.2 2 14s0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 22 7.2 22 10 22h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 18.2 22 16.8 22 14s0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 6 16.8 6 14 6h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 8.73M15.06 12.5a.75.75 0 0 0-1.12-1l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.535 3.464C19.07 2 16.713 2 11.999 2S4.93 2 3.464 3.464c-.758.758-1.123 1.754-1.3 3.192a6.5 6.5 0 0 1 1.884-1.448c.782-.398 1.619-.56 2.545-.635C7.488 4.5 8.59 4.5 9.936 4.5h4.126c1.347 0 2.448 0 3.343.073c.927.076 1.764.237 2.545.635a6.5 6.5 0 0 1 1.884 1.448c-.176-1.438-.542-2.434-1.3-3.192"></svg:path>`,
})
export class SolarArchiveMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveUpBoldIcon],svg[solar-archive-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5m18.069 3.5l.431-.002V13c0 3.771 0 5.657-1.172 6.828C18.183 20.974 16.355 21 12.75 21v-7.046l1.693 1.88a.75.75 0 1 0 1.114-1.002l-3-3.334a.75.75 0 0 0-1.114 0l-3 3.334a.75.75 0 1 0 1.114 1.003l1.693-1.88V21c-3.605 0-5.433-.026-6.578-1.172C3.5 18.657 3.5 16.771 3.5 13V8.498l.431.002z"></svg:path>`,
})
export class SolarArchiveUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveUpMinimlisticBoldIcon],svg[solar-archive-up-minimlistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.535 3.464C19.07 2 16.713 2 11.999 2S4.93 2 3.464 3.464c-.758.758-1.123 1.754-1.3 3.192a6.5 6.5 0 0 1 1.884-1.448c.782-.398 1.619-.56 2.545-.635C7.488 4.5 8.59 4.5 9.936 4.5h4.126c1.347 0 2.448 0 3.343.073c.927.076 1.764.237 2.545.635a6.5 6.5 0 0 1 1.884 1.448c-.176-1.438-.542-2.434-1.3-3.192"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14m10.53-3.53a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V17a.75.75 0 0 0 1.5 0v-4.19l1.22 1.22a.75.75 0 1 0 1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveUpMinimlisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArmchair2BoldIcon],svg[solar-armchair-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.533 18H6.75v2a.75.75 0 1 1-1.5 0v-2.324c-.829-.362-1.49-1.005-1.808-1.817l-.039-.102L2.1 12.264C1.685 11.15 2.613 10 3.927 10c.81 0 1.534.453 1.81 1.134l1.098 2.706c.1.246.15.37.222.47a1.2 1.2 0 0 0 .74.463c.13.027.277.027.57.027h6.98c.569 0 .853 0 1.091-.098q.196-.082.349-.219c.184-.166.281-.405.475-.883l1.001-2.466c.276-.68 1-1.134 1.81-1.134c1.314 0 2.242 1.15 1.827 2.264l-1.12 3c-.195.524-.292.785-.421 1.008a3.43 3.43 0 0 1-1.609 1.404V20a.75.75 0 1 1-1.5 0v-2.005c-.187.005-.415.005-.717.005"></svg:path><svg:path fill="currentColor" d="M13.236 3.5h-2.472c-1.1 0-1.976 0-2.66.088c-.706.09-1.285.28-1.746.72c-.464.441-.669 1.003-.765 1.685c-.093.658-.093 1.495-.093 2.54v.88l.21.15c.416.294.752.698.954 1.195L7.898 13.8h7.449l.363-.001h.002l.388-.007l.126-.3l.11-.268l1-2.466c.202-.497.538-.9.954-1.196l.21-.15v-.88c0-1.044 0-1.881-.093-2.539c-.096-.682-.301-1.244-.765-1.686c-.46-.438-1.04-.629-1.745-.72c-.685-.087-1.56-.087-2.661-.087"></svg:path>`,
})
export class SolarArmchair2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArmchairBoldIcon],svg[solar-armchair-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.179 21H6.82c-.745 0-1.21 0-1.571-.042v1.291a.75.75 0 0 1-1.5 0v-1.865a4 4 0 0 1-1.656-2.494C2 17.45 2 16.92 2 15.857v-4.611C2 10.006 2.943 9 4.105 9c1.163 0 2.106 1.005 2.106 2.246v3.087c0 .943 0 1.415.292 1.707c.293.293.765.293 1.708.293h7.579c.942 0 1.414 0 1.707-.293c.293-.292.293-.764.293-1.707v-3.087c0-1.24.942-2.246 2.105-2.246C21.057 9 22 10.005 22 11.246v4.611c0 1.063 0 1.594-.094 2.033a4 4 0 0 1-1.656 2.494v1.866a.75.75 0 0 1-1.5 0v-1.292c-.36.042-.826.042-1.571.042"></svg:path><svg:path fill="currentColor" d="M6 8.672v-.518c0-2.3 0-3.451.482-4.308A3.65 3.65 0 0 1 7.8 2.495C8.635 2 9.757 2 12 2s3.365 0 4.2.495c.547.324 1.002.79 1.318 1.351C18 4.703 18 5.853 18 8.154v.518a3.32 3.32 0 0 0-1.21 2.574v3.087c0 .472 0 .707-.147.854c-.146.146-.382.146-.854.146H8.212c-.472 0-.708 0-.854-.146c-.146-.147-.146-.382-.146-.854v-3.087A3.32 3.32 0 0 0 6 8.672"></svg:path>`,
})
export class SolarArmchairBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowDownBoldIcon],svg[solar-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 4a.75.75 0 0 0-1.5 0v9.25H6a.75.75 0 0 0-.53 1.28l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0-.53-1.28h-5.25z"></svg:path>`,
})
export class SolarArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftBoldIcon],svg[solar-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z"></svg:path>`,
})
export class SolarArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftDownBoldIcon],svg[solar-arrow-left-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l-6.97 6.97l-3.97-3.97A.75.75 0 0 0 5.25 9v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .53-1.28l-3.97-3.97z"></svg:path>`,
})
export class SolarArrowLeftDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftUpBoldIcon],svg[solar-arrow-left-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.53 17.47a.75.75 0 1 1-1.06 1.06l-6.97-6.97l-3.97 3.97A.75.75 0 0 1 5.25 15V6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 .53 1.28l-3.97 3.97z"></svg:path>`,
})
export class SolarArrowLeftUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightBoldIcon],svg[solar-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z"></svg:path>`,
})
export class SolarArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightDownBoldIcon],svg[solar-arrow-right-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.47 6.53a.75.75 0 0 1 1.06-1.06l6.97 6.97l3.97-3.97a.75.75 0 0 1 1.28.53v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.53-1.28l3.97-3.97z"></svg:path>`,
})
export class SolarArrowRightDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightUpBoldIcon],svg[solar-arrow-right-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l3.97 3.97a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28l3.97 3.97z"></svg:path>`,
})
export class SolarArrowRightUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToDownLeftBoldIcon],svg[solar-arrow-to-down-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.53 13.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V9.5c0-.713-.22-1.8-.859-2.687C9.781 5.965 8.756 5.25 7 5.25a.75.75 0 0 1 0-1.5c2.244 0 3.72.952 4.609 2.187c.861 1.196 1.141 2.61 1.141 3.563v8.19l3.72-3.72a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowToDownLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToDownRightBoldIcon],svg[solar-arrow-to-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.47 13.97a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06l-3.72 3.72V9.5c0-.713.22-1.8.859-2.687c.61-.848 1.635-1.563 3.391-1.563a.75.75 0 0 0 0-1.5c-2.244 0-3.72.952-4.609 2.187c-.861 1.196-1.141 2.61-1.141 3.563v8.19l-3.72-3.72a.75.75 0 0 0-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowToDownRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToTopLeftBoldIcon],svg[solar-arrow-to-top-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.53 10.03a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 1 0 1.06 1.06l3.72-3.72v8.19c0 .713-.22 1.8-.859 2.687c-.61.848-1.635 1.563-3.391 1.563a.75.75 0 0 0 0 1.5c2.244 0 3.72-.952 4.609-2.187c.861-1.196 1.141-2.61 1.141-3.563V6.31l3.72 3.72a.75.75 0 0 0 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowToTopLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToTopRightBoldIcon],svg[solar-arrow-to-top-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.47 10.03a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72v8.19c0 .713.22 1.8.859 2.687c.61.848 1.635 1.563 3.391 1.563a.75.75 0 0 1 0 1.5c-2.244 0-3.72-.952-4.609-2.187c-.861-1.196-1.141-2.61-1.141-3.563V6.31l-3.72 3.72a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowToTopRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowUpBoldIcon],svg[solar-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 20a.75.75 0 0 1-1.5 0v-9.25H6a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28h-5.25z"></svg:path>`,
})
export class SolarArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAsteroidBoldIcon],svg[solar-asteroid-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2c2.127 0 4.098.664 5.719 1.796a6.752 6.752 0 0 0 3.936 10.82C20.505 18.87 16.618 22 12 22q-.96-.002-1.868-.174a6.75 6.75 0 0 0-8.117-9.279A10 10 0 0 1 2 12m14 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5.5-5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.75 8c0-1.231.423-2.361 1.131-3.256a9.97 9.97 0 0 1 3.055 8.398A5.25 5.25 0 0 1 17.75 8M8.658 21.428a10.02 10.02 0 0 1-6.445-7.368l.111-.037a5.25 5.25 0 0 1 6.386 7.299z"></svg:path>`,
})
export class SolarAsteroidBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAtomBoldIcon],svg[solar-atom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.002 6.998a25 25 0 0 0-3.54-2.952c1.377-.7 2.682-1.122 3.813-1.253c1.427-.165 2.482.139 3.137.794c.656.656.96 1.71.794 3.137c-.13 1.132-.552 2.436-1.253 3.814a25 25 0 0 0-2.951-3.54"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.941 8.059a23 23 0 0 1 3.179 3.94a23 23 0 0 1-3.179 3.941a23 23 0 0 1-3.94 3.179a23 23 0 0 1-3.942-3.179A23 23 0 0 1 4.881 12A23 23 0 0 1 8.06 8.057A23 23 0 0 1 12 4.88a23 23 0 0 1 3.941 3.179M12 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.462 19.953A25 25 0 0 0 17.002 17a25 25 0 0 0 2.951-3.54c.701 1.378 1.123 2.682 1.253 3.813c.165 1.427-.138 2.482-.794 3.137c-.655.656-1.71.96-3.137.794c-1.131-.13-2.436-.551-3.813-1.252M6.999 17a25 25 0 0 0 3.54 2.953c-1.378.7-2.682 1.122-3.814 1.252c-1.427.165-2.48-.138-3.136-.794c-.656-.655-.96-1.71-.795-3.137c.13-1.131.552-2.435 1.253-3.813A25 25 0 0 0 7 17.001m-2.953-6.463A25 25 0 0 1 7 6.998a25 25 0 0 1 3.54-2.952c-1.378-.7-2.682-1.122-3.814-1.253c-1.427-.164-2.481.139-3.137.794c-.655.656-.959 1.71-.794 3.138c.13 1.131.552 2.435 1.253 3.813"></svg:path>`,
})
export class SolarAtomBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAugmentedRealityBoldIcon],svg[solar-augmented-reality-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m7.216-4.224a.75.75 0 0 0-1.432 0l-2.5 8a.75.75 0 0 0 1.432.448l.71-2.274h2.148l.71 2.274a.75.75 0 0 0 1.432-.448zm-1.32 4.674h1.209L8.5 10.515zM13.25 8a.75.75 0 0 1 .75-.75h2a2.75 2.75 0 0 1 .783 5.387l1.853 2.965a.75.75 0 1 1-1.272.796l-2.28-3.648h-.334V16a.75.75 0 0 1-1.5 0zm1.5 3.25v-2.5H16a1.25 1.25 0 1 1 0 2.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAugmentedRealityBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBackpackBoldIcon],svg[solar-backpack-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.292 4.786v-.061c0-.339.011-.782.165-1.222A3.75 3.75 0 0 1 11 1h2a3.75 3.75 0 0 1 3.544 2.503c.153.44.165.883.165 1.222v.06a5.97 5.97 0 0 1 4.29 5.631l.001.18v2.323a.8.8 0 0 0-.304.064a21.54 21.54 0 0 1-17.391 0A.75.75 0 0 0 3 12.92v-2.503a5.97 5.97 0 0 1 4.291-5.63m1.582-.794A2.25 2.25 0 0 1 11 2.49h2c.983 0 1.82.626 2.126 1.502c.046.13.068.28.077.47c-2.12-.36-4.286-.36-6.406 0c.009-.19.031-.34.077-.47m.376 8.679c0-.412.336-.745.75-.745h4c.414 0 .75.333.75.745a.747.747 0 0 1-.75.745h-4a.747.747 0 0 1-.75-.745" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21 14.477q-1.352.573-2.75.966v1.201a.747.747 0 0 1-.75.745a.747.747 0 0 1-.75-.745v-.832A23.06 23.06 0 0 1 3 14.477v1.546a4.495 4.495 0 0 0 3.539 4.381c3.597.794 7.325.794 10.923 0A4.495 4.495 0 0 0 21 16.025z"></svg:path>`,
})
export class SolarBackpackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBackspaceBoldIcon],svg[solar-backspace-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.871 19.499c.93.501 2.044.501 4.271.501h2.637c3.875 0 5.813 0 7.017-1.172S22 15.771 22 12s0-5.657-1.204-6.828S17.654 4 13.78 4h-2.637c-2.227 0-3.341 0-4.27.501c-.93.502-1.52 1.42-2.701 3.259L3.49 8.82C2.497 10.366 2 11.14 2 12s.497 1.634 1.49 3.18l.68 1.06c1.181 1.838 1.771 2.757 2.701 3.259m4.16-10.53A.75.75 0 0 0 9.97 10.03L11.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L13 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L14.06 12l1.97-1.97a.75.75 0 0 0-1.06-1.06L13 10.94z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBackspaceBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBacteriaBoldIcon],svg[solar-bacteria-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M9 12a3 3 0 1 0 0 6a3 3 0 0 0 0-6M5.201 9.807a.75.75 0 0 1 .406.98l-.414 1a.75.75 0 0 1-1.386-.574l.414-1a.75.75 0 0 1 .98-.406m8.52-2.533a.75.75 0 0 0 .84.641c.663-.036 1.988.31 1.988 1.988a.75.75 0 0 0 .642.84c.41.056.793-.264.85-.674l.005-.062q.008-.076.01-.202a4 4 0 0 0-.046-.654c-.083-.52-.308-1.217-.894-1.803c-.585-.586-1.282-.81-1.802-.893a3.8 3.8 0 0 0-.856-.037l-.09.01a.755.755 0 0 0-.646.846M9.744 9.19a.75.75 0 0 1-.64.846h-.006l-.007.002l-.02.002l-.063.006q-.076.006-.201.01a4 4 0 0 1-.655-.047c-.52-.082-1.217-.307-1.803-.893s-.81-1.282-.893-1.802a3.8 3.8 0 0 1-.03-.919l.002-.02l.001-.007a.75.75 0 0 1 1.487.194c-.036.662.31 1.987 1.988 1.987a.75.75 0 0 1 .84.641m9.993 3.803a.75.75 0 0 1-.577.876h-.002l-.059.021a1 1 0 0 0-.25.14c-.192.141-.458.418-.607.973c-.149.556-.057.928.04 1.146a1.1 1.1 0 0 0 .186.294l.002.002a.75.75 0 0 1-.997 1.12l.493-.565l-.492.566l-.002-.002h-.001l-.003-.004l-.008-.006l-.018-.017l-.05-.049a2.6 2.6 0 0 1-.484-.734c-.225-.511-.357-1.234-.115-2.139s.718-1.465 1.17-1.795a2.6 2.6 0 0 1 .786-.393l.067-.018l.024-.005l.01-.002l.004-.001h.002s.002-.001.145.735l-.143-.736a.75.75 0 0 1 .88.593M12.83 17.31a.75.75 0 0 1 1.052-.131l1.579 1.228a.75.75 0 1 1-.921 1.184l-1.579-1.228a.75.75 0 0 1-.131-1.053M15.25 12a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM10 4.25h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5m2.03 3.72a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 1 0 1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBacteriaBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag2BoldIcon],svg[solar-bag-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zm5.99 5.877a.75.75 0 1 0-1.48.246l1 6a.75.75 0 1 0 1.48-.246zm-6.617-.617a.75.75 0 0 0-.863.617l-1 6a.75.75 0 1 0 1.48.246l1-6a.75.75 0 0 0-.617-.863" clip-rule="evenodd"></svg:path>`,
})
export class SolarBag2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag3BoldIcon],svg[solar-bag-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.574 4.691c-.833.692-1.053 1.862-1.492 4.203l-.75 4c-.617 3.292-.925 4.938-.026 6.022C4.206 20 5.88 20 9.23 20h5.54c3.35 0 5.024 0 5.924-1.084s.59-2.73-.026-6.022l-.75-4c-.44-2.34-.659-3.511-1.492-4.203C17.593 4 16.402 4 14.02 4H9.98c-2.382 0-3.573 0-4.406.691m4.304 3.06a2.251 2.251 0 0 0 4.245 0a.75.75 0 0 1 1.414.499a3.751 3.751 0 0 1-7.073 0a.75.75 0 1 1 1.414-.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarBag3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag4BoldIcon],svg[solar-bag-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 7.013V6a3.75 3.75 0 1 1 7.5 0v1.013c1.297.037 2.087.17 2.692.667c.83.68 1.06 1.834 1.523 4.143l.6 3c.664 3.32.996 4.98.096 6.079S18.067 22 14.68 22H9.32c-3.386 0-5.08 0-5.98-1.098s-.568-2.758.096-6.079l.6-3c.462-2.309.693-3.463 1.522-4.143c.606-.496 1.396-.63 2.693-.667M9.75 6a2.25 2.25 0 0 1 4.5 0v1h-4.5zM15 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBag4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag5BoldIcon],svg[solar-bag-5-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 7.002V6a3.75 3.75 0 1 1 7.5 0v1.002c2.684.012 4.11.12 4.91 1.096c.9 1.098.569 2.758-.095 6.079l-.6 3c-.462 2.309-.693 3.463-1.523 4.143c-.829.68-2.006.68-4.36.68H9.918c-2.355 0-3.532 0-4.362-.68c-.829-.68-1.06-1.834-1.522-4.143l-.6-3c-.664-3.32-.996-4.98-.096-6.079c.8-.976 2.227-1.084 4.911-1.096M9.75 6a2.25 2.25 0 0 1 4.5 0v1h-4.5zM15 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBag5BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagBoldIcon],svg[solar-bag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 6.015V5a3.75 3.75 0 0 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 1 1 4.5 0v1h-4.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagCheckBoldIcon],svg[solar-bag-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zm5.719 5.914a.75.75 0 0 1 .117 1.055l-4 5a.75.75 0 0 1-1.116.061l-2-2a.75.75 0 0 1 1.06-1.06l1.408 1.407l3.476-4.346a.75.75 0 0 1 1.055-.117" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagCrossBoldIcon],svg[solar-bag-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zm-1.28 5.47a.75.75 0 0 1 1.06 0L12 12.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 14l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 15.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 14l-2.47-2.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagCrossBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagHeartBoldIcon],svg[solar-bag-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zM9 13.197c0 .984 1.165 2.024 2.043 2.669c.42.308.63.462.957.462c.328 0 .537-.154.957-.462c.878-.645 2.043-1.685 2.043-2.67c0-1.672-1.65-2.297-3-1.005c-1.35-1.292-3-.668-3 1.006" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagHeartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagMusic2BoldIcon],svg[solar-bag-music-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zm4 5a.75.75 0 0 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagMusic2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagMusicBoldIcon],svg[solar-bag-music-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.868 10.412a1 1 0 0 1 .11-.043a.25.25 0 0 1 .254.157a1 1 0 0 1 .011.117c.007.118.007.277.007.528a7 7 0 0 1-.005.259a.25.25 0 0 1-.093.15l-.038.022c-.04.023-.095.05-.191.098l-1.317.658a10 10 0 0 1-.474.23a1 1 0 0 1-.11.043a.25.25 0 0 1-.254-.157a1 1 0 0 1-.012-.117a11 11 0 0 1-.006-.528a7 7 0 0 1 .005-.259a.25.25 0 0 1 .093-.15l.038-.022c.04-.023.095-.05.191-.098l1.317-.658c.224-.113.366-.183.474-.23M10 15.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zM10 19.75A2.75 2.75 0 0 0 12.75 17v-2.886q.222.032.453.006c.198-.023.377-.09.528-.156c.149-.065.326-.154.53-.256l1.37-.685a2.6 2.6 0 0 0 .432-.25a1.75 1.75 0 0 0 .656-1.062c.031-.166.031-.338.031-.5v-.059c0-.227 0-.426-.009-.587a1.9 1.9 0 0 0-.096-.543a1.75 1.75 0 0 0-1.848-1.142c-.198.023-.377.09-.528.156c-.149.065-.326.154-.53.256l-1.37.685a2.6 2.6 0 0 0-.432.25a1.75 1.75 0 0 0-.656 1.062c-.032.166-.031.378-.031.54v2.72a2.75 2.75 0 1 0-1.25 5.2" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagMusicBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagSmileBoldIcon],svg[solar-bag-smile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 7.013V6a3.75 3.75 0 1 1 7.5 0v1.013c1.297.037 2.087.17 2.692.667c.83.68 1.06 1.834 1.523 4.143l.6 3c.664 3.32.996 4.98.096 6.079S18.067 22 14.68 22H9.32c-3.386 0-5.08 0-5.98-1.098s-.568-2.758.096-6.079l.6-3c.462-2.309.693-3.463 1.522-4.143c.606-.496 1.396-.63 2.693-.667M9.75 6a2.25 2.25 0 0 1 4.5 0v1h-4.5zM12 17.25a2.25 2.25 0 0 1-2.122-1.5a.75.75 0 1 0-1.414.5a3.751 3.751 0 0 0 7.073 0a.75.75 0 0 0-1.415-.5A2.25 2.25 0 0 1 12 17.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagSmileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBalloonBoldIcon],svg[solar-balloon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.5 9.56c.033 4.143-3.419 7.973-7.56 7.94c-4.143-.033-7.406-3.918-7.44-8.06A7.355 7.355 0 0 1 11.94 2c4.141.034 7.526 3.419 7.56 7.56m-6.994-4.31a.75.75 0 0 0-.012 1.5a2.285 2.285 0 0 1 2.256 2.256a.75.75 0 0 0 1.5-.012a3.785 3.785 0 0 0-3.744-3.744" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.167 18.214c.332 1.063-.356 2.132-1.417 2.348V22a.75.75 0 0 1-1.5 0v-1.438c-1.06-.216-1.75-1.285-1.417-2.348l.007-.021a7.74 7.74 0 0 0 4.32-.002z"></svg:path>`,
})
export class SolarBalloonBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBallsBoldIcon],svg[solar-balls-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.988 12.985l-4.973-4.973a20 20 0 0 1 2.233.05a2.895 2.895 0 0 1 2.69 2.69c.052.664.08 1.426.05 2.233" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.752 21.939a2.895 2.895 0 0 1-2.69-2.691a20 20 0 0 1-.05-2.232l4.972 4.972c-.806.03-1.568.002-2.232-.05"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.366 10.367c1.26-1.26 2.99-1.888 4.714-2.17l6.722 6.723c-.28 1.725-.908 3.453-2.168 4.714c-1.261 1.26-2.99 1.887-4.715 2.168l-6.721-6.721c.28-1.725.908-3.454 2.168-4.714m4.604 1.603a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 1 1 1.06 1.06l-.47.47l.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47l-.44.44l.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47l-.44.44l.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47l-.47.47a.75.75 0 1 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 1 1 1.06-1.06l.47.47l.44-.44l-.47-.47a.75.75 0 1 1 1.06-1.06l.47.47l.44-.44l-.47-.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.932 10.498c-.819-1.283-1.697-2.125-2.36-2.642a7 7 0 0 0-.8-.546a4 4 0 0 0-.263-.14L2.5 7.165l-.312-.137a6.64 6.64 0 0 0 1 5.327a6.5 6.5 0 0 0 3.561 2.562l.02.005s.061-.686.155-1.115c.068-.315.137-.53.22-.795a11.7 11.7 0 0 0-1.213-2.515m3.696-7.185c.22.874.643 2.074 1.462 3.358q.335.524.677.952a9.5 9.5 0 0 1 2.041-.697c.367-.083.948-.169.948-.169l-.004-.015a6.6 6.6 0 0 0-.92-1.93a6.5 6.5 0 0 0-4.425-2.746q.006.085.023.217c.03.24.089.594.198 1.03M7.905 2.126l-.007-.099A6.4 6.4 0 0 0 4.773 3.19A6.5 6.5 0 0 0 2.706 5.6l.393.173h.002l.003.002l.009.004l.026.012l.086.042c.07.036.17.088.291.159c.243.14.579.356.97.66c.78.609 1.783 1.575 2.706 3.022c.306.48.564.95.78 1.401a8 8 0 0 1 1.334-1.77a8 8 0 0 1 1.133-.938q-.309-.404-.61-.876a13 13 0 0 1-1.657-3.809a10 10 0 0 1-.231-1.21a7 7 0 0 1-.036-.347"></svg:path>`,
})
export class SolarBallsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBanknote2BoldIcon],svg[solar-banknote-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.941 8.189c.58.573.83 1.295.947 2.152c.112.826.112 1.876.112 3.178v.105c0 1.302 0 2.352-.112 3.178c-.117.857-.367 1.579-.947 2.152s-1.31.82-2.178.935c-.835.111-1.898.111-3.216.111h-4.925c-1.318 0-2.38 0-3.216-.111c-.868-.115-1.598-.362-2.178-.935a3 3 0 0 1-.735-1.204c.871.107 1.95.107 3.195.107h5.01c1.281 0 2.385 0 3.27-.117c.947-.126 1.856-.41 2.593-1.138s1.024-1.626 1.151-2.562c.12-.874.12-1.965.119-3.232v-.188c0-1.23 0-2.296-.11-3.158c.46.151.868.379 1.22.727m-10.748.859c-.932 0-1.687.746-1.687 1.666s.755 1.667 1.687 1.667c.931 0 1.686-.746 1.686-1.667c0-.92-.755-1.666-1.686-1.666"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.847 5.837C2 6.674 2 8.02 2 10.714s0 4.041.847 4.878s2.21.837 4.936.837h4.82c2.725 0 4.088 0 4.935-.837s.847-2.184.847-4.878s0-4.04-.847-4.877S15.328 5 12.602 5H7.783c-2.726 0-4.09 0-4.936.837m4.213 4.877c0-1.71 1.403-3.095 3.133-3.095s3.132 1.386 3.132 3.095s-1.402 3.096-3.132 3.096s-3.133-1.386-3.133-3.096m8.434 2.62c-.4 0-.723-.32-.723-.715V8.81c0-.394.323-.714.723-.714s.723.32.723.715v3.81a.72.72 0 0 1-.723.713m-11.325-.715c0 .395.323.714.723.714s.722-.32.722-.714V8.81a.72.72 0 0 0-.722-.714c-.4 0-.723.32-.723.715z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBanknote2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBanknoteBoldIcon],svg[solar-banknote-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.778 18.326C4.787 19 6.19 19 9 19h6c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C19.213 5 17.81 5 15 5H9c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104M12 15.75a3.75 3.75 0 1 1 0-7.5a3.75 3.75 0 0 1 0 7.5m-6.5 0a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75M17.75 15a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBanknoteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBarChairBoldIcon],svg[solar-bar-chair-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.755 2.308A4 4 0 0 0 5.46 6.733l.017.14a1 1 0 0 0 .992.879h1.764L5.267 21.595a.75.75 0 0 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.467-.314L15.766 7.752h1.764a1 1 0 0 0 .993-.88l.017-.139a4 4 0 0 0-3.295-4.425l-.373-.064a17 17 0 0 0-5.745 0zm5.495 5.444h-4.5a1 1 0 0 1-.016.157l-1.735 8.093h8.002l-1.734-8.093a1 1 0 0 1-.017-.157" clip-rule="evenodd"></svg:path>`,
})
export class SolarBarChairBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBasketballBoldIcon],svg[solar-basketball-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.865 20.583A9.96 9.96 0 0 1 3.339 17A9.96 9.96 0 0 1 2 12.159l.145.028c2.949.581 6.304-.469 9.061-2.162q.545-.334 1.065-.706c.413.516.783 1.04 1.08 1.556c.375.647.713 1.417 1.015 2.24q-.778.377-1.508.822c-2.792 1.699-5.174 4.176-5.992 6.644zm9.395.465a10 10 0 0 1-8.04.21l.069-.204c.663-2.002 2.72-4.237 5.348-5.836q.592-.36 1.206-.667c.252.83.471 1.671.655 2.462a51 51 0 0 1 .699 3.597l.008.053l.002.012v.004z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.226 13.943c1.887-.72 3.811-.996 5.477-.63l.204.045a10 10 0 0 1-.71 2.57a9.95 9.95 0 0 1-3.538 4.317l-.013-.079a52 52 0 0 0-.687-3.494a40 40 0 0 0-.733-2.73m-2.773-5.545c1.728-1.469 3.087-3.21 3.672-4.949l.01-.03A9.96 9.96 0 0 1 20.66 7A9.95 9.95 0 0 1 22 11.842c-1.995-.431-4.186-.1-6.256.68c-.32-.864-.685-1.687-1.094-2.397a14 14 0 0 0-1.197-1.728M8.319 3.454a35 35 0 0 0-.6-.465l-.023-.016a9.95 9.95 0 0 1 5.5-.902c.887.107 1.757.333 2.584.67l-.077.229c-.477 1.418-1.65 2.95-3.228 4.29a32 32 0 0 0-2.203-2.16A42 42 0 0 0 8.32 3.453m2.1 5.294c-2.586 1.588-5.55 2.449-7.987 1.969l-.342-.068a10 10 0 0 1 4.19-6.853l.328.239l.002.001l.01.007l.039.029l.154.115a40 40 0 0 1 2.456 2.03c.66.592 1.358 1.26 2.013 1.965q-.42.293-.863.566"></svg:path>`,
})
export class SolarBasketballBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBathBoldIcon],svg[solar-bath-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4.135a1.635 1.635 0 0 1 3.153-.607l.144.358a4.1 4.1 0 0 0-1.38 1.774a4.18 4.18 0 0 0-.02 3.107a.75.75 0 0 0 .995.413l5.96-2.566a.75.75 0 0 0 .402-.963a3.97 3.97 0 0 0-2.132-2.213a3.84 3.84 0 0 0-2.466-.192l-.11-.275A3.135 3.135 0 0 0 2 4.135V11h-.25a.75.75 0 0 0 0 1.5H2v.355c0 .375 0 .595.016.84c.142 2.237 1.35 4.302 3.102 5.652l-.039.068l-1 2a.75.75 0 0 0 1.342.67l.968-1.935a7.4 7.4 0 0 0 2.58.765c.245.025.394.03.648.04h.007c.74.028 1.464.045 2.126.045s1.386-.017 2.126-.045h.007c.254-.01.404-.015.648-.04a7.4 7.4 0 0 0 2.58-.765l.968 1.936a.75.75 0 0 0 1.342-.671l-1-2l-.038-.068c1.751-1.35 2.96-3.416 3.102-5.652c.015-.245.015-.465.015-.84v-.038c0-.06 0-.123-.004-.18a2 2 0 0 0-.014-.137h.268a.75.75 0 0 0 0-1.5H3.5z"></svg:path>`,
})
export class SolarBathBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeBoldIcon],svg[solar-battery-charge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828H20c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14h-.509c-.036 2.48-.22 3.885-1.163 4.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m9.98-3.576a.75.75 0 0 1 .096 1.056l-1.475 1.77H12.5a.75.75 0 0 1 .576 1.23l-2.5 3a.75.75 0 0 1-1.152-.96l1.475-1.77H9a.75.75 0 0 1-.576-1.23l2.5-3a.75.75 0 0 1 1.056-.096" clip-rule="evenodd"></svg:path>`,
})
export class SolarBatteryChargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeMinimalisticBoldIcon],svg[solar-battery-charge-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m9.98-3.576a.75.75 0 0 1 .096 1.056l-1.475 1.77H12.5a.75.75 0 0 1 .576 1.23l-2.5 3a.75.75 0 0 1-1.152-.96l1.475-1.77H9a.75.75 0 0 1-.576-1.23l2.5-3a.75.75 0 0 1 1.056-.096" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarBatteryChargeMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullBoldIcon],svg[solar-battery-full-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172c.944.943 1.127 2.348 1.163 4.828H20c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14h-.509c-.036 2.48-.22 3.885-1.163 4.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.292a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007zM10.5 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L14 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001l-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path>`,
})
export class SolarBatteryFullBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullMinimalisticBoldIcon],svg[solar-battery-full-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.292a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007zM10.5 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L14 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001l-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarBatteryFullMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfBoldIcon],svg[solar-battery-half-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172c.944-.943 1.127-2.348 1.163-4.828H20c.943 0 1.414 0 1.707-.293S22 12.943 22 12s0-1.414-.293-1.707S20.943 10 20 10h-.509c-.036-2.48-.22-3.885-1.163-4.828C17.157 4 15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172m4.484 3.464a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L7 15l.656.363l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.202-.631c.142-.551.274-1.364.274-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007l-.002-.004zM7 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L10.5 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001l-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path>`,
})
export class SolarBatteryHalfBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfMinimalisticBoldIcon],svg[solar-battery-half-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172m4.484 3.464a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L7 15l.656.363l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.202-.631c.142-.551.274-1.364.274-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007l-.002-.004zM7 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L10.5 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.203.631c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001l-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarBatteryHalfMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowBoldIcon],svg[solar-battery-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172c.944-.943 1.127-2.348 1.163-4.828H20c.943 0 1.414 0 1.707-.293S22 12.943 22 12s0-1.414-.293-1.707S20.943 10 20 10h-.509c-.036-2.48-.22-3.885-1.163-4.828C17.157 4 15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172m3.464 3.172a.75.75 0 0 1 1.02.292L7 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path>`,
})
export class SolarBatteryLowBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBatteryLowMinimalisticBoldIcon],svg[solar-battery-low-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363l.001.001l.002.004l.004.007l.01.018l.026.053q.03.064.075.175c.06.147.132.356.202.631c.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018l-.003.007l-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01l.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarBatteryLowMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedBoldIcon],svg[solar-bed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 10.5V7.25H9.5c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095zm6.5 0c0-.964-.002-1.612-.067-2.095c-.061-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-1.75v3.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 4h-2C7.229 4 5.343 4 4.172 5.172c-1.023 1.022-1.153 2.588-1.17 5.477v1.618a2 2 0 0 0-.85.968C2 13.602 2 14.068 2 15s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.252.104.55.137 1.015.147V20a.75.75 0 0 0 1.5 0v-2h12.5v2a.75.75 0 0 0 1.5 0v-2.005c.464-.01.763-.043 1.015-.147a2 2 0 0 0 1.083-1.083C22 16.398 22 15.932 22 15s0-1.398-.152-1.765a2 2 0 0 0-.85-.968v-1.618c-.017-2.889-.147-4.455-1.17-5.477C18.658 4 16.772 4 13 4m6.25 8v-1.552c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.725-1.65c-.456-.456-1.023-.642-1.65-.726c-.595-.08-1.345-.08-2.243-.08H9.448c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243V12z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable2BoldIcon],svg[solar-bedside-table-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.974 7.25H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078M2 10q0-.663.002-1.25h19.996Q22 9.337 22 10v2q0 .662-.002 1.25H2.002Q1.999 12.662 2 12zm19.974 4.75H2.026c.066 2.021.302 3.235 1.146 4.078a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTable2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable3BoldIcon],svg[solar-bedside-table-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v.25H2zm6.25-3.5A.75.75 0 0 1 9 5.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M2 11.75h20V12c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.806 20 14 20h-4c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.657 2 15.771 2 12zm6.25 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTable3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable4BoldIcon],svg[solar-bedside-table-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 9.75q0-.663.002-1.25h9.248v11.25H10c-1.806 0-3.18 0-4.25-.129v2.129a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.407 2 15.521 2 11.75zM9 11a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 9 11" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.974 7H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 1.75 6.229 1.75 10 1.75h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 8.5h9.248Q22 9.087 22 9.75v2c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697v2.475a.75.75 0 0 1-1.5 0v-2.129c-1.07.129-2.444.129-4.25.129h-1.25zM15 11a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 15 11" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTable4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTableBoldIcon],svg[solar-bedside-table-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.974 7.25H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078M13 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M2 10q0-.663.002-1.25h19.996Q22 9.337 22 10v2q0 .662-.002 1.25H2.002Q1.999 12.662 2 12zm10 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m9.974 2.75H2.026c.066 2.021.302 3.235 1.146 4.078a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h4c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBedsideTableBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBingBoldIcon],svg[solar-bell-bing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.75 9.704V9c0-3.866-3.023-7-6.75-7S5.25 5.134 5.25 9v.704c0 .845-.24 1.671-.692 2.374L3.45 13.801c-1.011 1.574-.239 3.713 1.52 4.21a25.8 25.8 0 0 0 14.06 0c1.759-.497 2.531-2.636 1.52-4.21l-1.108-1.723a4.4 4.4 0 0 1-.693-2.374M12 5.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBellBingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellBoldIcon],svg[solar-bell-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"></svg:path>`,
})
export class SolarBellBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBellOffBoldIcon],svg[solar-bell-off-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7m-8.678.75A.737.737 0 0 1 9.349 9c0-.414.323-.75.723-.75h3.856c.293 0 .556.183.668.463a.77.77 0 0 1-.156.817l-2.622 2.72h2.11c.4 0 .723.336.723.75s-.323.75-.723.75h-3.856a.72.72 0 0 1-.668-.463a.77.77 0 0 1 .156-.817l2.623-2.72z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBellOffBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBenzeneRingBoldIcon],svg[solar-benzene-ring-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.98 4.88C10.965 4.292 11.458 4 12 4s1.035.293 2.02.88l2.96 1.758c.705.42 1.158.689 1.458.985l3.126-2.233a.75.75 0 1 1 .872 1.22l-3.454 2.467c.018.314.018.692.018 1.164v3.518c0 1.172 0 1.758-.27 2.241c-.271.483-.765.776-1.75 1.362l-2.96 1.759c-.985.586-1.479.879-2.02.879s-1.034-.293-2.02-.88l-2.96-1.758c-.635-.378-1.066-.634-1.364-.898l-3.24 2.16a.75.75 0 1 1-.832-1.248l3.445-2.297C5 14.737 5 14.314 5 13.76v-3.52c0-.554 0-.977.029-1.32L1.584 6.623a.75.75 0 0 1 .832-1.248l3.24 2.16c.298-.264.729-.52 1.365-.898zm6.664 9.236a.75.75 0 0 1-.26 1.028l-4 2.384a.75.75 0 1 1-.768-1.288l4-2.384a.75.75 0 0 1 1.028.26" clip-rule="evenodd"></svg:path>`,
})
export class SolarBenzeneRingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingBoldIcon],svg[solar-bicycling-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m12.161 7.115l.613.609c.909.903 1.225 1.2 1.605 1.356s.814.17 2.095.17H18.5a.75.75 0 0 1 0 1.5h-2.168c-1.083 0-1.836 0-2.525-.283c-.689-.284-1.222-.815-1.99-1.58l-.1-.1l-.578-.573c-.409-.406-.66-.653-.86-.803a.8.8 0 0 0-.185-.11l-.01.006a.8.8 0 0 0-.152.135c-.17.185-.373.472-.701.946l-1.227 1.767c-.334.482-.537.777-.652 1.007a.8.8 0 0 0-.076.204l.007.008a.8.8 0 0 0 .165.125c.218.135.546.28 1.083.515l1.516.66c.648.284 1.194.522 1.614.768c.447.262.825.572 1.078 1.035c.253.464.311.949.29 1.466c-.019.487-.113 1.076-.224 1.774l-.064.401a.75.75 0 1 1-1.482-.236l.058-.359c.12-.752.198-1.252.214-1.64c.014-.367-.033-.549-.108-.686c-.075-.136-.202-.275-.52-.46c-.334-.197-.797-.4-1.496-.705l-1.476-.644l-.046-.02c-.476-.208-.905-.395-1.226-.593c-.348-.215-.69-.515-.827-1c-.138-.486-.004-.92.18-1.286c.168-.336.435-.72.731-1.148l.029-.041l1.227-1.768l.028-.04c.29-.42.553-.798.806-1.07c.275-.296.63-.57 1.125-.615s.893.16 1.217.402c.297.222.624.546.986.906M6 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M2.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBicyclingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBicyclingRoundBoldIcon],svg[solar-bicycling-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.919 8.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.378-.59l.76-1.775a1.14 1.14 0 0 0-.592-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.159 1.719a.9.9 0 0 0 .57.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.42 2.42 0 0 1-1.505-.526zM6 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M2.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBicyclingRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillBoldIcon],svg[solar-bill-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.25a.75.75 0 0 0 0 1.5h2v9.527c0 1.34 0 2.01.268 2.601s.772 1.032 1.781 1.915l2 1.75c1.883 1.647 2.824 2.47 3.951 2.47s2.069-.823 3.951-2.47l2-1.75c1.008-.883 1.513-1.324 1.78-1.915c.269-.59.269-1.26.269-2.6V2.75h2a.75.75 0 0 0 0-1.5zm6.5 11a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM7.75 8a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 8" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCheckBoldIcon],svg[solar-bill-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2m7.815 6.5a.75.75 0 0 0-1.12-1l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0zM7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillCrossBoldIcon],svg[solar-bill-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.333 2h11.334c.31 0 .464 0 .595.012c1.45.133 2.6 1.34 2.727 2.861c.011.137.011.3.011.624V20.26c0 .872-1.059 1.243-1.558.544a.84.84 0 0 0-1.384 0l-.433.606a1.367 1.367 0 0 1-2.25 0a1.367 1.367 0 0 0-2.25 0a1.367 1.367 0 0 1-2.25 0a1.367 1.367 0 0 0-2.25 0a1.367 1.367 0 0 1-2.25 0l-.433-.605a.84.84 0 0 0-1.384 0c-.5.698-1.558.327-1.558-.545V5.497c0-.324 0-.487.011-.624c.127-1.521 1.277-2.728 2.728-2.861C5.869 2 6.024 2 6.333 2m4.197 5.47a.75.75 0 1 0-1.06 1.06L10.94 10l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 11.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 10l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 8.94zM7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillCrossBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBillListBoldIcon],svg[solar-bill-list-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2M7 6.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 10.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBillListBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole2BoldIcon],svg[solar-black-hole-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.165 3.384a.75.75 0 0 0 1.218.876q.266-.371.623-.73a.75.75 0 0 0-1.06-1.06q-.442.442-.78.914m-.338 5.26a.75.75 0 0 1-.834-.656a6.6 6.6 0 0 1 .144-2.411a.75.75 0 0 1 1.455.366a5.1 5.1 0 0 0-.11 1.868a.75.75 0 0 1-.655.833m1.007 3.63a.75.75 0 0 0 1.18-.925a8 8 0 0 1-1.012-1.683a.75.75 0 1 0-1.373.605c.317.721.73 1.397 1.205 2.003m9.277-.676a.75.75 0 0 1 1.053.128a9.4 9.4 0 0 1 1.205 2.003a.75.75 0 1 1-1.373.605a8 8 0 0 0-1.012-1.683a.75.75 0 0 1 .127-1.053m2.894 4.414a.75.75 0 0 0-1.49.177a5.1 5.1 0 0 1-.109 1.868a.75.75 0 1 0 1.455.367a6.6 6.6 0 0 0 .144-2.412m-1.342 3.557a.75.75 0 0 1 .17 1.047q-.338.473-.78.914a.75.75 0 1 1-1.06-1.06a6 6 0 0 0 .623-.73a.75.75 0 0 1 1.047-.171M11.598 7.888a.75.75 0 0 1 .128-1.053a9.4 9.4 0 0 1 2.003-1.205a.75.75 0 0 1 .605 1.373c-.601.264-1.17.61-1.683 1.012a.75.75 0 0 1-1.053-.127m4.414-2.894a.75.75 0 0 0 .177 1.49a5.1 5.1 0 0 1 1.868.109a.75.75 0 0 0 .367-1.455a6.6 6.6 0 0 0-2.412-.144m3.557 1.342a.75.75 0 0 1 1.047-.17q.473.338.914.78a.75.75 0 1 1-1.06 1.06a6 6 0 0 0-.73-.623a.75.75 0 0 1-.171-1.047m-7.167 9.776a.75.75 0 0 1-.128 1.053a9.4 9.4 0 0 1-2.003 1.205a.75.75 0 1 1-.605-1.373a8 8 0 0 0 1.683-1.012a.75.75 0 0 1 1.053.127m-4.414 2.894a.75.75 0 0 0-.177-1.49a5.1 5.1 0 0 1-1.868-.109a.75.75 0 1 0-.366 1.455c.806.203 1.62.238 2.411.144m-3.557-1.342a.75.75 0 0 1-1.047.17a7.4 7.4 0 0 1-.914-.78a.75.75 0 1 1 1.06-1.06q.359.357.73.623a.75.75 0 0 1 .171 1.047m6.225-2.634a.75.75 0 0 0 .641-.113a3 3 0 0 0 1.283.027a.75.75 0 0 0 1.342.553c.507-.671.897-1.404 1.108-2.152a.75.75 0 0 0-.113-.642a3 3 0 0 0 .027-1.283a.75.75 0 0 0 .553-1.342c-.671-.507-1.404-.897-2.152-1.108a.75.75 0 0 0-.642.113a3 3 0 0 0-1.283-.027a.75.75 0 0 0-1.342-.553c-.507.671-.897 1.404-1.108 2.153a.75.75 0 0 0 .113.641a3 3 0 0 0-.027 1.283a.75.75 0 0 0-.553 1.342c.671.507 1.404.897 2.153 1.108"></svg:path>`,
})
export class SolarBlackHole2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole3BoldIcon],svg[solar-black-hole-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.928 12.453c.406.836 1.016 1.541 1.825 1.942c-.793.183-1.71.22-2.648.087C5.315 14.087 2.75 12.284 2.75 9a.75.75 0 0 0-1.5 0c0 4.316 3.436 6.513 6.645 6.968c1.612.228 3.27.042 4.558-.584c.868-.422 1.596-1.065 1.988-1.921c.142.741.162 1.578.041 2.432c-.395 2.79-2.198 5.355-5.482 5.355a.75.75 0 0 0 0 1.5c4.316 0 6.513-3.436 6.968-6.645c.228-1.612.042-3.27-.584-4.558c-.346-.712-.84-1.33-1.48-1.745a7.7 7.7 0 0 1 1.99.027c2.792.396 5.356 2.198 5.356 5.483a.75.75 0 0 0 1.5 0c0-4.316-3.436-6.513-6.645-6.968c-1.612-.228-3.27-.043-4.558.584c-.692.336-1.294.812-1.709 1.425a7.6 7.6 0 0 1-.009-2.248c.396-2.79 2.198-5.355 5.483-5.355a.75.75 0 0 0 0-1.5c-4.316 0-6.513 3.436-6.968 6.645c-.228 1.612-.043 3.27.584 4.558"></svg:path>`,
})
export class SolarBlackHole3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBlackHoleBoldIcon],svg[solar-black-hole-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.676 11.946a.75.75 0 0 0 1.18-.925a8 8 0 0 1-1.01-1.677a.75.75 0 1 0-1.372.604c.316.72.728 1.394 1.202 1.998M4.84 7.672a.75.75 0 0 0 1.489-.178a5.1 5.1 0 0 1 .109-1.862a.75.75 0 1 0-1.455-.366a6.6 6.6 0 0 0-.144 2.406M6.007 3.08a.75.75 0 0 0 1.218.875q.265-.37.621-.727a.75.75 0 0 0-1.06-1.061a7.4 7.4 0 0 0-.779.912m11.629 8.975a.75.75 0 0 0-1.18.925c.4.511.745 1.079 1.009 1.677a.75.75 0 1 0 1.373-.604a9.4 9.4 0 0 0-1.202-1.998m1.836 4.274a.75.75 0 0 0-1.49.178a5.1 5.1 0 0 1-.108 1.862a.75.75 0 1 0 1.454.366a6.6 6.6 0 0 0 .144-2.406m-1.168 4.592a.75.75 0 0 0-1.218-.875a6 6 0 0 1-.62.727a.75.75 0 0 0 1.06 1.061q.44-.44.778-.912M12.082 7.573a.75.75 0 0 1 .127-1.053a9.4 9.4 0 0 1 1.998-1.202a.75.75 0 0 1 .605 1.373a8 8 0 0 0-1.678 1.01a.75.75 0 0 1-1.053-.128m3.747-2.056a.75.75 0 0 1 .656-.833a6.6 6.6 0 0 1 2.405.143a.75.75 0 0 1-.366 1.455a5.1 5.1 0 0 0-1.862-.109a.75.75 0 0 1-.833-.656m4.202.506a.75.75 0 0 1 1.046-.171q.472.339.912.778a.75.75 0 1 1-1.06 1.06a6 6 0 0 0-.728-.62a.75.75 0 0 1-.17-1.047M12.103 17.48a.75.75 0 1 0-.926-1.18c-.51.4-1.078.746-1.677 1.01a.75.75 0 0 0 .604 1.372a9.4 9.4 0 0 0 1.999-1.202m-4.275 1.836a.75.75 0 0 0-.178-1.49a5.1 5.1 0 0 1-1.862-.108a.75.75 0 0 0-.366 1.455a6.6 6.6 0 0 0 2.406.143m-4.592-1.168a.75.75 0 0 0 .875-1.218a6 6 0 0 1-.727-.62a.75.75 0 1 0-1.06 1.06q.44.44.912.778"></svg:path><svg:path fill="currentColor" d="M13.746 15.817a.75.75 0 0 1-1.347-.407c-1.28.605-2.914.783-4.504.558C4.685 15.513 1.25 13.316 1.25 9a.75.75 0 0 1 1.5 0c0 3.284 2.564 5.087 5.355 5.482a7.7 7.7 0 0 0 1.872.04a7 7 0 0 1-1.638-.932a.75.75 0 0 1 .492-1.348c-.548-1.255-.703-2.821-.487-4.347c.455-3.21 2.652-6.645 6.968-6.645a.75.75 0 0 1 0 1.5c-3.285 0-5.087 2.564-5.483 5.355a8 8 0 0 0-.073 1.423c.212-.465.487-.918.81-1.345a.75.75 0 0 1 1.336.587c1.23-.499 2.735-.634 4.203-.426c3.21.455 6.645 2.652 6.645 6.968a.75.75 0 0 1-1.5 0c0-3.285-2.564-5.087-5.355-5.483a8 8 0 0 0-.959-.078q.537.28 1.037.659a.75.75 0 0 1-.492 1.348c.548 1.255.703 2.821.487 4.347c-.455 3.21-2.652 6.645-6.968 6.645a.75.75 0 0 1 0-1.5c3.284 0 5.087-2.564 5.482-5.355a8 8 0 0 0 .073-1.423a7.2 7.2 0 0 1-.809 1.345"></svg:path>`,
})
export class SolarBlackHoleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothBoldIcon],svg[solar-bluetooth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.743 15.158l-4.441-3.154l.006-.004l-.007-.005l4.442-3.154c.54-.383 1.012-.718 1.341-1.033c.351-.336.666-.765.666-1.35s-.315-1.014-.666-1.349c-.33-.315-.801-.65-1.341-1.034L14.91 2.774c-.73-.518-1.346-.956-1.857-1.216c-.52-.266-1.155-.465-1.79-.14c-.637.325-.844.959-.93 1.535c-.083.566-.083 1.319-.083 2.21v5.397L6.43 7.886a.75.75 0 1 0-.86 1.228L9.692 12L5.57 14.886a.75.75 0 0 0 .86 1.229l3.82-2.674v5.396c0 .89 0 1.643.084 2.209c.085.577.292 1.21.93 1.536c.634.325 1.27.125 1.79-.14c.51-.261 1.126-.698 1.856-1.216l1.832-1.302c.54-.384 1.013-.719 1.342-1.034c.351-.335.666-.764.666-1.35c0-.584-.315-1.013-.666-1.348c-.33-.316-.801-.65-1.341-1.034"></svg:path>`,
})
export class SolarBluetoothBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothCircleBoldIcon],svg[solar-bluetooth-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 16.376v-2.874l2 1.504c.135.102.243.184.333.255l.026.021l-.026.02c-.09.073-.198.154-.334.256l-1.454 1.094c-.227.171-.4.3-.539.397c-.005-.17-.006-.387-.006-.673m-.34.881h.004zm.388.193l-.001-.003zm-.048-9.827v2.874l2-1.504c.135-.102.243-.183.333-.255l.026-.02l-.026-.021a17 17 0 0 0-.334-.256l-1.454-1.094c-.227-.17-.4-.3-.539-.397c-.005.17-.006.387-.006.673m.047-1.07l.001-.004v.001z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.155-15.883c-.345-.26-.668-.502-.945-.653c-.283-.155-.75-.343-1.245-.095c-.493.248-.623.734-.67 1.053c-.045.312-.045.717-.045 1.15v2.827L8.48 8.924a.75.75 0 0 0-.96 1.152L9.828 12L7.52 13.924a.75.75 0 1 0 .96 1.152l1.77-1.475v2.827c0 .432 0 .837.046 1.15c.046.319.176.805.67 1.052c.494.248.96.06 1.244-.094c.277-.151.6-.394.945-.654l1.53-1.151c.237-.178.475-.357.648-.531c.194-.196.417-.494.417-.918c0-.423-.223-.722-.417-.918a6 6 0 0 0-.648-.53L12.248 12l2.437-1.834c.237-.178.475-.357.648-.53c.194-.197.417-.495.417-.919c0-.423-.223-.722-.417-.917a6 6 0 0 0-.648-.531z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBluetoothCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothSquareBoldIcon],svg[solar-bluetooth-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 16v-2.5l1.733 1.3l.264.2q-.109.084-.264.2l-1.333 1q-.238.179-.397.295A29 29 0 0 1 11.75 16m.04.96v-.003zM11.75 8v2.5l1.733-1.3c.105-.078.19-.143.264-.2q-.109-.084-.264-.2l-1.333-1q-.238-.178-.397-.294c-.003.133-.003.295-.003.494"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M13.01 6.57c-.314-.236-.614-.46-.872-.6c-.264-.144-.716-.329-1.197-.088c-.481.24-.605.713-.649 1.01c-.042.29-.042.665-.042 1.058v2.449L8.48 8.924a.75.75 0 1 0-.96 1.152L9.828 12L7.52 13.924a.75.75 0 0 0 .96 1.152l1.77-1.475v2.45c0 .392 0 .766.043 1.057c.043.298.167.77.648 1.01s.933.056 1.197-.087c.258-.14.558-.365.872-.6l1.407-1.056c.215-.161.437-.327.598-.49c.183-.184.402-.473.402-.885s-.219-.7-.402-.885a6 6 0 0 0-.598-.49L12.25 12l2.167-1.625c.215-.161.437-.327.598-.49c.183-.184.402-.473.402-.885s-.219-.7-.402-.885a6 6 0 0 0-.598-.49z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBluetoothSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothWaveBoldIcon],svg[solar-bluetooth-wave-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.51 12.004l4.099 2.934c.498.356.934.668 1.238.961c.324.312.614.711.614 1.255s-.29.944-.614 1.256c-.304.293-.74.604-1.239.961l-1.691 1.21c-.674.483-1.242.89-1.714 1.132c-.48.247-1.066.433-1.652.13c-.588-.303-.78-.892-.858-1.428c-.078-.526-.078-1.227-.078-2.055v-5.02L4.09 15.828a.69.69 0 0 1-.964-.172a.7.7 0 0 1 .17-.972L7.101 12L3.295 9.316a.7.7 0 0 1-.17-.971a.69.69 0 0 1 .964-.172l3.526 2.488V5.64c0-.83 0-1.53.078-2.056c.079-.536.27-1.125.858-1.428c.586-.303 1.172-.117 1.652.13c.472.242 1.04.65 1.714 1.131l1.691 1.21c.5.358.935.67 1.239.962c.324.313.614.712.614 1.256s-.29.943-.614 1.255c-.304.293-.74.605-1.239.961l-4.1 2.934l.007.004zm8.474-7.02a.69.69 0 0 1 .979.024l.001.001l.001.002l.004.003l.008.01a2 2 0 0 1 .1.117q.095.114.244.33c.196.288.448.712.697 1.284C20.518 7.9 21 9.623 21 12s-.482 4.1-.982 5.246a8 8 0 0 1-.697 1.284a5 5 0 0 1-.344.448l-.008.009l-.004.003l-.001.002l-.479-.458l.478.459a.69.69 0 0 1-.979.024a.7.7 0 0 1-.027-.983l.006-.007l.042-.05a4 4 0 0 0 .174-.236c.15-.221.36-.57.572-1.056c.423-.971.864-2.504.864-4.685s-.44-3.713-.864-4.684a6.5 6.5 0 0 0-.572-1.056a4 4 0 0 0-.215-.286l-.007-.007a.7.7 0 0 1 .027-.983"></svg:path><svg:path fill="currentColor" d="M16.306 7.656a.69.69 0 0 1 .929.312v.001l.001.002l.003.006l.01.02a7 7 0 0 1 .147.328c.093.218.215.527.338.897c.242.732.497 1.743.497 2.779s-.255 2.046-.497 2.778a12 12 0 0 1-.485 1.225l-.01.02l-.003.006v.002l-.001.001a.69.69 0 0 1-.93.312a.7.7 0 0 1-.309-.935l.001-.002l.006-.012a5 5 0 0 0 .12-.27c.08-.188.189-.46.297-.788c.22-.663.426-1.513.426-2.337s-.206-1.675-.426-2.338a10 10 0 0 0-.417-1.058l-.006-.012v-.001a.7.7 0 0 1 .309-.936"></svg:path>`,
})
export class SolarBluetoothWaveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyBoldIcon],svg[solar-body-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.062 22h-.124c-.76 0-1.139 0-1.469-.15c-.33-.149-.567-.428-1.041-.986l-2.382-2.803c-.465-.547-.697-.82-.818-1.145c-.12-.324-.12-.675-.12-1.376v-5.263c0-.685 0-1.027-.148-1.328c-.147-.301-.423-.524-.975-.97l-.208-.167C3.595 6.858 3.004 6.38 3 5.69s.52-1.124 1.568-1.99q.24-.2.468-.364c.573-.41 1.402-.863 1.986-1.166a1.58 1.58 0 0 1 1.394-.016l.264.124q.106.05.171.142c1.498 2.116 4.8 2.116 6.298 0a.44.44 0 0 1 .171-.142l.264-.124a1.58 1.58 0 0 1 1.394.016c.584.303 1.413.756 1.986 1.166q.23.166.468.363C20.48 4.566 21.004 5 21 5.69s-.596 1.168-1.777 2.122l-.208.167c-.552.446-.828.669-.975.97s-.147.643-.147 1.328v5.263c0 .701 0 1.052-.121 1.376c-.12.324-.353.598-.818 1.145l-2.382 2.803c-.474.558-.711.837-1.041.987c-.33.149-.71.149-1.469.149"></svg:path>`,
})
export class SolarBodyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeBoldIcon],svg[solar-body-shape-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.836 17.462c-.443-1.046-1.022-1.999-1.536-2.844a43 43 0 0 1-.518-.868H4.218a43 43 0 0 1-.518.868c-.514.845-1.093 1.798-1.536 2.844A11.4 11.4 0 0 0 1.25 22a.75.75 0 0 0 1.5 0c0-1.49.29-2.695.709-3.744c5.394.147 7.46 2.871 7.83 3.981a.75.75 0 0 0 1.422 0c.37-1.11 2.436-3.834 7.83-3.98A9.9 9.9 0 0 1 21.25 22a.75.75 0 0 0 1.5 0c0-1.815-.38-3.28-.914-4.538M4.69 1.706a.75.75 0 1 0-1.38.589v.001l.004.009l.016.036l.06.148a32 32 0 0 1 .892 2.557c.493 1.633.968 3.694.968 5.526a4.9 4.9 0 0 1-.308 1.678h14.116a4.9 4.9 0 0 1-.308-1.678c0-1.832.475-3.893.968-5.526a32 32 0 0 1 .892-2.557l.06-.148l.015-.036l.004-.009v-.002a.75.75 0 1 0-1.38-.587S19.31 1.706 20 2l-.69-.293l-.002.004l-.005.012l-.018.043l-.067.163a34 34 0 0 0-.936 2.684c-.481 1.595-.977 3.678-1.028 5.637H6.746c-.05-1.96-.547-4.042-1.028-5.637a34 34 0 0 0-.936-2.684l-.067-.163l-.018-.043l-.005-.012l-.001-.003z"></svg:path>`,
})
export class SolarBodyShapeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBodyShapeMinimalisticBoldIcon],svg[solar-body-shape-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.706 1.31a.75.75 0 0 1 .984.396v.002l.002.003l.005.012l.018.043l.067.163a34 34 0 0 1 .936 2.684c.507 1.682 1.032 3.908 1.032 5.959c0 .6-.087 1.156-.233 1.678h10.966a6.2 6.2 0 0 1-.233-1.678c0-2.051.525-4.277 1.032-5.959a34 34 0 0 1 .936-2.684l.067-.163l.018-.043l.005-.012l.001-.003v-.001a.75.75 0 0 1 1.38.587v.002l-.003.009l-.016.036l-.06.148a32 32 0 0 0-.892 2.557c-.493 1.633-.968 3.694-.968 5.526c0 1.059.358 1.967.906 2.956c.189.34.41.704.644 1.09c.514.845 1.093 1.798 1.536 2.844c.534 1.259.914 2.723.914 4.538a.75.75 0 0 1-1.5 0c0-1.49-.29-2.695-.709-3.744c-5.394.147-7.46 2.871-7.83 3.981a.75.75 0 0 1-1.422 0c-.37-1.11-2.436-3.834-7.83-3.98A9.9 9.9 0 0 0 2.75 22a.75.75 0 0 1-1.5 0c0-1.815.38-3.28.914-4.538c.443-1.046 1.022-1.999 1.536-2.844c.234-.386.456-.75.644-1.09c.548-.989.906-1.898.906-2.956c0-1.832-.475-3.893-.968-5.526A32 32 0 0 0 3.39 2.49l-.06-.148l-.016-.036l-.003-.009v-.001a.75.75 0 0 1 .395-.985"></svg:path>`,
})
export class SolarBodyShapeMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltBoldIcon],svg[solar-bolt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.67 9.914l3.062-4.143c1.979-2.678 2.969-4.017 3.892-3.734s.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734s-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.703-.673l-.019-.034c-.354-.683.289-1.552 1.574-3.29"></svg:path>`,
})
export class SolarBoltBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoltCircleBoldIcon],svg[solar-bolt-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-.773 6.569l-2.015 1.605c-.845.673-1.268 1.01-1.185 1.385l.004.019c.094.373.63.517 1.702.804c.595.16.893.24 1.033.465l.007.012c.135.229.058.515-.095 1.087l-.04.15c-.426 1.586-.638 2.379-.229 2.635s1.06-.262 2.363-1.3l2.015-1.604c.846-.674 1.268-1.01 1.186-1.386l-.004-.019c-.095-.373-.63-.517-1.702-.804c-.595-.16-.893-.24-1.033-.465l-.007-.012c-.135-.228-.058-.514.095-1.086l.04-.15c.425-1.586.638-2.38.229-2.636s-1.061.263-2.364 1.3" clip-rule="evenodd"></svg:path>`,
})
export class SolarBoltCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombBoldIcon],svg[solar-bomb-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m.981-12.147a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315zm-1.964 6.69l.75-.75l-.3-.76l-.76-.3l-.75.75q.577.483 1.06 1.06"></svg:path>`,
})
export class SolarBombBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombEmojiBoldIcon],svg[solar-bomb-emoji-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.56.56 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.56.56 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.56.56 0 0 0 .314-.315z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17 14.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-5 2.25a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zm2-4.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m16.767 8.294l-.75.75a8.6 8.6 0 0 0-1.06-1.061l.75-.75l.76.3z"></svg:path>`,
})
export class SolarBombEmojiBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBombMinimalisticBoldIcon],svg[solar-bomb-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006m3.165 4.336a.75.75 0 0 1 1.005-.336l1 .5a.75.75 0 1 1-.67 1.342l-1-.5a.75.75 0 0 1-.336-1.006M20.53 4.53a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zM17 14.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m.53-6.97l-1.158 1.16a9 9 0 0 0-1.06-1.061L16.47 6.47a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class SolarBombMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBoldIcon],svg[solar-bone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l5.7-5.7c.394-.393 1.043-.369 1.58-.22c1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562"></svg:path>`,
})
export class SolarBoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneBrokenBoldIcon],svg[solar-bone-broken-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 0 0 .044.226a6.27 6.27 0 0 1 3.292 3.292a.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22c1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562M2.738 17.7a2.52 2.52 0 0 0 3.562 0a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 0 0-.044-.226a6.27 6.27 0 0 1-3.292-3.292a.14.14 0 0 0-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22c-1.014-.28-2.309.105-3.052.848a2.52 2.52 0 0 0 0 3.563M8.25 5a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-1.5 0zm-1.376.813a.75.75 0 1 1-1.061 1.06L4.399 5.46a.75.75 0 1 1 1.06-1.06zm11.314 11.313a.75.75 0 0 0-1.061 1.061l1.414 1.414a.75.75 0 0 0 1.06-1.06zM15 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M5 9.75a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0 0 1.5zM18.25 15a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarBoneBrokenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoneCrackBoldIcon],svg[solar-bone-crack-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.29 5.79c-.28-1.014.104-2.309.847-3.052A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848c-.536-.149-1.185-.173-1.579.22l-.842.843l-2.685.413v-.54a.75.75 0 0 0-.987-.712l-1.135.378V9.455L13.07 7.37c.393-.394.369-1.043.22-1.58m-3.808 5.165L7.37 13.07c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l3.064-3.064l-1.527.235a.75.75 0 0 1-.864-.741v-.374l-1.134.378a.75.75 0 0 1-.988-.711z"></svg:path>`,
})
export class SolarBoneCrackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonesBoldIcon],svg[solar-bones-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.07 1.464-8.535c1.177-1.177 2.93-1.408 6.017-1.454v2.05c0 .556-.476.998-.96 1.273c-.915.518-1.56 1.706-1.56 2.757a2.519 2.519 0 1 0 5.039 0a2.519 2.519 0 0 0 5.038 0c0-1.051-.644-2.24-1.559-2.757c-.484-.275-.96-.717-.96-1.273V2.01c3.088.046 4.84.277 6.016 1.454C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536c-1.171 1.171-2.914 1.406-5.978 1.452v-2.003c0-.557.476-.999.96-1.273c.915-.518 1.559-1.706 1.559-2.758a2.519 2.519 0 0 0-5.038 0a2.519 2.519 0 0 0-5.038 0c0 1.052.644 2.24 1.558 2.758c.485.274.961.716.961 1.273v2.005c-3.111-.045-4.873-.273-6.055-1.454C2 19.07 2 16.714 2 12"></svg:path>`,
})
export class SolarBonesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBonfireBoldIcon],svg[solar-bonfire-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.313 14.7a.75.75 0 0 1 .988-.387l5 2.188a.75.75 0 1 1-.601 1.374l-5-2.188a.75.75 0 0 1-.387-.987m17.374 0a.75.75 0 0 1-.386.987l-16 7a.75.75 0 0 1-.601-1.374l16-7a.75.75 0 0 1 .987.387m-6.874 4.593a.75.75 0 0 1 .988-.386l5.5 2.406a.75.75 0 1 1-.601 1.374l-5.5-2.406a.75.75 0 0 1-.387-.988M11.6 15c2.133 0 6.4-1.239 6.4-6.193c0-3.031-1.849-5.23-3.6-6.542c-.897-.674-2.047.025-2.047 1.124c0 .743-.21 1.977-.793 2.891c-.682 1.07-1.809.141-1.987-1.104c-.09-.624-.777-.882-1.312-.523C7.208 5.358 6 6.71 6 8.807C6 13.761 9.733 15 11.6 15m3.616-5.718a.75.75 0 0 1 .502.934c-.268.896-1.384 2.534-3.718 2.534a.75.75 0 0 1 0-1.5c1.506 0 2.15-1.028 2.282-1.466a.75.75 0 0 1 .934-.502" clip-rule="evenodd"></svg:path>`,
})
export class SolarBonfireBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBook2BoldIcon],svg[solar-book-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.727 2.712c.306-.299.734-.494 1.544-.6C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.112c.81.106 1.238.301 1.544.6c.305.3.504.72.613 1.513c.112.817.114 1.899.114 3.45v7.839H7.346c-.903 0-1.519-.001-2.047.138c-.472.124-.91.326-1.299.592V7.676c0-1.552.002-2.634.114-3.451c.109-.793.308-1.213.613-1.513m2.86 3.072a.82.82 0 0 0-.828.81c0 .448.37.811.827.811h8.828a.82.82 0 0 0 .827-.81a.82.82 0 0 0-.827-.811zm-.828 4.594c0-.447.37-.81.827-.81h5.517a.82.82 0 0 1 .828.81a.82.82 0 0 1-.828.811H7.586a.82.82 0 0 1-.827-.81" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.473 17.135c-1.079 0-1.456.007-1.746.083a2.46 2.46 0 0 0-1.697 1.538q.023.571.084 1.019c.109.793.308 1.213.613 1.513c.306.299.734.494 1.544.6c.834.11 1.938.112 3.522.112h4.414c1.584 0 2.688-.002 3.522-.111c.81-.107 1.238-.302 1.544-.601c.216-.213.38-.486.495-.91H7.586a.82.82 0 0 1-.827-.81c0-.448.37-.811.827-.811H19.97c.02-.466.027-1 .03-1.622z"></svg:path>`,
})
export class SolarBook2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBoldIcon],svg[solar-book-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.271 2.112c-.81.106-1.238.301-1.544.6c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.2 4.2 0 0 1 1.299-.593c.528-.139 1.144-.139 2.047-.138H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.584 0-2.688.002-3.522.112m.488 4.483c0-.448.37-.811.827-.811h8.828a.82.82 0 0 1 .827.81a.82.82 0 0 1-.827.811H7.586a.82.82 0 0 1-.827-.81m.827 2.973a.82.82 0 0 0-.827.81c0 .448.37.811.827.811h5.517a.82.82 0 0 0 .828-.81a.82.82 0 0 0-.828-.811z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.473 17.135H20c-.003 1.13-.021 1.974-.113 2.64c-.109.793-.308 1.213-.613 1.513c-.306.299-.734.494-1.544.6c-.834.11-1.938.112-3.522.112H9.793c-1.584 0-2.688-.002-3.522-.111c-.81-.107-1.238-.302-1.544-.601c-.305-.3-.504-.72-.613-1.513c-.041-.3-.068-.637-.084-1.02a2.46 2.46 0 0 1 1.697-1.537c.29-.076.667-.083 1.746-.083"></svg:path>`,
})
export class SolarBookBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkBoldIcon],svg[solar-book-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.271 2.112c-.81.106-1.238.301-1.544.6c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.2 4.2 0 0 1 1.299-.593c.528-.139 1.144-.139 2.047-.138H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.584 0-2.688.002-3.522.112m.488 4.483c0-.448.37-.811.827-.811h8.828a.82.82 0 0 1 .827.81a.82.82 0 0 1-.827.811H7.586a.82.82 0 0 1-.827-.81m.827 2.973a.82.82 0 0 0-.827.81c0 .448.37.811.827.811h5.517a.82.82 0 0 0 .828-.81a.82.82 0 0 0-.828-.811z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.69 17.135H7.473c-1.079 0-1.456.007-1.746.083a2.46 2.46 0 0 0-1.697 1.538q.023.571.084 1.019c.109.793.308 1.213.613 1.513c.306.299.734.494 1.544.6c.834.11 1.938.112 3.522.112h4.414c1.584 0 2.688-.002 3.522-.111c.81-.107 1.238-.302 1.544-.601c.305-.3.504-.72.613-1.513c.092-.666.11-1.51.113-2.64h-6.896v3.007c0 .298 0 .447-.104.507c-.105.06-.248-.007-.534-.14l-1.371-.638c-.097-.045-.145-.067-.197-.067s-.101.022-.198.067l-1.37.638c-.287.133-.43.2-.535.14c-.104-.06-.104-.21-.104-.507z"></svg:path>`,
})
export class SolarBookBookmarkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookBookmarkMinimalisticBoldIcon],svg[solar-book-bookmark-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.655 2.227c-.433.113-.711.273-.928.485c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.2 4.2 0 0 1 1.299-.593a3 3 0 0 1 .356-.072zM7.31 15.514H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.002 0-1.812 0-2.483.029zm1.38 1.621H7.474c-1.08 0-1.457.007-1.747.083a2.46 2.46 0 0 0-1.697 1.538q.023.571.084 1.019c.109.793.308 1.213.613 1.513c.306.299.734.494 1.544.6c.834.11 1.938.112 3.522.112h4.414c1.584 0 2.689-.002 3.522-.111c.81-.107 1.239-.302 1.544-.601c.305-.3.504-.72.613-1.513c.092-.666.11-1.51.113-2.64h-6.895v3.007c0 .298 0 .447-.105.507s-.248-.007-.534-.14l-1.37-.638c-.098-.045-.146-.067-.198-.067s-.1.022-.198.067l-1.37.638c-.287.133-.43.2-.535.14c-.104-.06-.104-.21-.104-.507z"></svg:path>`,
})
export class SolarBookBookmarkMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookMinimalisticBoldIcon],svg[solar-book-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.655 2.227c-.433.113-.711.273-.928.485c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.2 4.2 0 0 1 1.299-.593a3 3 0 0 1 .356-.072zM7.31 15.514H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.002 0-1.812 0-2.483.029zm.163 1.621c-1.079 0-1.456.007-1.746.083a2.46 2.46 0 0 0-1.697 1.538q.023.571.084 1.019c.109.793.308 1.213.613 1.513c.306.299.734.494 1.544.6c.834.11 1.938.112 3.522.112h4.414c1.584 0 2.688-.002 3.522-.111c.81-.107 1.238-.302 1.544-.601c.305-.3.504-.72.613-1.513c.092-.666.11-1.51.113-2.64z"></svg:path>`,
})
export class SolarBookMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkBoldIcon],svg[solar-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 11.098v4.993c0 3.096 0 4.645-.734 5.321c-.35.323-.792.526-1.263.58c-.987.113-2.14-.907-4.445-2.946c-1.02-.901-1.529-1.352-2.118-1.47a2.2 2.2 0 0 0-.88 0c-.59.118-1.099.569-2.118 1.47c-2.305 2.039-3.458 3.059-4.445 2.945a2.24 2.24 0 0 1-1.263-.579C3 20.736 3 19.188 3 16.091v-4.994C3 6.81 3 4.666 4.318 3.333S7.758 2 12 2s6.364 0 7.682 1.332S21 6.81 21 11.098M8.25 6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookmarkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkCircleBoldIcon],svg[solar-bookmark-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m4-7.954v-2.497c0-2.145 0-3.217-.586-3.883S13.886 7 12 7s-2.828 0-3.414.666S8 9.404 8 11.55v2.497c0 1.548 0 2.322.326 2.66a.95.95 0 0 0 .562.29c.438.056.95-.453 1.975-1.473c.453-.45.68-.676.942-.735a.9.9 0 0 1 .39 0c.262.059.489.284.942.735c1.024 1.02 1.537 1.53 1.976 1.473a.95.95 0 0 0 .56-.29c.327-.338.327-1.112.327-2.66" clip-rule="evenodd"></svg:path>`,
})
export class SolarBookmarkCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkOpenedBoldIcon],svg[solar-bookmark-opened-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-.882 0-1.68.01-2.407c.056-.195.123-.366.203-.522a4.25 4.25 0 0 1 1.858-1.858c.411-.21.919-.333 1.706-.397q.225-.02.473-.03v4.045c0 .468 0 .851.017 1.153c.018.298.054.606.177.881a2.25 2.25 0 0 0 2.587 1.273c.293-.07.56-.23.806-.398c.25-.17.553-.404.924-.69l.018-.014c.47-.36.602-.456.723-.508a1.25 1.25 0 0 1 .996 0c.121.052.253.147.723.508l.018.015c.37.285.675.519.924.69c.247.167.513.326.806.397a2.25 2.25 0 0 0 2.587-1.273c.123-.275.16-.583.177-.881c.017-.302.017-.685.017-1.153V6.785q.248.012.473.03c.787.065 1.295.189 1.707.398a4.25 4.25 0 0 1 1.857 1.858c.08.156.147.327.203.522c.01.726.01 1.525.01 2.407c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m19.843-5.277c-.173-1.474-.538-2.49-1.308-3.259C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464c-.769.77-1.134 1.785-1.307 3.26a5.8 5.8 0 0 1 1.233-.847c.658-.336 1.385-.484 2.265-.556c.864-.071 1.94-.071 3.311-.071h6.068c1.371 0 2.447 0 3.311.07c.88.073 1.607.221 2.265.557c.45.228.863.514 1.233.846" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.75 10.808V6.752Q8.318 6.75 9 6.75h6q.682 0 1.25.002v4.056c0 .496 0 .836-.015 1.09c-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18a21 21 0 0 1-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653c-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358a22 22 0 0 1-.015-1.09"></svg:path>`,
})
export class SolarBookmarkOpenedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareBoldIcon],svg[solar-bookmark-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536c-.683-.684-1.562-1.048-2.785-1.242v9.609c0 .468 0 .851-.017 1.153c-.018.298-.054.606-.177.881a2.25 2.25 0 0 1-2.587 1.273c-.293-.07-.56-.23-.806-.398c-.25-.17-.553-.404-.924-.69l-.018-.014c-.47-.36-.602-.456-.723-.508a1.25 1.25 0 0 0-.996 0c-.121.052-.253.147-.723.508l-.018.015c-.37.285-.675.519-.924.69c-.247.167-.513.326-.806.397a2.25 2.25 0 0 1-2.587-1.273c-.123-.275-.16-.583-.177-.881c-.017-.302-.017-.685-.017-1.153v-9.61c-1.223.195-2.101.56-2.786 1.243M7 17.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.75 2.069v9.739c0 .496 0 .836.015 1.09c.015.262.043.343.05.358a.75.75 0 0 0 .862.425c.016-.004.097-.032.314-.18c.21-.143.48-.35.873-.653l.067-.052c.37-.285.659-.507.973-.644a2.75 2.75 0 0 1 2.192 0c.314.137.603.359.973.644l.067.052c.393.303.663.51.873.653c.217.148.298.176.314.18a.75.75 0 0 0 .862-.425c.007-.015.035-.096.05-.358c.015-.254.015-.594.015-1.09v-9.74C15.094 2 13.7 2 12 2s-3.094 0-4.25.069"></svg:path>`,
})
export class SolarBookmarkSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBookmarkSquareMinimalisticBoldIcon],svg[solar-bookmark-square-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.765 9.898a22 22 0 0 1-.015-1.09v-6.74C8.906 2 10.3 2 12 2s3.094 0 4.25.069v6.739c0 .496 0 .836-.015 1.09c-.015.262-.043.343-.05.358a.75.75 0 0 1-.862.425c-.016-.004-.097-.032-.315-.18a21 21 0 0 1-.872-.653l-.067-.052c-.37-.285-.659-.507-.973-.644a2.75 2.75 0 0 0-2.192 0c-.314.137-.603.359-.973.644l-.067.052c-.393.303-.663.51-.873.653c-.217.148-.298.176-.314.18a.75.75 0 0 1-.862-.425c-.007-.015-.035-.096-.05-.358"></svg:path><svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.15 2.78 5.027 2.416 6.25 2.222V8.83c0 .468 0 .851.017 1.153c.018.298.054.606.177.881a2.25 2.25 0 0 0 2.587 1.273c.293-.07.56-.23.806-.398c.25-.17.553-.404.924-.69l.018-.014c.47-.36.602-.456.723-.508a1.25 1.25 0 0 1 .996 0c.121.052.253.147.723.508l.018.015c.37.285.675.519.924.69c.247.167.513.326.806.397a2.25 2.25 0 0 0 2.587-1.273c.123-.275.16-.583.177-.881c.017-.302.017-.685.017-1.153V2.22c1.223.195 2.102.56 2.785 1.243C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"></svg:path>`,
})
export class SolarBookmarkSquareMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoomboxBoldIcon],svg[solar-boombox-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 16c0-.98.626-1.813 1.5-2.122V15a.75.75 0 0 0 1.5 0v-1.122a2.251 2.251 0 1 1-3 2.122m8.659-1.591a2.25 2.25 0 0 1 2.561-.44l-.793.794a.75.75 0 1 0 1.06 1.06l.794-.793a2.251 2.251 0 1 1-3.622-.621"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.078c-2.021.066-3.235.302-4.078 1.146C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.843-.844-2.057-1.08-4.078-1.146v-.078c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08m3.196 4.752c-.005-.847-.019-1.758-.064-2.097c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.045.34-.06 1.25-.064 2.097Q9.34 5.999 10 6h4q.662 0 1.248.002M8 12.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m10.652 1.098a3.75 3.75 0 1 0-5.304 5.304a3.75 3.75 0 0 0 5.304-5.304M5.25 9.5A.75.75 0 0 1 6 8.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBoomboxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBottleBoldIcon],svg[solar-bottle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.993 2.017a4 4 0 0 0-.193.328l-.323.583l-2.827 1.39l-.168.083c-1.626.835-2.772 2.403-3.116 4.233c-.01.05-.019.103-.034.19l-.001.007l-.03.173a7.24 7.24 0 0 1-2.095 3.927l-.804.79c-.504.496-.91.896-1.214 1.24c-.31.35-.56.694-.71 1.088a3.49 3.49 0 0 0 .363 3.18c.236.35.558.626.939.894c.373.262.859.555 1.46.917l.713.43c.601.362 1.087.654 1.492.86c.412.21.806.367 1.225.406a3.23 3.23 0 0 0 2.88-1.284c.254-.335.413-.732.548-1.184c.133-.445.261-1.01.42-1.715l.255-1.121l.039-.171a7.2 7.2 0 0 1 2.297-3.798l.006-.005l.141-.126c1.358-1.237 2.076-3.054 1.958-4.914l-.015-.192l-.262-3.267l.355-.642c.058-.103.12-.216.166-.318c.053-.116.111-.274.12-.467a1.25 1.25 0 0 0-.195-.729a1.3 1.3 0 0 0-.337-.344a4 4 0 0 0-.303-.193l-.815-.491a5 5 0 0 0-.33-.188a1.3 1.3 0 0 0-.489-.139a1.25 1.25 0 0 0-.763.204a1.3 1.3 0 0 0-.354.365m-.01 2.333l1.472.887l.248 3.101c.005.064.009.103.01.134l-1.055.351a1.95 1.95 0 0 1-1.838-.328a3.45 3.45 0 0 0-3.703-.392l-.06.03a4.43 4.43 0 0 1 2.261-2.473z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBottleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBowlingBoldIcon],svg[solar-bowling-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.5-10a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M12 5.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-2.5 4a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBowlingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxBoldIcon],svg[solar-box-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-.321.169l8.923 5.099l4.016-2.01c-.646-.732-1.688-1.279-3.462-2.21m4.17 3.534l-3.998 2V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-1.893 0-3.076-.252-3.978M11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286M2.96 6.641l9.04 4.52l3.411-1.705l-8.886-5.078l-.103.054c-1.773.93-2.816 1.477-3.462 2.21"></svg:path>`,
})
export class SolarBoxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBoxMinimalisticBoldIcon],svg[solar-box-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05c-1.773.93-2.816 1.478-3.462 2.21l9.04 4.52l9.04-4.52c-.646-.732-1.688-1.28-3.462-2.21m4.17 3.532l-8.998 4.5v9.44c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-1.893 0-3.076-.252-3.978M11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286"></svg:path>`,
})
export class SolarBoxMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsDownBoldIcon],svg[solar-branching-paths-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12 5.75a.75.75 0 0 1 .75.75v6A3.25 3.25 0 0 0 16 15.75h.19l-.22-.22a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H16a4.75 4.75 0 0 1-4-2.187a4.75 4.75 0 0 1-4 2.187h-.19l.22.22a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 1.06l-.22.22H8a3.25 3.25 0 0 0 3.25-3.25v-6a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBranchingPathsDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBranchingPathsUpBoldIcon],svg[solar-branching-paths-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M8.03 5.97a.75.75 0 0 1 0 1.06l-.22.22H8c1.68 0 3.155.872 4 2.187a4.75 4.75 0 0 1 4-2.187h.19l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H16A3.25 3.25 0 0 0 12.75 12v6a.75.75 0 0 1-1.5 0v-6A3.25 3.25 0 0 0 8 8.75h-.19l.22.22a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBranchingPathsUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBroomBoldIcon],svg[solar-broom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.221 19.643c.477-.903.942-1.937 1.24-2.98c.411-1.438.56-2.788.602-3.818l-1.552-1.552l-5.804-5.804l-1.552-1.552c-1.03.042-2.38.19-3.817.602c-1.045.298-2.078.763-2.981 1.24C2.1 6.97 1.427 9.71 2.497 11.807l.013.025l.7 1.15a23.34 23.34 0 0 0 7.808 7.809l1.15.699l.025.013c2.096 1.07 4.837.396 6.028-1.86m3.554-16.33a.77.77 0 0 0-1.088-1.088L19.012 3.9a4.88 4.88 0 0 0-5.718 0l1.109 1.109l4.588 4.588l1.109 1.109a4.88 4.88 0 0 0 0-5.718z"></svg:path>`,
})
export class SolarBroomBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugBoldIcon],svg[solar-bug-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.416 2.624a.75.75 0 1 0-.832-1.248L13.669 3.32A4.5 4.5 0 0 0 12 3c-.59 0-1.153.113-1.669.32L7.416 1.376a.75.75 0 0 0-.832 1.248l2.36 1.573a4.5 4.5 0 0 0-1.368 2.475A5.5 5.5 0 0 1 8.938 6.5h6.125q.707.002 1.361.172a4.5 4.5 0 0 0-1.368-2.475zM1.25 14a.75.75 0 0 1 .75-.75h3v-1.312c0-.836.26-1.611.704-2.248l-2.483-.994a.75.75 0 0 1 .558-1.392l3.136 1.254A3.9 3.9 0 0 1 8.938 8h6.124c.74 0 1.432.204 2.023.558l3.136-1.254a.75.75 0 1 1 .558 1.392l-2.483.994A3.9 3.9 0 0 1 19 11.938v1.312h3a.75.75 0 0 1 0 1.5h-3V15a7 7 0 0 1-.808 3.269l2.587 1.035a.75.75 0 0 1-.558 1.393l-2.892-1.158a7 7 0 0 1-4.579 2.421V15a.75.75 0 1 0-1.5 0v6.96a7 7 0 0 1-4.579-2.42L3.78 20.696a.75.75 0 1 1-.558-1.393l2.588-1.035A7 7 0 0 1 5 15v-.25H2a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarBugBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBugMinimalisticBoldIcon],svg[solar-bug-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.422 3.179L7.386 1.357a.75.75 0 0 0-.772 1.286L8.64 3.858a7.03 7.03 0 0 0-2.99 3.194l-1.87-.748a.75.75 0 1 0-.557 1.392l1.945.779A7 7 0 0 0 5 10v2.25H2a.75.75 0 0 0 0 1.5h3V15c0 .85.152 1.666.43 2.42l-2.209.884a.75.75 0 1 0 .558 1.393l2.32-.929A7 7 0 0 0 12 22a7 7 0 0 0 5.9-3.232l2.322.929a.75.75 0 0 0 .556-1.393l-2.208-.883a7 7 0 0 0 .43-2.42v-1.25h3a.75.75 0 0 0 0-1.5h-3V10q-.002-.788-.167-1.526l1.945-.779a.75.75 0 1 0-.557-1.392l-1.87.748a7.03 7.03 0 0 0-2.99-3.194l2.025-1.215a.75.75 0 1 0-.772-1.286l-3.036 1.822a7 7 0 0 0-3.156 0M10.5 9.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-.75 5.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBugMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings2BoldIcon],svg[solar-buildings-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.25 8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.441-.295-1.034-.332-2.115-.336q.005.438.004.91V7.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5h-1.5V6c0-1.886 0-2.828-.586-3.414S14.636 2 12.75 2h-2c-1.886 0-2.828 0-3.414.586S6.75 4.114 6.75 6v15.25h-1.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V5.91q-.001-.47.004-.91c-1.081.005-1.674.042-2.115.337a2 2 0 0 0-.552.552C2.25 6.393 2.25 7.096 2.25 8.5v12.75h-.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5zM9 11.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m2.75 3.5a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75M9 6.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 6.25m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 9.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarBuildings2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildings3BoldIcon],svg[solar-buildings-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.913 5.889c.337.504.337 1.207.337 2.611v12.75h.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h.5V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552c.441-.295 1.034-.332 2.115-.336q-.005.438-.004.91V7.25h-1a.75.75 0 0 0 0 1.5h1v1.5h-1a.75.75 0 0 0 0 1.5h1v1.5h-1a.75.75 0 0 0 0 1.5h1v6.5h1.5V6c0-1.886 0-2.828.586-3.414S8.864 2 10.75 2h2c1.886 0 2.828 0 3.414.586S16.75 4.114 16.75 6v15.25h1.5v-6.5h1a.75.75 0 0 0 0-1.5h-1v-1.5h1a.75.75 0 0 0 0-1.5h-1v-1.5h1a.75.75 0 0 0 0-1.5h-1V5.91q.001-.47-.004-.91c1.081.005 1.674.042 2.115.337a2 2 0 0 1 .552.552M12.5 19a.75.75 0 0 0-1.5 0v2.25h1.5zM9 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 15m.75-3.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9.25 7a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBuildings3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBuildingsBoldIcon],svg[solar-buildings-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 2h2c1.886 0 2.828 0 3.414.586S21 4.114 21 6v15.25h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1V9c0-1.886 0-2.828.586-3.414S5.114 5 7 5h4c1.886 0 2.828 0 3.414.586S15 7.114 15 9v12.25h1.5V8.91c0-.865 0-1.659-.087-2.304c-.095-.711-.32-1.463-.938-2.08c-.618-.619-1.37-.844-2.08-.94c-.637-.085-1.418-.086-2.269-.086c.084-.387.225-.68.46-.914C12.172 2 13.114 2 15 2M5.25 8A.75.75 0 0 1 6 7.25h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBuildingsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBusBoldIcon],svg[solar-bus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C8.229 2 6.343 2 5.172 3.172C4.108 4.235 4.01 5.886 4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13c.01 3.114.108 4.765 1.172 5.828c.242.243.514.435.828.587V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1.018C10.227 20 11.054 20 12 20s1.773 0 2.5-.018V21a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1v-1.585a3 3 0 0 0 .828-.587C19.892 17.765 19.991 16.114 20 13l1.6-1.2a1 1 0 0 0 .4-.8v-1a1 1 0 0 0-1-1h-1c-.01-3.114-.108-4.765-1.172-5.828C17.657 2 15.771 2 12 2M5.5 9.5c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44h7c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56V7c0-1.414 0-2.121-.44-2.56C17.622 4 16.915 4 15.5 4h-7c-1.414 0-2.121 0-2.56.44C5.5 4.878 5.5 5.585 5.5 7zm.75 6.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m11.5 0a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorBoldIcon],svg[solar-calculator-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.243 0-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464C21 4.93 21 7.286 21 12s0 7.071-1.318 8.535S16.242 22 12 22m3-16H9c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C7 7.304 7 7.536 7 8s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C8.304 10 8.536 10 9 10h6c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C17 8.696 17 8.464 17 8s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C15.697 6 15.464 6 15 6m-6 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalculatorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalculatorMinimalisticBoldIcon],svg[solar-calculator-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22M8.75 6.5a.75.75 0 1 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v1.25a.75.75 0 0 0 1.5 0V9.25H10a.75.75 0 0 0 0-1.5H8.75zM14 7.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm-6.97.22a.75.75 0 0 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97l.97.97a.75.75 0 1 0 1.06-1.06L9.06 16l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97zM14 16.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalculatorMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarAddBoldIcon],svg[solar-calendar-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12m-6 1.25a.75.75 0 0 1 .75.75v1.25H18a.75.75 0 0 1 0 1.5h-1.25V18a.75.75 0 0 1-1.5 0v-1.25H14a.75.75 0 0 1 0-1.5h1.25V14a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarBoldIcon],svg[solar-calendar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarDateBoldIcon],svg[solar-calendar-date-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0-.839 0-1.585-.013-2.25H2.013C2 10.415 2 11.161 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14zm-8 .25A1.75 1.75 0 0 0 12.25 14v2a1.75 1.75 0 1 0 3.5 0v-2A1.75 1.75 0 0 0 14 12.25m0 1.5a.25.25 0 0 0-.25.25v2a.25.25 0 1 0 .5 0v-2a.25.25 0 0 0-.25-.25m-3.213-1.443a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0v-2.19l-.22.22a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarDateBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMarkBoldIcon],svg[solar-calendar-mark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12m-5.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class SolarCalendarMarkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarMinimalisticBoldIcon],svg[solar-calendar-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2c0-.839 0-1.585-.013-2.25H2.013C2 10.415 2 11.161 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z"></svg:path>`,
})
export class SolarCalendarMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCalendarSearchBoldIcon],svg[solar-calendar-search-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 15.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 6.879 2.068l1.401 1.402a.75.75 0 1 1-1.06 1.06l-1.402-1.401A3.75 3.75 0 0 1 14.25 18" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013zM22 12v2.6a5.25 5.25 0 1 0-7.4 7.4H10c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12"></svg:path>`,
})
export class SolarCalendarSearchBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelBoldIcon],svg[solar-call-cancel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 4l-4 4m0-4l4 4"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path></svg:g>`,
})
export class SolarCallCancelBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallCancelRoundedBoldIcon],svg[solar-call-cancel-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.47 3.47a.75.75 0 0 1 1.06 0L18 4.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L19.06 6l1.47 1.47a.75.75 0 0 1-1.06 1.06L18 7.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L16.94 6l-1.47-1.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path>`,
})
export class SolarCallCancelRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatBoldIcon],svg[solar-call-chat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.556 15.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L7.374 4.91C6.61 3.83 5.135 3.688 4.26 4.609L2.691 6.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path><svg:path fill="currentColor" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12"></svg:path>`,
})
export class SolarCallChatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallChatRoundedBoldIcon],svg[solar-call-chat-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12a5 5 0 1 0-4.478-2.774a.82.82 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.82.82 0 0 1 .574.067A5 5 0 0 0 17 12"></svg:path><svg:path fill="currentColor" d="m8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path>`,
})
export class SolarCallChatRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedBoldIcon],svg[solar-call-dropped-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.114 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path></svg:g>`,
})
export class SolarCallDroppedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallDroppedRoundedBoldIcon],svg[solar-call-dropped-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4v1c0 1.886 0 2.828.586 3.414S17.114 9 19 9h1.5m0 0L18 7m2.5 2L18 11"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path></svg:g>`,
})
export class SolarCallDroppedRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineBoldIcon],svg[solar-call-medicine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.556 15.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L7.374 4.91C6.61 3.83 5.135 3.688 4.26 4.609L2.691 6.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 7a5 5 0 0 1-7.226 4.478a.82.82 0 0 0-.574-.067l-1.113.298a.65.65 0 0 1-.796-.796l.298-1.113a.82.82 0 0 0-.067-.574A5 5 0 1 1 22 7m-5-2.187c.518 0 .938.42.938.937v.313h.312a.937.937 0 1 1 0 1.875h-.312v.312a.937.937 0 1 1-1.875 0v-.312h-.313a.937.937 0 1 1 0-1.875h.313V5.75c0-.518.42-.937.937-.937" clip-rule="evenodd"></svg:path>`,
})
export class SolarCallMedicineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCallMedicineRoundedBoldIcon],svg[solar-call-medicine-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 7a5 5 0 0 1-7.226 4.478a.82.82 0 0 0-.574-.067l-1.113.298a.65.65 0 0 1-.796-.796l.298-1.113a.82.82 0 0 0-.067-.574A5 5 0 1 1 22 7m-5-2.187c.518 0 .938.42.938.937v.313h.312a.937.937 0 1 1 0 1.875h-.312v.312a.937.937 0 1 1-1.875 0v-.312h-.313a.937.937 0 1 1 0-1.875h.313V5.75c0-.518.42-.937.937-.937" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.038 7.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path>`,
})
export class SolarCallMedicineRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraAddBoldIcon],svg[solar-camera-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 10.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V15a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V11a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21M16 13a4 4 0 1 1-8 0a4 4 0 0 1 8 0m2-3.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"></svg:path></svg:g>`,
})
export class SolarCameraAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraBoldIcon],svg[solar-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21M12 9.273c-2.301 0-4.167 1.831-4.167 4.09S9.7 17.456 12 17.456s4.167-1.832 4.167-4.091S14.3 9.273 12 9.273m0 1.636c-1.38 0-2.5 1.099-2.5 2.455c0 1.355 1.12 2.454 2.5 2.454s2.5-1.099 2.5-2.454s-1.12-2.455-2.5-2.455m4.722-.818c0-.452.373-.818.834-.818h1.11c.46 0 .834.366.834.818a.826.826 0 0 1-.833.818h-1.111a.826.826 0 0 1-.834-.818" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraMinimalisticBoldIcon],svg[solar-camera-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4c0-.552.413-1 .923-1h6.154c.51 0 .923.448.923 1s-.413 1-.923 1H8.923C8.413 5 8 4.552 8 4m1.778 17h4.444c3.121 0 4.682 0 5.803-.722a4.4 4.4 0 0 0 1.226-1.183C22 18.015 22 16.51 22 13.5s0-4.514-.75-5.595a4.4 4.4 0 0 0-1.225-1.183C18.904 6 17.343 6 14.222 6H9.778c-3.121 0-4.682 0-5.803.722A4.4 4.4 0 0 0 2.75 7.905C2 8.985 2 10.49 2 13.498v.002c0 3.01 0 4.514.749 5.595c.324.468.74.87 1.226 1.183C5.096 21 6.657 21 9.778 21m-1.945-7.5c0-2.22 1.866-4.018 4.167-4.018s4.167 1.799 4.167 4.018S14.3 17.518 12 17.518s-4.167-1.8-4.167-4.018m1.667 0c0-1.332 1.12-2.41 2.5-2.41s2.5 1.079 2.5 2.41s-1.12 2.41-2.5 2.41s-2.5-1.079-2.5-2.41m8.611-4.018c-.46 0-.833.36-.833.804c0 .443.373.803.833.803h.556c.46 0 .833-.36.833-.803s-.373-.804-.833-.804z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraRotateBoldIcon],svg[solar-camera-rotate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.4 4.4 0 0 1 2.75 19.06C2 17.96 2 16.428 2 13.364s0-4.597.749-5.697a4.4 4.4 0 0 1 1.226-1.204c.72-.473 1.622-.642 3.003-.702c.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636c.129.635.696 1.125 1.355 1.125c1.38.06 2.282.23 3.003.702c.485.318.902.727 1.226 1.204c.749 1.1.749 2.632.749 5.697s0 4.596-.749 5.697a4.4 4.4 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21M15.27 9.6a.75.75 0 0 0-1.5 0v.143a3.92 3.92 0 0 0-4.54 6.267a3.918 3.918 0 0 0 6.662-2.326a.75.75 0 0 0-1.49-.17a2.418 2.418 0 1 1-1.72-2.595a.75.75 0 0 0 .473 1.415l1.52-.32a.75.75 0 0 0 .595-.734z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraRotateBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCameraSquareBoldIcon],svg[solar-camera-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M7.25 12a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m1.5 0a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCameraSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCard2BoldIcon],svg[solar-card-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4h-4C6.229 4 4.343 4 3.172 5.172c-.844.843-1.08 2.057-1.146 4.078h19.948c-.066-2.021-.302-3.235-1.146-4.078C19.657 4 17.771 4 14 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12q0-.662.002-1.25h19.996Q22 11.338 22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20m2.045-7.75c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-.09c-.433 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043zM5.25 13.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m14.823 13.823l.003-.001l.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03s.787.002.997.03a.7.7 0 0 1 .177.042l.003.001l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997s-.002.787-.03.997a.7.7 0 0 1-.042.177l-.001.003l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03s-.787-.002-.997-.03a.7.7 0 0 1-.177-.042l-.003-.001l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997s.002-.787.03-.997a.7.7 0 0 1 .042-.177z"></svg:path>`,
})
export class SolarCard2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardBoldIcon],svg[solar-card-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarCardBold0"><svg:g fill="none"><svg:path fill="#fff" d="M14 4h-4C6.229 4 4.343 4 3.172 5.172c-.844.843-1.08 2.057-1.146 4.078h19.948c-.066-2.021-.302-3.235-1.146-4.078C19.657 4 17.771 4 14 4m-4 16h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarCardBold0)"></svg:path>`,
})
export class SolarCardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardReciveBoldIcon],svg[solar-card-recive-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.47 20.53a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V14a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 20h4c.66 0 1.261 0 1.812-.006l-.403-.403a2.25 2.25 0 0 1 1.341-3.827V14a2.25 2.25 0 0 1 4.5 0v1.764c.224.025.445.083.654.175C22 14.917 22 13.636 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20m-4-4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm6.5 0a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardReciveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSearchBoldIcon],svg[solar-card-search-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.75 14.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14 16.75a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 14 16.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4m0 16h3.627a5.25 5.25 0 1 1 8.369-6.34Q22 12.9 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20"></svg:path><svg:path fill="currentColor" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarCardSearchBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardSendBoldIcon],svg[solar-card-send-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.47 13.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 20h4c1.056 0 1.964 0 2.75-.026v-1.738a2.25 2.25 0 0 1-1.341-3.827l2-2a2.25 2.25 0 0 1 3.182 0l1.403 1.403Q22 12.988 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20m-4.75-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m7.25-.75a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardSendBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardTransferBoldIcon],svg[solar-card-transfer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h4c3.771 0 5.657 0 6.828 1.172c.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m22 12.818l-.409-.409a2.25 2.25 0 0 0-3.182 0l-.801.801a2.251 2.251 0 0 0-4.358.79v1.764a2.25 2.25 0 0 0-1.341 3.827l.409.409H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12q0-.662.002-1.25h19.996Q22 11.338 22 12zM6 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.5 13.25a.75.75 0 0 1 .75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V14a.75.75 0 0 1 .75-.75m3.97.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardTransferBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCardholderBoldIcon],svg[solar-cardholder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m6 3.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm-.414-8.664C8.172 6 9.114 6 11 6h2c1.886 0 2.828 0 3.414.586S17 8.114 17 10v.25h2a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h2V10c0-1.886 0-2.828.586-3.414" clip-rule="evenodd"></svg:path>`,
})
export class SolarCardholderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart2BoldIcon],svg[solar-cart-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.418 3.25c.28-.59.884-1 1.582-1h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.037.136l.002.007l.874 3.324l.012-.017q.063.068.121.143c.901 1.154.472 2.87-.386 6.301q-.116.469-.22.873l-2.477-2.973l1.83-2.685l-.505-1.922l-2.324 3.409L12.976 9h1.34c1.893 0 3.28 0 4.298.177l-.549-2.088c-.29-1.064-.393-1.395-.57-1.632a1.75 1.75 0 0 0-.767-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.176.237-.279.568-.57 1.632l-.548 2.088C6.404 9 7.791 9 9.685 9h1.339L7.56 13.157L5.236 9.748L4.73 11.67l1.83 2.685l-2.477 2.973q-.104-.404-.22-.873c-.858-3.431-1.287-5.147-.386-6.301q.059-.075.121-.143l.012.017l.874-3.324l.002-.007l.037-.136c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222"></svg:path><svg:path fill="currentColor" d="M4.602 19.05c.233.593.5 1.007.894 1.315C6.31 21 7.435 21 9.685 21h1.407L7.44 15.644zM12.908 21h1.407c2.25 0 3.375 0 4.189-.635c.394-.308.661-.722.894-1.316l-2.838-3.405zM12 19.669l-3.561-5.224L12 10.172l3.561 4.273z"></svg:path>`,
})
export class SolarCart2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart3BoldIcon],svg[solar-cart-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2.25a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.047.17l-.513 2.964q-.277.191-.486.459c-.901 1.153-.472 2.87.386 6.301c.545 2.183.818 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.189-.635c.814-.636 1.086-1.727 1.632-3.91c.858-3.432 1.287-5.147.386-6.301a2.2 2.2 0 0 0-.487-.46l-.513-2.962l-.046-.17c-.237-.872-.41-1.506-.776-2a3.25 3.25 0 0 0-1.426-1.089c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25zm8.418 6.896l-.362-2.088c-.283-1.04-.386-1.367-.56-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998c-.663.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.56-.56 1.6l-.362 2.089C6.58 9 7.91 9 9.685 9h4.63c1.775 0 3.105 0 4.103.146M8 12.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m8.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM12 12.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCart3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart4BoldIcon],svg[solar-cart-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.436.539.576 1.209.525 2.136H2.853c-.051-.927.09-1.597.525-2.136c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.555 14.257a74 74 0 0 1-.51-2.507h17.91a74 74 0 0 1-.51 2.507l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076zM10 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCart4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCart5BoldIcon],svg[solar-cart-5-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCart5BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartBoldIcon],svg[solar-cart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.418 3.25c.28-.59.884-1 1.582-1h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.742 2.722l.28.841l.024.03c.901 1.154.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91c-.858-3.431-1.287-5.147-.386-6.301l.024-.03l.28-.841l.742-2.722c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222m.002 1.502c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.176.237-.28.568-.57 1.635l-.57 2.089C6.384 9 7.778 9 9.684 9h4.631c1.907 0 3.3 0 4.32.18l-.569-2.089c-.29-1.067-.394-1.398-.57-1.635a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCheckBoldIcon],svg[solar-cart-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549c.303.149.436.27.524.398c.09.132.16.314.2.677c.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45c.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9 9 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.103-.899c-.412-.202-.936-.386-1.552-.603zm12.477 6.165c.3.286.312.76.026 1.06l-2.857 3a.75.75 0 0 1-1.086 0l-1.143-1.2a.75.75 0 1 1 1.086-1.034l.6.63l2.314-2.43a.75.75 0 0 1 1.06-.026" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartCrossBoldIcon],svg[solar-cart-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549c.303.149.436.27.524.398c.09.132.16.314.2.677c.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45c.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9 9 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.103-.899c-.412-.202-.936-.386-1.552-.603zm7.93 6.678a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97l-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartCrossBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge2BoldIcon],svg[solar-cart-large-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.237 2.288a.75.75 0 1 0-.474 1.423l.265.089c.676.225 1.124.376 1.453.529c.312.145.447.262.533.382s.155.284.194.626c.041.361.042.833.042 1.546v2.672c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.982 2.26c.601.602 1.36.86 2.26.981c.866.117 1.969.117 3.336.117H18a.75.75 0 0 0 0-1.5h-7c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.235-.235-.4-.551-.506-1.091h10.12c.959 0 1.438 0 1.814-.248s.565-.688.943-1.57l.428-1c.81-1.89 1.215-2.834.77-3.508S18.506 6 16.45 6H5.745a9 9 0 0 0-.047-.833c-.055-.485-.176-.93-.467-1.333c-.291-.404-.675-.66-1.117-.865c-.417-.194-.946-.37-1.572-.58zM7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartLarge2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge3BoldIcon],svg[solar-cart-large-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M2.084 2.751a.75.75 0 0 1 .956-.459l.302.106c.616.217 1.14.401 1.552.603c.44.217.819.483 1.103.899c.282.412.398.865.452 1.362q.035.333.043.738H8.15l1.655 9.377c-2.025-.018-3.14-.135-3.876-.91C5.063 13.551 5 12.581 5 9.64V7.038c0-.74 0-1.235-.041-1.615c-.04-.363-.11-.545-.2-.677c-.088-.129-.221-.25-.525-.398c-.322-.158-.761-.314-1.429-.549l-.261-.091a.75.75 0 0 1-.459-.957m9.244 12.629h2.842L15.827 6H9.673zM17.35 6c1.596.001 3.002.025 3.426.577c.444.577.27 1.447-.076 3.186l-.5 2.425c-.315 1.528-.473 2.293-1.025 2.742c-.551.45-1.332.45-2.893.45h-.588z"></svg:path>`,
})
export class SolarCartLarge3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLarge4BoldIcon],svg[solar-cart-large-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549c.303.149.436.27.524.398c.09.132.16.314.2.677c.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45c.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9 9 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.103-.899c-.412-.202-.936-.386-1.552-.603zm7.2 6.583a.75.75 0 0 0-1.48.25l.529 3.118a.75.75 0 0 0 1.479-.25zm5.414-.614a.75.75 0 0 0-.865.614l-.528 3.118a.75.75 0 1 0 1.479.25l.528-3.118a.75.75 0 0 0-.614-.864M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path>`,
})
export class SolarCartLarge4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeBoldIcon],svg[solar-cart-large-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.289 2.763a.75.75 0 0 1 .948-.475l.305.102c.626.209 1.155.385 1.572.579c.442.206.826.46 1.117.865c.291.403.412.848.467 1.333q.04.372.047.833h10.706c2.055 0 3.082 0 3.527.674c.444.674.04 1.619-.77 3.508l-.428 1c-.378.882-.567 1.322-.943 1.57s-.855.248-1.815.248H5.903c.105.54.271.856.506 1.091c.277.277.666.457 1.4.556c.755.101 1.756.103 3.191.103h7a.75.75 0 1 1 0 1.5h-7.055c-1.367 0-2.47 0-3.337-.117c-.9-.12-1.658-.38-2.26-.981c-.601-.602-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V6.883c0-.713 0-1.185-.042-1.546c-.04-.342-.107-.507-.194-.626c-.086-.12-.221-.237-.533-.382c-.33-.153-.777-.304-1.453-.53l-.265-.088a.75.75 0 0 1-.474-.948M8 8.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartLargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartLargeMinimalisticBoldIcon],svg[solar-cart-large-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.084 2.751a.75.75 0 0 1 .956-.459l.302.106c.616.217 1.14.401 1.552.603c.44.217.819.483 1.103.899c.282.412.398.865.452 1.362q.035.333.043.738h10.639c1.685 0 3.201 0 3.645.577s.27 1.447-.076 3.186l-.5 2.425c-.315 1.528-.473 2.293-1.025 2.742c-.551.45-1.332.45-2.893.45H10.98c-2.789 0-4.183 0-5.05-.914S5 12.582 5 9.64V7.038c0-.74 0-1.235-.041-1.615c-.04-.363-.11-.545-.2-.677c-.088-.129-.221-.25-.525-.398c-.322-.158-.761-.314-1.429-.549l-.261-.091a.75.75 0 0 1-.459-.957M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartLargeMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCartPlusBoldIcon],svg[solar-cart-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549c.303.149.436.27.524.398c.09.132.16.314.2.677c.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826c.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45c.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9 9 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362c-.284-.416-.662-.682-1.103-.899c-.412-.202-.936-.386-1.552-.603zM13 8.25a.75.75 0 0 1 .75.75v1.25H15a.75.75 0 0 1 0 1.5h-1.25V13a.75.75 0 0 1-1.5 0v-1.25H11a.75.75 0 0 1 0-1.5h1.25V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class SolarCartPlusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseBoldIcon],svg[solar-case-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.276 2.255c.083-.005.171-.005.285-.005h2.879c.113 0 .201 0 .285.005a2.75 2.75 0 0 1 2.385 1.72c.031.077.06.16.095.268l.003.01c.084.224.275.479.543.683q.045.034.09.064c2.153.003 3.278.042 4.052.673q.24.195.434.434C22 6.934 22 8.159 22 10.609c0 .622 0 .932-.15 1.175a1 1 0 0 1-.1.134c-.19.214-.487.303-1.082.482L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.668-1.4c-.595-.179-.893-.268-1.082-.482a1 1 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502q.195-.24.434-.434c.775-.63 1.899-.67 4.053-.673q.045-.03.09-.064c.267-.204.459-.46.542-.683c.038-.114.066-.2.098-.279a2.75 2.75 0 0 1 2.385-1.719m4.543 2.563q.035.093.08.182H9.101q.043-.09.08-.182v-.003l.005-.01l.005-.012l.005-.012l.003-.01l.002-.005l.004-.012l.004-.012l.002-.006l.003-.008l.002-.007l.002-.006c.039-.116.051-.153.063-.181a1.25 1.25 0 0 1 1.084-.782c.032-.002.072-.002.215-.002h2.838c.143 0 .183 0 .215.002c.482.03.904.334 1.085.782c.01.028.023.063.062.181l.002.006l.002.007l.003.008l.002.006l.004.012l.004.012l.002.005l.004.01l.004.012l.005.012l.004.01zM14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5m-5.99 2.87l-5.004-1.502c.03 3.114.212 5.983 1.312 6.96C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.1-.977 1.282-3.846 1.312-6.96l-5.005 1.501a2 2 0 0 1-1.246 1.65l-.7.28a5.5 5.5 0 0 1-4.086 0l-.7-.28a2 2 0 0 1-1.246-1.65" clip-rule="evenodd"></svg:path>`,
})
export class SolarCaseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseMinimalisticBoldIcon],svg[solar-case-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.162 8.5C2 9.603 2 11.05 2 13c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13c0-1.95 0-3.396-.162-4.5c-2.277 1.48-3.736 2.424-5.088 3.005V12a.75.75 0 0 1-1.5.017a12.75 12.75 0 0 1-6.5 0A.75.75 0 0 1 7.25 12v-.495C5.898 10.923 4.44 9.98 2.162 8.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.581 2.25h-.02c-.114 0-.202 0-.286.005a2.75 2.75 0 0 0-2.385 1.72a8 8 0 0 0-.12.343l-.004.012a1.63 1.63 0 0 1-.504.695q-.341.011-.653.03c-1.644.096-2.687.366-3.437 1.117a3 3 0 0 0-.592.838q.087.03.167.081c2.1 1.365 3.42 2.22 4.517 2.767A.75.75 0 0 1 8.75 10v.458c2.12.64 4.38.64 6.5 0V10a.75.75 0 0 1 1.487-.142c1.096-.548 2.416-1.402 4.516-2.767a.8.8 0 0 1 .167-.081a3 3 0 0 0-.592-.838c-.75-.75-1.793-1.02-3.437-1.118q-.296-.016-.618-.028l-.04-.034a1.9 1.9 0 0 1-.525-.74l-.003-.009c-.036-.107-.063-.191-.095-.269a2.75 2.75 0 0 0-2.385-1.719a5 5 0 0 0-.285-.005zm4.237 2.566l-.005-.011l-.005-.012l-.004-.012l-.004-.01l-.002-.005l-.004-.012l-.004-.012l-.002-.006l-.003-.008l-.002-.007l-.002-.006a4 4 0 0 0-.062-.181a1.25 1.25 0 0 0-1.085-.782a4 4 0 0 0-.215-.002h-2.838c-.143 0-.183 0-.215.002a1.25 1.25 0 0 0-1.084.782l-.003.007l-.008.021a6 6 0 0 0-.077.23l-.002.006l-.003.007l-.002.008l-.002.006l-.004.012l-.004.012l-.002.005l-.004.01l-.004.012l-.005.012l-.004.01l-.001.001l-.044.108L10 5h4.896a3 3 0 0 1-.078-.184" clip-rule="evenodd"></svg:path>`,
})
export class SolarCaseMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundBoldIcon],svg[solar-case-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75c-.978 0-1.813.625-2.122 1.5a.75.75 0 0 1-1.414-.5a3.751 3.751 0 0 1 7.073 0a.75.75 0 1 1-1.415.5A2.25 2.25 0 0 0 12 2.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5"></svg:path><svg:path fill="currentColor" d="m8.01 15.37l-5.004-1.502c.03 3.114.212 5.983 1.312 6.96C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.1-.977 1.282-3.846 1.312-6.96l-5.005 1.501a2 2 0 0 1-1.246 1.65l-.7.28a5.5 5.5 0 0 1-4.086 0l-.7-.28a2 2 0 0 1-1.246-1.65M7.609 5h8.782c2.45 0 3.675 0 4.502.673q.24.195.434.434C22 6.934 22 8.159 22 10.609c0 .622 0 .932-.15 1.175a1 1 0 0 1-.1.134c-.19.214-.487.303-1.082.482L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.668-1.4c-.595-.179-.893-.268-1.082-.482a1 1 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502q.195-.24.434-.434C3.934 5 5.159 5 7.609 5"></svg:path>`,
})
export class SolarCaseRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCaseRoundMinimalisticBoldIcon],svg[solar-case-round-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.878 4.25a2.251 2.251 0 0 1 4.244 0a.75.75 0 1 0 1.414-.5a3.751 3.751 0 0 0-7.073 0a.75.75 0 0 0 1.415.5m-7.13 3.84a.8.8 0 0 0-.168-.081a3 3 0 0 1 .592-.838C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172a3 3 0 0 1 .592.838a.8.8 0 0 0-.167.081c-2.1 1.365-3.42 2.22-4.516 2.767A.75.75 0 0 0 15.25 11v.458c-2.12.64-4.38.64-6.5 0V11a.75.75 0 0 0-1.487-.142C6.167 10.31 4.847 9.456 2.747 8.09M2 14c0-1.95 0-3.396.162-4.5c2.277 1.48 3.736 2.423 5.088 3.005V13a.75.75 0 0 0 1.5.016c2.13.562 4.37.562 6.5 0a.75.75 0 0 0 1.5-.016v-.495c1.352-.582 2.811-1.525 5.088-3.005C22 10.604 22 12.05 22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14" clip-rule="evenodd"></svg:path>`,
})
export class SolarCaseRoundMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCashOutBoldIcon],svg[solar-cash-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6H9c-1.886 0-2.828 0-3.414.586S5 8.114 5 10v6.25h14V10c0-1.886 0-2.828-.586-3.414S16.886 6 15 6h-2.25v4.973l.68-.794a.75.75 0 1 1 1.14.976l-2 2.333a.75.75 0 0 1-1.14 0l-2-2.333a.75.75 0 0 1 1.14-.976l.68.794zM5.03 17.75h13.94c-.052.79-.189 1.297-.556 1.664C17.828 20 16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586c-.367-.367-.504-.873-.555-1.664"></svg:path><svg:path fill="currentColor" d="M5.889 3H18.11C20.26 3 22 4.8 22 7.02c0 1.29-.587 2.437-1.5 3.173v-.282c0-.866 0-1.66-.087-2.305c-.095-.711-.32-1.463-.938-2.08c-.618-.619-1.37-.844-2.08-.94c-.646-.086-1.44-.086-2.306-.086H8.91c-.865 0-1.659 0-2.304.087c-.711.095-1.463.32-2.08.938c-.619.618-.844 1.37-.94 2.08c-.086.646-.086 1.44-.086 2.306v.282A4.06 4.06 0 0 1 2 7.02C2 4.8 3.741 3 5.889 3"></svg:path>`,
})
export class SolarCashOutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassette2BoldIcon],svg[solar-cassette-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 13.75a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m4.099 1.5h2.302a3 3 0 0 1-.401-1.5c0-.546.146-1.059.401-1.5H10.85c.255.441.401.954.401 1.5s-.146 1.059-.401 1.5m4.9 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m18.431 4.152l-.77 2.053c-.223.596-.412 1.1-.613 1.496c-.214.42-.472.785-.868 1.06c-.396.274-.827.387-1.296.44c-.442.049-.98.049-1.616.049h-2.537c-.636 0-1.174 0-1.615-.05c-.47-.052-.9-.165-1.297-.44c-.396-.274-.654-.638-.867-1.06c-.201-.395-.39-.9-.614-1.495l-.77-2.053c-1.066.149-1.818.441-2.396 1.02C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828c-.578-.579-1.33-.871-2.397-1.02M5.25 13.75a3 3 0 0 1 3.167-2.995l.083-.005H16q.128 0 .243.04a3 3 0 0 1 0 5.92a.8.8 0 0 1-.243.04H8.5l-.083-.005q-.083.005-.167.005a3 3 0 0 1-3-3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m16.875 4.03l-.604 1.61c-.242.644-.402 1.07-.56 1.382c-.15.295-.267.423-.385.505s-.279.146-.609.183c-.348.039-.802.04-1.49.04h-2.455c-.687 0-1.141-.001-1.49-.04c-.33-.037-.49-.101-.608-.183s-.235-.21-.385-.505c-.159-.313-.319-.738-.56-1.381l-.604-1.61C7.939 4 8.887 4 10 4h4c1.112 0 2.06 0 2.875.03"></svg:path>`,
})
export class SolarCassette2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCassetteBoldIcon],svg[solar-cassette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h1.25v3.75h-.478c-.687 0-1.141-.001-1.49-.04c-.33-.037-.49-.1-.608-.183c-.118-.081-.235-.21-.385-.505c-.159-.313-.319-.737-.56-1.38L7.125 4.03C7.939 4 8.887 4 10 4m5.75 8.25a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-9 1.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172c.578-.579 1.33-.871 2.396-1.02l.77 2.054c.224.595.413 1.1.614 1.495c.213.42.471.785.867 1.06c.396.274.828.388 1.297.44c.441.049.98.049 1.615.049h2.537c.636 0 1.174 0 1.615-.05c.47-.051.901-.165 1.297-.44c.396-.274.654-.638.868-1.06c.2-.395.39-.899.613-1.494l.77-2.054c1.067.149 1.82.441 2.397 1.02C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828m9.578 8.578a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-4.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.875 4.03C16.061 4 15.112 4 14 4h-1.25v3.75h.478c.687 0 1.141-.001 1.49-.04c.33-.037.49-.1.608-.183c.118-.081.234-.21.384-.505c.16-.313.32-.737.56-1.38z"></svg:path>`,
})
export class SolarCassetteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCatBoldIcon],svg[solar-cat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.75 6.406c-1.48 0-1.628.157-2.394.157C8.718 6.563 6.802 5 5.845 5S3.77 5.563 3.77 7.188v1.875c.002.492.18 2 .88 1.597c-.827.978-.91 2.119-.899 3.223c-.223.064-.45.137-.671.212c-.684.234-1.41.532-1.737.744a.75.75 0 0 0 .814 1.26c.156-.101.721-.35 1.408-.585l.228-.075c.046.433.161.83.332 1.19l-.024.013c-.41.216-.79.465-1.032.623l-.113.074a.75.75 0 1 0 .814 1.26l.131-.086c.245-.16.559-.365.901-.545q.12-.064.231-.116C6.763 19.475 9.87 20 11.75 20s4.987-.525 6.717-2.148q.11.052.231.116c.342.18.656.385.901.545l.131.086a.75.75 0 0 0 .814-1.26l-.113-.074a13 13 0 0 0-1.032-.623l-.024-.013c.171-.36.286-.757.332-1.19l.228.075c.687.235 1.252.484 1.409.585a.75.75 0 0 0 .813-1.26c-.327-.212-1.053-.51-1.736-.744a16 16 0 0 0-.672-.213c.012-1.104-.072-2.244-.9-3.222c.7.403.88-1.105.881-1.598V7.188C19.73 5.563 18.613 5 17.655 5c-.957 0-2.873 1.563-3.51 1.563c-.767 0-.915-.157-2.395-.157m-.675 9.194c.202-.069.441-.1.675-.1s.473.031.676.1c.1.034.22.088.328.174a.62.62 0 0 1 .246.476c0 .23-.139.39-.246.476s-.229.14-.328.174c-.203.069-.442.1-.676.1s-.473-.031-.675-.1a1.1 1.1 0 0 1-.329-.174a.62.62 0 0 1-.246-.476c0-.23.139-.39.246-.476s.23-.14.329-.174m2.845-3.1c.137-.228.406-.5.81-.5s.674.272.81.5c.142.239.21.527.21.813s-.068.573-.21.811c-.136.229-.406.501-.81.501s-.673-.272-.81-.5a1.6 1.6 0 0 1-.21-.812c0-.286.068-.574.21-.812m-5.96 0c.137-.228.406-.5.81-.5s.674.272.81.5c.142.239.21.527.21.813s-.068.573-.21.811c-.136.229-.406.501-.81.501s-.673-.272-.81-.5a1.6 1.6 0 0 1-.21-.812c0-.286.068-.574.21-.812" clip-rule="evenodd"></svg:path>`,
})
export class SolarCatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChair2BoldIcon],svg[solar-chair-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.572 3.062c-.582.687-.702 1.692-.944 3.704l-.09.757c-.251 2.088-.376 3.132.22 3.804c.597.673 1.648.673 3.75.673h.742v1.75H7c-.321 0-.622.086-.88.237l-.28-.837a5 5 0 0 0-.205-.543a3 3 0 0 0-.198-.371c-.285-.469-.656-.876-1.258-1.14c-.566-.25-1.274-.346-2.179-.346a.75.75 0 0 0 0 1.5c.827 0 1.29.092 1.574.218c.249.11.41.265.581.547c.03.05.043.071.056.096c.013.024.031.058.063.127c.05.11.075.18.15.404l.864 2.595a.8.8 0 0 0 .147.256A2.75 2.75 0 0 0 8 18.25h3.25v1.166a3.63 3.63 0 0 0-2.462 2.347a.75.75 0 0 0 1.423.474a2.13 2.13 0 0 1 1.039-1.216V22a.75.75 0 0 0 1.5 0v-.98a2.13 2.13 0 0 1 1.039 1.217a.75.75 0 0 0 1.422-.474a3.63 3.63 0 0 0-2.461-2.347V18.25H16a2.75 2.75 0 0 0 2.565-1.757a.8.8 0 0 0 .146-.256l.866-2.595c.074-.224.098-.295.15-.404a2 2 0 0 1 .118-.223c.172-.282.332-.437.581-.547c.285-.126.747-.218 1.574-.218a.75.75 0 0 0 0-1.5c-.905 0-1.613.095-2.18.345c-.6.265-.972.672-1.257 1.14a3 3 0 0 0-.198.372a5 5 0 0 0-.206.543l-.279.837a1.74 1.74 0 0 0-.88-.237h-4.25V12h.741c2.103 0 3.154 0 3.75-.673c.598-.672.472-1.716.222-3.804l-.091-.757c-.241-2.012-.362-3.017-.944-3.704a3 3 0 0 0-.638-.566C15.04 2 14.026 2 12 2s-3.039 0-3.79.496a3 3 0 0 0-.638.566"></svg:path>`,
})
export class SolarChair2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChairBoldIcon],svg[solar-chair-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.402 4.5C7 5.196 7 6.13 7 8v3.027C7.43 11 7.914 11 8.435 11h7.13c.52 0 1.005 0 1.435.027V8c0-1.87 0-2.804-.402-3.5A3 3 0 0 0 15.5 3.402C14.804 3 13.87 3 12 3s-2.804 0-3.5.402A3 3 0 0 0 7.402 4.5M6.25 15.991c-.502-.02-.806-.088-1.014-.315c-.297-.324-.258-.774-.18-1.675c.055-.65.181-1.088.467-1.415C6.035 12 6.858 12 8.505 12h6.99c1.647 0 2.47 0 2.982.586c.286.326.412.764.468 1.415c.077.9.116 1.351-.181 1.675c-.208.227-.512.295-1.014.315V21a.75.75 0 1 1-1.5 0v-5h-8.5v5a.75.75 0 1 1-1.5 0z"></svg:path>`,
})
export class SolarChairBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChandelierBoldIcon],svg[solar-chandelier-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 4A.75.75 0 0 1 9 3.25h6a.75.75 0 0 1 0 1.5h-2.25V16.5a2.75 2.75 0 1 0 5.5 0v-.594A3 3 0 0 1 16 13v-1.8a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2V13a3 3 0 0 1-2.25 2.906v.594A4.25 4.25 0 0 1 12 18.912A4.25 4.25 0 0 1 4.25 16.5v-.594A3 3 0 0 1 2 13v-2.143c0-.473.384-.857.857-.857h4.286c.473 0 .857.384.857.857V13a3 3 0 0 1-2.25 2.906v.594a2.75 2.75 0 1 0 5.5 0V4.75H9A.75.75 0 0 1 8.25 4"></svg:path>`,
})
export class SolarChandelierBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChart2BoldIcon],svg[solar-chart-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.293 2.293C17 2.586 17 3.057 17 4v13c0 .943 0 1.414.293 1.707S18.057 19 19 19s1.414 0 1.707-.293S21 17.943 21 17V4c0-.943 0-1.414-.293-1.707S19.943 2 19 2s-1.414 0-1.707.293M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17zM3.293 9.293C3 9.586 3 10.057 3 11v6c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarChart2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartBoldIcon],svg[solar-chart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20z"></svg:path>`,
})
export class SolarChartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChartSquareBoldIcon],svg[solar-chart-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M17 12.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M12.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0zM7 8.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarChartSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatDotsBoldIcon],svg[solar-chat-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M16 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatDotsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatLineBoldIcon],svg[solar-chat-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262M8 11.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM7.25 9A.75.75 0 0 1 8 8.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatLineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundBoldIcon],svg[solar-chat-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"></svg:path>`,
})
export class SolarChatRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCallBoldIcon],svg[solar-chat-round-call-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10M12 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M8.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM16 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundCallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundCheckBoldIcon],svg[solar-chat-round-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10m-6.47-2.53a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.05.011l-2-1.92a.75.75 0 1 1 1.04-1.082l1.47 1.411l3.48-3.48a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundDotsBoldIcon],svg[solar-chat-round-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarChatRoundDotsBold0"><svg:g fill="none"><svg:path fill="#fff" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"></svg:path><svg:path fill="#000" d="M15 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarChatRoundDotsBold0)"></svg:path>`,
})
export class SolarChatRoundDotsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLikeBoldIcon],svg[solar-chat-round-like-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10m-14.5-.892c0 1.369 1.319 2.805 2.529 3.834c.823.7 1.235 1.051 1.971 1.051s1.148-.35 1.971-1.051c1.21-1.03 2.529-2.465 2.529-3.834c0-2.677-2.475-3.676-4.5-1.608c-2.025-2.068-4.5-1.069-4.5 1.608" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundLikeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundLineBoldIcon],svg[solar-chat-round-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22m-4-8.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm-.75-2.75A.75.75 0 0 1 8 9.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundLineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundMoneyBoldIcon],svg[solar-chat-round-money-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10M12 7.25a.75.75 0 0 1 .75.75v.01c1.089.275 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916s-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417c0 1.19-.911 2.049-2 2.323V16a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916s1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417c0-1.19.911-2.048 2-2.323V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundMoneyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundUnreadBoldIcon],svg[solar-chat-round-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.906-.12-1.784-.346-2.618c-.086-.316-.455-.441-.751-.303a4.5 4.5 0 0 1-5.982-5.982c.138-.296.013-.665-.303-.75A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22"></svg:path><svg:circle cx="19" cy="5" r="3" fill="currentColor"></svg:circle>`,
})
export class SolarChatRoundUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatRoundVideoBoldIcon],svg[solar-chat-round-video-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.63 1.63 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.63 1.63 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10m-6 0c0-.844-.927-1.414-2.78-2.553c-1.88-1.155-2.82-1.732-3.52-1.308S9 9.709 9 12s0 3.437.7 3.861c.701.424 1.64-.153 3.52-1.308C15.073 13.414 16 12.844 16 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatRoundVideoBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquare2BoldIcon],svg[solar-chat-square-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M17 8.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75M12.75 12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM7 14.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquare2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareArrowBoldIcon],svg[solar-chat-square-arrow-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.985 21.449l.489-.824c.378-.64.568-.96.872-1.136c.304-.177.687-.184 1.453-.197c1.13-.02 1.84-.089 2.434-.335a4.5 4.5 0 0 0 2.438-2.435c.161-.39.247-.83.292-1.406c.027-.354.041-.53-.053-.674c-.095-.143-.276-.205-.638-.327C17.864 13.64 14.752 12.481 13 11c-1.98-1.674-3.754-5.054-4.418-6.414c-.142-.29-.213-.435-.336-.511s-.28-.074-.592-.07c-1.808.02-2.637.126-3.504.657a4.5 4.5 0 0 0-1.486 1.486C2 7.23 2 8.703 2 11.65v.9c0 2.096 0 3.145.343 3.972a4.5 4.5 0 0 0 2.437 2.435c.595.246 1.304.316 2.434.335c.766.013 1.15.02 1.453.197c.305.177.494.496.873 1.136l.488.824c.435.735 1.522.735 1.957 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.702 1.217a.696.696 0 0 1-.007 1.035l-1.002.921a47 47 0 0 1 2.467.076c.65.041 1.26.104 1.79.202c.52.096 1.022.237 1.42.46c.74.418 1.363.99 1.817 1.672c.438.656.63 1.398.723 2.292c.09.875.09 1.969.09 3.355v.038c0 .404-.352.732-.786.732s-.785-.328-.785-.732c0-1.433-.001-2.456-.084-3.253c-.08-.785-.236-1.274-.493-1.66a3.8 3.8 0 0 0-1.296-1.191c-.168-.096-.462-.195-.912-.278a14 14 0 0 0-1.59-.177a45 45 0 0 0-2.348-.072l.989.91a.696.696 0 0 1 .007 1.034a.83.83 0 0 1-1.111.006L10.234 4.42A.7.7 0 0 1 10 3.899c0-.196.084-.383.234-.52L12.59 1.21a.83.83 0 0 1 1.11.006" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareArrowBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareBoldIcon],svg[solar-chat-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262"></svg:path>`,
})
export class SolarChatSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCallBoldIcon],svg[solar-chat-square-call-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M12 6.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M8.75 9a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM16 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareCallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCheckBoldIcon],svg[solar-chat-square-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M15.53 8.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.05.011l-2-1.92a.75.75 0 1 1 1.04-1.082l1.47 1.411l3.48-3.48a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareCodeBoldIcon],svg[solar-chat-square-code-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M14.97 7.299a.75.75 0 0 1 1.06 0l.209.209c.635.635 1.165 1.165 1.529 1.642c.384.503.654 1.035.654 1.68c0 .644-.27 1.176-.654 1.68c-.364.476-.894 1.006-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.141 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.388-.752-.847-1.434-1.529l-.171-.171a.75.75 0 0 1 0-1.06m-.952-1.105a.75.75 0 1 0-1.449-.388l-2.588 9.66a.75.75 0 1 0 1.45.387zM9.03 7.3a.75.75 0 0 1 0 1.06l-.171.172c-.682.682-1.139 1.141-1.434 1.529c-.283.37-.347.585-.347.77c0 .184.064.4.347.77c.295.387.752.846 1.434 1.528l.171.171a.75.75 0 1 1-1.06 1.06l-.172-.17l-.037-.037c-.635-.636-1.165-1.165-1.529-1.643c-.384-.503-.654-1.035-.654-1.68c0-.644.27-1.176.654-1.68c.364-.476.894-1.006 1.53-1.641l.036-.037l.172-.172a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareCodeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatSquareLikeBoldIcon],svg[solar-chat-square-like-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0M7.5 9.715c0 1.752 2.163 3.615 3.49 4.593c.454.335.681.502 1.01.502s.556-.167 1.01-.502c1.327-.978 3.49-2.84 3.49-4.593c0-2.677-2.475-3.677-4.5-1.609c-2.025-2.068-4.5-1.068-4.5 1.609" clip-rule="evenodd"></svg:path>`,
})
export class SolarChatSquareLikeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChatUnreadBoldIcon],svg[solar-chat-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.087 21.388l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1l-.001-1.048c-.001-.427-.524-.669-.902-.47a4.5 4.5 0 0 1-6.08-6.08c.2-.377-.041-.9-.469-.9Q14.054 1.998 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0"></svg:path><svg:circle cx="19" cy="5" r="3" fill="currentColor"></svg:circle>`,
})
export class SolarChatUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckCircleBoldIcon],svg[solar-check-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCheckCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckReadBoldIcon],svg[solar-check-read-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m2.474-13.581a.75.75 0 0 1 .107 1.055l-5.714 7a.75.75 0 0 1-1.162 0l-2.286-2.8a.75.75 0 0 1 1.162-.948l1.705 2.088l5.133-6.288a.75.75 0 0 1 1.055-.107m4 0a.75.75 0 0 1 .107 1.055l-5.714 7a.75.75 0 0 1-1.21-.064l-.285-.438a.75.75 0 0 1 .88-1.116l5.167-6.33a.75.75 0 0 1 1.055-.107" clip-rule="evenodd"></svg:path>`,
})
export class SolarCheckReadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCheckSquareBoldIcon],svg[solar-check-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m4.03-13.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l4.47-4.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCheckSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistBoldIcon],svg[solar-checklist-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.048 2.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 0 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M8.048 9.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75m-3.202 4.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.095-.076l-1.214-1.5a.75.75 0 1 1 1.166-.944l.708.875l3.697-3.451a.75.75 0 0 1 1.06.036M11.25 19a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarChecklistBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChecklistMinimalisticBoldIcon],svg[solar-checklist-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m7.08 4.053a.75.75 0 1 0-1.087-1.034l-2.314 2.43l-.6-.63a.75.75 0 1 0-1.086 1.034l1.143 1.2a.75.75 0 0 0 1.086 0zM13 8.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm-2.457 6.267a.75.75 0 1 0-1.086-1.034l-2.314 2.43l-.6-.63a.75.75 0 1 0-1.086 1.034l1.143 1.2a.75.75 0 0 0 1.086 0zM13 15.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarChecklistMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatBoldIcon],svg[solar-chef-hat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5a5 5 0 0 0-2 9.584v2.666h14v-2.666a5.001 5.001 0 0 0-2.737-9.53a4.502 4.502 0 0 0-8.526 0A5 5 0 0 0 7 5m11.998 13.75H5.002c.01 1.397.081 2.162.584 2.664C6.172 22 7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586c.503-.502.574-1.267.584-2.664"></svg:path>`,
})
export class SolarChefHatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatHeartBoldIcon],svg[solar-chef-hat-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 10a5 5 0 0 1 5.737-4.946a4.502 4.502 0 0 1 8.526 0Q16.623 5 17 5a5 5 0 0 1 2 9.584v2.666H5v-2.666A5 5 0 0 1 2 10m9.043 3.67C10.165 13.024 9 11.984 9 11c0-1.673 1.65-2.297 3-1.005c1.35-1.292 3-.668 3 1.005c0 .985-1.165 2.025-2.043 2.67c-.42.307-.63.461-.957.461c-.328 0-.537-.154-.957-.462" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.586 21.414c-.503-.502-.574-1.267-.584-2.664h13.996c-.01 1.397-.081 2.162-.584 2.664C17.828 22 16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586"></svg:path>`,
})
export class SolarChefHatHeartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarChefHatMinimalisticBoldIcon],svg[solar-chef-hat-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 10a5 5 0 0 1 5.737-4.946a4.502 4.502 0 0 1 8.526 0Q16.623 5 17 5a5 5 0 0 1 2 9.584V18c0 1.886 0 2.828-.586 3.414S16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586S5 19.886 5 18v-3.416A5 5 0 0 1 2 10m7 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarChefHatMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomDownBoldIcon],svg[solar-circle-bottom-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 14l-8 8m0 0h6m-6 0v-6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H8a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12q.001.9.154 1.755A2.25 2.25 0 0 1 4.25 16v.568l4.159-4.159a2.25 2.25 0 1 1 3.182 3.182L7.432 19.75H8a2.25 2.25 0 0 1 2.245 2.096Q11.1 22 12 22"></svg:path></svg:g>`,
})
export class SolarCircleBottomDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomUpBoldIcon],svg[solar-circle-bottom-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.47 21.53a.75.75 0 0 1 0-1.06l7.72-7.72H6.655a.75.75 0 0 1 0-1.5H12a.75.75 0 0 1 .75.75v5.344a.75.75 0 0 1-1.5 0V13.81l-7.72 7.72a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m3.518 17.3l3.052-3.052a2.25 2.25 0 0 1 .086-4.498H12A2.25 2.25 0 0 1 14.25 12v5.344a2.25 2.25 0 0 1-4.498.086L6.7 20.482A9.95 9.95 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.947.556 3.763 1.518 5.3"></svg:path>`,
})
export class SolarCircleBottomUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopDownBoldIcon],svg[solar-circle-top-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.53 2.47a.75.75 0 0 1 0 1.06l-7.72 7.72h3.534a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.656a.75.75 0 0 1 1.5 0v3.533l7.72-7.72a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.482 6.7L17.43 9.752a2.25 2.25 0 0 1-.086 4.498H12A2.25 2.25 0 0 1 9.75 12V6.656a2.25 2.25 0 0 1 4.498-.086L17.3 3.518A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a9.95 9.95 0 0 0-1.518-5.3"></svg:path>`,
})
export class SolarCircleTopDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCircleTopUpBoldIcon],svg[solar-circle-top-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 2.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V4.56l-6.72 6.72a.75.75 0 1 1-1.06-1.06l6.72-6.72h-4.19a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.25 2.75c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10q-.001-.9-.154-1.755A2.25 2.25 0 0 1 19 8.75v-.568l-4.159 4.159a2.25 2.25 0 1 1-3.182-3.182L15.818 5h-.568a2.25 2.25 0 0 1-2.245-2.096q-.856-.153-1.755-.154"></svg:path>`,
})
export class SolarCircleTopUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCityBoldIcon],svg[solar-city-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.707 4.793C9.414 4.5 8.943 4.5 8 4.5h-.25V3a.75.75 0 0 0-1.5 0v1.5H6c-.943 0-1.414 0-1.707.293S4 5.557 4 6.5v.204q.305-.078.606-.117C5.25 6.5 6.045 6.5 6.91 6.5h.179c.865 0 1.659 0 2.304.087q.302.038.606.117V6.5c0-.943 0-1.414-.293-1.707"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 21.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1V7.772c0-1.34 0-2.011-.356-2.525s-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V10.5h.09c.865 0 1.659 0 2.304.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.086.646.086 1.44.086 2.306v5.339H17V16c0-1.886 0-2.828-.586-3.414S14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586S7 14.114 7 16v5.25H5.5v-5.34c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.072c-.04-.936-.165-1.51-.569-1.914C9.828 8 8.886 8 7 8s-2.828 0-3.414.586S3 10.114 3 12v9.25zM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCityBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardBoldIcon],svg[solar-clapperboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.096 2.004c-3.474.027-5.38.208-6.632 1.46c-.857.858-1.213 2.022-1.36 3.786H6.6zM2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.237 0-2.311-.026-3.25zm19.87-1.5c-.147-1.764-.503-2.928-1.36-3.786c-.598-.597-1.344-.95-2.337-1.16L14.9 7.25zM16.54 2.088C15.33 2 13.845 2 12 2h-.099l-3.5 5.25H13.1z"></svg:path>`,
})
export class SolarClapperboardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardEditBoldIcon],svg[solar-clapperboard-edit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.845 0 3.33 0 4.54.088L13.1 7.25H8.4L11.9 2zM3.464 3.464c1.253-1.252 3.158-1.433 6.632-1.46L6.599 7.25H2.104c.147-1.764.503-2.928 1.36-3.786M2 12c0-1.237 0-2.311.026-3.25h19.948C22 9.689 22 10.763 22 12v.258c-.567-.405-1.205-.578-1.831-.662c-.714-.096-1.595-.096-2.577-.096h-.184c-.982 0-1.863 0-2.577.096c-.779.104-1.578.348-2.233 1.002c-.654.655-.898 1.454-1.002 2.233c-.096.714-.096 1.595-.096 2.577v.184c0 .982 0 1.863.096 2.577c.084.626.257 1.264.662 1.831H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m19.896-4.75c-.147-1.764-.503-2.928-1.36-3.786c-.598-.597-1.344-.95-2.337-1.16L14.9 7.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 22c-2.121 0-3.182 0-3.841-.659S13 19.621 13 17.5s0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22m2.212-6.712a.983.983 0 0 1 0 1.39l-.058.058a.24.24 0 0 1-.211.067a1.6 1.6 0 0 1-.81-.436a1.6 1.6 0 0 1-.436-.81a.24.24 0 0 1 .067-.211l.058-.058a.983.983 0 0 1 1.39 0M17.35 19.04a3 3 0 0 1-.296.279a1.6 1.6 0 0 1-.303.187a3 3 0 0 1-.381.14l-1.021.34a.265.265 0 0 1-.335-.335l.34-1.02c.064-.194.097-.291.14-.382q.077-.163.187-.303c.062-.08.134-.152.279-.296l1.799-1.799c.043-.043.118-.023.138.035a1.98 1.98 0 0 0 1.217 1.217c.058.02.078.095.035.138z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClapperboardEditBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenBoldIcon],svg[solar-clapperboard-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h12c1.886 0 2.828 0 3.414.586S20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16zm9.918-7.834L9.15 4.444a.8.8 0 0 1 .017.269l-.604 5.064l4.779-1.28a.8.8 0 0 1-.024-.297zm.923 4.929l3.408-.913c.224-.06.336-.09.425-.134a1 1 0 0 0 .555-.962c-.006-.098-.036-.21-.096-.435c-.18-.673-.271-1.01-.402-1.275a3 3 0 0 0-2.887-1.666a3 3 0 0 0-.413.062q.03.125.014.258zM7.063 10.18a.8.8 0 0 1-.023-.298l.6-5.034l-.103.028C5.73 5.36 4.829 5.602 4.26 6.17a3 3 0 0 0-.776 1.345C3.276 8.29 3.517 9.195 4 11z"></svg:path>`,
})
export class SolarClapperboardOpenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardOpenPlayBoldIcon],svg[solar-clapperboard-open-play-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.841 8.095l3.408-.913c.224-.06.336-.09.425-.134a1 1 0 0 0 .555-.962c-.006-.098-.036-.21-.096-.435c-.18-.673-.271-1.01-.402-1.275a3 3 0 0 0-2.887-1.666a3 3 0 0 0-.413.062q.03.125.014.258zM9.15 4.444l4.768-1.278l-.6 5.034a.8.8 0 0 0 .024.297l-4.78 1.28l.605-5.064a.8.8 0 0 0-.017-.27"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16 11H4v5c0 2.828 0 4.243.879 5.121C5.757 22 7.172 22 10 22h4c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-1c0-1.886 0-2.828-.586-3.414S17.886 11 16 11m-3.192 4.224c.795.569 1.192.854 1.192 1.276s-.397.707-1.192 1.276c-.805.578-1.207.866-1.508.654s-.3-.784-.3-1.93s0-1.719.3-1.93c.3-.213.703.076 1.508.653" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.04 9.882a.8.8 0 0 0 .023.297L4.001 11c-.484-1.805-.725-2.708-.517-3.484A3 3 0 0 1 4.26 6.17c.569-.568 1.471-.81 3.277-1.294l.103-.028z"></svg:path>`,
})
export class SolarClapperboardOpenPlayBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardPlayBoldIcon],svg[solar-clapperboard-play-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.845 0 3.33 0 4.54.088L13.1 7.25H8.4L11.9 2zM3.464 3.464c1.253-1.252 3.158-1.433 6.632-1.46L6.599 7.25H2.104c.147-1.764.503-2.928 1.36-3.786"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-1.237 0-2.311.026-3.25h19.948C22 9.689 22 10.763 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m11.014.585C14.338 13.44 15 13.867 15 14.5s-.662 1.06-1.986 1.915c-1.342.866-2.013 1.299-2.514.98c-.5-.317-.5-1.176-.5-2.895s0-2.578.5-2.896s1.172.115 2.514.981" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.896 7.25c-.147-1.764-.503-2.928-1.36-3.786c-.598-.597-1.344-.95-2.337-1.16L14.9 7.25z"></svg:path>`,
})
export class SolarClapperboardPlayBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardTextBoldIcon],svg[solar-clapperboard-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.54 2.088C15.33 2 13.845 2 12 2h-.099l-3.5 5.25H13.1zm-6.444-.084c-3.474.027-5.38.208-6.632 1.46c-.857.858-1.213 2.022-1.36 3.786H6.6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.026 8.75C2 9.689 2 10.763 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.237 0-2.311-.026-3.25zM5.75 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75m.75 2.75a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.536 3.464c.857.858 1.213 2.022 1.36 3.786H14.9l3.3-4.946c.993.21 1.74.563 2.336 1.16"></svg:path>`,
})
export class SolarClapperboardTextBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardAddBoldIcon],svg[solar-clipboard-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.879 4.877c.569-.57 1.363-.77 2.621-.84V4.5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-.463c1.258.07 2.052.27 2.621.84C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121M12.75 11a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardBoldIcon],svg[solar-clipboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zM6.25 10.5A.75.75 0 0 1 7 9.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m1 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardCheckBoldIcon],svg[solar-clipboard-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm9.012 8.511a.75.75 0 1 0-1.024-1.096l-3.774 3.522l-1.202-1.122a.75.75 0 0 0-1.024 1.096l1.715 1.6a.75.75 0 0 0 1.023 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardHeartBoldIcon],svg[solar-clipboard-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm4.543 11.329C10.165 14.72 9 13.68 9 12.696c0-1.672 1.65-2.297 3-1.005c1.35-1.292 3-.668 3 1.006c0 .984-1.165 2.024-2.043 2.669c-.42.308-.63.462-.957.462c-.328 0-.537-.154-.957-.462" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardHeartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardListBoldIcon],svg[solar-clipboard-list-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zM7 9.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 16.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardListBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardRemoveBoldIcon],svg[solar-clipboard-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.879 4.877c.569-.57 1.363-.77 2.621-.84V4.5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-.463c1.258.07 2.052.27 2.621.84C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122c-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121M12 13.439l-1.97-1.97a.75.75 0 1 0-1.06 1.061l1.97 1.97l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 15.56l1.97 1.97a.75.75 0 0 0 1.06-1.06l-1.97-1.97l1.97-1.97a.75.75 0 1 0-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClipboardTextBoldIcon],svg[solar-clipboard-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zM7 13.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardTextBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockCircleBoldIcon],svg[solar-clock-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarClockCircleBold0"><svg:g fill="none"><svg:path fill="#fff" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarClockCircleBold0)"></svg:path>`,
})
export class SolarClockCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClockSquareBoldIcon],svg[solar-clock-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarClockSquareBold0"><svg:g fill="none"><svg:path fill="#fff" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarClockSquareBold0)"></svg:path>`,
})
export class SolarClockSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseCircleBoldIcon],svg[solar-close-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloseCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloseSquareBoldIcon],svg[solar-close-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 1 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 1 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloseSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloset2BoldIcon],svg[solar-closet-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 2H10C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h1.25zM9 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25M12.75 20H14c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-2.475a3.1 3.1 0 0 0 1.078-.697C22 17.657 22 15.771 22 12v-2c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-1.25zM15 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloset2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarClosetBoldIcon],svg[solar-closet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 2H10C6.229 2 4.343 2 3.172 3.172c-.844.843-1.08 2.057-1.146 4.078h9.224zM2.002 8.75Q2 9.337 2 10v3q0 .662.002 1.25h9.248v-5.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 19.828c-.844-.843-1.08-2.057-1.146-4.078h9.224V21H10c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697M6.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m6.5 3H14c1.806 0 3.18 0 4.25-.129V22a.75.75 0 0 0 1.5 0v-1.475a3.1 3.1 0 0 0 1.078-.697c.844-.843 1.08-2.057 1.146-4.078H12.75zM15 17.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM22 13q0 .662-.002 1.25H12.75V2H14c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10zm-7-5.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarClosetBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoldIcon],svg[solar-cloud-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.286 20C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338C17.837 6.194 15.415 4 12.476 4C9.32 4 6.762 6.528 6.762 9.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20z"></svg:path>`,
})
export class SolarCloudBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoltBoldIcon],svg[solar-cloud-bolt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.626 17.465l1.148-1.555c.743-1.005 1.114-1.508 1.46-1.401s.346.722.346 1.955v.116c0 .445 0 .667.142.806l.008.008c.145.136.376.136.838.136c.832 0 1.249 0 1.39.252l.006.013c.133.257-.108.583-.59 1.235l-1.148 1.555c-.743 1.005-1.114 1.507-1.46 1.401s-.346-.723-.346-1.955v-.116c0-.445 0-.667-.142-.806l-.008-.008c-.145-.136-.376-.136-.838-.136c-.832 0-1.248 0-1.39-.253l-.006-.012c-.133-.257.108-.583.59-1.235"></svg:path><svg:path fill="currentColor" d="M7.578 18.011c.059-.207.14-.375.199-.486c.157-.296.398-.622.6-.896l1.241-1.68c.327-.442.656-.887.954-1.197c.218-.227.997-1.018 2.102-.679c1.138.35 1.308 1.48 1.35 1.79c.044.334.054.745.056 1.169a6 6 0 0 1 .65.043c.334.047 1.107.203 1.537.977l.029.053c.165.319.215.627.204.902c3.057-.111 5.5-2.597 5.5-5.647c0-2.473-1.607-4.576-3.845-5.342C17.837 4.195 15.415 2 12.476 2C9.32 2 6.762 4.53 6.762 7.651c0 .69.125 1.352.354 1.963a4.4 4.4 0 0 0-.83-.08C3.919 9.535 2 11.433 2 13.774c0 2.34 1.919 4.238 4.286 4.238z"></svg:path>`,
})
export class SolarCloudBoltBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudBoltMinimalisticBoldIcon],svg[solar-cloud-bolt-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m.916-5.75a.667.667 0 0 0-.943-.944L9.751 17.53a.667.667 0 0 0 .471 1.138h1.946l-1.084 1.084a.667.667 0 1 0 .943.943l2.222-2.223a.667.667 0 0 0-.471-1.138h-1.946z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 17.91V18h-.214C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52c0-.852-.001-1.631-.087-2.267c-.095-.711-.32-1.463-.938-2.08c-.618-.619-1.37-.844-2.08-.94c-.646-.086-1.44-.086-2.306-.086h-.179c-.865 0-1.659 0-2.304.087c-.711.095-1.463.32-2.08.938c-.619.618-.844 1.37-.94 2.08c-.086.646-.086 1.44-.086 2.305"></svg:path>`,
})
export class SolarCloudBoltMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCheckBoldIcon],svg[solar-cloud-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m2.25-4.862a.667.667 0 0 0-.944-.943l-2.195 2.195l-.417-.417a.667.667 0 0 0-.943.943l.889.889c.26.26.682.26.942 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudCrossBoldIcon],svg[solar-cloud-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m-1.306-6.25a.667.667 0 0 0-.943.944L11.057 18l-1.306 1.306a.667.667 0 0 0 .943.943L12 18.943l1.306 1.306a.667.667 0 0 0 .943-.943L12.943 18l1.306-1.306a.667.667 0 0 0-.943-.943L12 17.057z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudCrossBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudDownloadBoldIcon],svg[solar-cloud-download-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m1.805-3.084l-1.334 1.333a.667.667 0 0 1-.942 0l-1.334-1.333a.667.667 0 1 1 .943-.943l.195.195v-1.946a.667.667 0 0 1 1.334 0v1.946l.195-.195a.667.667 0 0 1 .943.943" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudDownloadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudFileBoldIcon],svg[solar-cloud-file-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m1-4c1.105 0 2-.79 2-1.765c0-.772-.562-1.429-1.346-1.668c-.111-.882-.958-1.567-1.987-1.567c-1.105 0-2 .79-2 1.765c0 .215.043.422.124.613a2 2 0 0 0-.291-.025c-.828 0-1.5.592-1.5 1.324C6 17.407 6.672 18 7.5 18z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudFileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudMinusBoldIcon],svg[solar-cloud-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m-1.778-3.333h3.556a.667.667 0 0 0 0-1.334h-3.556a.667.667 0 0 0 0 1.334" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudMinusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudPlusBoldIcon],svg[solar-cloud-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586S8 19.886 8 18s0-2.828.586-3.414S10.114 14 12 14s2.828 0 3.414.586S16 16.114 16 18s0 2.828-.586 3.414S13.886 22 12 22m.667-5.778a.667.667 0 0 0-1.334 0v1.111h-1.11a.667.667 0 0 0 0 1.334h1.11v1.11a.667.667 0 0 0 1.334 0v-1.11h1.11a.667.667 0 0 0 0-1.334h-1.11z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudPlusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudRainBoldIcon],svg[solar-cloud-rain-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m4.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-8.5 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m9.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-5 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.124 18.255a2.24 2.24 0 0 0-1.351-1.369a2.25 2.25 0 0 0-3.364-2.977l-.802.801a2.25 2.25 0 0 0-3.698-.801l-2 2a2.24 2.24 0 0 0-.532.844c-.534.03-1.06.248-1.468.656l-1.268 1.268C3.091 18.04 2 16.528 2 14.765c0-2.34 1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353c0 2.098-1.158 3.929-2.876 4.902"></svg:path><svg:path fill="currentColor" d="M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.746.746 0 0 1-1.06 0a.746.746 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0m3.44 0l-2 2a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 1 0-1.06-1.06"></svg:path>`,
})
export class SolarCloudRainBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallBoldIcon],svg[solar-cloud-snowfall-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.001 14.25a.75.75 0 0 1 .75.75v2.163l1.873-1.081a.75.75 0 1 1 .75 1.299l-1.873 1.081l1.876 1.083a.75.75 0 1 1-.75 1.3L12.75 19.76V22a.75.75 0 0 1-1.5 0v-2.239l-1.876 1.083a.75.75 0 0 1-.75-1.299l1.876-1.083l-1.873-1.081a.75.75 0 0 1 .75-1.3l1.873 1.082V15a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.564 18.462a2.25 2.25 0 0 1 2.218-3.841a2.25 2.25 0 0 1 4.437 0a2.25 2.25 0 0 1 2.218 3.841L16 19l.889-.031C19.76 18.671 22 16.27 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19H8z"></svg:path>`,
})
export class SolarCloudSnowfallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSnowfallMinimalisticBoldIcon],svg[solar-cloud-snowfall-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-1.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M12 19a1 1 0 0 0 .781-.376a.997.997 0 0 0-.182-1.425a.995.995 0 0 0-1.198 0A.999.999 0 0 0 12 19"></svg:path><svg:path fill="currentColor" d="M22 13.353c0 2.733-1.965 5.013-4.576 5.535A2.5 2.5 0 0 0 17 18a2.5 2.5 0 1 0-4.33-2.41a2.5 2.5 0 0 0-1.34 0A2.501 2.501 0 1 0 7 18c-.219.29-.375.63-.45 1h-.264C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353"></svg:path><svg:path fill="currentColor" d="M15 17.5a1 1 0 0 1-.781-.376A1 1 0 1 1 15 17.5m-6-2a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class SolarCloudSnowfallMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStorageBoldIcon],svg[solar-cloud-storage-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.94 14.44c-.44.439-.44 1.146-.44 2.56v2c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44h1c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56v-2c0-1.414 0-2.121-.44-2.56c-.439-.44-1.146-.44-2.56-.44h-1c-1.414 0-2.121 0-2.56.44M10.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7 18v-1.082c0-.636 0-1.254.068-1.764c.078-.575.266-1.23.81-1.775c.546-.545 1.201-.733 1.776-.81c.51-.07 1.128-.07 1.764-.069h1.164c.636 0 1.254 0 1.764.068c.575.078 1.23.266 1.775.81c.545.546.733 1.201.81 1.776c.07.51.07 1.128.069 1.764v1.038c2.819-.347 5-2.723 5-5.603c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path>`,
})
export class SolarCloudStorageBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudStormBoldIcon],svg[solar-cloud-storm-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.854 14.51a.75.75 0 0 1-.079 1.058L8.02 17.943h2.267a.75.75 0 0 1 .49 1.318L6.49 22.953a.75.75 0 1 1-.98-1.136l2.756-2.374H6a.75.75 0 0 1-.49-1.319l4.286-3.692a.75.75 0 0 1 1.058.078m4.676.46a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m2 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0m-4 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.124 18.255a2.245 2.245 0 0 0-2.255-1.501a2.25 2.25 0 0 0-3.46-2.845l-.883.883a2.25 2.25 0 0 0-3.71-1.496l-4.285 3.692c-.379.327-.629.76-.73 1.228A4.22 4.22 0 0 1 2 14.765c0-2.34 1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353c0 2.098-1.158 3.929-2.876 4.902"></svg:path>`,
})
export class SolarCloudStormBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSun2BoldIcon],svg[solar-cloud-sun-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 1.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M3.08 3.08a.75.75 0 0 1 1.062 0l.216.217a.75.75 0 0 1-1.061 1.06l-.216-.216a.75.75 0 0 1 0-1.06m8.839 0a.75.75 0 0 1 0 1.061l-.216.216a.75.75 0 1 1-1.06-1.06l.215-.216a.75.75 0 0 1 1.061 0M1.25 7.5A.75.75 0 0 1 2 6.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m3.108 3.143a.75.75 0 0 1 0 1.06l-.216.216a.75.75 0 0 1-1.061-1.06l.216-.216a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.286 22C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338C17.837 8.194 15.415 6 12.476 6C9.32 6 6.762 8.528 6.762 11.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765S3.919 22 6.286 22zM9.81 5.004a3.5 3.5 0 0 0-4.426 5.322c.46-2.437 2.165-4.43 4.427-5.322"></svg:path>`,
})
export class SolarCloudSun2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudSunBoldIcon],svg[solar-cloud-sun-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.286 20C19.442 20 22 17.472 22 14.353c0-2.472-1.607-4.573-3.845-5.338C17.837 6.194 15.415 4 12.476 4C9.32 4 6.762 6.528 6.762 9.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 11.53 2 13.426 2 15.765S3.919 20 6.286 20z"></svg:path><svg:path fill="currentColor" d="M9.94 2.955a5 5 0 0 0-6.327 7.723a5.8 5.8 0 0 1 1.664-.561a7 7 0 0 1-.015-.47c0-3.073 1.951-5.677 4.678-6.692"></svg:path>`,
})
export class SolarCloudSunBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudUploadBoldIcon],svg[solar-cloud-upload-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 14c-1.886 0-2.828 0-3.414.586S8 16.114 8 18s0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18s0-2.828-.586-3.414S13.886 14 12 14m1.805 3.084l-1.334-1.333a.667.667 0 0 0-.942 0l-1.334 1.333a.667.667 0 1 0 .943.943l.195-.195v1.946a.667.667 0 0 0 1.334 0v-1.946l.195.195a.667.667 0 0 0 .943-.943" clip-rule="evenodd"></svg:path>`,
})
export class SolarCloudUploadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropBoldIcon],svg[solar-cloud-waterdrop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96"></svg:path><svg:path fill="currentColor" d="M9.72 15.08c-.449.462-.968 1.048-1.384 1.674c-.372.559-.808 1.362-.835 2.246H6.286C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353c0 3.048-2.444 5.533-5.501 5.643c-.028-.882-.464-1.684-.835-2.242c-.416-.626-.935-1.212-1.384-1.674a3.165 3.165 0 0 0-4.56 0"></svg:path>`,
})
export class SolarCloudWaterdropBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudWaterdropsBoldIcon],svg[solar-cloud-waterdrops-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20.334c0 .92-.672 1.666-1.5 1.666S8 21.254 8 20.334c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645m5 0c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645m-2.5-5c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645"></svg:path><svg:path fill="currentColor" d="M6.846 19q.066-.131.127-.238a7.3 7.3 0 0 1 .736-1.036a2.33 2.33 0 0 1 1.68-.839A3.3 3.3 0 0 1 9 15.334c0-.648.27-1.215.473-1.572c.226-.395.502-.757.736-1.036a2.328 2.328 0 0 1 3.582 0c.234.28.51.64.736 1.036c.204.357.473.924.473 1.572a3.3 3.3 0 0 1-.39 1.553c.624.03 1.238.31 1.681.84c.234.279.51.64.735 1.035q.048.081.097.178c2.76-.4 4.877-2.75 4.877-5.587c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19z"></svg:path>`,
})
export class SolarCloudWaterdropsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudsBoldIcon],svg[solar-clouds-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.286 22C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336C19.295 13.371 17.72 12 15.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a3 3 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353S10.247 22 11.786 22z"></svg:path><svg:path fill="currentColor" d="M21.551 14.55a5 5 0 0 0-.751-.486c-.66-2.101-2.686-3.564-4.99-3.564c-2.754 0-5.124 2.1-5.212 4.87c-1.321.37-2.41 1.342-2.867 2.63H6.286C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353c0 .78-.16 1.522-.449 2.197"></svg:path>`,
})
export class SolarCloudsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCloudyMoonBoldIcon],svg[solar-cloudy-moon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.286 22C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336C12.295 13.371 10.72 12 8.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a3 3 0 0 0-.54-.05C3.248 16.706 2 17.89 2 19.353S3.247 22 4.786 22z"></svg:path><svg:path fill="currentColor" d="M2.716 15.723q.418-.224.882-.354C3.686 12.6 6.056 10.5 8.81 10.5q.259 0 .511.024A6.5 6.5 0 0 1 9 8.5a6.5 6.5 0 0 1 3.143-5.567C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 .716 3.723M22 12c0 4.266-2.671 7.908-6.432 9.345a4.87 4.87 0 0 0 .932-2.874a4.9 4.9 0 0 0-1.457-3.487q.227.015.457.016a6.5 6.5 0 0 0 5.567-3.143c.24-.396.933-.32.933.143"></svg:path>`,
})
export class SolarCloudyMoonBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCode2BoldIcon],svg[solar-code-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.502 5.387a.75.75 0 0 0-1.004-1.115L5.761 5.836c-.737.663-1.347 1.212-1.767 1.71c-.44.525-.754 1.088-.754 1.784c0 .695.313 1.258.754 1.782c.42.499 1.03 1.049 1.767 1.711l1.737 1.564a.75.75 0 1 0 1.004-1.115l-1.697-1.527c-.788-.709-1.319-1.19-1.663-1.598c-.33-.393-.402-.622-.402-.817c0-.196.072-.425.402-.818c.344-.409.875-.889 1.663-1.598zm5.678-1.112a.75.75 0 0 1 .532.918l-3.987 15a.75.75 0 1 1-1.45-.386l3.987-15a.75.75 0 0 1 .918-.532m1.263 6.223a.75.75 0 0 1 1.059-.055l1.737 1.563c.737.663 1.347 1.213 1.767 1.711c.44.524.754 1.088.754 1.783s-.313 1.259-.754 1.783c-.42.498-1.03 1.048-1.767 1.71l-1.737 1.565a.75.75 0 1 1-1.004-1.116l1.697-1.526c.788-.71 1.319-1.19 1.663-1.599c.33-.392.402-.622.402-.817s-.072-.425-.402-.817c-.344-.41-.875-.89-1.663-1.599l-1.697-1.527a.75.75 0 0 1-.055-1.059"></svg:path>`,
})
export class SolarCode2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeBoldIcon],svg[solar-code-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.18 4.276a.75.75 0 0 1 .531.918l-3.973 14.83a.75.75 0 0 1-1.45-.389l3.974-14.83a.75.75 0 0 1 .919-.53m2.262 3.053a.75.75 0 0 1 1.059-.056l1.737 1.564c.737.662 1.347 1.212 1.767 1.71c.44.525.754 1.088.754 1.784c0 .695-.313 1.258-.754 1.782c-.42.499-1.03 1.049-1.767 1.711l-1.737 1.564a.75.75 0 0 1-1.004-1.115l1.697-1.527c.788-.709 1.319-1.19 1.663-1.598c.33-.393.402-.622.402-.818s-.072-.424-.402-.817c-.344-.409-.875-.89-1.663-1.598l-1.697-1.527a.75.75 0 0 1-.056-1.06m-8.94 1.06a.75.75 0 1 0-1.004-1.115L4.761 8.836c-.737.662-1.347 1.212-1.767 1.71c-.44.525-.754 1.088-.754 1.784c0 .695.313 1.258.754 1.782c.42.499 1.03 1.049 1.767 1.711l1.737 1.564a.75.75 0 0 0 1.004-1.115l-1.697-1.527c-.788-.709-1.319-1.19-1.663-1.598c-.33-.393-.402-.622-.402-.818s.072-.424.402-.817c.344-.409.875-.89 1.663-1.598z"></svg:path>`,
})
export class SolarCodeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeCircleBoldIcon],svg[solar-code-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.512-5.554a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCodeCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeFileBoldIcon],svg[solar-code-file-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m.97-6.53a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06m-.268-1.207a.75.75 0 1 0-1.404-.526l-1.5 4a.75.75 0 1 0 1.404.526zM7.53 13.47a.75.75 0 0 1 0 1.06l-.47.47l.47.47a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCodeFileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeScanBoldIcon],svg[solar-code-scan-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.75c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289a.75.75 0 0 0 1.5 0v-.056c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5m-4.056-1.5H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153"></svg:path><svg:path fill="currentColor" d="M5.527 5.527C5 6.054 5 6.903 5 8.6c0 1.131 0 1.697.351 2.049C5.703 11 6.27 11 7.4 11h1.2c1.131 0 1.697 0 2.049-.351C11 10.297 11 9.73 11 8.6V7.4c0-1.131 0-1.697-.351-2.049C10.297 5 9.73 5 8.6 5c-1.697 0-2.546 0-3.073.527m0 12.946C5 17.946 5 17.097 5 15.4c0-1.131 0-1.697.351-2.049C5.703 13 6.27 13 7.4 13h1.2c1.131 0 1.697 0 2.049.351c.351.352.351.918.351 2.049v1.2c0 1.131 0 1.697-.351 2.048C10.297 19 9.73 19 8.6 19c-1.697 0-2.546 0-3.073-.527M13 7.4c0-1.131 0-1.697.351-2.049C13.704 5 14.27 5 15.4 5c1.697 0 2.546 0 3.073.527S19 6.903 19 8.6c0 1.131 0 1.697-.352 2.049c-.35.351-.917.351-2.048.351h-1.2c-1.131 0-1.697 0-2.049-.351C13 10.297 13 9.73 13 8.6zm.352 11.249C13 18.297 13 17.73 13 16.6v-1.2c0-1.131 0-1.697.351-2.049C13.704 13 14.27 13 15.4 13h1.2c1.131 0 1.697 0 2.048.351c.352.352.352.918.352 2.049c0 1.697 0 2.546-.527 3.073S17.097 19 15.4 19c-1.131 0-1.697 0-2.049-.352"></svg:path><svg:path fill="currentColor" d="M22 13.25a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75M2.75 14a.75.75 0 0 0-1.5 0v.056c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153H10a.75.75 0 0 0 0-1.5c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289"></svg:path>`,
})
export class SolarCodeScanBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCodeSquareBoldIcon],svg[solar-code-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m10.024 2.982a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCodeSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarColourTuneingBoldIcon],svg[solar-colour-tuneing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172m4.74 5.545a3.8 3.8 0 0 1 .835-1.483c.36-.383.65-.484.776-.484c.305 0 .716.178 1.09 1.016c.379.849.637 2.228.637 4.234c0 2.099.265 3.72.767 4.845c.507 1.135 1.335 1.905 2.46 1.905c.724 0 1.384-.441 1.868-.955a5.3 5.3 0 0 0 1.178-2.078a.75.75 0 1 0-1.436-.434a3.8 3.8 0 0 1-.834 1.483c-.36.383-.65.484-.776.484c-.305 0-.716-.178-1.09-1.016c-.379-.849-.637-2.228-.637-4.234c0-2.099-.265-3.72-.767-4.845c-.507-1.135-1.335-1.905-2.46-1.905c-.724 0-1.384.441-1.868.955a5.3 5.3 0 0 0-1.178 2.078a.75.75 0 0 0 1.436.434M6 11.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm8.5 0a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarColourTuneingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCommandBoldIcon],svg[solar-command-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8h3a3 3 0 1 0-3-3zH8V5a3 3 0 1 0-3 3h3v8h8zm0 8h3a3 3 0 1 1-3 3.001zM5 16l3 .001v3a3 3 0 1 1-3-3"></svg:path>`,
})
export class SolarCommandBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassBigBoldIcon],svg[solar-compass-big-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.554 21.529c1.797 1.221 4.943-.038 11.236-2.554c1.342-.537 2.013-.806 2.54-1.267q.201-.177.378-.378c.461-.527.73-1.198 1.267-2.54c2.515-6.293 3.775-9.44 2.554-11.236a4.1 4.1 0 0 0-1.083-1.083c-1.797-1.221-4.944.037-11.236 2.554c-1.342.537-2.013.806-2.54 1.267q-.201.177-.378.378c-.461.527-.73 1.198-1.267 2.54c-2.517 6.292-3.775 9.439-2.554 11.236c.29.426.657.793 1.083 1.083M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarCompassBigBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassBoldIcon],svg[solar-compass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.956-7.905c-.193.17-.44.268-.932.465c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.073.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.295.739-.465.932q-.065.075-.139.139" clip-rule="evenodd"></svg:path>`,
})
export class SolarCompassBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCompassSquareBoldIcon],svg[solar-compass-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m1.956-7.905c-.193.17-.44.268-.932.465c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.932q.065-.075.139-.14c.193-.169.44-.267.932-.464c2.31-.924 3.465-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.295.74-.465.932q-.065.075-.139.14" clip-rule="evenodd"></svg:path>`,
})
export class SolarCompassSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicioner2BoldIcon],svg[solar-condicioner-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.879 5.879C2 6.757 2 8.172 2 11c0 3.771 0 5.657 1.172 6.828c.518.52 1.177.808 2.078.97c0-.832.004-1.531.08-2.092c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08h4.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.075.56.08 1.26.08 2.091c.9-.16 1.56-.45 2.078-.969C22 16.657 22 14.771 22 11c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5H8c-2.828 0-4.243 0-5.121.879M5.25 11.5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M6 8.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.25 18.953c0-.938-.003-1.572-.067-2.048c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.066c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.063.475-.066 1.109-.066 2.047C7.645 19 8.712 19 10 19h4c1.288 0 2.355 0 3.25-.047"></svg:path>`,
})
export class SolarCondicioner2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCondicionerBoldIcon],svg[solar-condicioner-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.835 16.83a.75.75 0 0 1 .336 1.006l-.184.367a.23.23 0 0 0 .043.267a1.73 1.73 0 0 1 .324 1.998l-.183.368a.75.75 0 0 1-1.342-.671l.184-.368a.23.23 0 0 0-.044-.267a1.73 1.73 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336m11 .001a.75.75 0 0 1 .336 1.006l-.184.367a.23.23 0 0 0 .043.267a1.73 1.73 0 0 1 .324 1.998l-.183.368a.75.75 0 1 1-1.342-.671l.184-.368a.23.23 0 0 0-.044-.267a1.73 1.73 0 0 1-.324-1.998l.184-.367a.75.75 0 0 1 1.006-.336m-5.419.047a.75.75 0 0 1 .208 1.04l-.307.46a.57.57 0 0 0 .133.774a2.07 2.07 0 0 1 .48 2.806l-.306.46a.75.75 0 1 1-1.248-.832l.306-.46a.57.57 0 0 0-.132-.774a2.07 2.07 0 0 1-.48-2.806l.306-.46a.75.75 0 0 1 1.04-.208M6 2h12c1.886 0 2.828 0 3.414.586S22 4.114 22 6v3c0 2.828 0 4.243-.879 5.121c-.53.531-1.258.742-2.374.825c-.005-.67-.02-1.402-.059-1.692c-.066-.492-.215-.963-.597-1.345s-.854-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062H8.951c-.665 0-1.238 0-1.697.062c-.491.066-.963.215-1.345.597s-.531.853-.597 1.345c-.04.29-.054 1.023-.059 1.692c-1.116-.083-1.843-.294-2.374-.825C2 13.243 2 11.828 2 9V6c0-1.886 0-2.828.586-3.414S4.114 2 6 2m-.75 6.5A.75.75 0 0 1 6 7.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0-2.5A.75.75 0 0 1 6 5.25h12a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 15H8q-.675.001-1.247-.004c.004-.648.016-1.322.045-1.542c.044-.325.115-.427.172-.484s.159-.128.484-.172c.347-.046.818-.048 1.546-.048h6c.728 0 1.2.002 1.546.048c.325.044.427.115.484.172s.128.159.172.484c.03.22.04.894.045 1.542q-.573.005-1.247.004"></svg:path>`,
})
export class SolarCondicionerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiBoldIcon],svg[solar-confetti-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.186 2.139a.75.75 0 0 1 .249 1.031a.65.65 0 0 0 .095.8l.098.097c.588.589.805 1.454.565 2.25a.75.75 0 0 1-1.436-.433a.76.76 0 0 0-.19-.756L9.47 5.03a2.15 2.15 0 0 1-.314-2.642a.75.75 0 0 1 1.031-.25m7.503 2.583a.75.75 0 0 1 .587.883l-.144.72c-.198.99-.912 1.8-1.87 2.119c-.448.15-.782.527-.874.99l-.144.72a.75.75 0 1 1-1.471-.294l.144-.72c.198-.991.912-1.8 1.87-2.12c.448-.148.782-.526.875-.99l.143-.72a.75.75 0 0 1 .883-.588m3.72 8.839a1.01 1.01 0 0 0-1.078.17a2.51 2.51 0 0 1-2.924.295l-.213-.122a.75.75 0 0 1 .75-1.3l.213.123c.378.218.852.17 1.179-.119a2.51 2.51 0 0 1 2.673-.422l.292.127a.75.75 0 0 1-.601 1.375zM6.928 3.94a.536.536 0 1 1 .758.76a.536.536 0 0 1-.758-.76m5.988 3.217a.536.536 0 1 0-.759.759a.536.536 0 0 0 .759-.76m4.241 3.001a.536.536 0 1 1 .759.758a.536.536 0 0 1-.759-.758m2.66 5.156a.536.536 0 1 0-.759.759a.536.536 0 0 0 .759-.759M7.472 20.241c-2.262.746-3.454 1.058-4.113.399c-.73-.73-.269-2.113.653-4.878l1.69-5.069c.632-1.896 1.003-3.01 1.622-3.462l-.005.026a26 26 0 0 0-.138.73a51 51 0 0 0-.31 1.939c-.216 1.533-.415 3.492-.312 5.057c.062.947.259 2.122.435 3.04a51 51 0 0 0 .312 1.503l.02.093zm5.567-1.855l.267-.089c2.298-.766 3.447-1.149 3.66-2.055c.215-.906-.642-1.763-2.355-3.476l-1.689-1.689l-.005.015l-.082.267c-.068.23-.16.55-.251.916c-.187.749-.357 1.622-.357 2.28s.17 1.531.357 2.28a21 21 0 0 0 .356 1.253l.005.017l.002.004zM8.8 7.504l.05-.245c.613.36 1.339 1.085 2.382 2.129l.503.502l-.212.64l-.01.028l-.025.08l-.09.291c-.073.246-.171.59-.27.983c-.192.769-.401 1.791-.401 2.643s.21 1.874.401 2.643a22 22 0 0 0 .385 1.354l.103.309l-2.715.905l-.107-.46l-.005-.022l-.02-.087l-.073-.33c-.06-.282-.143-.676-.23-1.126c-.173-.907-.355-2.006-.41-2.856c-.093-1.404.087-3.236.3-4.75a50 50 0 0 1 .434-2.582l.007-.037l.002-.01zm6.154-5.294c.151-.02.428-.03.647.19s.21.496.19.648a4 4 0 0 1-.114.479l-.036.126l.065.102c.087.139.181.288.239.42c.065.15.139.402 0 .666c-.137.26-.382.346-.537.381c-.142.032-.319.046-.487.06l-.127.01h-.011l-.092.112c-.11.133-.223.271-.33.37c-.114.103-.328.263-.625.223c-.307-.042-.467-.265-.544-.404a3.4 3.4 0 0 1-.188-.446l-.04-.11l-.11-.04a3.4 3.4 0 0 1-.445-.187c-.14-.078-.362-.237-.404-.544c-.04-.298.12-.511.223-.625c.098-.107.237-.22.37-.33l.112-.092v-.01l.01-.128c.013-.169.027-.346.06-.487c.035-.156.12-.4.38-.537c.265-.14.517-.065.666 0c.133.057.282.151.42.239l.103.064l.126-.035c.164-.047.335-.096.479-.115m7.186 8.282c.467-.467.64-1.096.384-1.65c-.195-.42-.587-.693-1.07-.796c-.102-.483-.376-.875-.796-1.07c-.554-.255-1.183-.083-1.65.385c-.27.27-.393.633-.45.957c-.06.33-.06.68-.041.986a7 7 0 0 0 .163 1.115c.045.18.192.35.372.394h.002l.027.007a5 5 0 0 0 .317.065c.205.036.489.079.798.098c.306.02.656.019.986-.04c.324-.057.687-.18.958-.45"></svg:path>`,
})
export class SolarConfettiBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfettiMinimalisticBoldIcon],svg[solar-confetti-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.039 18.386l.267-.088c2.298-.767 3.447-1.15 3.66-2.056c.215-.906-.642-1.763-2.355-3.475l-1.689-1.69l-.005.015l-.082.267c-.068.23-.16.55-.251.916c-.187.75-.357 1.622-.357 2.28s.17 1.531.357 2.28a21 21 0 0 0 .356 1.253l.005.017l.002.004zm-5.567 1.855c-2.262.746-3.454 1.058-4.113.399c-.73-.73-.269-2.113.653-4.878l1.69-5.069c.632-1.896 1.003-3.01 1.622-3.461l-.005.025a26 26 0 0 0-.138.73a51 51 0 0 0-.31 1.939c-.216 1.533-.415 3.492-.312 5.057c.062.948.259 2.123.435 3.04a51 51 0 0 0 .312 1.503l.02.093zM8.85 7.259l-.05.245v.003l-.003.009l-.007.037a25 25 0 0 0-.133.7a50 50 0 0 0-.301 1.881c-.213 1.515-.393 3.347-.3 4.751c.055.85.237 1.95.41 2.857a49 49 0 0 0 .303 1.455l.02.088l.005.022l.107.459l2.715-.905l-.103-.309a10 10 0 0 1-.115-.37c-.073-.247-.171-.59-.27-.983c-.192-.77-.401-1.792-.401-2.644s.21-1.874.401-2.643a22 22 0 0 1 .385-1.354l.01-.027l.212-.64l-.503-.503C10.19 8.344 9.463 7.618 8.85 7.259m2.076-4.899a.75.75 0 0 1 .25 1.031a.65.65 0 0 0 .094.8l.098.098c.589.588.806 1.453.565 2.25a.75.75 0 1 1-1.436-.434a.76.76 0 0 0-.19-.756l-.098-.098a2.15 2.15 0 0 1-.314-2.642a.75.75 0 0 1 1.031-.249m2.635 2.037c.201-.201.302-.302.418-.339a.5.5 0 0 1 .302 0c.116.037.217.138.418.339c.2.2.301.301.338.417a.5.5 0 0 1 0 .303c-.037.116-.137.216-.338.417s-.302.302-.418.339a.5.5 0 0 1-.302 0c-.116-.037-.217-.138-.418-.339c-.201-.2-.302-.301-.338-.417a.5.5 0 0 1 0-.303c.036-.116.137-.216.338-.417M6.927 3.94a.536.536 0 1 1 .759.76a.536.536 0 0 1-.759-.76m13.048 3.107c-.139.053-.261.176-.507.421c-.245.246-.368.368-.421.507a.7.7 0 0 0 0 .503c.053.138.176.261.421.507c.246.245.368.368.507.421a.7.7 0 0 0 .503 0c.138-.053.261-.176.507-.421c.245-.246.368-.369.421-.507a.7.7 0 0 0 0-.503c-.053-.139-.176-.261-.421-.507c-.246-.245-.369-.368-.507-.421a.7.7 0 0 0-.503 0m-.917 8.266a.536.536 0 1 1 .759.759a.536.536 0 0 1-.759-.759M17.69 4.722a.75.75 0 0 1 .588.882l-.144.72a2.82 2.82 0 0 1-1.871 2.12a1.31 1.31 0 0 0-.874.99l-.144.72a.75.75 0 0 1-1.471-.295l.144-.72c.198-.99.912-1.8 1.87-2.119c.448-.15.782-.527.875-.99l.144-.72a.75.75 0 0 1 .882-.588m3.719 7.838a1.01 1.01 0 0 0-1.078.17a2.51 2.51 0 0 1-2.923.296l-.213-.123a.75.75 0 0 1 .75-1.299l.213.123c.377.218.852.17 1.178-.12a2.51 2.51 0 0 1 2.674-.422l.292.128a.75.75 0 0 1-.601 1.374zM17.5 9.742a.536.536 0 1 1 .759.758a.536.536 0 0 1-.759-.758"></svg:path>`,
})
export class SolarConfettiMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedCircleBoldIcon],svg[solar-confounded-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarConfoundedCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarConfoundedSquareBoldIcon],svg[solar-confounded-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M7.55 9.6a.75.75 0 0 1 .9-1.2l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9zm9.05-1.05a.75.75 0 0 1-.15 1.05l-1.2.9l1.2.9a.75.75 0 1 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2l2-1.5a.75.75 0 0 1 1.05.15m-1.07 7.98a.75.75 0 0 1-1.06 0l-.47-.47c-.561.53-1.44.53-2 0c-.56.53-1.439.53-2 0l-.47.47a.75.75 0 1 1-1.06-1.06l.5-.5a1.457 1.457 0 0 1 2.03-.03c.56-.53 1.44-.53 2 0a1.457 1.457 0 0 1 2.03.03l.5.5a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarConfoundedSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyBoldIcon],svg[solar-copy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2"></svg:path><svg:path fill="currentColor" d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z"></svg:path>`,
})
export class SolarCopyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCopyrightBoldIcon],svg[solar-copyright-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m.286-13.25c-2.003 0-3.536 1.503-3.536 3.25s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389a5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388a.75.75 0 0 1-.566 1.39a3.8 3.8 0 0 0-1.431-.278" clip-rule="evenodd"></svg:path>`,
})
export class SolarCopyrightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCorkscrewBoldIcon],svg[solar-corkscrew-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.357 8.383a3.65 3.65 0 0 0-3.117 3.078l-1.32-1.32l-1.325 1.324a.345.345 0 0 0-.05.425l.647 1.05c.737 1.198-.693 2.549-1.847 1.744l-4.618-3.218l4.944 7.094c.81 1.162-.563 2.597-1.76 1.837l-6.116-3.884l.65 1.37c.333.705.19 1.543-.362 2.095L2.53 22.53a.75.75 0 0 1-1.06-1.06l2.552-2.553a.34.34 0 0 0 .067-.39l-.95-2.005c-.556-1.176.771-2.348 1.87-1.65l5.855 3.718l-5.016-7.197c-.828-1.188.618-2.634 1.807-1.806l4.75 3.31l-.137-.221a1.845 1.845 0 0 1 .267-2.272l1.324-1.324l-3.341-3.341a2.19 2.19 0 1 1 3.097-3.098z"></svg:path><svg:path fill="currentColor" d="M21.359 13.482c.419-.419.633-.966.64-1.515a2.15 2.15 0 1 0-3.174 1.923a2.19 2.19 0 0 0 2.534-.408"></svg:path>`,
})
export class SolarCorkscrewBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCosmeticBoldIcon],svg[solar-cosmetic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18a3 3 0 1 1-6 0zm1-2h4V6a1 1 0 0 0-1.447-.895l-2 1A1 1 0 0 0 3 7zm8 0a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m4.75 7.21a7 7 0 0 0 1.5 0v1.79h2.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.25z"></svg:path>`,
})
export class SolarCosmeticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseDownBoldIcon],svg[solar-course-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.469 6.47a.75.75 0 0 1 1.06-.001l3.919 3.902c.514.511.847.84 1.124 1.052c.26.197.382.22.462.22s.203-.022.463-.22c.278-.21.61-.54 1.125-1.051l.274-.273c.47-.466.873-.868 1.24-1.146c.394-.299.83-.525 1.369-.525c.538 0 .975.226 1.369.524c.367.279.771.68 1.24 1.147l6.136 6.098v-3.743a.75.75 0 0 1 1.5 0V18a.75.75 0 0 1-.75.75h-5.582a.75.75 0 1 1 0-1.5h3.764l-6.09-6.053c-.514-.51-.847-.84-1.125-1.05c-.26-.197-.381-.219-.462-.219c-.08 0-.202.022-.462.22c-.277.21-.61.539-1.124 1.05l-.274.272c-.47.467-.874.87-1.241 1.148c-.394.299-.831.525-1.37.525s-.976-.227-1.37-.526c-.367-.279-.77-.682-1.24-1.149l-.035-.034L1.471 7.53a.75.75 0 0 1-.002-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarCourseDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCourseUpBoldIcon],svg[solar-course-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.668 7a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v5.546a.75.75 0 0 1-1.5 0V8.803L15.114 14.9c-.469.466-.873.868-1.24 1.147c-.394.298-.83.524-1.369.524c-.538 0-.975-.226-1.369-.525c-.367-.278-.77-.68-1.24-1.146l-.274-.273c-.514-.511-.847-.84-1.125-1.051c-.26-.198-.382-.22-.463-.22c-.08 0-.202.023-.462.22c-.277.211-.61.54-1.124 1.052L2.529 18.53a.75.75 0 0 1-1.058-1.062l3.953-3.938c.47-.466.873-.869 1.24-1.148c.394-.3.831-.525 1.37-.526c.539 0 .976.226 1.37.525c.367.279.771.681 1.24 1.148l.275.272c.514.511.847.84 1.124 1.05c.26.198.382.22.462.22s.202-.022.462-.22c.278-.21.61-.539 1.125-1.05l6.09-6.052h-3.764a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCourseUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuBoldIcon],svg[solar-cpu-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.181 10.181c.053-.053.148-.119.45-.16c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.045c.303.04.398.106.45.16c.054.052.12.147.16.45c.044.322.045.76.045 1.438v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.438-.045c-.303-.04-.398-.106-.45-.16c-.054-.052-.12-.147-.16-.45c-.044-.322-.045-.76-.045-1.438v-1.86c0-.678.001-1.116.045-1.438c.04-.303.106-.398.16-.45"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCpuBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCpuBoltBoldIcon],svg[solar-cpu-bolt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.632 9.022c-.303.04-.398.106-.45.16c-.054.052-.12.147-.16.45c-.044.322-.045.76-.045 1.438v1.86c0 .678.001 1.116.045 1.438c.04.303.106.398.16.45c.052.054.147.12.45.16c.322.044.76.045 1.438.045h1.86c.678 0 1.116-.001 1.438-.045c.303-.04.398-.106.45-.16c.054-.052.12-.147.16-.45c.044-.322.045-.76.045-1.438v-1.86c0-.678-.001-1.116-.045-1.438c-.04-.303-.106-.398-.16-.45c-.052-.054-.147-.12-.45-.16c-.322-.044-.76-.045-1.438-.045h-1.86c-.678 0-1.116.001-1.438.045m3.334 1.523a.698.698 0 0 0-1.135-.81l-1.329 1.86a.698.698 0 0 0 .568 1.103h.505l-.541.757a.698.698 0 0 0 1.135.811l1.329-1.86a.698.698 0 0 0-.568-1.104h-.505z"></svg:path><svg:path d="M12.698 2.698a.698.698 0 0 0-1.396 0v2.79q-.764 0-1.395.017V2.698a.698.698 0 0 0-1.395 0v2.79q0 .056.008.108c-.936.115-1.585.353-2.078.846s-.731 1.142-.846 2.078a1 1 0 0 0-.108-.008h-2.79a.698.698 0 0 0 0 1.395h2.807q-.016.63-.016 1.395H2.698a.698.698 0 0 0 0 1.396h2.79q0 .764.017 1.395H2.698a.698.698 0 0 0 0 1.395h2.79a1 1 0 0 0 .108-.008c.115.936.353 1.585.846 2.078s1.142.731 2.078.846a1 1 0 0 0-.008.108v2.79a.698.698 0 0 0 1.395 0v-2.807q.63.016 1.395.016v2.791a.698.698 0 0 0 1.396 0v-2.79q.764 0 1.395-.017v2.807a.698.698 0 0 0 1.395 0v-2.79a1 1 0 0 0-.008-.108c.936-.115 1.585-.353 2.078-.846s.731-1.142.846-2.078q.053.009.108.008h2.79a.698.698 0 0 0 0-1.395h-2.807q.016-.63.016-1.395h2.791a.698.698 0 0 0 0-1.396h-2.79q0-.764-.017-1.395h2.807a.698.698 0 0 0 0-1.395h-2.79a1 1 0 0 0-.108.008c-.115-.936-.353-1.585-.846-2.078s-1.142-.731-2.078-.846a1 1 0 0 0 .008-.108v-2.79a.698.698 0 0 0-1.395 0v2.807a56 56 0 0 0-1.395-.016zm-3.252 4.94c.426-.057.96-.057 1.578-.057h1.952c.619 0 1.151 0 1.578.058c.458.061.896.2 1.252.555c.355.356.494.794.555 1.252c.058.426.058.96.058 1.578v1.952c0 .619 0 1.151-.058 1.578c-.061.458-.2.896-.555 1.252c-.356.355-.794.494-1.252.555c-.427.058-.96.058-1.578.058h-1.952c-.619 0-1.152 0-1.578-.058c-.458-.061-.896-.2-1.252-.555c-.355-.356-.494-.794-.555-1.252c-.058-.427-.058-.96-.058-1.578v-1.952c0-.619 0-1.152.058-1.578c.061-.458.2-.896.555-1.252c.356-.355.794-.494 1.252-.555"></svg:path></svg:g>`,
})
export class SolarCpuBoltBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCreativeCommonsBoldIcon],svg[solar-creative-commons-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m11.75 0c0-1.747 1.533-3.25 3.536-3.25c.511 0 .995.1 1.43.277a.75.75 0 0 0 .567-1.389a5.3 5.3 0 0 0-1.997-.388c-2.732 0-5.036 2.079-5.036 4.75s2.304 4.75 5.036 4.75a5.3 5.3 0 0 0 1.997-.388a.75.75 0 1 0-.566-1.39c-.436.178-.92.278-1.431.278c-2.003 0-3.536-1.503-3.536-3.25M9.286 8.75C7.283 8.75 5.75 10.253 5.75 12s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389a5.3 5.3 0 0 1-1.997.388c-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75a5.3 5.3 0 0 1 1.997.388a.75.75 0 0 1-.566 1.39a3.8 3.8 0 0 0-1.431-.278" clip-rule="evenodd"></svg:path>`,
})
export class SolarCreativeCommonsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropBoldIcon],svg[solar-crop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1.25a.75.75 0 0 1 .75.75v9c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h9a.75.75 0 0 1 0 1.5h-2.25V22a.75.75 0 0 1-1.5 0v-2.25h-5.306c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V5.75H2a.75.75 0 0 1 0-1.5h2.25V2A.75.75 0 0 1 5 1.25m10.29 4.64c-1.028-.138-2.383-.14-4.29-.14H8a.75.75 0 0 1 0-1.5h3.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V16a.75.75 0 0 1-1.5 0v-3c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.5 11.5c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z"></svg:path>`,
})
export class SolarCropBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCropMinimalisticBoldIcon],svg[solar-crop-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172M8.75 6a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25v3.302c0 .899 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h3.302V18a.75.75 0 0 0 1.5 0v-1.25H18a.75.75 0 0 0 0-1.5h-6c-.964 0-1.612-.002-2.095-.066c-.461-.063-.659-.17-.789-.3s-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094zM12 8.75c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v1.47a.75.75 0 0 0 1.5 0v-1.522c0-.899 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08h-1.523a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCropMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownBoldIcon],svg[solar-crown-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.092 14.326l.193-1.894c.103-1.011.17-1.678.117-2.099h.02c.871 0 1.578-.746 1.578-1.666S21.293 7 20.421 7s-1.579.746-1.579 1.667c0 .416.145.797.384 1.089c-.343.223-.792.695-1.468 1.405c-.52.547-.78.82-1.07.863a.84.84 0 0 1-.473-.07c-.268-.124-.447-.462-.804-1.139L13.527 7.25c-.22-.417-.405-.766-.572-1.047c.683-.368 1.15-1.117 1.15-1.98C14.105 2.994 13.163 2 12 2s-2.105.995-2.105 2.222c0 .864.467 1.613 1.15 1.98c-.167.282-.351.631-.572 1.048L8.59 10.816c-.358.676-.537 1.014-.805 1.139a.84.84 0 0 1-.473.07c-.29-.043-.55-.317-1.07-.864c-.676-.71-1.125-1.182-1.468-1.405c.24-.292.384-.673.384-1.09C5.158 7.747 4.45 7 3.578 7C2.708 7 2 7.746 2 8.667c0 .92.707 1.666 1.579 1.666h.019c-.054.42.014 1.088.117 2.099l.193 1.894c.107 1.051.196 2.051.306 2.952h15.572c.11-.9.199-1.901.306-2.952M10.855 22h2.29c2.985 0 4.478 0 5.474-.94c.434-.412.71-1.152.908-2.116H4.473c.198.964.473 1.704.908 2.115C6.377 22 7.87 22 10.855 22"></svg:path>`,
})
export class SolarCrownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownLineBoldIcon],svg[solar-crown-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.838 11.126l-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22h-2.72c-3.545 0-5.317 0-6.5-1.21s-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a1 1 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998c.618.704.927 1.055 1.271 1.11a.92.92 0 0 0 .562-.09c.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2s1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464c.176.089.37.12.562.09c.344-.055.653-.406 1.271-1.11c1.195-1.36 1.792-2.04 2.268-1.998a1 1 0 0 1 .675.367c.327.395.237 1.352.057 3.264M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarCrownLineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownMinimalisticBoldIcon],svg[solar-crown-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.609 13.562l.23-2.436c.18-1.912.27-2.869-.058-3.264a1 1 0 0 0-.675-.367c-.476-.042-1.073.638-2.268 1.998c-.618.704-.927 1.055-1.271 1.11a.92.92 0 0 1-.562-.09c-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2s-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.93.93 0 0 1-.562.09c-.344-.055-.653-.406-1.271-1.11c-1.195-1.36-1.792-2.04-2.268-1.998a1 1 0 0 0-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21s1.371-3.216 1.749-7.228"></svg:path>`,
})
export class SolarCrownMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCrownStarBoldIcon],svg[solar-crown-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.838 11.126l-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22h-2.72c-3.545 0-5.317 0-6.5-1.21s-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a1 1 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998c.618.704.927 1.055 1.271 1.11a.92.92 0 0 0 .562-.09c.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2s1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464c.176.089.37.12.562.09c.344-.055.653-.406 1.271-1.11c1.195-1.36 1.792-2.04 2.268-1.998a1 1 0 0 1 .675.367c.327.395.237 1.352.057 3.264M12.952 12.7l-.098-.176c-.38-.682-.57-1.023-.854-1.023s-.474.341-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.136l-.19.043c-.738.167-1.107.25-1.195.533c-.088.282.164.576.667 1.164l.13.152c.143.168.215.251.247.354c.032.104.021.215 0 .438l-.02.204c-.076.784-.114 1.177.115 1.351c.23.175.576.016 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.478 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.437c.032-.104.104-.187.247-.355l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.043c-.21-.048-.315-.072-.4-.136c-.084-.063-.138-.16-.246-.354" clip-rule="evenodd"></svg:path>`,
})
export class SolarCrownStarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupBoldIcon],svg[solar-cup-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.377 2.347A26.4 26.4 0 0 0 12 2c-1.783 0-3.253.157-4.377.347c-1.139.192-1.708.288-2.184.874c-.475.586-.45 1.219-.4 2.485c.173 4.348 1.111 9.78 6.211 10.26V19.5H9.82a1 1 0 0 0-.98.804l-.19.946H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.946a1 1 0 0 0-.98-.804h-1.43v-3.534c5.1-.48 6.039-5.911 6.211-10.26c.05-1.266.076-1.9-.4-2.485c-.476-.586-1.045-.682-2.184-.874" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupFirstBoldIcon],svg[solar-cup-first-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.377 2.347A26.4 26.4 0 0 0 12 2c-1.783 0-3.253.157-4.377.347c-1.139.192-1.708.288-2.184.874c-.475.586-.45 1.219-.4 2.485c.173 4.348 1.111 9.78 6.211 10.26V19.5H9.82a1 1 0 0 0-.98.804l-.19.946H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.946a1 1 0 0 0-.98-.804h-1.43v-3.534c5.1-.48 6.039-5.911 6.211-10.26c.05-1.266.076-1.9-.4-2.485c-.476-.586-1.045-.682-2.184-.874m-3.59 3.46a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0V8.31l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupFirstBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupHotBoldIcon],svg[solar-cup-hot-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.284 11.266c-.133-2-.2-2.999.393-3.632C4.27 7 5.272 7 7.276 7h5.449c2.003 0 3.005 0 3.598.634c.162.173.275.374.35.616H17c2.526 0 4.75 1.812 4.75 4.25s-2.224 4.25-4.75 4.25h-.65l-.035.5H3.685q-.029-.4-.058-.85zM16.45 15.25H17c1.892 0 3.25-1.322 3.25-2.75S18.892 9.75 17 9.75h-.2c-.012.43-.045.93-.084 1.516z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.819 18.75h12.362c-.144 1.177-.378 1.917-.938 2.44c-.865.81-2.196.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81c-.56-.523-.794-1.263-.938-2.44"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.977 1.327a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 0 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupHotBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupMusicBoldIcon],svg[solar-cup-music-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.316 11.267a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2m1.5 2.75a.75.75 0 0 0-1.5 0v3.378a2.25 2.25 0 1 0 1.5 2.122V7.2c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162m20 0v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958"></svg:path>`,
})
export class SolarCupMusicBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupPaperBoldIcon],svg[solar-cup-paper-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.185 2h5.63c1.838 0 2.757 0 3.48.444a3 3 0 0 1 .355.257c.65.545.941 1.416 1.523 3.16l.036.107c.319.955.478 1.433.31 1.794a1 1 0 0 1-.22.303c-.288.274-.792.274-1.799.274l-.426 2.911H5.926L5.5 8.34c-1.007 0-1.51 0-1.8-.275a1 1 0 0 1-.218-.303c-.169-.361-.01-.839.31-1.794l.035-.107C4.41 4.117 4.7 3.246 5.35 2.7q.168-.141.356-.257C6.429 2 7.347 2 9.186 2m8.156 14.25H6.658l-.512-3.5h11.708zM13.043 22h-2.086c-1.649 0-2.473 0-3.036-.487s-.683-1.302-.922-2.934l-.121-.829h10.244l-.121.83c-.239 1.63-.359 2.446-.922 2.933S14.692 22 13.043 22"></svg:path>`,
})
export class SolarCupPaperBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCupStarBoldIcon],svg[solar-cup-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2m.952 4.199l-.098-.176C12.474 5.34 12.284 5 12 5s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354" clip-rule="evenodd"></svg:path>`,
})
export class SolarCupStarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorBoldIcon],svg[solar-cursor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.574 19.2l-3.938-3.938l-1.203 1.202c-1.23 1.232-1.846 1.847-2.508 1.702s-.963-.963-1.565-2.596l-2.007-5.45C4.152 6.861 3.55 5.232 4.39 4.392s2.47-.24 5.73.962l5.45 2.006c1.633.602 2.45.903 2.596 1.565s-.47 1.277-1.702 2.508l-1.202 1.203l3.938 3.938c.408.408.612.612.706.84c.125.303.125.643 0 .947c-.094.227-.298.431-.706.839s-.612.612-.84.706a1.24 1.24 0 0 1-.947 0c-.227-.094-.43-.298-.839-.706"></svg:path>`,
})
export class SolarCursorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarCursorSquareBoldIcon],svg[solar-cursor-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m8.934 10.575l2.461 2.46c.255.256.382.383.524.442c.19.079.403.079.593 0c.142-.059.27-.186.524-.441c.255-.255.382-.382.441-.524a.77.77 0 0 0 0-.593c-.059-.142-.186-.27-.441-.524l-2.461-2.461l.751-.752c.77-.77 1.154-1.154 1.064-1.568c-.091-.413-.602-.602-1.623-.978l-3.406-1.255c-2.037-.75-3.055-1.125-3.58-.6s-.15 1.543.6 3.58L9.1 14.231c.376 1.021.565 1.532.978 1.623s.798-.294 1.568-1.064z" clip-rule="evenodd"></svg:path>`,
})
export class SolarCursorSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerBoldIcon],svg[solar-danger-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.843 3.802C9.872 2.601 10.886 2 12 2s2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594s-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22s-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7s1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerCircleBoldIcon],svg[solar-danger-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerSquareBoldIcon],svg[solar-danger-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2m0 4.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDangerTriangleBoldIcon],svg[solar-danger-triangle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.312 10.762C8.23 5.587 9.689 3 12 3s3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022zM12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarDangerTriangleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDatabaseBoldIcon],svg[solar-database-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4v-4.026c.502.617 1.215 1.129 2.008 1.525C7.58 16.285 9.7 16.75 12 16.75s4.42-.465 5.992-1.25c.793-.397 1.506-.91 2.008-1.526z"></svg:path><svg:path fill="currentColor" d="M12 10.75c2.3 0 4.42-.465 5.992-1.25c.793-.397 1.506-.91 2.008-1.526V12c0 .5-1.786 1.591-2.679 2.158c-1.323.661-3.203 1.092-5.321 1.092s-3.998-.43-5.321-1.092C5.5 13.568 4 12.5 4 12V7.974c.502.617 1.215 1.129 2.008 1.525C7.58 10.285 9.7 10.75 12 10.75"></svg:path><svg:path fill="currentColor" d="M17.321 8.158C15.998 8.819 14.118 9.25 12 9.25s-3.998-.43-5.321-1.092c-.515-.202-1.673-.843-2.477-1.879a.8.8 0 0 1-.162-.621c.023-.148.055-.301.096-.396C4.828 3.406 8.086 2 12 2s7.172 1.406 7.864 3.262c.041.095.073.248.096.396a.8.8 0 0 1-.162.621c-.804 1.036-1.962 1.677-2.477 1.879"></svg:path>`,
})
export class SolarDatabaseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDeliveryBoldIcon],svg[solar-delivery-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.564 8.73l.515 1.863c.485 1.755.727 2.633 1.44 3.032c.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396c.412-.692.17-1.57-.316-3.325l-.514-1.862c-.485-1.756-.728-2.634-1.44-3.033c-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398c-.412.691-.17 1.569.315 3.324"></svg:path><svg:path fill="currentColor" d="M2.277 5.247a.75.75 0 0 1 .924-.522l1.703.472A2.71 2.71 0 0 1 6.8 7.075l2.151 7.786l.158.547a2.96 2.96 0 0 1 1.522 1.267l.31-.096l8.87-2.305a.75.75 0 1 1 .378 1.452l-8.837 2.296l-.33.102c-.006 1.27-.883 2.432-2.21 2.776c-1.59.414-3.225-.502-3.651-2.044s.518-3.129 2.108-3.542q.119-.03.237-.052L5.354 7.474a1.21 1.21 0 0 0-.85-.831L2.8 6.17a.75.75 0 0 1-.523-.923"></svg:path>`,
})
export class SolarDeliveryBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDevicesBoldIcon],svg[solar-devices-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 10v4c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22c-1.7 0-3.015 0-4.056-.107c.335-.525.454-1.082.506-1.598c.05-.491.05-1.084.05-1.729v-4.132c0-.645 0-1.238-.05-1.729c-.054-.533-.18-1.11-.54-1.65a3.5 3.5 0 0 0-.966-.965c-.54-.36-1.116-.486-1.65-.54A14 14 0 0 0 6 9.5c.002-3.44.053-5.21 1.172-6.328C8.343 2 10.229 2 14 2s5.657 0 6.828 1.172S22 6.229 22 10m-10.75 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDevicesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramDownBoldIcon],svg[solar-diagram-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386z"></svg:path><svg:path fill="currentColor" d="M6.587 6.534a.75.75 0 0 0-1.174.932l3.133 3.946c.226.284.418.527.59.714c.177.196.373.379.62.51a2.25 2.25 0 0 0 2.033.045c.252-.121.456-.296.642-.483c.179-.18.382-.414.62-.688l.016-.018c.258-.298.428-.493.566-.633c.136-.136.199-.174.227-.187a.75.75 0 0 1 .678.014c.028.015.088.056.218.198c.133.145.294.347.539.656l3.118 3.926a.75.75 0 0 0 1.174-.932l-3.133-3.946a15 15 0 0 0-.589-.714a2.3 2.3 0 0 0-.62-.51a2.25 2.25 0 0 0-2.034-.045a2.4 2.4 0 0 0-.642.483c-.179.18-.381.414-.62.688l-.015.018c-.259.298-.428.493-.567.633c-.136.136-.198.174-.227.188a.75.75 0 0 1-.678-.015a1 1 0 0 1-.218-.198a14 14 0 0 1-.538-.656z"></svg:path>`,
})
export class SolarDiagramDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiagramUpBoldIcon],svg[solar-diagram-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386z"></svg:path><svg:path fill="currentColor" d="M19.588 7.466a.75.75 0 1 0-1.175-.932l-3.118 3.926c-.245.309-.406.51-.539.656c-.13.143-.19.183-.218.198a.75.75 0 0 1-.678.014c-.028-.013-.09-.05-.227-.187c-.138-.14-.308-.335-.566-.633l-.017-.018c-.237-.274-.44-.508-.62-.688a2.3 2.3 0 0 0-.64-.483a2.25 2.25 0 0 0-2.035.044a2.3 2.3 0 0 0-.62.51c-.17.188-.363.43-.589.715l-3.133 3.946a.75.75 0 1 0 1.174.932l3.119-3.926c.245-.309.406-.51.538-.656c.13-.143.19-.183.218-.198a.75.75 0 0 1 .678-.014c.029.013.091.05.227.187c.139.14.308.335.567.633l.016.018c.238.274.44.508.62.688c.185.187.389.362.64.483a2.25 2.25 0 0 0 2.035-.044a2.4 2.4 0 0 0 .62-.51c.17-.188.363-.43.59-.715z"></svg:path>`,
})
export class SolarDiagramUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialog2BoldIcon],svg[solar-dialog-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.549 21.528l.25-.423c.4-.677.6-1.015.92-1.204s.736-.202 1.568-.229c.781-.025 1.306-.093 1.755-.279a3.86 3.86 0 0 0 2.086-2.086c.294-.709.294-1.607.294-3.403v-.772c0-2.524 0-3.786-.568-4.713a3.86 3.86 0 0 0-1.273-1.273c-.927-.568-2.19-.568-4.713-.568H8.554c-2.524 0-3.786 0-4.713.568A3.86 3.86 0 0 0 2.568 8.42C2 9.346 2 10.61 2 13.132v.771c0 1.797 0 2.695.293 3.404a3.86 3.86 0 0 0 2.087 2.086c.449.186.973.254 1.754.28c.833.026 1.25.039 1.569.228s.52.527.92 1.204l.25.423a.98.98 0 0 0 1.676 0m2.535-7.239a.964.964 0 1 0 0-1.928a.964.964 0 0 0 0 1.928m-2.41-.964a.964.964 0 1 1-1.927 0a.964.964 0 0 1 1.928 0m-4.337.964a.964.964 0 1 0 0-1.928a.964.964 0 0 0 0 1.928" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.17 2c1.151 0 2.067 0 2.802.07c.753.071 1.39.222 1.957.57a4.34 4.34 0 0 1 1.431 1.43c.348.567.498 1.204.57 1.957c.07.736.07 1.651.07 2.803v.787c0 .82 0 1.472-.036 2c-.037.541-.114 1.006-.294 1.44a4.34 4.34 0 0 1-2.428 2.38q-.191.074-.334.122c.014-.469.014-1.003.014-1.605v-.893c0-1.201 0-2.208-.078-3.026c-.082-.857-.259-1.66-.712-2.4a5.36 5.36 0 0 0-1.768-1.768c-.738-.452-1.542-.63-2.4-.711c-.817-.078-1.824-.078-3.026-.078H8.483c-.816 0-1.542 0-2.18.024c.03-.103.07-.22.118-.36q.12-.352.315-.67a4.34 4.34 0 0 1 1.431-1.433c.568-.347 1.205-.498 1.958-.57C10.859 2 11.775 2 12.927 2z"></svg:path>`,
})
export class SolarDialog2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDialogBoldIcon],svg[solar-dialog-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.5a6.5 6.5 0 0 0-11.626-3.993A9.5 9.5 0 0 1 19.5 14q0 .165-.006.33l.333.088a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 0 0 22 8.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 14a8 8 0 0 1-11.45 7.22a1.67 1.67 0 0 0-1.15-.13l-1.227.329a1.3 1.3 0 0 1-1.591-1.592L2.91 18.6a1.67 1.67 0 0 0-.13-1.15A8 8 0 1 1 18 14M6.5 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarDialogBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaBoldIcon],svg[solar-diploma-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121c-.476.477-1.11.695-2.04.795a3 3 0 0 0-.195-.234a11 11 0 0 0-.406-.414l-1.493-1.472l-.551-.558a4.501 4.501 0 0 0-8.872 0l-.55.558l-1.494 1.472c-.143.141-.29.286-.406.414c-.05.055-.12.134-.194.234c-.931-.1-1.565-.318-2.041-.795C2 16.243 2 14.828 2 12m7-6.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM6.25 9.5A.75.75 0 0 1 7 8.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" d="M9.001 15.917L9 16a3 3 0 1 0 .001-.083M7.676 17.25l-1.08 1.065c-.325.32-.487.48-.543.614a.643.643 0 0 0 .26.813c.122.071.342.093.783.138c.248.025.373.037.477.075a.84.84 0 0 1 .5.494c.039.103.052.225.077.47c.045.435.068.652.14.773a.66.66 0 0 0 .824.256c.137-.056.3-.215.623-.535l1.08-1.07a4.51 4.51 0 0 1-3.141-3.094m5.507 3.094l1.08 1.07c.324.32.486.48.623.535c.313.126.66.018.824-.256c.072-.12.095-.338.14-.772c.025-.246.038-.368.077-.47a.84.84 0 0 1 .5-.495c.105-.038.229-.05.477-.075c.44-.045.661-.067.783-.138a.643.643 0 0 0 .26-.812c-.056-.136-.218-.296-.542-.615l-1.08-1.066a4.51 4.51 0 0 1-3.142 3.094"></svg:path>`,
})
export class SolarDiplomaBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDiplomaVerifiedBoldIcon],svg[solar-diploma-verified-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121c-.646.647-1.582.818-3.158.863a3.2 3.2 0 0 0-.767-2.066a.2.2 0 0 1-.05-.12a3.21 3.21 0 0 0-2.944-2.945a.2.2 0 0 1-.12-.05a3.21 3.21 0 0 0-4.164 0a.2.2 0 0 1-.12.05a3.21 3.21 0 0 0-2.945 2.945a.2.2 0 0 1-.05.12a3.2 3.2 0 0 0-.766 2.066c-1.576-.045-2.512-.216-3.158-.863C2 16.243 2 14.828 2 12m6.25-6A.75.75 0 0 1 9 5.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 6M7 8.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"></svg:path><svg:path d="M13.11 13.945a1.71 1.71 0 0 0-2.22 0a1.7 1.7 0 0 1-.973.403a1.71 1.71 0 0 0-1.569 1.57c-.028.358-.17.698-.403.973a1.71 1.71 0 0 0 0 2.218c.234.274.375.615.403.973a1.71 1.71 0 0 0 1.57 1.57c.358.028.699.169.973.402a1.71 1.71 0 0 0 2.218 0a1.7 1.7 0 0 1 .973-.403a1.71 1.71 0 0 0 1.57-1.569a1.7 1.7 0 0 1 .402-.973a1.71 1.71 0 0 0 0-2.219a1.7 1.7 0 0 1-.403-.973a1.71 1.71 0 0 0-1.569-1.569a1.7 1.7 0 0 1-.973-.403m.902 3.603a.75.75 0 1 0-1.024-1.096l-1.63 1.522l-.346-.322a.75.75 0 0 0-1.024 1.096l.857.8a.75.75 0 0 0 1.024 0z"></svg:path></svg:g>`,
})
export class SolarDiplomaVerifiedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisketteBoldIcon],svg[solar-diskette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.536 20.536C22 19.07 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224a8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483a4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535c.685.685 1.563 1.05 2.786 1.243v-.83c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08h2.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.83c1.223-.194 2.102-.558 2.785-1.242M6.25 8A.75.75 0 0 1 7 7.25h6a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.183 18.905c.065.483.067 1.131.067 2.095v.931C15.094 22 13.7 22 12 22s-3.094 0-4.25-.069V21c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789s.327-.237.788-.3c.483-.064 1.131-.066 2.095-.066h2c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788"></svg:path>`,
})
export class SolarDisketteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDislikeBoldIcon],svg[solar-dislike-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.27 8.485l.705 4.08a1.666 1.666 0 0 1-1.64 1.95h-5.181a.833.833 0 0 0-.822.969l.663 4.045a4.8 4.8 0 0 1-.09 1.974c-.139.533-.55.962-1.092 1.136l-.145.047c-.328.105-.685.08-.994-.068a1.26 1.26 0 0 1-.68-.818l-.476-1.834a7.6 7.6 0 0 0-.656-1.679c-.415-.777-1.057-1.4-1.725-1.975l-1.439-1.24a1.67 1.67 0 0 1-.572-1.406l.812-9.393A1.666 1.666 0 0 1 8.597 2.75h4.648c3.482 0 6.453 2.426 7.025 5.735"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.968 15.265a.75.75 0 0 0 .78-.685l.97-11.236a1.237 1.237 0 1 0-2.468-.107v11.279a.75.75 0 0 0 .718.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDislikeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDisplayBoldIcon],svg[solar-display-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.76c0-2.715 0-4.073.879-4.916C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.844c.879.843.879 2.2.879 4.916v.96c0 2.715 0 4.073-.879 4.916c-.878.844-2.293.844-5.121.844h-3.25v2.36l5.487 1.757a.714.714 0 0 1 .475.91a.76.76 0 0 1-.95.456L12 19.119l-5.763 1.844a.757.757 0 0 1-.949-.456a.714.714 0 0 1 .475-.91l5.487-1.756V15.48H8c-2.828 0-4.243 0-5.121-.844C2 13.793 2 12.436 2 9.72z"></svg:path>`,
})
export class SolarDisplayBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDnaBoldIcon],svg[solar-dna-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.03 1.47a.75.75 0 0 1 0 1.06q-.624.626-1.12 1.32l1.207 1.207a.75.75 0 0 1-1.06 1.06l-.948-.948q-.316.622-.535 1.266l4.879 4.878a1 1 0 0 1 .096.118a10 10 0 0 0 1.207-.502L15.748 7.92a.75.75 0 1 1 1.06-1.06l3.276 3.275q.73-.512 1.386-1.166a.75.75 0 1 1 1.06 1.06c-2.622 2.623-6.264 3.854-9.556 3.213c.75 3.175-.4 6.744-2.944 9.287a.75.75 0 1 1-1.06-1.06a10 10 0 0 0 1.158-1.395l-1.354-1.353a.75.75 0 1 1 1.061-1.06l1.063 1.062q.279-.606.463-1.228l-.048-.044L6.5 12.64q-.66.195-1.302.499l2.831 2.83a.75.75 0 0 1-1.06 1.062l-3.112-3.113q-.7.488-1.328 1.112a.75.75 0 0 1-1.06-1.06c2.543-2.544 6.112-3.693 9.287-2.944c-.64-3.292.59-6.934 3.213-9.556a.75.75 0 0 1 1.06 0m.82 10.362l-3.68-3.682c-.159 1.17-.073 2.334.271 3.412c1.078.344 2.242.43 3.412.271m-4.52 1.122c.299.867.413 1.8.353 2.747l-3.384-3.384c.947-.06 1.88.054 2.747.353l.212.072z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDnaBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentAddBoldIcon],svg[solar-document-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.519 16.501c.175-.136.334-.295.651-.612l3.957-3.958c.096-.095.052-.26-.075-.305a4.3 4.3 0 0 1-1.644-1.034a4.3 4.3 0 0 1-1.034-1.644c-.045-.127-.21-.171-.305-.075L14.11 12.83c-.317.317-.476.476-.612.651q-.243.311-.412.666c-.095.2-.166.414-.308.84l-.184.55l-.292.875l-.273.82a.584.584 0 0 0 .738.738l.82-.273l.875-.292l.55-.184c.426-.142.64-.212.84-.308q.355-.17.666-.412m5.849-5.809a2.163 2.163 0 1 0-3.06-3.059l-.126.128a.52.52 0 0 0-.148.465c.02.107.055.265.12.452c.13.375.376.867.839 1.33s.955.709 1.33.839c.188.065.345.1.452.12a.53.53 0 0 0 .465-.148z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C20.981 19.676 21 17.832 21 14.18l-2.818 2.818c-.27.27-.491.491-.74.686a5 5 0 0 1-.944.583a8 8 0 0 1-.944.355l-2.312.771a2.083 2.083 0 0 1-2.635-2.635l.274-.82l.475-1.426l.021-.066c.121-.362.22-.658.356-.944q.24-.504.583-.943c.195-.25.416-.47.686-.74l4.006-4.007L18.12 6.7l.127-.127A3.65 3.65 0 0 1 20.838 5.5c-.151-1.03-.444-1.763-1.01-2.328C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M7.25 9A.75.75 0 0 1 8 8.25h6.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentBoldIcon],svg[solar-document-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M8 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentMedicineBoldIcon],svg[solar-document-medicine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M12.75 6a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 1 0 0 1.5h1.25V10a.75.75 0 0 0 1.5 0V8.75H14a.75.75 0 0 0 0-1.5h-1.25zM8 13.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm1 4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentMedicineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentTextBoldIcon],svg[solar-document-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M7.25 8A.75.75 0 0 1 8 7.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 15.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentTextBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsBoldIcon],svg[solar-documents-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.75 10v4c0 2.829 0 4.243.879 5.122c.217.217.467.38.763.504l-.019-.134c-.123-.918-.123-2.063-.123-3.393V7.902c0-1.33 0-2.476.123-3.393l.02-.134a2.3 2.3 0 0 0-.764.504C1.75 5.758 1.75 7.172 1.75 10m20 0v4c0 2.829 0 4.243-.879 5.122c-.217.217-.467.38-.763.504l.019-.134c.123-.918.123-2.063.123-3.393V7.902c0-1.33 0-2.476-.123-3.393l-.02-.134c.297.123.547.287.764.504c.879.879.879 2.293.879 5.121"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.629 2.879C4.75 3.757 4.75 5.172 4.75 8v8c0 2.828 0 4.243.879 5.121C6.507 22 7.922 22 10.75 22h2c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C16.993 2 15.578 2 12.75 2h-2c-2.828 0-4.243 0-5.121.879M8 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17m.75-4.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8 9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDocumentsMinimalisticBoldIcon],svg[solar-documents-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.75 2h2c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v8c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-2c-2.828 0-4.243 0-5.121-.879c-.879-.878-.879-2.293-.879-5.121V8c0-2.828 0-4.243.879-5.121C6.507 2 7.922 2 10.75 2M8 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 13m0-4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9m0 8a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17M1.75 4.25A.75.75 0 0 1 2.5 5v14A.75.75 0 0 1 1 19V5a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDocumentsMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarBoldIcon],svg[solar-dollar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 7.847c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm1.5 5.001v3.304c.936-.255 1.5-.974 1.5-1.652s-.564-1.397-1.5-1.652"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarDollarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDollarMinimalisticBoldIcon],svg[solar-dollar-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m.75-16a.75.75 0 0 0-1.5 0v.317c-1.63.292-3 1.517-3 3.183c0 1.917 1.813 3.25 3.75 3.25c1.377 0 2.25.906 2.25 1.75s-.873 1.75-2.25 1.75c-1.376 0-2.25-.906-2.25-1.75a.75.75 0 0 0-1.5 0c0 1.666 1.37 2.891 3 3.183V18a.75.75 0 0 0 1.5 0v-.317c1.63-.292 3-1.517 3-3.183c0-1.917-1.813-3.25-3.75-3.25c-1.376 0-2.25-.906-2.25-1.75s.874-1.75 2.25-1.75c1.377 0 2.25.906 2.25 1.75a.75.75 0 0 0 1.5 0c0-1.666-1.37-2.891-3-3.183z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDollarMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBittenBoldIcon],svg[solar-donut-bitten-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.28 21.554a1.8 1.8 0 0 1 .664-1.926c.493-.364 1.078-.483 1.571-.366a.19.19 0 0 0 .181-.047a.18.18 0 0 0 .017-.233l-.093-.127c-.612-.827-.307-2.09.68-2.834a32 32 0 0 0-.471-.314l-.178-.116a32 32 0 0 1-.64-.425a3.73 3.73 0 0 1-2.01.584a3.74 3.74 0 0 1-2.763-1.214c-.407.221-.883.444-1.374.635c-.801.312-1.735.579-2.532.579c-1.03 0-2.094-.446-2.92-.9C3.64 18.986 7.469 22 12.002 22c.213 0 .34-.242.28-.446M9.75 12a2.25 2.25 0 1 1 3.83 1.602a.8.8 0 0 0-.142.126l-.01.012A2.25 2.25 0 0 1 9.75 12"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.48 14.795c.707-.523 1.607-.539 2.147-.078A10 10 0 0 0 22 12a9.95 9.95 0 0 0-1.565-5.374l-.905.904a.75.75 0 1 1-1.06-1.06l1-1l.058-.053A9.98 9.98 0 0 0 12.001 2a9.95 9.95 0 0 0-5.375 1.565l.904.905a.75.75 0 1 1-1.06 1.06l-1-1l-.053-.058a9.98 9.98 0 0 0-3.381 8.372c.216.154.484.333.784.512c.818.487 1.752.894 2.512.894c.516 0 1.243-.187 1.987-.477c.42-.163.816-.348 1.145-.524a3.75 3.75 0 1 1 6.646.848l.371.245l.17.11c.477.313 1.062.7 1.38 1.018l.037.04c.475.059.901.28 1.182.66l.275.373a.086.086 0 0 0 .13.01a.1.1 0 0 0 .024-.075c-.078-.586.213-1.249.8-1.683M16.45 4.4a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15m-5.98-.93a.75.75 0 0 0 0 1.06l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 0M8.41 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 0 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918m-2.513-.386a.75.75 0 0 0-.372.993l.585 1.287a.75.75 0 0 0 1.365-.62L6.89 7.545a.75.75 0 0 0-.993-.372m10.854 3.964a.75.75 0 0 0 .714-.784L17.4 8.941a.75.75 0 0 0-1.498.07l.066 1.414a.75.75 0 0 0 .784.713m1.686.92a.75.75 0 0 0 1.058.068l1.678-1.478a.75.75 0 0 0-.99-1.126L18.503 11a.75.75 0 0 0-.067 1.059M6.943 10.896a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 0 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163M3.563 8.19a.75.75 0 0 0-.707.79l.078 1.413a.75.75 0 0 0 1.498-.084l-.079-1.412a.75.75 0 0 0-.79-.707" clip-rule="evenodd"></svg:path>`,
})
export class SolarDonutBittenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDonutBoldIcon],svg[solar-donut-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.677 14.531c.493-.492.802-.781 1.476-.781c.594 0 1.134.237 1.582.547C20.697 18.713 16.732 22 12 22c-4.532 0-8.36-3.015-9.588-7.15c.825.454 1.889.9 2.92.9c.813 0 1.635-.277 2.325-.598a11.4 11.4 0 0 0 1.422-.8A3.74 3.74 0 0 0 12 15.75c.752 0 1.452-.221 2.039-.602c.574.337 1.285.602 2.104.602c1.313 0 2.006-.691 2.513-1.198z"></svg:path><svg:path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 8.25a3.75 3.75 0 0 0-3.612 4.76c-.379.256-.855.546-1.363.782c-.604.28-1.194.458-1.693.458c-.76 0-1.694-.407-2.513-.894c-.3-.179-.568-.358-.784-.512Q2 12.426 2 12a9.98 9.98 0 0 1 3.417-7.528q.024.03.053.058l1 1a.75.75 0 0 0 1.06-1.06l-.904-.905A9.95 9.95 0 0 1 12 2a9.98 9.98 0 0 1 7.528 3.417l-.058.053l-1 1a.75.75 0 0 0 1.06 1.06l.905-.904a9.95 9.95 0 0 1 1.54 6.073a4.04 4.04 0 0 0-1.822-.449c-1.314 0-2.006.691-2.514 1.198l-.021.021c-.493.492-.802.781-1.475.781c-.35 0-.683-.082-.992-.216A3.75 3.75 0 0 0 12 8.25m4.45-3.85a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15m-5.98-.93a.75.75 0 0 0 0 1.06l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 0M8.41 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 1 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918m8.342 3.578a.75.75 0 0 0 .713-.784L17.4 8.94a.75.75 0 1 0-1.498.07l.066 1.413a.75.75 0 0 0 .784.714m2.19.416A.75.75 0 0 0 20 11.62l1.173-.973a.75.75 0 1 0-.991-1.126l-1.173.973a.75.75 0 0 0-.068 1.059M5.896 7.174a.75.75 0 0 0-.373.993l.586 1.287a.75.75 0 1 0 1.365-.62L6.89 7.545a.75.75 0 0 0-.993-.372m1.046 3.72a.75.75 0 0 1 .162 1.05l-.835 1.14a.75.75 0 1 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163M3.563 8.19a.75.75 0 0 0-.708.79l.079 1.412a.75.75 0 1 0 1.498-.083l-.08-1.412a.75.75 0 0 0-.79-.707" clip-rule="evenodd"></svg:path>`,
})
export class SolarDonutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowDownBoldIcon],svg[solar-double-alt-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.43 10.512a.75.75 0 0 1 1.058-.081L12 16.012l6.512-5.581a.75.75 0 1 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5 6.25a.75.75 0 0 0-.488 1.32l7 6c.28.24.695.24.976 0l7-6A.75.75 0 0 0 19 6.25z"></svg:path>`,
})
export class SolarDoubleAltArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowLeftBoldIcon],svg[solar-double-alt-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.488 4.43a.75.75 0 0 1 .081 1.058L7.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.75 5a.75.75 0 0 0-1.32-.488l-6 7a.75.75 0 0 0 0 .976l6 7A.75.75 0 0 0 17.75 19z"></svg:path>`,
})
export class SolarDoubleAltArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowRightBoldIcon],svg[solar-double-alt-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.512 4.43a.75.75 0 0 0-.081 1.058L16.012 12l-5.581 6.512a.75.75 0 1 0 1.138.976l6-7a.75.75 0 0 0 0-.976l-6-7a.75.75 0 0 0-1.057-.081" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.25 5a.75.75 0 0 1 1.32-.488l6 7a.75.75 0 0 1 0 .976l-6 7A.75.75 0 0 1 6.25 19z"></svg:path>`,
})
export class SolarDoubleAltArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDoubleAltArrowUpBoldIcon],svg[solar-double-alt-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z"></svg:path>`,
})
export class SolarDoubleAltArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadBoldIcon],svg[solar-download-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 0-.75.75v10.973l-1.68-1.961a.75.75 0 1 0-1.14.976l3 3.5a.75.75 0 0 0 1.14 0l3-3.5a.75.75 0 1 0-1.14-.976l-1.68 1.96V2a.75.75 0 0 0-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.25 9v.378a2.249 2.249 0 0 1 2.458 3.586l-3 3.5a2.25 2.25 0 0 1-3.416 0l-3-3.5A2.25 2.25 0 0 1 9.75 9.378V9H8c-2.828 0-4.243 0-5.121.879C2 10.757 2 12.172 2 15v1c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-1c0-2.828 0-4.243-.879-5.121C20.243 9 18.828 9 16 9z"></svg:path>`,
})
export class SolarDownloadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadMinimalisticBoldIcon],svg[solar-download-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.554 16.506a.75.75 0 0 1-1.107 0l-4-4.375a.75.75 0 0 1 1.107-1.012l2.696 2.95V3a.75.75 0 0 1 1.5 0v11.068l2.697-2.95a.75.75 0 1 1 1.107 1.013z"></svg:path><svg:path fill="currentColor" d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191"></svg:path>`,
})
export class SolarDownloadMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadSquareBoldIcon],svg[solar-download-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m10-5.75a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V7a.75.75 0 0 1 .75-.75m-4 10a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDownloadSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDownloadTwiceSquareBoldIcon],svg[solar-download-twice-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M9.25 7a.75.75 0 0 0-1.5 0v4.929l-1.174-1.41a.75.75 0 0 0-1.152.961l2.5 3a.75.75 0 0 0 1.152 0l2.5-3a.75.75 0 0 0-1.152-.96L9.25 11.929zm6.25-.75a.75.75 0 0 1 .75.75v4.929l1.174-1.41a.75.75 0 0 1 1.152.961l-2.5 3a.75.75 0 0 1-1.152 0l-2.5-3a.75.75 0 0 1 1.152-.96l1.174 1.409V7a.75.75 0 0 1 .75-.75m-9.5 10a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarDownloadTwiceSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper2BoldIcon],svg[solar-dropper-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12.25v-1.5h-3a.75.75 0 0 1 0-1.5h2.998c-.01-1.397-.081-2.162-.584-2.664C20.828 6 19.886 6 18 6h-4c-1.886 0-2.828 0-3.414.586S10 8.114 10 10v6.507c0 .657.277 1.284.763 1.726a7.75 7.75 0 0 0 4.487 1.99v1.027a.75.75 0 0 0 1.5 0v-1.027a7.76 7.76 0 0 0 4.487-1.99A2.33 2.33 0 0 0 22 16.507V13.75h-2a.75.75 0 0 1 0-1.5zM16 15c1.105 0 2-.933 2-2.083c0-.72-.783-1.681-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3c0 1.15.895 2.083 2 2.083" clip-rule="evenodd"></svg:path>`,
})
export class SolarDropper2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropper3BoldIcon],svg[solar-dropper-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 10v6.507c0 .657-.277 1.284-.763 1.726a7.75 7.75 0 0 1-4.487 1.99v1.027a.75.75 0 0 1-1.5 0v-1.027a7.75 7.75 0 0 1-4.487-1.99A2.33 2.33 0 0 1 10 16.507V10c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586S22 8.114 22 10m-8 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm4-3.833c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03z"></svg:path>`,
})
export class SolarDropper3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperBoldIcon],svg[solar-dropper-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.75v1.5h-3a.75.75 0 0 0 0 1.5h3v2.757c0 .657-.277 1.284-.763 1.726a7.75 7.75 0 0 1-4.487 1.99v1.027a.75.75 0 0 1-1.5 0v-1.027a7.75 7.75 0 0 1-4.487-1.99A2.33 2.33 0 0 1 10 16.507V10c0-1.886 0-2.828.586-3.414S12.114 6 14 6h4c1.886 0 2.828 0 3.414.586c.503.502.574 1.267.584 2.664H18a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill="currentColor" d="M14.294 2.102a3.75 3.75 0 0 0-2.353-.852H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337V22.25a.75.75 0 0 0 1.5 0V8c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556L8 2.75h3.932a2.25 2.25 0 0 1 1.408.51l.002.001l.03.026l.005.003l.083.069c.533.43 1.152.693 1.79.79V6h1.5V4.073a3.74 3.74 0 0 0 1.753-1.016l.527-.527a.75.75 0 0 0-1.06-1.06l-.523.522l-.065.065c-.19.184-.404.328-.632.432V2a.75.75 0 0 0-1.5 0v.62a2.2 2.2 0 0 1-.848-.428l-.07-.058l-.035-.03z"></svg:path>`,
})
export class SolarDropperBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalistic2BoldIcon],svg[solar-dropper-minimalistic-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 8v7.883c0 .76-.32 1.487-.88 2.001a9.02 9.02 0 0 1-5.37 2.352v1.014a.75.75 0 0 1-1.5 0v-1.014a9.02 9.02 0 0 1-5.37-2.352a2.72 2.72 0 0 1-.88-2V8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586S19 6.114 19 8m-7 5c1.105 0 2-.933 2-2.083c0-.72-.783-1.681-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3c0 1.15.895 2.083 2 2.083m-2.75 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.733 3a2 2 0 0 0-3.465 0z"></svg:path>`,
})
export class SolarDropperMinimalistic2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalisticBoldIcon],svg[solar-dropper-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 11.75v1.5h-2a.75.75 0 0 0 0 1.5h2v1.133c0 .76-.32 1.487-.88 2.001a9.02 9.02 0 0 1-5.37 2.352v1.014a.75.75 0 0 1-1.5 0v-1.014a9.02 9.02 0 0 1-5.37-2.352a2.72 2.72 0 0 1-.88-2V8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586c.503.502.574 1.267.584 2.664H17a.75.75 0 0 0 0 1.5h2v1.5h-2a.75.75 0 0 0 0 1.5zM12 14c1.105 0 2-.933 2-2.083c0-.72-.783-1.681-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3c0 1.15.895 2.083 2 2.083" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.733 3a2 2 0 0 0-3.465 0z"></svg:path>`,
})
export class SolarDropperMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellBoldIcon],svg[solar-dumbbell-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-4c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 7 19.932 7 19 7s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C16 8.602 16 9.568 16 10.5H8c0-.932 0-1.898-.152-2.265a2 2 0 0 0-1.083-1.083C6.398 7 5.932 7 5 7s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 8.602 2 9.068 2 10v4c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 17 4.068 17 5 17s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C8 15.398 8 14.432 8 13.5h8c0 .932 0 1.898.152 2.265a2 2 0 0 0 1.083 1.083C17.602 17 18.068 17 19 17s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 15.398 22 14.932 22 14"></svg:path>`,
})
export class SolarDumbbellBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeBoldIcon],svg[solar-dumbbell-large-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.924 18.607l1.469 1.469c.692.692 1.038 1.038 1.468 1.038s.776-.346 1.468-1.038l.367-.367l.367.367l.735.734c.686.686 1.029 1.029 1.432 1.137c.264.07.542.07.806 0c.403-.108.746-.451 1.432-1.137s1.03-1.03 1.137-1.433a1.55 1.55 0 0 0 0-.806c-.107-.403-.45-.746-1.137-1.432l-1.1-1.101l3.67-3.67l1.101 1.1c.686.686 1.03 1.03 1.432 1.137c.264.071.542.071.806 0c.404-.107.747-.45 1.433-1.137c.686-.686 1.029-1.029 1.137-1.432c.07-.264.07-.542 0-.806c-.108-.403-.451-.746-1.137-1.432l-.734-.735l-.371-.363l.37-.37c.693-.693 1.039-1.039 1.039-1.469s-.346-.776-1.038-1.468l-1.469-1.469c-.692-.692-1.038-1.038-1.468-1.038s-.776.346-1.468 1.038l-.367.368l-1.102-1.102c-.686-.686-1.029-1.029-1.432-1.137a1.56 1.56 0 0 0-.806 0c-.403.108-.746.451-1.432 1.137s-1.03 1.03-1.137 1.433a1.55 1.55 0 0 0 0 .806c.107.403.45.746 1.137 1.432l1.1 1.101l-3.67 3.67l-1.101-1.1c-.686-.686-1.03-1.03-1.432-1.137a1.56 1.56 0 0 0-.806 0c-.404.107-.747.45-1.433 1.137c-.686.686-1.029 1.029-1.137 1.432c-.07.264-.07.542 0 .806c.108.403.451.746 1.137 1.432l1.102 1.102l-.368.367c-.692.692-1.038 1.038-1.038 1.468s.346.776 1.038 1.468"></svg:path>`,
})
export class SolarDumbbellLargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellLargeMinimalisticBoldIcon],svg[solar-dumbbell-large-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.38 20.568L3.433 15.62c-.905-.904-1.357-1.356-1.421-1.908a1.6 1.6 0 0 1 0-.371c.064-.552.516-1.005 1.42-1.909c.905-.904 1.357-1.356 1.909-1.42q.186-.023.37 0c.553.064 1.005.516 1.91 1.42l.733.734l3.812-3.813l-.733-.733c-.905-.904-1.357-1.356-1.421-1.908a1.6 1.6 0 0 1 0-.371c.064-.552.516-1.004 1.42-1.909c.905-.904 1.357-1.356 1.909-1.42a1.6 1.6 0 0 1 .37 0c.553.064 1.005.516 1.91 1.42l4.948 4.95c.905.904 1.357 1.356 1.421 1.908q.023.186 0 .37c-.064.553-.516 1.005-1.42 1.91c-.905.903-1.357 1.355-1.909 1.42a1.6 1.6 0 0 1-.37 0c-.553-.065-1.005-.517-1.91-1.42l-1.111-1.113l-3.812 3.813l1.111 1.112c.905.904 1.357 1.356 1.421 1.908q.023.186 0 .37c-.064.553-.516 1.005-1.42 1.91c-.905.903-1.357 1.355-1.909 1.42a1.6 1.6 0 0 1-.37 0c-.553-.065-1.005-.517-1.91-1.42"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.489 1.968a.75.75 0 0 1 1.06 0l3.104 3.104a.75.75 0 0 1-1.06 1.06l-3.105-3.104a.75.75 0 0 1 0-1.06M1.966 17.488a.75.75 0 0 1 1.06 0l3.105 3.104a.75.75 0 0 1-1.06 1.06l-3.105-3.104a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarDumbbellLargeMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellSmallBoldIcon],svg[solar-dumbbell-small-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12a2 2 0 0 1 1.5-1.937v3.874A2 2 0 0 1 2 12m20 0a2 2 0 0 1-1.5 1.937v-3.874A2 2 0 0 1 22 12m-3-3v6c0 .465 0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C17.697 17 17.464 17 17 17s-.698 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C15 15.697 15 15.464 15 15v-2.25H9V15c0 .465 0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C7.696 17 7.464 17 7 17s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C5 15.697 5 15.464 5 15V9c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C6.304 7 6.536 7 7 7s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C9 8.304 9 8.536 9 9v2.25h6V9c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C16.303 7 16.536 7 17 7s.698 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C19 8.304 19 8.536 19 9"></svg:path>`,
})
export class SolarDumbbellSmallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbells2BoldIcon],svg[solar-dumbbells-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.985 7.443l-2.94-.354c-.686-.082-1.028-.124-1.313-.053c-.38.095-.703.326-.899.642c-.147.236-.192.554-.28 1.188c-.09.635-.134.952-.057 1.216c.102.351.351.65.692.832c.256.136.966.222 1.651.304l-.883 6.298c-.685-.082-1.396-.168-1.68-.096c-.38.094-.703.325-.9.64c-.146.238-.19.555-.28 1.19c-.089.634-.133.951-.057 1.215c.103.351.352.65.693.832c.255.137.598.178 1.283.26l2.94.354c.686.082 1.028.124 1.313.052a1.47 1.47 0 0 0 .899-.64c.147-.238.192-.555.28-1.19c.09-.634.134-.95.057-1.215a1.4 1.4 0 0 0-.692-.832c-.256-.136-.966-.222-1.651-.304l.883-6.298c.685.082 1.396.168 1.68.096c.38-.094.703-.325.9-.64c.146-.238.19-.555.28-1.19c.089-.634.133-.951.057-1.215a1.4 1.4 0 0 0-.693-.832c-.255-.137-.598-.178-1.283-.26m11.301 8.64l-2.712.7c-.632.163-.947.244-1.224.209a1.42 1.42 0 0 1-.93-.517c-.17-.213-.255-.517-.424-1.125c-.17-.608-.254-.912-.218-1.179c.049-.355.242-.677.537-.895c.222-.164.877-.333 1.508-.496l-1.68-6.036c-.632.163-1.286.332-1.563.297a1.42 1.42 0 0 1-.93-.517c-.17-.213-.255-.517-.424-1.125c-.17-.608-.254-.912-.218-1.179a1.34 1.34 0 0 1 .538-.895c.221-.164.537-.245 1.168-.408l2.712-.7c.632-.163.947-.244 1.224-.209c.37.047.704.233.93.517c.17.213.255.517.424 1.125c.17.608.254.912.218 1.179a1.34 1.34 0 0 1-.537.895c-.222.164-.877.333-1.508.496l1.68 6.036c.631-.163 1.286-.332 1.563-.297c.37.047.704.233.93.517c.17.213.255.517.424 1.125c.17.608.254.912.218 1.179a1.34 1.34 0 0 1-.538.895c-.221.164-.537.245-1.169.408"></svg:path>`,
})
export class SolarDumbbells2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarDumbbellsBoldIcon],svg[solar-dumbbells-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.345 8.93l.344-2.84c.08-.662.12-.992.051-1.267a1.42 1.42 0 0 0-.624-.869c-.23-.142-.54-.185-1.157-.27c-.618-.087-.927-.13-1.184-.055c-.342.099-.634.34-.81.668c-.133.247-.216.933-.296 1.595l-6.132-.853c.08-.662.164-1.348.094-1.623a1.42 1.42 0 0 0-.624-.868c-.23-.142-.54-.185-1.157-.271c-.618-.086-.927-.13-1.183-.055c-.343.099-.634.34-.811.669c-.133.247-.173.577-.253 1.24l-.344 2.84c-.08.66-.12.992-.052 1.267c.093.366.317.679.625.868c.23.142.54.185 1.157.27c.618.087.926.13 1.183.056c.342-.1.634-.34.81-.669c.133-.247.217-.933.297-1.594l6.131.853c-.08.661-.163 1.347-.094 1.622c.092.367.317.68.624.869c.231.142.54.185 1.158.27c.617.087.926.13 1.183.055c.342-.099.634-.34.81-.668c.133-.247.173-.578.253-1.24M7.761 19.926l-.692-2.767c-.161-.644-.242-.967-.207-1.249c.046-.377.23-.718.512-.95c.21-.173.511-.259 1.113-.432c.602-.172.903-.259 1.166-.221c.352.05.67.246.886.548c.162.226.33.894.49 1.538l5.973-1.714c-.161-.645-.328-1.313-.294-1.595a1.46 1.46 0 0 1 .512-.95c.211-.173.512-.259 1.114-.432c.601-.172.902-.259 1.166-.221c.351.05.67.246.886.548c.162.226.242.548.404 1.192l.692 2.767c.16.644.241.966.207 1.249c-.047.376-.23.718-.512.949c-.21.173-.512.26-1.113.432c-.602.173-.903.26-1.167.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.329-.894-.49-1.538l-5.972 1.714c.16.644.328 1.312.293 1.595c-.046.376-.23.718-.511.949c-.211.173-.512.26-1.114.432c-.601.173-.902.26-1.166.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.243-.548-.404-1.192"></svg:path>`,
})
export class SolarDumbbellsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEarthBoldIcon],svg[solar-earth-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.437 18.276c.988-1.862 4.281-1.862 4.281-1.862c3.432-.036 3.896-2.12 4.206-3.173a10.006 10.006 0 0 1-8.535 8.664c-.323-.68-.705-2.21.048-3.629"></svg:path><svg:path fill="currentColor" d="m5.006 5.834l-.412-.352a2 2 0 0 1-.098-.092A9.96 9.96 0 0 0 2 12c0 5.46 4.377 9.9 9.814 9.998c-.353-1.055-.584-2.764.298-4.425c.81-1.526 2.44-2.127 3.478-2.383a10 10 0 0 1 2.063-.275h.053c1.381-.016 1.917-.423 2.164-.702c.306-.344.426-.752.593-1.321l.022-.074a1.5 1.5 0 0 1 1.512-1.075a9.96 9.96 0 0 0-2.598-6.47c-.032.177-.07.343-.107.489c-.17.661-.454 1.375-.804 1.905c-.341.52-.949.983-1.352 1.273c-.305.219-.617.4-.873.549l-.092.053c-.232.133-.416.24-.592.355c-.356.235-.57.444-.714.727c.088.322.15.693.152 1.08c.002.922-.47 1.65-1.033 2.104a3.16 3.16 0 0 1-2 .692c-2.95-.032-4.68-2.439-4.903-4.918c-.065-.721-.389-1.498-.842-2.222a8 8 0 0 0-1.233-1.526"></svg:path><svg:path fill="currentColor" d="M8.575 9.447C8.388 7.363 6.781 5.421 6 4.711l-.43-.37A9.96 9.96 0 0 1 12 2c2.214 0 4.26.72 5.916 1.936c.234.711-.212 2.196-.68 2.906c-.17.257-.554.577-.976.88c-.95.683-2.15 1.02-2.76 2.278a1.42 1.42 0 0 0-.083 1.016c.06.22.1.459.1.692c.002.755-.762 1.3-1.517 1.292c-1.964-.021-3.25-1.604-3.425-3.553"></svg:path>`,
})
export class SolarEarthBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarElectricRefuelingBoldIcon],svg[solar-electric-refueling-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v13.25H2a.75.75 0 0 0 0 1.5h15.25a.75.75 0 0 0 0-1.5H16v-3.5h1.571c.375 0 .679.304.679.679v.071a2.25 2.25 0 1 0 4.5 0V7.602c0-.157 0-.265-.006-.37a3.75 3.75 0 0 0-1.24-2.582a9 9 0 0 0-.286-.236l-1.25-1a.75.75 0 1 0-.936 1.172l1.233.986c.144.116.194.156.237.195c.443.397.711.954.745 1.549a6 6 0 0 1 .003.306V8h-.75A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423l1.224.408v4.75a.75.75 0 0 1-1.5 0v-.071a2.18 2.18 0 0 0-2.179-2.179H16V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2m-.114 7.357a.75.75 0 0 1 .257 1.029l-.818 1.364H11a.75.75 0 0 1 .643 1.136l-1.5 2.5a.75.75 0 1 1-1.286-.772l.818-1.364H8a.75.75 0 0 1-.643-1.136l1.5-2.5a.75.75 0 0 1 1.029-.257" clip-rule="evenodd"></svg:path>`,
})
export class SolarElectricRefuelingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnyCircleBoldIcon],svg[solar-emoji-funny-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-3.815-6.25a.75.75 0 0 1 .91-.544c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.044 1.077a8.4 8.4 0 0 1-1.15.93l.159.321a1.5 1.5 0 0 1-2.693 1.322l-.196-.4l-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91m7.29-6.234c.215.8-.044 1.565-.577 1.707c-.534.143-1.14-.39-1.354-1.19s.044-1.564.577-1.707c.534-.143 1.14.39 1.354 1.19m-6.373 3.26c.534-.143.792-.907.578-1.707s-.82-1.333-1.354-1.19s-.792.907-.578 1.707s.82 1.333 1.354 1.19" clip-rule="evenodd"></svg:path>`,
})
export class SolarEmojiFunnyCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEmojiFunnySquareBoldIcon],svg[solar-emoji-funny-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.48 6.504c-.943 1.633-.388 3.706.724 7.853c1.11 4.147 1.666 6.22 3.3 7.163s3.706.387 7.853-.724s6.22-1.666 7.163-3.3s.387-3.706-.724-7.853s-1.666-6.22-3.3-7.163s-3.706-.388-7.853.724c-4.147 1.11-6.22 1.666-7.163 3.3m5.705 9.247a.75.75 0 0 1 .91-.545c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.278-1.815a.75.75 0 1 1 1.043 1.077a8.4 8.4 0 0 1-1.15.93l.159.32a1.5 1.5 0 1 1-2.693 1.323l-.196-.4l-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91m7.29-6.235c.215.8-.044 1.565-.577 1.707c-.534.143-1.14-.39-1.354-1.19s.044-1.564.577-1.707c.534-.143 1.14.39 1.354 1.19m-6.373 3.26c.534-.143.792-.907.578-1.707s-.82-1.333-1.354-1.19s-.792.907-.578 1.707s.82 1.333 1.354 1.19" clip-rule="evenodd"></svg:path>`,
})
export class SolarEmojiFunnySquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallBoldIcon],svg[solar-end-call-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13.478v-.616s0-1.466 4-1.466s4 1.466 4 1.466v.388c0 .956.723 1.77 1.7 1.912l2 .294c1.21.177 2.3-.73 2.3-1.913v-2.125c0-.587-.184-1.164-.63-1.562C20.23 8.837 17.42 7 12 7c-5.749 0-8.56 2.583-9.56 3.789c-.315.381-.44.864-.44 1.352v1.923c0 1.298 1.296 2.228 2.58 1.852l2-.587c.843-.247 1.42-.998 1.42-1.85"></svg:path>`,
})
export class SolarEndCallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEndCallRoundedBoldIcon],svg[solar-end-call-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.607 16.897l1.34-.38C8.156 16.174 9 14.983 9 13.618c0 0 0-1.654 3-1.654s3 1.654 3 1.654c0 1.365.844 2.556 2.053 2.9l1.34.38C20.218 17.414 22 15.91 22 13.85c0-1.237-.277-2.477-1.083-3.347C19.56 9.04 16.807 7 12 7s-7.56 2.039-8.917 3.503C2.277 11.373 2 12.613 2 13.85c0 2.06 1.782 3.565 3.607 3.047"></svg:path>`,
})
export class SolarEndCallRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserBoldIcon],svg[solar-eraser-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.41 5.505C13.08 3.835 13.915 3 14.952 3c1.038 0 1.873.835 3.543 2.505S21 8.01 21 9.048c0 1.037-.835 1.872-2.505 3.542l-4.193 4.194l-7.086-7.086z"></svg:path><svg:path fill="currentColor" d="m6.156 10.759l7.085 7.085l-.65.65c-.378.379-.713.714-1.018 1.006H21a.75.75 0 0 1 0 1.5H9c-1.016-.025-1.85-.86-3.495-2.505C3.835 16.825 3 15.99 3 14.952c0-1.037.835-1.872 2.505-3.542z"></svg:path>`,
})
export class SolarEraserBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserCircleBoldIcon],svg[solar-eraser-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-.394 5.67C12.72 6.557 13.276 6 13.968 6s1.249.557 2.362 1.67S18 9.34 18 10.032s-.557 1.248-1.67 2.362l-2.619 2.618l-4.723-4.723zm-3.679 3.68l4.724 4.723l-.257.257C11.28 17.443 10.724 18 10.032 18s-1.249-.557-2.362-1.67S6 14.66 6 13.968s.557-1.248 1.67-2.362z" clip-rule="evenodd"></svg:path>`,
})
export class SolarEraserCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEraserSquareBoldIcon],svg[solar-eraser-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m5.524 6.825l4.723 4.723l2.619-2.618c1.113-1.114 1.67-1.67 1.67-2.362s-.557-1.249-1.67-2.362S14.66 6 13.968 6s-1.248.557-2.362 1.67zm3.406 6.041l.257-.257l-4.724-4.724l-.257.257C6.557 12.72 6 13.276 6 13.968s.557 1.249 1.67 2.362S9.34 18 10.032 18s1.248-.557 2.362-1.67" clip-rule="evenodd"></svg:path>`,
})
export class SolarEraserSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEuroBoldIcon],svg[solar-euro-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M6.75 12q0-.383.053-.75H10a.75.75 0 0 0 0-1.5H7.255a5.25 5.25 0 0 1 7.37-2.298a.75.75 0 1 0 .75-1.299a6.753 6.753 0 0 0-9.74 3.597H5a.75.75 0 0 0 0 1.5h.291a6.8 6.8 0 0 0 0 1.5H5a.75.75 0 0 0 0 1.5h.634a6.753 6.753 0 0 0 9.742 3.596a.75.75 0 1 0-.751-1.298a5.25 5.25 0 0 1-7.37-2.298H10a.75.75 0 0 0 0-1.5H6.803A5 5 0 0 1 6.75 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarEuroBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExitBoldIcon],svg[solar-exit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.707 2.409C9 3.036 9 4.183 9 6.476v11.048c0 2.293 0 3.44.707 4.067s1.788.439 3.95.062l2.33-.406c2.394-.418 3.591-.627 4.302-1.505c.711-.879.711-2.149.711-4.69V8.948c0-2.54 0-3.81-.71-4.689c-.712-.878-1.91-1.087-4.304-1.504l-2.328-.407c-2.162-.377-3.243-.565-3.95.062M12 10.169c.414 0 .75.351.75.784v2.094c0 .433-.336.784-.75.784s-.75-.351-.75-.784v-2.094c0-.433.336-.784.75-.784" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.547 4.5c-2.058.003-3.131.048-3.815.732C3 5.964 3 7.142 3 9.5v5c0 2.357 0 3.535.732 4.268c.684.683 1.757.729 3.815.732c-.047-.624-.047-1.344-.047-2.123V6.623c0-.78 0-1.5.047-2.123"></svg:path>`,
})
export class SolarExitBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExplicitBoldIcon],svg[solar-explicit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M8.25 8c0-.966.784-1.75 1.75-1.75h5a.75.75 0 0 1 0 1.5h-5a.25.25 0 0 0-.25.25v3.25H15a.75.75 0 0 1 0 1.5H9.75V16c0 .138.112.25.25.25h5a.75.75 0 0 1 0 1.5h-5A1.75 1.75 0 0 1 8.25 16z" clip-rule="evenodd"></svg:path>`,
})
export class SolarExplicitBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExportBoldIcon],svg[solar-export-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.845 7.905a.75.75 0 0 0 1.06 0l1.72-1.72v8.19a.75.75 0 0 0 1.5 0v-8.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.375 20.375a8 8 0 0 0 8-8h-3.75c-.943 0-1.414 0-1.707.293s-.293.764-.293 1.707a2.25 2.25 0 0 1-4.5 0c0-.943 0-1.414-.293-1.707s-.764-.293-1.707-.293h-3.75a8 8 0 0 0 8 8"></svg:path>`,
})
export class SolarExportBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessCircleBoldIcon],svg[solar-expressionless-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-3.75-6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m5 1.5c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarExpressionlessCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarExpressionlessSquareBoldIcon],svg[solar-expressionless-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m-3-5.25a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5zm1-6.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m5 1.5c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarExpressionlessSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeBoldIcon],svg[solar-eye-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20s7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4S4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeClosedBoldIcon],svg[solar-eye-closed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001l.003.009l.021.045l.094.194c.086.172.219.424.4.729a13.4 13.4 0 0 0 1.67 2.237a12 12 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.7 8.7 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13 13 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14 14 0 0 1-.741 1.348a15.4 15.4 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.4 15.4 0 0 1-1.87-2.519a14 14 0 0 1-.591-1.107l-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeClosedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarEyeScanBoldIcon],svg[solar-eye-scan-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2.75c1.907 0 3.262.002 4.29.14c1.005.135 1.585.389 2.008.812c.487.487.7.865.817 1.538c.132.759.135 1.84.135 3.76a.75.75 0 0 0 1.5 0v-.096c0-1.8 0-3.018-.158-3.922c-.175-1.005-.549-1.656-1.233-2.34c-.749-.75-1.698-1.081-2.87-1.239c-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5M2 14.25a.75.75 0 0 1 .75.75c0 1.92.003 3.001.135 3.76c.118.673.33 1.051.817 1.538c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.684-.685-1.058-1.336-1.233-2.341c-.158-.904-.158-2.123-.158-3.922V15a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v.096c0 1.8 0 3.018-.158 3.922c-.175 1.005-.549 1.656-1.233 2.34c-.749.75-1.698 1.081-2.87 1.239c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.487-.487.7-.865.817-1.538c.132-.759.135-1.84.135-3.76a.75.75 0 0 1 .75-.75m-12.056-13H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.487.487-.7.865-.817 1.538c-.132.759-.135 1.84-.135 3.76a.75.75 0 1 1-1.5 0v-.096c0-1.8 0-3.018.158-3.922c.175-1.005.549-1.656 1.233-2.34c.749-.75 1.698-1.081 2.87-1.239c1.14-.153 2.595-.153 4.433-.153M12 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.892 14.06C5.297 13.37 5 13.025 5 12s.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7s4.92 1.562 6.108 2.94c.595.69.892 1.035.892 2.06s-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17s-4.92-1.562-6.108-2.94M9.25 12a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarEyeScanBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanCircleBoldIcon],svg[solar-face-scan-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.801 2.57a.71.71 0 0 1-.555.838a8.78 8.78 0 0 0-6.838 6.838a.71.71 0 1 1-1.394-.283a10.2 10.2 0 0 1 7.949-7.949a.71.71 0 0 1 .838.556M2.57 13.199a.71.71 0 0 1 .838.555a8.78 8.78 0 0 0 6.838 6.838a.71.71 0 1 1-.283 1.394a10.2 10.2 0 0 1-7.948-7.949a.71.71 0 0 1 .555-.838M13.199 2.57a.71.71 0 0 1 .838-.556a10.2 10.2 0 0 1 7.949 7.949a.711.711 0 0 1-1.394.283a8.78 8.78 0 0 0-6.838-6.838a.71.71 0 0 1-.555-.838m8.231 10.629a.71.71 0 0 1 .556.838a10.2 10.2 0 0 1-7.949 7.949a.711.711 0 0 1-.283-1.394a8.78 8.78 0 0 0 6.838-6.838a.71.71 0 0 1 .838-.555"></svg:path><svg:path d="M12 19.583a7.583 7.583 0 1 0 0-15.166a7.583 7.583 0 0 0 0 15.166m-3.06-5.044a.71.71 0 0 1 .995-.148c.59.437 1.3.69 2.065.69a3.45 3.45 0 0 0 2.065-.69a.71.71 0 1 1 .846 1.142a4.87 4.87 0 0 1-2.911.97a4.87 4.87 0 0 1-2.911-.97a.71.71 0 0 1-.148-.994m6.377-4.139c0 .688-.37 1.245-.829 1.245s-.83-.557-.83-1.245c0-.687.372-1.244.83-1.244s.83.557.83 1.244m-5.805 1.245c.458 0 .83-.557.83-1.245c0-.687-.372-1.244-.83-1.244s-.83.557-.83 1.244c0 .688.372 1.245.83 1.245"></svg:path></svg:g>`,
})
export class SolarFaceScanCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFaceScanSquareBoldIcon],svg[solar-face-scan-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M21.302 13.163c.386 0 .698.312.698.697v.053c0 1.71 0 3.064-.142 4.123c-.147 1.09-.456 1.974-1.152 2.67s-1.58 1.005-2.67 1.152c-1.06.142-2.414.142-4.123.142h-.053a.698.698 0 0 1 0-1.395c1.774 0 3.034-.002 3.99-.13c.936-.126 1.476-.362 1.87-.756c.393-.393.629-.933.755-1.869c.128-.956.13-2.216.13-3.99c0-.385.312-.697.697-.697m-18.604 0c.385 0 .697.312.697.697c0 1.774.002 3.034.13 3.99c.126.936.362 1.476.756 1.87c.394.393.933.629 1.869.755c.956.128 2.216.13 3.99.13a.698.698 0 1 1 0 1.395h-.053c-1.71 0-3.064 0-4.123-.142c-1.09-.147-1.974-.456-2.67-1.152s-1.005-1.58-1.152-2.67C2 16.976 2 15.622 2 13.913v-.053c0-.385.312-.697.698-.697M10.087 2h.053a.698.698 0 1 1 0 1.395c-1.774 0-3.034.002-3.99.13c-.936.126-1.475.362-1.87.756c-.393.394-.629.933-.755 1.869c-.128.956-.13 2.216-.13 3.99a.698.698 0 0 1-1.395 0v-.053c0-1.71 0-3.064.142-4.123c.147-1.09.456-1.974 1.152-2.67s1.58-1.005 2.67-1.152C7.024 2 8.378 2 10.087 2m7.763 1.525c-.956-.128-2.216-.13-3.99-.13a.698.698 0 0 1 0-1.395h.053c1.71 0 3.064 0 4.123.142c1.09.147 1.974.456 2.67 1.152s1.005 1.58 1.152 2.67C22 7.024 22 8.378 22 10.087v.053a.698.698 0 1 1-1.395 0c0-1.774-.002-3.034-.13-3.99c-.126-.936-.362-1.475-.756-1.87c-.393-.393-.933-.629-1.869-.755"></svg:path><svg:path d="M5.376 5.376c-.818.817-.818 2.132-.818 4.764v3.72c0 2.632 0 3.947.818 4.765c.817.817 2.132.817 4.764.817h3.72c2.632 0 3.947 0 4.765-.817c.817-.818.817-2.133.817-4.764v-3.722c0-2.63 0-3.946-.817-4.763c-.818-.818-2.133-.818-4.764-.818h-3.722c-2.63 0-3.946 0-4.763.818m3.692 9.168a.61.61 0 0 1 .854-.128c.592.44 1.308.694 2.078.694s1.486-.254 2.078-.694a.61.61 0 0 1 .727.981a4.7 4.7 0 0 1-2.805.934a4.7 4.7 0 0 1-2.805-.934a.61.61 0 0 1-.127-.854m6.188-4.114c0 .675-.365 1.221-.814 1.221c-.45 0-.814-.546-.814-1.22c0-.675.364-1.222.814-1.222s.814.547.814 1.221M9.558 11.65c.45 0 .814-.546.814-1.22c0-.675-.364-1.222-.814-1.222s-.814.547-.814 1.221c0 .675.365 1.221.814 1.221"></svg:path></svg:g>`,
})
export class SolarFaceScanSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskCircleBoldIcon],svg[solar-facemask-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.824 13.878l-4.112 1.645l-.38 4.938a10 10 0 0 0 4.492-6.583m-6.058 7.389l.444-5.776l-2.632-1.052a4.25 4.25 0 0 0-3.156 0L7.79 15.49l.444 5.776A10 10 0 0 0 12 22c1.332 0 2.603-.26 3.766-.733m-9.098-.806l-.379-4.922l-4.077-1.482a10 10 0 0 0 4.456 6.404"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.998 12.193L22 12c0-5.523-4.477-10-10-10S2 6.477 2 12q0 .195.007.386l4.98 1.81l2.877-1.15a5.75 5.75 0 0 1 4.272 0L17 14.192zM16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarFacemaskCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFacemaskSquareBoldIcon],svg[solar-facemask-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.996 13.81l-4.281 1.712l-.206 2.88l3.286 1.409a.8.8 0 0 1 .217.14c.834-1.262.964-3.111.984-6.142m-2.108 7.245l-2.492-1.068l-.133 1.859c1.1-.128 1.946-.363 2.625-.791m-4.137.902v-.01l.462-6.454l-2.635-1.053a4.25 4.25 0 0 0-3.156 0l-2.635 1.053l.461 6.455v.01C9.302 22 10.539 22 12 22c1.463 0 2.699 0 3.751-.044m-9.014-.111l-.133-1.86l-2.492 1.069c.679.428 1.524.663 2.625.79m-3.749-1.892a.8.8 0 0 1 .217-.141l3.286-1.409l-.206-2.88l-4.281-1.713c.02 3.03.15 4.88.984 6.143"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12v.25a.8.8 0 0 1 .279.054L7 14.192l2.864-1.146a5.75 5.75 0 0 1 4.272 0L17 14.192l4.721-1.888A.8.8 0 0 1 22 12.25V12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m5 1.5c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarFacemaskSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFeedBoldIcon],svg[solar-feed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14zm3 2c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16zm1-6.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFeedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFerrisWheelBoldIcon],svg[solar-ferris-wheel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.698 3.073a1.75 1.75 0 0 0-3.396 0l-.097.052L5.41 5.739a4 4 0 0 0-.241.143a1.75 1.75 0 0 0-1.711 3.023l-.002.126v4.938q0 .301.047.593a1.75 1.75 0 1 0 2.095 2.801l1.307.713l-2.054 3.548a.75.75 0 0 0 1.298.752l2.074-3.581l1.982 1.08l.097.052a1.75 1.75 0 0 0 3.396 0l.097-.052l1.983-1.08l2.073 3.58a.75.75 0 0 0 1.298-.75l-2.054-3.549l1.307-.713a1.75 1.75 0 1 0 2.095-2.801q.047-.293.047-.593V9.03l-.002-.125a1.75 1.75 0 0 0-1.711-3.024a4 4 0 0 0-.242-.143l-4.794-2.614zm-3.061 1.524a1.747 1.747 0 0 0 2.726 0l4.452 2.428a1.75 1.75 0 0 0 1.229 2.165v4.779q0 .177-.027.349A1.75 1.75 0 0 0 17.75 16v.01l-1.407.767l-2.691-4.649a2 2 0 1 0-3.303 0l-2.692 4.65l-1.407-.767V16c0-.8-.536-1.473-1.267-1.683a2 2 0 0 1-.027-.348V9.19a1.75 1.75 0 0 0 1.229-2.165zM8.974 17.496l1.663.907a1.747 1.747 0 0 1 2.726 0l1.663-.907L12.4 12.96a2 2 0 0 1-.8 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFerrisWheelBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaBoldIcon],svg[solar-figma-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFigmaBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFigmaFileBoldIcon],svg[solar-figma-file-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22M4.25 11.5A2.25 2.25 0 0 1 6.5 9.25h3A2.25 2.25 0 0 1 11.177 13a2.25 2.25 0 0 1-2.427 3.622v.878A2.25 2.25 0 1 1 4.823 16a2.24 2.24 0 0 1-.573-1.5c0-.576.217-1.102.573-1.5a2.24 2.24 0 0 1-.573-1.5m1.5 3a.75.75 0 0 1 .75-.75h.75v1.5H6.5a.75.75 0 0 1-.75-.75m1.5-2.25H6.5a.75.75 0 0 1 0-1.5h.75zm3-.75a.75.75 0 0 1-.75.75h-.75v-1.5h.75a.75.75 0 0 1 .75.75m-1.5 3a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M6.5 16.75h.75v.75a.75.75 0 1 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFigmaFileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileBoldIcon],svg[solar-file-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path>`,
})
export class SolarFileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCheckBoldIcon],svg[solar-file-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-3.502-7.56a.75.75 0 0 1 .063 1.058l-2.667 3a.75.75 0 0 1-1.121 0l-1.334-1.5a.75.75 0 0 1 1.122-.996l.772.87l2.106-2.37a.75.75 0 0 1 1.06-.063" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileCorruptedBoldIcon],svg[solar-file-corrupted-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383M14 22h-4c-3.771 0-5.657 0-6.828-1.172c-.447-.446-.723-.995-.894-1.713c-.119-.5-.179-.75-.064-1.042s.368-.461.874-.799l.626-.417a2.32 2.32 0 0 1 2.572 0a3.09 3.09 0 0 0 3.428 0a2.32 2.32 0 0 1 2.572 0a3.09 3.09 0 0 0 3.428 0a2.32 2.32 0 0 1 2.572 0a3.09 3.09 0 0 0 3.428 0a.162.162 0 0 1 .251.143c-.078 1.872-.328 3.02-1.137 3.828C19.657 22 17.771 22 14 22"></svg:path><svg:path fill="currentColor" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.088v.827a.62.62 0 0 1-.279.53a3.09 3.09 0 0 1-3.428 0a2.32 2.32 0 0 0-2.572 0a3.09 3.09 0 0 1-3.428 0a2.32 2.32 0 0 0-2.572 0a3.09 3.09 0 0 1-3.428 0a2.32 2.32 0 0 0-2.572 0l-.16.107c-.684.456-1.026.684-1.29.543S2 12.954 2 12.132z"></svg:path>`,
})
export class SolarFileCorruptedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileDownloadBoldIcon],svg[solar-file-download-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m-2.013-2.953a.75.75 0 0 0 1.026 0l2-1.875a.75.75 0 0 0-1.026-1.094l-.737.69V13.5a.75.75 0 0 0-1.5 0v3.269l-.737-.691a.75.75 0 0 0-1.026 1.094z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileDownloadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileFavouriteBoldIcon],svg[solar-file-favourite-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4.048-8.801l-.098-.176C9.474 12.34 9.284 12 9 12s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.247.354s-.189.088-.398.135l-.191.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.116 1.352s.575.015 1.266-.303l.178-.082c.197-.09.295-.136.399-.136s.202.046.399.136l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileFavouriteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileLeftBoldIcon],svg[solar-file-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m-4.547-5.487a.75.75 0 0 1 0-1.026l1.875-2a.75.75 0 0 1 1.094 1.026l-.69.737H11a.75.75 0 0 1 0 1.5H7.731l.691.737a.75.75 0 0 1-1.094 1.026z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRemoveBoldIcon],svg[solar-file-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m-4.53-7.53a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 0 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97l-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileRightBoldIcon],svg[solar-file-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m-.328-3.487l1.875-2a.75.75 0 0 0 0-1.026l-1.875-2a.75.75 0 0 0-1.094 1.026l.69.737H6a.75.75 0 0 0 0 1.5h3.269l-.691.737a.75.75 0 0 0 1.094 1.026" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSendBoldIcon],svg[solar-file-send-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105c-.847-.114-1.694-.375-2.385-1.066c-.692-.692-.953-1.539-1.067-2.386c-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2C6.239 2 4.343 2 3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m-.987-9.047a.75.75 0 0 0-1.026 0l-2 1.875a.75.75 0 0 0 1.026 1.094l.737-.69V18.5a.75.75 0 0 0 1.5 0v-3.269l.737.691a.75.75 0 0 0 1.026-1.094z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileSendBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileSmileBoldIcon],svg[solar-file-smile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m3-6c.552 0 1-.672 1-1.5s-.448-1.5-1-1.5s-1 .672-1 1.5s.448 1.5 1 1.5m-8.624 1.084a.75.75 0 0 1 1.04-.208a4.66 4.66 0 0 0 5.168 0a.75.75 0 0 1 .832 1.248a6.16 6.16 0 0 1-6.832 0a.75.75 0 0 1-.208-1.04M7 16c.552 0 1-.672 1-1.5S7.552 13 7 13s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarFileSmileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFileTextBoldIcon],svg[solar-file-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828S6.239 2 10.03 2c.606 0 1.091 0 1.5.017q-.02.12-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848c.114.847.375 1.694 1.067 2.386c.69.69 1.538.952 2.385 1.066c.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-8.75-7.5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m19.352 7.617l-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"></svg:path>`,
})
export class SolarFileTextBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFilterBoldIcon],svg[solar-filter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986s.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3"></svg:path>`,
})
export class SolarFilterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFiltersBoldIcon],svg[solar-filters-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"></svg:path><svg:path fill="currentColor" d="M5.033 10.783a6 6 0 1 0 8.92 4.46a7.503 7.503 0 0 1-8.92-4.46m10.354 3.911q.112.636.113 1.306c0 2.09-.855 3.982-2.235 5.342a6 6 0 0 0 5.702-10.558a7.53 7.53 0 0 1-3.58 3.91"></svg:path>`,
})
export class SolarFiltersBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireBoldIcon],svg[solar-fire-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015C10.111 21.874 8 21.064 8 18.444c0-2.05 1.495-3.435 2.631-4.11c.306-.18.663.055.663.41v.59c0 .45.175 1.155.59 1.637c.47.546 1.159-.026 1.214-.744c.018-.226.246-.37.442-.256c.641.375 1.46 1.175 1.46 2.473c0 2.048-1.129 2.99-2.168 3.357"></svg:path>`,
})
export class SolarFireBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireMinimalisticBoldIcon],svg[solar-fire-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c4.418 0 8-3.356 8-7.496c0-3.741-2.035-6.666-3.438-8.06c-.26-.258-.694-.144-.84.189c-.748 1.69-2.304 4.123-4.293 4.123c-1.232.165-3.112-.888-1.594-6.107c.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504C4 17.644 7.582 21 12 21"></svg:path>`,
})
export class SolarFireMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFireSquareBoldIcon],svg[solar-fire-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M17 12.667C17 16.933 13.444 18 11.667 18C10.11 18 7 16.933 7 12.667C7 10.81 8.063 9.633 8.956 9.04c.408-.271.916-.098.942.391c.058 1.071.883 1.931 1.523 1.07c.584-.788.873-1.858.873-2.501c0-.947.958-1.548 1.707-.968C15.459 8.162 17 10.056 17 12.667" clip-rule="evenodd"></svg:path>`,
})
export class SolarFireSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlag2BoldIcon],svg[solar-flag-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.7 8.7 0 0 1 4.925.452l.413.165a7.3 7.3 0 0 0 4.482.304a.73.73 0 0 1 .803 1.084l-1.278 2.131c-.342.57-.513.854-.553 1.163q-.025.195 0 .39c.04.309.211.594.553 1.163l1.56 2.6a.9.9 0 0 1-.553 1.336l-.1.025a8.68 8.68 0 0 1-5.327-.361a8.7 8.7 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1"></svg:path>`,
})
export class SolarFlag2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlagBoldIcon],svg[solar-flag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.7 8.7 0 0 1 4.925.452l.204.081a8 8 0 0 0 4.91.334a1.2 1.2 0 0 1 1.491 1.164v7.367c0 .644-.439 1.206-1.064 1.362l-.214.053a8.68 8.68 0 0 1-5.327-.361a8.7 8.7 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1"></svg:path>`,
})
export class SolarFlagBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlameBoldIcon],svg[solar-flame-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15c0 4.255-2.618 6.122-4.641 6.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.01c0-1.951-1.644-4.254-2.928-5.675c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.252c-.166-.204-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .93.36 1.905.767 2.69c.224.43-.174.95-.604.724C6.113 19.98 4 18.084 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15"></svg:path>`,
})
export class SolarFlameBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashDriveBoldIcon],svg[solar-flash-drive-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.255 9.54l.767-.767c2.17-2.17 3.254-3.255 4.603-3.255q.301 0 .59.073c1.106.275 2.167 1.336 4.012 3.18v.002h.001c1.58 1.58 2.585 2.585 3.014 3.535c.16.355.24.701.24 1.067c0 1.348-1.085 2.433-3.255 4.603l-.767.767C12.29 20.915 11.206 22 9.857 22s-2.433-1.085-4.602-3.255S2 15.491 2 14.142S3.085 11.71 5.255 9.54m-.53 4.072a.75.75 0 0 1 1.06 0l4.603 4.603a.75.75 0 0 1-1.06 1.06l-4.603-4.602a.75.75 0 0 1 0-1.06M19.83 4.17C21.277 5.616 22 6.34 22 7.238c0 .9-.723 1.622-2.17 3.069l-.635.636a8 8 0 0 0-.334-.47c-.604-.792-1.478-1.666-2.502-2.69l-.142-.142c-1.024-1.024-1.898-1.898-2.69-2.502a8 8 0 0 0-.47-.333l.636-.636C15.14 2.723 15.863 2 16.762 2c.898 0 1.622.723 3.068 2.17m-.209 2.33a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.707-.708a.75.75 0 0 1 1.06 0M17.5 4.379a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 1 1-1.06-1.06l.706-.707a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlashDriveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightBoldIcon],svg[solar-flashlight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4.25H4V4c0-.943 0-1.414.293-1.707S5.057 2 6 2h12c.943 0 1.414 0 1.707.293S20 3.057 20 4zm-3.828 4.578c-.163.163-.302.302-.422.427V9.25h-7.5v.005c-.12-.125-.26-.264-.421-.427L4.75 5.75h14.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 11.657V19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 20.398 15 19.932 15 19v-7.343c0-.377 0-.668.015-.907h-6.03c.015.24.015.53.015.907M12.75 13a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlashlightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlashlightOnBoldIcon],svg[solar-flashlight-on-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm-6.22.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06zm12 0a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06M20 10v.25H4V10c0-.943 0-1.414.293-1.707S5.057 8 6 8h12c.943 0 1.414 0 1.707.293S20 9.057 20 10m-3.828 4.828c-.163.163-.302.302-.422.427v-.005h-7.5v.005c-.12-.125-.26-.264-.421-.427L4.75 11.75h14.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 20v-2.343c0-.378 0-.668-.015-.907h6.03c-.015.24-.015.53-.015.907V20c0 .943 0 1.414-.293 1.707S13.943 22 13 22h-2c-.943 0-1.414 0-1.707-.293S9 20.943 9 20m3-1.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlashlightOnBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipHorizontalBoldIcon],svg[solar-flip-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18.114V5.886c0-1.702 0-2.553.542-2.832c.543-.28 1.235.216 2.62 1.205l1.582 1.13c.616.44.924.66 1.09.982C8 6.694 8 7.073 8 7.83v8.34c0 .757 0 1.136-.166 1.459s-.474.543-1.09.983l-1.582 1.13c-1.385.988-2.077 1.483-2.62 1.204C2 20.666 2 19.816 2 18.114m20 0V5.886c0-1.702 0-2.553-.542-2.832c-.543-.28-1.235.216-2.62 1.205l-1.582 1.13c-.616.44-.924.66-1.09.982C16 6.694 16 7.073 16 7.83v8.34c0 .757 0 1.136.166 1.459s.474.543 1.09.983l1.581 1.13c1.386.988 2.078 1.483 2.62 1.204s.543-1.13.543-2.832"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m0 8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m0 8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlipHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalBoldIcon],svg[solar-flip-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.114 22H5.886c-1.702 0-2.553 0-2.832-.542c-.28-.543.216-1.235 1.205-2.62l1.13-1.582c.44-.616.66-.924.982-1.09C6.694 16 7.073 16 7.83 16h8.34c.757 0 1.136 0 1.459.166s.543.474.983 1.09l1.13 1.581c.988 1.386 1.483 2.078 1.204 2.62s-1.13.543-2.832.543m0-20H5.886c-1.702 0-2.553 0-2.832.542c-.28.543.216 1.235 1.205 2.62l1.13 1.582c.44.616.66.924.982 1.09C6.694 8 7.073 8 7.83 8h8.34c.757 0 1.136 0 1.459-.166s.543-.474.983-1.09l1.13-1.582c.988-1.385 1.483-2.077 1.204-2.62C20.666 2 19.816 2 18.114 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFlipVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampBoldIcon],svg[solar-floor-lamp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.747 3.062l-3.593-.019A2.04 2.04 0 0 1 11.947 2a2.08 2.08 0 0 1 1.8 1.062m-.997 3.972a3.05 3.05 0 0 0 2.123-1.96c.184-.534-.295-1.008-.862-1.011l-4.114-.021c-.568-.003-1.043.466-.855 1.003a3.13 3.13 0 0 0 2.208 1.999v6.363a5 5 0 0 0-.387-.334l-.011-.01l-3.887-2.777l-.076-.057a3.13 3.13 0 0 0-.26-2.836c-.305-.48-.968-.398-1.318.05L2.78 10.685c-.35.447-.274 1.117.26 1.304a3.05 3.05 0 0 0 2.97-.546l.07.053l3.876 2.77a3.39 3.39 0 0 1 1.295 2.637v4.347H9a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-4.313a3.39 3.39 0 0 1 1.295-2.67l3.876-2.77l.131-.1a3.05 3.05 0 0 0 3.022.592c.534-.187.61-.857.26-1.305l-2.532-3.241c-.35-.448-1.013-.53-1.318-.05a3.13 3.13 0 0 0-.285 2.77l-.164.123l-3.887 2.778l-.012.009a5 5 0 0 0-.386.334zM2.157 9.857l2.212-2.831a2.04 2.04 0 0 0-1.93.76a2.08 2.08 0 0 0-.282 2.07m17.588-2.83l2.211 2.83a2.08 2.08 0 0 0-.282-2.07a2.04 2.04 0 0 0-1.93-.76"></svg:path>`,
})
export class SolarFloorLampBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFloorLampMinimalisticBoldIcon],svg[solar-floor-lamp-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.599 3C14.08 2.402 13.11 2 12 2s-2.08.402-2.599 1zm-1.85 4.955c1.998-.24 3.61-1.426 4.099-2.97C17.014 4.457 16.552 4 16 4H8c-.552 0-1.014.458-.847.984c.488 1.545 2.1 2.731 4.098 2.971L11.25 8v6.407a5 5 0 0 0-.387-.334l-.011-.01l-3.887-2.777l-.076-.057a3.13 3.13 0 0 0-.26-2.836c-.305-.48-.968-.398-1.318.05L2.78 11.685c-.35.447-.274 1.117.26 1.304a3.05 3.05 0 0 0 2.97-.546l.07.053l3.876 2.77a3.39 3.39 0 0 1 1.295 2.637v3.347H9a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25V8l-.002-.045M2.157 10.857l2.212-2.831a2.04 2.04 0 0 0-1.93.76a2.08 2.08 0 0 0-.282 2.07"></svg:path>`,
})
export class SolarFloorLampMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFogBoldIcon],svg[solar-fog-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.762 7.647C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353a5.57 5.57 0 0 1-.808 2.897H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.271A4.2 4.2 0 0 1 2 13.765c0-2.34 1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm3 3a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarFogBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolder2BoldIcon],svg[solar-folder-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95v2.3h19.953c-.072-1.049-.256-1.737-.723-2.256a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257m19.928 5.492H2V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolder2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderBoldIcon],svg[solar-folder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCheckBoldIcon],svg[solar-folder-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257m12.428 6.181a.75.75 0 0 1 .063 1.06l-2.667 3a.75.75 0 0 1-1.121 0l-1.334-1.5a.75.75 0 0 1 1.122-.997l.772.87l2.106-2.37a.75.75 0 0 1 1.06-.063" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCloudBoldIcon],svg[solar-folder-cloud-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257M13.713 16C14.977 16 16 15.052 16 13.882c0-.927-.643-1.714-1.538-2.001C14.335 10.823 13.366 10 12.191 10c-1.263 0-2.286.948-2.286 2.118c0 .258.05.506.142.735a2 2 0 0 0-.333-.03c-.946 0-1.714.712-1.714 1.589S8.768 16 9.714 16z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderCloudBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderErrorBoldIcon],svg[solar-folder-error-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257m7.9 6.212a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97l-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderErrorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteBookmarkBoldIcon],svg[solar-folder-favourite-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.75 5.75h1.452q.562 0 1.048.002v4.867l-.705-.394l-.009-.005a2 2 0 0 0-.16-.082a.9.9 0 0 0-.376-.082a.9.9 0 0 0-.377.082c-.062.027-.125.063-.16.082l-.008.005l-.705.394z"></svg:path><svg:path fill="currentColor" d="M22 11.548v2.202c0 3.771 0 5.657-1.172 6.828S17.771 21.75 14 21.75h-4c-3.771 0-5.657 0-6.828-1.172S2 17.521 2 13.75V6.7c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 1.82c.368-.069.81-.069 1.692-.069c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529l.55.55c.816.816 1.224 1.224 1.712 1.495q.26.145.538.25v5.708c0 .135 0 .302.018.443c.02.145.083.477.4.697c.348.24.703.15.865.09c.135-.05.282-.132.386-.19l.026-.015l1.055-.59l1.055.59l.026.015c.104.058.25.14.386.19c.162.06.517.15.864-.09c.318-.22.381-.552.4-.697c.02-.14.02-.308.019-.443V5.797c1.049.072 1.737.256 2.256.722q.119.106.224.225c.77.855.77 2.172.77 4.804"></svg:path>`,
})
export class SolarFolderFavouriteBookmarkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteStarBoldIcon],svg[solar-folder-favourite-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257m10.882 5.94l-.098-.175C12.474 10.34 12.284 10 12 10s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderFavouriteStarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderOpenBoldIcon],svg[solar-folder-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.07 9.952c1.329 0 2.462 0 3.366.102q.23.025.458.064c.532.09 1.05.235 1.53.488v-.85c0-.91 0-1.663-.085-2.264c-.09-.635-.286-1.197-.756-1.66a3 3 0 0 0-.241-.214c-.512-.408-1.126-.575-1.82-.652c-.67-.074-1.512-.074-2.545-.074h-.353c-.982 0-1.335-.006-1.653-.087a2.7 2.7 0 0 1-.536-.196c-.285-.14-.532-.351-1.228-.968l-.474-.42a7 7 0 0 0-.48-.403a4.3 4.3 0 0 0-2.182-.803A8 8 0 0 0 8.413 2h-.116c-.641 0-1.064 0-1.431.061c-1.605.268-2.903 1.39-3.219 2.875c-.072.337-.071.724-.071 1.283v4.387c.48-.253.998-.399 1.53-.488q.227-.039.458-.064c.904-.102 2.037-.102 3.367-.102z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.358 12.779c-.61.941-.358 2.25.145 4.868c.363 1.885.544 2.827 1.172 3.452q.246.245.544.429C5.982 22 6.995 22 9.022 22h6.956c2.027 0 3.04 0 3.803-.472q.298-.184.544-.429c.628-.625.81-1.567 1.172-3.452c.503-2.618.755-3.927.145-4.868a3 3 0 0 0-.57-.646c-.87-.735-2.279-.735-5.094-.735H9.022c-2.815 0-4.223 0-5.094.735a3 3 0 0 0-.57.646m6.337 4.402c0-.4.343-.723.765-.723h4.08c.422 0 .765.324.765.723s-.343.723-.765.723h-4.08c-.422 0-.765-.324-.765-.723" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderOpenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderPathConnectBoldIcon],svg[solar-folder-path-connect-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 8.369V9.8c0 2.451 0 3.677-.82 4.438c-.82.762-2.14.762-4.78.762h-.65v3a1 1 0 0 1-.013.14c.507.201.913.604 1.118 1.11h7.395a.75.75 0 0 1 0 1.5h-7.395a2 2 0 0 1-3.71 0H2.75a.75.75 0 0 1 0-1.5h7.395c.205-.506.61-.909 1.118-1.11a1 1 0 0 1-.013-.14v-3h-.65c-2.64 0-3.96 0-4.78-.761C5 13.477 5 12.25 5 9.8V5.217c0-.573 0-.86.049-1.099c.213-1.052 1.1-1.874 2.232-2.073C7.538 2 7.847 2 8.465 2c.27 0 .406 0 .536.011c.56.049 1.093.254 1.526.587c.1.078.196.167.388.344l.385.358c.571.53.857.795 1.198.972q.284.146.594.228c.377.1.78.1 1.588.1h.261c1.843 0 2.765 0 3.363.5q.083.07.157.146C19 5.802 19 6.658 19 8.369M12.75 7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderPathConnectBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderSecurityBoldIcon],svg[solar-folder-security-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 11.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path d="M22 11.798V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14V6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804M12 10.25a2.75 2.75 0 0 0-.75 5.397V17.5a.75.75 0 0 0 1.5 0v-1.854A2.751 2.751 0 0 0 12 10.25"></svg:path></svg:g>`,
})
export class SolarFolderSecurityBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderWithFilesBoldIcon],svg[solar-folder-with-files-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257M16.283 3c.365 0 .548 0 .702.02c1.018.14 1.828.943 2.014 1.98a5 5 0 0 0-.461-.081c-.64-.084-1.448-.084-2.45-.084h-.334c-.942 0-1.3-.005-1.625-.101a2.5 2.5 0 0 1-.542-.233c-.296-.17-.552-.428-1.218-1.118L12 3zM13 9.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderWithFilesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFootballBoldIcon],svg[solar-football-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.014 8.666c-.07-.487-.221-1.066-.402-1.758l-.54-2.076l-.01-.037A10 10 0 0 1 7.47 3.08l1.632 1.238c.56.424 1.03.781 1.447 1.027c.218.13.437.238.666.316v3.022q-.184.086-.351.216l-1.932 1.519a2 2 0 0 0-.2.183L6.053 9.44a3.7 3.7 0 0 0-.04-.774m-1.968 1.537c-.295.254-.71.537-1.335.961l-.704.479a9.96 9.96 0 0 1 1.865-5.47l.28 1.073c.193.743.321 1.24.378 1.635c.055.376.032.582-.03.748c-.06.165-.174.333-.454.574m1.256 6.682c.695 0 1.28 0 1.759.056c.252.03.493.077.723.154l1.415-1.852a2 2 0 0 1-.127-.316L8.31 12.4a2 2 0 0 1-.071-.379l-2.727-1.18a3.7 3.7 0 0 1-.489.498c-.368.317-.856.648-1.436 1.043l-1.492 1.013a9.9 9.9 0 0 0 1.175 3.49zm6.491-6.807a.28.28 0 0 1 .174-.062q.091 0 .175.062l1.932 1.518q.08.062.111.166a.36.36 0 0 1 0 .207l-.758 2.526a.33.33 0 0 1-.108.164a.28.28 0 0 1-.178.064h-2.347a.28.28 0 0 1-.178-.065a.33.33 0 0 1-.108-.163l-.759-2.526a.36.36 0 0 1 0-.207a.33.33 0 0 1 .112-.166zm1.584-4.702c.422-.237.9-.584 1.468-.995l1.74-1.262a10 10 0 0 1 2.35 1.694l-.546 2.095c-.18.692-.331 1.271-.402 1.758a3.7 3.7 0 0 0-.04.77l-2.743 1.167a2 2 0 0 0-.203-.186l-1.932-1.519a1.8 1.8 0 0 0-.352-.216v-3.01c.226-.072.444-.175.66-.296m-2.063-1.323c-.333-.197-.735-.5-1.337-.957l-.883-.67A10 10 0 0 1 11.99 2c1.032 0 2.028.157 2.965.448l-.956.693c-.612.443-1.02.738-1.357.927c-.32.18-.507.224-.666.222s-.345-.05-.662-.237m7.662 7.287c.368.316.856.648 1.436 1.042l1.47.998a9.9 9.9 0 0 1-1.176 3.505h-1.858c-.695 0-1.28 0-1.759.056a3.5 3.5 0 0 0-.751.164l-1.59-1.89a2 2 0 0 0 .114-.288l.76-2.527q.055-.186.07-.375l2.792-1.188q.216.268.492.502m-4.168 7.288c-.201.446-.386 1.014-.606 1.694l-.496 1.532a10 10 0 0 1-3.253.03l-.506-1.562c-.22-.68-.405-1.248-.606-1.695a4 4 0 0 0-.356-.634l1.39-1.819q.203.05.418.05h2.347q.23 0 .447-.057l1.559 1.852a4 4 0 0 0-.338.608m-6.275 2.197c-.237-.73-.396-1.218-.56-1.578c-.155-.345-.283-.5-.418-.6c-.132-.098-.31-.172-.67-.214c-.381-.045-.878-.046-1.627-.046h-.957a10 10 0 0 0 4.438 3.074zm8.731-2.392c.381-.045.878-.046 1.627-.046h.785a10 10 0 0 1-4.243 3.005l.183-.567c.237-.73.396-1.218.56-1.578c.155-.345.283-.5.418-.6c.132-.098.31-.172.67-.214M19.47 8.88c.058-.393.187-.891.38-1.634l.273-1.05a9.96 9.96 0 0 1 1.847 5.43l-.68-.461c-.625-.425-1.04-.708-1.335-.962c-.28-.241-.393-.409-.454-.573c-.062-.167-.085-.373-.03-.75"></svg:path>`,
})
export class SolarFootballBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenBoldIcon],svg[solar-forbidden-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13.151V10.85c0-1.226 0-1.84-.228-2.39c-.229-.552-.662-.986-1.53-1.853l-.893-.894L5.712 19.348l.894.895c.867.867 1.3 1.3 1.852 1.529s1.165.228 2.39.228h2.303c1.226 0 1.84 0 2.39-.228c.552-.229.986-.662 1.853-1.53l2.849-2.848c.867-.867 1.3-1.3 1.529-1.852c.228-.551.228-1.165.228-2.39M4.651 18.288l-.894-.894c-.867-.867-1.3-1.3-1.529-1.852S2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39c.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529S9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228c.552.229.986.662 1.853 1.53l.894.893z"></svg:path>`,
})
export class SolarForbiddenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenCircleBoldIcon],svg[solar-forbidden-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10a9.96 9.96 0 0 0-2.418-6.52L5.479 19.581A9.96 9.96 0 0 0 12 22m0-20C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 2.418 6.52L18.521 4.419A9.96 9.96 0 0 0 12 2"></svg:path>`,
})
export class SolarForbiddenCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForward2BoldIcon],svg[solar-forward-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 6.25a.75.75 0 0 1 .75.75c0 1.756.715 2.78 1.563 3.391c.887.639 1.974.859 2.687.859h8.19l-3.72-3.72a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H9.5c-.953 0-2.367-.28-3.563-1.141C4.702 10.719 3.75 9.244 3.75 7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarForward2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForwardBoldIcon],svg[solar-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.97 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H9.5c-.713 0-1.8.22-2.687.859c-.848.61-1.563 1.635-1.563 3.391a.75.75 0 0 1-1.5 0c0-2.244.952-3.72 2.187-4.609c1.196-.861 2.61-1.141 3.563-1.141h8.19l-3.72-3.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarForwardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFridgeBoldIcon],svg[solar-fridge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.172 3.172C4 4.343 4 6.229 4 10v.75h16V10c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2S6.343 2 5.172 3.172M17 6.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-13 6V13c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.047C9.645 21 10.712 21 12 21s2.355 0 3.25-.047V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.475a3.1 3.1 0 0 0 1.078-.697C20 18.657 20 16.771 20 13v-.75zm13 1a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFridgeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFuelBoldIcon],svg[solar-fuel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 13.087c0-2.096 0-3.145.553-3.94C3 8.506 3.718 8.157 5 7.681v-.62c0-1.306 0-1.958.338-2.408q.132-.175.302-.308C6.08 4 6.72 4 8 4h.818c.507 0 .761 0 .97.057a1.65 1.65 0 0 1 1.156 1.18l.072.293l3.002-1.07c3.636-1.298 5.454-1.947 6.718-1.032C22 4.342 22 6.305 22 10.233v5.65c0 2.884 0 4.326-.879 5.221C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.896C2 20.21 2 18.767 2 15.884zm5.47-2.557a.75.75 0 1 1 1.06-1.06l1.5 1.5q.058.058.1.123C10.564 11 11.156 11 12 11c.831 0 1.418 0 1.85.09l1.62-1.62a.75.75 0 1 1 1.06 1.06l-1.62 1.62c.09.432.09 1.019.09 1.85s0 1.418-.09 1.85l1.62 1.62a.75.75 0 1 1-1.06 1.06l-1.62-1.62c-.432.09-1.019.09-1.85.09s-1.418 0-1.85-.09l-1.62 1.62a.75.75 0 0 1-1.06-1.06l1.62-1.62C9 15.418 9 14.831 9 14c0-.844 0-1.436.093-1.87a1 1 0 0 1-.123-.1z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFuelBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenBoldIcon],svg[solar-full-screen-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m8.345 1.64c-1.027-.138-2.382-.14-4.289-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812M2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFullScreenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenCircleBoldIcon],svg[solar-full-screen-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M10.747 5.994a.75.75 0 0 1-.743.756c-.856.007-1.454.035-1.904.124c-.428.084-.666.212-.84.386s-.302.412-.386.84c-.088.45-.117 1.048-.124 1.904a.75.75 0 0 1-1.5-.013c.007-.85.034-1.577.152-2.179c.122-.623.351-1.167.797-1.613s.99-.675 1.613-.797c.602-.118 1.328-.145 2.179-.152a.75.75 0 0 1 .756.744m2.503 0a.75.75 0 0 1 .757-.744c.85.007 1.576.034 2.179.152c.623.122 1.166.351 1.612.797s.676.99.798 1.613c.118.602.144 1.328.151 2.179a.75.75 0 0 1-1.5.013c-.007-.856-.035-1.454-.123-1.904c-.084-.428-.212-.666-.386-.84s-.412-.302-.84-.386c-.45-.088-1.048-.117-1.904-.124a.75.75 0 0 1-.744-.756m-6.5 8a.75.75 0 0 0-1.5.013c.007.85.034 1.577.152 2.179c.122.623.351 1.167.797 1.613s.99.675 1.613.797c.602.119 1.328.145 2.179.152a.75.75 0 0 0 .013-1.5c-.856-.007-1.454-.036-1.904-.123c-.428-.084-.666-.213-.84-.387s-.302-.412-.386-.84c-.088-.45-.117-1.048-.124-1.904m11.254-.743a.75.75 0 0 1 .743.756c-.007.85-.033 1.577-.151 2.179c-.122.623-.352 1.167-.798 1.613s-.99.675-1.612.797c-.603.119-1.329.145-2.18.152a.75.75 0 1 1-.012-1.5c.856-.007 1.454-.036 1.903-.123c.429-.084.666-.213.84-.387c.175-.174.303-.412.387-.84c.088-.45.116-1.048.124-1.904a.75.75 0 0 1 .756-.743" clip-rule="evenodd"></svg:path>`,
})
export class SolarFullScreenCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenSquareBoldIcon],svg[solar-full-screen-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m7.283 2.53a.75.75 0 0 1-.743.756c-.856.007-1.454.035-1.904.124c-.428.084-.666.212-.84.386s-.302.412-.386.84c-.088.45-.117 1.048-.124 1.904a.75.75 0 0 1-1.5-.013c.007-.85.034-1.577.152-2.179c.122-.623.351-1.167.797-1.613s.99-.675 1.613-.797c.602-.118 1.328-.145 2.179-.152a.75.75 0 0 1 .756.744m2.503 0a.75.75 0 0 1 .757-.744c.85.007 1.576.034 2.179.152c.623.122 1.166.351 1.612.797s.676.99.798 1.613c.118.602.144 1.328.151 2.179a.75.75 0 0 1-1.5.013c-.007-.856-.035-1.454-.123-1.904c-.084-.428-.212-.666-.386-.84s-.412-.302-.84-.386c-.45-.088-1.048-.117-1.904-.124a.75.75 0 0 1-.744-.756m-6.5 8a.75.75 0 0 0-1.5.013c.007.85.034 1.577.152 2.179c.122.623.351 1.167.797 1.613s.99.675 1.613.797c.602.119 1.328.145 2.179.152a.75.75 0 0 0 .013-1.5c-.856-.007-1.454-.036-1.904-.123c-.428-.084-.666-.213-.84-.387s-.302-.412-.386-.84c-.088-.45-.117-1.048-.124-1.904m11.254-.743a.75.75 0 0 1 .743.756c-.007.85-.033 1.577-.151 2.179c-.122.623-.352 1.167-.798 1.613s-.99.675-1.612.797c-.603.119-1.329.145-2.18.152a.75.75 0 1 1-.012-1.5c.856-.007 1.454-.036 1.903-.123c.429-.084.666-.213.84-.387c.175-.174.303-.412.387-.84c.088-.45.116-1.048.124-1.904a.75.75 0 0 1 .756-.743" clip-rule="evenodd"></svg:path>`,
})
export class SolarFullScreenSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryAddBoldIcon],svg[solar-gallery-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m.75-6.5a.75.75 0 0 0-1.5 0v1.25H15.5a.75.75 0 0 0 0 1.5h1.25V8.5a.75.75 0 0 0 1.5 0V7.25h1.25a.75.75 0 0 0 0-1.5h-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryBoldIcon],svg[solar-gallery-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386v.844l1.001-.876a2.3 2.3 0 0 1 3.141.104l4.29 4.29a2 2 0 0 0 2.564.222l.298-.21a3 3 0 0 1 3.732.225l2.83 2.547c.286-.598.455-1.384.545-2.493c.098-1.205.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCheckBoldIcon],svg[solar-gallery-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.53-5.47a.75.75 0 0 0-1.06-1.06L16.5 6.94l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCircleBoldIcon],svg[solar-gallery-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m-.818 14.112l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.001.894a9.25 9.25 0 1 1 16.858 5.4l-1.833-1.663a3 3 0 0 0-3.731-.225l-.299.21a2 2 0 0 1-2.564-.222" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryDownloadBoldIcon],svg[solar-gallery-download-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 2c-2.121 0-3.182 0-3.841.659S13 4.379 13 6.5s0 3.182.659 3.841S15.379 11 17.5 11s3.182 0 3.841-.659S22 8.621 22 6.5s0-3.182-.659-3.841S19.621 2 17.5 2m2.03 5.53l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.22.22V4.5a.75.75 0 0 1 1.5 0v2.19l.22-.22a.75.75 0 1 1 1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryDownloadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryEditBoldIcon],svg[solar-gallery-edit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.212-6.712a.983.983 0 0 1 0 1.39l-.058.058a.24.24 0 0 1-.211.067a1.6 1.6 0 0 1-.81-.436a1.6 1.6 0 0 1-.436-.81a.24.24 0 0 1 .067-.211l.058-.058a.983.983 0 0 1 1.39 0M17.35 8.04a3 3 0 0 1-.296.279a1.6 1.6 0 0 1-.303.187c-.09.043-.188.076-.381.14l-1.021.34a.265.265 0 0 1-.335-.335l.34-1.02c.064-.194.097-.291.14-.382q.077-.163.187-.303c.062-.08.134-.152.279-.296l1.799-1.799c.043-.043.118-.023.138.035a1.98 1.98 0 0 0 1.217 1.217c.058.02.078.095.035.138z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryEditBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryFavouriteBoldIcon],svg[solar-gallery-favourite-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-1.455-2.784c-.765-.67-1.545-1.564-1.545-2.418c0-1.773 1.65-2.435 3-1.065c1.35-1.37 3-.708 3 1.065c0 .854-.78 1.747-1.545 2.418c-.596.523-.894.784-1.455.784c-.56 0-.859-.261-1.455-.784" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.904 16.441c.083-1.024.094-2.274.096-3.743a.697.697 0 1 0-1.396 0c-.001 1.477-.012 2.658-.091 3.63c-.084 1.032-.242 1.763-.507 2.32l-2.633-2.37a2.79 2.79 0 0 0-3.471-.21l-.277.196a1.86 1.86 0 0 1-2.386-.207l-3.99-3.99a2.14 2.14 0 0 0-2.922-.097l-.931.814V12c0-2.212 0-3.801.163-5.01c.16-1.19.464-1.907.994-2.437S5.8 3.72 6.99 3.56c1.079-.145 2.458-.161 4.313-.163a.699.699 0 0 0 0-1.396c-1.829.002-3.33.02-4.499.177c-1.343.18-2.404.557-3.236 1.39s-1.21 1.893-1.39 3.236C2 8.116 2 9.8 2 11.947V12q0 .736.002 1.396c.007 1.729.044 3.121.243 4.24c.203 1.14.584 2.058 1.322 2.796c.832.833 1.893 1.21 3.236 1.39C8.116 22 9.8 22 11.947 22h.106c2.148 0 3.83 0 5.144-.177c1.344-.18 2.404-.557 3.236-1.39a4.2 4.2 0 0 0 .73-.983c.445-.825.644-1.82.74-3.009"></svg:path>`,
})
export class SolarGalleryFavouriteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryMinimalisticBoldIcon],svg[solar-gallery-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M16 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-9.68 3.104a1.55 1.55 0 0 1 2.184.073l2.648 2.81a2.294 2.294 0 0 0 3.042.266a1.57 1.57 0 0 1 2.02.123l2.268 2.166a.75.75 0 0 0 1.036-1.084L17.25 15.29a3.07 3.07 0 0 0-3.953-.24a.795.795 0 0 1-1.054-.093l-2.647-2.81a3.05 3.05 0 0 0-4.296-.143l-.81.752a.75.75 0 1 0 1.02 1.1z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRemoveBoldIcon],svg[solar-gallery-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-1.47-7.03a.75.75 0 1 0-1.06 1.06l1.47 1.47l-1.47 1.47a.75.75 0 0 0 1.06 1.06l1.47-1.47l1.47 1.47a.75.75 0 1 0 1.06-1.06L18.56 6.5l1.47-1.47a.75.75 0 0 0-1.06-1.06L17.5 5.44z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRoundBoldIcon],svg[solar-gallery-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386l-.001 1.28l-.222-.03c-2.844-.394-5.446 1.084-6.772 3.313c-1.71-4.325-6.227-7.275-11.274-6.55l-.226.032c.011-1.405.049-2.519.171-3.431c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGallerySendBoldIcon],svg[solar-gallery-send-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.03-5.53l-1.5-1.5a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.22-.22V8.5a.75.75 0 0 0 1.5 0V6.31l.22.22a.75.75 0 1 0 1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarGallerySendBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryWideBoldIcon],svg[solar-gallery-wide-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.512 10.077c0 .739-.625 1.338-1.396 1.338s-1.395-.6-1.395-1.338s.625-1.337 1.395-1.337s1.396.598 1.396 1.337"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.036 5.532c-1.06-.136-2.414-.136-4.123-.136h-3.826c-1.71 0-3.064 0-4.123.136c-1.09.141-1.974.437-2.67 1.104c-.696.668-1.005 1.514-1.152 2.56C2 10.21 2 11.508 2 13.147v.1c0 1.639 0 2.937.142 3.953c.147 1.045.456 1.891 1.152 2.558c.696.668 1.58.964 2.67 1.104C7.024 21 8.378 21 10.087 21h3.826c1.71 0 3.064 0 4.123-.137c1.09-.14 1.974-.436 2.67-1.104c.696-.667 1.005-1.513 1.152-2.558c.142-1.016.142-2.314.142-3.953v-.1c0-1.64 0-2.937-.142-3.953c-.147-1.045-.456-1.891-1.152-2.559c-.696-.667-1.58-.963-2.67-1.104M6.15 6.858c-.936.12-1.475.347-1.87.724c-.393.378-.629.894-.755 1.791c-.1.72-.123 1.62-.128 2.796l.47-.395c1.125-.943 2.819-.889 3.875.123l3.99 3.825a1.2 1.2 0 0 0 1.491.124l.278-.187a3.606 3.606 0 0 1 4.34.25l2.407 2.078c.098-.264.173-.58.227-.965c.128-.916.13-2.124.13-3.824s-.002-2.908-.13-3.825c-.126-.897-.362-1.413-.756-1.79c-.393-.378-.933-.604-1.869-.725c-.956-.123-2.216-.125-3.99-.125h-3.72c-1.774 0-3.034.002-3.99.125" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.086 2.61c-.86-.11-1.954-.11-3.319-.11h-3.09c-1.364 0-2.459 0-3.319.11c-.89.115-1.632.358-2.221.92a2.9 2.9 0 0 0-.724 1.12c.504-.23 1.074-.366 1.714-.45c1.084-.14 2.47-.14 4.22-.14h3.914c1.75 0 3.135 0 4.22.14c.558.073 1.064.186 1.519.366a2.9 2.9 0 0 0-.692-1.035c-.589-.563-1.331-.806-2.222-.92"></svg:path>`,
})
export class SolarGalleryWideBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGameboyBoldIcon],svg[solar-gameboy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.243 0-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464C21 4.93 21 7.286 21 12s0 7.071-1.318 8.535S16.242 22 12 22m-2.75-8a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V17a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75zm7.083-.167a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0m0 3.334a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0m-2.5-.834a.833.833 0 1 0 0-1.666a.833.833 0 0 0 0 1.666M18 15.5a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0M7.051 7.112C7 7.302 7 7.535 7 8s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C8.304 10 8.536 10 9 10h6c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C17 8.696 17 8.464 17 8s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C15.697 6 15.464 6 15 6H9c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarGameboyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadBoldIcon],svg[solar-gamepad-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.667 6.134l-.502-.355A4.24 4.24 0 0 0 7.715 5h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 20a2.74 2.74 0 0 0 1.53-.437c.41-.268.77-.616 1.13-.964c.444-.43.888-.86 1.424-1.138a4.1 4.1 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.536.279.98.709 1.425 1.139c.36.348.72.696 1.128.964c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 5.025 17.3 5 16.897 5h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0M16.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V13a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V10a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarGamepadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadChargeBoldIcon],svg[solar-gamepad-charge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 18.968A1 1 0 0 0 13.5 18v-.727a.38.38 0 0 0-.26-.36a3.92 3.92 0 0 0-2.48 0a.38.38 0 0 0-.26.36V18a1 1 0 0 0 .75.968v3.282a.75.75 0 1 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m10.667 5.134l-.502-.355A4.24 4.24 0 0 0 7.715 4h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 19a2.74 2.74 0 0 0 1.53-.437c.41-.268.77-.616 1.13-.964c.444-.43.888-.86 1.424-1.138a4.1 4.1 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.536.279.98.709 1.425 1.139c.36.348.72.696 1.128.964c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 4.025 17.3 4 16.897 4h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarGamepadChargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadMinimalisticBoldIcon],svg[solar-gamepad-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 3.25a.75.75 0 0 1 .75.75v1A1.75 1.75 0 0 1 14 6.75h-1a.25.25 0 0 0-.25.25v1h.422c2.54 0 3.809 0 4.785.614q.371.233.683.542c.82.81 1.11 2.047 1.687 4.52l1.023 4.373A2.858 2.858 0 0 1 16 19.957l-.12-.246a3.2 3.2 0 0 0-2.877-1.794h-2.005a3.2 3.2 0 0 0-2.876 1.794l-.12.246a2.858 2.858 0 0 1-5.35-1.908l1.022-4.374c.578-2.472.867-3.708 1.686-4.519a4 4 0 0 1 .684-.542C7.02 8 8.29 8 10.83 8h.422V7c0-.966.783-1.75 1.75-1.75h1a.25.25 0 0 0 .25-.25V4a.75.75 0 0 1 .75-.75M16 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-7.5-.75a.75.75 0 0 1 .75.75v.75H10a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H7a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 .75-.75M17 15.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarGamepadMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadNoChargeBoldIcon],svg[solar-gamepad-no-charge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.47 17.47a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 0 1 1.06 1.06l-.47.47l.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47l-.47.47a.75.75 0 0 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06"></svg:path><svg:path d="m10.667 5.134l-.502-.355A4.24 4.24 0 0 0 7.715 4h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 19a2.74 2.74 0 0 0 1.53-.437c.41-.268.77-.616 1.13-.964c.444-.43.888-.86 1.424-1.138a4.1 4.1 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.536.279.98.709 1.425 1.139c.36.348.72.696 1.128.964c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 4.025 17.3 4 16.897 4h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path></svg:g>`,
})
export class SolarGamepadNoChargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadOldBoldIcon],svg[solar-gamepad-old-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 1.25a.75.75 0 0 1 .75.75v1A1.75 1.75 0 0 1 14 4.75h-1a.25.25 0 0 0-.25.25v1H14c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h1.25V5c0-.966.784-1.75 1.75-1.75h1a.25.25 0 0 0 .25-.25V2a.75.75 0 0 1 .75-.75M8.75 12a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05c.11 0 .2.09.2.2V16a.75.75 0 0 0 1.5 0v-1.05c0-.11.09-.2.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2zM15 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarGamepadOldBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGarageBoldIcon],svg[solar-garage-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.007 9.105l6-5.333a3 3 0 0 1 3.986 0l6 5.333A3 3 0 0 1 21 11.347v9.903h1a.75.75 0 1 1 0 1.5H2a.75.75 0 0 1 0-1.5h1v-9.903a3 3 0 0 1 1.007-2.242M9.25 9a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 9m4.802 2.25c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v5.302h-1.5V16c0-.964-.002-1.611-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.484-.066 1.131-.066 2.095v5.25h-1.5v-5.302c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08zM8.25 15.5a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarGarageBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGasStationBoldIcon],svg[solar-gas-station-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 2h1c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v8.25h1.571c1.204 0 2.179.975 2.179 2.179v.071a.75.75 0 0 0 1.5 0v-4.75l-1.224-.408a1.5 1.5 0 0 1-1.026-1.423V9.5a1.5 1.5 0 0 1 1.5-1.5H21v-.378c0-.185 0-.248-.003-.306a2.25 2.25 0 0 0-.745-1.55a6 6 0 0 0-.237-.194l-1.233-.986a.75.75 0 1 1 .936-1.172l1.25 1c.122.098.206.165.285.236a3.75 3.75 0 0 1 1.241 2.582c.006.105.006.213.006.37V18.5a2.25 2.25 0 1 1-4.5 0v-.071a.68.68 0 0 0-.679-.679H15.75v3.5h1.123a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h1V8c0-2.828 0-4.243.879-5.121C4.507 2 5.922 2 8.75 2M7 16.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM11 6H8c-.943 0-1.414 0-1.707.293S6 7.057 6 8s0 1.414.293 1.707S7.057 10 8 10h3c.943 0 1.414 0 1.707-.293S13 8.943 13 8s0-1.414-.293-1.707S11.943 6 11 6" clip-rule="evenodd"></svg:path>`,
})
export class SolarGasStationBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostBoldIcon],svg[solar-ghost-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 19.206V12c0-5.523-4.477-10-10-10S2 6.477 2 12v7.206a1.727 1.727 0 0 0 2.5 1.544a2.89 2.89 0 0 1 2.896.18a2.89 2.89 0 0 0 3.208 0l.353-.234a1.88 1.88 0 0 1 2.086 0l.353.235a2.89 2.89 0 0 0 3.208 0a2.89 2.89 0 0 1 2.897-.18A1.727 1.727 0 0 0 22 19.206M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarGhostBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostSmileBoldIcon],svg[solar-ghost-smile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12v7.206a1.727 1.727 0 0 1-2.5 1.544a2.89 2.89 0 0 0-2.896.18a2.89 2.89 0 0 1-3.208 0l-.353-.234a1.88 1.88 0 0 0-2.086 0l-.353.235a2.89 2.89 0 0 1-3.208 0a2.89 2.89 0 0 0-2.897-.18A1.727 1.727 0 0 1 2 19.205V12C2 6.477 6.477 2 12 2s10 4.477 10 10M9.447 14.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 16.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 15.25a4.27 4.27 0 0 1-2.553-.852M16 9.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 11c.552 0 1-.672 1-1.5S9.552 8 9 8s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarGhostSmileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGiftBoldIcon],svg[solar-gift-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 2c-4.219.004-6.401.08-7.786 1.464C2.08 4.85 2.004 7.031 2 11.25h4.914a4 4 0 0 1-.757-1.528C5.62 7.57 7.57 5.62 9.722 6.157c.572.143 1.09.406 1.528.757zM2 12.75c.004 4.218.08 6.4 1.464 7.785C4.85 21.92 7.031 21.995 11.25 22v-7.877A4.75 4.75 0 0 1 7 16.75a.75.75 0 0 1 0-1.5a3.25 3.25 0 0 0 3.163-2.5zM12.75 22c4.218-.005 6.4-.08 7.785-1.465c1.385-1.384 1.46-3.567 1.465-7.785h-8.163A3.25 3.25 0 0 0 17 15.25a.75.75 0 0 1 0 1.5a4.75 4.75 0 0 1-4.25-2.627zM22 11.25c-.005-4.219-.08-6.401-1.465-7.786C19.151 2.08 16.968 2.004 12.75 2v4.914a4 4 0 0 1 1.527-.757c2.153-.538 4.104 1.412 3.565 3.565a4 4 0 0 1-.756 1.528z"></svg:path><svg:path fill="currentColor" d="M9.358 7.613a2.5 2.5 0 0 1 1.892 2.422v1.215h-1.215a2.5 2.5 0 0 1-2.422-1.892a1.44 1.44 0 0 1 1.745-1.745m3.392 2.422v1.215h1.215c1.145 0 2.144-.78 2.422-1.892a1.44 1.44 0 0 0-1.746-1.745a2.5 2.5 0 0 0-1.891 2.422"></svg:path>`,
})
export class SolarGiftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlassesBoldIcon],svg[solar-glasses-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.237 4.712a.75.75 0 0 0-.474-1.423l-.555.185c-.57.19-1.055.351-1.439.527c-.409.187-.767.416-1.051.776c-.285.36-.426.76-.515 1.2c-.083.415-.129.923-.183 1.522l-.698 7.67a5 5 0 0 0-.072.823C1.255 18.611 3.38 20.75 6 20.75a4.75 4.75 0 0 0 4.689-3.986l.219-.078a3.25 3.25 0 0 1 2.184 0l.22.078A4.75 4.75 0 0 0 18 20.75c2.62 0 4.744-2.14 4.75-4.758q0-.421-.073-.823L21.98 7.5c-.054-.6-.1-1.107-.183-1.521c-.089-.441-.23-.842-.515-1.201s-.642-.59-1.051-.776c-.384-.176-.868-.337-1.439-.527l-.555-.185a.75.75 0 0 0-.474 1.423l.518.172c.617.206 1.024.343 1.326.481c.286.13.414.235.5.343c.085.107.157.256.219.564c.065.326.105.753.164 1.401l.415 4.569a4.75 4.75 0 0 0-7.585 2.942a4.75 4.75 0 0 0-2.64 0a4.75 4.75 0 0 0-7.585-2.942l.048-.532l.367-4.037c.059-.648.099-1.075.164-1.4c.062-.309.134-.458.22-.565c.085-.108.213-.212.499-.343c.302-.138.709-.275 1.326-.48z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGlassesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobalBoldIcon],svg[solar-global-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.028 11.25A10 10 0 0 1 12 2c-.83 0-1.57.364-2.18.921c-.605.554-1.116 1.328-1.53 2.242c-.416.92-.74 1.996-.959 3.163a20 20 0 0 0-.318 2.924zm0 1.5h4.985c.036 1.002.143 1.988.318 2.924c.22 1.167.543 2.243.959 3.163c.414.914.925 1.688 1.53 2.242c.61.557 1.35.921 2.18.921c-5.27 0-9.589-4.077-9.972-9.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 3.395c-.275 0-.63.117-1.043.495c-.416.381-.833.978-1.201 1.791c-.366.808-.663 1.783-.867 2.873c-.16.858-.26 1.768-.296 2.696h6.814a18.5 18.5 0 0 0-.296-2.696c-.204-1.09-.5-2.065-.867-2.873c-.368-.813-.784-1.41-1.2-1.79c-.414-.379-.769-.496-1.044-.496M8.889 15.446c.204 1.09.501 2.065.867 2.873c.368.813.785 1.41 1.2 1.79c.414.379.77.496 1.044.496c.275 0 .63-.117 1.043-.495c.417-.381.833-.978 1.201-1.791c.366-.808.663-1.783.867-2.873c.161-.858.261-1.768.296-2.696H8.593c.035.928.135 1.838.296 2.696"></svg:path><svg:path fill="currentColor" d="M12 2c.831 0 1.57.364 2.18.921c.605.554 1.117 1.328 1.53 2.242c.417.92.74 1.996.959 3.163c.175.936.282 1.922.318 2.924h4.985A10 10 0 0 0 12 2m4.669 13.674c-.219 1.167-.542 2.243-.959 3.163c-.413.914-.925 1.688-1.53 2.242c-.61.557-1.349.921-2.18.921c5.27 0 9.589-4.077 9.972-9.25h-4.985a20 20 0 0 1-.318 2.924"></svg:path>`,
})
export class SolarGlobalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobusBoldIcon],svg[solar-globus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.387 5.08a10 10 0 0 0-.5-.745A6.97 6.97 0 0 1 12 3c1.32 0 2.555.365 3.608 1q-.022.134-.066.303a4 4 0 0 1-.413 1.002c-.049.077-.25.273-.613.544c-.162.12-.341.231-.556.36l-.074.043c-.187.112-.402.24-.609.382c-.488.334-.996.786-1.338 1.517a2.1 2.1 0 0 0-.12 1.456c.035.135.054.27.055.39c0 .037-.015.096-.097.165a.52.52 0 0 1-.327.118c-1.077-.012-1.927-.904-2.05-2.327c-.094-1.082-.536-2.084-1.013-2.874m8.265 9.43q.396-.005.745-.05a7 7 0 0 1-3.418 2.257c-.046-.381-.016-.84.209-1.263c.192-.362.678-.633 1.334-.794a5.5 5.5 0 0 1 1.109-.15z"></svg:path><svg:path fill="currentColor" d="M5 10c0-1.72.62-3.294 1.648-4.512q.154.215.301.46c.402.664.713 1.416.777 2.15c.17 1.97 1.481 3.837 3.705 3.862c.961.01 2.126-.712 2.123-1.968c0-.287-.046-.567-.112-.815a.44.44 0 0 1 .019-.315c.17-.364.422-.607.766-.842c.16-.11.326-.21.518-.324l.077-.046c.216-.129.461-.278.698-.454c.345-.257.79-.618 1.027-.99c.187-.294.36-.671.494-1.063A6.98 6.98 0 0 1 19 10q-.002.799-.172 1.55a1.9 1.9 0 0 1-.303.582c-.237.307-.712.685-1.89.697h-.036l-.096.003a7 7 0 0 0-1.382.195c-.759.186-1.871.61-2.417 1.639c-.43.811-.48 1.645-.382 2.327A7.003 7.003 0 0 1 5 10"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.004 1.5a.75.75 0 0 1 1.058-.059a11.04 11.04 0 0 1 3.688 8.246c0 5.751-4.389 10.478-10 11.013v.55H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-.509a11.04 11.04 0 0 1-7.809-3.678a.75.75 0 1 1 1.118-1a9.54 9.54 0 0 0 7.128 3.187a9.563 9.563 0 0 0 9.563-9.563a9.54 9.54 0 0 0-3.188-7.128a.75.75 0 0 1-.059-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarGlobusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGolfBoldIcon],svg[solar-golf-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v1.036l5.008 2.504l.054.027c.734.367 1.36.68 1.796.984c.442.309.906.757.906 1.449s-.464 1.14-.906 1.449c-.436.304-1.062.617-1.796.984l-5.062 2.53V18a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-1.567 10-3.5c0-1.662-3.31-3.054-7.75-3.411V18a2.25 2.25 0 0 1-4.5 0v-2.911C5.31 15.446 2 16.838 2 18.5C2 20.433 6.477 22 12 22"></svg:path><svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 1.5 0v-5.036l5.062-2.531c.734-.367 1.36-.68 1.796-.984c.442-.309.906-.756.906-1.449c0-.692-.464-1.14-.906-1.449c-.436-.304-1.062-.617-1.796-.984l-5.062-2.53V2a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class SolarGolfBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGpsBoldIcon],svg[solar-gps-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0 .385.312.698.698.698H4.59a7.444 7.444 0 0 0 6.712 6.712v1.892a.698.698 0 0 0 1.396 0V19.41a7.444 7.444 0 0 0 6.712-6.712h1.892a.698.698 0 0 0 0-1.396H19.41a7.444 7.444 0 0 0-6.712-6.712V2.698a.698.698 0 0 0-1.396 0V4.59a7.444 7.444 0 0 0-6.712 6.712H2.698A.7.7 0 0 0 2 12m6.512 0a3.488 3.488 0 1 1 6.976 0a3.488 3.488 0 0 1-6.976 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.907 12a2.093 2.093 0 1 1 4.186 0a2.093 2.093 0 0 1-4.186 0"></svg:path>`,
})
export class SolarGpsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphBoldIcon],svg[solar-graph-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m14.112 7.016a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.8.8 0 0 1-.163.122l-.011.005l-.008-.004l-.003-.001a.8.8 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.328-.395-.625-.75-.901-1c-.301-.272-.68-.514-1.18-.514s-.878.242-1.18.514c-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 1 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.8.8 0 0 1 .163-.122l.007-.003l.004-.002l.011.005a.8.8 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1c.301.272.68.514 1.18.514s.878-.242 1.18-.514c.276-.25.572-.605.9-1z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGraphBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownBoldIcon],svg[solar-graph-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M7.53 9.47a.75.75 0 0 0-1.06 1.06l2.293 2.293a1.75 1.75 0 0 0 2.474 0l1.586-1.586a.25.25 0 0 1 .354 0l2.012 2.013H14.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v.69l-2.013-2.013a1.75 1.75 0 0 0-2.474 0l-1.586 1.586a.25.25 0 0 1-.354 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGraphDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownNewBoldIcon],svg[solar-graph-down-new-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c1.399 0 2.59 0 3.612.038a4.5 4.5 0 0 0 6.35 6.35C22 9.41 22 10.601 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2m2.5 11.25a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v.69l-2.013-2.013a1.75 1.75 0 0 0-2.474 0l-1.586 1.586a.25.25 0 0 1-.354 0L7.53 9.47a.75.75 0 0 0-1.06 1.06l2.293 2.293a1.75 1.75 0 0 0 2.474 0l1.586-1.586a.25.25 0 0 1 .354 0l2.012 2.013z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGraphDownNewBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewBoldIcon],svg[solar-graph-new-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.612 2.038C14.59 2 13.399 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.399 0-2.59-.038-3.612a4.5 4.5 0 0 1-6.35-6.35m1.868 7.386a.75.75 0 0 1 .096 1.056l-1.829 2.195c-.328.394-.624.75-.9 1c-.302.27-.68.513-1.18.513s-.879-.242-1.18-.514c-.276-.25-.572-.605-.901-1l-.292-.35c-.371-.445-.599-.716-.787-.885a.8.8 0 0 0-.163-.122l-.01-.005l-.005.002l-.007.003a.8.8 0 0 0-.163.122c-.187.17-.415.44-.786.885L7.576 14.48a.75.75 0 0 1-1.152-.96l1.829-2.195c.328-.394.624-.75.9-1c.302-.27.68-.513 1.18-.513s.879.242 1.18.514c.276.25.572.605.901 1l.292.35c.371.445.599.716.787.885c.086.078.138.11.163.122l.003.001l.008.004l.01-.005a.8.8 0 0 0 .164-.122c.187-.17.415-.44.786-.885l1.797-2.156a.75.75 0 0 1 1.056-.096" clip-rule="evenodd"></svg:path>`,
})
export class SolarGraphNewBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewUpBoldIcon],svg[solar-graph-new-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c1.399 0 2.59 0 3.612.038a4.5 4.5 0 0 0 6.35 6.35C22 9.41 22 10.601 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2m2.5 8.75a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.013 2.013a1.75 1.75 0 0 1-2.474 0l-1.586-1.586a.25.25 0 0 0-.354 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.293-2.293a1.75 1.75 0 0 1 2.474 0l1.586 1.586a.25.25 0 0 0 .354 0l2.012-2.013z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGraphNewUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphUpBoldIcon],svg[solar-graph-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M13.75 10c0 .414.336.75.75.75h.69l-2.013 2.013a.25.25 0 0 1-.354 0l-1.586-1.586a1.75 1.75 0 0 0-2.474 0L6.47 13.47a.75.75 0 1 0 1.06 1.06l2.293-2.293a.25.25 0 0 1 .354 0l1.586 1.586a1.75 1.75 0 0 0 2.474 0l2.013-2.012v.689a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarGraphUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHamburgerMenuBoldIcon],svg[solar-hamburger-menu-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M18.75 16a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75M18 12.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5zM18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHamburgerMenuBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandHeartBoldIcon],svg[solar-hand-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4.83c0 1.547 1.726 3.178 3.15 4.26c.799.606 1.198.91 1.85.91s1.051-.304 1.85-.91C15.274 8.007 17 6.376 17 4.83c0-2.79-2.75-3.833-5-1.677C9.75.997 7 2.039 7 4.829m-.74 16.559H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308"></svg:path>`,
})
export class SolarHandHeartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandMoneyBoldIcon],svg[solar-hand-money-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308m.326-18.803c-.367.367-.504.873-.555 1.664A2.25 2.25 0 0 0 8.25 2.03c-.79.052-1.297.189-1.664.556m10.828 0c-.367-.367-.873-.504-1.664-.555a2.25 2.25 0 0 0 2.22 2.219c-.052-.79-.189-1.297-.556-1.664m0 6.828c-.367.367-.873.504-1.664.555a2.25 2.25 0 0 1 2.22-2.219c-.052.79-.189 1.297-.556 1.664m-10.828 0c.367.367.873.504 1.664.555A2.25 2.25 0 0 0 6.03 7.75c.052.79.189 1.297.556 1.664"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 5.75A3.75 3.75 0 0 0 9.75 2h4.5A3.75 3.75 0 0 0 18 5.75v.5A3.75 3.75 0 0 0 14.25 10h-4.5A3.75 3.75 0 0 0 6 6.25zM12 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarHandMoneyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandPillsBoldIcon],svg[solar-hand-pills-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308m5.1-12.185a2.719 2.719 0 0 0 3.844-3.845l-.724-.723c-.3.605-.803 1.394-1.626 2.218c-.824.823-1.613 1.326-2.218 1.626zm1.28-6.408a2.719 2.719 0 0 0-3.844 3.845l1.086 1.086q.114-.048.245-.11c.523-.253 1.248-.7 2.02-1.47c.77-.772 1.217-1.497 1.47-2.02a6 6 0 0 0 .11-.245z"></svg:path>`,
})
export class SolarHandPillsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandShakeBoldIcon],svg[solar-hand-shake-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.414 17.859a.75.75 0 0 1 1.025.27c.827 1.418 2.091 2.49 3.65 3.186a.75.75 0 0 1-.611 1.37c-1.812-.809-3.331-2.08-4.334-3.8a.75.75 0 0 1 .27-1.026M18.906 3.922c-1.014-1.036-2.46-1.417-3.876-1.015a.75.75 0 0 1-.41-1.442c1.938-.552 3.955-.025 5.358 1.408a.75.75 0 0 1-1.072 1.049m-7.716-.614c-.214-.367-.838-.59-1.471-.227c-.632.36-.743.997-.532 1.357l2.525 4.332a.75.75 0 0 1-1.296.755L7.05 3.75c-.214-.367-.838-.59-1.472-.227c-.631.36-.742.997-.532 1.357l3.789 6.497a.75.75 0 1 1-1.296.756L5.854 9.245c-.214-.367-.838-.59-1.471-.227c-.632.36-.743.996-.532 1.357l3.788 6.497c1.609 2.759 5.58 3.654 8.946 1.73s4.561-5.764 2.956-8.517l-2.526-4.331c-.214-.367-.838-.59-1.471-.228c-.632.361-.743.997-.532 1.358l1.683 2.887a.75.75 0 0 1-.275 1.03c-1.543.88-2.016 2.585-1.34 3.743a.75.75 0 1 1-1.296.756c-.913-1.565-.544-3.45.635-4.782c.33-.372.442-.914.192-1.344z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHandShakeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandStarsBoldIcon],svg[solar-hand-stars-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308m4.601-18.026C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473s.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71s-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472s-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803s-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404s-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584s-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553s.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18s.184-.214.328-.473zm8.569 4.319c.254-.455.38-.682.57-.682s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.796.356s-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776s.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237zm-16 0C3.685 7.227 3.81 7 4 7s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.797.356c.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776c.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237z"></svg:path>`,
})
export class SolarHandStarsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHanger2BoldIcon],svg[solar-hanger-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.286 3.91c0-.568.538-1.16 1.374-1.16s1.374.592 1.374 1.16c0 .311-.112.581-.294.78a11 11 0 0 1-.38.385l-.08.08a9 9 0 0 0-.529.558c-.265.312-.553.723-.658 1.23a4.3 4.3 0 0 0-1.774.722l-7.095 4.992c-.927.652-1.166 1.702-.828 2.582c.332.866 1.194 1.511 2.306 1.511H6.01C6 17.113 6 17.527 6 18c0 1.886 0 2.828.587 3.414C7.17 22 8.114 22 10 22h4c1.885 0 2.828 0 3.414-.586S18 19.886 18 18c0-.473 0-.887-.01-1.25h2.307c1.125 0 1.99-.657 2.316-1.533c.33-.891.073-1.948-.877-2.588l-7.433-5.01a4.3 4.3 0 0 0-1.614-.66q.075-.121.205-.274c.126-.149.274-.298.44-.464l.075-.072c.14-.14.295-.292.435-.445c.443-.48.69-1.115.69-1.795c0-1.542-1.364-2.659-2.874-2.659S8.786 2.367 8.786 3.91a.75.75 0 0 0 1.5 0m7.521 11.34h2.49c.509 0 .806-.277.91-.555c.097-.264.047-.582-.31-.822l-7.432-5.01a2.9 2.9 0 0 0-1.655-.483a2.9 2.9 0 0 0-1.628.512l-7.095 4.991c-.346.243-.391.558-.29.819c.105.275.403.548.905.548h2.49c.087-.267.212-.483.394-.664C7.17 14 8.114 14 10 14h4c1.885 0 2.828 0 3.414.586c.181.181.307.397.393.664" clip-rule="evenodd"></svg:path>`,
})
export class SolarHanger2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHangerBoldIcon],svg[solar-hanger-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.66 5.75c-.836 0-1.374.592-1.374 1.16a.75.75 0 0 1-1.5 0c0-1.543 1.364-2.66 2.874-2.66s2.874 1.117 2.874 2.66c0 .68-.248 1.314-.69 1.794c-.14.153-.294.305-.435.445l-.074.072a8 8 0 0 0-.441.464a2.4 2.4 0 0 0-.205.274a4.3 4.3 0 0 1 1.614.66l7.433 5.01c.95.64 1.207 1.697.877 2.588c-.325.876-1.191 1.533-2.316 1.533H3.702c-1.112 0-1.974-.645-2.306-1.51c-.338-.88-.1-1.931.828-2.583l7.095-4.992a4.3 4.3 0 0 1 1.774-.722c.105-.507.393-.918.658-1.23c.172-.202.36-.391.529-.558l.08-.08c.143-.14.267-.263.38-.386c.182-.198.294-.468.294-.78c0-.567-.538-1.159-1.374-1.159m1.805 6.112a2.9 2.9 0 0 0-1.655-.482a2.9 2.9 0 0 0-1.628.512l-7.095 4.991c-.346.243-.391.558-.29.819c.105.275.403.548.905.548h16.595c.509 0 .806-.277.91-.555c.097-.264.047-.582-.31-.822z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHangerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagBoldIcon],svg[solar-hashtag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.723 3.2a.75.75 0 1 0-1.446-.4L7.763 8.25H4a.75.75 0 1 0 0 1.5h3.347l-1.528 5.5H2a.75.75 0 0 0 0 1.5h3.402L4.277 20.8a.75.75 0 0 0 1.446.4l1.236-4.45h7.443l-1.125 4.05a.75.75 0 0 0 1.446.4l1.236-4.45H20a.75.75 0 1 0 0-1.5h-3.624l1.527-5.5H22a.75.75 0 0 0 0-1.5h-3.68l1.403-5.05a.75.75 0 1 0-1.446-.4l-1.514 5.45H9.32zm4.096 12.05l1.528-5.5H8.903l-1.527 5.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHashtagBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagChatBoldIcon],svg[solar-hashtag-chat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.814 21.236l-.27.458a.635.635 0 0 1-1.087 0l-.271-.458c-.21-.355-.316-.533-.485-.631s-.381-.102-.806-.11c-.628-.01-1.022-.049-1.352-.185a2.5 2.5 0 0 1-1.353-1.353c-.19-.46-.19-1.042-.19-2.207v-.5c0-1.637 0-2.455.368-3.056a2.5 2.5 0 0 1 .826-.826c.6-.368 1.42-.368 3.056-.368h1.5c1.637 0 2.455 0 3.056.368a2.5 2.5 0 0 1 .826.826c.368.6.368 1.42.368 3.056v.5c0 1.165 0 1.747-.19 2.207a2.5 2.5 0 0 1-1.353 1.353c-.33.136-.724.175-1.352.186c-.425.007-.638.01-.806.109c-.17.098-.274.276-.485.63"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.2 2.277a.75.75 0 0 1 .523.924L9.32 8.25h7.443l1.514-5.45a.75.75 0 1 1 1.446.4L18.32 8.25H22a.75.75 0 0 1 0 1.5h-4.098a.75.75 0 0 1-1.415 0H8.903l-1.527 5.5H9a.75.75 0 0 1 0 1.5H6.959L5.723 21.2a.75.75 0 0 1-1.446-.4l1.125-4.05H2a.75.75 0 1 1 0-1.5h3.819l1.528-5.5H4a.75.75 0 0 1 0-1.5h3.763L9.277 2.8a.75.75 0 0 1 .924-.523" clip-rule="evenodd"></svg:path>`,
})
export class SolarHashtagChatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagCircleBoldIcon],svg[solar-hashtag-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.092 10.75l-.75 2.5H9.908l.75-2.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-.784 4.282a.75.75 0 0 1 .502.934l-.61 2.034h3.434l.74-2.465a.75.75 0 0 1 1.436.43l-.61 2.035H18a.75.75 0 0 1 0 1.5h-2.342l-.75 2.5H17a.75.75 0 0 1 0 1.5h-2.542l-.74 2.465a.75.75 0 0 1-1.436-.43l.61-2.035H9.458l-.74 2.465a.75.75 0 1 1-1.436-.43l.61-2.035H6a.75.75 0 0 1 0-1.5h2.342l.75-2.5H7a.75.75 0 0 1 0-1.5h2.542l.74-2.465a.75.75 0 0 1 .934-.503" clip-rule="evenodd"></svg:path>`,
})
export class SolarHashtagCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagSquareBoldIcon],svg[solar-hashtag-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.092 10.75l-.75 2.5H9.908l.75-2.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m7.752 2.818a.75.75 0 0 1 .502.934l-.61 2.034h3.434l.74-2.465a.75.75 0 0 1 1.436.43l-.61 2.035H18a.75.75 0 0 1 0 1.5h-2.342l-.75 2.5H17a.75.75 0 0 1 0 1.5h-2.542l-.74 2.465a.75.75 0 0 1-1.436-.43l.61-2.035H9.458l-.74 2.465a.75.75 0 1 1-1.436-.43l.61-2.035H6a.75.75 0 0 1 0-1.5h2.342l.75-2.5H7a.75.75 0 0 1 0-1.5h2.542l.74-2.465a.75.75 0 0 1 .934-.503" clip-rule="evenodd"></svg:path>`,
})
export class SolarHashtagSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundBoldIcon],svg[solar-headphones-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.124C2 6.533 6.477 2 12 2s10 4.533 10 10.124v5.243c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.458.22-1.004.307-1.801.434l-.13.02a13 13 0 0 1-.727.105c-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35a2.2 2.2 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.1 2.1 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007l.11.01c.783.062 1.32.104 1.775.275q.481.181.883.487v-1.174c0-4.811-3.853-8.711-8.605-8.711s-8.605 3.9-8.605 8.711v1.174c.267-.203.563-.368.883-.487c.455-.17.992-.213 1.775-.276l.11-.009l.093-.007c.42-.034.78-.063 1.096.01a2.1 2.1 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743c-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35a2.2 2.2 0 0 1-.641.017c-.201-.02-.444-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188c-.118-.405-.139-.857-.142-1.461L2 17.58z"></svg:path>`,
})
export class SolarHeadphonesRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundSoundBoldIcon],svg[solar-headphones-round-sound-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.124C2 6.533 6.477 2 12 2s10 4.533 10 10.124v5.243c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.458.22-1.004.307-1.801.434l-.13.02a13 13 0 0 1-.727.105c-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35a2.2 2.2 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.1 2.1 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007l.11.01c.783.062 1.32.104 1.775.275q.481.181.883.487v-1.174c0-4.811-3.853-8.711-8.605-8.711s-8.605 3.9-8.605 8.711v1.174c.267-.203.563-.368.883-.487c.455-.17.992-.213 1.775-.276l.11-.009l.093-.007c.42-.034.78-.063 1.096.01a2.1 2.1 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743c-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35a2.2 2.2 0 0 1-.641.017c-.201-.02-.444-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188c-.118-.405-.139-.857-.142-1.461L2 17.58z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.75a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75m3 1.5a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V8a.75.75 0 0 1 .75-.75m-6 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 9 7.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeadphonesRoundSoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareBoldIcon],svg[solar-headphones-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.053 2c2.148 0 3.83 0 5.143.179c1.345.183 2.405.564 3.237 1.407s1.21 1.916 1.39 3.277C22 8.193 22 9.896 22 12.07v5.297c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.457.22-1.004.307-1.801.434l-.13.02c-.284.046-.526.085-.727.105c-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35a2.2 2.2 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.1 2.1 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007l.11.01c.783.062 1.32.104 1.775.275q.481.181.883.487v-1.174c0-2.24-.002-3.848-.165-5.073c-.16-1.204-.463-1.93-.993-2.466S18.2 3.741 17.01 3.579c-1.21-.165-2.799-.166-5.011-.166s-3.801.001-5.01.166c-1.19.162-1.907.47-2.437 1.006S3.72 5.847 3.56 7.051c-.162 1.225-.164 2.833-.164 5.073v1.174c.267-.203.563-.368.883-.487c.456-.17.992-.213 1.775-.276l.11-.009l.093-.007c.42-.034.78-.063 1.096.01a2.1 2.1 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743c-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35a2.2 2.2 0 0 1-.641.017c-.201-.02-.443-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188C2 18.745 2 18.184 2 17.367V12.07c0-2.174 0-3.878.177-5.207c.18-1.36.557-2.434 1.39-3.277S5.46 2.362 6.803 2.18C8.116 2 9.8 2 11.947 2z"></svg:path>`,
})
export class SolarHeadphonesSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareSoundBoldIcon],svg[solar-headphones-square-sound-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.053 2c2.148 0 3.83 0 5.143.179c1.345.183 2.405.564 3.237 1.407s1.21 1.916 1.39 3.277C22 8.193 22 9.896 22 12.07v5.297c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.457.22-1.004.307-1.801.434l-.13.02c-.284.046-.526.085-.727.105c-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35a2.2 2.2 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.1 2.1 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007l.11.01c.783.062 1.32.104 1.775.275q.481.181.883.487v-1.174c0-2.24-.002-3.848-.165-5.073c-.16-1.204-.463-1.93-.993-2.466S18.2 3.741 17.01 3.579c-1.21-.165-2.799-.166-5.011-.166s-3.801.001-5.01.166c-1.19.162-1.907.47-2.437 1.006S3.72 5.847 3.56 7.051c-.162 1.225-.164 2.833-.164 5.073v1.174c.267-.203.563-.368.883-.487c.456-.17.992-.213 1.775-.276l.11-.009l.093-.007c.42-.034.78-.063 1.096.01a2.1 2.1 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743c-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35a2.2 2.2 0 0 1-.641.017c-.201-.02-.443-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188C2 18.745 2 18.184 2 17.367V12.07c0-2.174 0-3.878.177-5.207c.18-1.36.557-2.434 1.39-3.277S5.46 2.362 6.803 2.18C8.116 2 9.8 2 11.947 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m3 1.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m-6 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 9 7.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeadphonesSquareSoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHealthBoldIcon],svg[solar-health-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.962 18.469C6.019 16.214 2 12.489 2 8.967C2 3.083 7.5.886 12 5.43C16.5.886 22 3.083 22 8.967c0 3.522-4.02 7.247-6.962 9.502C13.706 19.489 13.04 20 12 20s-1.706-.51-3.038-1.531M16.5 6.25a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25V11a.75.75 0 0 1-1.5 0V9.75H14.5a.75.75 0 0 1 0-1.5h1.25V7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHealthBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartAngleBoldIcon],svg[solar-heart-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l2 1.998a.75.75 0 0 0 1.06-1.06l-1.93-1.933C17.369 1.403 22 4.675 22 9.137c0 4.405-3.298 6.946-6.106 9.11q-.44.337-.856.664C14 19.729 13 20.5 12 20.5s-2-.77-3.038-1.59q-.417-.326-.856-.663"></svg:path>`,
})
export class SolarHeartAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartBoldIcon],svg[solar-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137"></svg:path>`,
})
export class SolarHeartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartBrokenBoldIcon],svg[solar-heart-broken-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137c0-4.6 4.923-7.935 9.264-4.323L9.81 8.204a.75.75 0 0 0 .253.906l2.833 2.024l-2.466 2.878a.75.75 0 0 0 .039 1.018l1.7 1.7l-.91 3.64c-.756-.253-1.516-.843-2.298-1.46q-.417-.326-.856-.663"></svg:path><svg:path fill="currentColor" d="M12.812 20.345c.732-.265 1.469-.837 2.226-1.434q.417-.328.856-.664C18.702 16.083 22 13.542 22 9.137c0-4.515-4.741-7.81-9.02-4.518l-1.553 3.622l3.009 2.149a.75.75 0 0 1 .133 1.098l-2.548 2.973l1.51 1.509a.75.75 0 0 1 .197.712z"></svg:path>`,
})
export class SolarHeartBrokenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartLockBoldIcon],svg[solar-heart-lock-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 7.29V7c0-1.809.546-3.275 1.602-4.285C8.902 1.711 10.358 1.25 12 1.25s3.098.461 4.148 1.465C17.204 3.725 17.75 5.191 17.75 7v.29C19.634 7.986 21 9.872 21 12.1c0 3.838-2.968 6.052-5.496 7.937q-.394.294-.77.578C13.8 21.328 12.9 22 12 22s-1.8-.672-2.734-1.385a87 87 0 0 0-.77-.578C5.968 18.152 3 15.937 3 12.099c0-2.226 1.366-4.112 3.25-4.81M7.75 7c0-1.505.447-2.539 1.139-3.2c.697-.668 1.74-1.05 3.111-1.05c1.37 0 2.414.382 3.111 1.05c.692.661 1.139 1.695 1.139 3.2v.001c-1.365-.032-2.86.532-4.25 1.93C10.61 7.533 9.115 6.969 7.75 7M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeartLockBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulse2BoldIcon],svg[solar-heart-pulse-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.346 11.25A6.3 6.3 0 0 1 2 9.26C2 3.35 7.5.663 12 5.5C16.5.663 22 3.349 22 9.26a6.3 6.3 0 0 1-.346 1.99h-3.13c-.546 0-1.03-.002-1.471.195c-.441.196-.765.557-1.13.963l-.075.084l-1.029 1.143q-.113.127-.194.214l-.185-.221l-3.551-4.305c-.14-.17-.289-.35-.435-.485a1.24 1.24 0 0 0-.773-.353a1.24 1.24 0 0 0-.81.258c-.16.116-.33.278-.49.43l-1.53 1.456c-.471.45-.57.526-.672.567c-.103.042-.228.054-.879.054z"></svg:path><svg:path fill="currentColor" d="M3.004 12.75c1.381 2.562 3.926 4.964 5.958 6.62C10.294 20.458 10.96 21 12 21s1.706-.543 3.038-1.63c2.032-1.656 4.577-4.058 5.958-6.62h-2.36c-.724 0-.861.015-.973.065s-.215.142-.7.68l-1.054 1.172a5 5 0 0 1-.486.496c-.185.155-.46.33-.833.321c-.373-.008-.641-.194-.82-.357a5 5 0 0 1-.463-.515l-3.552-4.306l-.171-.205q-.081.074-.194.183l-1.577 1.501c-.356.34-.671.642-1.077.804s-.843.162-1.335.161z"></svg:path>`,
})
export class SolarHeartPulse2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulseBoldIcon],svg[solar-heart-pulse-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.962 19.37C6.019 16.972 2 13.009 2 9.26C2 3.35 7.5.663 12 5.5C16.5.663 22 3.349 22 9.26c0 3.748-4.02 7.711-6.962 10.11C13.706 20.458 13.04 21 12 21s-1.706-.543-3.038-1.63m1.131-8.624q.133-.19.23-.325c.056.098.119.211.194.348l1.71 3.11c.166.302.33.598.493.813c.175.23.482.545.975.555c.493.009.813-.295.996-.518c.172-.209.345-.498.523-.794l.055-.093c.221-.367.36-.598.483-.764c.113-.153.179-.203.228-.23c.049-.028.125-.059.315-.077c.206-.02.474-.02.904-.02H18a.75.75 0 0 0 0-1.5h-.834c-.387 0-.73 0-1.016.027a2.2 2.2 0 0 0-.91.264a2.2 2.2 0 0 0-.694.644c-.171.231-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377l-1.709-3.108c-.154-.28-.307-.56-.463-.765c-.17-.223-.462-.52-.93-.544c-.467-.026-.789.237-.982.441c-.177.187-.36.448-.543.71l-.31.442c-.227.325-.37.527-.493.673c-.113.134-.176.178-.223.202c-.046.025-.118.051-.293.067c-.19.017-.438.018-.834.018H6a.75.75 0 0 0 0 1.5h.768c.357 0 .674 0 .94-.024c.29-.027.571-.085.85-.23c.28-.146.489-.343.676-.565c.173-.204.354-.463.559-.756z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeartPulseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartShineBoldIcon],svg[solar-heart-shine-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M5.47 5.47a.75.75 0 0 1 1.06 0l.344.343a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 0-1.06m13.06 0a.75.75 0 0 1 0 1.06l-.343.344a.75.75 0 0 1-1.06-1.061l.343-.343a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M6.873 17.127a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0m10.254 0a.75.75 0 0 1 1.06 0l.343.343a.75.75 0 1 1-1.06 1.06l-.343-.343a.75.75 0 0 1 0-1.06M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7 11.06c0 2.542 2.01 3.897 3.48 5.11c.52.427 1.02.83 1.52.83s1-.403 1.52-.83c1.47-1.213 3.48-2.568 3.48-5.11s-2.75-4.346-5-1.902c-2.25-2.444-5-.64-5 1.902"></svg:path>`,
})
export class SolarHeartShineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartUnlockBoldIcon],svg[solar-heart-unlock-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75 7c0-1.51.438-2.547 1.11-3.208c.676-.663 1.685-1.042 3.012-1.042c1.667 0 2.84.594 3.49 1.644a.75.75 0 1 0 1.276-.788c-.993-1.607-2.73-2.356-4.766-2.356c-1.609 0-3.036.464-4.062 1.472C6.78 3.733 6.25 5.197 6.25 7v.29C4.366 7.986 3 9.872 3 12.1c0 3.838 2.968 6.052 5.496 7.937q.394.294.77.578C10.2 21.328 11.1 22 12 22s1.8-.672 2.734-1.385q.376-.285.77-.578c2.528-1.885 5.496-4.1 5.496-7.938c0-4.237-4.95-7.242-9-3.168C10.61 7.533 9.115 6.969 7.75 7M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeartUnlockBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartsBoldIcon],svg[solar-hearts-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 13.287c-2.475-2.716-5.5-.712-5.5 2.112c0 2.56 1.814 4.035 3.358 5.292l.044.036l.427.35c.571.475 1.121.923 1.671.923s1.1-.448 1.671-.923C19.789 19.73 22 18.224 22 15.399c0-.927-.326-1.767-.853-2.38c-1.075-1.251-2.985-1.556-4.647.268"></svg:path><svg:path fill="currentColor" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501C16.5.825 22 4.274 22 9.137c0 .834-.118 1.6-.329 2.31a4.2 4.2 0 0 0-2.619-.947c-.89-.005-1.758.274-2.553.81c-1.39-.933-2.956-1.058-4.33-.395c-1.635.79-2.669 2.556-2.669 4.484c0 2.306 1.149 3.923 2.342 5.095c-.948-.076-1.897-.808-2.88-1.583q-.417-.328-.856-.664"></svg:path>`,
})
export class SolarHeartsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHelpBoldIcon],svg[solar-help-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.582 18.52A9.96 9.96 0 0 0 22 12a9.96 9.96 0 0 0-2.418-6.52l-4.273 4.272c.436.64.691 1.414.691 2.248s-.255 1.608-.691 2.248zm-1.062 1.062A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.52-2.418l4.272-4.273c.64.436 1.414.691 2.248.691s1.608-.255 2.248-.691zM4.418 18.52l4.273-4.272A4 4 0 0 1 8 12c0-.834.255-1.607.691-2.248L4.418 5.479A9.96 9.96 0 0 0 2 12a9.96 9.96 0 0 0 2.418 6.52M12 8c-.834 0-1.607.255-2.248.691L5.479 4.418A9.96 9.96 0 0 1 12 2a9.96 9.96 0 0 1 6.52 2.418l-4.272 4.273A4 4 0 0 0 12 8"></svg:path>`,
})
export class SolarHelpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighDefinitionBoldIcon],svg[solar-high-definition-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m4.25-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.315V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25H6.25zm5.722.8c0-.98.903-1.55 1.713-1.55c2.937 0 5.565 2.002 5.565 4.75s-2.628 4.75-5.565 4.75c-.81 0-1.713-.57-1.713-1.55zm1.5.022l.011-.01a.32.32 0 0 1 .202-.062c2.381 0 4.065 1.58 4.065 3.25s-1.684 3.25-4.065 3.25a.32.32 0 0 1-.213-.072z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHighDefinitionBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighQualityBoldIcon],svg[solar-high-quality-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m4.75-4a.75.75 0 0 0-1.5 0v7.619a.75.75 0 1 0 1.5 0V12.75h3.315v2.869a.75.75 0 1 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25H6.75zm9.297-.75h.128c.385 0 .665 0 .91.038c.973.153 1.879.782 2.124 1.756c.06.24.06.508.06.792v3.947c0 .284 0 .552-.06.792a2 2 0 0 1-.19.484l.446.353a.75.75 0 0 1-.93 1.176l-.64-.505c-.255.12-.53.204-.81.248c-.245.038-.525.038-.91.038h-.128c-.385 0-.664 0-.91-.038c-.972-.153-1.879-.781-2.124-1.756c-.06-.24-.06-.508-.06-.792V9.836c0-.284 0-.552.06-.792c.245-.974 1.152-1.603 2.124-1.756c.246-.038.525-.038.91-.038m1.719 6.817l-.227-.179a.75.75 0 0 0-1.105.98l-.323.001c-.476 0-.627-.002-.74-.02c-.556-.088-.844-.405-.903-.64c-.009-.034-.014-.096-.014-.495v-3.81c0-.398.005-.46.014-.495c.06-.234.347-.551.902-.639c.114-.018.265-.02.741-.02s.627.002.74.02c.556.088.844.405.903.64c.009.034.014.096.014.495v3.81c0 .171 0 .28-.002.352" clip-rule="evenodd"></svg:path>`,
})
export class SolarHighQualityBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingBoldIcon],svg[solar-hiking-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-9.899c-.485.405-.87.72-1.307.879a2.75 2.75 0 0 1-1.886 0c-.453-.165-.85-.497-1.36-.923l-.093-.077l-.081-.068a6 6 0 0 0-.47-.37a5.3 5.3 0 0 0-1.2-.587a8 8 0 0 0-.386-.09a1 1 0 0 0-.092-.014l-.019.008a.5.5 0 0 0-.191.143a.3.3 0 0 0-.012.048c-.01.053-.017.124-.031.27l-.162 1.623c-.094.934-.105 1.184-.04 1.393q.059.184.169.342c.125.18.33.324 1.126.822l.105.066c.796.496 1.347.84 1.745 1.335q.3.375.498.812c.261.579.318 1.226.401 2.16l.011.125l.172 1.935a.75.75 0 0 1-1.494.134l-.172-1.936c-.098-1.107-.142-1.483-.285-1.802a2.3 2.3 0 0 0-.3-.487c-.219-.273-.534-.481-1.476-1.07l-.112-.07c-.63-.393-1.126-.702-1.45-1.165a2.8 2.8 0 0 1-.369-.754c-.169-.539-.11-1.12-.035-1.859l.013-.13l.162-1.622l.005-.048c.022-.23.047-.485.17-.752c.135-.297.373-.53.594-.686s.52-.302.846-.33c.184-.016.356.008.505.036c.144.028.316.07.507.118l.026.006l.018.005l.029.008c.008.003.042.014.082.032l.02.009l.054.019a6.8 6.8 0 0 1 1.425.72c.205.144.342.258.561.44l.012.01l.082.069c.648.54.832.68 1.006.743c.277.1.58.1.858 0c.174-.064.358-.203 1.007-.743l.814-.68V8a.75.75 0 0 1 .75-.75m-6.63 3.697l.005-.003zm-.541-1.4h.002l.007-.003zm-3.117.216a.75.75 0 0 1-.475.948l-1.672.558a1.19 1.19 0 0 0-.815 1.13c0 .085.047.161.122.199l2.463 1.231a.75.75 0 1 1-.67 1.342L5.2 13.939a1.72 1.72 0 0 1-.951-1.54c0-1.158.742-2.187 1.84-2.553l1.673-.558a.75.75 0 0 1 .949.475m.704 7.113a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208" clip-rule="evenodd"></svg:path>`,
})
export class SolarHikingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
