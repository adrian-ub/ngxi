import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesTwitterSolidIcon],svg[bubbles-twitter-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.97 16.095a14 14 0 0 1-2.121-.168c-1.262-.198-2.54-.858-2.901-1.056L2 14.353l1.026-.338c1.122-.369 1.805-.598 2.65-.956a3.53 3.53 0 0 1-1.812-2.1l-.239-.724l.196.03a3.6 3.6 0 0 1-.446-.55c-.404-.614-.618-1.364-.573-2.007l.045-.632l.38.146a3.5 3.5 0 0 1-.344-.962a3.66 3.66 0 0 1 .39-2.464l.33-.605l.441.53C5.44 5.397 7.207 6.39 9.305 6.683a3.15 3.15 0 0 1 .191-1.672a3.13 3.13 0 0 1 1.273-1.459c.65-.4 1.438-.593 2.218-.545a3.55 3.55 0 0 1 2.178.898c.292-.075.507-.156.798-.266c.175-.065.373-.14.62-.226l.915-.315l-.596 1.703l.122-.008l.976-.044l-.577.788c-.033.045-.041.058-.053.076c-.047.07-.105.157-.896 1.214c-.199.265-.298.61-.28.972c.071 1.374-.098 2.617-.5 3.694a6.54 6.54 0 0 1-1.756 2.6c-.97.873-2.205 1.471-3.674 1.777c-.72.15-1.494.225-2.295.225"></svg:path>`,
})
export class BubblesTwitterSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
