import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsFriendIcon],svg[ls-friend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M552.664 491c41 23 64 61 60 100c-2 24-1 24-32 28c-19 2-140 3-263 3c-140 0-286-1-297-4c-41-11-17-87 37-123c43-27 130-69 154-74c33-7 37-28 0-91c-8-15-17-58-18-104c-1-74 12-124 77-149c12-4 26-6 39-6c43 0 83 24 100 59c23 47 12 170-12 215c-29 51-26 67 6 75c20 5 86 36 149 71m219-63c32 17 50 48 47 78c-1 18-1 19-25 22c-12 2-75 3-149 3c-13-31-38-59-72-77c-39-22-85-45-120-60c23-11 43-20 52-22c25-6 28-20 0-70c-7-12-15-46-16-82c-1-58 12-98 62-117c10-3 21-5 31-5c33 0 64 18 77 46c17 37 9 133-9 169c-22 40-20 52 5 58c16 4 67 29 117 57"></svg:path>`,
})
export class LsFriendIcon {
  readonly viewBox = input("0 0 819 622")
  readonly width = input("1.32em")
  readonly height = input("1em")
}
