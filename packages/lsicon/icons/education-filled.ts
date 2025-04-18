import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconEducationFilledIcon],svg[lsicon-education-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 1.958l6.5 2.709V9.5h-1V5.809l-.5.25v5.799l-.338.115l-.162-.473l.162.473l-.003.001l-.007.002l-.026.01l-.098.032a31 31 0 0 1-1.557.465c-.928.25-2.11.517-2.97.517s-2.044-.268-2.971-.517a31 31 0 0 1-1.656-.498l-.026-.009l-.007-.002H3.34l.16-.474l-.16.473l-.34-.116V6.06L.8 4.96zM4 6.56v4.579a29 29 0 0 0 1.29.38c.929.25 1.996.482 2.71.482s1.781-.232 2.71-.483a30 30 0 0 0 1.29-.38V6.56l-4 2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconEducationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
