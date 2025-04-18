import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsMealIcon],svg[ls-meal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201 248V14h67v268c0 37-30 68-67 68v296c0 18-15 34-34 34h-67c-18 0-33-16-33-34V350c-37 0-67-31-67-68V14h67v234h33V14h67v234zm168 102V114c0-55 45-100 100-100s100 45 100 100v532c0 18-14 34-32 34h-68c-18 0-34-16-34-34V350z"></svg:path>`,
})
export class LsMealIcon {
  readonly viewBox = input("0 0 569 680")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
