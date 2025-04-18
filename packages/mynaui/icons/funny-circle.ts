import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFunnyCircleIcon],svg[mynaui-funny-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.699 10.646l-.104-.49m4.995-.55l-.104-.49M8.5 15.57c1.258.316 2.686.316 4.123-.069c1.436-.385 2.672-1.099 3.604-2.001"></svg:path><svg:path d="m12.587 15.637l.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"></svg:path><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class MynauiFunnyCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
