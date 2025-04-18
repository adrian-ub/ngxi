import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEjectCircleIcon],svg[mdi-eject-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.5 14h-9v-2h9zm-9-4L12 6l4.5 6z"></svg:path>`,
})
export class MdiEjectCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
