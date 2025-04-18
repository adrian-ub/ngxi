import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCoinMultiple32FilledIcon],svg[fluent-coin-multiple-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.081 3.925C10.896 2.715 13.345 2 16 2s5.104.716 6.919 1.925C24.726 5.13 26 6.905 26 9s-1.274 3.87-3.081 5.075C21.104 15.285 18.655 16 16 16s-5.104-.716-6.919-1.925C7.274 12.87 6 11.095 6 9s1.274-3.87 3.081-5.075m16.436 9.898a9.8 9.8 0 0 1-1.766 1.5C21.658 16.718 18.91 17.5 16 17.5s-5.658-.782-7.75-2.177a9.8 9.8 0 0 1-1.766-1.5A5.2 5.2 0 0 0 6 16c0 2.095 1.274 3.87 3.081 5.075C10.896 22.285 13.345 23 16 23s5.104-.716 6.919-1.925C24.726 19.87 26 18.095 26 16c0-.774-.174-1.503-.483-2.177m0 7a9.8 9.8 0 0 1-1.766 1.5C21.658 23.718 18.91 24.5 16 24.5s-5.658-.782-7.75-2.177a9.8 9.8 0 0 1-1.766-1.5A5.2 5.2 0 0 0 6 23c0 2.095 1.274 3.87 3.081 5.075C10.896 29.285 13.345 30 16 30s5.104-.716 6.919-1.925C24.726 26.87 26 25.095 26 23a5.2 5.2 0 0 0-.483-2.177"></svg:path>`,
})
export class FluentCoinMultiple32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
