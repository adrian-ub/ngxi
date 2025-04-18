import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixControlTextButtonIcon],svg[ix-control-text-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430.545 128c21.422 0 38.788 19.103 38.788 42.667v170.666c0 23.564-17.366 42.667-38.788 42.667H81.455c-21.422 0-38.788-19.103-38.788-42.667V170.667c0-23.564 17.366-42.667 38.788-42.667zm-3.878 42.667H85.333v170.666h341.334zM320 192v38.4h-19.2l-6.4-12.8h-25.6v76.8l25.6 6.4V320h-76.8v-19.2l25.6-6.4v-76.8h-25.6l-6.4 12.8H192V192z"></svg:path>`,
})
export class IxControlTextButtonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
