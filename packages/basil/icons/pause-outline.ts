import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilPauseOutlineIcon],svg[basil-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.535 4.766c.73.27 1.215.965 1.215 1.743V17.49c0 .778-.485 1.474-1.215 1.743a4.44 4.44 0 0 1-3.07 0a1.86 1.86 0 0 1-1.215-1.743V6.51c0-.778.485-1.474 1.215-1.743a4.44 4.44 0 0 1 3.07 0M18.25 6.51a.36.36 0 0 0-.234-.335a2.94 2.94 0 0 0-2.032 0a.36.36 0 0 0-.234.335v10.98c0 .15.093.284.234.335a2.94 2.94 0 0 0 2.032 0a.36.36 0 0 0 .234-.335zM8.535 4.766c.73.27 1.215.965 1.215 1.743V17.49c0 .778-.485 1.474-1.215 1.743a4.44 4.44 0 0 1-3.07 0A1.86 1.86 0 0 1 4.25 17.49V6.51c0-.778.485-1.474 1.215-1.743a4.44 4.44 0 0 1 3.07 0M8.25 6.51a.36.36 0 0 0-.234-.335a2.94 2.94 0 0 0-2.032 0a.36.36 0 0 0-.234.335v10.98c0 .15.093.284.234.335a2.94 2.94 0 0 0 2.032 0a.36.36 0 0 0 .234-.335z" clip-rule="evenodd"></svg:path>`,
})
export class BasilPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
