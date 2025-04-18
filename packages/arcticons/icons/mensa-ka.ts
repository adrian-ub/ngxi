import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMensaKaIcon],svg[arcticons-mensa-ka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.03 22.318h5.55L21.696 40.2q.003.057.003.115a2.185 2.185 0 0 1-2.185 2.185h-3.42a2.184 2.184 0 0 1-2.183-2.3zm20.182 3.364h-5.606v14.715c0 1.161.942 2.103 2.103 2.103h3.643a2.103 2.103 0 0 0 2.085-2.381zM30.727 5.5a1.12 1.12 0 0 0-1.12 1.121v19.06h5.605s2.243-3.52 2.243-10.09c0-5.574-2.872-10.091-6.728-10.091m-7.288 0c-.924 0-1.681.757-1.681 1.682v9.53a1.122 1.122 0 0 1-2.243 0v-9.53c0-.925-.757-1.682-1.681-1.682c-.926 0-1.682.757-1.682 1.682v9.53a1.122 1.122 0 0 1-2.243 0v-9.53c0-.925-.757-1.682-1.682-1.682s-1.682.757-1.682 1.682v10.651a4.485 4.485 0 0 0 4.485 4.485h5.606a4.485 4.485 0 0 0 4.485-4.485V7.182c0-.925-.756-1.682-1.682-1.682"></svg:path>`,
})
export class ArcticonsMensaKaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
