import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPenLightIcon],svg[lets-icons-pen-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="16" height="4" x="4" y="16" rx="2"></svg:rect><svg:path d="M4.91 11.364L8 16h8l3.09-4.636c.436-.653.654-.98.618-1.335c-.035-.356-.312-.633-.867-1.188L12 2L5.16 8.84c-.556.556-.833.833-.868 1.189s.182.682.617 1.335Z"></svg:path><svg:circle cx="12" cy="11" r="2.5"></svg:circle><svg:path d="M12 2v7"></svg:path></svg:g>`,
})
export class LetsIconsPenLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
