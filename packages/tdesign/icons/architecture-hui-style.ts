import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArchitectureHuiStyleIcon],svg[tdesign-architecture-hui-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.8 1.4L12 .333L11.2 1.4l-.004.005l-.012.016l-.049.065l-.19.249a77 77 0 0 1-2.948 3.607c-.865.988-1.77 1.952-2.568 2.66c-.4.356-.75.627-1.035.803c-.246.151-.37.185-.396.193v-.002l-.004-1l-2 .008l.004 1c.001.405.106.908.459 1.327c.378.45.928.67 1.543.67v9H2v2h20v-2h-2v-9c.614 0 1.165-.22 1.543-.67c.353-.42.457-.924.457-1.33V8h-2v.996a1.6 1.6 0 0 1-.394-.192a8 8 0 0 1-1.036-.802c-.797-.71-1.703-1.673-2.568-2.661a73 73 0 0 1-3.138-3.856l-.049-.065l-.012-.016zM16.704 9H7.295a38 38 0 0 0 2.207-2.34A75 75 0 0 0 12 3.637l.184.234a75 75 0 0 0 2.313 2.788A38 38 0 0 0 16.704 9M6 11h12v9h-3v-3a3 3 0 0 0-6 0v3H6zm7 9h-2v-3a1 1 0 1 1 2 0z"></svg:path>`,
})
export class TdesignArchitectureHuiStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
