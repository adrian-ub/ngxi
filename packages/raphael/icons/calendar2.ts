import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelCalendar2Icon],svg[raphael-calendar2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4.582h-2v3.335h2zm-10 0h-2v3.335h2zm13.416 1.166H23v3.17h-4v-3.17h-6v3.168H9.002V5.748h-2.42v21.555h18.834zM11.033 26.303h-3.45v-3.44h3.45zm0-4.44h-3.45v-3.435h3.45v3.434zm0-4.434h-3.45v-3.442h3.45v3.44zm4.468 8.873h-3.467v-3.44H15.5zm0-4.44h-3.467v-3.435H15.5v3.434zm0-4.434h-3.467v-3.442H15.5v3.44zm4.47 8.873H16.5v-3.44h3.47v3.44zm0-4.44H16.5v-3.435h3.47v3.434zm0-4.434H16.5v-3.442h3.47v3.44zm4.448 8.873H20.97v-3.44h3.448v3.44zm0-4.44H20.97v-3.435h3.448v3.434zm0-4.434H20.97v-3.442h3.448v3.44z"></svg:path>`,
})
export class RaphaelCalendar2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
