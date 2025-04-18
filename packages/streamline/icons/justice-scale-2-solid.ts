import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineJusticeScale2SolidIcon],svg[streamline-justice-scale-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.864.567a.75.75 0 0 1-.373.993l-.743.338l2.064 4.806a.8.8 0 0 1 .061.296a3.105 3.105 0 1 1-6.21 0a.8.8 0 0 1 .06-.296l1.59-3.7l-1.988.904l-.03.014L4.196 5.33l2.086 5.157a.8.8 0 0 1 .055.281a3.105 3.105 0 1 1-6.21 0a.8.8 0 0 1 .054-.28l1.68-4.152a.75.75 0 0 1-.353-1.432L6.25 2.75V.877a.75.75 0 0 1 1.5 0v1.19l2.664-1.21a1 1 0 0 1 .09-.041L11.87.194a.75.75 0 0 1 .993.373Zm-.69 6.123l-1.406-3.272L9.362 6.69zm-8.942.256l-1.405 3.472h2.81L3.231 6.946Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineJusticeScale2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
