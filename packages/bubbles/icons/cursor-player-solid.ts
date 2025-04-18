import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesCursorPlayerSolidIcon],svg[bubbles-cursor-player-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.584 1.268a2.71 2.71 0 0 0-2.173 1.276a2.8 2.8 0 0 0-.374.978l-.027.144v22.668l.027.144a2.73 2.73 0 0 0 2.36 2.239c.17.02.488.017.67-.007c.281-.036.598-.132.843-.255c.108-.054 20.517-10.987 20.676-11.076c.25-.14.438-.281.62-.467c.16-.163.212-.226.332-.406q.333-.497.43-1.092a3.8 3.8 0 0 0 0-.828a2.7 2.7 0 0 0-.43-1.092a2.65 2.65 0 0 0-.952-.873A31147 31147 0 0 0 5.91 1.545a3 3 0 0 0-.745-.242a5 5 0 0 0-.503-.04zm-.007 1.649a1.2 1.2 0 0 0-.365.117c-.219.12-.36.271-.468.498a.9.9 0 0 0-.096.362c-.015.162-.015 22.05 0 22.212c.014.153.037.24.096.363a1.06 1.06 0 0 0 1.309.564c.088-.03 2.456-1.294 10.403-5.552c5.66-3.032 10.322-5.531 10.362-5.554q.282-.167.427-.462a.93.93 0 0 0 .104-.503a.85.85 0 0 0-.103-.424a1.06 1.06 0 0 0-.44-.47A12838 12838 0 0 0 5.142 3a1.2 1.2 0 0 0-.565-.083" clip-rule="evenodd"></svg:path>`,
})
export class BubblesCursorPlayerSolidIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
