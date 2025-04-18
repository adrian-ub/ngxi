import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifCnIcon],svg[cif-cn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#DE2910" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#FFDE00" d="m50.5 20.5l17.634 54.27l-46.166-33.541h57.064L32.867 74.77zm41.425 5.145l12.488-14.348l-1.67 18.948l-9.786-16.31l17.505 7.443zm18.676 16.269l17.077-8.377l-8.892 16.815l-2.69-18.83l13.244 13.653zm.284 25.839l19.009-.682l-14.978 11.724l5.226-18.289l6.522 17.868zm-18.194 16.5l17.798 6.711l-18.343 5.032l11.882-14.853l-.882 19z"></svg:path></svg:g>`,
})
export class CifCnIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
