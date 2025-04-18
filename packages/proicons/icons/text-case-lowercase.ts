import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextCaseLowercaseIcon],svg[proicons-text-case-lowercase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.81 12.919l-.074-.015c-3.049-.578-6.676-.49-6.676 2.555c0 .854.491 1.658 1.206 2.095c.71.434 1.604.446 2.44.446c1.15 0 2.41-.65 2.914-1.662q.146-.29.19-.657v-1.167m0-1.595v-.609c0-.762-.09-1.768-.547-2.384c-.497-.67-1.38-1.426-2.828-1.426c-2.393 0-3.166 1.654-3.166 1.654M9.81 12.92v1.595m0 3.383v-3.383M13.56 6.5V18m8-4a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class ProiconsTextCaseLowercaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
