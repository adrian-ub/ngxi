import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEjectCircleOutlineIcon],svg[mdi-eject-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.5-8L12 6l-4.5 6zm0 4h-9v-2h9z"></svg:path>`,
})
export class MdiEjectCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
