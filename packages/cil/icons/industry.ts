import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilIndustryIcon],svg[cil-industry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M459.26 96L328 225.7V96h-34.525L168 223.267V16H16v480h480V96ZM464 464H48V48h88v216h36.778L296 139.018V264h38.764L464 136.3Z"></svg:path><svg:path fill="currentColor" d="M136 328v8h32v-32h-32zm0 48h32v32h-32zm80-48v8h32v-32h-32zm0 48h32v32h-32zm80-48v8h32v-32h-32zm0 48h32v32h-32zm80-72h32v32h-32zm0 72h32v32h-32z"></svg:path>`,
})
export class CilIndustryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
