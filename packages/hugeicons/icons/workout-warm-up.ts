import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutWarmUpIcon],svg[hugeicons-workout-warm-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M19 8.89l-5.022-.599M19 21l-.456-3.47c-.254-1.928-.38-2.892-1.053-3.4c-.672-.509-1.619-.357-3.513-.054l-1.838.295m1.838-6.08l-1.755-.209c-.803-.096-1.204-.144-1.508.062s-.416.6-.638 1.388l-.668 2.372c-.386 1.368-.579 2.053-.217 2.467c.361.414 1.054.303 2.44.081l.508-.081m1.838-6.08l-1.838 6.08M10 17l-.553 1.106a3 3 0 0 1-1.341 1.341L5 21" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutWarmUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
