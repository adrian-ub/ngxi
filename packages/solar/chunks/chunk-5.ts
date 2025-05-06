import { Component, input } from '@angular/core'

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
  selector: 'svg[solarFolderBoldDuotoneIcon],svg[solar-folder-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarFolderBoldDuotoneIcon {
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
  selector: 'svg[solarFolderCheckBoldDuotoneIcon],svg[solar-folder-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.498 11.44a.75.75 0 0 1 .063 1.058l-2.667 3a.75.75 0 0 1-1.121 0l-1.334-1.5a.75.75 0 1 1 1.122-.996l.772.87l2.107-2.37a.75.75 0 0 1 1.058-.062"></svg:path>`,
})
export class SolarFolderCheckBoldDuotoneIcon {
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
  selector: 'svg[solarFolderCheckLineDuotoneIcon],svg[solar-folder-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10 13.5l1.333 1.5L14 12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFolderCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCheckLinearIcon],svg[solar-folder-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10 13.5l1.333 1.5L14 12"></svg:path></svg:g>`,
})
export class SolarFolderCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCheckOutlineIcon],svg[solar-folder-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102c.841.106 1.556.332 2.144.86q.147.133.28.28c.529.588.754 1.303.86 2.144c.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m.09 1.5c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975c-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487c-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182c-.35-.1-.689-.24-1.008-.417c-.58-.324-1.058-.801-1.8-1.543l-.077-.078l-.55-.55a8 8 0 0 0-.503-.482a3.25 3.25 0 0 0-1.771-.734a8 8 0 0 0-.696-.014m7.548 8.69a.75.75 0 0 1 .063 1.058l-2.667 3a.75.75 0 0 1-1.121 0l-1.334-1.5a.75.75 0 1 1 1.122-.996l.772.87l2.107-2.37a.75.75 0 0 1 1.058-.062" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderCheckOutlineIcon {
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
  selector: 'svg[solarFolderCloudBoldDuotoneIcon],svg[solar-folder-cloud-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16 13.882C16 15.052 14.977 16 13.714 16h-4C8.768 16 8 15.289 8 14.412s.768-1.589 1.714-1.589q.171 0 .332.03a2 2 0 0 1-.141-.735c0-1.17 1.023-2.118 2.286-2.118c1.175 0 2.144.823 2.271 1.88c.895.288 1.538 1.075 1.538 2.002"></svg:path>`,
})
export class SolarFolderCloudBoldDuotoneIcon {
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
  selector: 'svg[solarFolderCloudLineDuotoneIcon],svg[solar-folder-cloud-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M12.952 11.885a2.45 2.45 0 0 1 1.51-.004m-4.415.972a2 2 0 0 0-.333-.03c-.946 0-1.714.712-1.714 1.589S8.768 16 9.714 16h4C14.977 16 16 15.052 16 13.882c0-.927-.643-1.714-1.538-2.001m-4.415.972a2 2 0 0 1-.142-.735c0-1.17 1.023-2.118 2.286-2.118c1.175 0 2.144.823 2.271 1.88m-4.415.973c.225.041.435.123.62.238" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFolderCloudLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCloudLinearIcon],svg[solar-folder-cloud-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M12.952 11.885a2.45 2.45 0 0 1 1.51-.004m-4.415.972a2 2 0 0 0-.333-.03c-.946 0-1.714.712-1.714 1.589S8.768 16 9.714 16h4C14.977 16 16 15.052 16 13.882c0-.927-.643-1.714-1.538-2.001m-4.415.972a2 2 0 0 1-.142-.735c0-1.17 1.023-2.118 2.286-2.118c1.175 0 2.144.823 2.271 1.88m-4.415.973c.225.041.435.123.62.238"></svg:path></svg:g>`,
})
export class SolarFolderCloudLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderCloudOutlineIcon],svg[solar-folder-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102c.841.106 1.556.332 2.144.86q.147.133.28.28c.529.588.754 1.303.86 2.144c.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m.09 1.5c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975c-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487c-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182c-.35-.1-.689-.24-1.008-.417c-.58-.324-1.058-.801-1.8-1.543l-.077-.078l-.55-.55a8 8 0 0 0-.503-.482a3.25 3.25 0 0 0-1.771-.734a8 8 0 0 0-.696-.014m5.24 8c-.903 0-1.535.665-1.535 1.368q0 .067.007.135q.21.084.4.2a.75.75 0 0 1-.79 1.275a1.03 1.03 0 0 0-.558-.155c-.587 0-.964.429-.964.839s.377.838.964.838h4c.903 0 1.536-.665 1.536-1.368c0-.56-.392-1.087-1.017-1.287a1.7 1.7 0 0 0-1.047.003a.75.75 0 0 1-.467-1.426q.218-.07.447-.11a1.63 1.63 0 0 0-.976-.312m2.923.587c-.367-1.234-1.569-2.087-2.922-2.087c-1.622 0-3.036 1.231-3.036 2.868v.017c-1.06.236-1.905 1.129-1.905 2.277c0 1.344 1.158 2.338 2.464 2.338h4c1.622 0 3.036-1.231 3.036-2.868c0-1.132-.685-2.077-1.637-2.545" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderCloudOutlineIcon {
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
  selector: 'svg[solarFolderErrorBoldDuotoneIcon],svg[solar-folder-error-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.97 11.47a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97l-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class SolarFolderErrorBoldDuotoneIcon {
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
  selector: 'svg[solarFolderErrorLineDuotoneIcon],svg[solar-folder-error-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="m10.5 15l3-3m0 3l-3-3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFolderErrorLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderErrorLinearIcon],svg[solar-folder-error-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="m10.5 15l3-3m0 3l-3-3"></svg:path></svg:g>`,
})
export class SolarFolderErrorLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderErrorOutlineIcon],svg[solar-folder-error-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102c.841.106 1.556.332 2.144.86q.147.133.28.28c.529.588.754 1.303.86 2.144c.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m.09 1.5c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975c-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487c-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182c-.35-.1-.689-.24-1.008-.417c-.58-.324-1.058-.801-1.8-1.543l-.077-.078l-.55-.55a8 8 0 0 0-.503-.482a3.25 3.25 0 0 0-1.771-.734a8 8 0 0 0-.696-.014m3.02 8.72a.75.75 0 0 1 1.06 0l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97l-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderErrorOutlineIcon {
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
  selector: 'svg[solarFolderFavouriteBookmarkBoldDuotoneIcon],svg[solar-folder-favourite-bookmark-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10.853V6h-4v4.853c0 .29 0 .435.095.494s.224-.007.484-.136l1.242-.622c.088-.043.132-.065.179-.065s.091.022.179.065l1.242.622c.26.13.39.194.484.136c.095-.06.095-.204.095-.494"></svg:path><svg:path fill="currentColor" d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" opacity=".5"></svg:path>`,
})
export class SolarFolderFavouriteBookmarkBoldDuotoneIcon {
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
  selector: 'svg[solarFolderFavouriteBookmarkLineDuotoneIcon],svg[solar-folder-favourite-bookmark-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 6v4.853c0 .29 0 .435-.095.494s-.224-.007-.484-.136l-1.242-.622c-.088-.043-.132-.065-.179-.065s-.091.022-.179.065l-1.242.622c-.26.13-.39.194-.484.136c-.095-.06-.095-.204-.095-.494V6" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderFavouriteBookmarkLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteBookmarkLinearIcon],svg[solar-folder-favourite-bookmark-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 6v4.853c0 .29 0 .435-.095.494s-.224-.007-.484-.136l-1.242-.622c-.088-.043-.132-.065-.179-.065s-.091.022-.179.065l-1.242.622c-.26.13-.39.194-.484.136c-.095-.06-.095-.204-.095-.494V6"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderFavouriteBookmarkLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteBookmarkOutlineIcon],svg[solar-folder-favourite-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102c.841.106 1.556.332 2.144.86q.147.133.28.28c.529.588.754 1.303.86 2.144c.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m.09 1.5c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975c-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487a8 8 0 0 0-.427-.041v4.081c0 .119 0 .28-.02.417a.95.95 0 0 1-.43.688a.95.95 0 0 1-.808.077a3 3 0 0 1-.382-.168l-.024-.013L16 11.338l-1.086.543l-.024.013c-.106.053-.25.125-.382.168a.95.95 0 0 1-.807-.077a.95.95 0 0 1-.431-.688c-.02-.137-.02-.298-.02-.417V6.538a4.8 4.8 0 0 1-.902-.386c-.582-.324-1.06-.801-1.8-1.543l-.078-.078l-.55-.55a8 8 0 0 0-.503-.482a3.25 3.25 0 0 0-1.771-.734a8 8 0 0 0-.696-.014m7.8 3.993v3.544l.736-.368l.007-.004c.046-.025.26-.141.507-.141s.46.116.507.14l.007.005l.736.367V6.753q-.478-.003-1.048-.002h-.484c-.363 0-.68 0-.968-.007" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderFavouriteBookmarkOutlineIcon {
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
  selector: 'svg[solarFolderFavouriteStarBoldDuotoneIcon],svg[solar-folder-favourite-star-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.952 11.199l-.098-.176C12.474 10.34 12.284 10 12 10s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354"></svg:path>`,
})
export class SolarFolderFavouriteStarBoldDuotoneIcon {
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
  selector: 'svg[solarFolderFavouriteStarLineDuotoneIcon],svg[solar-folder-favourite-star-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.146 11.023c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderFavouriteStarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteStarLinearIcon],svg[solar-folder-favourite-star-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.146 11.023c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderFavouriteStarLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderFavouriteStarOutlineIcon],svg[solar-folder-favourite-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102c.841.106 1.556.332 2.144.86q.147.133.28.28c.529.588.754 1.303.86 2.144c.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m.09 1.5c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975c-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487c-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182c-.35-.1-.689-.24-1.008-.417c-.58-.324-1.058-.801-1.8-1.543l-.077-.078l-.55-.55a8 8 0 0 0-.503-.482a3.25 3.25 0 0 0-1.771-.734a8 8 0 0 0-.696-.014M12 11.034q-.086.15-.199.354l-.098.176l-.023.04c-.078.144-.208.382-.425.547c-.221.168-.488.226-.643.26l-.044.009l-.19.043c-.176.04-.319.072-.44.103c.079.098.182.219.316.376l.13.152l.03.034c.108.125.282.325.363.585c.08.256.052.52.035.686l-.005.047l-.02.203l-.042.46c.105-.046.223-.1.364-.165l.179-.082l.04-.02c.144-.067.393-.184.672-.184s.528.117.672.185l.04.019l.179.082q.209.098.364.165l-.042-.46l-.02-.203l-.005-.047c-.017-.167-.045-.43.035-.686c.08-.26.255-.46.363-.585l.03-.034l.13-.152c.134-.157.237-.278.316-.376c-.121-.03-.264-.063-.44-.103l-.19-.043l-.044-.01c-.155-.033-.422-.091-.643-.26c-.217-.164-.347-.402-.425-.545l-.023-.04l-.098-.177q-.112-.204-.199-.354M11.014 9.8c.172-.225.484-.55.986-.55s.814.325.986.55c.165.214.33.511.5.816l.023.041l.098.177l.057.1l.099.023l.19.043l.048.01c.327.075.653.148.903.247c.276.109.65.32.795.785c.142.455-.037.841-.193 1.09c-.145.23-.365.486-.59.749l-.03.035l-.13.153l-.082.097l.012.135l.02.203l.004.046c.034.352.067.692.055.964c-.012.286-.08.718-.468 1.012c-.4.303-.84.237-1.12.156c-.258-.073-.563-.214-.87-.355l-.043-.02l-.18-.083l-.084-.039l-.085.04l-.179.082l-.044.02c-.306.141-.61.282-.869.355c-.28.08-.72.147-1.12-.156c-.387-.294-.456-.726-.468-1.011c-.012-.273.02-.613.055-.965l.004-.046l.02-.203l.013-.135l-.083-.097l-.13-.153l-.03-.035c-.225-.263-.445-.52-.59-.75c-.156-.248-.335-.634-.193-1.09c.144-.463.519-.675.795-.784c.25-.099.576-.172.903-.246l.047-.01l.191-.044l.1-.023l.056-.1l.098-.177l.023-.041c.17-.305.335-.602.5-.816" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderFavouriteStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderLineDuotoneIcon],svg[solar-folder-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 10h-5" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderLinearIcon],svg[solar-folder-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 10h-5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderLinearIcon {
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
  selector: 'svg[solarFolderOpenBoldDuotoneIcon],svg[solar-folder-open-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.358 12.779c-.61.941-.358 2.25.145 4.868c.363 1.885.544 2.827 1.172 3.452q.246.244.544.429C5.982 22 6.995 22 9.022 22h6.956c2.027 0 3.04 0 3.803-.472q.298-.185.544-.429c.628-.625.81-1.567 1.172-3.452c.503-2.618.755-3.927.145-4.868a3 3 0 0 0-.57-.646c-.87-.735-2.279-.735-5.094-.735H9.022c-2.815 0-4.223 0-5.094.735a3 3 0 0 0-.57.646m6.337 4.402c0-.4.343-.723.765-.723h4.08c.422 0 .765.323.765.723s-.343.723-.765.723h-4.08c-.422 0-.765-.324-.765-.723" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.576 12.485q.16-.19.352-.352c.87-.735 2.279-.735 5.094-.735h6.956c2.815 0 4.223 0 5.094.735q.192.162.353.353v-2.73c0-.91 0-1.663-.086-2.264c-.09-.635-.286-1.197-.755-1.66a3 3 0 0 0-.242-.214c-.512-.408-1.125-.575-1.82-.652c-.669-.074-1.512-.074-2.545-.074h-.353c-.982 0-1.334-.006-1.653-.087a2.7 2.7 0 0 1-.536-.196c-.284-.14-.532-.351-1.227-.968l-.474-.42c-.2-.176-.335-.296-.48-.403a4.3 4.3 0 0 0-2.183-.803A8 8 0 0 0 8.414 2h-.117c-.64 0-1.063 0-1.43.061c-1.605.268-2.903 1.39-3.22 2.875c-.071.337-.071.724-.07 1.283z" opacity=".5"></svg:path>`,
})
export class SolarFolderOpenBoldDuotoneIcon {
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
  selector: 'svg[solarFolderOpenLineDuotoneIcon],svg[solar-folder-open-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 11.5V5.712c0-.662 0-.993.055-1.268C4.3 3.23 5.312 2.28 6.607 2.052C6.9 2 7.254 2 7.96 2c.31 0 .464 0 .612.013c.641.056 1.25.292 1.745.677a7 7 0 0 1 .443.397l.44.413c.653.612.979.918 1.37 1.122q.323.168.678.263c.43.115.892.115 1.815.115h.299c2.106 0 3.158 0 3.843.577q.095.08.18.168C20 6.387 20 7.375 20 9.348V11.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10 17h4" opacity=".5"></svg:path><svg:path d="M3.477 17.484C3 14.768 2.76 13.41 3.339 12.433q.223-.376.54-.67C4.704 11 6.038 11 8.705 11h6.59c2.667 0 4 0 4.826.763q.316.294.54.67c.578.977.34 2.335-.138 5.05c-.343 1.956-.515 2.934-1.11 3.582a3 3 0 0 1-.515.445c-.723.49-1.683.49-3.603.49h-6.59c-1.92 0-2.88 0-3.603-.49a3 3 0 0 1-.515-.445c-.595-.648-.767-1.626-1.11-3.581Z"></svg:path></svg:g>`,
})
export class SolarFolderOpenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderOpenLinearIcon],svg[solar-folder-open-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 11.5V5.712c0-.662 0-.993.055-1.268C4.3 3.23 5.312 2.28 6.607 2.052C6.9 2 7.254 2 7.96 2c.31 0 .464 0 .612.013c.641.056 1.25.292 1.745.677a7 7 0 0 1 .443.397l.44.413c.653.612.979.918 1.37 1.122q.323.168.678.263c.43.115.892.115 1.815.115h.299c2.106 0 3.158 0 3.843.577q.095.08.18.168C20 6.387 20 7.375 20 9.348V11.5"></svg:path><svg:path stroke-linecap="round" d="M10 17h4"></svg:path><svg:path d="M3.477 17.484C3 14.768 2.76 13.41 3.339 12.433q.223-.376.54-.67C4.704 11 6.038 11 8.705 11h6.59c2.667 0 4 0 4.826.763q.316.294.54.67c.578.977.34 2.335-.138 5.05c-.343 1.956-.515 2.934-1.11 3.582a3 3 0 0 1-.515.445c-.723.49-1.683.49-3.603.49h-6.59c-1.92 0-2.88 0-3.603-.49a3 3 0 0 1-.515-.445c-.595-.648-.767-1.626-1.11-3.581Z"></svg:path></svg:g>`,
})
export class SolarFolderOpenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderOpenOutlineIcon],svg[solar-folder-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.879 1.25h.114c.278 0 .463 0 .645.016c.78.068 1.527.356 2.139.832c.143.111.276.236.471.42l.025.022l.44.413c.682.64.925.858 1.204 1.004q.248.129.525.204c.313.083.658.089 1.62.089h.347c1.013 0 1.84 0 2.495.077c.681.08 1.283.254 1.784.677q.125.105.238.222c.46.48.652 1.063.74 1.721c.084.624.084 1.407.084 2.35v2.032q.321.326.556.722c.4.674.481 1.433.43 2.3c-.049.844-.234 1.897-.466 3.216l-.015.086c-.166.944-.3 1.708-.47 2.315c-.177.628-.411 1.16-.82 1.605q-.29.317-.646.558c-.502.34-1.057.485-1.694.553c-.61.066-1.364.066-2.289.066H8.664c-.925 0-1.679 0-2.29-.066c-.636-.068-1.191-.213-1.693-.553a3.7 3.7 0 0 1-.647-.558c-.408-.446-.642-.977-.818-1.605c-.17-.607-.305-1.37-.471-2.315l-.015-.087c-.232-1.317-.417-2.371-.466-3.216c-.051-.866.03-1.625.43-2.299q.234-.396.556-.722V5.627c0-.58 0-.98.07-1.331c.31-1.54 1.583-2.704 3.156-2.983c.36-.063.775-.063 1.403-.063M4.75 10.491q.36-.092.76-.14c.815-.101 1.854-.101 3.144-.101h6.692c1.29 0 2.329 0 3.145.101q.398.048.759.14V9.348c0-1.008-.002-1.689-.07-2.201c-.066-.49-.181-.72-.337-.882a2 2 0 0 0-.122-.115c-.182-.153-.45-.269-.992-.333c-.558-.066-1.296-.067-2.367-.067h-.398c-.828 0-1.383 0-1.91-.14a4 4 0 0 1-.831-.323c-.483-.252-.88-.625-1.464-1.172l-.072-.068l-.44-.413a6 6 0 0 0-.39-.351a2.57 2.57 0 0 0-1.35-.523a7 7 0 0 0-.547-.01c-.738 0-1.01.003-1.223.04c-1.015.18-1.768.915-1.946 1.802c-.037.184-.041.422-.041 1.12zm.944 1.349c-.698.086-1.058.245-1.306.474a2.2 2.2 0 0 0-.403.501c-.18.303-.267.712-.224 1.447c.044.748.213 1.716.454 3.092c.175.993.297 1.682.445 2.208c.144.511.293.793.48.996q.174.19.382.331c.222.15.508.25 1.013.304c.52.056 1.194.057 2.17.057h6.59c.976 0 1.65-.001 2.17-.057c.505-.054.79-.154 1.013-.304q.208-.142.382-.33c.187-.204.337-.486.48-.997c.148-.526.27-1.215.445-2.208c.241-1.376.41-2.344.454-3.092c.043-.735-.044-1.144-.224-1.447a2.2 2.2 0 0 0-.403-.501c-.248-.23-.608-.388-1.306-.474c-.713-.089-1.658-.09-3.011-.09h-6.59c-1.353 0-2.298.001-3.011.09M9.25 17a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderOutlineIcon],svg[solar-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102c.841.106 1.556.332 2.144.86q.147.133.28.28c.529.588.754 1.303.86 2.144c.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m.09 1.5c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975c-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487c-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182c-.35-.1-.689-.24-1.008-.417c-.58-.324-1.058-.801-1.8-1.543l-.077-.078l-.55-.55a8 8 0 0 0-.503-.482a3.25 3.25 0 0 0-1.771-.734a8 8 0 0 0-.696-.014m5.3 7.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderOutlineIcon {
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
  selector: 'svg[solarFolderPathConnectBoldDuotoneIcon],svg[solar-folder-path-connect-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20a.75.75 0 0 1 .75-.75h8.5V15h1.5v4.25h8.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 20" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 9.8V8.369c0-1.711 0-2.567-.539-3.123q-.075-.077-.157-.146c-.598-.5-1.52-.5-3.362-.5h-.262c-.808 0-1.211 0-1.588-.1a3 3 0 0 1-.594-.228c-.341-.177-.627-.442-1.198-.972l-.385-.358a6 6 0 0 0-.388-.344a2.9 2.9 0 0 0-1.526-.587C8.87 2 8.736 2 8.465 2c-.618 0-.927 0-1.184.045c-1.133.199-2.019 1.021-2.232 2.073C5 4.357 5 4.644 5 5.218V9.8c0 2.451 0 3.677.82 4.438C6.64 15 7.96 15 10.6 15h2.8c2.64 0 3.96 0 4.78-.761c.82-.762.82-1.988.82-4.439m-5.5-3.05a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:circle cx="12" cy="20" r="2" fill="currentColor"></svg:circle>`,
})
export class SolarFolderPathConnectBoldDuotoneIcon {
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
  selector: 'svg[solarFolderPathConnectLineDuotoneIcon],svg[solar-folder-path-connect-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16.5 7.5h-3" opacity=".5"></svg:path><svg:path d="M5 5.217c0-.573 0-.86.049-1.099c.213-1.052 1.1-1.874 2.232-2.073C7.538 2 7.847 2 8.465 2c.27 0 .406 0 .536.011c.56.049 1.093.254 1.526.587c.1.078.196.167.388.344l.385.358c.571.53.857.795 1.198.972q.284.146.594.228c.377.1.78.1 1.588.1h.261c1.843 0 2.765 0 3.363.5q.083.07.157.146C19 5.802 19 6.658 19 8.369V9.8c0 2.451 0 3.677-.82 4.438c-.82.762-2.14.762-4.78.762h-2.8c-2.64 0-3.96 0-4.78-.761C5 13.477 5 12.25 5 9.8z"></svg:path><svg:path stroke-linecap="round" d="M22 20h-8M2 20h8m2-2v-3" opacity=".5"></svg:path><svg:circle cx="12" cy="20" r="2"></svg:circle></svg:g>`,
})
export class SolarFolderPathConnectLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderPathConnectLinearIcon],svg[solar-folder-path-connect-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16.5 7.5h-3"></svg:path><svg:path d="M5 5.217c0-.573 0-.86.049-1.099c.213-1.052 1.1-1.874 2.232-2.073C7.538 2 7.847 2 8.465 2c.27 0 .406 0 .536.011c.56.049 1.093.254 1.526.587c.1.078.196.167.388.344l.385.358c.571.53.857.795 1.198.972q.284.146.594.228c.377.1.78.1 1.588.1h.261c1.843 0 2.765 0 3.363.5q.083.07.157.146C19 5.802 19 6.658 19 8.369V9.8c0 2.451 0 3.677-.82 4.438c-.82.762-2.14.762-4.78.762h-2.8c-2.64 0-3.96 0-4.78-.761C5 13.477 5 12.25 5 9.8z"></svg:path><svg:path stroke-linecap="round" d="M22 20h-8M2 20h8m2-2v-3"></svg:path><svg:circle cx="12" cy="20" r="2"></svg:circle></svg:g>`,
})
export class SolarFolderPathConnectLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderPathConnectOutlineIcon],svg[solar-folder-path-connect-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.388 1.25h.108c.24 0 .407 0 .57.014c.699.06 1.368.316 1.919.74a6 6 0 0 1 .417.367l.408.38c.6.557.803.736 1.033.855q.21.107.441.17c.26.068.549.074 1.396.074h.307c.883 0 1.61 0 2.19.068c.603.07 1.15.223 1.608.607q.113.093.215.2c.423.436.597.966.676 1.549c.074.547.074 1.232.074 2.044v1.54c0 1.176 0 2.14-.11 2.902c-.116.802-.368 1.488-.95 2.028c-.574.533-1.289.757-2.125.861c-.809.101-1.837.101-3.114.101h-.701v1.604c.916.259 1.637.98 1.896 1.896H22a.75.75 0 0 1 0 1.5h-7.353a2.751 2.751 0 0 1-5.293 0H2a.75.75 0 0 1 0-1.5h7.354a2.76 2.76 0 0 1 1.896-1.896V15.75h-.701c-1.277 0-2.305 0-3.114-.1c-.836-.105-1.551-.329-2.125-.862c-.582-.54-.834-1.226-.95-2.028c-.11-.761-.11-1.726-.11-2.903v-4.72c0-.496 0-.854.064-1.168c.28-1.382 1.43-2.416 2.837-2.663c.323-.056.693-.056 1.237-.056m5.012 13c1.34 0 2.274-.001 2.98-.09c.688-.085 1.044-.243 1.29-.471c.238-.221.396-.53.485-1.143c.093-.642.095-1.497.095-2.746V8.369c0-.877-.002-1.459-.06-1.894c-.056-.412-.152-.588-.267-.707a1 1 0 0 0-.1-.092c-.14-.117-.353-.214-.82-.269c-.483-.056-1.122-.057-2.062-.057h-.356c-.716 0-1.213 0-1.685-.125a3.7 3.7 0 0 1-.746-.287c-.434-.224-.791-.556-1.296-1.025l-.068-.063l-.385-.358a5 5 0 0 0-.335-.3a2.17 2.17 0 0 0-1.134-.433a6 6 0 0 0-.471-.009c-.65 0-.878.003-1.055.034c-.857.15-1.48.761-1.626 1.483c-.03.147-.034.34-.034.95V9.8c0 1.249.002 2.104.095 2.746c.089.614.247.922.485 1.143c.246.228.602.386 1.29.472c.706.088 1.64.089 2.98.089zm-.65-6.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M12 18.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderPathConnectOutlineIcon {
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
  selector: 'svg[solarFolderSecurityBoldDuotoneIcon],svg[solar-folder-security-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11.798V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14V6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 13a2.75 2.75 0 1 1 3.5 2.646V17.5a.75.75 0 0 1-1.5 0v-1.854a2.75 2.75 0 0 1-2-2.646m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderSecurityBoldDuotoneIcon {
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
  selector: 'svg[solarFolderSecurityLineDuotoneIcon],svg[solar-folder-security-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M12 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 0v2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFolderSecurityLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderSecurityLinearIcon],svg[solar-folder-security-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:circle cx="12" cy="13" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M11.25 17.5a.75.75 0 0 0 1.5 0zm0-2.5v2.5h1.5V15z"></svg:path></svg:g>`,
})
export class SolarFolderSecurityLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderSecurityOutlineIcon],svg[solar-folder-security-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102c.841.106 1.556.332 2.144.86q.147.133.28.28c.529.588.754 1.303.86 2.144c.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m.09 1.5c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975c-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487c-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182c-.35-.1-.689-.24-1.008-.417c-.58-.324-1.058-.801-1.8-1.543l-.077-.078l-.55-.55a8 8 0 0 0-.503-.482a3.25 3.25 0 0 0-1.771-.734a8 8 0 0 0-.696-.014m5.05 9a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 13a2.75 2.75 0 1 1 3.5 2.646V17.5a.75.75 0 0 1-1.5 0v-1.854a2.75 2.75 0 0 1-2-2.646" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderSecurityOutlineIcon {
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
  selector: 'svg[solarFolderWithFilesBoldDuotoneIcon],svg[solar-folder-with-files-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .849.352C14.098 6 14.675 6 15.829 6h.373c1.78 0 2.957 0 3.798.238"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderWithFilesBoldDuotoneIcon {
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
  selector: 'svg[solarFolderWithFilesLineDuotoneIcon],svg[solar-folder-with-files-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 10h-5" opacity=".5"></svg:path><svg:path d="M10 3h6.5c.464 0 .697 0 .892.026a3 3 0 0 1 2.582 2.582c.026.195.026.428.026.892" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderWithFilesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderWithFilesLinearIcon],svg[solar-folder-with-files-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18 10h-5"></svg:path><svg:path d="M10 3h6.5c.464 0 .697 0 .892.026a3 3 0 0 1 2.582 2.582c.026.195.026.428.026.892"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarFolderWithFilesLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFolderWithFilesOutlineIcon],svg[solar-folder-with-files-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.474.98h6.299c.409 0 .687 0 .931.032a3.75 3.75 0 0 1 3.248 3.427a3 3 0 0 1 .77.503q.15.133.281.28c.529.588.754 1.303.86 2.144c.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m12.287 4.078a2.25 2.25 0 0 0-1.853-1.559c-.134-.017-.306-.019-.794-.019h-4.689c.643.64.935.906 1.266 1.09q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.162 0 2.119 0 2.894.078M6.95 2.75c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975c-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487c-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182c-.35-.1-.689-.24-1.008-.417c-.58-.324-1.058-.801-1.8-1.543l-.077-.078l-.55-.55a8 8 0 0 0-.503-.482a3.25 3.25 0 0 0-1.771-.734a8 8 0 0 0-.696-.014m5.3 7.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFolderWithFilesOutlineIcon {
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
  selector: 'svg[solarFootballBoldDuotoneIcon],svg[solar-football-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="m15.658 3.223l-1.32.932c-.698.491-1.18.832-1.6 1.02v4.399l1.55 1.185l4.098-1.696c.033-.457.186-1.027.406-1.848l.417-1.562l.112-.443a9.97 9.97 0 0 1 2.639 7.377l-1.51-.998c-.715-.472-1.209-.799-1.537-1.121l-4.212 1.744l-.582 1.887l2.58 2.984C17.146 17 17.73 17 18.569 17h2.072a10 10 0 0 1-6.522 4.772l.073-.272l.587-1.765c.273-.817.46-1.382.688-1.783L12.915 15h-1.873l-2.323 2.958c.226.4.413.964.684 1.777l.588 1.765l.109.322A10 10 0 0 1 3.336 17h2.277c.846 0 1.435 0 1.884.085l2.357-3.001l-.577-1.87l-4.148-1.747c-.328.322-.823.65-1.537 1.121L2.04 12.615l-.022.015Q2.001 12.317 2 12a9.97 9.97 0 0 1 2.693-6.83l.139.483l.418 1.562c.219.82.371 1.39.405 1.846l4.032 1.7l1.552-1.188V5.158c-.414-.198-.889-.549-1.573-1.054L8.17 3l-.207-.155A9.95 9.95 0 0 1 11.989 2c1.447 0 2.823.308 4.064.863z"></svg:path>`,
})
export class SolarFootballBoldDuotoneIcon {
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
  selector: 'svg[solarFootballLineDuotoneIcon],svg[solar-football-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.185 17.75a.75.75 0 0 0 0-1.5zm-5.406 1.985l-.711-.237zm-1.299 1.528a.75.75 0 0 0 1.423.474zM3.998 16.25a.75.75 0 0 0 0 1.5zm5.405 3.485l.712-.237zm-.124 2.002a.75.75 0 0 0 1.423-.474zm-1.058-4.36l-.44.609zM5.556 5.46a.75.75 0 1 0-1.449.388zM5.25 7.215l-.725.194zM3.592 11.59l-.414-.626zm-1.965.399a.75.75 0 1 0 .828 1.251zm18.307-6.14a.75.75 0 1 0-1.449-.388zm-1.143 1.367l-.724-.194zm1.658 4.374l-.413.625zm1.137 1.65a.75.75 0 1 0 .828-1.251zM16.09 3.836a.75.75 0 1 0-.864-1.226zm-1.752.319l.432.612zm-4.672-.051l-.446.603zm-1.05-1.707a.75.75 0 1 0-.891 1.206zm5.876 8.278a.75.75 0 1 0 .574 1.386zm-3.254-1.417a.75.75 0 0 0 1.5 0zm3.05 5.037a.75.75 0 0 0-1.134.982zm-3.442.954a.75.75 0 1 0-1.18-.926zm-1.94-3.19a.75.75 0 1 0 .583-1.382zm11.279 4.191H18.57v1.5h1.615zm-6.117 3.248l-.588 1.765l1.423.474l.588-1.765zm4.502-3.248c-.678 0-1.25-.001-1.714.052c-.485.055-.93.176-1.333.467l.878 1.217c.12-.087.284-.155.625-.194c.36-.04.832-.042 1.544-.042zm-3.08 3.722c.226-.676.376-1.124.53-1.453c.144-.312.261-.447.38-.533l-.877-1.217c-.404.292-.658.675-.864 1.118c-.197.425-.377.968-.591 1.611zM3.999 17.75h1.615v-1.5H3.998zm4.694 2.222l.587 1.765l1.423-.474l-.587-1.765zm-3.08-2.222c.713 0 1.184.001 1.545.042c.34.04.505.107.625.194l.878-1.217c-.404-.29-.849-.412-1.333-.467c-.465-.053-1.037-.052-1.714-.052zm4.503 1.748c-.215-.643-.394-1.186-.591-1.611c-.206-.442-.46-.826-.864-1.118l-.878 1.217c.12.086.236.22.381.533c.153.33.303.777.529 1.453zM4.107 5.848l.418 1.561l1.45-.388l-.419-1.562zm-.929 5.115l-1.55 1.025l.827 1.251l1.55-1.025zm1.347-3.554c.184.689.305 1.145.359 1.504c.05.34.027.518-.025.656l1.403.532c.176-.466.177-.926.105-1.409c-.069-.463-.218-1.015-.393-1.67zm-.52 4.805c.566-.374 1.043-.688 1.402-.989c.374-.313.678-.659.855-1.124l-1.403-.532c-.052.138-.152.286-.416.507c-.278.233-.67.494-1.265.887zm14.48-6.754l-.418 1.561l1.449.388l.418-1.562zm1.55 6.754l1.552 1.025l.827-1.251l-1.551-1.025zm-1.968-5.193c-.175.656-.324 1.208-.393 1.671c-.072.483-.07.944.105 1.409l1.403-.532c-.052-.138-.075-.315-.025-.656c.054-.36.175-.815.359-1.504zm2.796 3.942c-.594-.393-.987-.654-1.265-.887c-.264-.22-.363-.369-.416-.507l-1.402.532c.176.465.48.811.854 1.124c.359.301.836.616 1.402.99zM15.226 2.61l-1.32.932l.864 1.225l1.32-.93zm-5.115.89L8.615 2.398l-.89 1.206L9.22 4.707zm3.794.042c-.582.41-.968.681-1.286.855c-.302.165-.475.204-.622.203l-.017 1.5c.498.005.93-.153 1.359-.387c.41-.225.877-.555 1.43-.946zM9.22 4.707c.546.403 1.005.743 1.41.977c.423.243.853.41 1.35.416l.017-1.5c-.148-.002-.32-.045-.618-.216c-.315-.181-.695-.46-1.268-.883zm8.974 4.435l-3.702 1.533l.574 1.386l3.702-1.533zm-5.455.116V5.35h-1.5v3.908zm3.79 7.629l-2.24-2.592l-1.135.982l2.24 2.591zm-7.718.954l2.035-2.592l-1.18-.926l-2.035 2.591zm.678-7.164L5.852 9.144l-.583 1.382l3.637 1.533z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m9.198 11.959l.716-.222zm.348-1.09l-.456-.596zm.373 3.427l-.717.22zm4.139 0l-.717-.222zm.373-3.427l-.455.595zm.348 1.09l.717.22zm-2.184-2.495l.455-.596zm-1.213 0l.456.596zm3.397 1.904l-.716.221zm-1.058 3.418l.464.59zm-3.465 0l-.464.59zm-1.058-3.418l.716.221zm2.941-1.308l1.837 1.404l.911-1.191l-1.837-1.405zm1.924 1.677l-.722 2.337l1.434.443l.721-2.337zm-.96 2.513h-2.23v1.5h2.23zm-2.467-.176l-.722-2.337l-1.433.443l.721 2.337zM10 11.464l1.837-1.404l-.911-1.192l-1.837 1.405zm3.975 0a.25.25 0 0 1 .087.125l1.433-.442a1.75 1.75 0 0 0-.609-.874zm.087.125a.25.25 0 0 1 0 .148l1.433.443a1.75 1.75 0 0 0 0-1.033zM13.05 8.87a1.75 1.75 0 0 0-1.062-.36v1.5q.083 0 .151.05zm-1.062-.36c-.373 0-.748.12-1.061.36l.91 1.19a.25.25 0 0 1 .152-.05zm1.353 5.565a.25.25 0 0 1-.084.123l.928 1.179c.272-.215.482-.511.59-.86zm-.084.123a.25.25 0 0 1-.153.053v1.5c.402 0 .78-.138 1.081-.374zm-2.384.053a.25.25 0 0 1-.153-.053l-.928 1.179c.3.236.679.374 1.081.374zm-.153-.053a.25.25 0 0 1-.084-.123l-1.434.443c.108.348.317.644.59.859zm-.806-2.46a.25.25 0 0 1 0-.148l-1.433-.442a1.75 1.75 0 0 0 0 1.033zm0-.148a.25.25 0 0 1 .087-.125l-.911-1.191a1.75 1.75 0 0 0-.609.874zm11.313.41c0 5.11-4.137 9.25-9.238 9.25v1.5c5.931 0 10.738-4.814 10.738-10.75zm-9.238 9.25c-5.102 0-9.239-4.14-9.239-9.25h-1.5c0 5.936 4.807 10.75 10.739 10.75zM2.75 12c0-5.11 4.137-9.25 9.239-9.25v-1.5C6.057 1.25 1.25 6.064 1.25 12zm9.239-9.25c5.1 0 9.238 4.14 9.238 9.25h1.5c0-5.936-4.807-10.75-10.738-10.75z"></svg:path>`,
})
export class SolarFootballLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFootballLinearIcon],svg[solar-football-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.198 11.958l.716-.221zm.348-1.09l-.456-.595zm.373 3.427l-.717.221zm4.139 0l-.717-.221zm.373-3.427l-.455.596zm.348 1.09l.717.221zm-2.184-2.494l.455-.596zm-1.213 0l.456.595zm8.803 8.286a.75.75 0 0 0 0-1.5zm-5.406 1.985l-.711-.237zm-1.299 1.528a.75.75 0 1 0 1.423.474zM3.998 16.25a.75.75 0 0 0 0 1.5zm5.405 3.485l.712-.237zm-.124 2.002a.75.75 0 0 0 1.423-.474zm-1.058-4.36l-.44.609zM5.556 5.46a.75.75 0 0 0-1.449.388zM5.25 7.215l-.725.194zM3.592 11.59l-.414-.626zm-1.965.399a.75.75 0 1 0 .828 1.251zm18.307-6.14a.75.75 0 0 0-1.449-.388zm-1.143 1.367l-.724-.194zm1.658 4.374l-.413.625zm1.137 1.65a.75.75 0 0 0 .828-1.251zM16.09 3.836a.75.75 0 0 0-.864-1.226zm-1.752.319l.432.612zm-4.672-.051l-.446.603zm-1.05-1.707a.75.75 0 1 0-.891 1.206zm6.163 8.97l-.716.222zm-5.581 0l.716.222zM21.227 12c0 5.11-4.137 9.25-9.238 9.25v1.5c5.931 0 10.738-4.814 10.738-10.75zm-9.238 9.25c-5.102 0-9.239-4.14-9.239-9.25h-1.5c0 5.936 4.807 10.75 10.739 10.75zM2.75 12c0-5.11 4.137-9.25 9.239-9.25v-1.5C6.057 1.25 1.25 6.064 1.25 12zm9.239-9.25c5.1 0 9.238 4.14 9.238 9.25h1.5c0-5.936-4.807-10.75-10.738-10.75zm.15 7.31l1.837 1.404l.911-1.191l-1.837-1.405zm1.924 1.677l-.722 2.337l1.434.442l.72-2.337zm-.96 2.513h-2.23v1.5h2.23zm-2.467-.176l-.722-2.337l-1.433.442l.721 2.337zM10 11.464l1.837-1.405l-.911-1.191l-1.837 1.405zm10.184 4.786H18.57v1.5h1.615zm-6.117 3.248l-.588 1.765l1.423.474l.588-1.765zm4.502-3.248c-.678 0-1.25-.001-1.715.052c-.484.055-.929.176-1.332.467l.878 1.217c.12-.087.284-.155.625-.194c.36-.04.831-.042 1.544-.042zm-3.08 3.722c.226-.676.376-1.124.53-1.453c.144-.312.26-.447.38-.533l-.877-1.217c-.404.292-.659.675-.864 1.118c-.198.425-.377.968-.591 1.611zM3.999 17.75h1.615v-1.5H3.998zm4.694 2.222l.587 1.765l1.423-.474l-.587-1.765zm-3.08-2.222c.713 0 1.184.001 1.545.042c.34.04.505.107.625.194l.878-1.217c-.404-.29-.849-.412-1.333-.467c-.465-.053-1.037-.052-1.714-.052zm4.503 1.748c-.215-.643-.394-1.186-.592-1.611c-.205-.442-.46-.826-.863-1.118l-.878 1.217c.12.086.236.22.381.533c.153.33.303.777.529 1.453zM4.107 5.848l.418 1.561l1.449-.388l-.418-1.562zm-.929 5.115l-1.55 1.025l.827 1.251l1.55-1.025zm1.347-3.554c.184.689.305 1.145.359 1.504c.05.34.027.518-.025.656l1.403.532c.176-.466.177-.926.105-1.409c-.069-.463-.218-1.015-.393-1.67zm-.52 4.805c.566-.374 1.043-.688 1.402-.989c.374-.313.678-.659.855-1.124l-1.403-.532c-.052.138-.152.286-.416.507c-.278.233-.67.494-1.265.887zm14.48-6.754l-.418 1.561l1.449.388l.418-1.562zm1.55 6.754l1.551 1.025l.828-1.251l-1.551-1.025zm-1.968-5.193c-.175.656-.324 1.208-.393 1.671c-.072.483-.071.944.105 1.409l1.403-.532c-.052-.138-.075-.315-.025-.656c.054-.36.175-.815.359-1.504zm2.796 3.942c-.594-.393-.987-.654-1.265-.887c-.264-.22-.364-.369-.416-.507l-1.403.532c.177.465.481.811.855 1.124c.359.301.836.616 1.402.99zM15.226 2.61l-1.32.932l.864 1.225l1.32-.93zm-5.115.89L8.615 2.398l-.89 1.206L9.22 4.707zm3.794.042c-.582.41-.968.681-1.286.855c-.302.165-.475.204-.622.203l-.017 1.5c.498.005.93-.153 1.359-.387c.41-.225.877-.555 1.43-.946zM9.22 4.707c.546.403 1.005.743 1.41.977c.423.243.853.41 1.35.416l.017-1.5c-.148-.002-.32-.045-.618-.216c-.315-.181-.695-.46-1.268-.883zm4.756 6.757a.25.25 0 0 1 .087.125l1.433-.443a1.75 1.75 0 0 0-.609-.873zm.087.125a.25.25 0 0 1 0 .148l1.433.442a1.75 1.75 0 0 0 0-1.033zm4.13-2.447l-3.7 1.533l.573 1.386l3.702-1.533zm-5.143-.274a1.75 1.75 0 0 0-1.062-.36v1.5a.24.24 0 0 1 .151.052zm-1.062-.36c-.373 0-.748.12-1.061.36l.91 1.191a.25.25 0 0 1 .152-.05zm.75.75V5.35h-1.5v3.908zm.603 4.816a.25.25 0 0 1-.084.123l.928 1.178a1.75 1.75 0 0 0 .59-.859zm-.084.123a.25.25 0 0 1-.153.053v1.5c.402 0 .78-.138 1.081-.375zm3.272 2.69l-2.24-2.592l-1.135.982l2.24 2.591zm-5.656-2.637a.25.25 0 0 1-.153-.053l-.928 1.178c.3.237.679.375 1.081.375zm-.153-.053a.25.25 0 0 1-.084-.123l-1.434.442c.108.349.317.645.59.86zM8.81 17.84l2.036-2.592l-1.18-.926l-2.035 2.591zm1.104-6.104a.25.25 0 0 1 0-.148l-1.433-.443a1.75 1.75 0 0 0 0 1.033zm0-.148a.25.25 0 0 1 .087-.125l-.911-1.191a1.75 1.75 0 0 0-.609.874zm-.425-.912L5.852 9.144l-.583 1.382l3.637 1.533z"></svg:path>`,
})
export class SolarFootballLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFootballOutlineIcon],svg[solar-football-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.782 11.225l.396-.262c.594-.393.987-.654 1.265-.887c.264-.221.364-.369.416-.507s.076-.315.025-.656c-.054-.36-.175-.815-.359-1.504l-.167-.625a9.2 9.2 0 0 0-1.576 4.44m2.75-5.84l.024.074l.429 1.602c.17.638.315 1.177.382 1.631c.035.233.053.46.042.687l2.5 1.053a2 2 0 0 1 .18-.16l1.838-1.404q.148-.113.312-.19v-2.71a3.5 3.5 0 0 1-.608-.284c-.398-.229-.847-.56-1.377-.952L7.876 3.715a9.3 9.3 0 0 0-2.344 1.67m4.007-2.306l.572.422c.573.423.953.702 1.268.883c.298.171.47.214.618.216c.147.001.32-.038.622-.203c.318-.174.704-.445 1.286-.855l.622-.438a9.2 9.2 0 0 0-2.538-.354a9.2 9.2 0 0 0-2.45.329m6.646.678a1 1 0 0 1-.095.08l-1.354.954c-.54.38-.995.702-1.397.922c-.197.108-.396.2-.6.267v2.697q.163.078.311.191l1.837 1.405q.099.075.184.162l2.56-1.06c-.01-.225.008-.451.043-.683c.067-.454.212-.993.382-1.63l.429-1.602l.008-.029a9.3 9.3 0 0 0-2.308-1.674m3.48 3.095l-.149.557c-.184.689-.305 1.145-.359 1.504c-.05.34-.027.518.025.656s.152.286.416.507c.278.233.67.494 1.265.887l.328.217a9.2 9.2 0 0 0-1.526-4.328m3.055 5.55q.007-.2.007-.402c0-5.936-4.807-10.75-10.738-10.75C6.057 1.25 1.25 6.064 1.25 12s4.807 10.75 10.739 10.75c5.625 0 10.238-4.33 10.7-9.84a.75.75 0 0 0 .03-.508m-1.543.567L20 12.19c-.55-.363-1.016-.67-1.367-.966a3.6 3.6 0 0 1-.458-.452l-2.613 1.082a2 2 0 0 1-.067.324l-.721 2.337q-.038.123-.092.236l1.468 1.698c.225-.075.46-.12.704-.148c.456-.052 1.014-.052 1.673-.052h1.668a9.2 9.2 0 0 0 .98-3.281m-1.951 4.781h-.656c-.713 0-1.184.001-1.544.042c-.341.04-.506.107-.625.194c-.12.086-.237.22-.382.533c-.153.33-.303.777-.528 1.453l-.226.68a9.26 9.26 0 0 0 3.96-2.902m-5.7 3.372l.555-1.663c.208-.627.385-1.156.578-1.572q.129-.281.295-.528l-1.434-1.66q-.202.051-.416.051h-2.23q-.2 0-.388-.043L9.21 17.332q.178.257.313.555c.194.416.37.945.579 1.572l.565 1.697a9.3 9.3 0 0 0 2.86-.034m-4.58-.385l-.254-.765c-.226-.676-.376-1.124-.529-1.453c-.145-.312-.262-.447-.381-.533c-.12-.087-.284-.155-.625-.194c-.36-.04-.832-.042-1.544-.042H4.75a9.26 9.26 0 0 0 4.195 2.987m-5.15-4.46a.8.8 0 0 1 .202-.027h1.656c.66 0 1.217 0 1.673.052c.235.027.46.069.676.139l1.304-1.662a2 2 0 0 1-.105-.263l-.721-2.337a2 2 0 0 1-.068-.328l-2.55-1.075a3.6 3.6 0 0 1-.456.45c-.352.294-.817.601-1.367.965l-1.236.817c.127 1.17.47 2.273.991 3.27m8.192-6.269a.25.25 0 0 0-.15.052L10 11.464a.25.25 0 0 0-.087.273l.722 2.337a.25.25 0 0 0 .237.176h2.23a.25.25 0 0 0 .238-.176l.722-2.337a.25.25 0 0 0-.087-.273l-1.837-1.405a.25.25 0 0 0-.15-.05" clip-rule="evenodd"></svg:path>`,
})
export class SolarFootballOutlineIcon {
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
  selector: 'svg[solarForbiddenBoldDuotoneIcon],svg[solar-forbidden-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m3.757 17.394l1.425 1.424l1.424 1.425c.868.867 1.301 1.3 1.852 1.529S9.623 22 10.85 22h2.302c1.226 0 1.84 0 2.391-.228c.551-.229.985-.662 1.852-1.53l2.849-2.848c.867-.867 1.3-1.3 1.529-1.852c.228-.551.228-1.165.228-2.39v-2.303c0-1.226 0-1.84-.228-2.39c-.228-.552-.662-.986-1.53-1.853l-1.424-1.424l-1.424-1.425c-.867-.867-1.3-1.3-1.852-1.529C14.99 2 14.377 2 13.152 2h-2.303c-1.226 0-1.84 0-2.39.228c-.552.229-.986.662-1.853 1.53L3.757 6.605c-.867.867-1.3 1.3-1.529 1.852S2 9.623 2 10.848v2.303c0 1.226 0 1.84.228 2.39c.229.552.662.986 1.53 1.853" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M18.818 5.182L5.182 18.818"></svg:path></svg:g>`,
})
export class SolarForbiddenBoldDuotoneIcon {
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
  selector: 'svg[solarForbiddenCircleBoldDuotoneIcon],svg[solar-forbidden-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.521 4.418L4.418 18.521a10 10 0 0 0 1.06 1.061L19.583 5.479a10 10 0 0 0-1.06-1.06"></svg:path>`,
})
export class SolarForbiddenCircleBoldDuotoneIcon {
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
  selector: 'svg[solarForbiddenCircleLineDuotoneIcon],svg[solar-forbidden-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m18.5 5.5l-13 13" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class SolarForbiddenCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenCircleLinearIcon],svg[solar-forbidden-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m18.5 5.5l-13 13"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class SolarForbiddenCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenCircleOutlineIcon],svg[solar-forbidden-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12A9.25 9.25 0 0 1 12 2.75c2.284 0 4.376.828 5.99 2.2l-.02.02l-13 13l-.02.02A9.2 9.2 0 0 1 2.75 12m3.26 7.05A9.25 9.25 0 0 0 19.05 6.01l-.019.02l-13 13z" clip-rule="evenodd"></svg:path>`,
})
export class SolarForbiddenCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenLineDuotoneIcon],svg[solar-forbidden-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m18.5 5.5l-13 13" opacity=".5"></svg:path><svg:path d="M22 10.849v2.302c0 1.226 0 1.84-.228 2.39c-.229.552-.662.986-1.53 1.853l-2.848 2.849c-.867.867-1.3 1.3-1.852 1.529c-.551.228-1.165.228-2.39.228h-2.303c-1.226 0-1.84 0-2.39-.228c-.552-.229-.986-.662-1.853-1.53l-2.849-2.848c-.867-.867-1.3-1.3-1.529-1.852S2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39c.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529S9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228c.552.229.986.662 1.853 1.53l2.849 2.848c.867.867 1.3 1.3 1.529 1.852S22 9.623 22 10.848Z"></svg:path></svg:g>`,
})
export class SolarForbiddenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenLinearIcon],svg[solar-forbidden-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m18.5 5.5l-13 13"></svg:path><svg:path d="M22 10.849v2.302c0 1.226 0 1.84-.228 2.39c-.229.552-.662.986-1.53 1.853l-2.848 2.849c-.867.867-1.3 1.3-1.852 1.529c-.551.228-1.165.228-2.39.228h-2.303c-1.226 0-1.84 0-2.39-.228c-.552-.229-.986-.662-1.853-1.53l-2.849-2.848c-.867-.867-1.3-1.3-1.529-1.852S2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39c.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529S9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228c.552.229.986.662 1.853 1.53l2.849 2.848c.867.867 1.3 1.3 1.529 1.852S22 9.623 22 10.848Z"></svg:path></svg:g>`,
})
export class SolarForbiddenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenOutlineIcon],svg[solar-forbidden-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.706 1.25c-1.087 0-1.843 0-2.535.286c-.691.286-1.225.82-1.994 1.59l-3.05 3.05c-.77.77-1.305 1.304-1.591 1.995S1.25 9.62 1.25 10.706v2.588c0 1.088 0 1.843.286 2.535c.286.691.82 1.226 1.59 1.994l3.05 3.05c.77.77 1.304 1.305 1.995 1.592c.692.286 1.448.286 2.535.285h2.588c1.088 0 1.843.001 2.535-.285c.691-.287 1.226-.822 1.994-1.591l3.05-3.05c.77-.77 1.305-1.304 1.592-1.995c.286-.692.286-1.447.285-2.535v-2.588c0-1.087.001-1.843-.285-2.535c-.287-.691-.822-1.225-1.591-1.994l-3.05-3.05c-.77-.77-1.304-1.305-1.995-1.591s-1.447-.286-2.535-.286zm-1.96 1.671c.38-.158.816-.17 2.103-.17h2.302c1.288 0 1.722.012 2.104.17c.381.158.698.456 1.608 1.367l.895.894L5.182 17.758l-.894-.895c-.91-.91-1.209-1.227-1.367-1.608c-.158-.382-.17-.816-.17-2.104V10.85c0-1.287.012-1.722.17-2.104c.158-.381.456-.698 1.367-1.608l2.849-2.85c.91-.91 1.227-1.208 1.608-1.366M6.241 18.818l.895.894c.91.91 1.227 1.209 1.608 1.367c.382.158.817.171 2.104.171h2.302c1.288 0 1.722-.013 2.104-.171c.381-.158.698-.456 1.608-1.367l2.85-2.849c.91-.91 1.208-1.227 1.366-1.608c.158-.382.171-.816.171-2.104V10.85c0-1.287-.013-1.722-.171-2.104c-.158-.381-.456-.698-1.367-1.608l-.894-.894z" clip-rule="evenodd"></svg:path>`,
})
export class SolarForbiddenOutlineIcon {
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
  selector: 'svg[solarForward2BoldDuotoneIcon],svg[solar-forward-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.97 17.53a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06L18.44 12l-4.47 4.47a.75.75 0 0 0 0 1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.69 12.75H9.5c-.953 0-2.367-.28-3.563-1.141C4.702 10.719 3.75 9.244 3.75 7a.75.75 0 1 1 1.5 0c0 1.756.715 2.78 1.563 3.391c.887.639 1.974.859 2.687.859h8.19l.75.75zm2.503-.463" opacity=".5"></svg:path>`,
})
export class SolarForward2BoldDuotoneIcon {
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
  selector: 'svg[solarForward2LineDuotoneIcon],svg[solar-forward-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14.5 17l5-5l-5-5"></svg:path><svg:path d="M19.5 12h-10c-1.667 0-5-1-5-5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarForward2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForward2LinearIcon],svg[solar-forward-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 12l-5 5m5-5l-5-5m5 5h-10c-1.667 0-5-1-5-5"></svg:path>`,
})
export class SolarForward2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForward2OutlineIcon],svg[solar-forward-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 6.25a.75.75 0 0 1 .75.75c0 1.756.715 2.78 1.563 3.391c.887.639 1.974.859 2.687.859h8.19l-3.72-3.72a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H9.5c-.953 0-2.367-.28-3.563-1.141C4.702 10.719 3.75 9.244 3.75 7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarForward2OutlineIcon {
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
  selector: 'svg[solarForwardBoldDuotoneIcon],svg[solar-forward-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.97 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L18.44 12l-4.47-4.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.69 11.25H9.5c-.953 0-2.367.28-3.563 1.141c-1.235.89-2.187 2.365-2.187 4.609a.75.75 0 0 0 1.5 0c0-1.756.715-2.78 1.563-3.391c.887-.639 1.974-.859 2.687-.859h8.19l.75-.75zm2.503.463" opacity=".5"></svg:path>`,
})
export class SolarForwardBoldDuotoneIcon {
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
  selector: 'svg[solarForwardLineDuotoneIcon],svg[solar-forward-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14.5 7l5 5l-5 5"></svg:path><svg:path d="M19.5 12h-10c-1.667 0-5 1-5 5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarForwardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForwardLinearIcon],svg[solar-forward-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 12l-5-5m5 5l-5 5m5-5h-10c-1.667 0-5 1-5 5"></svg:path>`,
})
export class SolarForwardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarForwardOutlineIcon],svg[solar-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.97 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H9.5c-.713 0-1.8.22-2.687.859c-.848.61-1.563 1.635-1.563 3.391a.75.75 0 0 1-1.5 0c0-2.244.952-3.72 2.187-4.609c1.196-.861 2.61-1.141 3.563-1.141h8.19l-3.72-3.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarForwardOutlineIcon {
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
  selector: 'svg[solarFridgeBoldDuotoneIcon],svg[solar-fridge-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 11.5V13c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.047C9.645 21 10.712 21 12 21s2.355 0 3.25-.047V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.475a3.1 3.1 0 0 0 1.078-.697C20 18.657 20 16.771 20 13v-1.5zm13 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v1.5H4z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.75 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarFridgeBoldDuotoneIcon {
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
  selector: 'svg[solarFridgeLineDuotoneIcon],svg[solar-fridge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v3c0 3.771 0 5.657-1.172 6.828S15.771 21 12 21s-5.657 0-6.828-1.172S4 16.771 4 13z"></svg:path><svg:path stroke-linejoin="round" d="M17 21v1h-1v-1m-8 0v1H7v-1" opacity=".5"></svg:path><svg:path d="M20 11.5H4" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M17 7v2m0 5v2"></svg:path></svg:g>`,
})
export class SolarFridgeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFridgeLinearIcon],svg[solar-fridge-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v3c0 3.771 0 5.657-1.172 6.828S15.771 21 12 21s-5.657 0-6.828-1.172S4 16.771 4 13z"></svg:path><svg:path stroke-linejoin="round" d="M17 21v1h-1v-1m-8 0v1H7v-1"></svg:path><svg:path d="M20 11.5H4"></svg:path><svg:path stroke-linecap="round" d="M17 7v2m0 5v2"></svg:path></svg:g>`,
})
export class SolarFridgeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFridgeOutlineIcon],svg[solar-fridge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm0 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.056 1.25h-.112c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v3.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.46.459.994.761 1.609.963V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-.296c.907.046 1.965.046 3.194.046h.112c1.23 0 2.287 0 3.194-.046V22c0 .414.336.75.75.75h1a.75.75 0 0 0 .75-.75v-.678c.615-.202 1.15-.504 1.609-.963c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433V9.945c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.749-.748-1.698-1.08-2.87-1.238c-1.14-.153-2.595-.153-4.433-.153M5.702 3.702c.423-.423 1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14s3.262.002 4.29.14c1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289v.75H4.75V10c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008M4.75 12.25h14.5V13c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.028.138-2.382.14-4.289.14s-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.027-.14-2.382-.14-4.289z" clip-rule="evenodd"></svg:path>`,
})
export class SolarFridgeOutlineIcon {
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
  selector: 'svg[solarFuelBoldDuotoneIcon],svg[solar-fuel-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.553 9.147C2 9.942 2 10.991 2 13.087v2.796c0 2.884 0 4.326.879 5.221C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.896c.879-.895.879-2.337.879-5.22v-5.651c0-3.928 0-5.891-1.264-6.805c-1.264-.915-3.082-.266-6.718 1.031l-8 2.855c-1.941.692-2.911 1.038-3.465 1.833" opacity=".5"></svg:path><svg:path fill="currentColor" d="m11.016 5.53l-.072-.293a1.65 1.65 0 0 0-1.157-1.18C9.58 4 9.325 4 8.818 4H8c-1.28 0-1.92 0-2.36.345a1.7 1.7 0 0 0-.302.308C5 5.103 5 5.755 5 7.06v.621q.458-.168 1.018-.367zM7.47 9.47a.75.75 0 0 0 0 1.06l1.5 1.5q.058.058.123.1C9 12.564 9 13.156 9 14c0 .831 0 1.418.09 1.85l-1.62 1.62a.75.75 0 1 0 1.06 1.06l1.62-1.62c.432.09 1.019.09 1.85.09s1.418 0 1.85-.09l1.62 1.62a.75.75 0 1 0 1.06-1.06l-1.62-1.62c.09-.432.09-1.019.09-1.85s0-1.418-.09-1.85l1.62-1.62a.75.75 0 1 0-1.06-1.06l-1.62 1.62C13.418 11 12.831 11 12 11c-.844 0-1.436 0-1.87.093a1 1 0 0 0-.1-.123l-1.5-1.5a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class SolarFuelBoldDuotoneIcon {
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
  selector: 'svg[solarFuelLineDuotoneIcon],svg[solar-fuel-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 13.087c0-2.096 0-3.145.553-3.94c.554-.795 1.524-1.14 3.465-1.833l8-2.855c3.636-1.297 5.454-1.946 6.718-1.031C22 4.342 22 6.305 22 10.233v5.65c0 2.884 0 4.326-.879 5.221C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.896C2 20.21 2 18.767 2 15.884z"></svg:path><svg:path d="M9 14c0-1.414 0-2.121.44-2.56C9.878 11 10.585 11 12 11s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C9 16.122 9 15.415 9 14Z"></svg:path><svg:path stroke-linecap="round" d="m15 11l1-1m-7 1l-1-1m7 7l1 1m-7-1l-1 1M5 7.06c0-1.305 0-1.957.338-2.407q.132-.175.302-.308C6.08 4 6.72 4 8 4h.818c.507 0 .761 0 .97.057a1.65 1.65 0 0 1 1.156 1.18" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFuelLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFuelLinearIcon],svg[solar-fuel-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 13.087c0-2.096 0-3.145.553-3.94c.554-.795 1.524-1.14 3.465-1.833l8-2.855c3.636-1.297 5.454-1.946 6.718-1.031C22 4.342 22 6.305 22 10.233v5.65c0 2.884 0 4.326-.879 5.221C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.896C2 20.21 2 18.767 2 15.884z"></svg:path><svg:path d="M9 14c0-1.414 0-2.121.44-2.56C9.878 11 10.585 11 12 11s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C9 16.122 9 15.415 9 14Z"></svg:path><svg:path stroke-linecap="round" d="m15 11l1-1m-7 1l-1-1m7 7l1 1m-7-1l-1 1M5 7.06c0-1.305 0-1.957.338-2.407q.132-.175.302-.308C6.08 4 6.72 4 8 4h.818c.507 0 .761 0 .97.057a1.65 1.65 0 0 1 1.156 1.18"></svg:path></svg:g>`,
})
export class SolarFuelLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFuelOutlineIcon],svg[solar-fuel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.95 10.25h.1c.664 0 1.237 0 1.696.061c.243.033.48.086.705.177l.019-.018l1-1a.75.75 0 1 1 1.06 1.06l-1 1l-.018.018c.09.225.144.463.176.706c.062.459.062 1.032.062 1.696v.1c0 .664 0 1.237-.062 1.696a3 3 0 0 1-.177.705l.02.018l1 1a.75.75 0 1 1-1.061 1.061l-1-1l-.007-.007l-.011-.012a3 3 0 0 1-.706.177c-.459.062-1.032.062-1.697.062h-.098c-.665 0-1.238 0-1.697-.062a3 3 0 0 1-.705-.177l-.019.02l-1 1a.75.75 0 0 1-1.06-1.061l1-1l.018-.019a3 3 0 0 1-.176-.705c-.062-.46-.062-1.032-.062-1.697v-.099c0-.664 0-1.237.062-1.696c.032-.243.085-.481.177-.706l-.02-.018l-1-1A.75.75 0 1 1 8.53 9.47l1 1l.019.018a3 3 0 0 1 .705-.177c.459-.061 1.032-.061 1.697-.061m-1.496 1.548c-.325.044-.427.114-.484.172s-.128.159-.172.484c-.046.347-.048.817-.048 1.546c0 .728.002 1.199.048 1.546c.044.325.115.427.172.484s.159.128.484.172c.347.046.818.048 1.546.048s1.2-.002 1.546-.048c.325-.044.427-.115.484-.172s.128-.159.172-.484c.046-.347.048-.818.048-1.546s-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.485s-.159-.127-.484-.171c-.347-.047-.818-.048-1.546-.048s-1.2.001-1.546.048"></svg:path><svg:path d="M18.122 2.378c1.153-.227 2.175-.193 3.053.442c.875.632 1.24 1.596 1.41 2.773c.165 1.15.165 2.666.165 4.576v5.768c0 1.396 0 2.518-.116 3.4c-.12.913-.378 1.681-.977 2.292c-.602.613-1.36.878-2.263 1.002c-.868.119-1.971.119-3.338.119H7.944c-1.367 0-2.47 0-3.338-.12c-.902-.123-1.661-.388-2.263-1c-.6-.612-.856-1.38-.977-2.293c-.116-.882-.116-2.004-.116-3.4v-2.893c0-1.012 0-1.833.074-2.498c.077-.692.24-1.29.614-1.827c.375-.539.877-.895 1.496-1.2q.369-.18.823-.357a1 1 0 0 1-.007-.102v-.041c0-.618 0-1.142.047-1.566c.05-.447.159-.874.442-1.251q.19-.253.439-.448c.373-.292.798-.405 1.242-.456c.418-.048.934-.048 1.538-.048h.949c.419 0 .77-.001 1.078.083c.66.18 1.2.635 1.502 1.233l2.34-.835C15.594 3.1 17 2.599 18.123 2.378m.29 1.472c-1 .196-2.3.658-4.142 1.315l-8 2.855c-.987.352-1.667.596-2.174.845c-.489.24-.749.455-.927.71c-.18.258-.293.582-.354 1.137c-.064.572-.065 1.31-.065 2.375v2.796c0 1.463.002 2.486.103 3.258c.1.752.282 1.153.561 1.438c.277.283.665.466 1.396.566c.754.103 1.754.105 3.19.105h8c1.436 0 2.436-.002 3.19-.105c.731-.1 1.118-.283 1.396-.566c.28-.285.461-.686.56-1.438c.102-.772.104-1.795.104-3.258v-5.65c0-1.988-.002-3.396-.15-4.426c-.147-1.015-.414-1.49-.804-1.772c-.386-.28-.904-.378-1.885-.185m-8.367 1.23a.9.9 0 0 0-.456-.3c-.086-.024-.214-.03-.77-.03H8c-.657 0-1.087.001-1.409.038c-.306.035-.42.094-.489.147a1 1 0 0 0-.165.169c-.054.073-.114.196-.15.514a10 10 0 0 0-.036.995z"></svg:path></svg:g>`,
})
export class SolarFuelOutlineIcon {
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
  selector: 'svg[solarFullScreenBoldDuotoneIcon],svg[solar-full-screen-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.29 2.89c-1.028-.138-2.383-.14-4.29-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812M2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M22 13.25a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path>`,
})
export class SolarFullScreenBoldDuotoneIcon {
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
  selector: 'svg[solarFullScreenCircleBoldDuotoneIcon],svg[solar-full-screen-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.004 6.75a.75.75 0 0 0-.013-1.5c-.85.007-1.577.034-2.179.152c-.623.122-1.167.351-1.613.797s-.675.99-.797 1.613c-.118.602-.145 1.328-.152 2.179a.75.75 0 0 0 1.5.013c.007-.856.035-1.454.124-1.904c.084-.428.212-.666.386-.84s.412-.302.84-.386c.45-.088 1.048-.117 1.904-.124m4.003-1.5a.75.75 0 1 0-.013 1.5c.856.007 1.454.035 1.903.124c.429.084.666.212.84.386c.175.174.303.412.387.84c.088.45.116 1.048.124 1.904a.75.75 0 0 0 1.5-.013c-.008-.85-.034-1.577-.152-2.179c-.122-.623-.352-1.167-.798-1.613s-.99-.675-1.612-.797c-.603-.118-1.329-.145-2.18-.152M6.75 13.994a.75.75 0 0 0-1.5.013c.007.85.034 1.577.152 2.179c.122.623.351 1.167.797 1.613s.99.675 1.613.797c.602.119 1.328.145 2.179.152a.75.75 0 0 0 .013-1.5c-.856-.007-1.454-.036-1.904-.123c-.428-.084-.666-.213-.84-.387s-.302-.412-.386-.84c-.088-.45-.117-1.048-.124-1.904m11.998.013a.75.75 0 1 0-1.5-.013c-.008.856-.036 1.454-.124 1.904c-.084.428-.212.666-.386.84s-.412.303-.84.387c-.45.087-1.048.116-1.904.123a.75.75 0 1 0 .013 1.5c.85-.007 1.576-.034 2.179-.152c.623-.122 1.166-.351 1.612-.797s.676-.99.798-1.613c.118-.602.144-1.328.151-2.179"></svg:path>`,
})
export class SolarFullScreenCircleBoldDuotoneIcon {
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
  selector: 'svg[solarFullScreenCircleLineDuotoneIcon],svg[solar-full-screen-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6 9.997c.014-1.706.11-2.647.73-3.267S8.29 6.014 9.997 6M6 14c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73m8.001-8.001c-.015-1.706-.11-2.647-.73-3.267S15.707 6.014 14 6m3.998 8c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73"></svg:path><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarFullScreenCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenCircleLinearIcon],svg[solar-full-screen-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6 9.997c.014-1.706.11-2.647.73-3.267S8.29 6.014 9.997 6M6 14c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73m8.001-8.001c-.015-1.706-.11-2.647-.73-3.267S15.707 6.014 14 6m3.998 8c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class SolarFullScreenCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenCircleOutlineIcon],svg[solar-full-screen-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m9.497-6.006a.75.75 0 0 1-.743.756c-.856.007-1.454.035-1.904.124c-.428.084-.666.212-.84.386s-.302.412-.386.84c-.088.45-.117 1.048-.124 1.904a.75.75 0 0 1-1.5-.013c.007-.85.034-1.577.152-2.179c.122-.623.351-1.167.797-1.613s.99-.675 1.613-.797c.602-.118 1.328-.145 2.179-.152a.75.75 0 0 1 .756.744m2.503 0a.75.75 0 0 1 .757-.744c.85.007 1.576.034 2.179.152c.623.122 1.166.351 1.612.797s.676.99.798 1.613c.118.602.144 1.328.151 2.179a.75.75 0 0 1-1.5.013c-.007-.856-.035-1.454-.123-1.904c-.084-.428-.212-.666-.386-.84s-.412-.302-.84-.386c-.45-.088-1.048-.117-1.904-.124a.75.75 0 0 1-.744-.756M5.994 13.25a.75.75 0 0 1 .756.744c.007.856.035 1.454.124 1.903c.084.429.212.666.386.84c.174.175.412.303.84.387c.45.088 1.048.116 1.904.124a.75.75 0 0 1-.013 1.5c-.85-.008-1.577-.034-2.179-.152c-.623-.122-1.167-.352-1.613-.798s-.675-.99-.797-1.612c-.118-.603-.145-1.329-.152-2.18a.75.75 0 0 1 .744-.756m12.01 0a.75.75 0 0 1 .743.757c-.007.85-.033 1.576-.151 2.179c-.122.623-.352 1.166-.798 1.612s-.99.676-1.612.798c-.603.118-1.329.144-2.18.151a.75.75 0 1 1-.012-1.5c.856-.007 1.454-.035 1.903-.123c.429-.084.666-.212.84-.386c.175-.175.303-.412.387-.84c.088-.45.116-1.048.124-1.904a.75.75 0 0 1 .756-.744" clip-rule="evenodd"></svg:path>`,
})
export class SolarFullScreenCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenLineDuotoneIcon],svg[solar-full-screen-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22" opacity=".5"></svg:path><svg:path d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14"></svg:path><svg:path d="M10 2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10" opacity=".5"></svg:path><svg:path d="M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"></svg:path></svg:g>`,
})
export class SolarFullScreenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenLinearIcon],svg[solar-full-screen-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"></svg:path>`,
})
export class SolarFullScreenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenOutlineIcon],svg[solar-full-screen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m8.345 1.64c-1.027-.138-2.382-.14-4.289-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812M2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarFullScreenOutlineIcon {
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
  selector: 'svg[solarFullScreenSquareBoldDuotoneIcon],svg[solar-full-screen-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.004 6.75a.75.75 0 0 0-.013-1.5c-.85.007-1.577.034-2.179.152c-.623.122-1.167.351-1.613.797s-.675.99-.797 1.613c-.118.602-.145 1.328-.152 2.179a.75.75 0 0 0 1.5.013c.007-.856.035-1.454.124-1.904c.084-.428.212-.666.386-.84s.412-.302.84-.386c.45-.088 1.048-.117 1.904-.124m4.003-1.5a.75.75 0 1 0-.013 1.5c.856.007 1.454.035 1.903.124c.429.084.666.212.84.386c.175.174.303.412.387.84c.088.45.116 1.048.124 1.904a.75.75 0 0 0 1.5-.013c-.008-.85-.034-1.577-.152-2.179c-.122-.623-.352-1.167-.798-1.613s-.99-.675-1.612-.797c-.603-.118-1.329-.145-2.18-.152M6.75 13.994a.75.75 0 0 0-1.5.013c.007.85.034 1.577.152 2.179c.122.623.351 1.167.797 1.613s.99.675 1.613.797c.602.119 1.328.145 2.179.152a.75.75 0 0 0 .013-1.5c-.856-.007-1.454-.036-1.904-.123c-.428-.084-.666-.213-.84-.387s-.302-.412-.386-.84c-.088-.45-.117-1.048-.124-1.904m11.998.013a.75.75 0 1 0-1.5-.013c-.008.856-.036 1.454-.124 1.904c-.084.428-.212.666-.386.84s-.412.303-.84.387c-.45.087-1.048.116-1.904.123a.75.75 0 1 0 .013 1.5c.85-.007 1.576-.034 2.179-.152c.623-.122 1.166-.351 1.612-.797s.676-.99.798-1.613c.118-.602.144-1.328.151-2.179"></svg:path>`,
})
export class SolarFullScreenSquareBoldDuotoneIcon {
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
  selector: 'svg[solarFullScreenSquareLineDuotoneIcon],svg[solar-full-screen-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6 9.997c.014-1.706.11-2.647.73-3.267S8.29 6.014 9.997 6M6 14c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73m8.001-8.001c-.015-1.706-.11-2.647-.73-3.267S15.707 6.014 14 6m3.998 8c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFullScreenSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenSquareLinearIcon],svg[solar-full-screen-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M6 9.997c.014-1.706.11-2.647.73-3.267S8.29 6.014 9.997 6M6 14c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73m8.001-8.001c-.015-1.706-.11-2.647-.73-3.267S15.707 6.014 14 6m3.998 8c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarFullScreenSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarFullScreenSquareOutlineIcon],svg[solar-full-screen-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m4.134 3.068a.75.75 0 0 1-.743.756c-.856.007-1.454.035-1.904.124c-.428.084-.666.212-.84.386s-.302.412-.386.84c-.088.45-.117 1.048-.124 1.904a.75.75 0 0 1-1.5-.013c.007-.85.034-1.577.152-2.179c.122-.623.351-1.167.797-1.613s.99-.675 1.613-.797c.602-.118 1.328-.145 2.179-.152a.75.75 0 0 1 .756.744m2.503 0a.75.75 0 0 1 .757-.744c.85.007 1.576.034 2.179.152c.623.122 1.166.351 1.612.797s.676.99.798 1.613c.118.602.144 1.328.151 2.179a.75.75 0 0 1-1.5.013c-.007-.856-.035-1.454-.123-1.904c-.084-.428-.212-.666-.386-.84s-.412-.302-.84-.386c-.45-.088-1.048-.117-1.904-.124a.75.75 0 0 1-.744-.756M5.994 13.25a.75.75 0 0 1 .756.744c.007.856.035 1.454.124 1.903c.084.429.212.666.386.84c.174.175.412.303.84.387c.45.088 1.048.116 1.904.124a.75.75 0 0 1-.013 1.5c-.85-.008-1.577-.034-2.179-.152c-.623-.122-1.167-.352-1.613-.798s-.675-.99-.797-1.612c-.118-.603-.145-1.329-.152-2.18a.75.75 0 0 1 .744-.756m12.01 0a.75.75 0 0 1 .743.757c-.007.85-.033 1.576-.151 2.179c-.122.623-.352 1.166-.798 1.612s-.99.676-1.612.798c-.603.118-1.329.144-2.18.151a.75.75 0 1 1-.012-1.5c.856-.007 1.454-.035 1.903-.123c.429-.084.666-.212.84-.386c.175-.175.303-.412.387-.84c.088-.45.116-1.048.124-1.904a.75.75 0 0 1 .756-.744" clip-rule="evenodd"></svg:path>`,
})
export class SolarFullScreenSquareOutlineIcon {
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
  selector: 'svg[solarGalleryAddBoldDuotoneIcon],svg[solar-gallery-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m.75-6.5a.75.75 0 0 0-1.5 0v1.25H15.5a.75.75 0 0 0 0 1.5h1.25V8.5a.75.75 0 0 0 1.5 0V7.25h1.25a.75.75 0 0 0 0-1.5h-1.25z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path>`,
})
export class SolarGalleryAddBoldDuotoneIcon {
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
  selector: 'svg[solarGalleryAddLineDuotoneIcon],svg[solar-gallery-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path d="M15 5.5h3.5m0 0H22m-3.5 0V9m0-3.5V2"></svg:path></svg:g>`,
})
export class SolarGalleryAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryAddLinearIcon],svg[solar-gallery-add-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5m-6-13h3.5m0 0H22m-3.5 0V9m0-3.5V2"></svg:path></svg:g>`,
})
export class SolarGalleryAddLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryAddOutlineIcon],svg[solar-gallery-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.5 1.25a.75.75 0 0 1 .75.75v2.75H22a.75.75 0 0 1 0 1.5h-2.75V9a.75.75 0 0 1-1.5 0V6.25H15a.75.75 0 0 1 0-1.5h2.75V2a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386l-.022.152l-2.774-2.497a3.75 3.75 0 0 0-4.665-.28l-.298.21a1.25 1.25 0 0 1-1.602-.14l-4.29-4.29a3.05 3.05 0 0 0-4.165-.138l-.507.443c.005-1.792.03-3.153.175-4.232c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5M2.926 17.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069a3 3 0 0 0 .604-.865a1 1 0 0 1-.112-.083l-3.223-2.9a2.25 2.25 0 0 0-2.8-.17l-.297.21a2.75 2.75 0 0 1-3.526-.305l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.75 12.84c.003 1.948.023 3.405.176 4.546"></svg:path></svg:g>`,
})
export class SolarGalleryAddOutlineIcon {
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
  selector: 'svg[solarGalleryBoldDuotoneIcon],svg[solar-gallery-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a3 3 0 0 0 .602-.859" opacity=".4"></svg:path>`,
})
export class SolarGalleryBoldDuotoneIcon {
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
  selector: 'svg[solarGalleryCheckBoldDuotoneIcon],svg[solar-gallery-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.53-5.47a.75.75 0 0 0-1.06-1.06L16.5 6.94l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryCheckBoldDuotoneIcon {
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
  selector: 'svg[solarGalleryCheckLineDuotoneIcon],svg[solar-gallery-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path stroke-linejoin="round" d="m13 7l2 2l5-5"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGalleryCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCheckLinearIcon],svg[solar-gallery-check-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path stroke-linejoin="round" d="m13 7l2 2l5-5"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path></svg:g>`,
})
export class SolarGalleryCheckLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCheckOutlineIcon],svg[solar-gallery-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="solarGalleryCheckOutline0" d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386l-.022.152l-2.774-2.497a3.75 3.75 0 0 0-4.665-.28l-.298.21a1.25 1.25 0 0 1-1.602-.14l-4.29-4.29a3.05 3.05 0 0 0-4.165-.138l-.507.443c.005-1.792.03-3.153.175-4.232c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5M2.926 17.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.087-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069a3 3 0 0 0 .604-.865a1 1 0 0 1-.112-.083l-3.223-2.9a2.25 2.25 0 0 0-2.8-.17l-.297.21a2.75 2.75 0 0 1-3.526-.305l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.75 12.84c.003 1.948.023 3.405.176 4.546"></svg:path></svg:defs><svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M20.53 3.47a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06L15 7.94l4.47-4.47a.75.75 0 0 1 1.06 0"></svg:path><svg:use href="#solarGalleryCheckOutline0"></svg:use><svg:use href="#solarGalleryCheckOutline0"></svg:use></svg:g>`,
})
export class SolarGalleryCheckOutlineIcon {
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
  selector: 'svg[solarGalleryCircleBoldDuotoneIcon],svg[solar-gallery-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.182 15.362l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.001.894c-.017.013-.05.099-.05.338a9.3 9.3 0 0 0 17.025 5.179l-.117-.118l-1.833-1.662a3 3 0 0 0-3.731-.225l-.299.21a2 2 0 0 1-2.564-.222" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m19.73-2.23c.209.775.32 1.59.32 2.43A9.3 9.3 0 1 1 3.016 9.787C4.008 5.747 7.654 2.75 12 2.75c4.34 0 7.981 2.989 8.98 7.02" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryCircleBoldDuotoneIcon {
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
  selector: 'svg[solarGalleryCircleLineDuotoneIcon],svg[solar-gallery-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="9" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m20 17.6l-2.224-2a3 3 0 0 0-3.732-.225l-.298.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104L2.28 12.253" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class SolarGalleryCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCircleLinearIcon],svg[solar-gallery-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="9" r="2"></svg:circle><svg:path stroke-linecap="round" d="m20 17.6l-2.223-2a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.47 1.286"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class SolarGalleryCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryCircleOutlineIcon],svg[solar-gallery-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.83 10.777l.428-.374a3.05 3.05 0 0 1 4.165.139l4.29 4.29a1.25 1.25 0 0 0 1.602.138l.298-.21a3.75 3.75 0 0 1 4.665.281l1.743 1.57A9.25 9.25 0 1 0 2.83 10.777m16.332 7.078l-1.887-1.699a2.25 2.25 0 0 0-2.8-.168l-.297.21a2.75 2.75 0 0 1-3.526-.306l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07l-1.46 1.278A9.25 9.25 0 0 0 12 21.25a9.23 9.23 0 0 0 7.162-3.395M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M15 7.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M12.25 9a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryCircleOutlineIcon {
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
  selector: 'svg[solarGalleryDownloadBoldDuotoneIcon],svg[solar-gallery-download-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 2c-2.121 0-3.182 0-3.841.659S13 4.379 13 6.5s0 3.182.659 3.841S15.379 11 17.5 11s3.182 0 3.841-.659S22 8.621 22 6.5s0-3.182-.659-3.841S19.621 2 17.5 2m2.03 5.53l-1.5 1.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.22.22V4.5a.75.75 0 0 1 1.5 0v2.19l.22-.22a.75.75 0 1 1 1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryDownloadBoldDuotoneIcon {
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
  selector: 'svg[solarGalleryDownloadLineDuotoneIcon],svg[solar-gallery-download-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M17 11V2m0 9l3-3m-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarGalleryDownloadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryDownloadLinearIcon],svg[solar-gallery-download-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path><svg:path stroke-linejoin="round" d="M17 11V2m0 9l3-3m-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarGalleryDownloadLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryDownloadOutlineIcon],svg[solar-gallery-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17 1.25a.75.75 0 0 1 .75.75v7.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386l-.022.152l-2.774-2.497a3.75 3.75 0 0 0-4.665-.28l-.298.21a1.25 1.25 0 0 1-1.602-.14l-4.29-4.29a3.05 3.05 0 0 0-4.165-.138l-.507.443c.005-1.792.03-3.153.175-4.232c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5M2.926 17.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069a3 3 0 0 0 .604-.865a1 1 0 0 1-.112-.083l-3.223-2.9a2.25 2.25 0 0 0-2.8-.17l-.297.21a2.75 2.75 0 0 1-3.526-.305l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.75 12.84c.003 1.948.023 3.405.176 4.546"></svg:path></svg:g>`,
})
export class SolarGalleryDownloadOutlineIcon {
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
  selector: 'svg[solarGalleryEditBoldDuotoneIcon],svg[solar-gallery-edit-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.212-6.712a.983.983 0 0 1 0 1.39l-.058.058a.24.24 0 0 1-.211.067a1.6 1.6 0 0 1-.81-.436a1.6 1.6 0 0 1-.436-.81a.24.24 0 0 1 .067-.211l.058-.058a.983.983 0 0 1 1.39 0M17.35 8.04a3 3 0 0 1-.296.279a1.6 1.6 0 0 1-.303.187c-.09.043-.188.076-.381.14l-1.021.34a.265.265 0 0 1-.335-.335l.34-1.02c.064-.194.097-.291.14-.382q.077-.163.187-.303c.062-.08.134-.152.279-.296l1.799-1.799c.043-.043.118-.023.138.035a1.98 1.98 0 0 0 1.217 1.217c.058.02.078.095.035.138z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryEditBoldDuotoneIcon {
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
  selector: 'svg[solarGalleryEditLineDuotoneIcon],svg[solar-gallery-edit-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path stroke-linecap="round" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path d="m18.562 2.935l.417-.417a1.77 1.77 0 0 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669s1.669.834 1.669.834m-2.503-2.503L14.727 6.77c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116m7.8-4.212L17.23 9.273c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372m0 0l-.722.24a.477.477 0 0 1-.604-.603l.241-.722m1.085 1.085L13.265 9.65"></svg:path></svg:g>`,
})
export class SolarGalleryEditLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryEditLinearIcon],svg[solar-gallery-edit-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path stroke-linecap="round" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path><svg:path d="m18.562 2.935l.417-.417a1.77 1.77 0 0 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669s1.669.834 1.669.834m-2.503-2.503L14.727 6.77c-.26.26-.39.39-.5.533a3 3 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116m7.8-4.212L17.23 9.273c-.26.26-.39.39-.533.5a3 3 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372m0 0l-.722.24a.477.477 0 0 1-.604-.603l.241-.722m1.085 1.085L13.265 9.65"></svg:path></svg:g>`,
})
export class SolarGalleryEditLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryEditOutlineIcon],svg[solar-gallery-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.449 1.988a2.52 2.52 0 1 1 3.563 3.563L17.76 9.803l-.03.03c-.23.23-.391.392-.572.532a3.7 3.7 0 0 1-.683.423c-.206.098-.422.17-.732.273l-.04.014l-1.838.612a1.227 1.227 0 0 1-1.552-1.552l.612-1.838l.014-.04c.103-.31.175-.526.273-.732q.175-.364.423-.684c.14-.18.301-.34.532-.571l.03-.03zm2.502 1.06a1.02 1.02 0 0 0-1.442 0l-.131.132l.016.05c.082.236.238.548.533.843a2.2 2.2 0 0 0 .893.55l.131-.132a1.02 1.02 0 0 0 0-1.442m-1.265 2.708a3.75 3.75 0 0 1-1.442-1.442L15.258 7.3c-.272.273-.364.366-.44.464a2.2 2.2 0 0 0-.252.406c-.053.113-.096.236-.218.602l-.225.675l.43.43l.675-.226c.366-.121.489-.164.602-.217a2.2 2.2 0 0 0 .406-.252c.098-.076.191-.168.464-.44z"></svg:path><svg:path d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386l-.022.152l-2.774-2.497a3.75 3.75 0 0 0-4.665-.28l-.298.21a1.25 1.25 0 0 1-1.602-.14l-4.29-4.29a3.05 3.05 0 0 0-4.165-.138l-.507.443c.005-1.792.03-3.153.175-4.232c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5M2.926 17.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069a3 3 0 0 0 .604-.865a1 1 0 0 1-.112-.083l-3.223-2.9a2.25 2.25 0 0 0-2.8-.17l-.297.21a2.75 2.75 0 0 1-3.526-.305l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.75 12.84c.003 1.948.023 3.405.176 4.546"></svg:path></svg:g>`,
})
export class SolarGalleryEditOutlineIcon {
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
  selector: 'svg[solarGalleryFavouriteBoldDuotoneIcon],svg[solar-gallery-favourite-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.904 16.441c.083-1.024.094-2.274.096-3.743a.697.697 0 1 0-1.396 0c-.001 1.477-.012 2.658-.091 3.63c-.084 1.032-.242 1.763-.507 2.32l-2.633-2.37a2.79 2.79 0 0 0-3.471-.21l-.277.196a1.86 1.86 0 0 1-2.386-.207l-3.99-3.99a2.14 2.14 0 0 0-2.922-.097l-.931.814V12c0-2.212 0-3.801.163-5.01c.16-1.19.464-1.907.994-2.437S5.8 3.72 6.99 3.56c1.079-.145 2.458-.161 4.313-.163a.699.699 0 0 0 0-1.396c-1.829.002-3.33.02-4.499.177c-1.343.18-2.404.557-3.236 1.39s-1.21 1.893-1.39 3.236C2 8.116 2 9.8 2 11.947V12q0 .736.002 1.396c.007 1.729.044 3.121.243 4.24c.203 1.14.584 2.058 1.322 2.796c.832.833 1.893 1.21 3.236 1.39C8.116 22 9.8 22 11.947 22h.106c2.148 0 3.83 0 5.144-.177c1.344-.18 2.404-.557 3.236-1.39a4.2 4.2 0 0 0 .73-.983c.445-.825.644-1.82.74-3.009" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-1.455-2.784c-.765-.67-1.545-1.564-1.545-2.418c0-1.773 1.65-2.435 3-1.065c1.35-1.37 3-.708 3 1.065c0 .854-.78 1.747-1.545 2.418c-.596.523-.894.784-1.455.784c-.56 0-.859-.261-1.455-.784" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryFavouriteBoldDuotoneIcon {
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
  selector: 'svg[solarGalleryFavouriteLineDuotoneIcon],svg[solar-gallery-favourite-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="m16.06 8.57l.492-.566zM18 3.968l-.532.529a.75.75 0 0 0 1.064 0zm1.94 4.602l-.492-.566zM18 9.606v-.75zm-1.448-1.602c-.486-.422-.952-.895-1.292-1.374c-.347-.49-.51-.914-.51-1.255h-1.5c0 .788.358 1.518.786 2.122c.435.614.999 1.175 1.533 1.639zM14.75 5.375c0-.933.42-1.404.834-1.557c.426-.156 1.13-.08 1.884.679l1.064-1.058c-1.045-1.05-2.342-1.442-3.466-1.028c-1.136.418-1.816 1.555-1.816 2.964zm5.682 3.761c.533-.464 1.097-1.025 1.532-1.639c.428-.604.786-1.334.786-2.122h-1.5c0 .341-.163.765-.51 1.255c-.34.48-.806.952-1.292 1.374zm2.318-3.76c0-1.41-.68-2.547-1.816-2.965c-1.124-.414-2.42-.023-3.466 1.028l1.064 1.058c.755-.76 1.458-.835 1.884-.679c.414.153.834.624.834 1.557zm-7.181 3.76c.756.658 1.36 1.22 2.431 1.22v-1.5c-.424 0-.615-.129-1.448-.852zm3.879-1.132c-.833.723-1.024.852-1.448.852v1.5c1.071 0 1.675-.562 2.432-1.22z"></svg:path></svg:g>`,
})
export class SolarGalleryFavouriteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryFavouriteLinearIcon],svg[solar-gallery-favourite-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path><svg:path fill="currentColor" d="m16.06 8.57l.492-.566zM18 3.968l-.532.529a.75.75 0 0 0 1.064 0zm1.94 4.602l-.492-.566zM18 9.606v-.75zm-1.448-1.602c-.486-.422-.952-.895-1.292-1.374c-.347-.49-.51-.914-.51-1.255h-1.5c0 .788.358 1.518.786 2.122c.435.614.999 1.175 1.533 1.639zM14.75 5.375c0-.933.42-1.404.834-1.557c.426-.156 1.13-.08 1.884.679l1.064-1.058c-1.045-1.05-2.342-1.442-3.466-1.028c-1.136.418-1.816 1.555-1.816 2.964zm5.682 3.761c.533-.464 1.097-1.025 1.532-1.639c.428-.604.786-1.334.786-2.122h-1.5c0 .341-.163.765-.51 1.255c-.34.48-.806.952-1.292 1.374zm2.318-3.76c0-1.41-.68-2.547-1.816-2.965c-1.124-.414-2.42-.023-3.466 1.028l1.064 1.058c.755-.76 1.458-.835 1.884-.679c.414.153.834.624.834 1.557zm-7.181 3.76c.756.658 1.36 1.22 2.431 1.22v-1.5c-.424 0-.615-.129-1.448-.852zm3.879-1.132c-.833.723-1.024.852-1.448.852v1.5c1.071 0 1.675-.562 2.432-1.22z"></svg:path></svg:g>`,
})
export class SolarGalleryFavouriteLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryFavouriteOutlineIcon],svg[solar-gallery-favourite-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.548c0 2.094.013 3.777.19 5.095c.194 1.445.6 2.585 1.494 3.48c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386l-.022.152l-2.774-2.497a3.75 3.75 0 0 0-4.665-.28l-.298.21a1.25 1.25 0 0 1-1.602-.14l-4.29-4.29a3.05 3.05 0 0 0-4.165-.138l-.507.444c.005-1.793.03-3.154.175-4.233c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5m8.61 17.89a1 1 0 0 1-.112-.082l-3.223-2.902a2.25 2.25 0 0 0-2.8-.168l-.297.21a2.75 2.75 0 0 1-3.526-.306l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.75 12.84c.003 1.949.023 3.405.176 4.546c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069a3 3 0 0 0 .604-.864"></svg:path><svg:path d="M22.75 5.375c0-1.409-.68-2.546-1.816-2.964c-.94-.346-2-.13-2.934.566c-.933-.695-1.994-.912-2.934-.566c-1.136.418-1.816 1.555-1.816 2.964c0 .788.358 1.518.786 2.122c.435.614.999 1.175 1.533 1.639l.084.074c.718.625 1.316 1.146 2.347 1.146s1.629-.521 2.347-1.146l.084-.074c.534-.464 1.098-1.025 1.533-1.639c.428-.604.786-1.334.786-2.122m-2.334-1.557c-.426-.156-1.13-.08-1.884.679a.75.75 0 0 1-1.064 0c-.755-.76-1.458-.835-1.884-.679c-.414.153-.834.624-.834 1.557c0 .341.163.765.51 1.255c.34.48.806.952 1.292 1.374c.833.723 1.024.852 1.448.852s.615-.129 1.448-.852c.486-.422.952-.895 1.292-1.374c.347-.49.51-.914.51-1.255c0-.933-.42-1.404-.834-1.557"></svg:path></svg:g>`,
})
export class SolarGalleryFavouriteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryLineDuotoneIcon],svg[solar-gallery-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="16" cy="8" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGalleryLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryLinearIcon],svg[solar-gallery-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="16" cy="8" r="2"></svg:circle><svg:path stroke-linecap="round" d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path></svg:g>`,
})
export class SolarGalleryLinearIcon {
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
  selector: 'svg[solarGalleryMinimalisticBoldDuotoneIcon],svg[solar-gallery-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.504 13.177a1.55 1.55 0 0 0-2.183-.073l-.81.753a.75.75 0 0 1-1.021-1.1l.81-.752a3.05 3.05 0 0 1 4.296.143l2.647 2.81a.795.795 0 0 0 1.054.092a3.07 3.07 0 0 1 3.953.241l2.268 2.167a.75.75 0 0 1-1.036 1.084l-2.268-2.166a1.57 1.57 0 0 0-2.02-.123a2.295 2.295 0 0 1-3.043-.266zM18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class SolarGalleryMinimalisticBoldDuotoneIcon {
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
  selector: 'svg[solarGalleryMinimalisticLineDuotoneIcon],svg[solar-gallery-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="16" cy="8" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m5 13.307l.81-.753a2.3 2.3 0 0 1 3.24.108l2.647 2.81c.539.572 1.42.649 2.049.18a2.32 2.32 0 0 1 2.986.181L19 18" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGalleryMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryMinimalisticLinearIcon],svg[solar-gallery-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="16" cy="8" r="2"></svg:circle><svg:path stroke-linecap="round" d="m5 13.307l.81-.753a2.3 2.3 0 0 1 3.24.108l2.647 2.81c.539.572 1.42.649 2.049.18a2.32 2.32 0 0 1 2.986.181L19 18"></svg:path></svg:g>`,
})
export class SolarGalleryMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryMinimalisticOutlineIcon],svg[solar-gallery-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176M16 6.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M13.25 8a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m-4.746 5.177a1.55 1.55 0 0 0-2.183-.073l-.81.753a.75.75 0 0 1-1.021-1.1l.81-.752a3.05 3.05 0 0 1 4.296.143l2.647 2.81a.795.795 0 0 0 1.054.092a3.07 3.07 0 0 1 3.953.241l2.268 2.167a.75.75 0 0 1-1.036 1.084l-2.268-2.166a1.57 1.57 0 0 0-2.02-.123a2.295 2.295 0 0 1-3.043-.266z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryOutlineIcon],svg[solar-gallery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16 6.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M13.25 8a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0"></svg:path><svg:path d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19M3.995 20.005c-.57-.57-.897-1.34-1.069-2.619c-.153-1.141-.173-2.597-.176-4.546l1.495-1.308a1.55 1.55 0 0 1 2.117.07l4.29 4.29a2.75 2.75 0 0 0 3.526.306l.298-.21a2.25 2.25 0 0 1 2.799.168l3.223 2.902q.053.047.111.083a3 3 0 0 1-.604.864c-.57.57-1.34.897-2.619 1.069c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069m2.62-17.079c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.145 1.08-.17 2.44-.175 4.233l.507-.444a3.05 3.05 0 0 1 4.165.139l4.29 4.29a1.25 1.25 0 0 0 1.602.138l.298-.21a3.75 3.75 0 0 1 4.665.281l2.774 2.497l.022-.152c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"></svg:path></svg:g>`,
})
export class SolarGalleryOutlineIcon {
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
  selector: 'svg[solarGalleryRemoveBoldDuotoneIcon],svg[solar-gallery-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-1.47-7.03a.75.75 0 1 0-1.06 1.06l1.47 1.47l-1.47 1.47a.75.75 0 0 0 1.06 1.06l1.47-1.47l1.47 1.47a.75.75 0 1 0 1.06-1.06L18.56 6.5l1.47-1.47a.75.75 0 0 0-1.06-1.06L17.5 5.44z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryRemoveBoldDuotoneIcon {
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
  selector: 'svg[solarGalleryRemoveLineDuotoneIcon],svg[solar-gallery-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path d="m22 2l-6 6m0-6l6 6"></svg:path></svg:g>`,
})
export class SolarGalleryRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRemoveLinearIcon],svg[solar-gallery-remove-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5M22 2l-6 6m0-6l6 6"></svg:path></svg:g>`,
})
export class SolarGalleryRemoveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRemoveOutlineIcon],svg[solar-gallery-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.47 1.47a.75.75 0 0 1 1.06 0L19 3.94l2.47-2.47a.75.75 0 0 1 1.06 1.06L20.06 5l2.47 2.47a.75.75 0 1 1-1.06 1.06L19 6.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L17.94 5l-2.47-2.47a.75.75 0 0 1 0-1.06"></svg:path><svg:path d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386l-.022.152l-2.774-2.497a3.75 3.75 0 0 0-4.665-.28l-.298.21a1.25 1.25 0 0 1-1.602-.14l-4.29-4.29a3.05 3.05 0 0 0-4.165-.138l-.507.443c.005-1.792.03-3.153.175-4.232c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5M2.926 17.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069a3 3 0 0 0 .604-.865a1 1 0 0 1-.112-.083l-3.223-2.9a2.25 2.25 0 0 0-2.8-.17l-.297.21a2.75 2.75 0 0 1-3.526-.305l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.75 12.84c.003 1.948.023 3.405.176 4.546"></svg:path></svg:g>`,
})
export class SolarGalleryRemoveOutlineIcon {
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
  selector: 'svg[solarGalleryRoundBoldDuotoneIcon],svg[solar-gallery-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645s.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m21.249 13.28l-.222-.03c-2.844-.394-5.446 1.084-6.772 3.313c-1.71-4.325-6.227-7.275-11.274-6.55l-.226.032q-.006.893-.005 1.955q0 .793.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645c.076-.926.093-2.028.098-3.373" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class SolarGalleryRoundBoldDuotoneIcon {
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
  selector: 'svg[solarGalleryRoundLineDuotoneIcon],svg[solar-gallery-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="16" cy="8" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m2 10.154l.98-.141C9.96 9.01 15.925 15.03 14.858 22M22 13.385l-.973-.135c-2.844-.394-5.417 1.022-6.742 3.25" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGalleryRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRoundLinearIcon],svg[solar-gallery-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="16" cy="8" r="2"></svg:circle><svg:path stroke-linecap="round" d="m2 10.154l.98-.141C9.96 9.01 15.925 15.03 14.858 22"></svg:path><svg:path stroke-linecap="round" d="m22 13.385l-.973-.135c-2.844-.394-5.417 1.022-6.742 3.25"></svg:path></svg:g>`,
})
export class SolarGalleryRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryRoundOutlineIcon],svg[solar-gallery-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114l-.001 1.28a1 1 0 0 1 0 .099c-.007 1.666-.038 3.033-.189 4.15c-.194 1.445-.6 2.585-1.494 3.48c-.895.895-2.035 1.3-3.48 1.494c-.737.1-1.584.147-2.553.17a.75.75 0 0 1-.32.006c-.802.014-1.685.014-2.655.014h-.115c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114q-.001-.91.004-1.717a1 1 0 0 1 0-.156c.012-1.445.05-2.651.186-3.656c.194-1.445.6-2.585 1.494-3.48c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19M2.75 10.804V12c0 2.378 0 4.086.175 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176c.804 0 1.532 0 2.193-.007c.543-6.193-4.841-11.387-11.106-10.488zM15.7 21.208a18 18 0 0 0 1.686-.134c1.278-.172 2.049-.5 2.618-1.069c.57-.57.897-1.34 1.069-2.619c.12-.894.158-1.982.17-3.349l-.32-.044c-2.42-.335-4.62.802-5.84 2.643c.507 1.418.735 2.965.617 4.572m-1.314-6.134c-2.141-3.957-6.592-6.51-11.513-5.803l-.11.015c.02-1.056.063-1.93.162-2.672c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176s4.087.002 5.387.176c1.278.172 2.049.5 2.618 1.069c.57.57.897 1.34 1.069 2.619c.174 1.3.176 3.008.176 5.386v.524l-.12-.017c-2.69-.373-5.16.713-6.742 2.567M16 6.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M13.25 8a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarGalleryRoundOutlineIcon {
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
  selector: 'svg[solarGallerySendBoldDuotoneIcon],svg[solar-gallery-send-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.03-5.53l-1.5-1.5a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.22-.22V8.5a.75.75 0 0 0 1.5 0V6.31l.22.22a.75.75 0 1 0 1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarGallerySendBoldDuotoneIcon {
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
  selector: 'svg[solarGallerySendLineDuotoneIcon],svg[solar-gallery-send-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M17 2v9m0-9l3 3m-3-3l-3 3"></svg:path></svg:g>`,
})
export class SolarGallerySendLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGallerySendLinearIcon],svg[solar-gallery-send-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2"></svg:path><svg:path d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"></svg:path><svg:path stroke-linejoin="round" d="M17 2v9m0-9l3 3m-3-3l-3 3"></svg:path></svg:g>`,
})
export class SolarGallerySendLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGallerySendOutlineIcon],svg[solar-gallery-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17 11.75a.75.75 0 0 0 .75-.75V3.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V11c0 .414.336.75.75.75"></svg:path><svg:path d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386l-.022.152l-2.774-2.497a3.75 3.75 0 0 0-4.665-.28l-.298.21a1.25 1.25 0 0 1-1.602-.14l-4.29-4.29a3.05 3.05 0 0 0-4.165-.138l-.507.443c.005-1.792.03-3.153.175-4.232c.172-1.279.5-2.05 1.069-2.62c.57-.569 1.34-.896 2.619-1.068c1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5M2.926 17.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069a3 3 0 0 0 .604-.865a1 1 0 0 1-.112-.083l-3.223-2.9a2.25 2.25 0 0 0-2.8-.17l-.297.21a2.75 2.75 0 0 1-3.526-.305l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.75 12.84c.003 1.948.023 3.405.176 4.546"></svg:path></svg:g>`,
})
export class SolarGallerySendOutlineIcon {
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
  selector: 'svg[solarGalleryWideBoldDuotoneIcon],svg[solar-gallery-wide-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.512 10.077c0 .738-.625 1.337-1.396 1.337s-1.395-.599-1.395-1.337c0-.739.625-1.338 1.395-1.338s1.396.599 1.396 1.338"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.036 5.532c-1.06-.137-2.414-.137-4.123-.136h-3.826c-1.71 0-3.064 0-4.123.136c-1.09.14-1.974.437-2.67 1.104S2.29 8.149 2.142 9.195C2 10.21 2 11.508 2 13.147v.1c0 1.64 0 2.937.142 3.953c.147 1.046.456 1.892 1.152 2.559s1.58.963 2.67 1.104c1.06.136 2.414.136 4.123.136h3.826c1.71 0 3.064 0 4.123-.136c1.09-.14 1.974-.437 2.67-1.104s1.005-1.514 1.152-2.559C22 16.184 22 14.886 22 13.248v-.1c0-1.64 0-2.937-.142-3.953c-.147-1.046-.456-1.892-1.152-2.559s-1.58-.963-2.67-1.104M6.15 6.858c-.936.12-1.475.346-1.87.724c-.393.377-.629.894-.755 1.791c-.1.72-.123 1.619-.128 2.795l.47-.395c1.125-.942 2.819-.888 3.875.124l3.99 3.825a1.2 1.2 0 0 0 1.491.124l.278-.187a3.606 3.606 0 0 1 4.34.25l2.407 2.077c.098-.264.173-.579.227-.964c.128-.916.13-2.124.13-3.824s-.002-2.909-.13-3.825c-.126-.897-.362-1.414-.756-1.791c-.393-.378-.933-.604-1.869-.724c-.956-.124-2.216-.125-3.99-.125h-3.72c-1.774 0-3.034.001-3.99.125" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.087 2.61c-.86-.11-1.955-.11-3.32-.11h-3.09c-1.364 0-2.459 0-3.318.11c-.89.115-1.633.358-2.222.92a2.9 2.9 0 0 0-.724 1.12c.504-.23 1.074-.366 1.714-.45c1.085-.14 2.47-.14 4.22-.14h3.915c1.749 0 3.134 0 4.219.14c.559.073 1.064.186 1.52.366a2.9 2.9 0 0 0-.693-1.035c-.589-.563-1.331-.806-2.221-.92" opacity=".5"></svg:path>`,
})
export class SolarGalleryWideBoldDuotoneIcon {
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
  selector: 'svg[solarGalleryWideLineDuotoneIcon],svg[solar-gallery-wide-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 13.438C2 9.666 2 7.78 3.172 6.609S6.229 5.438 10 5.438h4c3.771 0 5.657 0 6.828 1.171S22 9.666 22 13.438c0 3.77 0 5.656-1.172 6.828S17.771 21.438 14 21.438h-4c-3.771 0-5.657 0-6.828-1.172S2 17.209 2 13.438Z"></svg:path><svg:path d="M3.988 6c.112-.931.347-1.574.837-2.063C5.765 3 7.279 3 10.307 3h3.211c3.028 0 4.541 0 5.482.937c.49.489.725 1.132.837 2.063" opacity=".5"></svg:path><svg:circle cx="17.5" cy="9.938" r="1.5" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m2 13.938l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.221l.299-.21a3 3 0 0 1 3.731.226l3.224 2.9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGalleryWideLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryWideLinearIcon],svg[solar-gallery-wide-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></svg:path><svg:path d="m4 7l-.012-1c.112-.931.347-1.574.837-2.063C5.765 3 7.279 3 10.307 3h3.211c3.028 0 4.541 0 5.482.937c.49.489.725 1.132.837 2.063v1"></svg:path><svg:circle cx="17.5" cy="10.5" r="1.5"></svg:circle><svg:path stroke-linecap="round" d="m2 14.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 20.5"></svg:path></svg:g>`,
})
export class SolarGalleryWideLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGalleryWideOutlineIcon],svg[solar-gallery-wide-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.141 2.374c-.924-.124-2.1-.124-3.568-.124h-3.321c-1.467 0-2.644 0-3.568.124c-.957.128-1.755.401-2.388 1.032c-.66.658-.931 1.495-1.053 2.504l-.006.05l.003.195q-.319.208-.599.486c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433v.545c.001 1.625.013 2.957.153 4c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87a3.7 3.7 0 0 0-.772-.593v-.093l-.005-.045c-.122-1.009-.392-1.846-1.053-2.504c-.633-.63-1.43-.904-2.388-1.032M2.751 14.84c.003 1.475.022 2.58.139 3.45c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c.763-.102 1.281-.273 1.672-.535l-2.687-2.419a2.25 2.25 0 0 0-2.8-.168l-.297.21a2.75 2.75 0 0 1-3.526-.306l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07zm15.527 2.201l2.588 2.33c.106-.296.186-.65.244-1.082c.138-1.027.14-2.382.14-4.289s-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 8.705 2.89 9.71c-.109.807-.133 1.816-.138 3.135l.506-.443a3.05 3.05 0 0 1 4.165.139l4.29 4.29a1.25 1.25 0 0 0 1.602.138l.298-.21a3.75 3.75 0 0 1 4.665.281M5.354 4.47c-.24.239-.412.551-.526 1.053q.328-.072.683-.119c1.14-.153 2.595-.153 4.433-.153h4.112c1.838 0 3.294 0 4.433.153q.256.034.5.081c-.115-.48-.285-.782-.518-1.015c-.308-.307-.737-.502-1.529-.608c-.813-.11-1.889-.111-3.424-.111h-3.211c-1.535 0-2.611.002-3.424.11c-.792.107-1.221.302-1.529.609"></svg:path><svg:path d="M17.5 8.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m0 1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path></svg:g>`,
})
export class SolarGalleryWideOutlineIcon {
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
  selector: 'svg[solarGameboyBoldDuotoneIcon],svg[solar-gameboy-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.318 20.536C5.636 22 7.758 22 12 22s6.364 0 7.682-1.465C21 19.072 21 16.714 21 12s0-7.071-1.318-8.536S16.242 2 12 2S5.636 2 4.318 3.464C3 4.93 3 7.286 3 12s0 7.071 1.318 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.25 14a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V17a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75zm7.083-.167a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0m0 3.334a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0m-2.5-.834a.833.833 0 1 0 0-1.666a.833.833 0 0 0 0 1.666M18 15.5a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0M7.051 7.112C7 7.302 7 7.535 7 8s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C8.304 10 8.536 10 9 10h6c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C17 8.696 17 8.464 17 8s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C15.697 6 15.464 6 15 6H9c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06"></svg:path>`,
})
export class SolarGameboyBoldDuotoneIcon {
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
  selector: 'svg[solarGameboyLineDuotoneIcon],svg[solar-gameboy-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4.318 20.536C5.636 22 7.758 22 12 22s6.364 0 7.682-1.465C21 19.072 21 16.714 21 12s0-7.071-1.318-8.536S16.242 2 12 2S5.636 2 4.318 3.464C3 4.93 3 7.286 3 12s0 7.071 1.318 8.535Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M7 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 14v3M7 15.5h3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.333 13.833a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0m0 3.334a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0M14.667 15.5a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0m3.333 0a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGameboyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGameboyLinearIcon],svg[solar-gameboy-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4.318 20.536C5.636 22 7.758 22 12 22s6.364 0 7.682-1.465C21 19.072 21 16.714 21 12s0-7.071-1.318-8.536S16.242 2 12 2S5.636 2 4.318 3.464C3 4.93 3 7.286 3 12s0 7.071 1.318 8.535Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M7 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 14v3M7 15.5h3"></svg:path><svg:path fill="currentColor" d="M16.333 13.833a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0m0 3.334a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0M14.667 15.5a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0m3.333 0a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0"></svg:path></svg:g>`,
})
export class SolarGameboyLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGameboyOutlineIcon],svg[solar-gameboy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.938 1.25h.124c2.069 0 3.706 0 4.987.191c1.323.198 2.373.614 3.19 1.522c.807.896 1.168 2.03 1.34 3.46c.171 1.407.171 3.212.171 5.525v.104c0 2.313 0 4.118-.17 5.525c-.173 1.43-.534 2.564-1.34 3.46c-.818.908-1.867 1.324-3.191 1.522c-1.281.191-2.918.191-4.986.191h-.126c-2.068 0-3.705 0-4.986-.191c-1.324-.198-2.373-.614-3.19-1.522c-.807-.896-1.168-2.03-1.34-3.46c-.171-1.407-.171-3.212-.171-5.525v-.104c0-2.313 0-4.118.17-5.524c.173-1.432.534-2.565 1.34-3.461c.818-.908 1.867-1.324 3.191-1.522c1.281-.191 2.918-.191 4.987-.191M7.173 2.925c-1.127.168-1.797.485-2.298 1.041c-.51.568-.81 1.346-.966 2.638C3.751 7.91 3.75 9.624 3.75 12s.001 4.09.16 5.396c.156 1.292.454 2.07.965 2.638c.501.556 1.171.873 2.298 1.041c1.157.173 2.682.175 4.827.175s3.67-.002 4.827-.175c1.127-.168 1.797-.485 2.297-1.041c.512-.568.81-1.346.967-2.638c.158-1.306.159-3.02.159-5.396s-.001-4.09-.16-5.396c-.156-1.292-.454-2.07-.965-2.638c-.501-.556-1.171-.873-2.298-1.041C15.67 2.752 14.145 2.75 12 2.75s-3.67.002-4.827.175M8.916 5.25h6.168c.38 0 .71 0 .998.077a2.25 2.25 0 0 1 1.591 1.59c.078.29.078.618.077 1v.167c0 .38 0 .71-.077.998a2.25 2.25 0 0 1-1.59 1.591c-.29.078-.618.078-1 .077H8.917c-.38 0-.71 0-.998-.077a2.25 2.25 0 0 1-1.591-1.59c-.078-.29-.077-.618-.077-1v-.167c0-.38 0-.71.077-.998a2.25 2.25 0 0 1 1.59-1.591c.29-.078.618-.077 1-.077M9 6.75c-.513 0-.623.006-.694.026a.75.75 0 0 0-.53.53c-.02.071-.026.18-.026.694c0 .513.006.623.026.694a.75.75 0 0 0 .53.53c.071.02.18.026.694.026h6c.513 0 .623-.006.694-.026a.75.75 0 0 0 .53-.53c.02-.071.026-.18.026-.694c0-.513-.006-.623-.026-.694a.75.75 0 0 0-.53-.53c-.071-.02-.18-.026-.694-.026zm-.5 6.5a.75.75 0 0 1 .75.75v.75H10a.75.75 0 0 1 0 1.5h-.75V17a.75.75 0 0 1-1.5 0v-.75H7a.75.75 0 0 1 0-1.5h.75V14a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.333 13.833a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0m0 3.334a.833.833 0 1 1-1.666 0a.833.833 0 0 1 1.666 0M14.667 15.5a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0m3.333 0a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0"></svg:path>`,
})
export class SolarGameboyOutlineIcon {
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
  selector: 'svg[solarGamepadBoldDuotoneIcon],svg[solar-gamepad-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.667 6.134l-.502-.355A4.24 4.24 0 0 0 7.715 5h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 20a2.74 2.74 0 0 0 1.53-.437c.41-.268.77-.616 1.13-.964c.444-.43.888-.86 1.424-1.138a4.1 4.1 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.536.279.98.709 1.425 1.139c.36.348.72.696 1.128.964c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 5.025 17.3 5 16.897 5h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V13a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V10a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class SolarGamepadBoldDuotoneIcon {
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
  selector: 'svg[solarGamepadChargeBoldDuotoneIcon],svg[solar-gamepad-charge-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 18.968A1 1 0 0 0 13.5 18v-.727a.38.38 0 0 0-.26-.36a3.92 3.92 0 0 0-2.48 0a.38.38 0 0 0-.26.36V18a1 1 0 0 0 .75.968v3.282a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="m10.165 4.78l.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16c2.383.846 4.021 3.935 3.903 10.943c-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316a2.74 2.74 0 0 1-1.53-.437c-.41-.268-.77-.616-1.13-.964c-.444-.43-.888-.86-1.424-1.138a4.1 4.1 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46c-.536.279-.98.709-1.425 1.139c-.36.348-.72.696-1.128.964a2.74 2.74 0 0 1-1.53.437a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16C6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class SolarGamepadChargeBoldDuotoneIcon {
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
  selector: 'svg[solarGamepadChargeLineDuotoneIcon],svg[solar-gamepad-charge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10.165 4.78l.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16c2.383.846 4.021 3.935 3.903 10.943c-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316a2.74 2.74 0 0 1-1.53-.437c-.915-.599-1.584-1.6-2.554-2.102a4.1 4.1 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46c-.97.504-1.64 1.504-2.553 2.103a2.74 2.74 0 0 1-1.53.437a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16C6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22v-3" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 16.5V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.5 9v3M6 10.5h3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGamepadChargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadChargeLinearIcon],svg[solar-gamepad-charge-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10.165 4.78l.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16c2.383.846 4.021 3.935 3.903 10.943c-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316a2.74 2.74 0 0 1-1.53-.437c-.915-.599-1.584-1.6-2.554-2.102a4.1 4.1 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46c-.97.504-1.64 1.504-2.553 2.103a2.74 2.74 0 0 1-1.53.437a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16C6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78ZM12 22v-3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 16.5V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5M7.5 9v3M6 10.5h3"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path></svg:g>`,
})
export class SolarGamepadChargeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadChargeOutlineIcon],svg[solar-gamepad-charge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.658 3.454c.506-.18 1.02-.204 1.445-.204h.612c1.033 0 2.04.32 2.883.917l.502.355a1.56 1.56 0 0 0 1.8 0l.502-.355a5 5 0 0 1 2.883-.917h.612c.426 0 .94.024 1.445.204c1.443.512 2.584 1.688 3.336 3.591c.744 1.884 1.126 4.52 1.066 8.07c-.013.75-.106 1.59-.395 2.346c-.291.767-.802 1.49-1.66 1.9a3.95 3.95 0 0 1-1.716.389a3.5 3.5 0 0 1-1.942-.56c-.472-.31-.885-.71-1.238-1.052l-.127-.122c-.404-.39-.745-.693-1.123-.89a3 3 0 0 0-.293-.134V18a1.75 1.75 0 0 1-1.5 1.732V22a.75.75 0 0 1-1.5 0v-2.268A1.75 1.75 0 0 1 9.75 18v-1.008q-.15.06-.293.135c-.378.196-.719.5-1.123.89l-.127.122c-.353.341-.766.742-1.238 1.052a3.5 3.5 0 0 1-1.942.559a3.95 3.95 0 0 1-1.716-.39c-.859-.41-1.369-1.132-1.66-1.899c-.289-.756-.382-1.596-.395-2.346c-.06-3.55.322-6.186 1.066-8.07c.752-1.903 1.893-3.08 3.336-3.591M11.25 16.75V18c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-1.25zm-4.147-12c-.384 0-.687.027-.943.117c-.94.334-1.809 1.125-2.443 2.73c-.641 1.623-1.02 4.036-.961 7.493c.011.662.095 1.308.296 1.837c.198.52.49.882.906 1.08a2.44 2.44 0 0 0 1.069.243c.485 0 .848-.136 1.12-.314c.345-.227.653-.523 1.022-.88l.124-.12c.401-.386.88-.834 1.473-1.14a4.86 4.86 0 0 1 2.235-.546H13c.778 0 1.544.187 2.235.545c.592.307 1.072.755 1.473 1.14l.124.12c.37.358.677.654 1.023.88c.271.179.634.315 1.12.315c.407 0 .762-.096 1.068-.242c.416-.2.708-.561.906-1.08c.201-.53.285-1.176.296-1.838c.058-3.457-.32-5.87-.961-7.494c-.634-1.604-1.503-2.395-2.443-2.729c-.256-.09-.56-.117-.943-.117h-.612c-.722 0-1.427.224-2.017.641l-.502.356a3.06 3.06 0 0 1-3.532 0l-.502-.356a3.5 3.5 0 0 0-2.017-.641zm.397 3.5a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class SolarGamepadChargeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadLineDuotoneIcon],svg[solar-gamepad-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10.165 4.78l.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16c2.383.846 4.021 3.935 3.903 10.943c-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316a2.74 2.74 0 0 1-1.53-.437c-.915-.599-1.584-1.6-2.554-2.102a4.1 4.1 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46c-.97.504-1.64 1.504-2.553 2.103a2.74 2.74 0 0 1-1.53.437a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16C6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.5 9v3M6 10.5h3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGamepadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadLinearIcon],svg[solar-gamepad-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10.165 4.78l.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16c2.383.846 4.021 3.935 3.903 10.943c-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316a2.74 2.74 0 0 1-1.53-.437c-.915-.599-1.584-1.6-2.554-2.102a4.1 4.1 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46c-.97.504-1.64 1.504-2.553 2.103a2.74 2.74 0 0 1-1.53.437a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16C6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78ZM7.5 9v3M6 10.5h3"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path></svg:g>`,
})
export class SolarGamepadLinearIcon {
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
  selector: 'svg[solarGamepadMinimalisticBoldDuotoneIcon],svg[solar-gamepad-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.172 8c2.539 0 3.808 0 4.784.614q.372.233.684.542c.82.81 1.109 2.047 1.687 4.52l1.022 4.373A2.858 2.858 0 0 1 16 19.957l-.12-.246a3.2 3.2 0 0 0-2.876-1.794h-2.005A3.2 3.2 0 0 0 8.12 19.71l-.12.246a2.858 2.858 0 0 1-5.35-1.908l1.022-4.374c.578-2.472.867-3.708 1.687-4.519a4 4 0 0 1 .684-.542C7.02 8 8.289 8 10.828 8z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.25 12a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V15a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75zM15 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 1.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M15.75 4a.75.75 0 0 0-1.5 0v1a.25.25 0 0 1-.25.25h-1A1.75 1.75 0 0 0 11.25 7v1h1.5V7a.25.25 0 0 1 .25-.25h1A1.75 1.75 0 0 0 15.75 5z"></svg:path>`,
})
export class SolarGamepadMinimalisticBoldDuotoneIcon {
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
  selector: 'svg[solarGamepadMinimalisticLineDuotoneIcon],svg[solar-gamepad-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.5 11v3M7 12.5h3" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m21.92 17.377l-1.085-4.517c-.613-2.553-.92-3.83-1.79-4.666q-.331-.319-.725-.56C17.284 7 15.937 7 13.243 7h-2.486c-2.694 0-4.041 0-5.077.634q-.394.241-.725.56c-.87.837-1.177 2.113-1.79 4.666L2.08 17.377c-.381 1.587.633 3.175 2.264 3.546c1.376.312 2.791-.342 3.413-1.576l.128-.255c.57-1.133 1.754-1.852 3.051-1.852h2.128c1.297 0 2.48.719 3.051 1.852l.128.255c.622 1.234 2.037 1.888 3.413 1.575c1.631-.37 2.645-1.958 2.264-3.545Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7V6a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGamepadMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadMinimalisticLinearIcon],svg[solar-gamepad-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.5 11v3M7 12.5h3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m21.92 17.377l-1.085-4.517c-.613-2.553-.92-3.83-1.79-4.666q-.331-.319-.725-.56C17.284 7 15.937 7 13.243 7h-2.486c-2.694 0-4.041 0-5.077.634q-.394.241-.725.56c-.87.837-1.177 2.113-1.79 4.666L2.08 17.377c-.381 1.587.633 3.175 2.264 3.546c1.376.312 2.791-.342 3.413-1.576l.128-.255c.57-1.133 1.754-1.852 3.051-1.852h2.128c1.297 0 2.48.719 3.051 1.852l.128.255c.622 1.234 2.037 1.888 3.413 1.575c1.631-.37 2.645-1.958 2.264-3.545Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7V6a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V3"></svg:path><svg:path fill="currentColor" d="M16 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarGamepadMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadMinimalisticOutlineIcon],svg[solar-gamepad-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 2.25a.75.75 0 0 1 .75.75v1A1.75 1.75 0 0 1 14 5.75h-1a.25.25 0 0 0-.25.25v.25h.533c1.313 0 2.354 0 3.194.083c.863.085 1.583.262 2.234.66q.465.285.854.66c.55.53.895 1.178 1.179 1.981c.275.78.512 1.768.81 3.01l1.095 4.557c.483 2.011-.805 3.994-2.827 4.453c-1.702.386-3.468-.419-4.248-1.97l-.129-.255a2.66 2.66 0 0 0-2.381-1.44h-2.128c-1.021 0-1.942.567-2.381 1.44l-.128.255c-.781 1.551-2.547 2.356-4.249 1.97c-2.022-.46-3.31-2.442-2.827-4.453l1.095-4.556c.298-1.242.536-2.231.81-3.01c.284-.804.628-1.452 1.179-1.982q.391-.375.854-.66c.651-.398 1.372-.575 2.234-.66c.84-.083 1.88-.083 3.194-.083h.533V6c0-.966.784-1.75 1.75-1.75h1a.25.25 0 0 0 .25-.25V3a.75.75 0 0 1 .75-.75m-4.243 5.5c-1.362 0-2.329 0-3.087.076c-.743.073-1.214.212-1.598.447a3.5 3.5 0 0 0-.597.461c-.32.308-.563.717-.804 1.4c-.246.697-.466 1.61-.777 2.902L2.81 17.552c-.28 1.164.46 2.357 1.7 2.64c1.05.238 2.115-.265 2.577-1.183l.128-.254c.701-1.394 2.149-2.265 3.721-2.265h2.128c1.572 0 3.02.871 3.721 2.265l.128.254c.462.918 1.527 1.42 2.577 1.182c1.241-.282 1.98-1.475 1.7-2.64l-1.084-4.515c-.31-1.292-.53-2.205-.777-2.903c-.24-.682-.484-1.091-.804-1.399a3.5 3.5 0 0 0-.597-.46c-.384-.236-.855-.375-1.598-.448c-.758-.075-1.725-.076-3.087-.076zM8.5 10.25a.75.75 0 0 1 .75.75v.75H10a.75.75 0 0 1 0 1.5h-.75V14a.75.75 0 0 1-1.5 0v-.75H7a.75.75 0 0 1 0-1.5h.75V11a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarGamepadMinimalisticOutlineIcon {
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
  selector: 'svg[solarGamepadNoChargeBoldDuotoneIcon],svg[solar-gamepad-no-charge-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.165 4.78l.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16c2.383.846 4.021 3.935 3.903 10.943c-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316a2.74 2.74 0 0 1-1.53-.437c-.41-.268-.77-.616-1.13-.964c-.444-.43-.888-.86-1.424-1.138a4.1 4.1 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46c-.536.279-.98.709-1.425 1.139c-.36.348-.72.696-1.128.964a2.74 2.74 0 0 1-1.53.437a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16C6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.47 17.47a.75.75 0 0 1 1.06 0l.47.47l.47-.47a.75.75 0 1 1 1.06 1.06l-.47.47l.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47l-.47.47a.75.75 0 1 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class SolarGamepadNoChargeBoldDuotoneIcon {
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
  selector: 'svg[solarGamepadNoChargeLineDuotoneIcon],svg[solar-gamepad-no-charge-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.404 17.247c.184.584.954 1.753 2.57 1.753a3.2 3.2 0 0 0 1.392-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 4.025 17.3 4 16.897 4h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0l-.502-.355A4.24 4.24 0 0 0 7.715 4h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 19c1.615 0 2.385-1.169 2.569-1.753M14 17l-4 4m0-4l4 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7.5 9v3M6 10.5h3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGamepadNoChargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadNoChargeLinearIcon],svg[solar-gamepad-no-charge-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16.404 17.247c.184.584.954 1.753 2.57 1.753a3.2 3.2 0 0 0 1.392-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 4.025 17.3 4 16.897 4h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0l-.502-.355A4.24 4.24 0 0 0 7.715 4h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 19c1.615 0 2.385-1.169 2.569-1.753M14 17l-4 4m0-4l4 4M7.5 9v3M6 10.5h3"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path></svg:g>`,
})
export class SolarGamepadNoChargeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadNoChargeOutlineIcon],svg[solar-gamepad-no-charge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.658 3.454c.506-.18 1.02-.204 1.445-.204h.612c1.033 0 2.04.32 2.883.917l.502.355a1.56 1.56 0 0 0 1.8 0l.502-.355a5 5 0 0 1 2.883-.917h.612c.426 0 .94.024 1.445.204c1.443.512 2.584 1.688 3.336 3.591c.744 1.884 1.126 4.52 1.066 8.07c-.013.75-.106 1.59-.395 2.346c-.291.767-.802 1.49-1.66 1.9a3.95 3.95 0 0 1-1.716.389a3.4 3.4 0 0 1-3.284-2.279a.75.75 0 1 1 1.43-.449c.12.379.667 1.228 1.854 1.228c.408 0 .763-.096 1.07-.242c.415-.2.707-.561.905-1.08c.201-.53.285-1.176.296-1.838c.058-3.457-.32-5.87-.961-7.494c-.634-1.604-1.503-2.395-2.443-2.729c-.256-.09-.56-.117-.943-.117h-.612c-.722 0-1.427.224-2.017.641l-.502.356a3.06 3.06 0 0 1-3.532 0l-.502-.356a3.5 3.5 0 0 0-2.017-.641h-.612c-.384 0-.687.027-.943.117c-.94.334-1.809 1.125-2.443 2.73c-.641 1.623-1.02 4.036-.961 7.493c.011.662.095 1.308.296 1.837c.198.52.49.882.906 1.08a2.44 2.44 0 0 0 1.069.243c1.187 0 1.734-.85 1.853-1.228a.75.75 0 0 1 1.431.45a3.4 3.4 0 0 1-3.284 2.278a3.95 3.95 0 0 1-1.716-.39c-.859-.41-1.369-1.132-1.66-1.899c-.289-.756-.382-1.596-.395-2.346c-.06-3.55.322-6.186 1.066-8.07c.752-1.903 1.893-3.08 3.336-3.591M7.5 8.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75m1.97 9.28a.75.75 0 1 1 1.06-1.06L12 17.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L13.06 19l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 20.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L10.94 19z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class SolarGamepadNoChargeOutlineIcon {
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
  selector: 'svg[solarGamepadOldBoldDuotoneIcon],svg[solar-gamepad-old-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 6H14c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.75 12a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05c.11 0 .2.09.2.2V16a.75.75 0 0 0 1.5 0v-1.05c0-.11.09-.2.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2zM15 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0M15.75 2a.75.75 0 0 0-1.5 0v1a.25.25 0 0 1-.25.25h-1A1.75 1.75 0 0 0 11.25 5v1h1.5V5a.25.25 0 0 1 .25-.25h1A1.75 1.75 0 0 0 15.75 3z"></svg:path>`,
})
export class SolarGamepadOldBoldDuotoneIcon {
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
  selector: 'svg[solarGamepadOldLineDuotoneIcon],svg[solar-gamepad-old-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#solarGamepadOldLineDuotone0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10v4m-2-2h4" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16 10.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 4V3a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V0" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 4.545C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 7.8 22 9.2 22 12s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12Z"></svg:path></svg:g><svg:defs><svg:clippath id="solarGamepadOldLineDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarGamepadOldLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadOldLinearIcon],svg[solar-gamepad-old-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#solarGamepadOldLinear0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10v4m-2-2h4"></svg:path><svg:path fill="currentColor" d="M16 10.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 4V3a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V0"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 4.545C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 7.8 22 9.2 22 12s0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12Z"></svg:path></svg:g><svg:defs><svg:clippath id="solarGamepadOldLinear0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarGamepadOldLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadOldOutlineIcon],svg[solar-gamepad-old-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#solarGamepadOldOutline0)"><svg:path d="M16 10.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M15-.75a.75.75 0 0 1 .75.75v1A1.75 1.75 0 0 1 14 2.75h-1a.25.25 0 0 0-.25.25v.25h1.284c1.371 0 2.447 0 3.311.07c.88.073 1.607.221 2.265.557a5.75 5.75 0 0 1 2.513 2.513c.336.658.485 1.385.556 2.265c.071.864.071 1.94.071 3.311v.068c0 1.371 0 2.447-.07 3.311c-.072.88-.221 1.607-.557 2.265a5.75 5.75 0 0 1-2.513 2.513c-.658.336-1.385.485-2.265.556c-.864.071-1.94.071-3.311.071H9.966c-1.371 0-2.447 0-3.311-.07c-.88-.072-1.607-.221-2.265-.557a5.75 5.75 0 0 1-2.513-2.513c-.336-.658-.484-1.385-.556-2.265c-.071-.864-.071-1.94-.071-3.311v-.068c0-1.371 0-2.447.07-3.311c.073-.88.221-1.607.557-2.265A5.75 5.75 0 0 1 4.39 3.877c.658-.336 1.385-.484 2.265-.556c.864-.071 1.94-.071 3.311-.071h1.284V3c0-.966.784-1.75 1.75-1.75h1a.25.25 0 0 0 .25-.25V0A.75.75 0 0 1 15-.75m-5 5.5c-1.413 0-2.427 0-3.223.066c-.787.064-1.295.188-1.706.397a4.25 4.25 0 0 0-1.858 1.858c-.21.411-.333.919-.397 1.706c-.065.796-.066 1.81-.066 3.223s0 2.427.066 3.223c.064.787.188 1.295.397 1.707a4.25 4.25 0 0 0 1.858 1.857c.411.21.919.333 1.706.397c.796.065 1.81.066 3.223.066h4c1.412 0 2.427 0 3.223-.066c.787-.064 1.295-.188 1.707-.397a4.25 4.25 0 0 0 1.857-1.857c.21-.412.333-.92.397-1.707c.065-.796.066-1.81.066-3.223s0-2.427-.066-3.223c-.064-.787-.188-1.295-.397-1.706a4.25 4.25 0 0 0-1.857-1.858c-.412-.21-.92-.333-1.707-.397c-.796-.065-1.81-.066-3.223-.066zm-2 4.5a.75.75 0 0 1 .75.75v1.25H10a.75.75 0 0 1 0 1.5H8.75V14a.75.75 0 0 1-1.5 0v-1.25H6a.75.75 0 0 1 0-1.5h1.25V10A.75.75 0 0 1 8 9.25" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="solarGamepadOldOutline0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarGamepadOldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGamepadOutlineIcon],svg[solar-gamepad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.658 3.454c.506-.18 1.02-.204 1.445-.204h.612c1.033 0 2.04.32 2.883.917l.502.355a1.56 1.56 0 0 0 1.8 0l.502-.355a5 5 0 0 1 2.883-.917h.612c.426 0 .94.024 1.445.204c1.443.512 2.584 1.688 3.336 3.591c.744 1.884 1.126 4.52 1.066 8.07c-.013.75-.106 1.59-.395 2.346c-.291.767-.802 1.49-1.66 1.9a3.95 3.95 0 0 1-1.716.389a3.5 3.5 0 0 1-1.942-.56c-.472-.31-.885-.71-1.238-1.052l-.127-.122c-.404-.39-.745-.693-1.123-.89A3.36 3.36 0 0 0 13 16.75h-2a3.36 3.36 0 0 0-1.544.377c-.378.196-.719.5-1.123.89l-.127.122c-.353.341-.766.742-1.238 1.052a3.5 3.5 0 0 1-1.942.559a3.95 3.95 0 0 1-1.716-.39c-.859-.41-1.369-1.132-1.66-1.899c-.289-.756-.382-1.596-.395-2.346c-.06-3.55.322-6.186 1.066-8.07c.752-1.903 1.893-3.08 3.336-3.591M7.103 4.75c-.384 0-.687.027-.943.117c-.94.334-1.809 1.125-2.443 2.73c-.641 1.623-1.02 4.036-.961 7.493c.011.662.095 1.308.296 1.837c.198.52.49.882.906 1.08a2.44 2.44 0 0 0 1.069.243c.485 0 .848-.136 1.12-.314c.345-.227.653-.523 1.022-.88l.124-.12c.401-.386.88-.834 1.473-1.14a4.86 4.86 0 0 1 2.235-.546H13c.778 0 1.544.187 2.235.545c.592.307 1.072.755 1.473 1.14l.124.12c.37.358.677.654 1.023.88c.271.179.634.315 1.12.315c.407 0 .762-.096 1.068-.242c.416-.2.708-.561.906-1.08c.201-.53.285-1.176.296-1.838c.058-3.457-.32-5.87-.961-7.494c-.634-1.604-1.503-2.395-2.443-2.729c-.256-.09-.56-.117-.943-.117h-.612c-.722 0-1.427.224-2.017.641l-.502.356a3.06 3.06 0 0 1-3.532 0l-.502-.356a3.5 3.5 0 0 0-2.017-.641zm.397 3.5a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0 3a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class SolarGamepadOutlineIcon {
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
  selector: 'svg[solarGarageBoldDuotoneIcon],svg[solar-garage-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.007 3.772l-6 5.333A3 3 0 0 0 3 11.347v9.903H2a.75.75 0 1 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1v-9.903a3 3 0 0 0-1.007-2.242l-6-5.333a3 3 0 0 0-3.986 0M10 8.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm4.052 3c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v5.302H5.25v-5.302c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.052 11.25H9.948c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.344-.08 2.242v5.302h13.5v-5.302c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 14.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarGarageBoldDuotoneIcon {
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
  selector: 'svg[solarGarageLineDuotoneIcon],svg[solar-garage-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2m1 0V11.347a3 3 0 0 1 1.007-2.242l6-5.333a3 3 0 0 1 3.986 0l6 5.333A3 3 0 0 1 21 11.347V22M10 9h4"></svg:path><svg:path stroke-linecap="round" d="M9 15.5h6m-6 3h6" opacity=".5"></svg:path><svg:path d="M18 22v-6c0-1.886 0-2.828-.586-3.414S15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586S6 14.114 6 16v6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGarageLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGarageLinearIcon],svg[solar-garage-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2m1 0V11.347a3 3 0 0 1 1.007-2.242l6-5.333a3 3 0 0 1 3.986 0l6 5.333A3 3 0 0 1 21 11.347V22M10 9h4m-5 6.5h6m-6 3h6"></svg:path><svg:path d="M18 22v-6c0-1.886 0-2.828-.586-3.414S15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586S6 14.114 6 16v6"></svg:path></svg:g>`,
})
export class SolarGarageLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGarageOutlineIcon],svg[solar-garage-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.495 4.332a2.25 2.25 0 0 0-2.99 0l-6 5.334a2.25 2.25 0 0 0-.755 1.681v9.903h1.5v-5.302c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08h4.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v5.302h1.5v-9.903a2.25 2.25 0 0 0-.755-1.681zM21.75 21.25v-9.903a3.75 3.75 0 0 0-1.259-2.803l-6-5.333a3.75 3.75 0 0 0-4.982 0l-6 5.333a3.75 3.75 0 0 0-1.259 2.803v9.903H2a.75.75 0 1 0 0 1.5h20a.75.75 0 0 0 0-1.5zm-4.5 0V16c0-.964-.002-1.611-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.484-.066 1.131-.066 2.095v5.25zM9.25 9a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 9m-1 6.5a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarGarageOutlineIcon {
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
  selector: 'svg[solarGasStationBoldDuotoneIcon],svg[solar-gas-station-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 2h-1c-2.828 0-4.243 0-5.121.879C2.75 3.757 2.75 5.172 2.75 8v13.25h13V8c0-2.828 0-4.243-.879-5.121C13.993 2 12.578 2 9.75 2" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2.75 21.25h-1a.75.75 0 0 0 0 1.5h15.123a.75.75 0 0 0 0-1.5zM8 6h3c.943 0 1.414 0 1.707.293S13 7.057 13 8s0 1.414-.293 1.707S11.943 10 11 10H8c-.943 0-1.414 0-1.707-.293S6 8.943 6 8s0-1.414.293-1.707S7.057 6 8 6M7 16.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm8.75 1.5h1.571c.375 0 .679.304.679.679v.071a2.25 2.25 0 1 0 4.5 0V7.602c0-.157 0-.265-.006-.37a3.75 3.75 0 0 0-1.24-2.582a9 9 0 0 0-.286-.236l-1.25-1a.75.75 0 1 0-.936 1.172l1.233.986c.144.116.194.156.237.195c.443.397.711.954.745 1.549a6 6 0 0 1 .003.306V8h-.75a1.5 1.5 0 0 0-1.5 1.5v2.419a1.5 1.5 0 0 0 1.026 1.423L21 13.75v4.75a.75.75 0 0 1-1.5 0v-.071a2.18 2.18 0 0 0-2.179-2.179H15.75z"></svg:path>`,
})
export class SolarGasStationBoldDuotoneIcon {
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
  selector: 'svg[solarGasStationLineDuotoneIcon],svg[solar-gas-station-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M16 22V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v14"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M11 6H8c-.943 0-1.414 0-1.707.293S6 7.057 6 8s0 1.414.293 1.707S7.057 10 8 10h3c.943 0 1.414 0 1.707-.293S13 8.943 13 8s0-1.414-.293-1.707S11.943 6 11 6Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 17h5" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 22H2"></svg:path><svg:path fill="currentColor" d="M19.969 3.414a.75.75 0 1 0-.937 1.172zm.764 1.572l.469-.585zM16 16.25a.75.75 0 0 0 0 1.5zm5.003-11.042l-.501.559zm.992 2.066l.75-.042zM22 8.75a.75.75 0 0 0 0-1.5zm-1.974 4.592l-.238.711zm1.737 1.37a.75.75 0 0 0 .474-1.423zM19.03 4.586l1.234.986l.937-1.171l-1.234-.987zm2.219 3.036V18.5h1.5V7.622zM19.75 18.5v-.071h-1.5v.071zm-2.179-2.25H16v1.5h1.571zm2.179 2.179a2.18 2.18 0 0 0-2.179-2.179v1.5c.375 0 .679.304.679.679zm.75.821a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.985-12.928c.144.116.194.156.237.195l1.001-1.117c-.082-.074-.17-.144-.301-.25zm2.485 2.05c0-.168 0-.28-.006-.39l-1.497.084a6 6 0 0 1 .003.306zm-2.248-1.855c.443.397.711.954.745 1.549l1.497-.084a3.75 3.75 0 0 0-1.24-2.582zM22 7.25h-1.5v1.5H22zM18.25 9.5v2.419h1.5V9.5zm1.538 4.553l1.975.658l.474-1.422l-1.974-.659zM18.25 11.92c0 .968.62 1.828 1.538 2.134l.475-1.423a.75.75 0 0 1-.513-.711zm2.25-4.67a2.25 2.25 0 0 0-2.25 2.25h1.5a.75.75 0 0 1 .75-.75z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGasStationLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGasStationLinearIcon],svg[solar-gas-station-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 22V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v14"></svg:path><svg:path d="M11 6H8c-.943 0-1.414 0-1.707.293S6 7.057 6 8s0 1.414.293 1.707S7.057 10 8 10h3c.943 0 1.414 0 1.707-.293S13 8.943 13 8s0-1.414-.293-1.707S11.943 6 11 6Z"></svg:path><svg:path stroke-linecap="round" d="M7 17h5m5 5H2M19.5 4l1.233.986c.138.11.207.166.27.222a3 3 0 0 1 .992 2.066c.005.084.005.172.005.348V18.5a1.5 1.5 0 0 1-3 0v-.071c0-.79-.64-1.429-1.429-1.429H16"></svg:path><svg:path stroke-linecap="round" d="M22 8h-1.5A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423L22 14"></svg:path></svg:g>`,
})
export class SolarGasStationLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGasStationOutlineIcon],svg[solar-gas-station-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.945 1.25h1.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v8.305h.821c1.204 0 2.179.975 2.179 2.179v.071a.75.75 0 0 0 1.5 0v-3.96l-1.462-.487a2.25 2.25 0 0 1-1.538-2.134V9.5a2.25 2.25 0 0 1 2.25-2.25h.742a2.25 2.25 0 0 0-.74-1.483a6 6 0 0 0-.237-.195l-1.233-.986a.75.75 0 1 1 .936-1.172l1.25 1c.122.098.206.165.285.236a3.75 3.75 0 0 1 1.241 2.582c.006.105.006.213.006.37V18.5a2.25 2.25 0 0 1-4.5 0v-.071a.68.68 0 0 0-.679-.679h-.821v3.5H17a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25V7.945c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117m-5.195 20h11.5V8c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H9c-1.435 0-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4C3.752 5.562 3.75 6.564 3.75 8zm17.5-8.29V8.75h-.75a.75.75 0 0 0-.75.75v2.419c0 .323.207.61.513.711zM7.955 5.25h3.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04s-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-3.09c-.433 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47s-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043M6.826 6.822l-.003.001l-.001.003l-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997s.002.787.03.997a.7.7 0 0 0 .042.177l.001.003l.003.001l.01.005c.022.009.07.024.167.037c.21.028.504.03.997.03h3c.493 0 .787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001l.001-.003l.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003l-.003-.001l-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03H8c-.493 0-.787.002-.997.03a.7.7 0 0 0-.177.042M6.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarGasStationOutlineIcon {
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
  selector: 'svg[solarGhostBoldDuotoneIcon],svg[solar-ghost-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19.206V12c0-5.523-4.477-10-10-10S2 6.477 2 12v7.206a1.727 1.727 0 0 0 2.5 1.544a2.89 2.89 0 0 1 2.896.18a2.89 2.89 0 0 0 3.208 0l.353-.234a1.88 1.88 0 0 1 2.086 0l.353.235a2.89 2.89 0 0 0 3.208 0a2.89 2.89 0 0 1 2.897-.18A1.727 1.727 0 0 0 22 19.206" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5m-5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"></svg:path>`,
})
export class SolarGhostBoldDuotoneIcon {
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
  selector: 'svg[solarGhostLineDuotoneIcon],svg[solar-ghost-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186a2.82 2.82 0 0 0 3.208 0l.353-.242a1.84 1.84 0 0 1 2.086 0l.353.242a2.82 2.82 0 0 0 3.208 0a2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGhostLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostLinearIcon],svg[solar-ghost-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:ellipse cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186a2.82 2.82 0 0 0 3.208 0l.353-.242a1.84 1.84 0 0 1 2.086 0l.353.242a2.82 2.82 0 0 0 3.208 0a2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z"></svg:path></svg:g>`,
})
export class SolarGhostLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostOutlineIcon],svg[solar-ghost-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.042 1.25 1.25 6.219 1.25 12.3v7.423c0 1.847 1.912 3.123 3.593 2.258a2.07 2.07 0 0 1 2.129.137a3.57 3.57 0 0 0 4.056 0l.353-.242a1.085 1.085 0 0 1 1.238 0l.353.242a3.57 3.57 0 0 0 4.056 0a2.07 2.07 0 0 1 2.13-.137c1.68.865 3.592-.412 3.592-2.258v-7.422C22.75 6.219 17.958 1.25 12 1.25M2.75 12.3c0-5.295 4.162-9.55 9.25-9.55s9.25 4.255 9.25 9.55v7.423c0 .798-.79 1.242-1.406.924a3.57 3.57 0 0 0-3.665.235a2.07 2.07 0 0 1-2.358 0l-.353-.243a2.585 2.585 0 0 0-2.936 0l-.353.242a2.07 2.07 0 0 1-2.358 0a3.57 3.57 0 0 0-3.665-.234c-.617.318-1.406-.126-1.406-.924z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGhostOutlineIcon {
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
  selector: 'svg[solarGhostSmileBoldDuotoneIcon],svg[solar-ghost-smile-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v7.206a1.727 1.727 0 0 1-2.5 1.544a2.89 2.89 0 0 0-2.896.18a2.89 2.89 0 0 1-3.208 0l-.353-.234a1.88 1.88 0 0 0-2.086 0l-.353.235a2.89 2.89 0 0 1-3.208 0a2.89 2.89 0 0 0-2.897-.18A1.727 1.727 0 0 1 2 19.205V12C2 6.477 6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.447 14.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 16.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 15.25a4.27 4.27 0 0 1-2.553-.852M16 9.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 11c.552 0 1-.672 1-1.5S9.552 8 9 8s-1 .672-1 1.5s.448 1.5 1 1.5"></svg:path>`,
})
export class SolarGhostSmileBoldDuotoneIcon {
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
  selector: 'svg[solarGhostSmileLineDuotoneIcon],svg[solar-ghost-smile-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="9.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="9.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186a2.82 2.82 0 0 0 3.208 0l.353-.242a1.84 1.84 0 0 1 2.086 0l.353.242a2.82 2.82 0 0 0 3.208 0a2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGhostSmileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostSmileLinearIcon],svg[solar-ghost-smile-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path><svg:ellipse cx="15" cy="9.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:ellipse cx="9" cy="9.5" fill="currentColor" rx="1" ry="1.5"></svg:ellipse><svg:path stroke="currentColor" stroke-width="1.5" d="M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 0 1 2.896.186a2.82 2.82 0 0 0 3.208 0l.353-.242a1.84 1.84 0 0 1 2.086 0l.353.242a2.82 2.82 0 0 0 3.208 0a2.82 2.82 0 0 1 2.897-.186c1.148.591 2.499-.269 2.499-1.591Z"></svg:path></svg:g>`,
})
export class SolarGhostSmileLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGhostSmileOutlineIcon],svg[solar-ghost-smile-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 8 9 8s1 .672 1 1.5m5 1.5c.552 0 1-.672 1-1.5S15.552 8 15 8s-1 .672-1 1.5s.448 1.5 1 1.5m-5.553 3.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 16.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 15.25a4.27 4.27 0 0 1-2.553-.852"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.042 1.25 1.25 6.219 1.25 12.3v7.423c0 1.847 1.912 3.123 3.593 2.258a2.07 2.07 0 0 1 2.129.137a3.57 3.57 0 0 0 4.056 0l.353-.242a1.085 1.085 0 0 1 1.238 0l.353.242a3.57 3.57 0 0 0 4.056 0a2.07 2.07 0 0 1 2.13-.137c1.68.865 3.592-.412 3.592-2.258v-7.422C22.75 6.219 17.958 1.25 12 1.25M2.75 12.3c0-5.295 4.162-9.55 9.25-9.55s9.25 4.255 9.25 9.55v7.423c0 .798-.79 1.242-1.406.924a3.57 3.57 0 0 0-3.665.235a2.07 2.07 0 0 1-2.358 0l-.353-.243a2.585 2.585 0 0 0-2.936 0l-.353.242a2.07 2.07 0 0 1-2.358 0a3.57 3.57 0 0 0-3.665-.234c-.617.318-1.406-.126-1.406-.924z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGhostSmileOutlineIcon {
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
  selector: 'svg[solarGiftBoldDuotoneIcon],svg[solar-gift-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.914 11.25H2v1.5h8.163A3.25 3.25 0 0 1 7 15.25a.75.75 0 0 0 0 1.5a4.75 4.75 0 0 0 4.25-2.626V22h1.5v-7.876A4.75 4.75 0 0 0 17 16.75a.75.75 0 0 0 0-1.5a3.25 3.25 0 0 1-3.163-2.5H22v-1.5h-4.913c.35-.438.613-.955.756-1.527c.538-2.153-1.413-4.103-3.565-3.565a4 4 0 0 0-1.528.756V2h-1.5v4.914a4 4 0 0 0-1.527-.756C7.57 5.62 5.62 7.57 6.158 9.723c.143.572.405 1.089.756 1.527m4.336 0H9.997a2.5 2.5 0 0 1-2.384-1.891A1.44 1.44 0 0 1 9.36 7.613a2.5 2.5 0 0 1 1.891 2.384zm2.753 0H12.75v-1.245a2.5 2.5 0 0 1 1.891-2.392a1.44 1.44 0 0 1 1.746 1.746a2.5 2.5 0 0 1-2.384 1.891" clip-rule="evenodd"></svg:path>`,
})
export class SolarGiftBoldDuotoneIcon {
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
  selector: 'svg[solarGiftLineDuotoneIcon],svg[solar-gift-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12H2M12 2v20" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M13 12a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4"></svg:path><svg:path d="M12 10.035a3.25 3.25 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.25 3.25 0 0 1-3.15 2.46H12zm0 0a3.25 3.25 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.25 3.25 0 0 0 3.15 2.46H12z"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarGiftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGiftLinearIcon],svg[solar-gift-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 12H2M12 2v20m1-10a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4"></svg:path><svg:path d="M12 10.035a3.25 3.25 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.25 3.25 0 0 1-3.15 2.46H12zm0 0a3.25 3.25 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.25 3.25 0 0 0 3.15 2.46H12z"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarGiftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGiftOutlineIcon],svg[solar-gift-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zm-.693 1.5c-1.994.002-3.477.02-4.636.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.155 1.159-.174 2.642-.176 4.636h4.164a4 4 0 0 1-.756-1.527C5.619 7.57 7.57 5.619 9.723 6.158a4 4 0 0 1 1.527.756zm-8.5 10c.002 1.994.02 3.477.176 4.636c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.159.155 2.642.174 4.636.176v-7.126A4.75 4.75 0 0 1 7 16.75a.75.75 0 0 1 0-1.5a3.25 3.25 0 0 0 3.163-2.5zm10 8.5c1.994-.002 3.477-.02 4.636-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.155-1.159.174-2.642.176-4.636h-7.413A3.25 3.25 0 0 0 17 15.25a.75.75 0 0 1 0 1.5a4.75 4.75 0 0 1-4.25-2.626zm8.5-10h-4.164a4 4 0 0 0 .757-1.527c.538-2.153-1.413-4.104-3.565-3.565a4 4 0 0 0-1.528.756V2.75c1.994.002 3.477.02 4.636.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.155 1.159.174 2.642.176 4.636m-8.5 0v-1.22a2.5 2.5 0 0 1 1.891-2.417a1.44 1.44 0 0 1 1.746 1.746a2.5 2.5 0 0 1-2.415 1.891zm-1.5-1.223a2.5 2.5 0 0 0-1.891-2.414a1.44 1.44 0 0 0-1.746 1.746a2.5 2.5 0 0 0 2.415 1.891h1.222z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGiftOutlineIcon {
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
  selector: 'svg[solarGlassesBoldDuotoneIcon],svg[solar-glasses-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.712 3.763a.75.75 0 0 1-.475.949l-.518.172c-.617.206-1.024.343-1.326.481c-.286.13-.414.235-.5.343c-.085.107-.157.256-.219.564c-.065.326-.105.753-.164 1.401l-.367 4.037l-.048.532a4.75 4.75 0 0 1 7.585 2.942a4.8 4.8 0 0 1 1.32-.187v1.5c-.37 0-.739.063-1.092.19l-.22.077A4.75 4.75 0 0 1 6 20.75c-2.62 0-4.745-2.14-4.75-4.758q0-.421.072-.823L2.02 7.5c.054-.6.1-1.107.183-1.521c.089-.441.23-.842.515-1.201c.284-.36.642-.59 1.051-.776c.384-.176.868-.337 1.439-.527l.555-.185a.75.75 0 0 1 .949.474" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.905 12.242a4.75 4.75 0 0 0-7.585 2.942a4.8 4.8 0 0 0-1.32-.187v1.5c.37 0 .739.063 1.092.19l.22.077A4.75 4.75 0 0 0 18 20.75c2.62 0 4.744-2.14 4.75-4.758q0-.421-.073-.823L21.98 7.5c-.054-.6-.1-1.107-.183-1.521c-.089-.441-.23-.842-.515-1.201s-.642-.59-1.051-.776c-.384-.176-.868-.337-1.439-.527l-.555-.185a.75.75 0 0 0-.474 1.423l.518.172c.617.206 1.024.343 1.326.481c.286.13.414.235.5.343c.085.107.157.256.219.564c.065.326.105.753.164 1.401z" opacity=".5"></svg:path>`,
})
export class SolarGlassesBoldDuotoneIcon {
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
  selector: 'svg[solarGlassesLineDuotoneIcon],svg[solar-glasses-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="18" cy="16" r="4"></svg:circle><svg:circle cx="6" cy="16" r="4"></svg:circle><svg:path stroke-linecap="round" d="m14 16.214l-.656-.234a4 4 0 0 0-2.688 0l-.656.234M2 16l.763-8.395c.115-1.264.173-1.896.543-2.363s.972-.668 2.176-1.07L6 4m16 12l-.763-8.395c-.115-1.264-.172-1.896-.542-2.363s-.973-.668-2.177-1.07L18 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGlassesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlassesLinearIcon],svg[solar-glasses-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="18" cy="16" r="4"></svg:circle><svg:circle cx="6" cy="16" r="4"></svg:circle><svg:path stroke-linecap="round" d="m14 16.214l-.656-.234a4 4 0 0 0-2.688 0l-.656.234M2 16l.763-8.395c.115-1.264.173-1.896.543-2.363s.972-.668 2.176-1.07L6 4m16 12l-.763-8.395c-.115-1.264-.172-1.896-.542-2.363s-.973-.668-2.177-1.07L18 4"></svg:path></svg:g>`,
})
export class SolarGlassesLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlassesOutlineIcon],svg[solar-glasses-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.237 4.712a.75.75 0 0 0-.474-1.423l-.555.185c-.57.19-1.055.351-1.439.527c-.409.187-.767.416-1.051.776c-.285.36-.426.76-.515 1.2c-.083.415-.129.923-.183 1.522l-.698 7.67a5 5 0 0 0-.072.823C1.255 18.611 3.38 20.75 6 20.75a4.75 4.75 0 0 0 4.689-3.986l.219-.078a3.25 3.25 0 0 1 2.184 0l.22.078A4.75 4.75 0 0 0 18 20.75c2.62 0 4.744-2.14 4.75-4.758q0-.421-.073-.823L21.98 7.5c-.054-.6-.1-1.107-.183-1.521c-.089-.441-.23-.842-.515-1.201s-.642-.59-1.051-.776c-.384-.176-.868-.337-1.439-.527l-.555-.185a.75.75 0 0 0-.474 1.423l.518.172c.617.206 1.024.343 1.326.481c.286.13.414.235.5.343c.085.107.157.256.219.564c.065.326.105.753.164 1.401l.415 4.569a4.75 4.75 0 0 0-7.585 2.942a4.75 4.75 0 0 0-2.64 0a4.75 4.75 0 0 0-7.585-2.942l.048-.532l.367-4.037c.059-.648.099-1.075.164-1.4c.062-.309.134-.458.22-.565c.085-.108.213-.212.499-.343c.302-.138.709-.275 1.326-.48zM21.19 15.376l.06.656a3.25 3.25 0 1 1-.06-.656m-18.38 0l-.06.656a3.25 3.25 0 1 0 .06-.656" clip-rule="evenodd"></svg:path>`,
})
export class SolarGlassesOutlineIcon {
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
  selector: 'svg[solarGlobalBoldDuotoneIcon],svg[solar-global-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.028 11.25A10 10 0 0 1 12 2c-.83 0-1.57.364-2.18.921c-.605.554-1.116 1.328-1.53 2.242c-.416.92-.74 1.996-.959 3.163a20 20 0 0 0-.318 2.924zm0 1.5h4.985c.036 1.002.143 1.988.318 2.924c.22 1.167.543 2.243.959 3.163c.414.914.925 1.688 1.53 2.242c.61.557 1.35.921 2.18.921c-5.27 0-9.589-4.077-9.972-9.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 2c.831 0 1.57.364 2.18.921c.605.554 1.117 1.328 1.53 2.242c.417.92.74 1.996.959 3.163c.175.936.282 1.922.318 2.924h4.985A10 10 0 0 0 12 2m4.669 13.674c-.219 1.167-.542 2.243-.959 3.163c-.413.914-.925 1.688-1.53 2.242c-.61.557-1.349.921-2.18.921c5.27 0 9.589-4.077 9.972-9.25h-4.985a20 20 0 0 1-.318 2.924"></svg:path><svg:path fill="currentColor" d="M12 3.396c-.275 0-.63.117-1.043.495c-.416.38-.833.977-1.201 1.79c-.366.808-.663 1.784-.867 2.873c-.16.859-.26 1.768-.296 2.696h6.814a18.5 18.5 0 0 0-.296-2.696c-.204-1.09-.5-2.065-.867-2.872c-.368-.814-.784-1.41-1.2-1.791c-.414-.378-.769-.495-1.044-.495m-3.111 12.05c.204 1.09.501 2.065.867 2.873c.368.813.785 1.41 1.2 1.79c.414.379.77.496 1.044.496c.275 0 .63-.117 1.044-.495c.416-.381.832-.978 1.2-1.791c.366-.808.663-1.783.867-2.873c.161-.858.261-1.768.296-2.696H8.593c.035.928.135 1.838.296 2.696" opacity=".5"></svg:path>`,
})
export class SolarGlobalBoldDuotoneIcon {
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
  selector: 'svg[solarGlobalLineDuotoneIcon],svg[solar-global-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12h20m-6 0c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z" opacity=".5"></svg:path><svg:path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z"></svg:path></svg:g>`,
})
export class SolarGlobalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobalLinearIcon],svg[solar-global-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z"></svg:path><svg:path d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z"></svg:path><svg:path stroke-linecap="round" d="M2 12h20"></svg:path></svg:g>`,
})
export class SolarGlobalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobalOutlineIcon],svg[solar-global-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.206 3.182A9.25 9.25 0 0 0 2.78 11.25h4.48c.033-1.096.135-2.176.305-3.2c.207-1.254.515-2.41.91-3.4a9.3 9.3 0 0 1 .731-1.468M12 1.25a10.75 10.75 0 1 0 0 21.5a10.75 10.75 0 0 0 0-21.5m0 1.5c-.261 0-.599.126-.991.532c-.396.41-.791 1.051-1.141 1.925c-.347.869-.63 1.917-.824 3.089c-.155.94-.25 1.937-.282 2.954h6.476a22.5 22.5 0 0 0-.282-2.954c-.194-1.172-.477-2.22-.824-3.089c-.35-.874-.745-1.515-1.14-1.925c-.393-.406-.73-.532-.992-.532m4.74 8.5a24 24 0 0 0-.305-3.2c-.207-1.254-.515-2.41-.91-3.4a9.3 9.3 0 0 0-.732-1.468a9.24 9.24 0 0 1 3.748 2.277a9.25 9.25 0 0 1 2.678 5.791zm-1.502 1.5H8.762c.031 1.017.127 2.014.282 2.954c.194 1.172.477 2.22.824 3.089c.35.874.745 1.515 1.14 1.925c.393.406.73.532.992.532c.261 0 .599-.126.991-.532c.396-.41.791-1.051 1.141-1.925c.347-.869.63-1.917.824-3.089c.155-.94.25-1.937.282-2.954m-.444 8.068c.27-.434.515-.929.73-1.468c.396-.99.704-2.146.911-3.4a24 24 0 0 0 .304-3.2h4.48a9.25 9.25 0 0 1-6.426 8.068m-5.588 0a9.3 9.3 0 0 1-.73-1.468c-.396-.99-.704-2.146-.911-3.4a24 24 0 0 1-.304-3.2H2.78a9.25 9.25 0 0 0 6.425 8.068" clip-rule="evenodd"></svg:path>`,
})
export class SolarGlobalOutlineIcon {
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
  selector: 'svg[solarGlobusBoldDuotoneIcon],svg[solar-globus-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="10" r="7" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M9.602 8.213C9.471 6.754 8.346 5.395 7.8 4.897l-.302-.258A6.97 6.97 0 0 1 12 3c1.55 0 2.98.503 4.14 1.356c.164.497-.148 1.536-.475 2.033c-.12.18-.388.404-.683.616c-.666.478-1.505.715-1.932 1.595a1 1 0 0 0-.058.711c.042.154.069.321.07.485c0 .528-.534.91-1.062.904c-1.375-.015-2.275-1.123-2.398-2.487m3.404 6.181c.691-1.304 2.997-1.304 2.997-1.304c2.402-.025 2.727-1.484 2.944-2.22a7.004 7.004 0 0 1-5.975 6.063c-.226-.475-.493-1.546.034-2.54"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.004 1.5a.75.75 0 0 1 1.058-.059a11.04 11.04 0 0 1 3.688 8.246c0 5.751-4.389 10.478-10 11.013v.55H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-.509a11.04 11.04 0 0 1-7.809-3.678a.75.75 0 1 1 1.118-1a9.54 9.54 0 0 0 7.128 3.187a9.563 9.563 0 0 0 9.563-9.563a9.54 9.54 0 0 0-3.188-7.128a.75.75 0 0 1-.059-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarGlobusBoldDuotoneIcon {
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
  selector: 'svg[solarGlobusLineDuotoneIcon],svg[solar-globus-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 22v-2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M4 16.562A10.3 10.3 0 0 0 11.687 20C17.383 20 22 15.383 22 9.687C22 6.633 20.672 3.888 18.562 2"></svg:path><svg:path d="M7 4.553c.585.552 1.79 2.063 1.931 3.684c.131 1.515 1.096 2.746 2.569 2.763c.566.006 1.139-.418 1.137-1.005c0-.182-.03-.367-.074-.538a1.14 1.14 0 0 1 .062-.79c.457-.978 1.357-1.241 2.07-1.772c.316-.236.604-.484.732-.684c.35-.553.702-1.658.526-2.211m-2.662 13c-.22-.414-.527-1.49 0-2.483c.659-1.241 2.854-1.241 2.854-1.241c1.692-.018 2.302-.782 2.588-1.462M19 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10 22h4"></svg:path></svg:g>`,
})
export class SolarGlobusLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobusLinearIcon],svg[solar-globus-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="10" r="7"></svg:circle><svg:path stroke-linecap="round" d="M4 16.562A10.3 10.3 0 0 0 11.687 20C17.383 20 22 15.383 22 9.687C22 6.633 20.672 3.888 18.562 2"></svg:path><svg:path d="M7 4.553c.585.552 1.79 2.063 1.931 3.684c.131 1.515 1.096 2.746 2.569 2.763c.566.006 1.139-.418 1.137-1.005c0-.182-.03-.367-.074-.538a1.14 1.14 0 0 1 .062-.79c.457-.978 1.357-1.241 2.07-1.772c.316-.236.604-.484.732-.684c.35-.553.702-1.658.526-2.211M19 11c-.22.62-.375 2.25-2.855 2.276c0 0-2.195 0-2.854 1.241c-.527.993-.22 2.07 0 2.483"></svg:path><svg:path stroke-linecap="round" d="M12 22v-2m0 2h-2m4 0h-2"></svg:path></svg:g>`,
})
export class SolarGlobusLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGlobusOutlineIcon],svg[solar-globus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.004 1.5a.75.75 0 0 1 1.058-.059a11.04 11.04 0 0 1 3.688 8.246c0 5.751-4.389 10.478-10 11.013v.55H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-.509a11.04 11.04 0 0 1-7.809-3.678a.75.75 0 1 1 1.118-1a9.54 9.54 0 0 0 7.128 3.187a9.563 9.563 0 0 0 9.563-9.563a9.54 9.54 0 0 0-3.188-7.128a.75.75 0 0 1-.059-1.06M7.221 5.97a6.25 6.25 0 0 0 5.065 10.273a3.38 3.38 0 0 1 .341-2.078c.488-.919 1.481-1.297 2.158-1.463a6.4 6.4 0 0 1 1.32-.177h.032c.75-.008 1.17-.183 1.418-.361c.249-.18.395-.415.502-.68l.03-.067A6.26 6.26 0 0 0 16.5 5.663a4.6 4.6 0 0 1-.441.949c-.211.332-.61.654-.917.883a7 7 0 0 1-.692.447c-.172.102-.32.191-.463.289c-.307.21-.531.427-.684.752a.4.4 0 0 0-.016.281c.058.221.099.471.1.728c.002 1.121-1.038 1.767-1.896 1.757c-1.985-.023-3.156-1.689-3.308-3.448c-.072-.836-.503-1.68-.962-2.331m1.106-1.03c.59.797 1.24 1.96 1.35 3.231s.869 2.067 1.83 2.078a.47.47 0 0 0 .293-.105c.073-.062.086-.115.086-.148a1.3 1.3 0 0 0-.05-.348a1.9 1.9 0 0 1 .109-1.3c.305-.653.759-1.056 1.194-1.355c.185-.126.377-.24.544-.34l.066-.04a6 6 0 0 0 .497-.32c.324-.242.503-.417.547-.486a3.6 3.6 0 0 0 .428-1.165A6.2 6.2 0 0 0 12 3.75c-1.372 0-2.64.442-3.672 1.192m8.49 9.04q-.312.04-.665.045h-.018l-.056.002q-.077.003-.22.014c-.19.017-.446.051-.715.117c-.585.144-1.02.387-1.19.71c-.201.378-.228.787-.187 1.128a6.26 6.26 0 0 0 3.052-2.016M4.25 10a7.75 7.75 0 1 1 15.5 0a7.75 7.75 0 0 1-15.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarGlobusOutlineIcon {
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
  selector: 'svg[solarGolfBoldDuotoneIcon],svg[solar-golf-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="12" cy="18.5" fill="currentColor" opacity=".5" rx="10" ry="3.5"></svg:ellipse><svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v1.036l5.008 2.504l.054.027c.734.367 1.36.68 1.796.984c.442.309.906.757.906 1.449s-.464 1.14-.906 1.449c-.436.304-1.062.617-1.796.984l-5.062 2.53V18a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarGolfBoldDuotoneIcon {
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
  selector: 'svg[solarGolfLineDuotoneIcon],svg[solar-golf-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:ellipse cx="12" cy="18.5" opacity=".5" rx="10" ry="3.5"></svg:ellipse><svg:path stroke-linecap="round" d="M12 18V2m0 1.5l5.422 2.711c1.561.78 2.342 1.171 2.342 1.789s-.78 1.008-2.342 1.789L12 12.5"></svg:path></svg:g>`,
})
export class SolarGolfLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGolfLinearIcon],svg[solar-golf-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:ellipse cx="12" cy="18.5" rx="10" ry="3.5"></svg:ellipse><svg:path stroke-linecap="round" d="M12 18V2m0 1.5l5.422 2.711c1.561.78 2.342 1.171 2.342 1.789s-.78 1.008-2.342 1.789L12 12.5"></svg:path></svg:g>`,
})
export class SolarGolfLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGolfOutlineIcon],svg[solar-golf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1.037l5.062 2.53c.734.367 1.36.68 1.796.984c.441.309.906.757.906 1.449s-.465 1.14-.906 1.449c-.436.304-1.062.617-1.796.984l-5.062 2.53v1.297c2.53.063 4.83.449 6.569 1.057c.95.333 1.774.747 2.373 1.243c.595.492 1.058 1.144 1.058 1.94s-.463 1.448-1.058 1.94c-.6.496-1.422.91-2.373 1.243c-1.909.668-4.496 1.067-7.319 1.067s-5.41-.4-7.319-1.067c-.95-.333-1.773-.747-2.373-1.243c-.595-.492-1.058-1.144-1.058-1.94s.463-1.448 1.058-1.94c.6-.496 1.422-.91 2.373-1.243c1.738-.608 4.04-.994 6.569-1.058V2a.75.75 0 0 1 .75-.75m.75 3.464v6.572l4.337-2.168c.803-.402 1.328-.666 1.662-.9A1.1 1.1 0 0 0 19.003 8a1.1 1.1 0 0 0-.254-.218c-.334-.234-.859-.498-1.662-.9zm6.27 3.317l-.004-.013zm-.004-.05q.003-.011.005-.012l-.005.013M11.25 15.76c-2.395.064-4.523.43-6.073.973c-.86.3-1.5.641-1.913.982c-.417.346-.514.614-.514.785c0 .17.097.44.514.785c.412.34 1.054.681 1.913.982c1.71.599 4.123.983 6.823.983s5.113-.384 6.823-.983c.86-.3 1.5-.641 1.913-.982c.417-.346.514-.614.514-.785c0-.17-.097-.44-.514-.785c-.412-.34-1.054-.681-1.913-.982c-1.55-.543-3.678-.91-6.073-.973V18a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarGolfOutlineIcon {
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
  selector: 'svg[solarGpsBoldDuotoneIcon],svg[solar-gps-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 8.512a3.488 3.488 0 1 0 0 6.976a3.488 3.488 0 0 0 0-6.976M12.75 2a.75.75 0 0 0-1.5 0v2.035a8 8 0 0 1 1.5 0zm7.215 10.75a8 8 0 0 0 0-1.5H22a.75.75 0 0 1 0 1.5zm-8.715 7.215a8 8 0 0 0 1.5 0V22a.75.75 0 0 1-1.5 0zM4.035 11.25a8 8 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class SolarGpsBoldDuotoneIcon {
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
  selector: 'svg[solarGpsLineDuotoneIcon],svg[solar-gps-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M2 12h2m16 0h2M12 4V2m0 20v-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarGpsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGpsLinearIcon],svg[solar-gps-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke-linecap="round" d="M2 12h2m16 0h2M12 4V2m0 20v-2"></svg:path></svg:g>`,
})
export class SolarGpsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGpsOutlineIcon],svg[solar-gps-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1.282a8.75 8.75 0 0 1 7.968 7.968H22a.75.75 0 0 1 0 1.5h-1.282a8.75 8.75 0 0 1-7.968 7.968V22a.75.75 0 0 1-1.5 0v-1.282a8.75 8.75 0 0 1-7.968-7.968H2a.75.75 0 0 1 0-1.5h1.282a8.75 8.75 0 0 1 7.968-7.968V2a.75.75 0 0 1 .75-.75m0 3.5a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5m0 5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarGpsOutlineIcon {
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
  selector: 'svg[solarGraphBoldDuotoneIcon],svg[solar-graph-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.576 10.48a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.8.8 0 0 1-.163.122l-.011.005l-.008-.004l-.003-.001a.8.8 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.328-.395-.625-.75-.901-1c-.301-.272-.68-.514-1.18-.514s-.878.242-1.18.514c-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 0 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.8.8 0 0 1 .163-.122l.007-.003l.004-.001q.004 0 .011.004a.8.8 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1c.301.272.68.514 1.18.514s.878-.242 1.18-.514c.276-.25.572-.605.9-1z"></svg:path>`,
})
export class SolarGraphBoldDuotoneIcon {
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
  selector: 'svg[solarGraphDownBoldDuotoneIcon],svg[solar-graph-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.53 9.47a.75.75 0 0 0-1.06 1.06l2.293 2.293a1.75 1.75 0 0 0 2.474 0l1.586-1.586a.25.25 0 0 1 .354 0l2.012 2.013H14.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v.69l-2.013-2.013a1.75 1.75 0 0 0-2.474 0l-1.586 1.586a.25.25 0 0 1-.354 0z"></svg:path>`,
})
export class SolarGraphDownBoldDuotoneIcon {
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
  selector: 'svg[solarGraphDownLineDuotoneIcon],svg[solar-graph-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 10l2.293 2.293a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 1 1.414 0L17 14m0 0v-2.5m0 2.5h-2.5"></svg:path></svg:g>`,
})
export class SolarGraphDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownLinearIcon],svg[solar-graph-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 10l2.293 2.293a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 1 1.414 0L17 14m0 0v-2.5m0 2.5h-2.5"></svg:path></svg:g>`,
})
export class SolarGraphDownLinearIcon {
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
  selector: 'svg[solarGraphDownNewBoldDuotoneIcon],svg[solar-graph-down-new-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-7.5 8.25a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v.69l-2.013-2.013a1.75 1.75 0 0 0-2.474 0l-1.586 1.586a.25.25 0 0 1-.354 0L7.53 9.47a.75.75 0 0 0-1.06 1.06l2.293 2.293a1.75 1.75 0 0 0 2.474 0l1.586-1.586a.25.25 0 0 1 .354 0l2.012 2.013z"></svg:path>`,
})
export class SolarGraphDownNewBoldDuotoneIcon {
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
  selector: 'svg[solarGraphDownNewLineDuotoneIcon],svg[solar-graph-down-new-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 10l2.293 2.293a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 1 1.414 0L17 14m0 0v-2.5m0 2.5h-2.5"></svg:path><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarGraphDownNewLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownNewLinearIcon],svg[solar-graph-down-new-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 10l2.293 2.293a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 1 1.414 0L17 14m0 0v-2.5m0 2.5h-2.5"></svg:path><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarGraphDownNewLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownNewOutlineIcon],svg[solar-graph-down-new-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.943 1.25H13.5a.75.75 0 0 1 0 1.5H12c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386v-1.5a.75.75 0 0 1 1.5 0v1.557c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19"></svg:path><svg:path fill="currentColor" d="M6.47 9.47a.75.75 0 0 1 1.06 0l2.293 2.293a.25.25 0 0 0 .354 0l1.586-1.586a1.75 1.75 0 0 1 2.474 0l2.013 2.012V11.5a.75.75 0 0 1 1.5 0V14a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h.69l-2.013-2.013a.25.25 0 0 0-.354 0l-1.586 1.586a1.75 1.75 0 0 1-2.474 0L6.47 10.53a.75.75 0 0 1 0-1.06"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 1.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M16.75 5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarGraphDownNewOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphDownOutlineIcon],svg[solar-graph-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.53 9.47a.75.75 0 0 0-1.06 1.06l2.293 2.293a1.75 1.75 0 0 0 2.474 0l1.586-1.586a.25.25 0 0 1 .354 0l2.012 2.013H14.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v.69l-2.013-2.013a1.75 1.75 0 0 0-2.474 0l-1.586 1.586a.25.25 0 0 1-.354 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarGraphDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphLineDuotoneIcon],svg[solar-graph-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m7 14l1.797-2.156c.712-.855 1.068-1.282 1.536-1.282c.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282s.824-.427 1.536-1.282L17 10"></svg:path></svg:g>`,
})
export class SolarGraphLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphLinearIcon],svg[solar-graph-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="m7 14l1.797-2.156c.712-.855 1.068-1.282 1.536-1.282c.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282s.824-.427 1.536-1.282L17 10"></svg:path></svg:g>`,
})
export class SolarGraphLinearIcon {
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
  selector: 'svg[solarGraphNewBoldDuotoneIcon],svg[solar-graph-new-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.576 10.48a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.8.8 0 0 1-.163.122l-.011.005l-.008-.004l-.003-.001a.8.8 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.328-.395-.625-.75-.901-1c-.301-.272-.68-.514-1.18-.514s-.878.242-1.18.514c-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 0 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.8.8 0 0 1 .163-.122l.007-.003l.004-.001q.004 0 .011.004a.8.8 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1c.301.272.68.514 1.18.514s.878-.242 1.18-.514c.276-.25.572-.605.9-1zM22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class SolarGraphNewBoldDuotoneIcon {
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
  selector: 'svg[solarGraphNewLineDuotoneIcon],svg[solar-graph-new-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m7 14l1.797-2.156c.712-.855 1.068-1.282 1.536-1.282c.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282s.824-.427 1.536-1.282L17 10"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarGraphNewLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewLinearIcon],svg[solar-graph-new-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"></svg:path><svg:path stroke-linecap="round" d="m7 14l1.797-2.156c.712-.855 1.068-1.282 1.536-1.282c.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282s.824-.427 1.536-1.282L17 10"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarGraphNewLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewOutlineIcon],svg[solar-graph-new-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.943 1.25H13.5a.75.75 0 0 1 0 1.5H12c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386v-1.5a.75.75 0 0 1 1.5 0v1.557c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19"></svg:path><svg:path fill="currentColor" d="M17.48 9.424a.75.75 0 0 1 .096 1.056l-1.829 2.195c-.328.394-.624.75-.9 1c-.302.27-.68.513-1.18.513s-.879-.242-1.18-.514c-.276-.25-.572-.605-.901-1l-.292-.35c-.371-.445-.599-.716-.787-.885a.8.8 0 0 0-.163-.122l-.007-.003l-.004-.002l-.01.005a.8.8 0 0 0-.164.122c-.187.17-.415.44-.786.885L7.576 14.48a.75.75 0 0 1-1.152-.96l1.829-2.195c.328-.394.624-.75.9-1c.302-.27.68-.513 1.18-.513s.879.242 1.18.514c.276.25.572.605.901 1l.292.35c.371.445.599.716.787.885c.086.078.138.11.163.122l.01.005l.005-.002l.007-.003a.8.8 0 0 0 .163-.122c.187-.17.415-.44.786-.885l1.797-2.156a.75.75 0 0 1 1.056-.096"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 1.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M16.75 5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarGraphNewOutlineIcon {
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
  selector: 'svg[solarGraphNewUpBoldDuotoneIcon],svg[solar-graph-new-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-7.5 5.75a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.013 2.013a1.75 1.75 0 0 1-2.474 0l-1.586-1.586a.25.25 0 0 0-.354 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.293-2.293a1.75 1.75 0 0 1 2.474 0l1.586 1.586a.25.25 0 0 0 .354 0l2.012-2.013z"></svg:path>`,
})
export class SolarGraphNewUpBoldDuotoneIcon {
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
  selector: 'svg[solarGraphNewUpLineDuotoneIcon],svg[solar-graph-new-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5"></svg:path></svg:g>`,
})
export class SolarGraphNewUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewUpLinearIcon],svg[solar-graph-new-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5"></svg:path></svg:g>`,
})
export class SolarGraphNewUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphNewUpOutlineIcon],svg[solar-graph-new-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.943 1.25H13.5a.75.75 0 0 1 0 1.5H12c-2.378 0-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386v-1.5a.75.75 0 0 1 1.5 0v1.557c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.25 5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M19 2.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.75 10c0 .414.336.75.75.75h.69l-2.013 2.013a.25.25 0 0 1-.354 0l-1.586-1.586a1.75 1.75 0 0 0-2.474 0L6.47 13.47a.75.75 0 1 0 1.06 1.06l2.293-2.293a.25.25 0 0 1 .354 0l1.586 1.586a1.75 1.75 0 0 0 2.474 0l2.013-2.012v.689a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class SolarGraphNewUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphOutlineIcon],svg[solar-graph-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.576 10.48a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.8.8 0 0 1-.163.122l-.011.005l-.011-.005a.8.8 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.328-.395-.625-.75-.901-1c-.301-.272-.68-.514-1.18-.514s-.878.242-1.18.514c-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 1 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.8.8 0 0 1 .163-.122l.011-.005l.011.005a.8.8 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1c.301.272.68.514 1.18.514s.878-.242 1.18-.514c.276-.25.572-.605.9-1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarGraphOutlineIcon {
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
  selector: 'svg[solarGraphUpBoldDuotoneIcon],svg[solar-graph-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.5 10.75a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.013 2.013a1.75 1.75 0 0 1-2.474 0l-1.586-1.586a.25.25 0 0 0-.354 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.293-2.293a1.75 1.75 0 0 1 2.474 0l1.586 1.586a.25.25 0 0 0 .354 0l2.012-2.013z"></svg:path>`,
})
export class SolarGraphUpBoldDuotoneIcon {
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
  selector: 'svg[solarGraphUpLineDuotoneIcon],svg[solar-graph-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5"></svg:path></svg:g>`,
})
export class SolarGraphUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphUpLinearIcon],svg[solar-graph-up-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5"></svg:path></svg:g>`,
})
export class SolarGraphUpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarGraphUpOutlineIcon],svg[solar-graph-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 10c0 .414.336.75.75.75h.69l-2.013 2.013a.25.25 0 0 1-.354 0l-1.586-1.586a1.75 1.75 0 0 0-2.474 0L6.47 13.47a.75.75 0 1 0 1.06 1.06l2.293-2.293a.25.25 0 0 1 .354 0l1.586 1.586a1.75 1.75 0 0 0 2.474 0l2.013-2.012v.689a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarGraphUpOutlineIcon {
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
  selector: 'svg[solarHamburgerMenuBoldDuotoneIcon],svg[solar-hamburger-menu-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class SolarHamburgerMenuBoldDuotoneIcon {
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
  selector: 'svg[solarHamburgerMenuLineDuotoneIcon],svg[solar-hamburger-menu-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 7H4"></svg:path><svg:path d="M20 12H4" opacity=".5"></svg:path><svg:path d="M20 17H4"></svg:path></svg:g>`,
})
export class SolarHamburgerMenuLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHamburgerMenuLinearIcon],svg[solar-hamburger-menu-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4"></svg:path>`,
})
export class SolarHamburgerMenuLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHamburgerMenuOutlineIcon],svg[solar-hamburger-menu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHamburgerMenuOutlineIcon {
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
  selector: 'svg[solarHandHeartBoldDuotoneIcon],svg[solar-hand-heart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4.83c0 1.547 1.726 3.178 3.15 4.26c.799.606 1.198.91 1.85.91s1.051-.304 1.85-.91C15.274 8.007 17 6.376 17 4.83c0-2.79-2.75-3.833-5-1.677C9.75.997 7 2.039 7 4.829"></svg:path><svg:path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308" opacity=".5"></svg:path>`,
})
export class SolarHandHeartBoldDuotoneIcon {
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
  selector: 'svg[solarHandHeartLineDuotoneIcon],svg[solar-hand-heart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.15 8.802l-.442.606zM12 3.106l-.508.552a.75.75 0 0 0 1.015 0zm1.85 5.696l.442.606zM12 9.676v.75zm-1.408-1.48c-.69-.503-1.427-1.115-1.983-1.76c-.574-.665-.859-1.254-.859-1.721h-1.5c0 1.017.578 1.954 1.223 2.701c.663.768 1.501 1.457 2.235 1.992zM7.75 4.715c0-1.059.52-1.663 1.146-1.873c.652-.22 1.624-.078 2.596.816l1.015-1.104C11.23 1.38 9.704.988 8.418 1.42C7.105 1.862 6.25 3.096 6.25 4.715zm6.542 4.693c.734-.534 1.572-1.224 2.235-1.992c.645-.747 1.223-1.684 1.223-2.701h-1.5c0 .467-.284 1.056-.859 1.721c-.556.645-1.292 1.257-1.982 1.76zm3.458-4.693c0-1.619-.855-2.853-2.167-3.295c-1.286-.432-2.813-.04-4.09 1.134l1.015 1.104c.972-.894 1.945-1.036 2.597-.816c.625.21 1.145.814 1.145 1.873zM9.708 9.408c.755.55 1.354 1.018 2.292 1.018v-1.5c-.365 0-.565-.115-1.408-.73zm3.7-1.212c-.843.615-1.043.73-1.408.73v1.5c.938 0 1.537-.467 2.292-1.018z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHandHeartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandHeartLinearIcon],svg[solar-hand-heart-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.15 8.802l-.442.606zM12 3.106l-.508.552a.75.75 0 0 0 1.015 0zm1.85 5.696l.442.606zM12 9.676v.75zm-1.408-1.48c-.69-.503-1.427-1.115-1.983-1.76c-.574-.665-.859-1.254-.859-1.721h-1.5c0 1.017.578 1.954 1.223 2.701c.663.768 1.501 1.457 2.235 1.992zM7.75 4.715c0-1.059.52-1.663 1.146-1.873c.652-.22 1.624-.078 2.596.816l1.015-1.104C11.23 1.38 9.704.988 8.418 1.42C7.105 1.862 6.25 3.096 6.25 4.715zm6.542 4.693c.734-.534 1.572-1.224 2.235-1.992c.645-.747 1.223-1.684 1.223-2.701h-1.5c0 .467-.284 1.056-.859 1.721c-.556.645-1.292 1.257-1.982 1.76zm3.458-4.693c0-1.619-.855-2.853-2.167-3.295c-1.286-.432-2.813-.04-4.09 1.134l1.015 1.104c.972-.894 1.945-1.036 2.597-.816c.625.21 1.145.814 1.145 1.873zM9.708 9.408c.755.55 1.354 1.018 2.292 1.018v-1.5c-.365 0-.565-.115-1.408-.73zm3.7-1.212c-.843.615-1.043.73-1.408.73v1.5c.938 0 1.537-.467 2.292-1.018z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 20.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"></svg:path><svg:rect width="3" height="8" x="2" y="14" stroke="currentColor" stroke-width="1.5" rx="1.5"></svg:rect></svg:g>`,
})
export class SolarHandHeartLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandHeartOutlineIcon],svg[solar-hand-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.583 1.42c1.312.441 2.167 1.676 2.167 3.295c0 1.017-.578 1.954-1.223 2.7c-.663.769-1.501 1.458-2.235 1.993l-.093.068c-.712.52-1.3.95-2.199.95c-.9 0-1.486-.43-2.198-.95l-.094-.068c-.734-.535-1.572-1.224-2.235-1.992C6.83 6.669 6.25 5.732 6.25 4.715c0-1.619.855-2.853 2.167-3.295c1.12-.377 2.422-.128 3.583.717c1.161-.845 2.464-1.094 3.583-.717m-.478 1.422c-.652-.22-1.625-.078-2.597.816a.75.75 0 0 1-1.015 0c-.973-.894-1.945-1.036-2.597-.816c-.626.21-1.146.814-1.146 1.873c0 .467.285 1.055.859 1.721c.556.645 1.292 1.257 1.983 1.76c.843.615 1.043.73 1.408.73s.565-.115 1.409-.73c.69-.503 1.426-1.115 1.982-1.76c.575-.666.86-1.254.86-1.721c0-1.06-.521-1.663-1.146-1.873M8.684 14.448c1.866-.362 3.863-.28 5.48.684c.226.135.44.304.625.512c.376.422.57.947.579 1.473q.286-.186.577-.407l1.808-1.365a2.64 2.64 0 0 1 3.124 0c.835.63 1.169 1.763.57 2.722c-.425.682-1.065 1.625-1.717 2.229c-.66.61-1.597 1.123-2.306 1.466c-.862.416-1.792.645-2.697.792c-1.85.3-3.774.253-5.602-.123a14.3 14.3 0 0 0-2.865-.293H4a.75.75 0 0 1 0-1.5h2.26c1.062 0 2.135.11 3.168.324a14.1 14.1 0 0 0 5.06.111c.828-.134 1.602-.333 2.284-.662c.683-.33 1.451-.764 1.938-1.216c.493-.456 1.044-1.247 1.465-1.921c.127-.204.109-.498-.202-.733a1.14 1.14 0 0 0-1.316 0l-1.807 1.366c-.722.545-1.61 1.128-2.711 1.303a9 9 0 0 1-.347.049q-.086.015-.179.02a10 10 0 0 1-1.932 0a.75.75 0 1 1 .141-1.493c.628.059 1.19.046 1.668-.003l.03-.003a.742.742 0 0 0 .15-1.138a1.2 1.2 0 0 0-.275-.222c-1.181-.705-2.759-.822-4.426-.5a12.1 12.1 0 0 0-4.535 1.935a.75.75 0 0 1-.868-1.224a13.6 13.6 0 0 1 5.118-2.183" clip-rule="evenodd"></svg:path>`,
})
export class SolarHandHeartOutlineIcon {
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
  selector: 'svg[solarHandMoneyBoldDuotoneIcon],svg[solar-hand-money-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.586 2.586c-.367.367-.504.873-.555 1.664A2.25 2.25 0 0 0 8.25 2.03c-.79.052-1.297.189-1.664.556m10.828 0c-.367-.367-.873-.504-1.664-.555a2.25 2.25 0 0 0 2.22 2.219c-.052-.79-.189-1.297-.556-1.664m0 6.828c-.367.367-.873.504-1.664.555a2.25 2.25 0 0 1 2.22-2.219c-.052.79-.189 1.297-.556 1.664m-10.828 0c.367.367.873.504 1.664.555A2.25 2.25 0 0 0 6.03 7.75c.052.79.189 1.297.556 1.664"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 5.75A3.75 3.75 0 0 0 9.75 2h4.5A3.75 3.75 0 0 0 18 5.75v.5A3.75 3.75 0 0 0 14.25 10h-4.5A3.75 3.75 0 0 0 6 6.25zM12 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarHandMoneyBoldDuotoneIcon {
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
  selector: 'svg[solarHandMoneyLineDuotoneIcon],svg[solar-hand-money-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17.414 10.414C18 9.828 18 8.886 18 7s0-2.828-.586-3.414m0 6.828C16.828 11 15.886 11 14 11h-4c-1.886 0-2.828 0-3.414-.586m10.828 0Zm0-6.828C16.828 3 15.886 3 14 3h-4c-1.886 0-2.828 0-3.414.586m10.828 0Zm-10.828 0C6 4.172 6 5.114 6 7s0 2.828.586 3.414m0-6.828Zm0 6.828Z"></svg:path><svg:path d="M13 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M18 6a3 3 0 0 1-3-3m3 5a3 3 0 0 0-3 3M6 6a3 3 0 0 0 3-3M6 8a3 3 0 0 1 3 3M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHandMoneyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandMoneyLinearIcon],svg[solar-hand-money-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17.414 10.414C18 9.828 18 8.886 18 7s0-2.828-.586-3.414m0 6.828C16.828 11 15.886 11 14 11h-4c-1.886 0-2.828 0-3.414-.586m10.828 0Zm0-6.828C16.828 3 15.886 3 14 3h-4c-1.886 0-2.828 0-3.414.586m10.828 0Zm-10.828 0C6 4.172 6 5.114 6 7s0 2.828.586 3.414m0-6.828Zm0 6.828ZM13 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path><svg:path stroke-linecap="round" d="M18 6a3 3 0 0 1-3-3m3 5a3 3 0 0 0-3 3M6 6a3 3 0 0 0 3-3M6 8a3 3 0 0 1 3 3m-4 9.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"></svg:path><svg:rect width="3" height="8" x="2" y="14" rx="1.5"></svg:rect></svg:g>`,
})
export class SolarHandMoneyLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandMoneyOutlineIcon],svg[solar-hand-money-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.325 3.75h-4.65A3.75 3.75 0 0 1 6.75 6.675v.65a3.75 3.75 0 0 1 2.925 2.925h4.65a3.75 3.75 0 0 1 2.925-2.925v-.65a3.75 3.75 0 0 1-2.925-2.925m.605-1.497q-.412-.004-.878-.003H9.948q-.466 0-.877.003a1 1 0 0 0-.164.003c-.452.008-.853.027-1.201.074c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.047.349-.066.75-.074 1.202a1 1 0 0 0-.003.163q-.004.413-.003.878v.104q0 .465.003.878a1 1 0 0 0 .003.163c.008.453.027.853.074 1.201c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.348.047.749.066 1.201.074a1 1 0 0 0 .164.003q.411.004.877.003h4.104q.465 0 .878-.003a1 1 0 0 0 .163-.003c.453-.008.854-.027 1.201-.074c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65a11 11 0 0 0 .074-1.201a1 1 0 0 0 .003-.163q.004-.413.003-.878v-.104q0-.465-.003-.878a1 1 0 0 0-.003-.163a11 11 0 0 0-.074-1.201c-.084-.628-.27-1.195-.725-1.65c-.456-.456-1.023-.642-1.65-.726a11 11 0 0 0-1.202-.074a1 1 0 0 0-.163-.003m.964 1.541a2.26 2.26 0 0 0 1.312 1.312a5 5 0 0 0-.023-.2c-.061-.462-.169-.66-.3-.79s-.327-.237-.788-.3a5 5 0 0 0-.2-.022m1.312 5.1a2.26 2.26 0 0 0-1.312 1.312q.105-.01.2-.022c.462-.063.66-.17.79-.3s.238-.328.3-.79q.012-.095.022-.2m-9.1 1.312a2.26 2.26 0 0 0-1.312-1.312q.01.105.023.2c.062.462.169.66.3.79s.327.237.788.3q.096.012.201.022m-1.312-5.1a2.26 2.26 0 0 0 1.312-1.312q-.105.01-.2.023c-.462.062-.66.169-.79.3s-.237.327-.3.788zM12 6.75a.25.25 0 1 0 0 .5a.25.25 0 0 0 0-.5M10.25 7a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m-1.566 7.448c1.866-.361 3.863-.28 5.48.684c.226.135.44.304.625.512c.376.423.57.947.579 1.473q.286-.186.577-.407l1.808-1.365a2.64 2.64 0 0 1 3.124 0c.835.63 1.169 1.763.57 2.723c-.425.681-1.065 1.624-1.717 2.228c-.66.61-1.597 1.124-2.306 1.466c-.862.416-1.792.646-2.697.792c-1.85.3-3.774.254-5.602-.123a14.3 14.3 0 0 0-2.865-.293H4a.75.75 0 0 1 0-1.5h2.26c1.062 0 2.135.111 3.168.324a14.1 14.1 0 0 0 5.06.111c.828-.134 1.602-.333 2.284-.662c.683-.33 1.451-.764 1.938-1.215c.493-.457 1.044-1.248 1.465-1.922c.127-.204.109-.497-.202-.732c-.37-.28-.947-.28-1.316 0l-1.807 1.365c-.722.545-1.61 1.128-2.711 1.304a9 9 0 0 1-.347.048q-.086.015-.179.02a10 10 0 0 1-1.932 0a.75.75 0 1 1 .141-1.493a8.5 8.5 0 0 0 1.668-.003l.03-.003a.742.742 0 0 0 .15-1.138a1.2 1.2 0 0 0-.275-.222c-1.181-.705-2.759-.822-4.426-.5a12.1 12.1 0 0 0-4.535 1.935a.75.75 0 0 1-.868-1.224a13.6 13.6 0 0 1 5.118-2.183" clip-rule="evenodd"></svg:path>`,
})
export class SolarHandMoneyOutlineIcon {
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
  selector: 'svg[solarHandPillsBoldDuotoneIcon],svg[solar-hand-pills-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.36 9.204a2.719 2.719 0 0 0 3.844-3.845l-.724-.723c-.3.605-.803 1.394-1.626 2.218c-.824.823-1.613 1.326-2.218 1.626zm1.28-6.408a2.719 2.719 0 0 0-3.844 3.845l1.086 1.086q.114-.048.245-.11c.523-.253 1.248-.7 2.02-1.47c.77-.772 1.217-1.497 1.47-2.02a6 6 0 0 0 .11-.245z"></svg:path>`,
})
export class SolarHandPillsBoldDuotoneIcon {
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
  selector: 'svg[solarHandPillsLineDuotoneIcon],svg[solar-hand-pills-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8.796 6.64a2.718 2.718 0 1 1 3.845-3.844l2.563 2.563a2.719 2.719 0 0 1-3.845 3.845z"></svg:path><svg:path d="M14 4s-.225 1.168-1.529 2.471S10 8 10 8" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHandPillsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandPillsLinearIcon],svg[solar-hand-pills-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8.796 6.64a2.718 2.718 0 1 1 3.845-3.844l2.563 2.563a2.719 2.719 0 0 1-3.845 3.845z"></svg:path><svg:path d="M14 4s-.225 1.168-1.529 2.471S10 8 10 8"></svg:path><svg:path stroke-linecap="round" d="M5 20.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"></svg:path><svg:rect width="3" height="8" x="2" y="14" rx="1.5"></svg:rect></svg:g>`,
})
export class SolarHandPillsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandPillsOutlineIcon],svg[solar-hand-pills-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.11 3.327A1.968 1.968 0 0 0 9.328 6.11l.988.988q.052-.022.106-.049c.386-.186.933-.521 1.52-1.108s.922-1.134 1.108-1.52l.05-.106zm2.103 2.102a7.4 7.4 0 0 1-1.211 1.573a7.4 7.4 0 0 1-1.573 1.211l.46.46a1.969 1.969 0 0 0 2.785-2.783zM8.266 2.266a3.47 3.47 0 0 1 4.905 0l2.563 2.563a3.469 3.469 0 0 1-4.905 4.905L8.266 7.171a3.47 3.47 0 0 1 0-4.905m.418 12.182c1.866-.361 3.863-.28 5.48.684c.226.135.44.304.625.512c.376.423.57.947.579 1.473q.286-.186.577-.407l1.808-1.365a2.64 2.64 0 0 1 3.124 0c.835.63 1.169 1.763.57 2.723c-.425.681-1.065 1.624-1.717 2.228c-.66.61-1.597 1.124-2.306 1.466c-.862.416-1.792.646-2.697.792c-1.85.3-3.774.254-5.602-.123a14.3 14.3 0 0 0-2.865-.293H4a.75.75 0 0 1 0-1.5h2.26c1.062 0 2.135.111 3.168.324a14.1 14.1 0 0 0 5.06.111c.828-.134 1.602-.333 2.284-.662c.683-.33 1.451-.764 1.938-1.215c.493-.457 1.044-1.248 1.465-1.922c.127-.204.109-.497-.202-.732c-.37-.28-.947-.28-1.316 0l-1.807 1.365c-.722.545-1.61 1.128-2.711 1.304a9 9 0 0 1-.347.048q-.086.015-.179.02a10 10 0 0 1-1.932 0a.75.75 0 1 1 .141-1.493a8.5 8.5 0 0 0 1.668-.003l.03-.003a.742.742 0 0 0 .15-1.138a1.2 1.2 0 0 0-.275-.222c-1.181-.705-2.759-.822-4.426-.5a12.1 12.1 0 0 0-4.535 1.935a.75.75 0 0 1-.868-1.224a13.6 13.6 0 0 1 5.118-2.183" clip-rule="evenodd"></svg:path>`,
})
export class SolarHandPillsOutlineIcon {
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
  selector: 'svg[solarHandShakeBoldDuotoneIcon],svg[solar-hand-shake-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.19 3.308c-.213-.367-.837-.59-1.47-.227c-.632.36-.743.997-.533 1.357l2.526 4.331a.75.75 0 0 1-1.296.756L7.049 3.75c-.214-.367-.838-.59-1.471-.227c-.632.36-.743.997-.532 1.357l3.788 6.497a.75.75 0 0 1-1.296.756L5.855 9.245c-.214-.367-.838-.59-1.472-.227c-.631.36-.742.996-.532 1.357l3.789 6.497c1.608 2.759 5.579 3.654 8.946 1.73c3.365-1.923 4.56-5.764 2.955-8.517l-2.525-4.331c-.214-.367-.838-.59-1.472-.228c-.631.361-.742.997-.532 1.358l1.684 2.887a.75.75 0 0 1-.276 1.03c-1.542.88-2.015 2.585-1.34 3.743a.75.75 0 1 1-1.296.756c-.912-1.565-.543-3.45.635-4.782c.33-.372.443-.914.192-1.344z"></svg:path><svg:path d="M4.413 17.859a.75.75 0 0 1 1.026.27c.827 1.418 2.091 2.49 3.65 3.186a.75.75 0 0 1-.611 1.37c-1.812-.809-3.332-2.08-4.335-3.8a.75.75 0 0 1 .27-1.026M18.905 3.922c-1.014-1.036-2.46-1.417-3.875-1.015a.75.75 0 1 1-.41-1.442c1.938-.552 3.954-.025 5.357 1.408a.75.75 0 1 1-1.072 1.049" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHandShakeBoldDuotoneIcon {
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
  selector: 'svg[solarHandShakeLineDuotoneIcon],svg[solar-hand-shake-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.784 22c-1.685-.752-3.077-1.924-3.992-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" opacity=".5"></svg:path><svg:path fill="currentColor" d="m4.01 8.367l-.372-.652zm2.492.5l.648-.377zm-3.3 1.886l-.647.378zm4.495-7.38l.648-.378zm.842 1.443l-.648.378zm1.877 4.71a.75.75 0 0 0 1.296-.756zm-2.878 2.607a.75.75 0 1 0 1.296-.756zm-3.14-6.875l-.648.378zm7.44-2.327l.648-.378zm2.526 4.33l.648-.377zm1.683 2.888l.373.651a.75.75 0 0 0 .275-1.029zm1.616-4.773l-.648.378zm2.526 4.331l.648-.378zM6.99 17.25l.648-.378zm9.967 2.003l-.373-.65zM13.784 15.3a.75.75 0 0 0 1.296-.756zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357zM7.05 3.75l.842 1.444l1.296-.756l-.842-1.443zm.842 1.444l2.525 4.331l1.296-.755l-2.525-4.332zm.943 6.183L7.15 8.49l-1.296.755l1.684 2.888zM7.15 8.49L5.045 4.88l-1.295.756l2.104 3.61zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357zm6.357 1.088l2.526 4.332l1.296-.756l-2.526-4.331zm2.526 4.332l1.684 2.887l1.295-.756l-1.683-2.887zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774zm-.745-1.3c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357zm8.041 3.975l2.526 4.331l1.296-.756L18.31 5zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358zM2.555 11.131l3.788 6.497l1.296-.756l-3.788-6.497zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802z"></svg:path></svg:g>`,
})
export class SolarHandShakeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandShakeLinearIcon],svg[solar-hand-shake-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.784 22c-1.686-.752-3.078-1.924-3.993-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211"></svg:path><svg:path fill="currentColor" d="m4.01 8.367l-.372-.652zm2.492.5l.648-.377zm-3.3 1.886l-.647.378zm4.495-7.38l.648-.378zm.842 1.443l-.648.378zm1.877 4.71a.75.75 0 0 0 1.296-.756zm-2.878 2.607a.75.75 0 1 0 1.296-.756zm-3.14-6.875l-.648.378zm7.44-2.327l.648-.378zm2.526 4.33l.648-.377zm1.683 2.888l.373.651a.75.75 0 0 0 .275-1.029zm1.616-4.773l-.648.378zm2.526 4.331l.648-.378zM6.99 17.25l.648-.378zm9.967 2.003l-.373-.65zM13.784 15.3a.75.75 0 0 0 1.296-.756zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357zM7.05 3.75l.842 1.444l1.296-.756l-.842-1.443zm.842 1.444l2.525 4.331l1.296-.755l-2.525-4.332zm.943 6.183L7.15 8.49l-1.296.755l1.684 2.888zM7.15 8.49L5.045 4.88l-1.295.756l2.104 3.61zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357zm6.357 1.088l2.526 4.332l1.296-.756l-2.526-4.331zm2.526 4.332l1.684 2.887l1.295-.756l-1.683-2.887zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774zm-.745-1.3c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357zm8.041 3.975l2.526 4.331l1.296-.756L18.31 5zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358zM2.555 11.131l3.788 6.497l1.296-.756l-3.788-6.497zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802z"></svg:path></svg:g>`,
})
export class SolarHandShakeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandShakeOutlineIcon],svg[solar-hand-shake-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.906 3.922c-1.014-1.036-2.46-1.417-3.875-1.015a.75.75 0 1 1-.41-1.442c1.937-.552 3.954-.025 5.357 1.408a.75.75 0 1 1-1.072 1.049m-7.716-.614c-.214-.367-.838-.59-1.471-.227c-.632.36-.743.997-.532 1.357l2.525 4.332a.75.75 0 1 1-1.295.755L7.89 5.194L7.049 3.75c-.214-.367-.838-.59-1.471-.227c-.632.36-.743.997-.533 1.357l3.789 6.497a.75.75 0 1 1-1.296.756L5.854 9.245c-.214-.367-.837-.59-1.471-.227c-.631.36-.743.996-.532 1.357l3.788 6.497c1.61 2.759 5.58 3.654 8.947 1.73c3.364-1.923 4.56-5.764 2.955-8.517l-2.526-4.331c-.214-.367-.838-.59-1.471-.228c-.632.361-.742.997-.532 1.358l1.684 2.887a.75.75 0 0 1-.276 1.03c-1.543.88-2.015 2.585-1.34 3.743a.75.75 0 1 1-1.296.756c-1.06-1.817-.392-4.063 1.263-5.377zm2.73 1.702l-1.433-2.456c-.716-1.228-2.323-1.454-3.511-.774a2.8 2.8 0 0 0-.913.829c-.8-.881-2.178-.988-3.229-.388c-1.19.681-1.803 2.182-1.083 3.416l1.002 1.719a2.9 2.9 0 0 0-1.113.36c-1.191.68-1.804 2.182-1.084 3.416l3.789 6.497c2.11 3.62 7.064 4.518 10.986 2.276c3.924-2.242 5.621-6.949 3.507-10.575L18.31 5c-.716-1.228-2.323-1.454-3.511-.775c-.35.2-.65.471-.881.785M4.414 17.86a.75.75 0 0 1 1.026.27c.827 1.418 2.09 2.49 3.65 3.186a.75.75 0 0 1-.612 1.37c-1.811-.809-3.331-2.08-4.334-3.8a.75.75 0 0 1 .27-1.026" clip-rule="evenodd"></svg:path>`,
})
export class SolarHandShakeOutlineIcon {
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
  selector: 'svg[solarHandStarsBoldDuotoneIcon],svg[solar-hand-stars-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473s.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71s-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472s-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803s-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404s-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584s-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553s.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18s.184-.214.328-.473zm8.569 4.319c.254-.455.38-.682.57-.682s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.796.356s-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776s.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237zm-16 0C3.685 7.227 3.81 7 4 7s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.797.356c.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776c.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237z"></svg:path>`,
})
export class SolarHandStarsBoldDuotoneIcon {
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
  selector: 'svg[solarHandStarsLineDuotoneIcon],svg[solar-hand-stars-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473s.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71s-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472s-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803s-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404s-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584s-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553s.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18s.184-.214.328-.473zm8.569 4.319c.254-.455.38-.682.57-.682s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.796.356s-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776s.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237zm-16 0C3.685 7.227 3.81 7 4 7s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.797.356c.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776c.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237z"></svg:path><svg:path stroke-linecap="round" d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHandStarsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandStarsLinearIcon],svg[solar-hand-stars-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473s.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71s-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472s-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803s-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404s-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584s-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553s.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18s.184-.214.328-.473zm8.569 4.319c.254-.455.38-.682.57-.682s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.796.356s-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776s.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237zm-16 0C3.685 7.227 3.81 7 4 7s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.797.356c.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776c.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237z"></svg:path><svg:path stroke-linecap="round" d="M5 20.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"></svg:path><svg:rect width="3" height="8" x="2" y="14" rx="1.5"></svg:rect></svg:g>`,
})
export class SolarHandStarsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHandStarsOutlineIcon],svg[solar-hand-stars-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.9a13 13 0 0 0-.484.829l-.13.235l-.03.054c-.11.198-.257.466-.5.65c-.249.189-.548.255-.762.302l-.058.013l-.255.057c-.465.106-.755.173-.95.241c.12.181.323.42.651.804l.174.202l.04.047c.147.17.344.398.435.69c.09.29.059.589.036.817l-.006.062l-.027.271c-.047.484-.075.797-.075 1.018c.193-.068.456-.188.858-.373l.238-.11l.055-.025c.198-.093.478-.224.79-.224s.592.131.79.224l.055.025l.238.11c.402.185.665.305.858.373c0-.221-.028-.534-.075-1.018l-.027-.27l-.006-.063c-.023-.228-.053-.528.037-.817c.09-.292.287-.52.435-.69l.04-.047l.173-.202c.328-.384.53-.623.65-.804c-.194-.068-.484-.135-.95-.24l-.254-.058l-.058-.013c-.214-.047-.513-.113-.761-.302c-.244-.184-.391-.452-.5-.65l-.03-.054l-.131-.235A13 13 0 0 0 12 2.9m2.153 6.35h.002zm-4.308 0h.002zm1.038-7.365c.216-.282.568-.635 1.117-.635c.55 0 .901.353 1.117.635c.208.271.42.653.651 1.067l.026.046l.13.235l.133.23l.065.017l.173.04l.255.057l.052.012c.447.101.864.195 1.179.32c.341.134.753.376.912.887c.157.503-.036.937-.23 1.246c-.183.29-.465.62-.771.978l-.207.242l-.176.211c.002.056.009.135.024.286l.03.321c.047.48.09.917.074 1.261c-.016.358-.1.838-.525 1.16c-.438.333-.927.268-1.274.168c-.325-.093-.715-.272-1.133-.465l-.049-.022l-.238-.11L12 9.974l-.055.024l-.163.074l-.238.11l-.049.022c-.418.193-.808.372-1.133.465c-.347.1-.836.165-1.273-.168c-.426-.322-.51-.802-.526-1.16c-.016-.344.027-.781.073-1.26l.005-.052l.027-.27a5 5 0 0 0 .023-.286l-.057-.071l-.118-.14l-.174-.203l-.034-.039c-.306-.358-.588-.688-.77-.978c-.195-.309-.388-.743-.231-1.246c.159-.51.571-.753.912-.887c.315-.125.732-.219 1.18-.32l.051-.012l.255-.057l.239-.057l.04-.069l.091-.16l.131-.236l.026-.046c.23-.414.444-.796.651-1.067M4 8.202c.052.096.163.293.346.43c.195.15.43.2.528.22l.025.005l.02.005l-.032.038l-.018.02c-.068.079-.222.253-.292.48c-.07.225-.045.455-.033.56q0 .015.003.028v.011A1.3 1.3 0 0 0 4 9.855c-.24 0-.453.099-.548.144l.002-.011l.003-.028c.011-.105.036-.335-.034-.56c-.07-.227-.224-.401-.292-.48l-.018-.02l-.033-.038l.02-.005l.026-.005c.097-.02.333-.07.529-.22A1.3 1.3 0 0 0 4 8.202m-1.065-.076l-.142-.627zm.471 2.506v.003zm1.188.003v-.003zm-1.45-3.92c.129-.169.402-.465.856-.465s.728.296.856.464c.121.159.24.372.35.568l.018.034l.05.088l.084.019l.039.009c.21.047.445.1.63.173c.212.084.548.265.678.682c.127.409-.038.747-.156.934a5 5 0 0 1-.435.552l-.073.086l.012.12l.003.039c.023.226.046.47.037.67c-.01.212-.062.597-.41.861c-.362.274-.755.207-.967.146a4.6 4.6 0 0 1-.645-.264L4 11.4l-.071.033l-.037.016a5 5 0 0 1-.608.247c-.212.061-.605.128-.966-.146c-.35-.264-.402-.649-.411-.862c-.01-.2.015-.443.037-.67l.003-.038l.012-.12l-.073-.086l-.026-.03a5 5 0 0 1-.409-.522c-.118-.187-.283-.525-.156-.934c.13-.417.466-.598.677-.682a4.6 4.6 0 0 1 .67-.182l.085-.02l.049-.087l.019-.034c.11-.196.228-.41.349-.568M20 8.201c.052.096.163.293.346.43a1.3 1.3 0 0 0 .553.225l.02.005l-.032.038l-.018.02a1.4 1.4 0 0 0-.292.48c-.07.225-.045.455-.033.56q0 .015.003.028v.011A1.3 1.3 0 0 0 20 9.855c-.24 0-.453.099-.547.144v-.011l.003-.028a1.4 1.4 0 0 0-.033-.56a1.4 1.4 0 0 0-.292-.48l-.018-.02l-.033-.038l.02-.005l.026-.005c.097-.02.333-.07.528-.22c.183-.137.294-.334.346-.43m-.594 2.43v.003zm-.262-3.918c.129-.168.402-.464.856-.464s.727.296.856.464c.121.159.24.372.35.568l.018.034l.05.088l.084.019l.039.009c.21.047.446.1.63.173c.212.084.548.265.678.682c.127.409-.038.747-.156.934c-.107.169-.265.353-.41.523l-.025.03l-.073.085l.012.12l.003.039c.022.226.046.47.037.67c-.01.212-.062.597-.41.861c-.362.274-.755.207-.967.146c-.191-.055-.41-.156-.608-.247q-.018-.007-.037-.017L20 11.4l-.071.033l-.037.016a5 5 0 0 1-.608.247c-.212.061-.605.128-.966-.146c-.35-.264-.402-.649-.411-.862c-.01-.2.015-.443.037-.67l.003-.038l.012-.12l-.073-.086l-.026-.03a5 5 0 0 1-.409-.522c-.117-.187-.283-.525-.156-.934c.13-.417.466-.598.677-.682a4.6 4.6 0 0 1 .67-.182l.085-.02l.049-.087l.019-.034c.11-.196.228-.41.349-.568m1.45 3.92v-.002zm-11.91 3.814c1.866-.361 3.863-.28 5.48.684c.226.135.44.304.625.512c.376.423.57.947.579 1.473q.286-.186.577-.407l1.808-1.365a2.64 2.64 0 0 1 3.124 0c.835.63 1.169 1.763.57 2.723c-.425.681-1.066 1.624-1.717 2.228c-.66.61-1.597 1.124-2.306 1.466c-.862.416-1.792.646-2.697.792c-1.85.3-3.774.254-5.602-.123a14.3 14.3 0 0 0-2.865-.293H4a.75.75 0 0 1 0-1.5h2.26c1.062 0 2.135.111 3.168.324a14.1 14.1 0 0 0 5.06.111c.828-.134 1.602-.333 2.284-.662c.683-.33 1.451-.764 1.938-1.215c.493-.457 1.044-1.248 1.465-1.922c.127-.204.109-.497-.202-.732c-.37-.28-.947-.28-1.316 0l-1.808 1.365c-.72.545-1.609 1.128-2.71 1.304a9 9 0 0 1-.347.048q-.086.015-.179.02a10 10 0 0 1-1.932 0a.75.75 0 1 1 .141-1.493a8.5 8.5 0 0 0 1.668-.003l.03-.003a.742.742 0 0 0 .15-1.138a1.2 1.2 0 0 0-.275-.222c-1.181-.705-2.759-.822-4.426-.5a12.1 12.1 0 0 0-4.535 1.935a.75.75 0 0 1-.868-1.224a13.6 13.6 0 0 1 5.118-2.183" clip-rule="evenodd"></svg:path>`,
})
export class SolarHandStarsOutlineIcon {
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
  selector: 'svg[solarHanger2BoldDuotoneIcon],svg[solar-hanger-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18c0-1.886 0-2.828.586-3.414S8.114 14 10 14h4c1.886 0 2.828 0 3.414.586S18 16.114 18 18s0 2.828-.586 3.414S15.886 22 14 22h-4c-1.886 0-2.828 0-3.414-.586S6 19.886 6 18"></svg:path><svg:path fill="currentColor" d="M10.286 3.91c0-.568.538-1.16 1.374-1.16s1.374.592 1.374 1.16c0 .311-.112.581-.294.78a11 11 0 0 1-.38.385l-.08.08a9 9 0 0 0-.529.558c-.265.312-.553.723-.658 1.23a4.3 4.3 0 0 0-1.774.722l-7.095 4.992c-.927.652-1.166 1.702-.828 2.582c.332.866 1.194 1.511 2.306 1.511H6.01c.016-.637.061-1.12.184-1.5h-2.49c-.503 0-.801-.273-.907-.548c-.1-.261-.054-.576.29-.819l7.096-4.99a2.9 2.9 0 0 1 1.628-.513a2.9 2.9 0 0 1 1.655.482l7.433 5.01c.356.241.406.56.308.823c-.103.278-.4.555-.909.555h-2.49c.123.38.168.863.184 1.5h2.306c1.125 0 1.99-.657 2.316-1.533c.33-.891.073-1.948-.877-2.588l-7.433-5.01a4.3 4.3 0 0 0-1.614-.66q.075-.121.205-.274c.126-.149.274-.298.44-.464l.075-.072c.14-.14.295-.292.435-.445c.443-.48.69-1.115.69-1.795c0-1.542-1.364-2.659-2.874-2.659S8.786 2.367 8.786 3.91a.75.75 0 0 0 1.5 0" opacity=".5"></svg:path>`,
})
export class SolarHanger2BoldDuotoneIcon {
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
  selector: 'svg[solarHanger2LineDuotoneIcon],svg[solar-hanger-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9.536 3.91c0-1.055.95-1.91 2.124-1.91c1.173 0 2.124.855 2.124 1.91c0 .495-.18.947-.492 1.287c-.597.65-1.49 1.305-1.49 2.148v.285m0 0a3.66 3.66 0 0 1 2.082.61l7.433 5.01c1.306.882.613 2.75-1.02 2.75H18m-6.198-8.37a3.64 3.64 0 0 0-2.051.649L2.655 13.27C1.383 14.165 2.087 16 3.703 16H6" opacity=".5"></svg:path><svg:path d="M6 18c0-1.886 0-2.828.586-3.414S8.114 14 10 14h4c1.886 0 2.828 0 3.414.586S18 16.114 18 18s0 2.828-.586 3.414S15.886 22 14 22h-4c-1.886 0-2.828 0-3.414-.586S6 19.886 6 18Z"></svg:path></svg:g>`,
})
export class SolarHanger2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHanger2LinearIcon],svg[solar-hanger-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9.536 3.91c0-1.055.95-1.91 2.124-1.91c1.173 0 2.124.855 2.124 1.91c0 .495-.18.947-.492 1.287c-.597.65-1.49 1.305-1.49 2.148v.285m0 0a3.66 3.66 0 0 1 2.082.61l7.433 5.01c1.306.882.613 2.75-1.02 2.75H18m-6.198-8.37a3.64 3.64 0 0 0-2.051.649L2.655 13.27C1.383 14.165 2.087 16 3.703 16H6"></svg:path><svg:path d="M6 18c0-1.886 0-2.828.586-3.414S8.114 14 10 14h4c1.886 0 2.828 0 3.414.586S18 16.114 18 18s0 2.828-.586 3.414S15.886 22 14 22h-4c-1.886 0-2.828 0-3.414-.586S6 19.886 6 18Z"></svg:path></svg:g>`,
})
export class SolarHanger2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHanger2OutlineIcon],svg[solar-hanger-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.286 3.91c0-.568.538-1.16 1.374-1.16s1.374.592 1.374 1.16c0 .311-.112.581-.294.78a11 11 0 0 1-.38.385l-.08.08a9 9 0 0 0-.529.558c-.265.312-.553.723-.658 1.23a4.3 4.3 0 0 0-1.774.722l-7.095 4.992c-.927.652-1.166 1.702-.828 2.582c.332.866 1.194 1.511 2.306 1.511H5.26c-.01.364-.01.764-.01 1.198v.104c0 .899 0 1.648.08 2.242c.085.628.27 1.195.726 1.65c.456.456 1.023.642 1.65.726c.595.08 1.344.08 2.243.08h4.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.343.08-2.242v-.104c0-.434 0-.834-.01-1.198h1.557c1.125 0 1.99-.657 2.316-1.533c.33-.891.073-1.948-.877-2.588l-7.433-5.01a4.3 4.3 0 0 0-1.614-.66q.075-.121.205-.274c.126-.149.274-.298.44-.464l.075-.072c.14-.14.295-.292.435-.445c.443-.48.69-1.115.69-1.795c0-1.542-1.364-2.659-2.874-2.659S8.786 2.367 8.786 3.91a.75.75 0 0 0 1.5 0m8.3 11.34h1.711c.509 0 .806-.277.91-.555c.097-.264.047-.582-.31-.822l-7.432-5.01a2.9 2.9 0 0 0-1.655-.483a2.9 2.9 0 0 0-1.628.512l-7.095 4.991c-.346.243-.391.558-.29.819c.105.275.403.548.905.548h1.712c.109-.447.299-.852.641-1.194c.456-.456 1.023-.642 1.65-.726c.595-.08 1.344-.08 2.243-.08h4.104c.898 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.343.342.533.747.642 1.194m-11.47-.134c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066h4c.964 0 1.611.002 2.094.066c.462.063.66.17.79.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.789.3c-.483.064-1.13.066-2.094.066h-4c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.79-.3c-.13-.13-.237-.327-.299-.788c-.065-.483-.066-1.131-.066-2.095s.001-1.612.066-2.095c.062-.461.17-.659.3-.789" clip-rule="evenodd"></svg:path>`,
})
export class SolarHanger2OutlineIcon {
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
  selector: 'svg[solarHangerBoldDuotoneIcon],svg[solar-hanger-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.793 9.88a4.4 4.4 0 0 1 2.51.739l7.433 5.01c.95.64 1.207 1.697.877 2.588c-.325.876-1.191 1.533-2.316 1.533H3.702c-1.112 0-1.974-.645-2.306-1.51c-.338-.88-.1-1.931.828-2.583l7.095-4.991a4.4 4.4 0 0 1 2.473-.786m1.672 1.983a2.9 2.9 0 0 0-1.655-.483a2.9 2.9 0 0 0-1.628.512l-7.095 4.992c-.346.242-.391.557-.29.818c.105.276.403.548.905.548h16.595c.509 0 .806-.277.91-.555c.097-.263.047-.582-.31-.822z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.285 6.91c0-.568.538-1.16 1.374-1.16s1.374.592 1.374 1.16c0 .311-.111.581-.293.78c-.113.122-.238.245-.38.385l-.08.08a9 9 0 0 0-.53.558c-.265.312-.552.724-.658 1.23a4.5 4.5 0 0 1 1.596.016q.075-.12.205-.274a8 8 0 0 1 .441-.464l.074-.072c.141-.14.296-.292.436-.445c.442-.48.69-1.115.69-1.795c0-1.542-1.365-2.659-2.875-2.659S8.785 5.367 8.785 6.91a.75.75 0 1 0 1.5 0" opacity=".5"></svg:path>`,
})
export class SolarHangerBoldDuotoneIcon {
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
  selector: 'svg[solarHangerLineDuotoneIcon],svg[solar-hanger-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.536 6.91c0-1.055.95-1.91 2.124-1.91c1.173 0 2.124.855 2.124 1.91c0 .495-.18.947-.492 1.287c-.597.65-1.49 1.305-1.49 2.149v.284m0 0a3.66 3.66 0 0 1 2.082.61l7.433 5.01c1.306.881.613 2.75-1.02 2.75H3.703c-1.616 0-2.32-1.835-1.048-2.73l7.096-4.991a3.64 3.64 0 0 1 2.05-.65Z"></svg:path>`,
})
export class SolarHangerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHangerLinearIcon],svg[solar-hanger-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.536 6.91c0-1.055.95-1.91 2.124-1.91c1.173 0 2.124.855 2.124 1.91c0 .495-.18.947-.492 1.287c-.597.65-1.49 1.305-1.49 2.149v.284m0 0a3.66 3.66 0 0 1 2.082.61l7.433 5.01c1.306.881.613 2.75-1.02 2.75H3.703c-1.616 0-2.32-1.835-1.048-2.73l7.096-4.991a3.64 3.64 0 0 1 2.05-.65Z"></svg:path>`,
})
export class SolarHangerLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHangerOutlineIcon],svg[solar-hanger-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.66 5.75c-.836 0-1.374.592-1.374 1.16a.75.75 0 0 1-1.5 0c0-1.543 1.364-2.66 2.874-2.66s2.874 1.117 2.874 2.66c0 .68-.248 1.314-.69 1.794c-.14.153-.294.305-.435.445l-.074.072a8 8 0 0 0-.441.464a2.4 2.4 0 0 0-.205.274a4.3 4.3 0 0 1 1.614.66l7.433 5.01c.95.64 1.207 1.697.877 2.588c-.325.876-1.191 1.533-2.316 1.533H3.702c-1.112 0-1.974-.645-2.306-1.51c-.338-.88-.1-1.931.828-2.583l7.095-4.992a4.3 4.3 0 0 1 1.774-.722c.105-.507.393-.918.658-1.23c.172-.202.36-.391.529-.558l.08-.08c.143-.14.267-.263.38-.386c.182-.198.294-.468.294-.78c0-.567-.538-1.159-1.374-1.159m1.805 6.112a2.9 2.9 0 0 0-1.655-.482a2.9 2.9 0 0 0-1.628.512l-7.095 4.991c-.346.243-.391.558-.29.819c.105.275.403.548.905.548h16.595c.509 0 .806-.277.91-.555c.097-.264.047-.582-.31-.822z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHangerOutlineIcon {
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
  selector: 'svg[solarHashtagBoldDuotoneIcon],svg[solar-hashtag-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.2 2.277a.75.75 0 0 1 .523.924l-5 18a.75.75 0 0 1-1.445-.402l5-18a.75.75 0 0 1 .923-.522m8.999 0a.75.75 0 0 1 .523.924l-5 18a.75.75 0 1 1-1.445-.402l5-18a.75.75 0 0 1 .923-.522"></svg:path><svg:path d="M3.25 9A.75.75 0 0 1 4 8.25h18a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 9m-2 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHashtagBoldDuotoneIcon {
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
  selector: 'svg[solarHashtagChatBoldDuotoneIcon],svg[solar-hashtag-chat-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.814 21.236l-.27.458a.635.635 0 0 1-1.087 0l-.271-.458c-.21-.355-.316-.533-.485-.631s-.381-.102-.806-.11c-.628-.01-1.022-.049-1.352-.185a2.5 2.5 0 0 1-1.353-1.353c-.19-.46-.19-1.042-.19-2.207v-.5c0-1.637 0-2.455.368-3.056a2.5 2.5 0 0 1 .826-.826c.6-.368 1.42-.368 3.056-.368h1.5c1.637 0 2.455 0 3.056.368a2.5 2.5 0 0 1 .826.826c.368.6.368 1.42.368 3.056v.5c0 1.165 0 1.747-.19 2.207a2.5 2.5 0 0 1-1.353 1.353c-.33.137-.724.175-1.352.186c-.425.007-.638.01-.806.109c-.17.098-.274.276-.485.631"></svg:path><svg:path fill="currentColor" d="M10.2 2.277a.75.75 0 0 1 .523.924L9.32 8.25h7.443l1.514-5.45a.75.75 0 1 1 1.446.4L18.32 8.25H22a.75.75 0 0 1 0 1.5h-4.097L17.278 12h-1.556l.625-2.25H8.903l-1.527 5.5h4.628q-.005.44-.004 1v.5H6.959L5.723 21.2a.75.75 0 0 1-1.446-.4l1.125-4.05H2a.75.75 0 1 1 0-1.5h3.819l1.528-5.5H4a.75.75 0 0 1 0-1.5h3.763L9.277 2.8a.75.75 0 0 1 .924-.523m3.227 17.981l-.15.541a.75.75 0 0 0 1.445.402l.195-.705h-.023c-.628-.011-1.022-.05-1.352-.186z" opacity=".5"></svg:path>`,
})
export class SolarHashtagChatBoldDuotoneIcon {
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
  selector: 'svg[solarHashtagChatLineDuotoneIcon],svg[solar-hashtag-chat-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m17.543 21.694l-.645-.382zm.271-.458l.646.382zm-1.628 0l-.646.382zm.27.458l.646-.382zm-4.266-2.737l.693-.287zm2.705 1.539l-.013.75zm-1.352-.186l-.287.693zm8.267-1.353l.693.287zm-2.705 1.539l-.013-.75zm1.352-.186l.287.693zm.35-7.942l-.393.64zm.825.826l.64-.392zm-8.438-.826l-.392-.64zm-.826.826l-.64-.392zm3.333 7.411l.377-.648zm2.488 1.47l.27-.457l-1.29-.764l-.271.458zm-2.649-.457l.271.458l1.291-.764l-.271-.458zm1.358-.306A.13.13 0 0 1 17 21.25c.027 0 .075.016.102.062l-1.29.764c.531.899 1.845.899 2.377 0zm-.648-8.562h1.5v-1.5h-1.5zm5 3.5v.5h1.5v-.5zm-8.5.5v-.5h-1.5v.5zm-1.5 0c0 .572 0 1.039.025 1.419c.027.387.083.738.222 1.075l1.386-.574c-.05-.123-.09-.293-.111-.603a22 22 0 0 1-.022-1.317zm3.658 2.996c-.628-.01-.892-.052-1.078-.13l-.574 1.387c.475.196.998.232 1.626.243zm-3.41-.502a3.25 3.25 0 0 0 1.758 1.759l.574-1.386a1.75 1.75 0 0 1-.947-.947zm9.752-2.494c0 .593 0 1-.022 1.317c-.021.31-.06.48-.111.603l1.386.574c.139-.337.195-.688.221-1.075c.026-.38.026-.847.026-1.419zm-2.132 4.496c.628-.011 1.15-.047 1.626-.243l-.574-1.386c-.186.077-.45.118-1.078.129zm1.999-2.576a1.75 1.75 0 0 1-.947.947l.574 1.386a3.25 3.25 0 0 0 1.759-1.76zm-3.367-5.92c.833 0 1.405 0 1.846.043c.429.04.655.115.818.215l.784-1.28c-.438-.268-.921-.377-1.46-.429c-.529-.05-1.184-.049-1.988-.049zm5 3.5c0-.804 0-1.46-.05-1.987c-.05-.54-.16-1.023-.429-1.461l-1.279.784c.1.163.174.39.215.819c.042.44.043 1.012.043 1.845zm-2.336-3.242c.236.144.434.342.578.578l1.28-.784a3.25 3.25 0 0 0-1.074-1.073zM16.25 11.25c-.804 0-1.46 0-1.987.05c-.54.05-1.023.16-1.461.429l.784 1.279c.163-.1.39-.174.819-.215c.44-.042 1.012-.043 1.845-.043zm-3.5 5c0-.833 0-1.405.043-1.845c.04-.43.115-.656.215-.82l-1.28-.783c-.268.438-.377.921-.429 1.46c-.05.529-.049 1.184-.049 1.988zm.052-4.521a3.25 3.25 0 0 0-1.073 1.073l1.279.784c.144-.236.342-.434.578-.578zm4.029 9.125c-.098-.165-.197-.335-.297-.472a1.5 1.5 0 0 0-.456-.425l-.754 1.296c-.037-.021-.04-.04-.002.013c.048.065.106.162.218.352zm-1.95.392c.227.004.346.006.43.016c.071.008.053.014.013-.009l.754-1.296a1.5 1.5 0 0 0-.601-.186c-.17-.019-.37-.022-.57-.025zm3.579.372c.112-.19.17-.287.218-.352c.039-.053.035-.034-.002-.013l-.754-1.296c-.206.12-.347.276-.456.425c-.1.137-.2.306-.297.472zm.632-1.872c-.198.003-.399.006-.569.025c-.184.02-.393.064-.601.186l.754 1.296c-.04.023-.058.017.012.009c.085-.01.204-.012.43-.016z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3L5 21M19 3l-1.806 6.5M22 9H4m5 7H2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHashtagChatLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagChatLinearIcon],svg[solar-hashtag-chat-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m17.543 21.694l-.645-.382zm.271-.458l.646.382zm-1.628 0l-.646.382zm.27.458l.646-.382zm-4.266-2.737l.693-.287zm2.705 1.539l-.013.75zm-1.352-.186l-.287.693zm8.267-1.353l.693.287zm-2.705 1.539l-.013-.75zm1.352-.186l.287.693zm.35-7.942l-.393.64zm.825.826l.64-.392zm-8.438-.826l-.392-.64zm-.826.826l-.64-.392zm3.333 7.411l.377-.648zm2.488 1.47l.27-.457l-1.29-.764l-.271.458zm-2.649-.457l.271.458l1.291-.764l-.271-.458zm1.358-.306A.13.13 0 0 1 17 21.25c.027 0 .075.016.102.062l-1.29.764c.531.899 1.845.899 2.377 0zm-.648-8.562h1.5v-1.5h-1.5zm5 3.5v.5h1.5v-.5zm-8.5.5v-.5h-1.5v.5zm-1.5 0c0 .572 0 1.039.025 1.419c.027.387.083.738.222 1.075l1.386-.574c-.05-.123-.09-.293-.111-.603a22 22 0 0 1-.022-1.317zm3.658 2.996c-.628-.01-.892-.052-1.078-.13l-.574 1.387c.475.196.998.232 1.626.243zm-3.41-.502a3.25 3.25 0 0 0 1.758 1.759l.574-1.386a1.75 1.75 0 0 1-.947-.947zm9.752-2.494c0 .593 0 1-.022 1.317c-.021.31-.06.48-.111.603l1.386.574c.139-.337.195-.688.221-1.075c.026-.38.026-.847.026-1.419zm-2.132 4.496c.628-.011 1.15-.047 1.626-.243l-.574-1.386c-.186.077-.45.118-1.078.129zm1.999-2.576a1.75 1.75 0 0 1-.947.947l.574 1.386a3.25 3.25 0 0 0 1.759-1.76zm-3.367-5.92c.833 0 1.405 0 1.846.043c.429.04.655.115.818.215l.784-1.28c-.438-.268-.921-.377-1.46-.429c-.529-.05-1.184-.049-1.988-.049zm5 3.5c0-.804 0-1.46-.05-1.987c-.05-.54-.16-1.023-.429-1.461l-1.279.784c.1.163.174.39.215.819c.042.44.043 1.012.043 1.845zm-2.336-3.242c.236.144.434.342.578.578l1.28-.784a3.25 3.25 0 0 0-1.074-1.073zM16.25 11.25c-.804 0-1.46 0-1.987.05c-.54.05-1.023.16-1.461.429l.784 1.279c.163-.1.39-.174.819-.215c.44-.042 1.012-.043 1.845-.043zm-3.5 5c0-.833 0-1.405.043-1.845c.04-.43.115-.656.215-.82l-1.28-.783c-.268.438-.377.921-.429 1.46c-.05.529-.049 1.184-.049 1.988zm.052-4.521a3.25 3.25 0 0 0-1.073 1.073l1.279.784c.144-.236.342-.434.578-.578zm4.029 9.125c-.098-.165-.197-.335-.297-.472a1.5 1.5 0 0 0-.456-.425l-.754 1.296c-.037-.021-.04-.04-.002.013c.048.065.106.162.218.352zm-1.95.392c.227.004.346.006.43.016c.071.008.053.014.013-.009l.754-1.296a1.5 1.5 0 0 0-.601-.186c-.17-.019-.37-.022-.57-.025zm3.579.372c.112-.19.17-.287.218-.352c.039-.053.035-.034-.002-.013l-.754-1.296c-.206.12-.347.276-.456.425c-.1.137-.2.306-.297.472zm.632-1.872c-.198.003-.399.006-.569.025c-.184.02-.393.064-.601.186l.754 1.296c-.04.023-.058.017.012.009c.085-.01.204-.012.43-.016z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3L5 21M19 3l-1.806 6.5M22 9H4m-2 7h7"></svg:path></svg:g>`,
})
export class SolarHashtagChatLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagChatOutlineIcon],svg[solar-hashtag-chat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.723 3.2a.75.75 0 1 0-1.446-.4l-1.514 5.45H9.32l1.403-5.05a.75.75 0 1 0-1.446-.4L7.763 8.25H4a.75.75 0 1 0 0 1.5h3.347l-1.528 5.5H2a.75.75 0 0 0 0 1.5h3.402L4.277 20.8a.75.75 0 0 0 1.446.4l1.236-4.45H9a.75.75 0 1 0 0-1.5H7.376l1.527-5.5h7.584a.749.749 0 0 0 1.415 0H22a.75.75 0 0 0 0-1.5h-3.68z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.213 11.25h1.574c.787 0 1.43 0 1.95.05c.54.05 1.023.16 1.461.429a3.25 3.25 0 0 1 1.073 1.073c.269.438.378.921.43 1.46c.049.52.049 1.164.049 1.951v.563c0 .56 0 1.019-.026 1.393c-.026.387-.082.738-.221 1.075a3.25 3.25 0 0 1-1.76 1.759c-.474.196-.997.232-1.625.243a5 5 0 0 0-.43.016h-.008l-.002.004a5 5 0 0 0-.218.352l-.271.458c-.532.899-1.846.899-2.378 0l-.27-.458a5 5 0 0 0-.22-.352l-.002-.003l-.007-.001a5 5 0 0 0-.43-.016c-.628-.011-1.15-.047-1.626-.243a3.25 3.25 0 0 1-1.759-1.76c-.139-.336-.195-.687-.222-1.074c-.025-.374-.025-.833-.025-1.393v-.563c0-.787 0-1.43.05-1.95c.05-.54.16-1.023.429-1.461a3.25 3.25 0 0 1 1.073-1.073c.438-.269.921-.378 1.46-.43c.52-.05 1.164-.05 1.951-.05m-1.809 1.543c-.429.04-.655.115-.818.215a1.75 1.75 0 0 0-.578.578c-.1.162-.174.39-.215.819c-.042.44-.043 1.012-.043 1.845v.5c0 .593 0 1 .022 1.317c.021.31.06.48.111.603c.178.428.519.77.947.947c.186.077.45.118 1.078.129h.026c.19.004.38.007.543.025c.184.02.393.064.601.186c.206.12.347.276.456.425c.095.13.19.291.284.45l.182.307l.182-.307c.094-.159.189-.32.284-.45c.109-.15.25-.306.456-.425c.208-.122.417-.166.601-.186c.163-.018.353-.021.543-.025h.026c.628-.011.892-.052 1.078-.13a1.75 1.75 0 0 0 .947-.946c.05-.123.09-.293.111-.603c.022-.317.022-.724.022-1.317v-.5c0-.833 0-1.405-.043-1.845c-.04-.43-.115-.656-.215-.82a1.75 1.75 0 0 0-.578-.577c-.163-.1-.39-.174-.819-.215c-.44-.042-1.012-.043-1.845-.043h-1.5c-.833 0-1.405 0-1.845.043" clip-rule="evenodd"></svg:path>`,
})
export class SolarHashtagChatOutlineIcon {
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
  selector: 'svg[solarHashtagCircleBoldDuotoneIcon],svg[solar-hashtag-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.718 7.215a.75.75 0 0 0-1.436-.43l-.74 2.465H7a.75.75 0 0 0 0 1.5h2.092l-.75 2.5H6a.75.75 0 1 0 0 1.5h1.892l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465h3.434l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465H17a.75.75 0 0 0 0-1.5h-2.092l.75-2.5H18a.75.75 0 0 0 0-1.5h-1.892l.61-2.035a.75.75 0 0 0-1.436-.43l-.74 2.465h-3.434zm2.374 3.535l-.75 2.5H9.908l.75-2.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHashtagCircleBoldDuotoneIcon {
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
  selector: 'svg[solarHashtagCircleLineDuotoneIcon],svg[solar-hashtag-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 7L8 17m8-10l-3 10m5-7H7m10 4H6"></svg:path><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHashtagCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagCircleLinearIcon],svg[solar-hashtag-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 7L8 17m8-10l-3 10m5-7H7m10 4H6"></svg:path><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"></svg:path></svg:g>`,
})
export class SolarHashtagCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagCircleOutlineIcon],svg[solar-hashtag-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.216 6.282a.75.75 0 0 1 .502.934l-.61 2.034h3.434l.74-2.466a.75.75 0 0 1 1.436.432l-.61 2.034H18a.75.75 0 0 1 0 1.5h-2.342l-.75 2.5H17a.75.75 0 0 1 0 1.5h-2.542l-.74 2.465a.75.75 0 0 1-1.436-.43l.61-2.035H9.458l-.74 2.465a.75.75 0 1 1-1.436-.43l.61-2.035H6a.75.75 0 0 1 0-1.5h2.342l.75-2.5H7a.75.75 0 0 1 0-1.5h2.542l.74-2.466a.75.75 0 0 1 .934-.502m-.558 4.468h3.434l-.75 2.5H9.908z"></svg:path><svg:path d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0"></svg:path></svg:g>`,
})
export class SolarHashtagCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagLineDuotoneIcon],svg[solar-hashtag-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 3L5 21M19 3l-5 18"></svg:path><svg:path d="M22 9H4m16 7H2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHashtagLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagLinearIcon],svg[solar-hashtag-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3L5 21M19 3l-5 18m8-12H4m16 7H2"></svg:path>`,
})
export class SolarHashtagLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagOutlineIcon],svg[solar-hashtag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.723 3.2a.75.75 0 1 0-1.446-.4L7.763 8.25H4a.75.75 0 1 0 0 1.5h3.347l-1.528 5.5H2a.75.75 0 0 0 0 1.5h3.402L4.277 20.8a.75.75 0 0 0 1.446.4l1.236-4.45h7.443l-1.125 4.05a.75.75 0 0 0 1.446.4l1.236-4.45H20a.75.75 0 1 0 0-1.5h-3.624l1.527-5.5H22a.75.75 0 0 0 0-1.5h-3.68l1.403-5.05a.75.75 0 1 0-1.446-.4l-1.514 5.45H9.32zm4.096 12.05l1.528-5.5H8.903l-1.527 5.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHashtagOutlineIcon {
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
  selector: 'svg[solarHashtagSquareBoldDuotoneIcon],svg[solar-hashtag-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.718 7.215a.75.75 0 0 0-1.436-.43l-.74 2.465H7a.75.75 0 0 0 0 1.5h2.092l-.75 2.5H6a.75.75 0 1 0 0 1.5h1.892l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465h3.434l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465H17a.75.75 0 0 0 0-1.5h-2.092l.75-2.5H18a.75.75 0 0 0 0-1.5h-1.892l.61-2.035a.75.75 0 0 0-1.436-.43l-.74 2.465h-3.434zm2.374 3.535l-.75 2.5H9.908l.75-2.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHashtagSquareBoldDuotoneIcon {
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
  selector: 'svg[solarHashtagSquareLineDuotoneIcon],svg[solar-hashtag-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 7L8 17m8-10l-3 10m5-7H7m10 4H6"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHashtagSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagSquareLinearIcon],svg[solar-hashtag-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 7L8 17m8-10l-3 10m5-7H7m10 4H6"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarHashtagSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHashtagSquareOutlineIcon],svg[solar-hashtag-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.216 6.282a.75.75 0 0 1 .502.934l-.61 2.034h3.434l.74-2.466a.75.75 0 0 1 1.436.432l-.61 2.034H18a.75.75 0 0 1 0 1.5h-2.342l-.75 2.5H17a.75.75 0 0 1 0 1.5h-2.542l-.74 2.465a.75.75 0 0 1-1.436-.43l.61-2.035H9.458l-.74 2.465a.75.75 0 1 1-1.436-.43l.61-2.035H6a.75.75 0 0 1 0-1.5h2.342l.75-2.5H7a.75.75 0 0 1 0-1.5h2.542l.74-2.466a.75.75 0 0 1 .934-.502m-.558 4.468h3.434l-.75 2.5H9.908z"></svg:path><svg:path d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62"></svg:path></svg:g>`,
})
export class SolarHashtagSquareOutlineIcon {
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
  selector: 'svg[solarHeadphonesRoundBoldDuotoneIcon],svg[solar-headphones-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v2.793a.75.75 0 0 1 1 .707v2a.75.75 0 0 1-1.5 0V17h-1v-5a8.25 8.25 0 0 0-16.5 0v5h-1v.5a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1-.707z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 14.05c0-.85 0-1.274-.21-1.57a1.2 1.2 0 0 0-.409-.358c-.325-.174-.763-.134-1.64-.053c-1.48.134-2.218.202-2.748.571a2.35 2.35 0 0 0-.661.7C2 13.885 2 14.6 2 16.03v1.74c0 1.417 0 2.126.338 2.673c.127.205.286.39.471.547c.495.423 1.217.555 2.662.818c1.016.186 1.525.279 1.9.083q.209-.11.36-.287C8 21.285 8 20.786 8 19.789zm8 0c0-.85 0-1.274.21-1.57c.105-.148.245-.271.409-.358c.325-.174.763-.134 1.64-.053c1.48.134 2.218.202 2.748.571c.268.188.493.426.661.7c.332.544.332 1.26.332 2.69v1.74c0 1.417 0 2.126-.338 2.673c-.127.205-.286.39-.471.547c-.495.423-1.217.555-2.662.818c-1.016.186-1.525.279-1.9.083a1.2 1.2 0 0 1-.36-.287C16 21.285 16 20.786 16 19.789z"></svg:path>`,
})
export class SolarHeadphonesRoundBoldDuotoneIcon {
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
  selector: 'svg[solarHeadphonesRoundLineDuotoneIcon],svg[solar-headphones-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 17v-5a9 9 0 1 0-18 0v5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 15.5v2m-20-2v2" opacity=".5"></svg:path><svg:path d="M8 13.845c0-.765 0-1.147-.175-1.413a1 1 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048c-1.232.121-1.848.182-2.29.514a2.1 2.1 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406q.16.277.392.492c.413.38 1.014.5 2.218.736c.847.167 1.271.251 1.584.075a1 1 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01zm8 0c0-.765 0-1.147.175-1.413c.088-.133.204-.244.34-.322c.271-.156.637-.12 1.368-.048c1.232.121 1.848.182 2.29.514c.223.169.41.383.55.63c.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406q-.16.277-.392.492c-.413.38-1.014.5-2.218.736c-.847.167-1.271.251-1.584.075a1 1 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01z"></svg:path></svg:g>`,
})
export class SolarHeadphonesRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundLinearIcon],svg[solar-headphones-round-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 17v-5a9 9 0 1 0-18 0v5"></svg:path><svg:path stroke-linecap="round" d="M22 15.5v2m-20-2v2"></svg:path><svg:path d="M8 13.845c0-.765 0-1.147-.175-1.413a1 1 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048c-1.232.121-1.848.182-2.29.514a2.1 2.1 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406q.16.277.392.492c.413.38 1.014.5 2.218.736c.847.167 1.271.251 1.584.075a1 1 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01zm8 0c0-.765 0-1.147.175-1.413c.088-.133.204-.244.34-.322c.271-.156.637-.12 1.368-.048c1.232.121 1.848.182 2.29.514c.223.169.41.383.55.63c.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406q-.16.277-.392.492c-.413.38-1.014.5-2.218.736c-.847.167-1.271.251-1.584.075a1 1 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01z"></svg:path></svg:g>`,
})
export class SolarHeadphonesRoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundOutlineIcon],svg[solar-headphones-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v2.793a.75.75 0 0 1 1 .707v2a.75.75 0 0 1-1.008.704q-.008.3-.03.555c-.04.435-.128.836-.343 1.212c-.143.25-.323.477-.535.672c-.32.295-.692.463-1.103.588c-.388.117-.871.213-1.443.325l-.074.015c-.39.077-.744.147-1.04.17c-.317.025-.675.008-1.017-.185a1.8 1.8 0 0 1-.524-.45c-.237-.304-.316-.65-.35-.97c-.033-.3-.033-.672-.033-1.088v-5.236c0-.354 0-.672.025-.933c.027-.279.09-.58.273-.859c.151-.23.354-.422.593-.56c.295-.17.603-.208.88-.21c.257-.002.565.029.901.062l.07.007c.586.057 1.079.106 1.478.185c.274.054.533.128.776.245a8.25 8.25 0 0 0-16.492 0c.243-.117.502-.19.776-.245c.4-.079.892-.127 1.478-.185l.07-.007c.336-.033.644-.064.9-.062c.278.002.586.04.88.21c.24.138.443.33.594.56c.183.28.245.58.273.859c.025.26.025.579.025.933v5.236c0 .416 0 .787-.032 1.088c-.035.32-.114.666-.351.97a1.8 1.8 0 0 1-.524.45c-.342.193-.7.21-1.018.185a10 10 0 0 1-1.04-.17l-.073-.015c-.572-.112-1.055-.208-1.443-.325c-.411-.125-.783-.293-1.103-.588a2.8 2.8 0 0 1-.535-.672c-.215-.376-.302-.777-.343-1.212a9 9 0 0 1-.03-.555a.75.75 0 0 1-1.008-.704v-2a.75.75 0 0 1 1-.707zm1.5 5.193c0 .652 0 1.09.032 1.427c.03.326.084.49.15.606q.104.178.25.314c.092.085.228.166.522.255c.308.094.717.175 1.333.297c.442.087.71.138.906.154a.7.7 0 0 0 .171-.001a.3.3 0 0 0 .07-.062a.7.7 0 0 0 .042-.207c.023-.211.024-.5.024-.966v-5.165c0-.398 0-.641-.018-.82a.7.7 0 0 0-.034-.182a.3.3 0 0 0-.083-.08a.7.7 0 0 0-.147-.013a9 9 0 0 0-.777.058c-.631.062-1.05.104-1.37.168c-.305.06-.447.128-.542.2c-.14.105-.26.24-.35.4c-.064.114-.118.278-.147.609c-.031.341-.032.785-.032 1.443zm16.5-1.565c0-.658 0-1.102-.032-1.443c-.03-.33-.083-.495-.147-.61a1.3 1.3 0 0 0-.35-.4c-.095-.071-.237-.139-.542-.2c-.32-.063-.739-.105-1.37-.167a9 9 0 0 0-.777-.058a.7.7 0 0 0-.147.012a.3.3 0 0 0-.083.081a.7.7 0 0 0-.034.181c-.017.18-.018.423-.018.82v5.166c0 .466.001.755.024.965a.7.7 0 0 0 .042.208q.032.04.07.062c.016.003.064.01.17 0c.198-.015.465-.066.907-.153c.616-.122 1.025-.203 1.333-.297c.294-.089.43-.17.522-.255q.146-.136.25-.314c.066-.117.12-.28.15-.606c.031-.338.032-.775.032-1.427z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeadphonesRoundOutlineIcon {
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
  selector: 'svg[solarHeadphonesRoundSoundBoldDuotoneIcon],svg[solar-headphones-round-sound-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.124C2 6.533 6.477 2 12 2s10 4.533 10 10.124v5.243c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.458.22-1.004.307-1.801.434l-.13.02a13 13 0 0 1-.727.105c-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35a2.2 2.2 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.1 2.1 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007l.11.01c.783.062 1.32.104 1.775.275q.481.181.883.487v-1.174c0-4.811-3.853-8.711-8.605-8.711s-8.605 3.9-8.605 8.711v1.174c.267-.203.563-.368.883-.487c.455-.17.992-.213 1.775-.276l.11-.009l.093-.007c.42-.034.78-.063 1.096.01a2.1 2.1 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743c-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35a2.2 2.2 0 0 1-.641.017c-.201-.02-.444-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188c-.118-.405-.139-.857-.142-1.461L2 17.58z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m3 1.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m-6 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 9 7.25" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarHeadphonesRoundSoundBoldDuotoneIcon {
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
  selector: 'svg[solarHeadphonesRoundSoundLineDuotoneIcon],svg[solar-headphones-round-sound-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 17v-5c0-5.523-4.477-10-10-10S2 6.477 2 12v6" opacity=".5"></svg:path><svg:path d="M8 15.187c0-.578 0-.867-.069-1.097a1.53 1.53 0 0 0-1.095-1.059c-.225-.054-.5-.03-1.052.015c-.956.079-1.435.118-1.825.27c-.899.347-1.585 1.123-1.846 2.088C2 15.823 2 16.324 2 17.328v.186c0 1.03 0 1.544.123 1.979a3.1 3.1 0 0 0 1.588 1.944c.392.195.878.275 1.85.436c.645.106.968.16 1.229.106a1.52 1.52 0 0 0 1.119-1C8 20.718 8 20.376 8 19.693zm8 0c0-.578 0-.867.069-1.097a1.53 1.53 0 0 1 1.095-1.059c.225-.054.5-.03 1.051.015c.957.079 1.436.118 1.826.27c.899.347 1.585 1.123 1.846 2.088c.113.419.113.92.113 1.924v.186c0 1.03 0 1.544-.123 1.979a3.1 3.1 0 0 1-1.588 1.944c-.392.195-.878.275-1.85.436c-.645.106-.968.16-1.229.106a1.52 1.52 0 0 1-1.119-1C16 20.718 16 20.376 16 19.693z"></svg:path><svg:path stroke-linecap="round" d="M12 6.5v5M15 8v2M9 8v2"></svg:path></svg:g>`,
})
export class SolarHeadphonesRoundSoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundSoundLinearIcon],svg[solar-headphones-round-sound-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 17v-5c0-5.523-4.477-10-10-10S2 6.477 2 12v6"></svg:path><svg:path d="M8 15.187c0-.578 0-.867-.069-1.097a1.53 1.53 0 0 0-1.095-1.059c-.225-.054-.5-.03-1.052.015c-.956.079-1.435.118-1.825.27c-.899.347-1.585 1.123-1.846 2.088C2 15.823 2 16.324 2 17.328v.186c0 1.03 0 1.544.123 1.979a3.1 3.1 0 0 0 1.588 1.944c.392.195.878.275 1.85.436c.645.106.968.16 1.229.106a1.52 1.52 0 0 0 1.119-1C8 20.718 8 20.376 8 19.693zm8 0c0-.578 0-.867.069-1.097a1.53 1.53 0 0 1 1.095-1.059c.225-.054.5-.03 1.051.015c.957.079 1.436.118 1.826.27c.899.347 1.585 1.123 1.846 2.088c.113.419.113.92.113 1.924v.186c0 1.03 0 1.544-.123 1.979a3.1 3.1 0 0 1-1.588 1.944c-.392.195-.878.275-1.85.436c-.645.106-.968.16-1.229.106a1.52 1.52 0 0 1-1.119-1C16 20.718 16 20.376 16 19.693z"></svg:path><svg:path stroke-linecap="round" d="M12 6.5v5M15 8v2M9 8v2"></svg:path></svg:g>`,
})
export class SolarHeadphonesRoundSoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesRoundSoundOutlineIcon],svg[solar-headphones-round-sound-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12v5.634c0 .913 0 1.526-.151 2.063a3.85 3.85 0 0 1-1.976 2.412c-.495.246-1.086.343-1.941.484l-.121.02l-.022.003c-.304.05-.565.094-.782.116a2.3 2.3 0 0 1-.698-.019a2.27 2.27 0 0 1-1.675-1.486a2.5 2.5 0 0 1-.121-.69c-.013-.225-.013-.5-.013-.823v-4.628c0-.477 0-.873.1-1.212a2.28 2.28 0 0 1 1.64-1.572c.344-.083.737-.05 1.185-.012l.102.008l.12.01c.84.07 1.421.117 1.914.308q.513.2.939.532V12a9.25 9.25 0 1 0-18.5 0v1.148q.426-.332.939-.532c.493-.191 1.073-.239 1.913-.308l.12-.01l.103-.008c.448-.038.84-.07 1.186.012c.79.19 1.406.798 1.638 1.572c.102.338.102.735.101 1.212v4.628c0 .324 0 .598-.013.823a2.5 2.5 0 0 1-.12.69a2.27 2.27 0 0 1-1.676 1.486a2.3 2.3 0 0 1-.698.019a14 14 0 0 1-.782-.116l-.022-.003l-.12-.02c-.856-.141-1.447-.238-1.942-.485a3.85 3.85 0 0 1-1.976-2.411c-.13-.462-.148-.98-.15-1.697v-.142l-.001-.225zm1.5 5.514c0 1.078.007 1.465.095 1.775a2.35 2.35 0 0 0 1.2 1.476c.267.133.615.199 1.639.368c.331.055.547.09.712.107c.162.016.22.009.243.004a.77.77 0 0 0 .562-.513c.012-.034.029-.105.039-.279c.01-.177.01-.409.01-.759v-4.506c0-.634-.008-.784-.037-.881a.78.78 0 0 0-.552-.545c-.078-.019-.203-.018-.815.032c-1.008.083-1.352.12-1.616.222A2.34 2.34 0 0 0 2.837 15.6c-.08.299-.087.677-.087 1.728zM12 5.75a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75m-3 1.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 9 7.25m6 0a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V8a.75.75 0 0 1 .75-.75m3.154 6.543c-.612-.05-.737-.051-.815-.032a.78.78 0 0 0-.552.545c-.029.097-.037.247-.037.881v4.506c0 .35 0 .582.01.76c.01.173.027.244.04.278a.77.77 0 0 0 .561.513a1 1 0 0 0 .243-.004c.166-.017.38-.052.713-.107c1.023-.17 1.371-.235 1.638-.367a2.35 2.35 0 0 0 1.2-1.477c.088-.31.095-.697.095-1.775v-.186c0-1.05-.006-1.43-.087-1.728a2.34 2.34 0 0 0-1.393-1.585c-.264-.103-.608-.139-1.616-.222" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeadphonesRoundSoundOutlineIcon {
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
  selector: 'svg[solarHeadphonesSquareBoldDuotoneIcon],svg[solar-headphones-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.955 2.25h.09c1.837 0 3.276 0 4.419.124c1.165.126 2.11.388 2.916.974a5.8 5.8 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916c.124 1.143.124 2.582.124 4.419v2.838a.75.75 0 0 1 1 .707v2a.75.75 0 0 1-1.309.5H20.25v-6c0-1.892-.001-3.25-.115-4.302c-.113-1.038-.328-1.688-.697-2.196a4.3 4.3 0 0 0-.94-.94c-.508-.37-1.158-.585-2.196-.697c-1.052-.114-2.41-.115-4.302-.115s-3.25.001-4.302.115c-1.038.112-1.688.328-2.196.697a4.3 4.3 0 0 0-.94.94c-.37.508-.585 1.158-.697 2.196C3.751 8.75 3.75 10.108 3.75 12v6H2.559a.75.75 0 0 1-1.309-.5v-2a.75.75 0 0 1 1-.707v-2.838c0-1.837 0-3.276.124-4.419c.126-1.165.388-2.11.974-2.916A5.8 5.8 0 0 1 4.62 3.348c.807-.586 1.75-.848 2.916-.974c1.143-.124 2.582-.124 4.419-.124" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 14.05c0-.85 0-1.274-.21-1.57a1.2 1.2 0 0 0-.409-.358c-.325-.174-.763-.134-1.64-.053c-1.48.134-2.218.202-2.748.571a2.35 2.35 0 0 0-.661.7C2 13.885 2 14.6 2 16.03v1.74c0 1.417 0 2.126.338 2.673c.127.205.286.39.471.547c.495.423 1.217.555 2.662.818c1.016.186 1.525.279 1.9.083q.209-.11.36-.287C8 21.285 8 20.786 8 19.789zm8 0c0-.85 0-1.274.21-1.57c.105-.148.245-.271.409-.358c.325-.174.763-.134 1.64-.053c1.48.134 2.218.202 2.748.571c.268.188.493.426.661.7c.332.544.332 1.26.332 2.69v1.74c0 1.417 0 2.126-.338 2.673c-.127.205-.286.39-.471.547c-.495.423-1.217.555-2.662.818c-1.016.186-1.525.279-1.9.083a1.2 1.2 0 0 1-.36-.287C16 21.285 16 20.786 16 19.789z"></svg:path>`,
})
export class SolarHeadphonesSquareBoldDuotoneIcon {
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
  selector: 'svg[solarHeadphonesSquareLineDuotoneIcon],svg[solar-headphones-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 18v-6c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12v6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 15.5v2m-20-2v2" opacity=".5"></svg:path><svg:path d="M8 13.845c0-.765 0-1.147-.175-1.413a1 1 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048c-1.232.121-1.848.182-2.29.514a2.1 2.1 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406q.16.277.392.492c.413.38 1.014.5 2.218.736c.847.167 1.271.251 1.584.075a1 1 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01zm8 0c0-.765 0-1.147.175-1.413c.088-.133.204-.244.34-.322c.271-.156.637-.12 1.368-.048c1.232.121 1.848.182 2.29.514c.223.169.41.383.55.63c.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406q-.16.277-.392.492c-.413.38-1.014.5-2.218.736c-.847.167-1.271.251-1.584.075a1 1 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01z"></svg:path></svg:g>`,
})
export class SolarHeadphonesSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareLinearIcon],svg[solar-headphones-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 18v-6c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12v6"></svg:path><svg:path stroke-linecap="round" d="M22 15.5v2m-20-2v2"></svg:path><svg:path d="M8 13.845c0-.765 0-1.147-.175-1.413a1 1 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048c-1.232.121-1.848.182-2.29.514a2.1 2.1 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406q.16.277.392.492c.413.38 1.014.5 2.218.736c.847.167 1.271.251 1.584.075a1 1 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01zm8 0c0-.765 0-1.147.175-1.413c.088-.133.204-.244.34-.322c.271-.156.637-.12 1.368-.048c1.232.121 1.848.182 2.29.514c.223.169.41.383.55.63c.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406q-.16.277-.392.492c-.413.38-1.014.5-2.218.736c-.847.167-1.271.251-1.584.075a1 1 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01z"></svg:path></svg:g>`,
})
export class SolarHeadphonesSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareOutlineIcon],svg[solar-headphones-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.955 2.25h.09c1.837 0 3.276 0 4.419.124c1.165.126 2.11.388 2.916.974a5.8 5.8 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916c.124 1.143.124 2.582.124 4.419v2.838a.75.75 0 0 1 1 .707v2a.75.75 0 0 1-1.008.704q-.008.3-.03.555c-.04.435-.128.836-.343 1.212c-.143.25-.323.477-.535.672c-.32.295-.692.463-1.103.588c-.388.117-.871.213-1.443.325l-.074.015c-.39.077-.744.147-1.04.17c-.317.025-.675.008-1.017-.185a1.8 1.8 0 0 1-.524-.45c-.237-.304-.316-.65-.35-.97c-.033-.3-.033-.672-.033-1.088v-5.236c0-.354 0-.672.025-.933c.027-.279.09-.58.273-.859c.151-.23.354-.422.593-.56c.295-.17.603-.208.88-.21c.257-.002.565.029.901.062l.07.007c.586.057 1.079.106 1.478.185c.275.055.536.129.78.246c0-1.762-.006-3.047-.115-4.052c-.113-1.038-.328-1.688-.697-2.196a4.3 4.3 0 0 0-.94-.94c-.508-.37-1.158-.585-2.196-.697c-1.052-.114-2.41-.115-4.302-.115s-3.25.001-4.302.115c-1.038.112-1.688.328-2.196.697a4.3 4.3 0 0 0-.94.94c-.37.508-.585 1.158-.697 2.196c-.109 1.005-.115 2.29-.115 4.052a3.3 3.3 0 0 1 .78-.246c.4-.079.892-.127 1.478-.185l.07-.007c.336-.033.644-.064.9-.062c.278.002.586.04.88.21c.24.138.443.33.594.56c.183.28.245.58.273.859c.025.26.025.579.025.933v5.236c0 .416 0 .787-.032 1.088c-.035.32-.114.666-.351.97a1.8 1.8 0 0 1-.524.45c-.342.193-.7.21-1.018.185a10 10 0 0 1-1.04-.17l-.073-.015c-.572-.112-1.055-.208-1.443-.325c-.411-.125-.783-.293-1.103-.588a2.8 2.8 0 0 1-.535-.672c-.215-.376-.302-.777-.343-1.212a9 9 0 0 1-.03-.555a.75.75 0 0 1-1.008-.704v-2a.75.75 0 0 1 1-.707v-2.838c0-1.837 0-3.276.124-4.419c.126-1.165.388-2.11.974-2.916A5.8 5.8 0 0 1 4.62 3.348c.807-.586 1.75-.848 2.916-.974c1.143-.124 2.582-.124 4.419-.124M3.75 17.193c0 .652 0 1.09.032 1.427c.03.326.084.49.15.606q.104.178.25.314c.092.085.228.166.522.255c.308.094.717.175 1.333.297c.442.087.71.138.906.154a.7.7 0 0 0 .171-.001a.3.3 0 0 0 .07-.062a.7.7 0 0 0 .042-.207c.023-.211.024-.5.024-.966v-5.165c0-.398 0-.641-.018-.82a.7.7 0 0 0-.034-.182a.3.3 0 0 0-.083-.08a.7.7 0 0 0-.147-.013a9 9 0 0 0-.777.058c-.631.062-1.05.104-1.37.168c-.305.06-.447.128-.542.2c-.14.105-.26.24-.35.4c-.064.114-.118.278-.147.609c-.031.341-.032.785-.032 1.443zm16.5-1.565c0-.658 0-1.102-.032-1.443c-.03-.33-.083-.495-.147-.61a1.3 1.3 0 0 0-.35-.4c-.095-.071-.237-.139-.542-.2c-.32-.063-.739-.105-1.37-.167a9 9 0 0 0-.777-.058a.7.7 0 0 0-.147.012a.3.3 0 0 0-.083.081a.7.7 0 0 0-.034.181c-.017.18-.018.423-.018.82v5.166c0 .466.001.755.024.965a.7.7 0 0 0 .042.208q.032.04.07.062c.016.003.064.01.17 0c.198-.015.465-.066.907-.153c.616-.122 1.025-.203 1.333-.297c.294-.089.43-.17.522-.255q.146-.136.25-.314c.066-.117.12-.28.15-.606c.031-.338.032-.775.032-1.427z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeadphonesSquareOutlineIcon {
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
  selector: 'svg[solarHeadphonesSquareSoundBoldDuotoneIcon],svg[solar-headphones-square-sound-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.053 2c2.148 0 3.83 0 5.143.179c1.345.183 2.405.564 3.237 1.407s1.21 1.916 1.39 3.277C22 8.193 22 9.896 22 12.07v5.297c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.457.22-1.004.307-1.801.434l-.13.02c-.284.046-.526.085-.727.105c-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35a2.2 2.2 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.1 2.1 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007l.11.01c.783.062 1.32.104 1.775.275q.481.181.883.487v-1.174c0-2.24-.002-3.848-.165-5.073c-.16-1.204-.463-1.93-.993-2.466S18.2 3.741 17.01 3.579c-1.21-.165-2.799-.166-5.011-.166s-3.801.001-5.01.166c-1.19.162-1.907.47-2.437 1.006S3.72 5.847 3.56 7.051c-.162 1.225-.164 2.833-.164 5.073v1.174c.267-.203.563-.368.883-.487c.456-.17.992-.213 1.775-.276l.11-.009l.093-.007c.42-.034.78-.063 1.096.01a2.1 2.1 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743c-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35a2.2 2.2 0 0 1-.641.017c-.201-.02-.443-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188C2 18.745 2 18.184 2 17.367V12.07c0-2.174 0-3.878.177-5.207c.18-1.36.557-2.434 1.39-3.277S5.46 2.362 6.803 2.18C8.116 2 9.8 2 11.947 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 5.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m3 1.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m-6 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 9 7.25" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarHeadphonesSquareSoundBoldDuotoneIcon {
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
  selector: 'svg[solarHeadphonesSquareSoundLineDuotoneIcon],svg[solar-headphones-square-sound-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 15.187c0-.578 0-.867-.069-1.097a1.53 1.53 0 0 0-1.095-1.059c-.225-.054-.5-.03-1.052.015c-.956.079-1.435.118-1.825.27c-.899.347-1.585 1.123-1.846 2.088C2 15.823 2 16.324 2 17.328v.186c0 1.03 0 1.544.123 1.979a3.1 3.1 0 0 0 1.588 1.944c.392.195.878.275 1.85.436c.645.106.968.16 1.229.106a1.52 1.52 0 0 0 1.119-1C8 20.718 8 20.376 8 19.693zm8 0c0-.578 0-.867.069-1.097a1.53 1.53 0 0 1 1.095-1.059c.225-.054.5-.03 1.051.015c.957.079 1.436.118 1.826.27c.899.347 1.585 1.123 1.846 2.088c.113.419.113.92.113 1.924v.186c0 1.03 0 1.544-.123 1.979a3.1 3.1 0 0 1-1.588 1.944c-.392.195-.878.275-1.85.436c-.645.106-.968.16-1.229.106a1.52 1.52 0 0 1-1.119-1C16 20.718 16 20.376 16 19.693z"></svg:path><svg:path d="M22 17v-5c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12v5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 6.5v5M15 8v2M9 8v2"></svg:path></svg:g>`,
})
export class SolarHeadphonesSquareSoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareSoundLinearIcon],svg[solar-headphones-square-sound-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 15.187c0-.578 0-.867-.069-1.097a1.53 1.53 0 0 0-1.095-1.059c-.225-.054-.5-.03-1.052.015c-.956.079-1.435.118-1.825.27c-.899.347-1.585 1.123-1.846 2.088C2 15.823 2 16.324 2 17.328v.186c0 1.03 0 1.544.123 1.979a3.1 3.1 0 0 0 1.588 1.944c.392.195.878.275 1.85.436c.645.106.968.16 1.229.106a1.52 1.52 0 0 0 1.119-1C8 20.718 8 20.376 8 19.693zm8 0c0-.578 0-.867.069-1.097a1.53 1.53 0 0 1 1.095-1.059c.225-.054.5-.03 1.051.015c.957.079 1.436.118 1.826.27c.899.347 1.585 1.123 1.846 2.088c.113.419.113.92.113 1.924v.186c0 1.03 0 1.544-.123 1.979a3.1 3.1 0 0 1-1.588 1.944c-.392.195-.878.275-1.85.436c-.645.106-.968.16-1.229.106a1.52 1.52 0 0 1-1.119-1C16 20.718 16 20.376 16 19.693z"></svg:path><svg:path d="M22 17v-5c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12v5"></svg:path><svg:path stroke-linecap="round" d="M12 6.5v5M15 8v2M9 8v2"></svg:path></svg:g>`,
})
export class SolarHeadphonesSquareSoundLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeadphonesSquareSoundOutlineIcon],svg[solar-headphones-square-sound-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v5.691c0 .913 0 1.526-.151 2.063a3.85 3.85 0 0 1-1.976 2.412c-.495.246-1.086.343-1.941.484l-.121.02l-.022.003c-.304.05-.565.094-.782.116a2.3 2.3 0 0 1-.698-.019a2.27 2.27 0 0 1-1.675-1.486a2.5 2.5 0 0 1-.121-.69c-.013-.225-.013-.5-.013-.823v-4.628c0-.477 0-.873.1-1.212a2.28 2.28 0 0 1 1.64-1.572c.344-.083.737-.05 1.185-.012l.102.008l.12.01c.84.07 1.421.117 1.914.308q.513.2.939.532V12c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.618-1.068c-1.3-.174-3.009-.176-5.387-.176s-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386v1.148q.426-.332.939-.532c.493-.191 1.073-.239 1.913-.308l.12-.01l.103-.008c.448-.038.84-.07 1.186.012c.79.19 1.406.798 1.638 1.572c.102.338.102.735.101 1.212v4.628c0 .324 0 .598-.013.823a2.5 2.5 0 0 1-.12.69a2.27 2.27 0 0 1-1.676 1.486a2.3 2.3 0 0 1-.698.019a14 14 0 0 1-.782-.116l-.022-.003l-.12-.02c-.856-.141-1.447-.238-1.942-.485a3.85 3.85 0 0 1-1.976-2.411c-.151-.537-.151-1.15-.151-2.064v-5.69c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19M12 5.75a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75m-3 1.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 9 7.25m6 0a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V8a.75.75 0 0 1 .75-.75m-8.34 6.51c-.077-.018-.202-.017-.814.033c-1.008.083-1.352.12-1.616.222A2.34 2.34 0 0 0 2.837 15.6c-.08.299-.087.677-.087 1.728v.186c0 1.078.007 1.465.095 1.775a2.35 2.35 0 0 0 1.2 1.476c.267.133.615.199 1.639.368c.331.055.547.09.712.107c.162.016.22.009.243.004a.77.77 0 0 0 .562-.513c.012-.034.029-.105.039-.279c.01-.177.01-.409.01-.759v-4.506c0-.634-.008-.784-.037-.881a.78.78 0 0 0-.552-.545m11.494.033c-.612-.05-.737-.051-.815-.032a.78.78 0 0 0-.552.545c-.029.097-.037.247-.037.881v4.506c0 .35 0 .582.01.76c.01.173.027.244.04.278a.77.77 0 0 0 .561.513a1 1 0 0 0 .243-.004c.166-.017.38-.052.713-.107c1.023-.17 1.371-.235 1.638-.367a2.35 2.35 0 0 0 1.2-1.477c.088-.31.095-.697.095-1.775v-.186c0-1.05-.006-1.43-.087-1.728a2.34 2.34 0 0 0-1.393-1.585c-.264-.103-.608-.139-1.616-.222" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeadphonesSquareSoundOutlineIcon {
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
  selector: 'svg[solarHealthBoldDuotoneIcon],svg[solar-health-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.318c0 3.729 4.02 7.673 6.962 10.06C10.294 20.46 10.96 21 12 21s1.706-.54 3.038-1.621C17.981 16.99 22 13.047 22 9.317c0-6.23-5.5-8.556-10-3.743C7.5.761 2 3.087 2 9.318" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.5 6.25a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25V11a.75.75 0 0 1-1.5 0V9.75H14.5a.75.75 0 0 1 0-1.5h1.25V7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHealthBoldDuotoneIcon {
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
  selector: 'svg[solarHealthLineDuotoneIcon],svg[solar-health-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m8.962 19.379l-.473.582zM12 5.574l-.548.512a.75.75 0 0 0 1.096 0zm3.038 13.805l.473.582zM12 21v-.75zm-2.566-2.204c-1.45-1.176-3.142-2.719-4.466-4.408c-1.339-1.707-2.218-3.46-2.218-5.07h-1.5c0 2.117 1.13 4.202 2.537 5.996c1.422 1.813 3.21 3.436 4.702 4.647zM2.75 9.318c0-2.905 1.268-4.7 2.836-5.315c1.565-.613 3.754-.175 5.866 2.083l1.096-1.024c-2.388-2.554-5.199-3.36-7.509-2.456C2.732 3.51 1.25 5.992 1.25 9.318zM15.51 19.96c1.493-1.211 3.281-2.834 4.703-4.647c1.407-1.794 2.537-3.879 2.537-5.997h-1.5c0 1.612-.88 3.364-2.218 5.071c-1.324 1.689-3.016 3.232-4.466 4.408zm7.24-10.644c0-3.325-1.482-5.807-3.79-6.71c-2.31-.905-5.12-.1-7.508 2.455l1.096 1.024c2.112-2.258 4.301-2.696 5.866-2.083c1.568.614 2.836 2.41 2.836 5.314zM8.49 19.961c1.27 1.032 2.152 1.789 3.51 1.789v-1.5c-.723 0-1.173-.324-2.566-1.454zm6.076-1.165c-1.393 1.13-1.843 1.454-2.566 1.454v1.5c1.358 0 2.24-.757 3.51-1.789z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.5 9h-2m0 0h-2m2 0V7m0 2v2"></svg:path></svg:g>`,
})
export class SolarHealthLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHealthLinearIcon],svg[solar-health-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m8.962 19.379l-.473.582zM12 5.574l-.548.512a.75.75 0 0 0 1.096 0zm3.038 13.805l.473.582zM12 21v-.75zm-2.566-2.204c-1.45-1.176-3.142-2.719-4.466-4.408c-1.339-1.707-2.218-3.46-2.218-5.07h-1.5c0 2.117 1.13 4.202 2.537 5.996c1.422 1.813 3.21 3.436 4.702 4.647zM2.75 9.318c0-2.905 1.268-4.7 2.836-5.315c1.565-.613 3.754-.175 5.866 2.083l1.096-1.024c-2.388-2.554-5.199-3.36-7.509-2.456C2.732 3.51 1.25 5.992 1.25 9.318zM15.51 19.96c1.493-1.211 3.281-2.834 4.703-4.647c1.407-1.794 2.537-3.879 2.537-5.997h-1.5c0 1.612-.88 3.364-2.218 5.071c-1.324 1.689-3.016 3.232-4.466 4.408zm7.24-10.644c0-3.325-1.482-5.807-3.79-6.71c-2.31-.905-5.12-.1-7.508 2.455l1.096 1.024c2.112-2.258 4.301-2.696 5.866-2.083c1.568.614 2.836 2.41 2.836 5.314zM8.49 19.961c1.27 1.032 2.152 1.789 3.51 1.789v-1.5c-.723 0-1.173-.324-2.566-1.454zm6.076-1.165c-1.393 1.13-1.843 1.454-2.566 1.454v1.5c1.358 0 2.24-.757 3.51-1.789z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.5 9h-2m0 0h-2m2 0V7m0 2v2"></svg:path></svg:g>`,
})
export class SolarHealthLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHealthOutlineIcon],svg[solar-health-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 7a.75.75 0 0 0-1.5 0v1.25H14.5a.75.75 0 0 0 0 1.5h1.25V11a.75.75 0 0 0 1.5 0V9.75h1.25a.75.75 0 0 0 0-1.5h-1.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 9.318c0-3.326-1.482-5.808-3.79-6.711c-2.135-.837-4.698-.211-6.96 1.906C9.738 2.396 7.175 1.77 5.04 2.607c-2.308.903-3.79 3.385-3.79 6.71c0 2.119 1.13 4.203 2.537 5.997c1.422 1.813 3.21 3.436 4.702 4.647l.134.11c1.2.975 2.068 1.68 3.377 1.68c1.31 0 2.176-.705 3.377-1.68l.134-.11c1.492-1.21 3.28-2.834 4.702-4.647c1.407-1.794 2.537-3.878 2.537-5.996M12.548 6.087c2.112-2.259 4.301-2.696 5.866-2.084c1.568.614 2.836 2.41 2.836 5.315c0 1.611-.88 3.364-2.218 5.07c-1.324 1.69-3.016 3.232-4.466 4.409c-1.393 1.13-1.843 1.453-2.566 1.453s-1.173-.323-2.566-1.454c-1.45-1.176-3.142-2.719-4.466-4.407c-1.339-1.707-2.218-3.46-2.218-5.071c0-2.905 1.268-4.7 2.836-5.315c1.565-.612 3.754-.175 5.866 2.084a.75.75 0 0 0 1.096 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarHealthOutlineIcon {
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
  selector: 'svg[solarHeartAngleBoldDuotoneIcon],svg[solar-heart-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 9.137c0 4.405 3.298 6.946 6.106 9.11q.44.337.856.664C10 19.729 11 20.5 12 20.5v-15C7.5.826 2 4.275 2 9.138" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m14 7.5l-2-2v15c1 0 2-.77 3.038-1.59q.417-.326.856-.663C18.702 16.083 22 13.542 22 9.137c0-4.462-4.631-7.734-8.871-4.63l1.931 1.931A.75.75 0 0 1 14 7.5"></svg:path>`,
})
export class SolarHeartAngleBoldDuotoneIcon {
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
  selector: 'svg[solarHeartAngleLineDuotoneIcon],svg[solar-heart-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12 5.501l2 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z"></svg:path></svg:g>`,
})
export class SolarHeartAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartAngleLinearIcon],svg[solar-heart-angle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52l.01.011zm3.038 13.41l.465.59zM13.47 8.03a.75.75 0 1 0 1.06-1.06zM9.426 18.322C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16zM11.47 6.032l2 1.998l1.06-1.06l-2-2z"></svg:path>`,
})
export class SolarHeartAngleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartAngleOutlineIcon],svg[solar-heart-angle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.474-.673-3.41-.568-5.304 1.088L14.53 6.97a.75.75 0 1 1-1.06 1.061l-2-1.999l-.01-.01c-2.058-2.14-4.224-2.335-5.836-1.598M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeartAngleOutlineIcon {
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
  selector: 'svg[solarHeartBoldDuotoneIcon],svg[solar-heart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59q-.417-.326-.856-.663" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.038 18.91C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501V20.5c1 0 2-.77 3.038-1.59"></svg:path>`,
})
export class SolarHeartBoldDuotoneIcon {
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
  selector: 'svg[solarHeartBrokenBoldDuotoneIcon],svg[solar-heart-broken-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.038 18.91C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501l-1.118 2.235c-.182.364-.273.547-.229.726c.044.18.21.298.542.535l1.916 1.368c.416.297.624.445.65.664s-.14.413-.472.8l-1.686 1.968c-.286.333-.43.5-.422.696s.163.351.474.662l.945.945c.195.195.293.293.328.42s.002.261-.065.53L12 20.5c1 0 2-.77 3.038-1.59"></svg:path><svg:path fill="currentColor" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l-1.118 2.235c-.182.364-.273.547-.229.726c.044.18.21.298.542.535l1.916 1.368c.416.297.624.445.65.664s-.14.413-.472.8l-1.686 1.968c-.286.333-.43.5-.422.696s.163.351.474.662l.945.945c.195.195.293.293.328.42s.002.261-.065.53L12 20.5c-1 0-2-.77-3.038-1.59q-.417-.326-.856-.663" opacity=".5"></svg:path>`,
})
export class SolarHeartBrokenBoldDuotoneIcon {
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
  selector: 'svg[solarHeartBrokenLineDuotoneIcon],svg[solar-heart-broken-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137"></svg:path><svg:path d="m12 5.5l-1.5 3L14 11l-3 3.5l2 2l-1 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHeartBrokenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartBrokenLinearIcon],svg[solar-heart-broken-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5.5C7.5.826 2 4.275 2 9.138s4.02 7.454 6.962 9.774C10 19.729 11 20.5 12 20.5m0-15C16.5.826 22 4.275 22 9.138s-4.02 7.454-6.962 9.774C14 19.729 13 20.5 12 20.5m0-15l-1.5 3L14 11l-3 3.5l2 2l-1 4"></svg:path>`,
})
export class SolarHeartBrokenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartBrokenOutlineIcon],svg[solar-heart-broken-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043q.31.18.568.275l.727-2.91l-1.7-1.7a.75.75 0 0 1-.038-1.018l2.466-2.878l-2.833-2.024a.75.75 0 0 1-.235-.946l1.256-2.51c-1.943-1.792-3.946-1.922-5.46-1.23M12.62 5.94l-1.162 2.322l2.979 2.128a.75.75 0 0 1 .133 1.098l-2.548 2.973l1.51 1.509a.75.75 0 0 1 .197.712l-.683 2.73l.081-.047c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.592-.727-3.723-.546-5.757 1.516M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeartBrokenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartLineDuotoneIcon],svg[solar-heart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 5.5C7.5.826 2 4.275 2 9.138s4.02 7.454 6.962 9.774C10 19.729 11 20.5 12 20.5"></svg:path><svg:path d="M12 5.5C16.5.826 22 4.275 22 9.138s-4.02 7.454-6.962 9.774C14 19.729 13 20.5 12 20.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHeartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartLinearIcon],svg[solar-heart-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z"></svg:path>`,
})
export class SolarHeartLinearIcon {
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
  selector: 'svg[solarHeartLockBoldDuotoneIcon],svg[solar-heart-lock-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.496 20.037C5.968 18.152 3 15.937 3 12.099c0-4.237 4.95-7.242 9-3.168c4.05-4.074 9-1.069 9 3.168c0 3.839-2.968 6.053-5.496 7.938q-.394.294-.77.578C13.8 21.328 12.9 22 12 22s-1.8-.672-2.734-1.385q-.376-.285-.77-.578" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75M7.75 7c0-1.505.447-2.539 1.139-3.2c.697-.668 1.74-1.05 3.111-1.05c1.37 0 2.414.382 3.111 1.05c.692.661 1.139 1.695 1.139 3.2v.001a4.6 4.6 0 0 1 1.5.288V7c0-1.809-.546-3.275-1.602-4.285C15.098 1.711 13.642 1.25 12 1.25s-3.098.461-4.148 1.465C6.796 3.725 6.25 5.191 6.25 7v.29A4.6 4.6 0 0 1 7.75 7"></svg:path>`,
})
export class SolarHeartLockBoldDuotoneIcon {
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
  selector: 'svg[solarHeartLockLineDuotoneIcon],svg[solar-heart-lock-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 7c0-3.314-1.988-5-5-5S7 3.686 7 7m5 5v2.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="m9.266 20.615l.455-.596zM12 8.931l-.532.528a.75.75 0 0 0 1.064 0zm2.734 11.684l.456.597zm-5.013-.596c-1.37-1.045-2.852-2.055-4.029-3.338c-1.15-1.254-1.942-2.705-1.942-4.582h-1.5c0 2.361 1.017 4.157 2.337 5.596c1.294 1.411 2.945 2.54 4.224 3.517zM3.75 12.1c0-1.824 1.065-3.364 2.535-4.015c1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1zm5.06 9.113c.461.351.96.73 1.466 1.016c.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328c-.402-.227-.82-.541-1.294-.903zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517c1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582c-1.177 1.283-2.66 2.293-4.029 3.338zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386c-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375c1.47.65 2.535 2.19 2.535 4.015zm-7.47 7.92c-.475.362-.893.676-1.295.903c-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522s1.005-.665 1.466-1.016z"></svg:path></svg:g>`,
})
export class SolarHeartLockLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartLockLinearIcon],svg[solar-heart-lock-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17 7c0-3.314-1.988-5-5-5S7 3.686 7 7m5 5v2.5"></svg:path><svg:path fill="currentColor" d="m9.266 20.615l.455-.596zM12 8.931l-.532.528a.75.75 0 0 0 1.064 0zm2.734 11.684l.456.597zm-5.013-.596c-1.37-1.045-2.852-2.055-4.029-3.338c-1.15-1.254-1.942-2.705-1.942-4.582h-1.5c0 2.361 1.017 4.157 2.337 5.596c1.294 1.411 2.945 2.54 4.224 3.517zM3.75 12.1c0-1.824 1.065-3.364 2.535-4.015c1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1zm5.06 9.113c.461.351.96.73 1.466 1.016c.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328c-.402-.227-.82-.541-1.294-.903zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517c1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582c-1.177 1.283-2.66 2.293-4.029 3.338zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386c-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375c1.47.65 2.535 2.19 2.535 4.015zm-7.47 7.92c-.475.362-.893.676-1.295.903c-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522s1.005-.665 1.466-1.016z"></svg:path></svg:g>`,
})
export class SolarHeartLockLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartLockOutlineIcon],svg[solar-heart-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.265 6.492q-.3.094-.587.22C3.66 7.606 2.25 9.687 2.25 12.1c0 2.361 1.017 4.157 2.337 5.596c1.056 1.151 2.348 2.114 3.483 2.96q.386.287.74.557c.461.351.96.73 1.466 1.016c.507.287 1.09.522 1.724.522s1.217-.235 1.724-.522s1.005-.665 1.466-1.016q.354-.27.74-.557c1.135-.846 2.427-1.809 3.483-2.96c1.32-1.439 2.337-3.235 2.337-5.596c0-2.413-1.41-4.494-3.428-5.386a6 6 0 0 0-.587-.221c-.094-1.576-.632-2.863-1.587-3.777C15.098 1.711 13.642 1.25 12 1.25s-3.098.461-4.148 1.465c-.955.914-1.493 2.2-1.587 3.777M7.79 6.25c1.381-.018 2.847.492 4.21 1.658c1.363-1.166 2.829-1.676 4.21-1.658c-.125-1.107-.529-1.905-1.099-2.45c-.697-.668-1.74-1.05-3.111-1.05c-1.37 0-2.414.382-3.111 1.05c-.57.545-.974 1.343-1.099 2.45M3.75 12.1c0-1.825 1.065-3.365 2.535-4.016c1.429-.632 3.352-.466 5.183 1.375a.75.75 0 0 0 1.064 0c1.83-1.841 3.754-2.007 5.183-1.375c1.47.65 2.535 2.19 2.535 4.015c0 1.877-.792 3.328-1.942 4.582c-.95 1.036-2.1 1.894-3.229 2.737q-.404.3-.8.601c-.474.362-.892.676-1.294.903c-.402.228-.72.328-.985.328c-.266 0-.583-.1-.985-.328c-.402-.227-.82-.541-1.294-.903a94 94 0 0 0-.8-.601c-1.128-.842-2.278-1.7-3.229-2.737c-1.15-1.254-1.942-2.705-1.942-4.582" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeartLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartOutlineIcon],svg[solar-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154q.448.345.885.688c.526.415.995.778 1.448 1.043s.816.385 1.126.385s.674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043q.437-.344.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382q.43.33.826.642c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16q.396-.312.826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeartOutlineIcon {
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
  selector: 'svg[solarHeartPulse2BoldDuotoneIcon],svg[solar-heart-pulse-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.346 11.25A6.3 6.3 0 0 1 2 9.26C2 3.35 7.5.663 12 5.5C16.5.663 22 3.349 22 9.26a6.3 6.3 0 0 1-.346 1.99h-3.13c-.546 0-1.03-.002-1.471.195c-.441.196-.765.557-1.13.963l-.075.084l-1.029 1.143a.25.25 0 0 1-.379-.007l-3.55-4.305c-.14-.17-.289-.35-.435-.485a1.24 1.24 0 0 0-.773-.353a1.24 1.24 0 0 0-.81.258c-.16.116-.33.278-.49.43l-1.53 1.456c-.471.45-.57.526-.672.567c-.103.042-.228.054-.879.054z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.654 11.25h-3.13c-.546-.001-1.03-.002-1.472.194c-.44.197-.764.558-1.129.964l-.075.084l-1.029 1.143a.25.25 0 0 1-.38-.008l-3.55-4.304c-.14-.17-.29-.35-.435-.485a1.24 1.24 0 0 0-.773-.354a1.24 1.24 0 0 0-.81.26c-.161.115-.331.277-.49.428l-1.53 1.457c-.471.45-.57.526-.673.567s-.227.054-.878.054H2.346c1.036 3.105 4.191 6.144 6.615 8.12C10.294 20.458 10.96 21 12 21s1.706-.543 3.038-1.63c2.424-1.976 5.58-5.015 6.616-8.12"></svg:path>`,
})
export class SolarHeartPulse2BoldDuotoneIcon {
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
  selector: 'svg[solarHeartPulse2LineDuotoneIcon],svg[solar-heart-pulse-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 12h-2.364c-.658 0-.987 0-1.278.13s-.512.374-.952.863l-1.03 1.144c-.36.401-.541.602-.77.597c-.23-.005-.401-.213-.744-.63l-3.529-4.276c-.32-.388-.48-.582-.697-.595s-.4.16-.764.507L7.37 11.172c-.43.409-.644.613-.912.72C6.19 12 5.893 12 5.3 12H3"></svg:path><svg:path fill="currentColor" d="m8.962 19.37l.474-.58zM12 5.5l-.55.51a.75.75 0 0 0 1.1 0zm3.038 13.872l.474.581zm-5.602-.581c-1.45-1.183-3.143-2.733-4.467-4.43c-1.339-1.715-2.219-3.478-2.219-5.1h-1.5c0 2.126 1.13 4.22 2.536 6.023c1.421 1.82 3.21 3.452 4.702 4.669zM2.75 9.26c0-2.73 1.258-4.555 2.85-5.218c1.573-.654 3.753-.287 5.85 1.968l1.1-1.022c-2.403-2.581-5.223-3.289-7.526-2.331c-2.282.95-3.774 3.422-3.774 6.603zm12.762 10.692c1.493-1.217 3.28-2.848 4.702-4.67c1.407-1.803 2.536-3.896 2.536-6.022h-1.5c0 1.622-.88 3.385-2.219 5.1c-1.324 1.697-3.017 3.247-4.467 4.43zM22.75 9.26c0-3.18-1.492-5.654-3.774-6.603c-2.303-.958-5.123-.25-7.525 2.33l1.098 1.023c2.098-2.255 4.278-2.622 5.85-1.968c1.593.662 2.851 2.488 2.851 5.218zM8.488 19.952C9.758 20.988 10.64 21.75 12 21.75v-1.5c-.722 0-1.171-.325-2.564-1.46zm6.076-1.163C13.171 19.926 12.722 20.25 12 20.25v1.5c1.359 0 2.241-.762 3.512-1.798z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHeartPulse2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulse2LinearIcon],svg[solar-heart-pulse-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 12h-2.364c-.658 0-.987 0-1.278.13s-.512.374-.952.863l-1.03 1.144c-.36.401-.541.602-.77.597c-.23-.005-.401-.213-.744-.63l-3.529-4.276c-.32-.388-.48-.582-.697-.595s-.4.16-.764.507L7.37 11.172c-.43.409-.644.613-.912.72C6.19 12 5.893 12 5.3 12H3"></svg:path><svg:path fill="currentColor" d="m8.962 19.37l.474-.58zM12 5.5l-.55.51a.75.75 0 0 0 1.1 0zm3.038 13.872l.474.581zm-5.602-.581c-1.45-1.183-3.143-2.733-4.467-4.43c-1.339-1.715-2.219-3.478-2.219-5.1h-1.5c0 2.126 1.13 4.22 2.536 6.023c1.421 1.82 3.21 3.452 4.702 4.669zM2.75 9.26c0-2.73 1.258-4.555 2.85-5.218c1.573-.654 3.753-.287 5.85 1.968l1.1-1.022c-2.403-2.581-5.223-3.289-7.526-2.331c-2.282.95-3.774 3.422-3.774 6.603zm12.762 10.692c1.493-1.217 3.28-2.848 4.702-4.67c1.407-1.803 2.536-3.896 2.536-6.022h-1.5c0 1.622-.88 3.385-2.219 5.1c-1.324 1.697-3.017 3.247-4.467 4.43zM22.75 9.26c0-3.18-1.492-5.654-3.774-6.603c-2.303-.958-5.123-.25-7.525 2.33l1.098 1.023c2.098-2.255 4.278-2.622 5.85-1.968c1.593.662 2.851 2.488 2.851 5.218zM8.488 19.952C9.758 20.988 10.64 21.75 12 21.75v-1.5c-.722 0-1.171-.325-2.564-1.46zm6.076-1.163C13.171 19.926 12.722 20.25 12 20.25v1.5c1.359 0 2.241-.762 3.512-1.798z"></svg:path></svg:g>`,
})
export class SolarHeartPulse2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulse2OutlineIcon],svg[solar-heart-pulse-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 9.26c0-3.18-1.492-5.654-3.774-6.603c-2.13-.886-4.702-.347-6.976 1.78C9.726 2.31 7.154 1.77 5.024 2.657C2.742 3.607 1.25 6.079 1.25 9.26c0 2.126 1.13 4.22 2.536 6.023c1.421 1.82 3.21 3.452 4.702 4.669l.134.11c1.2.98 2.068 1.688 3.378 1.688s2.178-.708 3.377-1.688l.135-.11c1.493-1.217 3.28-2.848 4.702-4.67c1.407-1.803 2.536-3.896 2.536-6.022m-10.2-3.25c2.097-2.255 4.277-2.622 5.85-1.968c1.592.662 2.85 2.488 2.85 5.218c0 .645-.14 1.313-.391 1.99h-2.335c-.546 0-1.03-.002-1.471.195c-.441.196-.765.557-1.13.963l-.075.084l-1.029 1.143q-.113.127-.194.214l-.185-.221l-3.551-4.305c-.14-.17-.289-.35-.435-.485a1.24 1.24 0 0 0-.773-.353a1.24 1.24 0 0 0-.81.258c-.16.116-.33.278-.49.43l-1.53 1.456c-.471.45-.57.526-.672.568c-.103.04-.228.053-.879.053H3.141c-.252-.678-.391-1.345-.391-1.99c0-2.73 1.258-4.555 2.85-5.218c1.573-.654 3.753-.287 5.85 1.968a.75.75 0 0 0 1.1 0m-8.685 6.74c.315.537.687 1.076 1.104 1.61c1.324 1.697 3.017 3.247 4.467 4.43c1.393 1.136 1.842 1.46 2.564 1.46s1.171-.325 2.564-1.46c1.45-1.183 3.143-2.733 4.467-4.43a15 15 0 0 0 1.104-1.61h-1.499c-.724 0-.861.015-.973.065s-.215.142-.7.68l-1.054 1.172a5 5 0 0 1-.486.496c-.185.155-.46.33-.833.321c-.373-.008-.641-.194-.82-.357a5 5 0 0 1-.463-.515l-3.552-4.306l-.171-.205q-.081.074-.194.183l-1.577 1.501c-.356.34-.671.642-1.077.804s-.843.162-1.335.161z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeartPulse2OutlineIcon {
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
  selector: 'svg[solarHeartPulseBoldDuotoneIcon],svg[solar-heart-pulse-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.26c0 3.748 4.02 7.711 6.962 10.11C10.294 20.458 10.96 21 12 21s1.706-.543 3.038-1.63C17.981 16.972 22 13.009 22 9.26C22 3.35 16.5.663 12 5.5C7.5.663 2 3.349 2 9.26" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.093 10.747q.133-.191.23-.325c.056.097.119.21.194.348l1.71 3.109c.166.302.33.598.493.813c.175.23.482.546.975.555s.813-.294.996-.518c.172-.208.345-.498.523-.794l.055-.092c.221-.368.36-.598.483-.764c.113-.154.179-.204.228-.231s.125-.058.315-.077c.206-.02.474-.02.904-.02H18a.75.75 0 0 0 0-1.5h-.834c-.387 0-.73 0-1.016.027a2.2 2.2 0 0 0-.91.264a2.2 2.2 0 0 0-.694.644c-.171.232-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377l-1.709-3.108c-.154-.28-.307-.56-.463-.764c-.17-.224-.462-.52-.93-.545c-.467-.025-.789.237-.982.442c-.177.186-.36.448-.543.71l-.31.442c-.227.324-.37.526-.493.672a.8.8 0 0 1-.223.203c-.046.024-.118.05-.293.066c-.19.018-.438.018-.834.018H6a.75.75 0 0 0 0 1.5h.768c.357 0 .674 0 .94-.024c.29-.026.571-.085.85-.23c.28-.145.489-.343.676-.564c.173-.205.354-.464.559-.757z"></svg:path>`,
})
export class SolarHeartPulseBoldDuotoneIcon {
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
  selector: 'svg[solarHeartPulseLineDuotoneIcon],svg[solar-heart-pulse-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 12h-.801c-.83 0-1.245 0-1.589.195c-.344.194-.557.55-.984 1.261l-.03.052c-.398.663-.597.994-.886.989s-.476-.344-.849-1.022l-1.687-3.067c-.347-.632-.52-.948-.798-.963c-.277-.015-.484.28-.897.87l-.283.405c-.44.627-.659.94-.984 1.11c-.326.17-.709.17-1.474.17H6"></svg:path><svg:path fill="currentColor" d="m8.962 19.37l.474-.58zM12 5.5l-.55.51a.75.75 0 0 0 1.1 0zm3.038 13.872l.474.581zm-5.602-.581c-1.45-1.183-3.143-2.733-4.467-4.43c-1.339-1.715-2.219-3.478-2.219-5.1h-1.5c0 2.126 1.13 4.22 2.536 6.023c1.421 1.82 3.21 3.452 4.702 4.669zM2.75 9.26c0-2.73 1.258-4.555 2.85-5.218c1.573-.654 3.753-.287 5.85 1.968l1.1-1.022c-2.403-2.581-5.223-3.289-7.526-2.331c-2.282.95-3.774 3.422-3.774 6.603zm12.762 10.692c1.493-1.217 3.28-2.848 4.702-4.67c1.407-1.803 2.536-3.896 2.536-6.022h-1.5c0 1.622-.88 3.385-2.219 5.1c-1.324 1.697-3.017 3.247-4.467 4.43zM22.75 9.26c0-3.18-1.492-5.654-3.774-6.603c-2.303-.958-5.123-.25-7.525 2.33l1.098 1.023c2.098-2.255 4.278-2.622 5.85-1.968c1.593.662 2.851 2.488 2.851 5.218zM8.488 19.952C9.758 20.988 10.64 21.75 12 21.75v-1.5c-.722 0-1.171-.325-2.564-1.46zm6.076-1.163C13.171 19.926 12.722 20.25 12 20.25v1.5c1.359 0 2.241-.762 3.512-1.798z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHeartPulseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulseLinearIcon],svg[solar-heart-pulse-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 12h-.801c-.83 0-1.245 0-1.589.195c-.344.194-.557.55-.984 1.261l-.03.052c-.398.663-.597.994-.886.989s-.476-.344-.849-1.022l-1.687-3.067c-.347-.632-.52-.948-.798-.963c-.277-.015-.484.28-.897.87l-.283.405c-.44.627-.659.94-.984 1.11c-.326.17-.709.17-1.474.17H6"></svg:path><svg:path fill="currentColor" d="m8.962 19.37l.474-.58zM12 5.5l-.55.51a.75.75 0 0 0 1.1 0zm3.038 13.872l.474.581zm-5.602-.581c-1.45-1.183-3.143-2.733-4.467-4.43c-1.339-1.715-2.219-3.478-2.219-5.1h-1.5c0 2.126 1.13 4.22 2.536 6.023c1.421 1.82 3.21 3.452 4.702 4.669zM2.75 9.26c0-2.73 1.258-4.555 2.85-5.218c1.573-.654 3.753-.287 5.85 1.968l1.1-1.022c-2.403-2.581-5.223-3.289-7.526-2.331c-2.282.95-3.774 3.422-3.774 6.603zm12.762 10.692c1.493-1.217 3.28-2.848 4.702-4.67c1.407-1.803 2.536-3.896 2.536-6.022h-1.5c0 1.622-.88 3.385-2.219 5.1c-1.324 1.697-3.017 3.247-4.467 4.43zM22.75 9.26c0-3.18-1.492-5.654-3.774-6.603c-2.303-.958-5.123-.25-7.525 2.33l1.098 1.023c2.098-2.255 4.278-2.622 5.85-1.968c1.593.662 2.851 2.488 2.851 5.218zM8.488 19.952C9.758 20.988 10.64 21.75 12 21.75v-1.5c-.722 0-1.171-.325-2.564-1.46zm6.076-1.163C13.171 19.926 12.722 20.25 12 20.25v1.5c1.359 0 2.241-.762 3.512-1.798z"></svg:path></svg:g>`,
})
export class SolarHeartPulseLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartPulseOutlineIcon],svg[solar-heart-pulse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.093 10.746q.133-.19.23-.325c.056.098.119.211.194.348l1.71 3.11c.166.302.33.598.493.813c.175.23.482.545.975.555c.493.009.813-.294.996-.518c.172-.208.345-.498.523-.794l.055-.092c.221-.368.36-.598.483-.765c.113-.153.179-.203.228-.23c.049-.028.125-.059.315-.077c.206-.02.474-.02.904-.02H18a.75.75 0 1 0 0-1.5h-.834c-.387 0-.73 0-1.016.027a2.2 2.2 0 0 0-.91.264a2.2 2.2 0 0 0-.694.644c-.171.232-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377l-1.709-3.108c-.154-.28-.307-.56-.463-.764c-.17-.224-.462-.52-.93-.545c-.467-.026-.789.237-.982.441c-.177.187-.36.448-.543.71l-.31.442c-.227.325-.37.527-.493.673c-.113.134-.176.178-.223.202c-.046.025-.118.051-.293.067c-.19.017-.438.018-.834.018H6a.75.75 0 0 0 0 1.5h.768c.357 0 .674 0 .94-.024c.29-.027.571-.085.85-.23a2.2 2.2 0 0 0 .676-.565c.173-.204.354-.463.559-.756z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 9.26c0-3.18-1.492-5.654-3.774-6.603c-2.13-.886-4.702-.347-6.976 1.78C9.726 2.31 7.154 1.77 5.024 2.657C2.742 3.607 1.25 6.079 1.25 9.26c0 2.126 1.13 4.22 2.536 6.023c1.421 1.82 3.21 3.452 4.702 4.669l.134.11c1.2.98 2.068 1.688 3.378 1.688s2.178-.708 3.377-1.688l.135-.11c1.493-1.217 3.28-2.848 4.702-4.67c1.407-1.803 2.536-3.896 2.536-6.022m-10.2-3.25c2.097-2.255 4.277-2.622 5.85-1.968c1.592.662 2.85 2.488 2.85 5.218c0 1.622-.88 3.385-2.219 5.1c-1.324 1.697-3.017 3.247-4.467 4.43c-1.393 1.136-1.842 1.46-2.564 1.46s-1.171-.325-2.564-1.46c-1.45-1.183-3.143-2.733-4.467-4.43c-1.339-1.715-2.219-3.478-2.219-5.1c0-2.73 1.258-4.555 2.85-5.218c1.573-.654 3.753-.287 5.85 1.968a.75.75 0 0 0 1.1 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeartPulseOutlineIcon {
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
  selector: 'svg[solarHeartShineBoldDuotoneIcon],svg[solar-heart-shine-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd" opacity=".8"></svg:path><svg:path fill="currentColor" d="M5.47 5.47a.75.75 0 0 1 1.06 0l.344.343a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 0-1.06m13.06 0a.75.75 0 0 1 0 1.06l-.343.344a.75.75 0 0 1-1.06-1.061l.343-.343a.75.75 0 0 1 1.06 0M6.873 17.127a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0m10.254 0a.75.75 0 0 1 1.06 0l.343.343a.75.75 0 1 1-1.06 1.06l-.343-.343a.75.75 0 0 1 0-1.06" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 11.06c0 2.542 2.01 3.897 3.48 5.11c.52.427 1.02.83 1.52.83s1-.403 1.52-.83c1.47-1.213 3.48-2.568 3.48-5.11s-2.75-4.346-5-1.902c-2.25-2.444-5-.64-5 1.902"></svg:path>`,
})
export class SolarHeartShineBoldDuotoneIcon {
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
  selector: 'svg[solarHeartShineLineDuotoneIcon],svg[solar-heart-shine-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v2m0 16v2M2 12h2m16 0h2" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m6 18l.343-.343M17.657 6.343L18 6m0 12l-.343-.343M6.343 6.343L6 6"></svg:path><svg:path fill="currentColor" d="m10.785 15.354l.469-.585zM12 9.9l-.545.516a.75.75 0 0 0 1.09 0zm1.215 5.453l.47.585zm-1.961-.585c-.633-.507-1.246-.945-1.738-1.508c-.466-.533-.766-1.123-.766-1.881h-1.5c0 1.218.504 2.144 1.136 2.868c.607.694 1.385 1.255 1.93 1.691zm-2.504-3.39c0-.714.397-1.283.891-1.513c.444-.206 1.105-.199 1.814.55l1.09-1.03c-1.091-1.153-2.43-1.394-3.536-.88c-1.056.49-1.759 1.611-1.759 2.874zm1.566 4.56c.2.16.444.356.7.508c.253.15.59.303.984.303v-1.5c-.007 0-.069-.004-.219-.093a5 5 0 0 1-.527-.388zm3.368 0c.545-.436 1.323-.997 1.93-1.691c.632-.723 1.136-1.65 1.136-2.868h-1.5c0 .758-.3 1.348-.766 1.881c-.492.563-1.105 1-1.738 1.508zm3.066-4.56c0-1.262-.703-2.383-1.759-2.873c-1.106-.514-2.445-.273-3.536.88l1.09 1.03c.709-.749 1.37-.756 1.814-.55c.494.23.891.799.891 1.514zm-4.004 3.39c-.214.172-.378.3-.527.388s-.212.093-.219.093v1.5c.393 0 .731-.153.985-.303c.255-.152.499-.347.7-.508z"></svg:path></svg:g>`,
})
export class SolarHeartShineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartShineLinearIcon],svg[solar-heart-shine-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.785 15.354l.469-.585zM12 9.9l-.545.516a.75.75 0 0 0 1.09 0zm1.215 5.453l.47.585zm-1.961-.585c-.633-.507-1.246-.945-1.738-1.508c-.466-.533-.766-1.123-.766-1.881h-1.5c0 1.218.504 2.144 1.136 2.868c.607.694 1.385 1.255 1.93 1.691zm-2.504-3.39c0-.714.397-1.283.891-1.513c.444-.206 1.105-.199 1.814.55l1.09-1.03c-1.091-1.153-2.43-1.394-3.536-.88c-1.056.49-1.759 1.611-1.759 2.874zm1.566 4.56c.2.16.444.356.7.508c.253.15.59.303.984.303v-1.5c-.007 0-.069-.004-.219-.093a5 5 0 0 1-.527-.388zm3.368 0c.545-.436 1.323-.997 1.93-1.691c.632-.723 1.136-1.65 1.136-2.868h-1.5c0 .758-.3 1.348-.766 1.881c-.492.563-1.105 1-1.738 1.508zm3.066-4.56c0-1.262-.703-2.383-1.759-2.873c-1.106-.514-2.445-.273-3.536.88l1.09 1.03c.709-.749 1.37-.756 1.814-.55c.494.23.891.799.891 1.514zm-4.004 3.39c-.214.172-.378.3-.527.388s-.212.093-.219.093v1.5c.393 0 .731-.153.985-.303c.255-.152.499-.347.7-.508z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v2m0 16v2M2 12h2m16 0h2M6 18l.343-.343M17.657 6.343L18 6m0 12l-.343-.343M6.343 6.343L6 6"></svg:path></svg:g>`,
})
export class SolarHeartShineLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartShineOutlineIcon],svg[solar-heart-shine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 8.899c-.971-.724-2.063-.825-2.991-.393c-1.056.49-1.759 1.611-1.759 2.874c0 1.218.504 2.144 1.136 2.868c.498.57 1.111 1.049 1.616 1.444l.314.247c.2.16.444.356.7.508c.253.15.59.303.984.303c.393 0 .731-.153.985-.303c.255-.152.499-.347.7-.508l.313-.247c.505-.395 1.118-.875 1.616-1.444c.632-.723 1.136-1.65 1.136-2.868c0-1.263-.703-2.384-1.759-2.874c-.928-.432-2.02-.33-2.991.393m-2.359.967c-.494.23-.891.799-.891 1.514c0 .758.3 1.348.766 1.881c.394.452.867.823 1.366 1.214l.372.294c.214.172.378.3.527.388s.212.093.219.093s.069-.004.219-.093s.313-.216.527-.388l.372-.294c.499-.391.972-.762 1.366-1.214c.466-.533.766-1.123.766-1.881c0-.715-.397-1.284-.891-1.514c-.444-.206-1.105-.199-1.814.55a.75.75 0 0 1-1.09 0c-.709-.749-1.37-.756-1.814-.55" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.75 20a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm-11.5-8a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M20 11.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM5.47 18.53a.75.75 0 0 1 0-1.06l.343-.343a.75.75 0 1 1 1.06 1.06l-.343.343a.75.75 0 0 1-1.06 0M17.126 5.813a.75.75 0 1 0 1.061 1.06l.343-.343a.75.75 0 0 0-1.06-1.06zM18.53 18.53a.75.75 0 0 0 0-1.06l-.343-.343a.75.75 0 0 0-1.06 1.06l.343.343a.75.75 0 0 0 1.06 0M6.874 5.813a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 1.06-1.06z"></svg:path>`,
})
export class SolarHeartShineOutlineIcon {
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
  selector: 'svg[solarHeartUnlockBoldDuotoneIcon],svg[solar-heart-unlock-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.501 7.014c.164-.997.554-1.74 1.093-2.27c.739-.726 1.85-1.144 3.302-1.144c1.833 0 3.119.661 3.816 1.791c.224.362.665.451.985.198c.32-.252.4-.751.176-1.114C15.82 2.772 14.009 2 11.896 2c-1.674 0-3.157.481-4.23 1.538c-.945.929-1.504 2.234-1.636 3.839c.46-.197.955-.323 1.471-.363"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.496 20.037C5.968 18.152 3 15.937 3 12.099c0-4.237 4.95-7.242 9-3.168c4.05-4.074 9-1.069 9 3.168c0 3.839-2.968 6.053-5.496 7.938q-.394.294-.77.578C13.8 21.328 12.9 22 12 22s-1.8-.672-2.734-1.385q-.376-.285-.77-.578" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarHeartUnlockBoldDuotoneIcon {
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
  selector: 'svg[solarHeartUnlockLineDuotoneIcon],svg[solar-heart-unlock-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 7c0-3.314 1.937-5 4.872-5c1.852 0 3.307.672 4.128 2m-4 8v2.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="m9.266 20.615l.455-.596zM12 8.931l-.532.528a.75.75 0 0 0 1.064 0zm2.734 11.684l.456.597zm-5.013-.596c-1.37-1.045-2.852-2.055-4.029-3.338c-1.15-1.254-1.942-2.705-1.942-4.582h-1.5c0 2.361 1.017 4.157 2.337 5.596c1.294 1.411 2.945 2.54 4.224 3.517zM3.75 12.1c0-1.824 1.065-3.364 2.535-4.015c1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1zm5.06 9.113c.461.351.96.73 1.466 1.016c.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328c-.402-.227-.82-.541-1.294-.903zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517c1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582c-1.177 1.283-2.66 2.293-4.029 3.338zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386c-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375c1.47.65 2.535 2.19 2.535 4.015zm-7.47 7.92c-.475.362-.893.676-1.295.903c-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522s1.005-.665 1.466-1.016z"></svg:path></svg:g>`,
})
export class SolarHeartUnlockLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartUnlockLinearIcon],svg[solar-heart-unlock-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 7c0-3.314 1.937-5 4.872-5c1.852 0 3.307.672 4.128 2m-4 8v2.5"></svg:path><svg:path fill="currentColor" d="m9.266 20.615l.455-.596zM12 8.931l-.532.528a.75.75 0 0 0 1.064 0zm2.734 11.684l.456.597zm-5.013-.596c-1.37-1.045-2.852-2.055-4.029-3.338c-1.15-1.254-1.942-2.705-1.942-4.582h-1.5c0 2.361 1.017 4.157 2.337 5.596c1.294 1.411 2.945 2.54 4.224 3.517zM3.75 12.1c0-1.824 1.065-3.364 2.535-4.015c1.429-.632 3.352-.466 5.183 1.375l1.064-1.057c-2.22-2.232-4.795-2.6-6.854-1.69C3.66 7.606 2.25 9.687 2.25 12.1zm5.06 9.113c.461.351.96.73 1.466 1.016c.507.287 1.09.522 1.724.522v-1.5c-.266 0-.583-.1-.985-.328c-.402-.227-.82-.541-1.294-.903zm6.38 0c1.278-.977 2.929-2.106 4.223-3.517c1.32-1.439 2.337-3.235 2.337-5.596h-1.5c0 1.877-.792 3.328-1.942 4.582c-1.177 1.283-2.66 2.293-4.029 3.338zm6.56-9.113c0-2.413-1.41-4.494-3.428-5.386c-2.059-.912-4.635-.543-6.854 1.689l1.064 1.057c1.83-1.841 3.754-2.007 5.183-1.375c1.47.65 2.535 2.19 2.535 4.015zm-7.47 7.92c-.475.362-.893.676-1.295.903c-.402.228-.72.328-.985.328v1.5c.634 0 1.217-.235 1.724-.522s1.005-.665 1.466-1.016z"></svg:path></svg:g>`,
})
export class SolarHeartUnlockLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartUnlockOutlineIcon],svg[solar-heart-unlock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.265 6.492q-.3.093-.587.22C3.66 7.606 2.25 9.687 2.25 12.1c0 2.361 1.017 4.157 2.337 5.596c1.056 1.151 2.348 2.114 3.483 2.96q.386.287.74.557c.461.351.96.73 1.466 1.016c.507.287 1.09.522 1.724.522s1.217-.235 1.724-.522s1.005-.665 1.466-1.016q.354-.27.74-.557c1.135-.846 2.427-1.809 3.483-2.96c1.32-1.439 2.337-3.235 2.337-5.596c0-2.413-1.41-4.494-3.428-5.386c-1.896-.84-4.231-.593-6.322 1.195c-1.363-1.166-2.83-1.676-4.21-1.658c.12-1.112.516-1.913 1.07-2.458c.676-.663 1.685-1.042 3.012-1.042c1.667 0 2.84.594 3.49 1.644a.75.75 0 1 0 1.276-.788c-.993-1.607-2.73-2.356-4.766-2.356c-1.609 0-3.036.464-4.062 1.472c-.931.915-1.454 2.199-1.545 3.77M3.75 12.1c0-1.824 1.065-3.364 2.535-4.015c1.429-.632 3.352-.466 5.183 1.375a.75.75 0 0 0 1.064 0c1.83-1.841 3.754-2.007 5.183-1.375c1.47.65 2.535 2.19 2.535 4.015c0 1.877-.792 3.328-1.942 4.582c-.95 1.036-2.1 1.894-3.229 2.737q-.404.3-.8.601c-.474.362-.892.676-1.294.903c-.402.228-.72.328-.985.328c-.266 0-.583-.1-.985-.328c-.402-.227-.82-.541-1.294-.903a94 94 0 0 0-.8-.601c-1.128-.842-2.278-1.7-3.229-2.737c-1.15-1.254-1.942-2.705-1.942-4.582" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeartUnlockOutlineIcon {
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
  selector: 'svg[solarHeartsBoldDuotoneIcon],svg[solar-hearts-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.5 13.287c-2.475-2.716-5.5-.712-5.5 2.112c0 2.56 1.814 4.035 3.358 5.292l.044.036l.427.35c.571.475 1.121.923 1.671.923s1.1-.448 1.671-.923C19.789 19.73 22 18.224 22 15.399c0-.927-.326-1.767-.853-2.38c-1.075-1.251-2.985-1.556-4.647.268"></svg:path>`,
})
export class SolarHeartsBoldDuotoneIcon {
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
  selector: 'svg[solarHeartsLineDuotoneIcon],svg[solar-hearts-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.829 20.17l.45-.601zm1.671-7.012l-.527.534a.75.75 0 0 0 1.054 0zm1.671 7.011l-.45-.6zm2.976-7.251l.543-.518zm-6.745 6.936l-.443.605zM11.75 15.06c0-.97.576-1.788 1.37-2.133c.757-.329 1.81-.264 2.853.765l1.054-1.067c-1.433-1.415-3.13-1.671-4.504-1.074a3.82 3.82 0 0 0-2.273 3.508zm2.63 5.71c.278.208.598.448.928.63c.33.184.736.35 1.192.35v-1.5c-.094 0-.238-.036-.463-.16a7 7 0 0 1-.758-.521zm4.24 0c.765-.573 1.806-1.273 2.62-2.145c.84-.899 1.51-2.047 1.51-3.565h-1.5c0 1.024-.436 1.824-1.106 2.541c-.695.745-1.568 1.328-2.423 1.968zm-.899-1.201a7 7 0 0 1-.758.52c-.225.125-.369.161-.463.161v1.5c.456 0 .861-.166 1.192-.35c.33-.182.65-.422.929-.63zm5.029-4.51a3.84 3.84 0 0 0-1.06-2.66l-1.085 1.037c.397.415.645.987.645 1.624zm-1.06-2.66a3.68 3.68 0 0 0-2.643-1.149c-1.044-.005-2.121.434-3.074 1.375l1.054 1.067c.71-.7 1.418-.945 2.013-.942c.603.003 1.159.26 1.565.685zm-6.411 7.17l-.434-.32l-.886 1.21l.42.31zm-.434-.32c-1.626-1.191-3.095-2.307-3.095-4.19h-1.5c0 2.767 2.227 4.315 3.709 5.4z"></svg:path><svg:path fill="currentColor" d="m8.962 19.338l.477-.578zM12 5.317l-.552.508a.75.75 0 0 0 1.104 0zM9.439 18.76C6.385 16.242 2.75 13.773 2.75 9.119h-1.5c0 5.516 4.404 8.465 7.235 10.798zM2.75 9.119c0-2.28 1.232-4.174 2.886-4.964c1.596-.763 3.75-.57 5.812 1.67l1.104-1.016C10.114 2.16 7.268 1.712 4.989 2.8C2.768 3.863 1.25 6.314 1.25 9.12zm5.735 10.798c.512.422 1.062.872 1.62 1.213c.556.34 1.196.62 1.895.62v-1.5c-.301 0-.66-.123-1.114-.4c-.452-.276-.921-.657-1.447-1.09zM22.75 9.12c0-2.805-1.518-5.256-3.74-6.318c-2.278-1.089-5.124-.64-7.562 2.008l1.104 1.016c2.062-2.24 4.216-2.433 5.812-1.67c1.654.79 2.886 2.684 2.886 4.964zm-.926 4.122a9.4 9.4 0 0 0 .926-4.122h-1.5a7.9 7.9 0 0 1-.78 3.475zm-7.885 6.023c-.827.648-1.433.986-1.939.986v1.5c1.083 0 2.065-.679 2.865-1.306z" opacity=".5"></svg:path>`,
})
export class SolarHeartsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartsLinearIcon],svg[solar-hearts-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.962 19.338l.477-.578zM12 5.317l-.552.508a.75.75 0 0 0 1.104 0zm2.829 14.852l.45-.6zm1.671-7.01l-.527.533a.75.75 0 0 0 1.054 0zm1.671 7.01l-.45-.6zm-8.732-1.41C6.385 16.243 2.75 13.774 2.75 9.12h-1.5c0 5.516 4.404 8.465 7.235 10.798zM2.75 9.12c0-2.28 1.232-4.174 2.886-4.964c1.596-.763 3.75-.57 5.812 1.67l1.104-1.016C10.114 2.16 7.268 1.712 4.989 2.8C2.768 3.863 1.25 6.314 1.25 9.12zm5.735 10.798c.512.422 1.062.872 1.62 1.213c.556.34 1.196.62 1.895.62v-1.5c-.301 0-.66-.123-1.114-.4c-.452-.276-.921-.657-1.447-1.09zM22.75 9.12c0-2.805-1.518-5.256-3.74-6.318c-2.278-1.089-5.124-.64-7.562 2.008l1.104 1.016c2.062-2.24 4.216-2.433 5.812-1.67c1.654.79 2.886 2.684 2.886 4.964zm-11 5.94c0-.969.576-1.787 1.37-2.132c.757-.329 1.81-.264 2.853.765l1.054-1.067c-1.433-1.415-3.13-1.671-4.504-1.074a3.82 3.82 0 0 0-2.273 3.508zm2.63 5.71c.278.21.598.449.928.632s.736.349 1.192.349v-1.5c-.094 0-.238-.036-.463-.16a7 7 0 0 1-.758-.521zm4.24 0c.765-.572 1.806-1.272 2.62-2.144c.84-.899 1.51-2.047 1.51-3.565h-1.5c0 1.024-.436 1.824-1.106 2.541c-.695.745-1.568 1.328-2.423 1.968zm-.899-1.2a7 7 0 0 1-.758.52c-.225.125-.369.161-.463.161v1.5c.456 0 .861-.166 1.192-.35c.33-.182.65-.422.929-.63zm5.029-4.51a3.84 3.84 0 0 0-1.06-2.66l-1.085 1.037c.397.415.645.987.645 1.624zm-1.06-2.66a3.68 3.68 0 0 0-2.643-1.149c-1.044-.005-2.121.434-3.074 1.375l1.054 1.067c.71-.7 1.418-.945 2.013-.942c.603.003 1.159.26 1.565.685zm.134.842a9.4 9.4 0 0 0 .926-4.122h-1.5a7.9 7.9 0 0 1-.78 3.475zm-6.545 6.328l-.434-.32l-.886 1.21l.42.31zm-.434-.32c-1.626-1.191-3.095-2.307-3.095-4.19h-1.5c0 2.767 2.227 4.315 3.709 5.4zm-.906.015c-.827.648-1.433.986-1.939.986v1.5c1.083 0 2.065-.679 2.865-1.306z"></svg:path>`,
})
export class SolarHeartsLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHeartsOutlineIcon],svg[solar-hearts-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.636 4.155c-1.654.79-2.886 2.684-2.886 4.964c0 4.227 2.999 6.652 5.837 8.948q.431.346.852.693c.526.433.995.814 1.447 1.09s.813.4 1.114.4c.324 0 .689-.139 1.127-.409c-1.362-1.047-2.877-2.5-2.877-4.782c0-1.573.937-2.927 2.273-3.508c1.21-.526 2.668-.39 3.977.613c.814-.624 1.692-.918 2.547-.914a3.63 3.63 0 0 1 1.78.476a8 8 0 0 0 .423-2.607c0-2.28-1.232-4.174-2.886-4.964c-1.596-.763-3.75-.57-5.812 1.67a.75.75 0 0 1-1.104 0c-2.062-2.24-4.216-2.433-5.812-1.67m16.386 8.644a3.85 3.85 0 0 1 .728 2.26c0 1.518-.67 2.667-1.51 3.566c-.666.713-1.484 1.311-2.178 1.819l-.441.325c-.279.21-.6.449-.93.632s-.735.349-1.191.349s-.861-.166-1.192-.35a8 8 0 0 1-.901-.61c-.706.507-1.523.96-2.407.96c-.699 0-1.34-.28-1.896-.62c-.557-.34-1.107-.79-1.62-1.213a83 83 0 0 0-.851-.69C4.851 16.996 1.25 14.108 1.25 9.12c0-2.805 1.518-5.256 3.74-6.318c2.108-1.008 4.702-.7 7.01 1.452c2.307-2.151 4.902-2.46 7.01-1.452c2.222 1.062 3.74 3.513 3.74 6.318c0 1.37-.271 2.588-.728 3.68m-8.901.128a2.32 2.32 0 0 0-1.371 2.132c0 1.883 1.47 2.999 3.095 4.19q.22.16.434.32c.292.219.532.395.758.52s.369.16.463.16s.238-.035.463-.16s.466-.301.758-.52q.25-.187.501-.37c.688-.504 1.362-.999 1.922-1.598c.67-.717 1.106-1.517 1.106-2.542c0-.636-.248-1.208-.645-1.624a2.18 2.18 0 0 0-1.565-.685c-.595-.003-1.304.242-2.013.942a.75.75 0 0 1-1.054 0c-1.042-1.03-2.096-1.094-2.852-.765" clip-rule="evenodd"></svg:path>`,
})
export class SolarHeartsOutlineIcon {
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
  selector: 'svg[solarHelpBoldDuotoneIcon],svg[solar-help-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-6a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m5.479 19.582l4.272-4.273a4 4 0 0 1-1.06-1.06L4.418 18.52q.491.57 1.06 1.06m-1.06-14.1l4.273 4.272a4 4 0 0 1 1.06-1.06L5.48 4.417q-.57.492-1.061 1.061m9.829 3.213L18.52 4.42q.57.49 1.06 1.06l-4.27 4.272a4 4 0 0 0-1.061-1.06m5.332 9.829l-4.273-4.273a4 4 0 0 1-1.06 1.06l4.272 4.274q.571-.491 1.061-1.061"></svg:path>`,
})
export class SolarHelpBoldDuotoneIcon {
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
  selector: 'svg[solarHelpLineDuotoneIcon],svg[solar-help-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="m15 9l4-4M5 19l4-4m0-6L5 5m14 14l-4-4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHelpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHelpLinearIcon],svg[solar-help-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="m15 9l4-4M5 19l4-4m0-6L5 5m14 14l-4-4"></svg:path></svg:g>`,
})
export class SolarHelpLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHelpOutlineIcon],svg[solar-help-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12c0-2.284.828-4.375 2.2-5.989l3.203 3.202A4.73 4.73 0 0 0 7.25 12a4.73 4.73 0 0 0 .903 2.787L4.95 17.989A9.2 9.2 0 0 1 2.75 12m6.463-3.847L6.011 4.95A9.2 9.2 0 0 1 12 2.75c2.284 0 4.375.828 5.989 2.2l-3.203 3.203A4.73 4.73 0 0 0 12 7.25a4.73 4.73 0 0 0-2.787.903M6.011 19.05A9.2 9.2 0 0 0 12 21.25a9.2 9.2 0 0 0 5.989-2.2l-3.203-3.203A4.73 4.73 0 0 1 12 16.75a4.73 4.73 0 0 1-2.787-.903zm9.836-4.264l3.203 3.203A9.2 9.2 0 0 0 21.25 12a9.2 9.2 0 0 0-2.2-5.989l-3.203 3.202A4.73 4.73 0 0 1 16.75 12a4.73 4.73 0 0 1-.903 2.787M8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarHelpOutlineIcon {
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
  selector: 'svg[solarHighDefinitionBoldDuotoneIcon],svg[solar-high-definition-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.5 7.25a.75.75 0 0 1 .75.75v3.25h3.315V8a.75.75 0 1 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25H6.25V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.685 7.25c-.81 0-1.713.57-1.713 1.55v6.4c0 .98.903 1.55 1.713 1.55c2.937 0 5.565-2.002 5.565-4.75s-2.628-4.75-5.565-4.75m-.202 1.561l-.01.01v6.358l.01.01a.32.32 0 0 0 .202.061c2.381 0 4.065-1.58 4.065-3.25s-1.684-3.25-4.065-3.25c-.1 0-.169.034-.202.061" clip-rule="evenodd"></svg:path>`,
})
export class SolarHighDefinitionBoldDuotoneIcon {
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
  selector: 'svg[solarHighDefinitionLineDuotoneIcon],svg[solar-high-definition-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.25 8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm6.315-8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm3.907-.8V8.8h-1.5v6.4zm.213.05a.32.32 0 0 1-.202-.061c-.03-.026-.01-.025-.01.011h-1.5c0 .98.902 1.55 1.712 1.55zm0 1.5c2.937 0 5.565-2.002 5.565-4.75h-1.5c0 1.67-1.684 3.25-4.065 3.25zm0-8c2.381 0 4.065 1.58 4.065 3.25h1.5c0-2.748-2.628-4.75-5.565-4.75zm0-1.5c-.81 0-1.713.57-1.713 1.55h1.5c0 .036-.02.037.011.011a.32.32 0 0 1 .202-.061zM4.75 8v4h1.5V8zm0 4v4h1.5v-4zm4.815-4v4h1.5V8zm0 4v4h1.5v-4zm-4.065.75h4.815v-1.5H5.5z"></svg:path></svg:g>`,
})
export class SolarHighDefinitionLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighDefinitionLinearIcon],svg[solar-high-definition-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M6.25 8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm6.315-8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm3.907-.8V8.8h-1.5v6.4zm.213.05a.32.32 0 0 1-.202-.061c-.03-.026-.01-.025-.01.011h-1.5c0 .98.902 1.55 1.712 1.55zm0 1.5c2.937 0 5.565-2.002 5.565-4.75h-1.5c0 1.67-1.684 3.25-4.065 3.25zm0-8c2.381 0 4.065 1.58 4.065 3.25h1.5c0-2.748-2.628-4.75-5.565-4.75zm0-1.5c-.81 0-1.713.57-1.713 1.55h1.5c0 .036-.02.037.011.011a.32.32 0 0 1 .202-.061zM4.75 8v4h1.5V8zm0 4v4h1.5v-4zm4.815-4v4h1.5V8zm0 4v4h1.5v-4zm-4.065.75h4.815v-1.5H5.5z"></svg:path></svg:g>`,
})
export class SolarHighDefinitionLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighDefinitionOutlineIcon],svg[solar-high-definition-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"></svg:path><svg:path d="M5.5 7.25a.75.75 0 0 1 .75.75v3.25h3.315V8a.75.75 0 1 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25H6.25V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m6.472 1.55c0-.98.903-1.55 1.713-1.55c2.937 0 5.565 2.002 5.565 4.75s-2.628 4.75-5.565 4.75c-.81 0-1.713-.57-1.713-1.55zm1.5.022l.011-.01a.32.32 0 0 1 .202-.062c2.381 0 4.065 1.58 4.065 3.25s-1.684 3.25-4.065 3.25a.32.32 0 0 1-.213-.072z"></svg:path></svg:g>`,
})
export class SolarHighDefinitionOutlineIcon {
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
  selector: 'svg[solarHighQualityBoldDuotoneIcon],svg[solar-high-quality-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 7.25a.75.75 0 0 1 .75.75v3.25h3.315V8a.75.75 0 0 1 1.5 0v7.62a.75.75 0 0 1-1.5 0v-2.87H6.75v2.87a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 6 7.25"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.111 7.25h-.064c-.385 0-.664 0-.91.038c-.972.153-1.879.782-2.124 1.756c-.06.24-.06.508-.06.792v3.947c0 .284 0 .552.06.792c.245.975 1.152 1.603 2.124 1.756c.246.038.525.038.91.038h.128c.385 0 .665 0 .91-.038c.28-.044.555-.128.81-.248l.64.505a.75.75 0 0 0 .93-1.176l-.445-.353q.124-.225.189-.484c.06-.24.06-.508.06-.792V9.836c0-.284 0-.552-.06-.792c-.245-.974-1.151-1.603-2.124-1.756c-.245-.038-.525-.038-.91-.038zm1.428 6.638l.227.179c.002-.072.003-.18.003-.353v-3.81c0-.398-.006-.46-.015-.495c-.059-.234-.347-.551-.902-.639c-.114-.018-.265-.02-.74-.02c-.477 0-.628.002-.741.02c-.556.088-.844.405-.903.64c-.009.034-.014.096-.014.495v3.81c0 .398.005.46.014.495c.06.234.347.551.902.639c.114.018.265.02.741.02h.323a.75.75 0 0 1 1.105-.981" clip-rule="evenodd"></svg:path>`,
})
export class SolarHighQualityBoldDuotoneIcon {
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
  selector: 'svg[solarHighQualityLineDuotoneIcon],svg[solar-high-quality-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6 8v7.619M10.815 8v7.619M6 12h4.815M19 16l-1.926-1.524m-.963 1.143c-.447 0-.671 0-.857-.03c-.764-.12-1.361-.592-1.513-1.197c-.037-.147-.037-.324-.037-.678v-3.81c0-.353 0-.53.037-.677c.152-.605.749-1.077 1.513-1.198C15.44 8 15.664 8 16.11 8c.448 0 .671 0 .857.03c.764.12 1.361.592 1.514 1.197c.037.147.037.324.037.678v3.81c0 .353 0 .53-.037.678c-.152.604-.75 1.076-1.514 1.197c-.186.029-.41.029-.857.029Z"></svg:path></svg:g>`,
})
export class SolarHighQualityLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighQualityLinearIcon],svg[solar-high-quality-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M6 8v7.619M10.815 8v7.619M6 12h4.815M19 16l-1.926-1.524m-.963 1.143c-.447 0-.671 0-.857-.03c-.764-.12-1.361-.592-1.513-1.197c-.037-.147-.037-.324-.037-.678v-3.81c0-.353 0-.53.037-.677c.152-.605.749-1.077 1.513-1.198C15.44 8 15.664 8 16.11 8c.448 0 .671 0 .857.03c.764.12 1.361.592 1.514 1.197c.037.147.037.324.037.678v3.81c0 .353 0 .53-.037.678c-.152.604-.75 1.076-1.514 1.197c-.186.029-.41.029-.857.029Z"></svg:path></svg:g>`,
})
export class SolarHighQualityLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHighQualityOutlineIcon],svg[solar-high-quality-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"></svg:path><svg:path d="M16.047 7.25h.128c.385 0 .665 0 .91.038c.973.153 1.879.782 2.124 1.756c.06.24.06.508.06.792v3.947c0 .284 0 .552-.06.792a2 2 0 0 1-.19.484l.446.353a.75.75 0 1 1-.93 1.176l-.64-.505c-.255.12-.53.204-.81.248c-.245.038-.525.038-.91.038h-.128c-.385 0-.664 0-.91-.038c-.972-.153-1.879-.781-2.124-1.756c-.06-.24-.06-.508-.06-.792V9.836c0-.284 0-.552.06-.792c.245-.974 1.152-1.603 2.124-1.756c.246-.038.525-.038.91-.038m1.719 6.817l-.227-.179a.75.75 0 0 0-1.105.98l-.323.001c-.476 0-.627-.002-.74-.02c-.556-.088-.844-.405-.903-.64c-.009-.034-.014-.096-.014-.495v-3.81c0-.398.005-.46.014-.495c.06-.234.347-.551.902-.639c.114-.018.265-.02.741-.02s.627.002.74.02c.556.088.844.405.903.64c.009.034.014.096.014.495v3.81c0 .171 0 .28-.002.352M6 7.25a.75.75 0 0 1 .75.75v3.25h3.315V8a.75.75 0 0 1 1.5 0v7.62a.75.75 0 0 1-1.5 0v-2.87H6.75v2.87a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 6 7.25"></svg:path></svg:g>`,
})
export class SolarHighQualityOutlineIcon {
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

@Component({
  standalone: true,
  selector: 'svg[solarHikingBoldDuotoneIcon],svg[solar-hiking-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-9.899c-.485.405-.87.72-1.307.879a2.75 2.75 0 0 1-1.886 0c-.453-.165-.85-.497-1.36-.923l-.093-.077l-.081-.068a6 6 0 0 0-.47-.37a5.3 5.3 0 0 0-1.2-.587a8 8 0 0 0-.386-.09a1 1 0 0 0-.092-.014l-.019.008a.5.5 0 0 0-.191.143a.3.3 0 0 0-.012.048c-.01.053-.017.124-.031.27l-.162 1.623c-.094.934-.105 1.184-.04 1.393q.059.184.169.342c.125.18.33.324 1.126.822l.105.066c.796.496 1.347.84 1.745 1.335q.3.375.498.812c.261.579.318 1.226.401 2.16l.011.125l.172 1.935a.75.75 0 0 1-1.494.134l-.172-1.936c-.098-1.107-.142-1.483-.285-1.802a2.3 2.3 0 0 0-.3-.487c-.219-.273-.534-.481-1.476-1.07l-.112-.07c-.63-.393-1.126-.702-1.45-1.165a2.8 2.8 0 0 1-.369-.754c-.169-.539-.11-1.12-.035-1.859l.013-.13l.162-1.622l.005-.048c.022-.23.047-.485.17-.752c.135-.297.373-.53.594-.686s.52-.302.846-.33c.184-.016.356.008.505.036c.144.028.316.07.507.118l.026.006l.018.005l.029.008c.008.003.042.014.082.032l.02.009l.054.019a6.8 6.8 0 0 1 1.425.72c.205.144.342.258.561.44l.012.01l.082.069c.648.54.832.68 1.006.743c.277.1.58.1.858 0c.174-.064.358-.203 1.007-.743l.814-.68V8a.75.75 0 0 1 .75-.75m-6.63 3.697l.005-.003zm-.541-1.4h.002l.007-.003z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.712 9.763a.75.75 0 0 1-.475.949l-1.672.557A1.19 1.19 0 0 0 5.75 12.4c0 .084.047.16.122.198l2.463 1.231a.75.75 0 1 1-.67 1.342L5.2 13.939a1.72 1.72 0 0 1-.95-1.539c0-1.159.742-2.187 1.84-2.554l1.673-.557a.75.75 0 0 1 .949.474m.704 7.113a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208" opacity=".5"></svg:path>`,
})
export class SolarHikingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
