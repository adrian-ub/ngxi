import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurrentAcIcon],svg[mdi-current-ac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.43 11C12.28 10.84 10 7 7 7s-4.68 3.18-5 4v2h9.57c.15.16 2.43 4 5.43 4s4.68-3.18 5-4v-2zM7 9c1.17 0 2.18.85 3 2H4.31c.47-.83 1.23-2 2.69-2m10 6c-1.17 0-2.18-.85-3-2h5.69c-.47.83-1.23 2-2.69 2"></svg:path>`,
})
export class MdiCurrentAcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
