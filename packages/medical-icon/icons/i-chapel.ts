import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[medicalIconIChapelIcon],svg[medical-icon-i-chapel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.65 35.391V16.028L32.203.482l-7.439 15.546v19.363L9.66 42.686v20.07h17.916v-9.678c0-4.963 4.492-6.588 4.492-6.588s4.491 1.625 4.491 6.588v9.678h18.202v-20.07zm-4.905-7.908h-5.103v-4.097c0-4.109 2.551-5.456 2.551-5.456s2.552 1.347 2.552 5.456z"></svg:path>`,
})
export class MedicalIconIChapelIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
