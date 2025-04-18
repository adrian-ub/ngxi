import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge2Icon],svg[tdesign-bridge-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.298 6.49c-1.208 1.098-2.383 2.927-3.35 5.826c-.082.248-.168.524-.26.817c-.244.783-.525 1.684-.87 2.47c-.39.882-.944 1.836-1.818 2.433V19h6v-5a4 4 0 0 1 8 0v5h6v-.964c-.874-.597-1.429-1.55-1.817-2.433c-.346-.786-.627-1.687-.872-2.47c-.09-.293-.177-.57-.26-.817c-.966-2.9-2.141-4.728-3.349-5.826C14.515 5.41 13.256 5 12 5s-2.515.41-3.702 1.49M6.952 5.01C8.515 3.59 10.256 3 12 3s3.485.59 5.048 2.01c1.542 1.402 2.867 3.573 3.9 6.674q.162.487.31.969c.232.743.458 1.468.756 2.144c.428.974.877 1.523 1.368 1.726l.618.255V21H14v-7a2 2 0 1 0-4 0v7H0v-4.222l.618-.255c.491-.203.94-.752 1.368-1.726c.298-.676.524-1.401.756-2.144q.148-.481.31-.97c1.033-3.1 2.358-5.27 3.9-6.673"></svg:path>`,
})
export class TdesignBridge2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
