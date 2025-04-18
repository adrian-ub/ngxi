import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFolderWarningIcon],svg[iconoir-folder-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 3v4m0 4.01l.01-.011M22 7v12.4a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6V11"></svg:path><svg:path d="M14 7h-1.278a.6.6 0 0 1-.39-.144L9.169 4.144A.6.6 0 0 0 8.778 4H2.6a.6.6 0 0 0-.6.6V11h12"></svg:path></svg:g>`,
})
export class IconoirFolderWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
