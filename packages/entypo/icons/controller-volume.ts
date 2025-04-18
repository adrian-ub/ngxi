import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoControllerVolumeIcon],svg[entypo-controller-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13.805c0 .657-.538 1.195-1.195 1.195H1.533c-.88 0-.982-.371-.229-.822l16.323-9.055C18.382 4.67 19 5.019 19 5.9z"></svg:path>`,
})
export class EntypoControllerVolumeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
