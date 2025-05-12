import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laAccusoftIcon],svg[la-accusoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.74 6c-.522 0-5.96.022-6.457.033c-.995 0-1.707-.01-.996.805c.402.445 12.559 14.245 12.856 14.57c.687.772 1.078.63 1.6.446c.164-.054 5.98-2.26 6.099-2.325c.414-.206-.083-.793-.367-1.119c-.107-.108-10.627-11.67-10.745-11.8c-.498-.577-.734-.61-1.99-.61m-5.285 7s-.6.077-1.238.734C11.763 14.172.19 24.617.123 24.705c-.352.482.081.329.785.088c.034 0 4.742-1.482 4.742-1.482c.034-.033 0-.012.034-.034c-.022-.24-.034-1.246-.045-1.312c-.034-.252.103-.33.341-.428l5.536-1.955c.034-.033 4.405-3.44 4.484-3.518v-.054zm2.32 7c-.15.011-.486.045-.73.143c-.243.098-7.364 2.233-7.62 2.32c-.254.098-.58.174-.568.36c.012.12.106.131.245.175c.127.032 15.26 3.647 15.62 3.723c.79.152 1.949.5 2.714.076c.116-.055 6.286-4.074 6.39-4.139c.267-.196.22-.325-.094-.39A40 40 0 0 1 29.81 22s-5.834 2.329-5.963 2.383c-.811.349-1.369-.154-1.856-.7l-2.898-3.236c-.28-.043-3.062-.458-3.317-.447z"></svg:path>`,
})
export class LaAccusoftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAccessibleIconIcon],svg[la-accessible-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m-5.438 3.031l-3.593.406c-.57.067-1.047.407-1.375.876l-.031-.032l-.032.063l-2.312 3.062l1.562 1.188l2.375-3.094l.063-.063l2.187-.25l-1.687 3.844A7 7 0 0 0 10.25 18h2.781A4.95 4.95 0 0 1 16 17c2.758 0 5 2.242 5 5s-2.242 5-5 5c-1.629 0-3.055-.793-3.969-2H9.687c1.126 2.36 3.528 4 6.313 4c3.86 0 7-3.14 7-7c0-.34-.047-.672-.094-1h1.969l-1.531 5.75l1.937.5l1.657-6.219l.062-.218l-.031-.25C26.769 19.648 25.934 19 25 19h-2.688a7 7 0 0 0-1.125-1.656l1.625-3.407l.032-.062v-.031a3 3 0 0 0-1.407-3.656L19.75 9.25v.031c-.36-.191-.785-.297-1.188-.25m.907 2.344l1.031.563c.445.238.64.746.469 1.218L19.594 16a7 7 0 0 0-1.813-.75zM7 19v2h7v-2zm-3 3v2h13v-2z"></svg:path>`,
})
export class LaAccessibleIconIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[la500pxIcon],svg[la-500px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.2 12.832c-3.325 0-5.29 3.152-5.415 3.152s-2.078-3.152-5.43-3.152c-3.347 0-4.304 3.152-4.406 3.152s-.87-2.586-3.765-2.586c-2.344 0-2.672 1.079-2.872 1.079c0 0 .176-1.157.528-3.215h5.781V9h-7.82l-1.32 7.574h2.53s.579-1.066 2.114-1.066s2.469 1.18 2.469 2.512c0 1.328-1.031 2.785-2.469 2.785c-1.434 0-2.266-1.23-2.266-2.082H1.04c0 .754.606 4.277 5.086 4.277c3.652 0 4.824-2.723 4.824-3.047c0 .274 1.41 3.047 4.41 3.047c3.477 0 5.227-3.047 5.426-3.047c.203 0 2.27 3.047 5.418 3.047s4.762-2.773 4.762-5.11c-.004-2.335-1.438-5.058-4.766-5.058m-7.095 5.105h-.003c-.02.028-1.946 2.364-3.73 2.364c-1.794 0-2.126-1.785-2.126-2.363s.332-2.364 2.125-2.364c1.785 0 3.711 2.336 3.73 2.364zm9.243 0c0 .579-.332 2.368-2.125 2.368c-1.782 0-3.707-2.336-3.73-2.364v-.003c.023-.028 1.948-2.364 3.73-2.364c1.793 0 2.125 1.79 2.125 2.364z"></svg:path>`,
})
export class La500pxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAddressBookIcon],svg[la-address-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v5H5v2h3V6h16v20H8v-3H6v5h20V4zm10 6c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 11 21h2a3 3 0 0 1 6 0h2a5.04 5.04 0 0 0-2.219-4.156C19.523 16.117 20 15.114 20 14c0-2.2-1.8-4-4-4M6 12v2H5v2h3v-4zm10 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2M6 17v2H5v2h3v-4z"></svg:path>`,
})
export class LaAddressBookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAdIcon],svg[la-ad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v18h28V7zm2 2h24v14H4zm7.719 2l-.219.688l-2.469 7.718l-.031.157V21h2v-1h3v1h2v-1.438l-.031-.156l-2.469-7.718l-.219-.688H11.72zM21 11v4h-1.5a2.52 2.52 0 0 0-2.5 2.5v1c0 1.367 1.133 2.5 2.5 2.5H23V11zm-8.5 4.156L13.406 18h-1.812zm7 1.844H21v2h-1.5a.49.49 0 0 1-.5-.5v-1c0-.285.215-.5.5-.5"></svg:path>`,
})
export class LaAdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAddressCardIcon],svg[la-address-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v20h26V6zm2 2h22v16h-3.406c-.078-.137-.043-.324-.157-.438C23.06 23.184 22.523 23 22 23s-1.059.184-1.438.563c-.113.113-.078.3-.156.437h-8.812c-.078-.137-.043-.324-.156-.438c-.38-.378-.915-.562-1.438-.562s-1.059.184-1.438.563c-.113.113-.078.3-.156.437H5zm7 2c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 7 21h2a3 3 0 0 1 6 0h2a5.04 5.04 0 0 0-2.219-4.156C15.523 16.117 16 15.114 16 14c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m7 1v2h6v-2zm0 4v2h6v-2z"></svg:path>`,
})
export class LaAddressCardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAddressCardSolidIcon],svg[la-address-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v20h26V6zm2 2h22v16h-3.406c-.078-.137-.043-.324-.157-.438C23.06 23.184 22.523 23 22 23s-1.059.184-1.438.563c-.113.113-.078.3-.156.437h-8.812c-.078-.137-.043-.324-.156-.438c-.38-.378-.915-.562-1.438-.562s-1.059.184-1.438.563c-.113.113-.078.3-.156.437H5zm7 2c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 7 21h2a3 3 0 0 1 6 0h2a5.04 5.04 0 0 0-2.219-4.156C15.523 16.117 16 15.114 16 14c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m7 1v2h6v-2zm0 4v2h6v-2z"></svg:path>`,
})
export class LaAddressCardSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAddressBookSolidIcon],svg[la-address-book-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v5H5v2h3V6h16v20H8v-3H6v5h20V4zm10 6c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 11 21h2a3 3 0 0 1 6 0h2a5.04 5.04 0 0 0-2.219-4.156C19.523 16.117 20 15.114 20 14c0-2.2-1.8-4-4-4M6 12v2H5v2h3v-4zm10 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2M6 17v2H5v2h3v-4z"></svg:path>`,
})
export class LaAddressBookSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAdjustIcon],svg[la-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2v20c-5.535 0-10-4.465-10-10S10.465 6 16 6"></svg:path>`,
})
export class LaAdjustIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAdnIcon],svg[la-adn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m0 3.938l-6.594 9.906H11l1.531-2.313h6.938l1.562 2.313h1.594zm0 2.406l2.844 4.25h-5.688z"></svg:path>`,
})
export class LaAdnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAdobeIcon],svg[la-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v20l8.9-20zm15.1 0L28 26V6zM16 13.4L12.1 22h4.097l1.6 4H21.6z"></svg:path>`,
})
export class LaAdobeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAdversalIcon],svg[la-adversal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.346 5C4.273 5 4 5.277 4 6.355v18.291C4 25.737 4.273 26 5.346 26h21.252C27.742 26 28 25.755 28 24.607V6.416C28 5.262 27.747 5 26.598 5zm19.586 2.086c.142 0 .303.018.445 0c.463-.036.623.2.623.654a.04.04 0 0 0-.006.024H26v13.345c0 .261-.038.637-.377.637c-.569-.018-1.26.327-1.654-.256c-.266-.399-.36-.182-.57-.054c-2.45 1.362-5.875.324-6.622-3.909c-.28-1.532-.033-3.077.72-4.586c.54-1.096 2.61-3.489 6.241-1.398V8.287c0-1.202-.003-1.201 1.194-1.201m-14.084 3.59c.96-.032 1.926.157 2.886.556c1.877.77 1.266 2.714 1.266 5.893c.124 1.183-.196 2.674.428 4.072c.087.202.017.361-.125.49c-.385.307-1.484.103-1.819-.337c-.087-.101-.083-.167-.18-.286c-.164-.179-.333-.1-.544.047c-2.632 1.67-6.434.981-6.742-1.986c-.142-1.344.567-2.619 1.814-3.256c1.752-.894 4.954-.542 5.037-1.418c.051-.469-.086-.922-.517-1.252c-1.261-.926-3.115-.4-3.67 1.072c-.197.51-.427.436-.803.381c-.445-.069-.788-.147-1.031-.252c-1.321-.523.392-2.536 1.14-2.949c.943-.49 1.899-.743 2.86-.775m10.46 2.328c-.713.035-1.396.431-1.769 1.187c-.726 1.476-.708 3.023-.018 4.5c.782 1.69 3.223 1.88 4.114-.23c.31-.732.57-3.206-.371-4.482c-.498-.685-1.242-1.01-1.955-.975zm-8.44 4.01a.4.4 0 0 0-.222.004c-1.098.21-2.218.382-3.316.64c-.54.122-.909.52-.89 1.127c.03 1.07 1.178 1.158 1.515 1.215c1.867.017 3.106-1.127 3.043-2.568c-.013-.168.02-.366-.13-.418m-6.575 5.992c.16-.025.355.031.51.031c6.202-.019 12.218-.025 18.42-.006c.318 0 .777-.207.777.463c0 .708-.52.465-.834.465l-18.33.008c-.347 0-.853.225-.834-.502c.01-.326.132-.434.291-.46z"></svg:path>`,
})
export class LaAdversalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAcquisitionsIncorporatedIcon],svg[la-acquisitions-incorporated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.248 3c-.188 0-.276.057-.24.27c.115.67-.042.04.334 2.298c3.307 0 3.745.047 5.31.026c.642-.01 1.93.179 1.967 1.123c.021.579-.057.572-1.701 4.435c-2.807 6.59-2.646 6.108-3.512 8.174c-.088.208-.185.264-.394.264c-.443-.01-.888-.014-1.326.006c-.1.005-.272.09-.288.162c-.077.405-.113.813-.164 1.242H13v-1.38c-.36 0-1.552.02-1.646-.147c.276-.624.542-1.24.818-1.864c.85.203 1.78.396 2.6.594c.176.046.24.153.24.346c-.005 2.178.004 4.36.01 6.539c0 .518-.288.97-.778 1.174c-.339.137-.288.172-6.45.12c-.275 0-.37.104-.396.347c-.078.655-.15 1.313-.26 1.968c-.041.254.068.29.276.29c9.557.03-1.603 0 17.584 0c-.13-.762-.23-1.491-.344-2.217c-.062-.392-.067-.387-.5-.387c-5.206.01-6.03-.123-6.078-.133c-.642-.086-1.075-.534-1.096-1.174c-.005-.08-.01-3.634-.052-6.553c-.005-.239.083-.324.308-.38c.652-.152 1.5-.31 2.147-.493c.224-.066.354-.01.437.178c.235.523.46 1.045.69 1.568c.083.188.004.223-.178.223c-.522-.01-.788-.004-1.33-.004v1.371h5.797c-.073-.482-.141-.92-.21-1.396c-.364 0-.72.02-1.064-.004c-1.179-.081-.955-.225-4.382-8.053c-.46-1.02-1.456-3.151-1.905-4.527c-.229-.711.288-1.289.987-1.35c.97-.086 1.955-.08 2.931-.101c1.075-.02 2.15-.02 3.225-.026c.162 0 .21-.071.224-.218c.063-.497.141-.99.21-1.483l.124-.816zm8.576 5.838c.391.122.412-.041.49 0c.485 1.142.944 3.051 1.409 4.203c.344.848.679 1.701 1.029 2.584q-.098.06-.203.107c-.683.198-1.379.381-2.057.594c-.312.106-.65.106-.96 0c-.695-.213-1.388-.416-2.08-.635a2.4 2.4 0 0 1-.304-.146z"></svg:path>`,
})
export class LaAcquisitionsIncorporatedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAffiliatethemeIcon],svg[la-affiliatetheme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.104 5c-1.867.016-4.728 1.95-7.067 4.955c-2.879 3.7-3.89 7.604-2.256 8.74c1.634 1.126 5.303-.962 8.182-4.66s3.89-7.602 2.256-8.728c-.307-.211-.685-.31-1.115-.307m17.88 6c-3.8 6.359-9.896 9.542-13.625 7.266c-1.284-.786-2.074-2.451-2.365-4.266c-1.976 3.66-5.786 6.903-9.994 8c2.681 3.188 6.838 5 11.314 5c8.087 0 14.647-6.622 14.647-14.799c.01-.459.066-.764.023-1.201"></svg:path>`,
})
export class LaAffiliatethemeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAirFreshenerIcon],svg[la-air-freshener-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-1.654 0-3 1.346-3 3c0 .854.363 1.621.938 2.168L9.056 14h2.076l-4 6H15v2H9v6h14v-6h-6v-2h7.867l-4-6h2.076l-4.879-6.832A3 3 0 0 0 19 5c0-1.654-1.346-3-3-3m0 2c.552 0 1 .449 1 1a1 1 0 0 1-.59.906l-.076.028A1 1 0 0 1 16 6a1 1 0 0 1-.334-.066l-.076-.028A1 1 0 0 1 15 5c0-.551.448-1 1-1m-.193 3.992c.038.003.076 0 .115 0c.026 0 .051.008.078.008s.052-.007.078-.008c.04 0 .078.003.117 0L19.057 12h-1.924l4 6H10.867l4-6h-1.924zM11 24h10v2H11z"></svg:path>`,
})
export class LaAirFreshenerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAlgoliaIcon],svg[la-algolia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm8 1a1 1 0 0 0-1 1v1.295a6.96 6.96 0 0 1 4 0V9a1 1 0 0 0-1-1zm-4.293 2a1 1 0 0 0-.707.295L9.293 11a1 1 0 0 0 0 1.414l.816.818a7 7 0 0 1 2.121-2.12l-.816-.817a1 1 0 0 0-.707-.295M16 11a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 2c2.206 0 4 1.794 4 4s-1.794 4-4 4s-4-1.794-4-4s1.794-4 4-4m0 1v3l2.594-1.482A2.99 2.99 0 0 0 16 14"></svg:path>`,
})
export class LaAlgoliaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAlignCenterIcon],svg[la-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h26V7zm4 4v2h18v-2zm-4 4v2h26v-2zm4 4v2h18v-2zm-4 4v2h26v-2z"></svg:path>`,
})
export class LaAlignCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAirbnbIcon],svg[la-airbnb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.02 4c-1.22 0-2.35.536-3.198 1.53c-.364.448-.626.924-.855 1.341l-.045.09c-.163.327-.335.667-.531 1.041l-.043.096a269 269 0 0 0-5.12 10.662l-.095.207c-.065.14-.13.286-.186.416l-.082.178c-.06.132-.12.265-.17.384c-.117.266-.235.543-.363.883c-.313.927-.402 1.768-.281 2.658c.27 1.837 1.488 3.415 3.18 4.12a5.1 5.1 0 0 0 1.99.394c.153 0 .381-.012.636-.047a6.4 6.4 0 0 0 2.405-.832c.88-.496 1.744-1.21 2.705-2.236l.039.052l.015-.021c.9.962 1.77 1.685 2.655 2.197c.768.45 1.581.731 2.4.836a4.85 4.85 0 0 0 2.637-.353v.002c1.674-.672 2.887-2.218 3.178-4.047l.029-.164c.158-.78.08-1.61-.233-2.53a3 3 0 0 0-.119-.294a10 10 0 0 0-.228-.555q-.092-.22-.188-.422l-.158-.357c-.053-.12-.102-.239-.158-.356l-.065-.125a263 263 0 0 0-5.087-10.596l-.084-.168q-.274-.51-.565-1.109l-.056-.11c-.205-.37-.416-.751-.733-1.13l-.047-.06C18.407 4.557 17.278 4 16.02 4m-.028 2.021a2 2 0 0 1 1.582.727l.106.133c.21.24.358.51.525.806l.06.131c.186.37.38.76.561 1.092l.072.147c1.721 3.382 3.42 6.92 5.04 10.49l.142.316l.012.012l.066.15l.18.403c.048.105.097.211.16.363c.062.141.132.298.219.527c.026.06.055.121.076.182l.002.006c.209.61.254 1.103.15 1.547l-.025.148a3.27 3.27 0 0 1-2.016 2.57a2.9 2.9 0 0 1-1.558.196a4.4 4.4 0 0 1-1.666-.582c-.787-.456-1.583-1.14-2.432-2.086l.064-.084c1.368-1.786 2.224-3.419 2.543-4.852l.002-.008c.154-.71.184-1.378.092-1.97a3.9 3.9 0 0 0-.605-1.625C18.649 13.658 17.4 13 16 13c-1.342 0-2.58.638-3.313 1.707l-.054.092a3.9 3.9 0 0 0-.578 1.562a5.2 5.2 0 0 0 .086 1.98c.307 1.446 1.19 3.135 2.548 4.884l.041.052l-.001.002c-.91 1.004-1.687 1.67-2.463 2.108a4.4 4.4 0 0 1-1.676.584a3 3 0 0 1-.37.029c-.433 0-.824-.077-1.224-.242a3.29 3.29 0 0 1-1.965-2.553c-.078-.569-.016-1.103.186-1.701c.102-.272.206-.517.316-.766q.076-.175.154-.347l.092-.207q.085-.195.172-.383l.121-.27A270 270 0 0 1 13.15 8.967l.034-.078c.177-.337.355-.692.525-1.032l.025-.052c.182-.33.388-.702.625-.994a2.2 2.2 0 0 1 1.633-.79M16 15c.709 0 1.325.308 1.654.836c.171.264.274.53.315.834c.057.363.033.799-.067 1.26c-.236 1.057-.876 2.302-1.908 3.709c-1.019-1.377-1.673-2.654-1.9-3.723a3.3 3.3 0 0 1-.063-1.268c.04-.283.14-.548.31-.812l.02-.033c.363-.504.972-.803 1.639-.803"></svg:path>`,
})
export class LaAirbnbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAlignJustifyIcon],svg[la-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h26V7zm0 4v2h26v-2zm0 4v2h26v-2zm0 4v2h26v-2zm0 4v2h26v-2z"></svg:path>`,
})
export class LaAlignJustifyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAlignLeftIcon],svg[la-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h26V7zm0 4v2h18v-2zm0 4v2h26v-2zm0 4v2h18v-2zm0 4v2h26v-2z"></svg:path>`,
})
export class LaAlignLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAlignRightIcon],svg[la-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h26V7zm8 4v2h18v-2zm-8 4v2h26v-2zm8 4v2h18v-2zm-8 4v2h26v-2z"></svg:path>`,
})
export class LaAlignRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAlipayIcon],svg[la-alipay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7z"></svg:path><svg:path fill="currentColor" d="M15 9h2v5h-2z"></svg:path><svg:path fill="currentColor" d="M10 11h11v1H10zm9.498 3H11v-1h9zm-1.27 3.21c-.133-.096-.314-.21-.307-.216l-.027-.05a.6.6 0 0 1-.042-.12a2 2 0 0 0-.077-.258c-.071-.142-.211-.165-.321-.236a13 13 0 0 0-.705-.342a9 9 0 0 0-1.466-.527a13 13 0 0 0-3.069-.46c-.259-.007-.518.004-.776.006a3.7 3.7 0 0 0-.855.12a3.26 3.26 0 0 0-1.486.851c-.847.798-1.195 1.992-1.049 3.132c.125 1.176 1.035 2.254 2.172 2.641c.55.209 1.196.288 1.711.231a5 5 0 0 0 .811-.077c.271-.038.54-.083.803-.165a6.9 6.9 0 0 0 2.869-1.532a9 9 0 0 0 1.103-1.179c.156-.218.326-.427.451-.667c.059-.122.129-.237.161-.375c.017-.069.043-.132.052-.204l.014-.111c.006-.027-.003-.018.014-.074a.66.66 0 0 0 .019-.388m-2.991 1.635a6.5 6.5 0 0 1-2.115 1.4a3.5 3.5 0 0 1-.626.191a3.6 3.6 0 0 1-.653.123a2.8 2.8 0 0 1-1.233-.019c-.775-.172-1.457-.785-1.574-1.605c-.155-.814.21-1.702.839-2.144a2.35 2.35 0 0 1 1.011-.425c.178-.035.355-.03.541-.025l.683.047c.911.085 1.799.323 2.675.59c.435.144.866.305 1.293.473c.091.037.179.08.269.12c-.082.115-.163.23-.251.342c-.26.337-.563.631-.859.932"></svg:path><svg:path fill="currentColor" d="m18.116 16.486l8.544 3.036l-1.416 2.656l-7.769-4.224z"></svg:path><svg:path fill="currentColor" d="M20 13c-.161 1.665-.649 3.286-1.585 4.675l-1.54-.864c.735-1.034 1.184-2.413 1.327-3.811z"></svg:path>`,
})
export class LaAlipayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAllergiesIcon],svg[la-allergies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-1.383 0-2.531.969-2.875 2.25C12.773 4.105 12.402 4 12 4c-1.645 0-3 1.355-3 3v10.75l-.875-.875a3.023 3.023 0 0 0-4.25 0a3.023 3.023 0 0 0 0 4.25l6.781 6.781C11.832 29.078 13.457 30 15.375 30H20c3.855 0 7-3.145 7-7V11c0-1.645-1.355-3-3-3a2.9 2.9 0 0 0-1 .188V7c0-1.645-1.355-3-3-3c-.402 0-.773.105-1.125.25C18.531 2.969 17.383 2 16 2m0 2c.566 0 1 .434 1 1v10h2V7c0-.566.434-1 1-1s1 .434 1 1v8h2v-4c0-.566.434-1 1-1s1 .434 1 1v12c0 2.773-2.227 5-5 5h-4.625c-1.273 0-2.367-.621-3.281-1.531l-6.813-6.75a1.015 1.015 0 0 1 0-1.438a1.015 1.015 0 0 1 1.438 0l2.562 2.594L11 22.594V7c0-.566.434-1 1-1s1 .434 1 1v8h2V5c0-.566.434-1 1-1m0 13a1 1 0 0 0 0 2a1 1 0 0 0 0-2m6 0a1 1 0 0 0 0 2a1 1 0 0 0 0-2m-4 3a1 1 0 0 0 0 2a1 1 0 0 0 0-2m-4 1a1 1 0 0 0 0 2a1 1 0 0 0 0-2m8 0a1 1 0 0 0 0 2a1 1 0 0 0 0-2m-4 3a1 1 0 0 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class LaAllergiesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAmazonIcon],svg[la-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.2 4c-3.3 0-6.9 1.2-7.7 5.3c-.1.4.2.7.5.7l3.3.3c.3 0 .6-.3.6-.6c.3-1.4 1.5-2.1 2.8-2.1c.7 0 1.5.3 1.9.9c.5.7.4 1.7.4 2.5v.5c-2 .2-4.6.4-6.5 1.2c-2.2.9-3.7 2.8-3.7 5.7c0 3.6 2.3 5.4 5.2 5.4c2.5 0 3.8-.6 5.7-2.5c.6.9.9 1.4 2 2.3c.3.1.6.1.8-.1c.7-.6 2-1.7 2.7-2.3c.3-.2.2-.6 0-.9c-.6-.9-1.3-1.6-1.3-3.2v-5.4c0-2.3.2-4.4-1.5-6C20.1 4.4 17.9 4 16.2 4m.9 10.3h.9v.8c0 1.3.1 2.5-.6 3.7c-.5 1-1.4 1.6-2.4 1.6c-1.3 0-2.1-1-2.1-2.5c0-2.7 2-3.4 4.2-3.6m9.6 8.1c-.9 0-1.9.2-2.7.8c-.2.2-.2.4.1.4c.9-.1 2.8-.4 3.2.1s-.4 2.3-.7 3.1c-.1.2.1.3.3.2c1.5-1.2 1.9-3.8 1.6-4.2c-.2-.3-.9-.4-1.8-.4m-23 .4c-.2 0-.3.3-.1.4c3.3 3 7.6 4.7 12.4 4.7c3.4 0 7.4-1.1 10.2-3.1c.5-.3.1-.9-.4-.7c-3.1 1.3-6.4 1.9-9.5 1.9c-4.5 0-8.8-1.2-12.4-3.3c-.1.2-.2.1-.2.1"></svg:path>`,
})
export class LaAmazonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAmazonPayIcon],svg[la-amazon-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.871 8l-.209.035a3.8 3.8 0 0 0-1.808.723c-.117.07-.222.164-.338.258a.2.2 0 0 1-.024-.07c-.024-.13-.035-.268-.058-.397c-.035-.21-.152-.317-.362-.317h-.549c-.338 0-.396.072-.396.399v10.125c.012.152.104.232.232.244h1.016c.14 0 .221-.092.232-.244c.012-.047.012-.094.012-.14v-3.518c.047.047.083.07.106.093c.852.712 1.832.945 2.906.735c.98-.198 1.656-.793 2.088-1.668c.338-.665.476-1.341.488-2.076c.023-.805-.047-1.58-.385-2.338c-.397-.933-1.073-1.552-2.088-1.762c-.152-.035-.314-.047-.466-.07C9.128 8 8.999 8 8.87 8zm7.772 0a.6.6 0 0 1-.14.023a7 7 0 0 0-1.376.198c-.292.07-.572.174-.852.267c-.175.058-.257.187-.257.373c.012.152 0 .315 0 .467c.012.233.106.293.328.235c.373-.094.746-.198 1.119-.268c.583-.105 1.178-.152 1.773-.07c.315.058.607.14.805.408c.175.222.246.501.258.781c.012.397.012.711.012 1.107c0 .023 0 .046-.012.057h-.059a8.5 8.5 0 0 0-1.527-.232c-.537-.023-1.073 0-1.586.187c-.618.21-1.121.583-1.412 1.19c-.222.467-.258.958-.188 1.459c.105.677.433 1.19 1.028 1.515c.572.315 1.178.35 1.808.256a3.83 3.83 0 0 0 1.924-.875c.023-.023.047-.034.07-.057c.035.187.06.363.094.526c.023.152.118.244.258.256h.781a.23.23 0 0 0 .223-.233c.012-.035.012-.083.012-.129v-4.978a4 4 0 0 0-.051-.608c-.093-.618-.35-1.132-.91-1.459c-.315-.187-.664-.28-1.037-.337c-.175-.024-.34-.036-.514-.059zm4.044.002c-.117 0-.175.104-.152.22c.023.095.059.2.094.294c.933 2.31 1.877 4.618 2.822 6.94c.082.197.093.362 0 .56c-.15.349-.28.71-.443 1.06c-.14.315-.373.55-.723.643c-.233.059-.49.082-.734.047c-.117-.012-.235-.035-.352-.047c-.164-.012-.244.057-.256.232v.469c.012.269.094.385.362.432c.257.046.524.08.804.091c.816.011 1.46-.313 1.88-1.025a6 6 0 0 0 .443-.875c1.13-2.858 2.25-5.704 3.37-8.574a1 1 0 0 0 .07-.258c.022-.14-.048-.21-.175-.207h-.943a.38.38 0 0 0-.373.244c-.023.07-.047.127-.07.197l-1.668 4.772c-.117.338-.247.687-.364 1.06c-.024-.059-.035-.082-.047-.117c-.618-1.703-1.223-3.404-1.841-5.107c-.093-.28-.198-.55-.303-.819a.314.314 0 0 0-.305-.22c-.362-.012-.723-.012-1.096-.012M8.86 9.212c.712.059 1.295.41 1.598 1.237c.187.513.234 1.008.234 1.545c0 .502-.034.946-.185 1.424c-.327 1.015-1.074 1.411-2.031 1.365c-.677-.035-1.249-.293-1.786-.666c-.058-.035-.093-.091-.082-.15v-3.961c-.01-.07.024-.127.082-.162c.653-.455 1.376-.69 2.17-.631zm7.569 3.151q.3-.025.6.01c.396.035.794.104 1.19.162c.083.012.104.047.104.117c-.012.234 0 .456 0 .69s-.011.444-.011.678c.012.058-.024.103-.07.138c-.538.385-1.12.643-1.786.713c-.268.023-.537.023-.793-.082a.96.96 0 0 1-.594-.643a1.66 1.66 0 0 1-.011-.921c.128-.397.407-.617.78-.746a3 3 0 0 1 .59-.116zm12.613 7.639c-.933.013-2.035.222-2.871.809c-.258.179-.213.427.074.394c.94-.113 3.032-.367 3.406.111s-.414 2.45-.763 3.332c-.108.263.12.372.361.172c1.564-1.31 1.97-4.056 1.65-4.45c-.16-.198-.924-.381-1.857-.368m-27.824 1c-.218.03-.312.306-.084.525C5.05 25.201 10.226 27 15.973 27c4.099 0 8.857-1.337 12.142-3.857c.543-.42.08-1.047-.476-.8c-3.683 1.626-7.684 2.409-11.325 2.409c-5.396 0-10.62-1.127-14.845-3.686a.4.4 0 0 0-.252-.064z"></svg:path>`,
})
export class LaAmazonPayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAmbulanceIcon],svg[la-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a2 2 0 0 0-2 2v1H1v19h3.156c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3h8.312c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3H31V13.625l-.25-.281l-6-7L24.469 6H20V5a2 2 0 0 0-2-2M3 8h20.531L29 14.375V23h-1.156c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3h-8.312c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3H3zm11 3v3h-3v2h3v3h2v-3h3v-2h-3v-3zM8 22c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m16 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"></svg:path>`,
})
export class LaAmbulanceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAmericanSignLanguageInterpretingIcon],svg[la-american-sign-language-interpreting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.219 7.375L6.813 10.25l-.157.188l-.031.25L6 13.405V9H4v7l-1 1v6l4.375-.969l2.25.907l.188.062h.812l.219-.156l2.687-1.594l.25-.188l.156-.28l1-2.407l-1.874-.75l-.876 2.094l-1.562.968C9.859 20.508 8 19.872 8 18c0-2.332 2-3 2-3h1.563l1.718 1.719l1.438-1.438l-2-2l-.313-.281h-1.844l.188-.281l2.531-1.563L12.22 9.47l-2.75 1.687l-.188.094l-1.125 1.688l.375-1.626l2.25-2.687zM21.375 9l-.219.156l-2.687 1.594l-.25.188l-.157.28l-1 2.407l1.875.75l.875-2.094l1.563-.969C22.141 11.492 24 12.13 24 14c0 2.332-2 3-2 3h-1.563l-1.718-1.719l-1.438 1.438l2 2l.313.281h1.843l-.187.281l-2.531 1.563l1.062 1.687l2.75-1.687l.188-.094l1.125-1.688l-.375 1.625l-2.25 2.688l1.562 1.25l2.407-2.875l.156-.188l.031-.25l.625-2.718V23h2v-7l1-1V9l-4.375.969l-2.25-.906L22.187 9z"></svg:path>`,
})
export class LaAmericanSignLanguageInterpretingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAmiliaIcon],svg[la-amilia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.43 6c-2.763 0-5.733.281-8.086 2c-.228.138-.407.41-.323.865c.05.228.229 1.225.456 1.77c.183.455.634.454.906.271C10.835 9.911 13.903 9 16.395 9c2.585 0 2.628 1.519 2.628 3.514v1.718c-3.902.504-10.25 1.544-11.656 2.133c-1.585.728-1.355 3.834-1.355 4.65c0 1.267.679 4.985 5.576 4.985c2.134 0 5.85-.924 7.617-1.879v1.383c0 .134.096.364.274.404c.138.045 1.913.09 2.324.09s2.79.013 2.968-.031c.183-.045.229-.272.229-.406V12.07C24.996 8.485 22.416 6 16.43 6m2.59 10.771v5.098c-.955.59-2.722 1.088-4.079 1.088c-2.357 0-2.978-1.828-2.982-2.328c0-.545-.135-1.905.816-2.361c1.085-.59 4.249-1.314 6.245-1.497"></svg:path>`,
})
export class LaAmiliaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAnchorIcon],svg[la-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-2.2 0-4 1.8-4 4c0 1.852 1.281 3.398 3 3.844V14h-3v2h3v7.969c-2.426-.192-4.04-1.078-5.188-2.094c-.874-.773-1.46-1.625-1.874-2.344l1.593-.781l-4-1.813L4.47 21.25l1.656-.813a11.1 11.1 0 0 0 2.344 2.938c1.453 1.29 3.597 2.355 6.531 2.563V26l1 1l1-1v-.063c2.934-.207 5.078-1.273 6.531-2.562a11.1 11.1 0 0 0 2.344-2.938l1.656.813l-1.062-4.313l-4 1.813l1.593.781c-.414.719-1 1.57-1.875 2.344c-1.148 1.016-2.761 1.902-5.187 2.094V16h3v-2h-3v-2.156c1.719-.446 3-1.992 3-3.844c0-2.2-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"></svg:path>`,
})
export class LaAnchorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAndroidIcon],svg[la-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.531 3.5a.5.5 0 0 0-.25.813l1.469 2.125A7.02 7.02 0 0 0 9 12v10c0 .703.441 1.203 1 1.563V26.5c0 1.367 1.133 2.5 2.5 2.5s2.5-1.133 2.5-2.5V24h2v2.5c0 1.367 1.133 2.5 2.5 2.5s2.5-1.133 2.5-2.5v-2.938c.559-.359 1-.859 1-1.562V12a7.02 7.02 0 0 0-2.75-5.563l1.469-2.125a.501.501 0 0 0-.406-.813a.4.4 0 0 0-.094.001a.5.5 0 0 0-.313.25l-1.5 2.125A7 7 0 0 0 16 5a7 7 0 0 0-3.406.875l-1.5-2.125a.5.5 0 0 0-.406-.25a.4.4 0 0 0-.094 0zM16 7a5 5 0 0 1 4.906 4h-9.812c.465-2.285 2.48-4 4.906-4m-2 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M6 11v10h2V11zm18 0v10h2V11zm-13 2h10v9h-1v4.5a.49.49 0 0 1-.5.5a.49.49 0 0 1-.5-.5V22h-6v4.5a.49.49 0 0 1-.5.5a.49.49 0 0 1-.5-.5V22h-1z"></svg:path>`,
})
export class LaAndroidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngellistIcon],svg[la-angellist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.813 4a2.2 2.2 0 0 0-.938.156c-.578.235-.973.746-1.156 1.25c-.184.504-.235 1.02-.219 1.563c.027 1.086.3 2.297.625 3.468c.266.961.57 1.86.844 2.626a2.1 2.1 0 0 0-1.531.313c-.782.503-1.254 1.304-1.344 2.061c-.082.68.078 1.297.281 1.844c-.54.055-1.066.235-1.469.625c-.644.63-.906 1.547-.906 2.625c0 3.551 1.89 5.633 3.906 6.563s4.133.906 4.938.906c.875 0 2.894-.074 4.75-1.344s3.406-3.781 3.406-8c0-.363.273-1.992-.75-3.375c-.219-.297-.516-.562-.844-.812c.2-.653.676-2.227 1.063-4.188c.238-1.21.426-2.441.406-3.5c-.012-.531-.059-1.02-.25-1.5s-.652-1.02-1.281-1.156a2.6 2.6 0 0 0-1.813.281c-.52.293-.902.715-1.25 1.188c-.691.949-1.203 2.144-1.593 3.343c-.133.41-.235.817-.344 1.22a30 30 0 0 0-.563-1.47c-.5-1.21-1.086-2.402-1.812-3.312c-.364-.457-.762-.86-1.281-1.125a2.3 2.3 0 0 0-.876-.25zm-.157 1.969c.024.004.059.027.125.062c.133.067.371.278.625.594c.504.633 1.067 1.691 1.531 2.813A32 32 0 0 1 16.188 13h-.062c-.7 0-1.34.29-1.781.719a34 34 0 0 1-1.313-3.813c-.3-1.09-.511-2.187-.531-2.969c-.012-.39.043-.703.094-.843c.023-.07.035-.086.031-.094c.012-.004.02-.031.031-.031zm9 .156h.125c.04.14.086.355.094.688c.016.785-.152 1.921-.375 3.062a43 43 0 0 1-.906 3.688a11.3 11.3 0 0 0-1.907-.407a28 28 0 0 1 .907-3.594c.355-1.093.812-2.14 1.281-2.78c.234-.321.457-.532.625-.626c.055-.031.11-.031.156-.031M16.125 15c3.688 0 5.043.844 5.531 1.5c.489.656.344 1.336.344 2.156c0 3.754-1.21 5.442-2.531 6.344c-1.32.902-2.899 1-3.625 1c-.797 0-2.59-.023-4.094-.719c-1.504-.695-2.75-1.843-2.75-4.75c0-.75.203-1.11.313-1.218c.109-.11.218-.153.593-.063c.606.145 1.668.875 2.656 2.188c.231.304.442.632.657 1c-.063.074-.25.187-.375.187c-.153 0-.297-.047-.563-.281s-.59-.684-.937-1.219l-1.688 1.094c.39.605.785 1.148 1.281 1.593c.497.446 1.165.813 1.907.813c.765 0 1.441-.355 1.906-.906c.121-.14.14-.348.219-.532c.144.41.312.786.5 1.063c.422.621.937.938.937.938L17.5 23.53s-.148-.07-.375-.406s-.469-.883-.469-1.75c0-.313.047-.566.157-.781c.18-.352.496-.594.843-.813a3.8 3.8 0 0 1 1.125-.468c.446-.098.77-.489.785-.946a1 1 0 0 0-.722-.992s-1.586-.473-2.844-.844a.6.6 0 0 1-.281-.187c-.043-.07-.078-.149-.125-.219a1.15 1.15 0 0 1-.063-.5a.8.8 0 0 1 .188-.469c.086-.094.156-.156.406-.156zm-4.625.031c.043-.027.047-.027.281.063s.61.332 1 .719c.781.773 1.621 2.066 2.156 3.437c.126.32.098.398.063.469s-.133.168-.313.25a1.6 1.6 0 0 1-.593.125c-.156-.004-.133-.133.062.125l-.062.031c-.598-.824-1.211-1.496-1.875-2c0 0-.614-.73-.938-1.531c-.164-.403-.219-.805-.187-1.063c.031-.258.066-.406.406-.625"></svg:path>`,
})
export class LaAngellistIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngleDoubleDownIcon],svg[la-angle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.219 6.688L3.78 8.094L16 20.313l12.219-12.22l-1.438-1.405L16 17.468zm0 7L3.78 15.094L16 27.313l12.219-12.22l-1.438-1.405L16 24.468z"></svg:path>`,
})
export class LaAngleDoubleDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngleDoubleLeftIcon],svg[la-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.906 4.781L4.687 16l11.22 11.219l1.405-1.438L7.533 16l9.78-9.781zm7 0L11.688 16l11.218 11.219l1.407-1.438L14.53 16l9.781-9.781z"></svg:path>`,
})
export class LaAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngleDoubleRightIcon],svg[la-angle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.094 4.781L7.688 6.22l9.78 9.78l-9.78 9.781l1.406 1.438L20.313 16zm7 0L14.687 6.22L24.47 16l-9.782 9.781l1.407 1.438L27.312 16z"></svg:path>`,
})
export class LaAngleDoubleRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngleDoubleUpIcon],svg[la-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4.688L3.781 16.905l1.438 1.407L16 7.53l10.781 10.782l1.438-1.407zm0 7L3.781 23.905l1.438 1.407L16 14.53l10.781 10.781l1.438-1.406z"></svg:path>`,
})
export class LaAngleDoubleUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngleDownIcon],svg[la-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.219 10.781L2.78 12.22l12.5 12.5l.719.687l.719-.687l12.5-12.5l-1.438-1.438L16 22.562z"></svg:path>`,
})
export class LaAngleDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngleLeftIcon],svg[la-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.031 4.281l-11 11l-.687.719l.687.719l11 11l1.438-1.438L10.187 16L20.47 5.719z"></svg:path>`,
})
export class LaAngleLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngleRightIcon],svg[la-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.969 4.281L11.53 5.72L21.812 16l-10.28 10.281l1.437 1.438l11-11l.687-.719l-.687-.719z"></svg:path>`,
})
export class LaAngleRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngleUpIcon],svg[la-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 6.594l-.719.687l-12.5 12.5L4.22 21.22L16 9.437L27.781 21.22l1.438-1.438l-12.5-12.5z"></svg:path>`,
})
export class LaAngleUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngryIcon],svg[la-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-5.313 6A2.35 2.35 0 0 0 10 13.656A2.346 2.346 0 0 0 12.344 16c.644 0 1.234-.262 1.656-.688zm10.626 0L18 15.313a2.33 2.33 0 0 0 1.656.687A2.346 2.346 0 0 0 22 13.656c0-.644-.262-1.234-.688-1.656zm-2.75 5.844a4 4 0 0 0-.438.031c-1.121.168-1.969.781-2.719 1.281s-1.41.89-1.906.969s-.941 0-1.781-.844L10.28 20.72c1.133 1.14 2.422 1.55 3.531 1.375c1.11-.176 1.942-.785 2.688-1.282c.746-.496 1.387-.859 1.906-.937c.52-.078 1.032-.012 1.907.844l1.375-1.438c-1.024-1-2.114-1.453-3.125-1.437z"></svg:path>`,
})
export class LaAngryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngrySolidIcon],svg[la-angry-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-5.313 6A2.35 2.35 0 0 0 10 13.656A2.346 2.346 0 0 0 12.344 16c.644 0 1.234-.262 1.656-.688zm10.626 0L18 15.313a2.33 2.33 0 0 0 1.656.687A2.346 2.346 0 0 0 22 13.656c0-.644-.262-1.234-.688-1.656zm-2.75 5.844a4 4 0 0 0-.438.031c-1.121.168-1.969.781-2.719 1.281s-1.41.89-1.906.969s-.941 0-1.781-.844L10.28 20.72c1.133 1.14 2.422 1.55 3.531 1.375c1.11-.176 1.942-.785 2.688-1.282c.746-.496 1.387-.859 1.906-.937c.52-.078 1.032-.012 1.907.844l1.375-1.438c-1.024-1-2.114-1.453-3.125-1.437z"></svg:path>`,
})
export class LaAngrySolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngrycreativeIcon],svg[la-angrycreative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29 9l-1.55.11l-1.15 2.25l-.65-2.13l-1.61.11l.22.59c-.42-.47-1.18-.53-1.81-.48l-1.97.13l-.16 1.58c-.05-.05-.65-1.63-2.67-1.49c-2.04.13-2.81 1.67-3.18 2.34l.2-2.03l-1.43.09l-.32 3.28l-1.89-3.13l-1.35.09l-.5 5.16l-1.53-5.03l-1.2.08l-2.85 6.01l1.6-.1l.4-.9l1.98-.13l.22.86l2.84-.18l.31-3.26l1.88 3.12l1.25-.08l.2-1.99c.49 1.43 1.46 2.02 2.77 1.93c2-.12 2.65-1.41 2.98-1.87l-.16 1.55l1.42-.09l.2-1.89l.96 1.82l1.82-.12l-1.26-1.92c1.14-.46 1.65-1.34 1.6-2.44l.79 2.12l-.24 2.18l1.42-.09l.24-2.18zm-7.23 1.79c.62-.03.97 0 1.15.1c.14.08.2.25.17.52c-.03.28-.16.47-.38.59q-.315.165-1.08.21zm-4.21.33c.2-.01.41.04.61.12c.16.08.35.22.55.4l1.56-.1l-.06.59l-3.15.21l-.12 1.18l1.71-.11c-.23.31-.48.56-.76.7q-.315.18-.66.21c-.43.03-.79-.1-1.07-.39c-.29-.3-.41-.68-.36-1.15c.05-.49.26-.89.65-1.21c.33-.27.7-.43 1.1-.45M6.88 12.4l.42 1.85l-1.19.08zM32 15.12l-4.66.31l-1.58 4.06l-.68-3.92l-1.52.1l1.19 5.81l1.6-.1l2.36-5.69l-.63 5.58l3.23-.2l.15-1.29l-1.72.11l.12-.99l1.72-.11l.16-1.39l-1.73.12l.1-.9l1.73-.11zm-8.6.56l-1.42.1l-.64 5.91l1.41-.09zm-1.66.12l-3.75.24l-.14 1.38l1.11-.07l-.44 4.22l-1.61-5.45l-1.19.07l-2.75 5.78l.11-1.02l-1.82.11l.1-.98l1.82-.11l.13-1.38l-1.82.11l.09-.88l1.82-.12l.13-1.37l-3.24.2l-.13 1.32c-.19-.99-1.12-1.24-2.12-1.17l-1.95.12l-.14 1.52c-.18-.28-.68-1.54-2.56-1.42c-2.04.13-3.25 1.78-3.38 3.22c-.16 1.84 1.18 2.97 2.82 2.87c1.25-.07 2.3-.87 2.85-1.76l-.14 1.43l1.41-.08l.18-1.84l.97 1.77l6.31-.38l.4-.8l1.97-.13l.21.77l2.9-.18l.49-4.53l1.21-.08zM7.986 18.04c.514.012.748.15.703.63c-.07.69-.729.75-1.439.79l.13-1.4c.233-.014.435-.025.606-.02m8.133.04l.39 1.86l-1.179.08l.79-1.94zm-12.869.27c.59-.04.98.17 1.31.78l1.32-.08l-.13 1.47l-1.35.08c-.38.51-.81.9-1.45.93c-1.07.07-1.5-.75-1.43-1.53c.06-.78.78-1.59 1.73-1.65m6.78.85l-.29 2.96l-1.1-1.65c.66-.27 1.14-.64 1.39-1.31"></svg:path>`,
})
export class LaAngrycreativeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAngularIcon],svg[la-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.936L4.361 8.168L6.45 23.84L16 29.145l9.55-5.307l2.089-15.67zm0 2.128l9.443 3.434l-1.744 13.08L16 26.855l-7.7-4.277l-1.743-13.08zM16 8l-6 14h2l1.29-3h5.42L20 22h2zm0 4.55l.02.06l.7 1.75L17.85 17h-3.7l1.13-2.64l.7-1.75z"></svg:path>`,
})
export class LaAngularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAnkhIcon],svg[la-ankh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-2.75 0-5 2.25-5 5c0 1.957 1.113 3.875 2.156 5.438c.133.203.274.374.406.562H8v3.156L9.156 16l5.75-.813L14 28.938L13.937 30h4.126L18 28.937l-.906-13.75l5.75.813l1.156.156V13h-5.563c.133-.188.274-.36.407-.563C19.887 10.876 21 8.957 21 7c0-2.75-2.25-5-5-5m0 2c1.668 0 3 1.332 3 3c0 1.078-.887 2.914-1.844 4.344c-.582.875-.789 1.086-1.156 1.531c-.367-.445-.574-.656-1.156-1.531C13.887 9.914 13 8.078 13 7c0-1.668 1.332-3 3-3"></svg:path>`,
})
export class LaAnkhIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAppStoreIcon],svg[la-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-.031 3.25a.8.8 0 0 0-.25.094l-.5.281a.616.616 0 0 0-.219.844l4.281 7.344l1.563-.907l-4.282-7.344a.6.6 0 0 0-.593-.312m-1.313 2.438a.64.64 0 0 0-.625.312l-.531.938l1.625.937l.531-.938a.616.616 0 0 0-.219-.843l-.562-.313c-.074-.043-.14-.082-.219-.094zm-1.281 1.468l-3.781 6.469l1.594.938l3.78-6.47zM8 15.094v1.812h2.281l1.063-1.812zm6.063 0l-1 1.812h5.843l-1-1.812zm6.687 0l.969 1.812h2.25v-1.812zm.281 1.125l-1.562.906l.906 1.563l1.563-.907zm.813 1.968a.5.5 0 0 0-.157.063c-.253.145-.62.367-.843.5c-.418.25-.094.996 0 1.156c.543.91 1.11.793 1.531 1.438c.23.351.145.508.219.625c.027.043.12.082.156.031c.652-.902.473-2.469 0-3.156c-.191-.282-.54-.719-.906-.657m-12.469.782l-.781 2.937a.15.15 0 0 0 .062.157c.047.027.117.007.156-.032L11 19.906z"></svg:path>`,
})
export class LaAppStoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAppStoreIosIcon],svg[la-app-store-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm8.992 2.01a.3.3 0 0 0-.224.031c-.154.082-.238.268-.166.422c.484 1.132 2.181 5.033 3.601 7.658l1.318-.71c-1.347-2.616-3.684-6.247-4.343-7.266a.3.3 0 0 0-.186-.135m-.744 2.254a.87.87 0 0 0-.875.422l1.514.894a.92.92 0 0 0-.32-1.223c-.104-.05-.216-.072-.319-.093m-1 .638l-.812 1.391l1.544.863l.782-1.347zm-.904 1.543l-3.211 5.6l1.513.875l3.211-5.568zM9 15v2h1.93l1.17-2zm5.84 0l-1.15 2h5.08c-.28-.55-.71-1.41-1-2zm5.29 0c.25.46.58 1.09.68 1.29c.02.02.08.14.1.18l.22.53H23v-2zm.495 1.605l-1.316.711l.988 1.543l1.027-.586zm.803 1.926l-.967.516l1.027 2.45c.185.431.68.637 1.092.411a.81.81 0 0 0 .29-1.154zm-11.43.71l-.545 2.605l.135.06l1.955-1.77l-1.545-.896z"></svg:path>`,
})
export class LaAppStoreIosIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laApperIcon],svg[la-apper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.11 12.02c-1.36 0-1.94.15-2.31.59c-.21.26-.27.52-.29 1.22h1.93c.04-.52.19-.64.76-.64c.65 0 .89.2.89.77v1.14h-.04c-.22-.59-.56-.73-1.67-.73c-1.49 0-2.11.53-2.11 1.79C.27 17.52.81 18 2.33 18c1.09 0 1.51-.21 1.77-.99h.05l-.06.95H6v-3.81c0-.41-.1-.97-.2-1.19c-.34-.69-1.04-.94-2.69-.94m7.68 0c-1.08 0-1.42.19-1.88 1.04h-.04l.08-1.03H7.03v8.45h1.98v-3.51h.04c.23.78.67 1.03 1.69 1.03c.84 0 1.32-.11 1.66-.48c.45-.49.6-1.14.6-2.64c0-1.39-.15-1.98-.64-2.41c-.34-.3-.85-.45-1.57-.45m6.97 0c-1.08 0-1.42.19-1.88 1.04h-.04l.08-1.03H14v8.45h1.97v-3.51h.04c.24.78.68 1.03 1.7 1.03c.84 0 1.32-.11 1.66-.48c.46-.49.61-1.14.61-2.64c0-1.39-.15-1.98-.64-2.41c-.34-.3-.86-.45-1.58-.45m5.78 0c-1.14 0-1.81.16-2.25.57c-.45.4-.62 1.02-.62 2.29c0 1.47.14 2.11.57 2.54c.45.45 1.15.58 2.53.58c1.23 0 1.85-.16 2.21-.65c.22-.29.34-.74.34-1.23V16h-1.87c0 .55-.2.7-.9.7c-.78 0-1-.25-1-1.1c0-.04 0-.14.01-.24h3.77v-.55c0-2.15-.65-2.79-2.79-2.79m6.81 0c-.77 0-1.15.26-1.49 1.01h-.03l.09-1H27v5.93h1.91v-3.4c0-.4 0-.47.05-.62c.12-.3.34-.46.66-.46c.41 0 .51.2.51.97c0 .03 0 .11-.01.2h1.75c-.01-.22-.01-.39-.01-.47c0-.98-.08-1.33-.34-1.7c-.22-.3-.63-.46-1.17-.46m-6.85 1.36c.81 0 .98.11.98.73c0 .02 0 .1.01.19h-1.91l.01-.17c.05-.6.19-.75.91-.75m-13.46.06c.87 0 1.04.25 1.04 1.63c0 1.2-.19 1.48-1.01 1.48c-.89 0-1.06-.27-1.06-1.67c0-1.19.19-1.44 1.03-1.44m6.98 0c.87 0 1.03.25 1.03 1.63c0 1.2-.19 1.48-1.01 1.48c-.89 0-1.06-.27-1.06-1.67c0-1.19.19-1.44 1.04-1.44M3.1 15.53c.76 0 .98.12.98.58c0 .52-.19.67-.85.67c-.84 0-1.03-.13-1.03-.65c0-.45.24-.6.9-.6"></svg:path>`,
})
export class LaApperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAppleIcon],svg[la-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.844 2c-1.64 0-3.297.852-4.407 2.156v.032c-.789.98-1.644 2.527-1.375 4.312c-.128-.05-.136-.035-.28-.094c-.692-.281-1.548-.594-2.563-.594c-3.98 0-7 3.606-7 8.344c0 3.067 1.031 5.942 2.406 8.094c.688 1.078 1.469 1.965 2.281 2.625S11.57 28 12.531 28s1.68-.324 2.219-.563c.54-.238.957-.437 1.75-.437c.715 0 1.078.195 1.625.438c.547.242 1.293.562 2.281.562c1.07 0 1.98-.523 2.719-1.188s1.36-1.519 1.875-2.343c.516-.824.922-1.633 1.219-2.282c.148-.324.258-.593.343-.812s.13-.281.188-.531l.188-.813l-.75-.343a5.3 5.3 0 0 1-1.5-1.063c-.625-.637-1.157-1.508-1.157-2.844A4.08 4.08 0 0 1 24.563 13c.265-.309.542-.563.75-.719c.105-.078.187-.117.25-.156c.062-.04.05-.027.156-.094l.843-.531l-.562-.844c-1.633-2.511-4.246-2.844-5.281-2.844c-.48 0-.82.168-1.25.25c.242-.226.554-.367.75-.624c.004-.004-.004-.028 0-.032q.018-.016.031-.031h.031a6.16 6.16 0 0 0 1.563-4.438L21.78 2zm-1.188 2.313c-.172.66-.453 1.289-.906 1.78l-.063.063c-.382.516-.972.899-1.562 1.125c.164-.652.45-1.312.844-1.812c.008-.012.023-.02.031-.032c.438-.5 1.043-.875 1.656-1.125zm-7.437 5.5c.558 0 1.172.21 1.812.468s1.239.594 2.094.594c.852 0 1.496-.336 2.25-.594s1.559-.469 2.344-.469c.523 0 1.816.333 2.906 1.344c-.191.172-.36.297-.563.531a6.2 6.2 0 0 0-1.53 4.094c0 1.906.831 3.34 1.718 4.25c.55.563.89.696 1.313.938c-.055.125-.086.222-.157.375a19 19 0 0 1-1.093 2.062c-.454.727-1.004 1.434-1.532 1.907c-.527.472-1 .687-1.375.687c-.566 0-.898-.156-1.468-.406S17.581 25 16.5 25c-1.137 0-1.977.336-2.563.594c-.585.258-.89.406-1.406.406c-.246 0-.777-.2-1.375-.688c-.597-.488-1.254-1.23-1.844-2.156c-1.183-1.851-2.093-4.394-2.093-7c0-3.941 2.199-6.343 5-6.343"></svg:path>`,
})
export class LaAppleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAppleAltIcon],svg[la-apple-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.375 3.969c-.293.004-.469.031-.469.031l-1.031.094L9 5.125s.246 2.285 1.875 3.969C7.57 9.605 5 12.332 5 15.656c0 3.586 1.598 6.43 3.469 8.344a11.9 11.9 0 0 0 2.875 2.188c.949.507 1.82.812 2.656.812c.547 0 1.078-.094 1.563-.25a1.4 1.4 0 0 1 .874 0c.485.156 1.016.25 1.563.25c.906 0 1.777-.383 2.719-.969c.941-.586 1.922-1.398 2.843-2.406C25.407 21.613 27 18.82 27 15.656C27 11.965 23.824 9 20 9c-1.027 0-1.977.25-2.844.656c-.004-.027-.023-.074-.031-.125c.512-2.668 2.375-3.656 2.375-3.656l-1-1.75s-1.41.848-2.438 2.656a6 6 0 0 0-1.28-1.406c-1.587-1.266-3.532-1.414-4.407-1.406m.969 2.125c.691.105 1.547.332 2.187.843c.653.52 1.09 1.282 1.344 1.938c-.695-.102-1.566-.355-2.219-.875c-.644-.516-1.058-1.254-1.312-1.906M12 11c1.3 0 2.457.473 3.344 1.219l.656.531l.656-.531A5.16 5.16 0 0 1 20 11c2.805 0 5 2.113 5 4.656c0 2.48-1.3 4.875-2.906 6.625a11.7 11.7 0 0 1-2.438 2.032c-.765.472-1.46.687-1.656.687c-.328 0-.637-.059-.938-.156a3.46 3.46 0 0 0-2.125 0c-.3.097-.609.156-.937.156c-.27 0-.96-.156-1.719-.563c-.758-.406-1.617-1.035-2.406-1.843C8.297 20.977 7 18.656 7 15.656C7 13.113 9.195 11 12 11"></svg:path>`,
})
export class LaAppleAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laApplePayIcon],svg[la-apple-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.828 9c-.585 0-1.263.335-1.691.83c-.336.41-.698 1.049-.567 1.69c.603.073 1.256-.3 1.63-.793A2.34 2.34 0 0 0 8.827 9zm-4.03 2.66C3.215 11.66 2 13.037 2 15.027C2 17.627 3.825 20 4.953 20c.69 0 .946-.451 1.848-.451c.839 0 1.1.451 1.828.451c1.35 0 2.47-2.755 2.512-2.928c-.222-.098-1.524-.723-1.524-2.209c0-1.434 1.188-2.08 1.238-2.111c-.646-.976-1.69-1.092-2.082-1.092c-.907 0-1.71.494-2.138.494c-.448 0-1.102-.494-1.836-.494zM13 12v8h2v-3h.5c.98 0 1.674-.667 2.082-1.5H18v-1c0-1.37-1.13-2.5-2.5-2.5zm7.223 0L18 18.842V20h2v-.842l.05-.158h1.9l.05.158V20h2v-1.158L21.777 12zM24 12v1.297l2 3.076V20h2v-3.627l2-3.076V12h-2v.703l-1 1.54l-1-1.54V12zm-9 2h.5c.287 0 .5.213.5.5s-.213.5-.5.5H15zm6 2.08l.299.92H20.7l.299-.92z"></svg:path>`,
})
export class LaApplePayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArchiveIcon],svg[la-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v6h1v16h22V11h1V5zm2 2h20v2H6zm1 4h18v14H7zm5.813 2c-.551.05-.958.543-.907 1.094c.051.55.543.957 1.094.906h6c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496z"></svg:path>`,
})
export class LaArchiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArchwayIcon],svg[la-archway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v6h2v12H3v2h10v-7c0-1.654 1.346-3 3-3s3 1.346 3 3v7h10v-2h-2V12h2V6zm2 2h22v2H5zm2 4h18v12h-4v-5c0-2.757-2.243-5-5-5s-5 2.243-5 5v5H7z"></svg:path>`,
})
export class LaArchwayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowAltCircleDownIcon],svg[la-arrow-alt-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-1 4v10h-3l4 4l4-4h-3V9z"></svg:path>`,
})
export class LaArrowAltCircleDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowAltCircleDownSolidIcon],svg[la-arrow-alt-circle-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-1 4v10h-3l4 4l4-4h-3V9z"></svg:path>`,
})
export class LaArrowAltCircleDownSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowAltCircleLeftIcon],svg[la-arrow-alt-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-3 7l-4 4l4 4v-3h10v-2H13z"></svg:path>`,
})
export class LaArrowAltCircleLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowAltCircleLeftSolidIcon],svg[la-arrow-alt-circle-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-3 7l-4 4l4 4v-3h10v-2H13z"></svg:path>`,
})
export class LaArrowAltCircleLeftSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowAltCircleRightIcon],svg[la-arrow-alt-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m3 7v3H9v2h10v3l4-4z"></svg:path>`,
})
export class LaArrowAltCircleRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowAltCircleRightSolidIcon],svg[la-arrow-alt-circle-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m3 7v3H9v2h10v3l4-4z"></svg:path>`,
})
export class LaArrowAltCircleRightSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowAltCircleUpIcon],svg[la-arrow-alt-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m0 4l-4 4h3v10h2V13h3z"></svg:path>`,
})
export class LaArrowAltCircleUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowAltCircleUpSolidIcon],svg[la-arrow-alt-circle-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m0 4l-4 4h3v10h2V13h3z"></svg:path>`,
})
export class LaArrowAltCircleUpSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowCircleDownIcon],svg[la-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-1 4v10.281l-4-4l-1.406 1.438L16 23.125l6.406-6.406L21 15.28l-4 4V9z"></svg:path>`,
})
export class LaArrowCircleDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowCircleLeftIcon],svg[la-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-.719 4.594L8.875 16l6.406 6.406L16.72 21l-4-4H23v-2H12.719l4-4z"></svg:path>`,
})
export class LaArrowCircleLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowCircleRightIcon],svg[la-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m.719 4.594L15.28 11l4 4H9v2h10.281l-4 4l1.438 1.406L23.125 16z"></svg:path>`,
})
export class LaArrowCircleRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowCircleUpIcon],svg[la-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m0 3.875l-6.406 6.406L11 16.72l4-4V23h2V12.719l4 4l1.406-1.438z"></svg:path>`,
})
export class LaArrowCircleUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowDownIcon],svg[la-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v20.063L8.219 17.28L6.78 18.72l8.5 8.5l.719.687l.719-.687l8.5-8.5l-1.438-1.438L17 24.063V4z"></svg:path>`,
})
export class LaArrowDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowLeftIcon],svg[la-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.281 6.781l-8.5 8.5l-.687.719l.687.719l8.5 8.5l1.438-1.438L7.938 17H28v-2H7.937l6.782-6.781z"></svg:path>`,
})
export class LaArrowLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowRightIcon],svg[la-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.719 6.781L17.28 8.22L24.063 15H4v2h20.063l-6.782 6.781l1.438 1.438l8.5-8.5l.687-.719l-.687-.719z"></svg:path>`,
})
export class LaArrowRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowUpIcon],svg[la-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.094l-.719.687l-8.5 8.5L8.22 14.72L15 7.938V28h2V7.937l6.781 6.782l1.438-1.438l-8.5-8.5z"></svg:path>`,
})
export class LaArrowUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowsAltIcon],svg[la-arrows-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 1.586l-5.707 5.707l1.414 1.414L15 5.414V15H5.414l3.293-3.293l-1.414-1.414L1.586 16l5.707 5.707l1.414-1.414L5.414 17H15v9.586l-3.293-3.293l-1.414 1.414L16 30.414l5.707-5.707l-1.414-1.414L17 26.586V17h9.586l-3.293 3.293l1.414 1.414L30.414 16l-5.707-5.707l-1.414 1.414L26.586 15H17V5.414l3.293 3.293l1.414-1.414z"></svg:path>`,
})
export class LaArrowsAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowsAltHIcon],svg[la-arrows-alt-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.281 6.781l-8.5 8.5L.094 16l.687.719l8.5 8.5l1.438-1.438L3.938 17h24.125l-6.782 6.781l1.438 1.438l8.5-8.5l.687-.719l-.687-.719l-8.5-8.5L21.28 8.22L28.063 15H3.938l6.78-6.781z"></svg:path>`,
})
export class LaArrowsAltHIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArrowsAltVIcon],svg[la-arrows-alt-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2.094l-.719.687l-8 8L8.72 12.22L15 5.938v20.125L8.719 19.78L7.28 21.22l8 8l.719.687l.719-.687l8-8l-1.438-1.438L17 26.063V5.938l6.281 6.28l1.438-1.437l-8-8z"></svg:path>`,
})
export class LaArrowsAltVIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laArtstationIcon],svg[la-artstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.73 5L26 27l1.994-4.512a3 3 0 0 0-.123-2.908L20.096 6.436A3 3 0 0 0 17.536 5zm-2.218 2.178L5.63 18h11.916zM4 21l2.172 4.342A3 3 0 0 0 8.854 27h13.712l-3.345-6z"></svg:path>`,
})
export class LaArtstationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAssistiveListeningSystemsIcon],svg[la-assistive-listening-systems-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.75 1.375l-1.094 1.656a11.44 11.44 0 0 1 3.782 4.063l1.75-.969a13.4 13.4 0 0 0-4.438-4.75m-1.688 2.5l-1.125 1.656c1.204.832 2.192 1.809 2.907 3.063l1.718-1c-.882-1.547-2.105-2.754-3.5-3.719M17 5c-4.43 0-8 3.57-8 8h2c0-3.371 2.629-6 6-6s6 2.629 6 6c0 2.246-.652 3.473-1.375 4.688C20.902 18.901 20 20.168 20 22a3 3 0 0 1-3 3v2c2.746 0 5-2.254 5-5c0-1.168.598-1.973 1.375-3.281S25 15.652 25 13c0-4.43-3.57-8-8-8m0 3c-2.746 0-5 2.254-5 5h2a3 3 0 0 1 6 0h2c0-2.746-2.254-5-5-5m0 5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-3 3c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-3.781 1.938L9.03 19.155l2.813 2.813l1.219-1.188zM8 22c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-3 3c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaAssistiveListeningSystemsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAsteriskIcon],svg[la-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.7 17l6.198 8.398L21.5 27L16 18.3L10.5 27l-2.3-1.602L14.397 17l-9.296-2.398L6 12l9.102 3.2L14.5 5h3L17 15.2l9-3.2l.8 2.7z"></svg:path>`,
})
export class LaAsteriskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAsymmetrikIcon],svg[la-asymmetrik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.09 6.084C12.653 5.99 6.665 7.357 2 10c2.682-1.045 5.383-1.8 8.275-2.438c3.668-.808 7.436-1.235 10.756-.72c7.413 1.157 9.569 6.2 4.805 11.267a14 14 0 0 1-1.807 1.565L16.852 9.102L7.645 22.506l-.092-.035c-4.28-1.477-4.342-3.99-1.57-7.143c1.01-1.08 2.376-1.985 3.865-2.824c.992-.56 2.047-1.1 3.13-1.494c-3.164.987-6.081 2.571-7.972 4.517C3.659 16.917 3.015 18.304 3 19.56c-.024 1.707 1.836 2.992 4.023 3.863L5.275 26h4.938l.004-.008l.013.008l1.168-1.773c1.047.04 2.185-.006 3.276-.133L13.51 26h6.572l-1.605-2.674c.873-.249 1.756-.55 2.587-.885l1.856 2.817l.459.742h4.937l-3.66-5.4c.9-.588 1.802-1.308 2.477-2.004c1.886-1.945 2.824-3.89 2.844-5.647c.039-3.185-2.887-5.747-8.235-6.564a27 27 0 0 0-3.652-.301m-1.281 9.937l.703 1.024l3.011 4.572c-.808.342-1.651.646-2.51.893L16.8 20.535l-1.541 2.592c-1.091.163-2.185.183-3.237.154l4.788-7.26z"></svg:path>`,
})
export class LaAsymmetrikIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAtIcon],svg[la-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.188 4C8.823 3.89 2.914 10.484 4.155 18.031C5 23.152 9.203 27.18 14.344 27.875c3.465.469 6.703-.531 9.156-2.5l-1.25-1.563c-2.047 1.641-4.738 2.489-7.656 2.094c-4.254-.574-7.742-3.953-8.438-8.187C5.11 11.348 9.992 5.91 16.156 6c5.254.078 9.684 4.434 9.844 9.688c.004.113 0 .222 0 .343A3.984 3.984 0 0 1 22 20c-1.117 0-2-.883-2-2v-8h-2v.781A4.43 4.43 0 0 0 15.5 10a4.516 4.516 0 0 0-4.5 4.5v3c0 2.473 2.027 4.5 4.5 4.5c1.348 0 2.547-.613 3.375-1.563C19.609 21.372 20.73 22 22 22c3.285 0 5.988-2.68 6-5.969c0-.133.004-.261 0-.406C27.809 9.289 22.523 4.094 16.187 4zm-.688 8c1.39 0 2.5 1.11 2.5 2.5v3c0 1.39-1.11 2.5-2.5 2.5S13 18.89 13 17.5v-3c0-1.39 1.11-2.5 2.5-2.5"></svg:path>`,
})
export class LaAtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAtlasIcon],svg[la-atlas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4C7.355 4 6 5.355 6 7v18c0 1.645 1.355 3 3 3h17V4zm0 2h15v16H9a2.9 2.9 0 0 0-1 .188V7c0-.566.434-1 1-1m7 2c-3.301 0-6 2.699-6 6s2.699 6 6 6s6-2.699 6-6s-2.699-6-6-6m.688 2.094c.484.082.937.23 1.343.469l.065.718l-.469-.187l-.375.312l.062.906l.97-.28l1.187.374l-.313.531l-.72-.437l-.782.125l-.75.563l-.437 1.312l.843.688s.893-.157.94-.157s.375.815.375.815l-.5 1.531A4.03 4.03 0 0 1 16 18c-.234 0-.464-.055-.688-.094l-.189-.312l.47-1.75l-1.78-1.344h-1.657l-.125-.25c-.005-.086-.031-.164-.031-.25c0-.215.03-.422.063-.625l.843-.656l1.781-.844l-.28-1.156l.78-.156l.344.5l1.346-.25l-.19-.72zm-3.625 6.625h.314l.594.718a4 4 0 0 1-.909-.718zM9 24h15v2H9c-.566 0-1-.434-1-1s.434-1 1-1"></svg:path>`,
})
export class LaAtlasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAtlassianIcon],svg[la-atlassian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.932 4c-.214 0-.434.12-.578.363c-5.227 8.615-.372 15.661 2.824 22.264a.66.66 0 0 0 .584.373h7.59c.483 0 .799-.528.576-.979c0 0-10.208-21.14-10.46-21.667A.6.6 0 0 0 15.933 4zm-.05 3.744c2.12 4.394 6.43 13.32 8.33 17.256h-4.605a161 161 0 0 0-.89-1.752c-2.598-5.06-5.07-9.872-2.834-15.504zM10.317 14c-.227 0-.442.126-.568.389L4.07 26.004c-.22.464.117.996.608.996H12.6c.25 0 .47-.156.574-.385c1.713-3.602.683-9.077-2.309-12.353a.76.76 0 0 0-.549-.262zm.254 3.26c1.338 2.374 1.798 5.435 1.086 7.74h-4.87z"></svg:path>`,
})
export class LaAtlassianIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAtomIcon],svg[la-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-3.094 0-5.492 4.578-5.922 10.938c.555.59 1.207 1.175 1.93 1.746c.008-.664.047-1.297.101-1.918A31 31 0 0 1 14 12.536c2.66-1.536 5.398-2.548 7.707-2.848a10 10 0 0 1 1.266-.086c1.297 0 2.215.312 2.554.898c.305.531.168 1.375-.343 2.363c.523.485 1.02.977 1.46 1.473C27.77 12.473 28 10.78 27.259 9.5c-.883-1.527-2.942-2.168-5.805-1.797c-2.566.332-5.566 1.434-8.453 3.102c-.184.105-.355.222-.535.336C13.184 7.44 14.645 5 16 5c.633 0 1.29.54 1.883 1.477a22 22 0 0 1 2.004-.532C18.852 4.09 17.507 3 16 3M9.219 7.613C7.05 7.574 5.48 8.223 4.742 9.5c-.804 1.39-.469 3.258.914 5.309c.125.191.262.394.434.617c1.57 2.054 4.023 4.101 6.91 5.77c.184.105.375.199.563.304c-1.145.395-2.254.68-3.274.813c-1.95.253-3.375-.051-3.812-.813c-.309-.531-.172-1.375.34-2.363a24 24 0 0 1-1.465-1.469C4.23 19.528 4 21.218 4.742 22.5c.719 1.246 2.219 1.902 4.297 1.902c.473 0 .98-.035 1.508-.105q.456-.06.922-.152l.219-.047q.021-.001.042-.008c.532-.113 1.118-.27 1.79-.48l.66-.204c.98-.336 1.984-.754 2.988-1.242c.219-.727.414-1.574.562-2.55c-.578.323-1.16.616-1.738.89A25 25 0 0 1 14 19.464c-2.664-1.538-4.91-3.401-6.32-5.25c-1.196-1.566-1.645-2.952-1.203-3.714c.3-.523 1.097-.82 2.195-.875q.232-1.062.547-2.012m11.523 4.285c-.789.184-1.625.454-2.48.793c.566.336 1.105.696 1.629 1.055c.062.727.109 1.469.109 2.254c0 5.898-1.855 10.398-3.64 10.941c-.122.04-.247.059-.36.059c-.633 0-1.29-.535-1.883-1.48c-.68.214-1.351.398-2.004.535C13.148 27.91 14.493 29 16 29q.298 0 .578-.059C19.707 28.348 22 22.988 22 16c0-.215-.016-.422-.02-.637c.915.793 1.72 1.61 2.344 2.422c1.192 1.567 1.64 2.953 1.203 3.715c-.308.527-1.093.832-2.199.887a20 20 0 0 1-.543 2.004c.055 0 .121.011.176.011c2.078 0 3.578-.656 4.297-1.902c.883-1.527.406-3.633-1.348-5.926c-1.242-1.625-3.043-3.242-5.168-4.676M16 14a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaAtomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAudibleIcon],svg[la-audible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8c-5.078 0-9.465 2.918-11.602 7.16C6.668 12.04 10.344 10 14.5 10c4.54 0 8.504 2.43 10.691 6.05l2.29-1.144C25.296 10.801 20.976 8 16 8m0 4a9 9 0 0 0-8.27 5.45C9.273 15.36 11.742 14 14.531 14c2.961 0 5.563 1.531 7.078 3.844l2.297-1.153A9 9 0 0 0 16 12M1 15.379v2.238c5.223 2.61 14.55 7.278 14.55 7.278l.45.222l15-7.5v-2.234l-15 7.5c-8.309-4.156-12.688-6.344-15-7.504M15.969 16c-2.196 0-4.035 1.434-4.7 3.414A4.44 4.44 0 0 1 14.517 18a4.44 4.44 0 0 1 3.453 1.66l2.297-1.148C19.406 17.02 17.816 16 15.969 16"></svg:path>`,
})
export class LaAudibleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAudioDescriptionIcon],svg[la-audio-description-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.594 7l-.313.281S2 10.601 2 16s3.281 8.719 3.281 8.719l.313.281h20.812l.313-.281S30 21.399 30 16s-3.281-8.719-3.281-8.719L26.406 7zm.937 2H25.47c.336.355 2.531 2.73 2.531 7s-2.195 6.645-2.531 7H6.53C6.195 22.645 4 20.27 4 16s2.195-6.645 2.531-7m3.844 3l-4 8h2.25l.5-1H11v1h2c2.2 0 4-1.8 4-4s-1.8-4-4-4zm5.594 0A4.98 4.98 0 0 1 18 16c0 1.64-.805 3.09-2.031 4h2.781A6.95 6.95 0 0 0 20 16a6.95 6.95 0 0 0-1.25-4zm3.937 0A7.96 7.96 0 0 1 21 16a7.96 7.96 0 0 1-1.094 4h2.25A10 10 0 0 0 23 16a9.9 9.9 0 0 0-.844-4zm3.344 0a10.9 10.9 0 0 1 .75 4a10.9 10.9 0 0 1-.75 4h2.125A12.9 12.9 0 0 0 26 16a12.9 12.9 0 0 0-.625-4zM13 14c1.117 0 2 .883 2 2s-.883 2-2 2zm-2 1.25V17h-.875z"></svg:path>`,
})
export class LaAudioDescriptionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAutoprefixerIcon],svg[la-autoprefixer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.928 5l-7.26 22h3.496l1.236-4h5.205l1.233 4h3.496zm.04 9.69h.073L17.986 21h-3.968zM9.267 21l-7.795.559L1 22.668L8.559 23zm13.431 0l.721 2L31 22.668l-.47-1.11L22.696 21z"></svg:path>`,
})
export class LaAutoprefixerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAvianexIcon],svg[la-avianex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.613 4.002c-2.318 0-4.465 1.794-4.888 4.086L3.072 22.55c-.217 1.173.052 2.287.76 3.137C4.536 26.534 5.576 27 6.76 27h14.625c2.318 0 4.463-1.795 4.886-4.088l2.659-14.46c.213-1.178-.06-2.293-.77-3.143c-.704-.843-1.743-1.307-2.924-1.307zm0 1.998h14.623c.578 0 1.072.21 1.391.592c.323.386.443.919.338 1.5L24.307 22.55c-.245 1.329-1.584 2.45-2.922 2.45H6.76c-.58 0-1.073-.21-1.389-.592c-.32-.385-.439-.916-.332-1.496L7.691 8.45C7.937 7.121 9.274 6 10.613 6m.803 1.975l-.42.224l-.887 1.364l3.245 4.707l.966 1.396a49 49 0 0 0-1.547 1.646l-2.736-1.466l-.74.724l2.473 2.27l1.914 2.877l.843-.6l-1.04-3.027c.59-.358 1.273-.805 1.966-1.277L20.896 22l1.508-.637l.297-.37l-4.474-5.634l-.213-.343c.934-.67 1.58-1.146 1.666-1.207c.373-.311.298-.982-.127-1.477c-.434-.51-1.086-.678-1.45-.371c0 0-.678.64-1.593 1.527l-.23-.213z"></svg:path>`,
})
export class LaAvianexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAviatoIcon],svg[la-aviato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.11 11L0 17.57h.85l.95-2.09h2.61l.94 2.09h.87zm14.39 0l-3.12 6.56h.87l.95-2.09h1.206l-.086 1.93s-1.13.33-1.27 1.19a.13.13 0 0 0-.01.06l-3.24-.1l3.24.41c0 .11.01.21.03.32c.01.13.03.24.06.36L4 19l4.43.46v.32a.616.616 0 0 0-.52.61c0 .34.28.62.62.62a.617.617 0 0 0 .09-1.23v-.29l4.02.45v.27c-.28.05-.5.31-.5.61c0 .34.28.51.62.51s.62-.17.62-.51c0-.3-.21-.56-.49-.61v-.25l1.42.16v1.19h-.3V22h.3v-.32h.25V22h.29v-.68h-.29v-1.17l1.92.22c.4.57.94.68.94.68v.33l-.25.01l-.01.61h.2l.01-.25h.26l.01.25h.2l-.01-.61l-.25-.01l-.01-.33s.55-.11.95-.68l1.92-.22v1.17h-.3V22h.3v-.32h.25V22h.3v-.68h-.3v-1.19l1.42-.16v.25c-.28.05-.49.31-.49.6c0 .34.27.51.62.51c.34 0 .61-.17.61-.51c0-.3-.21-.55-.49-.6v-.28l4.01-.45v.29a.626.626 0 0 0-.52.62c0 .33.28.62.62.62s.62-.29.62-.62a.635.635 0 0 0-.53-.62v-.32L31 19l-12.15.63c.04-.11.06-.22.08-.35c.01-.11.02-.21.02-.33l3.24-.41l-3.24.1v-.05c-.15-.87-1.28-1.19-1.28-1.19l-.082-1.93H18.8l.949 2.09h.86zm11 .14c-.46 0-.89.08-1.29.25c-.4.18-.75.3-1.05.6a3.22 3.22 0 0 0-.97 2.35c0 .46.08.88.25 1.29c.17.4.42.75.72 1.04q.45.465 1.05.72c.4.17.83.26 1.29.26s.89-.09 1.29-.26s.75-.41 1.06-.72c.3-.29.53-.65.7-1.04c.17-.41.26-.83.26-1.29s-.09-.9-.26-1.29c-.17-.41-.4-.76-.7-1.06c-.31-.31-.66-.42-1.06-.6c-.4-.17-.83-.25-1.29-.25m-22.61.07l3.12 6.57l3.1-6.57h-.85l-2.25 4.8l-2.26-4.8zm7.225.003v6.357h.77v-6.357zm6.9 0v.576h2.069v5.781h.854v-5.78h2.046v-.577zm8.485.547c.34 0 .68.06.98.2c.32.14.59.31.82.54q.345.36.54.81c.13.32.19.66.19 1.03c0 .35-.06.69-.19 1.01c-.13.31-.31.59-.54.81c-.23.24-.5.42-.82.55c-.3.14-.64.2-.98.2c-.35 0-.68-.06-.99-.2c-.31-.13-.59-.31-.81-.55c-.23-.22-.42-.5-.54-.81c-.13-.32-.2-.65-.2-1.01s.07-.71.2-1.03c.12-.3.31-.57.54-.81c.24-.22.5-.4.81-.54s.64-.2.99-.2m-25.39.9l.98 2.13H2.13zm14.39 0l.97 2.13h-.911l-.059-1.41l-.063 1.41h-.917z"></svg:path>`,
})
export class LaAviatoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAwardIcon],svg[la-award-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-.625 0-1.246.21-1.781.594L12.563 4.75L10.655 5h-.031l-.031.031A3.39 3.39 0 0 0 8.03 7.594L8 7.625v.031l-.25 1.938l-1.156 1.5l-.032.031v.031c-.699 1.117-.73 2.559.032 3.625l1.187 1.656l.313 1.72l-3.219 4.905l-1.031 1.532h4.781l1.156 2.687L10.5 29l1.031-1.563l3.156-4.75c.848.348 1.805.38 2.626 0l3.156 4.75L21.5 29l.719-1.719l1.156-2.687h4.781l-1.031-1.532L24 18.313l.25-1.875l1.156-1.656l.032-.031v-.031c.699-1.117.73-2.528-.032-3.594L24.25 9.469l-.375-1.875h.031c-.004-.024-.027-.04-.031-.063c-.18-1.308-1.215-2.37-2.531-2.531h-.032l-1.875-.25l-1.656-1.156A3.07 3.07 0 0 0 16 3m0 2.031c.23 0 .457.07.625.188L18.406 6.5l.219.156l.25.032L21.063 7h.03c.45.05.762.363.813.813v.062l.407 2.219l.03.219l.157.187l1.281 1.781c.239.332.27.895-.031 1.375l-1.406 1.969l-.032.25L22 18.063v.03a1 1 0 0 1-.156.438l-.063.032v.03a.88.88 0 0 1-.593.313h-.063l-2.281.407l-.25.03l-.188.157l-1.781 1.281c-.332.239-.926.27-1.406-.031l-1.625-1.25l-.188-.156l-.281-.032L10.937 19h-.03a.89.89 0 0 1-.688-.438a1 1 0 0 1-.125-.375v-.062l-.406-2.281l-.032-.25l-.156-.188l-1.281-1.781c-.239-.332-.27-.926.031-1.406l1.25-1.625l.156-.188l.031-.281l.282-2.094c.004-.015.027-.015.031-.031a1.4 1.4 0 0 1 1-1c.016-.004.016-.027.031-.031l2.094-.282l.25-.03l.219-.157l1.781-1.281c.168-.117.395-.188.625-.188m6.906 15.219l1.532 2.344H22.03l-.25.625l-.687 1.593l-2.125-3.25l.468-.343l1.97-.344v.031c.023-.004.038-.027.062-.031a2.97 2.97 0 0 0 1.437-.625zm-13.812.031a2.85 2.85 0 0 0 1.562.719h.031l1.907.25l.437.344l-2.125 3.218l-.687-1.593l-.25-.625H7.563z"></svg:path>`,
})
export class LaAwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laAwsIcon],svg[la-aws-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.584 9.01c-1.36 0-2.74.53-2.97.82c-.06.12-.2 1.09.13 1.09c.11 0 .16.02.48-.13c1.2-.47 1.96-.46 2.07-.46c1.35-.13 2.13.79 2.01 1.98v.7c-1.14-.27-1.79-.28-2.11-.28c-1.66-.1-3.194.776-3.194 2.7c0 2.11 1.883 2.56 2.613 2.53c1.09.01 2.13-.48 2.82-1.33c.55 1.23.9 1.15.91 1.15c.1 0 .18-.04.26-.09l.57-.4c.1-.06.18-.16.19-.28c-.01-.29-.53-.74-.49-1.75v-3.12a3.18 3.18 0 0 0-.799-2.35a3.42 3.42 0 0 0-2.49-.78m19.373 0c-2 0-3.15 1.25-3.12 2.52c0 1.74 1.76 2.29 1.96 2.35c1.69.53 1.92.55 2.39.95c.4.41.35 1.21-.24 1.56c-.17.1-.9.54-2.55.2c-.55-.11-.84-.24-1.29-.43c-.12-.04-.4-.11-.4.26v.49c0 .23.14.44.35.54c1.05.53 2.31.55 2.58.55c.04 0 2.34.001 3.11-1.55c.158-.32.57-1.49-.2-2.49c-.64-.75-1.19-.83-2.83-1.33c-.14-.04-1.35-.35-1.34-1.2c-.06-1.09 1.42-1.15 1.73-1.13c1.25-.02 1.87.45 2.21.48c.15 0 .22-.09.22-.29v-.46a.5.5 0 0 0-.09-.31c-.4-.52-1.93-.71-2.49-.71m-15.18.25c-.11.02-.19.13-.17.24c.02.13.04.26.09.39l2.24 7.39c.05.24.21.5.56.46h.82c.5.05.57-.43.58-.48l1.47-6.16l1.49 6.17c.01.05.08.53.57.48h.83c.36.04.53-.22.58-.46c2.52-8.11 2.35-7.56 2.37-7.64c.04-.42-.2-.39-.24-.38h-.89c-.45-.05-.54.36-.56.46l-1.66 6.41l-1.5-6.41c-.07-.49-.47-.47-.57-.46h-.77c-.44-.04-.55.31-.58.46l-1.49 6.32l-1.6-6.32c-.04-.2-.17-.51-.56-.47zm-4.254 4.63c.72.01 1.342.12 1.772.22c0 .5.018.78-.092 1.23c-.14.48-.759 1.35-2.219 1.37c-.84.04-1.39-.62-1.34-1.37c-.05-1.2 1.19-1.5 1.88-1.45zm22.518 6.112c-.933.013-2.035.222-2.871.809c-.258.179-.213.427.074.394c.94-.113 3.032-.367 3.406.111s-.414 2.45-.763 3.332c-.108.263.12.372.361.172c1.564-1.31 1.97-4.056 1.65-4.45c-.16-.198-.924-.381-1.857-.368m-27.824 1c-.218.03-.312.306-.084.525C5.05 25.201 10.226 27 15.973 27c4.099 0 8.857-1.337 12.142-3.857c.543-.42.08-1.047-.476-.8c-3.683 1.626-7.684 2.409-11.325 2.409c-5.396 0-10.62-1.127-14.845-3.686a.4.4 0 0 0-.252-.064"></svg:path>`,
})
export class LaAwsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBabyIcon],svg[la-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m0 7c-6.668 0-9.906 6.563-9.906 6.563l1.812.875S9.301 15.715 12 14.125v6.094c-.406.144-.938.363-1.531.687c-.54.293-1.09.672-1.563 1.188S8.027 23.301 8 24.125c-.047 1.559.832 2.96 1.625 4.125a23 23 0 0 0 1.594 2.063l1.5-1.375s-.73-.778-1.438-1.813c-.707-1.035-1.3-2.355-1.281-2.938c.008-.242.121-.472.375-.75c.254-.277.648-.554 1.063-.78a8 8 0 0 1 1.124-.5C13.13 22.913 14.235 24 16 24c1.738 0 2.828-1.055 3.406-1.813c.301.114.664.266 1.032.47c.417.226.816.507 1.062.78c.246.274.344.508.344.75c0 .622-.617 1.903-1.313 2.907c-.695 1.004-1.375 1.75-1.375 1.75l1.438 1.375s.808-.867 1.593-2c.786-1.133 1.657-2.496 1.657-4.032c0-.835-.403-1.57-.875-2.093c-.473-.524-1.02-.89-1.563-1.188A10.4 10.4 0 0 0 20 20.281v-6.156c2.7 1.59 4.094 4.313 4.094 4.313l1.812-.875S22.668 11 16 11m0 2a7.6 7.6 0 0 1 2 .25v7.438c-.11.207-.707 1.312-2 1.312s-1.89-1.105-2-1.313V13.25a7.6 7.6 0 0 1 2-.25"></svg:path>`,
})
export class LaBabyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBabyCarriageIcon],svg[la-baby-carriage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v9H9.687a9.8 9.8 0 0 0-1.218-2.094C7.414 9.504 5.605 8 3 8v2c1.855 0 3.047.996 3.875 2.094c.79 1.047 1.094 2.031 1.125 2.125c.082 3.39 2.082 6.32 4.938 7.781A3.016 3.016 0 0 0 10 25c0 1.645 1.355 3 3 3s3-1.355 3-3c0-.887-.383-1.7-1-2.25a9 9 0 0 0 2 .25h3a9 9 0 0 0 2-.25c-.617.55-1 1.363-1 2.25c0 1.645 1.355 3 3 3s3-1.355 3-3a3.016 3.016 0 0 0-2.938-3c2.633-1.348 4.528-3.945 4.875-7c.032-.29.06-.578.063-.875v-.063s.008-.164 0-.437V13h-.063c-.074-.957-.273-2.406-1-3.938C26.747 6.556 24.047 4 19 4zm2 2.125c3.613.297 5.293 1.996 6.156 3.813c.59 1.246.723 2.292.782 3.062H20zM10.219 15H26.78c-.508 3.363-3.281 6-6.781 6h-3c-3.5 0-6.273-2.637-6.781-6zM13 24c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m11 0c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaBabyCarriageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBackspaceIcon],svg[la-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.594 7l-.313.281l-8 8l-.687.719l.687.719l8 8l.313.281H29V7zm.844 2H27v14H12.437l-7-7zm2.718 2.75l-1.406 1.406L16.594 16l-2.844 2.844l1.406 1.406L18 17.406l2.844 2.844l1.406-1.406L19.406 16l2.844-2.844l-1.406-1.406L18 14.594z"></svg:path>`,
})
export class LaBackspaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBackwardIcon],svg[la-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 5l-1.594 1.188l-12 9L2.344 16l1.062.813l12 9L17 27v-7.375l8.406 6.188L27 26.968V5.03l-1.594 1.157L17 12.375zm8 3.969V23.03l-8.406-6.187L15.469 16l1.125-.844zM15 9v14l-9.313-7z"></svg:path>`,
})
export class LaBackwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBaconIcon],svg[la-bacon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.438 5c-2.82 0-5.094 2.25-5.094 2.25L5 7.563V15h1.438l.28-.219c.184-.144.766-.61 1.5-1.031c.735-.422 1.606-.75 2.22-.75c.84 0 1.546.215 2.406.469S14.714 14 16 14c1.285 0 2.258-.281 3.094-.531S20.633 13 21.562 13c.739 0 1.625.352 2.344.781s1.211.856 1.344.969l.281.25H27V7.562l-.344-.312S24.383 5 21.563 5c-1.262 0-2.231.281-3.063.531S16.96 6 16 6s-1.668-.219-2.5-.469S11.7 5 10.437 5zm0 2c.96 0 1.667.219 2.5.469c.832.25 1.8.531 3.062.531s2.23-.281 3.063-.531c.832-.25 1.539-.469 2.5-.469C22.96 7 24.535 8.145 25 8.5v.656c-.059-.035-.094-.058-.156-.094C23.964 8.54 22.8 8 21.562 8c-1.16 0-2.042.281-2.875.531C17.855 8.781 17.063 9 16 9s-1.898-.219-2.75-.469S11.527 8 10.437 8c-1.171 0-2.32.543-3.218 1.063c-.094.054-.133.101-.219.156V8.5C7.465 8.145 9.04 7 10.438 7m0 2c.921 0 1.675.219 2.53.469c.856.25 1.821.531 3.032.531c1.21 0 2.133-.281 2.969-.531S20.555 9 21.562 9c.93 0 1.981.46 2.782.938c.27.16.46.296.656.437v1.719c-.031-.02-.031-.012-.063-.031c-.886-.528-2.046-1.063-3.375-1.063c-1.238 0-2.199.281-3.03.531c-.833.25-1.54.469-2.532.469s-1.746-.223-2.594-.469C12.56 11.285 11.61 11 10.437 11c-1.234 0-2.332.523-3.218 1.031c-.114.067-.114.09-.219.156v-1.78c.219-.145.422-.298.719-.47C8.543 9.457 9.598 9 10.437 9zm0 8c-2.82 0-5.094 2.25-5.094 2.25L5 19.563V27h1.438l.28-.219c.184-.144.766-.61 1.5-1.031c.735-.422 1.606-.75 2.22-.75c.84 0 1.546.215 2.406.469S14.714 26 16 26c1.285 0 2.258-.281 3.094-.531S20.633 25 21.562 25c.739 0 1.625.352 2.344.781s1.211.856 1.344.969l.281.25H27v-7.438l-.344-.312S24.383 17 21.563 17c-1.262 0-2.231.281-3.063.531S16.96 18 16 18s-1.668-.219-2.5-.469S11.7 17 10.437 17zm0 2c.96 0 1.667.219 2.5.469c.832.25 1.8.531 3.062.531s2.23-.281 3.063-.531c.832-.25 1.539-.469 2.5-.469c1.398 0 2.972 1.145 3.437 1.5v1.656c-.059-.035-.094-.058-.156-.093C23.964 21.538 22.8 21 21.562 21c-1.16 0-2.042.281-2.875.531c-.832.25-1.625.469-2.687.469c-1.063 0-1.898-.219-2.75-.469S11.527 21 10.437 21c-1.171 0-2.32.543-3.218 1.063c-.094.054-.133.101-.219.156V20.5c.465-.355 2.04-1.5 3.438-1.5m0 3c.921 0 1.675.219 2.53.469c.856.25 1.821.531 3.032.531c1.21 0 2.133-.281 2.969-.531S20.555 22 21.562 22c.93 0 1.981.46 2.782.938c.27.16.46.296.656.437v.719c-.031-.02-.031-.012-.063-.032c-.886-.527-2.046-1.062-3.375-1.062c-1.238 0-2.199.281-3.03.531c-.833.25-1.54.469-2.532.469s-1.746-.223-2.594-.469C12.56 23.285 11.61 23 10.437 23c-1.234 0-2.332.523-3.218 1.031c-.114.067-.114.09-.219.157v-.782c.219-.144.422-.297.719-.468c.824-.481 1.879-.938 2.718-.938z"></svg:path>`,
})
export class LaBaconIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBalanceScaleIcon],svg[la-balance-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-1.293 0-2.395.844-2.813 2H6v2h1.406l-.281.5l-4 7l-.125.25V17c0 2.75 2.25 5 5 5s5-2.25 5-5v-.25l-.125-.25l-4-7l-.281-.5h4.594A3.02 3.02 0 0 0 15 10.813V24h-4v2h10v-2h-4V10.812A3.04 3.04 0 0 0 18.813 9h4.593l-.281.5l-4 7l-.125.25V17c0 2.75 2.25 5 5 5s5-2.25 5-5v-.25l-.125-.25l-4-7l-.281-.5H26V7h-7.188C18.395 5.844 17.294 5 16 5m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m-8 5.031L10.281 16H5.72zm16 0L26.281 16H21.72zM5.25 18h5.5c-.402 1.16-1.445 2-2.75 2s-2.348-.84-2.75-2m16 0h5.5c-.402 1.16-1.445 2-2.75 2s-2.348-.84-2.75-2"></svg:path>`,
})
export class LaBalanceScaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBalanceScaleLeftIcon],svg[la-balance-scale-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.523 5.11l-5.242 1.966A2.98 2.98 0 0 0 16 6c-1.654 0-3 1.346-3 3c0 .021.005.041.006.063L8 11l-5 8.75v.266C3 22.772 5.243 25 8 25s5-2.228 5-4.984v-.266l-3.99-6.984l4.715-1.834c.338.398.773.705 1.275.884V26h6v-2h-4V11.816A3 3 0 0 0 19 9c0-.019-.006-.036-.006-.055l4.217-1.582L19 14.734V15c0 2.757 2.243 5 5 5s5-2.243 5-5v-.266l-4.49-7.857l-.987-1.768zM16 8a1.001 1.001 0 0 1 0 2a1.001 1.001 0 0 1 0-2m8 2.016L26.277 14h-4.554zM8 15.03L10.268 19H5.732L8 15.031zm13.186.97h5.628A2.99 2.99 0 0 1 24 18c-1.302 0-2.4-.838-2.814-2M5.18 21h5.64A3 3 0 0 1 8 23.016A3 3 0 0 1 5.18 21"></svg:path>`,
})
export class LaBalanceScaleLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBalanceScaleRightIcon],svg[la-balance-scale-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.477 5.11L7.49 6.876L3 14.734V15c0 2.757 2.243 5 5 5s5-2.243 5-5v-.266l-4.21-7.37l4.216 1.581c0 .019-.006.036-.006.055c0 1.302.839 2.402 2 2.816V24h-4v2h6V11.816a3 3 0 0 0 1.275-.884l4.715 1.834L19 19.75v.266C19 22.772 21.243 25 24 25s5-2.228 5-4.984v-.266L24 11l-5.006-1.938c0-.02.006-.04.006-.062c0-1.654-1.346-3-3-3a2.98 2.98 0 0 0-2.281 1.076zM16 8a1.001 1.001 0 0 1 0 2a1.001 1.001 0 0 1 0-2m-8 2.016L10.277 14H5.723zm16 5.015L26.268 19h-4.536zM5.186 16h5.628A2.99 2.99 0 0 1 8 18c-1.302 0-2.4-.838-2.814-2m15.994 5h5.64A2.99 2.99 0 0 1 24 23.016A2.99 2.99 0 0 1 21.18 21"></svg:path>`,
})
export class LaBalanceScaleRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBanIcon],svg[la-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11c0 2.727-.988 5.207-2.625 7.125L9.031 7.469A10.95 10.95 0 0 1 16 5M7.625 8.875l15.344 15.656A10.95 10.95 0 0 1 16 27C9.914 27 5 22.086 5 16c0-2.727.988-5.207 2.625-7.125"></svg:path>`,
})
export class LaBanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBandAidIcon],svg[la-band-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.844 3c-.352.016-.657.094-.657.094l-.218.094l-15.782 15.78l-.093.22s-.078.304-.094.656c-.016.351.027.855.188 1.437c.316 1.164 1.117 2.711 2.968 4.563c1.852 1.851 3.399 2.652 4.563 2.968a4.8 4.8 0 0 0 1.437.188c.352-.016.656-.094.656-.094l.22-.093l15.78-15.782l.094-.219s.078-.304.094-.656a4.8 4.8 0 0 0-.188-1.437c-.316-1.164-1.117-2.711-2.968-4.563c-1.852-1.851-3.399-2.652-4.563-2.968A4.8 4.8 0 0 0 19.844 3m.093 2h.032c.156-.004.41.023.781.125c.77.21 2.027.773 3.688 2.438l.093.125c1.559 1.593 2.14 2.816 2.344 3.562c.102.371.129.625.125.781v.031L12.062 27h-.03c-.157.004-.41-.023-.782-.125c-.77-.21-2.027-.773-3.688-2.438l-.125-.156c-1.53-1.574-2.109-2.789-2.312-3.531c-.102-.371-.129-.625-.125-.781v-.032zM19 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-5.781 2.781L14.78 13.22l4 4l1.438-1.438zM22 12c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-8.781 2.781L11.78 16.22l4 4l1.438-1.438zM10 18c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 3c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaBandAidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBandcampIcon],svg[la-bandcamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-2.617 7l-4 8h9.234l4-8zm1.234 2h4.766l-2 4h-4.766z"></svg:path>`,
})
export class LaBandcampIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBarcodeIcon],svg[la-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v18h2V7zm4 0v18h6V7zm8 0v18h2V7zm4 0v18h4V7zm6 0v18h2V7zm4 0v18h2V7z"></svg:path>`,
})
export class LaBarcodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBarsIcon],svg[la-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v2h24V7zm0 8v2h24v-2zm0 8v2h24v-2z"></svg:path>`,
})
export class LaBarsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBaseballBallIcon],svg[la-baseball-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2a10.96 10.96 0 0 1 7.883 3.346a9.2 9.2 0 0 0-2.563 2.834l1.72 1.01a7.4 7.4 0 0 1 2.105-2.295A10.94 10.94 0 0 1 27 16c0 2.257-.685 4.357-1.855 6.105a7.5 7.5 0 0 1-2.135-2.335l-1.73 1a9.4 9.4 0 0 0 2.603 2.884A10.96 10.96 0 0 1 16 27a10.96 10.96 0 0 1-7.883-3.346a9.4 9.4 0 0 0 2.604-2.884l-1.73-1a7.5 7.5 0 0 1-2.136 2.335A10.94 10.94 0 0 1 5 16c0-2.257.685-4.357 1.855-6.105a7.4 7.4 0 0 1 2.106 2.294l1.719-1.01a9.2 9.2 0 0 0-2.563-2.833A10.96 10.96 0 0 1 16 5m-4.42 8.21l-1.91.59c.22.72.33 1.46.33 2.2c0 .73-.1 1.45-.31 2.15l1.91.57a9.5 9.5 0 0 0-.02-5.51m8.84 0a9.5 9.5 0 0 0-.02 5.51l1.91-.57c-.21-.7-.31-1.42-.31-2.15c0-.74.11-1.48.33-2.2z"></svg:path>`,
})
export class LaBaseballBallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBasketballBallIcon],svg[la-basketball-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m-1.125 2.063c.043-.004.082.003.125 0V15h-3.063a12.93 12.93 0 0 0-3.03-7.406a10.93 10.93 0 0 1 5.968-2.532zm2.125 0a10.9 10.9 0 0 1 6.094 2.53A12.93 12.93 0 0 0 20.062 15H17zM7.5 9.03A10.9 10.9 0 0 1 9.938 15H5.061A10.9 10.9 0 0 1 7.5 9.031zm17 0A10.9 10.9 0 0 1 26.938 15h-4.875A10.9 10.9 0 0 1 24.5 9.031zM5.062 17h4.875A10.9 10.9 0 0 1 7.5 22.969A10.9 10.9 0 0 1 5.062 17m6.875 0H15v9.938a10.9 10.9 0 0 1-6.094-2.532A12.93 12.93 0 0 0 11.937 17M17 17h3.063a12.93 12.93 0 0 0 3.03 7.406A10.9 10.9 0 0 1 17 26.938zm5.063 0h4.875a10.9 10.9 0 0 1-2.438 5.969A10.9 10.9 0 0 1 22.062 17z"></svg:path>`,
})
export class LaBasketballBallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBathIcon],svg[la-bath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4c-2.21 0-4 1.79-4 4h-2v2h6V8h-2c0-1.191.809-2 2-2s2 .809 2 2v6H1v2h1.188l1.53 7.594v.031a3.06 3.06 0 0 0 2 2.219L5 28h2l.656-2h16.688L25 28h2l-.719-2.156c1.047-.32 1.86-1.16 2.094-2.219v-.031L29.813 16H31v-2h-1V8c0-2.21-1.79-4-4-4M4.219 16h23.593l-1.406 7.219c-.117.433-.484.781-1 .781H6.688c-.536 0-.899-.355-1-.813z"></svg:path>`,
})
export class LaBathIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBatteryEmptyIcon],svg[la-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8v16h24v-5h2v-6h-2V8zm2 2h20v12H5z"></svg:path>`,
})
export class LaBatteryEmptyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBatteryFullIcon],svg[la-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8v16h24v-5h2v-6h-2V8zm2 2h20v12H5zm2 2v8h16v-8z"></svg:path>`,
})
export class LaBatteryFullIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBatteryHalfIcon],svg[la-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8v16h24v-5h2v-6h-2V8zm2 2h20v12H5zm2 2v8h8v-8z"></svg:path>`,
})
export class LaBatteryHalfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBatteryQuarterIcon],svg[la-battery-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8v16h24v-5h2v-6h-2V8zm2 2h20v12H5zm2 2v8h4v-8z"></svg:path>`,
})
export class LaBatteryQuarterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBatteryThreeQuartersIcon],svg[la-battery-three-quarters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8v16h24v-5h2v-6h-2V8zm2 2h20v12H5zm2 2v8h14v-8z"></svg:path>`,
})
export class LaBatteryThreeQuartersIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBattleNetIcon],svg[la-battle-net-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.578 14.34s2.305.117 2.305-1.238c0-1.77-3.07-3.364-3.07-3.364s.48-1.02.78-1.59c.302-.57 1.145-2.789 1.22-3.296c.093-.641-.051-.84-.051-.84c-.207 1.367-2.434 5.304-2.614 5.437c-2.171-1.015-5.156-1.3-5.156-1.3S17.07 2 14.32 2c-2.726 0-2.71 5.266-2.71 5.266s-.77-1.493-1.739-1.493c-1.414 0-1.879 2.133-1.879 4.45c-2.789 0-5.137.625-5.347.683c-.208.059-.868.54-.57.48c.612-.195 3.48-.64 5.988-.421c.14 2.2 1.425 5.066 1.425 5.066s-2.758 3.992-2.758 6.84c0 .75.329 2.121 2.305 2.121c1.66 0 3.524-.996 3.871-1.195c-.304.433-.531 1.265-.531 1.648c0 .313.188 1.2 1.465 1.2c1.64 0 3.476-1.258 3.476-1.258s1.735 2.875 3.215 4.191c.399.356.782.422.782.422s-1.473-1.414-3.41-5.063c1.8-1.109 3.675-3.734 3.675-3.734s.223.008 1.934.008c2.68 0 6.484-.563 6.484-2.691c.004-2.196-3.418-4.18-3.418-4.18m.297-1.324c0 .777-.738.77-.738.77l-.563.034s-1.066-.558-1.715-.824c0 0 1.004-1.543 1.239-1.973c.175.106 1.777 1.106 1.777 1.993M15.66 5.098c1.262 0 3.059 2.968 3.059 2.968s-2.805-.25-5.114 1.106c.063-2.137.782-4.074 2.055-4.074m-4.988 2.406c.398 0 .789.488.953.898c0 .274.14 1.868.14 1.868l-2.312-.09c0-2.082.817-2.676 1.219-2.676m-.242 14.473c-1.266 0-1.524-.704-1.524-1.336c0-1.434 1.145-3.442 1.145-3.442s1.285 2.7 3.523 3.836c-1.11.652-2.027.942-3.144.942m4.105 2.824c-.887 0-.996-.574-.996-.707c0-.41.324-.899.324-.899s1.489-1.004 1.582-1.113l1.102 2.055s-1.125.664-2.012.664m2.766-1.117c-.54-.942-.938-1.926-.938-1.926s2.215.14 3.407-1.086c-.743.332-1.926.754-3.301.625c2.875-2.531 4.554-4.367 5.972-6.262c-.12-.148-.77-.601-.93-.676c-.855 1.032-4.187 4.59-7.273 6.352c-3.906-2.129-4.726-8.39-4.808-9.691l2.133.203s-.801 1.422-.801 2.468c0 1.043.125 1.098.125 1.098s-.028-1.82 1.097-3.226c.86 4.562 1.754 6.898 2.45 8.292c.355-.148 1.015-.44 1.015-.44s-1.969-5.677-1.86-9.517c.895-.476 2.22-.968 3.712-.968c3.93 0 7.09 1.687 7.09 1.687l-1.235 1.727s-1.101-1.992-2.66-2.348c.82.61 1.742 1.418 2.219 2.578c-3.258-1.27-7.188-1.941-8.45-2.09c-.109.465-.093 1.13-.093 1.13s5.27.972 9.105 3.163c-.027 4.797-5.254 8.48-5.976 8.907m4.992-3.586s1.637-2.145 1.61-4.989c0 0 2.644 1.637 2.644 3.235c0 1.781-4.254 1.754-4.254 1.754"></svg:path>`,
})
export class LaBattleNetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBedIcon],svg[la-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6C4.355 6 3 7.355 3 9v6.781c-.61.551-1 1.34-1 2.219v9h5v-2h18v2h5v-9c0-.879-.39-1.668-1-2.219V9c0-1.645-1.355-3-3-3zm0 2h20c.555 0 1 .445 1 1v6h-2v-1c0-1.645-1.355-3-3-3h-4c-.766 0-1.469.3-2 .781A2.98 2.98 0 0 0 14 11h-4c-1.645 0-3 1.355-3 3v1H5V9c0-.555.445-1 1-1m4 5h4c.555 0 1 .445 1 1v1H9v-1c0-.555.445-1 1-1m8 0h4c.555 0 1 .445 1 1v1h-6v-1c0-.555.445-1 1-1M5 17h22c.555 0 1 .445 1 1v7h-1v-2H5v2H4v-7c0-.555.445-1 1-1"></svg:path>`,
})
export class LaBedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBeerIcon],svg[la-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 4c-1.246 0-2.309.582-3.125 1.406C9.93 5.234 9.508 5 9 5C6.8 5 5 6.8 5 9c0 1.027.418 1.945 1.063 2.656A1 1 0 0 0 6 12v13c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3v-2h1c1.645 0 3-1.355 3-3v-4c0-1.645-1.355-3-3-3h-1v-1.188a1 1 0 0 0 0-.218c.61-.703 1-1.598 1-2.594c0-2.2-1.8-4-4-4c-.746 0-1.406.266-2 .625c-.594-.36-1.254-.625-2-.625c-.258 0-.46.078-.688.125C15.536 4.473 14.595 4 13.5 4m0 2c.734 0 1.379.332 1.844.844l.437.468l.625-.187C16.63 7.051 16.81 7 17 7c.512 0 .98.203 1.344.531l.656.594l.656-.594A2 2 0 0 1 21 7c1.117 0 2 .883 2 2s-.883 2-2 2c-1.11 0-2.719-.469-2.719-.469L17 10.156V11.5c0 1.402.3 2.473.563 3.281c.261.809.437 1.324.437 1.719c0 .84-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5c0-.395.176-.941.438-1.75c.261-.809.562-1.855.562-3.25V9.719l-1.5.937s-.18.09-.406.188A2.1 2.1 0 0 1 13.5 11a2.5 2.5 0 0 1-1.688-.656l-.718-.656l-.656.687A1.991 1.991 0 0 1 7 9c0-1.117.883-2 2-2c.406 0 .773.137 1.094.344l.812.5l.563-.782A2.46 2.46 0 0 1 13.5 6m-2.313 6.25c.684.426 1.45.75 2.313.75c.105 0 .152-.05.25-.063c-.082.387-.078.883-.188 1.22c-.238.734-.562 1.437-.562 2.343c0 1.922 1.578 3.5 3.5 3.5s3.5-1.578 3.5-3.5c0-.906-.324-1.613-.563-2.344c-.128-.398-.164-.96-.25-1.437c.641.148.93.281 1.813.281c.344 0 .68-.074 1-.156v.844a1 1 0 0 0 0 .593v7.531a1 1 0 0 0 0 .407V25c0 .566-.434 1-1 1H9c-.566 0-1-.434-1-1V12.844c.32.082.656.156 1 .156c.824 0 1.55-.32 2.188-.75zM24 15h1c.566 0 1 .434 1 1v4c0 .566-.434 1-1 1h-1z"></svg:path>`,
})
export class LaBeerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBehanceIcon],svg[la-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6.75v18.5h8.938c.828 0 6.53-.168 6.53-5.375c0-3.254-2.238-4.36-3.374-4.688c.836-.394 2.5-1.332 2.5-3.843c0-1.399-.2-4.594-5.906-4.594zm20.375 1.719v1.687h6.906V8.47zM5.062 9.906h3.813c.36 0 2.781-.191 2.781 2.125c0 1.98-1.75 2.188-2.469 2.188H5.064zM25 11.687c-5.223 0-6.313 4.536-6.313 6.5c0 5.833 4.782 6.5 6.313 6.5c4.129 0 5.3-2.671 5.781-4.156h-3c-.117.383-.992 1.625-2.656 1.625c-2.79 0-3.031-2.18-3.031-3.156h8.875c.18-3.375-1.297-7.313-5.969-7.313m-.094 2.532c.832 0 1.504.242 1.907.687c.402.45.699 1.106.78 1.969h-5.5c.016-.238.071-.512.157-.813c.086-.308.219-.601.438-.875c.218-.269.523-.503.875-.687q.537-.281 1.343-.281M5.063 17h4.406c.875 0 2.937.137 2.937 2.656c0 2.442-2.597 2.438-3 2.438H5.062z"></svg:path>`,
})
export class LaBehanceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBehanceSquareIcon],svg[la-behance-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm2 4.37v8.61h4.18c1.56-.01 3.03-.76 3.03-2.51c0-1.09-.52-2.01-1.57-2.31c.77-.38 1.17-.8 1.17-1.66c0-1.72-1.27-2.13-2.75-2.13zm9.14.63v.85h3.48V12zm-7.24.69h1.78c.67 0 1.29.19 1.29.98c0 .73-.48 1.03-1.16 1.03H10.9zm9.06.74c-1.89 0-3.18 1.41-3.18 3.29c0 1.94 1.21 3.28 3.18 3.28c1.49 0 2.46-.67 2.92-2.1h-1.51c-.17.53-.83.81-1.35.81c-1.01 0-1.53-.59-1.53-1.58h4.49c.01-.1.02-.22.02-.33c0-1.84-1.09-3.37-3.04-3.37m-.06 1.28c.87 0 1.3.51 1.37 1.34h-2.78c.05-.82.59-1.34 1.41-1.34m-9.01 1.42h2.07c.83 0 1.36.35 1.36 1.24c0 .86-.63 1.13-1.4 1.13h-2.03z"></svg:path>`,
})
export class LaBehanceSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBellIcon],svg[la-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a2 2 0 0 0-2 2c0 .086.02.168.031.25C10.574 6.133 8 9.273 8 13v9c0 .566-.434 1-1 1H6v2h7.188A3 3 0 0 0 13 26c0 1.645 1.355 3 3 3s3-1.355 3-3a3 3 0 0 0-.188-1H26v-2h-1c-.566 0-1-.434-1-1v-8.719c0-3.758-2.512-7.11-6.031-8.031c.011-.082.031-.164.031-.25a2 2 0 0 0-2-2m-.438 4c.145-.012.29 0 .438 0h.188C19.453 7.098 22 9.96 22 13.281V22c0 .352.074.684.188 1H9.813A3 3 0 0 0 10 22v-9a6.005 6.005 0 0 1 5.563-6zM16 25c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaBellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBellSlashIcon],svg[la-bell-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.719 2.281L2.28 3.72l26 26l1.438-1.438L26 24.563V23h-1c-.55 0-1-.45-1-1v-8.719c0-3.828-2.582-7.078-6.031-8C17.98 5.188 18 5.098 18 5a1.999 1.999 0 1 0-4 0c0 .086.02.168.031.25a7.94 7.94 0 0 0-3.594 2c-.3.29-.566.613-.812.938zM15.563 7a6 6 0 0 1 .624 0C19.395 7.098 22 9.91 22 13.281v7.281L11.062 9.626c.223-.328.458-.656.75-.938c1.028-1 2.34-1.59 3.75-1.687zM8.03 12.25A8 8 0 0 0 8 13v9c0 .55-.45 1-1 1H6v2h7.188A3 3 0 0 0 13 26c0 1.645 1.355 3 3 3s3-1.355 3-3a3 3 0 0 0-.188-1h2l-2-2h-9c.114-.313.188-.648.188-1v-7.813zM16 25c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaBellSlashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBellSlashSolidIcon],svg[la-bell-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.719 2.281L2.28 3.72l26 26l1.438-1.438L26 24.563V23h-1c-.55 0-1-.45-1-1v-8.719c0-3.828-2.582-7.078-6.031-8C17.98 5.188 18 5.098 18 5a1.999 1.999 0 1 0-4 0c0 .086.02.168.031.25a7.94 7.94 0 0 0-3.594 2c-.3.29-.566.613-.812.938zM15.563 7a6 6 0 0 1 .624 0C19.395 7.098 22 9.91 22 13.281v7.281L11.062 9.626c.223-.328.458-.656.75-.938c1.028-1 2.34-1.59 3.75-1.687zM8.03 12.25A8 8 0 0 0 8 13v9c0 .55-.45 1-1 1H6v2h7.188A3 3 0 0 0 13 26c0 1.645 1.355 3 3 3s3-1.355 3-3a3 3 0 0 0-.188-1h2l-2-2h-9c.114-.313.188-.648.188-1v-7.813zM16 25c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaBellSlashSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBellSolidIcon],svg[la-bell-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a2 2 0 0 0-2 2c0 .086.02.168.031.25C10.574 6.133 8 9.273 8 13v9c0 .566-.434 1-1 1H6v2h7.188A3 3 0 0 0 13 26c0 1.645 1.355 3 3 3s3-1.355 3-3a3 3 0 0 0-.188-1H26v-2h-1c-.566 0-1-.434-1-1v-8.719c0-3.758-2.512-7.11-6.031-8.031c.011-.082.031-.164.031-.25a2 2 0 0 0-2-2m-.438 4c.145-.012.29 0 .438 0h.188C19.453 7.098 22 9.96 22 13.281V22c0 .352.074.684.188 1H9.813A3 3 0 0 0 10 22v-9a6.005 6.005 0 0 1 5.563-6zM16 25c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaBellSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBezierCurveIcon],svg[la-bezier-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6v3H5.812C5.396 7.844 4.293 7 3 7c-1.645 0-3 1.355-3 3s1.355 3 3 3c1.293 0 2.395-.844 2.813-2h2.312c-.41.39-.766.816-1.094 1.281c-1.156 1.637-1.836 3.656-2 5.719H2v8h8v-8H7.062c.165-1.672.711-3.313 1.594-4.563c.86-1.218 1.965-2.07 3.344-2.343V14h8v-2.906c1.379.273 2.484 1.125 3.344 2.344c.883 1.25 1.43 2.89 1.593 4.562H22v8h8v-8h-3.031c-.164-2.063-.844-4.082-2-5.719A8.6 8.6 0 0 0 23.875 11h2.313c.417 1.156 1.519 2 2.812 2c1.645 0 3-1.355 3-3s-1.355-3-3-3c-1.293 0-2.395.844-2.813 2H20V6zm2 2h4v4h-4zM3 9c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m26 0c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1M4 20h4v4H4zm20 0h4v4h-4z"></svg:path>`,
})
export class LaBezierCurveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBibleIcon],svg[la-bible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4C7.355 4 6 5.355 6 7v18c0 1.645 1.355 3 3 3h17V4zm0 2h15v16H9a3 3 0 0 0-1 .188V7c0-.566.434-1 1-1m6 2v3h-3v2h3v7h2v-7h3v-2h-3V8zM9 24h15v2H9c-.566 0-1-.434-1-1s.434-1 1-1"></svg:path>`,
})
export class LaBibleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBicycleIcon],svg[la-bicycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6v1.438l.094.187L20.125 10h-8.688l-.312.438l-2.719 3.843A6.4 6.4 0 0 0 6.5 14A6.51 6.51 0 0 0 0 20.5C0 24.086 2.914 27 6.5 27c3.414 0 6.207-2.652 6.469-6h3.437l.313-.438l4.875-7.187l.656 1.5A6.52 6.52 0 0 0 19 20.5c0 3.57 2.93 6.5 6.5 6.5s6.5-2.93 6.5-6.5s-2.93-6.5-6.5-6.5c-.48 0-.953.055-1.406.156L21.406 8H24.5c.285 0 .5.215.5.5a.49.49 0 0 1-.5.5v2c1.367 0 2.5-1.133 2.5-2.5S25.867 6 24.5 6zM8 7v2h6l-1-2zm5.469 5h6.656l-4.031 5.938zm-1.75 1l2.625 6H6v2h4.938c-.254 2.242-2.13 4-4.438 4C4.02 25 2 22.98 2 20.5S4.02 16 6.5 16a4.52 4.52 0 0 1 3.75 2h2.25a6.5 6.5 0 0 0-2.281-2.844zM25.5 16c2.48 0 4.5 2.02 4.5 4.5S27.98 25 25.5 25S21 22.98 21 20.5c0-1.574.832-2.945 2.063-3.75l2.03 4.656l1.813-.812l-1.968-4.532c.187-.023.37-.062.562-.062"></svg:path>`,
})
export class LaBicycleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBikingIcon],svg[la-biking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 5A3.514 3.514 0 0 0 16 8.5c0 1.922 1.578 3.5 3.5 3.5S23 10.422 23 8.5S21.422 5 19.5 5m0 2c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5S18 9.34 18 8.5S18.66 7 19.5 7m-4.406 3.531c-.508.051-1 .301-1.344.719l-2.344 2.844c-.808.984-.457 2.539.688 3.094l3.437 1.687l-.906 5l1.969.344l1.062-5.75l.125-.75l-.687-.344l-4.157-2l2.376-2.875l4.062 3.281l.281.219H25v-2h-4.656l-3.782-3.031a2.04 2.04 0 0 0-1.468-.438M8.5 18C6.031 18 4 20.031 4 22.5S6.031 27 8.5 27s4.5-2.031 4.5-4.5S10.969 18 8.5 18m15 0c-2.469 0-4.5 2.031-4.5 4.5s2.031 4.5 4.5 4.5s4.5-2.031 4.5-4.5s-2.031-4.5-4.5-4.5m-15 2c1.379 0 2.5 1.121 2.5 2.5S9.879 25 8.5 25A2.5 2.5 0 0 1 6 22.5C6 21.121 7.121 20 8.5 20m15 0c1.379 0 2.5 1.121 2.5 2.5S24.879 25 23.5 25a2.5 2.5 0 0 1-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5"></svg:path>`,
})
export class LaBikingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBimobjectIcon],svg[la-bimobject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm3 3v10.813h2.984v-1.62h.043C13.402 20.3 14.25 21 16.305 21h.793c4.3 0 4.832-1.546 4.832-3.852v-1.627c0-2.307-.533-3.841-4.844-3.841h-.805c-1.398 0-3.037.385-3.246 1.804h-.05V10zm5.05 4.238h2.235c1.628-.01 1.785.553 1.785 1.565v1.064c0 1.012-.157 1.576-1.785 1.576h-2.234c-1.346 0-2.057-.304-2.057-1.66v-.887c0-1.367.71-1.658 2.057-1.658z"></svg:path>`,
})
export class LaBimobjectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBinocularsIcon],svg[la-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5C9.031 5 7.46 6.441 7.125 8.313c-1.89.476-3.531 1.707-4.25 3.656h-.031L.719 17.938A6.96 6.96 0 0 0 0 21c0 3.855 3.145 7 7 7c3.473 0 6.367-2.55 6.906-5.875A2.98 2.98 0 0 0 16 23c.813 0 1.55-.34 2.094-.875C18.633 25.449 21.527 28 25 28c3.855 0 7-3.145 7-7c0-.973-.2-1.906-.563-2.75l-2.28-6.375l-.032-.031v-.031c-.73-1.774-2.348-3.012-4.25-3.5C24.539 6.44 22.969 5 21 5c-1.855 0-3.363 1.285-3.813 3h-2.375C14.364 6.285 12.855 5 11 5m0 2c1.191 0 2 .809 2 2v1h6V9c0-1.191.809-2 2-2s2 .809 2 2v.906l.906.094c1.485.156 2.766 1.191 3.344 2.531c.008.02.023.043.031.063l.75 2.125A6.94 6.94 0 0 0 25 14c-2.926 0-5.426 1.816-6.469 4.375A3.01 3.01 0 0 0 16 17c-1.05 0-1.996.543-2.531 1.375C12.426 15.816 9.926 14 7 14c-1.07 0-2.09.254-3 .688l.75-2.032v-.031C5.332 11.078 6.559 10.16 8.094 10L9 9.906V9c0-1.191.809-2 2-2m-4 9c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5c0-.707.176-1.36.438-1.969c.015-.039.015-.086.03-.125A4.98 4.98 0 0 1 7 16m18 0c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5m-9 3c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaBinocularsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBiohazardIcon],svg[la-biohazard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.594 4.406C10.894 5.305 9 7.7 9 10.5c0 1 .29 2.008.688 2.906c-1 0-1.977.281-2.876.781c-2.398 1.399-3.601 4.227-3 7.126l2-.407c-.398-2 .399-4 2-5c2.102-1.199 4.977-.304 6.375 2.094c.7 1.2.926 2.512.626 3.813c-.301 1.199-1 2.18-2 2.78c-1.602.9-3.813.618-5.313-.78l-1.313 1.5c1.301 1.199 3.024 1.78 4.625 1.78c1.102 0 2.094-.28 3.094-.78c.899-.5 1.594-1.227 2.094-2.125c.5.898 1.195 1.625 2.094 2.125s1.992.78 3.093.78c1.602 0 3.325-.581 4.625-1.78l-1.312-1.5c-1.5 1.398-3.71 1.68-5.313.78c-1-.6-1.699-1.581-2-2.78c-.3-1.301-.074-2.614.625-3.813c1.399-2.398 4.176-3.293 6.375-2.094c1.602.899 2.399 2.899 2 5l2 .407c.5-2.899-.695-5.727-3.093-7.125c-.899-.5-1.907-.782-2.907-.782c.5-.898.72-1.804.72-2.906c0-2.8-1.919-5.195-4.72-6.094l-.593 1.907c2 .601 3.312 2.289 3.312 4.187c0 2.5-2.199 4.5-5 4.5c-2.8 0-5-2-5-4.5c0-1.898 1.281-3.586 3.281-4.188zM16 10c-1.102 0-2.102.188-3 .688c.102.699.398 1.32 1 1.718c.602-.3 1.305-.406 1.906-.406c.602 0 1.305.105 1.906.406c.602-.398 1-1.02 1-1.719c-.699-.5-1.71-.687-2.812-.687m0 6c.602 0 1 .398 1 1s-.398 1-1 1s-1-.398-1-1s.398-1 1-1m-6.031 1.313A1.9 1.9 0 0 0 9 17.5a7.17 7.17 0 0 0 3 5.188c.5-.301.805-.774.906-1.375v-.407c-1-.8-1.707-1.914-1.906-3.312c-.352-.149-.695-.258-1.031-.282zm12.125.093c-.399 0-.793.082-1.094.282A5.03 5.03 0 0 1 19 21v.406c.102.602.508 1.106.906 1.407c1.801-1.2 2.895-3.118 3.094-5.22c-.3-.1-.605-.187-.906-.187"></svg:path>`,
})
export class LaBiohazardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBirthdayCakeIcon],svg[la-birthday-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 1.25l-.813 1.188s-.539.753-1.062 1.656c-.262.453-.508.926-.719 1.406S13 6.422 13 7c0 1.645 1.355 3 3 3s3-1.355 3-3c0-.578-.195-1.02-.406-1.5s-.457-.953-.719-1.406c-.523-.903-1.063-1.657-1.063-1.657zM16 10h-3v4H7c-2.21 0-4 1.79-4 4a4 4 0 0 0 1 2.656V28h24v-7.344A4 4 0 0 0 29 18c0-2.21-1.79-4-4-4h-6v-4zm0-5.125c.066.11.059.102.125.219c.238.41.492.847.656 1.218c.164.372.219.715.219.688c0 .555-.445 1-1 1s-1-.445-1-1c0 .027.055-.316.219-.688c.164-.37.418-.808.656-1.218c.066-.117.059-.11.125-.219M15 12h2v2h-2zm-8 4h18c1.191 0 2 .809 2 2s-.809 2-2 2s-2-.809-2-2h-2c0 1.191-.809 2-2 2s-2-.809-2-2h-2c0 1.191-.809 2-2 2s-2-.809-2-2H9c0 1.191-.809 2-2 2s-2-.809-2-2s.809-2 2-2m3 4.656A4 4 0 0 0 13 22a4 4 0 0 0 3-1.344A4 4 0 0 0 19 22a4 4 0 0 0 3-1.344A4 4 0 0 0 25 22c.348 0 .68-.074 1-.156V26H6v-4.156c.32.082.652.156 1 .156a4 4 0 0 0 3-1.344"></svg:path>`,
})
export class LaBirthdayCakeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBitbucketIcon],svg[la-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-2.293 0-4.594.297-6.406.781c-.906.242-1.68.496-2.313.875C6.648 7.036 6 7.602 6 8.5c0 .223.055.441.125.625c.148.762 2.652 13.8 2.906 15.063c.121.601.504 1.046.938 1.375s.93.574 1.531.78c1.203.415 2.75.657 4.5.657s3.29-.242 4.5-.656c.605-.207 1.125-.446 1.563-.782c.437-.335.847-.777.937-1.406c.02-.14.21-1.343.5-2.843s.664-3.38 1.031-5.25c.688-3.52 1.266-6.543 1.344-6.938A1.8 1.8 0 0 0 26 8.5c0-.898-.648-1.465-1.281-1.844s-1.407-.633-2.313-.875C20.594 5.297 18.293 5 16 5m0 2c2.125 0 4.32.266 5.906.688c.793.21 1.414.468 1.782.687c.101.063.109.086.156.125c-.047.04-.055.063-.157.125c-.367.219-.988.477-1.78.688C20.32 9.733 18.124 10 16 10s-4.32-.266-5.906-.688c-.793-.21-1.414-.468-1.781-.687c-.102-.063-.11-.086-.157-.125c.047-.04.055-.063.156-.125c.368-.219.989-.477 1.782-.688C11.68 7.266 13.875 7 16 7m-7.531 3.875c.355.125.719.234 1.125.344c1.812.484 4.113.781 6.406.781s4.594-.297 6.406-.781c.407-.11.77-.219 1.125-.344c-.277 1.36-.492 2.344-.968 4.781c-.235 1.196-.418 2.266-.625 3.375c-.012.016-.024.004-.125.125a3.6 3.6 0 0 1-.813.719C20.172 20.41 18.676 21 16 21s-4.2-.594-5.031-1.125a3.3 3.3 0 0 1-.781-.688L10.03 19c-.68-3.508-1.16-6.04-1.562-8.125zM16 13c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m-5.406 6.906C11.797 22.504 13.512 23 16 23c2.457 0 4.176-.465 5.375-1.063c-.152.758-.34 1.657-.375 1.907c-.02.027-.074.062-.156.125c-.184.14-.508.343-.969.5c-.922.312-2.309.531-3.875.531s-2.93-.215-3.844-.531c-.457-.157-.808-.352-1-.5s-.199-.219-.187-.157c-.031-.148-.278-1.414-.375-1.906"></svg:path>`,
})
export class LaBitbucketIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBitcoinIcon],svg[la-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v3H8v20h4v3h2v-3h2v3h2v-3h1.5c3.027 0 5.5-2.473 5.5-5.5c0-2.082-1.16-3.91-2.875-4.844A5.513 5.513 0 0 0 18.5 6H18V3h-2v3h-2V3zm-2 5h8.5c1.945 0 3.5 1.555 3.5 3.5S20.445 15 18.5 15H10zm0 9h9.5c1.945 0 3.5 1.555 3.5 3.5S21.445 24 19.5 24H10z"></svg:path>`,
})
export class LaBitcoinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBityIcon],svg[la-bity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a14.5 14.5 0 0 0-9.664 3.688a.998.998 0 1 0 1.328 1.492a12.52 12.52 0 0 1 16.672 0a.996.996 0 0 0 1.41-.08a1 1 0 0 0-.082-1.412A14.5 14.5 0 0 0 16 3m-5 7a1 1 0 0 0-1 1v3.5c0 2.523 2.636 4.5 6 4.5s6-1.977 6-4.5V11a1 1 0 0 0-2 0v3.5c0 1.355-1.832 2.5-4 2.5s-4-1.145-4-2.5V11a1 1 0 0 0-1-1m-6.674 3.014a1 1 0 0 0-1.146.826c-.12.726-.18 1.472-.18 2.217c0 6.084 4.007 11.393 9.744 12.91a1 1 0 0 0 .512-1.934C8.395 25.747 5 21.235 5 16.057c0-.637.051-1.275.152-1.895a1 1 0 0 0-.826-1.148m23.346 0a1 1 0 0 0-.824 1.148c.102.62.152 1.258.152 1.895c0 5.177-3.396 9.69-8.256 10.974a1.002 1.002 0 0 0 .512 1.936C24.993 27.45 29 22.14 29 16.057c0-.745-.06-1.491-.18-2.217a1 1 0 0 0-1.148-.826M16 20a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1"></svg:path>`,
})
export class LaBityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBlackTieIcon],svg[la-black-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm5 2l2.813 3.625L12 20.375L16 24l4-3.625l-2.813-7.75L20 9z"></svg:path>`,
})
export class LaBlackTieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBlackberryIcon],svg[la-blackberry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-6.281 6l-.594 2.688h2.156c1.672 0 2.156-.766 2.156-1.5c0-.52-.32-1.188-1.656-1.188zm5.531 0l-.594 2.688h2.156c1.672 0 2.157-.766 2.157-1.5c0-.52-.324-1.188-1.657-1.188zm5.063 2.406l-.594 2.719h2.125c1.672 0 2.156-.793 2.156-1.531c0-.52-.324-1.188-1.656-1.188zM8.969 15.062l-.563 2.72h2.125c1.672 0 2.156-.798 2.156-1.532c0-.52-.32-1.188-1.656-1.188zm5.531 0l-.563 2.72h2.126c1.671 0 2.156-.798 2.156-1.532c0-.52-.324-1.188-1.657-1.188zm5 2.594l-.594 2.688h2.157c1.671 0 2.125-.797 2.125-1.532c0-.519-.293-1.156-1.625-1.156zm-5.781 1.657L13.125 22h2.156c1.672 0 2.125-.797 2.125-1.531c0-.52-.293-1.157-1.625-1.157z"></svg:path>`,
})
export class LaBlackberryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBlenderIcon],svg[la-blender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5C6.346 5 5 6.346 5 8v5c0 1.654 1.346 3 3 3h3.242l.627 5.014A2.997 2.997 0 0 0 9 24v3h17v-3c0-1.568-1.214-2.844-2.748-2.975L26.957 5zm0 2h2.117l.875 7H8c-.551 0-1-.449-1-1V8c0-.551.449-1 1-1m4.133 0H24.44l-.462 2H19v2h4.518l-.463 2H19v2h3.592l-.463 2H19v2h2.668l-.463 2h-7.322zM12 23h11c.551 0 1 .449 1 1v1H11v-1c0-.551.449-1 1-1"></svg:path>`,
})
export class LaBlenderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBlenderPhoneIcon],svg[la-blender-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.578 5a.98.98 0 0 0-.816.479A12.9 12.9 0 0 0 4 12c0 2.378.644 4.607 1.76 6.521a.995.995 0 0 0 1.146.436l1.944-.58a.52.52 0 0 0 .123-.525l-.8-2.424a.51.51 0 0 0-.482-.352h-.826a.51.51 0 0 1-.496-.379A10.7 10.7 0 0 1 6.03 12c0-.929.116-1.835.34-2.697a.51.51 0 0 1 .496-.38h.828a.51.51 0 0 0 .483-.349l.799-2.426a.52.52 0 0 0-.123-.525l-1.944-.58A1 1 0 0 0 6.578 5m3.418 0l1.881 16.012A3 3 0 0 0 9 24v3h17v-3c0-1.568-1.214-2.844-2.748-2.975L26.957 5zm2.25 2h12.195l-.462 2H19v2h4.518l-.463 2H19v2h3.592l-.463 2H19v2h2.668l-.463 2h-7.314zM12 23h11c.551 0 1 .449 1 1v1H11v-1c0-.551.449-1 1-1"></svg:path>`,
})
export class LaBlenderPhoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBlindIcon],svg[la-blind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3A3.514 3.514 0 0 0 11 6.5c0 1.922 1.578 3.5 3.5 3.5S18 8.422 18 6.5S16.422 3 14.5 3m0 2c.84 0 1.5.66 1.5 1.5S15.34 8 14.5 8S13 7.34 13 6.5S13.66 5 14.5 5m-3.688 5.25c-.515.043-.996.29-1.343.688L7.656 13.03a2 2 0 0 0-.468.969L6.5 17.875l1.969.344l.687-3.875l1.813-2.094H11l.781.156l-1.187 5.375a1.98 1.98 0 0 0 .344 1.594L16.468 27h2.47l-6.375-8.813l1.187-5.406l.469.094l.75 2.625a2.01 2.01 0 0 0 1.219 1.313l2.968 1.125l3.875 8.75l.938-.375L20 17.374l.406-1.094l-3.5-1.343l-.781-2.626a1.98 1.98 0 0 0-1.531-1.406l-3.25-.625a2 2 0 0 0-.531-.031zm-.343 10.781l-.5 1.938L7.063 27H9.53l2.313-3.156l.125-.594z"></svg:path>`,
})
export class LaBlindIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBlogIcon],svg[la-blog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.52 4.01a.507.507 0 0 0-.52.51V6.5c0 .28.22.5.5.5v.02c6.23.24 11.24 5.25 11.48 11.48H26c0 .28.22.5.5.5h1.98c.29 0 .52-.24.51-.52c-.27-7.86-6.61-14.2-14.47-14.47m0 5a.514.514 0 0 0-.52.51v1.98c0 .28.22.5.5.5v.03c3.47.23 6.24 3 6.47 6.47H21c0 .28.22.5.5.5h1.98c.28 0 .52-.24.51-.52c-.27-5.1-4.37-9.2-9.47-9.47M5.5 10c-.28 0-.5.22-.5.5v11c0 3.58 2.92 6.5 6.5 6.5s6.5-2.92 6.5-6.5s-2.92-6.5-6.5-6.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5a2.5 2.5 0 0 1 0 5A2.5 2.5 0 0 1 9 21.5v-11c0-.28-.22-.5-.5-.5z"></svg:path>`,
})
export class LaBlogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBloggerIcon],svg[la-blogger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm8 3c-2 0-1.97.02-2.6.27c-1.17.47-2.01 1.45-2.31 2.71c-.05.23-.07.61-.08 2.78c-.02 2.71 0 3.11.17 3.65c.42 1.33 1.61 2.31 2.79 2.53c.4.07 5.29.09 5.78.02c.88-.12 1.55-.47 2.19-1.13c.47-.47.76-.98.95-1.66c.14-.47.13-3.82.07-4.06c-.05-.21-.17-.42-.33-.5c-.05-.02-.35-.05-.67-.07c-.54-.02-.6-.03-.77-.14c-.26-.15-.34-.33-.34-.78c0-.88-.37-1.71-1.1-2.45c-.52-.53-1.09-.89-1.76-1.09c-.15-.04-.8-.08-1.99-.08m-1.23 3h2.293a.77.77 0 0 1 0 1.54H13.77a.77.77 0 0 1 0-1.54m0 4.46h4.273a.77.77 0 0 1 0 1.54H13.77a.77.77 0 0 1 0-1.54"></svg:path>`,
})
export class LaBloggerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBloggerBIcon],svg[la-blogger-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7a6 6 0 0 0-6 6v7a6 6 0 0 0 6 6h7a6 6 0 0 0 6-6v-5a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1a6 6 0 0 0-6-6zm0 5h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1m0 7h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class LaBloggerBIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBluetoothIcon],svg[la-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-3.113 0-5.969.742-7.969 2.969S5 10.715 5 16s1.031 8.805 3.031 11.031S12.887 30 16 30s5.973-.742 7.969-2.969S27 21.285 27 16s-1.035-8.805-3.031-11.031S19.113 2 16 2m0 2c2.809 0 4.945.617 6.469 2.313C23.992 8.008 25 10.98 25 16s-1.008 7.992-2.531 9.688C20.945 27.383 18.809 28 16 28s-4.945-.617-6.469-2.313C8.008 23.992 7 21.02 7 16s1.008-7.992 2.531-9.688C11.055 4.617 13.191 4 16 4m-1 3v6.563l-2.281-2.282l-1.438 1.438L14.562 16l-3.28 3.281l1.437 1.438L15 18.437V25l1.594-1.188l4-3l.937-.718L17.438 16l4.093-4.094l-.937-.719l-4-3zm2 4l1.469 1.094L17 13.563zm0 7.438l1.469 1.468L17 21z"></svg:path>`,
})
export class LaBluetoothIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBluetoothBIcon],svg[la-bluetooth-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.594v9.969L9.719 9.28L8.28 10.72L13.562 16l-5.28 5.281l1.437 1.438L14 18.437v9.97l1.719-1.688l5-5l.687-.719l-.687-.719L16.437 16l4.282-4.281l.687-.719l-.687-.719l-5-5zm2 4.844L18.563 11L16 13.563zm0 10L18.563 21L16 23.563z"></svg:path>`,
})
export class LaBluetoothBIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBoldIcon],svg[la-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7c2.8 0 5 2.2 5 5c0 1.3-.5 2.398-1.3 3.3c1.902.7 3.3 2.5 3.3 4.7c0 2.8-2.2 5-5 5H7V7zm-7 8h7c1.7 0 3-1.3 3-3s-1.3-3-3-3H9zm0 8h9c1.7 0 3-1.3 3-3s-1.3-3-3-3H9zm7-18H5v22h13c3.898 0 7-3.102 7-7c0-2.102-1-4.102-2.5-5.398c.3-.801.5-1.704.5-2.602c0-3.898-3.102-7-7-7m-5 6h5c.602 0 1 .398 1 1s-.398 1-1 1h-5zm0 8h7c.602 0 1 .398 1 1s-.398 1-1 1h-7z"></svg:path>`,
})
export class LaBoldIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBoltIcon],svg[la-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6v9l4 1l-3.898 10H16v-8.031l-4-1L15.898 6zm2-2h-3.512l-.472 1.328l-3.903 10.973l-.734 2.074l2.137.535l2.484.621V28h3.469l.496-1.273l3.898-10l.825-2.118L18 13.438z"></svg:path>`,
})
export class LaBoltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBombIcon],svg[la-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.734 5.867a3.6 3.6 0 0 0-1.05.184c-2.086.695-3.305 2.27-3.97 3.46A4.3 4.3 0 0 0 17.7 9h-.398L15.7 10.598C14.4 10 13.098 9.8 11.598 10c-3.797.3-7.098 3.5-7.496 7.402C3.8 20 4.699 22.602 6.5 24.5a8.56 8.56 0 0 0 6 2.5c.398 0 .7 0 1.098-.098c3.902-.5 7-3.601 7.5-7.601c.101-1.5-.098-2.903-.598-4.102l1.5-1.5v-.398a4.3 4.3 0 0 0-.734-2.426c.441-.89 1.386-2.371 3.05-2.926c.735-.246 1.125-.105 1.356.293c.234.395.351 1.473-.567 3.309c-.718 1.344-2.902 5.07-1.335 10.824l-2.77.324L23.598 24l-2 2.8l3.101-1.702l1.203 1.703v-2.203l3.196 1.101L27 23.598l1.7-1.297h-2.2V18l-1.145 2.344c-.73-4.172.801-6.508 1.528-7.875q.006-.007.012-.02c1.082-2.164 1.25-3.937.507-5.215c-.37-.636-.96-1.046-1.625-1.242a3.4 3.4 0 0 0-1.043-.125M18.098 11c.902.2 1.703.902 1.902 1.902l-.902.899a2.13 2.13 0 0 1-1.899-1.899zm-5.5.902c1 0 1.902.196 2.703.696c.398 1.601 1.597 2.8 3.199 3.101c.5 1 .7 2.102.598 3.399c-.297 3-2.797 5.504-5.696 5.804c-2 .2-4.004-.402-5.402-1.902c-1.398-1.398-2.102-3.402-1.898-5.402c.296-2.899 2.8-5.399 5.699-5.598c.3 0 .597-.098.797-.098"></svg:path>`,
})
export class LaBombIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBoneIcon],svg[la-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4c-2.2 0-4 1.8-4 4c0 1 .453 1.832 1.063 2.531l-6.532 6.531C9.832 16.453 9 16 8 16c-2.2 0-4 1.8-4 4s1.8 4 4 4c0 2.2 1.8 4 4 4s4-1.8 4-4c0-1-.453-1.832-1.063-2.531l6.532-6.532C22.168 15.547 23 16 24 16c2.2 0 4-1.8 4-4s-1.8-4-4-4c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2c0 .172-.027.348-.094.563l-.187.593l.437.406l.282.282l.406.437l.593-.187c.215-.067.391-.094.563-.094c1.117 0 2 .883 2 2s-.883 2-2 2c-.73 0-1.332-.387-1.688-.969l-.687-1.094l-.875.907l-7.906 7.906l-.906.875l1.093.688c.582.355.969.957.969 1.687c0 1.117-.883 2-2 2s-2-.883-2-2c0-.172.027-.348.094-.563l.187-.593l-.437-.407l-.281-.28l-.407-.438l-.594.187c-.214.067-.39.094-.562.094c-1.117 0-2-.883-2-2s.883-2 2-2c.73 0 1.332.387 1.688.969l.687 1.093l.875-.906l7.906-7.906l.907-.875l-1.094-.688C18.387 9.332 18 8.73 18 8c0-1.117.883-2 2-2"></svg:path>`,
})
export class LaBoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBongIcon],svg[la-bong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4v2h8V4zm1 3v7.678C10.091 15.875 8 18.66 8 22c0 2.236.925 4.276 2.414 5.719l.291.281h10.59l.29-.281A7.96 7.96 0 0 0 24 22c0-1.453-.469-2.765-1.146-3.94l1.914-1.914l.707.708l1.414-1.415l-2.828-2.828l-1.415 1.414l.708.707l-1.721 1.721A7.9 7.9 0 0 0 19 14.678V7h-2v9.035l.715.213A6 6 0 0 1 21.65 20h-11.3a6 6 0 0 1 3.935-3.752l.715-.213V7zm-3 15h12c0 1.56-.642 2.943-1.613 4h-8.774C10.642 24.943 10 23.56 10 22"></svg:path>`,
})
export class LaBongIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBookIcon],svg[la-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4C7.355 4 6 5.355 6 7v18c0 1.645 1.355 3 3 3h17V4zm0 2h15v16H9a3 3 0 0 0-1 .188V7c0-.566.434-1 1-1m2 3v2h11V9zM9 24h15v2H9c-.566 0-1-.434-1-1s.434-1 1-1"></svg:path>`,
})
export class LaBookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBookDeadIcon],svg[la-book-dead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4C7.355 4 6 5.355 6 7v18c0 1.645 1.355 3 3 3h17V4zm0 2h15v16H9a2.9 2.9 0 0 0-1 .188V7c0-.566.434-1 1-1m7 3c-5.926 0-4.938 8-4.938 8H13v2h6v-2h1.938S21.925 9 16 9m-2 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m4 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-2 2l1 2h-2zm-7 9h15v2H9c-.566 0-1-.434-1-1s.434-1 1-1"></svg:path>`,
})
export class LaBookDeadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBookMedicalIcon],svg[la-book-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4C7.355 4 6 5.355 6 7v18c0 1.645 1.355 3 3 3h17V4zm0 2h15v16H9a3 3 0 0 0-1 .188V7c0-.566.434-1 1-1m6 4v3h-3v2h3v3h2v-3h3v-2h-3v-3zM9 24h15v2H9c-.566 0-1-.434-1-1s.434-1 1-1"></svg:path>`,
})
export class LaBookMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBookOpenIcon],svg[la-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v19h10c1.102 0 2 .898 2 2h2c0-1.102.898-2 2-2h10V6H19a4 4 0 0 0-3 1.36A4 4 0 0 0 13 6zm2 2h8c1.102 0 2 .898 2 2h2c0-1.102.898-2 2-2h8v15h-8a4 4 0 0 0-3 1.36A4 4 0 0 0 13 23H5zm10 4v2h2v-2zm0 4v2h2v-2zm0 4v2h2v-2z"></svg:path>`,
})
export class LaBookOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBookReaderIcon],svg[la-book-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-3.3 0-6 2.7-6 6c0 1.008.246 1.945.688 2.781C8.863 12.336 6.64 12 4 12H2.719l3.5 14H7c3.406 0 5.5.488 6.719.938c.61.226.996.449 1.219.593c.222.145.25.157.25.157l.28.312h1.063l.282-.313s.027-.011.25-.156a6 6 0 0 1 1.218-.593C19.5 26.488 21.594 26 25 26h.781l3.5-14H28c-2.629 0-4.848.316-6.656.75A5.9 5.9 0 0 0 22 10c0-3.3-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4M5.312 14.125c3.11.152 5.649.691 7.313 1.313c1.34.5 2 .886 2.375 1.124v8.75c-.18-.082-.344-.167-.563-.25c-1.351-.5-3.57-.921-6.656-1zm21.375 0l-2.468 9.938c-3.086.078-5.305.5-6.657 1c-.218.082-.382.167-.562.25v-8.75c.375-.243 1.031-.633 2.344-1.125c1.652-.622 4.195-1.16 7.343-1.313"></svg:path>`,
})
export class LaBookReaderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBookmarkIcon],svg[la-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5v23l1.594-1.188L16 21.25l7.406 5.563L25 28V5zm2 2h14v17l-6.406-4.813L16 18.75l-.594.438L9 24z"></svg:path>`,
})
export class LaBookmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBookmarkSolidIcon],svg[la-bookmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5v23l1.594-1.188L16 21.25l7.406 5.563L25 28V5zm2 2h14v17l-6.406-4.813L16 18.75l-.594.438L9 24z"></svg:path>`,
})
export class LaBookmarkSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBootstrapIcon],svg[la-bootstrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 3v11.99c5.93 0 7.117.08 8.227-.25c.65-.2 2.43-.84 2.43-3.09c0-1-.3-2.69-2.26-3.11v-.03h-.37c1-.45 1.63-1.3 1.63-2.55c0-.32.09-2.96-3.41-2.96zm2 2h4c1.509 0 1.656.853 1.656 1.49C18.656 15.044 17.03 15 17 15h-4zm0 5h4.76c1.86 0 1.896 1.176 1.896 1.48c0 1.56-1.611 1.52-1.806 1.52H13z"></svg:path>`,
})
export class LaBootstrapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBorderAllIcon],svg[la-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h8v8H7zm10 0h8v8h-8zM7 17h8v8H7zm10 0h8v8h-8z"></svg:path>`,
})
export class LaBorderAllIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBorderNoneIcon],svg[la-border-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v4h2V7h2V5zm6 0v2h4V5zm6 0v2h4V5zm6 0v2h2v2h2V5zm-8 4v4h2V9zM5 11v4h2v-4zm20 0v4h2v-4zM9 15v2h4v-2zm6 0v2h2v-2zm4 0v2h4v-2zM5 17v4h2v-4zm20 0v4h2v-4zm-10 2v4h2v-4zM5 23v4h4v-2H7v-2zm20 0v2h-2v2h4v-4zm-14 2v2h4v-2zm6 0v2h4v-2z"></svg:path>`,
})
export class LaBorderNoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBorderStyleIcon],svg[la-border-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h4v-2H7V7h18v2h2V5zm20 6v4h2v-4zm0 6v4h2v-4zm0 6v2h-2v2h4v-4zm-14 2v2h4v-2zm6 0v2h4v-2z"></svg:path>`,
})
export class LaBorderStyleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBowlingBallIcon],svg[la-bowling-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-1.5 4a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m-4 4a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m5 1a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaBowlingBallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBoxIcon],svg[la-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 5l-.313.406L5 9.656V27h22V9.656l-3.188-4.25L23.5 5zm1 2H15v2H8zM17 7h5.5L24 9h-7zM7 11h18v14H7zm5.813 2c-.551.05-.958.543-.907 1.094c.051.55.543.957 1.094.906h6c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496z"></svg:path>`,
})
export class LaBoxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBoxOpenIcon],svg[la-box-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4l-5 4h10zM8.5 5L5 9.656V27h22V9.656L23.5 5h-5L21 7h1.5L24 9H8l1.5-2H11l2.5-2zM7 11h18v14H7zm5.813 2c-.551.05-.958.543-.907 1.094c.051.55.543.957 1.094.906h6c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496z"></svg:path>`,
})
export class LaBoxOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBoxesIcon],svg[la-boxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4v11h12V4zm2 2h2v4l2-2l2 2V6h2v7h-8zM3 17v11h12V17zm14 0v11h12V17zM5 19h2v4l2-2l2 2v-4h2v7H5zm14 0h2v4l2-2l2 2v-4h2v7h-8z"></svg:path>`,
})
export class LaBoxesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBrailleIcon],svg[la-braille-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaBrailleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBrainIcon],svg[la-brain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4c-1.91 0-3.457 1.387-3.844 3.188C6.824 7.604 5 9.55 5 12c0 .246.027.465.063.688C4.418 13.636 4 14.753 4 16c0 1.797.895 3.309 2.156 4.406c-.09.356-.156.711-.156 1.094c0 2.473 2.027 4.5 4.5 4.5h.063c.582 1.129 1.59 2 2.937 2a3.5 3.5 0 0 0 2.5-1.063A3.5 3.5 0 0 0 18.5 28c1.348 0 2.355-.871 2.938-2h.062c2.348 0 4.273-1.828 4.469-4.125H26c0-.063-.027-.125-.031-.188c.004-.062.031-.125.031-.187c0-.371-.133-.688-.219-1.031C27.078 19.367 28 17.829 28 16c0-1.246-.418-2.363-1.063-3.313c.036-.222.063-.44.063-.687c0-2.45-1.824-4.395-4.156-4.813C22.457 5.388 20.91 4 19 4c-1.2 0-2.266.559-3 1.406C15.266 4.56 14.2 4 13 4m0 2c1.117 0 2 .883 2 2v2c0 1.668-1.332 3-3 3v2c1.133 0 2.16-.39 3-1.031V24.5c0 .84-.66 1.5-1.5 1.5a1.47 1.47 0 0 1-1.469-1.219l-.187-.968l-.969.156A2.487 2.487 0 0 1 8 21.5c0-.309.05-.598.156-.875c.008-.023.024-.04.031-.063a2.47 2.47 0 0 1 1.813-1.5l-.406-1.968A4.45 4.45 0 0 0 7 18.656A3.96 3.96 0 0 1 6 16a3.9 3.9 0 0 1 .875-2.469l.313-.375l-.094-.5A3 3 0 0 1 7 12c0-1.668 1.332-3 3-3h1V8c0-1.117.883-2 2-2m6 0c1.117 0 2 .883 2 2v1h1c1.668 0 3 1.332 3 3c0 .215-.04.422-.094.656l-.093.5l.312.375A3.9 3.9 0 0 1 26 16c0 1.2-.512 2.27-1.344 3c-.683-.605-1.554-1-2.531-1c-.945 0-1.797.336-2.469.906l1.282 1.532A1.8 1.8 0 0 1 22.125 20c.965 0 1.734.723 1.844 1.656C23.887 22.973 22.836 24 21.5 24c-.09 0-.2-.004-.375-.031l-.969-.157l-.187.97A1.47 1.47 0 0 1 18.5 26c-.84 0-1.5-.66-1.5-1.5V13.969A4.9 4.9 0 0 0 20 15v-2c-1.668 0-3-1.332-3-3V8c0-1.117.883-2 2-2"></svg:path>`,
})
export class LaBrainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBreadSliceIcon],svg[la-bread-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C8.822 4 4 8.43 4 12.568c0 1.446.775 2.624 2 3.145V24c0 2.206 1.794 4 4 4h12c2.206 0 4-1.794 4-4v-8.287c1.225-.521 2-1.699 2-3.145C28 8.43 23.178 4 16 4m0 2c6.438 0 10 3.883 10 6.568c0 .768-.433 1.295-1.156 1.409L24 14.11V24c0 1.103-.897 2-2 2H10c-1.103 0-2-.897-2-2v-9.889l-.844-.132C6.433 13.864 6 13.336 6 12.569C6 9.882 9.562 6 16 6"></svg:path>`,
})
export class LaBreadSliceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBriefcaseIcon],svg[la-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-1.863 0-3.398 1.277-3.844 3H3v20h26V6h-9.156c-.446-1.723-1.98-3-3.844-3m0 2c.809 0 1.43.387 1.75 1h-3.5c.32-.613.941-1 1.75-1M5 8h22v9H5zm11 6c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M5 19h22v5H5z"></svg:path>`,
})
export class LaBriefcaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBriefcaseMedicalIcon],svg[la-briefcase-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5c-1.094 0-2 .906-2 2v1H6c-1.645 0-3 1.355-3 3v15h26V11c0-1.645-1.355-3-3-3h-6V7c0-1.094-.906-2-2-2zm0 2h4v1h-4zm-8 3h20c.566 0 1 .434 1 1v13H5V11c0-.566.434-1 1-1m9 3v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaBriefcaseMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBroadcastTowerIcon],svg[la-broadcast-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.188 4.188c-4.297 4.183-4.282 11.125 0 15.406l1.406-1.407c-3.52-3.519-3.504-9.148 0-12.562zm17.625.093L23.405 5.72c3.524 3.523 3.524 9.039 0 12.562l1.407 1.438a10.897 10.897 0 0 0 0-15.438zM9.905 7.188c-2.586 2.585-2.586 6.82 0 9.406l1.406-1.407a4.68 4.68 0 0 1 0-6.593zm12.188.093L20.687 8.72a4.64 4.64 0 0 1 0 6.562l1.407 1.438c2.586-2.586 2.586-6.852 0-9.438zM16 10a2 2 0 0 0-2 2c0 .625.3 1.164.75 1.531L10.312 26H9v2h4v-2h-.594L16 15.969L19.594 26H19v2h4v-2h-1.313L17.25 13.531c.45-.367.75-.906.75-1.531a2 2 0 0 0-2-2"></svg:path>`,
})
export class LaBroadcastTowerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBroomIcon],svg[la-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28.281 2.281l-10 10L17 11v-.031l-.031-.031c-.64-.57-1.477-.844-2.282-.844s-1.582.3-2.187.906l-.156.125l-.5.5l-.344.281L2.375 19l-.875.719L12.281 30.5l.719-.875l7.063-9.063l.03.032l1-1h.032l.031-.032c1.14-1.285 1.149-3.257-.062-4.468l-1.375-1.375l10-10zm-13.593 9.813a1.4 1.4 0 0 1 .906.312c.011.008.02.024.031.031l4.063 4.063c.375.375.41 1.172 0 1.688c-.016.019-.016.042-.032.062l-.312.281l-5.782-5.781l.344-.344c.192-.191.473-.304.781-.312zM12.03 14.03l5.938 5.938l-5.875 7.5l-1.438-1.438l2.156-2.25l-1.437-1.375l-2.125 2.219l-1.313-1.313l3.875-3.906L10.406 18L6.5 21.875l-1.969-1.969z"></svg:path>`,
})
export class LaBroomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBrushIcon],svg[la-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 2.031l-.719.688l-5.562 5.594L12 9l-1 1l-2.281 2.313l-.563.562l.438.688s.61.937 1.094 1.968c.242.516.46 1.063.53 1.438c.036.187.04.3.032.343c-.11.086-1.426 1.13-3 2.407c-1.64 1.328-3.383 2.726-4.094 3.437a4.013 4.013 0 0 0 0 5.657c1.547 1.546 4.07 1.535 5.625 0h.031c.715-.715 2.149-2.43 3.47-4.063a653 653 0 0 0 2.437-3.031c-.004.004.043-.063.406 0c.363.062.879.25 1.375.5a16 16 0 0 1 1.906 1.156l.688.5l.593-.594L22 21l1-1l.688-.719l5.593-5.562l.688-.719l-.688-.719L19.72 2.72zm1.313 5.219c.19.016.34.09.468.219c.512.515-.234 2.52-.593 3.375c-.36.86-.247 1.531.218 2c.793.8 2.89-1.082 3.782-.188c.886.895-.727 2.797-.157 3.375l.032.032l-1.782 1.78l-8.125-8.124l1.375-1.375c.02.023.04.039.063.062c.68.684 2.074.031 2.656-.344c.688-.44 1.492-.859 2.063-.812m-7.594 3.906l8.125 8.125l-.282.282l-1.718 1.75c-.387-.266-.657-.485-1.438-.875c-.597-.297-1.246-.57-1.937-.688s-1.567-.09-2.188.531l-.031.063l-.031.031s-1.18 1.496-2.5 3.125s-2.852 3.445-3.313 3.906c-.789.79-2.023.79-2.812 0a1.967 1.967 0 0 1 0-2.812c.46-.461 2.277-1.992 3.906-3.313c1.629-1.32 3.125-2.5 3.125-2.5l.031-.031l.063-.031c.633-.63.594-1.465.469-2.125c-.126-.66-.407-1.305-.688-1.907c-.379-.812-.602-1.109-.844-1.5l1.781-1.75zm-6.469 13.5a1.093 1.093 0 1 0 0 2.188a1.093 1.093 0 1 0 0-2.188"></svg:path>`,
})
export class LaBrushIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBtcIcon],svg[la-btc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v3H8v20h4v3h2v-3h2v3h2v-3h1.5c3.027 0 5.5-2.473 5.5-5.5c0-2.082-1.16-3.91-2.875-4.844A5.513 5.513 0 0 0 18.5 6H18V3h-2v3h-2V3zm-2 5h8.5c1.945 0 3.5 1.555 3.5 3.5S20.445 15 18.5 15H10zm0 9h9.5c1.945 0 3.5 1.555 3.5 3.5S21.445 24 19.5 24H10z"></svg:path>`,
})
export class LaBtcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBufferIcon],svg[la-buffer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-.156 0-.312.03-.455.09l-12.35 5.695c-.26.12-.26.308 0 .428l12.35 5.697a1.18 1.18 0 0 0 .91 0l12.35-5.697c.26-.12.26-.308 0-.428L16.455 5.09A1.2 1.2 0 0 0 16 5m0 2.082L24.492 11L16 14.918L7.508 11zM4.84 14.447l-1.645.823c-.26.13-.26.33 0 .46l12.35 6.172a1.1 1.1 0 0 0 .91 0l12.35-6.172c.26-.13.26-.33 0-.46l-1.645-.823l-10.705 5.35a1.1 1.1 0 0 1-.91 0zm0 5l-1.645.823c-.26.13-.26.33 0 .46l12.35 6.172a1.1 1.1 0 0 0 .91 0l12.35-6.172c.26-.13.26-.33 0-.46l-1.645-.823l-10.705 5.35a1.1 1.1 0 0 1-.91 0z"></svg:path>`,
})
export class LaBufferIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBugIcon],svg[la-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.719 3.281L9.28 4.72l1.938 1.937c-1.461 1.117-2.61 2.754-3.344 4.657l-2.438-1.22l-.875 1.813l2.75 1.375C7.13 14.156 7 15.062 7 16c0 .34.008.668.031 1H4v2h3.375c.242 1.043.563 2.04 1.031 2.938l-3 2.25l1.188 1.625l2.937-2.188C11.148 25.68 13.418 27 16 27s4.852-1.32 6.469-3.375l2.937 2.188l1.188-1.625l-3-2.25c.468-.899.789-1.895 1.031-2.938H28v-2h-3.031A14 14 0 0 0 25 16c0-.938-.129-1.844-.313-2.719l2.75-1.375l-.875-1.812l-2.437 1.219c-.734-1.903-1.883-3.54-3.344-4.657L22.72 4.72l-1.44-1.44l-2.31 2.314A7.6 7.6 0 0 0 16 5a7.6 7.6 0 0 0-2.969.594zM16 7c1.977 0 3.828 1.094 5.125 2.875C19.992 10.387 18.199 11 16 11c-2.2 0-3.992-.613-5.125-1.125C12.172 8.094 14.023 7 16 7m-6.094 4.594A14.7 14.7 0 0 0 15 12.938v11.968C11.7 24.281 9 20.63 9 16c0-1.617.336-3.113.906-4.406m12.188 0A10.9 10.9 0 0 1 23 16c0 4.629-2.7 8.281-6 8.906V12.938a14.7 14.7 0 0 0 5.094-1.344"></svg:path>`,
})
export class LaBugIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBuildingIcon],svg[la-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3v26h11v-4h2v4h11V3zm2 2h20v22h-7v-4h-6v4H6zm2 2v2h4V7zm6 0v2h4V7zm6 0v2h4V7zM8 11v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 15v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 19v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 23v2h4v-2zm12 0v2h4v-2z"></svg:path>`,
})
export class LaBuildingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBuildingSolidIcon],svg[la-building-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3v26h11v-4h2v4h11V3zm2 2h20v22h-7v-4h-6v4H6zm2 2v2h4V7zm6 0v2h4V7zm6 0v2h4V7zM8 11v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 15v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 19v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 23v2h4v-2zm12 0v2h4v-2z"></svg:path>`,
})
export class LaBuildingSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBullhornIcon],svg[la-bullhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 3.031l-1.594 1.156s-1.988 1.477-4.843 2.938C18.706 8.585 14.988 10 11.719 10H2v9.125l.031.156l2 7L4.25 27h6.063l-.344-1.281L8.344 20h3.375c3.226 0 6.945 1.441 9.812 2.906s4.875 2.907 4.875 2.907L28 26.968v-9.157c1.156-.417 2-1.519 2-2.812s-.844-2.395-2-2.813zM26 6.75v16.469c-.828-.559-1.484-1.067-3.563-2.125C19.5 19.594 15.707 18.074 12 18v-6c3.742-.074 7.54-1.625 10.469-3.125C24.543 7.812 25.179 7.309 26 6.75M4 12h6v6H4zm.344 8H6.25l1.406 5H5.75z"></svg:path>`,
})
export class LaBullhornIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBullseyeIcon],svg[la-bullseye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.828 3 3 8.828 3 16s5.828 13 13 13s13-5.828 13-13S23.172 3 16 3m0 1c6.633 0 12 5.367 12 12s-5.367 12-12 12S4 22.633 4 16S9.367 4 16 4m0 2C10.488 6 6 10.488 6 16s4.488 10 10 10s10-4.488 10-10S21.512 6 16 6m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8m0 2c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4m0 2a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaBullseyeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBurnIcon],svg[la-burn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.031 3.469l-.656.562s-2.34 1.91-4.656 4.688C8.402 11.496 6 15.16 6 19c0 2.766 1.133 5.07 2.969 6.625c1.722 1.457 4.027 2.246 6.531 2.344c.168.008.332.031.5.031s.332-.023.5-.031c2.504-.098 4.809-.887 6.531-2.344C24.867 24.07 26 21.765 26 19c0-3.457-2.414-7.059-4.719-9.938c-2.304-2.878-4.593-5-4.593-5zM15.97 6.25c.52.492 1.883 1.727 3.75 4.063C21.914 13.059 24 16.559 24 19c0 2.234-.867 3.93-2.281 5.125c-.344.29-.719.555-1.125.781c.246-.59.406-1.23.406-1.906c0-6.25-3.344-10.063-3.344-10.063l-1.812-2.03l.062 2.718s.004 1.273-.156 2.5c-.082.613-.195 1.223-.344 1.563c-.043.097-.062.109-.094.156a2.2 2.2 0 0 1-.718-.5c-.336-.344-.563-.688-.563-.688l-.969-1.5l-.75 1.625S11 19.457 11 23c0 .676.16 1.316.406 1.906a7 7 0 0 1-1.125-.781C8.867 22.93 8 21.235 8 19c0-2.957 2.098-6.379 4.281-9c1.852-2.219 3.164-3.305 3.688-3.75zm1.687 10.531C18.34 18.266 19 20.34 19 23a3 3 0 0 1-6 0c0-1.594.309-2.941.594-3.906c.449.402 1 .812 1.812.812c.477 0 .93-.218 1.219-.5c.29-.281.453-.613.594-.937c.226-.528.343-1.114.437-1.688z"></svg:path>`,
})
export class LaBurnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBuromobelexperteIcon],svg[la-buromobelexperte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v6h6V5zm8 0v6h6V5zm8 0v6h6V5zM7 7h2v2H7zm8 0h2v2h-2zm8 0h2v2h-2zM5 13v6h6v-6zm8 0v6h6v-6zm8 0v6h6v-6zM7 15h2v2H7zm8 0h2v2h-2zm8 0h2v2h-2zM5 21v6h6v-6zm8 0v6h6v-6zm8 0v6h6v-6zM7 23h2v2H7zm8 0h2v2h-2z"></svg:path>`,
})
export class LaBuromobelexperteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBusIcon],svg[la-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4C6.8 4 5 5.8 5 8v5H3v3h2v11c0 .55.45 1 1 1h3l.344-1h13.312L23 28h3c.55 0 1-.45 1-1V16h2v-3h-2V8c0-2.2-1.8-4-4-4zm0 2h14c1.117 0 2 .883 2 2H7c0-1.117.883-2 2-2m-2 4h8v7H7zm10 0h8v7h-8zM7 19h18v6H7zm1 2v2h4v-2zm12 0v2h4v-2z"></svg:path>`,
})
export class LaBusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBusAltIcon],svg[la-bus-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a3 3 0 0 0-2.816 2H9C6.8 5 5 6.8 5 9v5H3v3h2v10c0 .55.45 1 1 1h3l.34-1h13.32l.34 1h3c.55 0 1-.45 1-1V17h2v-3h-2V9c0-2.2-1.8-4-4-4h-.184A3 3 0 0 0 20 3zm0 2h8c.552 0 1 .449 1 1v1h2c1.12 0 2 .88 2 2v2H7V9c0-1.12.88-2 2-2h2V6c0-.551.448-1 1-1m1 2v2h6V7zm-6 6h8v4H7zm10 0h8v4h-8zM7 19h18v6H7zm1 2v2h4v-2zm12 0v2h4v-2z"></svg:path>`,
})
export class LaBusAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBusinessTimeIcon],svg[la-business-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3c-.52 0-1.06.18-1.44.56S12 4.48 12 5v1H3v20h11.2c-.13-.64-.2-1.31-.2-2H5v-6.56c.59.34 1.27.56 2 .56h9.01c.56-.76 1.24-1.44 2-2H7c-1.19 0-2-.81-2-2V8h22v6c0 .16-.01.31-.04.45c.72.22 1.4.52 2.04.89V6h-9V5c0-.52-.18-1.06-.56-1.44S18.52 3 18 3zm0 2h4v1h-4zm-5 7v3h2v-3zm12 0v2.46a10 10 0 0 1 2-.41V12zm3 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m0 2c3.32 0 6 2.68 6 6s-2.68 6-6 6s-6-2.68-6-6s2.68-6 6-6m-1 1v6h5v-2h-3v-4z"></svg:path>`,
})
export class LaBusinessTimeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBuyNLargeIcon],svg[la-buy-n-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4.21C7.72 4.21 1 9.49 1 16s6.72 11.79 15 11.79S31 22.51 31 16S24.28 4.21 16 4.21M8.84 8h6.51c3.15 0 4.24 1.48 3.89 3.76c-.01.08-.06.26-.1.42c-.35-.11-.72-.18-1.11-.18c-2.21 0-4 1.79-4 4c0 2.03 1.52 3.69 3.48 3.95c-.01 0-.01.01-.01.02c-.94 1.79-2.8 3-5.75 3.03c0 0-6.74.01-6.75 0zm12.51 0H26l-2.79 11H28l-1 4h-9.39l.75-3.03A3.98 3.98 0 0 0 22.03 16c0-1.41-.73-2.65-1.84-3.36zm-9.36 3l-.65 2.76h1.19c1.01 0 1.98-.79 2.18-1.69c.22-.99-.47-1.07-1.53-1.07zm4.44 2.42h1.64l.78 1.99l.5-1.99h1.68l-1.16 4.9h-1.86l-.58-1.94l-.41 1.94h-1.99zm-5.82 3.32L9.84 20h1.38c.9 0 1.79-.18 2.12-1.54c.31-1.29-.45-1.72-1.35-1.72z"></svg:path>`,
})
export class LaBuyNLargeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laBuyselladsIcon],svg[la-buysellads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.188 6l-.22.688l-5.905 18L4.625 26h7.344l.281-.219L18.125 21l1.156 4.25l.219.75h7.906l-.468-1.313l-6.063-18l-.25-.687zm1.468 2h6.531l5.438 16H21L17.062 9.469l-.187-.75h-1.719l-.219.719l-2.656 9.28L11.906 20h4.281l-4.906 4H7.375zm3.313 5.094L17.313 18h-2.75z"></svg:path>`,
})
export class LaBuyselladsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalculatorIcon],svg[la-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm2 2v6h12V7zm2 2h8v2h-8zm-1 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaCalculatorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarIcon],svg[la-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v1H5v22h22V5h-4V4h-2v1H11V4zM7 7h2v1h2V7h10v1h2V7h2v2H7zm0 4h18v14H7zm6 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 17v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 21v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaCalendarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarAltIcon],svg[la-calendar-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v1H5v22h22V5h-4V4h-2v1H11V4zM7 7h2v1h2V7h10v1h2V7h2v2H7zm0 4h18v14H7zm6 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 17v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 21v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaCalendarAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarAltSolidIcon],svg[la-calendar-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v1H5v22h22V5h-4V4h-2v1H11V4zM7 7h2v1h2V7h10v1h2V7h2v2H7zm0 4h18v14H7zm6 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 17v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 21v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaCalendarAltSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarCheckIcon],svg[la-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5zM7 8h2v1h2V8h10v1h2V8h2v2H7zm0 4h18v14H7zm13.281 2.281L15 19.562l-2.281-2.28l-1.438 1.437l3 3l.719.687l.719-.687l6-6z"></svg:path>`,
})
export class LaCalendarCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarCheckSolidIcon],svg[la-calendar-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5zM7 8h2v1h2V8h10v1h2V8h2v2H7zm0 4h18v14H7zm13.281 2.281L15 19.562l-2.281-2.28l-1.438 1.437l3 3l.719.687l.719-.687l6-6z"></svg:path>`,
})
export class LaCalendarCheckSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarDayIcon],svg[la-calendar-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v1H5v22h22V5h-4V4h-2v1H11V4zM7 7h2v1h2V7h10v1h2V7h2v2H7zm0 4h18v14H7zm6 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-5 3v4h4v-4zm-7 1v2h2v-2zm4 0v2h2v-2zm8 0v2h2v-2zM9 21v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaCalendarDayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarMinusIcon],svg[la-calendar-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5zM7 8h2v1h2V8h10v1h2V8h2v2H7zm0 4h18v14H7zm4 6v2h10v-2z"></svg:path>`,
})
export class LaCalendarMinusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarMinusSolidIcon],svg[la-calendar-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5zM7 8h2v1h2V8h10v1h2V8h2v2H7zm0 4h18v14H7zm4 6v2h10v-2z"></svg:path>`,
})
export class LaCalendarMinusSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarPlusIcon],svg[la-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5zM7 8h2v1h2V8h10v1h2V8h2v2H7zm0 4h18v14H7zm8 2v4h-4v2h4v4h2v-4h4v-2h-4v-4z"></svg:path>`,
})
export class LaCalendarPlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarPlusSolidIcon],svg[la-calendar-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5zM7 8h2v1h2V8h10v1h2V8h2v2H7zm0 4h18v14H7zm8 2v4h-4v2h4v4h2v-4h4v-2h-4v-4z"></svg:path>`,
})
export class LaCalendarPlusSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarSolidIcon],svg[la-calendar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v1H5v22h22V5h-4V4h-2v1H11V4zM7 7h2v1h2V7h10v1h2V7h2v2H7zm0 4h18v14H7zm6 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 17v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 21v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaCalendarSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarTimesIcon],svg[la-calendar-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5zM7 8h2v1h2V8h10v1h2V8h2v2H7zm0 4h18v14H7zm6.219 2.781L11.78 16.22L14.562 19l-2.78 2.781l1.437 1.438L16 20.437l2.781 2.782l1.438-1.438L17.437 19l2.782-2.781l-1.438-1.438L16 17.562z"></svg:path>`,
})
export class LaCalendarTimesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarTimesSolidIcon],svg[la-calendar-times-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5zM7 8h2v1h2V8h10v1h2V8h2v2H7zm0 4h18v14H7zm6.219 2.781L11.78 16.22L14.562 19l-2.78 2.781l1.437 1.438L16 20.437l2.781 2.782l1.438-1.438L17.437 19l2.782-2.781l-1.438-1.438L16 17.562z"></svg:path>`,
})
export class LaCalendarTimesSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCalendarWeekIcon],svg[la-calendar-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v1H5v22h22V5h-4V4h-2v1H11V4zM7 7h2v1h2V7h10v1h2V7h2v2H7zm0 4h18v14H7zm6 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 17v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 21v2h14v-2z"></svg:path>`,
})
export class LaCalendarWeekIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCameraIcon],svg[la-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 6l-.313.406L10 8H3v18h26V8h-7l-1.188-1.594L20.5 6zm1 2h7l1.188 1.594L21 10h6v14H5V10h6l.313-.406zM8 11c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m8 0c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4"></svg:path>`,
})
export class LaCameraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCameraRetroIcon],svg[la-camera-retro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 6l-.313.406L10 8H9V7H5v1H3v18h26V8h-7l-1.188-1.594L20.5 6zm1 2h7l1.188 1.594L21 10h6v4h-5.813c-1.042-1.785-2.98-3-5.187-3s-4.145 1.215-5.188 3H5v-4h6l.313-.406zM23 11v2h2v-2zm-7 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4M5 16h5.094c-.055.32-.094.664-.094 1c0 3.3 2.7 6 6 6s6-2.7 6-6c0-.336-.04-.68-.094-1H27v8H5z"></svg:path>`,
})
export class LaCameraRetroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCampgroundIcon],svg[la-campground-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.531 4.875l-.375.594S8.895 7.41 7.281 9.625c-1.613 2.215-3.648 4.723-4.843 5.563l-.5.343l.062.594l1 9l.094.875H4c1.484 0 3.215.078 4.938.188L10 26.25V18h2v8.406l.906.094c2.828.25 4.969.5 4.969.5h.156l10.938-2.188l.031-.78s.09-1.669.25-3.626s.422-4.258.688-5.093l.218-.688l-.531-.406c-3.45-2.672-6.75-8.688-6.75-8.688l-.313-.625l-.718.094s-6.426.887-10.657.031zM21.47 7.063c.41.761 2.433 4.378 5.343 7.25l-7.53 1.187c-2.466-2.367-4.977-6.11-6.345-8.281c3.872.398 7.692-.043 8.532-.157zm-10.532.812c1.313 2.113 4.067 6.262 6.97 9.031c-.657 2.676-.856 6.242-.907 8c-.668-.07-1.473-.168-3-.312V16H8v8.156a80 80 0 0 0-3.094-.125l-.843-7.687c1.613-1.313 3.34-3.469 4.843-5.532a72 72 0 0 0 2.031-2.937zm16.844 8.344c-.234 1.191-.414 2.597-.531 4c-.129 1.582-.16 2.449-.188 2.968l-8.03 1.625c.05-1.761.234-5.093.75-7.343z"></svg:path>`,
})
export class LaCampgroundIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCanadianMapleLeafIcon],svg[la-canadian-maple-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3.031l-.719.719l-2.187 2.219l-2.188.687l-.906.282l.219.906l1.187 4.812l-1.719-1.187L9 11l-2.219 2.219l-2.937 1.312l-.875.406l.344.876l1.124 2.843l-.312 2.375l-.125 1l7 .875V25h4v4h2v-4h4v-2.094l7-.875l-.125-1l-.313-2.375l1.125-2.843l.344-.876l-.875-.406l-2.937-1.312L23 11l-.688.469l-1.718 1.187l1.187-4.812l.219-.907l-.906-.28l-2.188-.688L16.72 3.75zm0 2.844l1.875 1.875l.219.063l1.531.468l-1.594 6.469l-.625 2.594l2.157-1.532l3.187-2.218l1.156 1.187l.157.125l.156.094l2.25 1l-.844 2.156l-.094.25l.032.25l.187 1.625l-5.875.719l-.875.125V23h-6v-1.875L12.125 21l-5.875-.719l.188-1.625l.03-.25l-.093-.25L5.531 16l2.25-1l.157-.094l.156-.125l1.156-1.187l3.188 2.219l2.156 1.53l-.625-2.593l-1.594-6.469l1.531-.469l.219-.062z"></svg:path>`,
})
export class LaCanadianMapleLeafIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCandyCaneIcon],svg[la-candy-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2a7.96 7.96 0 0 0-5.688 2.375l-.718.719l-.688.718l.719.688l2.844 2.813l.687.718l.719-.719l.688-.718C16.945 8.207 17.453 8 18 8c1.113 0 2 .887 2 2a1.95 1.95 0 0 1-.594 1.406L5.72 25.031L5 25.75l.719.688L8.53 29.28l.72.72l.688-.719l13.718-13.625A7.97 7.97 0 0 0 26 10c0-4.402-3.598-8-8-8m0 2c.805 0 1.582.152 2.281.438l-1.062 1.78c-.367-.116-.754-.21-1.157-.218l-.625-1.969C17.625 4.016 17.81 4 18 4m-2.469.563l.594 1.937c-.348.188-.688.402-.969.688L13.72 5.78c.527-.531 1.152-.922 1.812-1.218zm6.438.937a6 6 0 0 1 1.5 2l-1.938.688a4 4 0 0 0-.593-.876zm2 3.938c.015.183.031.374.031.562c0 .695-.125 1.367-.344 2H21.47c.32-.555.508-1.191.531-1.844zM19.656 14h2.813c-.074.082-.14.172-.219.25L20.5 16h-2.844zm-4.031 4h2.844l-2 2h-2.844zm-4 4h2.813l-2 2H9.594zm-3.531 4h2.312L9.25 27.156z"></svg:path>`,
})
export class LaCandyCaneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCannabisIcon],svg[la-cannabis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 18.77v-2.555l-1.875-.258a30 30 0 0 0-2.578-.129c1.441-2.707 2-5.082 2.004-5.11l.312-1.359l-1.168-.761l-.07-.043l-.992-.653l-1.047.563c-.25.133-1.8.984-3.356 2.336c-.293-2.625-.968-4.824-1.246-5.531L17.488 4h-2.914l-.511 1.227c-.06.136-1.262 3.039-1.56 6.492c-1.648-1.344-4.44-2.887-4.44-2.887l-2.11 1.645l.203 1.035C6.371 12.527 7.453 15 7.453 15C6.332 15 4 15.395 4 15.395v2.64s1.875 1.59 4.035 2.735c-.09.085-.152.148-.18.175l-.937.805l.277 1.074l.297 1.14l1.153.337c.168.043 1.238.258 2.41.258a8.3 8.3 0 0 0 2.328-.317q.111-.029.222-.062c.211 1.207.47 2.168.516 2.347L14.527 28H21c-1.293-1.332-2.18-3.418-2.18-3.418q-.016-.019-.03-.043c.792.336 1.835.461 2.804.484l1.363-.085l.547-.895l.535-.918s-.457-1.082-.977-1.55c1.54-.567 3.387-1.407 4.172-2.153zm-6.5 1.214c-.582.168-2.27.399-2.895.477c0 0 2.415 1.394 2.81 2.437c0 .012.007.024.007.036c-.024 0-.047-.016-.07-.012c-1.875.144-4.825-1.504-5.16-1.793c.07 1.07.453 3.57 1.355 4.84L17.52 26h-1.47s-1.093-2.93-1.019-4.969c-.511.438-1.105 1-2.207 1.293a6.4 6.4 0 0 1-1.77.235c-.859 0-1.714-.145-1.913-.196l-.008-.039s1.422-1.312 3.254-1.75c.218-.07.441-.144.66-.144c-.735-.145-1.465-.29-2.274-.582c-2.406-.887-4.468-2.461-4.664-2.657l-.004-.043s.766-.039 1.348-.039c.945 0 2.492.11 4.125.696c.442.148.883.293 1.25.511c-.61-.535-3.64-3.066-4.539-6.875c0 0 4.399 2.266 6.691 5.891c-.335-1.582-.539-3.305-.539-4.129C14.441 9.496 15.906 6 15.906 6h.219c.344.879 1.246 3.996 1.246 7.203c0 1.086-.305 3.606-.363 4.094c.16-.39.773-1.594 1.605-2.86c1.598-2.433 4.918-4.21 4.918-4.21l.07.046c-.113.5-.89 3.305-2.636 6c-.434.672-1.79 1.95-1.906 2.043c.207-.05.914-.328 3.007-.449a25.5 25.5 0 0 1 3.786.07l.003.036c-.613.582-2.597 1.507-4.355 2.011"></svg:path>`,
})
export class LaCannabisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCapsulesIcon],svg[la-capsules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 5A5.506 5.506 0 0 0 3 10.5v11C3 24.532 5.467 27 8.5 27s5.5-2.468 5.5-5.5v-5.096l6.055 8.332a5.5 5.5 0 0 0 4.457 2.268a5.48 5.48 0 0 0 3.226-1.049v-.002a5.506 5.506 0 0 0 1.215-7.682l-6.465-8.9a5.504 5.504 0 0 0-7.681-1.215a5.5 5.5 0 0 0-.995.942C13.19 6.744 11.049 5 8.5 5m0 2c1.93 0 3.5 1.57 3.5 3.5V15H5v-4.5C5 8.57 6.57 7 8.5 7m9.535 2.105a3.5 3.5 0 0 1 2.836 1.442l2.645 3.639l-5.662 4.117l-2.647-3.64a3.504 3.504 0 0 1 .775-4.89c.62-.45 1.34-.668 2.053-.668m6.656 6.698l2.647 3.642a3.507 3.507 0 0 1-.776 4.89a3.503 3.503 0 0 1-4.888-.774l-2.645-3.641zM5 17h7v4.5c0 1.93-1.57 3.5-3.5 3.5S5 23.43 5 21.5z"></svg:path>`,
})
export class LaCapsulesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCarIcon],svg[la-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 6c-1.32 0-2.496.86-2.875 2.125L5.25 12.719l-1.938-.656l-.624 1.874l1.968.657l-.625 2.125A1 1 0 0 0 4 17v8c0 .55.45 1 1 1h3l.344-1h15.312L24 26h3c.55 0 1-.45 1-1v-.844c.004-.05.004-.105 0-.156v-7a1 1 0 0 0-.031-.281l-.625-2.125l1.968-.656l-.625-1.876l-1.937.657l-1.375-4.594A3 3 0 0 0 22.5 6zm0 2h13c.445 0 .84.293.969.719L24.75 13H7.25l1.281-4.281c.13-.43.524-.719.969-.719m-2.844 7h18.688L26 17.188V23H6v-5.813zM8.5 16a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m15 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M12 19l-1.25 3h2.156l.438-1h5.312l.438 1h2.156L20 19z"></svg:path>`,
})
export class LaCarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCarAltIcon],svg[la-car-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 6c-1.32 0-2.496.86-2.875 2.125L5.25 12.719l-1.938-.656l-.624 1.874l1.968.657l-.625 2.125A1 1 0 0 0 4 17v8c0 .55.45 1 1 1h3l.344-1h15.312L24 26h3c.55 0 1-.45 1-1v-.844c.004-.05.004-.105 0-.156v-7a1 1 0 0 0-.031-.281l-.625-2.125l1.968-.656l-.625-1.876l-1.937.657l-1.375-4.594A3 3 0 0 0 22.5 6zm0 2h13c.445 0 .84.293.969.719L24.75 13H7.25l1.281-4.281c.13-.43.524-.719.969-.719m1.5 5a1.999 1.999 0 1 0 0-4a1.999 1.999 0 1 0 0 4m10 0a1.999 1.999 0 1 0 0-4a1.999 1.999 0 1 0 0 4m-5-4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-9.344 6h18.688L26 17.188V23H6v-5.813zM8.5 16a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m15 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M12 19l-1.25 3h2.156l.438-1h5.312l.438 1h2.156L20 19z"></svg:path>`,
})
export class LaCarAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCarBatteryIcon],svg[la-car-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v2h4V6zm12 0v2h4V6zM4 9v18h24V9zm2 2h20v14H6zm14 4v2h-2v2h2v2h2v-2h2v-2h-2v-2zM8 17v2h6v-2z"></svg:path>`,
})
export class LaCarBatteryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCarCrashIcon],svg[la-car-crash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 6c-1.32 0-2.496.86-2.875 2.125L5.25 12.719l-1.938-.656l-.624 1.874l1.968.657l-.625 2.125A1 1 0 0 0 4 17v8c0 .55.45 1 1 1h3l.656-2h5.25l9.938 1.531L24 26h3.031c.242 0 .477-.09.657-.25l.03-.031c.012-.012.024-.02.032-.032a1 1 0 0 0 .25-.625v-.093a1 1 0 0 0 0-.125L27.156 19H29v-2h-2.375L24.5 12.656l.875-2.937a1 1 0 0 0-.344-1.094l-1.937-1.438a1 1 0 0 0-.5-.187L9.562 6zm0 2l12.625.969l1.125.844l-.781 2.624a1 1 0 0 0 .062.75l1.5 3.063l-6.125-2.125l-.125-.063h-.125L7.22 13.095l1.31-4.376c.13-.43.524-.719.969-.719zm-2.875 7.063l10.781 1h.063l7.625 2.687l.718 5.031L14.22 22a1 1 0 0 0-.156 0h-1.157l.438-1l4.312.625L20.25 22L19 20l-7-1l-1.25 3H6v-4.813zM8.5 16a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m12.375 2.75a1.808 1.808 0 1 0 3.406 1.219z"></svg:path>`,
})
export class LaCarCrashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCarSideIcon],svg[la-car-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.594 6c-1.336 0-2.57.668-3.313 1.781L.5 11.938a2.97 2.97 0 0 0-.5 1.656v6.625a1.99 1.99 0 0 0 1.5 1.937l2.594.657A4 4 0 0 0 8 26c1.852 0 3.398-1.281 3.844-3h9.312c.446 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3H30c1.094 0 2-.906 2-2v-3.656a4 4 0 0 0-3.031-3.875l-5.407-1.375l-3.906-4.656A3.99 3.99 0 0 0 16.594 6zm0 2H11v4H2.875l2.063-3.094v-.031A1.96 1.96 0 0 1 6.593 8zM13 8h3.594c.593 0 1.152.262 1.531.719L20.875 12H13zM2 14h20.875l5.625 1.406a1.976 1.976 0 0 1 1.5 1.938V21h-1.156c-.446-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3h-9.312c-.446-1.719-1.992-3-3.844-3c-1.773 0-3.262 1.172-3.781 2.781L2 20.22zm6 6c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m17 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"></svg:path>`,
})
export class LaCarSideIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretDownIcon],svg[la-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.594 12l1.687 1.719l10 10l.719.687l.719-.687l10-10L28.406 12zm4.844 2h15.124L16 21.563z"></svg:path>`,
})
export class LaCaretDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretLeftIcon],svg[la-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4.594L18.281 6.28l-9 9l-.687.719l.687.719l9 9L20 27.406zm-2 4.843v13.126L11.437 16z"></svg:path>`,
})
export class LaCaretLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretRightIcon],svg[la-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.594v22.812l1.719-1.687l9-9l.687-.719l-.687-.719l-9-9zm2 4.843L20.563 16L14 22.563z"></svg:path>`,
})
export class LaCaretRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretSquareDownIcon],svg[la-caret-square-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm3.719 5.781L9.28 14.22l6 6l.719.687l.719-.687l6-6l-1.438-1.438l-5.28 5.28z"></svg:path>`,
})
export class LaCaretSquareDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretSquareDownSolidIcon],svg[la-caret-square-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm3.719 5.781L9.28 14.22l6 6l.719.687l.719-.687l6-6l-1.438-1.438l-5.28 5.28z"></svg:path>`,
})
export class LaCaretSquareDownSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretSquareLeftIcon],svg[la-caret-square-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm10.781 2.281l-6 6l-.687.719l.687.719l6 6l1.438-1.438L13.937 16l5.282-5.281z"></svg:path>`,
})
export class LaCaretSquareLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretSquareLeftSolidIcon],svg[la-caret-square-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm10.781 2.281l-6 6l-.687.719l.687.719l6 6l1.438-1.438L13.937 16l5.282-5.281z"></svg:path>`,
})
export class LaCaretSquareLeftSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretSquareRightIcon],svg[la-caret-square-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm7.219 2.281L12.78 10.72L18.062 16l-5.28 5.281l1.437 1.438l6-6l.687-.719l-.687-.719z"></svg:path>`,
})
export class LaCaretSquareRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretSquareRightSolidIcon],svg[la-caret-square-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm7.219 2.281L12.78 10.72L18.062 16l-5.28 5.281l1.437 1.438l6-6l.687-.719l-.687-.719z"></svg:path>`,
})
export class LaCaretSquareRightSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretSquareUpIcon],svg[la-caret-square-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm9 4.094l-.719.687l-6 6l1.438 1.438L16 13.937l5.281 5.282l1.438-1.438l-6-6z"></svg:path>`,
})
export class LaCaretSquareUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretSquareUpSolidIcon],svg[la-caret-square-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm9 4.094l-.719.687l-6 6l1.438 1.438L16 13.937l5.281 5.282l1.438-1.438l-6-6z"></svg:path>`,
})
export class LaCaretSquareUpSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCaretUpIcon],svg[la-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8.594l-.719.687l-10 10L3.594 21h24.812l-1.687-1.719l-10-10zm0 2.844L23.563 19H8.438z"></svg:path>`,
})
export class LaCaretUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCarrotIcon],svg[la-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.875 3.156L21.75 4.812s.613.477.906 1.157c.254.597.438 1.297-.531 2.468l-.875.876c-2.945-2.508-5.938-2.626-5.938-2.626h-.562l-.313.5s-2.55 4.336-5 8.813C8.212 18.238 7 20.516 6.158 22.313c-.423.898-.755 1.68-.97 2.312c-.105.316-.18.582-.218.875c-.04.293-.149.695.343 1.188c.493.492.895.382 1.188.343s.559-.113.875-.218c.633-.215 1.414-.547 2.313-.97C11.483 25 13.761 23.79 16 22.564c4.473-2.454 8.813-5 8.813-5l.5-.313v-.594s-.133-2.957-2.625-5.906l.343-.375c.086-.086.164-.145.25-.219l.25-.219c1.18-.906 2.297-.87 3.282-.624a5.8 5.8 0 0 1 1.906.874l1.25-1.562s-1.11-.855-2.688-1.25a6.3 6.3 0 0 0-1.062-.156l2.031-2.032l-1.438-1.437l-2.093 2.094a3.7 3.7 0 0 0-.219-.688c-.563-1.312-1.625-2-1.625-2zm-7.063 5.656c.657.063 2.536.336 4.782 2.594c2.25 2.266 2.527 4.13 2.593 4.781c-.164.098-1.019.614-1.687 1a11.6 11.6 0 0 0-1.313-2.218l-1.593 1.219c.703.937.992 1.582 1.156 2a346 346 0 0 1-4.719 2.625c-.097.05-.183.105-.281.156A7.4 7.4 0 0 0 13.719 19l-1.625 1.156c.492.688.734 1.254.844 1.625c.019.063.019.078.03.125c-1.495.801-2.94 1.57-4.124 2.125c-.617.29-1.055.45-1.5.625c.176-.445.336-.883.625-1.5c.808-1.722 2.004-3.968 3.218-6.187c.586-1.07 1.032-1.871 1.563-2.813c.32.281.734.66 1.188 1.25l1.562-1.219a10.3 10.3 0 0 0-1.75-1.812c1.047-1.836 1.883-3.254 2.063-3.563z"></svg:path>`,
})
export class LaCarrotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCartArrowDownIcon],svg[la-cart-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7c-.55 0-1 .45-1 1s.45 1 1 1h2.219l2.625 10.5c.222.89 1.02 1.5 1.937 1.5H23.25c.902 0 1.668-.598 1.906-1.469L27.75 10h-2.094l-2.406 9H10.781L8.156 8.5A1.98 1.98 0 0 0 6.22 7zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m3-14v5h-3l4 4l4-4h-3V7zm-3 16c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m9 0c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaCartArrowDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCartPlusIcon],svg[la-cart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7c-.55 0-1 .45-1 1s.45 1 1 1h2.219l2.625 10.5c.222.89 1.02 1.5 1.937 1.5H23.25c.902 0 1.668-.598 1.906-1.469L27.75 10h-2.094l-2.406 9H10.781L8.156 8.5A1.98 1.98 0 0 0 6.22 7zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m3-14v3h-3v2h3v3h2v-3h3v-2h-3V7zm-3 16c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m9 0c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaCartPlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCashRegisterIcon],svg[la-cash-register-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3v4c-1.848 0-3.613.332-5.266.91l-.527-1.148l.902-.403l-.812-1.828l-3.652 1.625l.812 1.828l.922-.41l.512 1.106a16 16 0 0 0-3.043 1.988l-.786-.836l.727-.668l-1.351-1.476l-2.946 2.707l1.352 1.476l.742-.684l.805.848a16 16 0 0 0-2.446 3.395l-1.082-.535l.45-.883l-1.782-.907l-1.812 3.567l1.781.906l.457-.902l1.145.57A15.9 15.9 0 0 0 6.05 22H4v6h24V3zm2 2h2v17H8.05C8.563 14.727 14.595 9 22 9h2zm-6 6.953a2.001 2.001 0 0 0-1 3.735V20h5v-2h-3v-2.316a1.998 1.998 0 0 0-1-3.73zM6 24h20v2H6z"></svg:path>`,
})
export class LaCashRegisterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCatIcon],svg[la-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4c0 1.117-.883 2-2 2H7c-2.2 0-4 1.8-4 4s1.8 4 4 4h1.156A7.3 7.3 0 0 0 8 15.5V28h2V15.5c0-3.031 2.469-5.5 5.5-5.5c.902 0 1.75.207 2.5.594V8.438A7.5 7.5 0 0 0 15.5 8c-2.867 0-5.363 1.629-6.625 4H7c-1.117 0-2-.883-2-2s.883-2 2-2h1c2.2 0 4-1.8 4-4zm9 2.094V12.5c0 2.55 2.316 4.5 5 4.5s5-1.95 5-4.5V6.094l-1.563 1.093l-1.656 1.157c-.57-.203-1.133-.438-1.781-.438s-1.21.235-1.781.438l-1.657-1.156zm5 3.812c.578 0 1.11.14 1.563.375l.53.281l.5-.343l.407-.281V12.5c0 1.316-1.266 2.5-3 2.5s-3-1.184-3-2.5V9.937l.406.282l.5.344l.532-.282A3.4 3.4 0 0 1 24 9.906M17 15c-2.758 0-5 2.242-5 5v8h2v-8c0-1.652 1.348-3 3-3s3 1.348 3 3v8h2v-8c0-.965-.273-1.86-.75-2.625a5.9 5.9 0 0 1-2.344-2A5 5 0 0 0 17 15m9 2.688A6.5 6.5 0 0 1 24 18v10h2z"></svg:path>`,
})
export class LaCatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCcAmazonPayIcon],svg[la-cc-amazon-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1m6.523 2l-.14.023c-.44.055-.867.22-1.22.489c-.08.047-.148.11-.227.174c-.008-.016-.016-.031-.016-.047c-.016-.087-.024-.182-.04-.268c-.023-.142-.101-.213-.243-.213h-.371c-.227-.002-.266.047-.266.268v6.824c.008.102.07.156.156.164h.686c.094 0 .148-.062.156-.164c.008-.031.008-.063.008-.094v-2.328c.03.031.054.049.07.065c.574.48 1.235.636 1.96.494c.66-.134 1.116-.534 1.407-1.123c.228-.448.322-.93.33-1.424c.016-.544-.031-1.087-.26-1.598c-.266-.629-.724-1.046-1.408-1.187c-.102-.024-.211-.031-.314-.047c-.094-.008-.18-.008-.268-.008m5.002 0a.4.4 0 0 1-.093.016a4.6 4.6 0 0 0-.928.134c-.197.047-.385.117-.574.18q-.176.062-.174.252c.008.102 0 .212 0 .314c.008.157.072.199.22.159c.253-.063.502-.135.754-.182a3.8 3.8 0 0 1 1.196-.047c.212.04.409.095.543.276a.9.9 0 0 1 .174.527c.008.267.007.534.007.8q.002.027-.007.04h-.04a5.7 5.7 0 0 0-1.03-.156c-.363-.017-.723-.002-1.07.124c-.416.143-.754.394-.95.803c-.15.314-.172.645-.125.983c.07.456.29.801.691 1.021c.385.212.794.237 1.219.174c.488-.071.92-.275 1.297-.59c.016-.016.03-.024.047-.039c.024.126.038.244.062.354c.016.102.08.165.174.173h.527c.08 0 .149-.072.149-.158c.008-.024.008-.054.008-.086v-3.414a3 3 0 0 0-.034-.408c-.063-.417-.236-.762-.613-.982a1.9 1.9 0 0 0-.7-.229c-.117-.016-.227-.024-.345-.039zm6.715 0a.255.255 0 0 0-.252.164l-.047.135l-1.125 3.217c-.079.228-.165.462-.244.714l-.029-.078c-.416-1.148-.825-2.297-1.242-3.445c-.062-.188-.134-.368-.205-.549a.21.21 0 0 0-.203-.148q-.365-.01-.74-.008c-.079 0-.118.07-.102.148c.016.063.038.135.062.198c.63 1.556 1.268 3.112 1.905 4.677a.42.42 0 0 1 0 .377c-.102.236-.19.48-.3.715a.73.73 0 0 1-.488.434a1.3 1.3 0 0 1-.496.03c-.079-.008-.157-.022-.236-.03c-.11-.008-.164.038-.172.156v.314c.008.181.063.26.244.291c.173.032.354.057.543.065c.55.008.983-.213 1.266-.693c.118-.19.213-.386.299-.59a1361 1361 0 0 0 2.271-5.78a.6.6 0 0 0 .047-.171c.016-.094-.03-.142-.119-.143zm-11.722.818c.48.04.872.274 1.076.832c.126.346.158.702.158 1.063c0 .339-.025.66-.127.982c-.22.684-.722.951-1.367.92c-.456-.024-.841-.196-1.203-.447c-.04-.024-.065-.063-.057-.102v-2.712c-.008-.047.018-.088.057-.112c.44-.307.928-.463 1.463-.424m4.86 2.18q.205-.018.405.006c.267.024.536.07.803.11c.055.007.07.031.07.08c-.007.156 0 .305 0 .462s-.008.298-.008.455c.008.04-.015.071-.046.094a2.5 2.5 0 0 1-1.204.48c-.18.017-.362.017-.535-.054a.65.65 0 0 1-.4-.432a1.1 1.1 0 0 1-.01-.62c.086-.268.275-.419.527-.505q.196-.059.399-.076zm8.153 4.5c-.7.01-1.527.166-2.154.606c-.194.134-.158.321.057.296c.705-.084 2.273-.275 2.554.084s-.312 1.837-.574 2.498c-.082.197.09.28.272.13c1.173-.984 1.478-3.043 1.238-3.339c-.12-.148-.693-.285-1.393-.275m-18.386.393c-.146.019-.21.197-.057.338C8.7 20.585 12.149 22 15.98 22c2.733 0 5.906-.859 8.096-2.475c.362-.268.055-.67-.316-.51a19.7 19.7 0 0 1-7.551 1.544c-3.597 0-7.08-.986-9.896-2.627a.27.27 0 0 0-.168-.041"></svg:path>`,
})
export class LaCcAmazonPayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCcAmexIcon],svg[la-cc-amex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1m2.063 5.25L5 18.75h1.25l.406-1.25H9l.406 1.25h2.344v-4.125l1.5 4.125h1.094l1.531-4v4h1.094v-5.5h-1.782l-1.374 3.719l-1.376-3.719H10.5v5.219L8.562 13.25zm11.406 0v5.5h4.406l1.375-1.781l1.375 1.781H27L24.937 16L27 13.25h-1.5l-1.375 1.656L23 13.25zM7.75 14.344l.688 1.937H7.062zm11.813.156h2.75l1.125 1.5l-1.25 1.656h-2.625v-1.093h2.5v-1.125h-2.5z"></svg:path>`,
})
export class LaCcAmexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCcApplePayIcon],svg[la-cc-apple-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1m5.998 3c-.465 0-.996.265-1.34.652c-.266.321-.555.831-.455 1.34c.477.056.998-.243 1.297-.63c.332-.355.52-.853.498-1.362M13 13v6h.932v-2.055h1.297c1.175 0 2.005-.808 2.005-1.972c0-1.175-.82-1.973-1.984-1.973zm-5.162.523c-1.04 0-1.838.91-1.838 2.215C6 17.438 7.194 19 7.94 19c.45 0 .614-.303 1.212-.303c.551 0 .725.303 1.194.303c.89 0 1.626-1.81 1.654-1.92c-.147-.074-1.003-.477-1.002-1.451c0-.946.781-1.37.818-1.389c-.432-.643-1.112-.717-1.369-.717c-.597 0-1.119.323-1.404.323c-.294 0-.727-.323-1.205-.323m6.094.264h1.074c.809 0 1.275.432 1.275 1.186s-.466 1.197-1.275 1.197h-1.074zm5.498.744c-.986 0-1.719.566-1.74 1.342h.841c.067-.366.41-.61.875-.61c.576 0 .889.267.889.755v.332l-1.164.078c-1.075.067-1.664.51-1.664 1.275c0 .776.599 1.297 1.463 1.297c.587 0 1.132-.3 1.375-.766h.021v.721h.865v-2.992c0-.865-.697-1.432-1.761-1.432m2.144.057l1.574 4.379l-.078.265c-.144.444-.377.622-.787.622c-.077 0-.22-.012-.275-.012v.72c.056.011.286.022.353.022c.91 0 1.342-.354 1.72-1.396l1.628-4.6h-.943l-1.096 3.547h-.024l-1.095-3.547zm-1.28 2.392v.334h-.001c0 .565-.476.963-1.107.963c-.5 0-.809-.231-.809-.597c0-.377.299-.6.887-.633z"></svg:path>`,
})
export class LaCcApplePayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCcDinersClubIcon],svg[la-cc-diners-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1m10 2c-3.3 0-6 2.7-6 6s2.7 6 6 6h2c3.313 0 6-2.688 6-6c0-3.313-2.688-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4m-.813 1.656C13.216 14 12.5 14.91 12.5 16s.715 2 1.688 2.344zm1.626 0v4.688C16.785 18 17.5 17.09 17.5 16s-.715-2-1.688-2.344z"></svg:path>`,
})
export class LaCcDinersClubIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCcDiscoverIcon],svg[la-cc-discover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1m5.438 6.156c-.626 0-1.094.453-1.094 1.031c0 .485.23.727.875.97c.375.14.687.222.687.562c0 .285-.222.5-.531.5a.8.8 0 0 1-.75-.469l-.469.406c.317.465.727.688 1.25.688c.715 0 1.188-.473 1.188-1.157c0-.562-.219-.84-1-1.125c-.414-.152-.531-.246-.531-.437c0-.223.203-.375.5-.375c.207 0 .382.082.562.281l.375-.469a1.63 1.63 0 0 0-1.063-.406zm3.25 0c-1.043.004-1.876.817-1.876 1.844c0 1.035.829 1.844 1.876 1.844c.296 0 .562-.07.874-.219v-.813c-.273.274-.53.375-.843.375c-.692 0-1.188-.503-1.188-1.218c0-.676.512-1.188 1.156-1.188c.329 0 .59.094.876.375v-.812c-.301-.153-.579-.188-.876-.188zm2.906 0A1.847 1.847 0 0 0 14.75 16c0 1.016.828 1.844 1.844 1.844A1.847 1.847 0 0 0 18.437 16a1.847 1.847 0 0 0-1.843-1.844M5 14.22v3.531h1c1.535 0 1.906-1.2 1.906-1.75c0-1.04-.789-1.781-1.906-1.781zm3.219 0v3.531h.687V14.22zm10.094 0l1.5 3.625h.375l1.53-3.625h-.75L20 16.594l-.938-2.375zm3.718 0v3.531h1.938v-.594h-1.25v-.968h1.218v-.594H22.72v-.781h1.25v-.594zm2.407 0v3.531h.687v-1.406h.063l.968 1.406H27l-1.125-1.5c.52-.105.813-.46.813-1c0-.66-.458-1.031-1.25-1.031zm.687.562h.188c.43 0 .687.188.687.531c0 .356-.246.532-.688.532h-.187zm-19.438.031h.22c.937 0 1.28.633 1.28 1.188c0 .266-.074 1.156-1.312 1.156h-.188z"></svg:path>`,
})
export class LaCcDiscoverIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCcJcbIcon],svg[la-cc-jcb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1m3.156 3C6.93 11 6 11.777 6 13.125V21h3.938c.96 0 2.062-.895 2.062-2.063V11zm7 0C13.934 11 13 11.781 13 13.125v7.813h3.938c.957 0 2.062-.899 2.062-2.063V11zm7 0C20.934 11 20 11.781 20 13.125v7.813h3.906c.953 0 2.094-.899 2.094-2.063V11zm-6.781 3h2.875v.625c-.688-.16-1.36-.25-1.688-.25c-.718 0-1.28.617-1.28 1.375s.562 1.344 1.28 1.344c.329 0 1-.059 1.688-.219v.594h-2.875c-.895 0-1.656-.774-1.656-1.719S14.48 14 15.375 14m5.469 0h3.687c.45 0 .813.395.813.844c0 .445-.301.875-.75.875c.508 0 .906.398.906.844c0 .449-.398.875-.906.875h-3.75zm-11.375.031h1.719v1.938c0 1.078-1.387 1.656-2.407 1.656c-1.11 0-2.101-.66-2.312-1.5h.75c.09.512.586.875 1.156.875c.629 0 1.094-.46 1.094-1.031zm12.781.313V15.5h1.188a.58.58 0 0 0 .562-.563c0-.296-.266-.593-.563-.593zm0 1.594v1.156h1.219c.3 0 .562-.266.562-.563c0-.3-.261-.593-.562-.593z"></svg:path>`,
})
export class LaCcJcbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCcMastercardIcon],svg[la-cc-mastercard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1m7 1c-3.855 0-7 3.145-7 7s3.145 7 7 7a6.93 6.93 0 0 0 4-1.25A6.94 6.94 0 0 0 20 23c3.855 0 7-3.145 7-7s-3.145-7-7-7a6.94 6.94 0 0 0-4 1.25A6.93 6.93 0 0 0 12 9m0 2c1.281 0 2.43.496 3.313 1.281a5.9 5.9 0 0 0-.97 1.719h2.22c.14.32.273.652.343 1h-2.812A6 6 0 0 0 14 16c0 .344.04.676.094 1h2.812c-.07.348-.203.68-.343 1h-2.22c.223.629.56 1.207.97 1.719C14.43 20.504 13.28 21 12 21c-2.773 0-5-2.227-5-5s2.227-5 5-5m8 0c2.773 0 5 2.227 5 5s-2.227 5-5 5a4.95 4.95 0 0 1-2.5-.688A6.92 6.92 0 0 0 19 16a6.92 6.92 0 0 0-1.5-4.313A4.95 4.95 0 0 1 20 11"></svg:path>`,
})
export class LaCcMastercardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCcPaypalIcon],svg[la-cc-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.906 5l-.187.781l-3.688 17L4.75 24h4.875l-.594 2.781L8.75 28h6.969l.156-.813l1.031-4.812h2.688c3.761 0 7.066-2.445 7.906-6.375c.441-2.066-.027-3.816-1-5c-.79-.96-1.86-1.54-2.969-1.813c-.215-.988-.668-1.828-1.281-2.468C21.113 5.535 19.535 5 18.062 5zm1.625 2h7.531c.981 0 2.063.379 2.75 1.094c.688.715 1.09 1.734.72 3.469c-.66 3.093-2.997 4.812-5.938 4.812H11.28l-.156.781L10.094 22H7.25zm2.531 1.469l-.187.781l-1.031 4.625l-.281 1.219h3.53c1.778 0 3.313-1.293 3.75-3.031h.032c.004-.02-.004-.043 0-.063c.219-.875.078-1.773-.406-2.438c-.496-.68-1.332-1.093-2.219-1.093zm1.594 2h1.594c.313 0 .477.09.594.25s.199.418.093.812v.031c-.187.81-1.144 1.532-1.843 1.532h-1.031zm8.938.875c.527.215 1.023.508 1.375.937c.582.707.902 1.684.562 3.281c-.66 3.094-2.996 4.813-5.937 4.813H15.28l-.156.781L14.094 26H11.25l.438-2h.03l.157-.813l1.031-4.812h2.688c3.761 0 7.066-2.445 7.906-6.375c.047-.227.066-.438.094-.656"></svg:path>`,
})
export class LaCcPaypalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCcStripeIcon],svg[la-cc-stripe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1m11.5 3.438a.835.835 0 0 0-.844.843c0 .469.371.844.844.844a.84.84 0 0 0 .844-.844a.84.84 0 0 0-.844-.844zm-5.438.75l-1.374.218l-.188 1.219l-.5.094l-.188 1.125H9.5v2.344c0 .609.152 1.023.469 1.28c.265.216.648.313 1.187.313c.414 0 .668-.078.844-.125v-1.25c-.098.028-.32.063-.469.063c-.316 0-.469-.16-.469-.532v-2.093h.844l.188-1.219h-1.031zM6.907 13.53c-.547 0-1.02.14-1.343.406c-.34.278-.5.7-.5 1.188c0 .883.527 1.246 1.406 1.563c.566.199.75.34.75.562c0 .215-.168.344-.5.344c-.41 0-1.09-.207-1.532-.469L5 18.344c.379.215 1.086.437 1.813.437c.578 0 1.05-.113 1.375-.375c.363-.285.562-.734.562-1.281c0-.902-.547-1.277-1.438-1.594c-.472-.176-.75-.285-.75-.5c0-.183.141-.312.407-.312c.488 0 1 .207 1.343.375l.188-1.219a3.7 3.7 0 0 0-1.594-.344zm13.813 0c-.469 0-.899.215-1.282.625l-.062-.531h-1.438v6.938l1.625-.282v-1.593c.247.078.493.093.72.093c.402 0 .984-.101 1.437-.593c.433-.473.656-1.188.656-2.157c0-.855-.145-1.523-.469-1.937c-.285-.371-.68-.563-1.187-.563m4.218 0c-1.37 0-2.218 1.031-2.218 2.656c0 .91.207 1.598.656 2.032c.402.39 1.004.562 1.75.562c.688 0 1.316-.14 1.719-.406l-.188-1.125a2.85 2.85 0 0 1-1.375.344c-.312 0-.531-.082-.687-.219c-.168-.145-.25-.355-.282-.688h2.657c.008-.078.031-.445.031-.562c0-.805-.188-1.457-.531-1.906c-.352-.453-.864-.688-1.532-.688M15 13.562a.99.99 0 0 0-.969.688l-.094-.625h-1.406v5.063h1.625v-3.282c.2-.246.485-.344.875-.344c.086 0 .172.012.281.032v-1.5a1.3 1.3 0 0 0-.312-.031zm.688.063v5.063h1.624v-5.063zm9.218 1c.364 0 .567.348.594 1.063h-1.188c.047-.723.223-1.063.594-1.063m-4.75.156c.41 0 .625.418.625 1.281c0 .493-.07.895-.218 1.157c-.13.246-.329.375-.563.375a.95.95 0 0 1-.438-.094v-2.406c.274-.285.504-.313.594-.313"></svg:path>`,
})
export class LaCcStripeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCcVisaIcon],svg[la-cc-visa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1m14.406 4.375c-1.926 0-2.937.95-2.937 2.156c0 2.18 2.562 1.88 2.562 3c0 .192-.16.625-1.218.625c-1.06 0-1.75-.375-1.75-.375l-.313 1.438s.656.406 1.969.406c1.312 0 3.156-1.008 3.156-2.469c0-1.758-2.563-1.875-2.563-2.656c0-.398.34-.719 1.25-.719c.594 0 1.25.469 1.25.469l.313-1.531s-.871-.344-1.719-.344m-8.218.125L9.5 17.438s-.086-.426-.125-.688c-.953-2.14-2.5-2.938-2.5-2.938l1.469 5.594h2l2.812-6.906zm2.687 0l-1.094 6.906h1.844l1.094-6.906zm9.938 0l-3 6.906h1.812l.375-.968h2.313l.187.968h1.656L25.75 12.5zm-18.97.031s3.598 1.102 4.438 3.813l-.625-3.125s-.273-.688-1-.688zM24.5 14.5l.531 2.594h-1.5z"></svg:path>`,
})
export class LaCcVisaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCentercodeIcon],svg[la-centercode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-2.8 4c-2.355 2.26-2.821 7.59-1.391 13.87c2.82.63 6.91-1.07 11.08-4.44c1.137-4.75-6.555-8.29-9.69-9.43zm2.8 5a2 2 0 1 1 .001 3.999A2 2 0 0 1 16 14"></svg:path>`,
})
export class LaCentercodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCentosIcon],svg[la-centos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.996 3L13 6.004h2V12l1 1l1-1V6.004h2zM7 7v4l1.293-1.293L12.586 14H14v-1.414L9.707 8.293L11 7zm5.414 0l-1.293 1.293L14 11.172V7zM18 7v4.172l2.879-2.879L19.586 7zm3 0l1.293 1.293L18 12.586V14h1.414l4.293-4.293L25 11V7zM8.293 11.121L7 12.414V14h4.172zm15.414 0L20.828 14H25v-1.586zM6.004 13L3 16.004L6.004 19v-2H12l1-1l-1-1H6.004zm19.992 0v2H20l-1 1l1 1h5.996v2L29 15.996zM7 18v1.586l1.293 1.293L11.172 18zm5.586 0l-4.293 4.293L7 21v4h4l-1.293-1.293L14 19.414V18zM18 18v1.414l4.293 4.293L21 25h4v-4l-1.293 1.293L19.414 18zm2.828 0l2.879 2.879L25 19.586V18zM16 19l-1 1v5.996h-2L16.004 29L19 25.996h-2V20zm-2 1.828l-2.879 2.879L12.414 25H14zm4 0V25h1.586l1.293-1.293z"></svg:path>`,
})
export class LaCentosIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCertificateIcon],svg[la-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-.625 0-1.246.21-1.781.594L12.563 4.75L10.655 5h-.031l-.031.031A3.39 3.39 0 0 0 8.03 7.594L8 7.625v.031l-.25 1.938l-1.156 1.5l-.032.031v.031c-.699 1.117-.73 2.559.032 3.625l1.187 1.656l.313 1.72l-3.219 4.905l-1.031 1.532h4.781l1.156 2.687L10.5 29l1.031-1.563l3.156-4.75c.848.348 1.805.38 2.626 0l3.156 4.75L21.5 29l.719-1.719l1.156-2.687h4.781l-1.031-1.532L24 18.313l.25-1.875l1.156-1.656l.032-.031v-.031c.699-1.117.73-2.528-.032-3.594L24.25 9.469l-.375-1.875h.031c-.004-.024-.027-.04-.031-.063c-.18-1.308-1.215-2.37-2.531-2.531h-.032l-1.875-.25l-1.656-1.156A3.07 3.07 0 0 0 16 3m0 2.031c.23 0 .457.07.625.188L18.406 6.5l.219.156l.25.032L21.063 7h.03c.45.05.762.363.813.813v.062l.407 2.219l.03.219l.157.187l1.281 1.781c.239.332.27.895-.031 1.375l-1.406 1.969l-.032.25L22 18.063v.03a1 1 0 0 1-.156.438l-.063.032v.03a.88.88 0 0 1-.593.313h-.063l-2.281.407l-.25.03l-.188.157l-1.781 1.281c-.332.239-.926.27-1.406-.031l-1.625-1.25l-.188-.156l-.281-.032L10.937 19h-.03a.89.89 0 0 1-.688-.438a1 1 0 0 1-.125-.375v-.062l-.406-2.281l-.032-.25l-.156-.188l-1.281-1.781c-.239-.332-.27-.926.031-1.406l1.25-1.625l.156-.188l.031-.281l.282-2.094c.004-.015.027-.015.031-.031a1.4 1.4 0 0 1 1-1c.016-.004.016-.027.031-.031l2.094-.282l.25-.03l.219-.157l1.781-1.281c.168-.117.395-.188.625-.188m6.906 15.219l1.532 2.344H22.03l-.25.625l-.687 1.593l-2.125-3.25l.468-.343l1.97-.344v.031c.023-.004.038-.027.062-.031a2.97 2.97 0 0 0 1.437-.625zm-13.812.031a2.85 2.85 0 0 0 1.562.719h.031l1.907.25l.437.344l-2.125 3.218l-.687-1.593l-.25-.625H7.563z"></svg:path>`,
})
export class LaCertificateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChairIcon],svg[la-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4v12.438c-.102.027-.223.066-.313.093c-.484.149-.82.305-1.062.469a2 2 0 0 0-.313.25c-.078.082-.187.25-.187.25L9 17.719V20h1v8h2v-8h8v8h2v-8h1v-2.281l-.125-.219s-.11-.168-.188-.25a2 2 0 0 0-.312-.25c-.242-.164-.578-.32-1.063-.469c-.09-.027-.21-.066-.312-.093V4h-2v1h-6V4zm2 3h2v9.031c-.758.02-1.438.04-2 .094zm4 0h2v9.125c-.563-.055-1.242-.074-2-.094z"></svg:path>`,
})
export class LaChairIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChalkboardIcon],svg[la-chalkboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7v16H3v2h26v-2h-2V7zm2 2h18v14H7zm14.281 3.281L17 16.562l-3.281-3.28l-.719-.688l-.719.687l-3 3l1.438 1.438L13 15.437l3.281 3.282l.719.687l.719-.687l5-5zM20 20l-1 1l1 1h4v-2z"></svg:path>`,
})
export class LaChalkboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChalkboardTeacherIcon],svg[la-chalkboard-teacher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v2h22v16H12v2h18v-2h-2V6zm4.002 3A4.016 4.016 0 0 0 4 13c0 2.199 1.804 4 4.002 4A4.014 4.014 0 0 0 12 13c0-2.197-1.802-4-3.998-4M14 10v2h5v-2zm7 0v2h3v-2zM8.002 11C9.116 11 10 11.883 10 13c0 1.12-.883 2-1.998 2C6.882 15 6 14.12 6 13c0-1.117.883-2 2.002-2M14 14v2h10v-2zM4 18v8h2v-6h3v6h2v-5.342l2.064 1.092c.585.31 1.288.309 1.872 0v.002l3.53-1.867l-.933-1.77l-3.531 1.867l-3.096-1.634A3 3 0 0 0 9.504 18z"></svg:path>`,
})
export class LaChalkboardTeacherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChargingStationIcon],svg[la-charging-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5C7.355 5 6 6.355 6 8v19h14v-7h2v4c0 1.645 1.355 3 3 3s3-1.355 3-3V13.812c0-.796-.313-1.531-.875-2.093L22.406 7L21 8.406l2.844 2.844C22.77 11.707 22 12.766 22 14c0 1.645 1.355 3 3 3a2.9 2.9 0 0 0 1-.188V24c0 .566-.434 1-1 1s-1-.434-1-1v-4c0-1.094-.906-2-2-2h-2V8c0-1.645-1.355-3-3-3zm0 2h8c.566 0 1 .434 1 1v17H8V8c0-.566.434-1 1-1m4.09 3.56l-2.43 4.88l.9.47l1.1.53l-1.57 3.12l1.82.88l2.43-4.88l-.9-.47l-1.1-.53l1.57-3.12zM25 13c.562 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.437-1 1-1"></svg:path>`,
})
export class LaChargingStationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChartAreaIcon],svg[la-chart-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 4.063l-1.625 1.25l-4.625 3.625L16.156 8l-.375-.063l-.344.22l-5.687 3.78l-4.563-.906L4 10.781V28h24zm-2 4.093v5.375l-4.219 3.344l-5.468-1.813l-.47-.156l-.405.25l-5.563 3.719L6 17.312V13.22l3.813.75l.406.094l.344-.22l5.656-3.78l5.625.937l.437.063l.344-.282zm0 7.938V26H6v-6.5l3.625 1.438l.5.187l.438-.281l5.624-3.75l5.5 1.843l.5.188l.438-.344z"></svg:path>`,
})
export class LaChartAreaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChartBarIcon],svg[la-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v24h-2V7H5v20H3v2h26v-2h-2V14h-6v13h-2V3zm2 2h2v22h-2z"></svg:path>`,
})
export class LaChartBarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChartBarSolidIcon],svg[la-chart-bar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v24h8V4zm2 2h4v20h-4zM3 10v18h8V10zm2 2h4v14H5zm7 4v12h8V16zm2 2h4v8h-4z"></svg:path>`,
})
export class LaChartBarSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChartLineIcon],svg[la-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.219 5.375l-3.5 4.375l-3.282-1.656l-.78-.375l-.5.718l-3.407 5.126l-3.156-2.376L12 10.75l-.594.438l-3.625 2.718l-3.531-.875l-.5 1.938l4 1l.469.125l.375-.282L12 13.25l3.406 2.563l.844.624l.594-.875l3.5-5.25l3.218 1.594l.72.344l4.5-5.625zm-7.157 12.938l-.843 1.062l-3.407 4.25l-3.218-2.438L12 20.75l-.594.438l-3.5 2.625l-3.468-1.72l-.875 1.813l4 2l.53.25l.5-.343L12 23.25l3.406 2.563l.781.562l.594-.75l3.125-3.906l3.25 4.843l.782 1.125l.843-1.062l4-5l-1.562-1.25l-3.125 3.906l-3.25-4.843z"></svg:path>`,
})
export class LaChartLineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChartPieIcon],svg[la-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m-1.125 2.063c.043-.004.082.003.125 0v11.343l.281.313l7.781 7.75C21.157 26.062 18.688 27 16 27C9.914 27 5 22.086 5 16a10.98 10.98 0 0 1 9.875-10.938zm2.125 0A10.956 10.956 0 0 1 26.938 15H17zM18.438 17h8.5c-.208 2.293-1.075 4.395-2.47 6.063z"></svg:path>`,
})
export class LaChartPieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCheckIcon],svg[la-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.281 6.281L11 23.563L3.719 16.28L2.28 17.72l8 8l.719.687l.719-.687l18-18z"></svg:path>`,
})
export class LaCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCheckCircleIcon],svg[la-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5c0 6.102-4.898 11-11 11S5 22.102 5 16S9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3m11.281 4.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"></svg:path>`,
})
export class LaCheckCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCheckCircleSolidIcon],svg[la-check-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5c0 6.102-4.898 11-11 11S5 22.102 5 16S9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3m11.281 4.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"></svg:path>`,
})
export class LaCheckCircleSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCheckDoubleIcon],svg[la-check-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.281 7.281L11.5 19.063L8.719 16.28L7.28 17.72l2.782 2.781L8 22.563L1.719 16.28L.28 17.72l7 7l.719.687l.719-.687l2.781-2.782l2.781 2.782l.719.687l.719-.687l15.906-16l-1.438-1.438L15 22.563L12.937 20.5L24.72 8.719z"></svg:path>`,
})
export class LaCheckDoubleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCheckSquareIcon],svg[la-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm14.281 4.281L14 18.562l-3.281-3.28l-1.438 1.437l4 4l.719.687l.719-.687l8-8z"></svg:path>`,
})
export class LaCheckSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCheckSquareSolidIcon],svg[la-check-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v24h24V12.187l-2 2V26H6V6h19.813l2-2zm23.281 3.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"></svg:path>`,
})
export class LaCheckSquareSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCheeseIcon],svg[la-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.094 5.969l-.313.062c-6.469 1.438-7.75 7.782-7.75 7.782L3 13.905V26h26v-6h-1c-.566 0-1-.434-1-1s.434-1 1-1h1v-4.656l-.625-.281l-17-7zm-.125 2.125L13.75 9.25c-.441.184-.75.441-.75.75c0 .55.895 1 2 1c.758 0 1.41-.219 1.75-.531L22.906 13H5.375c.602-1.48 2.094-4 5.594-4.906M5 15h3.094a1.5 1.5 0 0 0-.094.5a1.5 1.5 0 0 0 3 0c0-.172-.04-.344-.094-.5H27v1.406c-1.11.442-2 1.336-2 2.594s.89 2.152 2 2.594V24H14.719c.172-.293.281-.637.281-1a1.999 1.999 0 1 0-4 0c0 .363.11.707.281 1H5zm14.5 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaCheeseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChessIcon],svg[la-chess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v2H4.8l1.274 6H6c-.6 0-1 .4-1 1s.4 1 1 1h.11l-1.018 7H5c-.6 0-1 .4-1 1c0 .32.12.576.316.752L3 24.699V27h12.1v-2.3l-1.356-2.007A1 1 0 0 0 14 22c0-.6-.4-1-1-1h-.11l-1.081-7H12c.6 0 1-.4 1-1s-.4-1-1-1h-.05l1.35-6H10V4zm-.8 4h3.6l-.9 4H8.1zM19 9v6.4l.9.9l-.771 4.7H19c-.6 0-1 .4-1 1c0 .32.12.576.316.752L17 24.699V27h12.1v-2.3l-1.356-2.007A1 1 0 0 0 28 22c0-.6-.4-1-1-1h-.129l-.771-4.7l.9-.9V9h-2v2h-1V9h-2v2h-1V9zm2 4h4v1.6l-1.1 1.1l.9 5.3h-3.6l.9-5.3l-1.1-1.1zM8.2 14h1.7l1 7H7.2zm-1.7 9h5l1.3 2H5.2zm14.1 0h4.9l1.3 2h-7.6z"></svg:path>`,
})
export class LaChessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChessBishopIcon],svg[la-chess-bishop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-1.094 0-2 .906-2 2c0 .441.156.855.406 1.188A25 25 0 0 0 13.22 7.53C12.172 8.813 11 10.293 11 12c0 1.137.414 2.16 1.063 3h-.157c-.55.027-.98.496-.953 1.047s.496.98 1.047.953h.5l-1.406 3.563L10.375 22H8.906c-.55.027-.98.496-.953 1.047s.496.98 1.047.953l-1.813 2.406l-.187.25V29h18v-2.344l-.188-.25L23 24c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496h-1.375l-.719-1.438L19.5 17h.5c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496a5 5 0 0 0 1-3c0-1.707-1.172-3.188-2.219-4.469a25 25 0 0 0-1.187-1.343A2 2 0 0 0 18 5c0-1.094-.906-2-2-2m0 4.469c.363.367.61.597 1.219 1.343C18.172 9.98 19 11.5 19 12c0 1.68-1.3 3-2.969 3S13 13.66 13 12c0-.5.828-2.02 1.781-3.188c.61-.746.856-.976 1.219-1.343M14.687 17h2.626l1.75 4.375l.03.031v.032l.282.562h-6.75l.281-.563v-.03l.031-.032zM11.5 24h9l2.25 3H9.25z"></svg:path>`,
})
export class LaChessBishopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChessBoardIcon],svg[la-chess-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v3h3V4zm3 3v3h3V7zm3 0h3V4h-3zm3 0v3h3V7zm3 0h3V4h-3zm3 0v3h3V7zm3 0h3V4h-3zm0 3v3h3v-3zm0 3h-3v3h3zm0 3v3h3v-3zm0 3h-3v3h3zm0 3v3h3v-3zm0 3h-3v3h3zm-3 0v-3h-3v3zm-3 0h-3v3h3zm-3 0v-3h-3v3zm-3 0h-3v3h3zm-3 0v-3H7v3zm-3 0H4v3h3zm0-3v-3H4v3zm0-3h3v-3H7zm0-3v-3H4v3zm0-3h3v-3H7zm0-3V7H4v3zm3 3v3h3v-3zm3 0h3v-3h-3zm3 0v3h3v-3zm3 0h3v-3h-3zm0 3v3h3v-3zm0 3h-3v3h3zm-3 0v-3h-3v3zm-3 0h-3v3h3z"></svg:path>`,
})
export class LaChessBoardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChessKingIcon],svg[la-chess-king-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-1.094 0-2 .906-2 2c0 .36.11.707.281 1H8v2.375l.219.25L11.875 13c-.55.035-.973.512-.938 1.063s.512.972 1.063.937h.656l-1.562 5.563l-.063.156L10.375 22H8.906c-.55.027-.98.496-.953 1.047s.496.98 1.047.953l-1.813 2.406l-.187.25V29h18v-2.344l-.188-.25L23 24c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496h-1.375l-.656-1.281l-.032-.063l-.03-.093L19.343 15H20a1.005 1.005 0 0 0 1.078-.922A1.005 1.005 0 0 0 20.156 13l3.625-4.375l.219-.25V6h-6.281c.172-.293.281-.64.281-1c0-1.094-.906-2-2-2m-5.688 5h11.376l-4.157 5H14.47zm4.438 7h2.5l1.781 6.281l.032.094l.312.625h-6.75l.313-.625l.03-.094zm-3.25 9h9l2.25 3H9.25z"></svg:path>`,
})
export class LaChessKingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChessKnightIcon],svg[la-chess-knight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-1.77 0-2.941.984-3.406 2c-.352.77-.309 1.305-.313 1.75a15.6 15.6 0 0 0-2.156 1.781C8.727 9.93 7.961 11.921 8 14.031q.03 1.458.594 2.938c.187.496.531 1.355.844 2.312S10 21.293 10 22H8.906a1 1 0 0 0 .063 2l-1.781 2.406l-.188.25V29h18v-2.344l-.188-.25L23 24c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496h-1c0-2.262-1.406-4.336-2.719-5.938c-.75-.917-.996-1.078-1.5-1.562c.18-.105.403-.23.532-.313c.16-.101.246-.164.28-.187c.282 0 .302.047.595.281c.292.235.89.719 1.718.719c.727 0 1.258-.469 1.532-.813c.25-.316.386-.554.406-.593c.09-.043.285-.106.531-.281s.566-.567.625-1s-.078-.813-.25-1.188c-.254-.555-.727-1.191-1.469-1.969c-.742-.777-1.715-1.601-2.906-2.094c-.09-.039-.016.02-.063-.03c-.046-.052-.187-.262-.468-.47c-.367-.269-1.164-.3-1.844-.375V3zm-1 2.219V8h1c1.363 0 1.664.164 1.656.156c-.004-.004.004.016.157.188a2.4 2.4 0 0 0 .812.594c.8.332 1.602.98 2.219 1.624c.578.602.965 1.2 1.031 1.313c-.16.078-.328.133-.531.375c-.274.332-.371.563-.469.688c-.031.039-.027.05-.031.062c-.086-.012-.145-.066-.407-.281c-.328-.266-.98-.719-1.843-.719c-.657 0-1.028.3-1.344.5s-.57.344-.656.375l-.032.031h-.03c-.184.078-.5.094-.5.094L15 12.969v1.594l.344.28s1.187 1.048 2.375 2.5C18.906 18.798 20 20.669 20 22h-8c0-1.121-.313-2.297-.656-3.344s-.75-1.96-.906-2.375A7 7 0 0 1 10 13.97c-.031-1.606.543-3.043 1.531-4.031c.653-.653 1.625-1.47 2.156-1.782l.5-.281v-.563c0-.37 0-.992.22-1.468A1.23 1.23 0 0 1 15 5.219M11.5 24h9l2.25 3H9.25z"></svg:path>`,
})
export class LaChessKnightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChessPawnIcon],svg[la-chess-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c-2.2 0-4 1.8-4 4c0 1.2.559 2.266 1.406 3h-1.5c-.55.027-.98.496-.953 1.047s.496.98 1.047.953h.5l-1.406 3.563L10.375 23H8.906a1 1 0 0 0-.926.855c-.066.465.204.918.645 1.082l-1.344 1.344l-.281.313V29h18v-2.406l-.281-.313l-1.344-1.343c.457-.172.727-.649.633-1.13A1 1 0 0 0 23 23h-1.375l-.719-1.438L19.5 18h.5c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496h-1.406C19.44 15.266 20 14.2 20 13c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m-1.313 7h2.626l1.75 4.375l.03.031v.032l.282.562h-6.75l.281-.563v-.03l.031-.032zm-3.25 7h9.126l2 2H9.438z"></svg:path>`,
})
export class LaChessPawnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChessQueenIcon],svg[la-chess-queen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-1.094 0-2 .906-2 2c0 .73.402 1.371 1 1.719V8.25c0 .426-.324.75-.75.75h-2.344a.92.92 0 0 1-.75-.375A1.99 1.99 0 0 0 12 7c0-1.094-.906-2-2-2s-2 .906-2 2c0 .73.402 1.371 1 1.719v1.687l.281.313l2.344 2.344a1 1 0 0 0-.629 1.124A1 1 0 0 0 12 15h.656l-1.562 5.563l-.063.156L10.375 22H8.906c-.55.027-.98.496-.953 1.047s.496.98 1.047.953l-1.813 2.406l-.187.25V29h18v-2.344l-.188-.25L23 24c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496h-1.375l-.656-1.281l-.032-.063l-.03-.093L19.343 15H20a1 1 0 0 0 1.008-.809a1 1 0 0 0-.633-1.129l2.344-2.343l.281-.313V8.72c.598-.348 1-.989 1-1.719c0-1.094-.906-2-2-2s-2 .906-2 2c0 .668.332 1.262.844 1.625a.92.92 0 0 1-.75.375H17.75a.736.736 0 0 1-.75-.75V6.719c.598-.348 1-.989 1-1.719c0-1.094-.906-2-2-2m0 7.344c.48.402 1.082.656 1.75.656h1.813l-2 2h-3.125l-2-2h1.812c.668 0 1.27-.254 1.75-.656M14.75 15h2.5l1.781 6.281l.032.094l.312.625h-6.75l.313-.625l.03-.094zm-3.25 9h9l2.25 3H9.25z"></svg:path>`,
})
export class LaChessQueenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChessRookIcon],svg[la-chess-rook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v9h3.75l-.219 1h-.625c-.55.027-.98.496-.953 1.047s.496.98 1.047.953h.094l-1 4.563L10.375 22H8.906c-.55.027-.98.496-.953 1.047s.496.98 1.047.953l-1.813 2.406l-.187.25V29h18v-2.344l-.188-.25L23 24c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496h-1.375l-.719-1.438l-1-4.562H20c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496h-.531l-.219-1H23V4zm2 2h2v3h2V6h2v3h2V6h2v5H11zm3.781 7h2.438l.218 1h-2.875zm-.656 3h3.75l1.156 5.219l.032.125l.03.093l.282.563h-6.75l.281-.563l.031-.093l.032-.125zM11.5 24h9l2.25 3H9.25z"></svg:path>`,
})
export class LaChessRookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChevronCircleDownIcon],svg[la-chevron-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-5.281 7.781L9.28 14.22l6 6l.719.687l.719-.687l6-6l-1.438-1.438l-5.28 5.28z"></svg:path>`,
})
export class LaChevronCircleDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChevronCircleLeftIcon],svg[la-chevron-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m1.781 4.281l-6 6l-.687.719l.687.719l6 6l1.438-1.438L13.937 16l5.282-5.281z"></svg:path>`,
})
export class LaChevronCircleLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChevronCircleRightIcon],svg[la-chevron-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-1.781 4.281L12.78 10.72L18.062 16l-5.28 5.281l1.437 1.438l6-6l.687-.719l-.687-.719z"></svg:path>`,
})
export class LaChevronCircleRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChevronCircleUpIcon],svg[la-chevron-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m0 6.094l-.719.687l-6 6l1.438 1.438L16 13.937l5.281 5.282l1.438-1.438l-6-6z"></svg:path>`,
})
export class LaChevronCircleUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChevronDownIcon],svg[la-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.906 6.594l-.718.687l-3.907 3.907l-.687.718L16 26.312l14.406-14.406l-.687-.719l-3.907-3.906l-.718-.687L16 15.687zm-.031 2.843l8.406 8.376l.719.687l.719-.688l8.406-8.375l2.438 2.438L16 23.469L4.437 11.875z"></svg:path>`,
})
export class LaChevronDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChevronLeftIcon],svg[la-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.75 2.594l-.719.687l-12 12l-.687.719l.687.719l12 12l.719.687l.719-.687l3.593-3.625l.688-.688l-.688-.718L16.375 16l7.688-7.688l.687-.718l-.688-.688l-3.593-3.625zm0 2.844l2.188 2.187l-7.688 7.656l-.719.719l.719.719l7.688 7.656l-2.188 2.188L9.187 16z"></svg:path>`,
})
export class LaChevronLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChevronRightIcon],svg[la-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.25 2.594l-.719.687l-3.594 3.625l-.687.688l.688.718L15.625 16l-7.688 7.688l-.687.718l.688.688l3.593 3.625l.719.687l.719-.687l12-12l.687-.719l-.687-.719l-12-12zm0 2.844L22.813 16L12.25 26.563l-2.188-2.188l7.688-7.656l.719-.719l-.719-.719l-7.688-7.656z"></svg:path>`,
})
export class LaChevronRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChevronUpIcon],svg[la-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5.688L1.594 20.093l.687.718l3.906 3.907l.72.687L16 16.313l9.094 9.093l.718-.687l3.907-3.907l.687-.718zm0 2.843l11.563 11.594l-2.438 2.438l-8.406-8.375L16 13.5l-.719.688l-8.406 8.374l-2.438-2.437z"></svg:path>`,
})
export class LaChevronUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChildIcon],svg[la-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-2.75 0-5 2.25-5 5c0 1.57.766 2.957 1.906 3.875C11.176 12.93 10 14.832 10 17v3.406l.281.313L12 22.437V29h2v-5h4v5h2v-6.563l1.719-1.718l.281-.313V17c0-2.168-1.176-4.07-2.906-5.125C20.234 10.957 21 9.57 21 8c0-2.75-2.25-5-5-5m0 2c1.668 0 3 1.332 3 3s-1.332 3-3 3s-3-1.332-3-3s1.332-3 3-3m0 8c2.219 0 4 1.781 4 4v2.563l-.438.437h-7.125L12 19.562V17c0-2.219 1.781-4 4-4"></svg:path>`,
})
export class LaChildIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChromeIcon],svg[la-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.385 4 4 9.385 4 16s5.385 12 12 12s12-5.385 12-12S22.615 4 16 4m0 2a9.98 9.98 0 0 1 8.922 5.492l-6.807-.004A4.9 4.9 0 0 0 16 11c-1.625 0-3.06.796-3.975 2.006L8.44 9.459A9.97 9.97 0 0 1 16 6m-8.367 4.523l3.387 5.87a5.015 5.015 0 0 0 4.369 4.566l-1.276 4.857A9.98 9.98 0 0 1 6 16a9.96 9.96 0 0 1 1.633-5.477m17.808 2.202A9.986 9.986 0 0 1 16 26c-.186 0-.367-.017-.55-.027l3.392-5.871A5 5 0 0 0 21 16a5 5 0 0 0-.398-1.947l4.84-1.328zM16 13c1.671 0 3 1.329 3 3s-1.329 3-3 3s-3-1.329-3-3s1.329-3 3-3"></svg:path>`,
})
export class LaChromeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChromecastIcon],svg[la-chromecast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6c-1.103 0-2 .897-2 2v4h2V8h20v16h-8v2h8c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-2 8v2c5.17 0 9.436 3.942 9.95 8.979Q14 25.482 14 26h2c0-6.617-5.383-12-12-12m0 4v2c3.309 0 6 2.691 6 6h2c0-4.411-3.589-8-8-8m0 4v4h4a4 4 0 0 0-4-4"></svg:path>`,
})
export class LaChromecastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laChurchIcon],svg[la-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v2h-2v2h2v2.563l-3.719 3.718l-.281.313v3.812l-6.5 3.719l1 1.75l1.5-.844V29h8v-4c0-.555.445-1 1-1s1 .445 1 1v4h8v-6.969l1.5.844l1-1.75l-6.5-3.719v-3.812l-.281-.313L17 9.562V7h2V5h-2V3zm1 8.438l3 3v4.156l.5.281l3.5 2V27h-4v-2c0-1.645-1.355-3-3-3s-3 1.355-3 3v2H9v-6.125l3.5-2l.5-.281v-4.157zM16 15c-.55 0-1 .45-1 1v3h2v-3c0-.55-.45-1-1-1"></svg:path>`,
})
export class LaChurchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCircleIcon],svg[la-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6"></svg:path>`,
})
export class LaCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCircleNotchIcon],svg[la-circle-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4.18v2.023c4.559.93 8 4.969 8 9.797c0 5.516-4.484 10-10 10S6 21.516 6 16c0-4.828 3.441-8.867 8-9.797V4.18C8.336 5.137 4 10.066 4 16c0 6.617 5.383 12 12 12s12-5.383 12-12c0-5.934-4.336-10.863-10-11.82"></svg:path>`,
})
export class LaCircleNotchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCircleSolidIcon],svg[la-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.379 4 4 9.379 4 16s5.379 12 12 12s12-5.379 12-12S22.621 4 16 4m0 1c6.082 0 11 4.918 11 11s-4.918 11-11 11S5 22.082 5 16S9.918 5 16 5"></svg:path>`,
})
export class LaCircleSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCityIcon],svg[la-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 3.883l-7 3.5V28h26V10H17V7.383zm0 2.234l5 2.5V26H5V8.617zM7 10v2h2v-2zm4 0v2h2v-2zm6 2h10v14H17zM7 14v2h2v-2zm4 0v2h2v-2zm8 0v2h2v-2zm4 0v2h2v-2zM7 18v2h2v-2zm4 0v2h2v-2zm8 0v2h2v-2zm4 0v2h2v-2zM7 22v2h2v-2zm4 0v2h2v-2zm8 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaCityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laClinicMedicalIcon],svg[la-clinic-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4.906L3.625 10.063l-.625.28V27h26V10.344l-.625-.281zm0 2.188l11 4.593V25H5V11.687zM15 13v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class LaClinicMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laClipboardIcon],svg[la-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-1.258 0-2.152.89-2.594 2H6v23h20V5h-7.406C18.152 3.89 17.258 3 16 3m0 2c.555 0 1 .445 1 1v1h3v2h-8V7h3V6c0-.555.445-1 1-1M8 7h2v4h12V7h2v19H8z"></svg:path>`,
})
export class LaClipboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laClipboardCheckIcon],svg[la-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-1.258 0-2.152.89-2.594 2H5v25h22V4h-8.406C18.152 2.89 17.258 2 16 2m0 2c.555 0 1 .445 1 1v1h3v2h-8V6h3V5c0-.555.445-1 1-1M7 6h3v4h12V6h3v21H7zm14.281 7.281L15 19.562l-3.281-3.28l-1.438 1.437l4 4l.719.687l.719-.687l7-7z"></svg:path>`,
})
export class LaClipboardCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laClipboardListIcon],svg[la-clipboard-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-1.26 0-2.15.89-2.59 2H5v25h22V4h-8.41c-.44-1.11-1.33-2-2.59-2m0 2c.55 0 1 .45 1 1v1h3v2h-8V6h3V5c0-.55.45-1 1-1M7 6h3v4h12V6h3v21H7zm2 7v2h2v-2zm4 0v2h10v-2zm-4 4v2h2v-2zm4 0v2h10v-2zm-4 4v2h2v-2zm4 0v2h10v-2z"></svg:path>`,
})
export class LaClipboardListIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laClipboardSolidIcon],svg[la-clipboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3c-1.258 0-2.152.89-2.594 2H5v23h8v2h14V14h-2V5h-7.406C17.152 3.89 16.258 3 15 3m0 2c.555 0 1 .445 1 1v1h3v2h-8V7h3V6c0-.555.445-1 1-1M7 7h2v4h12V7h2v7H13v12H7zm8 9h10v12H15z"></svg:path>`,
})
export class LaClipboardSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laClockIcon],svg[la-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-1 2v9h7v-2h-5V8z"></svg:path>`,
})
export class LaClockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laClockSolidIcon],svg[la-clock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-1 2v9h7v-2h-5V8z"></svg:path>`,
})
export class LaClockSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloneIcon],svg[la-clone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v17h4v-2H7V7h13v2h2V5zm5 5v17h17V10zm2 2h13v13H12z"></svg:path>`,
})
export class LaCloneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloneSolidIcon],svg[la-clone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4C6.8 4 5 5.8 5 8c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 4 15v5.625l2 1V28h6v-6.375l2-1V19h-2v.375l-2 1V26H8v-5.625l-2-1V15c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.04 5.04 0 0 0-2.219-4.156C12.523 10.117 13 9.114 13 8c0-2.2-1.8-4-4-4m14 0c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 18 15v5.625l2 1V28h6v-6.375l2-1V15a5.04 5.04 0 0 0-2.219-4.156C26.523 10.117 27 9.114 27 8c0-2.2-1.8-4-4-4M9 6c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m14 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m0 6c1.668 0 3 1.332 3 3v4.375l-2 1V26h-2v-5.625l-2-1V15c0-1.668 1.332-3 3-3m-8 2.188V16h-4v2h4v1.813L17.813 17z"></svg:path>`,
})
export class LaCloneSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laClosedCaptioningIcon],svg[la-closed-captioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v17.906h28V6zm2 2h24v13.906H4zm8 2c-2.75 0-5 2.25-5 5s2.25 5 5 5a4.97 4.97 0 0 0 3.125-1.125l-1.25-1.563c-.527.426-1.168.688-1.875.688c-1.668 0-3-1.332-3-3s1.332-3 3-3c.707 0 1.348.262 1.875.688l1.25-1.563A4.97 4.97 0 0 0 12 10m10 0c-2.75 0-5 2.25-5 5s2.25 5 5 5a4.97 4.97 0 0 0 3.125-1.125l-1.25-1.563c-.527.426-1.168.688-1.875.688c-1.668 0-3-1.332-3-3s1.332-3 3-3c.707 0 1.348.262 1.875.688l1.25-1.563A4.97 4.97 0 0 0 22 10"></svg:path>`,
})
export class LaClosedCaptioningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laClosedCaptioningSolidIcon],svg[la-closed-captioning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v17.906h28V6zm2 2h24v13.906H4zm8 2c-2.75 0-5 2.25-5 5s2.25 5 5 5a4.97 4.97 0 0 0 3.125-1.125l-1.25-1.563c-.527.426-1.168.688-1.875.688c-1.668 0-3-1.332-3-3s1.332-3 3-3c.707 0 1.348.262 1.875.688l1.25-1.563A4.97 4.97 0 0 0 12 10m10 0c-2.75 0-5 2.25-5 5s2.25 5 5 5a4.97 4.97 0 0 0 3.125-1.125l-1.25-1.563c-.527.426-1.168.688-1.875.688c-1.668 0-3-1.332-3-3s1.332-3 3-3c.707 0 1.348.262 1.875.688l1.25-1.563A4.97 4.97 0 0 0 22 10"></svg:path>`,
})
export class LaClosedCaptioningSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudIcon],svg[la-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7c-2.648 0-4.95 1.238-6.594 3.063C9.27 10.046 9.148 10 9 10c-2.2 0-4 1.8-4 4c-1.73 1.055-3 2.836-3 5c0 3.3 2.7 6 6 6h16c3.3 0 6-2.7 6-6c0-3.156-2.488-5.684-5.594-5.906C23.184 9.574 19.926 7 16 7m0 2c3.277 0 6.012 2.254 6.781 5.281l.188.781l.843-.03c.211-.012.258-.032.188-.032c2.219 0 4 1.781 4 4s-1.781 4-4 4H8c-2.219 0-4-1.781-4-4a4.01 4.01 0 0 1 2.438-3.688l.687-.28l-.094-.75A6 6 0 0 1 7 14a1.984 1.984 0 0 1 2.469-1.938l.625.157l.375-.5A7 7 0 0 1 16 9"></svg:path>`,
})
export class LaCloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudDownloadAltIcon],svg[la-cloud-download-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6c-2.648 0-4.95 1.238-6.594 3.063C9.27 9.046 9.148 9 9 9c-2.2 0-4 1.8-4 4c-1.73 1.055-3 2.836-3 5c0 3.3 2.7 6 6 6h5v-2H8c-2.219 0-4-1.781-4-4a4.01 4.01 0 0 1 2.438-3.688l.687-.28l-.094-.75A6 6 0 0 1 7 13a1.984 1.984 0 0 1 2.469-1.938l.625.157l.375-.5A7 7 0 0 1 16 8c3.277 0 6.012 2.254 6.781 5.281l.188.781l.843-.03c.211-.012.258-.032.188-.032c2.219 0 4 1.781 4 4s-1.781 4-4 4h-5v2h5c3.3 0 6-2.7 6-6c0-3.156-2.488-5.684-5.594-5.906C23.184 8.574 19.926 6 16 6m-1 12v8h-3l4 4l4-4h-3v-8z"></svg:path>`,
})
export class LaCloudDownloadAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudMeatballIcon],svg[la-cloud-meatball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-3.227 0-6.027 2.258-6.781 5.344a5.12 5.12 0 0 0-2.813 2.687C2.91 11.772 0 14.555 0 18c0 3.309 2.691 6 6 6h3v-2H6c-2.207 0-4-1.793-4-4a4.003 4.003 0 0 1 4.875-3.906l1 .219l.188-.97c.245-1.104 1.144-1.983 2.25-2.25l.656-.155l.094-.657C11.422 7.847 13.543 6 16 6a4.99 4.99 0 0 1 4.469 2.75l.375.781l.843-.281C22.155 9.086 22.582 9 23 9c2.207 0 4 1.793 4 4c0 .039.004.09 0 .125c-.008.066-.023.117-.031.188l-.063.718l.657.281A4.003 4.003 0 0 1 26 22h-2v2h2c3.309 0 6-2.691 6-6a5.98 5.98 0 0 0-3-5.188C28.895 9.595 26.242 7 23 7a5.6 5.6 0 0 0-1.188.125A6.94 6.94 0 0 0 16 4m5 9c-.637 0-1.152.515-1.152 1.152c0 .043.02.08.023.121a1.14 1.14 0 0 0-1.533.065a1.14 1.14 0 0 0-.065 1.533c-.042-.005-.078-.023-.12-.023a1.152 1.152 0 1 0 0 2.304c.042 0 .078-.02.12-.023a1.14 1.14 0 0 0 .065 1.533a1.14 1.14 0 0 0 1.533.065c-.005.042-.023.078-.023.12a1.152 1.152 0 1 0 2.304 0c0-.042-.02-.078-.023-.12a1.14 1.14 0 0 0 1.533-.065a1.14 1.14 0 0 0 .065-1.533c.042.005.078.023.12.023a1.152 1.152 0 1 0 0-2.304c-.042 0-.078.02-.12.023a1.14 1.14 0 0 0-.065-1.533a1.14 1.14 0 0 0-1.533-.065c.005-.042.023-.078.023-.12A1.15 1.15 0 0 0 21 13m-9 2a1 1 0 0 0-1 1a1 1 0 0 0 0 2a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0 0-2a1 1 0 0 0-1-1m3 6c-.637 0-1.152.515-1.152 1.152c0 .043.02.08.023.121a1.14 1.14 0 0 0-1.533.065a1.14 1.14 0 0 0-.065 1.533c-.042-.005-.078-.023-.12-.023a1.152 1.152 0 1 0 0 2.304c.042 0 .078-.02.12-.023a1.14 1.14 0 0 0 .065 1.533a1.14 1.14 0 0 0 1.533.065c-.005.042-.023.078-.023.12a1.152 1.152 0 1 0 2.304 0c0-.042-.02-.078-.023-.12a1.14 1.14 0 0 0 1.533-.065a1.14 1.14 0 0 0 .065-1.533c.042.005.078.023.12.023a1.152 1.152 0 1 0 0-2.304c-.042 0-.078.02-.12.023a1.14 1.14 0 0 0-.065-1.533a1.14 1.14 0 0 0-1.533-.065c.005-.042.023-.078.023-.12A1.15 1.15 0 0 0 15 21"></svg:path>`,
})
export class LaCloudMeatballIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudMoonIcon],svg[la-cloud-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.406 5.938l-1.656.03c-3.742.137-6.75 3.227-6.75 7a6.99 6.99 0 0 0 2.688 5.5A5 5 0 0 0 4 21c0 2.758 2.242 5 5 5h16c2.758 0 5-2.242 5-5a4.99 4.99 0 0 0-3.031-4.594c-.282-2.418-2.313-4.308-4.782-4.406A5.97 5.97 0 0 0 17 9a6.01 6.01 0 0 0-5.375 3.344c-1.328-.547-2.281-1.836-2.281-3.375q.002-.84.344-1.563zM7.5 8.313c-.027.23-.156.417-.156.656a5.64 5.64 0 0 0 2.5 4.687c-.848.555-1.512 1.422-1.75 2.438c-.77.14-1.461.46-2.063.906A5.02 5.02 0 0 1 4 12.969c0-2.239 1.484-4.012 3.5-4.656M17 11c1.605 0 3.055.96 3.688 2.438l.28.687l.907-.094c.043-.008.078-.031.125-.031c1.652 0 2.996 1.352 3 2.938l-.031.968l.781.188A2.996 2.996 0 0 1 28 21c0 1.652-1.348 3-3 3H9c-1.652 0-3-1.348-3-3s1.348-3 3-3h1v-1c0-1.102.895-1.996 1.906-2l1 .063l.188-.844C13.469 12.359 15.102 11 17 11"></svg:path>`,
})
export class LaCloudMoonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudMoonRainIcon],svg[la-cloud-moon-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.406 5.938l-1.656.03c-3.742.137-6.75 3.227-6.75 7a6.99 6.99 0 0 0 2.688 5.5A5.03 5.03 0 0 0 4 21c0 2.758 2.242 5 5 5h1.16c.18-.63.5-1.32.87-2H9c-1.652 0-3-1.348-3-3s1.348-3 3-3h1v-1c0-1.102.895-1.996 1.906-2l1 .063l.188-.844C13.469 12.359 15.102 11 17 11c1.605 0 3.055.96 3.688 2.438l.28.689l.905-.096c.044-.009.08-.031.127-.031c1.652 0 2.996 1.351 3 2.938l-.031.968l.781.19A2.99 2.99 0 0 1 28 21c0 1.652-1.348 3-3 3h-1c0 .73-.22 1.41-.56 2H25c2.758 0 5-2.242 5-5c0-2.02-1.211-3.82-3.031-4.594c-.281-2.418-2.314-4.309-4.782-4.406A5.97 5.97 0 0 0 17 9a6.01 6.01 0 0 0-5.375 3.344c-1.328-.547-2.281-1.836-2.281-3.375q.002-.84.344-1.563zM7.5 8.313c-.027.23-.156.417-.156.656c0 1.953.988 3.663 2.5 4.687c-.848.554-1.512 1.422-1.75 2.438A4.95 4.95 0 0 0 6.031 17A5.03 5.03 0 0 1 4 12.969c0-2.238 1.484-4.012 3.5-4.656M20 20s-2 2.895-2 4a2 2 0 0 0 2 2c.137 0 .277-.004.406-.031A2.01 2.01 0 0 0 22 24c0-1.105-2-4-2-4m-6 3s-.285.453-.625 1c-.125.199-.242.363-.375.594c-.18.313-.344.616-.5.937c-.078.16-.156.318-.219.471c-.164.386-.281.744-.281.998a2 2 0 1 0 4 0c0-.254-.117-.613-.281-1c-.016-.031-.016-.059-.031-.094c-.056-.12-.124-.25-.186-.375A18 18 0 0 0 14.627 24c-.341-.547-.627-1-.627-1"></svg:path>`,
})
export class LaCloudMoonRainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudRainIcon],svg[la-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-3.227 0-6.027 2.258-6.781 5.344a5.1 5.1 0 0 0-2.813 2.687C2.91 11.773 0 14.555 0 18c0 3.309 2.691 6 6 6h2l1-2H6c-2.207 0-4-1.793-4-4a4.003 4.003 0 0 1 4.875-3.906l1 .219l.188-.97c.246-1.105 1.144-1.984 2.25-2.25l.656-.155l.094-.657C11.421 7.848 13.543 6 16 6a4.99 4.99 0 0 1 4.469 2.75l.375.781l.843-.281c.47-.164.895-.25 1.313-.25c2.207 0 4 1.793 4 4c0 .04.004.09 0 .125c-.008.066-.023.117-.031.188l-.063.718l.657.281A4.003 4.003 0 0 1 26 22h-2l1 2h1c3.309 0 6-2.691 6-6a5.98 5.98 0 0 0-3-5.188C28.895 9.595 26.242 7 23 7c-.39 0-.793.04-1.188.125A6.94 6.94 0 0 0 16 4m2 10s-2 2.895-2 4s.895 2 2 2s2-.895 2-2s-2-4-2-4m-5 5s-2 2.895-2 4s.895 2 2 2s2-.895 2-2s-2-4-2-4m8 3s-2 2.895-2 4s.895 2 2 2s2-.895 2-2s-2-4-2-4"></svg:path>`,
})
export class LaCloudRainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudShowersHeavyIcon],svg[la-cloud-showers-heavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-3.332 0-6.05 2.371-6.75 5.5c-1.219.48-2.125 1.371-2.656 2.563C6.394 13.039 6.21 13 6 13c-3.3 0-6 2.7-6 6c0 .066-.004.121 0 .188a5.966 5.966 0 0 0 4.844 5.687L6.75 23H6a3.99 3.99 0 0 1-4-3.875V19c0-2.219 1.781-4 4-4c.293 0 .578.027.875.094l1 .219l.188-.97c.246-1.113 1.14-1.984 2.25-2.25l.656-.155l.094-.688A4.97 4.97 0 0 1 16 7a5 5 0 0 1 4.469 2.75l.375.781l.843-.281c.438-.152.868-.25 1.313-.25c2.219 0 4 1.781 4 4c0-.008-.016.078-.031.313l-.063.718l.657.281A4.01 4.01 0 0 1 30 19c0 2.219-1.781 4-4 4h-.688l-2.03 2H26c3.3 0 6-2.7 6-6c0-2.164-1.27-3.945-3-5c0-3.3-2.7-6-6-6c-.434 0-.797.129-1.188.219C20.563 6.3 18.453 5 16 5m-2.406 14.094l-9.656 9.5L5.343 30L15 20.5zm5 0l-9.657 9.5L10.345 30L20 20.5zm5 0l-9.657 9.5L15.345 30L25 20.5z"></svg:path>`,
})
export class LaCloudShowersHeavyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudSunIcon],svg[la-cloud-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6v3.094a5 5 0 0 0-1.75.75L5.062 7.625L3.625 9.063l2.219 2.187a5 5 0 0 0-.75 1.75H2v2h3.125c.129.629.383 1.2.719 1.719l-2.219 2.218l.625.625C4.113 20.02 4 20.5 4 21c0 2.758 2.242 5 5 5h16c2.758 0 5-2.242 5-5a4.99 4.99 0 0 0-3.031-4.594c-.282-2.418-2.313-4.308-4.782-4.406A5.97 5.97 0 0 0 17 9c-.227 0-.438.008-.656.031l-1.407-1.406l-2.187 2.219A5.2 5.2 0 0 0 11 9.125V6zm1 5c.766 0 1.445.285 1.969.75a6 6 0 0 0-.656 1.313a4.02 4.02 0 0 0-3.22 3.03q-.08.014-.155.032C7.377 15.582 7 14.848 7 14c0-1.668 1.332-3 3-3m7 0c1.605 0 3.055.96 3.688 2.438l.28.687l.907-.094c.043-.008.078-.031.125-.031c1.652 0 2.996 1.352 3 2.938l-.031.968l.781.188A2.996 2.996 0 0 1 28 21c0 1.652-1.348 3-3 3H9c-1.652 0-3-1.348-3-3s1.348-3 3-3h1v-1c0-1.102.895-1.996 1.906-2l1 .063l.188-.844C13.469 12.359 15.102 11 17 11"></svg:path>`,
})
export class LaCloudSunIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudSunRainIcon],svg[la-cloud-sun-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6v3.094a5 5 0 0 0-1.75.75L3.062 7.625L1.625 9.063l2.219 2.187a5 5 0 0 0-.75 1.75H0v2h3.094c.133.637.398 1.227.75 1.75l-2.219 2.188l1.438 1.437l2.187-2.219q.451.3.969.5C6.098 19.086 6 19.536 6 20c0 2.758 2.242 5 5 5h1.156c.18-.629.504-1.316.875-2H11c-1.652 0-3-1.348-3-3s1.348-3 3-3h1v-1c0-1.102.895-1.996 1.906-2l1 .063l.188-.844C15.469 11.359 17.102 10 19 10c1.605 0 3.055.96 3.688 2.438l.28.687l.907-.094c.043-.008.078-.031.125-.031c1.652 0 2.996 1.352 3 2.938l-.031.968l.781.188A2.996 2.996 0 0 1 30 20c0 1.652-1.348 3-3 3h-1c0 .73-.219 1.41-.563 2H27c2.758 0 5-2.242 5-5a4.99 4.99 0 0 0-3.031-4.594c-.282-2.418-2.313-4.308-4.782-4.406A5.97 5.97 0 0 0 19 8a6.04 6.04 0 0 0-5.688 4.063c-.23.039-.44.078-.656.156a5 5 0 0 0-.5-.969l2.219-2.188l-1.438-1.437l-2.187 2.219A5 5 0 0 0 9 9.094V6zm1 5a2.99 2.99 0 0 1 2.938 2.438a4.1 4.1 0 0 0-.844 1.656a4.9 4.9 0 0 0-2.969 1.781A2.99 2.99 0 0 1 5 14c0-1.668 1.332-3 3-3m14 8s-2 2.895-2 4s.895 2 2 2c.137 0 .277-.004.406-.031A2.01 2.01 0 0 0 24 23c0-1.105-2-4-2-4m-6 3s-.285.453-.625 1c-.125.2-.242.363-.375.594c-.18.312-.344.617-.5.937c-.078.16-.156.317-.219.469c-.164.387-.281.746-.281 1a1.999 1.999 0 1 0 4 0c0-.254-.117-.613-.281-1c-.016-.031-.016-.059-.032-.094c-.054-.12-.125-.25-.187-.375A18 18 0 0 0 16.625 23c-.34-.547-.625-1-.625-1"></svg:path>`,
})
export class LaCloudSunRainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudUploadAltIcon],svg[la-cloud-upload-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7c-2.648 0-4.95 1.238-6.594 3.063C9.27 10.046 9.148 10 9 10c-2.2 0-4 1.8-4 4c-1.73 1.055-3 2.836-3 5c0 3.3 2.7 6 6 6h5v-2H8c-2.219 0-4-1.781-4-4a4.01 4.01 0 0 1 2.438-3.688l.687-.28l-.094-.75A6 6 0 0 1 7 14a1.984 1.984 0 0 1 2.469-1.938l.625.157l.375-.5A7 7 0 0 1 16 9c3.277 0 6.012 2.254 6.781 5.281l.188.781l.843-.03c.211-.012.258-.032.188-.032c2.219 0 4 1.781 4 4s-1.781 4-4 4h-5v2h5c3.3 0 6-2.7 6-6c0-3.156-2.488-5.684-5.594-5.906C23.184 9.574 19.926 7 16 7m0 8l-4 4h3v8h2v-8h3z"></svg:path>`,
})
export class LaCloudUploadAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudscaleIcon],svg[la-cloudscale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m0 4a7 7 0 0 0-6.967 7.666C9.207 14.063 11.353 12 14 12c1.31 0 2.487.515 3.375 1.342l-.863.732A2 2 0 0 0 16 14a2 2 0 1 0 2 2a2 2 0 0 0-.074-.512l3.928-4.634A.501.501 0 0 0 21.5 10a.5.5 0 0 0-.354.146l-.615.522A6.97 6.97 0 0 0 16 9"></svg:path>`,
})
export class LaCloudscaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudsmithIcon],svg[la-cloudsmith-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.854 3c-2.41 0-4.563 1.95-4.563 4.35c0 2.41-1.531 3.941-3.941 3.941c-2.4 0-4.35 2.152-4.35 4.563S7.95 20 10.35 20c2.41 0 4.357-1.734 4.357-4.145s1.737-4.146 4.147-4.146c2.4 0 4.146-1.95 4.146-4.36C23 4.952 21.254 3 18.854 3m.652 17a4.501 4.501 0 1 0-.01 9.002a4.501 4.501 0 0 0 .01-9.002"></svg:path>`,
})
export class LaCloudsmithIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCloudversifyIcon],svg[la-cloudversify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.275 7.002a8 8 0 0 0-2.388.299c-2.873.86-4.217 2.633-4.977 5.431c-.385.131-1.32.437-2.246 1.188a15 15 0 0 0-.697.592c.015.056.033.108.033.168v1.82a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V16h-.5a.5.5 0 0 0-.5.5v1.99a.5.5 0 0 0 .5.5h1.83a.7.7 0 0 0 .29-.072l.077.365c.608 3.16 3.45 5.296 7.219 5.098c2.565 2.144 6.847 2.262 9.324-.274c3.468.054 5.932-2.208 6.582-4.93c.75-3.09-.9-6.552-4.6-7.673c-1.238-3.266-4.321-4.455-6.947-4.502M9.5 8c-.275 0-.5.225-.5.5v1c0 .275.225.5.5.5h1c.275 0 .5-.225.5-.5v-1c0-.275-.225-.5-.5-.5zm-9 2c-.275 0-.5.225-.5.5v1c0 .275.225.5.5.5h1c.275 0 .5-.225.5-.5v-1c0-.275-.225-.5-.5-.5zm4 0a.5.5 0 0 0-.5.5v2.986a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10.5a.5.5 0 0 0-.5-.5zm16.324 0q.453.003.944.064c3.66.465 7.006 4.159 3.566 7.567c1.847-.82 2.542-2.732 2.473-3.861l.552.984a4.94 4.94 0 0 1 .498 3.617c-.485 1.958-2.136 3.464-4.191 3.852c-1.674.31-4.352-.234-4.814-2.955c-.554 2.323 1.143 3.618 2.91 4.337c-5.635 1.704-9.007-2.465-7.102-5.474c-1.743 1.084-1.779 3.482-1.537 4.578c-.947-.619-2.829-1.626-3.014-4.016c-.162-2.002 1.133-3.805 2.99-4.724c1.606-.797 5.428-.589 7.01 1.888c-.739-2.412-2.817-3.36-5.334-3.591c1.415-1.356 2.936-2.279 5.05-2.266zM1.5 15c-.275 0-.5.225-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class LaCloudversifyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCocktailIcon],svg[la-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 4A5.503 5.503 0 0 0 3 9.5C3 12.535 5.465 15 8.5 15c.813 0 1.578-.203 2.281-.531L16 21.344V27h-4v2h10v-2h-4v-5.656l8.813-11.625l.187-.281V8H13.75c-.605-2.32-2.766-4-5.25-4m0 2c1.39 0 2.59.84 3.125 2H7v1.438l.188.28l2.343 3.095A3.1 3.1 0 0 1 8.5 13A3.46 3.46 0 0 1 5 9.5A3.46 3.46 0 0 1 8.5 6m1.438 4h14.124l-1.5 2H13.5l1.5 2h6.031L17 19.344z"></svg:path>`,
})
export class LaCocktailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCodeIcon],svg[la-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 5l-6 22h2l6-22zM7.937 6.406l-6.75 9L.75 16l.438.594l6.75 9l1.625-1.188L3.25 16l6.313-8.406zm16.125 0l-1.625 1.188L28.75 16l-6.313 8.406l1.625 1.188l6.75-9L31.25 16l-.438-.594z"></svg:path>`,
})
export class LaCodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCodeBranchIcon],svg[la-code-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4C9.355 4 8 5.355 8 7c0 1.293.844 2.395 2 2.813v12.374c-1.156.418-2 1.52-2 2.813c0 1.645 1.355 3 3 3s3-1.355 3-3c0-1.27-.816-2.344-1.938-2.781c.145-1.23.622-1.836 1.376-2.344c.898-.605 2.277-.965 3.78-1.313c1.505-.347 3.118-.707 4.47-1.656c1.187-.832 2.085-2.195 2.28-4.093C25.142 12.402 26 11.3 26 10c0-1.645-1.355-3-3-3s-3 1.355-3 3c0 1.277.832 2.352 1.969 2.781c-.137 1.313-.645 1.965-1.407 2.5c-.898.63-2.285 1-3.78 1.344c-1.497.344-3.118.648-4.47 1.563c-.109.074-.21.167-.312.25V9.813c1.156-.418 2-1.52 2-2.813c0-1.645-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m12 3c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1M11 24c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaCodeBranchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCodepenIcon],svg[la-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2.844l-.563.375l-12 8.031l-.437.281v8.938l.438.281l12 8.031l.562.375l.563-.375l12-8.031l.437-.281V11.53l-.438-.281l-12-8.031zm-1 3.062v5.438l-5.156 3.469l-4.031-2.72zm2 0l9.188 6.188l-4.032 2.719L17 11.342zm-1 7.188L20.344 16L16 18.906L11.656 16zm-11 .844L8.063 16L5 18.063zm22 0v4.124L23.937 16zm-17.125 3.25L15 20.655v5.438l-9.188-6.188zm12.25 0l4.063 2.718L17 26.094v-5.438z"></svg:path>`,
})
export class LaCodepenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCodiepieIcon],svg[la-codiepie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.043 3c-7.18 0-13 5.82-13 13s5.82 13 13 13c5.434 0 9.973-3.336 11.916-8.07L17.125 16l10.533-5.809C25.524 5.931 21.132 3 16.043 3m0 2c3.534 0 6.77 1.666 8.824 4.447l-3.582 1.975A6.97 6.97 0 0 0 16 9a7 7 0 1 0 0 14a6.97 6.97 0 0 0 5.568-2.781l3.66 1.666C23.248 25.044 19.814 27 16.044 27c-6.065 0-11-4.935-11-11s4.934-11 11-11zM24 13v5h2v-2h.5a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class LaCodiepieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCoffeeIcon],svg[la-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3v4h2V3zm4 1v3h2V4zM4.875 8L5 9.094l1.813 17.218c.16 1.52 1.472 2.688 3 2.688h9.374c1.528 0 2.84-1.168 3-2.688l.47-4.312H25c1.645 0 3-1.355 3-3v-3c0-1.645-1.355-3-3-3h-1.406L24 9.094L24.125 8zm2.25 2h14.75l-1.688 16.094a1 1 0 0 1-1 .906H9.813c-.519 0-.945-.387-1-.906zm16.25 5H25c.566 0 1 .434 1 1v3c0 .566-.434 1-1 1h-2.156z"></svg:path>`,
})
export class LaCoffeeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCogIcon],svg[la-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.188 3l-.157.813l-.594 2.968a10 10 0 0 0-2.593 1.532l-2.906-1l-.782-.25l-.406.718l-2 3.438l-.406.719l.594.53l2.25 1.97C6.104 14.948 6 15.46 6 16s.105 1.05.188 1.563l-2.25 1.968l-.594.532l.406.718l2 3.438l.406.718l.782-.25l2.906-1a10 10 0 0 0 2.594 1.532l.593 2.968l.156.813h5.626l.156-.813l.593-2.968a10 10 0 0 0 2.594-1.532l2.907 1l.78.25l.407-.718l2-3.438l.406-.718l-.593-.532l-2.25-1.968C25.895 17.05 26 16.538 26 16c0-.54-.105-1.05-.188-1.563l2.25-1.968l.594-.531l-.406-.72l-2-3.437l-.406-.718l-.782.25l-2.906 1a10 10 0 0 0-2.593-1.532l-.594-2.968L18.812 3zm1.624 2h2.376l.5 2.594l.125.593l.562.188a8 8 0 0 1 3.031 1.75l.438.406l.562-.187l2.532-.875l1.187 2.031l-2 1.781l-.469.375l.157.594c.128.57.187 1.152.187 1.75s-.059 1.18-.188 1.75l-.125.594l.438.375l2 1.781l-1.188 2.031l-2.53-.875l-.563-.187l-.438.406a8 8 0 0 1-3.031 1.75l-.563.188l-.125.593l-.5 2.594h-2.375l-.5-2.594l-.124-.593l-.563-.188a8 8 0 0 1-3.031-1.75l-.438-.406l-.562.187l-2.531.875L5.875 20.5l2-1.781l.469-.375l-.156-.594A8 8 0 0 1 8 16c0-.598.059-1.18.188-1.75l.156-.594l-.469-.375l-2-1.781l1.188-2.031l2.53.875l.563.187l.438-.406a8 8 0 0 1 3.031-1.75l.563-.188l.124-.593zM16 11c-2.75 0-5 2.25-5 5s2.25 5 5 5s5-2.25 5-5s-2.25-5-5-5m0 2c1.668 0 3 1.332 3 3s-1.332 3-3 3s-3-1.332-3-3s1.332-3 3-3"></svg:path>`,
})
export class LaCogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCogsIcon],svg[la-cogs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v1.125c-.66.129-1.3.355-1.844.719l-.781-.782l-1.438 1.407l.813.812A5 5 0 0 0 11.031 9H10v2h1.031a5 5 0 0 0 .719 1.719l-.813.812l1.438 1.406l.781-.78c.543.363 1.184.59 1.844.718V16h2v-1.125c.61-.133 1.184-.352 1.688-.688l.75.75l1.406-1.406l-.75-.75c.36-.531.617-1.133.75-1.781H22V9h-1.156a4.9 4.9 0 0 0-.75-1.781l.75-.75l-1.407-1.407l-.75.75c-.503-.335-1.078-.554-1.687-.687V4zm.938 3c1.667 0 3 1.332 3 3s-1.333 3-3 3s-3-1.332-3-3s1.332-3 3-3M8 16v1.094a4.9 4.9 0 0 0-1.844.75l-.781-.782l-1.438 1.407l.813.812A5 5 0 0 0 4.031 21H3v2h1.031c.13.625.38 1.2.719 1.719l-.813.812l1.438 1.407l.781-.782a4.9 4.9 0 0 0 1.844.75V28h2v-1.125c.61-.133 1.184-.352 1.688-.688l.75.75l1.406-1.406l-.75-.75a5 5 0 0 0 .75-1.75L15.03 23l-.062-2l-1.125.031a4.9 4.9 0 0 0-.75-1.812l.75-.75l-1.406-1.407l-.75.75c-.504-.335-1.079-.554-1.688-.687V16zm14 0v1.125c-.66.129-1.3.355-1.844.719l-.781-.782l-1.438 1.407l.813.812A5 5 0 0 0 18.031 21H17v2h1.031a5 5 0 0 0 .719 1.719l-.813.812l1.438 1.407l.781-.782c.543.364 1.184.59 1.844.719V28h2v-1.125a4.9 4.9 0 0 0 1.656-.719l.782.782l1.406-1.407l-.75-.75a4.9 4.9 0 0 0 .75-1.75L29.03 23l-.062-2l-1.125.031c-.13-.652-.422-1.246-.782-1.781l.782-.781l-1.407-1.407l-.78.782A5 5 0 0 0 24 17.156V16zM8.937 19c1.668 0 3 1.332 3 3s-1.332 3-3 3s-3-1.332-3-3s1.333-3 3-3m14 0c1.668 0 3 1.332 3 3s-1.332 3-3 3s-3-1.332-3-3s1.333-3 3-3"></svg:path>`,
})
export class LaCogsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCoinsIcon],svg[la-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4c-1.793 0-3.418.336-4.688.969S14 6.633 14 8v4c0 .129.043.254.063.375A12.2 12.2 0 0 0 11 12c-1.793 0-3.418.336-4.688.969S4 14.633 4 16v8c0 1.367 1.043 2.398 2.313 3.031C7.582 27.664 9.207 28 11 28s3.418-.336 4.688-.969C16.956 26.398 18 25.367 18 24v-.406A11.7 11.7 0 0 0 21 24c1.793 0 3.418-.336 4.688-.969C26.956 22.398 28 21.367 28 20V8c0-1.367-1.043-2.398-2.313-3.031C24.419 4.336 22.794 4 21 4m0 2c1.523 0 2.879.328 3.781.781S26 7.711 26 8s-.316.766-1.219 1.219C23.88 9.672 22.523 10 21 10s-2.879-.328-3.781-.781S16 8.289 16 8s.316-.766 1.219-1.219C18.12 6.328 19.477 6 21 6m-5 4.844c.105.058.203.133.313.187c1.269.633 2.894.969 4.687.969s3.418-.336 4.688-.969c.109-.054.207-.129.312-.187V12c0 .29-.316.766-1.219 1.219c-.902.453-2.258.781-3.781.781s-2.879-.328-3.781-.781S16 12.289 16 12zM11 14c1.523 0 2.879.328 3.781.781S16 15.711 16 16s-.316.766-1.219 1.219c-.902.453-2.258.781-3.781.781s-2.879-.328-3.781-.781S6 16.289 6 16s.316-.766 1.219-1.219C8.12 14.328 9.477 14 11 14m15 .844V16c0 .29-.316.766-1.219 1.219c-.902.453-2.258.781-3.781.781a9.5 9.5 0 0 1-3-.469V16c0-.129-.043-.254-.063-.375c.93.242 1.961.375 3.063.375c1.793 0 3.418-.336 4.688-.969c.109-.054.207-.129.312-.187m-20 4c.105.058.203.133.313.187C7.582 19.664 9.207 20 11 20s3.418-.336 4.688-.969c.109-.054.207-.129.312-.187V20c0 .29-.316.766-1.219 1.219c-.902.453-2.258.781-3.781.781s-2.879-.328-3.781-.781S6 20.289 6 20zm20 0V20c0 .29-.316.766-1.219 1.219c-.902.453-2.258.781-3.781.781c-1.137 0-2.164-.16-3-.438v-1.937c.918.242 1.918.375 3 .375c1.793 0 3.418-.336 4.688-.969c.109-.054.207-.129.312-.187m-20 4c.105.058.203.133.313.187C7.582 23.664 9.207 24 11 24s3.418-.336 4.688-.969c.109-.054.207-.129.312-.187V24c0 .29-.316.766-1.219 1.219c-.902.453-2.258.781-3.781.781s-2.879-.328-3.781-.781S6 24.289 6 24z"></svg:path>`,
})
export class LaCoinsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laColumnsIcon],svg[la-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h8v18H7zm10 0h8v18h-8z"></svg:path>`,
})
export class LaColumnsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentIcon],svg[la-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v20h9.586L16 29.414L19.414 26H29V6zm2 2h22v16h-8.414L16 26.586L13.414 24H5zm4 3v2h14v-2zm0 4v2h14v-2zm0 4v2h10v-2z"></svg:path>`,
})
export class LaCommentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentAltIcon],svg[la-comment-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v18h5v5.078L14.352 23H29V5zm2 2h22v14H13.648L10 23.918V21H5z"></svg:path>`,
})
export class LaCommentAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentAltSolidIcon],svg[la-comment-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v18h5v5.078L14.352 23H29V5zm2 2h22v14H13.648L10 23.918V21H5z"></svg:path>`,
})
export class LaCommentAltSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentDollarIcon],svg[la-comment-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v20h9.586L16 29.414L19.414 26H29V6zm2 2h22v16h-8.414L16 26.586L13.414 24H5zm10 2v1.188c-1.156.417-2 1.521-2 2.814c0 1.645 1.355 3 3 3c.566 0 1 .434 1 1s-.434 1-1 1s-1-.434-1-1h-2c0 1.293.844 2.394 2 2.812V22h2v-1.188c1.156-.418 2-1.521 2-2.814c0-1.645-1.355-3-3-3c-.566 0-1-.434-1-1s.434-1 1-1s1 .434 1 1h2c0-1.293-.844-2.394-2-2.812V10z"></svg:path>`,
})
export class LaCommentDollarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentDotsIcon],svg[la-comment-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v18h5v5.078L14.352 23H29V5zm2 2h22v14H13.648L10 23.918V21H5zm5 5a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m6 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m6 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaCommentDotsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentDotsSolidIcon],svg[la-comment-dots-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v18h5v5.078L14.352 23H29V5zm2 2h22v14H13.648L10 23.918V21H5zm5 5a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m6 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m6 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaCommentDotsSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentMedicalIcon],svg[la-comment-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v20h9.586L16 29.414L19.414 26H29V6zm2 2h22v16h-8.414L16 26.586L13.414 24H5zm10 3v4h-4v2h4v4h2v-4h4v-2h-4v-4z"></svg:path>`,
})
export class LaCommentMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentSlashIcon],svg[la-comment-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.707 2.293L2.293 3.707l26 26l1.414-1.414L27.414 26H29V6H7.414zM3 7.243V26h9.586L16 29.414L19.414 26h2.344l-2-2h-1.172L16 26.586L13.414 24H5V9.242zM9.414 8H27v16h-1.586z"></svg:path>`,
})
export class LaCommentSlashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentSolidIcon],svg[la-comment-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v20h9.586L16 29.414L19.414 26H29V6zm2 2h22v16h-8.414L16 26.586L13.414 24H5zm4 3v2h14v-2zm0 4v2h14v-2zm0 4v2h10v-2z"></svg:path>`,
})
export class LaCommentSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentsIcon],svg[la-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v16h4v5.094l1.625-1.313L12.344 21H22V5zm2 2h16v12h-8.344l-.281.219L8 21.906V19H4zm20 2v2h4v12h-4v2.906L20.344 23h-7.5l-2.5 2h9.312L26 30.094V25h4V9z"></svg:path>`,
})
export class LaCommentsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentsDollarIcon],svg[la-comments-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v18h4v5.094l1.625-1.313L12.344 21H22V3zm2 2h16v14h-8.344l-.281.219L8 21.906V19H4zm7 2v1.04c-1.121.187-2 1.163-2 2.335c0 .754.422 1.453 1.11 1.797L13 13.617c-.004.223-.16.383-.383.383h-1.234a.37.37 0 0 1-.383-.383V13H9v.617c0 1.172.875 2.156 2 2.344V17h2v-1.04c1.125-.187 2-1.17 2-2.343a2.01 2.01 0 0 0-1.105-1.789L11 10.378c.008.009 0 .001 0-.003c0-.223.156-.375.383-.375h1.234a.37.37 0 0 1 .383.383V11h2v-.617c0-1.172-.875-2.156-2-2.344V7zm13 2v2h4v12h-4v2.906L20.344 23h-7.5l-2.5 2h9.312L26 30.094V25h4V9z"></svg:path>`,
})
export class LaCommentsDollarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCommentsSolidIcon],svg[la-comments-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v16h4v5.094l1.625-1.313L12.344 21H22V5zm2 2h16v12h-8.344l-.281.219L8 21.906V19H4zm20 2v2h4v12h-4v2.906L20.344 23h-7.5l-2.5 2h9.312L26 30.094V25h4V9z"></svg:path>`,
})
export class LaCommentsSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCompactDiscIcon],svg[la-compact-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-2.781 2.5A8.04 8.04 0 0 0 8.5 13.219l1.875.687a6.02 6.02 0 0 1 3.531-3.531zM16 13c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m5.625 3.094a6.02 6.02 0 0 1-3.531 3.531l.687 1.875a8.04 8.04 0 0 0 4.719-4.719z"></svg:path>`,
})
export class LaCompactDiscIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCompassIcon],svg[la-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m-1.031 2.063H15V7h2v-.938A9.945 9.945 0 0 1 25.938 15H25v2h.938A9.945 9.945 0 0 1 17 25.938V25h-2v.938A9.945 9.945 0 0 1 6.062 17H7v-2h-.938a9.945 9.945 0 0 1 8.907-8.938zM22.5 9.5l-8.344 4.656L9.5 22.5l8.344-4.656zm-6.5 5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class LaCompassIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCompassSolidIcon],svg[la-compass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m-1.031 2.063H15V7h2v-.938A9.945 9.945 0 0 1 25.938 15H25v2h.938A9.945 9.945 0 0 1 17 25.938V25h-2v.938A9.945 9.945 0 0 1 6.062 17H7v-2h-.938a9.945 9.945 0 0 1 8.907-8.938zM22.5 9.5l-8.344 4.656L9.5 22.5l8.344-4.656zm-6.5 5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class LaCompassSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCompressIcon],svg[la-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4v7H4v2h9V4zm8 0v9h9v-2h-7V4zM4 19v2h7v7h2v-9zm15 0v9h2v-7h7v-2z"></svg:path>`,
})
export class LaCompressIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCompressArrowsAltIcon],svg[la-compress-arrows-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.719 3.281L3.28 4.72L10.562 12H5v2h9V5h-2v5.563zm22.562 0L20 10.562V5h-2v9h9v-2h-5.563l7.282-7.281zM5 18v2h5.563L3.28 27.281l1.44 1.439L12 21.437V27h2v-9zm13 0v9h2v-5.563l7.281 7.282l1.438-1.438L21.437 20H27v-2z"></svg:path>`,
})
export class LaCompressArrowsAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laConciergeBellIcon],svg[la-concierge-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6v2h6V6zm3 3C9.703 9 4.574 13.84 4.062 20H2v5h28v-5h-2.063C27.427 13.84 22.297 9 16 9m0 2a9.927 9.927 0 0 1 9.938 9H6.063c.492-5.086 4.71-9 9.937-9M4 22h24v1H4z"></svg:path>`,
})
export class LaConciergeBellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laConfluenceIcon],svg[la-confluence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.508 5a.72.72 0 0 0-.606.32c-.01.01-.019.031-.029.051c-1.449 2.423-2.345 3.506-3.877 3.506c-1.655 0-4.053-1.266-8.693-3.467a.7.7 0 0 0-.315-.072a.74.74 0 0 0-.658.414s0 .01-.01.02l-2.254 5.11c-.17.362 0 .792.362.952c.992.471 2.965 1.404 4.748 2.266c2.814 1.36 5.15 1.9 7.105 1.9c5.763 0 8.19-4.702 9.612-6.96a.72.72 0 0 0-.24-.993l-4.74-2.927a.74.74 0 0 0-.405-.12m.416 2.477l2.592 1.601C23.836 11.733 21.929 14 18.28 14c-1.803 0-3.9-.572-6.234-1.701a554 554 0 0 0-3.65-1.744L9.62 7.779q.256.124.502.24c3.854 1.843 5.976 2.858 7.871 2.858c2.303 0 3.644-1.412 4.93-3.4zM13.71 16c-5.764 0-8.189 4.725-9.604 6.965c-.21.34-.1.793.24 1.004L9.1 26.89a.726.726 0 0 0 1.002-.24c1.443-2.43 2.335-3.514 3.878-3.514c1.654 0 4.05 1.264 8.711 3.472a.72.72 0 0 0 .973-.34c.01 0 .01-.011.01-.021l2.265-5.12a.73.73 0 0 0-.37-.952c-.993-.472-2.969-1.406-4.743-2.26C18.008 16.545 15.668 16 13.711 16zm0 2c1.804 0 3.905.578 6.25 1.719c1.254.603 2.606 1.245 3.644 1.738l-1.232 2.785l-.553-.263c-3.838-1.833-5.952-2.842-7.84-2.842c-2.306 0-3.643 1.404-4.918 3.383L6.48 22.934C8.161 20.276 10.065 18 13.71 18"></svg:path>`,
})
export class LaConfluenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laConnectdevelopIcon],svg[la-connectdevelop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.156 4.188l-.281.5l-6.25 10.906l-.281.5l.281.5L8.875 27.5l.281.5h13.688l.281-.5l6.25-10.906l.281-.5l-.281-.5l-6.25-10.906l-.281-.5zm2.438 2h6.125l-4.563 1.625zm9.125 0l-4.594 4.687l-2.188-2.281zM10.28 6.28l1.875 1.907l-1.906.687v-2.53zm11.531.188L24.438 11l-4.03 4.281l-3.563-3.687zM9.25 8.094v1.125l-.813.281zm3.656.875l2.531 2.625l-3.718 3.781l-1.469-1.563V9.938zM9.25 10.28v2.469l-1.656-1.781l.062-.125zm-2.188 1.594l2.188 2.344v3.719l-2.219 2.28l-2.375-4.124zM24.875 12L23.5 18.469L21.094 16zm-8.75.313L19.719 16L16 19.938l-3.594-3.813zm9.531.843l1.688 2.938l-2.282 3.968l-.687-.718zM10.25 15.281l.781.813l-.781.812zm10.156 1.438l2.875 2.937l-.343 1.594h-5.72l-.53-.563zm-8.687.125l3.594 3.843l-.563.563h-4.5v-2.938zm-2.469 2.5v1.906H7.625l-.094-.125zm14.875 1.187l.406.438l-.156.281h-.406zM8.187 22.25H9.25v1.844zm2.063 0h3.563l-3.5 3.719l-.063-.125zm4.938 0h1.593l3.5 3.75h-8.625zm2.968 0h4.563l-.625 3l-.438.75zm5.594 0h.063l-.094.156z"></svg:path>`,
})
export class LaConnectdevelopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laContaoIcon],svg[la-contao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.656 5.469C4.75 5.469 4 6.187 4 7.094v17.812c0 .907.75 1.625 1.656 1.625h3.719c-1.598-1.746-2.32-4.277-2.375-4.5c-.238-.949-1.172-5.101-1.5-7.062a16 16 0 0 1-.219-2.781c0-3.583 1.864-5.715 3.063-6.72zm16.5 0c1.614 1.449 2.5 3.937 2.5 3.937L18.25 10.75s-.945-2.125-3.125-2.125c-1.188 0-3.344.832-3.344 2.969c0 1.383.485 4.273 1.125 7.031c.778 3.34 1.621 5.094 3.781 5.094c3.555 0 3.532-3.532 3.532-3.532l6.437-1.437v1.563c0 3.109-2.023 5.539-2.656 6.218h2.344c.906 0 1.656-.718 1.656-1.625V7.094c0-.907-.75-1.625-1.656-1.625z"></svg:path>`,
})
export class LaContaoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCookieIcon],svg[la-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-2 4a1 1 0 0 0 0 2a1 1 0 0 0 0-2m5.5 1a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3M11 13a2 2 0 0 0 0 4a2 2 0 0 0 0-4m6 2a1 1 0 0 0 0 2a1 1 0 0 0 0-2m5 1a1 1 0 0 0 0 2a1 1 0 0 0 0-2m-9.5 3a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3m7 1a1.5 1.5 0 0 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaCookieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCookieBiteIcon],svg[la-cookie-bite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.371 4 4 9.371 4 16s5.371 12 12 12s12-5.371 12-12c0-.484-.035-.96-.094-1.434A2.5 2.5 0 0 1 26.5 15a2.5 2.5 0 0 1-2.34-1.64A4 4 0 0 1 22 14c-2.21 0-4-1.79-4-4c0-.734.21-1.414.559-2.008A.3.3 0 0 1 18.5 8A2.497 2.497 0 0 1 16 5.5c0-.559.188-1.066.496-1.48C16.332 4.012 16.168 4 16 4m7.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-9.45 2.188a4.53 4.53 0 0 0 1.997 3.085A6 6 0 0 0 16 10c0 3.309 2.691 6 6 6c.496 0 .992-.063 1.469-.188a4.5 4.5 0 0 0 2.484 1.157C25.465 22.03 21.188 26 16 26c-5.516 0-10-4.484-10-10c0-4.848 3.469-8.902 8.05-9.813zM22 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-8 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m13 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-16 3a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m5 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-3.5 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class LaCookieBiteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCopyIcon],svg[la-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v20h7v-2H6V6h12v1h2V4zm8 4v20h16V8zm2 2h12v16H14z"></svg:path>`,
})
export class LaCopyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCopySolidIcon],svg[la-copy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v20h7v-2H6V6h12v1h2V4zm8 4v20h16V8zm2 2h12v16H14z"></svg:path>`,
})
export class LaCopySolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCopyrightIcon],svg[la-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-.094 5c-3.324 0-6 2.676-6 6s2.676 6 6 6c2.399 0 4.45-1.438 5.406-3.469l-1.812-.843C18.855 19.058 17.508 20 15.906 20c-2.277 0-4-1.723-4-4s1.723-4 4-4c1.602 0 2.95.941 3.594 2.313l1.813-.844C20.355 11.438 18.305 10 15.905 10z"></svg:path>`,
})
export class LaCopyrightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCopyrightSolidIcon],svg[la-copyright-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-.094 5c-3.324 0-6 2.676-6 6s2.676 6 6 6c2.399 0 4.45-1.438 5.406-3.469l-1.812-.843C18.855 19.058 17.508 20 15.906 20c-2.277 0-4-1.723-4-4s1.723-4 4-4c1.602 0 2.95.941 3.594 2.313l1.813-.844C20.355 11.438 18.305 10 15.905 10z"></svg:path>`,
})
export class LaCopyrightSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCottonBureauIcon],svg[la-cotton-bureau-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.4 3C8.7 3 3 9 3 16s5.7 13 12.3 13h1.8c5.1 0 9.8-3.4 11.8-8h-2.1c-1.772 3.265-5.112 5.658-8.8 5.965v-1.766c0-1.308.558-2.478 1.568-3.178l.03-.019l.279-.223c.503.14 1.045.221 1.623.221c1.75 0 3.19-.692 4.123-1.742S27 17.848 27 16.5s-.444-2.708-1.377-3.758c-.786-.884-1.934-1.508-3.32-1.685c-.209-.84-.583-1.644-1.18-2.315C20.19 7.692 18.75 7 17 7s-3.19.692-4.123 1.742c-.597.671-.971 1.474-1.18 2.315c-1.386.177-2.534.801-3.32 1.685C7.444 13.792 7 15.152 7 16.5s.444 2.708 1.377 3.758S10.75 22 12.5 22c.578 0 1.12-.082 1.623-.22l.28.222l.029.02c1.01.7 1.568 1.869 1.568 3.177V27h-.6C9.7 27 5 22 5 16S9.7 5 15.3 5h1.8c4 0 7.8 2.5 9.6 6H29c-2-4.6-6.7-8-11.8-8zM17 9c1.25 0 2.06.433 2.627 1.07c.269.303.474.664.621 1.055c-1.187.244-2.171.83-2.871 1.617a5 5 0 0 0-.377.487a5 5 0 0 0-.377-.487c-.7-.787-1.684-1.373-2.871-1.617c.147-.39.352-.752.621-1.055C14.94 9.433 15.75 9 17 9m-5.45 4.105c.115 1.143.534 2.26 1.327 3.153c.7.787 1.684 1.373 2.871 1.617c-.147.39-.352.752-.621 1.055C14.56 19.567 13.75 20 12.5 20s-2.06-.433-2.627-1.07C9.306 18.292 9 17.403 9 16.5s.306-1.792.873-2.43c.407-.457.947-.802 1.678-.965zm10.9 0c.73.163 1.27.508 1.677.965c.567.638.873 1.527.873 2.43s-.306 1.792-.873 2.43C23.56 19.567 22.75 20 21.5 20s-2.06-.433-2.627-1.07a3.4 3.4 0 0 1-.621-1.055c1.187-.244 2.171-.83 2.871-1.617c.793-.892 1.212-2.01 1.326-3.153zm-8.895.034c.673.172 1.186.497 1.572.931c.432.486.71 1.119.818 1.791c-.673-.172-1.186-.497-1.572-.931c-.432-.486-.71-1.119-.818-1.791m6.89 0c-.109.672-.386 1.305-.818 1.79c-.386.435-.899.76-1.572.932c.109-.672.386-1.305.818-1.79c.386-.435.899-.76 1.572-.932M17 19.77q.174.253.377.487c.171.192.364.368.568.535c-.372.374-.667.81-.945 1.254c-.278-.444-.573-.88-.945-1.254c.204-.167.397-.343.568-.535A5 5 0 0 0 17 19.77"></svg:path>`,
})
export class LaCottonBureauIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCouchIcon],svg[la-couch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7c-1.645 0-3 1.355-3 3v2.188c-1.156.417-2 1.519-2 2.812v11h2v-2h26v2h2V15c0-1.293-.844-2.395-2-2.813V10c0-1.645-1.355-3-3-3zm0 2h20c.555 0 1 .445 1 1v2.188c-1.156.417-2 1.519-2 2.812v2H7v-2c0-1.293-.844-2.395-2-2.813V10c0-.555.445-1 1-1m-2 5c.555 0 1 .445 1 1v4h22v-4c0-.555.445-1 1-1s1 .445 1 1v7H3v-7c0-.555.445-1 1-1"></svg:path>`,
})
export class LaCouchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCpanelIcon],svg[la-cpanel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.12 12c-.36 0-.63.22-.72.54L3.66 19l1.23-.01a.73.73 0 0 0 .71-.53l1.29-4.75h.99c.42 0 .81.28.92.74a.938.938 0 0 1-.92 1.12h-.51c-.35 0-.63.23-.72.53l-.32 1.18h1.6c1.86 0 2.92-1.79 2.59-3.24A2.6 2.6 0 0 0 7.97 12zm24.6 0a.53.53 0 0 0-.52.39L28.42 19c1.03 0 1.99-.69 2.24-1.72l1.33-4.87c.06-.21-.1-.41-.33-.41zm-19.368 2l-.163.623a.686.686 0 0 0 .672.87h2.713c.19 0 .113.198.104.245l-.407 1.494c-.019.066-.046.247-.263.247H12.36c-.255 0-.255-.37 0-.37h1.022a.71.71 0 0 0 .672-.51l.16-.615h-2.287c-1.852 0-2.06 2.996-.028 2.996l2.711.01c.53 0 .976-.34 1.108-.842l.662-2.427A1.378 1.378 0 0 0 15.037 14zm-8.848.01c-1.087 0-2.082.66-2.422 1.928C-.334 17.526.877 19 2.455 19h.586l.34-1.229a.308.308 0 0 0-.303-.388H2.54c-1.163 0-1.172-1.758 0-1.758h.88a.7.7 0 0 0 .68-.51l.294-1.105zm17.277 0v.008h-2.277l-1.238 4.593a.306.306 0 0 0 .3.389h.89a.5.5 0 0 0 .491-.367l.813-2.996h.935c.595 0 1.023.547.862 1.095l-.502 1.872a.306.306 0 0 0 .302.396h.907a.495.495 0 0 0 .482-.37l.416-1.55c.425-1.559-.747-3.07-2.38-3.07zm5.158.002a1.9 1.9 0 0 0-1.824 1.388l-.51 1.871c-.236.832.397 1.731 1.342 1.731h3.147a.7.7 0 0 0 .672-.512l.273-.982H24.57a.243.243 0 0 1-.236-.313l.379-1.408c.038-.18.17-.283.367-.283h1.55c.124 0 .218.114.19.246l-.039.123c-.029.094-.084.133-.18.133h-1.02a.68.68 0 0 0-.67.51l-.17.613h2.523c.5 0 .963-.312 1.095-.832l.153-.559a1.367 1.367 0 0 0-1.332-1.726z"></svg:path>`,
})
export class LaCpanelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsIcon],svg[la-creative-commons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-4 6c-1.645 0-3 1.355-3 3v2c0 1.645 1.355 3 3 3s3-1.355 3-3h-2c0 .566-.434 1-1 1s-1-.434-1-1v-2c0-.566.434-1 1-1s1 .434 1 1h2c0-1.645-1.355-3-3-3m8 0c-1.645 0-3 1.355-3 3v2c0 1.645 1.355 3 3 3s3-1.355 3-3h-2c0 .566-.434 1-1 1s-1-.434-1-1v-2c0-.566.434-1 1-1s1 .434 1 1h2c0-1.645-1.355-3-3-3"></svg:path>`,
})
export class LaCreativeCommonsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsByIcon],svg[la-creative-commons-by-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.855 3 3 8.855 3 16s5.855 13 13 13s13-5.855 13-13S23.145 3 16 3m0 2c6.055 0 11 4.945 11 11s-4.945 11-11 11S5 22.055 5 16S9.945 5 16 5m0 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 5c-1.7 0-3 1.3-3 3v3l1 1v4h4v-4l1-1v-3c0-1.7-1.3-3-3-3"></svg:path>`,
})
export class LaCreativeCommonsByIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsNcIcon],svg[la-creative-commons-nc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11c0 1.238-.217 2.425-.596 3.537l-8.388-3.734a3 3 0 0 0-.346-.285a3 3 0 0 0-1.07-.456c-.104-.021-.214-.022-.32-.033l-1.112-.494c-.03-.047-.07-.086-.092-.139A1 1 0 0 1 15 14q.001-.215.076-.396a.96.96 0 0 1 .528-.528q.181-.075.396-.076c.57 0 1 .43 1 1h2a3 3 0 0 0-.148-.924A3.05 3.05 0 0 0 17 11.19V10h-2v1.19a3.08 3.08 0 0 0-1.674 1.464q-.105.203-.178.422a3 3 0 0 0-.113.508l-6.627-2.95C8.294 7.279 11.884 5 16 5M5.596 12.463l8.388 3.734c.252.232.538.429.856.565c.275.117.573.179.88.209l1.112.494c.03.047.07.086.092.139q.075.181.076.396a.98.98 0 0 1-.604.924q-.181.075-.396.076q-.215-.001-.396-.076a1 1 0 0 1-.317-.211A1 1 0 0 1 15 18h-2a2.94 2.94 0 0 0 .857 2.076a3.1 3.1 0 0 0 1.143.735V22h2v-1.19a3.02 3.02 0 0 0 1.96-2.335c.004-.02.002-.04.005-.059l6.627 2.95C23.706 24.721 20.116 27 16 27C9.935 27 5 22.065 5 16c0-1.238.217-2.425.596-3.537"></svg:path>`,
})
export class LaCreativeCommonsNcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsNcEuIcon],svg[la-creative-commons-nc-eu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11c0 1.238-.217 2.425-.596 3.537L17 15.35V14h-2.719c.117-.383.262-.727.438-1c.44-.684.949-1 1.75-1c.734 0 1.16.305 1.812 1.063l1.532-1.313c-.81-.934-1.907-1.75-3.344-1.75c-1.461 0-2.68.781-3.407 1.906c-.272.423-.47.906-.634 1.408l-6.02-2.68C8.294 7.279 11.884 5 16 5M5.596 12.463L11 14.869v.631h1.031c-.008.168-.031.332-.031.5s.023.332.031.5H11V18h1.219c.172.762.449 1.48.844 2.094c.726 1.125 1.945 1.906 3.406 1.906c1.37 0 2.508-.691 3.343-1.656l-1.53-1.313c-.627.723-1.012.969-1.813.969s-1.31-.316-1.75-1a4 4 0 0 1-.438-1H17v-.459l8.592 3.824C23.706 24.722 20.116 27 16 27C9.935 27 5 22.065 5 16c0-1.238.217-2.425.596-3.537"></svg:path>`,
})
export class LaCreativeCommonsNcEuIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsNcJpIcon],svg[la-creative-commons-nc-jp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11c0 1.238-.217 2.425-.596 3.537l-8.851-3.941L21 11h-2.375L16 14.313L13.531 11h-2.375l1.969 2.625l-6.717-2.99C8.294 7.278 11.884 5 16 5M5.596 12.463L13 15.76V18h2v1h-2v2h2v1h2v-1h2v-2h-2v-1h1.033l7.559 3.365C23.706 24.722 20.116 27 16 27C9.935 27 5 22.065 5 16c0-1.238.217-2.425.596-3.537"></svg:path>`,
})
export class LaCreativeCommonsNcJpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsNdIcon],svg[la-creative-commons-nd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 8v2h10v-2zm0 4v2h10v-2z"></svg:path>`,
})
export class LaCreativeCommonsNdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsPdIcon],svg[la-creative-commons-pd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11c0 1.238-.217 2.425-.596 3.537L14 14.016V14c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4a4.004 4.004 0 0 0-3.908 3.164l-5.684-2.53C8.294 7.279 11.884 5 16 5M5.596 12.463L12 15.314V18c0 2.206 1.794 4 4 4a4.004 4.004 0 0 0 3.908-3.164l5.684 2.53C23.706 24.721 20.116 27 16 27C9.935 27 5 22.065 5 16c0-1.238.217-2.425.596-3.537M14 16.205L18.033 18H18c0 1.103-.897 2-2 2s-2-.897-2-2z"></svg:path>`,
})
export class LaCreativeCommonsPdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsPdAltIcon],svg[la-creative-commons-pd-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-7 7v8h2v-2h2c1.654 0 3-1.346 3-3s-1.346-3-3-3zm8 0v8h3.5c1.93 0 3.5-1.794 3.5-4s-1.57-4-3.5-4zm-6 2h2a1.001 1.001 0 0 1 0 2h-2zm8 0h1.5c.813 0 1.5.916 1.5 2s-.687 2-1.5 2H19z"></svg:path>`,
})
export class LaCreativeCommonsPdAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsRemixIcon],svg[la-creative-commons-remix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-1.502 4L11 10.328v3.625l.064.026l-.066.021L8 15.139v3.377L11.002 20L14 18.59v.002l6.502 2.416L24 19.678v-3.623l-3-1.116v-3.521zm5.217 6.527l2.365.88l-1.582.6l-2.363-.878zm-4.715.5l5 1.862v1.865l-5-1.858zm8 1.1v1.861l-2 .76v-1.861z"></svg:path>`,
})
export class LaCreativeCommonsRemixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsSaIcon],svg[la-creative-commons-sa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m0 5c-2.206 0-4 1.794-4 4h-2l3 3l3-3h-2c0-1.103.897-2 2-2s2 .897 2 2v4c0 1.103-.897 2-2 2a2 2 0 0 1-1.723-1h-2.134c.447 1.721 1.998 3 3.857 3c2.206 0 4-1.794 4-4v-4c0-2.206-1.794-4-4-4"></svg:path>`,
})
export class LaCreativeCommonsSaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsSamplingIcon],svg[la-creative-commons-sampling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m.127 4a.5.5 0 0 0-.498.469l-.352 5.482l-.312-4.562a.5.5 0 0 0-.998 0l-.315 4.502l-.293-3.586a.5.5 0 0 0-.496-.46h-.004a.5.5 0 0 0-.498.454l-.455 4.703l-.187-1.053a.503.503 0 0 0-.924-.166L10.08 16H8v1h2.365a.5.5 0 0 0 .432-.246l.176-.3l.591 3.288a.52.52 0 0 0 .512.412a.5.5 0 0 0 .479-.453l.263-2.728l.373 4.568c.022.26.24.459.5.459h.002a.5.5 0 0 0 .496-.465l.272-3.887l.336 4.885a.5.5 0 0 0 .5.467h.002a.5.5 0 0 0 .498-.469l.314-4.927l.235 3.925a.5.5 0 0 0 .49.471h.008a.5.5 0 0 0 .498-.455l.347-3.856l.26 3.844c.018.26.233.464.494.467h.006a.5.5 0 0 0 .498-.453l.457-4.91l.297 2.162a.5.5 0 0 0 .953.133L21.498 17H24v-1h-2.83a.5.5 0 0 0-.457.3l-.264.602l-.646-4.7c-.034-.253-.25-.422-.506-.432a.5.5 0 0 0-.486.455l-.284 3.04l-.267-3.953a.5.5 0 0 0-.494-.466a.483.483 0 0 0-.504.455l-.317 3.515l-.318-5.345A.5.5 0 0 0 16.129 9z"></svg:path>`,
})
export class LaCreativeCommonsSamplingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsSamplingPlusIcon],svg[la-creative-commons-sampling-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m.127 4a.5.5 0 0 0-.498.469l-.352 3.668l-.314-2.748a.501.501 0 0 0-.998 0l-.315 3.236l-.293-2.32a.5.5 0 0 0-.494-.46h-.004a.5.5 0 0 0-.498.454l-.455 4.703l-.19-1.053a.5.5 0 0 0-.921-.166L10.08 16H8v1h2.365a.5.5 0 0 0 .432-.246l.176-.3l.591 3.288a.516.516 0 0 0 .514.412a.5.5 0 0 0 .477-.453L12.818 18l.375 3.541a.5.5 0 0 0 .498.459h.002a.5.5 0 0 0 .496-.465l.272-2.49l.336 3.488a.501.501 0 0 0 .998-.002L16.109 19l.235 2.53a.5.5 0 0 0 .492.47h.008a.5.5 0 0 0 .498-.455l.347-2.826l.26 2.814a.5.5 0 0 0 .492.467h.006a.5.5 0 0 0 .498-.453l.46-4.91l.296 2.162a.5.5 0 0 0 .953.133L21.498 17H24v-1h-2.828a.5.5 0 0 0-.457.3l-.264.602l-.646-4.7c-.034-.253-.257-.422-.506-.432a.5.5 0 0 0-.486.455L18.526 14l-.267-2.688a.5.5 0 0 0-.996-.011L16.945 13l-.318-3.53a.5.5 0 0 0-.498-.47zM15 14h2v1h1v2h-1v1h-2v-1h-1v-2h1z"></svg:path>`,
})
export class LaCreativeCommonsSamplingPlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsShareIcon],svg[la-creative-commons-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-6 4v10h4v4h8V13h-4V9zm2 2h4v2h-2v4h-2zm4 4h4v6h-4z"></svg:path>`,
})
export class LaCreativeCommonsShareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsZeroIcon],svg[la-creative-commons-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m0 5c-2.206 0-4 1.794-4 4v4c0 2.206 1.794 4 4 4s4-1.794 4-4v-4c0-2.206-1.794-4-4-4m0 2c.256 0 .5.054.725.143L14 17.875V14c0-1.103.897-2 2-2m2 2.12V18c0 1.103-.897 2-2 2c-.258 0-.502-.053-.729-.143z"></svg:path>`,
})
export class LaCreativeCommonsZeroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreditCardIcon],svg[la-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v2H5v2h23v10c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1"></svg:path>`,
})
export class LaCreditCardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCreditCardSolidIcon],svg[la-credit-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v2H5v2h23v10c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1"></svg:path>`,
})
export class LaCreditCardSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCriticalRoleIcon],svg[la-critical-role-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.014 3.363c-.537.296-9.72 5.535-10.868 6.182a.24.24 0 0 0-.144.242c.002 1.341.002 12.451.002 12.494a.16.16 0 0 0 .092.16c.007.004 6.865 3.944 10.781 6.198h.148c.546-.311 9.752-5.559 10.807-6.15a.29.29 0 0 0 .166-.286q-.006-6.18 0-12.36c0-.152-.034-.265-.182-.323c-.027-.011-10.704-6.15-10.716-6.157zm.341.91l9.676 5.557a1429 1429 0 0 1-5.084 1.914c-.036.013-.049.031-.033.07q.056.137.104.278c.017.053.04.064.093.043c.122-.048 5.136-1.934 5.221-1.96v11.376c-.003-.003-3.457-5.993-3.818-6.617c-.053-.091-.056-.092-.155-.073c-.35.07-.218.038-.33.07q2 3.47 4.01 6.952h-9.217c-.06 0-.094-.005-.092-.08l-.043-1.324c.002-.056-.02-.074-.074-.067a3.6 3.6 0 0 1-1.164.016c-.054-.01-.068.013-.068.062v.545c0 .036-.007.063-.05.057c-.849-.124-.678.009-2.038-1.631c-.134-.158-.253-.326-.38-.486a.072.072 0 0 1 0-.11c.418-.506.782-.89.74-1.61a1.2 1.2 0 0 0-.62-1.007c-.492-.293-1.103-.238-2.765-.238c-.186 0-.23.189-.088.238c.057.019.172.015.232.027c.248.048.266.134.266.668c.004 3.476.009 3.246-.055 3.92c-.025.26-.166.181-.328.219a.12.12 0 0 0-.1.088c-.017.064.02.13.084.146c.102.03 1.584.025 1.662.006c.166-.042.13-.23-.025-.244c-.371-.03-.453-.02-.479-.236c-.041-.365-.034-.318-.048-1.612c-.001-.09.002-.09.088-.09c.657 0 .713-.034.826.118q.535.725 1.08 1.441c.357.468.687.624 1.055.627c1.022.01.906-.017.906.049v.438c-.001.07-.013.082-.084.082H6.055c-.092 0-.103.012-.063-.057c1.534-2.663 1.297-2.253 3.33-5.774c.034-.059.03-.066-.039-.07c-.302-.02-.369-.063-.449.076c-.003.004-3.123 5.409-3.166 5.479V10.174c.13.036 1.317.494 1.322.494c.115.043.147.042.528-.254L5.994 9.84q-.005-.009-.006-.018l9.584-5.459l.012.008l-.004.002l-4.254 7.356c.167 0 .312.004.457-.004c.09-.006 3.766-6.499 4.215-7.223c.42.714 4 6.935 4.049 7.018c.066.115.11.149.582.193l.014-.016zm-.427 3.356a.78.78 0 0 0-.71.8c.008.313.162.542.438.686c.054.023.087.08.08.139c-.02.344-.014.102-.049 1.459c-.002.087-.004.09-.09.09c-1.506-.011-1.561.008-1.837-.096c-.098-.037-.15-.01-.17.094q-.084.445-.162.888c-.01.054.074.294.193-.011c.171-.438.39-.394 1.986-.42c.036 0 .069.003.067.056c-.035.703-.179 5.713-.184 5.99a.12.12 0 0 1-.097.132c-.574.183-1.213.845-.983 1.796c.29 1.201 1.55 1.155 1.686 1.149c1.453-.067 1.66-1.252 1.59-1.834a1.22 1.22 0 0 0-.614-.953a4 4 0 0 0-.43-.2c-.033-.015-.06-.032-.06-.076l-.184-6.027c0-.035.014-.047.05-.047c2.237.115 1.684.116 1.93.594c.036.069.085.076.13.008s.04-1.003.04-1.008c-.002-.085-.043-.11-.126-.096q-.136.031-.274.041l.002.004c-.567.014-1.696.02-1.7.02c-.04 0-.061-.011-.061-.055c-.054-1.696-.05-1.455-.05-1.484a.21.21 0 0 1 .11-.213c.407-.26.46-.839.121-1.194a.76.76 0 0 0-.642-.232m.072.414c.496.001.473.74-.004.734s-.481-.732.004-.732zm-6.998 2.219a4 4 0 0 0-.682.095c-1.472.334-2.12 1.694-1.984 2.971c.328 3.166 4.531 2.53 4.607 2.076c.001-.01.08-.409.17-.945a.1.1 0 0 0 .002-.05a.134.134 0 0 0-.15-.116c-.288.013.118.91-1.227 1.01c-1.83.135-2.685-1.331-2.67-2.512c.038-2.868 3.53-2.36 3.686-1.254c.019.14-.005.443.195.36a.13.13 0 0 0 .08-.116c.004-.04.053-.895.063-1.142c.006-.137-.044-.183-.18-.198c-.733-.083-1.273-.213-1.91-.18zm13.314 1.55a.1.1 0 0 0-.058.038c-.067.07-.013-.026-.91 2.054c-.065.153-.13.302-.203.45a.31.31 0 0 1-.291.17c-.116.002-.107.158.037.158h1.3c.191 0 .115-.156-.033-.184c-.214-.042-.664.052-.601-.107q.105-.274.222-.543a.11.11 0 0 1 .08-.051q.36-.02.721-.004a.096.096 0 0 1 .1.07q.098.254.203.504c.092.215-.108.246.017.276a1 1 0 0 0 .18.037c.143.004-.534-.008 2.504.013c.27.002.202-.157.262-.51l-.004-.001c.02-.115-.104-.276-.186.01c-.053.19-.135.188-.789.167a.15.15 0 0 1-.16-.12c-.023-.115-.017-1.954-.014-2.034v-.02a.126.126 0 0 1 .131-.12c.323-.035.176-.17.06-.17c-1.114-.005-1.06-.003-1.07.007c-.122.12-.009.15.004.15c.158.027.274-.008.274.212c0 2.094.002 1.945-.002 2.037c-.007.157-.027.217-.205.21c-.031 0-.216.034-.315-.099c-.258-.356-1.02-2.397-1.166-2.562a.1.1 0 0 0-.021-.022a.1.1 0 0 0-.067-.015zm-2.492.032c-.42-.003-.912.084-1.258.431c-.486.487-.697 1.687.34 2.239c.656.349 1.535.176 1.614.166c.324-.042.294-.624.294-.63c-.043-.144-.093-.118-.154-.054c-.05.053-.048.284-.34.375c-.339.106-1.135.081-1.425-.68c-.28-.729.044-1.874 1.341-1.492c.223.066.354.214.373.451c.01.118.133.124.166.014c.01-.034.012-.216.028-.478c.009-.143-.026-.2-.147-.23h-.002a3.5 3.5 0 0 0-.83-.112m-4.773.056l-.942.004c-.163.054-.161.15.034.166c.142.012.16.057.16.336c-.01 2.236-.009 1.835-.024 2.004a.11.11 0 0 1-.11.106c-.183.018-.356-.02-.487-.157c-.512-.536-.807-.913-.854-.97c.106-.114.206-.221.305-.332c.434-.494.04-1.065-.393-1.118c-.366-.045-.898-.04-1.482-.035c-.1.001-.291.13.055.166c.137.014.164.075.164.244c-.001.103-.014.71-.01 1.98c.002.349-.172.119-.29.304a.126.126 0 0 0 .132.088h.96c.187-.003.187-.18-.044-.174c-.197.006-.155-.058-.198-.871c-.005-.098.326-.09.405.017c.53.722.668 1.028 1.195 1.028c.512-.003 1.023.002 1.535-.002c.191-.002.123-.168 0-.168c-.239.004-.247-.067-.252-.108c-.017-.128-.032.056-.02-2.113c.004-.18.02-.216.198-.229c.004 0 .012.002.012 0c.173-.14-.033-.166-.05-.166zm1.826.004c-.087.002-.147.094-.02.155c.072.034.233-.042.233.209c-.008 2.327.054 2.248-.168 2.248c-.167 0-.19.166 0 .166q.585.004 1.066.004c.128-.001.133-.165.004-.17c-.155-.006-.294.025-.297-.176h-.002c-.037-2.082.002-2.152.002-2.162c.014-.136.156-.097.205-.123c.113-.06.07-.11.022-.14s-.981-.01-1.045-.01zm-4.736.28a.516.516 0 0 1 .611.453c.018.116.07.729-.602.66c-.087-.01-.105-.038-.105-.127c-.003-.242 0-.696-.002-.918c0-.03.038-.056.098-.068m10.084.52l.3.78h-.609zM11.74 16.376c.185.004.382.038.432.053c.747.218.911 1.204.615 1.918c-.229.546-.696.417-1.266.359c-.118-.01-.134-.028-.134-.146c0-1.482 0-1.66-.002-2.055c-.002-.106.17-.133.355-.129m10.742.785c-.448.051-.063.023-1.836.031c-.188.001-.18.168.03.168l.004.004c.19 0 .311-.242.191 2.533c-.008.153-.149.118-.203.127c-.12.022-.146.145-.012.17c.033.006-.095.012 1.739.016c.222 0 .228-.101.228-.12q.028-.238.063-.476c.016-.116-.118-.144-.159-.027c-.1.282.01.305-.81.281c-.23-.007-.192-.198-.192-.803c0-.422-.124-.339.637-.295c.183.011.126.163.184.262c.034.06.1.049.127-.015c.02-.051.056-.553.056-.563c.011-.175-.127-.096-.15-.088c-.266.092-.621.064-.775.076c-.08.006-.08.007-.08-.074v-.795c0-.075.002-.079.08-.076c.666.031.754-.01.773.252c.01.136.156.115.168.008c.017-.167.036-.335.049-.502c.006-.081-.029-.103-.112-.094m-3.224.03c-.253-.002-1.069 0-1.14.001c-.117 0-.14.14-.018.159c.142.022.268-.003.28.183c.012.156.032 1.577-.017 2.36c-.009.158-.155.114-.254.138c-.08.02-.073.155.022.166l1.885.01c.059 0 .272.06.255-.611c0-.012-.044-.164-.134-.053c-.19.232.156.372-.93.312c-.113-.006-.165-.066-.17-.18c-.029-.611-.02-1.947-.02-2.046c0-.291.12-.254.249-.27c.173-.02.154-.17-.008-.17zm-3.787.484c.014.099-.051 1.846-.055 1.945c-.018.413 1.261.62 1.244.129c0-.023-.053-1.827-.053-1.932v-.002l.018-.005c.606.47.51 1.542.268 1.925a.885.885 0 0 1-1.106.35c-1.03-.424-1.012-2.043-.316-2.41m1.347 4.635c9.517.004 8.954-.008 8.961.013c-.76.441-8.905 5.072-9.744 5.555a.145.145 0 0 1-.162 0h-.004c-.872-.503-9.547-5.487-9.674-5.567h9.032c.099 0 .1.002.1.098a85 85 0 0 1-.075 2.37c-.009.182.024.365.098.532c.212.508.414 1.022.62 1.532c.05.113.064.089.1.004c.685-1.616.64-1.502.666-1.592q.06-.187.067-.381c.002-.29-.06-2.481-.06-2.486c-.003-.06.015-.078.075-.078"></svg:path>`,
})
export class LaCriticalRoleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCropIcon],svg[la-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v4H4v2h4v14h14v4h2v-4h4v-2H11.437L22 11.437V21h2V9.437l3.719-3.718L26.28 4.28L22.563 8H11v2h9.563L10 20.563V4z"></svg:path>`,
})
export class LaCropIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCropAltIcon],svg[la-crop-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v4H4v2h4v14h14v4h2v-4h4v-2H10V4zm4 4v2h10v10h2V8z"></svg:path>`,
})
export class LaCropAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCrossIcon],svg[la-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v6H7v6h6v14h6V15h6V9h-6V3zm2 2h2v6h6v2h-6v14h-2V13H9v-2h6z"></svg:path>`,
})
export class LaCrossIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCrosshairsIcon],svg[la-crosshairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v2.063C9.734 5.538 5.54 9.733 5.062 15H3v2h2.063c.476 5.266 4.671 9.46 9.937 9.938V29h2v-2.063c5.266-.476 9.46-4.671 9.938-9.937H29v-2h-2.063c-.475-5.266-4.67-9.46-9.937-9.938V3zm0 4.031V9h2V7.031A9 9 0 0 1 24.969 15H23v2h1.969A9 9 0 0 1 17 24.969V23h-2v1.969A9 9 0 0 1 7.031 17H9v-2H7.031A9 9 0 0 1 15 7.031"></svg:path>`,
})
export class LaCrosshairsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCrowIcon],svg[la-crow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a4 4 0 0 0-4 4v5c0 4.079 3.055 7.439 7 7.932V27h2v-4h2v4h2v-4h6.385l3.078 2h4L11 13v-3h4c0-1.657-2.204-3-4-3H9.62A3.97 3.97 0 0 0 7 6m0 2c.202 0 .392.04.576.096A1 1 0 0 0 8 10a1 1 0 0 0 .904-.576C8.96 9.608 9 9.798 9 10v4.086l.91.59L19.64 21H11c-3.308 0-6-2.692-6-6v-5c0-1.103.897-2 2-2"></svg:path>`,
})
export class LaCrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCrownIcon],svg[la-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-1.645 0-3 1.355-3 3c0 1.125.633 2.113 1.563 2.625L11.624 14.5L7.03 11.219A3 3 0 0 0 8 9c0-1.645-1.355-3-3-3S2 7.355 2 9c0 1.348.926 2.469 2.156 2.844L6 22v5h20v-5l1.844-10.156C29.074 11.469 30 10.348 30 9c0-1.645-1.355-3-3-3s-3 1.355-3 3c0 .871.367 1.668.969 2.219L20.375 14.5l-2.938-5.875A3 3 0 0 0 19 6c0-1.645-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1M5 8c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m22 0c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m-11 2.25l3.094 6.188l1.5.375l5-3.563L24.187 21H7.813l-1.406-7.75l5 3.563l1.5-.375zM8 23h16v2H8z"></svg:path>`,
})
export class LaCrownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCrutchIcon],svg[la-crutch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.469 4a2 2 0 0 0-.469.031a2.01 2.01 0 0 0-1.469 1.094l-.5.938v.03c-.258.536-.234 1.157 0 1.688L15.97 8.844a10.9 10.9 0 0 0-2.875 5.094l-.719 2.843L11.125 18l.719.719l-4.531 4.562l-.875.125L5 24.844L7.156 27l1.438-1.438l.125-.875l4.562-4.53l.719.718l1.219-1.25l2.844-.719a10.9 10.9 0 0 0 5.093-2.875l1.063-1.062c.531.222 1.148.23 1.687-.031h.032l.937-.47c1.207-.6 1.484-2.265.531-3.218l-.031-.063l-6.438-6.406l-.187-.187A2 2 0 0 0 19.469 4m-.157 2c.004.004.024-.008.032 0L26 12.656c.008.008-.004.028 0 .031l-.969.47c-.008.003-.023.007-.031 0L18.844 7c-.008-.008-.004-.02 0-.031zm-1 3.313l4.375 4.374l-.937.907c-.18.18-.371.336-.563.5l-4.28-4.281c.163-.192.32-.383.5-.563zm-2.53 3.218l3.687 3.688c-.61.312-1.239.582-1.907.75l-1.468.375l.625-.625l-1.438-1.438l-.625.625l.375-1.469c.168-.667.438-1.296.75-1.906z"></svg:path>`,
})
export class LaCrutchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCss3Icon],svg[la-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.219 5l-.156.813l-.5 2.875l-.22 1.187H21.47l-.313 1.813H7.031l-.156.812l-.5 2.875l-.219 1.156h14.125l-.718 4.063L14.343 23l-4.093-2.25l.219-1.219l.219-1.156H5.811l-.125.813L5 23l-.156.75l.687.344l7.813 3.812l.406.188l.406-.157l9.156-3.843l.5-.188l.125-.562L27 6.187L27.219 5zm1.656 2h14.938l-2.75 15.469l-8.282 3.406l-6.687-3.25l.406-2.25h.781l-.25 1.438l.625.343L13.812 25l.438.25l.469-.219l6.156-2.843l.469-.22l.093-.53l1.032-5.72l.218-1.187H8.563l.126-.844h14.156l.125-.843l.687-3.813l.219-1.156H9.75z"></svg:path>`,
})
export class LaCss3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCss3AltIcon],svg[la-css3-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 4l2 21l8 3l8-3l2-21zm3.332 3h13.32l-.261 3l-5.696 3h5.428l-.512 6.008l.02-.008l-.276 3L16 24l-5.365-2l-.33-4h3.021l.156 2.033l2.518.871l2.521-.853l.346-4.051h-8.736l-.258-3l5.91-3H9.61z"></svg:path>`,
})
export class LaCss3AltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCubeIcon],svg[la-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.406l-.406.188l-10 4.5l-.594.25V22.03l.5.282l10 5.562l.5.281l.5-.281l10-5.563l.5-.28V9.343l-.594-.25l-10-4.5zm0 2.188l7.688 3.437L16 13.875l-7.688-3.844zm-9 5.031l8 4v9.656l-8-4.437zm18 0v9.219l-8 4.437v-9.656z"></svg:path>`,
})
export class LaCubeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCubesIcon],svg[la-cubes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4l-.375.156l-6 2.407l-.625.25v6.718l-5.406 2.344l-.594.281v8.063l.5.312l6 3.344l.469.25l.469-.219L16 25.125l5.563 2.781l.468.219l.469-.25l6-3.344l.5-.312v-8.063l-.594-.281L23 13.531V6.812l-.625-.25l-6-2.406zm0 2.188l3.281 1.28L16 8.75l-3.281-1.281zm-5 2.75l4 1.53v4.876l-4-1.781zm10 0v4.624l-4 1.782v-4.875zm-11 6.374l3.625 1.594L10 18.688l-3.625-1.813zm12 0l3.625 1.563L22 18.688l-3.625-1.782l1.125-.5zM5 18.407l4 2v4.907l-4-2.25zm22 0v4.657l-4 2.25v-4.907zm-12 .063v4.906l-4 2v-4.969zm2 0l4 1.937v4.969l-4-2z"></svg:path>`,
})
export class LaCubesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCutIcon],svg[la-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.656 4.313c-.773.093-1.46.64-1.687 1.437l-2.657 9.313l-3.343.968C11.73 14.336 10.258 13 8.5 13A3.514 3.514 0 0 0 5 16.5C5 18.422 6.578 20 8.5 20c1.29 0 2.426-.73 3.031-1.781l3.125-.875l-.875 3.125C12.731 21.074 12 22.21 12 23.5c0 1.922 1.578 3.5 3.5 3.5s3.5-1.578 3.5-3.5c0-1.758-1.336-3.23-3.031-3.469l4.469-15.656a2 2 0 0 0-.782-.063zm7.969 7.25l-8.719 2.468l-.656 2.281l8-2.28a1.996 1.996 0 0 0 1.375-2.47zM8.5 15c.84 0 1.5.66 1.5 1.5S9.34 18 8.5 18S7 17.34 7 16.5S7.66 15 8.5 15m7 7c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5"></svg:path>`,
})
export class LaCutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laCuttlefishIcon],svg[la-cuttlefish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3C9.831 3 4 8.831 4 16s5.832 13 13 13c3.641 0 7.017-1.465 9.502-4.125l.875-.936l-1.07-.707c-3.085-2.764-4.369-5.737-4.522-6.109C20.62 18.684 18.79 20 17 20a4 4 0 0 1 0-8c1.793 0 3.628 1.32 4.795 2.887c.137-.307 1.884-4.151 4.512-6.12l1.07-.706l-.875-.936A12.88 12.88 0 0 0 17 3m0 2c2.751 0 5.323.989 7.34 2.803c-1.271 1.147-2.301 2.567-3.045 3.779C20.073 10.667 18.59 10 17 10c-3.308 0-6 2.692-6 6s2.692 6 6 6c1.591 0 3.075-.67 4.297-1.586a21.2 21.2 0 0 0 3.078 3.75A10.88 10.88 0 0 1 17 27c-6.065 0-11-4.935-11-11S10.934 5 17 5"></svg:path>`,
})
export class LaCuttlefishIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDAndDIcon],svg[la-d-and-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.912 5.002a4.4 4.4 0 0 0-.947.072c-1.108.21-1.544.657-1.92.975c-.021-.253.047-.507.129-.76c-.978.696-1.575 1.634-1.83 2.815c-.13-.305-.169-.61-.182-.928c-.463.619-.575 1.331-.549 2.07c.03.898.276 1.718.951 2.371c-.195-.799-.073-1.559.286-2.324c.31 1.027.927 1.77 1.869 2.242c.005-.026.008-.034.008-.047q.001-.035-.004-.068a4.5 4.5 0 0 1 .107-1.787a.4.4 0 0 0 0-.168c-.138-.696-.02-1.336.473-1.873a1.595 1.595 0 0 1 2.314-.026c.303.314.441.704.49 1.125a2.88 2.88 0 0 1-.433 1.89c-.04.06-.044.103.004.155c.459.524-.232-.145 1.619 1.608l.25.24c.376-.46.67-.975.894-1.508c.39-.92.589-1.861.36-2.853c-.376-1.632-1.35-2.706-3.016-3.106a4.3 4.3 0 0 0-.873-.115m-1.453 4.07a.9.9 0 0 0-.174.285c-.074.232-.15.464-.193.7c-.1.537-.114 1.078.03 1.615a.33.33 0 0 0 .146.193c.416.275.762.62.978 1.074c.034.082.06.168.096.258c-.142-.163-.27-.326-.416-.468c-.476-.455-1.168-.73-2.02-1.297c-.428-.287-.792-.64-1.021-1.15c-.152.601-.086 1.137.217 1.661c-.562-.15-1.12-.179-1.713-.158c.385.245.726.52.955.914c.164.288.13.448-.13.64c-.74.508-1.613.804-2.296 1.44c.051.013.086.004.125 0c.333-.052.666-.095 1.008-.056c.467.05.786.297.851.7c.031.19.022.392-.004.585c-.026.206-.094.407-.142.613c.796-.683 1.67-1.228 2.7-1.53l-1.005-.179c.956-1.053 2.812-1.035 3.037-.898c-.705.06-1.38.227-2.011.627c.679.155.406.086 1.064.271c-.666.34-1.142.813-1.41 1.483c.35-.202.727-.27 1.121-.237c.925.081 1.456.807 1.08 1.713a1.3 1.3 0 0 1-.441.565l.013.039l.83-.104c-.139.327-.384.568-.687.77c.688.065 1.857-.603 1.965-1.11c-.268.021-.667.126-.68-.312c-.004-.103-.013-.018.121-.787c-.044.034-.09.078-.142.117c-.311.215-.485-.133-.403-.412c.078-.266.163-.534.25-.813c-.312-.099-.66-.125-1.015-.142c.216-.116 1.423-.396 2.5-.198c.428.077.18.574-.024.961c.437.034.698.034.992.09c.93.185.73.999.713 1.192c.783-.361 1.36-1.656 1.178-2.524c-.168.28-.376.511-.709.623c.013-.318-.152-.501-.42-.613c-.026-.013-.053-.06-.049-.086c.07-.456-.038-.872-.246-1.272c-.272-.533-.674-.955-1.107-1.359c-1.251-1.169-1.925-1.734-2.133-2.726c-.035-.16-.039-.319-.06-.499c-.035.056-.06.098-.083.141a2.43 2.43 0 0 0-.185 1.299c.022.18.077.338.22.467q.638.579 1.262 1.177c.433.417.831.894 1.047 1.452c-.069-.06-.114-.133-.162-.202c-.311-.434-.715-.787-1.104-1.152c-.497-.464-1-.92-1.466-1.404c-.848-.88-.822-1.68-.848-1.977m11.852 3.516c-.026 0-.052.01-.082.014c-.835.142-1.329.665-2.116 1.271c-.45.348-.595.163-.517-.021c.06-.15.142-.288.22-.43c.043-.077.099-.146.15-.219c-.008-.009-.02-.013-.029-.021c-1.168.786-2.02 1.821-2.496 3.148l.043.04c.013-.027.022-.052.04-.073a6 6 0 0 1 1.581-1.28c.787-.454 1.623-.787 2.54-.869c.186-.017.377-.003.568-.003a1 1 0 0 1-.23.046c-.8.103-1.535.387-2.227.795c-1.306.77-2.36 1.815-3.25 3.026c-.013.017-.016.037-.03.054c.628.228 1.037.745 1.561 1.102a.03.03 0 0 0 .018-.018l.052-.117c.528-1.156 1.168-2.247 2.02-3.201c.722-.808 1.643-1.085 2.703-.857c.255.056.493.188.744.29c.1-.06.223-.136.348-.2a4.6 4.6 0 0 1 1.154-.387c.636-.133 1.277-.212 1.926-.057V14.6c-.023-.02-.054-.037-.076-.063a5.3 5.3 0 0 0-1.735-1.142a4 4 0 0 0-1.726-.305a4.6 4.6 0 0 0-1.254.275a3 3 0 0 1-.332.096c-.212.052-.316-.134-.203-.293c.138-.198.146-.18.648-.516c.026-.017.053-.034.096-.064h-.11zm-9.413 1.264c.506.206.83.558 1.03 1.043c-.485.052-.887-.356-1.03-1.043m-6.47 1.377C6.38 16.288 5.502 17.45 5 18.859c.32-.253.645-.489 1.021-.695c-.359.958-.848 2.269-.337 4.344c.199.816.515 1.58 1.043 2.246c.125.159.274.295.412.441c.009-.009.016-.011.025-.02a3.2 3.2 0 0 1-.064-.94c.095.136.168.258.254.369c.545.687 1.241 1.177 2.042 1.529c1.081.485 2.21.571 3.37.369c2.375-.417 3.922-2.09 5.017-4.246c.042-.075.026-.122-.039-.178c-1.704-1.418-.987-.838-1.848-1.53c-.035.04 0-.008-.082.13c-.484.82-1.102 1.517-1.902 2.045c-.446.292-.93.507-1.475.507c-.933 0-1.651-.409-2.136-1.195c-.52-.838-.576-1.747-.356-2.687c.337-1.452 1.302-2.371 1.67-2.762c-.809-.266-1.428.072-2.008.596c.035-.597.186-1.126.51-1.602a9 9 0 0 0-2.803 1.887c-.013-.25.235-1.877.243-1.92a.35.35 0 0 0-.13-.318zm6.316.732c-.216.473-.068.962.317 1.285c.195.163.402.314.597.48c.2.164.32.375.342.637c.017.202.035.408.078.606c.095.455.385.79.735 1.078c.713.589 1.426 1.172 2.14 1.765c.774.644.602 1.41.563 2.407a2.23 2.23 0 0 0 1.449 2.2c.043.018.087.027.156.048c-.679-.782-.438-1.896.03-2.248c.012.095.016.185.038.275c.407 1.895 1.965 2.758 3.678 2.444c.692-.125 1.324-.381 1.856-.85c.087-.077.16-.176.256-.28c-.835.199-1.55.005-2.204-.454a.2.2 0 0 1 .082-.014c.921.077 1.757-.146 2.467-.748c.844-.713 1.15-1.842.752-2.834c-.357-.865-1.018-1.39-1.892-1.672c-.411-.133-.96-.18-1.24-.125c.427.172.609.284.812.516c.545.619.45 1.49-.235 1.959c-.506.348-1.075.45-1.681.39a1 1 0 0 1-.131-.025c.121-.16.26-.302.35-.465c.407-.722.235-1.81-.375-2.41c-.091-.09-.2-.167-.303-.252c-.013.056-.004.089.004.119c.182.713-.351 1.391-1.074 1.365c-.33-.013-.601-.161-.848-.363c-.844-.692-1.691-1.38-2.531-2.076a1.54 1.54 0 0 0-.87-.373c-.199-.017-.4-.026-.6-.04c-.254-.016-.381-.12-.45-.36c-.04-.147-.064-.292-.094-.438c-.065-.348-.268-.56-.62-.612c-.19-.03-.385-.043-.575-.064c-.562-.06-.857-.317-.979-.871"></svg:path>`,
})
export class LaDAndDIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDAndDBeyondIcon],svg[la-d-and-d-beyond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.92 11.002c-.906-.045-.915.752-.906.852a.55.55 0 0 0 .144.343a.56.56 0 0 1 .055-.426c.045.136.119.29.336.409a.8.8 0 0 1 .025-.364c-.063-.245.092-.453.291-.453c.308 0 .38.4.207.655c.1.145.255.252.354.351c.145-.163.246-.426.246-.625c.002-.372-.244-.715-.752-.742m.906.291c0 .036.019.38.436.68c.136.09.127.19.127.425c.082-.045.172-.1.28-.136c-.053.054-.127.128-.163.209c.045-.054.344-.237.662-.164a.6.6 0 0 0-.254.127a.7.7 0 0 1 .316-.008v-.192c.218 0 1.051-.153 1.051.78c0 .934-.842.789-.896.789a.51.51 0 0 1 .1.732h.019c1.514 0 1.658-1.233 1.658-1.54c0-.172-.044-1.45-1.531-1.522c-1.46 0-1.487.01-1.805-.18m-5.139.008c0 .036.019.373.436.672c.073.063.127.108.127.298v1.758c0 .19-.035.244-.117.29a5 5 0 0 1-.363.208h1.595c.453 0 .788-.063 1.178-.39a1.6 1.6 0 0 1 .035-.543a.5.5 0 0 0-.127.162c0-.263.074-.699.436-.934c0 .001-.163-.034-.408.057c.09-.145.452-.363.47-.363c-.335-1.08-1.494-1.052-1.494-1.034c-1.359 0-1.441.009-1.768-.181m3.979.435c-.073.073-.119.353-.055.498c.11.063.2.172.22.272c-.1-.227-.519-.272-.636-.553a.4.4 0 0 0 .045.309s-.1-.037-.316-.028c.082.027.237.155.219.237s-.318.161-.463.306c.218-.045.317-.009.353.082c.027.063-.008.154-.017.254c.073-.082.317-.245.498-.281c-.045-.009-.155-.035-.2-.035c.127-.145.4-.19.553-.162c-.1 0-.281.053-.353.117a1 1 0 0 1 .19.045a.5.5 0 0 0-.263.281c.317-.227.598.235.317.371c.036.01.128.002.164-.025a.32.32 0 0 1-.137.152c.127 0 .316-.08.371-.207c0 0-.08.026-.117-.01c-.027-.027 0-.136 0-.171c-.09.1-.145-.082-.045-.208a.8.8 0 0 0-.209-.027c.145-.045.473-.083.51-.01c.027.045-.047.155-.047.155c.181-.027.374.044.3.226c.135-.066.253-.264.216-.472c-.01.045-.072.109-.127.127c.009-.063-.046-.102-.092-.12c.082-.435-.663-.644-.635-1.088c-.045.063-.081.228-.035.327c.118.145.39.298.453.552c-.118-.29-.68-.516-.662-.914m-2.32.479c.325 0 .799.09.799.789c0 .943-.834.789-1.051.789v-1.568c.052 0 .143-.01.252-.01m4.486.181c-.236.018-.406.29-.478.254c-.054-.018.062-.162.062-.162a1.05 1.05 0 0 0-.463.588c.208-.263.626-.442.889-.406c-.471.018-.879.434-1.069.715c.091.036.073.027.29.199c.462-1.106.98-.706.998-.697c.1-.091.434-.172.615-.127c-.11-.117-.337-.281-.6-.281c-.218 0-.334.101-.361.064c-.027-.045.071-.12.117-.147m-1.703.21c.145.062.19.199.19.199c-.128 0-.163-.1-.19-.2zm-1.168.253s-.382.254-.418.662c0 0 .046-.072.092-.082c.027-.018.061 0 .025.082c-.009.027-.263.716.236 1.178c-.027-.073-.09-.344.11-.082c0 .018.272.319.707.319c.625 0 .953-.453 1.125-.807c-.046-.054-.228-.19-.336-.299c-.109.19-.372.48-.625.48c-.462 0-.7-.662-.147-1.205c-.027-.009-.199-.081-.363.11c0-.136.046-.229.092-.3c-.154.062-.445.253-.518.362c.01-.263.073-.344.028-.408zm2.863.02a.47.47 0 0 0-.344.152c-.036.036-.061.083-.09.12v.714c.155.118.316-.136.135-.326c.063.01.21.12.229.147c0 0 .117-.028.226-.028c.1 0 .181.019.254.055v-.834a.4.4 0 0 0-.12.062l-.036.028l-.045-.028c-.045-.045-.128-.062-.209-.062m-1.713.125c-.1.19.146.273.2.373c.045.082-.036.218.181.38c.671.527.417.363.47.825c.028.19.192.3.292.336a.3.3 0 0 1 0-.428c0 .634.869.608 1.04.291c-.1.054-.316-.009-.407-.082c.354.046.654-.19.672-.48c0-.29-.292-.517-.618-.489c.362.063.255.624-.226.516c.172-.118.144-.442-.055-.56c.063.19-.135.37-.334.207a23 23 0 0 0-.48-.39c-.11-.1-.254-.044-.3-.081c-.062-.054-.026-.174-.108-.229c-.073-.036-.136-.018-.208-.045c-.063-.027-.119-.081-.119-.144m1.721.771a.45.45 0 0 1 .01.409c.118-.018.246-.074.246-.2c0-.182-.22-.2-.256-.209m-.102 2.264c-3.7 0-3.88 4.961-.02 4.961c3.9 0 3.71-4.96.02-4.96zm11.25.041c-1.03 0-2 .07-2.51.11l.37.41v3.86l-.37.41c.52.04 1.54.1 2.58.1c2.1 0 2.95-1.03 2.95-2.44c0-1.47-1.16-2.45-3.02-2.45m-28.83.1l.42.43v1.47H0l.57.73v1.62l-.42.43c3.09 0 3.69.07 4.32-.3c.34-.2.5-.49.5-.88c0-.25.13-.94-.97-1.26c.86-.23.81-.9.81-.99c0-1.03-1.21-1.25-1.85-1.25zm8.76 0l-3.68.01l.37.41v3.85l-.37.41h4.06L10 19.8l-3.01.01v-.77l1.16.01v-.01l.7-1.06H6.99v-.74h2.62l-.7-1.05zm11.83 0l.37.43v3.84l-.36.42h1.95l-.37-.41v-2.37h.02c.18.53 2.22 2.14 2.42 2.78h1.07v-4.26l.37-.42h-1.96l.35.41v2.13h-.02c-.27-.72-2.11-2.08-2.26-2.55zm-11.18.01l2.2 3.29l.01.97l-.38.41h2.13l-.36-.41l-.01-.95l2.2-3.31h-2.08l.3.36l-1.02 1.86h-.02l-1.05-1.86l.32-.36zm-7.63.86c1 0 1.48-.04 1.48.45v.15c0 .61-.95.44-1.48.44zm15.79.1c1.84 0 1.94 2.76-.01 2.76c-1.87 0-1.84-2.76.01-2.76m11.042.012c1.165-.03 1.808.368 1.808 1.348c0 1.28-1.07 1.51-2.34 1.35V17.2q.282-.032.532-.038M2.443 18.87c.547-.007 1.127.031 1.127.451v.22h.01c0 .56-.63.47-1.65.47v-1.13c.152 0 .331-.008.513-.01z"></svg:path>`,
})
export class LaDAndDBeyondIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDashcubeIcon],svg[la-dashcube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.5 3l-.313.281L20.47 7H11c-2.75 0-5 2.25-5 5v10c0 2.75 2.25 5 5 5h10c2.75 0 5-2.25 5-5V3zM24 6.313V22c0 1.668-1.332 3-3 3H11c-1.668 0-3-1.332-3-3V12c0-1.668 1.332-3 3-3h10.313zM13 12c-1.094 0-2 .906-2 2v6c0 1.094.906 2 2 2h10.406l-1.687-1.719l-.719-.718V14c0-1.094-.906-2-2-2zm0 2h6v6h-6z"></svg:path>`,
})
export class LaDashcubeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDatabaseIcon],svg[la-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v24h20V4zm2 2h16v5H8zm0 7h16v6H8zm0 8h16v5H8z"></svg:path>`,
})
export class LaDatabaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDeafIcon],svg[la-deaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.719 2.281L2.28 3.72l26 26l1.438-1.438l-7.844-7.843C23.383 18.203 25 15.198 25 12c0-4.41-3.59-8-8-8a8.02 8.02 0 0 0-7.156 4.406zM17 6c3.309 0 6 2.691 6 6c0 2.531-1.273 5.031-2.563 7l-6.406-6.406C14.22 11.09 15.43 10 17 10c1.078 0 2.094.59 2.625 1.531l1.719-1A5 5 0 0 0 17 8c-2.078 0-3.828 1.203-4.594 2.969l-1.031-1.031A5.995 5.995 0 0 1 17 6m-5.844 9.344l-.156.125V16c0 1.43 1.215 1.98 2.031 2.344c.75.332.969.468.969.656c0 .688-1.082 1-2.094 1v2c1.961 0 3.375-.773 3.875-2zM9 22v1c0 2.758 2.242 5 5 5c2.906 0 4-1.84 4.875-3.313c.21-.351.406-.683.625-1l-1.438-1.437c-.023.035-.039.094-.062.125c-.316.434-.59.883-.844 1.313C16.32 25.09 15.77 26 14 26c-1.652 0-3-1.348-3-3v-1z"></svg:path>`,
})
export class LaDeafIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDeliciousIcon],svg[la-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5c-2.75 0-5 2.25-5 5v12c0 2.75 2.25 5 5 5h12c2.75 0 5-2.25 5-5V10c0-2.75-2.25-5-5-5zm0 2h6v9h9v6c0 1.668-1.332 3-3 3h-6v-9H7v-6c0-1.668 1.332-3 3-3"></svg:path>`,
})
export class LaDeliciousIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDemocratIcon],svg[la-democrat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.049 5a.31.31 0 0 0-.238.14c-.5.76-.591 2.25.279 3.06c.14.13.3.21.46.3c-.09.07-.19.13-.26.22l-3.03 4.04c-.3.39-.34.92-.12 1.36l.58 1.16c.22.44.67.72 1.16.72h1.26c.35 0 .67-.14.92-.38l1.55-1.41L11 19h14v-3.51c.66.49.84.89 1.73 2.22c.2.3.6.38.9.18l1.08-.72c.3-.2.38-.6.18-.91l-.8-1.19C26.95 13.35 25.04 12 22.97 12H13.4L9.94 8.59c1-.96 1.14-2.49.53-3.41a.405.405 0 0 0-.62-.06L8.09 7.44L6.31 5.1a.32.32 0 0 0-.26-.1zm7.52 9c.067 0 .136.034.173.104l.38.777l.858.129c.148.019.203.211.092.312l-.619.612l.149.85a.182.182 0 0 1-.268.193l-.768-.397l-.765.397a.182.182 0 0 1-.27-.194l.149-.85l-.62-.61c-.12-.103-.055-.295.102-.313l.86-.13l.378-.776c.033-.07.1-.104.168-.104zm4.382 0c.068 0 .139.034.176.104l.379.777l.857.129c.147.019.212.211.092.312l-.617.612l.146.85a.18.18 0 0 1-.267.193l-.768-.397l-.765.397a.184.184 0 0 1-.27-.194l.148-.85l-.619-.61a.181.181 0 0 1 .104-.313l.857-.13l.38-.776a.18.18 0 0 1 .167-.104m4.483 0c.068 0 .136.034.173.104l.38.777l.859.129c.148.019.212.211.091.312l-.619.612l.149.85a.182.182 0 0 1-.27.193l-.765-.397l-.768.397a.182.182 0 0 1-.268-.194l.149-.85l-.62-.61a.18.18 0 0 1 .102-.313l.86-.13l.379-.776a.18.18 0 0 1 .168-.104M11 21v5.35c0 .36.29.65.65.65h2.7c.36 0 .65-.29.65-.65V23h6v3.35c0 .36.29.65.65.65h2.7c.36 0 .65-.29.65-.65V21z"></svg:path>`,
})
export class LaDemocratIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDeploydogIcon],svg[la-deploydog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6c-2.206 0-4 1.794-4 4v12c0 2.206 1.794 4 4 4h20c2.206 0 4-1.794 4-4V10c0-2.206-1.794-4-4-4zm0 2h20c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2H6c-1.103 0-2-.897-2-2V10c0-1.103.897-2 2-2m6 2v4.555A3.96 3.96 0 0 0 10 14a4 4 0 0 0 0 8c.732 0 1.41-.21 2-.555V22h3V10zm10 0v4.555A3.96 3.96 0 0 0 20 14a4 4 0 0 0 0 8c.732 0 1.41-.21 2-.555V22h3V10zm-11.5 6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10.5 16.5m10 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 20.5 16.5"></svg:path>`,
})
export class LaDeploydogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDeskproIcon],svg[la-deskpro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.7 5c-.249.01-.694.04-.694.783v9.92C5.826 19.76 9.795 21 10.975 21h4.236a4 4 0 0 1-1.207-2.488c-.06-.625.883-.703.932-.088c.01.109.255 2.576 2.695 2.576h.299l1.517-2.578l.246-.422H23v-7.404c0-1.895-.834-5.606-5.883-5.586h-4.049c.476.506.866 1.147.866 1.99c-.001.625-.934.625-.934 0c0-2.123-2.263-2.01-2.46-1.99c-.01 0-.02-.01-.03-.01zm11.814 7.004c.927.06 1.77 1.008 1.394 2.299L17 12.975c.37-.724.957-1.007 1.514-.971M20.445 19l-1.091 2H24c1.794 0 4-1 5-2zM19 22c1 1 1.593 1.552 1.594 1.797c.01.092.029 1.999-1.828 2.887c-.521.245-.694.306-1.276.316L16 29c1 0 1.541 0 1.959-.05c2.449-.318 4.102-2.196 4.55-3.329c.134-.336.481-1.223.491-3.621z"></svg:path>`,
})
export class LaDeskproIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDesktopIcon],svg[la-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v18h13v2h-5v2h12v-2h-5v-2h13V6zm2 2h24v14H4z"></svg:path>`,
})
export class LaDesktopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDevIcon],svg[la-dev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v18h28V7zm2 2h24v14H4zm2 2v10h3c1.654 0 3-1.346 3-3v-4c0-1.654-1.346-3-3-3zm10 0c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h2v-2h-2v-2h2v-2h-2v-2h2v-2zm3.691 0l2.084 9.025a1.258 1.258 0 0 0 2.45 0L26.309 11h-2.053L23 16.44L21.744 11zM8 13h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8z"></svg:path>`,
})
export class LaDevIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDeviantartIcon],svg[la-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.375 4l-.281.313l-.407.375l-.093.125l-.063.125l-1.781 3.375l-.156.093H8.188v7.5h3.593l-3.469 6.625l-.124.219V28h5.437l.281-.313l.406-.375l.094-.125l.063-.125l1.781-3.375l.156-.093h7.407v-7.5h-3.594l3.468-6.625l.125-.219V4zm.844 2h2.593v2.781l-3.937 7.469l-.281.594l.406.5l.344.406l.281.344h3.188v3.5H15.78l-.281.187l-.594.375l-.187.157l-.125.218L12.78 26h-2.594v-2.781l3.907-7.469l.312-.563l-.406-.53l-.344-.407l-.281-.344h-3.188v-3.5h6.032l.25-.187l.593-.375l.22-.156l.124-.22z"></svg:path>`,
})
export class LaDeviantartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDharmachakraIcon],svg[la-dharmachakra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2.125c-.55 0-1 .45-1 1a1 1 0 0 0 .594.906a11.93 11.93 0 0 0-7.875 3.313a.95.95 0 0 0 .093-.375c0-.551-.449-1-1-1s-1 .449-1 1s.45 1 1 1a.95.95 0 0 0 .375-.094a11.95 11.95 0 0 0-3.156 7.719A1 1 0 0 0 3.125 15c-.55 0-1 .45-1 1s.45 1 1 1a1 1 0 0 0 .906-.594a11.95 11.95 0 0 0 3.157 7.719a.95.95 0 0 0-.375-.094c-.551 0-1 .45-1 1c0 .551.449 1 1 1s1-.449 1-1a.95.95 0 0 0-.094-.375a11.93 11.93 0 0 0 7.875 3.313a1 1 0 0 0-.594.906c0 .55.45 1 1 1s1-.45 1-1a1 1 0 0 0-.594-.906a11.93 11.93 0 0 0 7.875-3.313a.95.95 0 0 0-.093.375c0 .551.449 1 1 1s1-.449 1-1s-.45-1-1-1a.95.95 0 0 0-.375.094a11.95 11.95 0 0 0 3.156-7.719a1 1 0 0 0 .906.594c.55 0 1-.45 1-1s-.45-1-1-1a1 1 0 0 0-.906.594a11.95 11.95 0 0 0-3.157-7.719a1 1 0 0 0 .375.094c.551 0 1-.45 1-1c0-.551-.449-1-1-1s-1 .449-1 1c0 .136.043.254.094.375a11.93 11.93 0 0 0-7.875-3.313A1 1 0 0 0 17 3.125c0-.55-.45-1-1-1m-1.031 3.938H15v6.093a3.8 3.8 0 0 0-1.031.438L9.625 8.28a9.93 9.93 0 0 1 5.344-2.219zm2.031 0a9.96 9.96 0 0 1 5.375 2.218l-4.344 4.313A3.8 3.8 0 0 0 17 12.156zM8.219 9.719L12.563 14c-.184.313-.313.64-.407 1H6.062A9.94 9.94 0 0 1 8.22 9.719zm15.562 0A9.94 9.94 0 0 1 25.938 15h-6.094a4 4 0 0 0-.407-1zM16 14c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m-9.969 3h6.094c.094.36.25.688.438 1l-4.344 4.25C7.035 20.781 6.227 18.992 6.03 17zm13.844 0h6.094c-.196 1.992-1.004 3.781-2.188 5.25L19.438 18c.187-.313.343-.64.437-1m-5.906 2.406c.32.188.664.34 1.031.438v6.093a9.9 9.9 0 0 1-5.375-2.25zm4.062 0l4.344 4.282A9.9 9.9 0 0 1 17 25.938v-6.094a4.2 4.2 0 0 0 1.031-.438"></svg:path>`,
})
export class LaDharmachakraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDhlIcon],svg[la-dhl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.63 13l-1.02 1.39h5.57c.28 0 .274.11.134.296c-.14.19-.373.519-.513.709c-.07.1-.207.275.228.275h2.282s.363-.5.673-.92c.42-.57.036-1.75-1.459-1.75H5.631zm9.604 0l-1.964 2.67h7.18L22.413 13H19.48l-1.125 1.53h-1.31L18.17 13zm8.141 0l-1.965 2.67h3.11L26.484 13zm-17.13 1.74l-2.056 2.79h5.006c1.655 0 2.575-1.124 2.86-1.514h-3.41c-.435 0-.3-.18-.23-.276c.14-.19.38-.52.52-.705s.14-.295-.14-.295zM0 16.016v.32h4.53l.236-.32zm13.016 0l-1.116 1.51h2.936l1.113-1.51zm4.25 0c-.005 0-1.116 1.51-1.116 1.51h2.936l1.113-1.51zm3.888 0s-.213.293-.318.433c-.37.5-.047 1.08 1.158 1.08h4.717l1.113-1.513zm7.211 0l-.234.32H32v-.32zM0 16.609v.32h4.09l.234-.32zm27.926 0l-.237.32H32v-.32zM0 17.205v.32h3.654l.237-.32zm27.484.006l-.234.318H32v-.318z"></svg:path>`,
})
export class LaDhlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiagnosesIcon],svg[la-diagnoses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 8h-1.38a5 5 0 0 0-4.33 2.52c.71.08 1.33.46 1.73 1.01c.52-.94 1.51-1.53 2.6-1.53h2.76c.44 0 .85.09 1.23.26c.21-.69.71-1.24 1.35-1.53a4.9 4.9 0 0 0-2.58-.73zm0-6c1.12 0 2 .88 2 2s-.88 2-2 2s-2-.88-2-2s.88-2 2-2m5 8a1 1 0 0 0 0 2a1 1 0 0 0 0-2m-11 2a1 1 0 0 0 0 2a1 1 0 0 0 0-2m12.73.81c-.45.43-1.06.69-1.73.69c-.05 0-.11 0-.16-.01l1.25 2.92l.19.47l.53.09l5 1l.38-1.94l-4.47-.91zM15 18a1 1 0 0 0 0 2a1 1 0 0 0 0-2m-6.63 1.9l-.09.22l-4.47.91l.38 1.94l5-1l.53-.09l.19-.47l.4-.93a2.5 2.5 0 0 1-1.941-.58zM18 21a1 1 0 0 0 0 2a1 1 0 0 0 0-2M2 25v2h28v-2z"></svg:path>`,
})
export class LaDiagnosesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiasporaIcon],svg[la-diaspora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.006 5v6.143l-5.637-1.88l-2.215 6.641l5.662 1.889L6.1 22.801l5.62 4.172l3.67-4.946l3.471 5.073l5.776-3.954l-3.598-5.255l5.777-1.868l-2.152-6.662L20 11.191L19 5zM14 7h3.006v6.94l6.371-2.06l.922 2.854l-6.422 2.077l3.98 5.814l-2.476 1.693l-3.926-5.736l-4.148 5.594l-2.41-1.79l4.17-5.618l-6.381-2.127l.947-2.846L14 14z"></svg:path>`,
})
export class LaDiasporaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiceIcon],svg[la-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L0 13l12 12l12-12zm0 2.8l9.2 9.2l-9.2 9.2L2.8 13zM12 8a1 1 0 0 0 0 2a1 1 0 0 0 0-2m-4 4a1 1 0 0 0 0 2a1 1 0 0 0 0-2m4 0a1 1 0 0 0 0 2a1 1 0 0 0 0-2m4 0a1 1 0 0 0 0 2a1 1 0 0 0 0-2m10.8 1l-2 2H30v12H18v-5.2l-2 2V29h16V13zM12 16a1 1 0 0 0 0 2a1 1 0 0 0 0-2m12 4a1 1 0 0 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class LaDiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiceD20Icon],svg[la-dice-d20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3.719l-.625.5l-8.25 6.406l-.25.219l-.094.312l-2.75 10.094l-.218.781L16 28.125l12.188-6.094l-.22-.781l-2.75-10.094l-.093-.312l-.25-.219l-8.25-6.406zm-1 3.344V10h-3.781zm2 0L20.781 10H17zM9.062 12H14l-3.594 4.781zM18 12h4.938l-1.344 4.781zm-2 .688L20 18h-8zM7.812 15l1 3.5l-2.25 1.125zm16.375 0l1.25 4.625l-2.25-1.125zM12 20h8l-4 5.313zm-2.313.281l2.938 3.907L7.25 21.5zm12.626 0L24.75 21.5l-5.375 2.688z"></svg:path>`,
})
export class LaDiceD20Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiceD6Icon],svg[la-dice-d6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2.938L4.656 7.061L4 7.313v15.282l.531.281l11 6l.469.25l.469-.25l11-6l.531-.281V7.312l-.656-.25zm0 2.124l8.375 3.032L16 11.906L7.625 8.094zM16 7c-1.105 0-2 .45-2 1s.895 1 2 1s2-.45 2-1s-.895-1-2-1M6 9.531l9 4.094v12.688l-9-4.907zm20 0v11.875l-9 4.907V13.624zM12.656 14c-.37 0-.656.355-.656.875c0 .668.355 1.36.875 1.656c.148.074.32.063.469.063c.222 0 .351-.07.5-.219c.074-.148.156-.36.156-.656c0-.668-.45-1.36-.969-1.656c-.148-.075-.226-.063-.375-.063m7.375 1a1 1 0 0 0-.25.094c-.61.261-1.125 1.125-1.125 1.906c0 .262-.02.512.157.688c.175.175.363.28.625.28c.175 0 .355-.007.53-.093c.61-.348 1.032-1.148 1.032-1.844c0-.61-.258-1.031-.781-1.031c-.043 0-.114-.012-.188 0m-9.906 1.281c-.371 0-.656.356-.656.875c0 .668.355 1.328.875 1.625a.9.9 0 0 0 .437.094c.223 0 .383-.07.531-.219c.075-.148.157-.39.157-.687c0-.668-.45-1.328-.969-1.625c-.148-.074-.227-.063-.375-.063m13.406 1.157c-.074.011-.164.019-.25.062c-.61.262-1.125 1.156-1.125 1.938c0 .261.012.511.188.687s.332.25.593.25c.176 0 .356.023.532-.063c.61-.347 1.031-1.148 1.031-1.843c0-.61-.258-1.032-.781-1.032c-.043 0-.114-.011-.188 0zm-15.875.968c-.37 0-.656.356-.656.875c0 .668.355 1.36.875 1.657c.148.074.32.062.469.062c.222 0 .351-.07.5-.219c.074-.148.156-.36.156-.656c0-.668-.45-1.36-.969-1.656c-.148-.074-.226-.063-.375-.063"></svg:path>`,
})
export class LaDiceD6Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiceFiveIcon],svg[la-dice-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 2a2 2 0 0 0 0 4a2 2 0 0 0 0-4m10 0a2 2 0 0 0 0 4a2 2 0 0 0 0-4m-5 5a2 2 0 0 0 0 4a2 2 0 0 0 0-4m-5 5a2 2 0 0 0 0 4a2 2 0 0 0 0-4m10 0a2 2 0 0 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class LaDiceFiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiceFourIcon],svg[la-dice-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 2a2 2 0 0 0 0 4a2 2 0 0 0 0-4m10 0a2 2 0 0 0 0 4a2 2 0 0 0 0-4M11 19a2 2 0 0 0 0 4a2 2 0 0 0 0-4m10 0a2 2 0 0 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class LaDiceFourIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiceOneIcon],svg[la-dice-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm9 7a2 2 0 0 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class LaDiceOneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiceSixIcon],svg[la-dice-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 1a2 2 0 0 0 0 4a2 2 0 0 0 0-4m10 0a2 2 0 0 0 0 4a2 2 0 0 0 0-4m-10 6a2 2 0 0 0 0 4a2 2 0 0 0 0-4m10 0a2 2 0 0 0 0 4a2 2 0 0 0 0-4m-10 6a2 2 0 0 0 0 4a2 2 0 0 0 0-4m10 0a2 2 0 0 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class LaDiceSixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiceThreeIcon],svg[la-dice-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 2a2 2 0 0 0 0 4a2 2 0 0 0 0-4m5 5a2 2 0 0 0 0 4a2 2 0 0 0 0-4m5 5a2 2 0 0 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class LaDiceThreeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiceTwoIcon],svg[la-dice-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 2a2 2 0 0 0 0 4a2 2 0 0 0 0-4m10 10a2 2 0 0 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class LaDiceTwoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiggIcon],svg[la-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.52 6.988v1.957h2.816s.355.012.355-.394l.004-1.961H9.88s-.36-.008-.36.398m0 4.067V21.64h2.812s.36.007.36-.395l.003-10.59H9.883s-.363-.008-.363.399zM5.387 6.988v3.668H.359S0 10.648 0 11.055V21.64h8.203s.36.007.36-.399V6.59H5.745s-.36-.008-.36.398zm.004 11.899c0 .406-.36.394-.36.394H3.11v-5.875c0-.406.36-.394.36-.394h1.92zm8.394-7.832V21.64h5.387v1.414h-5.027s-.36-.012-.36.394v1.961h8.2s.363.008.363-.398V10.664l-8.203-.008s-.36-.008-.36.399m3.11 2.351c0-.406.359-.394.359-.394h1.922v5.875c0 .406-.36.394-.36.394h-1.921zm6.902-2.75s-.36-.008-.36.399V21.64h5.387v1.414h-5.027s-.36-.012-.36.394v1.961h8.204s.355.008.355-.398L32 10.664zm5.031 8.23c0 .407-.36.395-.36.395h-1.921v-5.875c0-.406.36-.394.36-.394h1.921z"></svg:path>`,
})
export class LaDiggIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDigitalOceanIcon],svg[la-digital-ocean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.831 3 3 8.832 3 16h5a8 8 0 1 1 8 8v5c7.169 0 13-5.832 13-13S23.169 3 16 3m0 21v-6h-6v6zm-6 0H6v4h4zm-4 0v-3H3v3z"></svg:path>`,
})
export class LaDigitalOceanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDigitalTachographIcon],svg[la-digital-tachograph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.018 7A2.017 2.017 0 0 0 2 9.018v13.964C2 24.097 2.903 25 4.018 25h22.964A2.017 2.017 0 0 0 29 22.982V9.018A2.017 2.017 0 0 0 26.982 7zM4 9h23v14H4zm2 2v2h10v-2zm0 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h10v-2zm12 0v2h7v-2z"></svg:path>`,
})
export class LaDigitalTachographIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDirectionsIcon],svg[la-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a3 3 0 0 0-2.125.875l-.125.156l-9.719 9.719l-.156.125a3.023 3.023 0 0 0 0 4.25l10 10a3.023 3.023 0 0 0 4.25 0l10-10a3.023 3.023 0 0 0 0-4.25l-10-10A3 3 0 0 0 16 3m0 2c.254 0 .52.082.719.281l10 10a1.015 1.015 0 0 1 0 1.438l-10 10a1.015 1.015 0 0 1-1.438 0l-10-10a1.015 1.015 0 0 1 0-1.438l10-10c.2-.199.465-.281.719-.281m1 6v3h-4a2 2 0 0 0-2 2v3h2v-3h4v3l4-4z"></svg:path>`,
})
export class LaDirectionsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiscordIcon],svg[la-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.656 4.906L11.875 5s-3.504.383-6.063 2.438h-.03l-.032.03c-.574.528-.824 1.177-1.219 2.126a31 31 0 0 0-1.187 3.5C2.602 15.777 2 19.027 2 22v.25l.125.25c.926 1.625 2.57 2.66 4.094 3.375c1.523.715 2.84 1.094 3.75 1.125l.594.031l.312-.531l1.094-1.938c1.16.262 2.496.438 4.031.438s2.871-.176 4.031-.438l1.094 1.938l.313.531l.593-.031c.91-.031 2.227-.41 3.75-1.125s3.168-1.75 4.094-3.375l.125-.25V22c0-2.973-.602-6.223-1.344-8.906a31 31 0 0 0-1.187-3.5c-.395-.95-.645-1.598-1.219-2.125l-.031-.032h-.032C23.63 5.383 20.125 5 20.125 5l-.781-.094l-.282.719s-.289.73-.468 1.563A20 20 0 0 0 16 7c-.535 0-1.46.035-2.594.188a11 11 0 0 0-.469-1.563zm-1.375 2.282c.043.14.086.261.125.375c-1.293.32-2.672.808-3.937 1.593l1.062 1.688C11.125 9.234 14.851 9 16 9c1.148 0 4.875.234 7.469 1.844l1.062-1.688c-1.265-.785-2.644-1.273-3.937-1.594c.039-.113.082-.234.125-.375c.933.188 2.715.618 4.187 1.782c-.008.004.375.582.719 1.406c.352.848.742 1.977 1.094 3.25c.676 2.441 1.207 5.414 1.25 8.031c-.63.961-1.797 1.828-3.032 2.407a9.7 9.7 0 0 1-2.437.78L22 24c.297-.11.59-.23.844-.344c1.539-.676 2.375-1.406 2.375-1.406l-1.313-1.5s-.562.516-1.875 1.094C20.72 22.422 18.715 23 16 23s-4.719-.578-6.031-1.156c-1.313-.578-1.875-1.094-1.875-1.094l-1.313 1.5s.836.73 2.375 1.406c.254.114.547.235.844.344l-.5.844a9.7 9.7 0 0 1-2.438-.782c-1.234-.578-2.402-1.445-3.03-2.406c.042-2.617.573-5.59 1.25-8.031a29 29 0 0 1 1.093-3.25c.344-.824.727-1.402.719-1.406c1.472-1.164 3.254-1.594 4.187-1.781M12.5 14c-.773 0-1.457.441-1.875 1S10 16.246 10 17s.207 1.441.625 2s1.102 1 1.875 1s1.457-.441 1.875-1S15 17.754 15 17s-.207-1.441-.625-2s-1.102-1-1.875-1m7 0c-.773 0-1.457.441-1.875 1S17 16.246 17 17s.207 1.441.625 2s1.102 1 1.875 1s1.457-.441 1.875-1S22 17.754 22 17s-.207-1.441-.625-2s-1.102-1-1.875-1m-7 2c.055 0 .125.02.25.188c.125.167.25.46.25.812s-.125.645-.25.813s-.195.187-.25.187s-.125-.02-.25-.188A1.4 1.4 0 0 1 12 17c0-.352.125-.645.25-.813s.195-.187.25-.187m7 0c.055 0 .125.02.25.188c.125.167.25.46.25.812s-.125.645-.25.813s-.195.187-.25.187s-.125-.02-.25-.188A1.4 1.4 0 0 1 19 17c0-.352.125-.645.25-.813s.195-.187.25-.187"></svg:path>`,
})
export class LaDiscordIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDiscourseIcon],svg[la-discourse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.11 3C8.993 3 3 8.716 3 15.773L3.006 29l13.103-.012C23.23 28.988 29 23.051 29 15.994S23.23 3 16.11 3M16 8a8 8 0 0 1 0 16a7.96 7.96 0 0 1-3.908-1.023L8 24l1.121-3.93A7.95 7.95 0 0 1 8 16a8 8 0 0 1 8-8"></svg:path>`,
})
export class LaDiscourseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDivideIcon],svg[la-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1M5 15v2h22v-2zm11 5c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaDivideIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDizzyIcon],svg[la-dizzy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-6.293 5.293l-1.414 1.414l1.793 1.793l-1.793 1.793l1.414 1.414l1.793-1.793l1.793 1.793l1.414-1.414l-1.793-1.793l1.793-1.793l-1.414-1.414l-1.793 1.793zm9 0l-1.414 1.414l1.793 1.793l-1.793 1.793l1.414 1.414l1.793-1.793l1.793 1.793l1.414-1.414l-1.793-1.793l1.793-1.793l-1.414-1.414l-1.793 1.793zM16 18c-2.206 0-4 1.525-4 3.4c0 1.725 1.346 2.6 4 2.6s4-.875 4-2.6c0-1.875-1.794-3.4-4-3.4m0 2c1.084 0 2 .641 2 1.4c0 .164 0 .6-2 .6s-2-.436-2-.6c0-.759.916-1.4 2-1.4"></svg:path>`,
})
export class LaDizzyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDizzySolidIcon],svg[la-dizzy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-6.293 5.293l-1.414 1.414l1.793 1.793l-1.793 1.793l1.414 1.414l1.793-1.793l1.793 1.793l1.414-1.414l-1.793-1.793l1.793-1.793l-1.414-1.414l-1.793 1.793zm9 0l-1.414 1.414l1.793 1.793l-1.793 1.793l1.414 1.414l1.793-1.793l1.793 1.793l1.414-1.414l-1.793-1.793l1.793-1.793l-1.414-1.414l-1.793 1.793zM16 18c-2.206 0-4 1.525-4 3.4c0 1.725 1.346 2.6 4 2.6s4-.875 4-2.6c0-1.875-1.794-3.4-4-3.4m0 2c1.084 0 2 .641 2 1.4c0 .164 0 .6-2 .6s-2-.436-2-.6c0-.759.916-1.4 2-1.4"></svg:path>`,
})
export class LaDizzySolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDnaIcon],svg[la-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5c0 3.023 1.281 5.375 3.094 7.219c1.437 1.465 3.183 2.668 4.969 3.781C9.895 18.633 6 21.512 6 27h2c0-4.695 3.781-7.258 7.969-9.844c.996.614 1.969 1.211 2.875 1.844h-3.657c-1 .602-1.882 1.3-2.78 2h8.905l.157.156c.57.578 1.074 1.192 1.468 1.844H10.595c-.5.602-.793 1.3-1.094 2h14.25c.156.617.25 1.273.25 2h2c0-3.023-1.281-5.375-3.094-7.219c-1.812-1.843-4.125-3.25-6.375-4.625s-4.437-2.719-6-4.312S8 7.477 8 5zm18 0a7.8 7.8 0 0 1-.281 2H9.5c.3.7.594 1.398 1.094 2h12.281c-.438.723-.992 1.379-1.625 2h-8.844c.899.7 1.781 1.398 2.781 2h3.688c-.602.438-1.234.879-1.875 1.313c.602.398 1.21.695 1.813 1.093C22.613 12.906 26 10 26 5z"></svg:path>`,
})
export class LaDnaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDochubIcon],svg[la-dochub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3.586V12h8.414zM7 4v24h11c4.411 0 8-3.589 8-8v-6h-6v4.938A3.066 3.066 0 0 1 16.937 22H13V10h4V4zm2 2h6v2h-4v16h5.938A5.07 5.07 0 0 0 22 18.937V16h2v4c0 3.309-2.691 6-6 6H9zm12 2.414L22.586 10H21z"></svg:path>`,
})
export class LaDochubIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDockerIcon],svg[la-docker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6v3H6v3H3v3h-.938a1 1 0 0 0-.78.406s-.087.106-.126.188s-.066.207-.093.312a3 3 0 0 0-.094.813c0 .687.082 1.449.281 2.218A6 6 0 0 0 1 19h.281a9.4 9.4 0 0 0 .969 2.313l.031.062v.031c.059.242.203.453.406.594l.032.031c.168.235.336.465.531.688c1.637 1.883 4.277 3.312 8.031 3.312c5.766 0 10.758-2.375 13.75-7.031h5.063c-.633-.16-2.008-.39-1.782-1.219c-.699.809-1.992.98-3.062.844c.352-.582.68-1.195.969-1.844c1.656-.097 2.914-.656 3.625-1.343c.812-.786 1.062-1.688 1.062-1.688a1 1 0 0 0-.312-1.031s-1.512-1.059-3.688-.844c-.746-1.992-2.312-2.969-2.312-2.969a1 1 0 0 0-.688-.125a1 1 0 0 0-.437.219s-.457.406-.813 1.063s-.676 1.652-.562 2.906c.043.46.324.867.5 1.312c-.125.078-.242.168-.407.25a4.7 4.7 0 0 1-2.093.469H20v-3h-3V6zm2 2h1v1h-1zm-6 3h1v1H8zm3 0h1v1h-1zm3 0h1v1h-1zm10.344.313c.36.406.75.98.906 1.812a1.004 1.004 0 0 0 1.25.781c.906-.246 1.566-.168 2.031-.031c-.054.066-.02.055-.093.125c-.458.441-1.223.934-2.813.875a1.01 1.01 0 0 0-.969.625c-.449 1.113-.972 2.113-1.593 3c-1.477.574-4.762.152-5.032-.594c-.976 1.145-3.988 1.145-4.968 0c-.317.88-4.876 1.285-5.657.157c-.629.585-2.918.976-4.218.093A7.6 7.6 0 0 1 3.03 17h17.063a6.7 6.7 0 0 0 2.968-.688a6.8 6.8 0 0 0 1.219-.75a.98.98 0 0 0 .469-.671a1 1 0 0 0-.188-.797c-.265-.348-.417-.774-.468-1.313c-.063-.703.097-1.11.25-1.469zM5 14h1v1H5zm3 0h1v1H8zm3 0h1v1h-1zm3 0h1v1h-1zm3 0h1v1h-1zM3.406 19h19.282c-2.633 3.406-6.614 5.031-11.407 5.031c-2.511 0-4.273-.676-5.531-1.656c2.125-.074 3.656-.625 3.656-.625a1.002 1.002 0 1 0-.5-1.938c-.054.016-.105.04-.156.063c0 0-2.191.719-4.781.406A7 7 0 0 1 3.406 19m7.313.188a.6.6 0 0 0-.594.593c0 .32.273.594.594.594s.562-.273.562-.594a.6.6 0 0 0-.031-.218a.25.25 0 0 1-.219.125c-.133 0-.219-.118-.219-.25c0-.09.024-.149.094-.188c-.066-.027-.113-.063-.187-.063z"></svg:path>`,
})
export class LaDockerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDogIcon],svg[la-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.313 3l-.25.656L17.313 11H9.625a4.63 4.63 0 0 0-2.5.719L4.719 9.28L3.28 10.72l2.438 2.406a4.68 4.68 0 0 0-.469 4l.719 2.094l-.938 3.531l-.031.125V28h2v-4.875l.969-3.656l.062-.313l-.094-.281l-.812-2.406A2.7 2.7 0 0 1 7 15.625A2.6 2.6 0 0 1 9.625 13h8.031L21 16.281V13.47l-1.813-1.781l2.063-5.532l.25.375l.281.469h1.875l3.063 2.313L25.875 11H22v5.875l-.938 2.813l-.062.156v3.281l1 4V28h2v-1.125l-1-4v-2.75l.938-2.813l.062-.156V13h3.125l2.156-4.313l-.687-.5L24.344 5h-1.438l-.968-1.531L21.655 3zM10.219 18L9 22.875V28h2v-4.875L11.781 20h.938c.351.234 1.594 1 3.281 1h1v2.125l1 4V28h2v-1.125l-1-4V19h-3c-1.063 0-2.438-.844-2.438-.844l-.25-.156z"></svg:path>`,
})
export class LaDogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDollarSignIcon],svg[la-dollar-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v2.094C12.164 5.57 10 8.05 10 11c0 1.777.832 3.148 1.938 4.031s2.437 1.375 3.687 1.875s2.418 1.008 3.188 1.625C19.581 19.148 20 19.773 20 21c0 2.156-1.793 4-4 4c-2.219 0-4-1.781-4-4v-1h-2v1c0 2.965 2.164 5.43 5 5.906V29h2v-2.094c2.844-.48 5-2.98 5-5.906c0-1.781-.832-3.145-1.938-4.031c-1.105-.887-2.437-1.407-3.687-1.907s-2.418-.98-3.188-1.593C12.418 12.855 12 12.219 12 11c0-2.191 1.785-4 4-4c2.219 0 4 1.781 4 4v1h2v-1c0-2.965-2.164-5.43-5-5.906V3z"></svg:path>`,
})
export class LaDollarSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDollyIcon],svg[la-dolly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.594 1.656L17.656 2l-5.531 2.031l-.938.344l.344.938l1.688 4.562l.344.938l.937-.344l5.531-2.031l.938-.344l-.344-.938l-1.688-4.562zM8.594 3l-.938.344L5 4.313l.656 1.875l1.75-.625l6.657 17.78l.343.938l.938-.343l10.625-4l-.688-1.875l-9.687 3.656L8.938 3.937zm8.812 1.219l1 2.687L14.75 8.25l-1-2.688zm4.375 5.687l-.937.344l-5.532 2.031l-.937.344l.344.938l1.687 4.562l.344.938l.938-.344l5.53-2.032l.938-.343l-.343-.969l-1.688-4.531zm-1.187 2.563l1 2.687l-3.657 1.344l-1-2.688zM11 21c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m0 6H5v2h22v-2zm0-4c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaDollyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDollyFlatbedIcon],svg[la-dolly-flatbed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6c-1.645 0-3 1.355-3 3h-6v12h18V9h-6c0-1.645-1.355-3-3-3M4 7v2h1c.555 0 1 .445 1 1v11c0 2.21 1.79 4 4 4h18v-2H10c-1.191 0-2-.809-2-2V10c0-1.645-1.355-3-3-3zm20.5 18a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-12 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M19 8c.555 0 1 .445 1 1h-2c0-.555.445-1 1-1m-7 3h14v8H12z"></svg:path>`,
})
export class LaDollyFlatbedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDonateIcon],svg[la-donate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C10.486 3 6 7.486 6 13s4.486 10 10 10s10-4.486 10-10S21.514 3 16 3m0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m-1 2v1.19a3.08 3.08 0 0 0-1.674 1.464a2.92 2.92 0 0 0-.264 1.945a3.06 3.06 0 0 0 .822 1.516c.273.273.598.494.956.647S15.59 14 16 14q.215.001.396.076a.96.96 0 0 1 .528.528q.075.181.076.396a.98.98 0 0 1-.604.924q-.181.075-.396.076q-.215-.001-.396-.076a1 1 0 0 1-.317-.211A1 1 0 0 1 15 15h-2a2.94 2.94 0 0 0 .857 2.076a3.1 3.1 0 0 0 1.143.735V19h2v-1.19a3.02 3.02 0 0 0 1.96-2.335a2.94 2.94 0 0 0-.478-2.145a3.1 3.1 0 0 0-.812-.812a3 3 0 0 0-1.07-.456A3 3 0 0 0 16 12q-.215-.001-.396-.076a.96.96 0 0 1-.528-.528A1 1 0 0 1 15 11q.001-.215.076-.396a.96.96 0 0 1 .528-.528q.181-.075.396-.076c.57 0 1 .43 1 1h2a3 3 0 0 0-.148-.924A3.05 3.05 0 0 0 17 8.19V7zM2 21v8h2v-6h5.38a12 12 0 0 1-2.3-2zm22.92 0a12 12 0 0 1-2.3 2H28v6h2v-8zM6 25v2h20v-2z"></svg:path>`,
})
export class LaDonateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDoorClosedIcon],svg[la-door-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5v22h16V5zm2 2h12v18H10zm10 8c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class LaDoorClosedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDoorOpenIcon],svg[la-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.875 4l-.094.031l-8 1.875L7 6.094v20.25l.813.125l8 1.5l.093.031H18V4zM20 6v2h3v16h-3v2h5V6zm-4 .031V26l-7-1.313V7.657zM14.344 15c-.367 0-.688.45-.688 1s.32 1 .688 1s.656-.45.656-1s-.29-1-.656-1"></svg:path>`,
})
export class LaDoorOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDotCircleIcon],svg[la-dot-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m0 7a3 3 0 1 0 .002 6.002A3 3 0 0 0 16 13"></svg:path>`,
})
export class LaDotCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDotCircleSolidIcon],svg[la-dot-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m0 7a3 3 0 1 0 .002 6.002A3 3 0 0 0 16 13"></svg:path>`,
})
export class LaDotCircleSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDoveIcon],svg[la-dove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.844 1.664l-1.16.387c-1.625.543-2.707 1.258-3.34 2.148c-.637.89-.739 1.922-.574 2.746c.148.746.488 1.336.8 1.813c-.285.168-.351.11-.652.41c-.813.812-1.473 2.332-.867 4.148a3.86 3.86 0 0 0 2.379 2.422c.242.086.246.035.46.075c-.062.347-.132.39-.124.874c.02 1.114.414 2.622 1.816 3.528c.738.476 1.563.719 2.371.848L5.418 28.44l1.21.485c5.47 2.191 11.688.023 11.688.023l.684-.23V24.87c.773-.113 1.86-.324 3.2-.887c2.116-.886 4.507-2.699 4.796-5.894c.113-1.238-.176-2.543-.465-3.602c-.074-.277-.082-.254-.156-.488h3.285l-.777-1.469s-.524-1.027-.797-1.59c.781-1.742.215-3.64-1.227-4.441a3.25 3.25 0 0 0-1.324-.398c-1.418-.122-3.058.601-4.332 2.296c-.129.172-.664.805-.969 1.172a9 9 0 0 1-.308-.691C19.48 7.758 19 5.89 19 3V2h-1c-1.168 0-2.11.305-2.781.844s-1.028 1.261-1.188 1.914c-.226.894-.078 1.27 0 1.707c-.351.16-.601.191-1.113.703a3.8 3.8 0 0 0-.79 1.184a11.9 11.9 0 0 1-2.136-5.477zm7.261 2.574c.125 2.371.5 4.219.97 5.383c.28.703.585 1.223.823 1.57c-.691.825-.878 1.059-1.414 1.684c-.71-.344-2.144-1.145-3.609-2.523c-.215-.926.066-1.38.457-1.77c.438-.437.984-.633.984-.633l.88-.293l-.227-.898s-.172-.82 0-1.516c.09-.347.234-.625.5-.836c.11-.09.449-.097.636-.168m-8.761.301c.668 2.875 2.136 5.074 3.687 6.695l.02.082l.043-.015a17.3 17.3 0 0 0 4.492 3.347l1.176 1s4.074-4.77 5.035-6.046h.004c1.3-1.735 2.445-1.707 3.09-1.352c.64.355 1.02 1.078.277 2.195l-.297.446l.207.492c.082.203.172.344.309.617H23.53l.535 1.363s.278.707.54 1.653c.257.945.468 2.14.398 2.894c-.211 2.305-1.82 3.492-3.578 4.23s-3.492.86-3.492.86l-.934.063v4.125c-.863.25-4.484 1.113-8.273.175l4.648-6.191a16 16 0 0 0 1.813-.188l-.376-1.968s-.863.168-1.98.175c-1.113.012-2.422-.175-3.164-.656c-.723-.469-.89-1.148-.902-1.879a4.6 4.6 0 0 1 .183-1.34l.465-1.394L7.945 14s-.383.02-.843-.145c-.465-.168-.903-.425-1.153-1.171c-.394-1.184-.054-1.664.383-2.102c.438-.437.984-.633.984-.633l1.536-.511l-1.145-1.145s-.809-.89-.977-1.738c-.085-.426-.062-.77.239-1.192c.18-.246.879-.539 1.375-.824"></svg:path>`,
})
export class LaDoveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDownloadIcon],svg[la-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v16.563L9.719 15.28L8.28 16.72l7 7l.719.687l.719-.687l7-7l-1.438-1.438l-5.28 5.28V4zM7 26v2h18v-2z"></svg:path>`,
})
export class LaDownloadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDraft2digitalIcon],svg[la-draft2digital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.77 5.05c-2.51.01-4.77.79-6.37 2.04c-1.27.85-2.15 2.19-2.35 3.74v.02c-.03.21-.05.43-.05.65c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.5-.95-2.77-2.27-3.27c.26-.05.53-.09.82-.09c1.9 0 3.45 1.51 3.45 3.36c0 2.79-4.71 7.19-10.68 12.77L3.47 26H23v3l7-4l-7-4v3h-5.85C21.31 19.6 24 16.43 24 11.84c0-3.86-3.51-6.77-8.18-6.79zm-.18 2h.2c3.54.01 6.21 2.06 6.21 4.79c0 4.16-2.76 7.06-7.33 11.86l-.28.3H8.53C14.6 18.27 18 14.68 18 11.5c0-1.85-.96-3.48-2.41-4.45M10.5 10c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S9 12.33 9 11.5c0-.11.02-.21.03-.31c.15-.68.75-1.19 1.47-1.19M25 24.45l.97.55l-.97.55z"></svg:path>`,
})
export class LaDraft2digitalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDraftingCompassIcon],svg[la-drafting-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v3.156c-1.719.446-3 1.992-3 3.844c0 1.047.426 2 1.094 2.719L9.75 20H6v2h2.813l-2.844 6.188l1.812.843L11.031 22H15v2h2v-2h3.969l3.218 7.031L26 28.22L23.156 22H26v-2h-3.75l-3.344-7.313C19.566 11.977 20 11.043 20 10c0-1.852-1.281-3.398-3-3.844V3zm1 5c1.117 0 2 .883 2 2c0 .582-.234 1.102-.625 1.469l-.031.031l-1 .438L20.03 20H17v-2h-2v2h-3.063l3.688-8l-1-.469l.031-.031A1.98 1.98 0 0 1 14 10c0-1.117.883-2 2-2"></svg:path>`,
})
export class LaDraftingCompassIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDragonIcon],svg[la-dragon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3v6l-5 1.5L6.5 14L4 19h5v10h2v-9.152c1.297.562 2.66 1.14 5.004 2.074c0 .027-.004.05-.004.078c0 2.23.7 4.047 1.98 5.25C19.258 28.457 21.04 29 23 29v-2c-1.602 0-2.82-.426-3.652-1.203c-.711-.672-1.192-1.645-1.317-3.063c1.317.496 2.5.914 3.32 1.137c.286.074.579.113.868.113c1.82 0 3.582-1.453 3.914-3.297L27 16l-3 2c-4.688 0-5.8-3-5.8-3c.35-.844 1.077-1.441 1.921-1.879L21 14v-1.262c.188-.066.375-.12.563-.175L23 14v-1.781c.059-.012.125-.028.184-.035L25 14v-2l3 2V9.152c0-1.476-1-2.836-2.45-3.101A3 3 0 0 0 25 6c-.8 0-1.516.336-2.055.852L21.5 3L20 7h-6zm2 3.734l2.89 1.93l.505.336h10.277l.594-.656a1 1 0 0 1 .922-.328c.457.086.812.582.812 1.136V10h-.395l-.015-.008L25 10h-.031c-.707.012-6.938.23-8.614 4.227l-.304.726l.273.738C16.918 17.293 19.2 20 24 20h.227l-.063.34c-.156.875-1.066 1.644-1.945 1.644a1.2 1.2 0 0 1-.348-.047c-3.082-.828-11.976-4.73-12.066-4.769L9.422 17H7.234l1.055-2.105l.645-1.29l-2.153-2.152l1.797-.535l1.422-.43zM13 10s.23 2 2 2s3-2 3-2z"></svg:path>`,
})
export class LaDragonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDrawPolygonIcon],svg[la-draw-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4a2 2 0 0 0-2 2v.063L6.937 9.25A2 2 0 0 0 6 9a2 2 0 0 0-2 2c0 .738.402 1.371 1 1.719V24.28c-.598.348-1 .98-1 1.719a2 2 0 0 0 2 2c.738 0 1.371-.402 1.719-1H20.28c.348.598.98 1 1.719 1a2 2 0 0 0 2-2c0-.398-.11-.781-.313-1.094L26.125 20a2.005 2.005 0 0 0 .25-3.969l-1.906-5.718C24.785 9.957 25 9.511 25 9a2 2 0 0 0-2-2c-.512 0-.957.215-1.313.531L15.97 5.594A2.01 2.01 0 0 0 14 4m1.313 3.5l5.718 1.875c.153.805.79 1.441 1.594 1.594l1.906 5.687A2 2 0 0 0 24 18c0 .414.129.805.344 1.125L21.875 24a1.99 1.99 0 0 0-1.594 1H7.72a2 2 0 0 0-.72-.719V12.72c.598-.348 1-.98 1-1.719v-.063l5.063-3.187c.28.148.597.25.937.25c.504 0 .96-.191 1.313-.5z"></svg:path>`,
})
export class LaDrawPolygonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDribbbleIcon],svg[la-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c2.535 0 4.832.953 6.594 2.5a7 7 0 0 1-.844.969c-.855.828-2.223 1.824-4.313 2.594A48 48 0 0 0 13.72 6.25C14.449 6.082 15.215 6 16 6m-4.25.938a47 47 0 0 1 3.75 5.718c-4.066 1.078-7.797 1.215-9.281 1.219a9.98 9.98 0 0 1 5.531-6.938zm12.219 3.03A10 10 0 0 1 26 15.75c-.89-.2-2.203-.395-3.906-.406c-.887-.004-1.89.058-2.969.187c-.25-.57-.52-1.12-.781-1.656c2.242-.86 3.77-1.992 4.781-2.969c.344-.336.613-.644.844-.937zm-7.563 4.5c.23.466.465.942.688 1.438c-4.274 1.184-7.344 4.809-8.657 6.625A9.96 9.96 0 0 1 6 16v-.125c1.352.016 5.648-.078 10.406-1.406zm5.688 2.845c1.785 0 3.02.25 3.75.437a9.93 9.93 0 0 1-4.094 6.438a36 36 0 0 0-1.844-6.75c.79-.079 1.535-.125 2.188-.125m-4.219.468c.898 2.282 1.652 4.785 2.031 7.438A10.1 10.1 0 0 1 16 26a9.98 9.98 0 0 1-6.094-2.063c1.028-1.406 4.047-5.148 7.969-6.156"></svg:path>`,
})
export class LaDribbbleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDribbbleSquareIcon],svg[la-dribbble-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm9.25 1c-2.125 0-2.125 5.505-2.125 5.563c0 .64.024 1.249.063 1.812a2.9 2.9 0 0 0-1-.188C11.003 15.188 10 17.035 10 19c0 1.848 1.043 4 3.406 4c1.117 0 2.083-.714 2.846-1.781c.672.684 1.352.937 1.875.937c1.66 0 2.76-2.902 3.154-4.156c.117-.395-.098-.852-.5-.969a.74.74 0 0 0-.937.5c-.465 1.473-1.332 3.016-1.719 3.094c-.285 0-.68-.25-1.094-.813c.95-1.995 1.438-4.484 1.438-6.156C18.469 8.98 17.258 8 16.25 8m.063 1.625c.239.355.656 1.48.656 4.031c0 1.352-.329 2.93-.813 4.313c-.316-1.078-.531-2.528-.531-4.407c0-1.739.371-3.382.688-3.937m-3.407 7.094c.09-.02.18 0 .281 0c.642 0 1.126.468 1.126.468c.03.04.073.095.124.125a9.5 9.5 0 0 0 .876 2.565c-.575.969-1.247 1.594-1.907 1.594c-1.71 0-1.875-1.53-1.875-2.19c0-.102.023-2.292 1.375-2.562"></svg:path>`,
})
export class LaDribbbleSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDropboxIcon],svg[la-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.781 4.469l-.625.406L4.47 9.188l-1.219.78l1.156.876l3.5 2.656l-3.5 2.656l-1.218.907l1.312.75l3.625 2.125v3.343l.438.282l6.874 4.53l.563.376l.563-.375l6.875-4.469l.437-.313V19.97l3.625-2.157l1.219-.718l-1.063-.907l-3.343-2.843l3.312-2.719l1.094-.875L27.53 9l-6.5-4.125l-.625-.375l-.562.469L16 8.125l-3.656-3.156zm8.813 2.468l4.718 3.032l-2.656 2.156l-4.906-2.844zm-9 .032l2.75 2.343l-4.719 3l-2.906-2.218zM16 10.625l4.813 2.75l-4.813 3l-4.531-2.844zm6.656 3.938l2.625 2.25L22.47 18.5q-.137.062-.25.156l-1.75 1.032l-2.719-2.063zm-13.031.156l4.625 2.906l-2.625 2.063l-4.844-2.844zm6.406 4.094l3.75 2.875l.563.406l.562-.344l.969-.594v1.063L16 26.062l-5.875-3.875v-1.062l1.063.625l.593.344l.531-.407z"></svg:path>`,
})
export class LaDropboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDrumIcon],svg[la-drum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.188 5.094l-11.063 5.25A2 2 0 0 0 15 10a1.999 1.999 0 1 0 0 4c1.05 0 1.922-.813 2-1.844l6.063-2.875C24.878 10.047 26 11.047 26 12c0 1.887-4.277 4-10 4S6 13.887 6 12s4.277-4 10-4c.172 0 .328-.004.5 0l3.531-1.656A24 24 0 0 0 16 6C9.16 6 4 8.578 4 12v10c0 .988.445 1.895 1.125 2.625s1.605 1.32 2.688 1.813C9.976 27.422 12.84 28 16 28s6.023-.578 8.188-1.563c1.082-.492 2.007-1.082 2.687-1.812S28 22.988 28 22V12c0-1.477-.977-2.79-2.625-3.813l2.656-1.28zM6 15.406c1.016.766 2.379 1.395 4 1.844v7.906c-.5-.156-.957-.34-1.375-.531c-.906-.414-1.598-.91-2.031-1.375S6 22.395 6 22zm20 0V22c0 .395-.16.785-.594 1.25s-1.125.96-2.031 1.375c-.418.191-.875.375-1.375.531V17.25c1.621-.45 2.984-1.078 4-1.844m-14 2.281A24.4 24.4 0 0 0 16 18a24.4 24.4 0 0 0 4-.313v7.938c-1.23.23-2.578.375-4 .375s-2.77-.145-4-.375z"></svg:path>`,
})
export class LaDrumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDrumSteelpanIcon],svg[la-drum-steelpan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6C8.82 6 3 8.462 3 11.5v9C3 23.538 8.82 26 16 26s13-2.462 13-5.5v-9C29 8.462 23.18 6 16 6m0 2c.893 0 1.734.04 2.523.11c.165.014.317.035.477.052V8.6c0 1.32-1.35 2.4-3 2.4s-3-1.08-3-2.4v-.438c.927-.1 1.92-.162 3-.162m-3.104.174q-.5.054-.97.127c.136-.021.265-.046.406-.065c.182-.024.376-.041.564-.062m6.208 0c.188.02.382.038.564.062c.14.02.27.044.406.065a21 21 0 0 0-.97-.127m-7.58.19c-.176.03-.343.065-.512.099c.09-.018.163-.042.256-.059c.082-.015.172-.026.255-.04zm8.953 0c.083.014.173.025.255.04c.093.017.166.041.256.059c-.169-.034-.336-.07-.511-.1zm-9.957.212l1.04 1.805c.44.74.55 1.61.33 2.45a3.26 3.26 0 0 1-1.097 1.655C7.021 13.706 5 12.23 5 11.5q0-.095.045-.207c.306-.755 2.206-1.994 5.475-2.717m10.96 0C25.07 9.37 27 10.788 27 11.5c0 .73-2.022 2.207-5.795 2.986a3.2 3.2 0 0 1-1.096-1.656c-.22-.84-.11-1.71.32-2.45zM16 13c1.31 0 2.4.78 2.78 1.86c.377-.035.736-.079 1.09-.128A27 27 0 0 1 16 15c-1.424 0-2.71-.102-3.87-.268c.354.05.713.093 1.09.127C13.6 13.78 14.69 13 16 13M5 14.422C7.3 15.969 11.36 17 16 17s8.7-1.031 11-2.578V20.5c0 1.016-3.855 3.5-11 3.5S5 21.516 5 20.5zm15.887.139"></svg:path>`,
})
export class LaDrumSteelpanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDrumstickBiteIcon],svg[la-drumstick-bite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.65 4.004a8.33 8.33 0 0 0-5.906 2.441c-1.568 1.568-3.41 5.955-5.473 13.04L6.676 21.08a3 3 0 0 0-.678-.08c-1.654 0-3 1.346-3 3c0 1.351.9 2.497 2.13 2.871A3 3 0 0 0 7.999 29a3.003 3.003 0 0 0 3-3q0-.344-.08-.678l1.596-1.593c1.767-.514 4.267-1.285 6.601-2.149l1.153-.428l-.65-1.04A4 4 0 0 1 19 18c0-2.206 1.794-4 4-4c1.108 0 2.143.454 2.914 1.28l1.162 1.245l.522-1.625a8.32 8.32 0 0 0-2.043-8.455a8.32 8.32 0 0 0-5.905-2.441m-.002 2c1.627 0 3.252.617 4.49 1.855a6.32 6.32 0 0 1 1.842 4.94A5.9 5.9 0 0 0 23 12c-3.309 0-6 2.691-6 6c0 .709.13 1.413.38 2.08a99 99 0 0 1-4.468 1.438l-2.432-2.432c1.782-5.943 3.47-10.02 4.676-11.227a6.34 6.34 0 0 1 4.492-1.855M9.574 21.008l1.416 1.416l-2.46 2.46l.345.653q.123.232.123.463a1.001 1.001 0 0 1-2 0v-1h-1a1.001 1.001 0 0 1 0-2a1 1 0 0 1 .463.123l.652.348z"></svg:path>`,
})
export class LaDrumstickBiteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDrupalIcon],svg[la-drupal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.531 2.781l-.5 2.281s-.125.567-.406 1.188s-.766 1.18-1.031 1.281v.032C8.188 9 5 13.125 5 18c0 6.063 4.938 11 11 11s11-4.938 11-11c0-5.305-3.766-9.754-8.781-10.781c-.086-.02-.89-.582-1.438-1.219s-.937-1.25-.937-1.25zm.781 4.563c.633.738 1.333 1.59 2.5 1.843C21.91 10.027 25 13.642 25 18a9 9 0 0 1-.719 3.5c.235-.64.344-1.355.344-1.813c0-.656-.285-1.75-1.344-1.75c-.996 0-3.035 2.075-4.093 2.094c-1.25.024-2.989-2.457-5.47-2.437c-1.948.023-3.48 1.566-3.5 3.218c-.019.934.302 1.618.938 2.063c.426.273.79.469 2.063.469c2.097 0 4.77-2.606 6-2.563c.976.043 2.52 2.407 3.281 2.469c.594.043.898-.227 1.406-.969C22.386 25.086 19.426 27 16 27c-4.984 0-9-4.016-9-9a8.97 8.97 0 0 1 6.25-8.563l.031-.03h.031c1.07-.403 1.626-1.282 2-2.063m3 14.906c-.136.012-.289.05-.468.125c-.36.148-.735.477-.969.688s-.285.39-.156.562s.265.078.625-.219s.57-.562 1.312-.562s.883.285 1.032.562c.148.274.164.305.312.219c.172-.086.273-.195.188-.406s-.247-.61-.5-.782c-.254-.171-.598-.187-.938-.187c-.168 0-.3-.012-.438 0m2.188 2.281a.3.3 0 0 0-.125.063c-.426.316-1.395.687-2.75.687s-1.98-.285-2.406-.625c-.063-.043-.028-.031-.156-.031c-.13 0-.239.07-.344.156c-.106.086-.149.29 0 .438c.933.847 2.48.793 3.625.687c1.144-.105 2.144-.8 2.25-.906c.148-.148.082-.258.062-.344c-.015-.062-.05-.148-.156-.125"></svg:path>`,
})
export class LaDrupalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDumbbellIcon],svg[la-dumbbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.313 3.5c-.766 0-1.547.297-2.125.875a2.9 2.9 0 0 0-.75 1.344c-.208-.043-.41-.094-.625-.094c-.766 0-1.547.266-2.125.844a3 3 0 0 0 0 4.218l.843.844l-5 5l-.844-.843a2.95 2.95 0 0 0-2.093-.876c-.766 0-1.547.297-2.125.876a3 3 0 0 0-.782 2.78c-.48.126-.933.34-1.312.72a3 3 0 0 0 0 4.218l.031.032l1.344 1.375l-.688.687L6.5 26.938l.688-.688l1.406 1.375a3 3 0 0 0 4.219 0a2.95 2.95 0 0 0 .75-1.313c.96.208 2.007-.039 2.75-.78a3 3 0 0 0 0-4.22l-.844-.843l5-5l.843.844a3 3 0 0 0 4.22 0c.738-.743.988-1.79.78-2.75a2.9 2.9 0 0 0 1.313-.75a3 3 0 0 0 0-4.22L26.25 7.189l.688-.688L25.5 5.062l-.688.688l-1.406-1.375a2.95 2.95 0 0 0-2.093-.875m0 2a.95.95 0 0 1 .687.281L26.219 10a.95.95 0 0 1 0 1.375a.99.99 0 0 1-1.407 0l-4.187-4.188a.99.99 0 0 1 0-1.406a.95.95 0 0 1 .688-.281m-3.5 2.094c.25 0 .492.117.687.312l5.594 5.594a.99.99 0 0 1 0 1.406c-.39.39-.98.36-1.375-.031h-.032l-5.593-5.594c-.39-.39-.36-.98.031-1.375c.191-.183.445-.312.688-.312m.125 5.343l1.125 1.126l-5 5l-1.126-1.125zm-9.344 3.876c.25 0 .492.117.687.312h.031l5.594 5.594c.39.39.36.98-.031 1.375c-.39.37-.988.386-1.375 0l-.688-.688l-.124-.093l-4.094-4.125l-.688-.688a.99.99 0 0 1 0-1.406a.95.95 0 0 1 .688-.282zm-2.125 3.5c.25 0 .523.117.718.312l4.188 4.188a.99.99 0 0 1 0 1.406c-.39.39-.98.39-1.375 0L5.781 22a.95.95 0 0 1 0-1.375c.196-.195.438-.313.688-.313z"></svg:path>`,
})
export class LaDumbbellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDumpsterIcon],svg[la-dumpster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 6l-2 8h1.334l.332 2H3v2h2l1 6v2h2v-2h16v2h2v-2l1-6h2v-2h-1.666l.332-2H29l-2-8zm1.563 2h2.775l-.766 4h-3.01l1-4zm4.828 0H15v4h-4.37l.76-4zM17 8h3.61l.76 4H17zm5.662 0h2.776l1 4h-3.01zm-16.3 6h19.277l-1.332 8H7.693z"></svg:path>`,
})
export class LaDumpsterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDumpsterFireIcon],svg[la-dumpster-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 6l-2 8h1.334l.332 2H3v2h2l1 6v2h2v-2h11.639c.297-.731.67-1.396 1.066-2H7.693l-1.332-8H25.64l-.543 3.256l1.459-1.106s2.096 1.731 2.218 1.85H29v-2h-1.668l.334-2H29l-2-8zm1.563 2h2.775l-.766 4h-3.01l1-4zm4.828 0H15v4h-4.37l.76-4zM17 8h3.61l.76 4H17zm5.662 0h2.776l1 4h-3.01zm3.867 10.66l-.648.56s-1.22.98-2.41 2.41S21 24.963 21 27.103c0 1.51.63 2.82 1.66 3.68c1.02.87 2.39 1.32 3.84 1.32s2.82-.45 3.84-1.32c1.03-.86 1.66-2.17 1.66-3.68c0-1.99-1.29-3.812-2.47-5.282a27 27 0 0 0-2.34-2.568l-.66-.592zm-.058 2.781c.39.38.75.7 1.5 1.63C29.04 24.41 30 26.13 30 27.1c0 .98-.37 1.68-.97 2.18c-.18.16-.39.3-.62.41c.05-.19.09-.39.09-.59c0-2.95-1.56-4.69-1.56-4.69s.05 2.63-.75 2.63c-.55 0-1.1-.85-1.1-.85s-.59 1.26-.59 2.91c0 .2.04.4.09.59a2.7 2.7 0 0 1-.62-.41c-.6-.5-.97-1.2-.97-2.18c0-1.26.97-2.92 2.03-4.19c.73-.87 1.06-1.13 1.44-1.47z"></svg:path>`,
})
export class LaDumpsterFireIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDungeonIcon],svg[la-dungeon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-1.038 0-2.04.155-2.994.428l1.441 3.752C14.947 9.066 15.466 9 16 9s1.053.066 1.553.18l1.441-3.752A11 11 0 0 0 16 5m-4.86 1.152a11.1 11.1 0 0 0-3.826 3.135l3.385 2.154c.096-.11.199-.215.301-.32v.01c.03-.05.08-.101.13-.131h-.017a7 7 0 0 1 1.467-1.104zm9.72 0l-1.44 3.746A7 7 0 0 1 20.877 11h-.008c.05.03.101.08.131.13v-.015q.251.255.475.535l3.464-2.021a11.1 11.1 0 0 0-4.08-3.477zM6.233 10.971A10.9 10.9 0 0 0 5 16h4c0-1.024.227-1.994.623-2.871L6.234 10.97zM16 11c-.34 0-.68.03-1 .1V25h2V11.1c-.32-.07-.66-.1-1-.1m9.95.354l-3.466 2.021c.33.812.516 1.697.516 2.625h4c0-1.66-.385-3.231-1.05-4.646M13 12c-1.21.91-2 2.37-2 4v9h2zm6 0v13h2v-9c0-1.63-.79-3.09-2-4M5 18v4h4v-4zm18 0v4h4v-4zM5 24v3h4v-3zm18 0v3h4v-3z"></svg:path>`,
})
export class LaDungeonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laDyalogIcon],svg[la-dyalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v7h2V7h7c4.962 0 9 4.038 9 9s-4.038 9-9 9H6v2h9c6.065 0 11-4.935 11-11S21.065 5 15 5z"></svg:path>`,
})
export class LaDyalogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEarlybirdsIcon],svg[la-earlybirds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.85 4c-.05.03-.62 1.02.12 1.96c-1.73.33-2.96 1.28-3.92 2.33c-1.95.07-4.1.14-4.39 1.67c-.13.03-.56.04-.62.13c-.01.02-.1.39-.11.74c.02.68.32 1.24 1.14 1.12c.22 1.17.08 1.98.78 2.92c-.06.32-.1.64-.13.96c-2.3 1.11-4.08 1.83-3.56 3.3c.52 1.26 2.41.83 3.62.21c.55 3.06 2.61 4.97 5.56 5.72c-1.72-.07-2.88-.07-3-.07c-1.01 0-1.01 1.52 0 1.52c.11 0 1.16-.16 2.93-.21l-.05.6c-.09.74.91 1.07 1.27.42c0 .89 1.34.92 1.37.02l.03-.25c.06 1.1 1.41.91 1.37.05c.2.87 1.52.57 1.34-.3l-.05-.56c1.54-.05 3.644-.016 5.864-.526c1.19-.28 1.59-.41 2.28-.53c.71-.09-.02-.68-.15-.64c-.08.03-.25.06-.47.1c.65-.66.41-1.62.33-1.67c-.09-.06-1.05.05-1.46.66c-.34-.48-.98-.6-1.05-.56c-.07.05-.481 1.18.479 1.84c-1.63.24-3.263.366-4.883.296c-1.26-.05-1.15 0-1.17-.05c3.3-.62 5.46-2.66 6.11-6.01c1.13.59 2.99 1.3 3.47.14c.48-1.18-1.5-2.09-3.29-3.31c-.04-.61-.12-1.2-.23-1.77c.29-.71.26-1.47.42-2.3c.81.11 1.11-.45 1.14-1.12c-.02-.35-.1-.72-.12-.75c-.05-.08-.48-.09-.61-.12c-.26-1.36-1.98-1.57-3.73-1.65c-1.15-1.25-2.7-2.28-4.65-2.45c.55-.53.29-1.22.24-1.25c-.06-.04-.69.09-.95.52c-.24-.92-1.19-1.16-1.27-1.13m5.88 1.014c-.587-.063-1.146.082-1.19.547c-.04 1.2 1.34-.04 2.69.32c.35-.27-.87-.72-.92-.74a2.7 2.7 0 0 0-.58-.127m-9.263.002a3 3 0 0 0-.637.14c-.05.02-1.39.51-1.01.81c1.49-.39 3 .971 2.96-.349c-.053-.51-.667-.67-1.313-.601m.586 4.51c1.358.034 2.407.363 2.377 1.872c.01.842-.31 2.666-.71 3.1c-.62.68-3.7.54-4.18.322c-.83-.378-1.67-3.667-1.12-4.63c.32-.549 1.15-.586 2.2-.633c.492-.022.98-.043 1.433-.032zm7.793.003c.446-.011.926.01 1.414.032c1.05.047 1.93.084 2.25.632c.59 1.028-.42 4.286-1.18 4.635c-.47.208-3.55.349-4.17-.33c-.4-.434-.67-2.258-.64-3.098c-.038-1.508.988-1.836 2.326-1.87zM12.006 11c-.554 0-1.006.454-1.006 1a1 1 0 0 0 2 0c0-.545-.452-1-.994-1m7.988 0c-.542 0-.994.454-.994 1a1 1 0 0 0 2 0c0-.545-.452-1-1.006-1m-4.209 1.592c.096-.021.412-.021.508 0c.431.138.506 1.039.707 1.676c-.612.148-.707.732-.908.732s-.384-.498-1.092-.498c.287-.775.325-1.762.785-1.91"></svg:path>`,
})
export class LaEarlybirdsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEbayIcon],svg[la-ebay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.531 10v5.844C8.355 14.69 7.625 13 4.875 13C1.125 13 .98 15.879 1 16.625C1 16.625.812 20 4.781 20c2.938 0 3.469-1.563 3.563-2H6.75c-.121.285-.582 1.059-1.969 1.031c-1.89-.035-2.199-1.613-2.25-2.031h6v3H10v-.906s.746.906 2.75.906c1.7 0 3.09-.898 3.5-2.563a4.2 4.2 0 0 0 .125-.937c.04-2.281-1.707-3.488-3.594-3.5S10 14.281 10 14.281V10zm7.719 7.438c-.309 1.968 1.477 2.57 2.875 2.562s2.281-.418 2.875-1.156V20h1.531v-4.344c-.039-.738-.148-2.523-3.406-2.656c0 0-3.113-.281-3.438 2h1.594s.13-1.031 1.75-1c1.532.031 1.977 1.09 1.969 2c0 0-1.5-.004-1.938 0c-.789.004-3.406-.094-3.812 1.438M22.531 13L26 19.469L24.656 22h1.688L31 13h-1.594l-2.562 5l-2.563-5zM4.844 14C6.992 14 7 16 7 16H2.531s.156-2 2.313-2m7.593 0c2.426-.063 2.344 2.5 2.344 2.5s.04 2.469-2.344 2.5c-2.382.031-2.343-2.531-2.343-2.531s-.082-2.407 2.344-2.469zm7.313 3c.219-.012.375 0 .375 0h1.719s.281 2.098-2.438 2.063c0 0-1.535.003-1.625-1.188c0-.664 1.313-.84 1.969-.875"></svg:path>`,
})
export class LaEbayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEdgeIcon],svg[la-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.96 10.828c-2.616 1.629-4.112 3.942-4.112 3.942s.386-4.852 4.113-7.696C11.44 5.945 13.469 5 16.19 5c1.024 0 3.168.18 5.102 1.371s2.715 2.188 3.586 3.652c.375.63.683 1.442.875 2.223c.355 1.465.398 3.215.398 3.215v2.309H12.336s-.336 4.64 6.02 4.64c2.206 0 2.984-.348 3.71-.562c1.137-.336 2.235-1.086 2.235-1.086l.004 4.636S21.703 27 17.773 27c-1.105 0-2.27-.094-3.394-.457c-.984-.32-3.04-1.18-4.418-3.195c-.488-.711-1.016-1.66-1.277-2.586c-.286-1.004-.282-1.977-.282-2.516c0-2.004.688-3.918 1.875-5.305c1.54-1.793 3.489-2.582 3.489-2.582s-.633.739-1.024 1.66a7.7 7.7 0 0 0-.5 1.848h7.805s.457-4.664-4.414-4.664c-1.836 0-4.09.64-5.672 1.625z"></svg:path>`,
})
export class LaEdgeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEditIcon],svg[la-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 4.031c-.766 0-1.516.297-2.094.875L13 14.781l-.219.219l-.062.313l-.688 3.5l-.312 1.468l1.469-.312l3.5-.688l.312-.062l.219-.219l9.875-9.906A2.968 2.968 0 0 0 25 4.03zm0 1.938c.234 0 .465.12.688.343c.445.446.445.93 0 1.375L16 17.376l-1.719.344l.344-1.719l9.688-9.688c.222-.222.453-.343.687-.343zM4 8v20h20V14.812l-2 2V26H6V10h9.188l2-2z"></svg:path>`,
})
export class LaEditIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEditSolidIcon],svg[la-edit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 4.031c-.766 0-1.516.297-2.094.875L13 14.781l-.219.219l-.062.313l-.688 3.5l-.312 1.468l1.469-.312l3.5-.688l.312-.062l.219-.219l9.875-9.906A2.968 2.968 0 0 0 25 4.03zm0 1.938c.234 0 .465.12.688.343c.445.446.445.93 0 1.375L16 17.376l-1.719.344l.344-1.719l9.688-9.688c.222-.222.453-.343.687-.343zM4 8v20h20V14.812l-2 2V26H6V10h9.188l2-2z"></svg:path>`,
})
export class LaEditSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEggIcon],svg[la-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-3 0-5.7 2.3-7.7 5.2S5 14.7 5 18c0 3.5 1.2 6.3 3.2 8.2C10.3 28 13 29 16 29s5.7-.9 7.8-2.8S27 21.5 27 18c0-3.3-1.3-6.9-3.3-9.8S19 3 16 3m0 2c1.9 0 4.2 1.7 6 4.3s3 6 3 8.7c0 3.1-1 5.3-2.6 6.7c-1.6 1.5-3.8 2.3-6.4 2.3s-4.8-.8-6.4-2.3S7 21 7 18c0-2.8 1.2-6.1 3-8.7S14.1 5 16 5"></svg:path>`,
})
export class LaEggIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEjectIcon],svg[la-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 6.594l-.719.687l-9 9L4.594 18h22.812l-1.687-1.719l-9-9zm0 2.843L22.563 16H9.438zM4 22v2h24v-2z"></svg:path>`,
})
export class LaEjectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laElementorIcon],svg[la-elementor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 4v10h2V11zm4 0v2h6v-2zm0 4v2h6v-2zm0 4v2h6v-2z"></svg:path>`,
})
export class LaElementorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEllipsisHIcon],svg[la-ellipsis-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m10 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m10 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaEllipsisHIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEllipsisVIcon],svg[la-ellipsis-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m0 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m0 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaEllipsisVIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laElloIcon],svg[la-ello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5M9.08 17c.488 3.387 3.401 6 6.92 6s6.432-2.613 6.92-6h-2.022A5.01 5.01 0 0 1 16 21a5.01 5.01 0 0 1-4.898-4z"></svg:path>`,
})
export class LaElloIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEmberIcon],svg[la-ember-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.016 7.998a1.2 1.2 0 0 0-.422.076c-.85.338-1.176.84-1.176.84s-1.1 1.614-1.355 4.008q-.062.58-.13 1.178c-.235 2.002-.5 3.978-.5 3.978s-.524.498-1.01.522c-.484.024-.27-1.399-.27-1.399s.376-2.125.35-2.49c-.024-.365-.055-.565-.495-.691c-.445-.131-.926.418-.926.418s-1.275 1.84-1.385 2.126l-.064.118l-.065-.078s.9-2.567.04-2.606s-1.424.916-1.424.916s-.982 1.597-1.022 1.777l-.062-.076s.405-1.784.32-2.242c-.08-.458-.525-.365-.525-.365s-.564-.063-.71.287c-.144.35-.684 2.617-.75 3.367c0 0-1.41.983-2.34.992c-.924.015-.835-.574-.835-.574s3.4-1.099 2.47-3.334c-.415-.575-.9-.755-1.585-.746c-.685.015-1.515.385-2.065 1.588c-.265.575-.34 1.12-.39 1.533c0 0-.615.117-.94-.14c-.325-.259-.5 0-.5 0s-.56.681-.006.89c.555.21 1.406.297 1.406.297c.08.365.31.948.98 1.445c1.01.745 2.94-.062 2.94-.062l.795-.428s.026.71.606.813s.819.049 1.824-2.332c.59-1.217.63-1.149.63-1.149l.065-.016s-.454 2.28-.28 2.909c.176.623.94.554.94.554s.415.116.75-1.033s.98-2.43.98-2.43h.08s-.28 2.344.15 3.104s1.544.258 1.544.258s.78-.381.9-.498c0 0 .926.77 2.231.629c2.915-.56 3.955-1.262 3.955-1.262s.5 1.189 2.055 1.3c1.775.133 2.74-.906 2.74-.906s-.014.658.606.907c.62.248 1.035-1.112 1.035-1.112l1.035-2.785h.094s.056 1.817 1.076 2.104s2.35-.666 2.35-.666s.318-.172.263-.698c-.056-.52-.535-.332-.535-.332s-.78.59-1.465.522c-.685-.063-.47-1.506-.47-1.506s.15-1.368-.254-1.48c-.405-.117-.9.355-.9.355s-.622.615-.917 1.467l-.08.023s.096-1.489-.014-1.83c-.08-.17-.82-.155-.94.147s-.71 2.395-.75 3.271c0 0-1.155.954-2.165 1.11s-1.25-.457-1.25-.457s2.655-.518 2.56-2.65c-.095-2.134-2.21-1.344-2.45-1.169c-.23.17-1.385.667-1.745 2.678c-.01.068-.035.365-.035.365s-1.06.69-1.65.875c0 0 1.65-2.705-.366-3.937c-.57-.331-1.064-.025-1.359.257c.092-.115.204-.26.324-.423c.764-1.075 1.93-3.078 1.52-4.862c-.218-.921-.616-1.229-1.037-1.24m-.295 1.32c.082.008.15.106.193.334c.18.973-1.2 3.478-1.764 4.45c-.143.237-.236.384-.236.384c.003-.1.018-.232.043-.384c.172-1.075.777-3.165.777-3.165s.63-1.653.987-1.619M4.38 15.127a.3.3 0 0 1 .164.08c.365.341.23 1.038-.455 1.496c-.685.462-.994.37-.994.37c.035-1.364.842-2.027 1.285-1.946m18.74.094a.43.43 0 0 1 .283.146s.47.497-.064 1.242c-.535.745-1.32.692-1.32.692s-.15-.511.406-1.49c.275-.492.519-.603.695-.59m-5.824.232c.232.026.396.113.396.113s.81.606.18 2.217c-.63 1.607-2.164.953-2.164.953s-.175-.574.32-2.185c.31-1.008.882-1.14 1.268-1.098"></svg:path>`,
})
export class LaEmberIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEmpireIcon],svg[la-empire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.594 12.895a12 12 0 0 0-3.11-5.38A11.98 11.98 0 0 0 16 4c-1.074 0-2.117.14-3.11.406a12.04 12.04 0 0 0-5.378 3.11a11.996 11.996 0 0 0 0 16.964A11.96 11.96 0 0 0 16 28a11.97 11.97 0 0 0 8.484-3.516a11.96 11.96 0 0 0 3.106-5.375a12 12 0 0 0 .004-6.214M16.406 5.344A10.6 10.6 0 0 1 23.54 8.46a10.5 10.5 0 0 1 1.438 1.777l-.434.25a10.2 10.2 0 0 0-1.355-1.675l-.895.894a8.9 8.9 0 0 0-3.992-2.309l.328-1.222a10.2 10.2 0 0 0-2.223-.336zM19.602 16c0 .324-.047.637-.125.938l3.687.988a7.44 7.44 0 0 1-1.922 3.32l-2.695-2.7a3.6 3.6 0 0 1-1.617.93l.988 3.688a7.4 7.4 0 0 1-3.84 0l.988-3.687a3.56 3.56 0 0 1-1.617-.938l-2.699 2.7a7.4 7.4 0 0 1-1.914-3.325l3.684-.988a3.6 3.6 0 0 1-.122-.926c0-.32.043-.633.125-.93l-3.687-.988a7.4 7.4 0 0 1 1.918-3.324l2.7 2.699a3.55 3.55 0 0 1 1.612-.934l-.988-3.687a7.4 7.4 0 0 1 3.84 0l-.988 3.684a3.6 3.6 0 0 1 1.617.933l2.7-2.7a7.4 7.4 0 0 1 1.917 3.325l-3.687.988q.124.447.125.934M8.457 8.46a10.7 10.7 0 0 1 4.781-2.765a10.4 10.4 0 0 1 2.168-.343v.5a10 10 0 0 0-2.039.328l.328 1.222a8.9 8.9 0 0 0-3.992 2.309l-.894-.899c-.508.508-.961 1.07-1.352 1.676l-.434-.25a10.5 10.5 0 0 1 1.434-1.777zM6.52 20.896a10.7 10.7 0 0 1-.824-7.656c.199-.747.476-1.462.824-2.134l.433.25a10 10 0 0 0-.773 2.012l1.222.328a8.8 8.8 0 0 0-.3 2.305q.002 1.197.296 2.3l-1.222.329c.187.703.449 1.379.777 2.016zm8.886 5.753a10.64 10.64 0 0 1-6.953-3.113a10.8 10.8 0 0 1-1.433-1.773l.433-.25c.395.601.848 1.164 1.352 1.672l.898-.895a8.87 8.87 0 0 0 3.992 2.309l-.328 1.222c.656.176 1.34.29 2.04.328zm8.133-3.105a10.67 10.67 0 0 1-4.781 2.762c-.754.203-1.54.324-2.352.351v-.5a10.2 10.2 0 0 0 2.223-.332l-.328-1.226a8.87 8.87 0 0 0 3.992-2.305l.895.898c.507-.511.964-1.074 1.355-1.68l.434.25a10.5 10.5 0 0 1-1.438 1.782m1.941-2.648l-.433-.25c.324-.633.586-1.305.773-2.008l-1.222-.328a9 9 0 0 0 0-4.614l1.222-.328a10 10 0 0 0-.773-2.012l.433-.25a10.6 10.6 0 0 1 1.185 4.895c0 .957-.126 1.883-.36 2.766c-.2.746-.48 1.457-.825 2.129"></svg:path>`,
})
export class LaEmpireIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEnvelopeIcon],svg[la-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8v18h26V8zm4.313 2h17.375L16 15.781zM5 10.875l10.438 6.969l.562.343l.563-.343L27 10.875V24H5z"></svg:path>`,
})
export class LaEnvelopeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEnvelopeOpenIcon],svg[la-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3l-.531.344l-12 7.812L3 11.47V29h26V11.469l-.469-.313l-12-7.812zm0 2.375L26.188 12L16 18.594L5.812 12zM5 13.844l10.469 6.781l.531.344l.531-.344L27 13.844V27H5z"></svg:path>`,
})
export class LaEnvelopeOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEnvelopeOpenSolidIcon],svg[la-envelope-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3l-.531.344l-12 7.812L3 11.47V29h26V11.469l-.469-.313l-12-7.812zm0 2.375L26.188 12L16 18.594L5.812 12zM5 13.844l10.469 6.781l.531.344l.531-.344L27 13.844V27H5z"></svg:path>`,
})
export class LaEnvelopeOpenSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEnvelopeOpenTextIcon],svg[la-envelope-open-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5v1.9l-5.992 3.903V27h23.984V10.803L22 6.898V5zm2 2h8v7.682l-4 2.591l-4-2.591zm1 2v2h6V9zm-3 .285v4.102l-3.156-2.045zm12 0l3.156 2.057L22 13.387zM13 12v2h6v-2zm-6.992 1.184L16 19.656l9.992-6.472V25H6.008z"></svg:path>`,
})
export class LaEnvelopeOpenTextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEnvelopeSolidIcon],svg[la-envelope-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8v18h26V8zm4.313 2h17.375L16 15.781zM5 10.875l10.438 6.969l.562.343l.563-.343L27 10.875V24H5z"></svg:path>`,
})
export class LaEnvelopeSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEnvelopeSquareIcon],svg[la-envelope-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm2 3v12h14V10zm2.813 2h8.374L16 14.781zM11 13.875l4.438 2.969l.562.343l.563-.343L21 13.875V20H11z"></svg:path>`,
})
export class LaEnvelopeSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEnviraIcon],svg[la-envira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5c2.614 8.976 2.362 13.181 6.896 16.693c3.97 3.026 7.94 2.237 10.112 1.914L25.398 27h2l-3.98-3.98C23.393 20.613 29.01 5 5 5m3.084 2.002c.135.011.45.121 1.047.396c3.999 1.85 5.408 4.592 6.931 7.4c1.096 2.023 3.019 5.103 4.374 6.095c1.356.983 2.836 1.709-.288.398c-3.134-1.311-5.417-5.032-6.931-7.85c-1.164-2.162-2.163-4.153-4.336-5.613c0 0-1.203-.86-.797-.826"></svg:path>`,
})
export class LaEnviraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEqualsIcon],svg[la-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12v2h22v-2zm0 6v2h22v-2z"></svg:path>`,
})
export class LaEqualsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEraserIcon],svg[la-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.906 4.094c-.804 0-1.64.273-2.281.843v.032L16.594 5L4.906 16.594c-1.21 1.21-1.203 3.183-.062 4.468l.031.032h.031l6 6c1.211 1.21 3.184 1.203 4.469.062v-.031L27 15.5c1.266-1.266 1.305-3.29.094-4.5l-6-6a3.06 3.06 0 0 0-2.188-.906m-.031 2.031c.32 0 .617.086.813.281l6 6c.386.387.44 1.153-.094 1.688l-5.032 5.031l-7.656-7.656l5.063-5.031l.031-.032c.254-.21.57-.281.875-.281m-7.406 6.781l7.656 7.656l-5.094 5.094c-.011.008-.02.024-.031.032c-.516.43-1.309.378-1.688 0L6.345 19.75c-.016-.02-.016-.043-.032-.063c-.41-.515-.375-1.312 0-1.687z"></svg:path>`,
})
export class LaEraserIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laErlangIcon],svg[la-erlang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v18h4.32C4.26 22.35 3 18.84 3 15c0-3.08 1.15-5.88 3.05-8zm14 0c-.35 0-.68.04-1 .13c-1.73.44-3 2.01-3 3.87h8c0-2.21-1.79-4-4-4m9.66 0C27.13 9.27 28 12.03 28 15H12c0 3.51 1 6.56 3 8.03c.31.24.64.43 1 .58c.6.25 1.27.39 2 .39c2.97 0 5.57-1.82 6.94-4.53l2.02 1.01l1.56.78c-.7 1.4-1.62 2.66-2.73 3.74H30V7z"></svg:path>`,
})
export class LaErlangIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEthereumIcon],svg[la-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.953 3L6.93 15.553l9.074 4.46l8.93-4.464L17.053 3zM15 6.637v4.351l-3.914 1.776zm2 .04l3.818 6.08L17 11.005V6.678zm-2 6.507v4.107l-4.344-2.137zm2 .023l4.246 1.95L17 17.278v-4.072zM7 17.512v2.52l7.928 8.843h2.144L25 20.031v-2.52l-9 4.614zm4.521 4.566L15 23.861v2.096zm8.958 0L17 25.957v-2.096z"></svg:path>`,
})
export class LaEthereumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEthernetIcon],svg[la-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm7 4v3h-3v7h2v-2h2v2h2v-2h2v2h2v-7h-3v-3z"></svg:path>`,
})
export class LaEthernetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEtsyIcon],svg[la-etsy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.969 5c-5.258.604-14.198.3-17.826.184v1.252c2.4.454 2.946.37 2.996 1.767c.173 3.823.088 12.263 0 15.815c-.018 1.337-.764 1.291-2.996 1.73V27c7.298-.233 12.306-.211 18.095 0c.074-.925.516-4.621.696-6H23.7c-1.392 3.293-1.66 4.416-4.642 4.416h-4.383c-1.473 0-2.174-.603-2.174-1.879v-6.824c3.266 0 4.32.098 4.32.098C18.317 16.834 18.55 18.03 19 20h1c-.106-4.833-.216-3.023 0-8h-1c-.648 2.787-.69 3.117-2.152 3.164c0 0-1.498.147-4.346.123v-8.04c0-.308.024-.48.527-.48h6.729c1.708 0 2.12 2.187 2.637 4.233H23.6c.044-.887.22-4.368.369-6"></svg:path>`,
})
export class LaEtsyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEuroSignIcon],svg[la-euro-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4c-4.738 0-8.586 3.887-9.688 9H6v2h2.063c-.024.328-.063.664-.063 1s.04.672.063 1H6v2h2.313c1.101 5.113 4.949 9 9.687 9c2.707 0 5.168-1.305 6.938-3.344l-1.532-1.312C21.953 25.02 20.07 26 18 26c-3.504 0-6.59-2.898-7.625-7H19v-2h-8.969c-.027-.332-.031-.66-.031-1s.004-.668.031-1H19v-2h-8.625C11.41 8.898 14.496 6 18 6c2.07 0 3.953.98 5.406 2.656l1.532-1.312C23.168 5.304 20.706 4 18 4"></svg:path>`,
})
export class LaEuroSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEvernoteIcon],svg[la-evernote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.98 2.992a1 1 0 0 0-.543.18l-.074.055l-.008.007q-.034.03-.062.059l-.012.012l-6.988 6.988l-.004.004l-.012.015a1 1 0 0 0-.27.91c.013 1.352.266 3.903.891 6.36c.329 1.29.747 2.527 1.352 3.527c.574.953 1.43 1.793 2.574 1.875c.031.008 1.29.258 2.711.387c.719.067 1.477.102 2.184.047c.703-.055 1.383-.105 1.988-.711a1 1 0 0 0 .273-.512l.426-2.136c.032.039.043.082.074.117c.325.387.782.824 1.52.824h4v-2h-3.867c-.012-.008-.051-.031-.121-.113c-.149-.176-.344-.496-.508-.828c-.328-.664-.55-1.36-.55-1.36a.994.994 0 0 0-1.009-.695a1 1 0 0 0-.925.8l-.907 4.524c-.066.008-.16.067-.55.098c-.512.039-1.192.012-1.848-.047a27 27 0 0 1-2.52-.36A1 1 0 0 0 9 21c-.262 0-.605-.21-1.04-.922c-.429-.71-.823-1.808-1.124-2.988c-.504-1.977-.637-3.848-.7-5.09H12c.55 0 1-.45 1-1V5h2c.633 0 1.086.328 1.457.813C16.828 6.296 17 7.027 17 7a1 1 0 0 0 .969 1c.84.027 2.23.07 3.453.508c1.219.433 2.207 1.137 2.61 2.734c.437 1.754.714 6.035.468 9.692c-.121 1.828-.371 3.527-.734 4.671c-.18.57-.399 1-.563 1.211c-.168.211-.187.184-.203.184h-2.145a.84.84 0 0 1-.855-.855C20 25.5 20.5 25 21.145 25H22v-2h-.855A3.163 3.163 0 0 0 18 26.145c0 .27.105.527.297.714c.348 1.18 1.27 2.141 2.558 2.141H23c.734 0 1.371-.434 1.777-.95c.403-.515.668-1.132.895-1.843c.45-1.418.7-3.219.828-5.14c.254-3.844.031-8.063-.531-10.31c-.57-2.28-2.254-3.554-3.875-4.132c-1.38-.496-2.57-.5-3.453-.531c-.153-.496-.207-.989-.598-1.5C17.414 3.777 16.367 3 15 3h-2.855q-.082-.013-.165-.008M11 6.414V10H7.414zM21.809 14C20 14 19.98 15.91 20 16c1.809 0 2.34.66 2.71 1c.169-.23.903-3-.901-3"></svg:path>`,
})
export class LaEvernoteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laExchangeAltIcon],svg[la-exchange-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"></svg:path>`,
})
export class LaExchangeAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laExclamationIcon],svg[la-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v16h6V4zm2 2h2v12h-2zm-2 16v6h6v-6zm2 2h2v2h-2z"></svg:path>`,
})
export class LaExclamationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laExclamationCircleIcon],svg[la-exclamation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m-1 4v8h2v-8zm0 10v2h2v-2z"></svg:path>`,
})
export class LaExclamationCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laExclamationTriangleIcon],svg[la-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3.219l-.875 1.5l-12 20.781l-.844 1.5H29.72l-.844-1.5l-12-20.781zm0 4L26.25 25H5.75zM15 14v6h2v-6zm0 7v2h2v-2z"></svg:path>`,
})
export class LaExclamationTriangleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laExpandIcon],svg[la-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v9h2V6h7V4zm15 0v2h7v7h2V4zM4 19v9h9v-2H6v-7zm22 0v7h-7v2h9v-9z"></svg:path>`,
})
export class LaExpandIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laExpandArrowsAltIcon],svg[la-expand-arrows-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v9h2V7.437L14.563 16L6 24.563V19H4v9h9v-2H7.437L16 17.437L24.563 26H19v2h9v-9h-2v5.563L17.437 16L26 7.437V13h2V4h-9v2h5.563L16 14.563L7.437 6H13V4z"></svg:path>`,
})
export class LaExpandArrowsAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laExpeditedsslIcon],svg[la-expeditedssl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16S10.465 6 16 6m.031 1.844a4.505 4.505 0 0 0-4.406 4.5v1.219c0 .21.164.374.375.374h.938a.37.37 0 0 0 .374-.374v-1.22c0-1.523 1.168-2.82 2.688-2.874c1.598-.059 2.938 1.226 2.938 2.812v1.281c0 .211.164.376.375.376h.906a.37.37 0 0 0 .375-.376v-1.156c0-2.515-2.047-4.61-4.563-4.562m-5.593 6.5c-.461 0-.844.351-.844.812v6.469c0 .46.383.813.844.813H21.75c.46 0 .844-.352.844-.813v-6.469c0-.46-.383-.812-.844-.812zm.156.812h.375a.19.19 0 0 1 .187.188v6.125a.19.19 0 0 1-.187.187h-.375a.19.19 0 0 1-.188-.187v-6.125a.19.19 0 0 1 .188-.188m5.469.813c.878 0 1.593.715 1.593 1.594a1.58 1.58 0 0 1-.781 1.375v1.5c0 .218-.188.375-.406.375h-.813c-.219 0-.406-.157-.406-.375v-1.5a1.58 1.58 0 0 1-.781-1.375c0-.88.715-1.594 1.594-1.594"></svg:path>`,
})
export class LaExpeditedsslIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laExternalLinkAltIcon],svg[la-external-link-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5v2h5.563L11.28 19.281l1.438 1.438L25 8.437V14h2V5zM5 9v18h18V14l-2 2v9H7V11h9l2-2z"></svg:path>`,
})
export class LaExternalLinkAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laExternalLinkSquareAltIcon],svg[la-external-link-square-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm6 3v2h5.563L9.28 21.281l1.438 1.438L20 13.437V19h2v-9z"></svg:path>`,
})
export class LaExternalLinkSquareAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEyeIcon],svg[la-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8C7.664 8 1.25 15.344 1.25 15.344L.656 16l.594.656s5.848 6.668 13.625 7.282c.371.046.742.062 1.125.062s.754-.016 1.125-.063c7.777-.613 13.625-7.28 13.625-7.28l.594-.657l-.594-.656S24.336 8 16 8m0 2c2.203 0 4.234.602 6 1.406A6.9 6.9 0 0 1 23 15a6.995 6.995 0 0 1-6.219 6.969c-.02.004-.043-.004-.062 0c-.239.011-.477.031-.719.031c-.266 0-.523-.016-.781-.031A6.995 6.995 0 0 1 9 15c0-1.305.352-2.52.969-3.563h-.031C11.717 10.617 13.773 10 16 10m0 2a3 3 0 1 0 .002 6.002A3 3 0 0 0 16 12m-8.75.938A9 9 0 0 0 7 15c0 1.754.5 3.395 1.375 4.781A23.2 23.2 0 0 1 3.531 16a24 24 0 0 1 3.719-3.063zm17.5 0A24 24 0 0 1 28.469 16a23.2 23.2 0 0 1-4.844 3.781A8.93 8.93 0 0 0 25 15c0-.715-.094-1.398-.25-2.063z"></svg:path>`,
})
export class LaEyeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEyeDropperIcon],svg[la-eye-dropper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.656 3.031c-1.11 0-2.222.41-3.062 1.25l-2.782 2.813l-1-1L16.407 7.5l1 1l-9.5 9.5c-1.039 1.04-1.633 1.793-2 2.469a5.2 5.2 0 0 0-.562 1.687c-.067.403-.102.621-.344 1.063s-.734 1.078-1.719 2.062L2.594 26l.687.719l2 2l.719.687l.719-.687c.96-.961 1.574-1.426 2-1.657c.426-.23.652-.273 1.062-.343s1-.184 1.688-.563s1.469-1 2.531-2.062l9.5-9.5l1 1l1.406-1.406l-1-1l2.813-2.782c1.68-1.68 1.68-4.445 0-6.125a4.3 4.3 0 0 0-3.063-1.25m0 2c.59 0 1.164.227 1.625.688a2.3 2.3 0 0 1 0 3.281L23.5 11.781L20.219 8.5L23 5.719a2.34 2.34 0 0 1 1.656-.688m-5.843 4.875l3.28 3.281l-9.5 9.5c-.984.985-1.652 1.477-2.093 1.72c-.441.241-.66.277-1.063.343s-.98.164-1.656.531c-.46.25-1.086.848-1.687 1.375l-.75-.75c.547-.617 1.148-1.25 1.406-1.718c.379-.688.492-1.31.563-1.72s.113-.605.343-1.03s.696-1.07 1.657-2.032z"></svg:path>`,
})
export class LaEyeDropperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEyeSlashIcon],svg[la-eye-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.719 2.281L2.28 3.72L8.5 9.906L19.594 21l1.906 1.938l6.781 6.78l1.438-1.437l-6.219-6.218c4.234-2.098 7.074-5.211 7.25-5.407l.594-.656l-.594-.656C30.48 15.043 24.086 8 16 8c-1.957 0-3.805.43-5.5 1.063zM16 10c2.152 0 4.188.605 6 1.438A6.9 6.9 0 0 1 23 15a6.97 6.97 0 0 1-1.844 4.719l-2.843-2.844c.417-.512.687-1.16.687-1.875a3 3 0 0 0-3-3c-.715 0-1.363.27-1.875.688l-2.031-2.032C13.336 10.273 14.637 10 16 10m-9.313.906c-3.207 1.973-5.289 4.27-5.437 4.438L.656 16l.594.656c.258.29 6.18 6.77 13.813 7.282c.308.03.62.062.937.062a9 9 0 0 0 .938-.063a15 15 0 0 0 2.406-.343l-1.782-1.782A7 7 0 0 1 16 22c-3.86 0-7-3.14-7-7c0-.531.07-1.05.188-1.563zm.563 2.031A9 9 0 0 0 7 15a8.9 8.9 0 0 0 1.344 4.719A25.8 25.8 0 0 1 3.406 16a26 26 0 0 1 3.844-3.063m17.5 0A26.3 26.3 0 0 1 28.594 16c-.899.867-2.676 2.438-4.969 3.75A9 9 0 0 0 25 15c0-.7-.09-1.39-.25-2.063"></svg:path>`,
})
export class LaEyeSlashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEyeSlashSolidIcon],svg[la-eye-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.719 2.281L2.28 3.72l6.19 6.155l12.969 12.969l6.843 6.875l1.438-1.438l-6.344-6.343c4.098-2.086 7.152-5.028 7.344-5.22l.656-.655l-.625-.72C30.492 15.044 24.395 8 16 8c-1.992 0-3.848.418-5.531 1.031zM16 10c2.164 0 4.16.555 5.938 1.344C22.613 12.445 23 13.699 23 15c0 1.816-.7 3.469-1.844 4.719l-2.843-2.844A3 3 0 0 0 19 15c0-1.652-1.348-3-3-3a3 3 0 0 0-1.875.688l-2.063-2.063C13.302 10.254 14.61 10 16 10m-9.375.875c-3.238 1.988-5.23 4.297-5.375 4.469l-.625.719l.656.656c.285.285 6.817 6.664 13.781 7.218h.063c.29.024.586.063.875.063s.586-.04.875-.063h.063a14 14 0 0 0 2.375-.406l-1.72-1.718c-.25.058-.519.097-.78.125l-.125.03c-.47.04-.91.04-1.375 0l-.094-.03A6.98 6.98 0 0 1 9 15c0-.535.066-1.05.188-1.563zm.656 1.969A9 9 0 0 0 7 15c0 1.613.438 3.121 1.188 4.438a32.6 32.6 0 0 1-4.782-3.5a24.5 24.5 0 0 1 3.875-3.094m17.438 0a23.8 23.8 0 0 1 3.843 3.125a32.3 32.3 0 0 1-4.75 3.469A8.9 8.9 0 0 0 25 15a9 9 0 0 0-.281-2.156M16 14c.55 0 1 .45 1 1c0 .164-.055.3-.125.438l-1.313-1.313A.9.9 0 0 1 16 14"></svg:path>`,
})
export class LaEyeSlashSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laEyeSolidIcon],svg[la-eye-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8C7.664 8 1.25 15.344 1.25 15.344L.656 16l.594.656s5.848 6.668 13.625 7.282c.371.046.742.062 1.125.062s.754-.016 1.125-.063c7.777-.613 13.625-7.28 13.625-7.28l.594-.657l-.594-.656S24.336 8 16 8m0 2c2.203 0 4.234.602 6 1.406A6.9 6.9 0 0 1 23 15a6.995 6.995 0 0 1-6.219 6.969c-.02.004-.043-.004-.062 0c-.239.011-.477.031-.719.031c-.266 0-.523-.016-.781-.031A6.995 6.995 0 0 1 9 15c0-1.305.352-2.52.969-3.563h-.031C11.717 10.617 13.773 10 16 10m0 2a3 3 0 1 0 .002 6.002A3 3 0 0 0 16 12m-8.75.938A9 9 0 0 0 7 15c0 1.754.5 3.395 1.375 4.781A23.2 23.2 0 0 1 3.531 16a24 24 0 0 1 3.719-3.063zm17.5 0A24 24 0 0 1 28.469 16a23.2 23.2 0 0 1-4.844 3.781A8.93 8.93 0 0 0 25 15c0-.715-.094-1.398-.25-2.063z"></svg:path>`,
})
export class LaEyeSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFacebookIcon],svg[la-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.384 4 4 9.384 4 16s5.384 12 12 12s12-5.384 12-12S22.616 4 16 4m0 2c5.535 0 10 4.465 10 10a9.98 9.98 0 0 1-8.512 9.879v-6.963h2.848l.447-2.893h-3.295v-1.58c0-1.2.395-2.267 1.518-2.267h1.805V9.652c-.317-.043-.988-.136-2.256-.136c-2.648 0-4.2 1.398-4.2 4.584v1.923h-2.722v2.893h2.722v6.938A9.975 9.975 0 0 1 6 16c0-5.535 4.465-10 10-10"></svg:path>`,
})
export class LaFacebookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFacebookFIcon],svg[la-facebook-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.254 2C15.312 2 13 4.082 13 8.826V13H8v5h5v12h5V18h4l1-5h-5V9.672C18 7.885 18.583 7 20.26 7H23V2.205C22.526 2.141 21.145 2 19.254 2"></svg:path>`,
})
export class LaFacebookFIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFacebookMessengerIcon],svg[la-facebook-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.41 4 4 9.137 4 15.5c0 3.39 1.57 6.402 4 8.5v4.625l4.438-2.219c1.128.34 2.308.594 3.562.594c6.59 0 12-5.137 12-11.5S22.59 4 16 4m0 2c5.559 0 10 4.266 10 9.5S21.559 25 16 25c-1.195 0-2.336-.227-3.406-.594l-.406-.125L10 25.375v-2.25l-.375-.313C7.406 21.063 6 18.442 6 15.5C6 10.266 10.441 6 16 6m-1.125 6.344l-6.031 6.375l5.406-3l2.875 3.094l5.969-6.47l-5.282 2.97z"></svg:path>`,
})
export class LaFacebookMessengerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFacebookSquareIcon],svg[la-facebook-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5c-1.094 0-2 .906-2 2v18c0 1.094.906 2 2 2h18c1.094 0 2-.906 2-2V7c0-1.094-.906-2-2-2zm0 2h18v18h-5.188v-6.75h2.594l.375-3h-2.968v-1.938c0-.874.214-1.468 1.468-1.468h1.625V9.125c-.277-.035-1.238-.094-2.343-.094c-2.305 0-3.875 1.387-3.875 3.969v2.25h-2.625v3h2.624V25H7z"></svg:path>`,
})
export class LaFacebookSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFanIcon],svg[la-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C10.488 4 6 8.488 6 14s4.488 10 10 10s10-4.488 10-10S21.512 4 16 4m0 2a7.977 7.977 0 0 1 7.969 7.438a4.8 4.8 0 0 0-2-.813a7 7 0 0 0-1.313-.094a7.3 7.3 0 0 0-1.906.281a3.02 3.02 0 0 0-3.375-1.75c-.008-.007-.023.008-.031 0c-.649-.542-1.34-1.382-1.656-2.218c-.211-.559-.258-1.074-.157-1.5c.098-.418.313-.813.875-1.188A8 8 0 0 1 16 6m-4.5 1.406a4.8 4.8 0 0 0 .313 2.125a7.4 7.4 0 0 0 1.78 2.688a3 3 0 0 0 .219 3.844c-.16.796-.539 1.765-1.093 2.437c-.383.465-.824.777-1.25.906c-.426.13-.867.137-1.5-.187C8.754 17.816 8 16.008 8 14c0-2.754 1.395-5.156 3.5-6.594M16 13c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m4.688 1.563c.32-.012.644.011.937.062c.586.102 1.078.316 1.406.625c.309.293.512.668.563 1.313A8.01 8.01 0 0 1 16 22c-1.27 0-2.469-.29-3.531-.813c.715-.312 1.308-.832 1.781-1.406a7.5 7.5 0 0 0 1.438-2.812c.105.011.203.031.312.031c1.313 0 2.41-.879 2.813-2.063a6 6 0 0 1 1.875-.374M15 25v1H9v2h14v-2h-6v-1z"></svg:path>`,
})
export class LaFanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFantasyFlightGamesIcon],svg[la-fantasy-flight-games-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2L2 16l14 14l14-14zm0 2.01L28 16L16 28L4 16zM16 6L6 16l10 10l10-10zm.31 4.01a3.6 3.6 0 0 1 1.891.728c1.11.827 2.805 2.664 2.813 2.664c.025.033.05.132.025.157c-.513.538-1.026 1.067-1.514 1.572c-1.547-1.464-1.837-1.738-2.2-1.994c-.804-.571-1.87-.455-2.573.232c-.099.1-.083.157 0 .24c.132.141 1.273 1.281 1.588 1.621c-.538.53-1.067 1.043-1.613 1.573l-1.655-1.729c-.968.96-1.886 1.863-2.797 2.764c-.62-.612-1.242-1.234-1.863-1.846c.091-.09.538-.554 4.37-4.41c1.168-1.179 2.399-1.656 3.529-1.572zm5.424 4.18c.621.603 1.234 1.2 1.854 1.812c-.91.943-3.698 3.74-4.55 4.592c-1.607 1.596-3.535 1.72-4.843.926c-1-.612-1.778-1.458-3.3-3.03c.546-.563 1.076-1.098 1.605-1.636c1.489 1.44 1.672 1.62 2.02 1.902c.836.662 1.926.613 2.687-.082c.165-.157.165-.166 0-.332q-.722-.722-1.43-1.455c-.066-.058-.14-.108-.04-.207q.732-.732 1.454-1.465c.017-.008.034-.018.092-.05c.554.586 1.125 1.176 1.68 1.755c.95-.935 1.87-1.838 2.771-2.73"></svg:path>`,
})
export class LaFantasyFlightGamesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFastBackwardIcon],svg[la-fast-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 5l-1.594 1.188l-12 9L2.344 16l1.062.813l12 9L17 27v-7.375l8.406 6.188L27 26.968V5.03l-1.594 1.157L17 12.375zm8 3.969V23.03l-8.406-6.187L15.469 16l1.125-.844zM15 9v14l-9.313-7z"></svg:path>`,
})
export class LaFastBackwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFastForwardIcon],svg[la-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5v7.375L6.594 6.187L5 5.032V26.97l1.594-1.157L15 19.625V27l1.594-1.188l12-9L29.656 16l-1.062-.813l-12-9zM7 8.969l8.406 6.187l1.125.844l-1.125.844L7 23.03zM17 9l9.313 7L17 23z"></svg:path>`,
})
export class LaFastForwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFaxIcon],svg[la-fax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5v5h-2V8H4v18h2v1c0 1.645 1.355 3 3 3s3-1.355 3-3v-1h16V10h-4V5zm2 2h8v5h-8zm-8 3h2v14H6zm4 2h2v2h12v-2h2v12H10zm3 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM8 26h2v1c0 .555-.445 1-1 1s-1-.445-1-1z"></svg:path>`,
})
export class LaFaxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFeatherIcon],svg[la-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 4a6.42 6.42 0 0 0-4.703 2.021l-8.16 8.155A8.94 8.94 0 0 0 6 20.539V22l2.027-2.027a6.95 6.95 0 0 1 2.024-4.383l8.18-8.176A4.46 4.46 0 0 1 21.5 6c2.481 0 4.5 2.019 4.5 4.5c0 1.246-.502 2.406-1.436 3.29l-2.03 2.032L19 17h2.355l-3.818 3.82L14 22h2.354a6.95 6.95 0 0 1-4.893 2H9.414l9.293-9.293l-1.414-1.414L4 26.586L5.414 28l2-2h4.047a8.93 8.93 0 0 0 6.363-2.637l8.133-8.14A6.44 6.44 0 0 0 28 10.5C28 6.916 25.084 4 21.5 4"></svg:path>`,
})
export class LaFeatherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFeatherAltIcon],svg[la-feather-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 4c-8.803 0-13.201 4.795-15.314 7.1l-3.05 3.076A8.93 8.93 0 0 0 6 20.539V22l2.027-2.027a6.94 6.94 0 0 1 2.02-4.381l3.113-3.14c1.836-2.003 5.569-6.074 12.815-6.429c-.222 4.522-1.89 7.674-3.598 9.852L19 17h2.418a30 30 0 0 1-1.87 1.84l-.98.97L15 21h2.367l-.957.947a6.95 6.95 0 0 1-4.95 2.051H9.417l9.291-9.291l-1.414-1.414L4 26.586L5.414 28l2.002-2.002h4.045a8.94 8.94 0 0 0 6.367-2.64l3.07-3.046C23.203 18.203 28 13.805 28 5V4z"></svg:path>`,
})
export class LaFeatherAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFedexIcon],svg[la-fedex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11v3.95h-.08c-.48-.576-1.075-.774-1.77-.774c-1.42 0-2.49 1.014-2.865 2.347c-.9-3.107-4.87-3.013-6.096-.732v-1.266H2.45v-1.37h3v-2.15H0v9.643h2.45v-4.052h2.445a4 4 0 0 0-.116.953c0 3.823 5.13 4.778 6.51 1.238h-2.1c-.735 1.093-2.289.465-2.289-.764h4.276C11.36 19.618 12.545 21 14.18 21a2.07 2.07 0 0 0 1.746-.973h.023v.621h10.612l1.103-1.306l1.115 1.306H32l-2.7-3.164l2.665-3.132h-3.12L27.76 15.65l-1.125-1.296h-5.936v-.838h2.807V11zm2.305.467h4.75v1.578H20.25v1.773h2.775v1.47h-2.804v2.339h2.804v1.547h-4.72zm5.23 3.049l2.535 2.98l-2.535 2.98v-2.384H20.73v-1.276h2.805zm.914.302h1.987l1.33 1.532l1.279-1.532h1.926l-2.272 2.666L31 20.174h-2.025L27.66 18.63l-1.305 1.543H24.45l2.281-2.678l-2.28-2.678zM8.152 15.6c.513.004 1.017.348 1.137 1.017H6.965c.152-.688.674-1.022 1.187-1.017m6.483.29c1.63 0 1.725 3.286 0 3.286c-1.73 0-1.7-3.285 0-3.285z"></svg:path>`,
})
export class LaFedexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFedoraIcon],svg[la-fedora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.047 3c-7.173-.017-13 5.786-13.024 12.965L3 25.85a3.11 3.11 0 0 0 3.09 3.127h.017l9.87.023c7.172.017 13.006-5.786 13.023-12.965S23.22 3.017 16.047 3m2.871 5.012h.012a4.2 4.2 0 0 1 .978.111c.541.088.961.576.961 1.162c0 .75-.72 1.347-1.467 1.158c-1.326-.286-3.19.698-3.195 2.659l-.004 2.275a.433.433 0 0 0 .43.435h.002l1.627.004c1.573.01 1.568 2.396-.01 2.391l-2.063-.004l-.005 2.711c-.01 3.355-3.117 5.606-6.084 4.982c-.276 0-.963-.42-.963-1.171a1.205 1.205 0 0 1 1.185-1.192c.305 0 .305.076.76.076a2.71 2.71 0 0 0 2.717-2.697v-.008l.004-2.275c0-.218-.219-.436-.432-.436l-1.627-.006c-1.578-.005-1.572-2.391.006-2.386l2.063.006l.003-2.711a5.093 5.093 0 0 1 5.102-5.084m2 .412a5.14 5.14 0 0 1 2.832 3.09l-2.629-2.645a1.3 1.3 0 0 0-.203-.445m.281.795l2.672 2.715q.13.535.137 1.084l-2.992-3.032c.11-.228.183-.444.183-.691zm-.3.949l3.113 3.133q-.018.406-.112.803l-3.48-3.49q.287-.173.478-.446zm.382 1.621l2.57 2.584a6 6 0 0 1-.228.693l-1.998-2.01a2.8 2.8 0 0 0-.344-1.267m.328 1.572l1.912 1.928a4 4 0 0 1-.324.58l-1.761-1.771c.098-.234.156-.484.173-.737m-.26.955l1.733 1.739a7 7 0 0 1-.416.508l-1.69-1.696q.218-.255.374-.55zm-.523.711l1.69 1.696a6 6 0 0 1-.489.435l-1.709-1.719q.277-.178.508-.412m-.726.518l1.752 1.738a8 8 0 0 1-.575.35l-1.84-1.86a2.4 2.4 0 0 0 .663-.228m-9.489.281a2.4 2.4 0 0 0-.373.553l-.41-.412a4 4 0 0 1 .783-.14zm-1.021.203l.57.576l-.043.387c.001.207.04.413.115.606L8.926 16.28q.321-.156.664-.252zm-.881.36l1.85 1.857c-.237.044-.468.12-.684.229l-1.709-1.739q.261-.19.543-.347m11.053.029l1.306 1.316a3.6 3.6 0 0 1-.664.256l-.57-.576l.045-.393a1.7 1.7 0 0 0-.117-.603m-11.79.443l1.71 1.72q-.275.18-.508.411l-1.69-1.676q.22-.252.489-.455zm-.644.596l1.692 1.695a2.8 2.8 0 0 0-.374.551l-1.734-1.736c.135-.184.276-.35.416-.51m12.428.186l.412.41a5 5 0 0 1-.78.14a1.7 1.7 0 0 0 .368-.55m-12.96.507l1.763 1.772a2.3 2.3 0 0 0-.174.736L6.473 18.73a5 5 0 0 1 .324-.58zm-.425.79l1.998 2.023c.016.44.126.873.324 1.267l-2.55-2.59c.068-.236.141-.464.228-.7m-.281.953l3.496 3.51a1.8 1.8 0 0 0-.48.421l-3.118-3.107q.007-.417.102-.824m-.102 1.128l2.996 3.01a1.5 1.5 0 0 0-.173.694v.052L6.129 22.08a4.2 4.2 0 0 1-.14-1.059zm.256 1.487l2.629 2.642q.063.241.203.446a5.14 5.14 0 0 1-2.832-3.088"></svg:path>`,
})
export class LaFedoraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFemaleIcon],svg[la-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-2.2 0-4 1.8-4 4c0 1.129.488 2.145 1.25 2.875a4.5 4.5 0 0 0-.656.563c-.84.89-1.364 2.078-1.594 3.374h.031l-2 10L8.781 24H13v6h2v-6h2v6h2v-6h4.219l-.25-1.188l-2-10c-.23-1.234-.73-2.41-1.563-3.312a5 5 0 0 0-.687-.625C19.492 8.145 20 7.137 20 6c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m0 6c.828 0 1.422.316 1.938.875c.515.559.921 1.387 1.093 2.313L20.781 22H11.22l1.75-8.813H13c.176-1 .559-1.84 1.063-2.374c.503-.536 1.09-.813 1.937-.813"></svg:path>`,
})
export class LaFemaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFighterJetIcon],svg[la-fighter-jet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.875 4l1 9h-.844l-1.719-2.563l-.28-.437h-4.25l.25 1.188L3 16l-.969 4.813L1.781 22h4.25l.282-.438L8.03 19h.844l-1 9h3.531l.313-.281L20.438 19H26c1.156 0 1.895-.672 2.563-1.219c.667-.547 1.156-1.093 1.156-1.093l.656-.688l-.656-.688s-.489-.546-1.157-1.093C27.895 13.672 27.157 13 26 13h-5.563L11.72 4.281L11.406 4zm2.25 2h.438l8.718 8.719l.313.281H26c-.05 0 .727.328 1.281.781c.137.114.133.114.25.219c-.117.105-.113.105-.25.219c-.554.453-1.332.781-1.281.781h-6.406l-.313.281L10.563 26h-.438l1-9H6.937l-.28.438L4.936 20H4.22l.75-3.813l.06-.187l-.062-.188L4.219 12h.718l1.72 2.563l.28.437h4.188zM16 7l2 2h2l1-1l-1-1zm2 16l-2 2h4l1-1l-1-1z"></svg:path>`,
})
export class LaFighterJetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFigmaIcon],svg[la-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 1A5.506 5.506 0 0 0 7 6.5c0 1.658.74 3.143 1.904 4.152A5.5 5.5 0 0 0 6 15.5c0 1.86.932 3.504 2.35 4.5A5.5 5.5 0 0 0 6 24.5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5V12h3.5c3.033 0 5.5-2.467 5.5-5.5S23.533 1 20.5 1zm0 2h8C22.43 3 24 4.57 24 6.5S22.43 10 20.5 10h-8C10.57 10 9 8.43 9 6.5S10.57 3 12.5 3m-1 9H15v7h-3.5C9.57 19 8 17.43 8 15.5S9.57 12 11.5 12m9.5 0a4 4 0 0 0 0 8a4 4 0 0 0 0-8m-9.5 9H15v3.5c0 1.93-1.57 3.5-3.5 3.5S8 26.43 8 24.5S9.57 21 11.5 21"></svg:path>`,
})
export class LaFigmaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileIcon],svg[la-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20z"></svg:path>`,
})
export class LaFileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileAltIcon],svg[la-file-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zM11 13v2h10v-2zm0 4v2h10v-2zm0 4v2h10v-2z"></svg:path>`,
})
export class LaFileAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileAltSolidIcon],svg[la-file-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zM11 13v2h10v-2zm0 4v2h10v-2zm0 4v2h10v-2z"></svg:path>`,
})
export class LaFileAltSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileArchiveIcon],svg[la-file-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h7v1h2V5h7v22H8zm7 2v2h2V7zm0 3v2h2v-2zm0 3v2.188c-1.156.417-2 1.519-2 2.812c0 1.645 1.355 3 3 3s3-1.355 3-3c0-1.293-.844-2.395-2-2.813V13zm1 4c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaFileArchiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileArchiveSolidIcon],svg[la-file-archive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h7v1h2V5h7v22H8zm7 2v2h2V7zm0 3v2h2v-2zm0 3v2.188c-1.156.417-2 1.519-2 2.812c0 1.645 1.355 3 3 3s3-1.355 3-3c0-1.293-.844-2.395-2-2.813V13zm1 4c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaFileArchiveSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileAudioIcon],svg[la-file-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm8 4.719v6.469A3 3 0 0 0 15 16c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3v-6.719l2.75.688l.5-1.938zM15 18c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaFileAudioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileAudioSolidIcon],svg[la-file-audio-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V3zm2 2h16v22H8zm8 4.719v6.469A3 3 0 0 0 15 16c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3v-6.719l2.75.688l.5-1.938zM15 18c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"></svg:path>`,
})
export class LaFileAudioSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[laFileCodeIcon],svg[la-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zM16 13l-2 12h2l2-12zm-3.781 2.375l-2.5 3l-.531.625l.53.625l2.5 3l1.563-1.25L11.812 19l1.97-2.375zm7.562 0l-1.562 1.25L20.187 19l-1.968 2.375l1.562 1.25l2.5-3l.532-.625l-.532-.625z"></svg:path>`,
})
export class LaFileCodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
