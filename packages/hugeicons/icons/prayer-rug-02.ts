import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrayerRug02Icon],svg[hugeicons-prayer-rug-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 4H8c-1.414 0-2.121 0-2.56.44C5 4.878 5 5.585 5 7v10c0 1.414 0 2.121.44 2.56C5.878 20 6.585 20 8 20h8c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56V7c0-1.414 0-2.121-.44-2.56C18.122 4 17.415 4 16 4"></svg:path><svg:path d="M9.387 11.32c-1.143-2.05.49-2.949 1.744-3.823c.476-.331.713-.497.868-.497c.154 0 .392.166.867.497c1.255.874 2.89 1.773 1.748 3.824c-.2.36-.3.54-.334.668c-.033.128-.033.278-.033.578l-.002 3.411c0 .482 0 .723-.146.872c-.147.15-.382.15-.854.15h-2.49c-.472 0-.708 0-.854-.15s-.147-.39-.147-.872v-3.41c0-.3 0-.45-.033-.58c-.033-.128-.134-.308-.334-.668M14 4V2m4 2V2m-8 2V2M6 4V2m8 20v-2m4 2v-2m-8 2v-2m-4 2v-2"></svg:path></svg:g>`,
})
export class HugeiconsPrayerRug02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
