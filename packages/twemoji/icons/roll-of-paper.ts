import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRollOfPaperIcon],svg[twemoji-roll-of-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E1E8ED" d="M7 0h17v24H7z"></svg:path><svg:path fill="#99AAB5" d="M7 12h17v12H7z"></svg:path><svg:ellipse cx="7" cy="12" fill="#CCD6DD" rx="7" ry="12"></svg:ellipse><svg:ellipse cx="24" cy="12" fill="#E1E8ED" rx="8" ry="12"></svg:ellipse><svg:path fill="#E1E8ED" d="M32 12v12c0 9 4 12 4 12H18s-4-3-4-12V11z"></svg:path><svg:path fill="#F5F8FA" d="M32 12c0-4.924-1.979-9.15-4.807-11H11.322C13.549 3.284 15 7.316 15 12v14c.429 5.683 2.683 8.3 3.383 9H35.05C33.867 33.496 32 30.151 32 24z"></svg:path><svg:ellipse cx="6" cy="12" fill="#99AAB5" rx="3" ry="5"></svg:ellipse><svg:path fill="#66757F" d="M3.25 10.01C3.712 8.24 4.768 7 6 7c1.657 0 3 2.239 3 5c0 .616-.076 1.2-.198 1.745c-.649-2.088-2.871-3.642-5.552-3.735"></svg:path><svg:path fill="#CCD6DD" d="M16.5 13H15v-1h1.5c.275 0 .5.225.5.5s-.225.5-.5.5m4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5m4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5m4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5m3.5 0h-1.5c-.275 0-.5-.225-.5-.5s.225-.5.5-.5H32zM16.5 25H15v-1h1.5c.275 0 .5.225.5.5s-.225.5-.5.5m4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5m4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5m4 0h-2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h2c.275 0 .5.225.5.5s-.225.5-.5.5m3.5 0h-1.5c-.275 0-.5-.225-.5-.5s.225-.5.5-.5H32z"></svg:path>`,
})
export class TwemojiRollOfPaperIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
