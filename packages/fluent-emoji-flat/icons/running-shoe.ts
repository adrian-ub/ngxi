import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatRunningShoeIcon],svg[fluent-emoji-flat-running-shoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#635994" d="M18.5 11.41L14.79 7.7l.43-.43c1.51-1.51 4.08-.9 4.75 1.12l1.71 4.5z"></svg:path><svg:path fill="#9B9B9B" d="m26.32 23.53l-5.05-11.79c-.26-.61-.17-.7-.64-1.17l-.52-.52c-.41-.41-1.08-.41-1.49 0s-1.08.41-1.49 0L12.7 5.61c-.41-.41-.41-1.08 0-1.49s.41-1.08 0-1.49l-.02-.02c-.82-.82-2.16-.82-2.98 0L2.35 9.97c-.45.45-.45 1.18 0 1.63l20.82 17.24c.45.45 4.67.86 5.12.41l.82-.56c3.09-2.72-2.04-3.42-2.79-5.16"></svg:path><svg:path fill="#E6E6E6" fill-rule="evenodd" d="M18.74 14.1c-.19-.19-.31-.45-.31-.74c0-.58.47-1.05 1.05-1.05h2.44a1.05 1.05 0 1 1 0 2.1h-2.44c-.28 0-.55-.12-.74-.31m1.59 3.34c-.19-.19-.31-.45-.31-.74c0-.58.47-1.05 1.05-1.05h2.44a1.05 1.05 0 1 1 0 2.1h-2.44c-.28 0-.55-.12-.74-.31m1.01 2.79c0 .29.12.55.31.74s.45.3.74.31h2.44a1.05 1.05 0 1 0 0-2.1h-2.44c-.58 0-1.05.47-1.05 1.05" clip-rule="evenodd"></svg:path><svg:path fill="#635994" d="m7.34 4.97l5.01 5.11a6.48 6.48 0 0 1 1.84 4.53l-.01 2.93L4.2 8.07z"></svg:path><svg:path fill="#BEBEBE" d="M26.2 29.8s-4-.4-8.93-3.73C12.94 23.16 2.35 11.6 2.35 11.6c-.46-.46-.46-1.21 0-1.67l2.91-2.91s9.05 8.56 10.46 12.95c2.54 7.96 13.52 8.69 13.52 8.69l-.7.7c-.46.46-1.09.64-2.34.44"></svg:path></svg:g>`,
})
export class FluentEmojiFlatRunningShoeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
