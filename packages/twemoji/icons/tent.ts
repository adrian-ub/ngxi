import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiTentIcon],svg[twemoji-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F4900C" d="M16.812 33c-.588 0-1.112-.37-1.31-.924L8.549 12.608a1.34 1.34 0 0 1 .173-1.242c.261-.369.685-.563 1.137-.563h16.313c.557 0 1.059.305 1.279.817l8.343 19.455c.184.43.14.917-.116 1.307a1.39 1.39 0 0 1-1.163.618z"></svg:path><svg:path fill="#FFCC4D" d="M1.515 33c-.467 0-.904-.236-1.162-.625a1.4 1.4 0 0 1-.116-1.315l8.348-19.479a1.392 1.392 0 0 1 2.557 0L19.49 31.06A1.39 1.39 0 0 1 18.212 33z"></svg:path><svg:path fill="#292F33" d="M9.859 14.182L7.077 33h5.563z"></svg:path><svg:path fill="#FFAC33" d="M15.46 31.456L16.081 33H12.64zm-11.203 0L3.636 33h3.441z"></svg:path><svg:path fill="#FFE8B6" d="M12.64 33s2.529-.645 3.766-1.786L9.859 14.182zm-5.563 0s-2.529-.645-3.766-1.786l6.546-17.031z"></svg:path>`,
})
export class TwemojiTentIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
