import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCoverIcon],svg[subway-cover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.3 106.7H42.7v-64h298.7v42.7H384V42.7C384 19.1 364.9 0 341.3 0H42.7C19.1 0 0 19.1 0 42.7v426.7C0 492.9 19.1 512 42.7 512h426.7c23.6 0 42.7-19.1 42.7-42.7V384H405.3c-23.6 0-42.7-19.1-42.7-42.7v-64c0-23.5 19.1-42.7 42.7-42.7H512v-85.3c0-23.5-19.1-42.6-42.7-42.6m-64 234.6H512v-64H405.3z"></svg:path>`,
})
export class SubwayCoverIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
