import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlloIcon],svg[mdi-allo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.984 12v9c0 .5-.226.82-.68.96c-.452.142-.82.009-1.1-.398l-1.548-2.109c-1.875 1.688-4.093 2.531-6.656 2.531c-2.75 0-5.102-.976-7.055-2.93c-1.953-1.952-2.93-4.304-2.93-7.054s.977-5.102 2.93-7.055C6.898 2.992 9.25 2.015 12 2.015s5.102.977 7.055 2.93c1.953 1.953 2.93 4.305 2.93 7.055z" fill="currentColor"></svg:path>`,
})
export class MdiAlloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
