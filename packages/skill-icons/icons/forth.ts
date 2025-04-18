import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsForthIcon],svg[skill-icons-forth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#EE524F" rx="60"></svg:rect><svg:path fill="#B61B1B" d="M73.872 99.73H50.05V63.997h47.647V99.73zm.164 81.141H50.212v-35.735H97.86v35.735zm107.66-81.141h-23.824V63.997h47.647V99.73zm-14.491 106.93h-14.186v-10.639h14.186v-8.867l.823-9.674h-14.186l-.823-20.471V135.73h56.744v21.279l.823 20.471H196.4l-.823 7.901v7.093h-14.186v14.186z"></svg:path><svg:path fill="#414141" d="M166.451 203.313h-15.432V191.74h15.432v-19.289h-15.432v-46.294h61.726v46.294h-15.432v15.431h-15.431v15.431zm-92.588-27.004H43v-50.152h61.725v50.152zm0-81.015H43V49h61.725v46.294zm108.019 0h-30.863V49h61.726v46.294z"></svg:path></svg:g>`,
})
export class SkillIconsForthIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
