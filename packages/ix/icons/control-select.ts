import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixControlSelectIcon],svg[ix-control-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430.545 128c21.422 0 38.788 19.103 38.788 42.667v170.666c0 23.564-17.366 42.667-38.788 42.667H81.455c-21.422 0-38.788-19.103-38.788-42.667V170.667c0-23.564 17.366-42.667 38.788-42.667zm-3.878 42.667H85.333v170.666h341.334zm-50.209 56.457l15.085 15.085l-50.21 50.209l-50.209-50.209l15.085-15.085l35.124 35.127z"></svg:path>`,
})
export class IxControlSelectIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
