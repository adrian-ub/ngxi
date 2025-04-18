import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLockSlashIcon],svg[iconoir-lock-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 12H6.6a.6.6 0 0 0-.6.6v6.8a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6v-.9M16 12V8c0-1.333-.8-4-4-4c-.747 0-1.363.145-1.869.385M16 12h1.4a.6.6 0 0 1 .6.6v.4M8 8v4M3 3l18 18"></svg:path>`,
})
export class IconoirLockSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
