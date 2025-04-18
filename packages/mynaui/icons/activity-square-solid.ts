import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiActivitySquareSolidIcon],svg[mynaui-activity-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.962 2.421c1.276-.171 2.908-.171 4.981-.171h.114c2.073 0 3.705 0 4.98.171c1.31.176 2.354.545 3.175 1.367c.822.821 1.19 1.866 1.367 3.174c.171 1.276.171 2.908.171 4.981v.114c0 2.073 0 3.705-.171 4.98c-.176 1.31-.545 2.354-1.367 3.175c-.821.822-1.866 1.19-3.174 1.367c-1.276.171-2.908.171-4.981.171h-.114c-2.073 0-3.705 0-4.98-.171c-1.31-.176-2.354-.545-3.175-1.367c-.822-.821-1.19-1.866-1.367-3.174c-.171-1.276-.171-2.908-.171-4.981v-.114c0-2.073 0-3.705.171-4.98c.176-1.31.545-2.354 1.367-3.175c.821-.822 1.866-1.19 3.174-1.367m4.773 4.432a.75.75 0 0 0-1.431-.132L8.492 11.25H7a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .696-.472l1.063-2.657l1.506 7.526a.75.75 0 0 0 1.431.132l1.812-4.529H17a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0-.696.471L13.24 14.38z"></svg:path>`,
})
export class MynauiActivitySquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
