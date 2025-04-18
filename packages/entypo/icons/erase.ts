import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoEraseIcon],svg[entypo-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3H8.446c-.44 0-1.071.236-1.402.525L.248 9.473a.682.682 0 0 0 0 1.053l6.796 5.947c.331.289.962.527 1.402.527H18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2.809 11l-2.557-2.557L10.078 14l-1.443-1.443L11.191 10L8.635 7.443L10.078 6l2.557 2.555L15.19 6l1.444 1.443L14.078 10l2.557 2.555z"></svg:path>`,
})
export class EntypoEraseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
