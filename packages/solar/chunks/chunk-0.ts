import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solar4kBoldDuotoneIcon],svg[solar-4k-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.02 7.46a.75.75 0 0 1 .02 1.06l-2.666 2.773l2.757 4.302a.75.75 0 1 1-1.262.81l-2.564-4l-1.055 1.097V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 1.5 0v3.338l3.71-3.858a.75.75 0 0 1 1.06-.02M5.5 7.25a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h2.25V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25H7.5A2.75 2.75 0 0 1 4.75 10V8a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class Solar4kBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

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
  selector: 'svg[solar4kLineDuotoneIcon],svg[solar-4k-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M5.5 8v2a2 2 0 0 0 2 2h3m0-4v4m0 0v4m3-8v5.2m0 0V16m0-2.8l1.923-2m0 0L18.5 8m-3.077 3.2L18.5 16"></svg:path></svg:g>`,
})
export class Solar4kLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solar4kLinearIcon],svg[solar-4k-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M5.5 8v2a2 2 0 0 0 2 2h3m0-4v4m0 0v4m3-8v5.2m0 0V16m0-2.8l1.923-2m0 0L18.5 8m-3.077 3.2L18.5 16"></svg:path></svg:g>`,
})
export class Solar4kLinearIcon {
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
  selector: 'svg[solar4kOutlineIcon],svg[solar-4k-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"></svg:path><svg:path d="M19.02 7.46a.75.75 0 0 1 .02 1.06l-2.666 2.773l2.757 4.302a.75.75 0 1 1-1.262.81l-2.564-4l-1.055 1.097V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 1.5 0v3.338l3.71-3.858a.75.75 0 0 1 1.06-.02M5.5 7.25a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h2.25V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25H7.5A2.75 2.75 0 0 1 4.75 10V8a.75.75 0 0 1 .75-.75"></svg:path></svg:g>`,
})
export class Solar4kOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAccessibilityBoldDuotoneIcon],svg[solar-accessibility-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-5.707.31a.75.75 0 0 0-.586 1.38l.002.001l.002.001l.01.004l.032.014a15 15 0 0 0 .572.225c.38.145.914.338 1.527.53c.988.312 2.236.64 3.398.748v1.24c0 .43-.124.853-.357 1.216l-2.524 3.925a.75.75 0 0 0 1.262.812l2.37-3.686l2.368 3.686a.75.75 0 0 0 1.262-.812l-2.524-3.925a2.25 2.25 0 0 1-.357-1.217v-1.239c1.162-.108 2.41-.436 3.399-.748a28 28 0 0 0 2.098-.755l.033-.014l.01-.004l.002-.001a.75.75 0 0 0-.585-1.381l-.007.003l-.027.011l-.11.045q-.148.061-.42.164c-.36.137-.865.32-1.444.502c-1.178.37-2.588.715-3.699.715s-2.52-.345-3.698-.715a27 27 0 0 1-1.974-.711L6.3 9.313z"></svg:path>`,
})
export class SolarAccessibilityBoldDuotoneIcon {
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
  selector: 'svg[solarAccessibilityLineDuotoneIcon],svg[solar-accessibility-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path stroke-linecap="round" d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452a3 3 0 0 0 .476 1.623L15 19"></svg:path><svg:path stroke-linecap="round" d="M12 12v1.452a3 3 0 0 1-.476 1.623L9 19"></svg:path></svg:g>`,
})
export class SolarAccessibilityLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAccessibilityLinearIcon],svg[solar-accessibility-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path stroke-linecap="round" d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19"></svg:path></svg:g>`,
})
export class SolarAccessibilityLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAccessibilityOutlineIcon],svg[solar-accessibility-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 7a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0M12 5.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.31 9.707a.75.75 0 0 1 .983-.398l.001.001l.006.003l.027.011l.11.045q.149.061.42.164c.36.137.865.32 1.445.502c1.178.37 2.587.715 3.698.715s2.52-.345 3.698-.715a27 27 0 0 0 1.974-.711l.028-.011l.006-.003h.001a.75.75 0 0 1 .586 1.38l-.004.002l-.01.004l-.032.014l-.123.05a28 28 0 0 1-1.976.706c-.988.31-2.236.639-3.398.747v1.24c0 .43.124.853.357 1.216l2.524 3.925a.75.75 0 0 1-1.262.812L12 15.72l-2.37 3.686a.75.75 0 1 1-1.26-.812l2.523-3.925a2.25 2.25 0 0 0 .357-1.217v-1.239c-1.162-.108-2.41-.436-3.399-.747a28 28 0 0 1-2.098-.756l-.033-.014l-.009-.004l-.004-.001a.75.75 0 0 1-.397-.984"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarAccessibilityOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAccumulatorBoldIcon],svg[solar-accumulator-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarAccumulatorBold0"><svg:g fill="none"><svg:path fill="#fff" d="M22 14v-2.025c0-1.846 0-2.768-.392-3.458a3 3 0 0 0-1.125-1.125C19.793 7 18.871 7 17.025 7h-.28c-.123 0-.184 0-.24-.006a1 1 0 0 1-.725-.448a2 2 0 0 1-.113-.213c-.11-.22-.165-.33-.228-.425a2 2 0 0 0-1.447-.895C13.878 5 13.755 5 13.509 5h-3.018c-.246 0-.37 0-.482.013a2 2 0 0 0-1.448.895c-.063.095-.118.205-.228.425c-.055.11-.082.165-.113.213a1 1 0 0 1-.724.447C7.439 7 7.378 7 7.255 7h-.28c-1.846 0-2.768 0-3.458.392a3 3 0 0 0-1.125 1.125C2 9.207 2 10.129 2 11.975V14c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14"></svg:path><svg:path fill="#fff" d="M5.045 3.25c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04l.008.066c.034.299-.056.595-.197.86a.5.5 0 0 1-.443.27L6.93 6c-.885 0-1.614 0-2.207.053c-.616.055-1.18.174-1.7.47a4 4 0 0 0-.773.572v-1.14c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043zm14 0c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v1.14a4 4 0 0 0-.773-.572c-.52-.296-1.084-.415-1.7-.47C18.684 6 17.954 6 17.07 6l-.153-.001a.5.5 0 0 1-.437-.27c-.14-.265-.229-.56-.195-.858l.008-.068c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M16.5 11.25a.75.75 0 0 1 .75.75v.75H18a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H15a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 .75-.75M5.25 13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarAccumulatorBold0)"></svg:path>`,
})
export class SolarAccumulatorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAccumulatorBoldDuotoneIcon],svg[solar-accumulator-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11.975V14c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20H8c-2.828 0-4.243 0-5.121-.879C2 18.243 2 16.828 2 14v-2.025c0-1.846 0-2.768.392-3.458a3 3 0 0 1 1.125-1.125C4.207 7 5.129 7 6.975 7h.28c.123 0 .184 0 .24-.006a1 1 0 0 0 .725-.448c.03-.048.058-.103.113-.213c.11-.22.165-.33.228-.425a2 2 0 0 1 1.447-.895C10.123 5 10.246 5 10.492 5h3.018c.246 0 .37 0 .482.013a2 2 0 0 1 1.448.895c.063.095.118.205.228.425c.055.11.082.165.113.213a1 1 0 0 0 .724.447c.057.007.118.007.241.007h.28c1.846 0 2.768 0 3.458.392a3 3 0 0 1 1.125 1.125c.392.69.392 1.612.392 3.458" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.5 11.25a.75.75 0 0 1 .75.75v.75H18a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H15a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 .75-.75M5.25 13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.044 3.25c.433 0 .83 0 1.152.043c.356.048.732.16 1.04.47c.31.309.422.684.47 1.04c.043.323.043 2.72.043 3.152v.864a2 2 0 0 0-.141-.302a3 3 0 0 0-1.125-1.125C19.793 7 18.871 7 17.025 7h-.28c-.123 0-.184 0-.24-.006a1 1 0 0 1-.22-.051V4.87l.008-.068c.047-.356.16-.731.469-1.04s.685-.422 1.04-.47c.323-.043.72-.043 1.152-.043zm-14.054 0c-.433 0-.83 0-1.153.043c-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043 2.72-.043 3.152v.781q.048-.114.108-.219a3 3 0 0 1 1.125-1.125C4.207 7 5.13 7 6.975 7h.28c.123 0 .184 0 .241-.006a1 1 0 0 0 .253-.064V4.871l-.008-.068c-.048-.356-.16-.731-.47-1.04c-.308-.31-.684-.422-1.04-.47c-.322-.043-.72-.043-1.152-.043z"></svg:path>`,
})
export class SolarAccumulatorBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAccumulatorBrokenIcon],svg[solar-accumulator-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 20H8c-2.828 0-4.243 0-5.121-.879C2 18.243 2 16.828 2 14v-2.025c0-1.846 0-2.768.392-3.458a3 3 0 0 1 1.125-1.125C4.207 7 5.129 7 6.975 7h.28c.123 0 .184 0 .24-.006a1 1 0 0 0 .725-.448c.03-.048.058-.103.113-.213c.11-.22.165-.33.228-.425a2 2 0 0 1 1.447-.895C10.123 5 10.246 5 10.492 5h3.018c.246 0 .37 0 .482.013a2 2 0 0 1 1.448.895c.063.095.118.205.228.425c.055.11.082.165.113.213a1 1 0 0 0 .724.447c.057.007.118.007.241.007h.28c1.846 0 2.768 0 3.458.392a3 3 0 0 1 1.125 1.125c.392.69.392 1.612.392 3.458V14c0 2.828 0 4.243-.879 5.121S18.828 20 16 20h-2"></svg:path><svg:path d="M7 7V6c0-.943 0-1.414-.293-1.707S5.943 4 5 4M3 7.5V6m18 0v2m-4-1V6c0-.943 0-1.414.293-1.707S18.057 4 19 4M9 13.5H6m12 0h-1.5m0 0H15m1.5 0V12m0 1.5V15"></svg:path></svg:g>`,
})
export class SolarAccumulatorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAccumulatorLineDuotoneIcon],svg[solar-accumulator-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 14v-2.025c0-1.846 0-2.768-.392-3.458a3 3 0 0 0-1.125-1.125C19.793 7 18.871 7 17.025 7h-.28c-.123 0-.184 0-.24-.006a1 1 0 0 1-.725-.448a2 2 0 0 1-.113-.213c-.11-.22-.165-.33-.228-.425a2 2 0 0 0-1.447-.895C13.878 5 13.755 5 13.509 5h-3.018c-.246 0-.37 0-.482.013a2 2 0 0 0-1.448.895c-.063.095-.118.205-.228.425c-.055.11-.082.165-.113.213a1 1 0 0 1-.724.447C7.439 7 7.378 7 7.255 7h-.28c-1.846 0-2.768 0-3.458.392a3 3 0 0 0-1.125 1.125C2 9.207 2 10.129 2 11.975V14c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14Z"></svg:path><svg:path d="M7 7V6c0-.943 0-1.414-.293-1.707S5.943 4 5 4s-1.414 0-1.707.293S3 5.057 3 6v1.5M21 8V6c0-.943 0-1.414-.293-1.707S19.943 4 19 4s-1.414 0-1.707.293S17 5.057 17 6v1" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 13.5H6m12 0h-1.5m0 0H15m1.5 0V12m0 1.5V15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarAccumulatorLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAccumulatorLinearIcon],svg[solar-accumulator-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 14v-2.025c0-1.846 0-2.768-.392-3.458a3 3 0 0 0-1.125-1.125C19.793 7 18.871 7 17.025 7h-.28c-.123 0-.184 0-.24-.006a1 1 0 0 1-.725-.448a2 2 0 0 1-.113-.213c-.11-.22-.165-.33-.228-.425a2 2 0 0 0-1.447-.895C13.878 5 13.755 5 13.509 5h-3.018c-.246 0-.37 0-.482.013a2 2 0 0 0-1.448.895c-.063.095-.118.205-.228.425c-.055.11-.082.165-.113.213a1 1 0 0 1-.724.447C7.439 7 7.378 7 7.255 7h-.28c-1.846 0-2.768 0-3.458.392a3 3 0 0 0-1.125 1.125C2 9.207 2 10.129 2 11.975V14c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14Z"></svg:path><svg:path d="M7 7V6c0-.943 0-1.414-.293-1.707S5.943 4 5 4s-1.414 0-1.707.293S3 5.057 3 6v1.5M21 8V6c0-.943 0-1.414-.293-1.707S19.943 4 19 4s-1.414 0-1.707.293S17 5.057 17 6v1"></svg:path><svg:path stroke-linecap="round" d="M9 13.5H6m12 0h-1.5m0 0H15m1.5 0V12m0 1.5V15"></svg:path></svg:g>`,
})
export class SolarAccumulatorLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAccumulatorOutlineIcon],svg[solar-accumulator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.955 3.25h.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.039.29.043.64.043 1.02a2.75 2.75 0 0 1 2.173-1.556c.157-.017.32-.017.53-.017h3.093c.21 0 .374 0 .53.018a2.75 2.75 0 0 1 2.174 1.556c0-.382.004-.731.043-1.021c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043h.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152V7.45q.293.317.51.696c.27.477.384 1 .438 1.6c.052.58.052 1.3.052 2.194v2.115c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V11.94c0-.893 0-1.613.052-2.194c.054-.6.167-1.123.438-1.6a3.8 3.8 0 0 1 .51-.696V5.956c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043M3.75 6.482c.31-.095.64-.148.996-.18c.423-.038.92-.048 1.504-.051V6c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.7.7 0 0 0-.177.042l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997zM6.975 7.75c-.936 0-1.59 0-2.096.046c-.496.044-.778.127-.991.248a2.25 2.25 0 0 0-.844.844c-.12.213-.204.495-.248.991c-.045.507-.046 1.16-.046 2.096V14c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191v-2.025c0-.936 0-1.59-.046-2.096c-.044-.496-.127-.778-.248-.991l.397-.226l-.397.226a2 2 0 0 0-.094-.15a.75.75 0 0 1-.6-.6a2 2 0 0 0-.15-.094c-.212-.12-.495-.204-.991-.248c-.507-.045-1.16-.046-2.096-.046h-.304c-.098 0-.201 0-.302-.011a1.75 1.75 0 0 1-1.267-.783a3 3 0 0 1-.156-.287a4 4 0 0 0-.185-.352a1.25 1.25 0 0 0-.905-.559a4 4 0 0 0-.397-.008h-3.018c-.264 0-.336.001-.397.008a1.25 1.25 0 0 0-.905.56a4 4 0 0 0-.185.35l-.01.023c-.044.087-.09.18-.146.265a1.75 1.75 0 0 1-1.267.783c-.1.011-.204.011-.302.011zM17.75 6.251c.584.003 1.081.013 1.504.051c.357.032.687.085.996.18V6c0-.493-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.7.7 0 0 0-.177.042l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997zM16.5 11.25a.75.75 0 0 1 .75.75v.75H18a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H15a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 .75-.75M5.25 13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAccumulatorOutlineIcon {
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
  selector: 'svg[solarAddCircleBoldDuotoneIcon],svg[solar-add-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z"></svg:path>`,
})
export class SolarAddCircleBoldDuotoneIcon {
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
  selector: 'svg[solarAddCircleLineDuotoneIcon],svg[solar-add-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3"></svg:path></svg:g>`,
})
export class SolarAddCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddCircleLinearIcon],svg[solar-add-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3"></svg:path></svg:g>`,
})
export class SolarAddCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddCircleOutlineIcon],svg[solar-add-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarAddCircleOutlineIcon {
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
  selector: 'svg[solarAddFolderBoldDuotoneIcon],svg[solar-add-folder-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13.75v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225c-.855-.769-2.172-.769-4.804-.769h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352c-.488-.271-.896-.68-1.712-1.495l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903c-.186-.017-.38-.017-.766-.017c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.007C2 5.376 2 5.818 2 6.7v7.05c0 3.771 0 5.657 1.172 6.828S6.229 21.75 10 21.75h4c3.771 0 5.657 0 6.828-1.172S22 17.521 22 13.75" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 11a.75.75 0 0 1 .75.75V13H14a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0V14.5H10a.75.75 0 0 1 0-1.5h1.25v-1.25A.75.75 0 0 1 12 11"></svg:path>`,
})
export class SolarAddFolderBoldDuotoneIcon {
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
  selector: 'svg[solarAddFolderLineDuotoneIcon],svg[solar-add-folder-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 14h2m0 0h2m-2 0v2m0-2v-2" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarAddFolderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddFolderLinearIcon],svg[solar-add-folder-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 14h2m0 0h2m-2 0v2m0-2v-2"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarAddFolderLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddFolderOutlineIcon],svg[solar-add-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102c.841.106 1.556.332 2.144.86q.147.133.28.28c.529.588.754 1.303.86 2.144c.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m.09 1.5c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975c-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487c-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182c-.35-.1-.689-.24-1.008-.417c-.58-.324-1.058-.801-1.8-1.543l-.077-.078l-.55-.55a8 8 0 0 0-.503-.482a3.25 3.25 0 0 0-1.771-.734a8 8 0 0 0-.696-.014m5.05 8.5a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V12a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAddFolderOutlineIcon {
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
  selector: 'svg[solarAddSquareBoldDuotoneIcon],svg[solar-add-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 8.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarAddSquareBoldDuotoneIcon {
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
  selector: 'svg[solarAddSquareLineDuotoneIcon],svg[solar-add-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3"></svg:path></svg:g>`,
})
export class SolarAddSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddSquareLinearIcon],svg[solar-add-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3"></svg:path></svg:g>`,
})
export class SolarAddSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAddSquareOutlineIcon],svg[solar-add-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarAddSquareOutlineIcon {
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
  selector: 'svg[solarAdhesivePlaster2BoldDuotoneIcon],svg[solar-adhesive-plaster-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.416 12.765l-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65" opacity=".5"></svg:path><svg:path fill="currentColor" d="m19.885 12.234l.531.531q.27.271.494.566l-7.578 7.578a5.5 5.5 0 0 1-.567-.493l-.53-.531zM10.668 3.09q.297.224.567.494l.53.53l-7.65 7.651l-.53-.53q-.27-.27-.494-.567z"></svg:path><svg:circle cx="9.172" cy="12" r="1" fill="currentColor" transform="rotate(-45 9.172 12)"></svg:circle><svg:circle cx="12" cy="14.829" r="1" fill="currentColor" transform="rotate(-45 12 14.829)"></svg:circle><svg:circle cx="12" cy="9.171" r="1" fill="currentColor" transform="rotate(-45 12 9.171)"></svg:circle><svg:circle cx="14.828" cy="12" r="1" fill="currentColor" transform="rotate(-45 14.828 12)"></svg:circle>`,
})
export class SolarAdhesivePlaster2BoldDuotoneIcon {
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
  selector: 'svg[solarAdhesivePlaster2LineDuotoneIcon],svg[solar-adhesive-plaster-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20.416 12.765l-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.765 20.416l7.65-7.65m-9.18-9.182l-7.65 7.651" opacity=".5"></svg:path><svg:circle cx="9.172" cy="12" r="1" fill="currentColor" transform="rotate(-45 9.172 12)"></svg:circle><svg:circle cx="12" cy="14.829" r="1" fill="currentColor" transform="rotate(-45 12 14.829)"></svg:circle><svg:circle cx="12" cy="9.171" r="1" fill="currentColor" transform="rotate(-45 12 9.171)"></svg:circle><svg:circle cx="14.829" cy="12" r="1" fill="currentColor" transform="rotate(-45 14.829 12)"></svg:circle></svg:g>`,
})
export class SolarAdhesivePlaster2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlaster2LinearIcon],svg[solar-adhesive-plaster-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.765 20.416l-9.18-9.181m9.18 9.18a5.41 5.41 0 1 0 7.65-7.65m-7.65 7.65l7.65-7.65m0 0l-9.18-9.18m0 0a5.41 5.41 0 0 0-7.65 7.65m7.65-7.65l-7.65 7.65"></svg:path><svg:circle cx="9.172" cy="12" r="1" fill="currentColor" transform="rotate(-45 9.172 12)"></svg:circle><svg:circle cx="12" cy="14.829" r="1" fill="currentColor" transform="rotate(-45 12 14.829)"></svg:circle><svg:circle cx="12" cy="9.171" r="1" fill="currentColor" transform="rotate(-45 12 9.171)"></svg:circle><svg:circle cx="14.828" cy="12" r="1" fill="currentColor" transform="rotate(-45 14.828 12)"></svg:circle></svg:g>`,
})
export class SolarAdhesivePlaster2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlaster2OutlineIcon],svg[solar-adhesive-plaster-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.879 11.293a1 1 0 1 1-1.414 1.414a1 1 0 0 1 1.414-1.414m2.828 4.243a1 1 0 1 0-1.414-1.415a1 1 0 0 0 1.414 1.415m0-7.071a1 1 0 1 1-1.414 1.414a1 1 0 0 1 1.414-1.414m2.828 4.242a1 1 0 1 0-1.414-1.414a1 1 0 0 0 1.414 1.414"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.054 3.054a6.16 6.16 0 0 1 8.711 0l9.18 9.18a6.16 6.16 0 0 1-8.71 8.712l-9.18-9.18a6.16 6.16 0 0 1 0-8.712m7.078.573a4.66 4.66 0 0 0-6.505 6.505zm1.103 1.018l-6.59 6.59l8.12 8.12l6.59-6.59zm9.138 9.223l-6.505 6.505a4.66 4.66 0 0 0 6.505-6.505" clip-rule="evenodd"></svg:path>`,
})
export class SolarAdhesivePlaster2OutlineIcon {
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
  selector: 'svg[solarAdhesivePlasterBoldDuotoneIcon],svg[solar-adhesive-plaster-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.213 3.213a4.14 4.14 0 0 0 0 5.858L14.93 20.787a4.142 4.142 0 0 0 5.858-5.858L9.07 3.213a4.14 4.14 0 0 0-5.858 0m6.132 5.018A.788.788 0 1 0 8.23 9.345A.788.788 0 0 0 9.345 8.23m2.784.928a.787.787 0 1 0-1.114 1.114a.787.787 0 0 0 1.114-1.114m3.712 3.712a.788.788 0 1 1-1.114 1.114a.788.788 0 0 1 1.114-1.114m.929 3.899a.787.787 0 1 0-1.114-1.114a.787.787 0 0 0 1.114 1.114m-3.713-3.713a.787.787 0 1 0-1.113-1.114a.787.787 0 0 0 1.113 1.114m.928 1.67a.788.788 0 1 1-1.114 1.114a.788.788 0 0 1 1.114-1.113M9.16 11.016a.787.787 0 1 1 1.114 1.114a.787.787 0 0 1-1.114-1.114" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.787 9.071a4.142 4.142 0 0 0-5.858-5.858L12 6.143L17.858 12zM12 17.858L6.142 12l-2.929 2.929a4.142 4.142 0 0 0 5.858 5.858z" opacity=".5"></svg:path>`,
})
export class SolarAdhesivePlasterBoldDuotoneIcon {
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
  selector: 'svg[solarAdhesivePlasterLineDuotoneIcon],svg[solar-adhesive-plaster-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.213 9.071a4.142 4.142 0 0 1 5.858-5.858L20.787 14.93a4.142 4.142 0 0 1-5.858 5.858z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m12 17.858l-2.929 2.929a4.142 4.142 0 0 1-5.858-5.858L6.143 12zm0-11.716l2.929-2.929a4.142 4.142 0 0 1 5.858 5.858L17.857 12z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.841 12.871a.787.787 0 1 1-1.113 1.114a.787.787 0 0 1 1.113-1.114m-3.712-3.712a.788.788 0 1 0-1.114 1.114a.788.788 0 0 0 1.114-1.114m1.856 5.569a.788.788 0 1 1-1.114 1.113a.788.788 0 0 1 1.114-1.113m-3.712-3.713a.788.788 0 1 0-1.114 1.114a.788.788 0 0 0 1.114-1.114m6.497 4.641a.788.788 0 1 1-1.114 1.113a.788.788 0 0 1 1.114-1.113M9.345 8.23A.788.788 0 1 0 8.23 9.345a.788.788 0 0 0 1.114-1.113"></svg:path><svg:path fill="currentColor" d="M13.057 11.944a.787.787 0 1 1-1.113 1.113a.787.787 0 0 1 1.113-1.113" opacity=".5"></svg:path></svg:g>`,
})
export class SolarAdhesivePlasterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlasterLinearIcon],svg[solar-adhesive-plaster-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.213 9.071a4.142 4.142 0 0 1 5.858-5.858L20.787 14.93a4.142 4.142 0 0 1-5.858 5.858z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m12 17.858l-2.929 2.929a4.142 4.142 0 0 1-5.858-5.858L6.143 12zm0-11.716l2.929-2.929a4.142 4.142 0 0 1 5.858 5.858L17.857 12z"></svg:path><svg:path fill="currentColor" d="M15.841 12.871a.788.788 0 1 1-1.114 1.114a.788.788 0 0 1 1.114-1.114m-3.712-3.712a.787.787 0 1 0-1.114 1.114a.787.787 0 0 0 1.114-1.114m4.641 6.497a.787.787 0 1 1-1.114 1.114a.787.787 0 0 1 1.114-1.114M9.345 8.23A.788.788 0 1 0 8.23 9.346A.788.788 0 0 0 9.345 8.23m3.712 3.713a.787.787 0 1 1-1.113 1.114a.787.787 0 0 1 1.113-1.114m.928 2.785a.788.788 0 1 1-1.114 1.113a.788.788 0 0 1 1.114-1.113m-3.712-3.713a.787.787 0 1 0-1.114 1.114a.787.787 0 0 0 1.114-1.114"></svg:path></svg:g>`,
})
export class SolarAdhesivePlasterLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAdhesivePlasterOutlineIcon],svg[solar-adhesive-plaster-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.345 8.23A.788.788 0 1 0 8.23 9.346A.788.788 0 0 0 9.345 8.23m2.784.929a.787.787 0 1 0-1.114 1.114a.787.787 0 0 0 1.114-1.114m3.712 3.712a.788.788 0 1 1-1.114 1.114a.788.788 0 0 1 1.114-1.114m.929 3.899a.787.787 0 1 0-1.114-1.114a.787.787 0 0 0 1.114 1.114m-3.713-3.713a.787.787 0 1 0-1.113-1.114a.787.787 0 0 0 1.113 1.114m.928 1.671a.788.788 0 1 1-1.114 1.113a.788.788 0 0 1 1.114-1.113m-4.826-3.713a.787.787 0 1 1 1.114 1.114a.787.787 0 0 1-1.114-1.114"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.399 2.683A4.892 4.892 0 1 1 21.317 9.6L18.92 12l2.398 2.399a4.892 4.892 0 1 1-6.918 6.918L12 18.92l-2.399 2.398A4.892 4.892 0 0 1 2.683 14.4L5.08 12L2.683 9.601A4.892 4.892 0 0 1 9.6 2.683L12 5.08zm5.858 12.776a3.392 3.392 0 0 1-4.798 4.797L3.744 8.542A3.392 3.392 0 0 1 8.54 3.744zm0-6.918l-2.4 2.398l-4.796-4.797l2.398-2.398a3.392 3.392 0 1 1 4.797 4.797M3.743 15.459l2.398-2.398l4.797 4.797l-2.398 2.398a3.392 3.392 0 0 1-4.797-4.797" clip-rule="evenodd"></svg:path>`,
})
export class SolarAdhesivePlasterOutlineIcon {
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
  selector: 'svg[solarAirbudsBoldDuotoneIcon],svg[solar-airbuds-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.3V6.187c0-.174 0-.26-.004-.334c-.08-1.541-1.385-2.774-3.017-2.85C18.901 3 18.81 3 18.625 3c-.307 0-.46 0-.59.006c-2.72.126-4.895 2.18-5.029 4.749c-.006.122-.006.267-.006.558V18.75c0 1.243 1.067 2.25 2.382 2.25s2.383-1.007 2.383-2.25V12.3c0-.552.474-1 1.058-1c1.755 0 3.177-1.343 3.177-3m-20 0V6.187c0-.174 0-.26.004-.334c.08-1.541 1.385-2.774 3.017-2.85C5.098 3 5.19 3 5.375 3c.307 0 .46 0 .59.006c2.72.126 4.895 2.18 5.029 4.749c.006.122.006.267.006.558V18.75C11 19.993 9.933 21 8.618 21s-2.383-1.007-2.383-2.25V12.3c0-.552-.474-1-1.059-1C3.422 11.3 2 9.957 2 8.3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 17.25h4.765v1.5H13zm-2 0H6.235v1.5H11zm8.5-12a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75m-15 0a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class SolarAirbudsBoldDuotoneIcon {
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
  selector: 'svg[solarAirbudsCaseBoldDuotoneIcon],svg[solar-airbuds-case-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.002 9.75Q3 10.337 3 11v2c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2q0-.663-.002-1.25h-3.352a2.75 2.75 0 0 1-2.646 2H9a2.75 2.75 0 0 1-2.646-2z"></svg:path><svg:path fill="currentColor" d="M3.021 8.25h3.333A2.75 2.75 0 0 1 9 6.25h6c1.259 0 2.32.846 2.647 2h3.332c-.055-2.01-.248-3.245-.934-4.189a5 5 0 0 0-1.106-1.106C17.625 2 15.75 2 12 2s-5.624 0-6.939.955A5 5 0 0 0 3.955 4.06c-.686.944-.88 2.178-.934 4.189" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.75 9c0-.69.56-1.25 1.25-1.25h6a1.25 1.25 0 1 1 0 2.5H9c-.69 0-1.25-.56-1.25-1.25" opacity=".7"></svg:path>`,
})
export class SolarAirbudsCaseBoldDuotoneIcon {
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
  selector: 'svg[solarAirbudsCaseChargeBoldDuotoneIcon],svg[solar-airbuds-case-charge-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.955 4.061C3 5.375 3 7.251 3 11v2c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 2 15.749 2 12 2s-5.625 0-6.939.955A5 5 0 0 0 3.955 4.06" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm5.586 5.219a.75.75 0 0 0-1.172-.937l-2 2.5A.75.75 0 0 0 10 16.25h2.44l-1.026 1.282a.75.75 0 1 0 1.172.936l2-2.5A.75.75 0 0 0 14 14.75h-2.44z"></svg:path>`,
})
export class SolarAirbudsCaseChargeBoldDuotoneIcon {
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
  selector: 'svg[solarAirbudsCaseChargeLineDuotoneIcon],svg[solar-airbuds-case-charge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 18l2-2.5h-4l2-2.5"></svg:path><svg:path stroke-linecap="round" d="M7 9h10"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseChargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseChargeLinearIcon],svg[solar-airbuds-case-charge-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 18l2-2.5h-4l2-2.5"></svg:path><svg:path stroke-linecap="round" d="M7 9h10"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseChargeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseChargeOutlineIcon],svg[solar-airbuds-case-charge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.955 1.25h.09c1.837 0 3.276 0 4.419.124c1.165.126 2.11.388 2.916.974a5.8 5.8 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916c.124 1.143.124 2.582.124 4.419v2.09c0 1.837 0 3.276-.124 4.419c-.126 1.165-.388 2.11-.974 2.916a5.8 5.8 0 0 1-1.272 1.272c-.807.586-1.75.848-2.916.974c-1.143.124-2.582.124-4.419.124h-.09c-1.837 0-3.276 0-4.419-.124c-1.165-.126-2.11-.388-2.916-.974a5.8 5.8 0 0 1-1.272-1.272c-.586-.807-.848-1.75-.974-2.916c-.124-1.143-.124-2.582-.124-4.419v-2.09c0-1.837 0-3.276.124-4.419c.126-1.165.388-2.11.974-2.916A5.8 5.8 0 0 1 4.62 2.348c.807-.586 1.75-.848 2.916-.974c1.143-.124 2.582-.124 4.419-.124M7.698 2.865c-1.038.112-1.688.328-2.196.697a4.3 4.3 0 0 0-.94.94c-.37.508-.585 1.158-.697 2.196C3.751 7.75 3.75 9.108 3.75 11v2c0 1.892.001 3.25.115 4.302c.112 1.038.328 1.688.697 2.196c.262.36.58.678.94.94c.508.37 1.158.585 2.196.697c1.052.114 2.41.115 4.302.115s3.25-.001 4.302-.115c1.038-.113 1.688-.328 2.196-.697c.36-.262.678-.58.94-.94c.37-.508.585-1.158.697-2.196c.114-1.052.115-2.41.115-4.302v-2c0-1.892-.001-3.25-.115-4.302c-.113-1.038-.328-1.688-.697-2.196a4.3 4.3 0 0 0-.94-.94c-.508-.37-1.158-.585-2.196-.697c-1.052-.114-2.41-.115-4.302-.115s-3.25.001-4.302.115M6.25 9A.75.75 0 0 1 7 8.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 9m6.219 3.414a.75.75 0 0 1 .117 1.055L11.56 14.75H14a.75.75 0 0 1 .586 1.219l-2 2.5a.75.75 0 1 1-1.172-.937l1.026-1.282H10a.75.75 0 0 1-.586-1.218l2-2.5a.75.75 0 0 1 1.055-.118" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsCaseChargeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseLineDuotoneIcon],svg[solar-airbuds-case-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z"></svg:path><svg:path d="M7 9a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M21 9h-3.5M7 9H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseLinearIcon],svg[solar-airbuds-case-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z"></svg:path><svg:path d="M7 9a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2Zm14 0h-3.5M7 9H3"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseLinearIcon {
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
  selector: 'svg[solarAirbudsCaseMinimalisticBoldDuotoneIcon],svg[solar-airbuds-case-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarAirbudsCaseMinimalisticBoldDuotoneIcon {
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
  selector: 'svg[solarAirbudsCaseMinimalisticLineDuotoneIcon],svg[solar-airbuds-case-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M7 9h10"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseMinimalisticLinearIcon],svg[solar-airbuds-case-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z"></svg:path><svg:path stroke-linecap="round" d="M7 9h10"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseMinimalisticOutlineIcon],svg[solar-airbuds-case-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.955 1.25h.09c1.837 0 3.276 0 4.419.124c1.165.126 2.11.388 2.916.974a5.8 5.8 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916c.124 1.143.124 2.582.124 4.419v2.09c0 1.837 0 3.276-.124 4.419c-.126 1.165-.388 2.11-.974 2.916a5.8 5.8 0 0 1-1.272 1.272c-.807.586-1.75.848-2.916.974c-1.143.124-2.582.124-4.419.124h-.09c-1.837 0-3.276 0-4.419-.124c-1.165-.126-2.11-.388-2.916-.974a5.8 5.8 0 0 1-1.272-1.272c-.586-.807-.848-1.75-.974-2.916c-.124-1.143-.124-2.582-.124-4.419v-2.09c0-1.837 0-3.276.124-4.419c.126-1.165.388-2.11.974-2.916A5.8 5.8 0 0 1 4.62 2.348c.807-.586 1.75-.848 2.916-.974c1.143-.124 2.582-.124 4.419-.124M7.698 2.865c-1.038.112-1.688.328-2.196.697a4.3 4.3 0 0 0-.94.94c-.37.508-.585 1.158-.697 2.196C3.751 7.75 3.75 9.108 3.75 11v2c0 1.892.001 3.25.115 4.302c.112 1.038.328 1.688.697 2.196c.262.36.58.678.94.94c.508.37 1.158.585 2.196.697c1.052.114 2.41.115 4.302.115s3.25-.001 4.302-.115c1.038-.113 1.688-.328 2.196-.697c.36-.262.678-.58.94-.94c.37-.508.585-1.158.697-2.196c.114-1.052.115-2.41.115-4.302v-2c0-1.892-.001-3.25-.115-4.302c-.113-1.038-.328-1.688-.697-2.196a4.3 4.3 0 0 0-.94-.94c-.508-.37-1.158-.585-2.196-.697c-1.052-.114-2.41-.115-4.302-.115s-3.25.001-4.302.115M6.25 9A.75.75 0 0 1 7 8.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsCaseMinimalisticOutlineIcon {
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
  selector: 'svg[solarAirbudsCaseOpenBoldDuotoneIcon],svg[solar-airbuds-case-open-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.207 11.391C3 11.661 3 12.051 3 12.833V13c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-.167c0-.781 0-1.172-.207-1.442a1 1 0 0 0-.184-.184c-.27-.207-.66-.207-1.442-.207H16.75A2.75 2.75 0 0 1 14 13.75h-4A2.75 2.75 0 0 1 7.25 11H4.833c-.782 0-1.172 0-1.442.207q-.105.08-.184.184"></svg:path><svg:path fill="currentColor" d="M8.75 11c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25z"></svg:path><svg:path fill="currentColor" d="M14 13.75A2.75 2.75 0 0 0 16.75 11h-1.5c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 13.75zM3.5 4.625v1.316a2.47 2.47 0 0 0 2.47 2.471c.455 0 .824.369.824.824V11H10.5V6.375A4.375 4.375 0 0 0 6.125 2A2.625 2.625 0 0 0 3.5 4.625m17 0v1.316a2.47 2.47 0 0 1-2.47 2.471a.824.824 0 0 0-.824.824V11H13.5V6.375A4.375 4.375 0 0 1 17.875 2A2.625 2.625 0 0 1 20.5 4.625" opacity=".5"></svg:path>`,
})
export class SolarAirbudsCaseOpenBoldDuotoneIcon {
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
  selector: 'svg[solarAirbudsCaseOpenLineDuotoneIcon],svg[solar-airbuds-case-open-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 12.833c0-.781 0-1.172.207-1.442q.08-.105.184-.184C3.661 11 4.051 11 4.833 11h14.334c.781 0 1.172 0 1.442.207q.105.08.184.184c.207.27.207.66.207 1.442V13c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z"></svg:path><svg:path d="M3.5 5.941V4.625A2.625 2.625 0 0 1 6.125 2A4.375 4.375 0 0 1 10.5 6.375V11H6.794V9.236a.824.824 0 0 0-.823-.824A2.47 2.47 0 0 1 3.5 5.942Zm17 0V4.625A2.625 2.625 0 0 0 17.875 2A4.375 4.375 0 0 0 13.5 6.375V11h3.706V9.236c0-.455.369-.824.823-.824a2.47 2.47 0 0 0 2.471-2.47ZM8 11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseOpenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseOpenLinearIcon],svg[solar-airbuds-case-open-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 12.833c0-.781 0-1.172.207-1.442q.08-.105.184-.184C3.661 11 4.051 11 4.833 11h14.334c.781 0 1.172 0 1.442.207q.105.08.184.184c.207.27.207.66.207 1.442V13c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13zm.5-6.892V4.625A2.625 2.625 0 0 1 6.125 2A4.375 4.375 0 0 1 10.5 6.375V11H6.794V9.236a.824.824 0 0 0-.823-.824A2.47 2.47 0 0 1 3.5 5.942Zm17 0V4.625A2.625 2.625 0 0 0 17.875 2A4.375 4.375 0 0 0 13.5 6.375V11h3.706V9.236c0-.455.369-.824.823-.824a2.47 2.47 0 0 0 2.471-2.47Z"></svg:path><svg:path d="M8 11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseOpenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseOpenOutlineIcon],svg[solar-airbuds-case-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.125 2.75c-1.036 0-1.875.84-1.875 1.875v1.316c0 .95.77 1.721 1.72 1.721c.87 0 1.574.705 1.574 1.574v1.014H9.75V6.375A3.625 3.625 0 0 0 6.125 2.75m5.125 7.5V6.375A5.125 5.125 0 0 0 6.125 1.25A3.375 3.375 0 0 0 2.75 4.625v1.316a3.22 3.22 0 0 0 3.22 3.221c.041 0 .074.033.074.074v1.014H4.796c-.359 0-.688 0-.96.03c-.296.034-.614.111-.901.332q-.183.14-.323.323c-.22.287-.298.605-.331.901c-.031.272-.031.601-.031.96v.25c0 1.836 0 3.275.124 4.418c.126 1.165.388 2.11.974 2.916a5.8 5.8 0 0 0 1.272 1.272c.807.586 1.75.848 2.916.974c1.143.124 2.582.124 4.419.124h.09c1.837 0 3.276 0 4.419-.124c1.165-.126 2.11-.388 2.916-.974a5.8 5.8 0 0 0 1.272-1.272c.586-.807.848-1.75.974-2.916c.124-1.143.124-2.582.124-4.419v-.249c0-.359 0-.688-.03-.96c-.034-.296-.111-.614-.332-.901a1.8 1.8 0 0 0-.323-.323c-.287-.22-.605-.298-.901-.331c-.272-.031-.601-.031-.96-.031h-1.248V9.236c0-.041.033-.074.073-.074a3.22 3.22 0 0 0 3.221-3.22V4.624a3.375 3.375 0 0 0-3.375-3.375a5.125 5.125 0 0 0-5.125 5.125v3.875zM9 11.75c.228.304.591.5 1 .5h4c.409 0 .772-.196 1-.5zm7.647 0a2.75 2.75 0 0 1-2.647 2h-4a2.75 2.75 0 0 1-2.646-2h-2.52c-.409 0-.653.001-.83.021a.6.6 0 0 0-.158.032a.3.3 0 0 0-.043.043a.6.6 0 0 0-.032.158a9 9 0 0 0-.021.83V13c0 1.892.001 3.25.115 4.302c.112 1.038.328 1.688.697 2.196c.262.36.58.678.94.94c.508.37 1.158.585 2.196.697c1.052.114 2.41.115 4.302.115s3.25-.001 4.302-.115c1.038-.113 1.688-.328 2.196-.697c.36-.262.678-.58.94-.94c.37-.508.585-1.158.697-2.196c.114-1.052.115-2.41.115-4.302v-.167a9 9 0 0 0-.021-.829a.6.6 0 0 0-.032-.158a.3.3 0 0 0-.043-.043a.6.6 0 0 0-.158-.032a9 9 0 0 0-.83-.021zm-.191-1.5H14.25V6.375a3.625 3.625 0 0 1 3.625-3.625c1.035 0 1.875.84 1.875 1.875v1.316c0 .95-.77 1.721-1.72 1.721c-.87 0-1.574.705-1.574 1.574z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsCaseOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseOutlineIcon],svg[solar-airbuds-case-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.955 1.25h.09c1.837 0 3.276 0 4.419.124c1.165.126 2.11.388 2.916.974a5.8 5.8 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916c.124 1.143.124 2.582.124 4.419v2.09c0 1.837 0 3.276-.124 4.419c-.126 1.165-.388 2.11-.974 2.916a5.8 5.8 0 0 1-1.272 1.272c-.807.586-1.75.848-2.916.974c-1.143.124-2.582.124-4.419.124h-.09c-1.837 0-3.276 0-4.419-.124c-1.165-.126-2.11-.388-2.916-.974a5.8 5.8 0 0 1-1.272-1.272c-.586-.807-.848-1.75-.974-2.916c-.124-1.143-.124-2.582-.124-4.419v-2.09c0-1.837 0-3.276.124-4.419c.126-1.165.388-2.11.974-2.916A5.8 5.8 0 0 1 4.62 2.348c.807-.586 1.75-.848 2.916-.974c1.143-.124 2.582-.124 4.419-.124M7.698 2.865c-1.038.112-1.688.328-2.196.697a4.3 4.3 0 0 0-.94.94c-.37.508-.585 1.158-.697 2.196c-.05.454-.077.965-.093 1.552h2.582A2.75 2.75 0 0 1 9 6.25h6a2.75 2.75 0 0 1 2.646 2h2.582a20 20 0 0 0-.093-1.552c-.113-1.038-.328-1.688-.697-2.196a4.3 4.3 0 0 0-.94-.94c-.508-.37-1.158-.585-2.196-.697c-1.052-.114-2.41-.115-4.302-.115s-3.25.001-4.302.115m12.55 6.885h-2.602a2.75 2.75 0 0 1-2.646 2H9a2.75 2.75 0 0 1-2.646-2H3.752q-.002.584-.002 1.25v2c0 1.892.001 3.25.115 4.302c.112 1.038.328 1.688.697 2.196c.262.36.58.678.94.94c.508.37 1.158.585 2.196.697c1.052.114 2.41.115 4.302.115s3.25-.001 4.302-.115c1.038-.113 1.688-.328 2.196-.697c.36-.262.678-.58.94-.94c.37-.508.585-1.158.697-2.196c.114-1.052.115-2.41.115-4.302v-2q0-.666-.002-1.25M9 7.75a1.25 1.25 0 1 0 0 2.5h6a1.25 1.25 0 1 0 0-2.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsCaseOutlineIcon {
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
  selector: 'svg[solarAirbudsChargeBoldDuotoneIcon],svg[solar-airbuds-charge-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.416 15.876a.75.75 0 0 1 .208 1.04l-.223.334H19a.75.75 0 0 1 .624 1.166l-1 1.5a.75.75 0 1 1-1.248-.832l.223-.334H17a.75.75 0 0 1-.624-1.166l1-1.5a.75.75 0 0 1 1.04-.208"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 7.3V5.188c0-.175 0-.262-.004-.335c-.08-1.541-1.385-2.774-3.017-2.85C18.901 2 18.81 2 18.625 2c-.307 0-.46 0-.59.006c-2.72.126-4.895 2.18-5.029 4.749c-.006.122-.006.267-.006.558v8.393a5.5 5.5 0 0 1 4.765-3.201V11.3c0-.552.474-1 1.058-1c1.755 0 3.177-1.343 3.177-3M20.25 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 9.3V7.187c0-.174 0-.26.004-.334c.08-1.541 1.385-2.774 3.017-2.85C5.098 4 5.19 4 5.375 4c.307 0 .46 0 .59.006c2.72.126 4.895 2.18 5.029 4.749c.006.122.006.267.006.557V19.75C11 20.993 9.933 22 8.618 22s-2.383-1.007-2.383-2.25V13.3c0-.552-.474-1-1.059-1C3.422 12.3 2 10.957 2 9.3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 18.25H6.235v1.5H11zm-6.5-12a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class SolarAirbudsChargeBoldDuotoneIcon {
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
  selector: 'svg[solarAirbudsChargeLineDuotoneIcon],svg[solar-airbuds-charge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 11.5v-.2a1 1 0 0 1 1-1a3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5"></svg:path><svg:path d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0V9.313c0-.29 0-.436-.006-.558a5 5 0 0 0-4.749-4.749C5.623 4 5.478 4 5.187 4c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 6.926 2 7.013 2 7.188V9.3a3 3 0 0 0 3 3a1 1 0 0 1 1 1V19m4.5 0H6"></svg:path><svg:path stroke-linecap="round" d="M19.5 5v2.5M4.5 7v2.5" opacity=".5"></svg:path><svg:circle cx="18" cy="18" r="4" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 16.5L17 18h2l-1 1.5"></svg:path></svg:g>`,
})
export class SolarAirbudsChargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsChargeLinearIcon],svg[solar-airbuds-charge-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 11.5v-.2a1 1 0 0 1 1-1a3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5"></svg:path><svg:path d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0V9.313c0-.29 0-.436-.006-.558a5 5 0 0 0-4.749-4.749C5.623 4 5.478 4 5.187 4c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 6.926 2 7.013 2 7.188V9.3a3 3 0 0 0 3 3a1 1 0 0 1 1 1V19m4.5 0H6"></svg:path><svg:path stroke-linecap="round" d="M19.5 5v2.5M4.5 7v2.5"></svg:path><svg:circle cx="18" cy="18" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 16.5L17 18h2l-1 1.5"></svg:path></svg:g>`,
})
export class SolarAirbudsChargeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsChargeOutlineIcon],svg[solar-airbuds-charge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.11 2.753a7 7 0 0 0-.297-.003c-.3 0-.422 0-.521.005a4.25 4.25 0 0 0-4.037 4.036c-.005.1-.005.222-.005.521V13.5a.75.75 0 0 1-1.5 0V7.287c0-.266 0-.428.007-.57a5.75 5.75 0 0 1 5.46-5.46c.142-.007.304-.007.57-.007h.047c.153 0 .258 0 .35.005a3.75 3.75 0 0 1 3.561 3.561c.005.092.005.197.005.35V7.3A3.75 3.75 0 0 1 19 11.05a.25.25 0 0 0-.25.25v.2a.75.75 0 0 1-1.5 0v-.2c0-.966.784-1.75 1.75-1.75a2.25 2.25 0 0 0 2.25-2.25V5.188c0-.184 0-.248-.003-.298a2.25 2.25 0 0 0-2.137-2.137M5.166 3.25h.047c.266 0 .428 0 .57.007a5.75 5.75 0 0 1 5.46 5.46c.007.142.007.304.007.57V19.75a3 3 0 1 1-6 0V13.3a.25.25 0 0 0-.25-.25A3.75 3.75 0 0 1 1.25 9.3V7.166c0-.153 0-.258.005-.35a3.75 3.75 0 0 1 3.561-3.561c.092-.005.197-.005.35-.005m.021 1.5c-.183 0-.247 0-.297.003A2.25 2.25 0 0 0 2.753 6.89c-.003.05-.003.115-.003.298V9.3A2.25 2.25 0 0 0 5 11.55c.966 0 1.75.784 1.75 1.75v4.95h3V9.313c0-.3 0-.422-.005-.522a4.25 4.25 0 0 0-4.036-4.036c-.1-.005-.222-.005-.521-.005m4.563 15h-3a1.5 1.5 0 0 0 3 0m9.75-15.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m-15 2a.75.75 0 0 1 .75.75v2.5a.75.75 0 1 1-1.5 0V7a.75.75 0 0 1 .75-.75m13.5 8.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M13.25 18a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m5.166-2.124a.75.75 0 0 1 .208 1.04l-.223.334H19a.75.75 0 0 1 .624 1.166l-1 1.5a.75.75 0 1 1-1.248-.832l.223-.334H17a.75.75 0 0 1-.624-1.166l1-1.5a.75.75 0 0 1 1.04-.208" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsChargeOutlineIcon {
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
  selector: 'svg[solarAirbudsCheckBoldDuotoneIcon],svg[solar-airbuds-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20.012 17.548a.75.75 0 1 0-1.024-1.096l-1.63 1.522l-.346-.322a.75.75 0 0 0-1.024 1.096l.857.8a.75.75 0 0 0 1.024 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 7.3V5.188c0-.175 0-.262-.004-.335c-.08-1.541-1.385-2.774-3.017-2.85C18.901 2 18.81 2 18.625 2c-.307 0-.46 0-.59.006c-2.72.126-4.895 2.18-5.029 4.749c-.006.122-.006.267-.006.558v8.393a5.5 5.5 0 0 1 4.765-3.201V11.3c0-.552.474-1 1.058-1c1.755 0 3.177-1.343 3.177-3M20.25 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 9.3V7.187c0-.174 0-.26.004-.334c.08-1.541 1.385-2.774 3.017-2.85C5.098 4 5.19 4 5.375 4c.307 0 .46 0 .59.006c2.72.126 4.895 2.18 5.029 4.749c.006.122.006.267.006.557V19.75C11 20.993 9.933 22 8.618 22s-2.383-1.007-2.383-2.25V13.3c0-.552-.474-1-1.059-1C3.422 12.3 2 10.957 2 9.3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 18.25H6.235v1.5H11zm-6.5-12a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class SolarAirbudsCheckBoldDuotoneIcon {
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
  selector: 'svg[solarAirbudsCheckLineDuotoneIcon],svg[solar-airbuds-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 11.5v-.2a1 1 0 0 1 1-1a3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5"></svg:path><svg:path d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0V9.313c0-.29 0-.436-.006-.558a5 5 0 0 0-4.749-4.749C5.623 4 5.478 4 5.187 4c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 6.926 2 7.013 2 7.188V9.3a3 3 0 0 0 3 3a1 1 0 0 1 1 1V19m4.5 0H6"></svg:path><svg:path stroke-linecap="round" d="M19.5 5v2.5M4.5 7v2.5" opacity=".5"></svg:path><svg:circle cx="18" cy="18" r="4" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m16.5 18.2l.857.8l2.143-2"></svg:path></svg:g>`,
})
export class SolarAirbudsCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCheckLinearIcon],svg[solar-airbuds-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 11.5v-.2a1 1 0 0 1 1-1a3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5"></svg:path><svg:path d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0V9.313c0-.29 0-.436-.006-.558a5 5 0 0 0-4.749-4.749C5.623 4 5.478 4 5.187 4c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 6.926 2 7.013 2 7.188V9.3a3 3 0 0 0 3 3a1 1 0 0 1 1 1V19m4.5 0H6"></svg:path><svg:path stroke-linecap="round" d="M19.5 5v2.5M4.5 7v2.5"></svg:path><svg:circle cx="18" cy="18" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m16.5 18.2l.857.8l2.143-2"></svg:path></svg:g>`,
})
export class SolarAirbudsCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCheckOutlineIcon],svg[solar-airbuds-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.11 2.753a7 7 0 0 0-.297-.003c-.3 0-.422 0-.521.005a4.25 4.25 0 0 0-4.037 4.036c-.005.1-.005.222-.005.521V13.5a.75.75 0 0 1-1.5 0V7.287c0-.266 0-.428.007-.57a5.75 5.75 0 0 1 5.46-5.46c.142-.007.304-.007.57-.007h.047c.153 0 .258 0 .35.005a3.75 3.75 0 0 1 3.561 3.561c.005.092.005.197.005.35V7.3A3.75 3.75 0 0 1 19 11.05a.25.25 0 0 0-.25.25v.2a.75.75 0 0 1-1.5 0v-.2c0-.966.784-1.75 1.75-1.75a2.25 2.25 0 0 0 2.25-2.25V5.188c0-.184 0-.248-.003-.298a2.25 2.25 0 0 0-2.137-2.137M5.166 3.25h.047c.266 0 .428 0 .57.007a5.75 5.75 0 0 1 5.46 5.46c.007.142.007.304.007.57V19.75a3 3 0 1 1-6 0V13.3a.25.25 0 0 0-.25-.25A3.75 3.75 0 0 1 1.25 9.3V7.166c0-.153 0-.258.005-.35a3.75 3.75 0 0 1 3.561-3.561c.092-.005.197-.005.35-.005m.021 1.5c-.183 0-.247 0-.297.003A2.25 2.25 0 0 0 2.753 6.89c-.003.05-.003.115-.003.298V9.3A2.25 2.25 0 0 0 5 11.55c.966 0 1.75.784 1.75 1.75v4.95h3V9.313c0-.3 0-.422-.005-.522a4.25 4.25 0 0 0-4.036-4.036c-.1-.005-.222-.005-.521-.005m4.563 15h-3a1.5 1.5 0 0 0 3 0m9.75-15.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m-15 2a.75.75 0 0 1 .75.75v2.5a.75.75 0 1 1-1.5 0V7a.75.75 0 0 1 .75-.75m13.5 8.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M13.25 18a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m6.798-1.512a.75.75 0 0 1-.036 1.06l-2.143 2a.75.75 0 0 1-1.024 0l-.857-.8a.75.75 0 0 1 1.024-1.096l.345.322l1.631-1.522a.75.75 0 0 1 1.06.036" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsCheckOutlineIcon {
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
  selector: 'svg[solarAirbudsLeftBoldDuotoneIcon],svg[solar-airbuds-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.382 22C3.067 22 2 20.88 2 19.5h4.765c0 1.38-1.067 2.5-2.383 2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11 7.889V5.542c0-.194 0-.29-.004-.372c-.08-1.713-1.385-3.082-3.017-3.166C7.902 2 7.81 2 7.625 2c-.307 0-.46 0-.59.007c-2.72.14-4.895 2.422-5.029 5.276C2 7.419 2 7.58 2 7.903v9.93h4.765v-5.5c0-.613.474-1.11 1.059-1.11C9.578 11.222 11 9.73 11 7.888M9.324 5.125c0-.46-.336-.833-.75-.833c-.415 0-.75.373-.75.833v2.778c0 .46.335.833.75.833c.414 0 .75-.373.75-.833z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.5 22a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.25 13a.75.75 0 0 1 .75.75V18h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.265 4.95a.75.75 0 0 0 .586.885a4.26 4.26 0 0 1 3.314 3.314a.75.75 0 0 0 1.47-.298a5.76 5.76 0 0 0-4.486-4.486a.75.75 0 0 0-.884.586" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarAirbudsLeftBoldDuotoneIcon {
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
  selector: 'svg[solarAirbudsLeftLineDuotoneIcon],svg[solar-airbuds-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-width="1.5" d="M2 18.667v.833a2.5 2.5 0 0 0 5 0v-.833m-5 0V7.559A5.59 5.59 0 0 1 7.56 2h.105A3.353 3.353 0 0 1 11 5.336V8a3 3 0 0 1-3 3a1 1 0 0 0-1 1v6.667m-5 0h5"></svg:path><svg:path stroke-linecap="round" stroke-width="1.676" d="M8 5v3" opacity=".5"></svg:path><svg:circle cx="5.5" cy="5.5" r="5.5" stroke-width="1.5" opacity=".5" transform="matrix(-1 0 0 1 21 11)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 14v5h3"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="M14 5.1A5.01 5.01 0 0 1 17.9 9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarAirbudsLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsLeftLinearIcon],svg[solar-airbuds-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-width="1.5" d="M2 18.667v.833a2.5 2.5 0 0 0 5 0v-.833m-5 0V7.559A5.59 5.59 0 0 1 7.56 2h.105A3.353 3.353 0 0 1 11 5.336V8a3 3 0 0 1-3 3a1 1 0 0 0-1 1v6.667m-5 0h5"></svg:path><svg:path stroke-linecap="round" stroke-width="1.676" d="M8 5v3"></svg:path><svg:circle cx="5.5" cy="5.5" r="5.5" stroke-width="1.5" transform="matrix(-1 0 0 1 21 11)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 14v5h3"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="M14 5.1A5.01 5.01 0 0 1 17.9 9"></svg:path></svg:g>`,
})
export class SolarAirbudsLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsLeftOutlineIcon],svg[solar-airbuds-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.626 1.25h.042a4.103 4.103 0 0 1 4.082 4.082V8A3.75 3.75 0 0 1 8 11.75a.25.25 0 0 0-.25.25v7.5a3.25 3.25 0 0 1-6.5 0V7.555A6.34 6.34 0 0 1 7.555 1.25zm-.063 1.5A4.84 4.84 0 0 0 2.75 7.562v10.355h3.5V12c0-.966.784-1.75 1.75-1.75A2.25 2.25 0 0 0 10.25 8V5.339A2.603 2.603 0 0 0 7.662 2.75h-.098M6.25 19.417h-3.5v.083a1.75 1.75 0 1 0 3.5 0zM8 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0V5A.75.75 0 0 1 8 4.25m5.266.7a.75.75 0 0 1 .884-.585a5.76 5.76 0 0 1 4.486 4.486a.75.75 0 0 1-1.47.298a4.26 4.26 0 0 0-3.314-3.314a.75.75 0 0 1-.586-.884M9.25 16.5a6.25 6.25 0 1 1 12.5 0a6.25 6.25 0 0 1-12.5 0m6.25-4.75a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5m-1.5 1.5a.75.75 0 0 1 .75.75v4.25H17a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsLineDuotoneIcon],svg[solar-airbuds-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.5 18v.75a2.25 2.25 0 0 0 4.5 0V18m-4.5 0V8.313c0-.29 0-.436.006-.558a5 5 0 0 1 4.749-4.749C18.377 3 18.522 3 18.813 3c.174 0 .26 0 .334.004a3 3 0 0 1 2.85 2.849c.003.073.003.16.003.335V8.3a3 3 0 0 1-3 3a1 1 0 0 0-1 1V18m-4.5 0H18m-7.5 0v.75a2.25 2.25 0 0 1-4.5 0V18m4.5 0V8.313c0-.29 0-.436-.006-.558a5 5 0 0 0-4.749-4.749C5.623 3 5.478 3 5.187 3c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 5.926 2 6.013 2 6.188V8.3a3 3 0 0 0 3 3a1 1 0 0 1 1 1V18m4.5 0H6"></svg:path><svg:path stroke-linecap="round" d="M19.5 6v2.5M4.5 6v2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarAirbudsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsLinearIcon],svg[solar-airbuds-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.5 18v.75a2.25 2.25 0 0 0 4.5 0V18m-4.5 0V8.313c0-.29 0-.436.006-.558a5 5 0 0 1 4.749-4.749C18.377 3 18.522 3 18.813 3c.174 0 .26 0 .334.004a3 3 0 0 1 2.85 2.849c.003.073.003.16.003.335V8.3a3 3 0 0 1-3 3a1 1 0 0 0-1 1V18m-4.5 0H18m-7.5 0v.75a2.25 2.25 0 0 1-4.5 0V18m4.5 0V8.313c0-.29 0-.436-.006-.558a5 5 0 0 0-4.749-4.749C5.623 3 5.478 3 5.187 3c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 5.926 2 6.013 2 6.188V8.3a3 3 0 0 0 3 3a1 1 0 0 1 1 1V18m4.5 0H6"></svg:path><svg:path stroke-linecap="round" d="M19.5 6v2.5M4.5 6v2.5"></svg:path></svg:g>`,
})
export class SolarAirbudsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsOutlineIcon],svg[solar-airbuds-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.166 2.25h.047c.266 0 .428 0 .57.007a5.75 5.75 0 0 1 5.46 5.46c.007.142.007.304.007.57V18.75a3 3 0 1 1-6 0V12.3a.25.25 0 0 0-.25-.25A3.75 3.75 0 0 1 1.25 8.3V6.166c0-.153 0-.258.005-.35a3.75 3.75 0 0 1 3.561-3.561c.092-.005.197-.005.35-.005m.021 1.5c-.183 0-.247 0-.297.003A2.25 2.25 0 0 0 2.753 5.89c-.003.05-.003.115-.003.298V8.3A2.25 2.25 0 0 0 5 10.55c.966 0 1.75.784 1.75 1.75v4.95h3V8.313c0-.3 0-.422-.005-.522a4.25 4.25 0 0 0-4.036-4.036c-.1-.005-.222-.005-.521-.005m4.563 15h-3a1.5 1.5 0 0 0 3 0m9.36-14.997a7 7 0 0 0-.297-.003c-.3 0-.422 0-.521.005a4.25 4.25 0 0 0-4.037 4.036c-.005.1-.005.222-.005.521v8.938h3V12.3c0-.966.784-1.75 1.75-1.75a2.25 2.25 0 0 0 2.25-2.25V6.187c0-.183 0-.247-.003-.297a2.25 2.25 0 0 0-2.137-2.137M17.25 18.75h-3a1.5 1.5 0 0 0 3 0m1.584-16.5c.153 0 .258 0 .35.005a3.75 3.75 0 0 1 3.561 3.561c.005.092.005.197.005.35V8.3A3.75 3.75 0 0 1 19 12.05a.25.25 0 0 0-.25.25v6.45a3 3 0 1 1-6 0V8.287c0-.266 0-.428.007-.57a5.75 5.75 0 0 1 5.46-5.46c.142-.007.304-.007.57-.007zM4.5 5.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 .75-.75m15 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsOutlineIcon {
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
  selector: 'svg[solarAirbudsRemoveBoldDuotoneIcon],svg[solar-airbuds-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.47 16.47a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 0 1 1.06 1.06l-.47.47l.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47l-.47.47a.75.75 0 0 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 7.3V5.188c0-.175 0-.262-.004-.335c-.08-1.541-1.385-2.774-3.017-2.85C18.901 2 18.81 2 18.625 2c-.307 0-.46 0-.59.006c-2.72.126-4.895 2.18-5.029 4.749c-.006.122-.006.267-.006.558v8.393a5.5 5.5 0 0 1 4.765-3.201V11.3c0-.552.474-1 1.058-1c1.755 0 3.177-1.343 3.177-3M20.25 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 9.3V7.187c0-.174 0-.26.004-.334c.08-1.541 1.385-2.774 3.017-2.85C5.098 4 5.19 4 5.375 4c.307 0 .46 0 .59.006c2.72.126 4.895 2.18 5.029 4.749c.006.122.006.267.006.557V19.75C11 20.993 9.933 22 8.618 22s-2.383-1.007-2.383-2.25V13.3c0-.552-.474-1-1.059-1C3.422 12.3 2 10.957 2 9.3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 18.25H6.235v1.5H11zm-6.5-12a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class SolarAirbudsRemoveBoldDuotoneIcon {
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
  selector: 'svg[solarAirbudsRemoveLineDuotoneIcon],svg[solar-airbuds-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 11.5v-.2a1 1 0 0 1 1-1a3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5"></svg:path><svg:path d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0V9.313c0-.29 0-.436-.006-.558a5 5 0 0 0-4.749-4.749C5.623 4 5.478 4 5.187 4c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 6.926 2 7.013 2 7.188V9.3a3 3 0 0 0 3 3a1 1 0 0 1 1 1V19m4.5 0H6"></svg:path><svg:path stroke-linecap="round" d="M19.5 5v2.5M4.5 7v2.5" opacity=".5"></svg:path><svg:circle cx="18" cy="18" r="4" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m17 19l2-2m0 2l-2-2"></svg:path></svg:g>`,
})
export class SolarAirbudsRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsRemoveLinearIcon],svg[solar-airbuds-remove-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 11.5v-.2a1 1 0 0 1 1-1a3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5"></svg:path><svg:path d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0V9.313c0-.29 0-.436-.006-.558a5 5 0 0 0-4.749-4.749C5.623 4 5.478 4 5.187 4c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 6.926 2 7.013 2 7.188V9.3a3 3 0 0 0 3 3a1 1 0 0 1 1 1V19m4.5 0H6"></svg:path><svg:path stroke-linecap="round" d="M19.5 5v2.5M4.5 7v2.5"></svg:path><svg:circle cx="18" cy="18" r="4"></svg:circle><svg:path stroke-linecap="round" d="m17 19l2-2m0 2l-2-2"></svg:path></svg:g>`,
})
export class SolarAirbudsRemoveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsRemoveOutlineIcon],svg[solar-airbuds-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.11 2.753a7 7 0 0 0-.297-.003c-.3 0-.422 0-.521.005a4.25 4.25 0 0 0-4.037 4.036c-.005.1-.005.222-.005.521V13.5a.75.75 0 0 1-1.5 0V7.287c0-.266 0-.428.007-.57a5.75 5.75 0 0 1 5.46-5.46c.142-.007.304-.007.57-.007h.047c.153 0 .258 0 .35.005a3.75 3.75 0 0 1 3.561 3.561c.005.092.005.197.005.35V7.3A3.75 3.75 0 0 1 19 11.05a.25.25 0 0 0-.25.25v.2a.75.75 0 0 1-1.5 0v-.2c0-.966.784-1.75 1.75-1.75a2.25 2.25 0 0 0 2.25-2.25V5.188c0-.184 0-.248-.003-.298a2.25 2.25 0 0 0-2.137-2.137M5.166 3.25h.047c.266 0 .428 0 .57.007a5.75 5.75 0 0 1 5.46 5.46c.007.142.007.304.007.57V19.75a3 3 0 1 1-6 0V13.3a.25.25 0 0 0-.25-.25A3.75 3.75 0 0 1 1.25 9.3V7.166c0-.153 0-.258.005-.35a3.75 3.75 0 0 1 3.561-3.561c.092-.005.197-.005.35-.005m.021 1.5c-.183 0-.247 0-.297.003A2.25 2.25 0 0 0 2.753 6.89c-.003.05-.003.115-.003.298V9.3A2.25 2.25 0 0 0 5 11.55c.966 0 1.75.784 1.75 1.75v4.95h3V9.313c0-.3 0-.422-.005-.522a4.25 4.25 0 0 0-4.036-4.036c-.1-.005-.222-.005-.521-.005m4.563 15h-3a1.5 1.5 0 0 0 3 0m9.75-15.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m-15 2a.75.75 0 0 1 .75.75v2.5a.75.75 0 1 1-1.5 0V7a.75.75 0 0 1 .75-.75m13.5 8.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5M13.25 18a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m3.22-1.53a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 0 1 1.06 1.06l-.47.47l.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47l-.47.47a.75.75 0 0 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsRemoveOutlineIcon {
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
  selector: 'svg[solarAirbudsRightBoldDuotoneIcon],svg[solar-airbuds-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.618 22C20.933 22 22 20.88 22 19.5h-4.765c0 1.38 1.067 2.5 2.383 2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 7.889V5.542c0-.194 0-.29.004-.372c.08-1.713 1.385-3.082 3.017-3.166c.078-.004.17-.004.354-.004c.307 0 .46 0 .59.007c2.72.14 4.895 2.422 5.029 5.276c.006.136.006.297.006.62v9.93h-4.765v-5.5c0-.613-.474-1.11-1.058-1.11C14.422 11.222 13 9.73 13 7.888m1.677-2.764c0-.46.335-.833.75-.833c.414 0 .75.373.75.833v2.778c0 .46-.336.833-.75.833c-.415 0-.75-.373-.75-.833z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 16.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.735 4.95a.75.75 0 0 1-.586.885a4.26 4.26 0 0 0-3.314 3.314a.75.75 0 0 1-1.47-.298A5.76 5.76 0 0 1 9.85 4.365a.75.75 0 0 1 .884.586" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-1.75h.325l1.282 2.136a.75.75 0 1 0 1.286-.772l-.99-1.649c.629-.33 1.097-.93 1.097-1.715c0-1.227-1.141-2-2.25-2zm.75 1.5v1h.75c.548 0 .75-.346.75-.5s-.202-.5-.75-.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsRightBoldDuotoneIcon {
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
  selector: 'svg[solarAirbudsRightLineDuotoneIcon],svg[solar-airbuds-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M21 18.667v.833c0 .14 0 .209-.003.268a2.35 2.35 0 0 1-2.23 2.229C18.71 22 18.64 22 18.5 22s-.209 0-.268-.003a2.35 2.35 0 0 1-2.229-2.23C16 19.71 16 19.64 16 19.5v-.833m5 0V7.559A5.59 5.59 0 0 0 15.44 2h-.105A3.353 3.353 0 0 0 12 5.336V8a3 3 0 0 0 3 3a1 1 0 0 1 1 1v6.667m5 0h-5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.676" d="M15 5v3" opacity=".5"></svg:path><svg:circle cx="7.5" cy="16.5" r="5.5" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 5.1A5.01 5.01 0 0 0 5.1 9" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 14v-.75a.75.75 0 0 0-.75.75zm-.75 5a.75.75 0 0 0 1.5 0zM6 16.5h-.75v.75H6zm2.357 2.886a.75.75 0 1 0 1.286-.772zM6 14.75h1.5v-1.5H6zm.75 1.75V14h-1.5v2.5zm1.5-1.25c0 .154-.202.5-.75.5v1.5c1.109 0 2.25-.773 2.25-2zm-.75-.5c.548 0 .75.346.75.5h1.5c0-1.227-1.141-2-2.25-2zM5.25 14v5h1.5v-5zm2.25 1.75H6v1.5h1.5zm-.643 1.136l1.5 2.5l1.286-.772l-1.5-2.5z"></svg:path></svg:g>`,
})
export class SolarAirbudsRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsRightLinearIcon],svg[solar-airbuds-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M21 18.667v.833c0 .14 0 .209-.003.268a2.35 2.35 0 0 1-2.23 2.229C18.71 22 18.64 22 18.5 22s-.209 0-.268-.003a2.35 2.35 0 0 1-2.229-2.23C16 19.71 16 19.64 16 19.5v-.833m5 0V7.559A5.59 5.59 0 0 0 15.44 2h-.105A3.353 3.353 0 0 0 12 5.336V8a3 3 0 0 0 3 3a1 1 0 0 1 1 1v6.667m5 0h-5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.676" d="M15 5v3"></svg:path><svg:circle cx="7.5" cy="16.5" r="5.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 5.1A5.01 5.01 0 0 0 5.1 9"></svg:path><svg:path fill="currentColor" d="M6 14v-.75a.75.75 0 0 0-.75.75zm-.75 5a.75.75 0 0 0 1.5 0zM6 16.5h-.75v.75H6zm2.357 2.886a.75.75 0 1 0 1.286-.772zM6 14.75h1.5v-1.5H6zm.75 1.75V14h-1.5v2.5zm1.5-1.25c0 .154-.202.5-.75.5v1.5c1.109 0 2.25-.773 2.25-2zm-.75-.5c.548 0 .75.346.75.5h1.5c0-1.227-1.141-2-2.25-2zM5.25 14v5h1.5v-5zm2.25 1.75H6v1.5h1.5zm-.643 1.136l1.5 2.5l1.286-.772l-1.5-2.5z"></svg:path></svg:g>`,
})
export class SolarAirbudsRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsRightOutlineIcon],svg[solar-airbuds-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.376 1.25h.069a6.34 6.34 0 0 1 6.305 6.305V19.52c0 .12 0 .207-.004.285a3.1 3.1 0 0 1-2.94 2.941c-.079.004-.166.004-.286.004h-.04c-.12 0-.207 0-.285-.004a3.1 3.1 0 0 1-2.941-2.94c-.004-.079-.004-.166-.004-.286V12a.25.25 0 0 0-.25-.25A3.75 3.75 0 0 1 11.25 8V5.332a4.103 4.103 0 0 1 4.082-4.082zm-.037 1.5a2.603 2.603 0 0 0-2.589 2.588V8A2.25 2.25 0 0 0 15 10.25c.966 0 1.75.784 1.75 1.75v5.917h3.5V7.562a4.84 4.84 0 0 0-4.812-4.812zm4.911 16.667h-3.5v.083c0 .148 0 .195.002.23a1.6 1.6 0 0 0 1.518 1.518c.035.002.082.002.23.002s.195 0 .23-.002a1.6 1.6 0 0 0 1.518-1.518c.002-.035.002-.082.002-.23zM15 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m-5.265.7a.75.75 0 0 1-.586.885a4.26 4.26 0 0 0-3.314 3.314a.75.75 0 1 1-1.47-.298a5.76 5.76 0 0 1 4.486-4.486a.75.75 0 0 1 .884.586M7.5 11.75a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M1.25 16.5a6.25 6.25 0 1 1 12.5 0a6.25 6.25 0 0 1-12.5 0m4-2.5a.75.75 0 0 1 .75-.75h1.5c1.109 0 2.25.773 2.25 2c0 .786-.468 1.386-1.096 1.715l.99 1.65a.75.75 0 0 1-1.287.77L7.075 17.25H6.75V19a.75.75 0 0 1-1.5 0zm1.5.75v1h.75c.548 0 .75-.346.75-.5s-.202-.5-.75-.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAirbudsRightOutlineIcon {
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
  selector: 'svg[solarAlarmAddBoldDuotoneIcon],svg[solar-alarm-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmAddBoldDuotoneIcon {
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
  selector: 'svg[solarAlarmAddLineDuotoneIcon],svg[solar-alarm-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M15 13h-3m0 0H9m3 0v-3m0 3v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmAddLinearIcon],svg[solar-alarm-add-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path stroke-linecap="round" d="M15 13h-3m0 0H9m3 0v-3m0 3v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmAddLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmAddOutlineIcon],svg[solar-alarm-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033M12 4.75a8.25 8.25 0 1 0 0 16.5a8.25 8.25 0 0 0 0-16.5M2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmAddOutlineIcon {
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
  selector: 'svg[solarAlarmBoldDuotoneIcon],svg[solar-alarm-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c4.836 0 8.756-3.884 8.756-8.675c0-4.79-3.92-8.675-8.756-8.675s-8.757 3.884-8.757 8.675C3.243 18.115 7.163 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 8.747c.402 0 .729.324.729.723v3.556l2.219 2.198a.72.72 0 0 1 0 1.022a.734.734 0 0 1-1.032 0l-2.433-2.41a.72.72 0 0 1-.213-.51V9.47c0-.4.326-.723.73-.723"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmBoldDuotoneIcon {
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
  selector: 'svg[solarAlarmLineDuotoneIcon],svg[solar-alarm-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4l2.5 2.5m-11-11l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmLinearIcon],svg[solar-alarm-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4l2.5 2.5m-11-11l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmOutlineIcon],svg[solar-alarm-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033M12 4.75a8.25 8.25 0 1 0 0 16.5a8.25 8.25 0 0 0 0-16.5M2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13M12 8.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmOutlineIcon {
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
  selector: 'svg[solarAlarmPauseBoldDuotoneIcon],svg[solar-alarm-pause-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 15.5v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 9 9.966 9 9.5 9s-.699 0-.883.076a1 1 0 0 0-.54.541C8 9.801 8 10.034 8 10.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883m5 0v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 9 14.966 9 14.5 9s-.699 0-.883.076a1 1 0 0 0-.54.541C13 9.801 13 10.034 13 10.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmPauseBoldDuotoneIcon {
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
  selector: 'svg[solarAlarmPauseLineDuotoneIcon],svg[solar-alarm-pause-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path><svg:path d="M8 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 9 9.034 9 9.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 17 9.966 17 9.5 17s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 16.199 8 15.966 8 15.5zm5 0c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 9 14.034 9 14.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 16.199 13 15.966 13 15.5z"></svg:path></svg:g>`,
})
export class SolarAlarmPauseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmPauseLinearIcon],svg[solar-alarm-pause-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path><svg:path d="M8 10.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 9 9.034 9 9.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 17 9.966 17 9.5 17s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 16.199 8 15.966 8 15.5zm5 0c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 9 14.034 9 14.5 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 16.199 13 15.966 13 15.5z"></svg:path></svg:g>`,
})
export class SolarAlarmPauseLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmPauseOutlineIcon],svg[solar-alarm-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.898 2.636a.75.75 0 1 0-.795-1.272l-4 2.5a.75.75 0 0 0 .794 1.272zm9-1.272a.75.75 0 1 0-.796 1.272l4 2.5a.75.75 0 1 0 .796-1.272zM3.75 13a8.25 8.25 0 1 1 16.5 0a8.25 8.25 0 0 1-16.5 0M12 3.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 3.25 12 3.25m-2.478 5h-.044c-.214 0-.41 0-.576.011c-.178.012-.373.04-.572.122a1.75 1.75 0 0 0-.947.947c-.082.199-.11.394-.122.572c-.011.165-.011.362-.011.576v5.044c0 .214 0 .411.011.576c.012.178.04.373.122.572c.178.429.519.77.947.947c.199.082.394.11.572.122c.165.011.362.011.576.011h.044c.214 0 .41 0 .576-.011c.178-.012.373-.04.572-.122a1.75 1.75 0 0 0 .947-.947c.082-.199.11-.394.122-.572c.011-.165.011-.362.011-.576v-5.044c0-.214 0-.41-.011-.576a1.8 1.8 0 0 0-.122-.572a1.75 1.75 0 0 0-.947-.947a1.8 1.8 0 0 0-.572-.122c-.165-.01-.362-.01-.576-.01m-.752 1.65a.25.25 0 0 1 .131-.13a1 1 0 0 1 .103-.013c.108-.007.253-.008.496-.008s.388 0 .496.008c.067.004.095.01.103.012a.25.25 0 0 1 .13.131a1 1 0 0 1 .013.103c.008.108.008.253.008.496v5c0 .243 0 .388-.008.496a1 1 0 0 1-.012.103a.25.25 0 0 1-.131.13a1 1 0 0 1-.103.013a8 8 0 0 1-.496.008c-.243 0-.388 0-.496-.008a1 1 0 0 1-.103-.012a.25.25 0 0 1-.13-.131a1 1 0 0 1-.013-.103a8 8 0 0 1-.008-.496v-5c0-.243 0-.388.008-.496a1 1 0 0 1 .012-.103"></svg:path><svg:path d="M14.559 8.239h-.044c-.214 0-.41 0-.576.011a1.8 1.8 0 0 0-.572.122a1.75 1.75 0 0 0-.947.947c-.082.199-.11.394-.122.572a9 9 0 0 0-.011.576v5.044c0 .214 0 .41.011.576c.012.178.04.373.122.572c.178.428.518.77.947.947c.199.082.394.11.572.122c.165.011.362.011.576.011h.044c.214 0 .41 0 .576-.011c.178-.012.373-.04.572-.122a1.75 1.75 0 0 0 .947-.947c.082-.199.11-.394.122-.572c.011-.165.011-.362.011-.576v-5.044c0-.214 0-.41-.011-.576a1.8 1.8 0 0 0-.122-.572a1.75 1.75 0 0 0-.947-.947a1.8 1.8 0 0 0-.572-.122c-.165-.011-.362-.011-.576-.011m-.62 1.52a.25.25 0 0 0-.132.131a1 1 0 0 0-.012.103a8 8 0 0 0-.008.496v5c0 .243 0 .388.008.496c.004.067.01.095.012.103a.25.25 0 0 0 .131.13a1 1 0 0 0 .103.013c.108.008.253.008.496.008s.388 0 .496-.008a1 1 0 0 0 .103-.012a.25.25 0 0 0 .13-.131a1 1 0 0 0 .013-.103c.008-.108.008-.253.008-.496v-5c0-.243 0-.388-.008-.496a1 1 0 0 0-.012-.103a.25.25 0 0 0-.131-.13a1 1 0 0 0-.103-.013a8 8 0 0 0-.496-.008c-.243 0-.388 0-.496.008a1 1 0 0 0-.103.012"></svg:path></svg:g>`,
})
export class SolarAlarmPauseOutlineIcon {
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
  selector: 'svg[solarAlarmPlayBoldDuotoneIcon],svg[solar-alarm-play-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.026 10.275a15 15 0 0 0-.784-.508c-1.073-.652-1.609-.978-2.09-.617c-.48.36-.524 1.116-.612 2.628c-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.132 2.267.612 2.628c.481.361 1.018.035 2.09-.617c.278-.169.547-.341.784-.508c.27-.19.565-.418.862-.66C14.963 14.188 15.5 13.75 15.5 13s-.537-1.188-1.612-2.065c-.297-.242-.591-.47-.862-.66"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmPlayBoldDuotoneIcon {
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
  selector: 'svg[solarAlarmPlayLineDuotoneIcon],svg[solar-alarm-play-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9" opacity=".5"></svg:circle><svg:path d="M13.888 10.935C14.963 11.812 15.5 12.25 15.5 13s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66c-.237.167-.506.339-.784.508c-1.073.652-1.609.978-2.09.617c-.48-.36-.524-1.116-.612-2.628c-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628c.481-.361 1.018-.035 2.09.617c.278.169.547.341.784.508c.27.19.565.418.862.66Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmPlayLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmPlayLinearIcon],svg[solar-alarm-play-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path d="M13.888 10.935C14.963 11.812 15.5 12.25 15.5 13s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66c-.237.167-.506.339-.784.508c-1.073.652-1.609.978-2.09.617c-.48-.36-.524-1.116-.612-2.628c-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628c.481-.361 1.018-.035 2.09.617c.278.169.547.341.784.508c.27.19.565.418.862.66Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmPlayLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmPlayOutlineIcon],svg[solar-alarm-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033M12 4.75a8.25 8.25 0 1 0 0 16.5a8.25 8.25 0 0 0 0-16.5M2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13m10.323-3.91l.059.036c.287.175.57.356.825.535c.29.204.6.444.905.693l.046.037c.498.406.945.771 1.258 1.136c.354.412.584.877.584 1.473s-.23 1.06-.584 1.474c-.313.364-.76.729-1.258 1.135l-.046.037c-.305.25-.615.49-.905.693c-.255.179-.538.36-.825.535l-.06.036c-.484.295-.942.574-1.343.718c-.223.08-.478.139-.754.118a1.45 1.45 0 0 1-.773-.296c-.459-.344-.643-.843-.74-1.34c-.091-.472-.126-1.081-.167-1.793l-.003-.051c-.026-.437-.042-.871-.042-1.266s.016-.83.042-1.265l.003-.052c.04-.712.076-1.32.168-1.793c.096-.497.28-.995.74-1.34c.225-.17.483-.274.772-.296c.276-.02.531.038.754.119c.4.144.859.422 1.344.717m-1.973.661c-.024.02-.1.086-.165.424c-.07.362-.1.869-.146 1.646a21 21 0 0 0-.039 1.18c0 .356.015.76.04 1.178c.044.778.075 1.284.145 1.646c.066.339.14.405.165.424a.6.6 0 0 0 .122-.033c.24-.086.565-.28 1.13-.624c.27-.163.524-.326.743-.48c.25-.177.53-.393.819-.628c.558-.456.899-.737 1.114-.988c.183-.213.222-.343.222-.496s-.04-.283-.222-.496c-.215-.25-.556-.532-1.114-.988a15 15 0 0 0-.819-.627a14 14 0 0 0-.743-.481c-.566-.344-.89-.538-1.13-.624a.6.6 0 0 0-.122-.033" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmPlayOutlineIcon {
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
  selector: 'svg[solarAlarmRemoveBoldDuotoneIcon],svg[solar-alarm-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15 12.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmRemoveBoldDuotoneIcon {
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
  selector: 'svg[solarAlarmRemoveLineDuotoneIcon],svg[solar-alarm-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M15 13H9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmRemoveLinearIcon],svg[solar-alarm-remove-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path stroke-linecap="round" d="M15 13H9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmRemoveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmRemoveOutlineIcon],svg[solar-alarm-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033M12 4.75a8.25 8.25 0 1 0 0 16.5a8.25 8.25 0 0 0 0-16.5M2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13m6 0a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmRemoveOutlineIcon {
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
  selector: 'svg[solarAlarmSleepBoldDuotoneIcon],svg[solar-alarm-sleep-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 10.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .53 1.28l-4.72 4.72H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.53-1.28l4.72-4.72z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmSleepBoldDuotoneIcon {
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
  selector: 'svg[solarAlarmSleepLineDuotoneIcon],svg[solar-alarm-sleep-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5M9 10h6l-6 6h6"></svg:path></svg:g>`,
})
export class SolarAlarmSleepLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmSleepLinearIcon],svg[solar-alarm-sleep-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5M9 10h6l-6 6h6"></svg:path></svg:g>`,
})
export class SolarAlarmSleepLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmSleepOutlineIcon],svg[solar-alarm-sleep-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033M12 4.75a8.25 8.25 0 1 0 0 16.5a8.25 8.25 0 0 0 0-16.5M2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13M9 10.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .53 1.28l-4.72 4.72H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.53-1.28l4.72-4.72z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmSleepOutlineIcon {
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
  selector: 'svg[solarAlarmTurnOffBoldDuotoneIcon],svg[solar-alarm-turn-off-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 0 0-18a9 9 0 0 0 0 18" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.652 10.349a.75.75 0 0 1 0 1.06L13.06 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.061l-1.592 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59l-1.59-1.592a.75.75 0 0 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmTurnOffBoldDuotoneIcon {
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
  selector: 'svg[solarAlarmTurnOffLineDuotoneIcon],svg[solar-alarm-turn-off-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M14.122 15.122L12 13m0 0l-2.12-2.12M12 13l2.122-2.121M12 13l-2.12 2.121"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmTurnOffLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmTurnOffLinearIcon],svg[solar-alarm-turn-off-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path stroke-linecap="round" d="M14.122 15.122L12 13m0 0l-2.12-2.12M12 13l2.122-2.121M12 13l-2.12 2.121"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"></svg:path></svg:g>`,
})
export class SolarAlarmTurnOffLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlarmTurnOffOutlineIcon],svg[solar-alarm-turn-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 1 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033M12 4.75a8.25 8.25 0 1 0 0 16.5a8.25 8.25 0 0 0 0-16.5M2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13m12.402-2.652a.75.75 0 0 1 0 1.061L13.06 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.062l-1.591 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59l-1.59-1.592a.75.75 0 1 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlarmTurnOffOutlineIcon {
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
  selector: 'svg[solarAlbumBoldDuotoneIcon],svg[solar-album-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.29 11.968a1.33 1.33 0 0 1-1.322 1.338a1.33 1.33 0 0 1-1.323-1.338a1.33 1.33 0 0 1 1.323-1.337c.73 0 1.323.599 1.323 1.337"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.132 7.408c-.849-.12-1.942-.12-3.305-.12H9.173c-1.363 0-2.456 0-3.305.12c-.877.125-1.608.392-2.152 1.02c-.543.628-.71 1.396-.716 2.293c-.006.866.139 1.962.319 3.328l.365 2.772c.141 1.068.255 1.933.432 2.61c.185.704.457 1.288.968 1.74c.51.453 1.12.649 1.834.74c.687.089 1.55.089 2.615.089h4.934c1.065 0 1.928 0 2.615-.088c.715-.092 1.323-.288 1.834-.74c.511-.453.783-1.037.968-1.741c.177-.677.291-1.542.432-2.61l.365-2.772c.18-1.366.325-2.462.319-3.328c-.007-.897-.172-1.665-.716-2.293s-1.275-.895-2.152-1.02M6.052 8.732c-.726.104-1.094.292-1.34.577c-.248.285-.384.679-.39 1.421c-.005.761.126 1.764.315 3.195l.05.379l.371-.272c.96-.703 2.376-.668 3.288.095l3.384 2.833c.32.268.871.318 1.269.084l.235-.139c1.125-.662 2.634-.592 3.672.19l1.832 1.38c.09-.495.171-1.104.273-1.875l.352-2.675c.189-1.43.32-2.434.314-3.195c-.005-.742-.141-1.136-.388-1.42c-.247-.286-.615-.474-1.342-.578c-.745-.106-1.745-.107-3.172-.107h-5.55c-1.427 0-2.427.001-3.172.107" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.88 4.5c-1.252 0-2.279.84-2.621 1.954l-.02.07c.358-.12.73-.2 1.108-.253c.972-.139 2.201-.139 3.629-.139h6.202c1.428 0 2.657 0 3.63.139c.377.053.75.132 1.108.253l-.02-.07c-.343-1.114-1.37-1.954-2.62-1.954z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M8.859 2h6.282c.209 0 .37 0 .51.015a2.62 2.62 0 0 1 2.159 1.672H6.19a2.62 2.62 0 0 1 2.159-1.672c.14-.015.3-.015.51-.015" opacity=".4"></svg:path>`,
})
export class SolarAlbumBoldDuotoneIcon {
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
  selector: 'svg[solarAlbumLineDuotoneIcon],svg[solar-album-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" opacity=".5"></svg:path><svg:circle cx="16.5" cy="11.5" r="1.5" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m20 20l-2.884-2.149c-.93-.692-2.316-.761-3.34-.166l-.266.155c-.712.414-1.68.345-2.294-.164l-3.839-3.177c-.766-.634-1.995-.668-2.81-.078l-1.324.96" opacity=".5"></svg:path></svg:g>`,
})
export class SolarAlbumLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlbumLinearIcon],svg[solar-album-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464zM19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496"></svg:path><svg:circle cx="16.5" cy="11.5" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="m20 20l-2.884-2.149c-.93-.692-2.316-.761-3.34-.166l-.266.155c-.712.414-1.68.345-2.294-.164l-3.839-3.177c-.766-.634-1.995-.668-2.81-.078l-1.324.96"></svg:path></svg:g>`,
})
export class SolarAlbumLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlbumOutlineIcon],svg[solar-album-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.7 1.25h6.6c.22 0 .389 0 .536.016A2.75 2.75 0 0 1 18.29 3.87a2.886 2.886 0 0 1 2.052 2.887c.398.18.75.428 1.053.773c.616.704.804 1.565.812 2.57c.007.972-.157 2.202-.362 3.734l-.414 3.108c-.16 1.198-.289 2.168-.49 2.927c-.21.79-.518 1.445-1.097 1.953c-.58.507-1.27.726-2.081.83c-.78.098-1.757.098-2.966.098H9.202c-1.208 0-2.186 0-2.965-.099c-.811-.103-1.501-.322-2.08-.83c-.58-.507-.889-1.162-1.098-1.952c-.201-.76-.33-1.729-.49-2.927l-.415-3.108c-.204-1.532-.368-2.762-.36-3.733c.006-1.006.195-1.867.811-2.571a3 3 0 0 1 1.053-.773A2.886 2.886 0 0 1 5.71 3.87a2.75 2.75 0 0 1 2.454-2.604c.147-.016.315-.016.535-.016m-1.468 2.5h9.536a1.25 1.25 0 0 0-1.092-.993a5 5 0 0 0-.417-.007H8.74c-.28 0-.361.001-.417.007a1.25 1.25 0 0 0-1.092.993m-2.05 2.617c.942-.117 2.139-.117 3.613-.117h6.412c1.474 0 2.67 0 3.613.117a1.38 1.38 0 0 0-1.357-1.117H6.538c-.683 0-1.235.49-1.357 1.117m.074 1.504c-.824.116-1.241.327-1.521.647s-.435.76-.44 1.593c-.007.854.141 1.979.355 3.583l.057.425l.421-.305c1.088-.788 2.694-.749 3.729.107l3.838 3.177c.363.3.988.356 1.439.094l.267-.155c1.276-.743 2.986-.664 4.164.213l2.077 1.548a46 46 0 0 0 .31-2.104l.4-3c.214-1.604.362-2.729.356-3.583c-.006-.832-.16-1.273-.44-1.593s-.698-.531-1.522-.647c-.846-.12-1.98-.121-3.598-.121H8.853c-1.618 0-2.753.002-3.598.12m13.913 12.444l-2.5-1.862c-.683-.509-1.743-.568-2.514-.12l-.267.156c-.972.565-2.283.482-3.15-.235L6.9 15.077c-.498-.412-1.349-.441-1.892-.048l-1.076.78l.118.885c.168 1.26.286 2.134.46 2.79c.168.637.366.973.635 1.209c.27.235.63.387 1.282.47c.673.086 1.556.087 2.827.087h5.494c1.27 0 2.154-.001 2.827-.087c.653-.083 1.012-.235 1.281-.47c.117-.102.22-.222.313-.378M16.5 10.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlbumOutlineIcon {
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
  selector: 'svg[solarAlignBottomBoldDuotoneIcon],svg[solar-align-bottom-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 17c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C5 15.902 5 15.435 5 14.5v-9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 3 6.565 3 7.5 3s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C10 4.098 10 4.565 10 5.5v9c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C8.902 17 8.435 17 7.5 17m9 0c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C14 15.902 14 15.435 14 14.5v-6c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C15.098 6 15.565 6 16.5 6s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 7.098 19 7.565 19 8.5v6c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarAlignBottomBoldDuotoneIcon {
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
  selector: 'svg[solarAlignBottomLineDuotoneIcon],svg[solar-align-bottom-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 21h20" opacity=".5"></svg:path><svg:path d="M7.5 17c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C5 15.902 5 15.435 5 14.5v-9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 3 6.565 3 7.5 3s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C10 4.098 10 4.565 10 5.5v9c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C8.902 17 8.435 17 7.5 17Zm9 0c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C14 15.902 14 15.435 14 14.5v-6c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C15.098 6 15.565 6 16.5 6s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 7.098 19 7.565 19 8.5v6c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201Z"></svg:path></svg:g>`,
})
export class SolarAlignBottomLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignBottomLinearIcon],svg[solar-align-bottom-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 21h20"></svg:path><svg:path d="M7.5 17c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C5 15.902 5 15.435 5 14.5v-9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 3 6.565 3 7.5 3s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C10 4.098 10 4.565 10 5.5v9c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C8.902 17 8.435 17 7.5 17Zm9 0c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C14 15.902 14 15.435 14 14.5v-6c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C15.098 6 15.565 6 16.5 6s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 7.098 19 7.565 19 8.5v6c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201Z"></svg:path></svg:g>`,
})
export class SolarAlignBottomLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignBottomOutlineIcon],svg[solar-align-bottom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.468 2.25h.064c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v9.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13V5.467c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028m-.995 1.522c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027v9c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022s.792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .275-.274c.023-.04.058-.123.078-.348c.021-.235.022-.546.022-1.027v-9c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.078-.348a.75.75 0 0 0-.275-.275c-.04-.023-.123-.058-.348-.078A13 13 0 0 0 7.5 3.75c-.481 0-.792 0-1.027.022m9.995 1.478h.064c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v6.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13V8.467c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028m-.995 1.522c-.225.02-.307.055-.348.078a.75.75 0 0 0-.274.275c-.024.04-.059.123-.079.348c-.021.235-.022.546-.022 1.027v6c0 .481 0 .792.022 1.027c.02.225.055.307.079.348a.75.75 0 0 0 .274.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022s.792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027v-6c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A13 13 0 0 0 16.5 6.75c-.481 0-.792 0-1.027.022M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlignBottomOutlineIcon {
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
  selector: 'svg[solarAlignHorizontaSpacingBoldDuotoneIcon],svg[solar-align-horizonta-spacing-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 22.75a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v20a.75.75 0 0 1-.75.75m-18 0a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v20a.75.75 0 0 1-.75.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 20c1.886 0 2.828 0 3.414-.586S16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414S13.886 4 12 4s-2.828 0-3.414.586S8 6.114 8 8v8c0 1.886 0 2.828.586 3.414S10.114 20 12 20"></svg:path>`,
})
export class SolarAlignHorizontaSpacingBoldDuotoneIcon {
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
  selector: 'svg[solarAlignHorizontaSpacingLineDuotoneIcon],svg[solar-align-horizonta-spacing-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 2v20M21 2v20" opacity=".5"></svg:path><svg:path d="M12 4c-1.886 0-2.828 0-3.414.586S8 6.114 8 8v8c0 1.886 0 2.828.586 3.414S10.114 20 12 20s2.828 0 3.414-.586S16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414S13.886 4 12 4Z"></svg:path></svg:g>`,
})
export class SolarAlignHorizontaSpacingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignHorizontaSpacingLinearIcon],svg[solar-align-horizonta-spacing-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 2v20M21 2v20"></svg:path><svg:path d="M12 4c-1.886 0-2.828 0-3.414.586S8 6.114 8 8v8c0 1.886 0 2.828.586 3.414S10.114 20 12 20s2.828 0 3.414-.586S16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414S13.886 4 12 4Z"></svg:path></svg:g>`,
})
export class SolarAlignHorizontaSpacingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignHorizontaSpacingOutlineIcon],svg[solar-align-horizonta-spacing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 3 1.25m18 0a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m-9.052 2h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v8.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08h-.104c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242V7.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M9.905 4.817c-.461.062-.659.169-.789.3s-.237.327-.3.788C8.753 6.388 8.75 7.036 8.75 8v8c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095V8c0-.964-.002-1.612-.066-2.095c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlignHorizontaSpacingOutlineIcon {
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
  selector: 'svg[solarAlignHorizontalCenterBoldDuotoneIcon],svg[solar-align-horizontal-center-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 14h-5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C7 15.098 7 15.565 7 16.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C8.098 19 8.565 19 9.5 19h5c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C15.902 14 15.435 14 14.5 14" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19 7.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 5 17.435 5 16.5 5h-9c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 10 6.565 10 7.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C19 8.902 19 8.435 19 7.5"></svg:path><svg:path fill="currentColor" d="M12.75 5V2a.75.75 0 0 0-1.5 0v3zm-1.5 5v4h1.5v-4zm0 9v3a.75.75 0 0 0 1.5 0v-3z" opacity=".5"></svg:path>`,
})
export class SolarAlignHorizontalCenterBoldDuotoneIcon {
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
  selector: 'svg[solarAlignHorizontalCenterLineDuotoneIcon],svg[solar-align-horizontal-center-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 2v3m0 17v-3m0-5v-4" opacity=".5"></svg:path><svg:path d="M5 7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 5 6.565 5 7.5 5h9c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 6.098 19 6.565 19 7.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-9c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C5 8.902 5 8.435 5 7.5Zm2 9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h5c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-5c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z"></svg:path></svg:g>`,
})
export class SolarAlignHorizontalCenterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignHorizontalCenterLinearIcon],svg[solar-align-horizontal-center-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 2v3m0 17v-3m0-5v-4"></svg:path><svg:path d="M5 7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 5 6.565 5 7.5 5h9c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 6.098 19 6.565 19 7.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-9c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C5 8.902 5 8.435 5 7.5Zm2 9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h5c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-5c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z"></svg:path></svg:g>`,
})
export class SolarAlignHorizontalCenterLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignHorizontalCenterOutlineIcon],svg[solar-align-horizontal-center-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75m-4.5 4.5c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027s0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027s0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A13 13 0 0 0 16.5 5.75zm2 9c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A13 13 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027s0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a13 13 0 0 0-1.027-.022z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlignHorizontalCenterOutlineIcon {
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
  selector: 'svg[solarAlignLeftBoldDuotoneIcon],svg[solar-align-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.375 7.875c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549c.348-.201.815-.201 1.75-.201h9c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-9c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75m0 9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549c.348-.201.815-.201 1.75-.201h6c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-6c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.375 23.125a.75.75 0 0 0 .75-.75v-20a.75.75 0 0 0-1.5 0v20c0 .414.336.75.75.75" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarAlignLeftBoldDuotoneIcon {
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
  selector: 'svg[solarAlignLeftLineDuotoneIcon],svg[solar-align-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 2v20" opacity=".5"></svg:path><svg:path d="M7 7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 5 8.565 5 9.5 5h9c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C21 6.098 21 6.565 21 7.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-9c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 8.902 7 8.435 7 7.5Zm0 9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h6c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-6c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z"></svg:path></svg:g>`,
})
export class SolarAlignLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignLeftLinearIcon],svg[solar-align-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 2v20"></svg:path><svg:path d="M7 7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 5 8.565 5 9.5 5h9c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C21 6.098 21 6.565 21 7.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-9c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 8.902 7 8.435 7 7.5Zm0 9c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h6c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-6c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z"></svg:path></svg:g>`,
})
export class SolarAlignLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignLeftOutlineIcon],svg[solar-align-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 3 1.25m6.468 3h9.064c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H9.467c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028m-.995 1.522c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027s0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027s0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A13 13 0 0 0 18.5 5.75h-9c-.481 0-.792 0-1.027.022m.995 7.478h6.064c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H9.467c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028m-.995 1.522c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348a13 13 0 0 0-.02 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h6c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027s0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a13 13 0 0 0-1.027-.022h-6c-.481 0-.792 0-1.027.022" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlignLeftOutlineIcon {
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
  selector: 'svg[solarAlignRightBoldDuotoneIcon],svg[solar-align-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.625 7.875c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201h-9c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75m0 9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201h-6c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201h6c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.625 23.125a.75.75 0 0 1-.75-.75v-20a.75.75 0 0 1 1.5 0v20a.75.75 0 0 1-.75.75" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarAlignRightBoldDuotoneIcon {
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
  selector: 'svg[solarAlignRightLineDuotoneIcon],svg[solar-align-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 2v20" opacity=".5"></svg:path><svg:path d="M17 7.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C15.902 5 15.435 5 14.5 5h-9c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C3 6.098 3 6.565 3 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C4.098 10 4.565 10 5.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C17 8.902 17 8.435 17 7.5Zm0 9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C15.902 14 15.435 14 14.5 14h-6c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C6 15.098 6 15.565 6 16.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C7.098 19 7.565 19 8.5 19h6c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75Z"></svg:path></svg:g>`,
})
export class SolarAlignRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignRightLinearIcon],svg[solar-align-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 2v20"></svg:path><svg:path d="M17 7.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C15.902 5 15.435 5 14.5 5h-9c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C3 6.098 3 6.565 3 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C4.098 10 4.565 10 5.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C17 8.902 17 8.435 17 7.5Zm0 9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C15.902 14 15.435 14 14.5 14h-6c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C6 15.098 6 15.565 6 16.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C7.098 19 7.565 19 8.5 19h6c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75Z"></svg:path></svg:g>`,
})
export class SolarAlignRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignRightOutlineIcon],svg[solar-align-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m-15.532 3h9.064c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H5.467c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028m-.995 1.522c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027s0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078c.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027s0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A13 13 0 0 0 14.5 5.75h-9c-.481 0-.792 0-1.027.022m3.995 7.478h6.064c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028H8.467c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028m-.995 1.522c-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348a13 13 0 0 0-.02 1.027c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022h6c.481 0 .792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027s0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a13 13 0 0 0-1.027-.022h-6c-.481 0-.792 0-1.027.022" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlignRightOutlineIcon {
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
  selector: 'svg[solarAlignTopBoldDuotoneIcon],svg[solar-align-top-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 7.75c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.848 5 9.315 5 10.25v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201A1.5 1.5 0 0 0 9.799 21c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201m9 0c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.848 14 9.315 14 10.25v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 3.75a.75.75 0 0 1-.75.75H2A.75.75 0 1 1 2 3h20a.75.75 0 0 1 .75.75" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarAlignTopBoldDuotoneIcon {
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
  selector: 'svg[solarAlignTopLineDuotoneIcon],svg[solar-align-top-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 3h20" opacity=".5"></svg:path><svg:path d="M7.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.098 5 8.565 5 9.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 21 6.565 21 7.5 21s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 7 8.435 7 7.5 7Zm9 0c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z"></svg:path></svg:g>`,
})
export class SolarAlignTopLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignTopLinearIcon],svg[solar-align-top-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 3h20"></svg:path><svg:path d="M7.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.098 5 8.565 5 9.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 21 6.565 21 7.5 21s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 7 8.435 7 7.5 7Zm9 0c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z"></svg:path></svg:g>`,
})
export class SolarAlignTopLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignTopOutlineIcon],svg[solar-align-top-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3m6.218 3.25h.064c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v9.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962a14 14 0 0 1-.028-1.13V9.467c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028m-.995 1.522c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027v9c0 .481 0 .792.022 1.027c.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022s.792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .275-.274c.023-.04.058-.123.078-.348c.021-.235.022-.546.022-1.027v-9c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.078-.348a.75.75 0 0 0-.275-.275c-.04-.023-.123-.058-.348-.078A13 13 0 0 0 7.5 7.75c-.481 0-.792 0-1.027.022m9.995-1.522h.064c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v6.065c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13V9.467c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028m-.995 1.522c-.225.02-.307.055-.348.078a.75.75 0 0 0-.274.275c-.024.04-.059.123-.079.348c-.021.235-.022.546-.022 1.027v6c0 .481 0 .792.022 1.027c.02.225.055.307.079.348a.75.75 0 0 0 .274.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022s.792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027v-6c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A13 13 0 0 0 16.5 7.75c-.481 0-.792 0-1.027.022" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlignTopOutlineIcon {
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
  selector: 'svg[solarAlignVerticalCenterBoldDuotoneIcon],svg[solar-align-vertical-center-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 19 6.565 19 7.5 19s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 5 8.435 5 7.5 5"></svg:path><svg:path fill="currentColor" d="M5 11.25H2a.75.75 0 0 0 0 1.5h3zm5 1.5h4v-1.5h-4zm9 0h3a.75.75 0 0 0 0-1.5h-3z" opacity=".5"></svg:path>`,
})
export class SolarAlignVerticalCenterBoldDuotoneIcon {
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
  selector: 'svg[solarAlignVerticalCenterLineDuotoneIcon],svg[solar-align-vertical-center-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12h3m17 0h-3m-5 0h-4" opacity=".5"></svg:path><svg:path d="M7.5 5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 19 6.565 19 7.5 19s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 5 8.435 5 7.5 5Zm9 2c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z"></svg:path></svg:g>`,
})
export class SolarAlignVerticalCenterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignVerticalCenterLinearIcon],svg[solar-align-vertical-center-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12h3m17 0h-3m-5 0h-4"></svg:path><svg:path d="M7.5 5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 19 6.565 19 7.5 19s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 5 8.435 5 7.5 5Zm9 2c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z"></svg:path></svg:g>`,
})
export class SolarAlignVerticalCenterLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignVerticalCenterOutlineIcon],svg[solar-align-vertical-center-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.468 4.25h.064c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v3.783h2.5V9.468c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028h.065c.44 0 .82 0 1.13.028c.33.03.656.096.963.273c.342.198.626.482.824.824c.177.307.243.633.273.962c.028.312.028.691.028 1.13v1.783H22a.75.75 0 0 1 0 1.5h-2.25v1.782c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13V12.75h-2.5v3.782c0 .44 0 .82-.028 1.13c-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273c-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028c-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962c-.028-.312-.028-.691-.028-1.13V12.75H2a.75.75 0 0 1 0-1.5h2.25V7.468c0-.44 0-.82.028-1.13c.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273c.312-.028.691-.028 1.13-.028M5.75 12.001V7.5c0-.481 0-.792.022-1.027c.02-.225.055-.307.078-.348a.75.75 0 0 1 .275-.275c.04-.023.123-.058.348-.078c.235-.021.546-.022 1.027-.022s.792 0 1.027.022c.225.02.307.055.348.078a.75.75 0 0 1 .275.275c.023.04.058.123.078.348c.021.235.022.546.022 1.027v9c0 .481 0 .792-.022 1.027c-.02.225-.055.307-.078.348a.75.75 0 0 1-.275.274c-.04.024-.123.058-.348.079c-.235.021-.546.022-1.027.022s-.792 0-1.027-.022c-.225-.02-.307-.055-.348-.079a.75.75 0 0 1-.275-.274c-.023-.04-.058-.123-.078-.348A13 13 0 0 1 5.75 16.5zm9 2.499c0 .481 0 .792.022 1.027c.02.225.055.307.079.348a.75.75 0 0 0 .274.274c.04.024.123.058.348.079c.235.021.546.022 1.027.022s.792 0 1.027-.022c.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348c.021-.235.022-.546.022-1.027v-5c0-.481 0-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A13 13 0 0 0 16.5 7.75c-.481 0-.792 0-1.027.022c-.225.02-.307.055-.348.078a.75.75 0 0 0-.274.275c-.024.04-.059.123-.079.348c-.021.235-.022.546-.022 1.027z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlignVerticalCenterOutlineIcon {
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
  selector: 'svg[solarAlignVerticalSpacingBoldDuotoneIcon],svg[solar-align-vertical-spacing-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0-18A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4 12c0 1.886 0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12s0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12"></svg:path>`,
})
export class SolarAlignVerticalSpacingBoldDuotoneIcon {
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
  selector: 'svg[solarAlignVerticalSpacingLineDuotoneIcon],svg[solar-align-vertical-spacing-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 3H2m20 18H2" opacity=".5"></svg:path><svg:path d="M20 12c0-1.886 0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12s0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12Z"></svg:path></svg:g>`,
})
export class SolarAlignVerticalSpacingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignVerticalSpacingLinearIcon],svg[solar-align-vertical-spacing-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 3H2m20 18H2"></svg:path><svg:path d="M20 12c0-1.886 0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12s0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12Z"></svg:path></svg:g>`,
})
export class SolarAlignVerticalSpacingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAlignVerticalSpacingOutlineIcon],svg[solar-align-vertical-spacing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3m6.698 4.25h8.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08H7.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M5.905 8.817c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095s.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h8c.964 0 1.612-.002 2.095-.066c.461-.063.659-.17.789-.3s.237-.328.3-.79c.064-.482.066-1.13.066-2.094s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066H8c-.964 0-1.612.002-2.095.067M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarAlignVerticalSpacingOutlineIcon {
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
  selector: 'svg[solarAltArrowDownBoldDuotoneIcon],svg[solar-alt-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z"></svg:path><svg:path fill="currentColor" d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z" opacity=".5"></svg:path>`,
})
export class SolarAltArrowDownBoldDuotoneIcon {
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
  selector: 'svg[solarAltArrowDownLineDuotoneIcon],svg[solar-alt-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 9l-7 6l-7-6"></svg:path>`,
})
export class SolarAltArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowDownLinearIcon],svg[solar-alt-arrow-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 9l-7 6l-7-6"></svg:path>`,
})
export class SolarAltArrowDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowDownOutlineIcon],svg[solar-alt-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057" clip-rule="evenodd"></svg:path>`,
})
export class SolarAltArrowDownOutlineIcon {
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
  selector: 'svg[solarAltArrowLeftBoldDuotoneIcon],svg[solar-alt-arrow-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.596 8.303L8.165 11.63a.5.5 0 0 0 0 .74l6.63 6.43c.414.401 1.205.158 1.205-.37v-5.723z"></svg:path><svg:path fill="currentColor" d="M16 11.293V5.57c0-.528-.791-.771-1.205-.37l-2.482 2.406z" opacity=".5"></svg:path>`,
})
export class SolarAltArrowLeftBoldDuotoneIcon {
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
  selector: 'svg[solarAltArrowLeftLineDuotoneIcon],svg[solar-alt-arrow-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 5l-6 7l6 7"></svg:path>`,
})
export class SolarAltArrowLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowLeftLinearIcon],svg[solar-alt-arrow-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 5l-6 7l6 7"></svg:path>`,
})
export class SolarAltArrowLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowLeftOutlineIcon],svg[solar-alt-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081" clip-rule="evenodd"></svg:path>`,
})
export class SolarAltArrowLeftOutlineIcon {
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
  selector: 'svg[solarAltArrowRightBoldDuotoneIcon],svg[solar-alt-arrow-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.404 8.303l3.431 3.327c.22.213.22.527 0 .74l-6.63 6.43C8.79 19.201 8 18.958 8 18.43v-5.723z"></svg:path><svg:path fill="currentColor" d="M8 11.293V5.57c0-.528.79-.771 1.205-.37l2.481 2.406z" opacity=".5"></svg:path>`,
})
export class SolarAltArrowRightBoldDuotoneIcon {
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
  selector: 'svg[solarAltArrowRightLineDuotoneIcon],svg[solar-alt-arrow-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7"></svg:path>`,
})
export class SolarAltArrowRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowRightLinearIcon],svg[solar-alt-arrow-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7"></svg:path>`,
})
export class SolarAltArrowRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowRightOutlineIcon],svg[solar-alt-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"></svg:path>`,
})
export class SolarAltArrowRightOutlineIcon {
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
  selector: 'svg[solarAltArrowUpBoldDuotoneIcon],svg[solar-alt-arrow-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.303 11.596l3.327-3.431a.5.5 0 0 1 .74 0l6.43 6.63c.401.414.158 1.205-.37 1.205h-5.723z"></svg:path><svg:path fill="currentColor" d="M11.293 16H5.57c-.528 0-.771-.791-.37-1.205l2.406-2.482z" opacity=".5"></svg:path>`,
})
export class SolarAltArrowUpBoldDuotoneIcon {
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
  selector: 'svg[solarAltArrowUpLineDuotoneIcon],svg[solar-alt-arrow-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 15l-7-6l-7 6"></svg:path>`,
})
export class SolarAltArrowUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowUpLinearIcon],svg[solar-alt-arrow-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 15l-7-6l-7 6"></svg:path>`,
})
export class SolarAltArrowUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowUpOutlineIcon],svg[solar-alt-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.512 8.43a.75.75 0 0 1 .976 0l7 6a.75.75 0 1 1-.976 1.14L12 9.987l-6.512 5.581a.75.75 0 1 1-.976-1.138z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAltArrowUpOutlineIcon {
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
  selector: 'svg[solarArchiveBoldDuotoneIcon],svg[solar-archive-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 21h1c3.771 0 5.657 0 6.828-1.172S20.5 16.771 20.5 13V6.998C20.355 7 20.15 7 20 7H4c-.15 0-.355 0-.5-.002V13c0 3.771 0 5.657 1.172 6.828S7.729 21 11.5 21m-2.424-9.883C9 11.301 9 11.534 9 12s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h3c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C15 12.699 15 12.466 15 12s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-3c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5" opacity=".5"></svg:path>`,
})
export class SolarArchiveBoldDuotoneIcon {
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
  selector: 'svg[solarArchiveCheckBoldDuotoneIcon],svg[solar-archive-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 21h1c3.771 0 5.657 0 6.828-1.172S20.5 16.771 20.5 13V6.998C20.355 7 20.15 7 20 7H4c-.15 0-.355 0-.5-.002V13c0 3.771 0 5.657 1.172 6.828S7.729 21 11.5 21m3.56-9.5a.75.75 0 0 0-1.12-1l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5" opacity=".5"></svg:path>`,
})
export class SolarArchiveCheckBoldDuotoneIcon {
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
  selector: 'svg[solarArchiveCheckLineDuotoneIcon],svg[solar-archive-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V7" opacity=".5"></svg:path><svg:path d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9.5 13.4l1.429 1.6l3.571-4"></svg:path></svg:g>`,
})
export class SolarArchiveCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveCheckLinearIcon],svg[solar-archive-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V7"></svg:path><svg:path d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9.5 13.4l1.429 1.6l3.571-4"></svg:path></svg:g>`,
})
export class SolarArchiveCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveCheckOutlineIcon],svg[solar-archive-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.955 2.25h16.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04c-.293.294-.647.41-.987.462v5.357c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-1.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V7.7c-.34-.052-.694-.168-.987-.462c-.31-.309-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m.295 5.5V13c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289V7.75zM2.823 3.823l.003-.001l.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03h16c.493 0 .787.002.997.03a.7.7 0 0 1 .177.042l.003.001l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997s-.002.787-.03.997a.7.7 0 0 1-.042.177l-.001.003l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03H4c-.493 0-.787-.002-.997-.03a.7.7 0 0 1-.177-.042l-.003-.001l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997s.002-.787.03-.997a.7.7 0 0 1 .042-.177zM15 10.441a.75.75 0 0 1 .06 1.058l-3.571 4a.75.75 0 0 1-1.119 0l-1.428-1.6a.75.75 0 1 1 1.118-.998l.87.973l3.01-3.374a.75.75 0 0 1 1.058-.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveCheckOutlineIcon {
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
  selector: 'svg[solarArchiveDownBoldDuotoneIcon],svg[solar-archive-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.558 17.502a.75.75 0 0 1-1.115 0l-3-3.334a.75.75 0 0 1 1.114-1.003l1.693 1.88V7H4c-.15 0-.355 0-.5-.002V13c0 3.771 0 5.657 1.172 6.828S7.729 21 11.5 21h1c3.771 0 5.657 0 6.828-1.172S20.5 16.771 20.5 13V6.998C20.355 7 20.15 7 20 7h-7.25v8.046l1.693-1.881a.75.75 0 0 1 1.114 1.003z"></svg:path><svg:path fill="currentColor" d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5" opacity=".5"></svg:path>`,
})
export class SolarArchiveDownBoldDuotoneIcon {
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
  selector: 'svg[solarArchiveDownLineDuotoneIcon],svg[solar-archive-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V7" opacity=".5"></svg:path><svg:path d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7v9m0 0l3-3.333M12 16l-3-3.333"></svg:path></svg:g>`,
})
export class SolarArchiveDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveDownLinearIcon],svg[solar-archive-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V7"></svg:path><svg:path d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7v9m0 0l3-3.333M12 16l-3-3.333"></svg:path></svg:g>`,
})
export class SolarArchiveDownLinearIcon {
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
  selector: 'svg[solarArchiveDownMinimlisticBoldDuotoneIcon],svg[solar-archive-down-minimlistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c4.713 0 7.07 0 8.535 1.464c.757.758 1.123 1.754 1.3 3.192V10H2.164V6.656c.176-1.438.541-2.434 1.299-3.192C4.928 2 7.285 2 11.999 2" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14m10.75-3a.75.75 0 0 0-1.5 0v4.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22z" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveDownMinimlisticBoldDuotoneIcon {
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
  selector: 'svg[solarArchiveDownMinimlisticLineDuotoneIcon],svg[solar-archive-down-minimlistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12" opacity=".5"></svg:path><svg:path d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 11v6m0 0l2.5-2.5M12 17l-2.5-2.5"></svg:path></svg:g>`,
})
export class SolarArchiveDownMinimlisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveDownMinimlisticLinearIcon],svg[solar-archive-down-minimlistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12"></svg:path><svg:path d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 11v6m0 0l2.5-2.5M12 17l-2.5-2.5"></svg:path></svg:g>`,
})
export class SolarArchiveDownMinimlisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveDownMinimlisticOutlineIcon],svg[solar-archive-down-minimlistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.53 17.53a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V11a.75.75 0 0 1 1.5 0v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529V12h.01c-.01.579-.01 1.23-.01 1.966v.068c0 1.371 0 2.447.07 3.311c.073.88.221 1.607.557 2.265a5.75 5.75 0 0 0 2.513 2.513c.658.336 1.385.485 2.265.556c.864.071 1.94.071 3.311.071h4.068c1.371 0 2.447 0 3.311-.07c.88-.072 1.607-.221 2.265-.557a5.75 5.75 0 0 0 2.513-2.513c.336-.658.485-1.385.556-2.265c.071-.864.071-1.94.071-3.311v-.068c0-.736 0-1.387-.01-1.966h.01v-.057c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M4.39 5.877a5.8 5.8 0 0 0-1.508 1.11q.02-.192.044-.373c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619q.023.18.044.373a5.8 5.8 0 0 0-1.508-1.11c-.658-.336-1.385-.484-2.265-.556c-.864-.071-1.94-.071-3.311-.071H9.966c-1.371 0-2.447 0-3.311.07c-.88.073-1.607.221-2.265.557m.68 1.336c.412-.21.92-.333 1.707-.397c.796-.065 1.81-.066 3.223-.066h4c1.412 0 2.427 0 3.223.066c.787.064 1.295.188 1.707.397a4.25 4.25 0 0 1 1.857 1.858c.21.411.333.919.397 1.706c.065.796.066 1.81.066 3.223s0 2.427-.066 3.223c-.064.787-.188 1.295-.397 1.707a4.25 4.25 0 0 1-1.857 1.857c-.412.21-.92.333-1.707.397c-.796.065-1.81.066-3.223.066h-4c-1.413 0-2.427 0-3.223-.066c-.787-.064-1.295-.188-1.706-.397a4.25 4.25 0 0 1-1.858-1.857c-.21-.412-.333-.92-.397-1.707c-.065-.796-.066-1.81-.066-3.223s0-2.427.066-3.223c.064-.787.188-1.295.397-1.706a4.25 4.25 0 0 1 1.858-1.858" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveDownMinimlisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveDownOutlineIcon],svg[solar-archive-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.955 2.25h16.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04c-.293.294-.647.41-.987.462v5.357c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-1.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V7.7c-.34-.052-.694-.168-.987-.462c-.31-.309-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m.295 5.5V13c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289V7.75h-7v6.296l1.693-1.881a.75.75 0 0 1 1.114 1.003l-3 3.334a.75.75 0 0 1-1.114 0l-3-3.334a.75.75 0 0 1 1.114-1.003l1.693 1.88V7.75zM20 6.25c.493 0 .787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03H4c-.493 0-.787.002-.997.03a.7.7 0 0 0-.177.042l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997s.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03zM2.823 6.177" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveLineDuotoneIcon],svg[solar-archive-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h3c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-3c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 12.699 9 12.466 9 12Z"></svg:path><svg:path stroke-linecap="round" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V7" opacity=".5"></svg:path><svg:path d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z"></svg:path></svg:g>`,
})
export class SolarArchiveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveLinearIcon],svg[solar-archive-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 12c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54c.184-.077.417-.077.883-.077h3c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077h-3c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C9 12.699 9 12.466 9 12Z"></svg:path><svg:path stroke-linecap="round" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V7"></svg:path><svg:path d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z"></svg:path></svg:g>`,
})
export class SolarArchiveLinearIcon {
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
  selector: 'svg[solarArchiveMinimalisticBoldDuotoneIcon],svg[solar-archive-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.545 8.73C2 9.8 2 11.2 2 14s0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 22 7.2 22 10 22h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 18.2 22 16.8 22 14s0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 6 16.8 6 14 6h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 8.73M15.06 12.5a.75.75 0 0 0-1.12-1l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 2c4.713 0 7.07 0 8.535 1.464c.757.758 1.123 1.754 1.3 3.192V10H2.164V6.656c.176-1.438.541-2.434 1.299-3.192C4.928 2 7.285 2 11.999 2" opacity=".5"></svg:path>`,
})
export class SolarArchiveMinimalisticBoldDuotoneIcon {
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
  selector: 'svg[solarArchiveMinimalisticLineDuotoneIcon],svg[solar-archive-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12" opacity=".5"></svg:path><svg:path d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9.5 14.4l1.429 1.6l3.571-4"></svg:path></svg:g>`,
})
export class SolarArchiveMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveMinimalisticLinearIcon],svg[solar-archive-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12"></svg:path><svg:path d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9.5 14.4l1.429 1.6l3.571-4"></svg:path></svg:g>`,
})
export class SolarArchiveMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveMinimalisticOutlineIcon],svg[solar-archive-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529V12h-.01c.01.579.01 1.23.01 1.966v.068c0 1.371 0 2.447-.07 3.311c-.072.88-.221 1.607-.557 2.265a5.75 5.75 0 0 1-2.513 2.513c-.658.336-1.385.485-2.265.556c-.864.071-1.94.071-3.311.071H9.966c-1.371 0-2.447 0-3.311-.07c-.88-.072-1.607-.221-2.265-.557a5.75 5.75 0 0 1-2.513-2.513c-.336-.658-.484-1.385-.556-2.265c-.071-.864-.071-1.94-.071-3.311v-.068c0-.736 0-1.387.01-1.966h-.01v-.057c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19M2.882 6.987a5.8 5.8 0 0 1 1.508-1.11c.658-.336 1.385-.484 2.265-.556c.864-.071 1.94-.071 3.311-.071h4.068c1.371 0 2.447 0 3.311.07c.88.073 1.607.221 2.265.557a5.8 5.8 0 0 1 1.508 1.11a13 13 0 0 0-.044-.373c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619q-.024.18-.044.373m3.895-.171c-.787.064-1.295.188-1.706.397a4.25 4.25 0 0 0-1.858 1.858c-.21.411-.333.919-.397 1.706c-.065.796-.066 1.81-.066 3.223s0 2.427.066 3.223c.064.787.188 1.295.397 1.707a4.25 4.25 0 0 0 1.858 1.857c.411.21.919.333 1.706.397c.796.065 1.81.066 3.223.066h4c1.412 0 2.427 0 3.223-.066c.787-.064 1.295-.188 1.707-.397a4.25 4.25 0 0 0 1.857-1.857c.21-.412.333-.92.397-1.707c.065-.796.066-1.81.066-3.223s0-2.427-.066-3.223c-.064-.787-.188-1.295-.397-1.706a4.25 4.25 0 0 0-1.857-1.858c-.412-.21-.92-.333-1.707-.397c-.796-.065-1.81-.066-3.223-.066h-4c-1.413 0-2.427 0-3.223.066M15 11.44a.75.75 0 0 1 .06 1.058l-3.572 4a.75.75 0 0 1-1.119 0l-1.428-1.6a.75.75 0 1 1 1.118-.998l.87.973L13.94 11.5a.75.75 0 0 1 1.058-.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveOutlineIcon],svg[solar-archive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.955 2.25h16.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04c-.293.294-.647.41-.987.462v5.357c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-1.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V7.7c-.34-.052-.694-.168-.987-.462c-.31-.309-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m.295 5.5V13c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289V7.75zM2.823 3.823l.003-.001l.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03h16c.493 0 .787.002.997.03a.7.7 0 0 1 .177.042l.003.001l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997s-.002.787-.03.997a.7.7 0 0 1-.042.177l-.001.003l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03H4c-.493 0-.787-.002-.997-.03a.7.7 0 0 1-.177-.042l-.003-.001l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997s.002-.787.03-.997a.7.7 0 0 1 .042-.177zm7.655 5.927h3.044c.214 0 .41 0 .576.011c.178.012.373.04.572.122c.428.178.77.519.947.947c.082.199.11.394.122.572c.011.165.011.362.011.576v.044c0 .214 0 .41-.011.576c-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.199.082-.394.11-.572.122c-.165.011-.362.011-.576.011h-3.044c-.214 0-.41 0-.576-.011a1.8 1.8 0 0 1-.572-.122a1.75 1.75 0 0 1-.947-.947a1.8 1.8 0 0 1-.122-.572a9 9 0 0 1-.011-.576v-.044c0-.214 0-.41.011-.576c.012-.178.04-.373.122-.572a1.75 1.75 0 0 1 .947-.947c.199-.082.394-.11.572-.122c.165-.011.362-.011.576-.011m-.577 1.52a.25.25 0 0 0-.13.131a1 1 0 0 0-.013.103A8 8 0 0 0 9.75 12c0 .243 0 .388.008.496c.004.067.01.095.012.103a.25.25 0 0 0 .131.13a1 1 0 0 0 .103.013c.108.008.253.008.496.008h3c.243 0 .388 0 .496-.008a1 1 0 0 0 .103-.012a.25.25 0 0 0 .13-.131a1 1 0 0 0 .013-.103c.008-.108.008-.253.008-.496s0-.388-.008-.496a1 1 0 0 0-.012-.103a.25.25 0 0 0-.131-.13a1 1 0 0 0-.103-.013a8 8 0 0 0-.496-.008h-3c-.243 0-.388 0-.496.008a1 1 0 0 0-.103.012" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveOutlineIcon {
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
  selector: 'svg[solarArchiveUpBoldDuotoneIcon],svg[solar-archive-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 21c3.605 0 5.433-.026 6.578-1.172C20.5 18.657 20.5 16.771 20.5 13V6.998C20.355 7 20.15 7 20 7H4c-.15 0-.355 0-.5-.002V13c0 3.771 0 5.657 1.172 6.828C5.817 20.974 7.645 21 11.25 21v-7.046l-1.693 1.881a.75.75 0 0 1-1.114-1.003l3-3.334a.75.75 0 0 1 1.114 0l3 3.334a.75.75 0 0 1-1.114 1.003l-1.693-1.88z"></svg:path><svg:path fill="currentColor" d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5" opacity=".5"></svg:path>`,
})
export class SolarArchiveUpBoldDuotoneIcon {
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
  selector: 'svg[solarArchiveUpLineDuotoneIcon],svg[solar-archive-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-9m0 0l3 3.333M12 12l-3 3.333"></svg:path><svg:path stroke-linecap="round" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V7" opacity=".5"></svg:path><svg:path d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z"></svg:path></svg:g>`,
})
export class SolarArchiveUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveUpLinearIcon],svg[solar-archive-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-9m0 0l3 3.333M12 12l-3 3.333"></svg:path><svg:path stroke-linecap="round" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V7"></svg:path><svg:path d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z"></svg:path></svg:g>`,
})
export class SolarArchiveUpLinearIcon {
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
  selector: 'svg[solarArchiveUpMinimlisticBoldDuotoneIcon],svg[solar-archive-up-minimlistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c4.713 0 7.07 0 8.535 1.464c.757.758 1.123 1.754 1.3 3.192V10H2.164V6.656c.176-1.438.541-2.434 1.299-3.192C4.928 2 7.285 2 11.999 2" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14m10.53-3.53a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V17a.75.75 0 0 0 1.5 0v-4.19l1.22 1.22a.75.75 0 1 0 1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveUpMinimlisticBoldDuotoneIcon {
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
  selector: 'svg[solarArchiveUpMinimlisticLineDuotoneIcon],svg[solar-archive-up-minimlistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12" opacity=".5"></svg:path><svg:path d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 17v-6m0 0l2.5 2.5M12 11l-2.5 2.5"></svg:path></svg:g>`,
})
export class SolarArchiveUpMinimlisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveUpMinimlisticLinearIcon],svg[solar-archive-up-minimlistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12"></svg:path><svg:path d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 17v-6m0 0l2.5 2.5M12 11l-2.5 2.5"></svg:path></svg:g>`,
})
export class SolarArchiveUpMinimlisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveUpMinimlisticOutlineIcon],svg[solar-archive-up-minimlistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.53 10.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V17a.75.75 0 0 0 1.5 0v-4.19l1.22 1.22a.75.75 0 1 0 1.06-1.06z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529V12h.01c-.01.579-.01 1.23-.01 1.966v.068c0 1.371 0 2.447.07 3.311c.073.88.221 1.607.557 2.265a5.75 5.75 0 0 0 2.513 2.513c.658.336 1.385.485 2.265.556c.864.071 1.94.071 3.311.071h4.068c1.371 0 2.447 0 3.311-.07c.88-.072 1.607-.221 2.265-.557a5.75 5.75 0 0 0 2.513-2.513c.336-.658.485-1.385.556-2.265c.071-.864.071-1.94.071-3.311v-.068c0-.736 0-1.387-.01-1.966h.01v-.057c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19M4.39 5.877a5.8 5.8 0 0 0-1.508 1.11q.02-.192.044-.373c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619q.023.18.044.373a5.8 5.8 0 0 0-1.508-1.11c-.658-.336-1.385-.484-2.265-.556c-.864-.071-1.94-.071-3.311-.071H9.966c-1.371 0-2.447 0-3.311.07c-.88.073-1.607.221-2.265.557m.68 1.336c.412-.21.92-.333 1.707-.397c.796-.065 1.81-.066 3.223-.066h4c1.412 0 2.427 0 3.223.066c.787.064 1.295.188 1.707.397a4.25 4.25 0 0 1 1.857 1.858c.21.411.333.919.397 1.706c.065.796.066 1.81.066 3.223s0 2.427-.066 3.223c-.064.787-.188 1.295-.397 1.707a4.25 4.25 0 0 1-1.857 1.857c-.412.21-.92.333-1.707.397c-.796.065-1.81.066-3.223.066h-4c-1.413 0-2.427 0-3.223-.066c-.787-.064-1.295-.188-1.706-.397a4.25 4.25 0 0 1-1.858-1.857c-.21-.412-.333-.92-.397-1.707c-.065-.796-.066-1.81-.066-3.223s0-2.427.066-3.223c.064-.787.188-1.295.397-1.706a4.25 4.25 0 0 1 1.858-1.858" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveUpMinimlisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArchiveUpOutlineIcon],svg[solar-archive-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.955 2.25h16.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04c-.293.294-.647.41-.987.462v5.357c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-1.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V7.7c-.34-.052-.694-.168-.987-.462c-.31-.309-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m.295 5.5V13c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c.982.132 2.263.14 4.039.14v-6.296l-1.693 1.881a.75.75 0 0 1-1.114-1.003l3-3.334a.75.75 0 0 1 1.114 0l3 3.334a.75.75 0 0 1-1.114 1.003l-1.693-1.88v6.295c1.776 0 3.057-.008 4.04-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289V7.75zM2.823 3.823l.003-.001l.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03h16c.493 0 .787.002.997.03a.7.7 0 0 1 .177.042l.003.001l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997s-.002.787-.03.997a.7.7 0 0 1-.042.177l-.001.003l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03H4c-.493 0-.787-.002-.997-.03a.7.7 0 0 1-.177-.042l-.003-.001l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997s.002-.787.03-.997a.7.7 0 0 1 .042-.177zm0 2.354" clip-rule="evenodd"></svg:path>`,
})
export class SolarArchiveUpOutlineIcon {
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
  selector: 'svg[solarArmchair2BoldDuotoneIcon],svg[solar-armchair-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.533 18H6.75v2a.75.75 0 1 1-1.5 0v-2.324c-.829-.362-1.49-1.005-1.808-1.817l-.039-.102L2.1 12.264C1.685 11.15 2.613 10 3.927 10c.81 0 1.534.453 1.81 1.134l1.098 2.706c.1.246.15.37.222.47a1.2 1.2 0 0 0 .74.463c.13.027.277.027.57.027h6.98c.569 0 .853 0 1.091-.098q.196-.082.349-.219c.184-.166.281-.405.475-.883l1.001-2.466c.276-.68 1-1.134 1.81-1.134c1.314 0 2.242 1.15 1.827 2.264l-1.12 3c-.195.524-.292.785-.421 1.008a3.43 3.43 0 0 1-1.609 1.404V20a.75.75 0 1 1-1.5 0v-2.005c-.187.005-.415.005-.717.005"></svg:path><svg:path fill="currentColor" d="M13.236 3.5h-2.472c-1.1 0-1.976 0-2.66.088c-.706.09-1.285.28-1.746.72c-.464.441-.669 1.003-.765 1.685c-.093.658-.093 1.495-.093 2.54v2.195q.147.186.237.406l1.098 2.706c.1.246.15.37.222.47a1.2 1.2 0 0 0 .74.463c.13.027.277.027.57.027h6.98c.569 0 .853 0 1.091-.098q.196-.082.349-.219c.184-.166.281-.405.475-.883l1.001-2.466q.09-.221.237-.406V8.533c0-1.045 0-1.882-.093-2.54c-.096-.682-.301-1.244-.765-1.686c-.46-.438-1.04-.629-1.745-.72c-.685-.087-1.56-.087-2.661-.087" opacity=".5"></svg:path>`,
})
export class SolarArmchair2BoldDuotoneIcon {
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
  selector: 'svg[solarArmchair2LineDuotoneIcon],svg[solar-armchair-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6.886 18h9.647c.617 0 .926 0 1.202-.039c1.126-.158 2.1-.785 2.624-1.69c.129-.222.226-.483.421-1.006l1.12-3C22.315 11.15 21.387 10 20.073 10c-.81 0-1.534.453-1.81 1.134l-1 2.466c-.195.478-.292.717-.476.883q-.152.137-.349.219c-.238.098-.522.098-1.091.098h-6.98c-.293 0-.44 0-.57-.027a1.2 1.2 0 0 1-.74-.463c-.072-.1-.122-.224-.222-.47l-1.098-2.706c-.276-.68-1-1.134-1.81-1.134c-1.314 0-2.242 1.15-1.827 2.264l1.303 3.493l.039.102c.497 1.265 1.823 2.12 3.323 2.14z"></svg:path><svg:path d="M6 12V8.571c0-2.155 0-3.232.703-3.902S8.537 4 10.8 4h2.4c2.263 0 3.394 0 4.097.67c.703.668.703 1.745.703 3.9V12" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M18 20v-2M6 20v-1.333" opacity=".5"></svg:path></svg:g>`,
})
export class SolarArmchair2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArmchair2LinearIcon],svg[solar-armchair-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6.886 18h9.647c.617 0 .926 0 1.202-.039c1.126-.158 2.1-.785 2.624-1.69c.129-.222.226-.483.421-1.006l1.12-3C22.315 11.15 21.387 10 20.073 10c-.81 0-1.534.453-1.81 1.134l-1 2.466c-.195.478-.292.717-.476.883q-.152.137-.349.219c-.238.098-.522.098-1.091.098h-6.98c-.293 0-.44 0-.57-.027a1.2 1.2 0 0 1-.74-.463c-.072-.1-.122-.224-.222-.47l-1.098-2.706c-.276-.68-1-1.134-1.81-1.134c-1.314 0-2.242 1.15-1.827 2.264l1.303 3.493l.039.102c.497 1.265 1.823 2.12 3.323 2.14z"></svg:path><svg:path d="M6 12V8.571c0-2.155 0-3.232.703-3.902S8.537 4 10.8 4h2.4c2.263 0 3.394 0 4.097.67c.703.668.703 1.745.703 3.9V12"></svg:path><svg:path stroke-linecap="round" d="M18 20v-2M6 20v-1.333"></svg:path></svg:g>`,
})
export class SolarArmchair2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArmchair2OutlineIcon],svg[solar-armchair-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.749 3.25h2.502c1.088 0 1.976 0 2.678.09c.73.093 1.37.296 1.885.786c.52.496.74 1.12.84 1.833c.096.675.096 1.527.096 2.557v1.057c.4-.21.857-.323 1.323-.323c1.708 0 3.17 1.557 2.53 3.277l-1.12 3l-.023.062c-.173.463-.291.78-.452 1.059c-.498.858-1.309 1.497-2.258 1.833V20a.75.75 0 0 1-1.5 0v-1.254c-.188.004-.4.004-.655.004H6.75V20a.75.75 0 0 1-1.5 0v-1.333q0-.093.021-.179c-1.14-.398-2.086-1.231-2.527-2.354l-.04-.108l-1.306-3.5c-.642-1.719.82-3.276 2.529-3.276c.466 0 .922.113 1.323.323V8.516c0-1.03 0-1.882.095-2.557c.1-.713.32-1.337.84-1.833c.516-.49 1.156-.693 1.886-.786c.702-.09 1.59-.09 2.678-.09M5.25 11.928V12h.03l.86 2.122l.02.049c.08.196.162.4.289.577c.288.4.724.664 1.199.76c.207.043.427.042.666.042h7.139c.46.001.891.002 1.271-.155c.207-.085.399-.204.566-.355c.316-.286.476-.683.63-1.066l.037-.092l.764-1.882h.03v-.072l.207-.512c.147-.362.57-.666 1.115-.666c.92 0 1.314.743 1.124 1.252l-1.12 3c-.204.55-.278.74-.367.894c-.397.685-1.159 1.193-2.079 1.322c-.212.03-.458.032-1.098.032H6.776c-1.237-.018-2.265-.72-2.636-1.665l-.034-.09l-1.303-3.493c-.19-.509.204-1.252 1.124-1.252c.546 0 .968.304 1.115.666zm12-.292V8.57c0-1.1-.002-1.845-.08-2.403c-.076-.532-.208-.782-.39-.955c-.188-.18-.465-.312-1.042-.385c-.595-.077-1.386-.078-2.538-.078h-2.4c-1.152 0-1.943.001-2.538.078c-.577.073-.854.206-1.042.385c-.182.173-.314.423-.39.955c-.078.558-.08 1.304-.08 2.403v3.065l.78 1.922c.053.13.083.203.108.259l.028.055c.05.07.145.14.28.167c.04.007.095.011.422.011h6.979c.637 0 .738-.014.806-.042a.5.5 0 0 0 .131-.081c.002-.001.022-.017.069-.11a7 7 0 0 0 .214-.499z" clip-rule="evenodd"></svg:path>`,
})
export class SolarArmchair2OutlineIcon {
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
  selector: 'svg[solarArmchairBoldDuotoneIcon],svg[solar-armchair-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.179 21H6.82c-.745 0-1.21 0-1.571-.042v1.291a.75.75 0 0 1-1.5 0v-1.865a4 4 0 0 1-1.656-2.494C2 17.45 2 16.92 2 15.857v-4.611C2 10.006 2.943 9 4.105 9c1.163 0 2.106 1.005 2.106 2.246v3.087c0 .943 0 1.415.292 1.707c.293.293.765.293 1.708.293h7.579c.942 0 1.414 0 1.707-.293c.293-.292.293-.764.293-1.707v-3.087c0-1.24.942-2.246 2.105-2.246C21.057 9 22 10.005 22 11.246v4.611c0 1.063 0 1.594-.094 2.033a4 4 0 0 1-1.656 2.494v1.866a.75.75 0 0 1-1.5 0v-1.292c-.36.042-.826.042-1.571.042"></svg:path><svg:path fill="currentColor" d="M6 8.154V17h12V8.154c0-2.3 0-3.451-.482-4.308A3.65 3.65 0 0 0 16.2 2.495C15.365 2 14.243 2 12 2s-3.365 0-4.2.495a3.65 3.65 0 0 0-1.318 1.351C6 4.703 6 5.853 6 8.154" opacity=".5"></svg:path>`,
})
export class SolarArmchairBoldDuotoneIcon {
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
  selector: 'svg[solarArmchairLineDuotoneIcon],svg[solar-armchair-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M6.821 21H17.18c.995 0 1.494 0 1.906-.1c1.404-.342 2.5-1.512 2.821-3.01c.094-.44.094-.97.094-2.033v-4.611C22 10.006 21.057 9 19.895 9c-1.163 0-2.105 1.005-2.105 2.246v5.087H6.21v-5.087C6.21 10.006 5.269 9 4.106 9S2 10.005 2 11.246v4.611c0 1.063 0 1.594.094 2.033c.32 1.498 1.417 2.668 2.822 3.01c.411.1.91.1 1.905.1Z"></svg:path><svg:path d="M6 10V8.154c0-2.3 0-3.451.482-4.308A3.65 3.65 0 0 1 7.8 2.495C8.635 2 9.757 2 12 2s3.365 0 4.2.495c.547.324 1.002.79 1.318 1.351C18 4.703 18 5.853 18 8.154V10" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M19.5 22v-1m-15 1v-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarArmchairLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArmchairLinearIcon],svg[solar-armchair-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M6.821 21H17.18c.995 0 1.494 0 1.906-.1c1.404-.342 2.5-1.512 2.821-3.01c.094-.44.094-.97.094-2.033v-4.611C22 10.006 21.057 9 19.895 9c-1.163 0-2.105 1.005-2.105 2.246v5.087H6.21v-5.087C6.21 10.006 5.269 9 4.106 9S2 10.005 2 11.246v4.611c0 1.063 0 1.594.094 2.033c.32 1.498 1.417 2.668 2.822 3.01c.411.1.91.1 1.905.1Z"></svg:path><svg:path d="M6 10V8.154c0-2.3 0-3.451.482-4.308A3.65 3.65 0 0 1 7.8 2.495C8.635 2 9.757 2 12 2s3.365 0 4.2.495c.547.324 1.002.79 1.318 1.351C18 4.703 18 5.853 18 8.154V10"></svg:path><svg:path stroke-linecap="round" d="M19 22v-1M4 22v-1"></svg:path></svg:g>`,
})
export class SolarArmchairLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArmchairOutlineIcon],svg[solar-armchair-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.963 1.25h.074c1.09 0 1.96 0 2.66.065c.72.067 1.333.207 1.885.534c.662.392 1.21.955 1.59 1.63c.315.56.45 1.181.515 1.914c.063.715.063 1.605.063 2.725v.38a2.7 2.7 0 0 1 1.145-.248c1.622 0 2.855 1.388 2.855 2.996v4.716c0 .962 0 1.567-.11 2.085c-.34 1.586-1.428 2.887-2.89 3.432V22a.75.75 0 0 1-1.5 0v-.258c-.278.008-.593.008-.96.008H6.71c-.883 0-1.463 0-1.961-.119V22a.75.75 0 0 1-1.5 0v-1l.002-.049a4.76 4.76 0 0 1-1.891-2.904c-.111-.518-.111-1.123-.111-2.085v-4.716c0-1.608 1.233-2.996 2.855-2.996c.411 0 .798.09 1.145.248v-.38c0-1.12 0-2.01.063-2.725c.065-.733.2-1.355.516-1.915a4.4 4.4 0 0 1 1.59-1.628c.552-.327 1.166-.467 1.885-.534c.7-.065 1.57-.065 2.66-.065M6.7 10c.167.383.26.806.26 1.246v4.337h10.08v-4.337c0-.44.092-.863.259-1.246h-.049V8.154c0-1.164 0-1.988-.057-2.63c-.056-.631-.162-1.013-.329-1.31a2.9 2.9 0 0 0-1.046-1.074c-.283-.168-.648-.275-1.26-.331c-.622-.058-1.422-.059-2.558-.059s-1.936 0-2.558.059c-.612.056-.977.163-1.26.331a2.9 2.9 0 0 0-1.046 1.074c-.167.297-.273.679-.329 1.31c-.056.642-.057 1.466-.057 2.63V10zm-2.596-.25c-.703 0-1.355.623-1.355 1.496v4.611c0 1.101.004 1.534.077 1.876c.265 1.238 1.162 2.17 2.266 2.438c.302.074.689.079 1.728.079h10.36c1.04 0 1.426-.005 1.728-.079c1.104-.269 2-1.2 2.266-2.438c.073-.342.077-.775.077-1.876v-4.611c0-.873-.652-1.496-1.355-1.496c-.704 0-1.355.623-1.355 1.496v5.087a.75.75 0 0 1-.75.75H6.21a.75.75 0 0 1-.75-.75v-5.087c0-.873-.651-1.496-1.355-1.496" clip-rule="evenodd"></svg:path>`,
})
export class SolarArmchairOutlineIcon {
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
  selector: 'svg[solarArrowDownBoldDuotoneIcon],svg[solar-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v9.25h-1.5V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 13.25a.75.75 0 0 0-.53 1.28l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0-.53-1.28z"></svg:path>`,
})
export class SolarArrowDownBoldDuotoneIcon {
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
  selector: 'svg[solarArrowDownLineDuotoneIcon],svg[solar-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 4a.75.75 0 0 0-1.5 0zm-1.5 0v16h1.5V4z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 14l-6 6l-6-6"></svg:path></svg:g>`,
})
export class SolarArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowDownLinearIcon],svg[solar-arrow-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m0 0l6-6m-6 6l-6-6"></svg:path>`,
})
export class SolarArrowDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowDownOutlineIcon],svg[solar-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v14.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowDownOutlineIcon {
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
  selector: 'svg[solarArrowLeftBoldDuotoneIcon],svg[solar-arrow-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.75 12a.75.75 0 0 0-.75-.75h-9.25v1.5H20a.75.75 0 0 0 .75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.75 18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53z"></svg:path>`,
})
export class SolarArrowLeftBoldDuotoneIcon {
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
  selector: 'svg[solarArrowLeftDownBoldDuotoneIcon],svg[solar-arrow-left-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.56 13.5l-1.06-1.06l-3.97-3.97A.75.75 0 0 0 5.25 9v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .53-1.28z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l-6.97 6.97l1.06 1.06z" opacity=".5"></svg:path>`,
})
export class SolarArrowLeftDownBoldDuotoneIcon {
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
  selector: 'svg[solarArrowLeftDownLineDuotoneIcon],svg[solar-arrow-left-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M18.53 6.53a.75.75 0 0 0-1.06-1.06zm-1.06-1.06l-12 12l1.06 1.06l12-12z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 9v9h9"></svg:path></svg:g>`,
})
export class SolarArrowLeftDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftDownLinearIcon],svg[solar-arrow-left-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6L6 18m0 0V9m0 9h9"></svg:path>`,
})
export class SolarArrowLeftDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftDownOutlineIcon],svg[solar-arrow-left-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.53 5.47a.75.75 0 0 1 0 1.06L7.81 17.25H15a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v7.19L17.47 5.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowLeftDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftLineDuotoneIcon],svg[solar-arrow-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20 12.75a.75.75 0 0 0 0-1.5zm0-1.5H4v1.5h16z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 6l-6 6l6 6"></svg:path></svg:g>`,
})
export class SolarArrowLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftLinearIcon],svg[solar-arrow-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m0 0l6-6m-6 6l6 6"></svg:path>`,
})
export class SolarArrowLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftOutlineIcon],svg[solar-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowLeftOutlineIcon {
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
  selector: 'svg[solarArrowLeftUpBoldDuotoneIcon],svg[solar-arrow-left-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.53 15.53A.75.75 0 0 1 5.25 15V6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 .53 1.28z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.53 17.47a.75.75 0 1 1-1.06 1.06l-6.97-6.97l1.06-1.06z" opacity=".5"></svg:path>`,
})
export class SolarArrowLeftUpBoldDuotoneIcon {
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
  selector: 'svg[solarArrowLeftUpLineDuotoneIcon],svg[solar-arrow-left-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M17.47 18.53a.75.75 0 1 0 1.06-1.06zm1.06-1.06l-12-12l-1.06 1.06l12 12z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 6H6v9"></svg:path></svg:g>`,
})
export class SolarArrowLeftUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftUpLinearIcon],svg[solar-arrow-left-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 18L6 6m0 0h9M6 6v9"></svg:path>`,
})
export class SolarArrowLeftUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftUpOutlineIcon],svg[solar-arrow-left-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 0 1.5H7.81l10.72 10.72a.75.75 0 1 1-1.06 1.06L6.75 7.81V15a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowLeftUpOutlineIcon {
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
  selector: 'svg[solarArrowRightBoldDuotoneIcon],svg[solar-arrow-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z"></svg:path>`,
})
export class SolarArrowRightBoldDuotoneIcon {
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
  selector: 'svg[solarArrowRightDownBoldDuotoneIcon],svg[solar-arrow-right-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.47 8.47a.75.75 0 0 1 1.28.53v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.53-1.28z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.47 6.53a.75.75 0 0 1 1.06-1.06l6.97 6.97l-1.06 1.06z" opacity=".5"></svg:path>`,
})
export class SolarArrowRightDownBoldDuotoneIcon {
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
  selector: 'svg[solarArrowRightDownLineDuotoneIcon],svg[solar-arrow-right-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6.53 5.47a.75.75 0 0 0-1.06 1.06zM5.47 6.53l12 12l1.06-1.06l-12-12z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9v9H9"></svg:path></svg:g>`,
})
export class SolarArrowRightDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightDownLinearIcon],svg[solar-arrow-right-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 6l12 12m0 0V9m0 9H9"></svg:path>`,
})
export class SolarArrowRightDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightDownOutlineIcon],svg[solar-arrow-right-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0l10.72 10.72V9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h7.19L5.47 6.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowRightDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightLineDuotoneIcon],svg[solar-arrow-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 11.25a.75.75 0 0 0 0 1.5zm0 1.5h16v-1.5H4z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 6l6 6l-6 6"></svg:path></svg:g>`,
})
export class SolarArrowRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightLinearIcon],svg[solar-arrow-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"></svg:path>`,
})
export class SolarArrowRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightOutlineIcon],svg[solar-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowRightOutlineIcon {
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
  selector: 'svg[solarArrowRightUpBoldDuotoneIcon],svg[solar-arrow-right-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" opacity=".5"></svg:path>`,
})
export class SolarArrowRightUpBoldDuotoneIcon {
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
  selector: 'svg[solarArrowRightUpLineDuotoneIcon],svg[solar-arrow-right-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M5.47 17.47a.75.75 0 1 0 1.06 1.06zm1.06 1.06l12-12l-1.06-1.06l-12 12z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 6h9v9"></svg:path></svg:g>`,
})
export class SolarArrowRightUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightUpLinearIcon],svg[solar-arrow-right-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6m0 0H9m9 0v9"></svg:path>`,
})
export class SolarArrowRightUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightUpOutlineIcon],svg[solar-arrow-right-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowRightUpOutlineIcon {
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
  selector: 'svg[solarArrowToDownLeftBoldDuotoneIcon],svg[solar-arrow-to-down-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.53 13.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L12 18.44l4.47-4.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.75 9.5c0-.953-.28-2.367-1.141-3.563C10.719 4.702 9.244 3.75 7 3.75a.75.75 0 0 0 0 1.5c1.756 0 2.78.715 3.391 1.563c.639.887.859 1.974.859 2.687v8.19l.75.75l.75-.75zm-.552 10.724" opacity=".5"></svg:path>`,
})
export class SolarArrowToDownLeftBoldDuotoneIcon {
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
  selector: 'svg[solarArrowToDownLeftLineDuotoneIcon],svg[solar-arrow-to-down-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m17 14.5l-5 5l-5-5"></svg:path><svg:path d="M12 19.5v-10c0-1.667-1-5-5-5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarArrowToDownLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToDownLeftLinearIcon],svg[solar-arrow-to-down-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 19.5l5-5m-5 5l-5-5m5 5v-10c0-1.667-1-5-5-5"></svg:path>`,
})
export class SolarArrowToDownLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToDownLeftOutlineIcon],svg[solar-arrow-to-down-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.53 13.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V9.5c0-.713-.22-1.8-.859-2.687C9.781 5.965 8.756 5.25 7 5.25a.75.75 0 0 1 0-1.5c2.244 0 3.72.952 4.609 2.187c.861 1.196 1.141 2.61 1.141 3.563v8.19l3.72-3.72a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowToDownLeftOutlineIcon {
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
  selector: 'svg[solarArrowToDownRightBoldDuotoneIcon],svg[solar-arrow-to-down-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.47 13.97a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06L12 18.44l-4.47-4.47a.75.75 0 0 0-1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.25 9.5c0-.953.28-2.367 1.141-3.563c.89-1.235 2.365-2.187 4.609-2.187a.75.75 0 0 1 0 1.5c-1.756 0-2.78.715-3.391 1.563c-.639.887-.859 1.974-.859 2.687v8.19l-.75.75l-.75-.75zm.552 10.724" opacity=".5"></svg:path>`,
})
export class SolarArrowToDownRightBoldDuotoneIcon {
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
  selector: 'svg[solarArrowToDownRightLineDuotoneIcon],svg[solar-arrow-to-down-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7 14.5l5 5l5-5"></svg:path><svg:path d="M12 19.5v-10c0-1.667 1-5 5-5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarArrowToDownRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToDownRightLinearIcon],svg[solar-arrow-to-down-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 19.5l-5-5m5 5l5-5m-5 5v-10c0-1.667 1-5 5-5"></svg:path>`,
})
export class SolarArrowToDownRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToDownRightOutlineIcon],svg[solar-arrow-to-down-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.47 13.97a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06l-3.72 3.72V9.5c0-.713.22-1.8.859-2.687c.61-.848 1.635-1.563 3.391-1.563a.75.75 0 0 0 0-1.5c-2.244 0-3.72.952-4.609 2.187c-.861 1.196-1.141 2.61-1.141 3.563v8.19l-3.72-3.72a.75.75 0 0 0-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowToDownRightOutlineIcon {
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
  selector: 'svg[solarArrowToTopLeftBoldDuotoneIcon],svg[solar-arrow-to-top-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.53 10.03a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 1 0 1.06 1.06L12 5.56l4.47 4.47a.75.75 0 0 0 1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.75 14.5c0 .953-.28 2.367-1.141 3.563c-.89 1.235-2.365 2.187-4.609 2.187a.75.75 0 0 1 0-1.5c1.756 0 2.78-.715 3.391-1.563c.639-.887.859-1.974.859-2.687V6.31l.75-.75l.75.75zm-.552-10.724" opacity=".5"></svg:path>`,
})
export class SolarArrowToTopLeftBoldDuotoneIcon {
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
  selector: 'svg[solarArrowToTopLeftLineDuotoneIcon],svg[solar-arrow-to-top-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m17 9.5l-5-5l-5 5"></svg:path><svg:path d="M12 4.5v10c0 1.667-1 5-5 5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarArrowToTopLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToTopLeftLinearIcon],svg[solar-arrow-to-top-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 4.5l5 5m-5-5l-5 5m5-5v10c0 1.667-1 5-5 5"></svg:path>`,
})
export class SolarArrowToTopLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToTopLeftOutlineIcon],svg[solar-arrow-to-top-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.53 10.03a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 1 0 1.06 1.06l3.72-3.72v8.19c0 .713-.22 1.8-.859 2.687c-.61.848-1.635 1.563-3.391 1.563a.75.75 0 0 0 0 1.5c2.244 0 3.72-.952 4.609-2.187c.861-1.196 1.141-2.61 1.141-3.563V6.31l3.72 3.72a.75.75 0 0 0 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowToTopLeftOutlineIcon {
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
  selector: 'svg[solarArrowToTopRightBoldDuotoneIcon],svg[solar-arrow-to-top-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.47 10.03a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06L12 5.56l-4.47 4.47a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.25 14.5c0 .953.28 2.367 1.141 3.563c.89 1.235 2.365 2.187 4.609 2.187a.75.75 0 0 0 0-1.5c-1.756 0-2.78-.715-3.391-1.563c-.639-.887-.859-1.974-.859-2.687V6.31L12 5.56l-.75.75zm.552-10.724" opacity=".5"></svg:path>`,
})
export class SolarArrowToTopRightBoldDuotoneIcon {
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
  selector: 'svg[solarArrowToTopRightLineDuotoneIcon],svg[solar-arrow-to-top-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7 9.5l5-5l5 5"></svg:path><svg:path d="M12 4.5v10c0 1.667 1 5 5 5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarArrowToTopRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToTopRightLinearIcon],svg[solar-arrow-to-top-right-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 4.5l-5 5m5-5l5 5m-5-5v10c0 1.667 1 5 5 5"></svg:path>`,
})
export class SolarArrowToTopRightLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowToTopRightOutlineIcon],svg[solar-arrow-to-top-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.47 10.03a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72v8.19c0 .713.22 1.8.859 2.687c.61.848 1.635 1.563 3.391 1.563a.75.75 0 0 1 0 1.5c-2.244 0-3.72-.952-4.609-2.187c-.861-1.196-1.141-2.61-1.141-3.563V6.31l-3.72 3.72a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowToTopRightOutlineIcon {
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
  selector: 'svg[solarArrowUpBoldDuotoneIcon],svg[solar-arrow-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20.75a.75.75 0 0 0 .75-.75v-9.25h-1.5V20c0 .414.336.75.75.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 10.75a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28z"></svg:path>`,
})
export class SolarArrowUpBoldDuotoneIcon {
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
  selector: 'svg[solarArrowUpLineDuotoneIcon],svg[solar-arrow-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M11.25 20a.75.75 0 0 0 1.5 0zm1.5 0V4h-1.5v16z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 10l-6-6l-6 6"></svg:path></svg:g>`,
})
export class SolarArrowUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowUpLinearIcon],svg[solar-arrow-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20V4m0 0l6 6m-6-6l-6 6"></svg:path>`,
})
export class SolarArrowUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarArrowUpOutlineIcon],svg[solar-arrow-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.47 3.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-4.72-4.72V20a.75.75 0 0 1-1.5 0V5.81l-4.72 4.72a.75.75 0 1 1-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarArrowUpOutlineIcon {
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
  selector: 'svg[solarAsteroidBoldDuotoneIcon],svg[solar-asteroid-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12q0 .668.085 1.312a6 6 0 0 1 7.297 8.342c.835.226 1.712.346 2.618.346c4.879 0 8.941-3.494 9.823-8.116a6.002 6.002 0 0 1-3.505-9.636A9.96 9.96 0 0 0 12 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2.085 13.312a10.01 10.01 0 0 0 7.297 8.342a6 6 0 0 0-7.297-8.342m19.738.573q.175-.916.177-1.885a9.98 9.98 0 0 0-3.682-7.752a6.002 6.002 0 0 0 3.505 9.637M16 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3-7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path>`,
})
export class SolarAsteroidBoldDuotoneIcon {
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
  selector: 'svg[solarAsteroidLineDuotoneIcon],svg[solar-asteroid-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 2C6.477 2 2 6.477 2 12q0 .668.085 1.312a10.01 10.01 0 0 0 7.298 8.342A10 10 0 0 0 12 22c4.879 0 8.941-3.494 9.823-8.116q.175-.917.177-1.884a9.98 9.98 0 0 0-3.682-7.752A9.96 9.96 0 0 0 12 2Z"></svg:path><svg:path d="M2.085 13.312a6 6 0 0 1 7.297 8.342m12.441-7.769a6.002 6.002 0 0 1-3.505-9.637" opacity=".5"></svg:path><svg:path d="M16 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-3-7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path></svg:g>`,
})
export class SolarAsteroidLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAsteroidLinearIcon],svg[solar-asteroid-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 2C6.477 2 2 6.477 2 12q0 .668.085 1.312a10.01 10.01 0 0 0 7.298 8.342A10 10 0 0 0 12 22c4.879 0 8.941-3.494 9.823-8.116q.175-.917.177-1.884a9.98 9.98 0 0 0-3.682-7.752A9.96 9.96 0 0 0 12 2Z"></svg:path><svg:path d="M2.085 13.312a6 6 0 0 1 7.297 8.342m12.441-7.769a6.002 6.002 0 0 1-3.505-9.637M16 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-3-7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path></svg:g>`,
})
export class SolarAsteroidLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAsteroidOutlineIcon],svg[solar-asteroid-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 0 0-9.243 9.614a6.75 6.75 0 0 1 7.655 8.75q.774.136 1.588.136a9.255 9.255 0 0 0 8.929-6.824a6.752 6.752 0 0 1-3.644-10.019A9.2 9.2 0 0 0 12 2.75m6.453 2.623a5.253 5.253 0 0 0 2.75 7.562q.047-.462.047-.935a9.22 9.22 0 0 0-2.797-6.627M9.187 22.378A10.76 10.76 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25c2.575 0 4.94.906 6.792 2.417A10.73 10.73 0 0 1 22.75 12a11 11 0 0 1-.19 2.025c-.948 4.969-5.315 8.725-10.56 8.725c-.972 0-1.916-.13-2.813-.372m-.231-1.64a5.25 5.25 0 0 0-6.02-6.88a9.27 9.27 0 0 0 6.02 6.88M10.5 6.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M7.25 8.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M15 15.75a.25.25 0 1 0 0 .5a.25.25 0 0 0 0-.5m-1.75.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarAsteroidOutlineIcon {
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
  selector: 'svg[solarAtomBoldDuotoneIcon],svg[solar-atom-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.471 16.471c4.939-4.939 6.94-10.944 4.471-13.413c-2.469-2.47-8.474-.468-13.413 4.47c-4.939 4.94-6.94 10.945-4.471 13.414c2.47 2.47 8.475.468 13.413-4.47" opacity=".3"></svg:path><svg:path fill="currentColor" d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058c2.469-2.47 8.474-.468 13.413 4.47c4.939 4.94 6.94 10.945 4.471 13.414c-2.47 2.47-8.475.468-13.413-4.47" opacity=".3"></svg:path><svg:path fill="currentColor" d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path>`,
})
export class SolarAtomBoldDuotoneIcon {
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
  selector: 'svg[solarAtomLineDuotoneIcon],svg[solar-atom-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413c-4.94 4.939-10.945 6.94-13.414 4.471c-2.47-2.47-.468-8.474 4.471-13.413S18.473.589 20.942 3.058Zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413c4.94 4.939 10.945 6.94 13.414 4.471c2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058Z"></svg:path><svg:path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarAtomLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAtomLinearIcon],svg[solar-atom-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413c-4.94 4.939-10.945 6.94-13.414 4.471c-2.47-2.47-.468-8.474 4.471-13.413S18.473.589 20.942 3.058Zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413c4.94 4.939 10.945 6.94 13.414 4.471c2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058Z"></svg:path><svg:path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path></svg:g>`,
})
export class SolarAtomLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAtomOutlineIcon],svg[solar-atom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.462 4.047c1.203.822 2.4 1.812 3.54 2.951a25 25 0 0 1 2.951 3.54c.701-1.377 1.123-2.682 1.253-3.813c.165-1.427-.138-2.482-.794-3.137c-.655-.656-1.71-.96-3.137-.794c-1.131.13-2.436.552-3.813 1.253M20.869 12c1.005-1.765 1.645-3.524 1.828-5.103c.195-1.69-.13-3.275-1.224-4.37c-1.095-1.095-2.68-1.419-4.37-1.224c-1.58.183-3.338.823-5.103 1.828c-1.765-1.005-3.523-1.645-5.103-1.827c-1.69-.195-3.275.128-4.37 1.223c-1.094 1.095-1.418 2.68-1.223 4.37c.182 1.58.822 3.338 1.828 5.103c-1.006 1.765-1.646 3.523-1.828 5.103c-.195 1.69.129 3.274 1.224 4.37c1.095 1.094 2.679 1.418 4.37 1.223c1.579-.182 3.337-.822 5.102-1.828c1.765 1.006 3.523 1.646 5.103 1.828c1.69.195 3.275-.129 4.37-1.224s1.418-2.679 1.223-4.37c-.182-1.579-.822-3.337-1.827-5.102m-1.75 0a23 23 0 0 0-3.178-3.941A23 23 0 0 0 12 4.88a23 23 0 0 0-3.94 3.18A23 23 0 0 0 4.88 12a23 23 0 0 0 3.18 3.942A23 23 0 0 0 12 19.119a23 23 0 0 0 3.941-3.179A23 23 0 0 0 19.12 12m-5.657 7.953a25 25 0 0 0 3.54-2.952a25 25 0 0 0 2.951-3.54c.701 1.378 1.123 2.682 1.253 3.814c.165 1.427-.138 2.481-.794 3.137c-.656.655-1.71.959-3.137.794c-1.131-.13-2.436-.552-3.813-1.253m-2.924 0A25 25 0 0 1 6.998 17a25 25 0 0 1-2.951-3.54c-.7 1.378-1.122 2.682-1.253 3.814c-.164 1.427.139 2.481.794 3.137c.656.655 1.71.958 3.137.794c1.132-.13 2.436-.552 3.813-1.253m-6.491-9.415a25 25 0 0 1 2.952-3.54a25 25 0 0 1 3.54-2.951c-1.379-.7-2.683-1.122-3.815-1.252c-1.427-.165-2.481.138-3.137.794c-.655.655-.959 1.71-.794 3.137c.13 1.131.552 2.436 1.253 3.813M12 10.25a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarAtomOutlineIcon {
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
  selector: 'svg[solarAugmentedRealityBoldDuotoneIcon],svg[solar-augmented-reality-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 7.25a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0v-3.25h.335l2.28 3.648a.75.75 0 1 0 1.271-.796l-1.853-2.965A2.751 2.751 0 0 0 16 7.25zm.75 1.5v2.5H16a1.25 1.25 0 1 0 0-2.5zm-5.534-.974a.75.75 0 0 0-1.432 0l-2.5 8a.75.75 0 0 0 1.432.448l.71-2.274h2.148l.71 2.274a.75.75 0 0 0 1.432-.448zm-1.32 4.674h1.21L8.5 10.515z" clip-rule="evenodd"></svg:path>`,
})
export class SolarAugmentedRealityBoldDuotoneIcon {
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
  selector: 'svg[solarAugmentedRealityLineDuotoneIcon],svg[solar-augmented-reality-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 8v-.75a.75.75 0 0 0-.75.75zm-.75 8a.75.75 0 0 0 1.5 0zM8.5 8l.716-.224a.75.75 0 0 0-1.432 0zm-1.625 5.2l-.716-.224zm-1.59 2.576a.75.75 0 0 0 1.43.448zm5 .448a.75.75 0 0 0 1.43-.448zM14 12h-.75v.75H14zm3.364 4.398a.75.75 0 1 0 1.272-.796zm-9.58-8.622l-1.625 5.2l1.432.448l1.625-5.2zm-1.625 5.2l-.875 2.8l1.432.448l.875-2.8zm1.625-4.752l1.625 5.2l1.432-.448l-1.625-5.2zm1.625 5.2l.875 2.8l1.432-.448l-.875-2.8zm-2.534.526h3.25v-1.5h-3.25zM14 8.75h2v-1.5h-2zm.75 3.25V8h-1.5v4zm2.5-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 10zM16 8.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 7.25zM13.25 8v8h1.5V8zM16 11.25h-.5v1.5h.5zm-.5 0H14v1.5h1.5zm-.636 1.148l2.5 4l1.272-.796l-2.5-4z"></svg:path></svg:g>`,
})
export class SolarAugmentedRealityLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAugmentedRealityLinearIcon],svg[solar-augmented-reality-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M14 8v-.75a.75.75 0 0 0-.75.75zm-.75 8a.75.75 0 0 0 1.5 0zM8.5 8l.716-.224a.75.75 0 0 0-1.432 0zm-1.625 5.2l-.716-.224zm-1.59 2.576a.75.75 0 0 0 1.43.448zm5 .448a.75.75 0 0 0 1.43-.448zM14 12h-.75v.75H14zm3.364 4.398a.75.75 0 1 0 1.272-.796zm-9.58-8.622l-1.625 5.2l1.432.448l1.625-5.2zm-1.625 5.2l-.875 2.8l1.432.448l.875-2.8zm1.625-4.752l1.625 5.2l1.432-.448l-1.625-5.2zm1.625 5.2l.875 2.8l1.432-.448l-.875-2.8zm-2.534.526h3.25v-1.5h-3.25zM14 8.75h2v-1.5h-2zm.75 3.25V8h-1.5v4zm2.5-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 10zM16 8.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 7.25zM13.25 8v8h1.5V8zM16 11.25h-.5v1.5h.5zm-.5 0H14v1.5h1.5zm-.636 1.148l2.5 4l1.272-.796l-2.5-4z"></svg:path></svg:g>`,
})
export class SolarAugmentedRealityLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarAugmentedRealityOutlineIcon],svg[solar-augmented-reality-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"></svg:path><svg:path d="M8.5 7.25a.75.75 0 0 1 .716.526l2.5 8a.75.75 0 0 1-1.432.448l-.71-2.274H7.427l-.71 2.274a.75.75 0 1 1-1.433-.448l2.5-8A.75.75 0 0 1 8.5 7.25m-.605 5.2h1.21L8.5 10.515zM13.25 8a.75.75 0 0 1 .75-.75h2a2.75 2.75 0 0 1 .783 5.387l1.853 2.965a.75.75 0 1 1-1.272.796l-2.28-3.648h-.334V16a.75.75 0 0 1-1.5 0zm1.5.75v2.5H16a1.25 1.25 0 1 0 0-2.5z"></svg:path></svg:g>`,
})
export class SolarAugmentedRealityOutlineIcon {
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
  selector: 'svg[solarBackpackBoldDuotoneIcon],svg[solar-backpack-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.292 4.786A5.97 5.97 0 0 0 3 10.416l-.001.18v2.323q.155-.001.305.064a21.54 21.54 0 0 0 17.39 0A.75.75 0 0 1 21 12.92v-2.503a5.97 5.97 0 0 0-4.291-5.63c-.278-.091-1.12-.254-1.506-.324c-2.12-.36-4.286-.36-6.406 0c-.405.076-1.272.248-1.506.324M10 11.926a.747.747 0 0 0-.75.745c0 .411.336.745.75.745h4c.414 0 .75-.334.75-.745a.747.747 0 0 0-.75-.745z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.873 3.992A2.25 2.25 0 0 1 11 2.49h2c.983 0 1.82.626 2.126 1.502c.045.13.068.28.077.47c.386.07 1.227.233 1.505.324v-.061c0-.339-.011-.782-.165-1.222A3.75 3.75 0 0 0 13 1h-2a3.75 3.75 0 0 0-3.544 2.503c-.153.44-.165.883-.165 1.222v.06c.233-.075 1.1-.247 1.505-.323c.01-.19.032-.34.077-.47M21 14.477q-1.352.573-2.75.966v1.2a.75.75 0 0 1-.75.746a.75.75 0 0 1-.75-.745v-.832A23.06 23.06 0 0 1 3 14.477v1.546a4.495 4.495 0 0 0 3.539 4.381c3.597.794 7.325.794 10.923 0A4.495 4.495 0 0 0 21 16.023z" opacity=".5"></svg:path>`,
})
export class SolarBackpackBoldDuotoneIcon {
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
  selector: 'svg[solarBackpackLineDuotoneIcon],svg[solar-backpack-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10.911v-.18a6 6 0 0 1 4.618-5.757l.176-.04l.167-.036a19 19 0 0 1 8.078 0l.167.037l.176.04A6 6 0 0 1 21 10.91v5.464a4.52 4.52 0 0 1-3.538 4.411c-3.598.8-7.326.8-10.923 0A4.52 4.52 0 0 1 3 16.376z"></svg:path><svg:path stroke-linecap="round" d="M17.5 15.5V17M15.959 4.5A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.959 2.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M3 14a22.16 22.16 0 0 0 18 0"></svg:path><svg:path stroke-linecap="round" d="M10 13h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBackpackLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBackpackLinearIcon],svg[solar-backpack-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 10.911v-.18a6 6 0 0 1 4.618-5.757l.176-.04l.167-.036a19 19 0 0 1 8.078 0l.167.037l.176.04A6 6 0 0 1 21 10.91v5.464a4.52 4.52 0 0 1-3.538 4.411c-3.598.8-7.326.8-10.923 0A4.52 4.52 0 0 1 3 16.376z"></svg:path><svg:path stroke-linecap="round" d="M17.5 15.5V17M15.959 4.5A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.959 2.5M3 14a22.16 22.16 0 0 0 18 0m-11-1h4"></svg:path></svg:g>`,
})
export class SolarBackpackLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBackpackOutlineIcon],svg[solar-backpack-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12.25a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.32 4.275A3.75 3.75 0 0 1 11 1.25h2a3.75 3.75 0 0 1 3.68 3.025a6.75 6.75 0 0 1 5.07 6.445v5.655a5.27 5.27 0 0 1-4.126 5.143a25.9 25.9 0 0 1-11.248 0a5.27 5.27 0 0 1-4.126-5.143V10.72a6.75 6.75 0 0 1 5.07-6.445m1.695-.335A2.25 2.25 0 0 1 11 2.75h2c.86 0 1.607.482 1.986 1.19a19.8 19.8 0 0 0-5.971 0m11.235 6.971v2.596a21.4 21.4 0 0 1-16.5 0V10.74a5.25 5.25 0 0 1 4.207-5.074c.084-.02.124-.028.164-.037a18.25 18.25 0 0 1 7.759 0l.163.037l.167.037a5.25 5.25 0 0 1 4.04 5.207m-16.5 5.464v-1.252a22.9 22.9 0 0 0 13 1.04V17a.75.75 0 0 0 1.5 0v-1.209a23 23 0 0 0 2-.668v1.252a3.77 3.77 0 0 1-2.951 3.68c-3.49.775-7.108.775-10.598 0a3.77 3.77 0 0 1-2.95-3.68" clip-rule="evenodd"></svg:path>`,
})
export class SolarBackpackOutlineIcon {
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
  selector: 'svg[solarBackspaceBoldDuotoneIcon],svg[solar-backspace-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.871 19.499c.93.501 2.044.501 4.271.501h2.637c3.875 0 5.813 0 7.017-1.172S22 15.771 22 12s0-5.657-1.204-6.828S17.654 4 13.78 4h-2.637c-2.227 0-3.341 0-4.27.501c-.93.502-1.52 1.42-2.701 3.259L3.49 8.82C2.497 10.366 2 11.14 2 12s.497 1.634 1.49 3.18l.68 1.06c1.181 1.838 1.771 2.757 2.701 3.259" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.03 8.97a.75.75 0 1 0-1.06 1.06L11.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L13 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L14.06 12l1.97-1.97a.75.75 0 0 0-1.06-1.06L13 10.94z"></svg:path>`,
})
export class SolarBackspaceBoldDuotoneIcon {
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
  selector: 'svg[solarBackspaceLineDuotoneIcon],svg[solar-backspace-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.142 20c-2.227 0-3.341 0-4.27-.501c-.93-.502-1.52-1.42-2.701-3.259l-.681-1.06C2.497 13.634 2 12.86 2 12s.497-1.634 1.49-3.18l.68-1.06c1.181-1.838 1.771-2.757 2.701-3.259S8.915 4 11.142 4h2.637c3.875 0 5.813 0 7.017 1.172S22 8.229 22 12s0 5.657-1.204 6.828S17.654 20 13.78 20z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m15.5 9.5l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarBackspaceLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBackspaceLinearIcon],svg[solar-backspace-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.142 20c-2.227 0-3.341 0-4.27-.501c-.93-.502-1.52-1.42-2.701-3.259l-.681-1.06C2.497 13.634 2 12.86 2 12s.497-1.634 1.49-3.18l.68-1.06c1.181-1.838 1.771-2.757 2.701-3.259S8.915 4 11.142 4h2.637c3.875 0 5.813 0 7.017 1.172S22 8.229 22 12s0 5.657-1.204 6.828S17.654 20 13.78 20z"></svg:path><svg:path stroke-linecap="round" d="m15.5 9.5l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarBackspaceLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBackspaceOutlineIcon],svg[solar-backspace-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.03 8.97a.75.75 0 0 0-1.06 1.06L11.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L13 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L14.06 12l1.97-1.97a.75.75 0 0 0-1.06-1.06L13 10.94z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.32 4.634c-.766-.745-1.735-1.074-2.933-1.231c-1.168-.153-2.662-.153-4.553-.153h-2.728c-1.083 0-1.948 0-2.656.066c-.73.068-1.35.21-1.935.525c-.586.316-1.04.754-1.49 1.324c-.433.551-.892 1.266-1.465 2.158L2.837 8.45c-.478.744-.869 1.352-1.135 1.882c-.278.553-.452 1.08-.452 1.669s.174 1.116.452 1.67c.266.53.657 1.137 1.135 1.881l.723 1.126c.573.892 1.032 1.607 1.466 2.158c.449.57.903 1.008 1.49 1.324c.584.315 1.203.457 1.934.525c.708.066 1.573.066 2.656.066h2.728c1.891 0 3.385 0 4.553-.153c1.198-.157 2.167-.486 2.932-1.231c.768-.747 1.11-1.698 1.273-2.874c.158-1.14.158-2.598.158-4.434v-.116c0-1.836 0-3.293-.158-4.434c-.162-1.176-.505-2.126-1.273-2.874m-7.541.116c1.958 0 3.354.002 4.413.14c1.04.136 1.642.392 2.081.82c.436.423.695 1.001.834 2.004c.141 1.026.143 2.379.143 4.286s-.002 3.26-.143 4.286c-.139 1.003-.398 1.58-.834 2.005c-.439.427-1.041.683-2.081.819c-1.06.139-2.455.14-4.413.14h-2.637c-1.127 0-1.922 0-2.553-.06c-.615-.057-1.017-.165-1.362-.352c-.344-.185-.65-.457-1.023-.932c-.384-.487-.804-1.14-1.402-2.071l-.681-1.06c-.505-.787-.852-1.328-1.078-1.779c-.219-.435-.293-.725-.293-.996s.074-.561.293-.996c.226-.45.573-.992 1.078-1.779l.68-1.06c.599-.93 1.02-1.584 1.403-2.071c.374-.475.68-.747 1.023-.932c.345-.187.747-.295 1.362-.353c.63-.058 1.426-.059 2.553-.059z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBackspaceOutlineIcon {
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
  selector: 'svg[solarBacteriaBoldDuotoneIcon],svg[solar-bacteria-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6 15a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14.465 7.171s1.243-.171 2.121.707c.879.879.707 2.122.707 2.122M9 9.293s-1.243.171-2.121-.707C6 7.707 6.172 6.464 6.172 6.464M19 13.136s-1.162.473-1.483 1.673s.448 2.19.448 2.19m-4.545.773L15 19"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-6.393 8.787a.75.75 0 0 0-1.386-.574l-.414 1a.75.75 0 0 0 1.386.574zm8.893.463a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-2.5-7h-2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5" clip-rule="evenodd" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.5 9.5l-1-1"></svg:path></svg:g>`,
})
export class SolarBacteriaBoldDuotoneIcon {
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
  selector: 'svg[solarBacteriaLineDuotoneIcon],svg[solar-bacteria-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"></svg:path><svg:path d="M6 15a3 3 0 1 1 6 0a3 3 0 0 1-6 0Z"></svg:path><svg:path stroke-linecap="round" d="m4.5 11.5l.414-1" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14.465 7.171s1.243-.171 2.121.707c.879.879.707 2.122.707 2.122M9 9.293s-1.243.171-2.121-.707C6 7.707 6.17 6.464 6.17 6.464M19 13.136s-1.162.473-1.483 1.673s.448 2.19.448 2.19m-4.545.773L15 19"></svg:path><svg:path stroke-linecap="round" d="M14.5 14v-2M12 5h-2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m12.5 9.5l-1-1"></svg:path></svg:g>`,
})
export class SolarBacteriaLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBacteriaLinearIcon],svg[solar-bacteria-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"></svg:path><svg:path d="M6 15a3 3 0 1 1 6 0a3 3 0 0 1-6 0Z"></svg:path><svg:path stroke-linecap="round" d="m4.5 11.5l.414-1m9.551-3.329s1.243-.171 2.121.707c.879.879.707 2.122.707 2.122M9 9.293s-1.243.171-2.121-.707C6 7.707 6.172 6.464 6.172 6.464M19 13.136s-1.162.473-1.483 1.673s.448 2.19.448 2.19m-4.545.773L15 19m-.5-5v-2M12 5h-2m2.5 4.5l-1-1"></svg:path></svg:g>`,
})
export class SolarBacteriaLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBacteriaOutlineIcon],svg[solar-bacteria-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4.25h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 1 1 0-1.5m-.257 4.94a.75.75 0 0 1-.64.846h-.006l-.007.002l-.02.002l-.063.006q-.076.006-.201.01a4 4 0 0 1-.655-.047c-.52-.082-1.216-.307-1.802-.893s-.81-1.282-.894-1.802a3.8 3.8 0 0 1-.03-.919l.002-.02l.001-.007a.75.75 0 0 1 1.487.194c-.036.662.311 1.987 1.988 1.987a.75.75 0 0 1 .84.641m1.227-1.22a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06M15.25 12a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm2.223 5.566l-.002-.002h-.001l-.003-.004l-.008-.006l-.018-.017l-.049-.049a2.6 2.6 0 0 1-.484-.734c-.226-.511-.358-1.234-.116-2.139c.243-.905.719-1.465 1.17-1.795a2.6 2.6 0 0 1 .786-.393l.067-.018l.024-.005l.01-.002l.004-.001h.002s.002-.001.145.735l-.143-.736a.75.75 0 0 1 .303 1.469h-.003l-.058.021a1 1 0 0 0-.25.14c-.193.141-.459.418-.608.973c-.149.556-.057.928.04 1.146a1.1 1.1 0 0 0 .186.294l.002.002a.75.75 0 0 1-.996 1.12M5.607 10.787a.75.75 0 1 0-1.386-.574l-.414 1a.75.75 0 1 0 1.386.574zm8.955-2.872a.75.75 0 0 1-.194-1.487l.09-.01q.076-.006.201-.01c.165-.002.393.005.655.047c.52.083 1.217.307 1.803.893s.81 1.283.893 1.803a3.8 3.8 0 0 1 .03.918c-.056.41-.439.73-.849.674a.75.75 0 0 1-.641-.84c0-1.678-1.325-2.024-1.988-1.988m-.68 9.265a.75.75 0 1 0-.921 1.184l1.578 1.228a.75.75 0 1 0 .921-1.184z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 11.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M6.75 15a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarBacteriaOutlineIcon {
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
  selector: 'svg[solarBag2BoldDuotoneIcon],svg[solar-bag-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.083 10.894c.439-2.34.658-3.511 1.491-4.203C6.408 6 7.598 6 9.98 6h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 22 14.771 22H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5a3.75 3.75 0 1 0-7.5 0v1.015C8.688 6.002 9.184 6 9.75 6zm-1.49 5.877a.75.75 0 1 1 1.48.246l-1 6a.75.75 0 1 1-1.48-.246zm6.617-.617a.75.75 0 0 1 .863.617l1 6a.75.75 0 1 1-1.48.246l-1-6a.75.75 0 0 1 .617-.863"></svg:path>`,
})
export class SolarBag2BoldDuotoneIcon {
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
  selector: 'svg[solarBag2LineDuotoneIcon],svg[solar-bag-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.789-3.64.034-8.03c.586-3.12.878-4.681 1.99-5.603M3.741 20.555Zm16.516 0c1.2-1.446.788-3.64-.034-8.03c-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="m15 11l1 6m-7-6l-1 6M9 6V5a3 3 0 1 1 6 0v1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBag2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag2LinearIcon],svg[solar-bag-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 20.555C4.942 22 7.174 22 11.64 22h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 20.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 6.922C17.125 6 15.536 6 12.361 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="m15 11l1 6m-7-6l-1 6M9 6V5a3 3 0 1 1 6 0v1"></svg:path></svg:g>`,
})
export class SolarBag2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag2OutlineIcon],svg[solar-bag-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328q-.214.018-.414.043c-1.01.125-1.842.387-2.55.974S4.168 7.702 3.86 8.672c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529s.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11 11 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628s-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11m1.103 3.4a.75.75 0 0 1 .617.863l-1 6a.75.75 0 1 1-1.48-.246l1-6a.75.75 0 0 1 .863-.617m5.754 0a.75.75 0 0 1 .863.617l1 6a.75.75 0 1 1-1.48.246l-1-6a.75.75 0 0 1 .617-.863" clip-rule="evenodd"></svg:path>`,
})
export class SolarBag2OutlineIcon {
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
  selector: 'svg[solarBag3BoldDuotoneIcon],svg[solar-bag-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.574 4.691c-.833.692-1.052 1.862-1.491 4.203l-.75 4c-.617 3.292-.926 4.938-.026 6.022S5.88 20 9.23 20h5.54c3.35 0 5.025 0 5.924-1.084c.9-1.084.591-2.73-.026-6.022l-.75-4c-.439-2.34-.658-3.511-1.491-4.203C17.593 4 16.403 4 14.02 4H9.98c-2.382 0-3.572 0-4.406.691" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 9.25a2.25 2.25 0 0 1-2.122-1.5a.75.75 0 1 0-1.414.5a3.751 3.751 0 0 0 7.073 0a.75.75 0 1 0-1.414-.5A2.25 2.25 0 0 1 12 9.25"></svg:path>`,
})
export class SolarBag3BoldDuotoneIcon {
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
  selector: 'svg[solarBag3LineDuotoneIcon],svg[solar-bag-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 18.555C4.942 20 7.174 20 11.639 20h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.789-3.64.034-8.03c.586-3.12.878-4.681 1.99-5.603M3.741 18.555Zm16.516 0c1.2-1.446.788-3.64-.034-8.03c-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 4.922C17.124 4 15.536 4 12.36 4h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="M9.17 8a3.001 3.001 0 0 0 5.66 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBag3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag3LinearIcon],svg[solar-bag-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 18.555C4.942 20 7.174 20 11.64 20h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 18.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 4.922C17.125 4 15.536 4 12.361 4h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="M9.17 8a3.001 3.001 0 0 0 5.66 0"></svg:path></svg:g>`,
})
export class SolarBag3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag3OutlineIcon],svg[solar-bag-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.921 7.293a.75.75 0 0 1 .957.457a2.251 2.251 0 0 0 4.245 0a.75.75 0 1 1 1.414.5a3.751 3.751 0 0 1-7.073 0a.75.75 0 0 1 .457-.957m3.44-1.793h-.722c-1.625 0-2.707.003-3.527.104c-.778.096-1.137.263-1.389.472c-.252.21-.482.531-.72 1.278c-.25.787-.452 1.85-.752 3.448c-.42 2.24-.702 3.761-.752 4.907c-.048 1.105.137 1.575.397 1.888s.687.581 1.782.737c1.135.162 2.683.166 4.962.166h.72c2.28 0 3.827-.004 4.962-.166c1.095-.156 1.522-.424 1.782-.737c.26-.314.445-.783.397-1.888c-.05-1.146-.332-2.667-.752-4.907c-.3-1.598-.501-2.66-.752-3.448c-.238-.747-.468-1.069-.72-1.278s-.61-.376-1.389-.472c-.82-.101-1.902-.104-3.527-.104m-6.596-.578c-1.11.922-1.403 2.483-1.988 5.604c-.823 4.389-1.235 6.583-.035 8.029S7.174 20 11.64 20h.72c4.466 0 6.699 0 7.899-1.445s.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603C17.125 4 15.536 4 12.361 4h-.722c-3.175 0-4.763 0-5.874.922" clip-rule="evenodd"></svg:path>`,
})
export class SolarBag3OutlineIcon {
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
  selector: 'svg[solarBag4BoldDuotoneIcon],svg[solar-bag-4-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.035 11.573c.462-2.309.693-3.463 1.522-4.143s2.007-.68 4.362-.68h4.162c2.355 0 3.532 0 4.361.68c.83.68 1.06 1.834 1.523 4.143l.6 3c.664 3.32.996 4.98.096 6.079s-2.594 1.098-5.98 1.098H9.32c-3.386 0-5.08 0-5.98-1.098s-.568-2.758.096-6.079z" opacity=".5"></svg:path><svg:circle cx="15" cy="9.75" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="9.75" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9.75 5.75a2.25 2.25 0 0 1 4.5 0v1h.431q.565 0 1.069.002V5.75a3.75 3.75 0 1 0-7.5 0v1.002q.504-.003 1.069-.002h.431z"></svg:path>`,
})
export class SolarBag4BoldDuotoneIcon {
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
  selector: 'svg[solarBag4LineDuotoneIcon],svg[solar-bag-4-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.703c2.739 0 4.108 0 5.13.7q.285.196.53.435C19.4 8 19.67 9.343 20.207 12.03c.771 3.856 1.157 5.784.269 7.15q-.241.373-.56.683C18.75 21 16.785 21 12.853 21H11.15c-3.933 0-5.899 0-7.065-1.138a4 4 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z"></svg:path><svg:circle cx="15" cy="9" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="9" cy="9" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBag4LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag4LinearIcon],svg[solar-bag-4-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.703c2.739 0 4.108 0 5.13.7q.285.196.53.435C19.4 8 19.67 9.343 20.207 12.03c.771 3.856 1.157 5.784.269 7.15q-.241.373-.56.683C18.75 21 16.785 21 12.853 21H11.15c-3.933 0-5.899 0-7.065-1.138a4 4 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z"></svg:path><svg:circle cx="15" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="9" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1"></svg:path></svg:g>`,
})
export class SolarBag4LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag4OutlineIcon],svg[solar-bag-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.254q.626-.005 1.355-.004h1.79q.73-.001 1.355.004V5A2.25 2.25 0 0 0 12 2.75m3.75 2.557V5a3.75 3.75 0 0 0-7.5 0v.307q-.202.014-.391.035c-.878.095-1.613.293-2.265.74a5 5 0 0 0-.63.516c-.566.552-.905 1.234-1.17 2.076c-.257.819-.465 1.859-.727 3.166l-.019.095c-.376 1.883-.673 3.367-.758 4.549c-.088 1.208.034 2.223.606 3.104q.288.442.664.81c.752.734 1.724 1.052 2.925 1.204c1.176.148 2.69.148 4.61.148h1.81c1.921 0 3.434 0 4.61-.148c1.201-.152 2.174-.47 2.925-1.204a4.8 4.8 0 0 0 .664-.81c.572-.88.694-1.896.607-3.104c-.086-1.182-.382-2.666-.76-4.549l-.018-.095c-.261-1.307-.47-2.347-.727-3.166c-.265-.842-.604-1.524-1.17-2.076a5 5 0 0 0-.63-.516c-.652-.447-1.387-.645-2.265-.74a11 11 0 0 0-.39-.035M8.02 6.833c-.747.08-1.208.233-1.578.486a3.3 3.3 0 0 0-.431.354c-.321.313-.56.735-.786 1.451c-.23.733-.424 1.693-.695 3.052c-.39 1.948-.667 3.34-.744 4.416c-.077 1.062.052 1.693.368 2.179q.196.302.454.554c.415.405 1.008.655 2.065.789c1.07.135 2.49.136 4.476.136h1.703c1.986 0 3.404-.001 4.475-.136c1.057-.134 1.65-.384 2.065-.789a3.3 3.3 0 0 0 .454-.554c.316-.486.445-1.117.369-2.18c-.078-1.076-.355-2.467-.744-4.415c-.272-1.359-.465-2.32-.696-3.052c-.225-.716-.465-1.138-.786-1.451a3 3 0 0 0-.43-.354c-.37-.253-.832-.405-1.579-.486c-.763-.082-1.743-.083-3.129-.083H11.15c-1.386 0-2.366.001-3.13.083" clip-rule="evenodd"></svg:path>`,
})
export class SolarBag4OutlineIcon {
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
  selector: 'svg[solarBag5BoldDuotoneIcon],svg[solar-bag-5-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.035 16.927c.462 2.309.693 3.463 1.522 4.143s2.007.68 4.362.68h4.162c2.355 0 3.532 0 4.361-.68c.83-.68 1.06-1.834 1.523-4.143l.6-3c.664-3.32.996-4.98.096-6.079S18.067 6.75 14.68 6.75H9.32c-3.386 0-5.08 0-5.98 1.098s-.568 2.758.096 6.079z" opacity=".5"></svg:path><svg:circle cx="15" cy="9.75" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="9.75" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9.75 5.75a2.25 2.25 0 0 1 4.5 0v1h.431q.565 0 1.069.002V5.75a3.75 3.75 0 1 0-7.5 0v1.002q.504-.003 1.069-.002h.431z"></svg:path>`,
})
export class SolarBag5BoldDuotoneIcon {
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
  selector: 'svg[solarBag5LineDuotoneIcon],svg[solar-bag-5-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.794 14.97c.537 2.687.806 4.03 1.693 4.895q.247.24.53.434C7.04 21 8.41 21 11.15 21h1.703c2.739 0 4.108 0 5.13-.7q.285-.196.53-.435c.888-.865 1.157-2.208 1.694-4.894c.771-3.856 1.157-5.784.269-7.15a4 4 0 0 0-.56-.683C18.75 6 16.785 6 12.853 6H11.15c-3.934 0-5.9 0-7.066 1.138a4 4 0 0 0-.559.683c-.888 1.366-.502 3.294.27 7.15Z"></svg:path><svg:circle cx="15" cy="10" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="9" cy="10" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBag5LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag5LinearIcon],svg[solar-bag-5-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.794 14.97c.537 2.687.806 4.03 1.693 4.895q.247.24.53.434C7.04 21 8.41 21 11.15 21h1.703c2.739 0 4.108 0 5.13-.7q.285-.196.53-.435c.888-.865 1.157-2.208 1.694-4.894c.771-3.856 1.157-5.784.269-7.15a4 4 0 0 0-.56-.683C18.75 6 16.785 6 12.853 6H11.15c-3.934 0-5.9 0-7.066 1.138a4 4 0 0 0-.559.683c-.888 1.366-.502 3.294.27 7.15Z"></svg:path><svg:circle cx="15" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="10" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1"></svg:path></svg:g>`,
})
export class SolarBag5LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBag5OutlineIcon],svg[solar-bag-5-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 5.276V5a3.75 3.75 0 1 1 7.5 0v.276c.658.02 1.245.057 1.765.122c1.201.152 2.174.47 2.925 1.204q.376.368.664.81c.572.88.694 1.896.607 3.104c-.086 1.182-.382 2.666-.759 4.549l-.02.095c-.26 1.307-.468 2.347-.726 3.166c-.265.842-.604 1.524-1.17 2.076q-.293.285-.63.516c-.652.447-1.387.645-2.265.74c-.853.092-1.913.092-3.246.092h-1.79c-1.333 0-2.393 0-3.246-.092c-.878-.095-1.613-.293-2.265-.74a5 5 0 0 1-.63-.516c-.566-.552-.905-1.234-1.17-2.076c-.257-.819-.465-1.859-.727-3.166l-.019-.095c-.376-1.883-.673-3.367-.758-4.549c-.088-1.208.034-2.224.606-3.104a4.8 4.8 0 0 1 .664-.81c.752-.734 1.724-1.052 2.925-1.204c.52-.065 1.107-.102 1.765-.122M9.75 5a2.25 2.25 0 0 1 4.5 0v.252q-.636-.002-1.344-.002h-1.811q-.709 0-1.345.002zM4.608 7.675c.415-.405 1.008-.655 2.065-.789c1.07-.135 2.49-.136 4.476-.136h1.703c1.986 0 3.404.001 4.475.136c1.057.134 1.65.384 2.065.789q.257.252.454.554c.316.486.445 1.117.369 2.18c-.078 1.076-.355 2.467-.744 4.415c-.272 1.359-.465 2.32-.696 3.051c-.225.717-.465 1.14-.786 1.453a3.3 3.3 0 0 1-.43.353c-.37.253-.832.405-1.579.486c-.763.082-1.743.083-3.129.083H11.15c-1.386 0-2.366-.001-3.13-.083c-.746-.08-1.207-.233-1.577-.486a3.3 3.3 0 0 1-.431-.354c-.321-.312-.56-.735-.786-1.452c-.23-.732-.424-1.692-.695-3.051c-.39-1.948-.667-3.34-.744-4.416c-.077-1.062.052-1.693.368-2.179a3.3 3.3 0 0 1 .454-.554" clip-rule="evenodd"></svg:path>`,
})
export class SolarBag5OutlineIcon {
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
  selector: 'svg[solarBagBoldDuotoneIcon],svg[solar-bag-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.083 10.894c.439-2.34.658-3.511 1.491-4.203C6.408 6 7.598 6 9.98 6h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 22 14.771 22H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5a3.75 3.75 0 1 0-7.5 0v1.015C8.688 6.002 9.184 6 9.75 6z"></svg:path>`,
})
export class SolarBagBoldDuotoneIcon {
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
  selector: 'svg[solarBagCheckBoldDuotoneIcon],svg[solar-bag-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.083 10.894c.439-2.34.658-3.511 1.491-4.203C6.408 6 7.598 6 9.98 6h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 22 14.771 22H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5a3.75 3.75 0 1 0-7.5 0v1.015C8.688 6.002 9.184 6 9.75 6zm5.836 6.969a.75.75 0 1 0-1.172-.937l-3.476 4.345L9.53 13.97a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.116-.062z"></svg:path>`,
})
export class SolarBagCheckBoldDuotoneIcon {
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
  selector: 'svg[solarBagCheckLineDuotoneIcon],svg[solar-bag-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.789-3.64.034-8.03c.586-3.12.878-4.681 1.99-5.603M3.741 20.555Zm16.516 0c1.2-1.446.788-3.64-.034-8.03c-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10 14.3l1.333 1.2l2.667-3" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBagCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagCheckLinearIcon],svg[solar-bag-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 20.555C4.942 22 7.174 22 11.64 22h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 20.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 6.922C17.125 6 15.536 6 12.361 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10 14.3l1.333 1.2l2.667-3"></svg:path><svg:path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1"></svg:path></svg:g>`,
})
export class SolarBagCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagCheckOutlineIcon],svg[solar-bag-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328q-.214.018-.414.043c-1.01.125-1.842.387-2.55.974S4.168 7.702 3.86 8.672c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529s.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11 11 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628s-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11m6.478 5.08a.75.75 0 0 1 .063 1.058l-2.667 3a.75.75 0 0 1-1.062.06l-1.334-1.2a.75.75 0 0 1 1.004-1.116l.772.696l2.166-2.436a.75.75 0 0 1 1.058-.063" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagCheckOutlineIcon {
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
  selector: 'svg[solarBagCrossBoldDuotoneIcon],svg[solar-bag-cross-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.083 10.894c.439-2.34.658-3.511 1.491-4.203C6.408 6 7.598 6 9.98 6h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 22 14.771 22H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5a3.75 3.75 0 1 0-7.5 0v1.015C8.688 6.002 9.184 6 9.75 6zm-.22 5.47a.75.75 0 0 0-1.06 1.06L10.94 14l-2.47 2.47a.75.75 0 1 0 1.06 1.06L12 15.06l2.47 2.47a.75.75 0 0 0 1.06-1.06L13.06 14l2.47-2.47a.75.75 0 0 0-1.06-1.06L12 12.94z"></svg:path>`,
})
export class SolarBagCrossBoldDuotoneIcon {
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
  selector: 'svg[solarBagCrossLineDuotoneIcon],svg[solar-bag-cross-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.789-3.64.034-8.03c.586-3.12.878-4.681 1.99-5.603M3.741 20.555Zm16.516 0c1.2-1.446.788-3.64-.034-8.03c-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="m14 12l-4 4m0-4l4 4M9 6V5a3 3 0 1 1 6 0v1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBagCrossLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagCrossLinearIcon],svg[solar-bag-cross-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 20.555C4.942 22 7.174 22 11.64 22h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 20.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 6.922C17.125 6 15.536 6 12.361 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="m14 12l-4 4m0-4l4 4M9 6V5a3 3 0 1 1 6 0v1"></svg:path></svg:g>`,
})
export class SolarBagCrossLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagCrossOutlineIcon],svg[solar-bag-cross-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328q-.214.018-.414.043c-1.01.125-1.842.387-2.55.974S4.168 7.702 3.86 8.672c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529s.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11 11 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628s-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11m1.45 4.61a.75.75 0 0 1 1.06 0L12 12.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 14l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 15.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 14l-1.47-1.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagCrossOutlineIcon {
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
  selector: 'svg[solarBagHeartBoldDuotoneIcon],svg[solar-bag-heart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.083 10.894c.439-2.34.658-3.511 1.491-4.203C6.408 6 7.598 6 9.98 6h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 22 14.771 22H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5a3.75 3.75 0 1 0-7.5 0v1.015C8.688 6.002 9.184 6 9.75 6zm1.293 10.866C10.165 15.22 9 14.18 9 13.196c0-1.672 1.65-2.297 3-1.005c1.35-1.292 3-.668 3 1.006c0 .984-1.165 2.024-2.043 2.669c-.42.308-.63.462-.957.462c-.328 0-.537-.154-.957-.462"></svg:path>`,
})
export class SolarBagHeartBoldDuotoneIcon {
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
  selector: 'svg[solarBagHeartLineDuotoneIcon],svg[solar-bag-heart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.789-3.64.034-8.03c.586-3.12.878-4.681 1.99-5.603M3.741 20.555Zm16.516 0c1.2-1.446.788-3.64-.034-8.03c-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path fill="currentColor" d="m12 12.191l-.519.542a.75.75 0 0 0 1.038 0zm-.957 3.675l-.444.604zm1.914 0l-.444-.605zm-.957.462v.75zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093c-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321zM9.75 13.197c0-.576.263-.827.492-.907c.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776c-.934.327-1.496 1.226-1.496 2.323zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971c-.348.403-.809.786-1.226 1.093zm2.35-3.273c0-1.097-.562-1.996-1.496-2.323c-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443c.228.08.491.33.491.907zM10.6 16.47c.368.27.782.608 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBagHeartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagHeartLinearIcon],svg[solar-bag-heart-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.742 20.555C4.942 22 7.174 22 11.64 22h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 20.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 6.922C17.125 6 15.536 6 12.361 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path fill="currentColor" d="m12 12.191l-.519.542a.75.75 0 0 0 1.038 0zm-.957 3.675l-.444.604zm1.914 0l-.444-.605zm-.957.462v.75zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093c-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321zM9.75 13.197c0-.576.263-.827.492-.907c.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776c-.934.327-1.496 1.226-1.496 2.323zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971c-.348.403-.809.786-1.226 1.093zm2.35-3.273c0-1.097-.562-1.996-1.496-2.323c-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443c.228.08.491.33.491.907zM10.6 16.47c.368.27.782.608 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1"></svg:path></svg:g>`,
})
export class SolarBagHeartLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagHeartOutlineIcon],svg[solar-bag-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328q-.214.018-.414.043c-1.01.125-1.842.387-2.55.974S4.168 7.702 3.86 8.672c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529s.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11 11 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628s-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11m2.222 5.43c-.23.08-.492.33-.492.907c0 .214.141.545.51.971c.348.403.809.786 1.227 1.093c.226.166.333.242.42.288c.054.029.069.029.093.029c.025 0 .04 0 .094-.03a4 4 0 0 0 .42-.287c.418-.307.878-.69 1.227-1.093c.368-.426.51-.757.51-.971c0-.576-.263-.827-.493-.907c-.25-.088-.714-.06-1.24.443a.75.75 0 0 1-1.037 0c-.525-.503-.989-.531-1.239-.443M12 11.234c-.716-.471-1.525-.616-2.254-.36c-.933.327-1.496 1.226-1.496 2.323c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321l.07.052c.352.26.752.556 1.331.556c.58 0 .98-.296 1.33-.556l.07-.052c.461-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953c0-1.097-.562-1.996-1.495-2.323c-.73-.256-1.539-.111-2.255.36" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagLineDuotoneIcon],svg[solar-bag-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.789-3.64.034-8.03c.586-3.12.878-4.681 1.99-5.603M3.741 20.555Zm16.516 0c1.2-1.446.788-3.64-.034-8.03c-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBagLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagLinearIcon],svg[solar-bag-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 20.555C4.942 22 7.174 22 11.64 22h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 20.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 6.922C17.125 6 15.536 6 12.361 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1"></svg:path></svg:g>`,
})
export class SolarBagLinearIcon {
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
  selector: 'svg[solarBagMusic2BoldDuotoneIcon],svg[solar-bag-music-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.083 10.894c.439-2.34.658-3.511 1.491-4.203C6.408 6 7.598 6 9.98 6h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 22 14.771 22H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5a3.75 3.75 0 1 0-7.5 0v1.015C8.688 6.002 9.184 6 9.75 6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.75 10a.75.75 0 0 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25M11 14.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagMusic2BoldDuotoneIcon {
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
  selector: 'svg[solarBagMusic2LineDuotoneIcon],svg[solar-bag-music-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.789-3.64.034-8.03c.586-3.12.878-4.681 1.99-5.603M3.741 20.555Zm16.516 0c1.2-1.446.788-3.64-.034-8.03c-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0v-6a2 2 0 0 0 2 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBagMusic2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagMusic2LinearIcon],svg[solar-bag-music-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 20.555C4.942 22 7.174 22 11.64 22h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 20.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 6.922C17.125 6 15.536 6 12.361 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1m-2 10v-6"></svg:path><svg:circle cx="11" cy="16" r="2"></svg:circle><svg:path stroke-linecap="round" d="M15 12a2 2 0 0 1-2-2"></svg:path></svg:g>`,
})
export class SolarBagMusic2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagMusic2OutlineIcon],svg[solar-bag-music-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328q-.214.018-.414.043c-1.01.125-1.842.387-2.55.974S4.168 7.702 3.86 8.672c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529s.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11 11 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628s-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11"></svg:path><svg:path d="M13 9.25a.75.75 0 0 1 .75.75c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5c-.45 0-.875-.108-1.25-.3V16a2.75 2.75 0 1 1-1.5-2.45V10a.75.75 0 0 1 .75-.75M12.25 16a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"></svg:path></svg:g>`,
})
export class SolarBagMusic2OutlineIcon {
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
  selector: 'svg[solarBagMusicBoldDuotoneIcon],svg[solar-bag-music-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.083 10.894c.439-2.34.658-3.511 1.491-4.203C6.408 6 7.598 6 9.98 6h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 22 14.771 22H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5a3.75 3.75 0 1 0-7.5 0v1.015C8.688 6.002 9.184 6 9.75 6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 17a2.75 2.75 0 1 1-1.5-2.45v-2.72c0-.163 0-.375.031-.541c.081-.422.314-.8.656-1.061a2.5 2.5 0 0 1 .433-.251l1.37-.685q.305-.155.529-.256c.15-.065.33-.133.528-.156a1.75 1.75 0 0 1 1.848 1.142c.068.188.088.378.096.543c.009.161.009.36.009.587v.06c0 .162 0 .333-.031.499c-.081.422-.315.8-.656 1.061a2.6 2.6 0 0 1-.433.251l-1.37.685c-.203.102-.38.19-.529.255c-.15.066-.33.134-.528.157a1.8 1.8 0 0 1-.453-.006zm2.118-6.588c.07-.031.102-.04.11-.043a.25.25 0 0 1 .254.157a1 1 0 0 1 .012.117c.006.118.006.277.006.528a7 7 0 0 1-.005.259a.25.25 0 0 1-.093.15l-.038.022l-.191.098l-1.317.658a10 10 0 0 1-.474.23a1 1 0 0 1-.11.043a.25.25 0 0 1-.254-.157a1 1 0 0 1-.012-.117a11 11 0 0 1-.006-.528a7 7 0 0 1 .005-.259a.25.25 0 0 1 .093-.15l.038-.022c.04-.023.095-.05.191-.098l1.317-.658c.224-.113.366-.183.474-.23M10 15.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagMusicBoldDuotoneIcon {
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
  selector: 'svg[solarBagMusicLineDuotoneIcon],svg[solar-bag-music-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.789-3.64.034-8.03c.586-3.12.878-4.681 1.99-5.603M3.741 20.555Zm16.516 0c1.2-1.446.788-3.64-.034-8.03c-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 6V5a3 3 0 1 1 6 0v1" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.742 10.63l-.336-.672zm1.316-.66l-.335-.67zm-.116 3.06l-.336-.672zm-1.882-.307l.705-.256zm1.056.652l-.087-.745zm2.866-1.805l.737.141zm-.375.606l.456.596zm-.723-2.551l.087.745zm1.056.652l-.705.256zm-3.547.547l.455.595zm-.375.606l-.737-.141zM11.25 17c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 12.75 17zM10 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 19.75zM8.75 17c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 17zM10 15.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 10 14.25zM12.75 17v-5h-1.5v5zm.327-5.7l1.317-.658l-.671-1.342l-1.317.658zm1.846.4l-1.317.658l.671 1.342l1.317-.658zm-3.673.13c0 .234 0 .44.008.605c.01.165.029.355.097.543l1.41-.51c.008.022-.002.008-.009-.111a11 11 0 0 1-.006-.528zm2.356.528a10 10 0 0 1-.474.23c-.11.048-.127.045-.103.042l.174 1.49c.198-.023.377-.09.528-.156c.153-.067.336-.16.546-.264zm-2.251.62a1.75 1.75 0 0 0 1.848 1.142l-.174-1.49a.25.25 0 0 1-.264-.163zm3.895-1.807c0 .107 0 .168-.002.214l-.002.044l1.473.282c.034-.18.031-.367.031-.54zm.344 1.87c.155-.077.324-.158.469-.269l-.911-1.191l-.038.021l-.191.098zm-.348-1.612a.25.25 0 0 1-.094.152l.91 1.191a1.75 1.75 0 0 0 .657-1.061zm-.852-.787c.224-.113.366-.183.474-.23c.11-.048.127-.045.103-.042l-.174-1.49c-.198.023-.377.09-.528.156c-.153.067-.336.16-.546.264zm2.356.529c0-.235 0-.44-.009-.606a1.9 1.9 0 0 0-.096-.543l-1.41.51c-.008-.022.002-.008.009.111c.006.118.006.277.006.528zm-1.779-.801a.25.25 0 0 1 .264.163l1.41-.511a1.75 1.75 0 0 0-1.848-1.142zm-2.565-.412c-.155.078-.324.159-.469.27l.911 1.191l.038-.021c.04-.023.095-.05.191-.098zm.344 1.871c0-.107 0-.168.002-.214l.002-.044l-1.473-.282c-.034.18-.031.367-.031.54zm-.813-1.601a1.75 1.75 0 0 0-.656 1.061l1.473.282a.25.25 0 0 1 .094-.152z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBagMusicLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagMusicLinearIcon],svg[solar-bag-music-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.742 20.555C4.942 22 7.174 22 11.64 22h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 20.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 6.922C17.125 6 15.536 6 12.361 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"></svg:path><svg:path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1"></svg:path><svg:path d="M12 17a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 0v-5"></svg:path><svg:path stroke-linecap="round" d="m14.058 9.97l-1.316.66a2.3 2.3 0 0 0-.35.194a1 1 0 0 0-.374.606c-.018.093-.018.195-.018.4c0 .485 0 .727.06.893a1 1 0 0 0 1.056.652c.174-.02.391-.129.826-.346l1.316-.658a2 2 0 0 0 .35-.195a1 1 0 0 0 .374-.606c.018-.093.018-.195.018-.4c0-.485 0-.727-.06-.893a1 1 0 0 0-1.056-.652c-.174.02-.391.129-.826.346Z"></svg:path></svg:g>`,
})
export class SolarBagMusicLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagMusicOutlineIcon],svg[solar-bag-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328q-.214.018-.414.043c-1.01.125-1.842.387-2.55.974S4.168 7.702 3.86 8.672c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529s.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11 11 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628s-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11"></svg:path><svg:path d="M14.979 10.369a1 1 0 0 0-.11.042c-.108.048-.25.118-.475.23l-1.317.659a7 7 0 0 0-.23.12a.25.25 0 0 0-.092.15l-.003.045l-.002.214c0 .251 0 .41.007.528c.004.076.01.109.01.117a.25.25 0 0 0 .255.157a1 1 0 0 0 .11-.043c.108-.047.25-.117.474-.23l1.317-.658a7 7 0 0 0 .23-.12a.25.25 0 0 0 .092-.15l.003-.045c.002-.046.002-.107.002-.214c0-.251 0-.41-.006-.528a1 1 0 0 0-.011-.117a.25.25 0 0 0-.254-.157m-.182-1.49a1.75 1.75 0 0 1 1.848 1.143c.069.188.088.378.097.543c.008.161.008.36.008.587v.059c0 .162 0 .334-.031.5c-.08.422-.314.8-.656 1.061a2.5 2.5 0 0 1-.433.251l-.036.019l-1.333.666c-.203.102-.381.19-.53.255c-.15.066-.33.134-.528.157a1.8 1.8 0 0 1-.453-.006V17a2.75 2.75 0 1 1-1.5-2.45v-2.761c0-.163 0-.334.031-.5c.081-.422.315-.8.656-1.061a2.5 2.5 0 0 1 .433-.251l.036-.019l1.334-.666q.305-.155.53-.256c.15-.065.329-.133.527-.156M11.25 17a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"></svg:path></svg:g>`,
})
export class SolarBagMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagOutlineIcon],svg[solar-bag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.26c.557-.01 1.168-.01 1.84-.01h.821c.67 0 1.282 0 1.84.01V5A2.25 2.25 0 0 0 12 2.75m3.75 2.578V5a3.75 3.75 0 1 0-7.5 0v.328q-.214.018-.414.043c-1.01.125-1.842.387-2.55.974S4.168 7.702 3.86 8.672c-.3.94-.526 2.147-.81 3.666l-.021.11c-.402 2.143-.718 3.832-.777 5.163c-.06 1.365.144 2.495.914 3.422c.77.928 1.843 1.336 3.195 1.529c1.32.188 3.037.188 5.218.188h.845c2.18 0 3.898 0 5.217-.188c1.352-.193 2.426-.601 3.196-1.529s.972-2.057.913-3.422c-.058-1.331-.375-3.02-.777-5.163l-.02-.11c-.285-1.519-.512-2.727-.81-3.666c-.31-.97-.72-1.74-1.428-2.327c-.707-.587-1.54-.85-2.55-.974a11 11 0 0 0-.414-.043M8.02 6.86c-.855.105-1.372.304-1.776.64c-.403.334-.694.805-.956 1.627c-.267.84-.478 1.958-.774 3.537c-.416 2.217-.711 3.8-.764 5.013c-.052 1.19.14 1.88.569 2.399c.43.517 1.073.832 2.253 1c1.2.172 2.812.174 5.068.174h.72c2.257 0 3.867-.002 5.068-.173c1.18-.169 1.823-.484 2.253-1.001c.43-.518.621-1.208.57-2.4c-.054-1.211-.349-2.795-.765-5.012c-.296-1.58-.506-2.696-.774-3.537c-.262-.822-.552-1.293-.956-1.628s-.92-.534-1.776-.64c-.876-.108-2.013-.109-3.62-.109h-.72c-1.607 0-2.744.001-3.62.11" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagOutlineIcon {
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
  selector: 'svg[solarBagSmileBoldDuotoneIcon],svg[solar-bag-smile-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.083 11.894c.439-2.34.658-3.511 1.491-4.203C6.408 7 7.598 7 9.98 7h4.04c2.383 0 3.573 0 4.407.691c.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022S18.12 23 14.771 23H9.23c-3.349 0-5.024 0-5.923-1.084c-.9-1.084-.591-2.73.026-6.022z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.75 5.985a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5.985a3.75 3.75 0 1 0-7.5 0V7c.438-.013.934-.015 1.5-.015zm.128 9.765a2.251 2.251 0 0 0 4.245 0a.75.75 0 1 1 1.414.5a3.751 3.751 0 0 1-7.073 0a.75.75 0 0 1 1.414-.5"></svg:path>`,
})
export class SolarBagSmileBoldDuotoneIcon {
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
  selector: 'svg[solarBagSmileLineDuotoneIcon],svg[solar-bag-smile-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.703c2.739 0 4.108 0 5.13.7q.285.196.53.435C19.4 8 19.67 9.343 20.207 12.03c.771 3.856 1.157 5.784.269 7.15q-.241.373-.56.683C18.75 21 16.785 21 12.853 21H11.15c-3.933 0-5.899 0-7.065-1.138a4 4 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z"></svg:path><svg:path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1m-5.83 9a3.001 3.001 0 0 0 5.66 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBagSmileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagSmileLinearIcon],svg[solar-bag-smile-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.703c2.739 0 4.108 0 5.13.7q.285.196.53.435C19.4 8 19.67 9.343 20.207 12.03c.771 3.856 1.157 5.784.269 7.15q-.241.373-.56.683C18.75 21 16.785 21 12.853 21H11.15c-3.933 0-5.899 0-7.065-1.138a4 4 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z"></svg:path><svg:path stroke-linecap="round" d="M9 6V5a3 3 0 1 1 6 0v1m-5.83 9a3.001 3.001 0 0 0 5.66 0"></svg:path></svg:g>`,
})
export class SolarBagSmileLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBagSmileOutlineIcon],svg[solar-bag-smile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.254q.626-.005 1.355-.004h1.79q.73-.001 1.355.004V5A2.25 2.25 0 0 0 12 2.75m3.75 2.557V5a3.75 3.75 0 0 0-7.5 0v.307q-.202.014-.391.035c-.878.095-1.613.293-2.265.74a5 5 0 0 0-.63.516c-.566.552-.905 1.234-1.17 2.076c-.257.819-.465 1.859-.727 3.166l-.019.095c-.376 1.883-.673 3.367-.758 4.549c-.088 1.208.034 2.223.606 3.104q.288.442.664.81c.752.734 1.724 1.052 2.925 1.204c1.176.148 2.69.148 4.61.148h1.81c1.921 0 3.434 0 4.61-.148c1.201-.152 2.174-.47 2.925-1.204a4.8 4.8 0 0 0 .664-.81c.572-.88.694-1.896.607-3.104c-.086-1.182-.382-2.666-.76-4.549l-.018-.095c-.261-1.307-.47-2.347-.727-3.166c-.265-.842-.604-1.524-1.17-2.076a5 5 0 0 0-.63-.516c-.652-.447-1.387-.645-2.265-.74a11 11 0 0 0-.39-.035M8.02 6.833c-.747.08-1.208.233-1.578.486a3.3 3.3 0 0 0-.431.354c-.321.313-.56.735-.786 1.451c-.23.733-.424 1.693-.695 3.052c-.39 1.948-.667 3.34-.744 4.416c-.077 1.062.052 1.693.368 2.179q.196.302.454.554c.415.405 1.008.655 2.065.789c1.07.135 2.49.136 4.476.136h1.703c1.986 0 3.404-.001 4.475-.136c1.057-.134 1.65-.384 2.065-.789a3.3 3.3 0 0 0 .454-.554c.316-.486.445-1.117.369-2.18c-.078-1.076-.355-2.467-.744-4.415c-.272-1.359-.465-2.32-.696-3.052c-.225-.716-.465-1.138-.786-1.451a3 3 0 0 0-.43-.354c-.37-.253-.832-.405-1.579-.486c-.763-.082-1.743-.083-3.129-.083H11.15c-1.386 0-2.366.001-3.13.083m.901 7.46a.75.75 0 0 1 .957.457a2.251 2.251 0 0 0 4.244 0a.75.75 0 1 1 1.415.5a3.751 3.751 0 0 1-7.073 0a.75.75 0 0 1 .457-.957" clip-rule="evenodd"></svg:path>`,
})
export class SolarBagSmileOutlineIcon {
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
  selector: 'svg[solarBalloonBoldDuotoneIcon],svg[solar-balloon-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c4.142.034 7.594-3.92 7.56-8.196C19.527 5.53 16.142 2.034 12 2S4.527 5.404 4.56 9.68C4.595 13.954 7.859 17.964 12 18" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.75 5.994a.75.75 0 0 1 .756-.744a3.785 3.785 0 0 1 3.744 3.744a.75.75 0 0 1-1.5.012a2.285 2.285 0 0 0-2.256-2.256a.75.75 0 0 1-.744-.756" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.18 17.901a6.5 6.5 0 0 1-2.352-.019l-.018.04c-.152.274-.228.41-.261.516c-.193.617.204 1.262.858 1.39c.111.022.272.022.593.022s.482 0 .593-.022c.654-.128 1.051-.773.858-1.39c-.033-.105-.109-.242-.261-.515z"></svg:path><svg:path fill="currentColor" d="M11.25 19.786q.076.026.157.042c.111.022.272.022.593.022s.482 0 .593-.022q.081-.015.157-.042v1.464a.75.75 0 0 1-1.5 0z" opacity=".5"></svg:path>`,
})
export class SolarBalloonBoldDuotoneIcon {
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
  selector: 'svg[solarBalloonLineDuotoneIcon],svg[solar-balloon-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11.94 17.5c4.141.033 7.593-3.797 7.56-7.94c-.034-4.14-3.42-7.525-7.56-7.56A7.355 7.355 0 0 0 4.5 9.44c.034 4.142 3.297 8.027 7.44 8.06Z"></svg:path><svg:path d="M15.5 9a3.035 3.035 0 0 0-3-3M12 19.85c.321 0 .482 0 .593-.022c.654-.128 1.051-.772.858-1.39c-.033-.105-.109-.242-.261-.515M12 19.85c-.321 0-.482 0-.593-.022c-.654-.128-1.051-.772-.858-1.39c.033-.105.109-.242.261-.515M12 19.85V22" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBalloonLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBalloonLinearIcon],svg[solar-balloon-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 18c4.142.034 7.594-3.92 7.56-8.196C19.527 5.53 16.142 2.034 12 2S4.527 5.404 4.56 9.68C4.595 13.954 7.859 17.964 12 18Z"></svg:path><svg:path d="M15.5 9a3.035 3.035 0 0 0-3-3M12 20.35c.321 0 .482 0 .593-.022c.654-.128 1.051-.772.858-1.39c-.033-.105-.109-.242-.261-.515M12 20.35c-.321 0-.482 0-.593-.022c-.654-.128-1.051-.772-.858-1.39c.033-.105.109-.242.261-.515M12 20.35v2.15"></svg:path></svg:g>`,
})
export class SolarBalloonLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBalloonOutlineIcon],svg[solar-balloon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.506 5.25a.75.75 0 0 0-.012 1.5a2.285 2.285 0 0 1 2.256 2.256a.75.75 0 0 0 1.5-.012a3.785 3.785 0 0 0-3.744-3.744"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.81 9.685c-.036-4.671 3.613-8.473 8.196-8.435c4.573.038 8.268 3.885 8.304 8.548c.03 3.908-2.625 7.634-6.245 8.67q.064.128.102.247c.332 1.062-.356 2.131-1.417 2.347V22.5a.75.75 0 0 1-1.5 0v-1.438c-1.06-.216-1.749-1.285-1.417-2.347q.043-.133.116-.277c-3.592-1.09-6.108-4.871-6.138-8.753m8.184-6.935c-3.7-.03-6.714 3.044-6.683 6.923c.03 3.969 3.058 7.547 6.695 7.577c3.655.03 6.835-3.511 6.804-7.44c-.03-3.888-3.105-7.029-6.816-7.06m0 16q.26.002.514-.014l.027.052l.164.3l.037.077c.05.168-.05.38-.286.427c0 0-.023.004-.096.006L12 19.6c-.165 0-.273 0-.353-.002c-.074-.002-.097-.006-.097-.006c-.237-.047-.336-.26-.286-.427c.002-.005.011-.026.037-.077c.036-.069.086-.16.165-.3l.03-.06q.246.02.498.022" clip-rule="evenodd"></svg:path>`,
})
export class SolarBalloonOutlineIcon {
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
  selector: 'svg[solarBallsBoldDuotoneIcon],svg[solar-balls-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.276 2.046a6.49 6.49 0 0 1 4.852 3.204c.54.936.822 1.951.866 2.961c-.987.168-1.972.45-2.868.9A11.5 11.5 0 0 1 10.751 7.2C9.126 4.385 9.276 2.046 9.276 2.046M3.217 12.288l-.028-.04a6.49 6.49 0 0 1-.586-6.486c.66.47 2.362 1.817 3.644 4.038a12 12 0 0 1 .703 1.43q.085.209.16.41c.692 1.9.614 3.278.612 3.314A6.52 6.52 0 0 1 3.65 12.83a7 7 0 0 1-.434-.543" opacity=".3"></svg:path><svg:path fill="currentColor" d="M16.02 8.076c-2.019.194-4.164.8-5.654 2.29S8.27 14 8.076 16.019l5.903 5.904c2.019-.195 4.164-.8 5.654-2.29s2.095-3.635 2.29-5.654z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.249 2.87a6.47 6.47 0 0 1 4.027-.825s-.15 2.34 1.475 5.154c.44.764.916 1.396 1.375 1.913a6.8 6.8 0 0 0-1.76 1.254c-1.24 1.24-1.867 2.932-2.155 4.628a7 7 0 0 1-.49-.04c.003-.03.082-1.41-.612-3.314a11 11 0 0 0-.577-1.319a12 12 0 0 0-.285-.522a13.2 13.2 0 0 0-3.644-4.037A6.47 6.47 0 0 1 5.249 2.87" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.248 8.061a19 19 0 0 0-3.228.016l5.903 5.903c.113-1.17.087-2.296.016-3.228a2.895 2.895 0 0 0-2.691-2.69m-8.496 13.877c.932.071 2.059.097 3.228-.016L8.077 16.02a19 19 0 0 0-.016 3.228a2.895 2.895 0 0 0 2.691 2.69"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.96 12.312a.525.525 0 0 1 .742 0l.622.622l.621-.622a.525.525 0 1 1 .743.742l-.622.622l.622.622a.525.525 0 1 1-.742.742l-.622-.621l-.582.581l.622.622a.525.525 0 0 1-.742.742L15 15.742l-.581.582l.621.621a.525.525 0 1 1-.742.743l-.622-.622l-.622.622a.525.525 0 1 1-.742-.742l.622-.622l-.622-.622a.525.525 0 1 1 .742-.742l.622.621l.582-.581l-.622-.622a.525.525 0 0 1 .742-.742l.622.622l.581-.582l-.621-.622a.525.525 0 0 1 0-.742" clip-rule="evenodd"></svg:path>`,
})
export class SolarBallsBoldDuotoneIcon {
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
  selector: 'svg[solarBallsLineDuotoneIcon],svg[solar-balls-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16.02 8.077c-2.018.194-4.163.8-5.653 2.29s-2.096 3.635-2.29 5.653m7.943-7.943a19 19 0 0 1 3.228-.016a2.895 2.895 0 0 1 2.69 2.691c.072.932.098 2.059-.015 3.228M16.02 8.077l5.903 5.903m0 0c-.194 2.018-.8 4.163-2.29 5.654s-3.635 2.095-5.653 2.29m0 0a19 19 0 0 1-3.228.015a2.895 2.895 0 0 1-2.69-2.691a19 19 0 0 1 .015-3.228m5.903 5.903L8.077 16.02"></svg:path><svg:path d="M14.996 8.252a6.5 6.5 0 0 0-.868-3.001a6.49 6.49 0 0 0-4.85-3.204a6.499 6.499 0 1 0-1.12 12.943M9.215 2s-.138 2.356 1.357 5.19c.457.869.956 1.569 1.428 2.123M3 5.928s1.933 1.047 3.428 3.881C7.923 12.644 7.785 15 7.785 15" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m12.5 17.5l5-5m-2 0l2 2m-5 1l2 2M14 14l2 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBallsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBallsLinearIcon],svg[solar-balls-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16.02 8.077c-2.018.194-4.163.8-5.653 2.29s-2.096 3.635-2.29 5.653m7.943-7.943a19 19 0 0 1 3.228-.016a2.895 2.895 0 0 1 2.69 2.691c.072.932.098 2.059-.015 3.228M16.02 8.077l5.903 5.903m0 0c-.194 2.018-.8 4.163-2.29 5.654s-3.635 2.095-5.653 2.29m0 0a19 19 0 0 1-3.228.015a2.895 2.895 0 0 1-2.69-2.691a19 19 0 0 1 .015-3.228m5.903 5.903L8.077 16.02"></svg:path><svg:path d="M14.996 8.252a6.5 6.5 0 0 0-.868-3.001a6.49 6.49 0 0 0-4.85-3.204a6.499 6.499 0 1 0-1.12 12.943"></svg:path><svg:path d="M9.215 2s-.138 2.356 1.357 5.19c.457.869.956 1.569 1.428 2.123M3 5.928s1.933 1.047 3.428 3.881C7.923 12.644 7.785 15 7.785 15"></svg:path><svg:path stroke-linecap="round" d="m12.5 17.5l5-5m-2 0l2 2m-5 1l2 2M14 14l2 2"></svg:path></svg:g>`,
})
export class SolarBallsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBallsOutlineIcon],svg[solar-balls-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.485 2.75a5.7 5.7 0 0 0-2.86.771a5.7 5.7 0 0 0-1.992 1.917l.121.082c.23.16.545.4.907.733c.725.667 1.638 1.704 2.43 3.206c.55 1.042.892 2.024 1.105 2.865c.384-.907.914-1.762 1.64-2.488q.461-.458.983-.818c-.31-.433-.618-.924-.91-1.477a12.7 12.7 0 0 1-1.317-3.89c-.056-.346-.088-.65-.107-.901m1.525.203a10 10 0 0 0 .063.46a11.2 11.2 0 0 0 1.162 3.428c.29.55.597 1.027.9 1.437a10.7 10.7 0 0 1 2.046-.67a5.7 5.7 0 0 0-.702-1.982a5.73 5.73 0 0 0-3.469-2.673m5.65 4.408a7.2 7.2 0 0 0-.882-2.485a7.24 7.24 0 0 0-5.41-3.573A7.249 7.249 0 0 0 7.36 15.659q-.017.145-.03.29a20 20 0 0 0-.018 3.356a3.645 3.645 0 0 0 3.382 3.382c.962.073 2.134.1 3.357-.017c2.09-.202 4.442-.837 6.112-2.506c1.67-1.67 2.305-4.021 2.506-6.112c.117-1.223.09-2.395.017-3.357a3.645 3.645 0 0 0-3.382-3.382a20 20 0 0 0-3.644.048m-8.67 6.686a5.73 5.73 0 0 1-3.469-2.673a5.73 5.73 0 0 1-.52-4.549c.17.125.392.3.645.533c.616.566 1.417 1.47 2.119 2.801a11.2 11.2 0 0 1 1.162 3.428q.04.25.063.46M17.754 8.75l3.496 3.496c-.002-.51-.025-.995-.059-1.437a2.145 2.145 0 0 0-2-2a20 20 0 0 0-1.437-.059m3.385 5.506l-5.395-5.395c-1.827.22-3.615.803-4.847 2.036c-1.233 1.232-1.815 3.02-2.036 4.847l5.395 5.395c1.827-.22 3.615-.803 4.847-2.036c1.233-1.232 1.815-3.02 2.036-4.847m-8.893 6.994L8.75 17.754c.002.51.025.995.059 1.437a2.146 2.146 0 0 0 2 2c.442.034.927.057 1.437.059m2.724-9.28a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 0 1 1.06 1.06l-.47.47l.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47l-.44.44l.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47l-.44.44l.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47l-.47.47a.75.75 0 0 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 1 1 1.06-1.06l.47.47l.44-.44l-.47-.47a.75.75 0 1 1 1.06-1.06l.47.47l.44-.44l-.47-.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarBallsOutlineIcon {
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
  selector: 'svg[solarBanknote2BoldDuotoneIcon],svg[solar-banknote-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.506 10.714c0-.92.755-1.666 1.686-1.666c.932 0 1.687.746 1.687 1.666s-.755 1.667-1.687 1.667a1.677 1.677 0 0 1-1.686-1.667"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 10.714c0-2.693 0-4.04.847-4.877S5.057 5 7.783 5h4.82c2.725 0 4.088 0 4.935.837s.847 2.184.847 4.877c0 2.694 0 4.041-.847 4.878s-2.21.837-4.936.837H7.783c-2.726 0-4.09 0-4.936-.837S2 13.408 2 10.714m5.06 0c0-1.71 1.402-3.095 3.132-3.095s3.133 1.386 3.133 3.095s-1.402 3.096-3.133 3.096c-1.73 0-3.132-1.386-3.132-3.096M4.168 12.62a.72.72 0 0 0 .723.715c.4 0 .723-.32.723-.715V8.81a.72.72 0 0 0-.723-.714a.72.72 0 0 0-.723.715zm11.326.715c-.4 0-.723-.32-.723-.715V8.81c0-.394.323-.714.723-.714s.722.32.722.715v3.81a.72.72 0 0 1-.722.714" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.065 16.225q.02.225.048.434c.117.857.366 1.579.946 2.152q.124.123.257.226c.566.514 1.266.742 2.09.851c.836.111 1.898.111 3.216.111h4.925c1.318 0 2.38 0 3.217-.111c.867-.115 1.598-.362 2.178-.935s.83-1.295.946-2.152c.112-.826.112-1.876.112-3.178v-.105c0-1.302 0-2.352-.112-3.178c-.117-.857-.366-1.579-.946-2.152a3 3 0 0 0-.257-.226c-.566-.514-1.266-.742-2.09-.851a9 9 0 0 0-.41-.045c.2.834.2 1.984.2 3.648c0 2.694 0 4.04-.847 4.878c-.846.836-2.21.836-4.936.836H7.783c-1.702 0-2.872 0-3.718-.203" opacity=".5"></svg:path>`,
})
export class SolarBanknote2BoldDuotoneIcon {
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
  selector: 'svg[solarBanknote2LineDuotoneIcon],svg[solar-banknote-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 10c0-2.828 0-4.243.879-5.121C3.757 4 5.172 4 8 4h5c2.828 0 4.243 0 5.121.879C19 5.757 19 7.172 19 10s0 4.243-.879 5.121C17.243 16 15.828 16 13 16H8c-2.828 0-4.243 0-5.121-.879C2 14.243 2 12.828 2 10Z"></svg:path><svg:path d="M19 7.076c.975.096 1.632.313 2.122.803C22 8.757 22 10.172 22 13s0 4.243-.878 5.121c-.88.88-2.293.88-5.122.88h-5c-2.828 0-4.242 0-5.121-.88c-.49-.49-.707-1.146-.803-2.121" opacity=".5"></svg:path><svg:path d="M13 10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M16 12V8M5 12V8" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBanknote2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBanknote2LinearIcon],svg[solar-banknote-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h5c2.828 0 4.243 0 5.121.879C19 6.757 19 8.172 19 11s0 4.243-.879 5.121C17.243 17 15.828 17 13 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11Z"></svg:path><svg:path d="M19 8.076c.975.096 1.631.313 2.121.803c.88.878.88 2.293.88 5.121s0 4.243-.88 5.121c-.878.88-2.293.88-5.12.88h-5c-2.83 0-4.244 0-5.122-.88c-.49-.49-.707-1.146-.803-2.121"></svg:path><svg:path d="M13 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M16 13V9M5 13V9"></svg:path></svg:g>`,
})
export class SolarBanknote2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBanknote2OutlineIcon],svg[solar-banknote-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.945 4.25h5.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.554.555.817 1.242.95 2.05c.809.132 1.495.396 2.05.95c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v.11c0 1.367 0 2.47-.116 3.337c-.121.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-5.11c-1.367 0-2.47 0-3.336-.116c-.9-.122-1.658-.38-2.26-.982c-.555-.555-.818-1.242-.95-2.05c-.81-.133-1.496-.396-2.05-.95c-.603-.602-.861-1.36-.982-2.26c-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117m-1.99 13.482c.106.402.255.66.454.859c.277.277.666.457 1.4.556c.755.102 1.756.103 3.191.103h5c1.436 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.4-.556c.276-.277.457-.665.555-1.4c.102-.754.103-1.755.103-3.19s-.001-2.437-.103-3.193c-.098-.734-.279-1.122-.556-1.399c-.2-.2-.456-.349-.86-.454c.019.59.019 1.251.019 1.99v.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-5.11c-.739 0-1.4 0-1.99-.018M4.809 5.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191s.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h5c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191s-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.754-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103M10.5 9.25a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M7.25 11a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M5 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 5 8.25m11 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBanknote2OutlineIcon {
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
  selector: 'svg[solarBanknoteBoldDuotoneIcon],svg[solar-banknote-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.778 18.326C4.787 19 6.19 19 9 19h6c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C19.213 5 17.81 5 15 5H9c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.5 15.75a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75M17.75 15a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 0 0-7.5 0m1.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarBanknoteBoldDuotoneIcon {
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
  selector: 'svg[solarBanknoteLineDuotoneIcon],svg[solar-banknote-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 19c-2.809 0-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C2 16.213 2 14.81 2 12s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C4.787 5 6.19 5 9 5h6c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C22 7.787 22 9.19 22 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C19.213 19 17.81 19 15 19z" opacity=".5"></svg:path><svg:path d="M12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"></svg:path><svg:path stroke-linecap="round" d="M5.5 15V9m13 6V9"></svg:path></svg:g>`,
})
export class SolarBanknoteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBanknoteLinearIcon],svg[solar-banknote-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 19c-2.809 0-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C2 16.213 2 14.81 2 12s0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C4.787 5 6.19 5 9 5h6c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C22 7.787 22 9.19 22 12s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C19.213 19 17.81 19 15 19z"></svg:path><svg:path d="M12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"></svg:path><svg:path stroke-linecap="round" d="M5.5 15V9m13 6V9"></svg:path></svg:g>`,
})
export class SolarBanknoteLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBanknoteOutlineIcon],svg[solar-banknote-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.21 5.83c-.781-.08-1.79-.08-3.21-.08H9c-1.42 0-2.429 0-3.21.08c-.77.079-1.235.227-1.596.468a3.3 3.3 0 0 0-.896.896c-.241.361-.39.827-.468 1.596c-.08.781-.08 1.79-.08 3.21s0 2.429.08 3.21c.079.77.227 1.235.468 1.596c.237.354.542.66.896.896c.361.241.827.39 1.596.468c.781.08 1.79.08 3.21.08h6c1.42 0 2.429 0 3.21-.08c.77-.079 1.235-.227 1.596-.468c.354-.237.66-.542.896-.896c.241-.361.39-.827.468-1.596c.08-.781.08-1.79.08-3.21s0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.596a3.3 3.3 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468m.152-1.492c.888.09 1.629.28 2.277.713c.519.346.964.791 1.31 1.31c.434.648.623 1.39.713 2.277c.088.866.088 1.951.088 3.32v.084c0 1.369 0 2.454-.088 3.32c-.09.888-.28 1.629-.712 2.277a4.8 4.8 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713c-.866.088-1.951.088-3.32.088H8.958c-1.369 0-2.454 0-3.32-.088c-.888-.09-1.629-.28-2.277-.712a4.8 4.8 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277c-.088-.866-.088-1.951-.088-3.32v-.084c0-1.369 0-2.454.088-3.32c.09-.888.28-1.629.713-2.277a4.8 4.8 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713c.866-.088 1.951-.088 3.32-.088h6.084c1.369 0 2.454 0 3.32.088M5.5 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m6.5 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M18.5 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarBanknoteOutlineIcon {
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
  selector: 'svg[solarBarChairBoldDuotoneIcon],svg[solar-bar-chair-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.46 6.733a4 4 0 0 1 3.294-4.425l.373-.064a17 17 0 0 1 5.745 0l.373.064a4 4 0 0 1 3.295 4.425l-.017.14a1 1 0 0 1-.992.879H6.469a1 1 0 0 1-.993-.88z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.233 7.752L5.267 21.595a.75.75 0 0 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.467-.314L15.766 7.752H14.25q0 .078.017.157L16 16.002H7.999l1.735-8.093a1 1 0 0 0 .016-.157z" opacity=".5"></svg:path>`,
})
export class SolarBarChairBoldDuotoneIcon {
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
  selector: 'svg[solarBarChairLineDuotoneIcon],svg[solar-bar-chair-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.06 1.06 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917z"></svg:path><svg:path stroke-linecap="round" d="M9 8L6 22m9-14l3 14"></svg:path><svg:path stroke-linecap="round" d="M16.5 17h-9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBarChairLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBarChairLinearIcon],svg[solar-bar-chair-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.06 1.06 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917z"></svg:path><svg:path stroke-linecap="round" d="M9 8L6 22m9-14l3 14m-1-5H7"></svg:path></svg:g>`,
})
export class SolarBarChairLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBarChairOutlineIcon],svg[solar-bar-chair-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.936 2.995a17.8 17.8 0 0 0-5.872 0l-.398.066c-1.857.312-3.113 1.987-2.89 3.784l.018.145c.017.136.14.26.313.26h11.786a.31.31 0 0 0 .313-.26l.018-.145l.745.093l-.745-.093c.223-1.797-1.033-3.472-2.89-3.784zm.992 5.755h1.965c.905 0 1.689-.664 1.802-1.575l-.744-.092l.744.092l.018-.145c.325-2.621-1.508-5.008-4.13-5.448l-.398-.067a19.3 19.3 0 0 0-6.37 0l-.397.067c-2.623.44-4.456 2.827-4.13 5.448l.017.145A1.81 1.81 0 0 0 6.107 8.75h1.965l-1.67 7.798a.75.75 0 0 0-.133.619l-1.002 4.676a.75.75 0 1 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.467-.314l-1.003-4.676a.75.75 0 0 0-.132-.619zm-1.534 0H9.606L8 16.25h8.002z" clip-rule="evenodd"></svg:path>`,
})
export class SolarBarChairOutlineIcon {
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
  selector: 'svg[solarBasketballBoldDuotoneIcon],svg[solar-basketball-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.453 8.397c1.728-1.469 3.087-3.21 3.672-4.949l.01-.031A9.96 9.96 0 0 1 20.66 7A9.95 9.95 0 0 1 22 11.842c-1.995-.431-4.186-.1-6.256.68c-.32-.864-.685-1.688-1.094-2.397a14 14 0 0 0-1.197-1.728"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.34 17a9.95 9.95 0 0 0 3.525 3.583v-.002c.818-2.468 3.2-4.945 5.992-6.644q.73-.445 1.508-.822c-.302-.823-.64-1.593-1.014-2.24a13 13 0 0 0-1.082-1.556q-.519.372-1.064.706c-2.757 1.693-6.112 2.743-9.061 2.162l-.145-.028a9.96 9.96 0 0 0 1.34 4.84" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.226 13.943c1.887-.72 3.811-.996 5.477-.63l.204.045a10 10 0 0 1-.71 2.57a9.95 9.95 0 0 1-3.538 4.317l-.013-.079a52 52 0 0 0-.687-3.494a40 40 0 0 0-.733-2.73M8.319 3.454a35 35 0 0 0-.6-.465l-.023-.016a9.95 9.95 0 0 1 5.5-.902c.887.107 1.757.333 2.584.67l-.077.229c-.477 1.418-1.65 2.95-3.228 4.29a32 32 0 0 0-2.203-2.16A42 42 0 0 0 8.32 3.453m2.1 5.294c-2.586 1.588-5.55 2.449-7.987 1.969l-.342-.068a10 10 0 0 1 4.19-6.853l.328.239l.002.001l.01.007l.039.029l.154.115a40 40 0 0 1 2.456 2.03c.66.592 1.358 1.26 2.013 1.965q-.42.293-.863.566m5.785 11.916l.002.012v.004l.053.369a10 10 0 0 1-8.04.21l.069-.204c.663-2.002 2.72-4.237 5.348-5.836q.592-.36 1.206-.667c.252.83.471 1.671.655 2.462a51 51 0 0 1 .699 3.597z" opacity=".5"></svg:path>`,
})
export class SolarBasketballBoldDuotoneIcon {
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
  selector: 'svg[solarBasketballLineDuotoneIcon],svg[solar-basketball-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.34 17c2.76 4.783 8.876 6.42 13.66 3.66a9.96 9.96 0 0 0 4.196-4.731a9.99 9.99 0 0 0-.536-8.93a9.99 9.99 0 0 0-7.465-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"></svg:path><svg:path stroke-linecap="round" d="M16.95 20.573S16.01 13.983 14 10.5c-2.01-3.482-6.95-7.073-6.95-7.073m.527 17.39c1.482-4.47 8.875-9.424 14.286-8.237m-5.45-9.371C14.927 7.63 7.675 12.512 2.29 11.452" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBasketballLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBasketballLinearIcon],svg[solar-basketball-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.34 17c2.76 4.783 8.876 6.42 13.66 3.66a9.96 9.96 0 0 0 4.196-4.731a9.99 9.99 0 0 0-.536-8.93a9.99 9.99 0 0 0-7.465-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"></svg:path><svg:path stroke-linecap="round" d="M16.95 20.573S16.01 13.982 14 10.5S7.05 3.427 7.05 3.427"></svg:path><svg:path stroke-linecap="round" d="M21.864 12.58c-5.411-1.187-12.805 3.768-14.287 8.238m8.837-17.609c-1.488 4.42-8.74 9.303-14.125 8.243"></svg:path></svg:g>`,
})
export class SolarBasketballLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBasketballOutlineIcon],svg[solar-basketball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.367 3.492c.499.396 1.172.95 1.905 1.607c.702.63 1.473 1.366 2.203 2.161c1.403-1.191 2.486-2.535 3.044-3.815a9.3 9.3 0 0 0-2.414-.63a9.2 9.2 0 0 0-4.738.677m8.491.634c-.678 1.509-1.901 2.993-3.405 4.271a14 14 0 0 1 1.197 1.728c.41.71.774 1.533 1.095 2.396c1.812-.683 3.717-1.021 5.502-.805a9.2 9.2 0 0 0-1.236-4.341a9.2 9.2 0 0 0-3.153-3.249m4.312 9.093c-1.536-.209-3.255.08-4.944.724c.29.937.535 1.876.733 2.729a52 52 0 0 1 .563 2.75a9.2 9.2 0 0 0 2.984-3.788c.33-.771.553-1.585.664-2.415m-5.026 7.05a51 51 0 0 0-.645-3.257a39 39 0 0 0-.655-2.461q-.614.307-1.207.667c-2.412 1.468-4.342 3.47-5.156 5.337a9.24 9.24 0 0 0 7.663-.285m-9.002-.395c1.001-2.227 3.19-4.401 5.715-5.937q.73-.445 1.508-.822c-.302-.823-.64-1.593-1.014-2.24A13 13 0 0 0 12.27 9.32a18 18 0 0 1-1.064.706c-2.57 1.578-5.658 2.597-8.454 2.259a9.2 9.2 0 0 0 1.237 4.34a9.2 9.2 0 0 0 3.153 3.25M2.83 10.78a9.24 9.24 0 0 1 4.092-6.513q.188.143.466.363c.486.383 1.154.931 1.883 1.585c.66.592 1.358 1.26 2.012 1.965q-.42.293-.862.566C7.973 10.25 5.187 11.1 2.83 10.78m3.795-8.09a10.7 10.7 0 0 1 6.66-1.364a10.74 10.74 0 0 1 8.025 5.299a10.74 10.74 0 0 1 .576 9.598a10.7 10.7 0 0 1-4.511 5.087c-5.142 2.968-11.716 1.206-14.685-3.935C-.278 12.233 1.483 5.658 6.625 2.69" clip-rule="evenodd"></svg:path>`,
})
export class SolarBasketballOutlineIcon {
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
  selector: 'svg[solarBathBoldDuotoneIcon],svg[solar-bath-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 11h-.25a.75.75 0 0 0 0 1.5H2v.355c0 .375 0 .595.016.84c.142 2.237 1.35 4.302 3.102 5.652c.157.126.913.588 1.27.803a7.4 7.4 0 0 0 2.581.765c.245.025.394.03.648.04h.007c.74.028 1.464.045 2.126.045s1.386-.017 2.126-.045h.007c.254-.01.404-.015.648-.04a7.4 7.4 0 0 0 2.58-.765c.339-.2 1.067-.639 1.272-.803c1.751-1.35 2.96-3.416 3.102-5.652c.015-.245.015-.465.015-.84v-.038c0-.06 0-.123-.004-.18a2 2 0 0 0-.014-.137h.268a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m5.118 19.347l-.039.068l-1 2a.75.75 0 1 0 1.342.67l.968-1.935c-.358-.215-1.114-.677-1.271-.803m11.993.803l.968 1.936a.75.75 0 1 0 1.342-.671l-1-2l-.039-.068c-.204.164-.932.604-1.27.803M3.5 4.135a1.635 1.635 0 0 1 3.153-.607l.144.358l1.36-.64l-.11-.275A3.135 3.135 0 0 0 2 4.135V11h1.5z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.796 3.886a4.1 4.1 0 0 0-1.38 1.774a4.18 4.18 0 0 0-.019 3.107a.75.75 0 0 0 .994.414l5.961-2.567a.75.75 0 0 0 .402-.963a3.97 3.97 0 0 0-2.133-2.213a3.84 3.84 0 0 0-2.465-.192z"></svg:path>`,
})
export class SolarBathBoldDuotoneIcon {
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
  selector: 'svg[solarBathLineDuotoneIcon],svg[solar-bath-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3 13.083c0-.077 0-.116.002-.148a1 1 0 0 1 .933-.933c.033-.002.07-.002.148-.002h15.834c.077 0 .115 0 .148.002a1 1 0 0 1 .933.933c.002.032.002.07.002.148c0 .395 0 .593-.014.815c-.209 3.287-3.003 6.189-6.28 6.52c-.221.023-.35.028-.608.038A57 57 0 0 1 12 20.5c-.65 0-1.364-.017-2.098-.044c-.258-.01-.387-.015-.607-.037c-3.278-.332-6.072-3.234-6.28-6.521C3 13.676 3 13.478 3 13.083Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6 20l-1 2m13-2l1 2" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 12h20"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 13V4.385A2.385 2.385 0 0 1 7.6 3.5l.4.886" opacity=".5"></svg:path><svg:path fill="currentColor" d="m7.979 4.447l.328.675zM6.362 6.192l.695.283zm4.215-1.814l-.295.69zM6.346 8.742l-.698.275a.75.75 0 0 0 .994.414zm5.96-2.566l.297.688a.75.75 0 0 0 .401-.963zm-5.263 2.29a2.68 2.68 0 0 1 .014-1.991l-1.39-.565a4.18 4.18 0 0 0-.02 3.107zm4.967-2.98L6.05 8.054l.592 1.377l5.961-2.566zm-1.728-.418c.622.265 1.085.77 1.327 1.382l1.395-.55a3.97 3.97 0 0 0-2.132-2.212zM7.057 6.475a2.57 2.57 0 0 1 1.25-1.353l-.656-1.35A4.07 4.07 0 0 0 5.667 5.91zm1.25-1.353a2.36 2.36 0 0 1 1.975-.054l.59-1.38a3.86 3.86 0 0 0-3.221.085z"></svg:path></svg:g>`,
})
export class SolarBathLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBathLinearIcon],svg[solar-bath-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3 13.083c0-.077 0-.116.002-.148a1 1 0 0 1 .933-.933c.033-.002.07-.002.148-.002h15.834c.077 0 .115 0 .148.002a1 1 0 0 1 .933.933c.002.032.002.07.002.148c0 .395 0 .593-.014.815c-.209 3.287-3.003 6.189-6.28 6.52c-.221.023-.35.028-.608.038A57 57 0 0 1 12 20.5c-.65 0-1.364-.017-2.098-.044c-.258-.01-.387-.015-.607-.037c-3.278-.332-6.072-3.234-6.28-6.521C3 13.676 3 13.478 3 13.083Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6 20l-1 2m13-2l1 2M2 12h20"></svg:path><svg:path fill="currentColor" d="M2.25 13a.75.75 0 0 0 1.5 0zM7.6 3.5l.696-.28zm.379.947l.328.674zM6.362 6.192l.695.283zm4.215-1.814l-.295.69zM6.346 8.742l-.698.275a.75.75 0 0 0 .994.413zm5.96-2.567l.297.69a.75.75 0 0 0 .401-.964zM3.75 13V4.385h-1.5V13zM5.385 2.75c.669 0 1.27.407 1.518 1.028l1.393-.557a3.135 3.135 0 0 0-2.91-1.971zM3.75 4.385c0-.903.732-1.635 1.635-1.635v-1.5A3.135 3.135 0 0 0 2.25 4.385zm3.153-.607l.38.948l1.392-.557l-.379-.948zm.14 4.689a2.68 2.68 0 0 1 .014-1.992l-1.39-.565a4.18 4.18 0 0 0-.02 3.107zm4.967-2.98L6.049 8.053l.593 1.377l5.96-2.566zm-1.728-.42c.622.266 1.085.77 1.327 1.383l1.395-.55a3.97 3.97 0 0 0-2.132-2.212zM7.057 6.476a2.57 2.57 0 0 1 1.25-1.354l-.656-1.348A4.07 4.07 0 0 0 5.667 5.91zm1.25-1.354a2.36 2.36 0 0 1 1.975-.053l.59-1.38a3.86 3.86 0 0 0-3.221.085z"></svg:path></svg:g>`,
})
export class SolarBathLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarBathOutlineIcon],svg[solar-bath-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.385 2.75c-.903 0-1.635.732-1.635 1.635v6.865H22a.75.75 0 0 1 0 1.5h-.268q.01.067.014.136q.005.088.004.18v.039c0 .375 0 .595-.016.84c-.142 2.236-1.35 4.302-3.101 5.652l.038.068l1 2a.75.75 0 1 1-1.342.67l-.968-1.935a7.36 7.36 0 0 1-3.228.805h-.007c-.74.028-1.464.045-2.126.045s-1.386-.017-2.126-.045h-.007a7.36 7.36 0 0 1-3.228-.805l-.968 1.935a.75.75 0 1 1-1.342-.67l1-2l.038-.068c-1.751-1.35-2.96-3.416-3.101-5.652a13 13 0 0 1-.016-.84v-.355H2a.75.75 0 0 1 0-1.5h.25V4.385a3.135 3.135 0 0 1 6.046-1.164l.11.275a3.84 3.84 0 0 1 2.466.192a3.97 3.97 0 0 1 2.132 2.213a.75.75 0 0 1-.401.963L6.643 9.43a.75.75 0 0 1-.995-.413a4.18 4.18 0 0 1 .02-3.107a4.1 4.1 0 0 1 1.379-1.774l-.144-.358A1.635 1.635 0 0 0 5.385 2.75m-1.302 10h-.1a.25.25 0 0 0-.233.25v.083c0 .402 0 .574.013.767c.185 2.922 2.695 5.528 5.607 5.823c.195.02.303.023.56.033c.728.027 1.433.044 2.07.044s1.342-.017 2.07-.044c.257-.01.365-.014.56-.034c2.912-.294 5.422-2.9 5.608-5.822c.012-.193.012-.365.012-.767v-.099q0-.003 0 0a.25.25 0 0 0-.234-.233q.002 0 0 0H20l-.082-.001zm6.2-7.682a2.36 2.36 0 0 0-1.976.053a2.57 2.57 0 0 0-1.25 1.354a2.7 2.7 0 0 0-.19 1.226l4.38-1.886a2.4 2.4 0 0 0-.965-.747" clip-rule="evenodd"></svg:path>`,
})
export class SolarBathOutlineIcon {
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
  selector: 'svg[solarBatteryChargeBoldDuotoneIcon],svg[solar-battery-charge-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172S19.5 15.771 19.5 12s0-5.657-1.172-6.828S15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.491 14c.009-.6.009-1.264.009-2c0-.735 0-1.4-.009-2H20c.942 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.942 14 20 14zm-7.415-4.52a.75.75 0 0 0-1.152-.96l-2.5 3A.75.75 0 0 0 9 12.75h1.899l-1.475 1.77a.75.75 0 0 0 1.152.96l2.5-3a.75.75 0 0 0-.576-1.23h-1.899z"></svg:path>`,
})
export class SolarBatteryChargeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
