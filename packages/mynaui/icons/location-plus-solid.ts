import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationPlusSolidIcon],svg[mynaui-location-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.14 4.648A8.34 8.34 0 0 1 12 2.25c2.196 0 4.304.861 5.86 2.398c1.409 1.39 2.143 2.946 2.337 4.562c.193 1.602-.152 3.21-.81 4.718c-1.306 3-3.902 5.728-6.392 7.503a1.71 1.71 0 0 1-1.99 0c-2.49-1.775-5.086-4.504-6.393-7.503c-.657-1.508-1.001-3.116-.809-4.719c.194-1.615.928-3.17 2.337-4.561M12.75 7.5a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75h1.75a.75.75 0 0 0 0-1.5h-1.75z"></svg:path>`,
})
export class MynauiLocationPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
