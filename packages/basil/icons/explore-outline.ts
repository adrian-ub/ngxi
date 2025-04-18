import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilExploreOutlineIcon],svg[basil-explore-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"></svg:path><svg:path d="M10.85 9.309a5 5 0 0 0-1.756 3.04l-.438 2.633c-.227 1.368 1.363 2.285 2.433 1.405l2.061-1.696a5 5 0 0 0 1.756-3.04l.438-2.633c.227-1.368-1.363-2.285-2.433-1.405zM12 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path></svg:g>`,
})
export class BasilExploreOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
