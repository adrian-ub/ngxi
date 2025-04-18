import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteAlarm1FillIcon],svg[mingcute-alarm-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M17.5 3a3.5 3.5 0 0 1 2.526 5.923A8.96 8.96 0 0 1 21 13a8.98 8.98 0 0 1-2.936 6.65l.643.643a1 1 0 0 1-1.414 1.414l-.868-.868A8.96 8.96 0 0 1 12 22a8.96 8.96 0 0 1-4.425-1.161l-.868.868a1 1 0 0 1-1.414-1.414l.643-.643A8.98 8.98 0 0 1 3 13a8.96 8.96 0 0 1 .974-4.077A3.5 3.5 0 1 1 9.307 4.41A9 9 0 0 1 12 4c.938 0 1.842.143 2.693.41A3.5 3.5 0 0 1 17.5 3M12 8a1 1 0 0 0-.993.883L11 9v3.986a1 1 0 0 0 .202.617l.09.104l2.106 2.105a1 1 0 0 0 1.498-1.32l-.084-.094L13 12.586V9a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class MingcuteAlarm1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
