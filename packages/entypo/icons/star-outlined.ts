import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoStarOutlinedIcon],svg[entypo-star-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.8 8.022h-6.413L10 1.3L7.611 8.022H1.199l5.232 3.947l-1.871 6.929L10 14.744l5.438 4.154l-1.869-6.929zM10 12.783l-3.014 2.5l1.243-3.562l-2.851-2.3l3.522.101l1.1-4.04l1.099 4.04l3.521-.101l-2.851 2.3l1.243 3.562z"></svg:path>`,
})
export class EntypoStarOutlinedIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
