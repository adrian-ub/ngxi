import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReminderPersonIcon],svg[fluent-mdl2-reminder-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2029 1453l-557 558l-269-270l90-90l179 178l467-466zm-434 72q-111-122-259-183t-312-62q-108 0-206 27t-184 76t-155 119t-119 155t-77 184t-27 207H128q0-143 41-275t119-243t186-195t245-132q-78-42-140-102T474 968t-67-156t-23-172q0-133 50-249t137-204T774 50t250-50q133 0 249 50t204 137t137 203t50 250q0 89-23 172t-67 156t-106 133t-140 102q102 36 192 95t163 139zM512 640q0 106 40 199t110 162t163 110t199 41t199-40t162-110t110-163t41-199t-40-199t-110-162t-163-110t-199-41t-199 40t-162 110t-110 163t-41 199"></svg:path>`,
})
export class FluentMdl2ReminderPersonIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
