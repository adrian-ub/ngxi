import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTrashTwoIcon],svg[mynaui-trash-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m5.25 5.778l1.727 12.178c.09.579.329 1.12.691 1.564a3 3 0 0 0 1.363.95l.246.083a8.52 8.52 0 0 0 5.446 0l.246-.082c.528-.178 1-.506 1.362-.95s.602-.985.692-1.564l1.727-12.18"></svg:path><svg:path d="M12 7.5c3.728 0 6.75-.784 6.75-1.75S15.728 4 12 4s-6.75.784-6.75 1.75S8.272 7.5 12 7.5"></svg:path></svg:g>`,
})
export class MynauiTrashTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
