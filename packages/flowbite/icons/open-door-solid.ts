import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteOpenDoorSolidIcon],svg[flowbite-open-door-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 19V5h4a1 1 0 0 1 1 1v11h1a1 1 0 0 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M12 4.571a1 1 0 0 0-1.275-.961l-5 1.428A1 1 0 0 0 5 6v11H4a1 1 0 0 0 0 2h1.86l4.865 1.39A1 1 0 0 0 12 19.43zM10 11a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlowbiteOpenDoorSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
