import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGroupIcon],svg[zmdi-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 155v85h107v-85zM0 5h85v22h299V5h85v86h-21v298h21v86h-85v-22H85v22H0v-86h21V91H0zm85 384v22h299v-22h21V91h-21V69H85v22H64v298zm22-277h192v85h64v171H149v-85h-42zm192 171H192v42h128v-85h-21z"></svg:path>`,
})
export class ZmdiGroupIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
