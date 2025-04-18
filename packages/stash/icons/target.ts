import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashTargetIcon],svg[stash-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.75a7.25 7.25 0 0 0-6.724 9.969a.75.75 0 1 1-1.39.562a8.75 8.75 0 1 1 4.832 4.832a.75.75 0 0 1 .563-1.39A7.25 7.25 0 1 0 12 4.75"></svg:path><svg:path fill="currentColor" d="M6.25 12c0 1.317.443 2.531 1.188 3.501l-.469.469l-.029.03H5.77a1.5 1.5 0 0 0-1.06.44l-1.637 1.637a.75.75 0 0 0 .53 1.28h1.04v1.04a.75.75 0 0 0 1.28.53l1.637-1.638A1.5 1.5 0 0 0 8 18.23v-1.17l.03-.029l.469-.468A5.75 5.75 0 1 0 6.25 12M12 7.75a4.25 4.25 0 1 1-2.428 7.739l1.646-1.647a2 2 0 1 0-1.06-1.06L8.51 14.427A4.25 4.25 0 0 1 12 7.75M6.94 17l.06.059v1.17a.5.5 0 0 1-.147.353l-1.21 1.21v-.935a.5.5 0 0 0-.5-.5h-.936l1.21-1.21A.5.5 0 0 1 5.771 17z"></svg:path>`,
})
export class StashTargetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
