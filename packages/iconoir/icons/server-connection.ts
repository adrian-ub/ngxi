import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirServerConnectionIcon],svg[iconoir-server-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 19h9m9 0h-9m0 0v-6m0 0h6V5H6v8zM9 9.01l.01-.011M12 9.01l.01-.011"></svg:path>`,
})
export class IconoirServerConnectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
