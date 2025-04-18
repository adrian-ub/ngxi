import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSaltIcon],svg[tabler-salt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 13v.01M10 16v.01m4-.01v.01M7.5 8h9l-.281-2.248A2 2 0 0 0 14.234 4H9.766A2 2 0 0 0 7.78 5.752z"></svg:path><svg:path d="m7.5 8l-1.612 9.671A2 2 0 0 0 7.861 20h8.278a2 2 0 0 0 1.973-2.329L16.5 8"></svg:path></svg:g>`,
})
export class TablerSaltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
